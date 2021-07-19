  //функция для закрывания модалього окна при нажатии на бекдроп-оверлей
  function onBackdropClick(event) {
    if (event.currentTarget === event.target) {
      CloseModalBtn();
    }
  }