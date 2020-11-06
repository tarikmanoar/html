/*	Upper header search function START */
 jQuery(function($) {
	var slide = false;
	$('.search-icon').on( "click", function() {
		var scrollPos =0;
		$('.search-wrap .center').animate({ height: "toggle"}, 200);
		if(slide == false) {
			if($.browser.opera) { //Fix opera double scroll bug by targeting only HTML.
				$('html').animate({scrollTop: scrollPos+'px'}, 400);
			} else {
				$('html, body').animate({scrollTop: scrollPos+'px'}, 400);
			}
			slide = true;
		  } else {                             
			slide = false;
		   }
	});
});
/*	Upper header search function END */



/*	Menu START */
jQuery(function(){
	"use strict";
	// main navigation init
	jQuery('.main-menu .sf-menu').superfish({
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
  jQuery.fn[sr] = function(fn){  return fn ? this.on('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery,'smartresize');


/*	Footer START */
jQuery(document).ready(function () {
	if (jQuery("#footer").length > 0) {
 		var offsetHeight = document.getElementById('footer').offsetHeight;
		jQuery(".container-wrapper").css("padding-bottom", offsetHeight+"px");
	}
});

jQuery(window).smartresize(function(){
	"use strict";
	if (jQuery("#footer").length > 0) {
  		var offsetHeight = document.getElementById('footer').offsetHeight;
		jQuery(".container-wrapper").css("padding-bottom", offsetHeight+"px");
	}
});
/*	Footer END */

/* Pretty photo START */	
	jQuery(window).load(function(){
		if (jQuery("a[data-gal^='prettyPhoto']").length > 0) {
			jQuery("a[data-gal^='prettyPhoto']").prettyPhoto({hook: 'data-gal'});
		}
	});
/* Pretty photo END */	

/*	Page load/switch transition  START */
	jQuery(document).ready(function($) {
		$(".animsition").animsition({
		inClass               :   'fade-in',
		outClass              :   'fade-out',
		inDuration            :    1500,
		outDuration           :    800,
		linkElement           :   '.animsition-link',
		loading               :    true,
		loadingParentElement  :   'body', //animsition wrapper element
		loadingClass          :   'animsition-loading',
		unSupportCss          : [ 'animation-duration',
								  '-webkit-animation-duration',
								  '-o-animation-duration'
								],
		overlay               :   false,

		overlayClass          :   'animsition-overlay-slide',
		overlayParentElement  :   'body'
		});
	});
/*	Page load/switch transition  END */

/* Mobile menu START */
jQuery(document).ready(function($){
	var slide = false;
	$(".mobile-menu-show").on( "click", function() {
	
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
/* Mobile menu END */


/* DROPDOWN MENU start */
jQuery(document).ready(function($){
	jQuery('ul.sf-menu').mobileMenu({
    	defaultText: 'Navigate to...',
    	className: 'select-menu',
    	subMenuDash: '&nbsp;&nbsp;&nbsp;&ndash;'
	});	 	
});
/* DROPDOWN MENU end */
