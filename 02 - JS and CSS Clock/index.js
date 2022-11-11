const secondHand = document.querySelector('.second-hand')
const minuteHand = document.querySelector('.minute-hand')
const hourHand = document.querySelector('.hour-hand')

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondsDegrees = (seconds * 6) + 90
    const minutesDegrees = ((minutes / 60) * 360) + 90
    const hoursDegrees = (((hours % 12) / 12) * 360) + 90


    if (secondsDegrees == 90) {
    secondHand.classList.add('no-transition')
    } else {
    secondHand.classList.remove('no-transition')
    }

    if (minutesDegrees == 90) {
    minuteHand.classList.add('no-transition')
    } else {
    minuteHand.classList.remove('no-transition')
    }

    if (hoursDegrees == 90) {
    hourHand.classList.add('no-transition')
    } else {
    hourHand.classList.remove('no-transition')
    }
    
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`

    console.log(hours, minutes, seconds, `${secondsDegrees} degrees`);
    
}

setInterval(setDate, 0);
