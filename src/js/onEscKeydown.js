  //функция для закрывания модалього окна при нажатии на esc
  function onEscKeydown(event) {
    const ESC_KEY_CODE = "Escape";
    if (event.code === ESC_KEY_CODE) {
      CloseModalBtn();
    }
    console.log(event);
  }
  