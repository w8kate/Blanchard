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
                    }
                    for (let j = i + 1; j < buttonList.length; j++) {
                        buttonList[j].classList.remove('header-list__item-btn--active')
                        scrollbarList[j].classList.remove('header-list__item-scrollbar--active')
                    }
                    buttonList[i].classList.toggle('header-list__item-btn--active')
                    scrollbarList[i].classList.toggle('header-list__item-scrollbar--active')
                    ind = 1;
                }
            }
            if (ind === 0) {
                for (let j = 0; j < buttonList.length; j++) {
                    buttonList[j].classList.remove('header-list__item-btn--active')
                    scrollbarList[j].classList.remove('header-list__item-scrollbar--active')
                }
            }
        })     
    }

    openScrollbar();



    // adaptive search on max-width < 1920
    let search = document.querySelector('.search');
    let searchForm = document.querySelector('.header-form--adaptive');
    let searchFormInput = document.querySelector('.header-form__input--adaptive');
    let searchFormButton = document.querySelector('.header-form__button--adaptive');
    let searchFormCross = document.querySelector('.header-form__cross--adaptive');
    document.addEventListener('click', function(e) {
        if (screen.width >= 1024 && screen.width < 1920) {
            if (e.target === search) {
                search.classList.add('search--active');
                searchForm.classList.add('header-form--adaptive--active');
            }
            else {
                if (e.target !== searchFormInput && e.target !== searchFormButton) {
                    search.classList.remove('search--active');
                    searchForm.classList.remove('header-form--adaptive--active');
                }
            }
        }
        if (screen.width >= 768 && screen.width < 1024) {
            if (e.target === search) {
                search.classList.add('search--active');
                document.querySelector('.logo').classList.add('logo--none');
                document.querySelector('.burger').classList.add('burger--none');
                searchForm.classList.add('header-form--adaptive--active');
            }
            if (e.target === searchFormCross) {
                search.classList.remove('search--active');
                document.querySelector('.logo').classList.remove('logo--none');
                document.querySelector('.burger').classList.remove('burger--none');
                searchForm.classList.remove('header-form--adaptive--active');
            }
        }
        if (screen.width < 767) {
            if (e.target === search) {
                searchForm.classList.add('header-form--adaptive--active');
            }
            if (e.target === searchFormCross) {
                searchForm.classList.remove('header-form--adaptive--active');
            }
        }
    })
    
    

    // adaptive burger on max-width < 1920
    let burger = document.querySelector('.burger');
    let menu = document.querySelector('.menu');
    let menuCross = document.querySelector('.menu__cross');
    burger.addEventListener('click', function() {
        menu.classList.add('menu--active');
    })
    menuCross.addEventListener('click', function() {
        menu.classList.remove('menu--active');
    })

    let menuList = document.querySelectorAll('.menu__item-text');
    document.addEventListener('click', function(e) {
        menuList.forEach(element => {
            if (e.target === element) {
                menu.classList.remove('menu--active');
            }
        });
    })



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

})();