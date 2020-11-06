jQuery(document).ready(function($) {
	"use strict"; //satisfy the code inspectors
	
	// Scroll to top button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 150) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	
	// Scroll to top link
	$('a[href="#top"]').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	// One page menu scroll
	$('#site-navigation a[href^="#"]').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
			|| location.hostname == this.hostname) {

			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			   if (target.length) {
				 $('html,body').animate({
					 scrollTop: target.offset().top-50
				}, 1000);
				return false;
			}
		}
	});

	// Touch hover fix
	$('article.format-image .post-preview a, .gallery-item').on("touchstart", function (e) {
		var link = $(this); //preselect the link
		
		if (link.hasClass('touch-hover')) {
			return true;
		} else {
			link.addClass("touch-hover");
			$('article.format-image .post-preview a, .gallery-item').not(this).removeClass("touch-hover");
			e.preventDefault();
			return false; //extra, and to make sure the function has consistent return points
		}
	});
	
	
	// Header search
	$('#trigger-header-search').click(function () {
		$('.header-search').toggleClass('header-search-active');
	});
	
	
	// Phone/iPod/iPad's hover fix (if no link)
	if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i))) {
		$(".service-box.sb_center").click(function(){
			//we just need to attach a click event listener
		});	
	}

	// Remove animation when viewing on mobile devices
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		$('.wpb_animate_when_almost_visible').removeClass('wpb_animate_when_almost_visible');
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
	
});