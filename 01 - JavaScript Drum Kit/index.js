const playSound = (e) => {

// use event keycode to select matching audio file 
const audio = document.querySelector(`audio[data-key="${e.keyCode}"`)

// use event keycode to select key GUI elements

const key = document.querySelector(`div[data-key="${e.keyCode}"]`)

// check that audio is truthy
if (!audio) return;

// add class 'playing' for specificity
key.classList.add('playing')

// prep audio to play from beginning
audio.currentTime = 0;

// play audio
audio.play()

}

const clickPlay = (e) => {
console.log(e.target)
}

const removeTransition = (e) => {
if (e.propertyName !== 'transform') return;
e.target.classList.remove('playing');
}

// create an array of keys
const keys = Array.from(document.querySelectorAll('.key'));

// add event listener to remove playing class after event transition end
keys.forEach(key => {
key.addEventListener('transitionend', removeTransition)
})

// add an onclick to each key that plays the sound
// keys.forEach(key => {  
//   key.addEventListener('click', clickPlay)
// })

// add event listener to the window
window.addEventListener('keydown', playSound);