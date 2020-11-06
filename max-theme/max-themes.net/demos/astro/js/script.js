/*jshint jquery:true */
/*global $:true */

var $ = jQuery.noConflict();

$(document).ready(function($) {
	"use strict";


	$(window).scroll(function() {
	if ($(this).scrollTop() > 500){  
	    $('.sticky-header').addClass("sticky");
	  }
	  else{
	    $('.sticky-header').removeClass("sticky");
	  }
	});

	/*-------------------------------------------------*/
	/* =  Mobile Menu
	/*-------------------------------------------------*/
	// Create the dropdown base
    $("<select />").appendTo("#nav");
    
    
    // Create default option "Go to..."
    $("<option />", {
		"selected": "selected",
		"value"   : "",
		"text"    : "Navigate to..."
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
	/* =  Isotope
	/*-------------------------------------------------*/
	var winDow = $(window);
			// Needed variables
	var $container=$('.filter-container');
	var $filter=$('.filter');

	try{
		$container.imagesLoaded( function(){
			$container.show();
			$container.isotope({
				filter:'*',
				layoutMode:'masonry',
				animationOptions:{
					duration:750,
					easing:'linear'
				}
			});
		});
	} catch(err) {
	}

	winDow.on('resize', function(){
		var selector = $filter.find('a.active').attr('data-filter');

		try {
			$container.isotope({ 
				filter	: selector,
				animationOptions: {
					duration: 750,
					easing	: 'linear',
					queue	: false,
				}
			});
		} catch(err) {
		}
		return false;
	});
	
	// Isotope Filter 
	$filter.find('a').on('click', function(){
		var selector = $(this).attr('data-filter');

		try {
			$container.isotope({ 
				filter	: selector,
				animationOptions: {
					duration: 750,
					easing	: 'linear',
					queue	: false,
				}
			});
		} catch(err) {

		}
		return false;
	});


	var filterItemA	= $('.filter a');

	filterItemA.on('click', function(){
		var $this = $(this);
		if ( !$this.hasClass('active')) {
			filterItemA.removeClass('active');
			$this.addClass('active');
		}
	});




	/*-------------------------------------------------*/
	/* =  Accordion isotope
	/*-------------------------------------------------*/

	$(document).ready(function($) { 
		'use strict';

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
	/* =  Animated content
	/*-------------------------------------------------*/

	try {
		/* ================ ANIMATED CONTENT ================ */
        if ($(".animated")[0]) {
            $('.animated').css('opacity', '0');
        }

        $('.triggerAnimation').waypoint(function() {
            var animation = $(this).attr('data-animate');
            $(this).css('opacity', '');
            $(this).addClass("animated " + animation);

        },
                {
                    offset: '80%',
                    triggerOnce: true
                }
        );
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
	var contact = {"lat":"41.8744661", "lon":"-87.6614312"}; //Change a map coordinate here!

	try {
		var mapContainer = $('.map');
		mapContainer.gmap3({
			infowindow:{
				address:"http://goo.gl/maps/Mt7xc",
				options:{
					content: "We are Here!"
				}
			},
			action: 'addMarker',
			marker:{
				options:{
				}
			},
			latLng: [contact.lat, contact.lon],
			map:{
				center: [contact.lat, contact.lon],
				zoom: 15
				},
			},
			{action: 'setOptions', args:[{scrollwheel:false}]}
		);
	} catch(err) {

	}

	try	{
		$(".alert").alert()
	} catch(err) {
		
	}


 	/*-------------------------------------------------*/
	/* =  Scroll to TOP
	/*-------------------------------------------------*/
	$('a[href="#top"]').on('click', function(){
        $('html, body').animate({scrollTop: 0}, 'slow');
        return false;
    });


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
				speed: 1200,
				refreshInterval: 60,
				formatter: function (value, options) {
					return value.toFixed(options.decimals);
				}
			});
		});
	} catch(err) {

	}
	
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


});