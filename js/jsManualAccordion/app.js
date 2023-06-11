var swiper = new Swiper(".testimonials-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    keyboard: {
      enabled: true,
    },
    coverflowEffect: {
      rotate: 70,
      stretch: 0,
      depth: 125,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});