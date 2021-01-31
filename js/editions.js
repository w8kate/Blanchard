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
