const panels = document.querySelectorAll('.panel')

function toggleOpen() {
    this.classList.toggle('open')
}

function toggleActive (e) {
    console.log(e.propertyName)
    if (e.propertyName.includes('flex')){
        this.classList.toggle('open-active')
    }
}

panels.forEach(panel => {
    // panel.addEventListener('mouseover', toggleOpen)
    // panel.addEventListener('mouseleave', mouseleaveClose)
    panel.addEventListener('click', toggleOpen)
    panel.addEventListener('transitionend', toggleActive)
}
)

