package buildtool

import bootkotlin.kotlinxCoroutinesCoreJs
import bootkotlin.kotlinxHtmlJs
import bootkotlin.kotlinxStdlibJs
import java.io.File
import java.net.URL
import java.nio.file.Paths

object kotlinxHtml : KotlinJsLib(kotlinxHtmlJs)

object kotlinxCoroutines : KotlinJsLib(
    kotlinxCoroutinesCoreJs,
    "kotlinx-coroutines-core"
)
object webAnimationsJs : JsDownload(
    "https://raw.githubusercontent.com/web-animations/web-animations-js/2.3.1/web-animations.min.js"
)
object jquery : JsDownload(
    "https://code.jquery.com/jquery-3.3.1.js"
)


val firebaseVersion = "5.8.2"
val firebaseBaseName = "firebase-bower-$firebaseVersion"
object firebaseJs : JsDownload(
    url = URL("https://codeload.github.com/firebase/firebase-bower/zip/v$firebaseVersion"),
    fileName = "$firebaseBaseName.zip",
    extract = ExtractInfo(
        jsPath = listOf(
            "$firebaseBaseName/firebase-app.js",
            "$firebaseBaseName/firebase-auth.js",
            "$firebaseBaseName/firebase-firestore.js",
            "$firebaseBaseName/firebase-functions.js",
            "$firebaseBaseName/firebase-messaging.js",
            "$firebaseBaseName/firebase-storage.js"
        )
    )
)

val firebaseUiVersion = "3.4.1"
val firebaseUiBaseName = "firebaseui-web-$firebaseUiVersion"
object firebaseUiJs : JsDownload(
    URL("https://github.com/firebase/firebaseui-web/archive/v$firebaseUiVersion.zip"),
    "$firebaseUiBaseName.zip",
    ExtractInfo(
        jsPath = listOf(
            "$firebaseUiBaseName/dist/firebaseui.js"
        ),
        cssPath = listOf(
//            "firebaseui-web-3.4.1/dist/firebaseui.css"
            "$firebaseUiBaseName/stylesheet/firebase-ui.css"
        )
    ),
    listOf(
        firebaseJs
    )
)

private const val fontAwesomeVersion = "5.5.0"
private const val fontAwesomeDirName = "fontawesome-free-$fontAwesomeVersion-web"
object fontAwesomeDist : JsDownload(
    "https://use.fontawesome.com/releases/v$fontAwesomeVersion/$fontAwesomeDirName.zip",
    ExtractInfo(
        filter = { ze ->
            Paths.get(ze.name).let {
                it.nameCount >= 2 &&
                        it.getName(1).toString() in setOf("css", "webfonts")
            }
        },
        dirResources = listOf(
            DirResource(
                fontAwesomeDirName,
                listOf("css/all.css")
            )
        )
    )
)

val bootstrapVersion = "4.3.1"
val bootstrapBaseName = "bootstrap-$bootstrapVersion-dist"
object bootstrapDist : JsDownload(
    "https://github.com/twbs/bootstrap/releases/download/v$bootstrapVersion/$bootstrapBaseName.zip",
    "$bootstrapBaseName/js/bootstrap.bundle.js",
    "$bootstrapBaseName/css/bootstrap.css",
    listOf(
        jquery
    )
)

object buildenv : JsModule(
    "libs/buildenv"
)

object commonshr : JsModule(
    JsModuleConfig(
        "libs/commonshr"
    ).copy(
        deps = listOf(
            kotlinxCoroutines
        )
    )
)

object indexeddb : JsModule(
    JsModuleConfig(
        "libs/indexeddb"
    ).copy(
        deps = listOf(
            commonshr
        )
    )
)

object common : JsModule(
    "libs/common",
    listOf(
        commonshr,
        buildenv
    )
)

object domx : JsModule(
    "libs/domx",
    listOf(
        common
    )
)

object bootstrap : JsModule(
    "libs/bootstrap",
    listOf(
        bootstrapDist,
        domx
    )
)

object fontawesome : JsModule(
    "libs/fontawesome",
    listOf(
        fontAwesomeDist,
        domx
    )
)

object commonui : JsModule(
    "libs/commonui",
    listOf(
        bootstrap,
        fontawesome,
        domx
    )
)


object testappsw : JsModule(
    "libs/testappsw",
    listOf(
        firebasektjs,
        cachingsw,
        firebaseMessagingSw,
        testapplib
    )
)

object tictactoesw : JsModule(
    "libs/tictactoesw",
    listOf(
        firebaseMessagingSw,
        tictactoelib
    )
)

object testapp : JsApp(
    "apps/testapp",
    "Test App",
    listOf(
        commonui,
        testapplib
    ),
    serviceWorker = testappsw
)

object testapp2 : JsApp(
    "apps/testapp2",
    "Test App 2",
    listOf(
        commonfb
    ),
    serviceWorker = cachingsw
)

object cachingsw : JsModule(
    JsModuleConfig(
        "libs/cachingsw"
    ).copy(
        deps = listOf(
            buildenv,
            commonshr,
            indexeddb
        )
    )
)

object gymclocksw : JsModule(
    JsModuleConfig(
        "libs/gymclocksw"
    ).copy(
        deps = listOf(
            cachingsw
        )
    )
)

object gymclock : JsApp(
    JsAppConfig(
        "apps/gymclock",
        "Gym Clock",
        deps = listOf(
            webAnimationsJs,
            commonui
        ),
        serviceWorker = gymclocksw
    ).copy(
        icon192 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADABAMAAACg8nE0AAAAKlBMVEUAAAAdHR06OjpISEhubm6QkJCgoKC2trbKysrb29vv7+/6+vr7+/v///+25UbwAAAA3ElEQVR42u3aMQrCMABA0YKLBd08gEfwDnZ18yAexUkoLh7JtYh3EUqtEYOt1bj0/amQkDclQ5PsmrgMAAAAAAAAAAAAAADjBk5Z0KZjgX04GQAIgGlZ1w/I67mHj4BZM9oLmNcfFQAA6AYu5b3dYKBd4hgBqvBQGQi05YDxAr/ZB2cAAAAAAAAAAACQBNgWTes4sCjet4oCk3Y8W77+sXoCehQBggAjAOxkAAAAAAAAAAAA4KIOkABIfuX+yLMHAOA/QPJncJ4iAr4EfhoAAAAAAAAAAAAAAEYE3ACG9BYki+NpjQAAAABJRU5ErkJggg==",
        icon512 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIAAQMAAADOtka5AAAABlBMVEUAAAD///+l2Z/dAAAA20lEQVR42u3cMQ7CMBBFQSOKlByJq3E0jkRJgfgUwUVQLIUkyBTzWltTrqt1ycYKAAAAAAAAAAAAAAAAAAAAAAAAAAAAoDPwLO9Oc1cf9fQMAAAAS4AkubaAQ5JcAAAAAAD4PXCrz9YSYOwIAAAADWD4biLdAQAAAAAAAAAAAAAAAAAAAAAAsAKoTYBGE+AzAAAA2AyYygAAAAAAAAAAAAAAAAAAAAAA0AGwvwAAAHYCxqxoAgAAAODvAL/SAACAfYA1AQAAAAAAAAAAAAAAAAAAAAAAAAAAADoAL6TzNF65IIK3AAAAAElFTkSuQmCC"
    )
)

object firebaseshr : JsModule(
    "libs/firebaseshr",
    listOf(
        commonshr
    )
)

object firebasektjs : JsModule(
    "libs/firebasektjs",
    listOf(
        firebaseJs,
        firebaseshr
    )
)
object firebaseuiktjs : JsModule(
    "libs/firebaseuiktjs",
    listOf(
        firebasektjs,
        firebaseUiJs
    )
)
object firebaseui : JsModule(
    "libs/firebaseui",
    listOf(
        firebaseuiktjs
    )
)

object firebase : JsModule(
    "libs/firebase",
    listOf(
        common,
        commonlib,
        firebasektjs,
        firebaseshr
    )
)

object commonfb : JsModule(
    "libs/commonfb",
    listOf(
        commonui,
        commonlib,
        firebase
    )
)

object commonlib : JsModule(
    "libs/commonlib",
    listOf(
        firebaseshr
    )
)

object chat : JsApp(
    "apps/chat",
    "Chat",
    listOf(
        bootstrap
    )
)

object index : JsApp(
    "apps/index",
    "Apps I Make",
    listOf(
        commonui
    ),
    serviceWorker = cachingsw
)

object taskslib : JsModule(
    "libs/taskslib",
    listOf(
        commonlib
    )
)

object tasks : JsApp(
    "apps/tasks",
    "Tasks",
    listOf(
        taskslib,
        commonfb
    )
)


object testapplib : JsModule(
    "libs/testapplib",
    listOf(
        commonlib
    )
)

object tictactoelib : JsModule(
    "libs/tictactoelib",
    listOf(
            commonlib
    )
)

object tictactoe : JsApp(
    JsAppConfig(
        "apps/tictactoe",
        "Tic Tac Toe",
        listOf(
            commonfb,
            tictactoelib
        ),
        tictactoesw
    ).copy(
        icon192 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAAAAAB3tzPbAAABGUlEQVR42u3boQ2DUBSGURbpIhXswRIoZIdBsgWSGToFggRDAhVc3+Y+QUnO5+//chyG6si1z2frUdYWO1t2oEreLdVZWwgYY2cCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+HPAlGuIh+uprC52Xsn7rbp5MwAAAMDFgDFXHwPPsaw2drrk/eZTAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOA7oM3VxMOPtqxn7NTJ+/X+f3AAAAAAXAtYcr1joFnK6mNnSN7vPiUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfuoDFd7p/LGexZwAAAAASUVORK5CYII=",
        icon512 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIABAMAAAAGVsnJAAAAKlBMVEUAAAAQEBAsLCw8PDxVVVVubm6QkJC4uLi/v7/V1dXm5ubv7+/5+fn///9OhxeDAAACw0lEQVR42u3ZsQkCQRCG0Q2vEEuwAIVL7MASxBKMxOhA7EEwO7QESxAMDDS4XsxuGpgV5N5XwM/wwt0ypPXpxu5Dhd6x/8hbLXlTrzJ2qgHwjP0bAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/C9CndYkDt32FzrG/Sxu9lonXAAAAAAAAAAAAAAAAAAAAAAAAAAAAYGIA/gUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABqAXRpHeLAdVehfexv0kaPZeI1AAAAAAAAAAAAAAAAAAAAAAAAAABMDaBNaxmzs7ZCi9ifp42uPIsDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgpwBfE+DbRqeaja8AAAAASUVORK5CYII="
    )
)

object musiclib : JsModule(
    "libs/musiclib",
    listOf(
        commonlib
    )
)
object music : JsApp(
    JsAppConfig(
        "apps/music",
        "Music Player",
        listOf(
            musiclib,
            commonfb,
            indexeddb
        ),
        serviceWorker = cachingsw
    ).copy(
        icon192 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMQAAADECAAAAADlzdG3AAAFNUlEQVR42u3dXUhcRxQH8EEWCRJERJASJEiIlCBBCNJQQl6kRYTQIi0lEikrCYEUQiGhRbC0JQFBoVsIdC3tg9CHSh9sY6i0waZpHmxrIVhSUzWGbCNpTcxudP3Yzzunnynuend37r2zd85Mznn3Hn6s/907M3fmMjCgGCEI8UQiNn6+fPH7iKUxYml4H/unAqdXtERY8/11bEsNaYdITZ0KsLwKcp0Q8fEOZldvaoP4PwY29Z0OiPwY5Fe9hR1hF4P8mkSNKBSDvDqJF1EsBrm1EyeiVAzyiuNDiMQgt9LIEIIxQIwQjwFShMMYIEQ4jwE2hKsYoEK4jQEahJcY4EB4jAEChPcYqEZIiYFKhLQYKEPIjIEahOQYKEDIj4HPiPLEwE9E2WLgG6KcMfAHcb+8MfADMf0M87HKgsh2M6Y7ItXCtEfwNqY/4kOmP2KDGYD4yATEXgMQaWYAYtUExDIhCEEIQhCCEIQgBCEIQQhCEIIQTwai4lndEdVvzVjLWiMaw4t8exOdEIdGY/ZNtEEcu5Yo2EQLxM7eG9liTfAjGi78xks0QY44+FlUoAlmxCvfboo1wYqoOjudEW6CErErdIc7aYIPceDTZadNkCE6J9ZdNEGE2PH69Yy7JlgQ9YO3uesmKBAtnzzw1EQ94sjXa16bqEVUvvZTWkIThYi6/luWnCaqEPuGl+Q1UYJo/zIutYnviMDJH1Kym/iLqHl3zipDEx8RTR/fA0mlCNE2tgLySgGiomcyCVLLb0T12zctkF0+I2Y4lKF8RqSBEIQgBCEIQQhCEIIQhCAEIQhBCEIQghCEIAQhCIEbwa1MJmvpithcGH/vWEvV48Xi1p7Q+MKGRgi+ONq9w/5BruDFJR0QiavB4sfG1PTNc9SIzFWhY2OqQ4/QIhbfqBB+omIvTsSsl8M+cCCiz6HePyGC4GHkm0AEEMl2pj0i+hTTHhGrZdoj1mUc6qYYwQ8x/REhpj9ijRmA6DMAIesEIqWIGyYg+k1AvGAC4mkTEFWSEBkTPgluQCZqwYBvp04w4HdiDAz4xX6oFCHn3qkD3CIyG6vRh4/iCcsTIi4Dccc5IrU4MXi0YetEVtfgxN2UuvFEEJwh1iffaSw0J3f+ekrJyK4h4wTxe7ipxPXaLid9H2MH8jeWFEHEwmITK12z93yd7QjcBkEEnzzsYP+fn/NOVQsghrDGd0m6wSz0VeH6HPhmmy0+toiZRml3yQXTPeTu2r1ZEEJkTki81S8SjOddfAwR20ttR0SbmC8I5+sT+38ssM9nG+JWJfMLAXD3jPhK0au/FrxMPmJBwqsjHK3ZXRGa5G/9IlHkInmIJRmvv3C6enqlu/jnceRSib23uYislAPCna9jW5GRl23/jSs6huezJf88F3GaqUH8ezcyd2ngaPN/a/KBps5zozOrYjv2chD3mUrE41+Qv5/tcLbdMAfRgwHhorYiEswAxJQJiD4TEB0mIPaYgCjHXK/viP2SEKAS8ZIcQ71SxAU5iKBSxIIcxDdKEValFMSaUgR8IMNwHNQiUjKGRA8UI+Bz74ZzoBoBXV4NrVw9It3szVAXB/UISHp6S2NtDDAgIHnQvWG3GoPNDKB1xq3hxTRgQQBcq3G1bDACgAgB6V7nhq51wIUAWHE4VD3+BwA6BEBiZLfwd9LQCgBKxF8VOV8tsNR19iYHwIsA4JFw0Ud7GgbmLFBfpceSm9PvH7abtT7QPxUHHCU2IOars1+FTrU31VUGave0nRgY+yXGAU8xMKAIQQiJ9SdBX1+2s6bHMAAAAABJRU5ErkJggg==",
        icon512 = "data:image/png;base64,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"
    )
)

object checklistlib : JsModule(
    "libs/checklistlib",
    listOf(
        commonlib
    )
)
object checklist : JsApp(
    JsAppConfig(
        "apps/checklist",
        "Checklists",
        listOf(
            checklistlib,
            commonfb
        ),
        serviceWorker = cachingsw
    ).copy(
        icon192 = "data:image/png;base64,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",
        icon512 = "data:image/png;base64,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"
    )
)

object downloadlib : JsModule(
    "libs/downloadlib",
    listOf(
        commonlib
    )
)
object download : JsApp(
    JsAppConfig(
        "apps/download",
        "Download",
        listOf(
            downloadlib,
            commonfb
        ),
        serviceWorker = cachingsw
    )
)


object functions : JsModule(
    "libs/functions",
    listOf(
        commonshr,
        commonlib
    )
)

object testappfns : JsModule(
    JsModuleConfig(
        "libs/testappfns"
    ).copy(
        deps = listOf(
            functions,
            testapplib
        )
    )
)

object tictactoefns : JsModule(
    JsModuleConfig(
        "libs/tictactoefns"
    ).copy(
        deps = listOf(
            functions,
            tictactoelib
        )
    )
)

object mainfns : JsModule(
    JsModuleConfig(
        "libs/mainfns"
    ).copy(
        deps = listOf(
            tictactoefns,
            testappfns
        )
    )
)


