package commonfb

import bootstrap.btn
import bootstrap.btnSecondary
import bootstrap.flexCenter
import common.StateMachine
import commonui.screenLayout
import domx.a
import domx.div
import firebase.User
import firebaseui.Login
import kotlin.browser.document

abstract class LoggingInCtx(
    val fbCtx: FbCtx,
    val title: String
) {
    constructor(name: String) : this(name, name)
    constructor(name: String, title: String) : this(FbCtx(name), title)

    val appCtx = fbCtx.appCtx

    private val login by lazy { Login(fbCtx.app) }

    fun loggedOut() {
        login.loginUi(
            loginDiv()
        )
    }

    open fun loginDiv() =
        appCtx.root.newRoot().screenLayout {
            top {
                left {
                    a {
                        btn()
                        btnSecondary()

                        href = "index.html"
                        innerText = "Exit"
                    }
                }
                middleTitle {
                    innerText = this@LoggingInCtx.title
                }
            }
        }.main.apply {
            flexCenter()
        }.div()

    abstract fun loggedIn(user: User) : () -> Unit


    fun start() {
        val stateMachine = StateMachine(LoggedUnknown(this))

        fbCtx.auth.onAuthStateChanged { user ->
            stateMachine.update(user)
        }
    }
}