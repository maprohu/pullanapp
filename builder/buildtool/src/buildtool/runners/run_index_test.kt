package buildtool.runners

import buildtool.*
import kotlinx.coroutines.channels.ticker

fun main() = runTask {
    fns.indexJs
    index.testHtml
    index.testSW
}