 //функция на событие для просмотра изображения в модальгном окне
 function onOpenClickGallery(event) {
    window.addEventListener('keydown', onEscKeydown);
    event.preventDefault();
    if (event.target.nodeName === 'IMG') {
      refs.lightbox.classList.add('is-open');
      refs.lightboxImage.src = event.target.getAttribute('data-source');
      refs.lightboxImage.alt = event.target.alt;
      refs.lightboxImage.dataset.index = event.target.dataset.index;
    }
    console.log(event.target.nodeName);
    // const isImagesLightboxEl = event.target.classList.contains('lightbox__image');
    // if(!isImagesLightboxEl) {
    //   return;
    // }
    //  if (event.target.nodeName === 'IMG') {
    //  return;
    //  }
  }
  