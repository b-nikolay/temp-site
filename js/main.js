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
  breakpoints: {
    700: {
      slidesPerView: 2,      
      spaceBetween: 160,
    },
    160: {
      pagination: {
        el: '.swiper-pagination',
      },  // If we need pagination
      slidesPerView: 1,      
      spaceBetween: 60,
    }
  }



});
const swiperBenefits = new Swiper('.swiper-benefits', {
  // Optional parameters

  // If we need pagination
  slidesPerView: 3,
  spaceBetween: 20,      
  // Navigation arrows
  // navigation: {
  //   prevEl: '.benefits-swiper-button-prev',
  //   nextEl: '.benefits-swiper-button-next',
  // },
  breakpoints: {
    1116: {
      slidesPerView: 3,
      
    },
    100: {
      pagination: {
        el: '.swiper-pagination',
      },
      slidesPerView: 1,
    }
  }


});
