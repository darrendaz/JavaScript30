const items = document.querySelectorAll('.item')
let shiftKeyDown = false

items.forEach(item => {
    item.addEventListener('click', (e) => console.log(e))
    if (shiftKeyDown = true) {
        // grab the index of the nearest previous checked element and the current element
        // use the range to apply checked state to all items with indexes within the range
    }
})

window.addEventListener('keydown', (e) => {
    shiftKeyDown = !!(e.key.toLowerCase() == 'shift')
    console.log(shiftKeyDown);
})

window.addEventListener('keyup', (e) => {
    shiftKeyDown = !(e.key.toLowerCase() == 'shift')
    console.log(shiftKeyDown);
})