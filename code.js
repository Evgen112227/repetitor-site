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