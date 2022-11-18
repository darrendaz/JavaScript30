const video = document.querySelector('.player__controls player__video, .viewer')
const playButton = document.querySelector('.player__controls .player__button, .toggle')
const progressBar = document.querySelector('.player__controls .progress')
const progressFill = document.querySelector('.player__controls .progress__filled')
const volumeControls = document.querySelector('.player__controls input[name="volume"]');
const playbackRateControls = document.querySelector('.player__controls input[name="playbackRate"]');

let playing = false
let mouseDown
let originX = 0

window.addEventListener('load', handlePageLoad);
video.addEventListener('click', handleClickVideo)
progressBar.addEventListener('mousedown', handleMouseDownProgressBar)
window.addEventListener('mousedown', handleMouseDown)
window.addEventListener('mouseup', handleMouseUp)
window.addEventListener('mousemove', handleMouseMove)


function handleClickVideo() {
    
    !playing ? video.play() : video.pause()
    playing = !playing
}

function handlePageLoad() {
    video.currentTime = 0
}

function handleMouseDownProgressBar(e) {
    originX = e.offsetX
    e.target.style.background = '#ffffff'
}

function handleMouseDown(e) {
    mouseDown = true
    // console.log(e.target)
    // if (e.target === progressBar){
        
    // }

}

function handleMouseUp(e){
    mouseDown = false
    let change = e.offsetX - originX

}

function handleMouseMove(e) {
    if (mouseDown) {
        // console.log(e.offsetX, e.offsetY)
        // console.log(progressFill)
        // console.log(progressBar)
        // console.log(volumeControls)
        // console.log(playbackRateControls)
    }
    
}