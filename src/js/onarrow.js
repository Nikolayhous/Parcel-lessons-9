import {galleryItems} from './main-objects.js'
import {refs} from './refs.js'
  
  //скрипт для перелистывания картинок клавишами вправо и влево 
  window.addEventListener("keydown", (event) => {
    if (event.code === "ArrowLeft") {
      onArrowLeft();
    }
    if (event.code === "ArrowRight") {
      onArrowRight();
    }
  });

   export function onArrowLeft() {
    let index = +refs.lightboxImage.dataset.index;
    if (index === 0) {
      step(galleryItems.length - 1);
      return;
    }
    step(index, -1);
  }
  export function onArrowRight() {
    let index = +refs.lightboxImage.dataset.index;
    if (index === galleryItems.length - 1) {
      step(0);
      return;
    }
    step(index, 1);
  }
  
   export function step(index, step = 0) {
    refs.lightboxImage.dataset.index = `${index + step}`;
    refs.lightboxImage.src = galleryItems[index + step].original;
  }

