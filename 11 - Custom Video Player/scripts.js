const video = document.querySelector('.player__controls player__video, .viewer')
const playButton = document.querySelector('.player__controls .player__button, .toggle')
const progressContainer = document.querySelector('.player__controls .progress')
const progressBar = document.querySelector('.player__controls .progress__filled')
const playbackRateToggle = document.querySelector('.player__button.playback__rate');
const playbackRateControls = document.querySelector('.player__controls input[name="playbackRate"]');
const volumeControls = document.querySelector('.player__controls input[name="volume"]');
const rewindButton = document.querySelector('.player__controls [data-skip="-10"]')
const fastforwardButton = document.querySelector('.player__controls [data-skip="25"]')

window.addEventListener('load', handlePageLoad);

video.addEventListener('click', handleClickPlay);
video.addEventListener('timeupdate', updateProgressBar);
playButton.addEventListener('click', handleClickPlay);
rewindButton.addEventListener('click', handleRewind);
fastforwardButton.addEventListener('click', handleFastforward);
volumeControls.addEventListener('input', handleChangeVolume)
playbackRateControls.addEventListener('input', handleChangePlaybackRate)
playbackRateToggle.addEventListener('click', handleClickPlaybackRateToggle)

progressContainer.addEventListener('click', scrub);
progressContainer.addEventListener('mousedown', () => mousedown = true);
progressContainer.addEventListener('mouseup', () => mousedown = false );
progressContainer.addEventListener('mousemove', (e) => mousedown && scrub(e))

let mousedown = false
let originX = 0


function scrub(e) {
    const scrubTime = (e.offsetX / progressContainer.offsetWidth) * video.duration
    console.log('scrub time: ', scrubTime)
    video.currentTime = scrubTime
}

function updateProgressBar() {
    let percentage = video.currentTime / video.duration * 100
    console.log(percentage); 
    progressBar.style.flexBasis = `${percentage}%`
}

function handleChangeVolume() {
    video.volume = this.value
}

function handleChangePlaybackRate() {
    playbackRateToggle.innerHTML = `${this.value}x`;
    video.playbackRate = this.value;
}

function handleClickPlaybackRateToggle() {
    if(video.playbackRate <= parseFloat(playbackRateControls.max)){
        video.playbackRate += parseFloat(playbackRateControls.step);
        playbackRateToggle.innerHTML = `${video.playbackRate}x`;
        playbackRateControls.value = `${video.playbackRate}`
    }
    
    if(video.playbackRate > parseFloat(playbackRateControls.max)) {
        video.playbackRate = parseFloat(playbackRateControls.min);
        playbackRateToggle.innerHTML = `${video.playbackRate}x`;
        playbackRateControls.value = `${video.playbackRate}`
    }
}

function handleClickPlay() {
    video.paused ? video.play() : video.pause()
    video.paused ? playButton.innerHTML = '►' : playButton.innerHTML = '🁢🁢' 
}

function handleRewind() {
    let rewindTime = this.dataset.skip
    video.currentTime >= Math.abs(rewindTime) ? 
    video.currentTime += parseFloat(rewindTime) : 
        video.currentTime = parseFloat(0)
}
    
function handleFastforward() {
    let forwardTime = this.dataset.skip
    video.duration > Math.abs(video.currentTime) + forwardTime ? 
    video.currentTime += parseFloat(forwardTime) : 
    video.currentTime = video.duration
}
    
function handlePageLoad() {
    video.currentTime = 0
}
