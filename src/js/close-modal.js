  //функция для закрывания модалього окна при нажатии на кнопку
  import {refs} from './refs'
  export function CloseModalBtn(event) {
    window.removeEventListener('keydown', onEscKeydown);
    refs.lightbox.classList.remove('is-open');
    refs.lightboxImage.src = '';
    refs.lightboxImage.alt = '';
  }
  