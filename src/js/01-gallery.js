// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// Описан в документации
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);


const gallery = document.querySelector('.gallery');

const itemMarkup = galleryItems.map(galleryItem => {
        return `<a class="gallery__item" href="${galleryItem.original}"><img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}" /></a>`
    }).join('')
gallery.insertAdjacentHTML('afterbegin', itemMarkup)


// Библиотека
let lightbox = new SimpleLightbox('.gallery a',{captionDelay:'250ms', captionsData:'alt'});
lightbox.close()