// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line
const list = document.querySelector('.gallery');

list.insertAdjacentHTML('beforeend', createGalleryMarkup(galleryItems));
list.addEventListener('click', handleClick);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ description, original, preview }) => {
      return `
          <li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </li>
        `;
    })
    .join('');
}

function handleClick(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== 'IMG') {
    return;
  }
}



new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
//   const instance = basicLightbox.create(`
//         <img
//         class="gallery__image"
//         src="${evt.target.dataset.source}"
//         width="800" height="600"
//       />
//       `);
// console.log(instance);
//   instance.show();
// }
console.log(galleryItems);
