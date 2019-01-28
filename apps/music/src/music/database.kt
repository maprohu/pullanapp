package music

import bootstrap.*
import commonui.RootPanel
import commonui.faButton
import commonui.screenLayout
import commonui.showClosable
import domx.*
import fontawesome.*
import indexeddb.*
import killable.Killables
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import musiclib.UserSongState
import org.w3c.files.File
import kotlin.dom.removeClass

fun MusicCtx.database(
    panel: RootPanel,
    killables: Killables,
    close: () -> Unit
) {
    panel.newRoot {
        fun redisplay() {
            panel.setRoot(this)
        }
        screenLayout(killables) {
            top {
                backButton(close)
                middleTitle {
                    innerText = "Database"
                }

                right {
                    faButton(Fa.chevronDown) {
                        cls {
                            m1
                            btnSecondary
                        }
                        dataToggleDropdown()
                    }
                    div {
                        val menu = this
                        cls {
                            dropdownMenu
                            dropdownMenuRight
                        }
                        dropdownItemAnchor {
                            icon.cls.fa.fileImport
                            text.innerText = "Import MP3s"
                            anchor {
                                clickEvent {
                                    showClosable(
                                        killables,
                                        { ks, cl -> import(panel.sub(), ks, cl) },
                                        ::redisplay
                                    )
                                }
                            }
                        }
                        dropdownItemAnchor {
                            icon.cls {
                                fa.trashAlt
                            }
                            text.innerText = "Purge Local Database"
                            anchor {
                                cls {
                                    textDanger
                                }
                                longClick {
                                    GlobalScope.launch {
                                        idb.clear(Mp3Store)
                                        dbStatus.reset()
                                    }
                                    menu.removeClass("show")
                                }
                            }
                        }
                    }

                }
            }

            main {
                appendChild(
                    status(killables)
                )
            }
        }
    }

}

fun IDBDatabase.readMp3Store() = transaction(Mp3Store).objectStore<String, File>(Mp3Store)
suspend fun IDBDatabase.readMp3(hash: String) = readMp3Store().get(hash).await()

suspend fun maintenance(
    idb: IDBDatabase,
    userSongsDB: UserSongsDB
) {
    val hashes = idb.getAllKeys<String>(Mp3Store)
    userSongsDB.queryCache.getAll()

    for (hash in hashes) {
        val userSong = userSongsDB.get(hash) {
            state.cv = UserSongState.New
        }

        if (userSong.state.iv == UserSongState.DontLike) {
            idb.delete(Mp3Store, hash)
        }
    }

}