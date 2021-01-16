document.querySelector('.events__btn').addEventListener('click', function() {
  document.querySelectorAll('.events__item').forEach(element => {
    element.classList.remove('events__item--none');
  });
})

if (screen.width >= 768 && screen.width < 1024) {
  document.querySelector('.events__item--three').classList.add('events__item--none');
}



if (screen.width < 768) {
  document.querySelector('.swiper-container-events').classList.add('swiper-container')
  document.querySelector('.events__list').classList.add('swiper-wrapper')
  document.querySelectorAll('.events__item').forEach(element => {
    element.classList.add('swiper-slide');
    element.classList.add('swiper-slide-events');
    element.classList.remove('events__item--none');
  });
}

let swiperEvents = new Swiper('.swiper-container-events', {
  // Optional parameters
  loop: true,
  // Pagination
  pagination: {
    el: '.swiper-pagination',
  },
})
