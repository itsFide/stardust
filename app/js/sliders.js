
const swiper = new Swiper('.talents__swiper', {
    // Optional parameters
    loop: true,
    speed: 4000,
    slidesPerView:3,
    allowTouchMove:false,
    direction: "vertical",
    autoplay: {
      
        delay: 0,
    },
    });
    const swiper2 = new Swiper('.talents__swiper-2', {
        // Optional parameters
        loop: true,
        speed: 4000,
        slidesPerView:3,
        allowTouchMove:false,
        direction: "vertical",
        autoplay: {
            reverseDirection: true,
            delay: 0,
        },
    });
    
    const projects1 = new Swiper('.projects__items-line-1', {
        // Optional parameters
        loop: true,
        speed: 4000,
        slidesPerView:3,
        allowTouchMove:false,
        direction: "vertical",
        autoplay: {
            reverseDirection: false,
            delay: 0,
        },
        loopedSlides: 4
    });
    const projects2 = new Swiper('.projects__items-line-2', {
        // Optional parameters
        loop: true,
        speed: 4500,
        slidesPerView:3,
        allowTouchMove:false,
        direction: "vertical",
        // loopedSlides: 5,
        autoplay: {
            reverseDirection: true,
            delay: 0,
        },
        loopedSlides: 4
    });
    const projects3 = new Swiper('.projects__items-line-3', {
        // Optional parameters
        loop: true,
        speed: 6000,
        slidesPerView:3,
        allowTouchMove:false,
        direction: "vertical",
        autoplay: {
            reverseDirection: false,
            delay: 0,
        },
        loopedSlides: 4
    });