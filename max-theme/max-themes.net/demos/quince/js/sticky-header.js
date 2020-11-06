jQuery(document).ready(function($) {
	"use strict"; 

	var logoMargin = $('#site-logo').css('marginTop').replace('px', '');

	// Sticky header
	$(window).scroll(function() {
		var scrolled = $(this).scrollTop(),
		headerHeight = $('#site-header').height(),
		headerOffset = $('#site-header').offset().top,
		stickyHeight = headerHeight + headerOffset - scrolled,
		proportion = headerHeight / 50,
		logoNewMargin = logoMargin / proportion;
		
		if(scrolled > headerOffset) {
			$('#site-header').addClass('header-sticked');
			$('#site-header #header-wrapper').css({ 'position' : 'fixed', 'top' : '0px', '-webkit-backface-visibility' :'hidden' });
			$('.admin-bar #site-header #header-wrapper').css({ 'position' : 'fixed', 'top' : '30px', '-webkit-backface-visibility' :'hidden' });
			
			if(stickyHeight > 50) {
				$('#site-header #header-container').css({ 'height' : stickyHeight  + 'px' });
				$('#site-logo').css({ 'margin-top' : logoNewMargin  + 'px' });
				$('#site-logo img').css({ 'max-height' : stickyHeight  + 'px' });
				$('#site-logo img').css({ 'width' : 'auto' });
				$('#site-navigation .menu > li > a, #site-navigation .search_button, #site-navigation .header_cart_link, #site-logo .site-title').css({ 'line-height' : stickyHeight  + 'px' });
			} 
			if(stickyHeight < 50) {
				$('#site-header #header-container').css({ 'height' : '50px' });
				$('#site-logo').css({ 'margin-top' : logoNewMargin  + 'px' });
				$('#site-logo img').css({ 'max-height' : '50px' });
				$('#site-logo img').css({ 'width' : 'auto' });
				$('#site-navigation .menu > li > a, #site-navigation .search_button, #site-navigation .header_cart_link, #site-logo .site-title').css({ 'line-height' : '50px' });
			}
		} else {
			$('#site-header').removeClass('header-sticked');
			$('#site-header #header-wrapper').css({ 'position' : 'relative', 'top' : 'auto' });
			$('#site-header #header-container').css({ 'height' : headerHeight + 'px' });
			$('#site-logo').css({ 'margin-top' : logoMargin  + 'px' });
			$('#site-logo img').css({ 'max-height' : headerHeight + 'px' });
			$('#site-logo img').css({ 'width' : 'auto' });
			$('#site-navigation .menu > li > a, #site-navigation .search_button, #site-navigation .header_cart_link, #site-logo .site-title').css({ 'line-height' : headerHeight + 'px' });
		}
		
	});
	
	
	// Trigger scroll
	setTimeout( function(){ 
		$(window).scroll();
	}, 500 );
	
});