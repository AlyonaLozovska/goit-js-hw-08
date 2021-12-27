// import Simplelightbox from "simplelightbox";
// import 'simplelightbox/dist/simple-lightbox.min.css';
// import { galleryItems } from './gallery-items';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryImg = document.querySelector('.gallery');

const imagesMarkup = galleryItems
.map(({preview,original,description}) => 
`<div class = "gallery__item">
<a class = "gallery__link" href = "${original}">
<img class = "gallery__image"
  src = "${preview}"
  data-source = "${original}"
  alt = "${description}"/>
</a></div>`).join("");

galleryImg.insertAdjacentHTML('afterbegin', imagesMarkup);

let gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
});

console.log(galleryItems);