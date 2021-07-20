//функция на событие для просмотра изображения в модальгном окне

import {refs} from './refs.js';
import {onEscKeydown} from './onEscKeydown.js';
export function onOpenClickGallery(event) {
    window.addEventListener('keydown', onEscKeydown);
    event.preventDefault();
    if (event.target.nodeName === 'IMG') {
      refs.lightbox.classList.add('is-open');
      refs.lightboxImage.src = event.target.getAttribute('data-source');
      refs.lightboxImage.alt = event.target.alt;
      refs.lightboxImage.dataset.index = event.target.dataset.index;
    }
  }
  