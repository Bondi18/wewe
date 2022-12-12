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
            slidesPerView: 2,
            spaceBetween: 30,
        },

        200: {
            slidesPerView: 2,
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
    },

    submitHandler: function (thisForm) {
        let formData = new FormData(thisForm);

        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    alert("Успешно отправлено");
                }
            }
        }

        xhr.open('POST', 'mail.php', true);
        xhr.send(formData);

        thisForm.reset();
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


let headerBtn = document.querySelector('.header-top__btn');
let reg = document.querySelector('.reg');
let regPhone = document.querySelector('.phone');
let regExit = document.querySelector('.reg__exit');
let headerUpperBtn = document.querySelector('.header__upper-btn');


headerBtn.addEventListener('click', () => {
    reg.classList.toggle('reg--active');
    regPhone.classList.toggle('phone--active');
})

regExit.addEventListener('click', () => {
    reg.classList.toggle('reg--active');
    regPhone.classList.toggle('phone--active');
})


headerUpperBtn.addEventListener('click', () => {
    reg.classList.toggle('reg--active');
    regPhone.classList.toggle('phone--active');
})






document.querySelectorAll('.js-scroll-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const href = this.getAttribute('href').substring(1);
        const scrollTarget = document.getElementById(href);
        const elementPosition = scrollTarget.getBoundingClientRect().top;

        window.scrollBy({
            top: elementPosition,
            behavior: 'smooth'
        });
    });
});




(() => {
    const MOBILE_WIDTH = 576;

    function getWindowWidth() {
        return Math.max(
            document.body.scrollWidth,
            document.documentElement.scrollWidth,
            document.body.offsetWidth,
            document.documentElement.offsetWidth,
            document.body.clientWidth,
            document.documentElement.clientWidth
        );
    }

    function scrollToContent(link, isMobile) {
        if (isMobile && getWindowWidth() > MOBILE_WIDTH) {
            return;
        }

        const href = link.getAttribute('href').substring(1);
        const scrollTarget = document.getElementById(href);
        const elementPosition = scrollTarget.getBoundingClientRect().top;

        window.scrollBy({
            top: elementPosition,
            behavior: 'smooth'
        });
    }

    document.querySelectorAll('.js-scroll-link-mobile').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            scrollToContent(this, true);
        });
    });
})();


let podcastBtn = document.querySelectorAll('.podcasts__elem-btn');




podcastBtn.forEach(function (element) {
    element.addEventListener("click", ({ currentTarget }) => {
        currentTarget
            .querySelector(".podcasts__elem-btn__svg")
            .classList.toggle("podcasts__elem-btn__svg--active");
        currentTarget
            .querySelector(".podcasts__elem-btn__svg2")
            .classList.toggle("podcasts__elem-btn__svg2--active");
    });
});




