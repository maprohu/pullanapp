package commonfb

import commonshr.CommonShrApi
import commonui.UiApi
import commonui.UiKillsApi
import commonui.widget.HasKillSetAndUIX
import commonui.widget.HasUIX
import firebase.FirebaseApi
import firebase.firestore.FirestoreApi
import killable.HasKillSet

interface CommonFbApi: HasUIX, UiKillsApi, FirebaseApi, HasKillSet

val HasKillSetAndUIX.fbapi: CommonFbApi get() = object : CommonFbApi, HasKillSetAndUIX by this {}

interface FBApi: CommonFbApi, FirebaseApi, FirestoreApi, UiApi, CommonShrApi