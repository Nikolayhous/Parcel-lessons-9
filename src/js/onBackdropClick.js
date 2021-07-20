  //функция для закрывания модалього окна при нажатии на бекдроп-оверлей

  import {CloseModalBtn} from './close-modal.js';

  export function onBackdropClick(event) {
    if (event.currentTarget === event.target) {
      CloseModalBtn();
    }
  }