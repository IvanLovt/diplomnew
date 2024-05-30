const swiper = new Swiper(".mySwiper", {
  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    420: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
  slidesPerView: 3,
  loop: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
