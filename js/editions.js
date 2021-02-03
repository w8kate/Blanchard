(() => {
  window.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('click', (e) => {
      document.querySelectorAll('.categories__label-check').forEach(element => {
        if (e.target === element) {
          element.classList.toggle('categories__label-check--on');
        }
      });
    })

    const editionsCheckBoxes = document.querySelectorAll('.categories__label-check')
    const editionsInputs = document.querySelectorAll('.categories__check')

    for (let i = 0; i < editionsCheckBoxes.length; i++) {
      editionsCheckBoxes[i].addEventListener('keypress', (e) => {
        if (e.key == 'Enter') {
          editionsCheckBoxes[i].classList.toggle('categories__label-check--on');
          if (editionsInputs[i].checked) {
            editionsInputs[i].removeAttribute('checked');
          } else {
            editionsInputs[i].setAttribute('checked', '');
          }
        }
      })
    }

  })
})();

let swiperEditions = new Swiper('.swiper-container-editions', {

  navigation: {
    nextEl: '.swiper-button-next-editions',
    prevEl: '.swiper-button-prev-editions',
  },

  breakpoints: {
    768: {
      spaceBetween: 31,
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    1024: {
      spaceBetween: 49,
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    1920: {
      spaceBetween: 50,
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  },

  on: {
    slideNextTransitionStart: function() {
      document.querySelector('.swiper-pages__actual-editions').textContent = parseInt(actualNumberEditions.textContent) + 1;
    },
    slidePrevTransitionStart: function() {
      document.querySelector('.swiper-pages__actual-editions').textContent = parseInt(actualNumberEditions.textContent) - 1;
    },
  }
});

let nextElEditions = document.querySelector('.swiper-button-next-editions');
let prevElEditions = document.querySelector('.swiper-button-prev-editions');
let actualNumberEditions = document.querySelector('.swiper-pages__actual-editions');


nextElEditions.addEventListener('click', () => {
  nextElEditions.classList.add('swiper-button-active');
})

prevElEditions.addEventListener('click', () => {
  prevElEditions.classList.add('swiper-button-active');
})

document.addEventListener('click', function(e) {
  if (e.target !== nextElEditions) {
    nextElEditions.classList.remove('swiper-button-active');
  }
  if (e.target !== prevElEditions) {
    prevElEditions.classList.remove('swiper-button-active');
  }
})



nextElEditions.addEventListener('keypress', (e) => {
  if (e.keyCode === 13) {
    actualNumberEditions.textContent = parseInt(actualNumberEditions.textContent) + 1;
  }
})

prevElEditions.addEventListener('keypress', (e) => {
  if (e.keyCode === 13) {
    actualNumberEditions.textContent = parseInt(actualNumberEditions.textContent) - 1;
  }
})



if (screen.width < 1920) {
  document.querySelector('.swiper-pages__all-editions').textContent = 4;
}

if (screen.width < 768) {
  document.querySelector('.swiper-container-editions').classList.remove('swiper-container');
  document.querySelector('.swiper-wrapper-editions').classList.remove('swiper-wrapper');
  document.querySelectorAll('.swiper-slide-editions').forEach (el => {
    el.classList.remove('swiper-slide');
  });

  let checkBoxItems = document.querySelectorAll('.categories__checkbox-item');
  let checkBoxInputs = document.querySelectorAll('.categories__check');
  for (let i = 0; i < checkBoxInputs.length; i++) {
    if (!checkBoxInputs[i].checked) {
      checkBoxItems[i].classList.add('categories__checkbox-item--none');
    }
  };

  for (let i = 0; i < checkBoxItems.length; i++) {
    checkBoxItems[i].addEventListener('click', () => {
      if (checkBoxInputs[i].checked && !document.querySelector('.categories__title-arrow').classList.contains('categories__title-arrow--active')) {
        checkBoxInputs[i].checked = false;
        checkBoxItems[i].classList.add('categories__checkbox-item--none');
      }
    });
  }

  document.querySelector('.categories__title').addEventListener('click', () => {
    document.querySelector('.categories__title-arrow').classList.toggle('categories__title-arrow--active');
    for (let i = 0; i < checkBoxInputs.length; i++) {
      if (!checkBoxInputs[i].checked) {
        checkBoxItems[i].classList.toggle('categories__checkbox-item--none');
      }
    };
  })
}
