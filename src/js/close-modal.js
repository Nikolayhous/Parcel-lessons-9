  //функция для закрывания модалього окна при нажатии на кнопку
  import {refs} from './refs.js';
  import {onEscKeydown} from './onEscKeydown.js';
  export function CloseModalBtn() {
    window.removeEventListener('keydown', onEscKeydown);
    refs.lightbox.classList.remove('is-open');
    refs.lightboxImage.src = '';
    refs.lightboxImage.alt = '';
  }
  