(function() {

  window.addEventListener('DOMContentLoaded', function() {

    $( function() {
      $( "#accordion" ).accordion ();
    } );

    $("#accordion").accordion({
		heightStyle: "content"
    });

    $("#accordion").accordion({ header: "h3", active: false });

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

      document.querySelector(`[data-artist="${path}"]`).classList.add('catalog-tab--active')
    })
  });

})();

