"use strict";

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
  mousewheel: {
    invert: true
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
  }
});
//# sourceMappingURL=main.js.map
