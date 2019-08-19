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
        scrollText: '<i class="icofont icofont-long-arrow-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });

    // Smoot Scroll

    $('.smootclick').click(function(e){
        var linkhref = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(linkhref).offset().top
        },2000);
        e.preventDefault();
    });

 }(jQuery));