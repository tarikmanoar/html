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
//   Fact Counter
//=====================================================================================
// $('.counter').countUp({
//   'time': 2000,
//   'delay': 10
// });

});
  console.log(`                                                                                                                                                      
   SSSSSSSSSSSSSSS WWWWWWWW                           WWWWWWWWIIIIIIIIIIFFFFFFFFFFFFFFFFFFFFFFTTTTTTTTTTTTTTTTTTTTTTT     IIIIIIIIIITTTTTTTTTTTTTTTTTTTTTTT
 SS:::::::::::::::SW::::::W                           W::::::WI::::::::IF::::::::::::::::::::FT:::::::::::::::::::::T     I::::::::IT:::::::::::::::::::::T
S:::::SSSSSS::::::SW::::::W                           W::::::WI::::::::IF::::::::::::::::::::FT:::::::::::::::::::::T     I::::::::IT:::::::::::::::::::::T
S:::::S     SSSSSSSW::::::W                           W::::::WII::::::IIFF::::::FFFFFFFFF::::FT:::::TT:::::::TT:::::T     II::::::IIT:::::TT:::::::TT:::::T
S:::::S             W:::::W           WWWWW           W:::::W   I::::I    F:::::F       FFFFFFTTTTTT  T:::::T  TTTTTT       I::::I  TTTTTT  T:::::T  TTTTTT
S:::::S              W:::::W         W:::::W         W:::::W    I::::I    F:::::F                     T:::::T               I::::I          T:::::T        
 S::::SSSS            W:::::W       W:::::::W       W:::::W     I::::I    F::::::FFFFFFFFFF           T:::::T               I::::I          T:::::T        
  SS::::::SSSSS        W:::::W     W:::::::::W     W:::::W      I::::I    F:::::::::::::::F           T:::::T               I::::I          T:::::T        
    SSS::::::::SS       W:::::W   W:::::W:::::W   W:::::W       I::::I    F:::::::::::::::F           T:::::T               I::::I          T:::::T        
       SSSSSS::::S       W:::::W W:::::W W:::::W W:::::W        I::::I    F::::::FFFFFFFFFF           T:::::T               I::::I          T:::::T        
            S:::::S       W:::::W:::::W   W:::::W:::::W         I::::I    F:::::F                     T:::::T               I::::I          T:::::T        
            S:::::S        W:::::::::W     W:::::::::W          I::::I    F:::::F                     T:::::T               I::::I          T:::::T        
SSSSSSS     S:::::S         W:::::::W       W:::::::W         II::::::IIFF:::::::FF                 TT:::::::TT           II::::::II      TT:::::::TT      
S::::::SSSSSS:::::S          W:::::W         W:::::W          I::::::::IF::::::::FF                 T:::::::::T           I::::::::I      T:::::::::T      
S:::::::::::::::SS            W:::W           W:::W           I::::::::IF::::::::FF                 T:::::::::T           I::::::::I      T:::::::::T      
 SSSSSSSSSSSSSSS               WWW             WWW            IIIIIIIIIIFFFFFFFFFFF                 TTTTTTTTTTT           IIIIIIIIII      TTTTTTTTTTT      
`);
console.log(
    '%cযথেষ্ট প্র্যাক্টিস ছাড়া কোড শিখা অসম্ভব!',
    'font-size: 18px; background-color: #1ad; color: #323330; font-weight: bolder; padding: 3px 5px; border-radius: 4px'
  )