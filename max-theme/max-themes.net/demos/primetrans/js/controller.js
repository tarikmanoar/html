var $ = jQuery.noConflict();

$(document).ready(function($) {
	"use strict";


	var sections = $('.section')
	  , nav = $('.sf-menu')
	  , nav_height = nav.outerHeight();
	 
	$(window).on('scroll', function () {
	  var cur_pos = $(this).scrollTop();
	 
	  sections.each(function() {
	    var top = $(this).offset().top - nav_height,
	        bottom = top + $(this).outerHeight();
	 
	    if (cur_pos >= top && cur_pos <= bottom) {
	      nav.find('a').removeClass('active');
	      sections.removeClass('active');
	 
	      $(this).addClass('active');
	      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
	    }
	  });
	});

	nav.find('a').on('click', function () {
	  var $el = $(this)
	    , id = $el.attr('href');
	 
	  $('html, body').animate({
	    scrollTop: $(id).offset().top - nav_height
	  }, 500);
	 
	  return false;
	});

	$('.get-start').find('a').on('click', function () {
	  var $el = $(this)
	    , id = $el.attr('href');
	 
	  $('html, body').animate({
	    scrollTop: $(id).offset().top - nav_height
	  }, 500);
	 
	  return false;
	});


    $('#search .trigger').on('click', function(){
        $('.search-bar').animate({width: 'toggle'},500);
    });

	
	$(window).load(function() { // makes sure the whole site is loaded
		$('#status').fadeOut(); // will first fade out the loading animation
		$('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
		$('body').delay(350).css({'overflow':'visible'});
	})
    //  Responsive layout, resizing the items
   try{
	    
		$('.html-style').tooltip(options);
    } catch(err) {
	}

	

	var $searchbar = $('.search-input');
	var $searchtrigger = $('#trigger');

	$searchtrigger.on('click', function () {
		$searchbar.slideToggle(300);
	})
	 

	/*-------------------------------------------------*/
	/* =  Mobile Menu
	/*-------------------------------------------------*/
	// Create the dropdown base
    $("<select />").appendTo("#nav");
    
    
    // Create default option "Go to..."
    $("<option />", {
		"selected": "selected",
		"value"   : "",
		"text"    : "Main Menu"
    }).appendTo("#nav select");
    
    // Populate dropdown with menu items
    $(".sf-menu a").each(function() {
		var el = $(this);
		$("<option />", {
			"value"   : el.attr("href"),
			"text"    : el.text()
		}).appendTo("#nav select");
    });

    $("#nav select").change(function() {
		window.location = $(this).find("option:selected").val();
    });

	/*-------------------------------------------------*/
	/* =  CarouSels
	/*-------------------------------------------------*/

    //  Responsive layout, resizing the items
   try{
	    $('#foo1').carouFredSel({
	      responsive: true,
	      width: '100%',
	      scroll: 1,
      	  auto:false,
		  prev: '#prev2',
		  next: '#next2',
	      items: {
	    	width: 300,
	       	height: 'auto', 
	        visible: {
	          min: 1,
	          max: 4
	        }
	      }
	    });
    } catch(err) {
	}

    //  Responsive layout, resizing the items
   try{
	    $('#foo2').carouFredSel({
	      responsive: true,
	      width: '100%',
	      scroll: 1,
      	  auto:false,
		  prev: '#prev3',
		  next: '#next3',
	      items: {
	    	width: 300,
	       	height: 'auto', 
	        visible: {
	          min: 1,
	          max: 4
	        }
	      }
	    });
    } catch(err) {
	}

    //  Responsive layout, resizing the items
   try{
	    $('#foo3').carouFredSel({
	      responsive: true,
	      width: '100%',
	      scroll: 1,
      	  auto:false,
		  prev: '#prev4',
		  next: '#next4',
	      items: {
	    	width: 200,
	       	height: 120, 
	        visible: {
	          min: 1,
	          max: 6
	        }
	      }
	    });
    } catch(err) {
	}

    //  Responsive layout, resizing the items
   try{
	    $('#foo4').carouFredSel({
	      responsive: true,
	      width: '100%',
	      scroll: 1,
      	  auto:false,
		  prev: '#prev5',
		  next: '#next5',
	      items: {
	    	width: 220,
	       	height:490, 
	        visible: {
	          min: 1,
	          max: 5
	        }
	      }
	    });
    } catch(err) {
	}

    //  Responsive layout, resizing the items
   try{
	    $('#foo5').carouFredSel({
	      responsive: true,
	      width: '100%',
	      scroll: 1,
      	  auto:false,
		  prev: '#prev5',
		  next: '#next5',
	      items: {
	    	width: 220,
	       	height:520, 
	        visible: {
	          min: 1,
	          max: 3
	        }
	      }
	    });
    } catch(err) {
	}

  	/*-------------------------------------------------*/
	/* =  Paralax
	/*-------------------------------------------------*/

   try{
	    $('.paralax1').parallax("50%", 0.3);
	  } catch(err) {
	}

  	/*-------------------------------------------------*/
	/* =  Paralax
	/*-------------------------------------------------*/

   try{
	    $('#div_demo').videoBG({
			mp4:'images/tunnel_animation.mp4',
			ogv:'images/tunnel_animation.ogv',
			webm:'images/tunnel_animation.webm',
			poster:'images/tunnel_animation.jpg',
			scale:true,
			zIndex:0,
			autoplay:false
		});
	  } catch(err) {
	}
	



	/*-------------------------------------------------*/
	/* =  Testimonials
	/*-------------------------------------------------*/

	  try {
  		$('.bxslider').bxSlider({
             mode: 'horizontal',
             slideMargin: 0,
             auto:true
         }); 
  	 } catch(err) {

  	 }



 	/*-------------------------------------------------*/
	/* =  Fancybox
	/*-------------------------------------------------*/
	try {
		$("a[data-fancybox-group=group]").fancybox({
			'transitionIn'		: 'none',
			'transitionOut'		: 'none',
			'titlePosition' 	: 'over',
			'titleFormat'		: function(title, currentArray, currentIndex, currentOpts) {
				return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
			}
		});
	} catch(err) {

	}

	

   /*-------------------------------------------------*/
	/* =  Tabs Widget - { Popular, Recent and Comments }
	/*-------------------------------------------------*/
	$('.tab-links li a').on('click', function(e){
		e.preventDefault();
		if (!$(this).parent('li').hasClass('active')){
			var link = $(this).attr('href');

			$(this).parents('ul').children('li').removeClass('active');
			$(this).parent().addClass('active');

			$('.tabs-widget > div').hide();

			$(link).fadeIn();
		}
	});

	/*-------------------------------------------------*/
	/* =  flexslider
	/*-------------------------------------------------*/
	try {

		var SliderPost = $('.flexslider');

		SliderPost.flexslider({
			animation: "swing",
			slideshowSpeed: 4000,
		});
	} catch(err) {

	}

	/* ---------------------------------------------------------------------- */
	/*	Contact Map
	/* ---------------------------------------------------------------------- */
	var contact = {"lat":"40.714623", "lon":"-74.006605"}; //Change a map coordinate here!

	try {
		$('#map').gmap3({
		    action: 'addMarker',
		    latLng: [contact.lat, contact.lon],
		    map:{
		    	center: [contact.lat, contact.lon],
		    	zoom: 14
		   		},
		    },
		    {action: 'setOptions', args:[{scrollwheel:false}]}
		);
	} catch(err) {

	}



	/*-------------------------------------------------*/
	/* =  Easy PieChart
	/*-------------------------------------------------*/
	try {

		var PieChart = $('.skill-item');
		PieChart.appear(function() {

			$(function() {
				$('.chart').easyPieChart({
					easing: 'easeOutBounce',
					onStep: function(from, to, percent) {
						$(this.el).find('.percent').text(Math.round(percent));
					}
				});
				var chart = window.chart = $('.chart').data('easyPieChart');
				$('.js_update').on('click', function() {
					chart.update(Math.random()*200-100);
				});
			});
		});
		} catch(err) {

	}

    

	/*-------------------------------------------------*/
	/* = skills animate
	/*-------------------------------------------------*/

	try{
		var skillBar = $('.skills-progress');
		skillBar.appear(function() {

			var animateElement = $(".meter > span");
			animateElement.each(function() {
				$(this)
					.data("origWidth", $(this).width())
					.width(0)
					.animate({
						width: $(this).data("origWidth")
					}, 1200);
			});

		});
	} catch(err) {
	}



	/*-------------------------------------------------*/
	/* =  count increment
	/*-------------------------------------------------*/
	try {
		$('.statistic-post').appear(function() {
			$('.timer').countTo({
				speed: 4000,
				refreshInterval: 60,
				formatter: function (value, options) {
					return value.toFixed(options.decimals);
				}
			});
		});
	} catch(err) {

	}
	

 	/*-------------------------------------------------*/
	/* =  Scroll to TOP
	/*-------------------------------------------------*/

	(function() {

		var docElem = document.documentElement,
			didScroll = false,
			changeHeaderOn = 550;
			document.querySelector( '#back-to-top' );
		function init() {
			window.addEventListener( 'scroll', function() {
				if( !didScroll ) {
					didScroll = true;
					setTimeout( scrollPage, 50 );
				}
			}, false );
		}
		
		function scrollPage() {
			var sy = scrollY();
			if ( sy >= changeHeaderOn ) {
				$( '#back-to-top' ).addClass('active');
			}
			else {
				$( '#back-to-top' ).removeClass('active');
			}
			didScroll = false;
		}
		
		function scrollY() {
			return window.pageYOffset || docElem.scrollTop;
		}
		
		init();
		
	})();

	$('a[href="#top"]').on('click', function(){
        $('html, body').animate({scrollTop: 0}, 'slow');
        return false;
    });


	/* ---------------------------------------------------------------------- */
	/*	Contact Form
	/* ---------------------------------------------------------------------- */

	var submitContact = $('#submit_contact'),
		message = $('#msg');

	submitContact.on('click', function(e){
		e.preventDefault();

		var $this = $(this);
		
		$.ajax({
			type: "POST",
			url: 'contact.php',
			dataType: 'json',
			cache: false,
			data: $('#contact-form').serialize(),
			success: function(data) {

				if(data.info !== 'error'){
					$this.parents('form').find('input[type=text],textarea,select').filter(':visible').val('');
					message.hide().removeClass('success').removeClass('error').addClass('success').html(data.msg).fadeIn('slow').delay(5000).fadeOut('slow');
				} else {
					message.hide().removeClass('success').removeClass('error').addClass('error').html(data.msg).fadeIn('slow').delay(5000).fadeOut('slow');
				}
			}
		});
	});

	// Header 


	(function() {

		var docElem = document.documentElement,
			didScroll = false,
			changeHeaderOn = 100;
			document.querySelector( 'nav' );
		function init() {
			window.addEventListener( 'scroll', function() {
				if( !didScroll ) {
					didScroll = true;
					setTimeout( scrollPage, 55 );
				}
			}, false );
		}
		
		function scrollPage() {
			var sy = scrollY();
			if ( sy >= changeHeaderOn ) {
				$( 'nav' ).addClass('active');
			}
			else {
				$( 'nav' ).removeClass('active');
			}
			didScroll = false;
		}
		
		function scrollY() {
			return window.pageYOffset || docElem.scrollTop;
		}
		
		init();

		
	})();


	(function() {

		var docElem = document.documentElement,
			didScroll = false,
			changeHeaderOn = 100;
			document.querySelector( '.top-line' );
		function init() {
			window.addEventListener( 'scroll', function() {
				if( !didScroll ) {
					didScroll = true;
					setTimeout( scrollPage, 55 );
				}
			}, false );
		}
		
		function scrollPage() {
			var sy = scrollY();
			if ( sy >= changeHeaderOn ) {
				$( '.top-line' ).addClass('active');
			}
			else {
				$( '.top-line' ).removeClass('active');
			}
			didScroll = false;
		}
		
		function scrollY() {
			return window.pageYOffset || docElem.scrollTop;
		}
		
		init();

		
	})();


	//Add Inactive Class To All Accordion Headers
	$('.accordion-header').toggleClass('inactive-header');
	
	//Set The Accordion Content Width
	// var contentwidth = $('.accordion-header').width();
	// $('.accordion-content').css({'width' : contentwidth });
	
	//Open The First Accordion Section When Page Loads
	$('.accordion-header').first().toggleClass('active-header').toggleClass('inactive-header');
	$('.accordion-content').first().slideDown().toggleClass('open-content');
	
	// The Accordion Effect
	$('.accordion-header').on('click', function () {
		if($(this).is('.inactive-header')) {
			$('.active-header').toggleClass('active-header').toggleClass('inactive-header').next().slideToggle().toggleClass('open-content');
			$(this).toggleClass('active-header').toggleClass('inactive-header');
			$(this).next().slideToggle().toggleClass('open-content');
		}
		
		else {
			$(this).toggleClass('active-header').toggleClass('inactive-header');
			$(this).next().slideToggle().toggleClass('open-content');
		}
	});
	
	return false;

});

