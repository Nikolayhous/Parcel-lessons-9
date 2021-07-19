  
  import {galleryItems} from './main-objects.js';
  //создал разметку галереи через метод map
  // const itemCardsGallery =  createElement ();
  function createElement () {
    return galleryItems
        .map(({ original, preview, description }, index) => {
          return `
        <li class = gallery__item> 
          <a href="${original}" class = gallery__link>
            <img 
              class = gallery__image 
              src="${preview}" 
              alt= "${description}" 
              data-source='${original}'
              data-index='${index}'> 
          </a>
        </li>
    `;
        })
        .join('');
      };
    refs.galleryUl.insertAdjacentHTML('beforeend', createElement());
    console.log(refs.galleryUl);