// function debounce(func, wait = 20, immediate = true) {
//     var timeout;
//     return function() {
//       var context = this, args = arguments;
//       var later = function() {
//         timeout = null;
//         if (!immediate) func.apply(context, args);
//       };
//       var callNow = immediate && !timeout;
//       clearTimeout(timeout);
//       timeout = setTimeout(later, wait);
//       if (callNow) func.apply(context, args);
//     };
//   }
function debounce(func, timeout = 50) {
  let timer;
  return (...args) => {

    clearTimeout(timer);
    timer = setTimeout(() => {
        func.apply(this, args)
      }, timeout)
  }
}


const sliderImages = document.querySelector('.slide-in')

window.addEventListener('scroll', debounce(checkSlide, 150))

function checkSlide(e){
  console.log(e)
}