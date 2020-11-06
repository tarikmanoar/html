(function ($) {
	"use strict";

	// Page Loaded...
	$(document).ready(function () {

		/*==========  Responsive Navigation  ==========*/
		$('.main-nav').children().clone().appendTo('.responsive-nav');
		$('.responsive-menu-open').on('click', function(event) {
			event.preventDefault();
			$('body').addClass('no-scroll');
			$('.responsive-menu').addClass('open');
			return false;
		});
		$('.responsive-menu-close').on('click', function(event) {
			event.preventDefault();
			$('body').removeClass('no-scroll');
			$('.responsive-menu').removeClass('open');
			return false;
		});

		/*==========  Accordion  ==========*/
		$('.panel-heading a').on('click', function() {
			$('.panel-heading').removeClass('active');
			$(this).parents('.panel-heading').addClass('active');
			$('.panel-heading .icon').removeClass('rotate');
			$(this).find('.icon').addClass('rotate');
		});

		/*==========  Portfolio Thirds  ==========*/
		var $portfolioThirdsContainer = $('#portfolio-thirds').imagesLoaded(function() {
			$('#portfolio-thirds .item').height($('#portfolio-thirds .item').width());
			$(window).on('resize', function() {
				$('#portfolio-thirds .item').height($('#portfolio-thirds .item').width());
			});
			$portfolioThirdsContainer.isotope({
				itemSelector: '.item',
				layoutMode: 'masonry',
				percentPosition: true,
				masonry: {
					columnWidth: $portfolioThirdsContainer.find('.portfolio-sizer')[0]
				}
			});
			return false;
		});
		$('#portfolio-thirds-filters').on('click', 'button', function() {
			$('#portfolio-thirds-filters button').removeClass('active');
			$(this).addClass('active');
			var filterValue = $(this).attr('data-filter');
			$portfolioThirdsContainer.isotope({filter: filterValue});
		});

		/*==========  Portfolio Fifths  ==========*/
		var $portfolioFifthsContainer = $('#portfolio-fifths').imagesLoaded(function() {
			$portfolioFifthsContainer.isotope({
				itemSelector: '.item',
				layoutMode: 'masonry',
				percentPosition: true,
				masonry: {
					columnWidth: $portfolioFifthsContainer.find('.portfolio-sizer')[0]
				}
			});
			return false;
		});
		$('#portfolio-fifths-filters').on('click', 'button', function() {
			$('#portfolio-fifths-filters button').removeClass('active');
			$(this).addClass('active');
			var filterValue = $(this).attr('data-filter');
			$portfolioFifthsContainer.isotope({filter: filterValue});
		});

		/*==========  Portfolio Details  ==========*/
		var $portfolioDetailsContainer = $('#portfolio-details').imagesLoaded(function() {
			$portfolioDetailsContainer.isotope({
				itemSelector: '.item',
				layoutMode: 'masonry',
				percentPosition: true,
				masonry: {
					columnWidth: $portfolioDetailsContainer.find('.portfolio-sizer')[0]
				}
			});
			return false;
		});

		/*==========  Home Slider  ==========*/
		$('#home-slider').flexslider({
			selector: '.slides > .slide',
			controlNav: false,
			pauseOnHover: false,
			smoothHeight: true
		});

		/*==========  Testimonial Slider  ==========*/
		$('.testimonial-slider').owlCarousel({
			loop: true,
			autoplay: true,
			items: 3,
			nav: false,
			dots: true,
			navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
			center: true,
			responsive: {
				0:{
					items: 1
				},
				768:{
					items: 3
				}
			}
		});

		/*==========  Testimonial Simple Slider  ==========*/
		$('.testimonial-simple-slider').owlCarousel({
			loop: true,
			autoplay: true,
			items: 1,
			nav: true,
			dots: false,
			navText: ['<i class="fa fa-long-arrow-left"></i>','<i class="fa fa-long-arrow-right"></i>'],
		});

	});
	
	try {

	  var ZoomImage = jQuery('.zoom, .zoom-image');
	    ZoomImage.magnificPopup({
	        type: 'image',
	         gallery: {
	            enabled: true
	        }
	    });
	  } catch(err) {
	}
	
	/*==========  Validate Email  ==========*/
	function validateEmail($validate_email) {
		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		if( !emailReg.test( $validate_email ) ) {
			return false;
		} else {
			return true;
		}
		return false;
	}
	
	/*==========  Contact Form  ==========*/
	$('#contact-form').on('submit', function() {
		$('#contact-error').fadeOut();
		$('#contact-success').fadeOut();
		$('#contact-loading').fadeOut();
		$('#contact-loading').fadeIn();
		if (validateEmail($('#contact-email').val()) && $('#contact-email').val().length !== 0 && $('#contact-name').val().length !== 0 && $('#contact-message').val().length !== 0) {
			var action = $(this).attr('action');
			$.ajax({
				type: "POST",
				url : action,
				data: {
					contact_name: $('#contact-name').val(),
					contact_email: $('#contact-email').val(),
					contact_phone: $('#contact-phone').val(),
					contact_subject: $('#contact-subject').val(),
					contact_message: $('#contact-message').val()
				},
				success: function() {
					$('#contact-error').fadeOut();
					$('#contact-success').fadeOut();
					$('#contact-loading').fadeOut();
					$('#contact-success .message').html('Success! Thanks for contacting us!');
					$('#contact-success').fadeIn();
				},
				error: function() {
					$('#contact-error').fadeOut();
					$('#contact-success').fadeOut();
					$('#contact-loading').fadeOut();
					$('#contact-error .message').html('Sorry, an error occurred.');
					$('#contact-error').fadeIn();
				}
			});
		} else if (!validateEmail($('#contact-email').val()) && $('#contact-email').val().length !== 0 && $('#contact-name').val().length !== 0 && $('#contact-message').val().length !== 0) {
			$('#contact-error').fadeOut();
			$('#contact-success').fadeOut();
			$('#contact-loading').fadeOut();
			$('#contact-error .message').html('Please enter a valid email.');
			$('#contact-error').fadeIn();
		} else {
			$('#contact-error').fadeOut();
			$('#contact-success').fadeOut();
			$('#contact-loading').fadeOut();
			$('#contact-error .message').html('Please fill out all the fields.');
			$('#contact-error').fadeIn();
		}
		return false;
	});

	/*==========  Newsletter Form  ==========*/
	var $form = $('#mc-embedded-subscribe-form');
	$form.submit(function() {
		$('#newsletter-error').fadeOut();
		$('#newsletter-success').fadeOut();
		$('#newsletter-loading').fadeOut();
		$('#newsletter-info').fadeOut();
		$('#newsletter-loading').fadeIn();
		if (validateEmail($('#mce-EMAIL').val()) && $('#mce-EMAIL').val().length !== 0) {
			$.ajax({
				type: $form.attr('method'),
				url: $form.attr('action'),
				data: $form.serialize(),
				cache: false,
				dataType: 'json',
				contentType: 'application/json; charset=utf-8',
				error: function(err) {
					$('#newsletter-error').fadeOut();
					$('#newsletter-success').fadeOut();
					$('#newsletter-loading').fadeOut();
					$('#newsletter-info').fadeOut();
					$('#newsletter-error .message').html(err.msg);
					$('#newsletter-error').fadeIn();
				},
				success: function(data) {
					if (data.result !== 'success') {
						$('#newsletter-error').fadeOut();
						$('#newsletter-success').fadeOut();
						$('#newsletter-loading').fadeOut();
						$('#newsletter-info').fadeOut();
						$('#newsletter-info .message').html(data.msg);
						$('#newsletter-info').fadeIn();
					} else {
						$('#newsletter-error').fadeOut();
						$('#newsletter-success').fadeOut();
						$('#newsletter-loading').fadeOut();
						$('#newsletter-info').fadeOut();
						$('#newsletter-success .message').html(data.msg);
						$('#newsletter-success').fadeIn();
					}
				}
			});
		} else {
			$('#newsletter-error').fadeOut();
			$('#newsletter-success').fadeOut();
			$('#newsletter-loading').fadeOut();
			$('#newsletter-info').fadeOut();
			$('#newsletter-error .message').html('Please enter a valid email.');
			$('#newsletter-error').fadeIn();
		}
		return false;
	});

	/*==========  Footer Map  ==========*/
	var footer_map;
	function initialize_footer_map() {
		if ($('.footer-map').length) {
			var myLatLng = new google.maps.LatLng(-37.814199, 144.961560);
			var mapOptions = {
				zoom: 14,
				center: myLatLng,
				scrollwheel: false,
				panControl: false,
				zoomControl: false,
				scaleControl: false,
				mapTypeControl: false,
				streetViewControl: false
			};
			footer_map = new google.maps.Map(document.getElementById('footer-map'), mapOptions);
			var marker = new google.maps.Marker({
				position: myLatLng,
				map: footer_map,
				title: 'Envato',
				icon: './images/marker.png'
			});
		} else {
			return false;
		}
		return false;
	}
	google.maps.event.addDomListener(window, 'load', initialize_footer_map);

	/*==========  Full Width Map  ==========*/
	var full_width_map;
	function initialize_full_width_map() {
		if ($('.full-width-map').length) {
			var myLatLng = new google.maps.LatLng(-37.814199, 144.961560);
			var mapOptions = {
				zoom: 14,
				center: myLatLng,
				scrollwheel: false,
				panControl: false,
				zoomControl: false,
				scaleControl: false,
				mapTypeControl: false,
				streetViewControl: false
			};
			full_width_map = new google.maps.Map(document.getElementById('full-width-map'), mapOptions);
			var marker = new google.maps.Marker({
				position: myLatLng,
				map: full_width_map,
				title: 'Envato',
				icon: './images/contact-marker.png'
			});
		} else {
			return false;
		}
		return false;
	}
	google.maps.event.addDomListener(window, 'load', initialize_full_width_map);

})(jQuery);