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
    //Sticky Top
    $(window).scroll(sticky_relocate);
    sticky_relocate();

    $("#date").datepicker({
        dateFormat: "dd-mm-yy",
        showOn: "both",
        buttonText: '<i class="zmdi zmdi-calendar-alt"></i>',
    });

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
