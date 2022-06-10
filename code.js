let burgerMenuButton = document.querySelector('.header-bottom__burger-menu');
burgerMenuButton.addEventListener('click', () => {
    burgerMenuButton.classList.toggle('header-bottom__burger-menu_open');
})

let map = L.map('map')
    .setView({
        lat: 53.943970,
        lng: 27.696650,
    }, 15);

let tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let marker = L.marker({
    lat: 53.943970,
    lng: 27.696650
}).addTo(map);

marker.bindPopup("<b>улица Стариновская, 4</b><br>Минск, Беларусь").openPopup();


//slider

const slides = document.querySelectorAll('.feedback__slide');
const nextButton = document.querySelector('.button-next');
const prevButton = document.querySelector('.button-prev');
let slideIndex = 1;
slides.forEach(item => item.style.display = 'none');
showSlides(1);

function timer() {
    let timerID = setInterval(() => {
        plusSlides(1);
    }, 5000);
    prevButton.addEventListener('click', () => {
        plusSlides(-1);
        clearInterval(timerID);
    });

    nextButton.addEventListener('click', () => {
        plusSlides(1);
        clearInterval(timerID);
    });
};
timer();


function showSlides(n) {
    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    slides.forEach(item => item.style.display = 'none');

    slides[slideIndex - 1].style.display = 'block';
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}