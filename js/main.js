"use strict";

window.onload = function () {
  document.documentElement.style.opacity = '1';
};

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
}); // Fixed Header 

var header = document.querySelector('.header');
var first = document.querySelector('.main__slider');
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
});
//# sourceMappingURL=main.js.map
