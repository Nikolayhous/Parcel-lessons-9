  import {refs} from './refs'
  
  //скрипт для перелистывания картинок клавишами вправо и влево 
  window.addEventListener("keydown", (event) => {
    if (event.code === "ArrowLeft") {
      onArrowLeft();
    }
    if (event.code === "ArrowRight") {
      onArrowRight();
    }
  });
  
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