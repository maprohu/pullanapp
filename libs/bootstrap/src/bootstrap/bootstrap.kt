package bootstrap

import killable.Killables
import org.w3c.dom.*
import rx.*
import kotlin.browser.document
import common.*
import commonshr.HasKills
import commonshr.invoke
import domx.*
import commonshr.KillsApi
import killable.KillSet
import org.w3c.dom.events.MouseEvent
import styles.*


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

//class ClickItemButtons(node: Node) {
//    val element = node.div {
//        cls {
//            listGroupItem
//            positionRelative
//            p0
//        }
//    }
//
//    val anchor = element.a {
//        cls {
//            positionAbsolute
//            leftRightTopBottom0
//            listGroupItemAction
//        }
//        href = "#"
//    }
//
//    private val rel = element.div {
//        cls {
//            p1
//            flexGrow1
//            dFlex
//            flexRow
//            alignItemsCenter
//            positionRelative
//            pointerEventsNone
//            zIndex1
//        }
//    }
//
//    val text = rel.span {
//        cls {
//            m1
//            flexGrow1
//        }
//    }
//
//    val buttons = rel.div {
//        cls {
//            flexFixedSize()
//            pointerEventsAll
//        }
//    }
//}

//fun Node.clickItemButtons(fn: ClickItemButtons.() -> Unit) = ClickItemButtons(this).apply(fn)

//fun Node.breadcrumb(
//    block : HTMLOListElement.() -> Unit = {}
//): HTMLOListElement {
//    return ol {
//        cls.flexGrow1
//        classes += "breadcrumb mb-0 bg-transparent"
//        block()
//    }
//}

//fun Node.dropdownToggleButton(fn: HTMLButtonElement.() -> Unit = {}): HTMLButtonElement {
//    return btnButton {
//        btnSecondary()
//        classes += "dropdown-toggle"
//        attributes["data-toggle"] = "dropdown"
//        fn()
//    }
//}
//
//fun Element.dropdownToggle() {
//    classes += "dropdown-toggle"
//}
//
//class DropdownGroup(
//    node: HTMLElement,
//    btnStyle: String? = null
//) {
//    val element = node.div {
//        cls {
//            dropdown
//        }
//    }
//
//    val drop  = element.button {
//        cls {
//            btn
//            dropdownToggle
//        }
//        classes += btnStyle
//        dataToggleDropdown()
//    }
//
//    val menu = element.div {
//        cls {
//            dropdownMenu
//        }
//    }
//}

fun HTMLButtonElement.dataToggleDropdown() {
    attr["data-toggle"] = "dropdown"
}
fun HTMLButtonElement.dataReferenceParent() {
    attr["data-reference"] = "parent"
}

//val Node.dropdownSplit: HTMLButtonElement
//    get() = button {
//        cls {
//            btn
//            dropdownToggle
//            dropdownToggleSplit
//        }
//        dataToggleDropdown()
//        attr["data-reference"] = "parent"
//    }
//
//fun HTMLElement.dropdownGroup(btnStyle: String? = null, fn: DropdownGroup.() -> Unit) = DropdownGroup(this, btnStyle).apply {
//    element.cls.btnGroup
//    fn()
//}
//fun HTMLElement.dropdownDiv(btnStyle: String? = null, fn: DropdownGroup.() -> Unit) = DropdownGroup(this, btnStyle).apply(fn)

//fun Node.dropdownDiv(
//    block : HTMLDivElement.() -> Unit = {}
//): HTMLDivElement {
//    return div {
//        classes += "dropdown"
//        dropdownToggleButton()
//        div {
//            dropdownMenu()
//            block()
//        }
//    }
//}

//class DropdownItemAnchor(node: Node) {
//    val anchor = node.a {
//        cls {
//            dropdownItem
//        }
//        href = "#"
//    }
//
//    private val iconSpan = anchor.span
//
//    val icon by lazy {
//        iconSpan {
//            cls {
//                mr2
//            }
//        }
//    }
//
//    val text = anchor.span
//
//}
//
//fun Node.dropdownItemAnchor(block : DropdownItemAnchor.() -> Unit = {}) = DropdownItemAnchor(this).apply(block)
//
//fun Node.listAction(
//    content: HTMLAnchorElement.() -> Unit
//): HTMLAnchorElement {
//    return a {
//        href = "#"
//        cls {
//            listGroupItem
//            listGroupItemAction
//        }
//        content()
//    }
//}
//
//
//fun Node.listButton(
//        fn: () -> Unit = {},
//        content: HTMLAnchorElement.() -> Unit
//): HTMLAnchorElement {
//    return listAction {
//        clickEvent {
//            fn()
//        }
//        content()
//    }
//}
//
//fun Node.listGroup(
//    content: HTMLUListElement.() -> Unit
//): HTMLElement {
//    return ul {
//        cls {
//            listGroup
//        }
//        content()
//    }
//}
//
//fun Node.listGroupItem(
//    content: HTMLLIElement.() -> Unit
//): HTMLElement {
//    return li {
//        cls.listGroupItem
//        content()
//    }
//}
//
//
//fun Node.commandButton(label: String, fn: () -> Unit): HTMLAnchorElement {
//    return listButton(fn) {
//        innerText = label
//    }
//}
//
//fun Node.centerDiv(block : HTMLDivElement.() -> Unit): HTMLDivElement {
//    return div {
//        cls {
//            flexCenter()
//        }
//        block()
//    }
//}

//fun Element.flexJustifyContentCenter() {
//    flex()
//    classes += "justify-content-center"
//}
//
//
//fun Element.flexAlignItemsCenter() {
//    flex()
//    classes += "align-items-center"
//}

//fun Element.flexCenter() {
//    flex()
//    flexJustifyContentCenter()
//    flexAlignItemsCenter()
//}

//fun HTMLElement.rxDisplay(ks: KillSet, rxVal: () ->Boolean) {
//    val rxv = Rx(ks) { rxVal() }
//    rxDisplay(ks, rxv)
//}
//fun HTMLElement.rxDisplay(ks: KillSet, rxVal: RxVal<Boolean>) {
//    rxVal.forEach(ks) {
//        style.cssText = if (it) "" else "display: none !important;"
//    }
//}
//
//fun Element.rxAnchorEnabled(ks: KillSet, rxVal: RxVal<Boolean>) {
//    val stl = Rx(ks) { if (rxVal()) null else "disabled" }
//    rxClassOpt(ks, stl)
//}
//
//fun HTMLElement.rxAnchorClick(ks: KillSet, rxVal: RxVal<Boolean>, fn: (MouseEvent) -> Unit) {
//    rxAnchorEnabled(ks, rxVal)
//    clickEvent {
//        if (rxVal.now) {
//            fn(it)
//        }
//    }
//}

fun HTMLElement.rxText(ks: KillSet, rxVal: RxVal<String>) {
    rxVal.forEach(ks) {
        innerText = it
    }
}

fun HTMLElement.rxText(deps: HasKills, fn: KillsApi.() -> String) = rxText(deps.kills, fn)

fun HTMLElement.rxText(ks: KillSet, fn: KillsApi.() -> String) {
    val rx = Rx(ks, fn)
    rxText(ks, rx)
}

fun HTMLElement.rxTextOrEmpty(ks: KillSet, fn: () -> Optional<String>) {
    rxText(ks) { fn().orEmpty() }
}

fun setupFullScreen() {
    document.body!! {
        cls {
            w100
            h100
            dFlex
            flexColumn
        }

        parentElement!! {
            cls {
                w100
                h100
                overflowHidden
            }
        }
    }
}

//class Panel(private val root: org.w3c.dom.Node) {
//
//    private var current = Content(wrapper())
//
//    inner class Content(
//        val tab : HTMLElement
//    ) {
//        init {
//            root.appendChild(tab)
//        }
//
//        val killables = Killables()
//
//        internal fun kill() {
//            tab.removeFromParent()
//            killables.kill()
//        }
//    }
//
//    private fun wrapper() = document.div { fullSize() }
//
//    fun new(wrapper : HTMLElement = wrapper()): Content {
//        current.kill()
//        current = Content(wrapper)
//        return current
//    }
//
//}

fun Node.column(fn: HTMLDivElement.() -> Unit): HTMLDivElement {
    return div {
        cls.column()
        fn()
    }
}

fun Node.row(fn: HTMLDivElement.() -> Unit): HTMLDivElement {
    return div {
        cls.row()
        fn()
    }
}

//fun Node.btnButton(fn: HTMLButtonElement.() -> Unit): HTMLButtonElement {
//    return button {
//        type = "button"
//        cls {
//            btn
//        }
//        fn()
//    }
//}
//
//
//fun Element.fullSize() {
//    classes += "w-100 h-100"
//}
//fun Element.flex() {
//    classes += "d-flex"
//}
//fun Element.margin1() {
//    classes += "m-1"
//}
//fun Element.marginRight2() {
//    classes += "mr-2"
//}
//fun Element.marginBottom1() {
//    classes += "mb-1"
//}
//fun Element.margin2() {
//    classes += "m-2"
//}
//fun Element.displayBlock() {
//    classes += "d-block"
//}
//fun Element.padding1() {
//    classes += "p-1"
//}
//fun Element.card() {
//    classes += "card"
//}
//fun Element.padding2() {
//    classes += "p-2"
//}
//fun Element.paddingRight2() {
//    classes += "pr-2"
//}
//fun Element.paddingLeft2() {
//    classes += "pl-2"
//}
//fun Element.flexGrow0() {
//    classes += "flex-grow-0"
//}
//fun Element.flexShrink0() {
//    classes += "flex-shrink-0"
//}
//fun Element.bgLight() {
//    classes += "bg-light"
//}
//fun Element.bgDark() {
//    classes += "bg-dark"
//}
//fun Element.bgWhite() {
//    classes += "bg-white"
//}
//fun Element.flexFixedSize() {
//    flexShrink0()
//    flexGrow0()
//}
//fun Element.alignItemsCenter() {
//    classes += "align-items-center"
//}
//
//fun Element.border() {
//    classes += "border"
//}
//fun Element.borderBottom() {
//    classes += "border-bottom"
//}
//fun Element.borderTop() {
//    classes += "border-top"
//}
//fun Element.btn() {
//    classes += "btn"
//}
//fun Element.btnPrimary() {
//    classes += "btn-primary"
//}
//fun Element.btnSecondary() {
//    classes += "btn-secondary"
//}
//fun Element.formGroup() {
//    classes += "form-group"
//}
//fun Element.formControl() {
//    classes += "form-control"
//}
//fun Element.formCheck() {
//    classes += "form-check"
//}
//fun Element.formCheckInput() {
//    classes += "form-check-input"
//}
//fun Element.dropdownMenuRight() {
//    classes += "dropdown-menu-right"
//}
//fun Element.dropdownItem() {
//    classes += "dropdown-item"
//}
//fun Element.alert() {
//    classes += "alert"
//}
//fun Element.alertWarning() {
//    classes += "alert-warning"
//}
//fun Element.spinnerBorder() {
//    classes += "spinner-border"
//}
//fun Element.spinnerBorderSm() {
//    spinnerBorder()
//    classes += "spinner-border-sm"
//}
//fun Element.positionAbsolute() {
//    classes += "position-absolute"
//}
//fun Element.positionRelative() {
//    classes += "position-relative"
//}




val Cls.w100 by css()
val Cls.mw100 by css()
val Cls.h100 by css()
val Cls.alignMiddle by css()
val Cls.textDanger by css()
val Cls.textSuccess by css()
val Cls.textPrimary by css()
val Cls.textInfo by css()
val Cls.textMuted by css()
val Cls.textLeft by css()
val Cls.textReset by css()
val Cls.textJustify by css()
val Cls.textDecorationNone by css()
val Cls.bgDanger by css()
val Cls.bgTransparent by css()
val Cls.bgWhite by css()
val Cls.bgSuccess by css()
val Cls.bgLight by css()
val Cls.bgSecondary by css()
val Cls.bgWarning by css()
val Cls.border by css()
val Cls.border0 by css()
val Cls.borderPrimary by css()
val Cls.borderTop by css()
val Cls.borderBottom by css()
val Cls.borderWarning by css()
val Cls.rounded by css()
val Cls.close by css()
val Cls.card by css()
val Cls.cardHeader by css()
val Cls.cardFooter by css()
val Cls.cardBody by css()
val Cls.cardTitle by css()
val Cls.spinnerBorder by css()
val Cls.spinnerBorderSm by css()
val Cls.spinnerGrow by css()
val Cls.m0 by css()
val Cls.m1 by css()
val Cls.m2 by css()
val Cls.mt1 by css()
val Cls.mr0 by css()
val Cls.mr1 by css()
val Cls.mr2 by css()
val Cls.mr3 by css()
val Cls.mr4 by css()
val Cls.mr5 by css()
val Cls.mx1 by css()
val Cls.mx2 by css()
val Cls.p0 by css()
val Cls.p1 by css()
val Cls.p2 by css()
val Cls.p3 by css()
val Cls.p4 by css()
val Cls.p5 by css()
val Cls.py1 by css()
val Cls.px1 by css()
val Cls.px2 by css()
val Cls.ml1 by css()
val Cls.display1 by css()
val Cls.display2 by css()
val Cls.display3 by css()
val Cls.display4 by css()
val Cls.btnGroup by css()
val Cls.btnGroupVertical by css()
val Cls.btnToolbar by css()
val Cls.btnSecondary by css()
val Cls.btnInfo by css()
val Cls.btnSuccess by css()
val Cls.btnLight by css()
val Cls.btnPrimary by css()
val Cls.btnOutlinePrimary by css()
val Cls.btnOutlineSuccess by css()
val Cls.btnDanger by css()
val Cls.btnWarning by css()
val Cls.btn by css()
val Cls.btnOutlineSecondary by css()
val Cls.hAuto by css()
val Cls.dBlock by css()
val Cls.dFlex by css()
val Cls.dNone by css()
val Cls.flexRow by css()
val Cls.flexRowReverse by css()
val Cls.flexColumn by css()
val Cls.flexColumnReverse by css()
val Cls.flexWrap by css()
val Cls.flexGrow1 by css()
val Cls.flexGrow0 by css()
val Cls.flexShrink0 by css()
val Cls.justifyContentStart by css()
val Cls.justifyContentEnd by css()
val Cls.justifyContentCenter by css()
val Cls.alignSelfCenter by css()
val Cls.alignItemsCenter by css()
val Cls.alignItemsStretch by css()
val Cls.alignItemsStart by css()
val Cls.alignItemsEnd by css()
val Cls.listGroup by css()
val Cls.listGroupItem by css()
val Cls.listGroupItemAction by css()
val Cls.listGroupFlush by css()
val Cls.navbarBrand by css()
val Cls.formInline by css()
val Cls.formControl by css()
val Cls.formControlFile by css()
val Cls.formGroup by css()
val Cls.isInvalid by css()
val Cls.inputGroup by css()
val Cls.inputGroupAppend by css()
val Cls.inputGroupText by css()
val Cls.inputGroupPrepend by css()
val Cls.disabled by css()
val Cls.dropdown by css()
val Cls.dropdownToggle by css()
val Cls.dropdownToggleSplit by css()
val Cls.dropdownMenu by css()
val Cls.dropdownMenuRight by css()
val Cls.dropdownItem by css()
val Cls.dropdownDivider by css()
val Cls.customSelect by css()
val Cls.fontWeightBold by css()
val Cls.fontItalic by css()
val Cls.badge by css()
val Cls.badgePill by css()
val Cls.badgePrimary by css()
val Cls.badgeSecondary by css()
val Cls.badgeWarning by css()
val Cls.badgeInfo by css()
val Cls.navTabs by css()
val Cls.navItem by css()
val Cls.navLink by css()
val Cls.active by css()
val Cls.positionRelative by css()
val Cls.positionAbsolute by css()
val Cls.toast by css()
val Cls.alert by css()
val Cls.alertWarning by css()
val Cls.alertDanger by css()
val Cls.alertDismissable by css()
val Cls.fade by css()
val Cls.show by css()
val Cls.toastHeader by css()
val Cls.toastBody by css()



fun Cls.column() {
    dFlex
    flexColumn
}
fun Cls.row() {
    dFlex
    flexRow
}
fun Cls.flexCenter() {
    dFlex
    justifyContentCenter
    alignItemsCenter
}
fun Cls.flexFixedSize() {
    flexGrow0
    flexShrink0
}
fun Cls.overlay() {
    positionAbsolute
    leftRightTopBottom0
}

