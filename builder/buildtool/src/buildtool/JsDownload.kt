package buildtool

import bootkotlin.*
import java.io.File
import java.net.URL
import java.util.zip.ZipEntry

class DirResource(
    val pathToDir: String,
    val cssPath: List<String> = listOf()
)
class ExtractInfo(
    val name: String,
    val dir: String? = null,
    val filter: (ZipEntry) -> Boolean = { true },
    val jsPath: List<String> = listOf(),
    val cssPath: List<String> = listOf(),
    val resPath: List<Pair<String, String>> = listOf(),
    val dirResources: List<DirResource> = listOf()
)

open class JsDownload(
    url: URL,
    fileName: String,
    extract: ExtractInfo?,
    deps: List<JsDep> = listOf()
): JsDep(deps) {


    companion object {
        fun URL.extractDir() =
            File(file).nameWithoutExtension
    }

    constructor(
        url: URL,
        jsPath: String,
        deps: List<JsDep> = listOf()
    ) : this(
        url,
        url.fileName,
        ExtractInfo(
            url.extractDir(),
            jsPath = listOf(jsPath)
        ),
        deps
    )


    constructor(
        url: URL,
        extract: ExtractInfo,
        deps: List<JsDep> = listOf()
    ) : this(
        url,
        url.fileName,
        extract,
        deps
    )
    constructor(
        url: String,
        extract: ExtractInfo,
        deps: List<JsDep> = listOf()
    ) : this(
        URL(url),
        extract,
        deps
    )

    constructor(
        url: URL,
        jsPath: String,
        cssPath: String,
        deps: List<JsDep> = listOf()
    ) : this(
        url,
        url.fileName,
        ExtractInfo(
            File(url.file).nameWithoutExtension,
            jsPath = listOf(jsPath),
            cssPath = listOf(cssPath)
        ),
        deps
    )

    constructor(
        url: URL,
        fileName: String,
        jsPath: String,
        cssPath: String,
        deps: List<JsDep> = listOf()
    ) : this(
        url,
        fileName,
        ExtractInfo(
            File(fileName).nameWithoutExtension,
            jsPath = listOf(jsPath),
            cssPath = listOf(cssPath)
        ),
        deps
    )

    constructor(
        url: URL,
        deps: List<JsDep> = listOf()
    ) : this(
        url,
        url.fileName,
        null,
        deps
    )

    constructor(
        url: String,
        pathToFile: String,
        deps: List<JsDep> = listOf()
    ) : this(URL(url), pathToFile, deps)

    constructor(
        url: String,
        pathToFile: String,
        pathToCss: String,
        deps: List<JsDep> = listOf()
    ) : this(
        URL(url),
        pathToFile,
        pathToCss,
        deps
    )

    constructor(
        url: String,
        fileName: String,
        pathToFile: String,
        pathToCss: String,
        deps: List<JsDep> = listOf()
    ) : this(
        URL(url),
        fileName,
        pathToFile,
        pathToCss,
        deps
    )

    constructor(
        url: String,
        deps: List<JsDep> = listOf()
    ) : this(URL(url), deps)

    val downloaded by task {
        url.download(fileName)
    }

    val extracted by task(
        if (extract == null) {
            { downloaded }
        } else {
            {
                val targetDir = ExtractedDir.resolve(extract.dir ?: File(fileName).nameWithoutExtension )
                extractFiles(downloaded, targetDir, extract.filter)
                targetDir
            }
        }
    )

    val extractedJsFiles by task {
        extract!!.jsPath.map { extracted.resolve(it) }
    }

    override val jsFile by
        if (extract == null) {
            task { listOf(downloaded) }
        } else {
            task {
                testResmapFile + extractedJsFiles
            }
        }

    override val jsFileValue by task { jsFile.map { FileValue(it) } }

    override val publicJsFile by
        if (extract == null) publicTask { jsFileValue }
        else task {
            publicResmapFile + extractedJsFiles.map { it.fileValue.publicFile() }
        }

    val testResmapFileLocation by lazy { ProdOutDir.resolve(extract!!.name).resolve("${extract!!.name}.resmap.js") }
    val testResFiles by task {
        extract!!.resPath.map {
            it.first to
                    extracted.resolve(it.second)
        }
    }
    val testResmapFile by task {
        resmapFileContent(
            testResFiles.map { it.first to it.second.relativeTo(TestingDir).fromApp().invariantSeparatorsPath
            }
        ).map {
            testResmapFileLocation.parentFile.mkdirs()
            testResmapFileLocation.writeText(it)
            testResmapFileLocation
        }
    }

    val publicResFiles by task {
        extract!!.resPath.map { it.first to extracted.resolve(it.second).fileValue.publicFile() }
    }

    val publicResmapFile by task {
        resmapFileContent(
            publicResFiles.map {
                it.first to
                        it.second.relativeTo(PublicDir).fromApp().invariantSeparatorsPath
            }
        ).map {
            publicTextFile("${extract!!.name}.resmap", "js", it)
        }
    }


    override val testingCss by task(
        if (extract == null) {
            { listOf<String>() }
        } else {
            {
                extract
                    .cssPath
                    .map { extracted.resolve(it) }
                    .plus(
                        extract.dirResources.flatMap { dr ->
                            val dir = extracted.resolve(dr.pathToDir)
                            dr.cssPath.map { css ->
                                dir.resolve(css)
                            }
                        }
                    )
                    .map { it.relativeTo(TestingDir).fromApp().invariantSeparatorsPath }
            }
        }
    )

    val publicDirs : Map<String, File> by task(
        if (extract == null) {
            { mapOf<String, File>() }
        } else {
            {
                extract
                    .dirResources
                    .map { dr ->
                        val f = FileValue(extracted.resolve(dr.pathToDir)).publicFile()
                        dr.pathToDir to f
                    }
                    .toMap()
            }
        }
    )

    val publicCssFiles : Map<String, File> by task(
        if (extract == null) {
            { mapOf<String, File>() }
        } else {
            {
                extract
                    .cssPath.map {
                        it to FileValue(extracted.resolve(it)).publicFile()
                    }
                    .toMap()
            }
        }
    )

    override val publicCss by task(
        if (extract == null) {
            { listOf<String>() }
        } else {
            {
                val publicFiles =
                extract
                    .cssPath.map {
                        publicCssFiles.getValue(it)
                    } +
                        extract
                            .dirResources
                            .flatMap { dr ->
                                val f = publicDirs.getValue(dr.pathToDir)
                                dr.cssPath.map { f.resolve(it) }
                            }

                publicFiles.map { it.relativeTo(PublicDir).fromApp().invariantSeparatorsPath }
            }
        }
    )

    override val testingResources by task(
        if (extract == null) {
            { listOf<File>() }
        } else {
            {
                extract.cssPath.map { extracted.resolve(it) } +
                    extract.dirResources.flatMap { dr ->
                        extracted.resolve(dr.pathToDir).walk().filter { it.isFile }.toList()
                    } +
                        testResFiles.map { it.second }
            }
        }
    )

    override val publicResources by task(
        if (extract == null) {
            { listOf<File>() }
        } else {
            {
                publicDirs.values.flatMap { d -> d.walk().filter { it.isFile }.toList() } +
                        publicCssFiles.values +
                        publicResFiles.map { it.second }
            }
        }
    )
}
