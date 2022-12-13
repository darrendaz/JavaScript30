const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');

function getMiles(meters) {
  return meters * 0.000621371192;
}
function getMeters(miles) {
  return miles * 1609.344;
}
navigator.geolocation.watchPosition(
  (data) => {
    speed.textContent = (Math.floor(data.coords.speed * 2.23694) * 10) / 10;
    arrow.style.transform = `rotate(${data.coords.heading}deg)`;
  },
  (err) => {
    console.err(err);
    alert(
      'Something went wrong. Please make sure you allowed location permissions'
    );
  }
);
