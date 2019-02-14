package music.loggedin

import commonui.widget.*
import music.boot.Boot
import music.boot.BootPath
import music.content.Content
import music.content.ContentView
import rx.feedTo

class LoggedIn(
    path: BootPath
): Content(path), HasUIX {
    override val rawView: ContentView = ui()

    override val uix = exec

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