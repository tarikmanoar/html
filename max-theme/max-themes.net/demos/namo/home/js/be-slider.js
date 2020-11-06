;(function($) {
	var support = { animations : Modernizr.cssanimations },
		animEndEventNames = {
			'WebkitAnimation' : 'webkitAnimationEnd',
			'OAnimation' : 'oAnimationEnd',
			'msAnimation' : 'MSAnimationEnd',
			'animation' : 'animationend'
		},
		animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ];
	$.fn.BeSlider = function() {
		var cntAnims = 0,
			isAnimating = false;
		var navigate = function( $this, dir ) {
			if( isAnimating ) 
				return false;
			var component = $this.closest('.component');
				items = component.children('ul.itemwrap').children('li'),
				itemsCount = component.children('ul.itemwrap').children('li').length,
				isAnimating = true,
				current = parseInt($this.closest('.component').attr('data-current'));
				currentItem = items[ current ];
			cntAnims = 0;
			if( dir === 'next' ) {
				current = current < itemsCount - 1 ? current + 1 : 0;
			} else if( dir === 'prev' ) {
				current = current > 0 ? current - 1 : itemsCount - 1;
			}
			$this.closest('.component').attr('data-current', current);
			var nextItem = items[ current ];
			var onEndAnimationCurrentItem = function() {
				jQuery(currentItem).removeClass( 'current' );
				jQuery(currentItem).removeClass( dir === 'next' ? 'navOutNext' : 'navOutPrev' );
				++cntAnims;
				if( cntAnims === 2 ) {
					isAnimating = false;
				}
			}
			var onEndAnimationNextItem = function() {
				jQuery(nextItem).unbind( animEndEventName, onEndAnimationNextItem );
				jQuery(nextItem).addClass( 'current' );
				jQuery(nextItem).removeClass( dir === 'next' ? 'navInNext' : 'navInPrev' );
				++cntAnims;
				if( cntAnims === 2 ) {
					isAnimating = false;
				}
			}
			if( support.animations ) {
				jQuery(currentItem).bind( animEndEventName, onEndAnimationCurrentItem );
				jQuery(nextItem).bind( animEndEventName, onEndAnimationNextItem );
			} else {
				onEndAnimationCurrentItem();
				onEndAnimationNextItem();
			}
			jQuery(currentItem).addClass(dir === 'next' ? 'navOutNext' : 'navOutPrev');
			jQuery(nextItem).addClass(dir === 'next' ? 'navInNext' : 'navInPrev');
		}
		jQuery(document).on('click', '.component nav .next', function(e) {
			e.preventDefault(); 
			navigate( jQuery(this), 'next' );
		});
		jQuery(document).on('click', '.component nav .prev', function(e) {
			e.preventDefault(); 
			navigate( jQuery(this), 'prev' );
		});
    };
    jQuery(document).ready(function() {
    	jQuery('.component').BeSlider();
    	jQuery('.component ul li:first-child').addClass('current');
    });
}( jQuery ));