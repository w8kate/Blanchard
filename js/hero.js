let swiperHero = new Swiper('.swiper-container-hero', {
  loop: true,
})

let timerId;

clearInterval(timerId)
timerId = setInterval(nextSlide, 6000);

function nextSlide() {
  swiperHero.slideNext(1000, true);
}
