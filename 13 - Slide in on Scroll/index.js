function debounce(func, timeout = 50) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
        func.apply(this, args)
      }, timeout)
  }
}

const sliderImages = document.querySelectorAll('.slide-in')

window.addEventListener('scroll', debounce(checkSlide))

function checkSlide(){
  sliderImages.forEach((image) => {
    const slideInAt = (window.scrollY + window.innerHeight) - (image.height / 2)
    const imageBottom = image.offsetTop + image.height
    const isHalfShown = slideInAt > image.offsetTop
    const notScrolledPast = window.scrollY < imageBottom

    if (isHalfShown && notScrolledPast){
      image.classList.add('active')
    } else{
      image.classList.remove('active')
    }
  });
}