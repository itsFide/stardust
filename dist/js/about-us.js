const about1 = new Swiper('.projects__items-line-1', {
    // Optional parameters
    loop: true,
    speed: 4000,
    slidesPerView:4,
    allowTouchMove:false,
    direction: "vertical",
    autoplay: {
        reverseDirection: false,
        delay: 0,
    },
    loopedSlides: 4,
});
const about2 = new Swiper('.projects__items-line-2', {
    // Optional parameters
    loop: true,
    speed: 4500,
    slidesPerView:4,
    allowTouchMove:false,
    direction: "vertical",
    // loopedSlides: 5,
    autoplay: {
        reverseDirection: true,
        delay: 0,
    },
    loopedSlides: 4,
    
});
const about3 = new Swiper('.projects__items-line-3', {
    // Optional parameters
    loop: true,
    speed: 6000,
    slidesPerView:4,
    allowTouchMove:false,
    direction: "vertical",
    loopedSlides: 4,
    autoplay: {
        reverseDirection: false,
        delay: 0,
    },

});
const partners1 = new Swiper('.partners-slider-1', {
    // Optional parameters
    loop: true,
    speed: 3000,
    slidesPerView: 6,
    allowTouchMove:false,
    spaceBetween: 35,
    autoplay: {
        reverseDirection: false,
        delay: 0,
    },
    breakpoints:{
        320:{
            slidesPerView: 2,
        },
        480:{
            slidesPerView: 3,
        },
        991:{
            slidesPerView: 6,
        },
    }
});
const partners2 = new Swiper('.partners-slider-2', {
    // Optional parameters
    loop: true,
    speed: 3500,
    slidesPerView: 6,
    allowTouchMove:false,
    spaceBetween: 35,
    autoplay: {
        reverseDirection: true,
        delay: 0,
    },
    breakpoints:{
        320:{
            slidesPerView: 2,
        },
        480:{
            slidesPerView: 3,
        },
        991:{
            slidesPerView: 6,
        },
    }
});