const canvas = document.querySelector('#draw')
const ctx = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

ctx.strokeStyle = '#BADA55'
ctx.lineJoin = 'round'
ctx.lineCap = 'round'

let isDrawing = false
let lastX = 0
let lastY = 0

function draw(e) {
    if (!isDrawing) return;

    ctx.beginPath();
    // ctx.arc(e.clientX, e.clientY, 10, 0, 2 * Math.PI, false);
    // ctx.fillStyle = 'orange';
    // ctx.fill();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
    // lastX = e.offsetX 
    // lastY = e.offsetY
}

// function clearCanvas() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
// }

canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
    // lastX = e.offsetX
    // lastY = e.offsetY
    ctx.moveTo(lastX, lastY);
})
canvas.addEventListener('mouseup', () => isDrawing = false)
canvas.addEventListener('mouseout', () => isDrawing = false)
