const video = document.querySelector('player__video, .viewer')
const playButton = document.querySelector('.player__button, .toggle')

video.addEventListener('click', handleClickVideo)
let playing = true

function handleClickVideo(e) {
    playing = !playing

    playing ? video.pause() : video.play()
}
