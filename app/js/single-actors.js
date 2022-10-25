const singleActors = new Swiper('.single-actors__images', {
    // Optional parameters
    loop: true,
    speed: 6000,
    spaceBetween: 0,
    slidesPerView:3,
    allowTouchMove:false,
    autoplay: {
        reverseDirection: false,
        delay: 0,
    },
    loopedSlides: 4,
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 4,
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 2,
        },
        // when window width is >= 640px
        991: {
          slidesPerView: 3,
        }
      }
});