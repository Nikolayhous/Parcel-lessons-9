import {refs} from './refs.js';
import {onOpenClickGallery} from './open-click-gallery.js';
import {CloseModalBtn} from './close-modal.js';
import {onBackdropClick} from './onBackdropClick.js';
import {onArrowLeft, onArrowRight, step} from './onarrow.js'

refs.galleryUl.addEventListener('click', onOpenClickGallery);
refs.closeModalBtn.addEventListener('click', CloseModalBtn);
refs.lightboxOverlay.addEventListener('click', onBackdropClick);

  //скрипт для перелистывания картинок клавишами вправо и влево 
  window.addEventListener("keydown", (event) => {
    if (event.code === "ArrowLeft") {
      onArrowLeft();
    }
    if (event.code === "ArrowRight") {
      onArrowRight();
    }
  });
  