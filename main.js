const slides = document.querySelectorAll('.slide');
const slides1 = document.querySelectorAll('.slide1');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true;
const intervalTime = 5000;
let slideInterval;
let slideInterval1;

const nextSlide = () => {
    // Get current class 
    const current = document.querySelector('.current');
    // Remove current class
    current.classList.remove('current');
    // Check for next slide
    if(current.nextElementSibling){
        // Add current to next sibling
        current.nextElementSibling.classList.add('current');
    } else {
        // Add current to start
        slides[0].classList.add('current');
    }
    setTimeout( () => current.classList.remove('current'));
}

const prevSlide = () => {
    // Get current class 
    const current = document.querySelector('.current');
    // Remove current class
    current.classList.remove('current');
    // Check for prev slide
    if(current.previousElementSibling){
        // Add current to prev sibling
        current.previousElementSibling.classList.add('current');
    } else {
        // Add current to start
        slides[slides.length - 1].classList.add('current');
    }
    setTimeout( () => current.classList.remove('current'));
}

const nextSlide1 = () => {
    // Get current class 
    const current1 = document.querySelector('.current1');
    // Remove current class
    current1.classList.remove('current1');
    // Check for next slide
    if(current1.nextElementSibling){
        // Add current to next sibling
        current1.nextElementSibling.classList.add('current1');
    } else {
        // Add current to start
        slides1[0].classList.add('current1');
    }
    setTimeout( () => current1.classList.remove('current1'));
}

const prevSlide1 = () => {
    // Get current class 
    const current1 = document.querySelector('.current1');
    // Remove current class
    current1.classList.remove('current1');
    // Check for prev slide
    if(current1.previousElementSibling){
        // Add current to prev sibling
        current1.previousElementSibling.classList.add('current1');
    } else {
        // Add current to start
        slides1[slides1.length - 1].classList.add('current1');
    }
    setTimeout( () => current1.classList.remove('current1'));
}

next.addEventListener('click', e => {
    nextSlide();
    if(auto){
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});
prev.addEventListener('click', e => {
    prevSlide();
    if(auto){
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

// Auto silde
if(auto){
    // Run next slide at interval time
    slideInterval = setInterval(nextSlide, intervalTime);
    slideInterval1 = setInterval(nextSlide1, intervalTime);
}