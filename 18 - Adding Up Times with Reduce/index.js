const timeNodes = document.querySelectorAll('.videos li[data-time]');
const initialValue = 0;

const totalTime = [...timeNodes].reduce((acc, currentValue) => {
  const [minutes, seconds] = currentValue.dataset.time.split(':');

  return (acc += parseFloat(minutes) * 60 + parseFloat(seconds));
}, initialValue);

const output = new Date(totalTime * 1000).toISOString().substring(11, 19);

console.log(output.replace(/[:]/g, ' '));
