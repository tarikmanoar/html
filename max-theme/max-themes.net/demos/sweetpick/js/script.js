/*jshint jquery:true */
/*global $:true */

var $ = jQuery.noConflict();

$(document).ready(function($) {
	"use strict";


	/* ---------------------------------------------------------------------- */
	/*	menu reonsive
	/* ---------------------------------------------------------------------- */
	var menuClick = $('a.elemadded'),
		navbarVertical = $('.menu-box');
		
		menuClick.on('click', function(e){
		e.preventDefault();

		if( navbarVertical.hasClass('active') ){
			navbarVertical.slideUp(300).removeClass('active');
		} else {
			navbarVertical.slideDown(300).addClass('active');
		}
	});


    $('.trigger').on('click', function(){
        $('.search-bar').animate({width: 'toggle'},500);
    });

	
	$(window).load(function() { // makes sure the whole site is loaded
		$('#status').fadeOut(); // will first fade out the loading animation
		$('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
		$('body').delay(350).css({'overflow':'visible'});
	})

	

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
		  prev: '#prev1',
		  next: '#next1',
	      items: {
	    	width: 300,
	       	height: 430, 
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
		  prev: '#prev2',
		  next: '#next2',
	      items: {
	    	width: 300,
	       	height: 430, 
	        visible: {
	          min: 1,
	          max: 4
	        }
	      }
	    });
    } catch(err) {
	}


	/* ---------------------------------------------------------------------- */
	/*	magnific-popup
	/* ---------------------------------------------------------------------- */

	try {
		// Example with multiple objects
		var ZoomImage = $('.zoom, .zoom-image');
		ZoomImage.magnificPopup({
			type: 'image'
		});
	} catch(err) {

	}

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


	/* ---------------------------------------------------------------------- */
	/*	nice scroll
	/* ---------------------------------------------------------------------- */

	try {
		var HTMLcontainer = $("html");
		HTMLcontainer.niceScroll({
			cursorcolor:"#333"
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

	var tabs = $('#tabs-titles li'); //grab tabs
	var contents = $('#tabs-contents li'); //grab contents

	tabs.on('click',function(){
	  contents.hide(); //hide all contents
	  tabs.removeClass('current'); //remove 'current' classes
	  $(contents[$(this).index()]).show(); //show tab content that matches tab title index
	  $(this).addClass('current'); //add current class on clicked tab title
	});


	/*-------------------------------------------------*/
	/* =  flexslider
	/*-------------------------------------------------*/
	try {

		var SliderPost = $('.flexslider');

		SliderPost.flexslider({
			animation: "swing",
			slideshowSpeed: 4000
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


	$('a[href="#top"]').on('click', function(){
        $('html, body').animate({scrollTop: 0}, 'slow');
        return false;
    });


	/* ---------------------------------------------------------------------- */
	/*	Login
	/* ---------------------------------------------------------------------- */

	$(document).ready(function() {
	$('a.login-window').on('click', function() {
		
		// Getting the variable's value from a link 
		var loginBox = $(this).attr('href');

		//Fade in the Popup and add close button
		$(loginBox).fadeIn(300);
		
		//Set the center alignment padding + border
		var popMargTop = ($(loginBox).height() + 24) / 2; 
		var popMargLeft = ($(loginBox).width() + 24) / 2; 
		
		$(loginBox).css({ 
			'margin-top' : -popMargTop,
			'margin-left' : -popMargLeft
		});
		
		// Add the mask to body
		$('body').append('<div id="mask"></div>');
		$('#mask').fadeIn(300);
		
		return false;
	});
	
	// When clicking on the button close or the mask layer the popup closed
	$('a.close, #mask').on('click', function() { 
	  	$('#mask , .login-popup').fadeOut(300 , function() {
			$('#mask').remove();  
		}); 
		return false;
		});
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

