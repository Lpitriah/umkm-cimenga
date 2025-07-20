let currentIndex = 0;

function nextSlide() {
    const slides = document.getElementById("slides");
    currentIndex++;
    if (currentIndex >= 4) currentIndex = 0;
    slides.style.transform = `translateX(-${currentIndex * 100}vw)`;
}
