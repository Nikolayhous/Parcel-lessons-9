import {galleryItems} from './main-objects.js'
import {refs} from './refs.js'
  
  //скрипт для перелистывания картинок клавишами вправо и влево 

   function onArrowLeft() {
    let index = +refs.lightboxImage.dataset.index;
    if (index === 0) {
      step(galleryItems.length - 1);
      return;
    }
    step(index, -1);
  }
   function onArrowRight() {
    let index = +refs.lightboxImage.dataset.index;
    if (index === galleryItems.length - 1) {
      step(0);
      return;
    }
    step(index, 1);
  }
  
   function step(index, step = 0) {
    refs.lightboxImage.dataset.index = `${index + step}`;
    refs.lightboxImage.src = galleryItems[index + step].original;
  }

  export default {onArrowLeft, onArrowRight, step}
