package tasks.loggedin

import bootstrap.*
import commonshr.*
import commonui.widget.*
import domx.*
import fontawesome.*
import styles.leftRightTopBottom0
import tasks.loggedin.LoggedIn
import taskslib.Task
import kotlin.browser.document

fun LoggedIn.ui() = TopAndContent(
    topbar = factory.topbar {
        title %= "Tasks"
        left.dropdown {
            bars
            menu {
                signOut {
                    signOut()
                }
            }
        }
        right.badgeAnchor {
            cls {
                m1
                row()
                alignSelfCenter
            }
            info
            pill
            insert.icon {
                cls.m1
                fa.eye
            }
            node.span {
                cls.m1
                this %= { hiddenList.sizeRx().toString() }
            }
            visible { !hiddenList.isEmptyRx() }
            click {
                unhideAll()
            }
        }

        right.buttonGroup {
            cls.m1
            button {
                p2
                fa.plus
                primary
                click {
                    newTask()
                }
            }
            button {
                p2
                fa.search
                primary
                click {
                    listTasks()
                }
            }
            dropdownSplit {
                primary
            }
            menu {
                right
                item {
                    fa.tags
                    text %= "Tags"
                    click {
                        listTags()
                    }
                }
            }
        }
    }.node,
    content = factory.scrollPane {
        pane {
            cls.p1
            insert.listGroup {
                cls.m1
                node.list(
                    tasksCollection
                        .listEvents {
                            Task.ts.desc
                            Task.completed eq false
                        }
                        .filter { t -> !hiddenIds.containsRx(t.idOrFail)() }
                        .mapLive { cl ->
                            factory.nestedListButton {
                                text %= { cl.rxv().title() }
                                anchor.click {
                                    cl.view()
                                }
                                right.button {
                                    p2
                                    secondary
                                    fa.eyeSlash
                                    click {
                                        cl.hide()
                                    }
                                }
                            }.node
                        }
                )

            }
        }
    }.node
)