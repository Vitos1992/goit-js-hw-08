import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const imgArr = galleryItems
  .map(({ preview, original, description }) => {
    return;
    `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img 
    class="gallery__image"
    src="${preview}" 
    alt="${description}" />
    </a>
</li>`;
  })
  .join('');

gallery.insertAdjacentHTML('beforeend', imgArr);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  showCounter: false,
  close: false,
});

// //

// // Add imports above this line
// import SimpleLightbox from 'simplelightbox';
// // Додатковий імпорт стилів
// import 'simplelightbox/dist/simple-lightbox.min.css';
// import { galleryItems } from './gallery-items';
// // Change code below this line
// console.log(galleryItems);
// const galleryRef = document.querySelector('.gallery');
// const markup = galleryItems
//   .map(({ preview, original, description }) => {
//     return `
//       <li class="gallery__item">
//    <a class="gallery__link" href="${original}">
//       <img class="gallery__image" src="${preview}" alt="${description}" />
//    </a>
// </li>
//     `;
//   })
//   .join('');
// galleryRef.insertAdjacentHTML('beforeend', markup);
// const gallery = new SimpleLightbox('.gallery a', {
//   captionsData: 'alt',
//   captionDelay: 250,
//   close: false,
//   enableKeyboard: true,
// });
