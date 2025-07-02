const gallery = document.querySelector('.gallery');
const galleryItems = document.querySelectorAll('.gallery-item');
const galleryContainer = document.querySelector('.gallery-container');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.querySelector('.lightbox-image');
const closeButton = document.querySelector('.close-button');

let counter = 0;
let itemWidth = 0;
let containerWidth = 0;
let gap = 0;

function updateDimensions() {
    if (galleryItems.length > 0) {

        itemWidth = galleryItems[0].offsetWidth;
    }
    containerWidth = galleryContainer.clientWidth;

    const galleryStyle = window.getComputedStyle(gallery);

    gap = parseFloat(galleryStyle.gap) || 0;
}
function scrollToImage(index) {

    index = Math.max(0, Math.min(index, galleryItems.length - 1));
    counter = index;


    const itemOffset = counter * (itemWidth + gap);


    const translation = (containerWidth / 2) - (itemWidth / 2) - itemOffset;

    gallery.style.transform = `translateX(${translation}px)`;
}

updateDimensions();
scrollToImage(0);

nextButton.addEventListener('click', () => {
    if (counter < galleryItems.length - 1) {
        scrollToImage(counter + 1);
    }
});
prevButton.addEventListener('click', () => {
    if (counter > 0) {
        scrollToImage(counter - 1);
    }
});

galleryItems.forEach((item, index) => {
    const image = item.querySelector('img');
    image.addEventListener('click', () => {
        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;
        lightbox.classList.add('active');
    });
});
closeButton.addEventListener('click', () => {
    lightbox.classList.remove('active');
});
lightbox.addEventListener('click', (event) => {

    if (event.target === lightbox) {
        lightbox.classList.remove('active');
    }
});

window.addEventListener('resize', () => {
    updateDimensions();
    scrollToImage(counter);
});
