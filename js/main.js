"use strict";

window.onload = function () {
  document.documentElement.style.opacity = '1';
};

if (!document.querySelector('.swiper-container')) {} else {
  var swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    slideToClickedSlide: true,
    centeredslides: true,
    height: 500,
    spaceBetween: 0,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      draggable: true
    },
    autoplay: {
      delay: 5000
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      320: {
        slidesPerView: 1
      },
      992: {
        slidesPerView: 2
      },
      1799: {
        slidesPerView: 3
      }
    },
    mousewheel: {
      sensitivity: 1,
      eventsTarget: ".swiper-slide"
    }
  });
} // Fixed Header 


var header = document.querySelector('.header');
var first = document.querySelector('.header');
var headerHeight = header.offsetHeight;
var firstHeight = first.offsetHeight;
var lastScrollTop = 0;
window.addEventListener('scroll', function () {
  var scrollDistance = window.scrollY;

  if (scrollDistance >= firstHeight + headerHeight) {
    header.classList.add('header--fixed');
    first.style.marginTop = "".concat(headerHeight, "px");
  } else {
    header.classList.remove('header--fixed');
    first.style.marginTop = null;
  }
}); // Header Mobile 

var body = document.body;
var headerMobileBtn = document.querySelector('.header__mobile-btn');
var headerMobileMenu = document.querySelector('.header__mobile-menu');
var headerMobileClose = document.querySelector('.header__mobile-close');
headerMobileBtn.addEventListener('click', function () {
  body.classList.add('no-scroll');
  headerMobileMenu.classList.add('header__mobile-menu--opened');
  header.classList.add('header__mobile-menu--active');
});
headerMobileClose.addEventListener('click', function () {
  body.classList.remove('no-scroll');
  headerMobileMenu.classList.remove('header__mobile-menu--opened');
  header.classList.remove('header__mobile-menu--active');
}); // Main Navigation

var mainMobileBtn = document.querySelector('.main__mobile-btn');
var mainMobileMenu = document.querySelector('.main__mobile-menu');
var mainMobileClose = document.querySelector('.main__mobile-close');
mainMobileBtn.addEventListener('click', function () {
  body.classList.add('no-scroll');
  mainMobileMenu.classList.add('main__mobile-menu--opened');
});
mainMobileClose.addEventListener('click', function () {
  body.classList.remove('no-scroll');
  mainMobileMenu.classList.remove('main__mobile-menu--opened');
});
//# sourceMappingURL=main.js.map
