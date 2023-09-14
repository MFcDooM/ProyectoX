// script.js

let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.querySelectorAll('.destacado');
    if (slides.length === 0) return;

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.transform = 'translateX(100%)';
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.transform = 'translateX(0%)';
    setTimeout(showSlides, 5000); // Cambia la imagen cada 5 segundos
}

function nextSlide() {
    slideIndex++;
    showSlides();
}

function prevSlide() {
    slideIndex--;
    showSlides();
}
