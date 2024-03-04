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