let selector = document.querySelector("input[type='tel']");

let im = new Inputmask("+7(999) 999-99-99");
im.mask(selector);

new JustValidate('.contacts__form', {
  rules: {
    name: {
      required: true,
      minLength : 2,
      maxLength : 30,
      function: (name, value) => {
        if ((value.search(/\d/) != -1)) {
			return false;
		} else {
			return true;
		}
      }
    },
    tel: {
      required: true,
      function: (tel, value) => {
          const phone = selector.inputmask.unmaskedvalue()
          return Number(phone) && phone.length === 10
      }
    },
  },
  messages: {
    name: 'Как вас зовут?',
    tel : ' Укажите ваш телефон',
  },
  colorWrong: '#DC143C',

  submitHandler: function(form) {
    let formData = new FormData(form);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log('Отправлено');
        }
      }
    }

    xhr.open('POST', 'send.php', true);
    xhr.send(formData);

    form.reset();
  }
})



ymaps.ready(init);

function init() {

  var myMap = new ymaps.Map("map", {
    center: [55.76055710364783, 37.637672433220025],
    zoom: 14,
    controls: []
  });

  myPlacemark = new ymaps.Placemark([55.758463, 37.601079], {
    hintContent: 'Москва, Леонтьевский переулок, дом 5, строение 1'
  }, {
    iconLayout: 'default#image',
    iconImageHref: '../img/contacts/map.svg',
    iconImageSize: [20, 20],
  })

  myMap.geoObjects.add(myPlacemark);

  myMap.controls.add('geolocationControl', {
    size: 'small',
    float: 'none',
    position: {
      bottom: '310px',
      right: '15px'
    }
  });

  myMap.controls.add('zoomControl', {
    size: 'small',
    float: 'none',
    position: {
      bottom: '363px',
      right: '15px'
    }
  });

  if (screen.width < 1920) {
    function setTypeAndPan () {
      myMap.panTo([55.760083106473566, 37.61861970826679], {});
    }
    setTypeAndPan();
  }

  if (screen.width < 1024) {
    function setTypeAndPan () {
      myMap.panTo([55.759328660219296, 37.61198894079792], {});
    }
    setTypeAndPan();
  }
}


