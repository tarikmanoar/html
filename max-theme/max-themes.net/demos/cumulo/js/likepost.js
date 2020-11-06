'use strict';

(function($) {
	$(document).ready( function() {
		$(document).on( 'click', "a.lp-meta-likes", function () {
			var thisObj = $(this);
			
			if ( thisObj.attr('disabled') ) {
				return false;
			}

			thisObj.attr('disabled', 'disabled');

			$.ajax( {
				url: ajaxpagination.ajaxurl,
				type: 'post',
				data: {
					action: 'cmo_like_post',
					params: { 
						user_id : $(this).data('user_id'),
						post_id : $(this).data('post_id')
					}
				},
				success: function( html ) {
					if( html == 'fail' ) {
						// failed. try again later;
					} else {
						var data = JSON.parse( html );
						thisObj.find('span.lp-meta-likes-count').html( data[0] );
						thisObj.find('span.lp-meta-likes-icon').removeClass( data[1] ).addClass( data[2] );
					}
				},
				error: function( html ) {
					// error
				}
			} );

			return false;
		});
	}); /* end of document ready */
})(jQuery);