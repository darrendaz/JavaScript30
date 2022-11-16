const checkboxes = document.querySelectorAll('input[type="checkbox"]')
const checkboxesArray = Array.from(checkboxes)
let shiftKeyDown = false

// Add event listeners to each checkbox
checkboxes.forEach((checkbox, i) => {
    checkbox.addEventListener('click', (e) => {

        if (shiftKeyDown && e.currentTarget.checked) {
            console.log(i)
        }

        let checked = checkboxesArray.filter((checkbox, i) => checkbox.checked === true)

        // console.log(checked);

    })

    // if checkbox.check

    // let something = item

    //     // use the range to apply checked state to all items with indexes within the range
    // }
})


// on click checkbox, check if there is a previous

window.addEventListener('keydown', (e) => {
    shiftKeyDown = !!(e.key.toLowerCase() == 'shift')
})

window.addEventListener('keyup', (e) => {
    shiftKeyDown = !(e.key.toLowerCase() == 'shift')
})

function selectMultiple (shiftKeyDown) {
    shiftKeyDown === false ? '' : () => {
        console.log(shiftKeyDown);
    }
}