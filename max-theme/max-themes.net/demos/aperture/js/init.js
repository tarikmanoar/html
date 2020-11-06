jQuery(document).ready(function($) {
	"use strict"; //satisfy the code inspectors
		
	// Scroll to top
	$('a[href="#top"]').on('click',function () {
		$('body,html').animate({
			scrollTop: 0
		}, 800);
		return false;
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
	
	// Phone/iPod/iPad's hover fix (if no link)
	if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i))) {
		$(".service-box.sb_center").on('click',function(){
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