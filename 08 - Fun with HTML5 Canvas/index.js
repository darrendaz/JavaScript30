const canvas = document.querySelector('#draw')
const ctx = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.globalCompositeOperation = 'difference'


let isDrawing = false
let lastX = 0
let lastY = 0
let [hue, width] = [0,0];

function draw(e) {
    if (!isDrawing) return;
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.lineWidth = width;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
    hue >= 360 ? hue = 0 : hue++;
    width >= 500 ? width = 0 : width++;
    console.log(ctx.lineWidth, hue, width)
    // ctx.arc(e.offsetX, e.offsetY, 10, 0, 2 * Math.PI, false);
    // ctx.fillStyle = 'green';
    // ctx.fill();
}

// function clearCanvas() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
// }

canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
})
canvas.addEventListener('mouseup', () => {
    isDrawing = false;
})
canvas.addEventListener('mouseout', () => isDrawing = false)
