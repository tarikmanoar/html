/*	Menu START */
jQuery(function(){
	"use strict";
	// main navigation init
	jQuery('.menu-wrapper .sf-menu').superfish({
		delay:	300,	// one second delay on mouseout 
		animation:   {opacity:'show',height:'show'}, // fade-in and slide-down animation
		speed:       'fast',  // faster animation speed 
		autoArrows:  true,   // generation of arrow mark-up (for submenu) 
		dropShadows: false
	});
});
 /*	Menu END */
 
 (function($,sr){

  // debouncing function from John Hann
  // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
  var debounce = function (func, threshold, execAsap) {
      var timeout;

      return function debounced () {
          var obj = this, args = arguments;
          function delayed () {
              if (!execAsap)
                  func.apply(obj, args);
              timeout = null;
          };

          if (timeout)
              clearTimeout(timeout);
          else if (execAsap)
              func.apply(obj, args);

          timeout = setTimeout(delayed, threshold || 100);
      };
  }
  // smartresize 
  jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery,'smartresize');
 
 
jQuery(document).ready(function($){
	var slide = false;
	$(".mobile-menu-show").click(function(){
	
		if (slide == false) {
			$(".mobile-menu-wrapper").slideDown("slow");
			slide = true;
		}
		else {
			$(".mobile-menu-wrapper").slideUp("slow");
			slide = false;
		}
  	});
  	
});
 
/*	Testimonials START */
if (jQuery(".owl-carousel.testimonials-wrapper").length > 0) {
jQuery(document).ready(function() {
  var owl = jQuery(".owl-carousel.testimonials-wrapper");
  owl.owlCarousel({
     
      itemsCustom : [
        [0, 1],
        [450, 1],
        [600, 1],
        [700, 1],
        [1000, 1],
        [1200, 1],
        [1400, 1],
        [1600, 1]
      ],
      navigation : false,
      pagination : true,
      autoPlay: 5000
  });
});
}
/*	Testimonials END */


/*	Portfolio START */
if (jQuery(".owl-carousel.portfolio-wrapper").length > 0) {
jQuery(document).ready(function() {
  var owl = jQuery(".owl-carousel.portfolio-wrapper");
  owl.owlCarousel({
     
      itemsCustom : [
        [0, 1],
        [450, 1],
        [600, 1],
        [700, 1],
        [1000, 1],
        [1200, 1],
        [1400, 1],
        [1600, 1]
      ],
      navigation : true,
      pagination : true,
      paginationNumbers : true,
      navigationText : false
  });
});
}
/*	Portfolio END */

jQuery(document).ready(function($) {
	$('.fancybox').fancybox();
	$('.fancybox-media')
				.attr('rel', 'media-gallery')
				.fancybox({
					openEffect : 'none',
					closeEffect : 'none',
					prevEffect : 'none',
					nextEffect : 'none',

					arrows : false,
					helpers : {
						media : {},
						buttons : {}
					}
				});
});


/* Post START */	
if (jQuery(".post-view-wrapper").length > 0) {	
jQuery(document).ready(function(){

 jQuery(function() {
	var container = jQuery(".post-view-wrapper");
	      container.isotope({
			itemSelector : ".isotope-item",
			layoutMode: "masonry",
			transitionDuration: "0.7s"	
      });
 });
});  

jQuery(window).load(function(){
	var container = jQuery(".post-view-wrapper");
	    container.isotope({
		itemSelector : ".isotope-item",
		layoutMode: "masonry",
		transitionDuration: "0.7s"	
    });
});

jQuery(window).load(function(){
 	setTimeout(function(){
		var container = jQuery(".post-view-wrapper");
	        container.isotope({
			itemSelector : ".isotope-item",
			layoutMode: "masonry",
			transitionDuration: "0.7s"	
      });
	  },700);
});





jQuery(window).smartresize(function(){
	"use strict";
  	var container = jQuery(".post-view-wrapper");
	    container.isotope({
		itemSelector : ".isotope-item",
		layoutMode: "masonry",
		transitionDuration: "0.7s"	
    });
});
}


/* folio START */	
if (jQuery(".folio-view-wrapper").length > 0) {	
jQuery(document).ready(function(){

jQuery(function() {
	var container = jQuery(".folio-view-wrapper");
	      container.isotope({
			itemSelector : ".isotope-item",
			layoutMode: "masonry",
			transitionDuration: "0.7s"	
      });
      var optionSets = jQuery(".option-set"),
          optionLinks = optionSets.find("a");

      optionLinks.click(function(){
        var $this = jQuery(this);
        
        if ( $this.hasClass("selected") ) {
          return false;
        }
        var optionSet = $this.parents(".option-set");
        optionSet.find(".selected").removeClass("selected");
        $this.addClass("selected");
  
        var options = {},
            key = optionSet.attr("data-option-key"),
            value = $this.attr("data-option-value");
     
        value = value === "false" ? false : value;
        options[ key ] = value;
        if ( key === "layoutMode" && typeof changeLayoutMode === "function" ) {
         
          changeLayoutMode( $this, options )
        } else {
          // otherwise, apply new options
          container.isotope( options );
        }
        
        return false;
      });
	
	
 });

 jQuery(function() {
	var container = jQuery(".folio-view-wrapper");
	      container.isotope({
			itemSelector : ".isotope-item",
			layoutMode: "masonry",
			transitionDuration: "0.7s"	
      });
 });
});  

jQuery(window).load(function(){
	var container = jQuery(".folio-view-wrapper");
	    container.isotope({
		itemSelector : ".isotope-item",
		layoutMode: "masonry",
		transitionDuration: "0.7s"	
    });
});

jQuery(window).load(function(){
 	setTimeout(function(){
		var container = jQuery(".folio-view-wrapper");
	        container.isotope({
			itemSelector : ".isotope-item",
			layoutMode: "masonry",
			transitionDuration: "0.7s"	
      });
	  },700);
});




jQuery(window).smartresize(function(){
	"use strict";
  	var container = jQuery(".folio-view-wrapper");
	    container.isotope({
		itemSelector : ".isotope-item",
		layoutMode: "masonry",
		transitionDuration: "0.7s"	
    });
});
}




jQuery(document).ready(function(){
	var headerHeight = document.getElementById('header-wrapper').offsetHeight;
	jQuery(".menu-wrapper ul.sf-menu > li > a").css("line-height", headerHeight+"px");
	jQuery(".menu-wrapper .sf-menu > li > ul").css("top", headerHeight+"px");
	
	 jQuery(window).smartresize(function(){
			var headerHeight = document.getElementById('header-wrapper').offsetHeight;
			jQuery(".menu-wrapper ul.sf-menu > li > a").css("line-height", headerHeight+"px");
			jQuery(".menu-wrapper .sf-menu > li > ul").css("top", headerHeight+"px");
	});
	
});

/* mobile menu */
