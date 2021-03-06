package commonui.widget

import bootstrap.*
import commonshr.invoke
import domx.*
import org.w3c.dom.css.ElementCSSInlineStyle
import styles.leftRightTopBottom0
import styles.pointerEventsNone
import kotlin.browser.document

class Stack(): ScreenWrap() {
    override val node = document.div {
        cls.positionRelative
    }

    private var zIndex = 0

    val layer get(): Hole {
        val idx = zIndex++.toString()
        return slot.hole.with {
            unsafeCast<ElementCSSInlineStyle>().style.zIndex = idx
        }
    }

    val fill get() = layer.with {
        cls {
            positionAbsolute
            leftRightTopBottom0
        }
    }

}

