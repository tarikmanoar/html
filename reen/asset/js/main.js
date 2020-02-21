$(function () {

    /*================
    = SCROLL TO TOP
    ================*/
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 1200,
        animation: 'fade'
    });
    /*================
    = WOW JS INIT
    ================*/
    new WOW().init();
    //=====================================================================================
    //   OWL Carousel
    //=====================================================================================
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        navText: [
            "<i class='fa fa-caret-left'></i>",
            "<i class='fa fa-caret-right'></i>"
        ],
        autoplay: false,
        autoplayHoverPause: true,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 4
            }
        }
    });

    // Magnefic popUp
    $('.image').magnificPopup({ type: 'image' });
    
    //Sticky Top
    $(window).scroll(sticky_relocate);
    sticky_relocate();

});

// Sticky Div
function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var div_top = $('#sticky-anchor').offset().top;
    if (window_top > div_top) {
        $('#sticky').addClass('stick');
        $('#sticky-anchor').height($('#sticky').outerHeight());
    } else {
        $('#sticky').removeClass('stick');
        $('#sticky-anchor').height(0);
    }
}