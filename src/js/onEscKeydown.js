  //функция для закрывания модалього окна при нажатии на esc
  import {CloseModalBtn} from './close-modal.js';

  export function onEscKeydown(event) {
    const ESC_KEY_CODE = "Escape";
    if (event.code === ESC_KEY_CODE) {
      CloseModalBtn();
    }
  };
  