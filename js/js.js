"use strict"


document.addEventListener("DOMContentLoaded", function () {
    const selector = document.querySelector(".choices")

    const choices = new Choices(selector, {
        searchEnabled: false,
        itemSelectText: '',
        classNames: {
            containerOuter: 'choices header_choices',
        },
    });

});


(() => {
    new Accordion(".accordion__container");
})();




let tabsLink = document.querySelectorAll('.accordion__item-link');
let tabsContent = document.querySelectorAll('.tabs__content');

tabsLink.forEach(function (element) {
    element.addEventListener('click', function (e) {
        const path = e.currentTarget.dataset.path;

        tabsLink.forEach(function (btn) { btn.classList.remove('accordion__item-link--active') });
        e.currentTarget.classList.add('accordion__item-link--active');

        tabsContent.forEach(function (element) { element.classList.remove('tabs__content--active') });
        document.querySelector(`[data-target="${path}"]`).classList.add('tabs__content--active');
    });
});





const swiper = new Swiper('.swiper', {

    direction: 'horizontal',
    loop: false,
    slidesPerView: 2,
    allowTouchMove: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    spaceBetween: 30,
    breakpoints: {

        1250: {
            slidesPerView: 4,
        },

        576: {
            spaceBetween: 30,
        },

        200: {
            spaceBetween: 11,
        }



    }
});

const swiperPlay = new Swiper('.playlists__swiper', {

    direction: 'horizontal',
    loop: false,
    slidesPerView: "auto",
    centerSlides: true,
    allowTouchMove: true,
    spaceBetween: 15,
});




new JustValidate('.form', {
    rules: {
        name: {
            required: true,
            minLength: 2,
            maxLength: 10
        },

        mail: {
            required: true,
            email: true
        },
    },

    messages: {
        name: {
            required: "ошибка"
        },
        mail: "ошибка"
    }
});






let podcastsBtn = document.querySelector('.podcast__btn');
let podcastsItems = document.querySelectorAll('.podcasts__elem');

podcastsBtn.addEventListener('click', () => {
    if (podcastsBtn.textContent === 'Свернуть') {
        podcastsBtn.textContent = 'Ещё подкасты';
    } else {
        podcastsBtn.textContent = 'Свернуть';
    }

    podcastsItems.forEach(el => {
        el.classList.toggle('podcasts__elem--visible');
    });

});






let burgerBtn = document.querySelector('.header__burger');
let navBurger = document.querySelector('.header__nav');

burgerBtn.addEventListener('click', function () {
    navBurger.classList.toggle('header__nav--active');
    burgerBtn.classList.toggle('header__burger--active')
});


let loop = document.querySelector('.header-top__loop');
let loopSearch = document.querySelector('.header-top__search');
let headerList = document.querySelector('.header-top__list');

loop.addEventListener('click', () => {
    loopSearch.classList.toggle('header-top__search--active');
    headerList.classList.toggle('header-top__list--active');
})


let caskMenu = document.querySelector('.header-bottom__cask-menu');
let cask = document.querySelector('.header-bottom__cask');
let caskSvg = document.querySelector('.header-bottom__cask-svg');

cask.addEventListener('click', () => {
    caskMenu.classList.toggle('header-bottom__cask-menu--active');
    caskSvg.classList.toggle('header-bottom__cask-svg--active');
})




