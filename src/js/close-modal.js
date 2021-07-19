  //функция для закрывания модалього окна при нажатии на кнопку
  function CloseModalBtn(event) {
    window.removeEventListener('keydown', onEscKeydown);
    refs.lightbox.classList.remove('is-open');
    refs.lightboxImage.src = '';
    refs.lightboxImage.alt = '';
  }
  