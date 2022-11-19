const video = document.querySelector(
    '.player__controls player__video, .viewer')
const playButton = document.querySelector(
    '.player__controls .player__button, .toggle')
const progress = document.querySelector(
    '.player__controls .progress')
const progressBar = document.querySelector(
    '.player__controls .progress__filled')
const volumeControls = document.querySelector(
    '.player__controls input[name="volume"]');
const playbackRateControls = document.querySelector(
    '.player__controls input[name="playbackRate"]');
const rewindButton = document.querySelector(
    '.player__controls [data-skip="-10"]')
const fastforwardButton = document.querySelector(
    '.player__controls [data-skip="25"]')

let mouseDown
let originX = 0

window.addEventListener('load', handlePageLoad);
video.addEventListener('click', handleClickPlay);
playButton.addEventListener('click', handleClickPlay);
rewindButton.addEventListener('click', handleRewind);
fastforwardButton.addEventListener('click', handleFastforward);
progress.addEventListener('mousedown', handleMouseDownProgress);
// window.addEventListener('mousedown', handleMouseDown)
// window.addEventListener('mouseup', handleMouseUp)
// window.addEventListener('mousemove', handleMouseMove)


function handleClickPlay() {
    
    video.paused ? video.play() : video.pause()
    video.paused ? playButton.innerHTML = '►' : playButton.innerHTML = '🁢 🁢' 
}

function handleRewind() {
    let rewindTime = this.dataset.skip
    video.currentTime >= Math.abs(rewindTime) ? 
        video.currentTime += parseFloat(rewindTime) : 
        video.currentTime = parseFloat(0)
}

function handleFastforward() {
    console.log('fast forwarding')
    let forwardTime = this.dataset.skip
    video.duration > Math.abs(video.currentTime) + forwardTime ? 
        video.currentTime += parseFloat(forwardTime) : 
        video.currentTime = video.duration
    console.log(video.currentTime)
}

function handlePageLoad() {
    video.currentTime = 0
}

function handleMouseDownProgress(e) {
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