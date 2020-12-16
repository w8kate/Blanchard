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
