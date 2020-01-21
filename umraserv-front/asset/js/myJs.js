jQuery(document).ready(function(){

/*================
= WOW JS INIT
================*/
	// new WOW().init();
	

/*================
= AOS JS INIT
================*/
	AOS.init();
	


/*================
= STICKY NAV
================*/
$(function () {
    $(".shy-header").shyheader({
        classname: "is-watching",
        container: 'shy-container'
    });
});

/*================
= SCROLL TO TOP
================*/
$.scrollUp({
    scrollText: '<i class="fa fa-angle-up"></i>',
    easingType: 'linear',
    scrollSpeed: 1200,
    animation: 'fade'
});

//=====================================================================================
//   Smooth Scroll
//=====================================================================================
$('a').smoothScroll({
duration: 1000, // animation speed
easing: 'swing', // find more easing options on http://api.jqueryui.com/easings/
offset: 0 // custom offset
});
	
});
 