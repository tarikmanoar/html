jQuery(document).ready(function($) {

	$('#mtp-toggle').click(function(){
		$('#mtp-wrapper').toggle();
		$('#mtp-toggle').toggleClass('mtp-toggle-close');
	});
	//$('#mtp-toggle').click();
	
	// Layout style
	$('.mtp-layout-select').change(function(){
		if ( $(this).val() == 'boxed-layout' ) {
			$('#wrapper, #site-header #header-wrapper').css('max-width', 1190 + 'px');
			$('#wrapper').addClass('boxed-layout');
		} else {
			$('#wrapper, #site-header #header-wrapper').css('max-width', '');
			$('#wrapper').removeClass('boxed-layout');
		}
		$(window).trigger('resize'); // Resize sliders
	});	

	// Content width
	$('.mtp-layout-width-select').change(function(){
		var contentWidth = $(this).val();
		$('.row-inner').css('max-width', parseInt(contentWidth) + 30 + 'px');
		$('#container.no-sidebar.no-vc, .sn_inner, #container.row-inner, .site-info .row-inner, .page-header .row-inner').css('max-width', contentWidth + 'px');
		$('.row-inner.row-inner-full').css('max-width', '100%');
		
		if ( $('.mtp-header-select').val() == 'fixed-header' ) {
				$('#site-header #header-container, #top-bar').css('max-width', contentWidth + 'px');
		}		
		
		// Page: Contained heder fix
		if ( $('body').hasClass('page-id-5737') ) {
				$('#site-header #header-container').css('max-width', contentWidth + 'px');
		}
		
		if ( $('.mtp-layout-select').val() == 'boxed-layout' ) {
			$('#wrapper').css('max-width',  parseInt(contentWidth) + 90 + 'px');
		}
		$(window).trigger('resize'); // Resize sliders
	});
	
	// Background select
	$('.mtp-background-pattern li').click(function(){
		if ($('.mtp-layout-select').val() != 'boxed-layout'){
			alert('Please select "Boxed" layout!')
		}
		var selectedPattern = $(this).data('bg-url');
		$('body').css('background-image', 'url('+ selectedPattern +')').addClass('background-pattern');
	});
		
});