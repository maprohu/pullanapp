package music

import common.EmitterIface
import common.combine
import common.combineAnd
import commonshr.SetMove
import firebase.ids
import killable.Killable
import killable.Killables

class TransferSongs(
    userSongsDB: UserSongsDB,
    storageDB: SongStorageDB,
    ks: Killables
) {

    val upload = combine(
        ks,
        userSongsDB.like.ids,
        storageDB.uploaded.ids,
        LocalSongs.emitter
    ) { like, up, local -> like && !up && local }

    val download = combine(
        ks,
        userSongsDB.like.ids,
        storageDB.uploaded.ids,
        LocalSongs.emitter
    ) { like, up, local -> like && up && !local }


}