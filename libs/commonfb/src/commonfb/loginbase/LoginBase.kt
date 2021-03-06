package commonfb.loginbase

import common.obj
import commonfb.UserState
import commonfb.runUserState
import commonui.*
import commonui.topandcontent.ProgressTC
import commonui.widget.*
import firebase.User
import firebase.app.App
import firebase.auth.Auth
import firebase.firestore.Firestore
import kotlinx.coroutines.await
import kotlinx.coroutines.launch
import org.w3c.dom.HTMLElement
import rx.Var
import commonui.view.*

interface LoginBasePath {
    val loginBase: LoginBase
}

interface UserStateView: IView<TopAndContent> {
    val userState: UserState
}

class UnkownUser(
    parent: HasKillsRouting<TopAndContent>
): ProgressTC(parent), UserStateView {
    override val userState = UserState.Unknown
}


abstract class LoginBase(
    parent: HasKillsRouting<HTMLElement>
): SimpleView<HTMLElement>(parent), LoginBasePath {
    @Suppress("LeakingThis")
    override val loginBase = this

    class Slots {
        lateinit var top: Hole
        lateinit var main: Hole
        lateinit var toasts: (ToastFn) -> Unit
    }

    val slots = Slots()

    override val rawView = ui()

    val contentHole = HoleT<TopAndContent>(
        prepare = {
            topbar.apply(slots.top.prepareOrNull)
            content.apply(slots.main.prepareOrNull)
        },
        assign = { cv ->
            slots.top %= cv?.topbar
            slots.main %= cv?.content
        }
    )

    @Suppress("LeakingThis")
    val hole = contentHole.routing.of<UserStateView> {
        UnkownUser(this)
    }


    suspend fun switchToUnkownUser() {
        hole.content %= UnkownUser(hole)
    }

    fun reportError(d: dynamic) {
        slots.toasts {
            danger("Sign in failed: ${d?.message}")
        }
    }

    suspend fun Auth.start(
        loggedInView: suspend (User) -> UserStateView,
        notLoggedInView: suspend () -> UserStateView
    ) {
        globalStatus %= "Checking user..."
        runUserState(this).forEach { st ->
            launch {
                when (st) {
                    is UserState.LoggedIn -> {
                        globalStatus %= "Logged in."
                        hole.content %= loggedInView(st.user)
                    }
                    is UserState.NotLoggedIn -> {
                        globalStatus %= "Logged out."
                        hole.content %= notLoggedInView()
                    }
                    else -> {
                        switchToUnkownUser()
                    }
                }
            }
        }
    }

}

suspend fun Firestore.enablePersistenceAndWait() {
    globalStatus %= "Enabling persistence..."
    enablePersistence(
        obj {
            experimentalTabSynchronization = true
        }
    ).await()
}

suspend fun Firestore.disableNetworkAndWait() {
    globalStatus %= "Switching to offline data..."
    disableNetwork().await()
}
