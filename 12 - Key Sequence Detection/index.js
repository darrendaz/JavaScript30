window.addEventListener('keyup', (e) => {
    keysPressed(e.key)
})

const pressed = []
const secretCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']

function keysPressed (key) {
    pressed.push(key)
    pressed.splice(-pressed.length - 1, pressed.length - secretCode.length)
    if (pressed.join('') === secretCode.join('')){
        cornify_add();
        console.log(pressed.join(''), secretCode.join(''));
    }
}