(function() {

  window.addEventListener('DOMContentLoaded', function() {

    $( function() {
      $( "#accordion" ).accordion ();
    } );

    $("#accordion").accordion({
		  heightStyle: "content"
    });

    $("#accordion").accordion({ header: "h3", collapsible: true});

    $('#accordion').accordion({animate: {easing:'linear', duration: 300}});



    document.querySelectorAll('.catalog-tab__btn').forEach(function(tabsBtn) {
        tabsBtn.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path

            document.querySelectorAll('.catalog-tabs__desk-item').forEach(function(tabContent) {
              tabContent.classList.remove('catalog-tab--active')
            })
            document.querySelectorAll('.years-item__btn').forEach(function(tabContent) {
              tabContent.classList.remove('catalog-tab--active')
            })
            document.querySelectorAll('.catalog-tab__btn').forEach(function(tabButton) {
              tabButton.classList.remove('catalog-tab__btn--active')
            })

            document.querySelectorAll(`[data-target="${path}"]`).forEach(function(tabContent) {
              tabContent.classList.add('catalog-tab--active')
            })
            tabsBtn.classList.add('catalog-tab__btn--active')
        })
    })
  })



  document.querySelectorAll('.years-item__btn').forEach(function(artistBtn) {
    artistBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.catalog__artist-item').forEach(function(artistContent) {
        artistContent.classList.remove('catalog-tab--active')
      })
      document.querySelectorAll('.years-item__btn').forEach(function(tabButton) {
        tabButton.classList.remove('years-item__btn--active')
      })

      document.querySelector(`[data-artist="${path}"]`).classList.add('catalog-tab--active')
      artistBtn.classList.add('years-item__btn--active')
    })
  });



  let arrYears = document.querySelectorAll('.years-item')
  let arrYearsTitle = document.querySelectorAll('.years-item__title')
  let arrYearsTitleIcon = document.querySelectorAll('.years-item__title-icon')
  document.addEventListener('click', function(event) {
    let target = event.target;
    for (let i = 0; i < 7; i++) {
      if (arrYears[i] === target || arrYearsTitle[i] === target || arrYearsTitleIcon[i] === target) {
        arrYears.forEach(element => {
          element.classList.remove('years-item__title--border-active')
        });
        if (arrYears[i + 1] && arrYears[i].classList.contains('ui-accordion-header-active')) {
          arrYears[i + 1].classList.add('years-item__title--border-active')
        }
      }
    }
  })



  if (screen.width < 1024) {
    document.querySelector('.catalog__artist-list').id = "artists";

    const artists = document.querySelectorAll('a[href="#artists"]')

    for (let artist of artists) {
      artist.addEventListener('click', function (e) {
        e.preventDefault()

        document.querySelector('#artists').scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      })
    }
  }

})();

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
  location.reload();
});

