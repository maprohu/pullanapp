package music.loggedin

import commonfb.callable
import commonlib.commonlib.customToken
import commonlib.private
import commonui.widget.*
import firebase.FBApi
import firebase.User
import firebase.app.App
import firebase.firestore.*
import firebase.functions.Functions
import firebase.storage.Storage
import kotlinx.coroutines.await
import kotlinx.coroutines.launch
import music.UserSongs
import music.boot.Boot
import music.boot.BootPath
import music.common.MusicApi
import music.content.Content
import music.data.SongInfoSource
import music.database.Database
import musiclib.*
import rx.Var

open class LoggedInPath(
    val loggedIn: LoggedIn
): BootPath(loggedIn.from)

class LoggedIn(
    val from: Boot,
    val user: User,
    val app: App,
    val db: Firestore,
    functions: Functions,
    val storage: Storage,
    override val songInfoSource: SongInfoSource,
    override val userSongs: UserSongs
): ForwardBase<TopAndContent>(from), Content, MusicApi {
    val path = LoggedInPath(this)

    val storageRef = storage.ref("music/files")

    val userSongSet by lazy {
        musicLib.app.private.doc(user.uid).usersongs.query(db).toRxSetWithLookup(kills) { UserSong() }
    }

    val storageSet by lazy {
        musicLib.app.storage.query(db).toRxSetWithLookup(kills) { StoreState() }
    }

    val uploadedSet by lazy {
        storageSet.set.filtered { it.uploaded.initial().getOrDefault(false) }
    }

    val storageIds = storageSet.set.ids

    val uploadingIds = storageSet.set.filtered {
        !it.uploaded.initial().getOrDefault(true)
    }.ids


    suspend fun database() {
        forward %= Database(this)
    }


    val signinWithCustomToken = run {
        var signedIn = false

        suspend {
            if (!signedIn) {
                customToken.callable(functions).call(Unit)?.let { token ->
                    app.auth().signInWithCustomToken(token).await()
                }
                signedIn = true
            }
        }
    }

    suspend fun <T> privileged(fn: suspend () -> T): T {
        signinWithCustomToken()
        return fn()
    }

    init {
        fun log(vararg o: Any?) {
            console.log(*o)
        }



    }

    fun signOut() {
        app.auth().signOut()
    }

    val sync = Sync(this)

    override val rawView = ui()
}