package bootstrap

import killable.Killable
import killable.Killables
import org.w3c.dom.*
import rx.*
import kotlin.browser.document
import common.*
import domx.*
import org.w3c.dom.events.MouseEvent
import styles.overflowHidden


//fun Node.topbar(
//    block : HTMLDivElement.() -> Unit = {}
//) {
//    div {
//        flexRow()
//        classes += "border-bottom bg-light align-items-center pr-1"
//
//        block()
//    }
//}

fun Node.breadcrumb(
    block : HTMLOListElement.() -> Unit = {}
): HTMLOListElement {
    return ol {
        flexGrow1()
        classes += "breadcrumb mb-0 bg-transparent"
        block()
    }
}

fun Node.dropdownToggleButton(fn: HTMLButtonElement.() -> Unit = {}): HTMLButtonElement {
    return btnButton {
        btnSecondary()
        classes += "dropdown-toggle"
        attributes["data-toggle"] = "dropdown"
        fn()
    }
}

fun Element.dropdown() {
    classes += "dropdown"
}
fun Element.dropdownToggle() {
    classes += "dropdown-toggle"
}

class Dropdown(node: Node) {
    val element = node.div {
        dropdown()
    }

    val button  = element.btnButton {
        btnSecondary()
        attributes["data-toggle"] = "dropdown"
    }

    fun button(fn: HTMLButtonElement.() -> Unit) = button.apply(fn)

    val menu = element.div {
        dropdownMenu()
    }
}

operator fun <T: Node> T.invoke(fn: T.() -> Unit): T {
    return apply(fn)
}

fun Node.dropdown(fn: Dropdown.() -> Unit) = Dropdown(this).apply(fn)

fun Node.dropdownDiv(
    block : HTMLDivElement.() -> Unit = {}
): HTMLDivElement {
    return div {
        classes += "dropdown"
        dropdownToggleButton()
        div {
            dropdownMenu()
            block()
        }
    }
}

fun Node.dropdownItemAnchor(
    block : HTMLAnchorElement.() -> Unit = {}
): HTMLAnchorElement {
    return a {
        dropdownItem()
        href = "#"
        block()
    }
}


fun Node.listAction(
    content: HTMLAnchorElement.() -> Unit
): HTMLAnchorElement {
    return a {
        href = "#"
        classes += "list-group-item list-group-item-action"
        content()
    }
}


fun Node.listButton(
        fn: () -> Unit = {},
        content: HTMLAnchorElement.() -> Unit
): HTMLAnchorElement {
    return listAction {
        clickEvent {
            fn()
        }
        content()
    }
}

fun Node.listGroup(
    content: HTMLUListElement.() -> Unit
): HTMLElement {
    return ul {
        classes += "list-group"
        content()
    }
}

fun Node.listGroupItem(
    content: HTMLLIElement.() -> Unit
): HTMLElement {
    return li {
        classes += "list-group-item"
        content()
    }
}


fun Node.commandButton(label: String, fn: () -> Unit): HTMLAnchorElement {
    return listButton(fn) {
        innerText = label
    }
}

fun Node.centerDiv(block : HTMLDivElement.() -> Unit): HTMLDivElement {
    return div {
        fullSize()
        flexCenter()
        block()
    }
}

fun Element.flexJustifyContentCenter() {
    flex()
    classes += "justify-content-center"
}

fun Element.flexAlignItemsCenter() {
    flex()
    classes += "align-items-center"
}

fun Element.flexCenter() {
    flex()
    flexJustifyContentCenter()
    flexAlignItemsCenter()
}

fun HTMLElement.rxDisplay(rxVal: () ->Boolean): Killable {
    val rxv = Rx { rxVal() }
    rxDisplay(rxv)
    return rxv
}
fun HTMLElement.rxDisplay(rxVal: RxVal<Boolean>): Killable {
    return rxVal.forEach {
        this.style.cssText = if (it) "" else "display: none !important;"
    }
}

fun Element.rxAnchorEnabled(rxVal: RxVal<Boolean>): Killable {
    val stl = Rx { if (rxVal()) null else "disabled" }
    rxClassOpt(stl)
    return stl
}

fun HTMLElement.rxAnchorClick(rxVal: RxVal<Boolean>, fn: (MouseEvent) -> Unit): Killable {
    val rx = rxAnchorEnabled(rxVal)
    clickEvent {
        if (rxVal.now) {
            fn(it)
        }
    }
    return rx
}

fun HTMLElement.rxText(rxVal: RxVal<String>): Killable {
    return rxVal.forEach {
        this.innerText = it
    }
}

fun HTMLElement.rxText(fn: () -> String): Killable {
    val rx = Rx(fn)
    rxText(rx)
    return rx
}

fun setupFullScreen() {
    document.body!!.apply {
        fullSize()
        flex()
        flexColumn()

        parentElement!!.apply {
            fullSize()
            classes += overflowHidden
        }
    }
}

class Panel(private val root: org.w3c.dom.Node) {

    private var current = Content(wrapper())

    inner class Content(
        val tab : HTMLElement
    ) {
        init {
            root.appendChild(tab)
        }

        val killables = Killables()

        internal fun kill() {
            tab.removeFromParent()
            killables.kill()
        }
    }

    private fun wrapper() = document.div { fullSize() }

    fun new(wrapper : HTMLElement = wrapper()): Content {
        current.kill()
        current = Content(wrapper)
        return current
    }

}

fun Node.column(fn: HTMLDivElement.() -> Unit): HTMLDivElement {
    return div {
        flexColumn()
        fn()
    }
}

fun Node.row(fn: HTMLDivElement.() -> Unit): HTMLDivElement {
    return div {
        flexRow()
        fn()
    }
}

fun Node.btnButton(fn: HTMLButtonElement.() -> Unit): HTMLButtonElement {
    return button {
        type = "button"
        classes += "btn"
        fn()
    }
}


fun Element.fullSize() {
    classes += "w-100 h-100"
}
fun Element.flex() {
    classes += "d-flex"
}
fun Element.flexColumn() {
    flex()
    classes += "flex-column"
}
fun Element.flexRow() {
    flex()
    classes += "flex-row"
}
fun Element.margin1() {
    classes += "m-1"
}
fun Element.marginRight2() {
    classes += "mr-2"
}
fun Element.marginBottom1() {
    classes += "mb-1"
}
fun Element.margin2() {
    classes += "m-2"
}
fun Element.displayBlock() {
    classes += "d-block"
}
fun Element.padding1() {
    classes += "p-1"
}
fun Element.padding2() {
    classes += "p-2"
}
fun Element.paddingRight2() {
    classes += "pr-2"
}
fun Element.paddingLeft2() {
    classes += "pl-2"
}
fun Element.flexGrow1() {
    classes += "flex-grow-1"
}
fun Element.flexGrow0() {
    classes += "flex-grow-0"
}
fun Element.flexShrink0() {
    classes += "flex-shrink-0"
}
fun Element.bgLight() {
    classes += "bg-light"
}
val bgTransparent = "bg-transparent"
fun Element.bgTransparent() {
    classes += bgTransparent
}
val bgWarning = "bg-warning"
fun Element.bgWarning() {
    classes += bgWarning
}
val bgSucess = "bg-success"
fun Element.bgSuccess() {
    classes += bgSucess
}
fun Element.bgDark() {
    classes += "bg-dark"
}
fun Element.bgWhite() {
    classes += "bg-white"
}
fun Element.flexFixedSize() {
    flexShrink0()
    flexGrow0()
}
fun Element.alignItemsCenter() {
    classes += "align-items-center"
}

fun Element.border() {
    classes += "border"
}
fun Element.borderBottom() {
    classes += "border-bottom"
}
fun Element.borderTop() {
    classes += "border-top"
}
fun Element.btn() {
    classes += "btn"
}
fun Element.btnPrimary() {
    classes += "btn-primary"
}
fun Element.btnSecondary() {
    classes += "btn-secondary"
}
fun Element.formGroup() {
    classes += "form-group"
}
fun Element.formControl() {
    classes += "form-control"
}
fun Element.formCheck() {
    classes += "form-check"
}
fun Element.formCheckInput() {
    classes += "form-check-input"
}
fun Element.btnGroup() {
    classes += "btn-group"
}
fun Element.dropdownMenu() {
    classes += "dropdown-menu"
}
fun Element.dropdownMenuRight() {
    classes += "dropdown-menu-right"
}
fun Element.dropdownItem() {
    classes += "dropdown-item"
}
fun Element.alert() {
    classes += "alert"
}
fun Element.alertWarning() {
    classes += "alert-warning"
}
fun Element.spinnerBorder() {
    classes += "spinner-border"
}
fun Element.spinnerBorderSm() {
    spinnerBorder()
    classes += "spinner-border-sm"
}
fun Element.positionAbsolute() {
    classes += "position-absolute"
}
fun Element.positionRelative() {
    classes += "position-relative"
}






