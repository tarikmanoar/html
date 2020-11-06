jQuery(document).ready(function(){ 
	jQuery('.testimonial_slider_wrapper').flexslider({
	      animation: "fade",
	      animationLoop: true,
	      itemMargin: 0,
	      minItems: 1,
	      maxItems: 1,
	      slideshow: true,
	      controlNav: true,
	      smoothHeight: false,
	      pauseOnHover: true,
	      directionNav: false,
	      slideshowSpeed: 4000,
	      move: 1
	});
});

jQuery(window).load(function(){ 
	jQuery('.slider_wrapper').flexslider({
	      animation: "fade",
	      animationLoop: true,
	      itemMargin: 0,
	      minItems: 1,
	      maxItems: 1,
	      slideshow: true,
	      controlNav: false,
	      smoothHeight: true,
	      slideshowSpeed: 5000,
	      move: 1
	});
});

jQuery(window).load(function(){ 
	jQuery('.slider_wrapper').flexslider({
	      animation: "fade",
	      animationLoop: true,
	      itemMargin: 0,
	      minItems: 1,
	      maxItems: 1,
	      slideshow: false,
	      controlNav: false,
	      smoothHeight: false,
	      slideshowSpeed: 5000,
	      move: 1
	});
	
	jQuery('.slider_wrapper.portfolio .slides li').each( function() {
	    var height = jQuery(this).height();
	    var imageHeight = jQuery(this).find('img').height();
	
	    var offset = (height - imageHeight) / 2;
	
	    jQuery(this).find('img').css('margin-top', offset + 'px');
	
	});
});




jQuery('#1586438134974870898').circliful();
jQuery('#15864381341950289737').circliful();
jQuery('#1586438154496308511').circliful();
jQuery('#15864381541695605441').circliful();
jQuery('#15864381541619682870').circliful();
jQuery('#1586438157639075118').circliful();
jQuery('#1586438134254841679').circliful();
jQuery('#1586438157851066778').circliful();
jQuery('#1586438157277100761').circliful();
jQuery('#15864381581313075252').circliful();
jQuery('#1586438158502315171').circliful();
jQuery('#1586438158919053183').circliful();
jQuery('#15864382131126650958').circliful();
jQuery('#15864382131473247755').circliful();
jQuery('#1586438213567736396').circliful();
jQuery('#1586438213934715829').circliful();


window.odometerOptions = {
  format: '(,ddd).dd'
};
setTimeout(function(){
    jQuery('#15864381871999337913').html(5056);
}, 1000);

window.odometerOptions = {
  format: '(,ddd).dd'
};
setTimeout(function(){
    jQuery('#1586438213415935518').html(109);
}, 1000);

window.odometerOptions = {
  format: '(,ddd).dd'
};
setTimeout(function(){
    jQuery('#1586438213996924955').html(6409);
}, 1000);

window.odometerOptions = {
  format: '(,ddd).dd'
};
setTimeout(function(){
    jQuery('#1586438213992904949').html(7010);
}, 1000);

window.odometerOptions = {
  format: '(,ddd).dd'
};
setTimeout(function(){
    jQuery('#1586438213395985379').html(1087);
}, 1000);


window.odometerOptions = {
  format: '(,ddd).dd'
};
setTimeout(function(){
    jQuery('#15864382971989809375').html(5056);
}, 1000);



function getGridSize() {
    return (window.innerWidth <= 480) ? 2 :
           (window.innerWidth < 900) ? 5 : 5;
}
jQuery(window).load(function() {
	var post_carousel_column = jQuery('#post_client_column').val();
	var post_carousel_column_width = 200;
	var flexslider;
    
    if(jQuery.browser.msie) {
        jQuery('.post_carousel').flexslider({
		      animation: "slide",
		      animationLoop: true,
		      itemWidth: post_carousel_column_width,
		      itemMargin: 0,
		      minItems: getGridSize(),
		      maxItems: getGridSize(),
		      slideshow: false,
		      controlNav: false,
		      directionNav: false,
		      slideshow: true,
		      slideshowSpeed: 5000,
		      move: 1
	    }); 
    } else {
        jQuery('.post_carousel').flexslider({
		      animation: "slide",
		      animationLoop: true,
		      itemWidth: post_carousel_column_width,
		      itemMargin: 0,
		      minItems: getGridSize(),
		      maxItems: getGridSize(),
		      slideshow: false,
		      controlNav: false,
		      directionNav: false,
		      slideshow: true,
		      slideshowSpeed: 5000,
		      move: 1
	    });  
    }
});