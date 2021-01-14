(function() {

  function openScrollbar() {
    let buttonList = document.querySelectorAll('.header-list__item-btn');
    let scrollbarList = document.querySelectorAll('.header-list__item-scrollbar');
    document.addEventListener('click', function(event) {
      let target = event.target;
      let ind = 0;
      for (let i = 0; i < buttonList.length; i++) {
        if (buttonList[i] === target) {
          for (let j = 0; j < i; j++) {
            buttonList[j].classList.remove('header-list__item-btn--active')
            scrollbarList[j].classList.remove('header-list__item-scrollbar--active')
            scrollbarList[j].querySelectorAll('.scrollbar__list-item-elem').forEach(element => {
              element.tabIndex = "-1";
            });
          }
          for (let j = i + 1; j < buttonList.length; j++) {
            buttonList[j].classList.remove('header-list__item-btn--active')
            scrollbarList[j].classList.remove('header-list__item-scrollbar--active')
            scrollbarList[j].querySelectorAll('.scrollbar__list-item-elem').forEach(element => {
              element.tabIndex = "-1";
            });
          }
          buttonList[i].classList.toggle('header-list__item-btn--active')
          scrollbarList[i].classList.toggle('header-list__item-scrollbar--active')
          ind = 1;
          if (scrollbarList[i].classList.contains('header-list__item-scrollbar--active')) {
            scrollbarList[i].querySelectorAll('.scrollbar__list-item-elem').forEach(element => {
              element.tabIndex = "0";
            });
          }
          else {
            scrollbarList[i].querySelectorAll('.scrollbar__list-item-elem').forEach(element => {
              element.tabIndex = "-1";
            });
          }
        }
      }
      if (ind === 0) {
        for (let j = 0; j < buttonList.length; j++) {
          buttonList[j].classList.remove('header-list__item-btn--active')
          scrollbarList[j].classList.remove('header-list__item-scrollbar--active')
          scrollbarList[j].querySelectorAll('.scrollbar__list-item-elem').forEach(element => {
            element.tabIndex = "-1";
          });
        }
      }
    })
  }

  openScrollbar();



  function openSearch() {
    let form = document.querySelector('.header-form');
    let input = document.querySelector('.header-form__input');
    let search = document.querySelector('.header-form__button');
    let burger = document.querySelectorAll('.burger-img-elem');
    let logo = document.querySelector('.logo');
    document.addEventListener('click', function(e) {
      if (screen.width >= 1024 && screen.width < 1920) {
        if (e.target.parentNode === search) {
          form.classList.add('header-form--active');
          input.classList.add('header-form__input--active');
          input.setAttribute('placeholder', '');
          e.preventDefault();
        }
        else {
          if (e.target.parentNode !== search && e.target !== input) {
            form.classList.remove('header-form--active');
            input.classList.remove('header-form__input--active');
            input.setAttribute('placeholder', 'Поиск по сайту');
            input.value = '';
          }
        }
      }
      let headerBottom = document.querySelector('.header-bottom');
      let cross = document.querySelector('.header-form__cross');
      if (screen.width >= 768 && screen.width < 1024) {
        if (e.target.parentNode === search) {
          headerBottom.classList.add('header-bottom--active');
          cross.classList.add('header-form__cross--active');
          input.classList.add('header-form__input--active');
          input.setAttribute('placeholder', '');
          burger.forEach(element => {
            element.classList.add('burger-img-elem--none');
          });
          logo.classList.add('logo--none');
          e.preventDefault();
        }
        else {
          if (e.target.parentNode === cross) {
            headerBottom.classList.remove('header-bottom--active');
            cross.classList.remove('header-form__cross--active');
            input.classList.remove('header-form__input--active');
            input.setAttribute('placeholder', 'Поиск по сайту');
            burger.forEach(element => {
              element.classList.remove('burger-img-elem--none');
            });
            logo.classList.remove('logo--none');
          }
        }
      }
      if (screen.width < 768) {
        if (e.target.parentNode === search) {
          headerBottom.classList.add('header-bottom--active');
          form.classList.add('header-form--active');
          cross.classList.add('header-form__cross--active');
          input.classList.add('header-form__input--active');
          input.setAttribute('placeholder', '');
          search.classList.add('header-form__button--active');
          e.preventDefault();
        }
        else {
          if (e.target.parentNode === cross) {
            headerBottom.classList.remove('header-bottom--active');
            form.classList.remove('header-form--active');
            cross.classList.remove('header-form__cross--active');
            input.classList.remove('header-form__input--active');
            input.setAttribute('placeholder', 'Поиск по сайту');
            search.classList.remove('header-form__button--active');
          }
        }
      }
    });
  }

  openSearch();



  function openBurger() {
    let burger = document.querySelector('.burger');
    let menu = document.querySelector('.nav-and-enter');
    let cross = document.querySelector('.nav-and-enter__cross');
    let navItems = document.querySelectorAll('.nav__item-text');
    document.addEventListener('click', function(e) {
        if (e.target.parentNode === burger) {
          menu.classList.add('nav-and-enter--active');
        }
        else {
          if (e.target.parentNode === cross) {
            menu.classList.remove('nav-and-enter--active');
          }
          navItems.forEach(element => {
            if (e.target === element) {
              menu.classList.remove('nav-and-enter--active');
            }
          });
        }
    });
  }

  openBurger();



  // closing search when changing screen width
  function resizeWidthOnly(a,b) {
    var c = [window.innerWidth];
    return onresize = function() {
      var d = window.innerWidth,
          e = c.length;
      c.push(d);
      if(c[e]!==c[e-1]){
        clearTimeout(b);
        b = setTimeout(a, 50);
      }
    }, a;
  }

  resizeWidthOnly(function() {
    let form = document.querySelector('.header-form');
    let input = document.querySelector('.header-form__input');
    let search = document.querySelector('.header-form__button');
    let burger = document.querySelectorAll('.burger-img-elem');
    let logo = document.querySelector('.logo');
    let headerBottom = document.querySelector('.header-bottom');
    let cross = document.querySelector('.header-form__cross');

    form.classList.remove('header-form--active');
    input.classList.remove('header-form__input--active');
    input.setAttribute('placeholder', 'Поиск по сайту');
    input.value = '';
    headerBottom.classList.remove('header-bottom--active');
    cross.classList.remove('header-form__cross--active');
    burger.forEach(element => {
      element.classList.remove('burger-img-elem--none');
    });
    logo.classList.remove('logo--none');
    search.classList.remove('header-form__button--active');
  });



  // smooth scrolling to anchor links
  const anchors = document.querySelectorAll('.nav__item-text')

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()

      const blockID = anchor.getAttribute('href')

      document.querySelector(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }

  const subscribe = document.querySelector('.hero__button')

  subscribe.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = subscribe.getAttribute('href')

    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })



  const element = document.querySelector('#select');
    const choices = new Choices(element, {
      searchEnabled: false, itemSelectText: '', shouldSort: false
    });

  if (document.querySelector('.choises__list').classList.contains('is-active')) {
    document.querySelectorAll('.choises__item').forEach(element => {
      element.tabIndex = "1";
    });
  }

})();

