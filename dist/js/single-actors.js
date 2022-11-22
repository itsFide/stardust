const singleActors = new Swiper('.single-actors__images', {
    // Optional parameters
    loop: true,
    speed: 6000,
    spaceBetween: 0,
    slidesPerView:3,
    // allowTouchMove:false,
    autoplay: {
        reverseDirection: false,
        delay: 0,
    },
    loopedSlides: 4,
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 4,
          speed: 2000,
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 2,
          speed: 3000,
          
        },
        // when window width is >= 640px
        991: {
          slidesPerView: 3,
        }
      }
});
// $(function() {
//     var blockTop = $('.single-actors').offset().top;
//     var CountUpFlag = 0;
//     var $window = $(window);
//     $window.on('load scroll', function() {
//         var top = $window.scrollTop();
//         var height = $window.height();
//         if (top + height >= blockTop && CountUpFlag == 0) {
//             let particlesItem = document.querySelectorAll('.single-actors__img-particles')
//             let x = 0;
//             function changeImagesAuto() {
//                 x++;
//                 if (x == particlesItem.length) x = 0;
//                 particlesItem.forEach((e)=>{
//                     let rand1 = Math.floor(Math.random() * 100)
//                 let rand2 = Math.floor(Math.random() * 100)
//                 e.style.transform = `translate(${rand1}%,${rand2}%)`;
//                 })
                
//             }
            
//             setInterval(changeImagesAuto, 2000);
//             CountUpFlag = 1;
//         }
//     });
    
// });