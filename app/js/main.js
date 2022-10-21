document.addEventListener("DOMContentLoaded",()=>{
    function setVideoCenter() {
        var $box = $('.video-box');
        var height = $box.height();
        var width = $box.width();
        var new_height = width / 1.78;
        if (new_height > height) {
            $box.find('iframe').css({
            width: width, 
            height: new_height, 
            top: '-' + (new_height / 2 - height / 2) + 'px',
            left: '0',
            });	
        } else {
            var new_width = height * 1.78;
            $box.find('iframe').css({
            width: new_width, 
            height: height, 
            top: '0',
            left: '-' + (new_width / 2 - width / 2) + 'px'
            });
        }	
        }
    
        $(function(){
        setVideoCenter();
        $(window).resize(setVideoCenter);
        });
      
      
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
    
})
