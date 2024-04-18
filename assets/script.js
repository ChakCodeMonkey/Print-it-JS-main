const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
]

const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const bannerImg = document.querySelector('.banner-img');
const taglineContainer = document.querySelector('#banner p');
const dotsContainer = document.querySelector('.dots');
const numSlides = slides.length;
let currentIndex = 0;

for (let i = 0; i < numSlides; i++) {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (i === 0) {
        dot.classList.add('dot_selected');
    }
    dotsContainer.appendChild(dot);
}


function previousSlide() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = 3;
    }
    displaySlide(currentIndex);
}

function nextSlide() {
    currentIndex++;
    if (currentIndex >= 4) {
        currentIndex = 0;
    }
    displaySlide(currentIndex);
}

function displaySlide(index) {
    console.log(index);
    console.log(slides.length)
    taglineContainer.innerHTML = slides[index].tagLine;
    bannerImg.src = `/assets/images/slideshow/${slides[index].image}`;

    const dots = document.querySelectorAll('.dot');

    for (let i = 0; i < dots.length; i++) {
        if (i === index) {
            dots[i].classList.add('dot_selected');
        } else {
            dots[i].classList.remove('dot_selected');
        }
    }
}

arrowLeft.addEventListener ('click', previousSlide);
arrowRight.addEventListener ('click', nextSlide);