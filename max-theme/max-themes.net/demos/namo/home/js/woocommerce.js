jQuery(document).ready(function() {
	jQuery(document).on( 'mouseenter', '.header-cart-controls', function() {
		if(jQuery(this).find('.cart-contents').hasClass('cart-no-empty') && jQuery(this).find('.cart_list.product_list_widget ').length > 0) {
			jQuery(this).find('.widget_shopping_cart_wrap').stop(true, false).fadeIn();
		}
	});
	jQuery(document).on( 'mouseleave', '.header-cart-controls', function() {
		if(jQuery(this).find('.cart-contents').hasClass('cart-no-empty') && jQuery(this).find('.cart_list.product_list_widget ').length > 0) {
			jQuery(this).find('.widget_shopping_cart_wrap').stop(true, false).fadeOut();
		}
	});
	jQuery('.product-single-boxed-content .images').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
		}
    });
	jQuery("select.orderby,select#calc_shipping_country,select#calc_shipping_state").chosen({inherit_select_classes: true});
	jQuery("select.orderby,select#calc_shipping_country,select#calc_shipping_state").trigger("chosen:updated");
	jQuery(document).on("update_content", function() {
		jQuery.ajax( $fragment_refresh );
	});
});