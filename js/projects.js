let projectsIcons = document.querySelectorAll('.projects__desk-icon');
let projectTooltips = document.querySelectorAll('.projects__desk-tooltip');

for (let i = 0; i < projectsIcons.length; i++) {
  projectsIcons[i].addEventListener('keypress', (e) => {
    if (e.keyCode === 13) {
      projectTooltips[i].classList.toggle('projects__desk-tooltip--active');
    }
  })
}

let swiperProjects = new Swiper('.projects-swiper-container', {

  loop: true,

  navigation: {
    nextEl: '.projects-swiper-button-next',
    prevEl: '.projects-swiper-button-prev',
  },

  breakpoints: {
    320: {
      spaceBetween: 0,
      slidesPerView: 1,
    },
    768: {
      spaceBetween: 34,
      slidesPerView: 2,
    },
    1024: {
      spaceBetween: 50,
      slidesPerView: 2,
    },
    1920: {
      spaceBetween: 50,
      slidesPerView: 3,
    },
  },
})

let nextElProjects = document.querySelector('.projects-swiper-button-next');
let prevElProjects = document.querySelector('.projects-swiper-button-prev');


nextElProjects.addEventListener('click', () => {
  nextElProjects.classList.add('swiper-button-active');
})

prevElProjects.addEventListener('click', () => {
  prevElProjects.classList.add('swiper-button-active');
})

document.addEventListener('click', function(e) {
  if (e.target !== nextElProjects) {
    nextElProjects.classList.remove('swiper-button-active');
  }
  if (e.target !== prevElProjects) {
    prevElProjects.classList.remove('swiper-button-active');
  }
})
