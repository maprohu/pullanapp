package music.loggedin

import commonui.widget.*
import music.boot.Boot
import music.boot.BootPath
import rx.feedTo

class LoggedIn(
    factory: JobScope,
    val path: BootPath
): ForwardBase<TopAndContent>(factory) {
    override val rawView = ui()


//    init {
//
//        with(bind) {
//            procs.process(SignOut) {
//                boot.userUnknown()
//                boot.signOut.now()
//            }
//        }
//    }

//    companion object {
//        suspend operator fun invoke(boot: Boot) = with(boot) {
//            FB.setupMessaging()
//            val functions = FB.functions()
//
//            val custTokenCall = customToken.callable(functions)
//            userState(ks) {
//                if (it != null) {
////            try {
////                custTokenCall.call(Unit)?.let { token ->
////                    app.auth().signInWithCustomToken(token).await()
////                }
////            } catch (d: dynamic) {
////                reportd(d)
////            }
//////            db.enableNetwork().await()
//                } else {
////            db.disableNetwork().await()
//                }
//            }.forEach {
//                userState.now = it
//            }
//
//        }
//    }
}