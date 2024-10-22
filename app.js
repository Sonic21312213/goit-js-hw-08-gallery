const galleryItems = [
  {
    preview: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
    original: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
    description: 'Tree',
  },
  {
    preview: 'https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg',
    original: 'https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg',
    description: 'Tulips',
  },
];

const galleryContainer = document.querySelector('.js-gallery');
const lightbox = document.querySelector('.js-lightbox');
const lightboxImage = document.querySelector('.lightbox__image');
const closeModalBtn = document.querySelector('[data-action="close-lightbox"]');
const overlay = document.querySelector('.lightbox__overlay');


const galleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
        </a>
      </li>
    `;
  })
  .join('');


galleryContainer.innerHTML = galleryMarkup;


galleryContainer.addEventListener('click', onGalleryItemClick);
closeModalBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
window.addEventListener('keydown', onKeyPress);


function onGalleryItemClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  openModal();
  setModalImage(event.target.dataset.source, event.target.alt);
}


function openModal() {
  lightbox.classList.add('is-open');
}


function setModalImage(source, alt) {
  lightboxImage.src = source;
  lightboxImage.alt = alt;
}


function closeModal() {
  lightbox.classList.remove('is-open');
  clearModalImage();
}


function clearModalImage() {
  lightboxImage.src = '';
  lightboxImage.alt = '';
}

 
function onKeyPress(event) {
  if (event.code === 'Escape') {
    closeModal();
  }
}
