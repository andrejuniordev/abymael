$(function () {


    //HEADER
    $(window).scroll(function () {
          if($(this).scrollTop() > 200)
          {
              if (!$('.header').hasClass('fixed'))
              {
                  $('.header').stop().addClass('fixed').css('top', '-100px').animate(
                      {
                          'top': '0px'
                      }, 500);
              }
          }
          else
          {
              $('.header').removeClass('fixed');
          }
    });


});

//SLIDE BOX
$(function(){
    

    if (navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/)) {

        $('.bxCarrosel').bxSlider({
        
            mode: 'horizontal',
            swipeThreshold:true,
            touchEnabled: true,
            oneToOneTouch: true,
            preventDefaultSwipeX: true,
            preventDefaultSwipeY: false,
            auto: true,
            controls:true,
            infiniteLoop: true,
            autoHover:true,
            slideWidth:300,
            slideMargin:2,
            responsive:true,
            minSlides: 1,
            maxSlides: 1,
            moveSlides: 1,
            shrinkItems:true,
            speed:1200
      
        });
    
    }else{   
       
        $('.bxCarrosel').bxSlider({
        
            mode: 'horizontal',
            swipeThreshold:true,
            touchEnabled: false,
            oneToOneTouch: false,
            preventDefaultSwipeX: true,
            preventDefaultSwipeY: false,
            auto: true,
            controls:true,
            infiniteLoop: true,
            autoHover:true,
            slideWidth:768,
            slideMargin:40,
            responsive:true,
            minSlides: 1,
            maxSlides: 1,
            moveSlides: 1,
            shrinkItems:true,
            speed:1200
      
        });

    }  

}); 

document.addEventListener('DOMContentLoaded', function () {
    const carouselImages = document.querySelector('.carousel-images');
    const images = document.querySelectorAll('.carousel-images img');

    let counter = 0;
    const totalImages = images.length;
    let imageWidth = 0;

    function adjustCarouselSize() {
        const windowWidth = window.innerWidth;
        imageWidth = windowWidth * 0.8; // Defina a largura da imagem como 80% da largura da janela
        const carouselWidth = totalImages * imageWidth;
        carouselImages.style.width = carouselWidth + 'px';
        images.forEach(image => {
            image.style.width = imageWidth + 'px';
        });
    }

    adjustCarouselSize();

    function moveCarousel() {
        counter++;
        if (counter >= totalImages) {
            counter = 0;
        }
        const offset = -counter * imageWidth;
        carouselImages.style.transform = 'translateX(' + offset + 'px)';
    }

    setInterval(moveCarousel, 3000);

    window.addEventListener('resize', adjustCarouselSize); // Reajuste o tamanho do carrossel quando a janela for redimensionada
});




