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
      
      
        
        $(function() {
            var blockTop = $('.clients').offset().top;
            var CountUpFlag = 0;
            var $window = $(window);
            $window.on('load scroll', function() {
                var top = $window.scrollTop();
                var height = $window.height();
                if (top + height >= blockTop && CountUpFlag == 0) {
                    let particlesItem = document.querySelectorAll('.clients__info-particles-item')
                    let x = 0;
                    function changeImagesAuto() {
                        x++;
                        if (x == particlesItem.length) x = 0;
                        particlesItem.forEach((e)=>{
                            let rand1 = Math.floor(Math.random() * 100)
                        let rand2 = Math.floor(Math.random() * 100)
                        e.style.transform = `translate(${rand1}%,${rand2}%)`;
                        })
                        
                    }
                    
                    setInterval(changeImagesAuto, 2000);
                    CountUpFlag = 1;
                }
            });
            
        });
        
})

