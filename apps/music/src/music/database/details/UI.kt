package music.database.details

import bootstrap.*
import commonshr.*
import commonui.widget.*
import domx.*
import fontawesome.*
import music.database.Database
import music.database.statusPanel
import music.loggedin.checkStorage

fun Details.ui() = TopAndContent(
    topbar = factory.topbar {
        left.button {
            back
            click {
                database.redisplay()
            }
        }
        title %= "Database Details"
        right.tasksUi()
        slots.right.slots.syncUi()
    }.node,
    content = factory.scrollPane {
        pane {
            cls.p1
            fun statusPanel(
                st: Database.Status,
                title: String,
                bgfn: HasKillSetAndUIX.(ButtonGroup) -> Unit = {}
            ) {
                statusPanel(
                    insert,
                    database,
                    st,
                    title,
                    bgfn
                )
            }
            statusPanel(
                localSongIds,
                "Local Songs"
            )
            statusPanel(
                new,
                "New"
            )
            statusPanel(
                like,
                "Like"
            )
            statusPanel(
                dontLike,
                "Don't Like"
            )
            statusPanel(
                cloud,
                "Cloud"
            ) { bg ->
                bg.button {
                    p2
                    fa.checkDouble
                    secondary
                    click {
                        cloud.set.forEach { id ->
                            loggedIn.checkStorage(id)
                        }
                    }
                }

            }
            statusPanel(
                uploading,
                "Uploading"
            )
        }

    }.node
)


