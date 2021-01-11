let swiperGallery = new Swiper('.swiper-container', {
  // Optional parameters
  spaceBetween: 50,
  slidesPerView: 3,
  slidesPerColumn: 2,
  slidesPerGroup : 3,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    320: {
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerColumn: 1,
      slidesPerGroup : 1,
    },
    768: {
      spaceBetween: 34,
      slidesPerView: 2,
      slidesPerColumn: 2,
      slidesPerGroup : 2,
    },
    1024: {
      spaceBetween: 34,
      slidesPerView: 2,
      slidesPerColumn: 2,
      slidesPerGroup : 2,
    },
    1920: {
      spaceBetween: 50,
      slidesPerView: 3,
      slidesPerColumn: 2,
      slidesPerGroup : 3,
    },
  },

  on: {
    slideNextTransitionStart: function() {
      document.querySelector('.swiper-pages__actual').textContent = parseInt(actualNumber.textContent) + 1;
    },
    slidePrevTransitionStart: function() {
      document.querySelector('.swiper-pages__actual').textContent = parseInt(actualNumber.textContent) - 1;
    },
  }
});



let nextEl = document.querySelector('.swiper-button-next');
let prevEl = document.querySelector('.swiper-button-prev');
let actualNumber = document.querySelector('.swiper-pages__actual');



nextEl.addEventListener('click', () => {
  nextEl.classList.add('swiper-button-active');
})

prevEl.addEventListener('click', () => {
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



if (screen.width < 1920) {
  document.querySelector('.swiper-pages__all').textContent = 8;
}

if (screen.width < 768) {
  document.querySelector('.swiper-pages__all').textContent = 18;
}
