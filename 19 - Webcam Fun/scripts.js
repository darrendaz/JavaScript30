const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d', { willReadFrequently: true });
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo() {
  navigator.mediaDevices
    .getUserMedia({
      video: true,
      audio: false,
    })
    .then((localMediaStream) => {
      video.srcObject = localMediaStream;
      video.play();
    })
    .catch((err) => {
      console.error(`Something went wrong...`, err);
    });
}

function paintToCanvas() {
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;

  setInterval(() => {
    // Draw video image to canvas
    ctx.drawImage(video, 0, 0, width, height);
    // Get array of pixel values from video
    let pixels = ctx.getImageData(0, 0, width, height);
    // Apply red effect to array of pixel values
    // pixels = applyRedEffect(pixels);

    // Apply RGB split effect to array of pixel values
    // pixels = applyRGBSplitEffect(pixels);

    // Apply alpha trail effect
    // ctx.globalAlpha = 0.02;

    // Apply green screen effect
    pixels = applyGreenScreenEffect(pixels);
    // Put the pixel values on canvas
    ctx.putImageData(pixels, 0, 0);
  }, 16);
}

function takePhoto() {
  // Play the snap sound
  snap.currentTime = 0;
  snap.play();

  // Take the data from the canvas
  const data = canvas.toDataURL('image/jpeg');
  const link = document.createElement('a');
  link.href = data;
  link.setAttribute('download', 'webcam snapshot');
  link.innerHTML = `<img src="${link.href}" alt="webcam snapshot"/>`;
  strip.insertBefore(link, strip.firstChild);
}

function applyRedEffect(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i] = pixels.data[i] + 100; // RED
    pixels.data[i + 1] = pixels.data[i + 1] - 50; // GREEN
    pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // BLUE
  }
  return pixels;
}

function applyRGBSplitEffect(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i - 300] = pixels.data[i]; // RED
    pixels.data[i + 150] = pixels.data[i + 1]; // GREEN
    pixels.data[i - 300] = pixels.data[i + 2]; // BLUE
  }
  return pixels;
}

function applyGreenScreenEffect(pixels) {
  const levels = {};

  document.querySelectorAll('.rgb input').forEach((input) => {
    levels[input.name] = input.value;
  });

  for (i = 0; i < pixels.data.length; i = i + 4) {
    red = pixels.data[i + 0];
    green = pixels.data[i + 1];
    blue = pixels.data[i + 2];
    alpha = pixels.data[i + 3];

    if (
      red >= levels.rmin &&
      green >= levels.gmin &&
      blue >= levels.bmin &&
      red <= levels.rmax &&
      green <= levels.gmax &&
      blue <= levels.bmax
    ) {
      // take it out!
      pixels.data[i + 3] = 0;
    }
  }
  return pixels;
}

getVideo();

video.addEventListener('canplay', paintToCanvas);
canvas.addEventListener('click', takePhoto);
