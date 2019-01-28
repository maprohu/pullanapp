package music

import common.ListenableList
import common.ListenableMutableList
import domx.audio
import domx.invoke
import firebase.QueryCache
import firebase.firestore.*
import killable.Killables
import kotlinx.coroutines.CompletableDeferred
import musiclib.Mp3File
import musiclib.music
import musiclib.songs
import org.khronos.webgl.ArrayBuffer
import org.w3c.dom.url.URL
import org.w3c.files.Blob
import org.w3c.files.File
import kotlin.browser.document

class TagDB(
    private val db: Firestore,
    killables: Killables
) {
    val queryCache = QueryCache.hasProps(
        db,
        music.app.songs,
        { Mp3File() },
        killables
    )



    suspend fun get(hash: String, file: Blob): Mp3File {
        return get(hash) {
            file to file.readAsArrayBuffer()
        }
    }

    suspend fun get(hash: String, file: suspend () -> Pair<Blob, ArrayBuffer>): Mp3File {
        return queryCache.get(hash) {

            val ff = file()
            val f = ff.first
            val buffer = ff.second

            val tag = buffer.extractMp3Tag()

            val audioLoaded = CompletableDeferred<Double>()
            val audioSrc = URL.createObjectURL(f)
            val audioElement = document.audio {
                src = audioSrc
                ondurationchange = {
                    audioLoaded.complete(duration)
                }
                load()
            }
            val duration = audioLoaded.await()
            audioElement.src = ""
            URL.revokeObjectURL(audioSrc)

            fun List<String>.join(): String {
                return map { it.trim() }
                    .filter { it.isNotBlank() }
                    .distinct()
                    .joinToString("; ")
            }

            Mp3File().apply {
                this.artist.cv = tag.artist.join()
                this.title.cv = tag.title.join()
                this.bytes.cv = f.size
                this.secs.cv = duration
            }
        }
    }


}

data class Mp3Tag(
    val artist: List<String> = emptyList(),
    val title: List<String> = emptyList()
)


fun ArrayBuffer.extractMp3Tag(): Mp3Tag {
    return try {
        val tag = id3v2_3(this)

        val artists = listOf(
            Frames.TPE1,
            Frames.TPE2,
            Frames.TPE3,
            Frames.TPE4
        )
        val titles = listOf(
            Frames.TIT1,
            Frames.TIT2,
            Frames.TIT3
        )

        fun list(frs: List<Frames.Frame>): List<String> {
            return frs
                .flatMap { fr ->
                    tag.text.getOrElse(fr.name) { listOf() }
                }
        }

        Mp3Tag(
            artist = list(artists),
            title = list(titles)
        )
    } catch (e: Throwable) {
        try {
            val tag = id3v1(this)

            Mp3Tag(
                artist = listOf(tag.artist),
                title = listOf(tag.title)
            )
        } catch (e: Throwable) {
            Mp3Tag()
        }
    }

}