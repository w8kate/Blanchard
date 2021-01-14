document.querySelector('.events__btn').addEventListener('click', function() {
  document.querySelectorAll('.events__item').forEach(element => {
    element.classList.remove('events__item--none');
  });
})
