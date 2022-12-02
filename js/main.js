const swiperReviews = new Swiper('.swiper-reviews', {
  // Optional parameters

  // If we need pagination
  slidesPerView: 2,      
  spaceBetween: 140,
  // Navigation arrows
  navigation: {
    prevEl: '.reviews-swiper-button-prev',
    nextEl: '.reviews-swiper-button-next',
  },

  420: {
    pagination: {
      el: '.swiper-pagination',
    },
  }

});
