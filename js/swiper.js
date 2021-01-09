let swiperGallery = new Swiper('.swiper-container', {
  // Optional parameters
  spaceBetween: 50,
  slidesPerView: 3,
  slidesPerColumn: 2,
  slidesPerGroup : 3,
  simulateTouch : false,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})



let nextEl = document.querySelector('.swiper-button-next');
let prevEl = document.querySelector('.swiper-button-prev');
let actualNumber = document.querySelector('.swiper-pages__actual');



nextEl.addEventListener('click', () => {
  actualNumber.textContent = parseInt(actualNumber.textContent) + 1;
  nextEl.classList.add('swiper-button-active');
})

prevEl.addEventListener('click', () => {
  actualNumber.textContent = parseInt(actualNumber.textContent) - 1;
  prevEl.classList.add('swiper-button-active');
})

document.addEventListener('click', function(e) {
  if (e.target !== nextEl) {
    nextEl.classList.remove('swiper-button-active');
  }
  if (e.target !== prevEl) {
    prevEl.classList.remove('swiper-button-active');
  }
})



nextEl.addEventListener('keypress', (e) => {
  if (e.keyCode === 13) {
    actualNumber.textContent = parseInt(actualNumber.textContent) + 1;
  }
})

prevEl.addEventListener('keypress', (e) => {
  if (e.keyCode === 13) {
    actualNumber.textContent = parseInt(actualNumber.textContent) - 1;
  }
})
