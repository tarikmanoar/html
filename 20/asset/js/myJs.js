jQuery(document).ready(function(){
//=====================================================================================
//   OWL Carousel
//=====================================================================================
    $('.homepage-slides').owlCarousel({
		loop:true,
		margin:20,
          nav: true,
          navText: [
            "<i class='fa fa-caret-left'></i>",
            "<i class='fa fa-caret-right'></i>"
          ],
		autoplay:false,
		autoplayHoverPause: true,
		autoplayTimeout:5000,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});


/*================
= WOW JS INIT
================*/
new WOW().init();


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

//=====================================================================================
// Counter
//=====================================================================================
$('.count-num').countUp({
  'time':10000,
  'delay':200
});





});
 