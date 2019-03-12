package commonui.widget

import bootstrap.setupFullScreen
import commonui.*
import commonui.progress.Progress
import killable.NoKill
import org.w3c.dom.HTMLElement
import rx.RxIface
import rx.Var
import kotlin.browser.document

interface BodyPath {
    val body: Body
}
typealias BodyNode = IView<HTMLElement>
class Body(
    slot: Hole = kotlin.run {
        setupFullScreen()
        document.body!!.hole
    }
): CsKills(NoKill), BodyPath, HasKillsRouting<HTMLElement> {
    override val body = this

    val hole = slot.routing.of<BodyNode> { Progress(this) }

    override val activeView = hole.activeView

}

