document.addEventListener('DOMContentLoaded', () => {
    let burgerMenuButton = document.querySelector('.header-bottom__burger-menu');
burgerMenuButton.addEventListener('click', () => {
    burgerMenuButton.classList.toggle('header-bottom__burger-menu_open');
})


const checkbox = document.querySelector('#checkbox');
const nav = document.querySelectorAll('.nav__item');
console.log(nav.firstElementChild)
const burgerMenu = document.querySelector('.header-bottom__burger-menu');
document.body.addEventListener('click', (e) => {
    if(e.target !== burgerMenu.firstElementChild && e.target !== checkbox) {
        checkbox.checked = false;
        burgerMenu.classList.remove('header-bottom__burger-menu_open');
    }
});


new Swiper('.image-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    autoplay: {
        delay: 14000,
        disableOnInteraction: false,
        },
    grabCursor: true,
});
});





