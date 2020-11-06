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
 
/* audio player START */
if (jQuery("audio").length > 0) {
	jQuery(document).ready(function($) {
		(function(doc){var addEvent='addEventListener',type='gesturestart',qsa='querySelectorAll',scales=[1,1],meta=qsa in doc?doc[qsa]('meta[name=viewport]'):[];function fix(){meta.content='width=device-width,minimum-scale='+scales[0]+',maximum-scale='+scales[1];doc.removeEventListener(type,fix,true);}if((meta=meta[meta.length-1])&&addEvent in doc){fix();scales=[.25,1.6];doc[addEvent](type,fix,true);}}(document));
		jQuery( function($) { $( 'audio' ).audioPlayer(); } ); 
	});
}
/* audio player END */


/* pretty photo START */	
jQuery(window).load(function(){
 	jQuery("a[rel^='prettyPhoto']").prettyPhoto();
});
/* pretty photo END */	

/* post owl slider START  */	
if (jQuery(".owl-fade-slide").length > 0) {
	jQuery(document).ready(function($) {
 	 var owl = $(".owl-fade-slide");
 
  	owl.owlCarousel({
    	navigation : true,
    	pagination : false,
    	stopOnHover: true,
    	singleItem : true,
    	transitionStyle : "fadeUp"
  	});
 
});
}
/* post owl slider END  */	

/* post socials START */
jQuery( document ).ready(function($) {
$('.social-item').hover(function () {
    $('.icon', this).toggleClass('active');
    $('.icon', this).css({'display':'block'});
});
});
/* post socials END */

/* Circle progress bar START */
function easyCharts() {
	   jQuery('.easyPieChart').each(function () {
			var $this, $parent_width, $chart_size;
			$this =jQuery(this);
			$parent_width = jQuery(this).parent().width();
			$chart_size = $this.attr('data-barSize');
			if (!$this.hasClass('chart-animated')) {
				$this.easyPieChart({
					animate: 3000,
					lineCap: 'round',
					lineWidth: $this.attr('data-lineWidth'),
					size: $chart_size,
					barColor: $this.attr('data-barColor'),
					trackColor: $this.attr('data-trackColor'),
					scaleColor: 'transparent',
					onStep: function (value) {
						this.$el.find('.chart-percent span').text(Math.ceil(value));
					}
				});
			}
		});
 }

jQuery(document).ready(function () {
	easyCharts();
});

/* Circle progress bar END */

/*	Share socials START */
jQuery(document).ready(function($) {
 jQuery(".share-post-wrapper")
  .mouseenter(function() {
  	jQuery(this).parent().find(".socials-wrap").addClass("showit");
  })
  .mouseleave(function() {
    jQuery(this).parent().find(".socials-wrap").removeClass("showit");
  });
  
 jQuery(".aboutme-socials-wrapper")
  .mouseenter(function() {
  	jQuery(this).parent().find(".aboutme-socials-list").addClass("showit");
  })
  .mouseleave(function() {
    jQuery(this).parent().find(".aboutme-socials-list").removeClass("showit");
  });
});
/*	Share socials END */


/*	Comments START */
jQuery(document).ready(function() {
	// Get #comment-section div
	var commentsDiv = jQuery('.comments-wrapper');
	// Only do this work if that div isn't empty
	if (commentsDiv.length) {
	// Hide #comment-section div by default
	//jQuery(commentsDiv).hide();
	// Append a link to show/hide
	jQuery('<a>')
		.attr('class', 'toggle-comments')
		.attr('href', '#')
		.html('Hide Comments ('+post_comments_count+')')
		.insertBefore(commentsDiv);
	// Encase button in #toggle-comments-container div
	jQuery('.toggle-comments').wrap(jQuery('<div/>', {
		id: 'toggle-comments-container'
	}))
	// When show/hide is clicked
	jQuery('.toggle-comments').on('click', function(e) {
		e.preventDefault();
	// Show/hide the div using jQuery's toggle()
	jQuery(commentsDiv).slideToggle('slow', function() {
	// change the text of the anchor
		var anchor = jQuery('.toggle-comments');
		var anchorText = anchor.html() == 'Show Comments ('+post_comments_count+')' ? 'Hide Comments ('+post_comments_count+')' : 'Show Comments ('+post_comments_count+')';
		jQuery(anchor).html(anchorText);
	});
	});
 
	} // End of commentsDiv.length
}); 
/*	Comments END */

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
if (jQuery(".owl-carousel.testimonials2-wrapper").length > 0) {
jQuery(document).ready(function() {
  var owl = jQuery(".owl-carousel.testimonials2-wrapper");
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
	
	
/* Post filter START */	
if (jQuery(".pego-isotope-wrapper").length > 0) {	
jQuery(document).ready(function(){

 jQuery(function() {
	var container = jQuery(".pego-isotope-wrapper");
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
});  

jQuery(window).load(function(){
	var container = jQuery(".pego-isotope-wrapper");
	    container.isotope({
		itemSelector : ".isotope-item",
		layoutMode: "masonry",
		transitionDuration: "0.7s"	
    });
});

jQuery(window).load(function(){
 	setTimeout(function(){
		var container = jQuery(".pego-isotope-wrapper");
	        container.isotope({
			itemSelector : ".isotope-item",
			layoutMode: "masonry",
			transitionDuration: "0.7s"	
      });
	  },700);
});

jQuery(window).load(function(){
	var currentItemWidth = jQuery(".portfolio-items-single").innerWidth();
	if (currentItemWidth < 200) {
		jQuery(".pego-isotope-wrapper").addClass("portfolio-items-smaller");
	} else {
		jQuery(".pego-isotope-wrapper").removeClass("portfolio-items-smaller");
	}
});


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


jQuery(window).smartresize(function(){
	"use strict";
  	var container = jQuery(".pego-isotope-wrapper");
	    container.isotope({
		itemSelector : ".isotope-item",
		layoutMode: "masonry",
		transitionDuration: "0.7s"	
    });
    
  
	var currentItemWidth = jQuery(".portfolio-items-single").innerWidth();
	if (currentItemWidth < 200) {
		jQuery(".pego-isotope-wrapper").addClass("portfolio-items-smaller");
	} else {
		jQuery(".pego-isotope-wrapper").removeClass("portfolio-items-smaller");
	}
	
});
}

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

if (jQuery(".pego-isotope-wrapper-fitrows").length > 0) {	
	jQuery(document).ready(function(){

	 jQuery(function() {
		var container = jQuery(".pego-isotope-wrapper-fitrows");
			  container.isotope({
				itemSelector : ".isotope-item",
				layoutMode: "fitRows",
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
	});  

	jQuery(window).load(function(){
		var container = jQuery(".pego-isotope-wrapper-fitrows");
			container.isotope({
			itemSelector : ".isotope-item",
			layoutMode: "fitRows",
			transitionDuration: "0.7s"	
		});
	});

	jQuery(window).load(function(){
		setTimeout(function(){
			var container = jQuery(".pego-isotope-wrapper-fitrows");
				container.isotope({
				itemSelector : ".isotope-item",
				layoutMode: "fitRows",
				transitionDuration: "0.7s"	
		  });
		  },700);
	});


	jQuery(window).smartresize(function(){
		"use strict";
		var container = jQuery(".pego-isotope-wrapper-fitrows");
			container.isotope({
			itemSelector : ".isotope-item",
			layoutMode: "fitRows",
			transitionDuration: "0.7s"	
		});
	
	});
	
	
	
}


 
 
 jQuery(document).ready(function($) {
  
  $(".animsition").animsition({
  
    inClass               :   'fade-in',
    outClass              :   'fade-out',
    inDuration            :    1500,
    outDuration           :    800,
    linkElement           :   '.animsition-link',
    // e.g. linkElement   :   'a:not([target="_blank"]):not([href^=#])'
    loading               :    true,
    loadingParentElement  :   'body', //animsition wrapper element
    loadingClass          :   'animsition-loading',
    unSupportCss          : [ 'animation-duration',
                              '-webkit-animation-duration',
                              '-o-animation-duration'
                            ],
    //"unSupportCss" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    //The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    
    overlay               :   false,
    
    overlayClass          :   'animsition-overlay-slide',
    overlayParentElement  :   'body'
  });
});





jQuery(document).ready(function($){
	$(function() {
			
				$(' .portfolio-items-wrapper .portfolio-items-single ').each( function() { $(this).hoverdir(); } );

			});
});

/* mobile menu */

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



 jQuery(window).scroll(function () //Binds to the window's scroll event
        { 
        var orgElementPos = jQuery('body').offset();
  		orgElementTop = orgElementPos.top; 
  		var scrollFromTop = jQuery(window).scrollTop();
			if (scrollFromTop > 84) {
				jQuery('.header-wrapper').css({'padding-top':'0px'});
				jQuery('.header-wrapper').css({'padding-bottom':'0px'});
			} else {
				jQuery('.header-wrapper').css({'padding-top':'60px'});
				jQuery('.header-wrapper').css({'padding-bottom':'25px'});
			}
  		
        }
        );


if (jQuery("#trigger-overlay").length > 0) {
	(function() {
		var container = document.querySelector( 'div.global-wrapper' ),
			triggerBttn = document.getElementById( 'trigger-overlay' ),
			overlay = document.querySelector( 'div.fulloverlay' ),
			closeBttn = overlay.querySelector( 'button.overlay-close' );
			transEndEventNames = {
				'WebkitTransition': 'webkitTransitionEnd',
				'MozTransition': 'transitionend',
				'OTransition': 'oTransitionEnd',
				'msTransition': 'MSTransitionEnd',
				'transition': 'transitionend'
			},
			transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
			support = { transitions : Modernizr.csstransitions };

		function toggleOverlay() {
			if( classie.has( overlay, 'open' ) ) {
				classie.remove( overlay, 'open' );
				classie.remove( container, 'overlay-open' );
				classie.add( overlay, 'close' );
				var onEndTransitionFn = function( ev ) {
					if( support.transitions ) {
						if( ev.propertyName !== 'visibility' ) return;
						this.removeEventListener( transEndEventName, onEndTransitionFn );
					}
					classie.remove( overlay, 'close' );
				};
				if( support.transitions ) {
					overlay.addEventListener( transEndEventName, onEndTransitionFn );
				}
				else {
					onEndTransitionFn();
				}
			}
			else if( !classie.has( overlay, 'close' ) ) {
				classie.add( overlay, 'open' );
				classie.add( container, 'overlay-open' );
			}
		}

		triggerBttn.addEventListener( 'click', toggleOverlay );
		closeBttn.addEventListener( 'click', toggleOverlay );
	})();
}

if (jQuery("#trigger-overlay1").length > 0) {
	(function() {
		var container = document.querySelector( 'div.global-wrapper' ),
			triggerBttn = document.getElementById( 'trigger-overlay1' ),
			overlay = document.querySelector( 'div.fulloverlay' ),
			closeBttn = overlay.querySelector( 'button.overlay-close' );
			transEndEventNames = {
				'WebkitTransition': 'webkitTransitionEnd',
				'MozTransition': 'transitionend',
				'OTransition': 'oTransitionEnd',
				'msTransition': 'MSTransitionEnd',
				'transition': 'transitionend'
			},
			transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
			support = { transitions : Modernizr.csstransitions };

		function toggleOverlay() {
			if( classie.has( overlay, 'open' ) ) {
				classie.remove( overlay, 'open' );
				classie.remove( container, 'overlay-open' );
				classie.add( overlay, 'close' );
				var onEndTransitionFn = function( ev ) {
					if( support.transitions ) {
						if( ev.propertyName !== 'visibility' ) return;
						this.removeEventListener( transEndEventName, onEndTransitionFn );
					}
					classie.remove( overlay, 'close' );
				};
				if( support.transitions ) {
					overlay.addEventListener( transEndEventName, onEndTransitionFn );
				}
				else {
					onEndTransitionFn();
				}
			}
			else if( !classie.has( overlay, 'close' ) ) {
				classie.add( overlay, 'open' );
				classie.add( container, 'overlay-open' );
			}
		}

		triggerBttn.addEventListener( 'click', toggleOverlay );
		closeBttn.addEventListener( 'click', toggleOverlay );
	})();
}


/**
 * main.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2014, Codrops
 * http://www.codrops.com
 */
if (jQuery("#open-button").length > 0) {
	(function() {

		var bodyEl = document.body,
			content = document.querySelector( '.container-wrapper' ),
			openbtn = document.getElementById( 'open-button' ),
			closebtn = document.getElementById( 'close-button' ),
			isOpen = false;

		function init() {
			initEvents();
		}

		function initEvents() {
			openbtn.addEventListener( 'click', toggleMenu );
			if( closebtn ) {
				closebtn.addEventListener( 'click', toggleMenu );
			}

			// close the menu element if the target it´s not the menu element or one of its descendants..
			content.addEventListener( 'click', function(ev) {
				var target = ev.target;
				if( isOpen && target !== openbtn ) {
					toggleMenu();
				}
			} );
		}

		function toggleMenu() {
			if( isOpen ) {
				classie.remove( bodyEl, 'show-sidebar' );
			}
			else {
				classie.add( bodyEl, 'show-sidebar' );
			}
			isOpen = !isOpen;
		}

		init();

	})();
}








