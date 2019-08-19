jQuery(document).ready(function ($) {
    "use strict";

    $(".carousel-inner .item:first-child").addClass("active");
    /*WoW js Active
    =================*/
    new WOW().init({
        mobile: false,
    });
    /* Scroll to top
    ===================*/

    $.scrollUp({
        scrollText: '<i class="fa fa-long-arrow-up"></i>',
        easingType: 'linear',
        scrollSpeed: 2000,
        animation: 'fade'
    });

    //mixtup Portfolio
    var mixer=mixitup('.portContent');

    //Magnifi PopUp

    $('.image-link').magnificPopup({type:'image'});

    //Awesome Tab
    $('.skillbar').skillBars({
         // number start
          from: 0,       

          // number end 
          to: false,      

          // animation speed
          speed: 5000,
    });

    //Owl Carosel
    $('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})

        /***
          Preloader
      ***/
      $('body').addClass('preloader-active');
      
      $(window).on('load', function() { 
          $('.preloader').fadeOut();
          $('.preloader-spinner').delay(350).fadeOut('slow');
          $('body').removeClass('preloader-active');
      });


}(jQuery));
