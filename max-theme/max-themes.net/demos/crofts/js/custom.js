
 jQuery(document).ready(function($) {
	"use strict";
  	// main navigation init
	jQuery('.sf-menu').superfish({
		delay:	300,	// one second delay on mouseout 
		animation:   {opacity:'show',height:'show'}, // fade-in and slide-down animation
		speed:       'fast',  // faster animation speed 
		autoArrows:  true,   // generation of arrow mark-up (for submenu) 
		dropShadows: false
	});

  $(".animsition").animsition({
  
    inClass               :   'overlay-slide-in-top',
    outClass              :   'overlay-slide-out-top',
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
    
    overlay               :   true,
    
    overlayClass          :   'animsition-overlay-slide',
    overlayParentElement  :   'body'
  });

 	var logoHeight = jQuery('#logoImage').height() + 16;
 	var serachTop = (logoHeight-39)/2;
	var headerHeight = document.getElementById('header').offsetHeight;
	jQuery(".container-wrapper").css("padding-top", logoHeight+"px");
	jQuery(".main-menu ul.sf-menu > li > a").css("line-height", logoHeight+"px");
	jQuery(".header-wrapper").css("height", logoHeight+"px");
	jQuery(".header-search").css("top", serachTop+"px");
	
	if (jQuery("#footer").length > 0) {
		var footerHeight = document.getElementById('footer').offsetHeight;
		jQuery(".container-wrapper").css("padding-bottom", footerHeight+"px");
	}

 	var logoHeight = jQuery('#logoImage').height() + 16;
 	var serachTop = (logoHeight-39)/2;
	var headerHeight = document.getElementById('header').offsetHeight;
	jQuery(".container-wrapper").css("padding-top", logoHeight+"px");
	jQuery(".main-menu ul.sf-menu > li > a").css("line-height", logoHeight+"px");
	jQuery(".header-wrapper").css("height", logoHeight+"px");
	jQuery(".header-search").css("top", serachTop+"px");
	
	if (jQuery("#footer").length > 0) {
		var footerHeight = document.getElementById('footer').offsetHeight;
		jQuery(".container-wrapper").css("padding-bottom", footerHeight+"px");
	}

	easyCharts();

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

	if (jQuery("a[data-gal^='prettyPhoto']").length > 0) {
		jQuery("a[data-gal^='prettyPhoto']").prettyPhoto({hook: 'data-gal'});
	}

	var folio_details_opened = false;
	jQuery(".portfolio-single-type2-visible-content").on('click', function(){
		
		if (folio_details_opened == false) {
			jQuery(".carousel").addClass('shrink');
			jQuery(".portfolio-single-type2-hidden-content").addClass('showit');
			jQuery(".portfolio-single-type2-visible-content").addClass('showit');
			folio_details_opened = true;
		}
		else {
			jQuery(".carousel").removeClass('shrink');
			jQuery(".portfolio-single-type2-hidden-content").removeClass('showit');
			jQuery(".portfolio-single-type2-visible-content").removeClass('showit');
			folio_details_opened = false;
		}
  	});
  	
  	var sidebar_opened = false;
  	jQuery(".sidebar-open-icon").on('click', function(){
		jQuery(".sidebar-wrap").addClass('showit');
  	});
  	jQuery(".close-button").on('click', function(){
		jQuery(".sidebar-wrap").removeClass('showit');
  	});

 	var slide = false;
	$(".mobile-menu-show").on('click', function(){
	
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

/* loading animation START */


