// Avoid `console` errors in browsers that lack a console.
;(function() {
    var method;
    var noop = function noop() {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];
        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());
// Place any jQuery/helper plugins in here.
;(function($,sr) {
 // debouncing function from John Hann
 // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
 var debounce = function (func, threshold, execAsap) {
    var timeout;
     return function debounced () {
         var obj = this, args = arguments;
         function delayed () {
             if (!execAsap)
                 func.apply(obj, args);
             timeout = null;
         };

         if (timeout)
             clearTimeout(timeout);
         else if (execAsap)
             func.apply(obj, args);

         timeout = setTimeout(delayed, threshold || 100);
     };
 }
 // smartresize 
 jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };
})(jQuery,'smartresize');
;(function($) {
	jQuery.fn.slideFadeToggle  = function(speed, easing, callback) {
        return this.animate({opacity: 'toggle', height: 'toggle', padding: 'toggle', margin: 'toggle'}, speed, easing, callback);
	};
})();
;(function( $ ) {
	var $window = $(window), update_full_screen;
    $.fn.FullScreen = function() {
		var $this = $(this);
		function update_color() {
			$this.each(function() {
				jQuery(this).animate({opacity: 1}, 1000);
			});
		}
		update_full_screen = function() {
			var $border_length = 2;
			if(jQuery('body').hasClass('be-themes-layout-layout-border-header-top')) {
				$border_length = 1;
			}
			$this.each(function() {
				if(jQuery(this).hasClass('full-screen-height')) {
					if(jQuery(window).width() > 960) {
						if(jQuery(this).hasClass('full-no')) {
							jQuery(this).height($window.height()-(jQuery('#header').height()+(jQuery('.layout-box-bottom').height()*$border_length+jQuery('#wpadminbar').height())));
						} else {
							if ( jQuery('ul#mobile-menu').is(":visible") ) {
								jQuery(this).height($window.height()-((jQuery('#header').height()-jQuery('#mobile-menu').height())+(jQuery('.layout-box-bottom').height()*$border_length+jQuery('#wpadminbar').height())));
							} else {
								jQuery(this).height($window.height()-(jQuery('#header').height()+(jQuery('.layout-box-bottom').height()*$border_length+jQuery('#wpadminbar').height())));
							}
						}
						jQuery(this).css('padding', '0px 0px');
					} else {
						var $padding = 0;
						if(jQuery('.header-hero-section').find('.master-slider').length > 0) {
							$padding = '0px';
						} else {
							if(jQuery('body').hasClass('header-transparent')) {
								$padding = parseInt(jQuery('#header-inner-wrap').height()+100)+'px 0px 100px 0px';
							} else {
								$padding = '100px 0px 100px 0px';
							}
						}
						jQuery(this).height('auto');
						jQuery(this).css('padding', $padding);
					}
				}
			});
			update_color();
		}
		function update_full_screen_section() {
			$this.each(function() {
				if(jQuery(this).hasClass('full-screen-section')) {
					var $border_length = 2;
					if(jQuery('body').hasClass('be-themes-layout-layout-border-header-top')) {
						$border_length = 1;
					}
					if(jQuery(window).width() > 960) {	
						if(jQuery('body').hasClass('sticky-header') || jQuery('body').hasClass('transparent-sticky')) {
							jQuery(this).height($window.height()-(parseInt(jQuery('#header-wrap').attr('data-sticky-height'))+(jQuery('#wpadminbar').height()+jQuery('#header').height()+jQuery('#footer').height()+(jQuery('.layout-box-bottom').height()*$border_length))));
							if(jQuery('#page-content').find('.be-section:first-child').hasClass('full-screen-section')) {
								if(jQuery('body').hasClass('section-scroll')) {
									jQuery('#page-content').find('.be-section:first-child').height($window.height()-(jQuery('#wpadminbar').height()+jQuery('#header').height()+jQuery('#footer').height()+(jQuery('.layout-box-bottom').height()*$border_length)));
								} else {
									jQuery('#page-content').find('.be-section:first-child').height($window.height()-(jQuery('#wpadminbar').height()+jQuery('#header').height()+(jQuery('.layout-box-bottom').height()*$border_length)));
								}
							}
						} else {
							if(jQuery('body').hasClass('section-scroll')) {
								jQuery(this).height($window.height()-(jQuery('#wpadminbar').height()+jQuery('#header-wrap').height()+jQuery('#footer').height()+(jQuery('.layout-box-bottom').height()*$border_length)));
							} else {
								jQuery(this).height($window.height()-(jQuery('#wpadminbar').height()+jQuery('#header-wrap').height()+(jQuery('.layout-box-bottom').height()*$border_length)));
							}
						}
						jQuery(this).css('padding', '0px 0px');
						if(jQuery('body').hasClass('section-scroll')) {
							jQuery(this).height($window.height()-(jQuery('#wpadminbar').height()+jQuery('#header').height()+(jQuery('.layout-box-bottom').height()*$border_length)));
						}
					} else {
						jQuery(this).height('auto');
					}
				}
			});
			update_color();
		}
		$window.on('scroll.fullscreen', update_full_screen);
		$window.on('resize', update_full_screen);
		$window.on('load', update_full_screen);
		$window.on('resize', update_full_screen_section);
		$window.on('load', update_full_screen_section);
		update_full_screen();
		update_full_screen_section();
    };
    jQuery(document).on("update_content", function() {
		if((!jQuery(this).hasClass('full-screen-section')) && (!jQuery(this).hasClass('full-screen-height'))) {
			$window.off('scroll.fullscreen', update_full_screen);
		}
    });
}( jQuery ));
;(function( $ ) {
	var $window = $(window), update_transparent;
    $.fn.Transparent = function() {
		var $this = $(this);
		update_transparent = function() {
			var $border_length = 2;
			if(jQuery('body').hasClass('be-themes-layout-layout-border-header-top')) {
				$border_length = 1;
			}
            if(jQuery('#main').hasClass('layout-border-header-top')) {
            	var $header_inner_height = jQuery('#header-inner-wrap').innerHeight();
            	jQuery('#header').height($header_inner_height);
				jQuery('#header-inner-wrap').addClass('no-transparent').removeClass('transparent');
				jQuery('.style2-header-search-widget').css('padding-top', $header_inner_height+jQuery('#wpadminbar').height());
				jQuery('.overlay-menu-close, .header-search-form-close').css('top', $header_inner_height);
            } else {
            	if(jQuery('body').hasClass('header-transparent')) {
					var $animate_position = ((Number(jQuery('.header-hero-section').offset().top)+Number(jQuery('.header-hero-section').height()))-(Number(jQuery('#wpadminbar').innerHeight())+Number(jQuery('#header-wrap').attr('data-default-height'))+Number(jQuery('#header-top-bar-wrap').innerHeight())));
					if($animate_position <= 0) {
						$animate_position = jQuery('#header-inner-wrap').height();
					}
					if($animate_position <= jQuery(window).scrollTop() && jQuery('body').hasClass('transparent-sticky')) {
						jQuery('#header-inner-wrap').addClass('no-transparent').removeClass('transparent');
						setTimeout(function() {
							jQuery('#header-inner-wrap').addClass('top-animate');
						}, 10);
					} else {
						jQuery('#header-inner-wrap').removeClass('no-transparent').addClass('transparent').delay(20000).removeClass('top-animate');
					}
				}
				if (jQuery('body').hasClass('sticky-header')) {
	               	var $animate_position = ((Number(jQuery('#header').offset().top)+Number(jQuery('#header-wrap').attr('data-default-height'))+Number(jQuery('#header-top-bar-wrap').innerHeight())+Number(jQuery('#header-bottom-bar').innerHeight()))-(jQuery('#wpadminbar').height()+jQuery('.layout-box-bottom').innerHeight()));
					if($animate_position <= 0) {
						$animate_position = (Number(jQuery('#header-wrap').attr('data-default-height'))+Number(jQuery('#header-top-bar-wrap').innerHeight())+Number(jQuery('#header-bottom-bar').innerHeight()));
					}
					if($animate_position <= jQuery(window).scrollTop() && jQuery('body').hasClass('sticky-header')) {
						jQuery('#header').height(Number(jQuery('#header-wrap').attr('data-default-height'))+Number(jQuery('#header-top-bar-wrap').innerHeight())+Number(jQuery('#header-bottom-bar').innerHeight()));
						jQuery('#header-inner-wrap').addClass('no-transparent').removeClass('transparent');
	                    setTimeout(function () {
	                        jQuery('#header-inner-wrap').addClass('top-animate');
	                    }, 10);
					} else {
						jQuery('#header-inner-wrap').removeClass('no-transparent').addClass('transparent').delay(20000).removeClass('top-animate');
						jQuery('#header').height('auto');
					}
	            }
            }
		}
		$window.on('scroll.transparent', update_transparent);
		$window.on('resize', update_transparent);
		update_transparent();
    };
    jQuery(document).on("update_content", function() {
		if(jQuery('body').hasClass('no-section-scroll')) {
			$window.off('scroll.transparent', update_transparent);
		}
    });
}( jQuery ));
;(function( $ ) {
	var $window = $(window), move;
    $.fn.SectionScroll = function() {
    	if(jQuery('body').hasClass('section-scroll')) {
			var $this = $(this), $current = 0, $scrolled = false, scrollTimeout, $num_moves = jQuery('#page-content div').children('.be-section').length;
			if(jQuery('.header-hero-custom-section').length == 0 ) {
				$num_moves--;
			}
			move = function() {
				var $border_length = 2;
				if(jQuery('body').hasClass('be-themes-layout-layout-border-header-top')) {
					$border_length = 1;
				}
				var $moveto = (($window.height()-(jQuery('#wpadminbar').height()+jQuery('#header').height()+(jQuery('.layout-box-bottom').height()*$border_length)))*$current);
				jQuery('#content').css({
				    '-webkit-transform' : 'translatey(-'+$moveto+'px)',
				    '-moz-transform' : 'translatey(-'+$moveto+'px)',
				    '-o-transform' : 'translatey(-'+$moveto+'px)',
				    '-ms-transform' : 'translatey(-'+$moveto+'px)',
				    'transform' : 'translatey(-'+$moveto+'px)'
				});
				jQuery('li.fullscreen-nav-item, div.fullscreen-nav-item-hero-section').removeClass('current-item');
				if(jQuery('body').hasClass('header-transparent')) {
					jQuery('#header-inner-wrap').removeClass('background--dark').removeClass('background--light');
				}
				if(jQuery('.header-hero-custom-section').length == 0 ) {
					jQuery('li.fullscreen-nav-item:nth-child('+($current+1)+')').addClass('current-item');
					if(jQuery('body').hasClass('header-transparent')) {
						jQuery('#header-inner-wrap').addClass(function() {
							return jQuery('#page-content div').children('.be-section:nth-child('+($current+1)+')').attr('data-headerscheme');
						});
					}
				} else {
					if($current == 0) {
						jQuery('div.fullscreen-nav-item-hero-section').addClass('current-item');
						if(jQuery('body').hasClass('header-transparent')) {
							jQuery('#header-inner-wrap').addClass(function(){
								return jQuery('#header-inner-wrap').attr('data-headerscheme');
							});
						}
					} else {
						jQuery('li.fullscreen-nav-item:nth-child('+$current+')').addClass('current-item');
						if(jQuery('body').hasClass('header-transparent')) {
							jQuery('#header-inner-wrap').addClass(function(){
								return jQuery('#page-content div').children('.be-section:nth-child('+$current+')').attr('data-headerscheme');
							});
						}
					}
				}
			}
			jQuery.fn.translate = function(element) {
				jQuery('html, body').scrollTop(0);
    			var index = jQuery("div.be-section").index(element);
		    	$current = index;
		    	if(index == -1) {
		    		jQuery('.fullscreen-nav-item-hero-section').trigger('click');
		    		return false;
		    	}
		    	move();
		    	re_size();
			};
			function re_size() {
				setTimeout(function() {
					jQuery(window).trigger('resize');
				}, 800);
			}
			$window.on('scroll.sectionscroll', move);
			$window.on('resize.sectionresize', move);
			move();
			re_size();
			jQuery(document).on('mousewheel', 'body.section-scroll', function (event) {
				if(jQuery(window).width() > 960 && jQuery('html').hasClass('csstransforms')) {
					event.preventDefault();
					if(!$scrolled) {
						$scrolled = true;
						if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
				            if($current > 0) {
				            	$current--;
				            }
				            move();
				            re_size();
				    	}
				    	else {
				    		if($current < $num_moves) {
				            	$current++;
				            }
				            move();
				            re_size();
				    	}
				    	clearTimeout(scrollTimeout);
						scrollTimeout = setTimeout(function() {
							$scrolled = false;
						}, 1000);
					}
				}
		    });
		    jQuery(document).on('click', '.fullscreen-nav-item', function() {
		    	var index = jQuery("li.fullscreen-nav-item").index(this);
		    	if(jQuery('.header-hero-custom-section').length > 0 ) {
					$current = index+1;
				} else {
					$current = index;
				}
		    	move();
		    	re_size();
		    });
		    jQuery(document).on('click', '.fullscreen-nav-item-hero-section', function() {
		    	$current = 0;
		    	move();
		    	re_size();
		    });
		    jQuery('html').addClass('section-scroll');
		    if(jQuery('body').find('.fullscreen-nav-wrap').length > 0) {
		    	jQuery('body').find('.fullscreen-nav-wrap').remove();
		    }
		    jQuery('body').append('<div class="fullscreen-nav-wrap clearfix"><div class="fullscreen-nav-wrap-inner clearfix"><ul class="fullscreen-nav"></ul></div></div>');
		    if(jQuery('.header-hero-custom-section').length > 0 ) {
				jQuery('.fullscreen-nav-wrap-inner').prepend('<div class="fullscreen-nav-item-hero-section"></div>');
			}
			jQuery('.fullscreen-nav').empty();
		    jQuery('#page-content div').children('.be-section').each(function() {
  				jQuery('.fullscreen-nav').append('<li class="fullscreen-nav-item"></li>');
			});
			jQuery('#content').css('opacity', 1);
		} else {
			$window.off('scroll.sectionscroll', move);
			$window.off('resize.sectionresize', move);
			jQuery('#content').removeAttr('style');
		}
    };
    jQuery(document).on("update_content", function() {
		if(jQuery('body').hasClass('no-section-scroll')) {
			$window.off('scroll.sectionscroll', move);
			$window.off('resize.sectionresize', move);
			jQuery('#content').removeAttr('style');
		}
    });
}( jQuery ));
// ;( function($) {
// 	$.fn.scrollToFade = function() {
// 		$(this).each(function(){
// 			$(this).addClass('be-animate-hide');
// 		});
// 	};
// 	jQuery(window).on('scroll',function() {
// 		var win_st = jQuery(this).scrollTop();
// 		$('.be-animate-hide').each(function() {
// 			var offset = jQuery(this).offset().top;
// 			var opacity = 0.7-((win_st-offset)/jQuery(this).height());
// 			jQuery(this).css('opacity', opacity);
// 		});
// 	});
// }( jQuery ));
;(function($) {
	/**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */
	$.fn.visible = function(partial) {
    
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };
    
})(jQuery);
/*
Plugin: jQuery Parallax
Version 1.1.3
Author: Ian Lunn
Twitter: @IanLunn
Author URL: http://www.ianlunn.co.uk/
Plugin URL: http://www.ianlunn.co.uk/plugins/jquery-parallax/

Dual licensed under the MIT and GPL licenses:
http://www.opensource.org/licenses/mit-license.php
http://www.gnu.org/licenses/gpl.html
*/
;(function( $ ) {
	var $window = $(window), update_parallax;
	var windowHeight = $window.height();

	$window.resize(function () {
		windowHeight = $window.height();
	});

	$.fn.parallax = function(xpos, speedFactor, outerHeight) {
		var $this = $(this);
		var getHeight;
		var firstTop;
		var paddingTop = 0;
		//get the starting position of each element to have parallax applied to it    
		$this.each(function(){
			firstTop = $this.offset().top;
		});
		if (outerHeight) {
			getHeight = function(jqo) {
			return jqo.outerHeight(true);
		};
		} else {
			getHeight = function(jqo) {
				return jqo.height();
			};
		}
		// setup defaults if arguments aren't specified
		if (arguments.length < 1 || xpos === null) xpos = "50%";
		if (arguments.length < 2 || speedFactor === null) speedFactor = 0.5;
		if (arguments.length < 3 || outerHeight === null) outerHeight = true;
		// function to be called whenever the window is scrolled or resized
		update_parallax = function() {
			var pos = $window.scrollTop();
			$this.each(function() {
				var $element = $(this);
				var top = $element.offset().top;
				var height = getHeight($element);
				// Check if totally above or totally below viewport
				if (top + height < pos || top > pos + windowHeight) {
					return;
				}
				$this.css('backgroundPosition', xpos + " " + Math.round((firstTop - pos) * speedFactor) + "px");
			});
		}
		$window.on('scroll.parallaxscroll', update_parallax);
		$window.on('smartresize.parallaxresize', update_parallax);
		update_parallax();
	};
	jQuery(document).on("update_content", function() {
		if(jQuery(this).find('.be-section.be-bg-parallax').length == 0) {
			$window.off('scroll.parallaxscroll', update_parallax);
			$window.off('scroll.parallaxresize', update_parallax);
		}
    });
})(jQuery);
/* * jQuery FlexSlider v2.2.0 * Copyright 2012 WooThemes  * Free to use under the GPLv2 license. * Contributing Author: Tyler Smith */
;(function(e){e.flexslider=function(t,n){var r=e(t);r.vars=e.extend({},e.flexslider.defaults,n);var i=r.vars.namespace,s=window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture,o=("ontouchstart"in window||s||window.DocumentTouch&&document instanceof DocumentTouch)&&r.vars.touch,u="click touchend MSPointerUp",a="",f,l=r.vars.direction==="vertical",c=r.vars.reverse,h=r.vars.itemWidth>0,p=r.vars.animation==="fade",d=r.vars.asNavFor!=="",v={},m=!0;e.data(t,"flexslider",r);v={init:function(){r.animating=!1;r.currentSlide=parseInt(r.vars.startAt?r.vars.startAt:0);isNaN(r.currentSlide)&&(r.currentSlide=0);r.animatingTo=r.currentSlide;r.atEnd=r.currentSlide===0||r.currentSlide===r.last;r.containerSelector=r.vars.selector.substr(0,r.vars.selector.search(" "));r.slides=e(r.vars.selector,r);r.container=e(r.containerSelector,r);r.count=r.slides.length;r.syncExists=e(r.vars.sync).length>0;r.vars.animation==="slide"&&(r.vars.animation="swing");r.prop=l?"top":"marginLeft";r.args={};r.manualPause=!1;r.stopped=!1;r.started=!1;r.startTimeout=null;r.transitions=!r.vars.video&&!p&&r.vars.useCSS&&function(){var e=document.createElement("div"),t=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var n in t)if(e.style[t[n]]!==undefined){r.pfx=t[n].replace("Perspective","").toLowerCase();r.prop="-"+r.pfx+"-transform";return!0}return!1}();r.vars.controlsContainer!==""&&(r.controlsContainer=e(r.vars.controlsContainer).length>0&&e(r.vars.controlsContainer));r.vars.manualControls!==""&&(r.manualControls=e(r.vars.manualControls).length>0&&e(r.vars.manualControls));if(r.vars.randomize){r.slides.sort(function(){return Math.round(Math.random())-.5});r.container.empty().append(r.slides)}r.doMath();r.setup("init");r.vars.controlNav&&v.controlNav.setup();r.vars.directionNav&&v.directionNav.setup();r.vars.keyboard&&(e(r.containerSelector).length===1||r.vars.multipleKeyboard)&&e(document).bind("keyup",function(e){var t=e.keyCode;if(!r.animating&&(t===39||t===37)){var n=t===39?r.getTarget("next"):t===37?r.getTarget("prev"):!1;r.flexAnimate(n,r.vars.pauseOnAction)}});r.vars.mousewheel&&r.bind("mousewheel",function(e,t,n,i){e.preventDefault();var s=t<0?r.getTarget("next"):r.getTarget("prev");r.flexAnimate(s,r.vars.pauseOnAction)});r.vars.pausePlay&&v.pausePlay.setup();r.vars.slideshow&&r.vars.pauseInvisible&&v.pauseInvisible.init();if(r.vars.slideshow){r.vars.pauseOnHover&&r.hover(function(){!r.manualPlay&&!r.manualPause&&r.pause()},function(){!r.manualPause&&!r.manualPlay&&!r.stopped&&r.play()});if(!r.vars.pauseInvisible||!v.pauseInvisible.isHidden())r.vars.initDelay>0?r.startTimeout=setTimeout(r.play,r.vars.initDelay):r.play()}d&&v.asNav.setup();o&&r.vars.touch&&v.touch();(!p||p&&r.vars.smoothHeight)&&e(window).bind("resize orientationchange focus",v.resize);r.find("img").attr("draggable","false");setTimeout(function(){r.vars.start(r)},200)},asNav:{setup:function(){r.asNav=!0;r.animatingTo=Math.floor(r.currentSlide/r.move);r.currentItem=r.currentSlide;r.slides.removeClass(i+"active-slide").eq(r.currentItem).addClass(i+"active-slide");if(!s)r.slides.click(function(t){t.preventDefault();var n=e(this),s=n.index(),o=n.offset().left-e(r).scrollLeft();if(o<=0&&n.hasClass(i+"active-slide"))r.flexAnimate(r.getTarget("prev"),!0);else if(!e(r.vars.asNavFor).data("flexslider").animating&&!n.hasClass(i+"active-slide")){r.direction=r.currentItem<s?"next":"prev";r.flexAnimate(s,r.vars.pauseOnAction,!1,!0,!0)}});else{t._slider=r;r.slides.each(function(){var t=this;t._gesture=new MSGesture;t._gesture.target=t;t.addEventListener("MSPointerDown",function(e){e.preventDefault();e.currentTarget._gesture&&e.currentTarget._gesture.addPointer(e.pointerId)},!1);t.addEventListener("MSGestureTap",function(t){t.preventDefault();var n=e(this),i=n.index();if(!e(r.vars.asNavFor).data("flexslider").animating&&!n.hasClass("active")){r.direction=r.currentItem<i?"next":"prev";r.flexAnimate(i,r.vars.pauseOnAction,!1,!0,!0)}})})}}},controlNav:{setup:function(){r.manualControls?v.controlNav.setupManual():v.controlNav.setupPaging()},setupPaging:function(){var t=r.vars.controlNav==="thumbnails"?"control-thumbs":"control-paging",n=1,s,o;r.controlNavScaffold=e('<ol class="'+i+"control-nav "+i+t+'"></ol>');if(r.pagingCount>1)for(var f=0;f<r.pagingCount;f++){o=r.slides.eq(f);s=r.vars.controlNav==="thumbnails"?'<img src="'+o.attr("data-thumb")+'"/>':"<a>"+n+"</a>";if("thumbnails"===r.vars.controlNav&&!0===r.vars.thumbCaptions){var l=o.attr("data-thumbcaption");""!=l&&undefined!=l&&(s+='<span class="'+i+'caption">'+l+"</span>")}r.controlNavScaffold.append("<li>"+s+"</li>");n++}r.controlsContainer?e(r.controlsContainer).append(r.controlNavScaffold):r.append(r.controlNavScaffold);v.controlNav.set();v.controlNav.active();r.controlNavScaffold.delegate("a, img",u,function(t){t.preventDefault();if(a===""||a===t.type){var n=e(this),s=r.controlNav.index(n);if(!n.hasClass(i+"active")){r.direction=s>r.currentSlide?"next":"prev";r.flexAnimate(s,r.vars.pauseOnAction)}}a===""&&(a=t.type);v.setToClearWatchedEvent()})},setupManual:function(){r.controlNav=r.manualControls;v.controlNav.active();r.controlNav.bind(u,function(t){t.preventDefault();if(a===""||a===t.type){var n=e(this),s=r.controlNav.index(n);if(!n.hasClass(i+"active")){s>r.currentSlide?r.direction="next":r.direction="prev";r.flexAnimate(s,r.vars.pauseOnAction)}}a===""&&(a=t.type);v.setToClearWatchedEvent()})},set:function(){var t=r.vars.controlNav==="thumbnails"?"img":"a";r.controlNav=e("."+i+"control-nav li "+t,r.controlsContainer?r.controlsContainer:r)},active:function(){r.controlNav.removeClass(i+"active").eq(r.animatingTo).addClass(i+"active")},update:function(t,n){r.pagingCount>1&&t==="add"?r.controlNavScaffold.append(e("<li><a>"+r.count+"</a></li>")):r.pagingCount===1?r.controlNavScaffold.find("li").remove():r.controlNav.eq(n).closest("li").remove();v.controlNav.set();r.pagingCount>1&&r.pagingCount!==r.controlNav.length?r.update(n,t):v.controlNav.active()}},directionNav:{setup:function(){var t=e('<ul class="'+i+'direction-nav"><li><a class="'+i+'prev" href="#">'+r.vars.prevText+'</a></li><li><a class="'+i+'next" href="#">'+r.vars.nextText+"</a></li></ul>");if(r.controlsContainer){e(r.controlsContainer).append(t);r.directionNav=e("."+i+"direction-nav li a",r.controlsContainer)}else{r.append(t);r.directionNav=e("."+i+"direction-nav li a",r)}v.directionNav.update();r.directionNav.bind(u,function(t){t.preventDefault();var n;if(a===""||a===t.type){n=e(this).hasClass(i+"next")?r.getTarget("next"):r.getTarget("prev");r.flexAnimate(n,r.vars.pauseOnAction)}a===""&&(a=t.type);v.setToClearWatchedEvent()})},update:function(){var e=i+"disabled";r.pagingCount===1?r.directionNav.addClass(e).attr("tabindex","-1"):r.vars.animationLoop?r.directionNav.removeClass(e).removeAttr("tabindex"):r.animatingTo===0?r.directionNav.removeClass(e).filter("."+i+"prev").addClass(e).attr("tabindex","-1"):r.animatingTo===r.last?r.directionNav.removeClass(e).filter("."+i+"next").addClass(e).attr("tabindex","-1"):r.directionNav.removeClass(e).removeAttr("tabindex")}},pausePlay:{setup:function(){var t=e('<div class="'+i+'pauseplay"><a></a></div>');if(r.controlsContainer){r.controlsContainer.append(t);r.pausePlay=e("."+i+"pauseplay a",r.controlsContainer)}else{r.append(t);r.pausePlay=e("."+i+"pauseplay a",r)}v.pausePlay.update(r.vars.slideshow?i+"pause":i+"play");r.pausePlay.bind(u,function(t){t.preventDefault();if(a===""||a===t.type)if(e(this).hasClass(i+"pause")){r.manualPause=!0;r.manualPlay=!1;r.pause()}else{r.manualPause=!1;r.manualPlay=!0;r.play()}a===""&&(a=t.type);v.setToClearWatchedEvent()})},update:function(e){e==="play"?r.pausePlay.removeClass(i+"pause").addClass(i+"play").html(r.vars.playText):r.pausePlay.removeClass(i+"play").addClass(i+"pause").html(r.vars.pauseText)}},touch:function(){var e,n,i,o,u,a,f=!1,d=0,v=0,m=0;if(!s){t.addEventListener("touchstart",g,!1);function g(s){if(r.animating)s.preventDefault();else if(window.navigator.msPointerEnabled||s.touches.length===1){r.pause();o=l?r.h:r.w;a=Number(new Date);d=s.touches[0].pageX;v=s.touches[0].pageY;i=h&&c&&r.animatingTo===r.last?0:h&&c?r.limit-(r.itemW+r.vars.itemMargin)*r.move*r.animatingTo:h&&r.currentSlide===r.last?r.limit:h?(r.itemW+r.vars.itemMargin)*r.move*r.currentSlide:c?(r.last-r.currentSlide+r.cloneOffset)*o:(r.currentSlide+r.cloneOffset)*o;e=l?v:d;n=l?d:v;t.addEventListener("touchmove",y,!1);t.addEventListener("touchend",b,!1)}}function y(t){d=t.touches[0].pageX;v=t.touches[0].pageY;u=l?e-v:e-d;f=l?Math.abs(u)<Math.abs(d-n):Math.abs(u)<Math.abs(v-n);var s=500;if(!f||Number(new Date)-a>s){t.preventDefault();if(!p&&r.transitions){r.vars.animationLoop||(u/=r.currentSlide===0&&u<0||r.currentSlide===r.last&&u>0?Math.abs(u)/o+2:1);r.setProps(i+u,"setTouch")}}}function b(s){t.removeEventListener("touchmove",y,!1);if(r.animatingTo===r.currentSlide&&!f&&u!==null){var l=c?-u:u,h=l>0?r.getTarget("next"):r.getTarget("prev");r.canAdvance(h)&&(Number(new Date)-a<550&&Math.abs(l)>50||Math.abs(l)>o/2)?r.flexAnimate(h,r.vars.pauseOnAction):p||r.flexAnimate(r.currentSlide,r.vars.pauseOnAction,!0)}t.removeEventListener("touchend",b,!1);e=null;n=null;u=null;i=null}}else{t.style.msTouchAction="none";t._gesture=new MSGesture;t._gesture.target=t;t.addEventListener("MSPointerDown",w,!1);t._slider=r;t.addEventListener("MSGestureChange",E,!1);t.addEventListener("MSGestureEnd",S,!1);function w(e){e.stopPropagation();if(r.animating)e.preventDefault();else{r.pause();t._gesture.addPointer(e.pointerId);m=0;o=l?r.h:r.w;a=Number(new Date);i=h&&c&&r.animatingTo===r.last?0:h&&c?r.limit-(r.itemW+r.vars.itemMargin)*r.move*r.animatingTo:h&&r.currentSlide===r.last?r.limit:h?(r.itemW+r.vars.itemMargin)*r.move*r.currentSlide:c?(r.last-r.currentSlide+r.cloneOffset)*o:(r.currentSlide+r.cloneOffset)*o}}function E(e){e.stopPropagation();var n=e.target._slider;if(!n)return;var r=-e.translationX,s=-e.translationY;m+=l?s:r;u=m;f=l?Math.abs(m)<Math.abs(-r):Math.abs(m)<Math.abs(-s);if(e.detail===e.MSGESTURE_FLAG_INERTIA){setImmediate(function(){t._gesture.stop()});return}if(!f||Number(new Date)-a>500){e.preventDefault();if(!p&&n.transitions){n.vars.animationLoop||(u=m/(n.currentSlide===0&&m<0||n.currentSlide===n.last&&m>0?Math.abs(m)/o+2:1));n.setProps(i+u,"setTouch")}}}function S(t){t.stopPropagation();var r=t.target._slider;if(!r)return;if(r.animatingTo===r.currentSlide&&!f&&u!==null){var s=c?-u:u,l=s>0?r.getTarget("next"):r.getTarget("prev");r.canAdvance(l)&&(Number(new Date)-a<550&&Math.abs(s)>50||Math.abs(s)>o/2)?r.flexAnimate(l,r.vars.pauseOnAction):p||r.flexAnimate(r.currentSlide,r.vars.pauseOnAction,!0)}e=null;n=null;u=null;i=null;m=0}}},resize:function(){if(!r.animating&&r.is(":visible")){h||r.doMath();if(p)v.smoothHeight();else if(h){r.slides.width(r.computedW);r.update(r.pagingCount);r.setProps()}else if(l){r.viewport.height(r.h);r.setProps(r.h,"setTotal")}else{r.vars.smoothHeight&&v.smoothHeight();r.newSlides.width(r.computedW);r.setProps(r.computedW,"setTotal")}}},smoothHeight:function(e){if(!l||p){var t=p?r:r.viewport;e?t.animate({height:r.slides.eq(r.animatingTo).height()},e):t.height(r.slides.eq(r.animatingTo).height())}},sync:function(t){var n=e(r.vars.sync).data("flexslider"),i=r.animatingTo;switch(t){case"animate":n.flexAnimate(i,r.vars.pauseOnAction,!1,!0);break;case"play":!n.playing&&!n.asNav&&n.play();break;case"pause":n.pause()}},pauseInvisible:{visProp:null,init:function(){var e=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var t=0;t<e.length;t++)e[t]+"Hidden"in document&&(v.pauseInvisible.visProp=e[t]+"Hidden");if(v.pauseInvisible.visProp){var n=v.pauseInvisible.visProp.replace(/[H|h]idden/,"")+"visibilitychange";document.addEventListener(n,function(){v.pauseInvisible.isHidden()?r.startTimeout?clearTimeout(r.startTimeout):r.pause():r.started?r.play():r.vars.initDelay>0?setTimeout(r.play,r.vars.initDelay):r.play()})}},isHidden:function(){return document[v.pauseInvisible.visProp]||!1}},setToClearWatchedEvent:function(){clearTimeout(f);f=setTimeout(function(){a=""},3e3)}};r.flexAnimate=function(t,n,s,u,a){!r.vars.animationLoop&&t!==r.currentSlide&&(r.direction=t>r.currentSlide?"next":"prev");d&&r.pagingCount===1&&(r.direction=r.currentItem<t?"next":"prev");if(!r.animating&&(r.canAdvance(t,a)||s)&&r.is(":visible")){if(d&&u){var f=e(r.vars.asNavFor).data("flexslider");r.atEnd=t===0||t===r.count-1;f.flexAnimate(t,!0,!1,!0,a);r.direction=r.currentItem<t?"next":"prev";f.direction=r.direction;if(Math.ceil((t+1)/r.visible)-1===r.currentSlide||t===0){r.currentItem=t;r.slides.removeClass(i+"active-slide").eq(t).addClass(i+"active-slide");return!1}r.currentItem=t;r.slides.removeClass(i+"active-slide").eq(t).addClass(i+"active-slide");t=Math.floor(t/r.visible)}r.animating=!0;r.animatingTo=t;n&&r.pause();r.vars.before(r);r.syncExists&&!a&&v.sync("animate");r.vars.controlNav&&v.controlNav.active();h||r.slides.removeClass(i+"active-slide").eq(t).addClass(i+"active-slide");r.atEnd=t===0||t===r.last;r.vars.directionNav&&v.directionNav.update();if(t===r.last){r.vars.end(r);r.vars.animationLoop||r.pause()}if(!p){var m=l?r.slides.filter(":first").height():r.computedW,g,y,b;if(h){g=r.vars.itemMargin;b=(r.itemW+g)*r.move*r.animatingTo;y=b>r.limit&&r.visible!==1?r.limit:b}else r.currentSlide===0&&t===r.count-1&&r.vars.animationLoop&&r.direction!=="next"?y=c?(r.count+r.cloneOffset)*m:0:r.currentSlide===r.last&&t===0&&r.vars.animationLoop&&r.direction!=="prev"?y=c?0:(r.count+1)*m:y=c?(r.count-1-t+r.cloneOffset)*m:(t+r.cloneOffset)*m;r.setProps(y,"",r.vars.animationSpeed);if(r.transitions){if(!r.vars.animationLoop||!r.atEnd){r.animating=!1;r.currentSlide=r.animatingTo}r.container.unbind("webkitTransitionEnd transitionend");r.container.bind("webkitTransitionEnd transitionend",function(){r.wrapup(m)})}else r.container.animate(r.args,r.vars.animationSpeed,r.vars.easing,function(){r.wrapup(m)})}else if(!o){r.slides.eq(r.currentSlide).css({zIndex:1}).animate({opacity:0},r.vars.animationSpeed,r.vars.easing);r.slides.eq(t).css({zIndex:2}).animate({opacity:1},r.vars.animationSpeed,r.vars.easing,r.wrapup)}else{r.slides.eq(r.currentSlide).css({opacity:0,zIndex:1});r.slides.eq(t).css({opacity:1,zIndex:2});r.wrapup(m)}r.vars.smoothHeight&&v.smoothHeight(r.vars.animationSpeed)}};r.wrapup=function(e){!p&&!h&&(r.currentSlide===0&&r.animatingTo===r.last&&r.vars.animationLoop?r.setProps(e,"jumpEnd"):r.currentSlide===r.last&&r.animatingTo===0&&r.vars.animationLoop&&r.setProps(e,"jumpStart"));r.animating=!1;r.currentSlide=r.animatingTo;r.vars.after(r)};r.animateSlides=function(){!r.animating&&m&&r.flexAnimate(r.getTarget("next"))};r.pause=function(){clearInterval(r.animatedSlides);r.animatedSlides=null;r.playing=!1;r.vars.pausePlay&&v.pausePlay.update("play");r.syncExists&&v.sync("pause")};r.play=function(){r.playing&&clearInterval(r.animatedSlides);r.animatedSlides=r.animatedSlides||setInterval(r.animateSlides,r.vars.slideshowSpeed);r.started=r.playing=!0;r.vars.pausePlay&&v.pausePlay.update("pause");r.syncExists&&v.sync("play")};r.stop=function(){r.pause();r.stopped=!0};r.canAdvance=function(e,t){var n=d?r.pagingCount-1:r.last;return t?!0:d&&r.currentItem===r.count-1&&e===0&&r.direction==="prev"?!0:d&&r.currentItem===0&&e===r.pagingCount-1&&r.direction!=="next"?!1:e===r.currentSlide&&!d?!1:r.vars.animationLoop?!0:r.atEnd&&r.currentSlide===0&&e===n&&r.direction!=="next"?!1:r.atEnd&&r.currentSlide===n&&e===0&&r.direction==="next"?!1:!0};r.getTarget=function(e){r.direction=e;return e==="next"?r.currentSlide===r.last?0:r.currentSlide+1:r.currentSlide===0?r.last:r.currentSlide-1};r.setProps=function(e,t,n){var i=function(){var n=e?e:(r.itemW+r.vars.itemMargin)*r.move*r.animatingTo,i=function(){if(h)return t==="setTouch"?e:c&&r.animatingTo===r.last?0:c?r.limit-(r.itemW+r.vars.itemMargin)*r.move*r.animatingTo:r.animatingTo===r.last?r.limit:n;switch(t){case"setTotal":return c?(r.count-1-r.currentSlide+r.cloneOffset)*e:(r.currentSlide+r.cloneOffset)*e;case"setTouch":return c?e:e;case"jumpEnd":return c?e:r.count*e;case"jumpStart":return c?r.count*e:e;default:return e}}();return i*-1+"px"}();if(r.transitions){i=l?"translate3d(0,"+i+",0)":"translate3d("+i+",0,0)";n=n!==undefined?n/1e3+"s":"0s";r.container.css("-"+r.pfx+"-transition-duration",n)}r.args[r.prop]=i;(r.transitions||n===undefined)&&r.container.css(r.args)};r.setup=function(t){if(!p){var n,s;if(t==="init"){r.viewport=e('<div class="'+i+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(r).append(r.container);r.cloneCount=0;r.cloneOffset=0;if(c){s=e.makeArray(r.slides).reverse();r.slides=e(s);r.container.empty().append(r.slides)}}if(r.vars.animationLoop&&!h){r.cloneCount=2;r.cloneOffset=1;t!=="init"&&r.container.find(".clone").remove();r.container.append(r.slides.first().clone().addClass("clone").attr("aria-hidden","true")).prepend(r.slides.last().clone().addClass("clone").attr("aria-hidden","true"))}r.newSlides=e(r.vars.selector,r);n=c?r.count-1-r.currentSlide+r.cloneOffset:r.currentSlide+r.cloneOffset;if(l&&!h){r.container.height((r.count+r.cloneCount)*200+"%").css("position","absolute").width("100%");setTimeout(function(){r.newSlides.css({display:"block"});r.doMath();r.viewport.height(r.h);r.setProps(n*r.h,"init")},t==="init"?100:0)}else{r.container.width((r.count+r.cloneCount)*200+"%");r.setProps(n*r.computedW,"init");setTimeout(function(){r.doMath();r.newSlides.css({width:r.computedW,"float":"left",display:"block"});r.vars.smoothHeight&&v.smoothHeight()},t==="init"?100:0)}}else{r.slides.css({width:"100%","float":"left",marginRight:"-100%",position:"relative"});t==="init"&&(o?r.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+r.vars.animationSpeed/1e3+"s ease",zIndex:1}).eq(r.currentSlide).css({opacity:1,zIndex:2}):r.slides.css({opacity:0,display:"block",zIndex:1}).eq(r.currentSlide).css({zIndex:2}).animate({opacity:1},r.vars.animationSpeed,r.vars.easing));r.vars.smoothHeight&&v.smoothHeight()}h||r.slides.removeClass(i+"active-slide").eq(r.currentSlide).addClass(i+"active-slide")};r.doMath=function(){var e=r.slides.first(),t=r.vars.itemMargin,n=r.vars.minItems,i=r.vars.maxItems;r.w=r.viewport===undefined?r.width():r.viewport.width();r.h=e.height();r.boxPadding=e.outerWidth()-e.width();if(h){r.itemT=r.vars.itemWidth+t;r.minW=n?n*r.itemT:r.w;r.maxW=i?i*r.itemT-t:r.w;r.itemW=r.minW>r.w?(r.w-t*(n-1))/n:r.maxW<r.w?(r.w-t*(i-1))/i:r.vars.itemWidth>r.w?r.w:r.vars.itemWidth;r.visible=Math.floor(r.w/r.itemW);r.move=r.vars.move>0&&r.vars.move<r.visible?r.vars.move:r.visible;r.pagingCount=Math.ceil((r.count-r.visible)/r.move+1);r.last=r.pagingCount-1;r.limit=r.pagingCount===1?0:r.vars.itemWidth>r.w?r.itemW*(r.count-1)+t*(r.count-1):(r.itemW+t)*r.count-r.w-t}else{r.itemW=r.w;r.pagingCount=r.count;r.last=r.count-1}r.computedW=r.itemW-r.boxPadding};r.update=function(e,t){r.doMath();if(!h){e<r.currentSlide?r.currentSlide+=1:e<=r.currentSlide&&e!==0&&(r.currentSlide-=1);r.animatingTo=r.currentSlide}if(r.vars.controlNav&&!r.manualControls)if(t==="add"&&!h||r.pagingCount>r.controlNav.length)v.controlNav.update("add");else if(t==="remove"&&!h||r.pagingCount<r.controlNav.length){if(h&&r.currentSlide>r.last){r.currentSlide-=1;r.animatingTo-=1}v.controlNav.update("remove",r.last)}r.vars.directionNav&&v.directionNav.update()};r.addSlide=function(t,n){var i=e(t);r.count+=1;r.last=r.count-1;l&&c?n!==undefined?r.slides.eq(r.count-n).after(i):r.container.prepend(i):n!==undefined?r.slides.eq(n).before(i):r.container.append(i);r.update(n,"add");r.slides=e(r.vars.selector+":not(.clone)",r);r.setup();r.vars.added(r)};r.removeSlide=function(t){var n=isNaN(t)?r.slides.index(e(t)):t;r.count-=1;r.last=r.count-1;isNaN(t)?e(t,r.slides).remove():l&&c?r.slides.eq(r.last).remove():r.slides.eq(t).remove();r.doMath();r.update(n,"remove");r.slides=e(r.vars.selector+":not(.clone)",r);r.setup();r.vars.removed(r)};v.init()};e(window).blur(function(e){focused=!1}).focus(function(e){focused=!0});e.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7e3,animationSpeed:600,initDelay:0,randomize:!1,thumbCaptions:!1,pauseOnAction:!0,pauseOnHover:!1,pauseInvisible:!0,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:1,maxItems:0,move:0,allowOneSlide:!0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){}};e.fn.flexslider=function(t){t===undefined&&(t={});if(typeof t=="object")return this.each(function(){var n=e(this),r=t.selector?t.selector:".slides > li",i=n.find(r);if(i.length===1&&t.allowOneSlide===!0||i.length===0){i.fadeIn(400);t.start&&t.start(n)}else n.data("flexslider")===undefined&&new e.flexslider(this,t)});var n=e(this).data("flexslider");switch(t){case"play":n.play();break;case"pause":n.pause();break;case"stop":n.stop();break;case"next":n.flexAnimate(n.getTarget("next"),!0);break;case"prev":case"previous":n.flexAnimate(n.getTarget("prev"),!0);break;default:typeof t=="number"&&n.flexAnimate(t,!0)}}})(jQuery);

/*global jQuery */
/*! 
* FitVids 1.0
*
* Copyright 2011, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
* Date: Thu Sept 01 18:00:00 2011 -0500
*/
(function( $ ){
	$.fn.fitVids = function( options ) {
		var settings = {
			customSelector: null
		}
		
		var div = document.createElement('div'),
			ref = document.getElementsByTagName('base')[0] || document.getElementsByTagName('script')[0];
			
		div.className = 'fit-vids-style';
		div.innerHTML = '&shy;<style>         \
		  .fluid-width-video-wrapper {        \
			 width: 100%;                     \
			 position: relative;              \
			 padding: 0;                      \
		  }                                   \
											  \
		  .fluid-width-video-wrapper iframe,  \
		  .fluid-width-video-wrapper object,  \
		  .fluid-width-video-wrapper embed {  \
			 position: absolute;              \
			 top: 0;                          \
			 left: 0;                         \
			 width: 100%;                     \
			 height: 100%;                    \
		  }                                   \
		</style>';
						  
		ref.parentNode.insertBefore(div,ref);
		
		if ( options ) { 
		  $.extend( settings, options );
		}
		
		return this.each(function() {
			var selectors = [
				"iframe[src*='player.vimeo.com']:not(.exlude-wrapper)", 
				"iframe[src*='www.youtube.com']:not(.exlude-wrapper)",  
				"iframe[src*='www.kickstarter.com']", 
				"object", 
				"embed"
			];
		  
			if (settings.customSelector) {
				selectors.push(settings.customSelector);
			}
		  
			var $allVideos = $(this).find(selectors.join(','));

			$allVideos.each(function(){
				var $this = $(this);
				if (this.tagName.toLowerCase() == 'embed' && $this.parent('object').length || $this.parent('.fluid-width-video-wrapper').length) { return; } 
				var height = this.tagName.toLowerCase() == 'object' ? $this.attr('height') : $this.height(),
				aspectRatio = height / $this.width();
				if(!$this.attr('id')){
					var videoID = 'fitvid' + Math.floor(Math.random()*999999);
					$this.attr('id', videoID);
				}
				$this.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top', (aspectRatio * 100)+"%");
				$this.removeAttr('height').removeAttr('width');
			});
		});
	}
})( jQuery );
/******************************************************
        Jquery Hover Intent
*******************************************************/
/**
* hoverIntent r6 // 2011.02.26 // jQuery 1.5.1+
* <http://cherne.net/brian/resources/jquery.hoverIntent.html>
* 
* @param  f  onMouseOver function || An object with configuration options
* @param  g  onMouseOut function  || Nothing (use configuration options object)
* @author    Brian Cherne brian(at)cherne(dot)net
*/
;(function($) {
    $.fn.hoverIntent = function(handlerIn,handlerOut,selector) {

        // default configuration values
        var cfg = {
            interval: 100,
            sensitivity: 7,
            timeout: 0
        };

        if ( typeof handlerIn === "object" ) {
            cfg = $.extend(cfg, handlerIn );
        } else if ($.isFunction(handlerOut)) {
            cfg = $.extend(cfg, { over: handlerIn, out: handlerOut, selector: selector } );
        } else {
            cfg = $.extend(cfg, { over: handlerIn, out: handlerIn, selector: handlerOut } );
        }

        // instantiate variables
        // cX, cY = current X and Y position of mouse, updated by mousemove event
        // pX, pY = previous X and Y position of mouse, set by mouseover and polling interval
        var cX, cY, pX, pY;

        // A private function for getting mouse position
        var track = function(ev) {
            cX = ev.pageX;
            cY = ev.pageY;
        };

        // A private function for comparing current and previous mouse position
        var compare = function(ev,ob) {
            ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
            // compare mouse positions to see if they've crossed the threshold
            if ( ( Math.abs(pX-cX) + Math.abs(pY-cY) ) < cfg.sensitivity ) {
                $(ob).off("mousemove.hoverIntent",track);
                // set hoverIntent state to true (so mouseOut can be called)
                ob.hoverIntent_s = 1;
                return cfg.over.apply(ob,[ev]);
            } else {
                // set previous coordinates for next time
                pX = cX; pY = cY;
                // use self-calling timeout, guarantees intervals are spaced out properly (avoids JavaScript timer bugs)
                ob.hoverIntent_t = setTimeout( function(){compare(ev, ob);} , cfg.interval );
            }
        };

        // A private function for delaying the mouseOut function
        var delay = function(ev,ob) {
            ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
            ob.hoverIntent_s = 0;
            return cfg.out.apply(ob,[ev]);
        };

        // A private function for handling mouse 'hovering'
        var handleHover = function(e) {
            // copy objects to be passed into t (required for event object to be passed in IE)
            var ev = jQuery.extend({},e);
            var ob = this;

            // cancel hoverIntent timer if it exists
            if (ob.hoverIntent_t) { ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t); }

            // if e.type == "mouseenter"
            if (e.type == "mouseenter") {
                // set "previous" X and Y position based on initial entry point
                pX = ev.pageX; pY = ev.pageY;
                // update "current" X and Y position based on mousemove
                $(ob).on("mousemove.hoverIntent",track);
                // start polling interval (self-calling timeout) to compare mouse coordinates over time
                if (ob.hoverIntent_s != 1) { ob.hoverIntent_t = setTimeout( function(){compare(ev,ob);} , cfg.interval );}

                // else e.type == "mouseleave"
            } else {
                // unbind expensive mousemove event
                $(ob).off("mousemove.hoverIntent",track);
                // if hoverIntent state is true, then call the mouseOut function after the specified delay
                if (ob.hoverIntent_s == 1) { ob.hoverIntent_t = setTimeout( function(){delay(ev,ob);} , cfg.timeout );}
            }
        };

        // listen for mouseenter and mouseleave
        return this.on({'mouseenter.hoverIntent':handleHover,'mouseleave.hoverIntent':handleHover}, cfg.selector);
    };
})(jQuery);
/******************************************************************************************
                NAVIGATION MENU SCRIPT START 
*******************************************************************************************/
/*
 * jQuery Superfish Menu Plugin - v1.7.4
 * Copyright (c) 2013 Joel Birch
 *
 * Dual licensed under the MIT and GPL licenses:
 *	http://www.opensource.org/licenses/mit-license.php
 *	http://www.gnu.org/licenses/gpl.html
 */
;(function ($) {
	"use strict";
	var methods = (function () {
		// private properties and methods go here
		var c = {
				bcClass: 'sf-breadcrumb',
				menuClass: 'sf-js-enabled',
				anchorClass: 'sf-with-ul',
				menuArrowClass: 'sf-arrows'
			},
			ios = (function () {
				var ios = /iPhone|iPad|iPod/i.test(navigator.userAgent);
				if (ios) {
					// iOS clicks only bubble as far as body children
					$(window).load(function () {
						$('body').children().on('click', $.noop);
					});
				}
				return ios;
			})(),
			wp7 = (function () {
				var style = document.documentElement.style;
				return ('behavior' in style && 'fill' in style && /iemobile/i.test(navigator.userAgent));
			})(),
			toggleMenuClasses = function ($menu, o) {
				var classes = c.menuClass;
				if (o.cssArrows) {
					classes += ' ' + c.menuArrowClass;
				}
				$menu.toggleClass(classes);
			},
			setPathToCurrent = function ($menu, o) {
				return $menu.find('li.' + o.pathClass).slice(0, o.pathLevels)
					.addClass(o.hoverClass + ' ' + c.bcClass)
						.filter(function () {
							return ($(this).children(o.popUpSelector).hide().show().length);
						}).removeClass(o.pathClass);
			},
			toggleAnchorClass = function ($li) {
				$li.children('a').toggleClass(c.anchorClass);
			},
			toggleTouchAction = function ($menu) {
				var touchAction = $menu.css('ms-touch-action');
				touchAction = (touchAction === 'pan-y') ? 'auto' : 'pan-y';
				$menu.css('ms-touch-action', touchAction);
			},
			applyHandlers = function ($menu, o) {
				var targets = 'li:has(' + o.popUpSelector + ')';
				if ($.fn.hoverIntent && !o.disableHI) {
					$menu.hoverIntent(over, out, targets);
				}
				else {
					$menu
						.on('mouseenter.superfish', targets, over)
						.on('mouseleave.superfish', targets, out);
				}
				var touchevent = 'MSPointerDown.superfish';
				if (!ios) {
					touchevent += ' touchend.superfish';
				}
				if (wp7) {
					touchevent += ' mousedown.superfish';
				}
				$menu
					.on('focusin.superfish', 'li', over)
					.on('focusout.superfish', 'li', out)
					.on(touchevent, 'a', o, touchHandler);
			},
			touchHandler = function (e) {
				var $this = $(this),
					$ul = $this.siblings(e.data.popUpSelector);

				if ($ul.length > 0 && $ul.is(':hidden')) {
					$this.one('click.superfish', false);
					if (e.type === 'MSPointerDown') {
						$this.trigger('focus');
					} else {
						$.proxy(over, $this.parent('li'))();
					}
				}
			},
			over = function () {
				var $this = $(this),
					o = getOptions($this);
				clearTimeout(o.sfTimer);
				$this.siblings().superfish('hide').end().superfish('show');
			},
			out = function () {
				var $this = $(this),
					o = getOptions($this);
				if (ios) {
					$.proxy(close, $this, o)();
				}
				else {
					clearTimeout(o.sfTimer);
					o.sfTimer = setTimeout($.proxy(close, $this, o), o.delay);
				}
			},
			close = function (o) {
				o.retainPath = ($.inArray(this[0], o.$path) > -1);
				this.superfish('hide');

				if (!this.parents('.' + o.hoverClass).length) {
					o.onIdle.call(getMenu(this));
					if (o.$path.length) {
						$.proxy(over, o.$path)();
					}
				}
			},
			getMenu = function ($el) {
				return $el.closest('.' + c.menuClass);
			},
			getOptions = function ($el) {
				return getMenu($el).data('sf-options');
			};

		return {
			// public methods
			hide: function (instant) {
				if (this.length) {
					var $this = this,
						o = getOptions($this);
					if (!o) {
						return this;
					}
					var not = (o.retainPath === true) ? o.$path : '',
						$ul = $this.find('li.' + o.hoverClass).add(this).not(not).removeClass(o.hoverClass).children(o.popUpSelector),
						speed = o.speedOut;

					if (instant) {
						$ul.show();
						speed = 0;
					}
					o.retainPath = false;
					o.onBeforeHide.call($ul);
					$ul.stop(true, true).animate(o.animationOut, speed, function () {
						var $this = $(this);
						o.onHide.call($this);
					});
				}
				return this;
			},
			show: function () {
				var o = getOptions(this);
				if (!o) {
					return this;
				}
				var $this = this.addClass(o.hoverClass),
					$ul = $this.children(o.popUpSelector);

				o.onBeforeShow.call($ul);
				$ul.stop(true, true).animate(o.animation, o.speed, function () {
					o.onShow.call($ul);
				});
				return this;
			},
			destroy: function () {
				return this.each(function () {
					var $this = $(this),
						o = $this.data('sf-options'),
						$hasPopUp;
					if (!o) {
						return false;
					}
					$hasPopUp = $this.find(o.popUpSelector).parent('li');
					clearTimeout(o.sfTimer);
					toggleMenuClasses($this, o);
					toggleAnchorClass($hasPopUp);
					toggleTouchAction($this);
					// remove event handlers
					$this.off('.superfish').off('.hoverIntent');
					// clear animation's inline display style
					$hasPopUp.children(o.popUpSelector).attr('style', function (i, style) {
						return style.replace(/display[^;]+;?/g, '');
					});
					// reset 'current' path classes
					o.$path.removeClass(o.hoverClass + ' ' + c.bcClass).addClass(o.pathClass);
					$this.find('.' + o.hoverClass).removeClass(o.hoverClass);
					o.onDestroy.call($this);
					$this.removeData('sf-options');
				});
			},
			init: function (op) {
				return this.each(function () {
					var $this = $(this);
					if ($this.data('sf-options')) {
						return false;
					}
					var o = $.extend({}, $.fn.superfish.defaults, op),
						$hasPopUp = $this.find(o.popUpSelector).parent('li');
					o.$path = setPathToCurrent($this, o);

					$this.data('sf-options', o);

					toggleMenuClasses($this, o);
					toggleAnchorClass($hasPopUp);
					toggleTouchAction($this);
					applyHandlers($this, o);

					$hasPopUp.not('.' + c.bcClass).superfish('hide', true);

					o.onInit.call(this);
				});
			}
		};
	})();

	$.fn.superfish = function (method, args) {
		if (methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		}
		else if (typeof method === 'object' || ! method) {
			return methods.init.apply(this, arguments);
		}
		else {
			return $.error('Method ' +  method + ' does not exist on jQuery.fn.superfish');
		}
	};

	$.fn.superfish.defaults = {
		popUpSelector: 'ul,.sf-mega', // within menu context
		hoverClass: 'sfHover',
		pathClass: 'overrideThisToUse',
		pathLevels: 1,
		delay: 800,
		animation: {opacity: 'show'},
		animationOut: {opacity: 'hide'},
		speed: 'normal',
		speedOut: 'fast',
		cssArrows: true,
		disableHI: false,
		onInit: $.noop,
		onBeforeShow: $.noop,
		onShow: $.noop,
		onBeforeHide: $.noop,
		onHide: $.noop,
		onIdle: $.noop,
		onDestroy: $.noop
	};

	// soon to be deprecated
	$.fn.extend({
		hideSuperfishUl: methods.hide,
		showSuperfishUl: methods.show
	});

})(jQuery);
/******************************************************************************************
                Portfolio Layout Plugin
*******************************************************************************************/
/*!
 * Isotope PACKAGED v2.0.0
 * Filter & sort magical layouts
 * http://isotope.metafizzy.co
 */
(function(t){function e(){}function i(t){function i(e){e.prototype.option||(e.prototype.option=function(e){t.isPlainObject(e)&&(this.options=t.extend(!0,this.options,e))})}function n(e,i){t.fn[e]=function(n){if("string"==typeof n){for(var s=o.call(arguments,1),a=0,u=this.length;u>a;a++){var p=this[a],h=t.data(p,e);if(h)if(t.isFunction(h[n])&&"_"!==n.charAt(0)){var f=h[n].apply(h,s);if(void 0!==f)return f}else r("no such method '"+n+"' for "+e+" instance");else r("cannot call methods on "+e+" prior to initialization; "+"attempted to call '"+n+"'")}return this}return this.each(function(){var o=t.data(this,e);o?(o.option(n),o._init()):(o=new i(this,n),t.data(this,e,o))})}}if(t){var r="undefined"==typeof console?e:function(t){console.error(t)};return t.bridget=function(t,e){i(e),n(t,e)},t.bridget}}var o=Array.prototype.slice;"function"==typeof define&&define.amd?define("jquery-bridget/jquery.bridget",["jquery"],i):i(t.jQuery)})(window),function(t){function e(e){var i=t.event;return i.target=i.target||i.srcElement||e,i}var i=document.documentElement,o=function(){};i.addEventListener?o=function(t,e,i){t.addEventListener(e,i,!1)}:i.attachEvent&&(o=function(t,i,o){t[i+o]=o.handleEvent?function(){var i=e(t);o.handleEvent.call(o,i)}:function(){var i=e(t);o.call(t,i)},t.attachEvent("on"+i,t[i+o])});var n=function(){};i.removeEventListener?n=function(t,e,i){t.removeEventListener(e,i,!1)}:i.detachEvent&&(n=function(t,e,i){t.detachEvent("on"+e,t[e+i]);try{delete t[e+i]}catch(o){t[e+i]=void 0}});var r={bind:o,unbind:n};"function"==typeof define&&define.amd?define("eventie/eventie",r):"object"==typeof exports?module.exports=r:t.eventie=r}(this),function(t){function e(t){"function"==typeof t&&(e.isReady?t():r.push(t))}function i(t){var i="readystatechange"===t.type&&"complete"!==n.readyState;if(!e.isReady&&!i){e.isReady=!0;for(var o=0,s=r.length;s>o;o++){var a=r[o];a()}}}function o(o){return o.bind(n,"DOMContentLoaded",i),o.bind(n,"readystatechange",i),o.bind(t,"load",i),e}var n=t.document,r=[];e.isReady=!1,"function"==typeof define&&define.amd?(e.isReady="function"==typeof requirejs,define("doc-ready/doc-ready",["eventie/eventie"],o)):t.docReady=o(t.eventie)}(this),function(){function t(){}function e(t,e){for(var i=t.length;i--;)if(t[i].listener===e)return i;return-1}function i(t){return function(){return this[t].apply(this,arguments)}}var o=t.prototype,n=this,r=n.EventEmitter;o.getListeners=function(t){var e,i,o=this._getEvents();if(t instanceof RegExp){e={};for(i in o)o.hasOwnProperty(i)&&t.test(i)&&(e[i]=o[i])}else e=o[t]||(o[t]=[]);return e},o.flattenListeners=function(t){var e,i=[];for(e=0;t.length>e;e+=1)i.push(t[e].listener);return i},o.getListenersAsObject=function(t){var e,i=this.getListeners(t);return i instanceof Array&&(e={},e[t]=i),e||i},o.addListener=function(t,i){var o,n=this.getListenersAsObject(t),r="object"==typeof i;for(o in n)n.hasOwnProperty(o)&&-1===e(n[o],i)&&n[o].push(r?i:{listener:i,once:!1});return this},o.on=i("addListener"),o.addOnceListener=function(t,e){return this.addListener(t,{listener:e,once:!0})},o.once=i("addOnceListener"),o.defineEvent=function(t){return this.getListeners(t),this},o.defineEvents=function(t){for(var e=0;t.length>e;e+=1)this.defineEvent(t[e]);return this},o.removeListener=function(t,i){var o,n,r=this.getListenersAsObject(t);for(n in r)r.hasOwnProperty(n)&&(o=e(r[n],i),-1!==o&&r[n].splice(o,1));return this},o.off=i("removeListener"),o.addListeners=function(t,e){return this.manipulateListeners(!1,t,e)},o.removeListeners=function(t,e){return this.manipulateListeners(!0,t,e)},o.manipulateListeners=function(t,e,i){var o,n,r=t?this.removeListener:this.addListener,s=t?this.removeListeners:this.addListeners;if("object"!=typeof e||e instanceof RegExp)for(o=i.length;o--;)r.call(this,e,i[o]);else for(o in e)e.hasOwnProperty(o)&&(n=e[o])&&("function"==typeof n?r.call(this,o,n):s.call(this,o,n));return this},o.removeEvent=function(t){var e,i=typeof t,o=this._getEvents();if("string"===i)delete o[t];else if(t instanceof RegExp)for(e in o)o.hasOwnProperty(e)&&t.test(e)&&delete o[e];else delete this._events;return this},o.removeAllListeners=i("removeEvent"),o.emitEvent=function(t,e){var i,o,n,r,s=this.getListenersAsObject(t);for(n in s)if(s.hasOwnProperty(n))for(o=s[n].length;o--;)i=s[n][o],i.once===!0&&this.removeListener(t,i.listener),r=i.listener.apply(this,e||[]),r===this._getOnceReturnValue()&&this.removeListener(t,i.listener);return this},o.trigger=i("emitEvent"),o.emit=function(t){var e=Array.prototype.slice.call(arguments,1);return this.emitEvent(t,e)},o.setOnceReturnValue=function(t){return this._onceReturnValue=t,this},o._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},o._getEvents=function(){return this._events||(this._events={})},t.noConflict=function(){return n.EventEmitter=r,t},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return t}):"object"==typeof module&&module.exports?module.exports=t:this.EventEmitter=t}.call(this),function(t){function e(t){if(t){if("string"==typeof o[t])return t;t=t.charAt(0).toUpperCase()+t.slice(1);for(var e,n=0,r=i.length;r>n;n++)if(e=i[n]+t,"string"==typeof o[e])return e}}var i="Webkit Moz ms Ms O".split(" "),o=document.documentElement.style;"function"==typeof define&&define.amd?define("get-style-property/get-style-property",[],function(){return e}):"object"==typeof exports?module.exports=e:t.getStyleProperty=e}(window),function(t){function e(t){var e=parseFloat(t),i=-1===t.indexOf("%")&&!isNaN(e);return i&&e}function i(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0,i=s.length;i>e;e++){var o=s[e];t[o]=0}return t}function o(t){function o(t){if("string"==typeof t&&(t=document.querySelector(t)),t&&"object"==typeof t&&t.nodeType){var o=r(t);if("none"===o.display)return i();var n={};n.width=t.offsetWidth,n.height=t.offsetHeight;for(var h=n.isBorderBox=!(!p||!o[p]||"border-box"!==o[p]),f=0,c=s.length;c>f;f++){var d=s[f],l=o[d];l=a(t,l);var y=parseFloat(l);n[d]=isNaN(y)?0:y}var m=n.paddingLeft+n.paddingRight,g=n.paddingTop+n.paddingBottom,v=n.marginLeft+n.marginRight,_=n.marginTop+n.marginBottom,I=n.borderLeftWidth+n.borderRightWidth,L=n.borderTopWidth+n.borderBottomWidth,z=h&&u,S=e(o.width);S!==!1&&(n.width=S+(z?0:m+I));var b=e(o.height);return b!==!1&&(n.height=b+(z?0:g+L)),n.innerWidth=n.width-(m+I),n.innerHeight=n.height-(g+L),n.outerWidth=n.width+v,n.outerHeight=n.height+_,n}}function a(t,e){if(n||-1===e.indexOf("%"))return e;var i=t.style,o=i.left,r=t.runtimeStyle,s=r&&r.left;return s&&(r.left=t.currentStyle.left),i.left=e,e=i.pixelLeft,i.left=o,s&&(r.left=s),e}var u,p=t("boxSizing");return function(){if(p){var t=document.createElement("div");t.style.width="200px",t.style.padding="1px 2px 3px 4px",t.style.borderStyle="solid",t.style.borderWidth="1px 2px 3px 4px",t.style[p]="border-box";var i=document.body||document.documentElement;i.appendChild(t);var o=r(t);u=200===e(o.width),i.removeChild(t)}}(),o}var n=t.getComputedStyle,r=n?function(t){return n(t,null)}:function(t){return t.currentStyle},s=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];"function"==typeof define&&define.amd?define("get-size/get-size",["get-style-property/get-style-property"],o):"object"==typeof exports?module.exports=o(require("get-style-property")):t.getSize=o(t.getStyleProperty)}(window),function(t,e){function i(t,e){return t[a](e)}function o(t){if(!t.parentNode){var e=document.createDocumentFragment();e.appendChild(t)}}function n(t,e){o(t);for(var i=t.parentNode.querySelectorAll(e),n=0,r=i.length;r>n;n++)if(i[n]===t)return!0;return!1}function r(t,e){return o(t),i(t,e)}var s,a=function(){if(e.matchesSelector)return"matchesSelector";for(var t=["webkit","moz","ms","o"],i=0,o=t.length;o>i;i++){var n=t[i],r=n+"MatchesSelector";if(e[r])return r}}();if(a){var u=document.createElement("div"),p=i(u,"div");s=p?i:r}else s=n;"function"==typeof define&&define.amd?define("matches-selector/matches-selector",[],function(){return s}):window.matchesSelector=s}(this,Element.prototype),function(t){function e(t,e){for(var i in e)t[i]=e[i];return t}function i(t){for(var e in t)return!1;return e=null,!0}function o(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}function n(t,n,r){function a(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}var u=r("transition"),p=r("transform"),h=u&&p,f=!!r("perspective"),c={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"}[u],d=["transform","transition","transitionDuration","transitionProperty"],l=function(){for(var t={},e=0,i=d.length;i>e;e++){var o=d[e],n=r(o);n&&n!==o&&(t[o]=n)}return t}();e(a.prototype,t.prototype),a.prototype._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},a.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},a.prototype.getSize=function(){this.size=n(this.element)},a.prototype.css=function(t){var e=this.element.style;for(var i in t){var o=l[i]||i;e[o]=t[i]}},a.prototype.getPosition=function(){var t=s(this.element),e=this.layout.options,i=e.isOriginLeft,o=e.isOriginTop,n=parseInt(t[i?"left":"right"],10),r=parseInt(t[o?"top":"bottom"],10);n=isNaN(n)?0:n,r=isNaN(r)?0:r;var a=this.layout.size;n-=i?a.paddingLeft:a.paddingRight,r-=o?a.paddingTop:a.paddingBottom,this.position.x=n,this.position.y=r},a.prototype.layoutPosition=function(){var t=this.layout.size,e=this.layout.options,i={};e.isOriginLeft?(i.left=this.position.x+t.paddingLeft+"px",i.right=""):(i.right=this.position.x+t.paddingRight+"px",i.left=""),e.isOriginTop?(i.top=this.position.y+t.paddingTop+"px",i.bottom=""):(i.bottom=this.position.y+t.paddingBottom+"px",i.top=""),this.css(i),this.emitEvent("layout",[this])};var y=f?function(t,e){return"translate3d("+t+"px, "+e+"px, 0)"}:function(t,e){return"translate("+t+"px, "+e+"px)"};a.prototype._transitionTo=function(t,e){this.getPosition();var i=this.position.x,o=this.position.y,n=parseInt(t,10),r=parseInt(e,10),s=n===this.position.x&&r===this.position.y;if(this.setPosition(t,e),s&&!this.isTransitioning)return this.layoutPosition(),void 0;var a=t-i,u=e-o,p={},h=this.layout.options;a=h.isOriginLeft?a:-a,u=h.isOriginTop?u:-u,p.transform=y(a,u),this.transition({to:p,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},a.prototype.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},a.prototype.moveTo=h?a.prototype._transitionTo:a.prototype.goTo,a.prototype.setPosition=function(t,e){this.position.x=parseInt(t,10),this.position.y=parseInt(e,10)},a.prototype._nonTransition=function(t){this.css(t.to),t.isCleaning&&this._removeStyles(t.to);for(var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)},a.prototype._transition=function(t){if(!parseFloat(this.layout.options.transitionDuration))return this._nonTransition(t),void 0;var e=this._transn;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);if(t.from){this.css(t.from);var o=this.element.offsetHeight;o=null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0};var m=p&&o(p)+",opacity";a.prototype.enableTransition=function(){this.isTransitioning||(this.css({transitionProperty:m,transitionDuration:this.layout.options.transitionDuration}),this.element.addEventListener(c,this,!1))},a.prototype.transition=a.prototype[u?"_transition":"_nonTransition"],a.prototype.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},a.prototype.onotransitionend=function(t){this.ontransitionend(t)};var g={"-webkit-transform":"transform","-moz-transform":"transform","-o-transform":"transform"};a.prototype.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,o=g[t.propertyName]||t.propertyName;if(delete e.ingProperties[o],i(e.ingProperties)&&this.disableTransition(),o in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[o]),o in e.onEnd){var n=e.onEnd[o];n.call(this),delete e.onEnd[o]}this.emitEvent("transitionEnd",[this])}},a.prototype.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(c,this,!1),this.isTransitioning=!1},a.prototype._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var v={transitionProperty:"",transitionDuration:""};return a.prototype.removeTransitionStyles=function(){this.css(v)},a.prototype.removeElem=function(){this.element.parentNode.removeChild(this.element),this.emitEvent("remove",[this])},a.prototype.remove=function(){if(!u||!parseFloat(this.layout.options.transitionDuration))return this.removeElem(),void 0;var t=this;this.on("transitionEnd",function(){return t.removeElem(),!0}),this.hide()},a.prototype.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options;this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0})},a.prototype.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options;this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:{opacity:function(){this.isHidden&&this.css({display:"none"})}}})},a.prototype.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},a}var r=t.getComputedStyle,s=r?function(t){return r(t,null)}:function(t){return t.currentStyle};"function"==typeof define&&define.amd?define("outlayer/item",["eventEmitter/EventEmitter","get-size/get-size","get-style-property/get-style-property"],n):(t.Outlayer={},t.Outlayer.Item=n(t.EventEmitter,t.getSize,t.getStyleProperty))}(window),function(t){function e(t,e){for(var i in e)t[i]=e[i];return t}function i(t){return"[object Array]"===f.call(t)}function o(t){var e=[];if(i(t))e=t;else if(t&&"number"==typeof t.length)for(var o=0,n=t.length;n>o;o++)e.push(t[o]);else e.push(t);return e}function n(t,e){var i=d(e,t);-1!==i&&e.splice(i,1)}function r(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()}function s(i,s,f,d,l,y){function m(t,i){if("string"==typeof t&&(t=a.querySelector(t)),!t||!c(t))return u&&u.error("Bad "+this.constructor.namespace+" element: "+t),void 0;this.element=t,this.options=e({},this.constructor.defaults),this.option(i);var o=++g;this.element.outlayerGUID=o,v[o]=this,this._create(),this.options.isInitLayout&&this.layout()}var g=0,v={};return m.namespace="outlayer",m.Item=y,m.defaults={containerStyle:{position:"relative"},isInitLayout:!0,isOriginLeft:!0,isOriginTop:!0,isResizeBound:!0,isResizingContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}},e(m.prototype,f.prototype),m.prototype.option=function(t){e(this.options,t)},m.prototype._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),e(this.element.style,this.options.containerStyle),this.options.isResizeBound&&this.bindResize()},m.prototype.reloadItems=function(){this.items=this._itemize(this.element.children)},m.prototype._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,o=[],n=0,r=e.length;r>n;n++){var s=e[n],a=new i(s,this);o.push(a)}return o},m.prototype._filterFindItemElements=function(t){t=o(t);for(var e=this.options.itemSelector,i=[],n=0,r=t.length;r>n;n++){var s=t[n];if(c(s))if(e){l(s,e)&&i.push(s);for(var a=s.querySelectorAll(e),u=0,p=a.length;p>u;u++)i.push(a[u])}else i.push(s)}return i},m.prototype.getItemElements=function(){for(var t=[],e=0,i=this.items.length;i>e;e++)t.push(this.items[e].element);return t},m.prototype.layout=function(){this._resetLayout(),this._manageStamps();var t=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;this.layoutItems(this.items,t),this._isLayoutInited=!0},m.prototype._init=m.prototype.layout,m.prototype._resetLayout=function(){this.getSize()},m.prototype.getSize=function(){this.size=d(this.element)},m.prototype._getMeasurement=function(t,e){var i,o=this.options[t];o?("string"==typeof o?i=this.element.querySelector(o):c(o)&&(i=o),this[t]=i?d(i)[e]:o):this[t]=0},m.prototype.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},m.prototype._getItemsForLayout=function(t){for(var e=[],i=0,o=t.length;o>i;i++){var n=t[i];n.isIgnored||e.push(n)}return e},m.prototype._layoutItems=function(t,e){function i(){o.emitEvent("layoutComplete",[o,t])}var o=this;if(!t||!t.length)return i(),void 0;this._itemsOn(t,"layout",i);for(var n=[],r=0,s=t.length;s>r;r++){var a=t[r],u=this._getItemLayoutPosition(a);u.item=a,u.isInstant=e||a.isLayoutInstant,n.push(u)}this._processLayoutQueue(n)},m.prototype._getItemLayoutPosition=function(){return{x:0,y:0}},m.prototype._processLayoutQueue=function(t){for(var e=0,i=t.length;i>e;e++){var o=t[e];this._positionItem(o.item,o.x,o.y,o.isInstant)}},m.prototype._positionItem=function(t,e,i,o){o?t.goTo(e,i):t.moveTo(e,i)},m.prototype._postLayout=function(){this.resizeContainer()},m.prototype.resizeContainer=function(){if(this.options.isResizingContainer){var t=this._getContainerSize();t&&(this._setContainerMeasure(t.width,!0),this._setContainerMeasure(t.height,!1))}},m.prototype._getContainerSize=h,m.prototype._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},m.prototype._itemsOn=function(t,e,i){function o(){return n++,n===r&&i.call(s),!0}for(var n=0,r=t.length,s=this,a=0,u=t.length;u>a;a++){var p=t[a];p.on(e,o)}},m.prototype.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},m.prototype.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},m.prototype.stamp=function(t){if(t=this._find(t)){this.stamps=this.stamps.concat(t);for(var e=0,i=t.length;i>e;e++){var o=t[e];this.ignore(o)}}},m.prototype.unstamp=function(t){if(t=this._find(t))for(var e=0,i=t.length;i>e;e++){var o=t[e];n(o,this.stamps),this.unignore(o)}},m.prototype._find=function(t){return t?("string"==typeof t&&(t=this.element.querySelectorAll(t)),t=o(t)):void 0},m.prototype._manageStamps=function(){if(this.stamps&&this.stamps.length){this._getBoundingRect();for(var t=0,e=this.stamps.length;e>t;t++){var i=this.stamps[t];this._manageStamp(i)}}},m.prototype._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},m.prototype._manageStamp=h,m.prototype._getElementOffset=function(t){var e=t.getBoundingClientRect(),i=this._boundingRect,o=d(t),n={left:e.left-i.left-o.marginLeft,top:e.top-i.top-o.marginTop,right:i.right-e.right-o.marginRight,bottom:i.bottom-e.bottom-o.marginBottom};return n},m.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},m.prototype.bindResize=function(){this.isResizeBound||(i.bind(t,"resize",this),this.isResizeBound=!0)},m.prototype.unbindResize=function(){this.isResizeBound&&i.unbind(t,"resize",this),this.isResizeBound=!1},m.prototype.onresize=function(){function t(){e.resize(),delete e.resizeTimeout}this.resizeTimeout&&clearTimeout(this.resizeTimeout);var e=this;this.resizeTimeout=setTimeout(t,100)},m.prototype.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},m.prototype.needsResizeLayout=function(){var t=d(this.element),e=this.size&&t;return e&&t.innerWidth!==this.size.innerWidth},m.prototype.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},m.prototype.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},m.prototype.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},m.prototype.reveal=function(t){var e=t&&t.length;if(e)for(var i=0;e>i;i++){var o=t[i];o.reveal()}},m.prototype.hide=function(t){var e=t&&t.length;if(e)for(var i=0;e>i;i++){var o=t[i];o.hide()}},m.prototype.getItem=function(t){for(var e=0,i=this.items.length;i>e;e++){var o=this.items[e];if(o.element===t)return o}},m.prototype.getItems=function(t){if(t&&t.length){for(var e=[],i=0,o=t.length;o>i;i++){var n=t[i],r=this.getItem(n);r&&e.push(r)}return e}},m.prototype.remove=function(t){t=o(t);var e=this.getItems(t);if(e&&e.length){this._itemsOn(e,"remove",function(){this.emitEvent("removeComplete",[this,e])});for(var i=0,r=e.length;r>i;i++){var s=e[i];s.remove(),n(s,this.items)}}},m.prototype.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="";for(var e=0,i=this.items.length;i>e;e++){var o=this.items[e];o.destroy()}this.unbindResize(),delete this.element.outlayerGUID,p&&p.removeData(this.element,this.constructor.namespace)},m.data=function(t){var e=t&&t.outlayerGUID;return e&&v[e]},m.create=function(t,i){function o(){m.apply(this,arguments)}return Object.create?o.prototype=Object.create(m.prototype):e(o.prototype,m.prototype),o.prototype.constructor=o,o.defaults=e({},m.defaults),e(o.defaults,i),o.prototype.settings={},o.namespace=t,o.data=m.data,o.Item=function(){y.apply(this,arguments)},o.Item.prototype=new y,s(function(){for(var e=r(t),i=a.querySelectorAll(".js-"+e),n="data-"+e+"-options",s=0,h=i.length;h>s;s++){var f,c=i[s],d=c.getAttribute(n);try{f=d&&JSON.parse(d)}catch(l){u&&u.error("Error parsing "+n+" on "+c.nodeName.toLowerCase()+(c.id?"#"+c.id:"")+": "+l);continue}var y=new o(c,f);p&&p.data(c,t,y)}}),p&&p.bridget&&p.bridget(t,o),o},m.Item=y,m}var a=t.document,u=t.console,p=t.jQuery,h=function(){},f=Object.prototype.toString,c="object"==typeof HTMLElement?function(t){return t instanceof HTMLElement}:function(t){return t&&"object"==typeof t&&1===t.nodeType&&"string"==typeof t.nodeName},d=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var i=0,o=t.length;o>i;i++)if(t[i]===e)return i;return-1};"function"==typeof define&&define.amd?define("outlayer/outlayer",["eventie/eventie","doc-ready/doc-ready","eventEmitter/EventEmitter","get-size/get-size","matches-selector/matches-selector","./item"],s):t.Outlayer=s(t.eventie,t.docReady,t.EventEmitter,t.getSize,t.matchesSelector,t.Outlayer.Item)}(window),function(t){function e(t){function e(){t.Item.apply(this,arguments)}return e.prototype=new t.Item,e.prototype._create=function(){this.id=this.layout.itemGUID++,t.Item.prototype._create.call(this),this.sortData={}},e.prototype.updateSortData=function(){if(!this.isIgnored){this.sortData.id=this.id,this.sortData["original-order"]=this.id,this.sortData.random=Math.random();var t=this.layout.options.getSortData,e=this.layout._sorters;for(var i in t){var o=e[i];this.sortData[i]=o(this.element,this)}}},e}"function"==typeof define&&define.amd?define("isotope/js/item",["outlayer/outlayer"],e):(t.Isotope=t.Isotope||{},t.Isotope.Item=e(t.Outlayer))}(window),function(t){function e(t,e){function i(t){this.isotope=t,t&&(this.options=t.options[this.namespace],this.element=t.element,this.items=t.filteredItems,this.size=t.size)}return function(){function t(t){return function(){return e.prototype[t].apply(this.isotope,arguments)}}for(var o=["_resetLayout","_getItemLayoutPosition","_manageStamp","_getContainerSize","_getElementOffset","needsResizeLayout"],n=0,r=o.length;r>n;n++){var s=o[n];i.prototype[s]=t(s)}}(),i.prototype.needsVerticalResizeLayout=function(){var e=t(this.isotope.element),i=this.isotope.size&&e;return i&&e.innerHeight!==this.isotope.size.innerHeight},i.prototype._getMeasurement=function(){this.isotope._getMeasurement.apply(this,arguments)},i.prototype.getColumnWidth=function(){this.getSegmentSize("column","Width")},i.prototype.getRowHeight=function(){this.getSegmentSize("row","Height")},i.prototype.getSegmentSize=function(t,e){var i=t+e,o="outer"+e;if(this._getMeasurement(i,o),!this[i]){var n=this.getFirstItemSize();this[i]=n&&n[o]||this.isotope.size["inner"+e]}},i.prototype.getFirstItemSize=function(){var e=this.isotope.filteredItems[0];return e&&e.element&&t(e.element)},i.prototype.layout=function(){this.isotope.layout.apply(this.isotope,arguments)},i.prototype.getSize=function(){this.isotope.getSize(),this.size=this.isotope.size},i.modes={},i.create=function(t,e){function o(){i.apply(this,arguments)}return o.prototype=new i,e&&(o.options=e),o.prototype.namespace=t,i.modes[t]=o,o},i}"function"==typeof define&&define.amd?define("isotope/js/layout-mode",["get-size/get-size","outlayer/outlayer"],e):(t.Isotope=t.Isotope||{},t.Isotope.LayoutMode=e(t.getSize,t.Outlayer))}(window),function(t){function e(t,e){var o=t.create("masonry");return o.prototype._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns();var t=this.cols;for(this.colYs=[];t--;)this.colYs.push(0);this.maxY=0},o.prototype.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],i=t&&t.element;this.columnWidth=i&&e(i).outerWidth||this.containerWidth}this.columnWidth+=this.gutter,this.cols=Math.floor((this.containerWidth+this.gutter)/this.columnWidth),this.cols=Math.max(this.cols,1)},o.prototype.getContainerWidth=function(){var t=this.options.isFitWidth?this.element.parentNode:this.element,i=e(t);this.containerWidth=i&&i.innerWidth},o.prototype._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth%this.columnWidth,o=e&&1>e?"round":"ceil",n=Math[o](t.size.outerWidth/this.columnWidth);n=Math.min(n,this.cols);for(var r=this._getColGroup(n),s=Math.min.apply(Math,r),a=i(r,s),u={x:this.columnWidth*a,y:s},p=s+t.size.outerHeight,h=this.cols+1-r.length,f=0;h>f;f++)this.colYs[a+f]=p;return u},o.prototype._getColGroup=function(t){if(2>t)return this.colYs;for(var e=[],i=this.cols+1-t,o=0;i>o;o++){var n=this.colYs.slice(o,o+t);e[o]=Math.max.apply(Math,n)}return e},o.prototype._manageStamp=function(t){var i=e(t),o=this._getElementOffset(t),n=this.options.isOriginLeft?o.left:o.right,r=n+i.outerWidth,s=Math.floor(n/this.columnWidth);s=Math.max(0,s);var a=Math.floor(r/this.columnWidth);a-=r%this.columnWidth?0:1,a=Math.min(this.cols-1,a);for(var u=(this.options.isOriginTop?o.top:o.bottom)+i.outerHeight,p=s;a>=p;p++)this.colYs[p]=Math.max(u,this.colYs[p])},o.prototype._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this.options.isFitWidth&&(t.width=this._getContainerFitWidth()),t},o.prototype._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},o.prototype.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!==this.containerWidth},o}var i=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var i=0,o=t.length;o>i;i++){var n=t[i];if(n===e)return i}return-1};"function"==typeof define&&define.amd?define("masonry/masonry",["outlayer/outlayer","get-size/get-size"],e):t.Masonry=e(t.Outlayer,t.getSize)}(window),function(t){function e(t,e){for(var i in e)t[i]=e[i];return t}function i(t,i){var o=t.create("masonry"),n=o.prototype._getElementOffset,r=o.prototype.layout,s=o.prototype._getMeasurement;e(o.prototype,i.prototype),o.prototype._getElementOffset=n,o.prototype.layout=r,o.prototype._getMeasurement=s;var a=o.prototype.measureColumns;o.prototype.measureColumns=function(){this.items=this.isotope.filteredItems,a.call(this)};var u=o.prototype._manageStamp;return o.prototype._manageStamp=function(){this.options.isOriginLeft=this.isotope.options.isOriginLeft,this.options.isOriginTop=this.isotope.options.isOriginTop,u.apply(this,arguments)},o}"function"==typeof define&&define.amd?define("isotope/js/layout-modes/masonry",["../layout-mode","masonry/masonry"],i):i(t.Isotope.LayoutMode,t.Masonry)}(window),function(t){function e(t){var e=t.create("fitRows");return e.prototype._resetLayout=function(){this.x=0,this.y=0,this.maxY=0},e.prototype._getItemLayoutPosition=function(t){t.getSize(),0!==this.x&&t.size.outerWidth+this.x>this.isotope.size.innerWidth&&(this.x=0,this.y=this.maxY);var e={x:this.x,y:this.y};return this.maxY=Math.max(this.maxY,this.y+t.size.outerHeight),this.x+=t.size.outerWidth,e},e.prototype._getContainerSize=function(){return{height:this.maxY}},e}"function"==typeof define&&define.amd?define("isotope/js/layout-modes/fit-rows",["../layout-mode"],e):e(t.Isotope.LayoutMode)}(window),function(t){function e(t){var e=t.create("vertical",{horizontalAlignment:0});return e.prototype._resetLayout=function(){this.y=0},e.prototype._getItemLayoutPosition=function(t){t.getSize();var e=(this.isotope.size.innerWidth-t.size.outerWidth)*this.options.horizontalAlignment,i=this.y;return this.y+=t.size.outerHeight,{x:e,y:i}},e.prototype._getContainerSize=function(){return{height:this.y}},e}"function"==typeof define&&define.amd?define("isotope/js/layout-modes/vertical",["../layout-mode"],e):e(t.Isotope.LayoutMode)}(window),function(t){function e(t,e){for(var i in e)t[i]=e[i];return t}function i(t){return"[object Array]"===h.call(t)}function o(t){var e=[];if(i(t))e=t;else if(t&&"number"==typeof t.length)for(var o=0,n=t.length;n>o;o++)e.push(t[o]);else e.push(t);return e}function n(t,e){var i=f(e,t);-1!==i&&e.splice(i,1)}function r(t,i,r,u,h){function f(t,e){return function(i,o){for(var n=0,r=t.length;r>n;n++){var s=t[n],a=i.sortData[s],u=o.sortData[s];if(a>u||u>a){var p=void 0!==e[s]?e[s]:e,h=p?1:-1;return(a>u?1:-1)*h}}return 0}}var c=t.create("isotope",{layoutMode:"masonry",isJQueryFiltering:!0,sortAscending:!0});c.Item=u,c.LayoutMode=h,c.prototype._create=function(){this.itemGUID=0,this._sorters={},this._getSorters(),t.prototype._create.call(this),this.modes={},this.filteredItems=this.items,this.sortHistory=["original-order"];for(var e in h.modes)this._initLayoutMode(e)},c.prototype.reloadItems=function(){this.itemGUID=0,t.prototype.reloadItems.call(this)},c.prototype._itemize=function(){for(var e=t.prototype._itemize.apply(this,arguments),i=0,o=e.length;o>i;i++){var n=e[i];n.id=this.itemGUID++}return this._updateItemsSortData(e),e},c.prototype._initLayoutMode=function(t){var i=h.modes[t],o=this.options[t]||{};this.options[t]=i.options?e(i.options,o):o,this.modes[t]=new i(this)},c.prototype.layout=function(){return!this._isLayoutInited&&this.options.isInitLayout?(this.arrange(),void 0):(this._layout(),void 0)},c.prototype._layout=function(){var t=this._getIsInstant();this._resetLayout(),this._manageStamps(),this.layoutItems(this.filteredItems,t),this._isLayoutInited=!0},c.prototype.arrange=function(t){this.option(t),this._getIsInstant(),this.filteredItems=this._filter(this.items),this._sort(),this._layout()},c.prototype._init=c.prototype.arrange,c.prototype._getIsInstant=function(){var t=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;return this._isInstant=t,t},c.prototype._filter=function(t){function e(){f.reveal(n),f.hide(r)}var i=this.options.filter;i=i||"*";for(var o=[],n=[],r=[],s=this._getFilterTest(i),a=0,u=t.length;u>a;a++){var p=t[a];if(!p.isIgnored){var h=s(p);h&&o.push(p),h&&p.isHidden?n.push(p):h||p.isHidden||r.push(p)}}var f=this;return this._isInstant?this._noTransition(e):e(),o},c.prototype._getFilterTest=function(t){return s&&this.options.isJQueryFiltering?function(e){return s(e.element).is(t)}:"function"==typeof t?function(e){return t(e.element)}:function(e){return r(e.element,t)}},c.prototype.updateSortData=function(t){this._getSorters(),t=o(t);var e=this.getItems(t);e=e.length?e:this.items,this._updateItemsSortData(e)
},c.prototype._getSorters=function(){var t=this.options.getSortData;for(var e in t){var i=t[e];this._sorters[e]=d(i)}},c.prototype._updateItemsSortData=function(t){for(var e=0,i=t.length;i>e;e++){var o=t[e];o.updateSortData()}};var d=function(){function t(t){if("string"!=typeof t)return t;var i=a(t).split(" "),o=i[0],n=o.match(/^\[(.+)\]$/),r=n&&n[1],s=e(r,o),u=c.sortDataParsers[i[1]];return t=u?function(t){return t&&u(s(t))}:function(t){return t&&s(t)}}function e(t,e){var i;return i=t?function(e){return e.getAttribute(t)}:function(t){var i=t.querySelector(e);return i&&p(i)}}return t}();c.sortDataParsers={parseInt:function(t){return parseInt(t,10)},parseFloat:function(t){return parseFloat(t)}},c.prototype._sort=function(){var t=this.options.sortBy;if(t){var e=[].concat.apply(t,this.sortHistory),i=f(e,this.options.sortAscending);this.filteredItems.sort(i),t!==this.sortHistory[0]&&this.sortHistory.unshift(t)}},c.prototype._mode=function(){var t=this.options.layoutMode,e=this.modes[t];if(!e)throw Error("No layout mode: "+t);return e.options=this.options[t],e},c.prototype._resetLayout=function(){t.prototype._resetLayout.call(this),this._mode()._resetLayout()},c.prototype._getItemLayoutPosition=function(t){return this._mode()._getItemLayoutPosition(t)},c.prototype._manageStamp=function(t){this._mode()._manageStamp(t)},c.prototype._getContainerSize=function(){return this._mode()._getContainerSize()},c.prototype.needsResizeLayout=function(){return this._mode().needsResizeLayout()},c.prototype.appended=function(t){var e=this.addItems(t);if(e.length){var i=this._filterRevealAdded(e);this.filteredItems=this.filteredItems.concat(i)}},c.prototype.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps();var o=this._filterRevealAdded(e);this.layoutItems(i),this.filteredItems=o.concat(this.filteredItems)}},c.prototype._filterRevealAdded=function(t){var e=this._noTransition(function(){return this._filter(t)});return this.layoutItems(e,!0),this.reveal(e),t},c.prototype.insert=function(t){var e=this.addItems(t);if(e.length){var i,o,n=e.length;for(i=0;n>i;i++)o=e[i],this.element.appendChild(o.element);var r=this._filter(e);for(this._noTransition(function(){this.hide(r)}),i=0;n>i;i++)e[i].isLayoutInstant=!0;for(this.arrange(),i=0;n>i;i++)delete e[i].isLayoutInstant;this.reveal(r)}};var l=c.prototype.remove;return c.prototype.remove=function(t){t=o(t);var e=this.getItems(t);if(l.call(this,t),e&&e.length)for(var i=0,r=e.length;r>i;i++){var s=e[i];n(s,this.filteredItems)}},c.prototype._noTransition=function(t){var e=this.options.transitionDuration;this.options.transitionDuration=0;var i=t.call(this);return this.options.transitionDuration=e,i},c}var s=t.jQuery,a=String.prototype.trim?function(t){return t.trim()}:function(t){return t.replace(/^\s+|\s+$/g,"")},u=document.documentElement,p=u.textContent?function(t){return t.textContent}:function(t){return t.innerText},h=Object.prototype.toString,f=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var i=0,o=t.length;o>i;i++)if(t[i]===e)return i;return-1};"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size","matches-selector/matches-selector","isotope/js/item","isotope/js/layout-mode","isotope/js/layout-modes/masonry","isotope/js/layout-modes/fit-rows","isotope/js/layout-modes/vertical"],r):t.Isotope=r(t.Outlayer,t.getSize,t.matchesSelector,t.Isotope.Item,t.Isotope.LayoutMode)}(window);

/****************************************************
                Waypoints Plugin
****************************************************/
/*
jQuery Waypoints - v1.1.7
Copyright (c) 2011-2012 Caleb Troughton
Dual licensed under the MIT license and GPL license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/MIT-license.txt
https://github.com/imakewebthings/jquery-waypoints/blob/master/GPL-license.txt
*/
;(function($,k,m,i,d){var e=$(i),g="waypoint.reached",b=function(o,n){o.element.trigger(g,n);if(o.options.triggerOnce){o.element[k]("destroy")}},h=function(p,o){if(!o){return -1}var n=o.waypoints.length-1;while(n>=0&&o.waypoints[n].element[0]!==p[0]){n-=1}return n},f=[],l=function(n){$.extend(this,{element:$(n),oldScroll:0,waypoints:[],didScroll:false,didResize:false,doScroll:$.proxy(function(){var q=this.element.scrollTop(),p=q>this.oldScroll,s=this,r=$.grep(this.waypoints,function(u,t){return p?(u.offset>s.oldScroll&&u.offset<=q):(u.offset<=s.oldScroll&&u.offset>q)}),o=r.length;if(!this.oldScroll||!q){$[m]("refresh")}this.oldScroll=q;if(!o){return}if(!p){r.reverse()}$.each(r,function(u,t){if(t.options.continuous||u===o-1){b(t,[p?"down":"up"])}})},this)});$(n).bind("scroll.waypoints",$.proxy(function(){if(!this.didScroll){this.didScroll=true;i.setTimeout($.proxy(function(){this.doScroll();this.didScroll=false},this),$[m].settings.scrollThrottle)}},this)).bind("resize.waypoints",$.proxy(function(){if(!this.didResize){this.didResize=true;i.setTimeout($.proxy(function(){$[m]("refresh");this.didResize=false},this),$[m].settings.resizeThrottle)}},this));e.load($.proxy(function(){this.doScroll()},this))},j=function(n){var o=null;$.each(f,function(p,q){if(q.element[0]===n){o=q;return false}});return o},c={init:function(o,n){this.each(function(){var u=$.fn[k].defaults.context,q,t=$(this);if(n&&n.context){u=n.context}if(!$.isWindow(u)){u=t.closest(u)[0]}q=j(u);if(!q){q=new l(u);f.push(q)}var p=h(t,q),s=p<0?$.fn[k].defaults:q.waypoints[p].options,r=$.extend({},s,n);r.offset=r.offset==="bottom-in-view"?function(){var v=$.isWindow(u)?$[m]("viewportHeight"):$(u).height();return v-$(this).outerHeight()}:r.offset;if(p<0){q.waypoints.push({element:t,offset:null,options:r})}else{q.waypoints[p].options=r}if(o){t.bind(g,o)}if(n&&n.handler){t.bind(g,n.handler)}});$[m]("refresh");return this},remove:function(){return this.each(function(o,p){var n=$(p);$.each(f,function(r,s){var q=h(n,s);if(q>=0){s.waypoints.splice(q,1);if(!s.waypoints.length){s.element.unbind("scroll.waypoints resize.waypoints");f.splice(r,1)}}})})},destroy:function(){return this.unbind(g)[k]("remove")}},a={refresh:function(){$.each(f,function(r,s){var q=$.isWindow(s.element[0]),n=q?0:s.element.offset().top,p=q?$[m]("viewportHeight"):s.element.height(),o=q?0:s.element.scrollTop();$.each(s.waypoints,function(u,x){if(!x){return}var t=x.options.offset,w=x.offset;if(typeof x.options.offset==="function"){t=x.options.offset.apply(x.element)}else{if(typeof x.options.offset==="string"){var v=parseFloat(x.options.offset);t=x.options.offset.indexOf("%")?Math.ceil(p*(v/100)):v}}x.offset=x.element.offset().top-n+o-t;if(x.options.onlyOnScroll){return}if(w!==null&&s.oldScroll>w&&s.oldScroll<=x.offset){b(x,["up"])}else{if(w!==null&&s.oldScroll<w&&s.oldScroll>=x.offset){b(x,["down"])}else{if(!w&&s.element.scrollTop()>x.offset){b(x,["down"])}}}});s.waypoints.sort(function(u,t){return u.offset-t.offset})})},viewportHeight:function(){return(i.innerHeight?i.innerHeight:e.height())},aggregate:function(){var n=$();$.each(f,function(o,p){$.each(p.waypoints,function(q,r){n=n.add(r.element)})});return n}};$.fn[k]=function(n){if(c[n]){return c[n].apply(this,Array.prototype.slice.call(arguments,1))}else{if(typeof n==="function"||!n){return c.init.apply(this,arguments)}else{if(typeof n==="object"){return c.init.apply(this,[null,n])}else{$.error("Method "+n+" does not exist on jQuery "+k)}}}};$.fn[k].defaults={continuous:true,offset:0,triggerOnce:false,context:i};$[m]=function(n){if(a[n]){return a[n].apply(this)}else{return a.aggregate()}};$[m].settings={resizeThrottle:200,scrollThrottle:100};e.load(function(){$[m]("refresh")})})(jQuery,"waypoint","waypoints",window);
/****************************************************
                jQuery Easing
****************************************************/
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*!
 * jQuery imagesLoaded plugin v2.1.1
 * http://github.com/desandro/imagesloaded
 *
 * MIT License. by Paul Irish et al.
 */
/*jshint curly: true, eqeqeq: true, noempty: true, strict: true, undef: true, browser: true */
/*global jQuery: false */
;(function($, undefined) {
'use strict';
// blank image data-uri bypasses webkit log warning (thx doug jones)
var BLANK = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';

$.fn.imagesLoaded = function( callback ) {
	var $this = this,
		deferred = $.isFunction($.Deferred) ? $.Deferred() : 0,
		hasNotify = $.isFunction(deferred.notify),
		$images = $this.find('img').add( $this.filter('img') ),
		loaded = [],
		proper = [],
		broken = [];

	// Register deferred callbacks
	if ($.isPlainObject(callback)) {
		$.each(callback, function (key, value) {
			if (key === 'callback') {
				callback = value;
			} else if (deferred) {
				deferred[key](value);
			}
		});
	}

	function doneLoading() {
		var $proper = $(proper),
			$broken = $(broken);

		if ( deferred ) {
			if ( broken.length ) {
				deferred.reject( $images, $proper, $broken );
			} else {
				deferred.resolve( $images );
			}
		}

		if ( $.isFunction( callback ) ) {
			callback.call( $this, $images, $proper, $broken );
		}
	}

	function imgLoadedHandler( event ) {
		imgLoaded( event.target, event.type === 'error' );
	}

	function imgLoaded( img, isBroken ) {
		// don't proceed if BLANK image, or image is already loaded
		if ( img.src === BLANK || $.inArray( img, loaded ) !== -1 ) {
			return;
		}

		// store element in loaded images array
		loaded.push( img );

		// keep track of broken and properly loaded images
		if ( isBroken ) {
			broken.push( img );
		} else {
			proper.push( img );
		}

		// cache image and its state for future calls
		$.data( img, 'imagesLoaded', { isBroken: isBroken, src: img.src } );

		// trigger deferred progress method if present
		if ( hasNotify ) {
			deferred.notifyWith( $(img), [ isBroken, $images, $(proper), $(broken) ] );
		}

		// call doneLoading and clean listeners if all images are loaded
		if ( $images.length === loaded.length ) {
			setTimeout( doneLoading );
			$images.unbind( '.imagesLoaded', imgLoadedHandler );
		}
	}

	// if no images, trigger immediately
	if ( !$images.length ) {
		doneLoading();
	} else {
		$images.bind( 'load.imagesLoaded error.imagesLoaded', imgLoadedHandler )
		.each( function( i, el ) {
			var src = el.src;

			// find out if this image has been already checked for status
			// if it was, and src has not changed, call imgLoaded on it
			var cached = $.data( el, 'imagesLoaded' );
			if ( cached && cached.src === src ) {
				imgLoaded( el, cached.isBroken );
				return;
			}

			// if complete is true and browser supports natural sizes, try
			// to check for image status manually
			if ( el.complete && el.naturalWidth !== undefined ) {
				imgLoaded( el, el.naturalWidth === 0 || el.naturalHeight === 0 );
				return;
			}

			// cached images don't fire load sometimes, so we reset src, but only when
			// dealing with IE, or image is complete (loaded) and failed manual check
			// webkit hack from http://groups.google.com/group/jquery-dev/browse_thread/thread/eee6ab7b2da50e1f
			if ( el.readyState || el.complete ) {
				el.src = BLANK;
				el.src = src;
			}
		});
	}

	return deferred ? deferred.promise( $this ) : $this;
};

})(jQuery);

/*
* Placeholder plugin for jQuery
* ---
* Copyright 2010, Daniel Stocks (http://webcloud.se)
* Released under the MIT, BSD, and GPL Licenses.
*/
;(function(b){function d(a){this.input=a;a.attr("type")=="password"&&this.handlePassword();b(a[0].form).submit(function(){if(a.hasClass("placeholder")&&a[0].value==a.attr("placeholder"))a[0].value=""})}d.prototype={show:function(a){if(this.input[0].value===""||a&&this.valueIsPlaceholder()){if(this.isPassword)try{this.input[0].setAttribute("type","text")}catch(b){this.input.before(this.fakePassword.show()).hide()}this.input.addClass("placeholder");this.input[0].value=this.input.attr("placeholder")}},
hide:function(){if(this.valueIsPlaceholder()&&this.input.hasClass("placeholder")&&(this.input.removeClass("placeholder"),this.input[0].value="",this.isPassword)){try{this.input[0].setAttribute("type","password")}catch(a){}this.input.show();this.input[0].focus()}},valueIsPlaceholder:function(){return this.input[0].value==this.input.attr("placeholder")},handlePassword:function(){var a=this.input;a.attr("realType","password");this.isPassword=!0;if(b.browser.msie&&a[0].outerHTML){var c=b(a[0].outerHTML.replace(/type=(['"])?password\1/gi,
"type=$1text$1"));this.fakePassword=c.val(a.attr("placeholder")).addClass("placeholder").focus(function(){a.trigger("focus");b(this).hide()});b(a[0].form).submit(function(){c.remove();a.show()})}}};var e=!!("placeholder"in document.createElement("input"));b.fn.placeholder=function(){return e?this:this.each(function(){var a=b(this),c=new d(a);c.show(!0);a.focus(function(){c.hide()});a.blur(function(){c.show(!1)});b.browser.msie&&(b(window).load(function(){a.val()&&a.removeClass("placeholder");c.show(!0)}),
a.focus(function(){if(this.value==""){var a=this.createTextRange();a.collapse(!0);a.moveStart("character",0);a.select()}}))})}})(jQuery);

/*
 * jQuery hashchange event - v1.3 - 7/21/2010
 * http://benalman.com/projects/jquery-hashchange-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
;(function($,e,b){var c="hashchange",h=document,f,g=$.event.special,i=h.documentMode,d="on"+c in e&&(i===b||i>7);function a(j){j=j||location.href;return"#"+j.replace(/^[^#]*#?(.*)$/,"$1")}$.fn[c]=function(j){return j?this.bind(c,j):this.trigger(c)};$.fn[c].delay=50;g[c]=$.extend(g[c],{setup:function(){if(d){return false}$(f.start)},teardown:function(){if(d){return false}$(f.stop)}});f=(function(){var j={},p,m=a(),k=function(q){return q},l=k,o=k;j.start=function(){p||n()};j.stop=function(){p&&clearTimeout(p);p=b};function n(){var r=a(),q=o(m);if(r!==m){l(m=r,q);$(e).trigger(c)}else{if(q!==m){location.href=location.href.replace(/#.*/,"")+q}}p=setTimeout(n,$.fn[c].delay)}$.browser.msie&&!d&&(function(){var q,r;j.start=function(){if(!q){r=$.fn[c].src;r=r&&r+a();q=$('<iframe tabindex="-1" title="empty"/>').hide().one("load",function(){r||l(a());n()}).attr("src",r||"javascript:0").insertAfter("body")[0].contentWindow;h.onpropertychange=function(){try{if(event.propertyName==="title"){q.document.title=h.title}}catch(s){}}}};j.stop=k;o=function(){return a(q.location.href)};l=function(v,s){var u=q.document,t=$.fn[c].domain;if(v!==s){u.title=h.title;u.open();t&&u.write('<script>document.domain="'+t+'"<\/script>');u.close();q.location.hash=v}}})();return j})()})(jQuery,this);

/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 * 
 * Requires: 1.2.2+
 */
;(function(a){function d(b){var c=b||window.event,d=[].slice.call(arguments,1),e=0,f=!0,g=0,h=0;return b=a.event.fix(c),b.type="mousewheel",c.wheelDelta&&(e=c.wheelDelta/120),c.detail&&(e=-c.detail/3),h=e,c.axis!==undefined&&c.axis===c.HORIZONTAL_AXIS&&(h=0,g=-1*e),c.wheelDeltaY!==undefined&&(h=c.wheelDeltaY/120),c.wheelDeltaX!==undefined&&(g=-1*c.wheelDeltaX/120),d.unshift(b,e,g,h),(a.event.dispatch||a.event.handle).apply(this,d)}var b=["DOMMouseScroll","mousewheel"];if(a.event.fixHooks)for(var c=b.length;c;)a.event.fixHooks[b[--c]]=a.event.mouseHooks;a.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var a=b.length;a;)this.addEventListener(b[--a],d,!1);else this.onmousewheel=d},teardown:function(){if(this.removeEventListener)for(var a=b.length;a;)this.removeEventListener(b[--a],d,!1);else this.onmousewheel=null}},a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})})(jQuery);
/*
* touchSwipe - jQuery Plugin
* https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
* http://labs.skinkers.com/touchSwipe/
* http://plugins.jquery.com/project/touchSwipe
*
* Copyright (c) 2010 Matt Bryson (www.skinkers.com)
* Dual licensed under the MIT or GPL Version 2 licenses.
*
* $version: 1.3.3
*/
;(function(g){function P(c){if(c&&void 0===c.allowPageScroll&&(void 0!==c.swipe||void 0!==c.swipeStatus))c.allowPageScroll=G;c||(c={});c=g.extend({},g.fn.swipe.defaults,c);return this.each(function(){var b=g(this),f=b.data(w);f||(f=new W(this,c),b.data(w,f))})}function W(c,b){var f,p,r,s;function H(a){var a=a.originalEvent,c,Q=n?a.touches[0]:a;d=R;n?h=a.touches.length:a.preventDefault();i=0;j=null;k=0;!n||h===b.fingers||b.fingers===x?(r=f=Q.pageX,s=p=Q.pageY,y=(new Date).getTime(),b.swipeStatus&&(c= l(a,d))):t(a);if(!1===c)return d=m,l(a,d),c;e.bind(I,J);e.bind(K,L)}function J(a){a=a.originalEvent;if(!(d===q||d===m)){var c,e=n?a.touches[0]:a;f=e.pageX;p=e.pageY;u=(new Date).getTime();j=S();n&&(h=a.touches.length);d=z;var e=a,g=j;if(b.allowPageScroll===G)e.preventDefault();else{var o=b.allowPageScroll===T;switch(g){case v:(b.swipeLeft&&o||!o&&b.allowPageScroll!=M)&&e.preventDefault();break;case A:(b.swipeRight&&o||!o&&b.allowPageScroll!=M)&&e.preventDefault();break;case B:(b.swipeUp&&o||!o&&b.allowPageScroll!= N)&&e.preventDefault();break;case C:(b.swipeDown&&o||!o&&b.allowPageScroll!=N)&&e.preventDefault()}}h===b.fingers||b.fingers===x||!n?(i=U(),k=u-y,b.swipeStatus&&(c=l(a,d,j,i,k)),b.triggerOnTouchEnd||(e=!(b.maxTimeThreshold?!(k>=b.maxTimeThreshold):1),!0===D()?(d=q,c=l(a,d)):e&&(d=m,l(a,d)))):(d=m,l(a,d));!1===c&&(d=m,l(a,d))}}function L(a){a=a.originalEvent;a.preventDefault();u=(new Date).getTime();i=U();j=S();k=u-y;if(b.triggerOnTouchEnd||!1===b.triggerOnTouchEnd&&d===z)if(d=q,(h===b.fingers||b.fingers=== x||!n)&&0!==f){var c=!(b.maxTimeThreshold?!(k>=b.maxTimeThreshold):1);if((!0===D()||null===D())&&!c)l(a,d);else if(c||!1===D())d=m,l(a,d)}else d=m,l(a,d);else d===z&&(d=m,l(a,d));e.unbind(I,J,!1);e.unbind(K,L,!1)}function t(){y=u=p=f=s=r=h=0}function l(a,c){var d=void 0;b.swipeStatus&&(d=b.swipeStatus.call(e,a,c,j||null,i||0,k||0,h));if(c===m&&b.click&&(1===h||!n)&&(isNaN(i)||0===i))d=b.click.call(e,a,a.target);if(c==q)switch(b.swipe&&(d=b.swipe.call(e,a,j,i,k,h)),j){case v:b.swipeLeft&&(d=b.swipeLeft.call(e, a,j,i,k,h));break;case A:b.swipeRight&&(d=b.swipeRight.call(e,a,j,i,k,h));break;case B:b.swipeUp&&(d=b.swipeUp.call(e,a,j,i,k,h));break;case C:b.swipeDown&&(d=b.swipeDown.call(e,a,j,i,k,h))}(c===m||c===q)&&t(a);return d}function D(){return null!==b.threshold?i>=b.threshold:null}function U(){return Math.round(Math.sqrt(Math.pow(f-r,2)+Math.pow(p-s,2)))}function S(){var a;a=Math.atan2(p-s,r-f);a=Math.round(180*a/Math.PI);0>a&&(a=360-Math.abs(a));return 45>=a&&0<=a?v:360>=a&&315<=a?v:135<=a&&225>=a? A:45<a&&135>a?C:B}function V(){e.unbind(E,H);e.unbind(F,t);e.unbind(I,J);e.unbind(K,L)}var O=n||!b.fallbackToMouseEvents,E=O?"touchstart":"mousedown",I=O?"touchmove":"mousemove",K=O?"touchend":"mouseup",F="touchcancel",i=0,j=null,k=0,e=g(c),d="start",h=0,y=p=f=s=r=0,u=0;try{e.bind(E,H),e.bind(F,t)}catch(P){g.error("events not supported "+E+","+F+" on jQuery.swipe")}this.enable=function(){e.bind(E,H);e.bind(F,t);return e};this.disable=function(){V();return e};this.destroy=function(){V();e.data(w,null); return e}}var v="left",A="right",B="up",C="down",G="none",T="auto",M="horizontal",N="vertical",x="all",R="start",z="move",q="end",m="cancel",n="ontouchstart"in window,w="TouchSwipe";g.fn.swipe=function(c){var b=g(this),f=b.data(w);if(f&&"string"===typeof c){if(f[c])return f[c].apply(this,Array.prototype.slice.call(arguments,1));g.error("Method "+c+" does not exist on jQuery.swipe")}else if(!f&&("object"===typeof c||!c))return P.apply(this,arguments);return b};g.fn.swipe.defaults={fingers:1,threshold:75, maxTimeThreshold:null,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,click:null,triggerOnTouchEnd:!0,allowPageScroll:"auto",fallbackToMouseEvents:!0};g.fn.swipe.phases={PHASE_START:R,PHASE_MOVE:z,PHASE_END:q,PHASE_CANCEL:m};g.fn.swipe.directions={LEFT:v,RIGHT:A,UP:B,DOWN:C};g.fn.swipe.pageScroll={NONE:G,HORIZONTAL:M,VERTICAL:N,AUTO:T};g.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,ALL:x}})(jQuery);

/*
 *  jQuery carouFredSel 6.2.1
 *  Demo's and documentation:
 *  caroufredsel.dev7studios.com
 *
 *  Copyright (c) 2013 Fred Heusschen
 *  www.frebsite.nl
 *
 *  Dual licensed under the MIT and GPL licenses.
 *  http://en.wikipedia.org/wiki/MIT_License
 *  http://en.wikipedia.org/wiki/GNU_General_Public_License
 */

;(function($){function sc_setScroll(a,b,c){return"transition"==c.transition&&"swing"==b&&(b="ease"),{anims:[],duration:a,orgDuration:a,easing:b,startTime:getTime()}}function sc_startScroll(a,b){for(var c=0,d=a.anims.length;d>c;c++){var e=a.anims[c];e&&e[0][b.transition](e[1],a.duration,a.easing,e[2])}}function sc_stopScroll(a,b){is_boolean(b)||(b=!0),is_object(a.pre)&&sc_stopScroll(a.pre,b);for(var c=0,d=a.anims.length;d>c;c++){var e=a.anims[c];e[0].stop(!0),b&&(e[0].css(e[1]),is_function(e[2])&&e[2]())}is_object(a.post)&&sc_stopScroll(a.post,b)}function sc_afterScroll(a,b,c){switch(b&&b.remove(),c.fx){case"fade":case"crossfade":case"cover-fade":case"uncover-fade":a.css("opacity",1),a.css("filter","")}}function sc_fireCallbacks(a,b,c,d,e){if(b[c]&&b[c].call(a,d),e[c].length)for(var f=0,g=e[c].length;g>f;f++)e[c][f].call(a,d);return[]}function sc_fireQueue(a,b,c){return b.length&&(a.trigger(cf_e(b[0][0],c),b[0][1]),b.shift()),b}function sc_hideHiddenItems(a){a.each(function(){var a=$(this);a.data("_cfs_isHidden",a.is(":hidden")).hide()})}function sc_showHiddenItems(a){a&&a.each(function(){var a=$(this);a.data("_cfs_isHidden")||a.show()})}function sc_clearTimers(a){return a.auto&&clearTimeout(a.auto),a.progress&&clearInterval(a.progress),a}function sc_mapCallbackArguments(a,b,c,d,e,f,g){return{width:g.width,height:g.height,items:{old:a,skipped:b,visible:c},scroll:{items:d,direction:e,duration:f}}}function sc_getDuration(a,b,c,d){var e=a.duration;return"none"==a.fx?0:("auto"==e?e=b.scroll.duration/b.scroll.items*c:10>e&&(e=d/e),1>e?0:("fade"==a.fx&&(e/=2),Math.round(e)))}function nv_showNavi(a,b,c){var d=is_number(a.items.minimum)?a.items.minimum:a.items.visible+1;if("show"==b||"hide"==b)var e=b;else if(d>b){debug(c,"Not enough items ("+b+" total, "+d+" needed): Hiding navigation.");var e="hide"}else var e="show";var f="show"==e?"removeClass":"addClass",g=cf_c("hidden",c);a.auto.button&&a.auto.button[e]()[f](g),a.prev.button&&a.prev.button[e]()[f](g),a.next.button&&a.next.button[e]()[f](g),a.pagination.container&&a.pagination.container[e]()[f](g)}function nv_enableNavi(a,b,c){if(!a.circular&&!a.infinite){var d="removeClass"==b||"addClass"==b?b:!1,e=cf_c("disabled",c);if(a.auto.button&&d&&a.auto.button[d](e),a.prev.button){var f=d||0==b?"addClass":"removeClass";a.prev.button[f](e)}if(a.next.button){var f=d||b==a.items.visible?"addClass":"removeClass";a.next.button[f](e)}}}function go_getObject(a,b){return is_function(b)?b=b.call(a):is_undefined(b)&&(b={}),b}function go_getItemsObject(a,b){return b=go_getObject(a,b),is_number(b)?b={visible:b}:"variable"==b?b={visible:b,width:b,height:b}:is_object(b)||(b={}),b}function go_getScrollObject(a,b){return b=go_getObject(a,b),is_number(b)?b=50>=b?{items:b}:{duration:b}:is_string(b)?b={easing:b}:is_object(b)||(b={}),b}function go_getNaviObject(a,b){if(b=go_getObject(a,b),is_string(b)){var c=cf_getKeyCode(b);b=-1==c?$(b):c}return b}function go_getAutoObject(a,b){return b=go_getNaviObject(a,b),is_jquery(b)?b={button:b}:is_boolean(b)?b={play:b}:is_number(b)&&(b={timeoutDuration:b}),b.progress&&(is_string(b.progress)||is_jquery(b.progress))&&(b.progress={bar:b.progress}),b}function go_complementAutoObject(a,b){return is_function(b.button)&&(b.button=b.button.call(a)),is_string(b.button)&&(b.button=$(b.button)),is_boolean(b.play)||(b.play=!0),is_number(b.delay)||(b.delay=0),is_undefined(b.pauseOnEvent)&&(b.pauseOnEvent=!0),is_boolean(b.pauseOnResize)||(b.pauseOnResize=!0),is_number(b.timeoutDuration)||(b.timeoutDuration=10>b.duration?2500:5*b.duration),b.progress&&(is_function(b.progress.bar)&&(b.progress.bar=b.progress.bar.call(a)),is_string(b.progress.bar)&&(b.progress.bar=$(b.progress.bar)),b.progress.bar?(is_function(b.progress.updater)||(b.progress.updater=$.fn.carouFredSel.progressbarUpdater),is_number(b.progress.interval)||(b.progress.interval=50)):b.progress=!1),b}function go_getPrevNextObject(a,b){return b=go_getNaviObject(a,b),is_jquery(b)?b={button:b}:is_number(b)&&(b={key:b}),b}function go_complementPrevNextObject(a,b){return is_function(b.button)&&(b.button=b.button.call(a)),is_string(b.button)&&(b.button=$(b.button)),is_string(b.key)&&(b.key=cf_getKeyCode(b.key)),b}function go_getPaginationObject(a,b){return b=go_getNaviObject(a,b),is_jquery(b)?b={container:b}:is_boolean(b)&&(b={keys:b}),b}function go_complementPaginationObject(a,b){return is_function(b.container)&&(b.container=b.container.call(a)),is_string(b.container)&&(b.container=$(b.container)),is_number(b.items)||(b.items=!1),is_boolean(b.keys)||(b.keys=!1),is_function(b.anchorBuilder)||is_false(b.anchorBuilder)||(b.anchorBuilder=$.fn.carouFredSel.pageAnchorBuilder),is_number(b.deviation)||(b.deviation=0),b}function go_getSwipeObject(a,b){return is_function(b)&&(b=b.call(a)),is_undefined(b)&&(b={onTouch:!1}),is_true(b)?b={onTouch:b}:is_number(b)&&(b={items:b}),b}function go_complementSwipeObject(a,b){return is_boolean(b.onTouch)||(b.onTouch=!0),is_boolean(b.onMouse)||(b.onMouse=!1),is_object(b.options)||(b.options={}),is_boolean(b.options.triggerOnTouchEnd)||(b.options.triggerOnTouchEnd=!1),b}function go_getMousewheelObject(a,b){return is_function(b)&&(b=b.call(a)),is_true(b)?b={}:is_number(b)?b={items:b}:is_undefined(b)&&(b=!1),b}function go_complementMousewheelObject(a,b){return b}function gn_getItemIndex(a,b,c,d,e){if(is_string(a)&&(a=$(a,e)),is_object(a)&&(a=$(a,e)),is_jquery(a)?(a=e.children().index(a),is_boolean(c)||(c=!1)):is_boolean(c)||(c=!0),is_number(a)||(a=0),is_number(b)||(b=0),c&&(a+=d.first),a+=b,d.total>0){for(;a>=d.total;)a-=d.total;for(;0>a;)a+=d.total}return a}function gn_getVisibleItemsPrev(a,b,c){for(var d=0,e=0,f=c;f>=0;f--){var g=a.eq(f);if(d+=g.is(":visible")?g[b.d.outerWidth](!0):0,d>b.maxDimension)return e;0==f&&(f=a.length),e++}}function gn_getVisibleItemsPrevFilter(a,b,c){return gn_getItemsPrevFilter(a,b.items.filter,b.items.visibleConf.org,c)}function gn_getScrollItemsPrevFilter(a,b,c,d){return gn_getItemsPrevFilter(a,b.items.filter,d,c)}function gn_getItemsPrevFilter(a,b,c,d){for(var e=0,f=0,g=d,h=a.length;g>=0;g--){if(f++,f==h)return f;var i=a.eq(g);if(i.is(b)&&(e++,e==c))return f;0==g&&(g=h)}}function gn_getVisibleOrg(a,b){return b.items.visibleConf.org||a.children().slice(0,b.items.visible).filter(b.items.filter).length}function gn_getVisibleItemsNext(a,b,c){for(var d=0,e=0,f=c,g=a.length-1;g>=f;f++){var h=a.eq(f);if(d+=h.is(":visible")?h[b.d.outerWidth](!0):0,d>b.maxDimension)return e;if(e++,e==g+1)return e;f==g&&(f=-1)}}function gn_getVisibleItemsNextTestCircular(a,b,c,d){var e=gn_getVisibleItemsNext(a,b,c);return b.circular||c+e>d&&(e=d-c),e}function gn_getVisibleItemsNextFilter(a,b,c){return gn_getItemsNextFilter(a,b.items.filter,b.items.visibleConf.org,c,b.circular)}function gn_getScrollItemsNextFilter(a,b,c,d){return gn_getItemsNextFilter(a,b.items.filter,d+1,c,b.circular)-1}function gn_getItemsNextFilter(a,b,c,d){for(var f=0,g=0,h=d,i=a.length-1;i>=h;h++){if(g++,g>=i)return g;var j=a.eq(h);if(j.is(b)&&(f++,f==c))return g;h==i&&(h=-1)}}function gi_getCurrentItems(a,b){return a.slice(0,b.items.visible)}function gi_getOldItemsPrev(a,b,c){return a.slice(c,b.items.visibleConf.old+c)}function gi_getNewItemsPrev(a,b){return a.slice(0,b.items.visible)}function gi_getOldItemsNext(a,b){return a.slice(0,b.items.visibleConf.old)}function gi_getNewItemsNext(a,b,c){return a.slice(c,b.items.visible+c)}function sz_storeMargin(a,b,c){b.usePadding&&(is_string(c)||(c="_cfs_origCssMargin"),a.each(function(){var a=$(this),d=parseInt(a.css(b.d.marginRight),10);is_number(d)||(d=0),a.data(c,d)}))}function sz_resetMargin(a,b,c){if(b.usePadding){var d=is_boolean(c)?c:!1;is_number(c)||(c=0),sz_storeMargin(a,b,"_cfs_tempCssMargin"),a.each(function(){var a=$(this);a.css(b.d.marginRight,d?a.data("_cfs_tempCssMargin"):c+a.data("_cfs_origCssMargin"))})}}function sz_storeOrigCss(a){a.each(function(){var a=$(this);a.data("_cfs_origCss",a.attr("style")||"")})}function sz_restoreOrigCss(a){a.each(function(){var a=$(this);a.attr("style",a.data("_cfs_origCss")||"")})}function sz_setResponsiveSizes(a,b){var d=(a.items.visible,a.items[a.d.width]),e=a[a.d.height],f=is_percentage(e);b.each(function(){var b=$(this),c=d-ms_getPaddingBorderMargin(b,a,"Width");b[a.d.width](c),f&&b[a.d.height](ms_getPercentage(c,e))})}function sz_setSizes(a,b){var c=a.parent(),d=a.children(),e=gi_getCurrentItems(d,b),f=cf_mapWrapperSizes(ms_getSizes(e,b,!0),b,!1);if(c.css(f),b.usePadding){var g=b.padding,h=g[b.d[1]];b.align&&0>h&&(h=0);var i=e.last();i.css(b.d.marginRight,i.data("_cfs_origCssMargin")+h),a.css(b.d.top,g[b.d[0]]),a.css(b.d.left,g[b.d[3]])}return a.css(b.d.width,f[b.d.width]+2*ms_getTotalSize(d,b,"width")),a.css(b.d.height,ms_getLargestSize(d,b,"height")),f}function ms_getSizes(a,b,c){return[ms_getTotalSize(a,b,"width",c),ms_getLargestSize(a,b,"height",c)]}function ms_getLargestSize(a,b,c,d){return is_boolean(d)||(d=!1),is_number(b[b.d[c]])&&d?b[b.d[c]]:is_number(b.items[b.d[c]])?b.items[b.d[c]]:(c=c.toLowerCase().indexOf("width")>-1?"outerWidth":"outerHeight",ms_getTrueLargestSize(a,b,c))}function ms_getTrueLargestSize(a,b,c){for(var d=0,e=0,f=a.length;f>e;e++){var g=a.eq(e),h=g.is(":visible")?g[b.d[c]](!0):0;h>d&&(d=h)}return d}function ms_getTotalSize(a,b,c,d){if(is_boolean(d)||(d=!1),is_number(b[b.d[c]])&&d)return b[b.d[c]];if(is_number(b.items[b.d[c]]))return b.items[b.d[c]]*a.length;for(var e=c.toLowerCase().indexOf("width")>-1?"outerWidth":"outerHeight",f=0,g=0,h=a.length;h>g;g++){var i=a.eq(g);f+=i.is(":visible")?i[b.d[e]](!0):0}return f}function ms_getParentSize(a,b,c){var d=a.is(":visible");d&&a.hide();var e=a.parent()[b.d[c]]();return d&&a.show(),e}function ms_getMaxDimension(a,b){return is_number(a[a.d.width])?a[a.d.width]:b}function ms_hasVariableSizes(a,b,c){for(var d=!1,e=!1,f=0,g=a.length;g>f;f++){var h=a.eq(f),i=h.is(":visible")?h[b.d[c]](!0):0;d===!1?d=i:d!=i&&(e=!0),0==d&&(e=!0)}return e}function ms_getPaddingBorderMargin(a,b,c){return a[b.d["outer"+c]](!0)-a[b.d[c.toLowerCase()]]()}function ms_getPercentage(a,b){if(is_percentage(b)){if(b=parseInt(b.slice(0,-1),10),!is_number(b))return a;a*=b/100}return a}function cf_e(a,b,c,d,e){return is_boolean(c)||(c=!0),is_boolean(d)||(d=!0),is_boolean(e)||(e=!1),c&&(a=b.events.prefix+a),d&&(a=a+"."+b.events.namespace),d&&e&&(a+=b.serialNumber),a}function cf_c(a,b){return is_string(b.classnames[a])?b.classnames[a]:a}function cf_mapWrapperSizes(a,b,c){is_boolean(c)||(c=!0);var d=b.usePadding&&c?b.padding:[0,0,0,0],e={};return e[b.d.width]=a[0]+d[1]+d[3],e[b.d.height]=a[1]+d[0]+d[2],e}function cf_sortParams(a,b){for(var c=[],d=0,e=a.length;e>d;d++)for(var f=0,g=b.length;g>f;f++)if(b[f].indexOf(typeof a[d])>-1&&is_undefined(c[f])){c[f]=a[d];break}return c}function cf_getPadding(a){if(is_undefined(a))return[0,0,0,0];if(is_number(a))return[a,a,a,a];if(is_string(a)&&(a=a.split("px").join("").split("em").join("").split(" ")),!is_array(a))return[0,0,0,0];for(var b=0;4>b;b++)a[b]=parseInt(a[b],10);switch(a.length){case 0:return[0,0,0,0];case 1:return[a[0],a[0],a[0],a[0]];case 2:return[a[0],a[1],a[0],a[1]];case 3:return[a[0],a[1],a[2],a[1]];default:return[a[0],a[1],a[2],a[3]]}}function cf_getAlignPadding(a,b){var c=is_number(b[b.d.width])?Math.ceil(b[b.d.width]-ms_getTotalSize(a,b,"width")):0;switch(b.align){case"left":return[0,c];case"right":return[c,0];case"center":default:return[Math.ceil(c/2),Math.floor(c/2)]}}function cf_getDimensions(a){for(var b=[["width","innerWidth","outerWidth","height","innerHeight","outerHeight","left","top","marginRight",0,1,2,3],["height","innerHeight","outerHeight","width","innerWidth","outerWidth","top","left","marginBottom",3,2,1,0]],c=b[0].length,d="right"==a.direction||"left"==a.direction?0:1,e={},f=0;c>f;f++)e[b[0][f]]=b[d][f];return e}function cf_getAdjust(a,b,c,d){var e=a;if(is_function(c))e=c.call(d,e);else if(is_string(c)){var f=c.split("+"),g=c.split("-");if(g.length>f.length)var h=!0,i=g[0],j=g[1];else var h=!1,i=f[0],j=f[1];switch(i){case"even":e=1==a%2?a-1:a;break;case"odd":e=0==a%2?a-1:a;break;default:e=a}j=parseInt(j,10),is_number(j)&&(h&&(j=-j),e+=j)}return(!is_number(e)||1>e)&&(e=1),e}function cf_getItemsAdjust(a,b,c,d){return cf_getItemAdjustMinMax(cf_getAdjust(a,b,c,d),b.items.visibleConf)}function cf_getItemAdjustMinMax(a,b){return is_number(b.min)&&b.min>a&&(a=b.min),is_number(b.max)&&a>b.max&&(a=b.max),1>a&&(a=1),a}function cf_getSynchArr(a){is_array(a)||(a=[[a]]),is_array(a[0])||(a=[a]);for(var b=0,c=a.length;c>b;b++)is_string(a[b][0])&&(a[b][0]=$(a[b][0])),is_boolean(a[b][1])||(a[b][1]=!0),is_boolean(a[b][2])||(a[b][2]=!0),is_number(a[b][3])||(a[b][3]=0);return a}function cf_getKeyCode(a){return"right"==a?39:"left"==a?37:"up"==a?38:"down"==a?40:-1}function cf_setCookie(a,b,c){if(a){var d=b.triggerHandler(cf_e("currentPosition",c));$.fn.carouFredSel.cookie.set(a,d)}}function cf_getCookie(a){var b=$.fn.carouFredSel.cookie.get(a);return""==b?0:b}function in_mapCss(a,b){for(var c={},d=0,e=b.length;e>d;d++)c[b[d]]=a.css(b[d]);return c}function in_complementItems(a,b,c,d){return is_object(a.visibleConf)||(a.visibleConf={}),is_object(a.sizesConf)||(a.sizesConf={}),0==a.start&&is_number(d)&&(a.start=d),is_object(a.visible)?(a.visibleConf.min=a.visible.min,a.visibleConf.max=a.visible.max,a.visible=!1):is_string(a.visible)?("variable"==a.visible?a.visibleConf.variable=!0:a.visibleConf.adjust=a.visible,a.visible=!1):is_function(a.visible)&&(a.visibleConf.adjust=a.visible,a.visible=!1),is_string(a.filter)||(a.filter=c.filter(":hidden").length>0?":visible":"*"),a[b.d.width]||(b.responsive?(debug(!0,"Set a "+b.d.width+" for the items!"),a[b.d.width]=ms_getTrueLargestSize(c,b,"outerWidth")):a[b.d.width]=ms_hasVariableSizes(c,b,"outerWidth")?"variable":c[b.d.outerWidth](!0)),a[b.d.height]||(a[b.d.height]=ms_hasVariableSizes(c,b,"outerHeight")?"variable":c[b.d.outerHeight](!0)),a.sizesConf.width=a.width,a.sizesConf.height=a.height,a}function in_complementVisibleItems(a,b){return"variable"==a.items[a.d.width]&&(a.items.visibleConf.variable=!0),a.items.visibleConf.variable||(is_number(a[a.d.width])?a.items.visible=Math.floor(a[a.d.width]/a.items[a.d.width]):(a.items.visible=Math.floor(b/a.items[a.d.width]),a[a.d.width]=a.items.visible*a.items[a.d.width],a.items.visibleConf.adjust||(a.align=!1)),("Infinity"==a.items.visible||1>a.items.visible)&&(debug(!0,'Not a valid number of visible items: Set to "variable".'),a.items.visibleConf.variable=!0)),a}function in_complementPrimarySize(a,b,c){return"auto"==a&&(a=ms_getTrueLargestSize(c,b,"outerWidth")),a}function in_complementSecondarySize(a,b,c){return"auto"==a&&(a=ms_getTrueLargestSize(c,b,"outerHeight")),a||(a=b.items[b.d.height]),a}function in_getAlignPadding(a,b){var c=cf_getAlignPadding(gi_getCurrentItems(b,a),a);return a.padding[a.d[1]]=c[1],a.padding[a.d[3]]=c[0],a}function in_getResponsiveValues(a,b){var d=cf_getItemAdjustMinMax(Math.ceil(a[a.d.width]/a.items[a.d.width]),a.items.visibleConf);d>b.length&&(d=b.length);var e=Math.floor(a[a.d.width]/d);return a.items.visible=d,a.items[a.d.width]=e,a[a.d.width]=d*e,a}function bt_pauseOnHoverConfig(a){if(is_string(a))var b=a.indexOf("immediate")>-1?!0:!1,c=a.indexOf("resume")>-1?!0:!1;else var b=c=!1;return[b,c]}function bt_mousesheelNumber(a){return is_number(a)?a:null}function is_null(a){return null===a}function is_undefined(a){return is_null(a)||a===void 0||""===a||"undefined"===a}function is_array(a){return a instanceof Array}function is_jquery(a){return a instanceof jQuery}function is_object(a){return(a instanceof Object||"object"==typeof a)&&!is_null(a)&&!is_jquery(a)&&!is_array(a)&&!is_function(a)}function is_number(a){return(a instanceof Number||"number"==typeof a)&&!isNaN(a)}function is_string(a){return(a instanceof String||"string"==typeof a)&&!is_undefined(a)&&!is_true(a)&&!is_false(a)}function is_function(a){return a instanceof Function||"function"==typeof a}function is_boolean(a){return a instanceof Boolean||"boolean"==typeof a||is_true(a)||is_false(a)}function is_true(a){return a===!0||"true"===a}function is_false(a){return a===!1||"false"===a}function is_percentage(a){return is_string(a)&&"%"==a.slice(-1)}function getTime(){return(new Date).getTime()}function deprecated(a,b){debug(!0,a+" is DEPRECATED, support for it will be removed. Use "+b+" instead.")}function debug(a,b){if(!is_undefined(window.console)&&!is_undefined(window.console.log)){if(is_object(a)){var c=" ("+a.selector+")";a=a.debug}else var c="";if(!a)return!1;b=is_string(b)?"carouFredSel"+c+": "+b:["carouFredSel"+c+":",b],window.console.log(b)}return!1}$.fn.carouFredSel||($.fn.caroufredsel=$.fn.carouFredSel=function(options,configs){if(0==this.length)return debug(!0,'No element found for "'+this.selector+'".'),this;if(this.length>1)return this.each(function(){$(this).carouFredSel(options,configs)});var $cfs=this,$tt0=this[0],starting_position=!1;$cfs.data("_cfs_isCarousel")&&(starting_position=$cfs.triggerHandler("_cfs_triggerEvent","currentPosition"),$cfs.trigger("_cfs_triggerEvent",["destroy",!0]));var FN={};FN._init=function(a,b,c){a=go_getObject($tt0,a),a.items=go_getItemsObject($tt0,a.items),a.scroll=go_getScrollObject($tt0,a.scroll),a.auto=go_getAutoObject($tt0,a.auto),a.prev=go_getPrevNextObject($tt0,a.prev),a.next=go_getPrevNextObject($tt0,a.next),a.pagination=go_getPaginationObject($tt0,a.pagination),a.swipe=go_getSwipeObject($tt0,a.swipe),a.mousewheel=go_getMousewheelObject($tt0,a.mousewheel),b&&(opts_orig=$.extend(!0,{},$.fn.carouFredSel.defaults,a)),opts=$.extend(!0,{},$.fn.carouFredSel.defaults,a),opts.d=cf_getDimensions(opts),crsl.direction="up"==opts.direction||"left"==opts.direction?"next":"prev";var d=$cfs.children(),e=ms_getParentSize($wrp,opts,"width");if(is_true(opts.cookie)&&(opts.cookie="caroufredsel_cookie_"+conf.serialNumber),opts.maxDimension=ms_getMaxDimension(opts,e),opts.items=in_complementItems(opts.items,opts,d,c),opts[opts.d.width]=in_complementPrimarySize(opts[opts.d.width],opts,d),opts[opts.d.height]=in_complementSecondarySize(opts[opts.d.height],opts,d),opts.responsive&&(is_percentage(opts[opts.d.width])||(opts[opts.d.width]="100%")),is_percentage(opts[opts.d.width])&&(crsl.upDateOnWindowResize=!0,crsl.primarySizePercentage=opts[opts.d.width],opts[opts.d.width]=ms_getPercentage(e,crsl.primarySizePercentage),opts.items.visible||(opts.items.visibleConf.variable=!0)),opts.responsive?(opts.usePadding=!1,opts.padding=[0,0,0,0],opts.align=!1,opts.items.visibleConf.variable=!1):(opts.items.visible||(opts=in_complementVisibleItems(opts,e)),opts[opts.d.width]||(!opts.items.visibleConf.variable&&is_number(opts.items[opts.d.width])&&"*"==opts.items.filter?(opts[opts.d.width]=opts.items.visible*opts.items[opts.d.width],opts.align=!1):opts[opts.d.width]="variable"),is_undefined(opts.align)&&(opts.align=is_number(opts[opts.d.width])?"center":!1),opts.items.visibleConf.variable&&(opts.items.visible=gn_getVisibleItemsNext(d,opts,0))),"*"==opts.items.filter||opts.items.visibleConf.variable||(opts.items.visibleConf.org=opts.items.visible,opts.items.visible=gn_getVisibleItemsNextFilter(d,opts,0)),opts.items.visible=cf_getItemsAdjust(opts.items.visible,opts,opts.items.visibleConf.adjust,$tt0),opts.items.visibleConf.old=opts.items.visible,opts.responsive)opts.items.visibleConf.min||(opts.items.visibleConf.min=opts.items.visible),opts.items.visibleConf.max||(opts.items.visibleConf.max=opts.items.visible),opts=in_getResponsiveValues(opts,d,e);else switch(opts.padding=cf_getPadding(opts.padding),"top"==opts.align?opts.align="left":"bottom"==opts.align&&(opts.align="right"),opts.align){case"center":case"left":case"right":"variable"!=opts[opts.d.width]&&(opts=in_getAlignPadding(opts,d),opts.usePadding=!0);break;default:opts.align=!1,opts.usePadding=0==opts.padding[0]&&0==opts.padding[1]&&0==opts.padding[2]&&0==opts.padding[3]?!1:!0}is_number(opts.scroll.duration)||(opts.scroll.duration=500),is_undefined(opts.scroll.items)&&(opts.scroll.items=opts.responsive||opts.items.visibleConf.variable||"*"!=opts.items.filter?"visible":opts.items.visible),opts.auto=$.extend(!0,{},opts.scroll,opts.auto),opts.prev=$.extend(!0,{},opts.scroll,opts.prev),opts.next=$.extend(!0,{},opts.scroll,opts.next),opts.pagination=$.extend(!0,{},opts.scroll,opts.pagination),opts.auto=go_complementAutoObject($tt0,opts.auto),opts.prev=go_complementPrevNextObject($tt0,opts.prev),opts.next=go_complementPrevNextObject($tt0,opts.next),opts.pagination=go_complementPaginationObject($tt0,opts.pagination),opts.swipe=go_complementSwipeObject($tt0,opts.swipe),opts.mousewheel=go_complementMousewheelObject($tt0,opts.mousewheel),opts.synchronise&&(opts.synchronise=cf_getSynchArr(opts.synchronise)),opts.auto.onPauseStart&&(opts.auto.onTimeoutStart=opts.auto.onPauseStart,deprecated("auto.onPauseStart","auto.onTimeoutStart")),opts.auto.onPausePause&&(opts.auto.onTimeoutPause=opts.auto.onPausePause,deprecated("auto.onPausePause","auto.onTimeoutPause")),opts.auto.onPauseEnd&&(opts.auto.onTimeoutEnd=opts.auto.onPauseEnd,deprecated("auto.onPauseEnd","auto.onTimeoutEnd")),opts.auto.pauseDuration&&(opts.auto.timeoutDuration=opts.auto.pauseDuration,deprecated("auto.pauseDuration","auto.timeoutDuration"))},FN._build=function(){$cfs.data("_cfs_isCarousel",!0);var a=$cfs.children(),b=in_mapCss($cfs,["textAlign","float","position","top","right","bottom","left","zIndex","width","height","marginTop","marginRight","marginBottom","marginLeft"]),c="relative";switch(b.position){case"absolute":case"fixed":c=b.position}"parent"==conf.wrapper?sz_storeOrigCss($wrp):$wrp.css(b),$wrp.css({overflow:"hidden",position:c}),sz_storeOrigCss($cfs),$cfs.data("_cfs_origCssZindex",b.zIndex),$cfs.css({textAlign:"left","float":"none",position:"absolute",top:0,right:"auto",bottom:"auto",left:0,marginTop:0,marginRight:0,marginBottom:0,marginLeft:0}),sz_storeMargin(a,opts),sz_storeOrigCss(a),opts.responsive&&sz_setResponsiveSizes(opts,a)},FN._bind_events=function(){FN._unbind_events(),$cfs.bind(cf_e("stop",conf),function(a,b){return a.stopPropagation(),crsl.isStopped||opts.auto.button&&opts.auto.button.addClass(cf_c("stopped",conf)),crsl.isStopped=!0,opts.auto.play&&(opts.auto.play=!1,$cfs.trigger(cf_e("pause",conf),b)),!0}),$cfs.bind(cf_e("finish",conf),function(a){return a.stopPropagation(),crsl.isScrolling&&sc_stopScroll(scrl),!0}),$cfs.bind(cf_e("pause",conf),function(a,b,c){if(a.stopPropagation(),tmrs=sc_clearTimers(tmrs),b&&crsl.isScrolling){scrl.isStopped=!0;var d=getTime()-scrl.startTime;scrl.duration-=d,scrl.pre&&(scrl.pre.duration-=d),scrl.post&&(scrl.post.duration-=d),sc_stopScroll(scrl,!1)}if(crsl.isPaused||crsl.isScrolling||c&&(tmrs.timePassed+=getTime()-tmrs.startTime),crsl.isPaused||opts.auto.button&&opts.auto.button.addClass(cf_c("paused",conf)),crsl.isPaused=!0,opts.auto.onTimeoutPause){var e=opts.auto.timeoutDuration-tmrs.timePassed,f=100-Math.ceil(100*e/opts.auto.timeoutDuration);opts.auto.onTimeoutPause.call($tt0,f,e)}return!0}),$cfs.bind(cf_e("play",conf),function(a,b,c,d){a.stopPropagation(),tmrs=sc_clearTimers(tmrs);var e=[b,c,d],f=["string","number","boolean"],g=cf_sortParams(e,f);if(b=g[0],c=g[1],d=g[2],"prev"!=b&&"next"!=b&&(b=crsl.direction),is_number(c)||(c=0),is_boolean(d)||(d=!1),d&&(crsl.isStopped=!1,opts.auto.play=!0),!opts.auto.play)return a.stopImmediatePropagation(),debug(conf,"Carousel stopped: Not scrolling.");crsl.isPaused&&opts.auto.button&&(opts.auto.button.removeClass(cf_c("stopped",conf)),opts.auto.button.removeClass(cf_c("paused",conf))),crsl.isPaused=!1,tmrs.startTime=getTime();var h=opts.auto.timeoutDuration+c;return dur2=h-tmrs.timePassed,perc=100-Math.ceil(100*dur2/h),opts.auto.progress&&(tmrs.progress=setInterval(function(){var a=getTime()-tmrs.startTime+tmrs.timePassed,b=Math.ceil(100*a/h);opts.auto.progress.updater.call(opts.auto.progress.bar[0],b)},opts.auto.progress.interval)),tmrs.auto=setTimeout(function(){opts.auto.progress&&opts.auto.progress.updater.call(opts.auto.progress.bar[0],100),opts.auto.onTimeoutEnd&&opts.auto.onTimeoutEnd.call($tt0,perc,dur2),crsl.isScrolling?$cfs.trigger(cf_e("play",conf),b):$cfs.trigger(cf_e(b,conf),opts.auto)},dur2),opts.auto.onTimeoutStart&&opts.auto.onTimeoutStart.call($tt0,perc,dur2),!0}),$cfs.bind(cf_e("resume",conf),function(a){return a.stopPropagation(),scrl.isStopped?(scrl.isStopped=!1,crsl.isPaused=!1,crsl.isScrolling=!0,scrl.startTime=getTime(),sc_startScroll(scrl,conf)):$cfs.trigger(cf_e("play",conf)),!0}),$cfs.bind(cf_e("prev",conf)+" "+cf_e("next",conf),function(a,b,c,d,e){if(a.stopPropagation(),crsl.isStopped||$cfs.is(":hidden"))return a.stopImmediatePropagation(),debug(conf,"Carousel stopped or hidden: Not scrolling.");var f=is_number(opts.items.minimum)?opts.items.minimum:opts.items.visible+1;if(f>itms.total)return a.stopImmediatePropagation(),debug(conf,"Not enough items ("+itms.total+" total, "+f+" needed): Not scrolling.");var g=[b,c,d,e],h=["object","number/string","function","boolean"],i=cf_sortParams(g,h);b=i[0],c=i[1],d=i[2],e=i[3];var j=a.type.slice(conf.events.prefix.length);if(is_object(b)||(b={}),is_function(d)&&(b.onAfter=d),is_boolean(e)&&(b.queue=e),b=$.extend(!0,{},opts[j],b),b.conditions&&!b.conditions.call($tt0,j))return a.stopImmediatePropagation(),debug(conf,'Callback "conditions" returned false.');if(!is_number(c)){if("*"!=opts.items.filter)c="visible";else for(var k=[c,b.items,opts[j].items],i=0,l=k.length;l>i;i++)if(is_number(k[i])||"page"==k[i]||"visible"==k[i]){c=k[i];break}switch(c){case"page":return a.stopImmediatePropagation(),$cfs.triggerHandler(cf_e(j+"Page",conf),[b,d]);case"visible":opts.items.visibleConf.variable||"*"!=opts.items.filter||(c=opts.items.visible)}}if(scrl.isStopped)return $cfs.trigger(cf_e("resume",conf)),$cfs.trigger(cf_e("queue",conf),[j,[b,c,d]]),a.stopImmediatePropagation(),debug(conf,"Carousel resumed scrolling.");if(b.duration>0&&crsl.isScrolling)return b.queue&&("last"==b.queue&&(queu=[]),("first"!=b.queue||0==queu.length)&&$cfs.trigger(cf_e("queue",conf),[j,[b,c,d]])),a.stopImmediatePropagation(),debug(conf,"Carousel currently scrolling.");if(tmrs.timePassed=0,$cfs.trigger(cf_e("slide_"+j,conf),[b,c]),opts.synchronise)for(var m=opts.synchronise,n=[b,c],o=0,l=m.length;l>o;o++){var p=j;m[o][2]||(p="prev"==p?"next":"prev"),m[o][1]||(n[0]=m[o][0].triggerHandler("_cfs_triggerEvent",["configuration",p])),n[1]=c+m[o][3],m[o][0].trigger("_cfs_triggerEvent",["slide_"+p,n])}return!0}),$cfs.bind(cf_e("slide_prev",conf),function(a,b,c){a.stopPropagation();var d=$cfs.children();if(!opts.circular&&0==itms.first)return opts.infinite&&$cfs.trigger(cf_e("next",conf),itms.total-1),a.stopImmediatePropagation();if(sz_resetMargin(d,opts),!is_number(c)){if(opts.items.visibleConf.variable)c=gn_getVisibleItemsPrev(d,opts,itms.total-1);else if("*"!=opts.items.filter){var e=is_number(b.items)?b.items:gn_getVisibleOrg($cfs,opts);c=gn_getScrollItemsPrevFilter(d,opts,itms.total-1,e)}else c=opts.items.visible;c=cf_getAdjust(c,opts,b.items,$tt0)}if(opts.circular||itms.total-c<itms.first&&(c=itms.total-itms.first),opts.items.visibleConf.old=opts.items.visible,opts.items.visibleConf.variable){var f=cf_getItemsAdjust(gn_getVisibleItemsNext(d,opts,itms.total-c),opts,opts.items.visibleConf.adjust,$tt0);f>=opts.items.visible+c&&itms.total>c&&(c++,f=cf_getItemsAdjust(gn_getVisibleItemsNext(d,opts,itms.total-c),opts,opts.items.visibleConf.adjust,$tt0)),opts.items.visible=f}else if("*"!=opts.items.filter){var f=gn_getVisibleItemsNextFilter(d,opts,itms.total-c);opts.items.visible=cf_getItemsAdjust(f,opts,opts.items.visibleConf.adjust,$tt0)}if(sz_resetMargin(d,opts,!0),0==c)return a.stopImmediatePropagation(),debug(conf,"0 items to scroll: Not scrolling.");for(debug(conf,"Scrolling "+c+" items backward."),itms.first+=c;itms.first>=itms.total;)itms.first-=itms.total;opts.circular||(0==itms.first&&b.onEnd&&b.onEnd.call($tt0,"prev"),opts.infinite||nv_enableNavi(opts,itms.first,conf)),$cfs.children().slice(itms.total-c,itms.total).prependTo($cfs),itms.total<opts.items.visible+c&&$cfs.children().slice(0,opts.items.visible+c-itms.total).clone(!0).appendTo($cfs);var d=$cfs.children(),g=gi_getOldItemsPrev(d,opts,c),h=gi_getNewItemsPrev(d,opts),i=d.eq(c-1),j=g.last(),k=h.last();sz_resetMargin(d,opts);var l=0,m=0;if(opts.align){var n=cf_getAlignPadding(h,opts);l=n[0],m=n[1]}var o=0>l?opts.padding[opts.d[3]]:0,p=!1,q=$();if(c>opts.items.visible&&(q=d.slice(opts.items.visibleConf.old,c),"directscroll"==b.fx)){var r=opts.items[opts.d.width];p=q,i=k,sc_hideHiddenItems(p),opts.items[opts.d.width]="variable"}var s=!1,t=ms_getTotalSize(d.slice(0,c),opts,"width"),u=cf_mapWrapperSizes(ms_getSizes(h,opts,!0),opts,!opts.usePadding),v=0,w={},x={},y={},z={},A={},B={},C={},D=sc_getDuration(b,opts,c,t);switch(b.fx){case"cover":case"cover-fade":v=ms_getTotalSize(d.slice(0,opts.items.visible),opts,"width")}p&&(opts.items[opts.d.width]=r),sz_resetMargin(d,opts,!0),m>=0&&sz_resetMargin(j,opts,opts.padding[opts.d[1]]),l>=0&&sz_resetMargin(i,opts,opts.padding[opts.d[3]]),opts.align&&(opts.padding[opts.d[1]]=m,opts.padding[opts.d[3]]=l),B[opts.d.left]=-(t-o),C[opts.d.left]=-(v-o),x[opts.d.left]=u[opts.d.width];var E=function(){},F=function(){},G=function(){},H=function(){},I=function(){},J=function(){},K=function(){},L=function(){},M=function(){},N=function(){},O=function(){};switch(b.fx){case"crossfade":case"cover":case"cover-fade":case"uncover":case"uncover-fade":s=$cfs.clone(!0).appendTo($wrp)}switch(b.fx){case"crossfade":case"uncover":case"uncover-fade":s.children().slice(0,c).remove(),s.children().slice(opts.items.visibleConf.old).remove();break;case"cover":case"cover-fade":s.children().slice(opts.items.visible).remove(),s.css(C)}if($cfs.css(B),scrl=sc_setScroll(D,b.easing,conf),w[opts.d.left]=opts.usePadding?opts.padding[opts.d[3]]:0,("variable"==opts[opts.d.width]||"variable"==opts[opts.d.height])&&(E=function(){$wrp.css(u)},F=function(){scrl.anims.push([$wrp,u])}),opts.usePadding){switch(k.not(i).length&&(y[opts.d.marginRight]=i.data("_cfs_origCssMargin"),0>l?i.css(y):(K=function(){i.css(y)},L=function(){scrl.anims.push([i,y])})),b.fx){case"cover":case"cover-fade":s.children().eq(c-1).css(y)}k.not(j).length&&(z[opts.d.marginRight]=j.data("_cfs_origCssMargin"),G=function(){j.css(z)},H=function(){scrl.anims.push([j,z])}),m>=0&&(A[opts.d.marginRight]=k.data("_cfs_origCssMargin")+opts.padding[opts.d[1]],I=function(){k.css(A)},J=function(){scrl.anims.push([k,A])})}O=function(){$cfs.css(w)};var P=opts.items.visible+c-itms.total;N=function(){if(P>0&&($cfs.children().slice(itms.total).remove(),g=$($cfs.children().slice(itms.total-(opts.items.visible-P)).get().concat($cfs.children().slice(0,P).get()))),sc_showHiddenItems(p),opts.usePadding){var a=$cfs.children().eq(opts.items.visible+c-1);a.css(opts.d.marginRight,a.data("_cfs_origCssMargin"))}};var Q=sc_mapCallbackArguments(g,q,h,c,"prev",D,u);switch(M=function(){sc_afterScroll($cfs,s,b),crsl.isScrolling=!1,clbk.onAfter=sc_fireCallbacks($tt0,b,"onAfter",Q,clbk),queu=sc_fireQueue($cfs,queu,conf),crsl.isPaused||$cfs.trigger(cf_e("play",conf))},crsl.isScrolling=!0,tmrs=sc_clearTimers(tmrs),clbk.onBefore=sc_fireCallbacks($tt0,b,"onBefore",Q,clbk),b.fx){case"none":$cfs.css(w),E(),G(),I(),K(),O(),N(),M();break;case"fade":scrl.anims.push([$cfs,{opacity:0},function(){E(),G(),I(),K(),O(),N(),scrl=sc_setScroll(D,b.easing,conf),scrl.anims.push([$cfs,{opacity:1},M]),sc_startScroll(scrl,conf)}]);break;case"crossfade":$cfs.css({opacity:0}),scrl.anims.push([s,{opacity:0}]),scrl.anims.push([$cfs,{opacity:1},M]),F(),G(),I(),K(),O(),N();break;case"cover":scrl.anims.push([s,w,function(){G(),I(),K(),O(),N(),M()}]),F();break;case"cover-fade":scrl.anims.push([$cfs,{opacity:0}]),scrl.anims.push([s,w,function(){G(),I(),K(),O(),N(),M()}]),F();break;case"uncover":scrl.anims.push([s,x,M]),F(),G(),I(),K(),O(),N();break;case"uncover-fade":$cfs.css({opacity:0}),scrl.anims.push([$cfs,{opacity:1}]),scrl.anims.push([s,x,M]),F(),G(),I(),K(),O(),N();break;default:scrl.anims.push([$cfs,w,function(){N(),M()}]),F(),H(),J(),L()}return sc_startScroll(scrl,conf),cf_setCookie(opts.cookie,$cfs,conf),$cfs.trigger(cf_e("updatePageStatus",conf),[!1,u]),!0
}),$cfs.bind(cf_e("slide_next",conf),function(a,b,c){a.stopPropagation();var d=$cfs.children();if(!opts.circular&&itms.first==opts.items.visible)return opts.infinite&&$cfs.trigger(cf_e("prev",conf),itms.total-1),a.stopImmediatePropagation();if(sz_resetMargin(d,opts),!is_number(c)){if("*"!=opts.items.filter){var e=is_number(b.items)?b.items:gn_getVisibleOrg($cfs,opts);c=gn_getScrollItemsNextFilter(d,opts,0,e)}else c=opts.items.visible;c=cf_getAdjust(c,opts,b.items,$tt0)}var f=0==itms.first?itms.total:itms.first;if(!opts.circular){if(opts.items.visibleConf.variable)var g=gn_getVisibleItemsNext(d,opts,c),e=gn_getVisibleItemsPrev(d,opts,f-1);else var g=opts.items.visible,e=opts.items.visible;c+g>f&&(c=f-e)}if(opts.items.visibleConf.old=opts.items.visible,opts.items.visibleConf.variable){for(var g=cf_getItemsAdjust(gn_getVisibleItemsNextTestCircular(d,opts,c,f),opts,opts.items.visibleConf.adjust,$tt0);opts.items.visible-c>=g&&itms.total>c;)c++,g=cf_getItemsAdjust(gn_getVisibleItemsNextTestCircular(d,opts,c,f),opts,opts.items.visibleConf.adjust,$tt0);opts.items.visible=g}else if("*"!=opts.items.filter){var g=gn_getVisibleItemsNextFilter(d,opts,c);opts.items.visible=cf_getItemsAdjust(g,opts,opts.items.visibleConf.adjust,$tt0)}if(sz_resetMargin(d,opts,!0),0==c)return a.stopImmediatePropagation(),debug(conf,"0 items to scroll: Not scrolling.");for(debug(conf,"Scrolling "+c+" items forward."),itms.first-=c;0>itms.first;)itms.first+=itms.total;opts.circular||(itms.first==opts.items.visible&&b.onEnd&&b.onEnd.call($tt0,"next"),opts.infinite||nv_enableNavi(opts,itms.first,conf)),itms.total<opts.items.visible+c&&$cfs.children().slice(0,opts.items.visible+c-itms.total).clone(!0).appendTo($cfs);var d=$cfs.children(),h=gi_getOldItemsNext(d,opts),i=gi_getNewItemsNext(d,opts,c),j=d.eq(c-1),k=h.last(),l=i.last();sz_resetMargin(d,opts);var m=0,n=0;if(opts.align){var o=cf_getAlignPadding(i,opts);m=o[0],n=o[1]}var p=!1,q=$();if(c>opts.items.visibleConf.old&&(q=d.slice(opts.items.visibleConf.old,c),"directscroll"==b.fx)){var r=opts.items[opts.d.width];p=q,j=k,sc_hideHiddenItems(p),opts.items[opts.d.width]="variable"}var s=!1,t=ms_getTotalSize(d.slice(0,c),opts,"width"),u=cf_mapWrapperSizes(ms_getSizes(i,opts,!0),opts,!opts.usePadding),v=0,w={},x={},y={},z={},A={},B=sc_getDuration(b,opts,c,t);switch(b.fx){case"uncover":case"uncover-fade":v=ms_getTotalSize(d.slice(0,opts.items.visibleConf.old),opts,"width")}p&&(opts.items[opts.d.width]=r),opts.align&&0>opts.padding[opts.d[1]]&&(opts.padding[opts.d[1]]=0),sz_resetMargin(d,opts,!0),sz_resetMargin(k,opts,opts.padding[opts.d[1]]),opts.align&&(opts.padding[opts.d[1]]=n,opts.padding[opts.d[3]]=m),A[opts.d.left]=opts.usePadding?opts.padding[opts.d[3]]:0;var C=function(){},D=function(){},E=function(){},F=function(){},G=function(){},H=function(){},I=function(){},J=function(){},K=function(){};switch(b.fx){case"crossfade":case"cover":case"cover-fade":case"uncover":case"uncover-fade":s=$cfs.clone(!0).appendTo($wrp),s.children().slice(opts.items.visibleConf.old).remove()}switch(b.fx){case"crossfade":case"cover":case"cover-fade":$cfs.css("zIndex",1),s.css("zIndex",0)}if(scrl=sc_setScroll(B,b.easing,conf),w[opts.d.left]=-t,x[opts.d.left]=-v,0>m&&(w[opts.d.left]+=m),("variable"==opts[opts.d.width]||"variable"==opts[opts.d.height])&&(C=function(){$wrp.css(u)},D=function(){scrl.anims.push([$wrp,u])}),opts.usePadding){var L=l.data("_cfs_origCssMargin");n>=0&&(L+=opts.padding[opts.d[1]]),l.css(opts.d.marginRight,L),j.not(k).length&&(z[opts.d.marginRight]=k.data("_cfs_origCssMargin")),E=function(){k.css(z)},F=function(){scrl.anims.push([k,z])};var M=j.data("_cfs_origCssMargin");m>0&&(M+=opts.padding[opts.d[3]]),y[opts.d.marginRight]=M,G=function(){j.css(y)},H=function(){scrl.anims.push([j,y])}}K=function(){$cfs.css(A)};var N=opts.items.visible+c-itms.total;J=function(){N>0&&$cfs.children().slice(itms.total).remove();var a=$cfs.children().slice(0,c).appendTo($cfs).last();if(N>0&&(i=gi_getCurrentItems(d,opts)),sc_showHiddenItems(p),opts.usePadding){if(itms.total<opts.items.visible+c){var b=$cfs.children().eq(opts.items.visible-1);b.css(opts.d.marginRight,b.data("_cfs_origCssMargin")+opts.padding[opts.d[1]])}a.css(opts.d.marginRight,a.data("_cfs_origCssMargin"))}};var O=sc_mapCallbackArguments(h,q,i,c,"next",B,u);switch(I=function(){$cfs.css("zIndex",$cfs.data("_cfs_origCssZindex")),sc_afterScroll($cfs,s,b),crsl.isScrolling=!1,clbk.onAfter=sc_fireCallbacks($tt0,b,"onAfter",O,clbk),queu=sc_fireQueue($cfs,queu,conf),crsl.isPaused||$cfs.trigger(cf_e("play",conf))},crsl.isScrolling=!0,tmrs=sc_clearTimers(tmrs),clbk.onBefore=sc_fireCallbacks($tt0,b,"onBefore",O,clbk),b.fx){case"none":$cfs.css(w),C(),E(),G(),K(),J(),I();break;case"fade":scrl.anims.push([$cfs,{opacity:0},function(){C(),E(),G(),K(),J(),scrl=sc_setScroll(B,b.easing,conf),scrl.anims.push([$cfs,{opacity:1},I]),sc_startScroll(scrl,conf)}]);break;case"crossfade":$cfs.css({opacity:0}),scrl.anims.push([s,{opacity:0}]),scrl.anims.push([$cfs,{opacity:1},I]),D(),E(),G(),K(),J();break;case"cover":$cfs.css(opts.d.left,$wrp[opts.d.width]()),scrl.anims.push([$cfs,A,I]),D(),E(),G(),J();break;case"cover-fade":$cfs.css(opts.d.left,$wrp[opts.d.width]()),scrl.anims.push([s,{opacity:0}]),scrl.anims.push([$cfs,A,I]),D(),E(),G(),J();break;case"uncover":scrl.anims.push([s,x,I]),D(),E(),G(),K(),J();break;case"uncover-fade":$cfs.css({opacity:0}),scrl.anims.push([$cfs,{opacity:1}]),scrl.anims.push([s,x,I]),D(),E(),G(),K(),J();break;default:scrl.anims.push([$cfs,w,function(){K(),J(),I()}]),D(),F(),H()}return sc_startScroll(scrl,conf),cf_setCookie(opts.cookie,$cfs,conf),$cfs.trigger(cf_e("updatePageStatus",conf),[!1,u]),!0}),$cfs.bind(cf_e("slideTo",conf),function(a,b,c,d,e,f,g){a.stopPropagation();var h=[b,c,d,e,f,g],i=["string/number/object","number","boolean","object","string","function"],j=cf_sortParams(h,i);return e=j[3],f=j[4],g=j[5],b=gn_getItemIndex(j[0],j[1],j[2],itms,$cfs),0==b?!1:(is_object(e)||(e=!1),"prev"!=f&&"next"!=f&&(f=opts.circular?itms.total/2>=b?"next":"prev":0==itms.first||itms.first>b?"next":"prev"),"prev"==f&&(b=itms.total-b),$cfs.trigger(cf_e(f,conf),[e,b,g]),!0)}),$cfs.bind(cf_e("prevPage",conf),function(a,b,c){a.stopPropagation();var d=$cfs.triggerHandler(cf_e("currentPage",conf));return $cfs.triggerHandler(cf_e("slideToPage",conf),[d-1,b,"prev",c])}),$cfs.bind(cf_e("nextPage",conf),function(a,b,c){a.stopPropagation();var d=$cfs.triggerHandler(cf_e("currentPage",conf));return $cfs.triggerHandler(cf_e("slideToPage",conf),[d+1,b,"next",c])}),$cfs.bind(cf_e("slideToPage",conf),function(a,b,c,d,e){a.stopPropagation(),is_number(b)||(b=$cfs.triggerHandler(cf_e("currentPage",conf)));var f=opts.pagination.items||opts.items.visible,g=Math.ceil(itms.total/f)-1;return 0>b&&(b=g),b>g&&(b=0),$cfs.triggerHandler(cf_e("slideTo",conf),[b*f,0,!0,c,d,e])}),$cfs.bind(cf_e("jumpToStart",conf),function(a,b){if(a.stopPropagation(),b=b?gn_getItemIndex(b,0,!0,itms,$cfs):0,b+=itms.first,0!=b){if(itms.total>0)for(;b>itms.total;)b-=itms.total;$cfs.prepend($cfs.children().slice(b,itms.total))}return!0}),$cfs.bind(cf_e("synchronise",conf),function(a,b){if(a.stopPropagation(),b)b=cf_getSynchArr(b);else{if(!opts.synchronise)return debug(conf,"No carousel to synchronise.");b=opts.synchronise}for(var c=$cfs.triggerHandler(cf_e("currentPosition",conf)),d=!0,e=0,f=b.length;f>e;e++)b[e][0].triggerHandler(cf_e("slideTo",conf),[c,b[e][3],!0])||(d=!1);return d}),$cfs.bind(cf_e("queue",conf),function(a,b,c){return a.stopPropagation(),is_function(b)?b.call($tt0,queu):is_array(b)?queu=b:is_undefined(b)||queu.push([b,c]),queu}),$cfs.bind(cf_e("insertItem",conf),function(a,b,c,d,e){a.stopPropagation();var f=[b,c,d,e],g=["string/object","string/number/object","boolean","number"],h=cf_sortParams(f,g);if(b=h[0],c=h[1],d=h[2],e=h[3],is_object(b)&&!is_jquery(b)?b=$(b):is_string(b)&&(b=$(b)),!is_jquery(b)||0==b.length)return debug(conf,"Not a valid object.");is_undefined(c)&&(c="end"),sz_storeMargin(b,opts),sz_storeOrigCss(b);var i=c,j="before";"end"==c?d?(0==itms.first?(c=itms.total-1,j="after"):(c=itms.first,itms.first+=b.length),0>c&&(c=0)):(c=itms.total-1,j="after"):c=gn_getItemIndex(c,e,d,itms,$cfs);var k=$cfs.children().eq(c);return k.length?k[j](b):(debug(conf,"Correct insert-position not found! Appending item to the end."),$cfs.append(b)),"end"==i||d||itms.first>c&&(itms.first+=b.length),itms.total=$cfs.children().length,itms.first>=itms.total&&(itms.first-=itms.total),$cfs.trigger(cf_e("updateSizes",conf)),$cfs.trigger(cf_e("linkAnchors",conf)),!0}),$cfs.bind(cf_e("removeItem",conf),function(a,b,c,d){a.stopPropagation();var e=[b,c,d],f=["string/number/object","boolean","number"],g=cf_sortParams(e,f);if(b=g[0],c=g[1],d=g[2],b instanceof $&&b.length>1)return i=$(),b.each(function(){var e=$cfs.trigger(cf_e("removeItem",conf),[$(this),c,d]);e&&(i=i.add(e))}),i;if(is_undefined(b)||"end"==b)i=$cfs.children().last();else{b=gn_getItemIndex(b,d,c,itms,$cfs);var i=$cfs.children().eq(b);i.length&&itms.first>b&&(itms.first-=i.length)}return i&&i.length&&(i.detach(),itms.total=$cfs.children().length,$cfs.trigger(cf_e("updateSizes",conf))),i}),$cfs.bind(cf_e("onBefore",conf)+" "+cf_e("onAfter",conf),function(a,b){a.stopPropagation();var c=a.type.slice(conf.events.prefix.length);return is_array(b)&&(clbk[c]=b),is_function(b)&&clbk[c].push(b),clbk[c]}),$cfs.bind(cf_e("currentPosition",conf),function(a,b){if(a.stopPropagation(),0==itms.first)var c=0;else var c=itms.total-itms.first;return is_function(b)&&b.call($tt0,c),c}),$cfs.bind(cf_e("currentPage",conf),function(a,b){a.stopPropagation();var e,c=opts.pagination.items||opts.items.visible,d=Math.ceil(itms.total/c-1);return e=0==itms.first?0:itms.first<itms.total%c?0:itms.first!=c||opts.circular?Math.round((itms.total-itms.first)/c):d,0>e&&(e=0),e>d&&(e=d),is_function(b)&&b.call($tt0,e),e}),$cfs.bind(cf_e("currentVisible",conf),function(a,b){a.stopPropagation();var c=gi_getCurrentItems($cfs.children(),opts);return is_function(b)&&b.call($tt0,c),c}),$cfs.bind(cf_e("slice",conf),function(a,b,c,d){if(a.stopPropagation(),0==itms.total)return!1;var e=[b,c,d],f=["number","number","function"],g=cf_sortParams(e,f);if(b=is_number(g[0])?g[0]:0,c=is_number(g[1])?g[1]:itms.total,d=g[2],b+=itms.first,c+=itms.first,items.total>0){for(;b>itms.total;)b-=itms.total;for(;c>itms.total;)c-=itms.total;for(;0>b;)b+=itms.total;for(;0>c;)c+=itms.total}var i,h=$cfs.children();return i=c>b?h.slice(b,c):$(h.slice(b,itms.total).get().concat(h.slice(0,c).get())),is_function(d)&&d.call($tt0,i),i}),$cfs.bind(cf_e("isPaused",conf)+" "+cf_e("isStopped",conf)+" "+cf_e("isScrolling",conf),function(a,b){a.stopPropagation();var c=a.type.slice(conf.events.prefix.length),d=crsl[c];return is_function(b)&&b.call($tt0,d),d}),$cfs.bind(cf_e("configuration",conf),function(e,a,b,c){e.stopPropagation();var reInit=!1;if(is_function(a))a.call($tt0,opts);else if(is_object(a))opts_orig=$.extend(!0,{},opts_orig,a),b!==!1?reInit=!0:opts=$.extend(!0,{},opts,a);else if(!is_undefined(a))if(is_function(b)){var val=eval("opts."+a);is_undefined(val)&&(val=""),b.call($tt0,val)}else{if(is_undefined(b))return eval("opts."+a);"boolean"!=typeof c&&(c=!0),eval("opts_orig."+a+" = b"),c!==!1?reInit=!0:eval("opts."+a+" = b")}if(reInit){sz_resetMargin($cfs.children(),opts),FN._init(opts_orig),FN._bind_buttons();var sz=sz_setSizes($cfs,opts);$cfs.trigger(cf_e("updatePageStatus",conf),[!0,sz])}return opts}),$cfs.bind(cf_e("linkAnchors",conf),function(a,b,c){return a.stopPropagation(),is_undefined(b)?b=$("body"):is_string(b)&&(b=$(b)),is_jquery(b)&&0!=b.length?(is_string(c)||(c="a.caroufredsel"),b.find(c).each(function(){var a=this.hash||"";a.length>0&&-1!=$cfs.children().index($(a))&&$(this).unbind("click").click(function(b){b.preventDefault(),$cfs.trigger(cf_e("slideTo",conf),a)})}),!0):debug(conf,"Not a valid object.")}),$cfs.bind(cf_e("updatePageStatus",conf),function(a,b){if(a.stopPropagation(),opts.pagination.container){var d=opts.pagination.items||opts.items.visible,e=Math.ceil(itms.total/d);b&&(opts.pagination.anchorBuilder&&(opts.pagination.container.children().remove(),opts.pagination.container.each(function(){for(var a=0;e>a;a++){var b=$cfs.children().eq(gn_getItemIndex(a*d,0,!0,itms,$cfs));$(this).append(opts.pagination.anchorBuilder.call(b[0],a+1))}})),opts.pagination.container.each(function(){$(this).children().unbind(opts.pagination.event).each(function(a){$(this).bind(opts.pagination.event,function(b){b.preventDefault(),$cfs.trigger(cf_e("slideTo",conf),[a*d,-opts.pagination.deviation,!0,opts.pagination])})})}));var f=$cfs.triggerHandler(cf_e("currentPage",conf))+opts.pagination.deviation;return f>=e&&(f=0),0>f&&(f=e-1),opts.pagination.container.each(function(){$(this).children().removeClass(cf_c("selected",conf)).eq(f).addClass(cf_c("selected",conf))}),!0}}),$cfs.bind(cf_e("updateSizes",conf),function(){var b=opts.items.visible,c=$cfs.children(),d=ms_getParentSize($wrp,opts,"width");if(itms.total=c.length,crsl.primarySizePercentage?(opts.maxDimension=d,opts[opts.d.width]=ms_getPercentage(d,crsl.primarySizePercentage)):opts.maxDimension=ms_getMaxDimension(opts,d),opts.responsive?(opts.items.width=opts.items.sizesConf.width,opts.items.height=opts.items.sizesConf.height,opts=in_getResponsiveValues(opts,c,d),b=opts.items.visible,sz_setResponsiveSizes(opts,c)):opts.items.visibleConf.variable?b=gn_getVisibleItemsNext(c,opts,0):"*"!=opts.items.filter&&(b=gn_getVisibleItemsNextFilter(c,opts,0)),!opts.circular&&0!=itms.first&&b>itms.first){if(opts.items.visibleConf.variable)var e=gn_getVisibleItemsPrev(c,opts,itms.first)-itms.first;else if("*"!=opts.items.filter)var e=gn_getVisibleItemsPrevFilter(c,opts,itms.first)-itms.first;else var e=opts.items.visible-itms.first;debug(conf,"Preventing non-circular: sliding "+e+" items backward."),$cfs.trigger(cf_e("prev",conf),e)}opts.items.visible=cf_getItemsAdjust(b,opts,opts.items.visibleConf.adjust,$tt0),opts.items.visibleConf.old=opts.items.visible,opts=in_getAlignPadding(opts,c);var f=sz_setSizes($cfs,opts);return $cfs.trigger(cf_e("updatePageStatus",conf),[!0,f]),nv_showNavi(opts,itms.total,conf),nv_enableNavi(opts,itms.first,conf),f}),$cfs.bind(cf_e("destroy",conf),function(a,b){return a.stopPropagation(),tmrs=sc_clearTimers(tmrs),$cfs.data("_cfs_isCarousel",!1),$cfs.trigger(cf_e("finish",conf)),b&&$cfs.trigger(cf_e("jumpToStart",conf)),sz_restoreOrigCss($cfs.children()),sz_restoreOrigCss($cfs),FN._unbind_events(),FN._unbind_buttons(),"parent"==conf.wrapper?sz_restoreOrigCss($wrp):$wrp.replaceWith($cfs),!0}),$cfs.bind(cf_e("debug",conf),function(){return debug(conf,"Carousel width: "+opts.width),debug(conf,"Carousel height: "+opts.height),debug(conf,"Item widths: "+opts.items.width),debug(conf,"Item heights: "+opts.items.height),debug(conf,"Number of items visible: "+opts.items.visible),opts.auto.play&&debug(conf,"Number of items scrolled automatically: "+opts.auto.items),opts.prev.button&&debug(conf,"Number of items scrolled backward: "+opts.prev.items),opts.next.button&&debug(conf,"Number of items scrolled forward: "+opts.next.items),conf.debug}),$cfs.bind("_cfs_triggerEvent",function(a,b,c){return a.stopPropagation(),$cfs.triggerHandler(cf_e(b,conf),c)})},FN._unbind_events=function(){$cfs.unbind(cf_e("",conf)),$cfs.unbind(cf_e("",conf,!1)),$cfs.unbind("_cfs_triggerEvent")},FN._bind_buttons=function(){if(FN._unbind_buttons(),nv_showNavi(opts,itms.total,conf),nv_enableNavi(opts,itms.first,conf),opts.auto.pauseOnHover){var a=bt_pauseOnHoverConfig(opts.auto.pauseOnHover);$wrp.bind(cf_e("mouseenter",conf,!1),function(){$cfs.trigger(cf_e("pause",conf),a)}).bind(cf_e("mouseleave",conf,!1),function(){$cfs.trigger(cf_e("resume",conf))})}if(opts.auto.button&&opts.auto.button.bind(cf_e(opts.auto.event,conf,!1),function(a){a.preventDefault();var b=!1,c=null;crsl.isPaused?b="play":opts.auto.pauseOnEvent&&(b="pause",c=bt_pauseOnHoverConfig(opts.auto.pauseOnEvent)),b&&$cfs.trigger(cf_e(b,conf),c)}),opts.prev.button&&(opts.prev.button.bind(cf_e(opts.prev.event,conf,!1),function(a){a.preventDefault(),$cfs.trigger(cf_e("prev",conf))}),opts.prev.pauseOnHover)){var a=bt_pauseOnHoverConfig(opts.prev.pauseOnHover);opts.prev.button.bind(cf_e("mouseenter",conf,!1),function(){$cfs.trigger(cf_e("pause",conf),a)}).bind(cf_e("mouseleave",conf,!1),function(){$cfs.trigger(cf_e("resume",conf))})}if(opts.next.button&&(opts.next.button.bind(cf_e(opts.next.event,conf,!1),function(a){a.preventDefault(),$cfs.trigger(cf_e("next",conf))}),opts.next.pauseOnHover)){var a=bt_pauseOnHoverConfig(opts.next.pauseOnHover);opts.next.button.bind(cf_e("mouseenter",conf,!1),function(){$cfs.trigger(cf_e("pause",conf),a)}).bind(cf_e("mouseleave",conf,!1),function(){$cfs.trigger(cf_e("resume",conf))})}if(opts.pagination.container&&opts.pagination.pauseOnHover){var a=bt_pauseOnHoverConfig(opts.pagination.pauseOnHover);opts.pagination.container.bind(cf_e("mouseenter",conf,!1),function(){$cfs.trigger(cf_e("pause",conf),a)}).bind(cf_e("mouseleave",conf,!1),function(){$cfs.trigger(cf_e("resume",conf))})}if((opts.prev.key||opts.next.key)&&$(document).bind(cf_e("keyup",conf,!1,!0,!0),function(a){var b=a.keyCode;b==opts.next.key&&(a.preventDefault(),$cfs.trigger(cf_e("next",conf))),b==opts.prev.key&&(a.preventDefault(),$cfs.trigger(cf_e("prev",conf)))}),opts.pagination.keys&&$(document).bind(cf_e("keyup",conf,!1,!0,!0),function(a){var b=a.keyCode;b>=49&&58>b&&(b=(b-49)*opts.items.visible,itms.total>=b&&(a.preventDefault(),$cfs.trigger(cf_e("slideTo",conf),[b,0,!0,opts.pagination])))}),$.fn.swipe){var b="ontouchstart"in window;if(b&&opts.swipe.onTouch||!b&&opts.swipe.onMouse){var c=$.extend(!0,{},opts.prev,opts.swipe),d=$.extend(!0,{},opts.next,opts.swipe),e=function(){$cfs.trigger(cf_e("prev",conf),[c])},f=function(){$cfs.trigger(cf_e("next",conf),[d])};switch(opts.direction){case"up":case"down":opts.swipe.options.swipeUp=f,opts.swipe.options.swipeDown=e;break;default:opts.swipe.options.swipeLeft=f,opts.swipe.options.swipeRight=e}crsl.swipe&&$cfs.swipe("destroy"),$wrp.swipe(opts.swipe.options),$wrp.css("cursor","move"),crsl.swipe=!0}}if($.fn.mousewheel&&opts.mousewheel){var g=$.extend(!0,{},opts.prev,opts.mousewheel),h=$.extend(!0,{},opts.next,opts.mousewheel);crsl.mousewheel&&$wrp.unbind(cf_e("mousewheel",conf,!1)),$wrp.bind(cf_e("mousewheel",conf,!1),function(a,b){a.preventDefault(),b>0?$cfs.trigger(cf_e("prev",conf),[g]):$cfs.trigger(cf_e("next",conf),[h])}),crsl.mousewheel=!0}if(opts.auto.play&&$cfs.trigger(cf_e("play",conf),opts.auto.delay),crsl.upDateOnWindowResize){var i=function(){$cfs.trigger(cf_e("finish",conf)),opts.auto.pauseOnResize&&!crsl.isPaused&&$cfs.trigger(cf_e("play",conf)),sz_resetMargin($cfs.children(),opts),$cfs.trigger(cf_e("updateSizes",conf))},j=$(window),k=null;if($.debounce&&"debounce"==conf.onWindowResize)k=$.debounce(200,i);else if($.throttle&&"throttle"==conf.onWindowResize)k=$.throttle(300,i);else{var l=0,m=0;k=function(){var a=j.width(),b=j.height();(a!=l||b!=m)&&(i(),l=a,m=b)}}j.bind(cf_e("resize",conf,!1,!0,!0),k)}},FN._unbind_buttons=function(){var b=(cf_e("",conf),cf_e("",conf,!1));ns3=cf_e("",conf,!1,!0,!0),$(document).unbind(ns3),$(window).unbind(ns3),$wrp.unbind(b),opts.auto.button&&opts.auto.button.unbind(b),opts.prev.button&&opts.prev.button.unbind(b),opts.next.button&&opts.next.button.unbind(b),opts.pagination.container&&(opts.pagination.container.unbind(b),opts.pagination.anchorBuilder&&opts.pagination.container.children().remove()),crsl.swipe&&($cfs.swipe("destroy"),$wrp.css("cursor","default"),crsl.swipe=!1),crsl.mousewheel&&(crsl.mousewheel=!1),nv_showNavi(opts,"hide",conf),nv_enableNavi(opts,"removeClass",conf)},is_boolean(configs)&&(configs={debug:configs});var crsl={direction:"next",isPaused:!0,isScrolling:!1,isStopped:!1,mousewheel:!1,swipe:!1},itms={total:$cfs.children().length,first:0},tmrs={auto:null,progress:null,startTime:getTime(),timePassed:0},scrl={isStopped:!1,duration:0,startTime:0,easing:"",anims:[]},clbk={onBefore:[],onAfter:[]},queu=[],conf=$.extend(!0,{},$.fn.carouFredSel.configs,configs),opts={},opts_orig=$.extend(!0,{},options),$wrp="parent"==conf.wrapper?$cfs.parent():$cfs.wrap("<"+conf.wrapper.element+' class="'+conf.wrapper.classname+'" />').parent();if(conf.selector=$cfs.selector,conf.serialNumber=$.fn.carouFredSel.serialNumber++,conf.transition=conf.transition&&$.fn.transition?"transition":"animate",FN._init(opts_orig,!0,starting_position),FN._build(),FN._bind_events(),FN._bind_buttons(),is_array(opts.items.start))var start_arr=opts.items.start;else{var start_arr=[];0!=opts.items.start&&start_arr.push(opts.items.start)}if(opts.cookie&&start_arr.unshift(parseInt(cf_getCookie(opts.cookie),10)),start_arr.length>0)for(var a=0,l=start_arr.length;l>a;a++){var s=start_arr[a];if(0!=s){if(s===!0){if(s=window.location.hash,1>s.length)continue}else"random"===s&&(s=Math.floor(Math.random()*itms.total));if($cfs.triggerHandler(cf_e("slideTo",conf),[s,0,!0,{fx:"none"}]))break}}var siz=sz_setSizes($cfs,opts),itm=gi_getCurrentItems($cfs.children(),opts);return opts.onCreate&&opts.onCreate.call($tt0,{width:siz.width,height:siz.height,items:itm}),$cfs.trigger(cf_e("updatePageStatus",conf),[!0,siz]),$cfs.trigger(cf_e("linkAnchors",conf)),conf.debug&&$cfs.trigger(cf_e("debug",conf)),$cfs},$.fn.carouFredSel.serialNumber=1,$.fn.carouFredSel.defaults={synchronise:!1,infinite:!0,circular:!0,responsive:!1,direction:"left",items:{start:0},scroll:{easing:"swing",duration:500,pauseOnHover:!1,event:"click",queue:!1}},$.fn.carouFredSel.configs={debug:!1,transition:!1,onWindowResize:"throttle",events:{prefix:"",namespace:"cfs"},wrapper:{element:"div",classname:"caroufredsel_wrapper"},classnames:{}},$.fn.carouFredSel.pageAnchorBuilder=function(a){return'<a href="#"><span>'+a+"</span></a>"},$.fn.carouFredSel.progressbarUpdater=function(a){$(this).css("width",a+"%")},$.fn.carouFredSel.cookie={get:function(a){a+="=";for(var b=document.cookie.split(";"),c=0,d=b.length;d>c;c++){for(var e=b[c];" "==e.charAt(0);)e=e.slice(1);if(0==e.indexOf(a))return e.slice(a.length)}return 0},set:function(a,b,c){var d="";if(c){var e=new Date;e.setTime(e.getTime()+1e3*60*60*24*c),d="; expires="+e.toGMTString()}document.cookie=a+"="+b+d+"; path=/"},remove:function(a){$.fn.carouFredSel.cookie.set(a,"",-1)}},$.extend($.easing,{quadratic:function(a){var b=a*a;return a*(-b*a+4*b-6*a+4)},cubic:function(a){return a*(4*a*a-9*a+6)},elastic:function(a){var b=a*a;return a*(33*b*b-106*b*a+126*b-67*a+15)}}))})(jQuery);

/*
 * jQuery Backstretch
 * Version 1.2.8
 * http://srobbin.com/jquery-plugins/jquery-backstretch/
 *
 * Add a dynamically-resized background image to the page
 *
 * Copyright (c) 2012 Scott Robbin (srobbin.com)
 * Licensed under the MIT license
 * https://raw.github.com/srobbin/jquery-backstretch/master/LICENSE.txt
 *
*/
;(function(a){a.backstretch=function(p,b,l){function s(){if(p){var b;0==c.length?c=a("<div />").attr("id","backstretch").css({left:0,top:0,position:m?"fixed":"absolute",overflow:"hidden",zIndex:-999999,margin:0,padding:0,height:"100%",width:"100%"}):c.find("img").addClass("deleteable");b=a("<img />").css({position:"absolute",display:"none",margin:0,padding:0,border:"none",zIndex:-999999,maxWidth:"none"}).bind("load",function(d){var b=a(this),e;b.css({width:"auto",height:"auto"});e=this.width||a(d.target).width();d=this.height||a(d.target).height();n=e/d;q();b.fadeIn(g.speed,function(){c.find(".deleteable").remove();"function"==typeof l&&l()})}).appendTo(c);0==a("body #backstretch").length&&(0===a(window).scrollTop()&&window.scrollTo(0,0),a("body").append(c));c.data("settings",g);b.attr("src",p);a(window).unbind("resize.backstretch").bind("resize.backstretch",function(){"onorientationchange"in window&&window.pageYOffset===0&&window.scrollTo(0,1);q()})}}function q(){try{j={left:0,top:0},rootWidth=h=o.width(),rootHeight=r?window.innerHeight:o.height(),f=h/n,f>=rootHeight?(k=(f-rootHeight)/2,g.centeredY&&(j.top="-"+k+"px")):(f=rootHeight,h=f*n,k=(h-rootWidth)/2,g.centeredX&&(j.left="-"+k+"px")),c.css({width:rootWidth,height:rootHeight}).find("img:not(.deleteable)").css({width:h,height:f}).css(j)}catch(a){}}var t={centeredX:!0,centeredY:!0,speed:0},c=a("#backstretch"),g=c.data("settings")||t;c.data("settings");var o,m,r,n,h,f,k,j;b&&"object"==typeof b&&a.extend(g,b);b&&"function"==typeof b&&(l=b);a(document).ready(function(){var b=window,d=navigator.userAgent,c=navigator.platform,e=d.match(/AppleWebKit\/([0-9]+)/),e=!!e&&e[1],f=d.match(/Fennec\/([0-9]+)/),f=!!f&&f[1],g=d.match(/Opera Mobi\/([0-9]+)/),h=!!g&&g[1],i=d.match(/MSIE ([0-9]+)/),i=!!i&&i[1];o=(m=!((-1<c.indexOf("iPhone")||-1<c.indexOf("iPad")||-1<c.indexOf("iPod"))&&e&&534>e||b.operamini&&"[object OperaMini]"==={}.toString.call(b.operamini)||g&&7458>h||-1<d.indexOf("Android")&&e&&533>e||f&&6>f||"palmGetResource"in window&&e&&534>e||-1<d.indexOf("MeeGo")&&-1<d.indexOf("NokiaBrowser/8.5.0")||i&&6>=i))?a(window):a(document);r=m&&window.innerHeight;s()});return this}})(jQuery);

/*! Magnific Popup - v0.9.2 - 2013-07-05
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2013 Dmitry Semenov; */
;(function(e){var t,i,n,o,a,r,s,l="Close",c="BeforeClose",d="AfterClose",u="BeforeAppend",p="MarkupParse",f="Open",m="Change",g="mfp",v="."+g,h="mfp-ready",C="mfp-removing",y="mfp-prevent-close",w=function(){},b=!!window.jQuery,I=e(window),x=function(e,i){t.ev.on(g+e+v,i)},k=function(t,i,n,o){var a=document.createElement("div");return a.className="mfp-"+t,n&&(a.innerHTML=n),o?i&&i.appendChild(a):(a=e(a),i&&a.appendTo(i)),a},T=function(i,n){t.ev.triggerHandler(g+i,n),t.st.callbacks&&(i=i.charAt(0).toLowerCase()+i.slice(1),t.st.callbacks[i]&&t.st.callbacks[i].apply(t,e.isArray(n)?n:[n]))},E=function(){(t.st.focus?t.content.find(t.st.focus).eq(0):t.wrap).trigger("focus")},S=function(i){return i===s&&t.currTemplate.closeBtn||(t.currTemplate.closeBtn=e(t.st.closeMarkup.replace("%title%",t.st.tClose)),s=i),t.currTemplate.closeBtn},P=function(){e.magnificPopup.instance||(t=new w,t.init(),e.magnificPopup.instance=t)},_=function(i){if(!e(i).hasClass(y)){var n=t.st.closeOnContentClick,o=t.st.closeOnBgClick;if(n&&o)return!0;if(!t.content||e(i).hasClass("mfp-close")||t.preloader&&i===t.preloader[0])return!0;if(i===t.content[0]||e.contains(t.content[0],i)){if(n)return!0}else if(o)return!0;return!1}},O=function(){var e=document.createElement("p").style,t=["ms","O","Moz","Webkit"];if(void 0!==e.transition)return!0;for(;t.length;)if(t.pop()+"Transition"in e)return!0;return!1};w.prototype={constructor:w,init:function(){var i=navigator.appVersion;t.isIE7=-1!==i.indexOf("MSIE 7."),t.isIE8=-1!==i.indexOf("MSIE 8."),t.isLowIE=t.isIE7||t.isIE8,t.isAndroid=/android/gi.test(i),t.isIOS=/iphone|ipad|ipod/gi.test(i),t.supportsTransition=O(),t.probablyMobile=t.isAndroid||t.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),n=e(document.body),o=e(document),t.popupsCache={}},open:function(i){var n;if(i.isObj===!1){t.items=i.items.toArray(),t.index=0;var a,s=i.items;for(n=0;s.length>n;n++)if(a=s[n],a.parsed&&(a=a.el[0]),a===i.el[0]){t.index=n;break}}else t.items=e.isArray(i.items)?i.items:[i.items],t.index=i.index||0;if(t.isOpen)return t.updateItemHTML(),void 0;t.types=[],r="",t.ev=i.mainEl&&i.mainEl.length?i.mainEl.eq(0):o,i.key?(t.popupsCache[i.key]||(t.popupsCache[i.key]={}),t.currTemplate=t.popupsCache[i.key]):t.currTemplate={},t.st=e.extend(!0,{},e.magnificPopup.defaults,i),t.fixedContentPos="auto"===t.st.fixedContentPos?!t.probablyMobile:t.st.fixedContentPos,t.st.modal&&(t.st.closeOnContentClick=!1,t.st.closeOnBgClick=!1,t.st.showCloseBtn=!1,t.st.enableEscapeKey=!1),t.bgOverlay||(t.bgOverlay=k("bg").on("click"+v,function(){t.close()}),t.wrap=k("wrap").attr("tabindex",-1).on("click"+v,function(e){_(e.target)&&t.close()}),t.container=k("container",t.wrap)),t.contentContainer=k("content"),t.st.preloader&&(t.preloader=k("preloader",t.container,t.st.tLoading));var l=e.magnificPopup.modules;for(n=0;l.length>n;n++){var c=l[n];c=c.charAt(0).toUpperCase()+c.slice(1),t["init"+c].call(t)}T("BeforeOpen"),t.st.showCloseBtn&&(t.st.closeBtnInside?(x(p,function(e,t,i,n){i.close_replaceWith=S(n.type)}),r+=" mfp-close-btn-in"):t.wrap.append(S())),t.st.alignTop&&(r+=" mfp-align-top"),t.fixedContentPos?t.wrap.css({overflow:t.st.overflowY,overflowX:"hidden",overflowY:t.st.overflowY}):t.wrap.css({top:I.scrollTop(),position:"absolute"}),(t.st.fixedBgPos===!1||"auto"===t.st.fixedBgPos&&!t.fixedContentPos)&&t.bgOverlay.css({height:o.height(),position:"absolute"}),t.st.enableEscapeKey&&o.on("keyup"+v,function(e){27===e.keyCode&&t.close()}),I.on("resize"+v,function(){t.updateSize()}),t.st.closeOnContentClick||(r+=" mfp-auto-cursor"),r&&t.wrap.addClass(r);var d=t.wH=I.height(),u={};if(t.fixedContentPos&&t._hasScrollBar(d)){var m=t._getScrollbarSize();m&&(u.paddingRight=m)}t.fixedContentPos&&(t.isIE7?e("body, html").css("overflow","hidden"):u.overflow="hidden");var g=t.st.mainClass;t.isIE7&&(g+=" mfp-ie7"),g&&t._addClassToMFP(g),t.updateItemHTML(),T("BuildControls"),e("html").css(u),t.bgOverlay.add(t.wrap).prependTo(document.body),t._lastFocusedEl=document.activeElement,setTimeout(function(){t.content?(t._addClassToMFP(h),E()):t.bgOverlay.addClass(h),o.on("focusin"+v,function(i){return i.target===t.wrap[0]||e.contains(t.wrap[0],i.target)?void 0:(E(),!1)})},16),t.isOpen=!0,t.updateSize(d),T(f)},close:function(){t.isOpen&&(T(c),t.isOpen=!1,t.st.removalDelay&&!t.isLowIE&&t.supportsTransition?(t._addClassToMFP(C),setTimeout(function(){t._close()},t.st.removalDelay)):t._close())},_close:function(){T(l);var i=C+" "+h+" ";if(t.bgOverlay.detach(),t.wrap.detach(),t.container.empty(),t.st.mainClass&&(i+=t.st.mainClass+" "),t._removeClassFromMFP(i),t.fixedContentPos){var n={paddingRight:""};t.isIE7?e("body, html").css("overflow",""):n.overflow="",e("html").css(n)}o.off("keyup"+v+" focusin"+v),t.ev.off(v),t.wrap.attr("class","mfp-wrap").removeAttr("style"),t.bgOverlay.attr("class","mfp-bg"),t.container.attr("class","mfp-container"),!t.st.showCloseBtn||t.st.closeBtnInside&&t.currTemplate[t.currItem.type]!==!0||t.currTemplate.closeBtn&&t.currTemplate.closeBtn.detach(),t._lastFocusedEl&&e(t._lastFocusedEl).trigger("focus"),t.currItem=null,t.content=null,t.currTemplate=null,t.prevHeight=0,T(d)},updateSize:function(e){if(t.isIOS){var i=document.documentElement.clientWidth/window.innerWidth,n=window.innerHeight*i;t.wrap.css("height",n),t.wH=n}else t.wH=e||I.height();t.fixedContentPos||t.wrap.css("height",t.wH),T("Resize")},updateItemHTML:function(){var i=t.items[t.index];t.contentContainer.detach(),t.content&&t.content.detach(),i.parsed||(i=t.parseEl(t.index));var n=i.type;if(T("BeforeChange",[t.currItem?t.currItem.type:"",n]),t.currItem=i,!t.currTemplate[n]){var o=t.st[n]?t.st[n].markup:!1;T("FirstMarkupParse",o),t.currTemplate[n]=o?e(o):!0}a&&a!==i.type&&t.container.removeClass("mfp-"+a+"-holder");var r=t["get"+n.charAt(0).toUpperCase()+n.slice(1)](i,t.currTemplate[n]);t.appendContent(r,n),i.preloaded=!0,T(m,i),a=i.type,t.container.prepend(t.contentContainer),T("AfterChange")},appendContent:function(e,i){t.content=e,e?t.st.showCloseBtn&&t.st.closeBtnInside&&t.currTemplate[i]===!0?t.content.find(".mfp-close").length||t.content.append(S()):t.content=e:t.content="",T(u),t.container.addClass("mfp-"+i+"-holder"),t.contentContainer.append(t.content)},parseEl:function(i){var n=t.items[i],o=n.type;if(n=n.tagName?{el:e(n)}:{data:n,src:n.src},n.el){for(var a=t.types,r=0;a.length>r;r++)if(n.el.hasClass("mfp-"+a[r])){o=a[r];break}n.src=n.el.attr("data-mfp-src"),n.src||(n.src=n.el.attr("href"))}return n.type=o||t.st.type||"inline",n.index=i,n.parsed=!0,t.items[i]=n,T("ElementParse",n),t.items[i]},addGroup:function(e,i){var n=function(n){n.mfpEl=this,t._openClick(n,e,i)};i||(i={});var o="click.magnificPopup";i.mainEl=e,i.items?(i.isObj=!0,e.off(o).on(o,n)):(i.isObj=!1,i.delegate?e.off(o).on(o,i.delegate,n):(i.items=e,e.off(o).on(o,n)))},_openClick:function(i,n,o){var a=void 0!==o.midClick?o.midClick:e.magnificPopup.defaults.midClick;if(a||2!==i.which&&!i.ctrlKey&&!i.metaKey){var r=void 0!==o.disableOn?o.disableOn:e.magnificPopup.defaults.disableOn;if(r)if(e.isFunction(r)){if(!r.call(t))return!0}else if(r>I.width())return!0;i.type&&(i.preventDefault(),t.isOpen&&i.stopPropagation()),o.el=e(i.mfpEl),o.delegate&&(o.items=n.find(o.delegate)),t.open(o)}},updateStatus:function(e,n){if(t.preloader){i!==e&&t.container.removeClass("mfp-s-"+i),n||"loading"!==e||(n=t.st.tLoading);var o={status:e,text:n};T("UpdateStatus",o),e=o.status,n=o.text,t.preloader.html(n),t.preloader.find("a").on("click",function(e){e.stopImmediatePropagation()}),t.container.addClass("mfp-s-"+e),i=e}},_addClassToMFP:function(e){t.bgOverlay.addClass(e),t.wrap.addClass(e)},_removeClassFromMFP:function(e){this.bgOverlay.removeClass(e),t.wrap.removeClass(e)},_hasScrollBar:function(e){return(t.isIE7?o.height():document.body.scrollHeight)>(e||I.height())},_parseMarkup:function(t,i,n){var o;n.data&&(i=e.extend(n.data,i)),T(p,[t,i,n]),e.each(i,function(e,i){if(void 0===i||i===!1)return!0;if(o=e.split("_"),o.length>1){var n=t.find(v+"-"+o[0]);if(n.length>0){var a=o[1];"replaceWith"===a?n[0]!==i[0]&&n.replaceWith(i):"img"===a?n.is("img")?n.attr("src",i):n.replaceWith('<img src="'+i+'" class="'+n.attr("class")+'" />'):n.attr(o[1],i)}}else t.find(v+"-"+e).html(i)})},_getScrollbarSize:function(){if(void 0===t.scrollbarSize){var e=document.createElement("div");e.id="mfp-sbm",e.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(e),t.scrollbarSize=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return t.scrollbarSize}},e.magnificPopup={instance:null,proto:w.prototype,modules:[],open:function(e,t){return P(),e||(e={}),e.isObj=!0,e.index=t||0,this.instance.open(e)},close:function(){return e.magnificPopup.instance.close()},registerModule:function(t,i){i.options&&(e.magnificPopup.defaults[t]=i.options),e.extend(this.proto,i.proto),this.modules.push(t)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&times;</button>',tClose:"Close (Esc)",tLoading:"Loading..."}},e.fn.magnificPopup=function(i){P();var n=e(this);if("string"==typeof i)if("open"===i){var o,a=b?n.data("magnificPopup"):n[0].magnificPopup,r=parseInt(arguments[1],10)||0;a.items?o=a.items[r]:(o=n,a.delegate&&(o=o.find(a.delegate)),o=o.eq(r)),t._openClick({mfpEl:o},n,a)}else t.isOpen&&t[i].apply(t,Array.prototype.slice.call(arguments,1));else b?n.data("magnificPopup",i):n[0].magnificPopup=i,t.addGroup(n,i);return n};var M,z,B,H="inline",A=function(){B&&(z.after(B.addClass(M)).detach(),B=null)};e.magnificPopup.registerModule(H,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){t.types.push(H),x(l+"."+H,function(){A()})},getInline:function(i,n){if(A(),i.src){var o=t.st.inline,a=e(i.src);if(a.length){var r=a[0].parentNode;r&&r.tagName&&(z||(M=o.hiddenClass,z=k(M),M="mfp-"+M),B=a.after(z).detach().removeClass(M)),t.updateStatus("ready")}else t.updateStatus("error",o.tNotFound),a=e("<div>");return i.inlineElement=a,a}return t.updateStatus("ready"),t._parseMarkup(n,{},i),n}}});var L,F="ajax",j=function(){L&&n.removeClass(L)};e.magnificPopup.registerModule(F,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){t.types.push(F),L=t.st.ajax.cursor,x(l+"."+F,function(){j(),t.req&&t.req.abort()})},getAjax:function(i){L&&n.addClass(L),t.updateStatus("loading");var o=e.extend({url:i.src,success:function(n,o,a){var r={data:n,xhr:a};T("ParseAjax",r),t.appendContent(e(r.data),F),i.finished=!0,j(),E(),setTimeout(function(){t.wrap.addClass(h)},16),t.updateStatus("ready"),T("AjaxContentAdded")},error:function(){j(),i.finished=i.loadError=!0,t.updateStatus("error",t.st.ajax.tError.replace("%url%",i.src))}},t.st.ajax.settings);return t.req=e.ajax(o),""}}});var N,W=function(i){if(i.data&&void 0!==i.data.title)return i.data.title;var n=t.st.image.titleSrc;if(n){if(e.isFunction(n))return n.call(t,i);if(i.el)return i.el.attr(n)||""}return""};e.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><div class="mfp-img"></div><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var e=t.st.image,i=".image";t.types.push("image"),x(f+i,function(){"image"===t.currItem.type&&e.cursor&&n.addClass(e.cursor)}),x(l+i,function(){e.cursor&&n.removeClass(e.cursor),I.off("resize"+v)}),x("Resize"+i,t.resizeImage),t.isLowIE&&x("AfterChange",t.resizeImage)},resizeImage:function(){var e=t.currItem;if(e.img&&t.st.image.verticalFit){var i=0;t.isLowIE&&(i=parseInt(e.img.css("padding-top"),10)+parseInt(e.img.css("padding-bottom"),10)),e.img.css("max-height",t.wH-i)}},_onImageHasSize:function(e){e.img&&(e.hasSize=!0,N&&clearInterval(N),e.isCheckingImgSize=!1,T("ImageHasSize",e),e.imgHidden&&(t.content&&t.content.removeClass("mfp-loading"),e.imgHidden=!1))},findImageSize:function(e){var i=0,n=e.img[0],o=function(a){N&&clearInterval(N),N=setInterval(function(){return n.naturalWidth>0?(t._onImageHasSize(e),void 0):(i>200&&clearInterval(N),i++,3===i?o(10):40===i?o(50):100===i&&o(500),void 0)},a)};o(1)},getImage:function(i,n){var o=0,a=function(){i&&(i.img[0].complete?(i.img.off(".mfploader"),i===t.currItem&&(t._onImageHasSize(i),t.updateStatus("ready")),i.hasSize=!0,i.loaded=!0,T("ImageLoadComplete")):(o++,200>o?setTimeout(a,100):r()))},r=function(){i&&(i.img.off(".mfploader"),i===t.currItem&&(t._onImageHasSize(i),t.updateStatus("error",s.tError.replace("%url%",i.src))),i.hasSize=!0,i.loaded=!0,i.loadError=!0)},s=t.st.image,l=n.find(".mfp-img");if(l.length){var c=new Image;c.className="mfp-img",i.img=e(c).on("load.mfploader",a).on("error.mfploader",r),c.src=i.src,l.is("img")&&(i.img=i.img.clone()),i.img[0].naturalWidth>0&&(i.hasSize=!0)}return t._parseMarkup(n,{title:W(i),img_replaceWith:i.img},i),t.resizeImage(),i.hasSize?(N&&clearInterval(N),i.loadError?(n.addClass("mfp-loading"),t.updateStatus("error",s.tError.replace("%url%",i.src))):(n.removeClass("mfp-loading"),t.updateStatus("ready")),n):(t.updateStatus("loading"),i.loading=!0,i.hasSize||(i.imgHidden=!0,n.addClass("mfp-loading"),t.findImageSize(i)),n)}}});var R,Z=function(){return void 0===R&&(R=void 0!==document.createElement("p").style.MozTransform),R};e.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(e){return e.is("img")?e:e.find("img")}},proto:{initZoom:function(){var e=t.st.zoom,i=".zoom";if(e.enabled&&t.supportsTransition){var n,o,a=e.duration,r=function(t){var i=t.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),n="all "+e.duration/1e3+"s "+e.easing,o={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},a="transition";return o["-webkit-"+a]=o["-moz-"+a]=o["-o-"+a]=o[a]=n,i.css(o),i},s=function(){t.content.css("visibility","visible")};x("BuildControls"+i,function(){if(t._allowZoom()){if(clearTimeout(n),t.content.css("visibility","hidden"),image=t._getItemToZoom(),!image)return s(),void 0;o=r(image),o.css(t._getOffset()),t.wrap.append(o),n=setTimeout(function(){o.css(t._getOffset(!0)),n=setTimeout(function(){s(),setTimeout(function(){o.remove(),image=o=null,T("ZoomAnimationEnded")},16)},a)},16)}}),x(c+i,function(){if(t._allowZoom()){if(clearTimeout(n),t.st.removalDelay=a,!image){if(image=t._getItemToZoom(),!image)return;o=r(image)}o.css(t._getOffset(!0)),t.wrap.append(o),t.content.css("visibility","hidden"),setTimeout(function(){o.css(t._getOffset())},16)}}),x(l+i,function(){t._allowZoom()&&(s(),o&&o.remove())})}},_allowZoom:function(){return"image"===t.currItem.type},_getItemToZoom:function(){return t.currItem.hasSize?t.currItem.img:!1},_getOffset:function(i){var n;n=i?t.currItem.img:t.st.zoom.opener(t.currItem.el||t.currItem);var o=n.offset(),a=parseInt(n.css("padding-top"),10),r=parseInt(n.css("padding-bottom"),10);o.top-=e(window).scrollTop()-a;var s={width:n.width(),height:(b?n.innerHeight():n[0].offsetHeight)-r-a};return Z()?s["-moz-transform"]=s.transform="translate("+o.left+"px,"+o.top+"px)":(s.left=o.left,s.top=o.top),s}}});var q="iframe",D="//about:blank",K=function(e){if(t.currTemplate[q]){var i=t.currTemplate[q].find("iframe");i.length&&(e||(i[0].src=D),t.isIE8&&i.css("display",e?"block":"none"))}};e.magnificPopup.registerModule(q,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){t.types.push(q),x("BeforeChange",function(e,t,i){t!==i&&(t===q?K():i===q&&K(!0))}),x(l+"."+q,function(){K()})},getIframe:function(i,n){var o=i.src,a=t.st.iframe;e.each(a.patterns,function(){return o.indexOf(this.index)>-1?(this.id&&(o="string"==typeof this.id?o.substr(o.lastIndexOf(this.id)+this.id.length,o.length):this.id.call(this,o)),o=this.src.replace("%id%",o),!1):void 0});var r={};return a.srcAction&&(r[a.srcAction]=o),t._parseMarkup(n,r,i),t.updateStatus("ready"),n}}});var Y=function(e){var i=t.items.length;return e>i-1?e-i:0>e?i+e:e},U=function(e,t,i){return e.replace("%curr%",t+1).replace("%total%",i)};e.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var i=t.st.gallery,n=".mfp-gallery",a=Boolean(e.fn.mfpFastClick);return t.direction=!0,i&&i.enabled?(r+=" mfp-gallery",x(f+n,function(){i.navigateByImgClick&&t.wrap.on("click"+n,".mfp-img",function(){return t.items.length>1?(t.next(),!1):void 0}),o.on("keydown"+n,function(e){37===e.keyCode?t.prev():39===e.keyCode&&t.next()})}),x("UpdateStatus"+n,function(e,i){i.text&&(i.text=U(i.text,t.currItem.index,t.items.length))}),x(p+n,function(e,n,o,a){var r=t.items.length;o.counter=r>1?U(i.tCounter,a.index,r):""}),x("BuildControls"+n,function(){if(t.items.length>1&&i.arrows&&!t.arrowLeft){var n=i.arrowMarkup,o=t.arrowLeft=e(n.replace("%title%",i.tPrev).replace("%dir%","left")).addClass(y),r=t.arrowRight=e(n.replace("%title%",i.tNext).replace("%dir%","right")).addClass(y),s=a?"mfpFastClick":"click";o[s](function(){t.prev()}),r[s](function(){t.next()}),t.isIE7&&(k("b",o[0],!1,!0),k("a",o[0],!1,!0),k("b",r[0],!1,!0),k("a",r[0],!1,!0)),t.container.append(o.add(r))}}),x(m+n,function(){t._preloadTimeout&&clearTimeout(t._preloadTimeout),t._preloadTimeout=setTimeout(function(){t.preloadNearbyImages(),t._preloadTimeout=null},16)}),x(l+n,function(){o.off(n),t.wrap.off("click"+n),t.arrowLeft&&a&&t.arrowLeft.add(t.arrowRight).destroyMfpFastClick(),t.arrowRight=t.arrowLeft=null}),void 0):!1},next:function(){t.direction=!0,t.index=Y(t.index+1),t.updateItemHTML()},prev:function(){t.direction=!1,t.index=Y(t.index-1),t.updateItemHTML()},goTo:function(e){t.direction=e>=t.index,t.index=e,t.updateItemHTML()},preloadNearbyImages:function(){var e,i=t.st.gallery.preload,n=Math.min(i[0],t.items.length),o=Math.min(i[1],t.items.length);for(e=1;(t.direction?o:n)>=e;e++)t._preloadItem(t.index+e);for(e=1;(t.direction?n:o)>=e;e++)t._preloadItem(t.index-e)},_preloadItem:function(i){if(i=Y(i),!t.items[i].preloaded){var n=t.items[i];n.parsed||(n=t.parseEl(i)),T("LazyLoad",n),"image"===n.type&&(n.img=e('<img class="mfp-img" />').on("load.mfploader",function(){n.hasSize=!0}).on("error.mfploader",function(){n.hasSize=!0,n.loadError=!0}).attr("src",n.src)),n.preloaded=!0}}}});var G="retina";e.magnificPopup.registerModule(G,{options:{replaceSrc:function(e){return e.src.replace(/\.\w+$/,function(e){return"@2x"+e})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var e=t.st.retina,i=e.ratio;i=isNaN(i)?i():i,i>1&&(x("ImageHasSize."+G,function(e,t){t.img.css({"max-width":t.img[0].naturalWidth/i,width:"100%"})}),x("ElementParse."+G,function(t,n){n.src=e.replaceSrc(n,i)}))}}}}),function(){var t=1e3,i="ontouchstart"in window,n=function(){I.off("touchmove"+a+" touchend"+a)},o="mfpFastClick",a="."+o;e.fn.mfpFastClick=function(o){return e(this).each(function(){var r,s=e(this);if(i){var l,c,d,u,p,f;s.on("touchstart"+a,function(e){u=!1,f=1,p=e.originalEvent?e.originalEvent.touches[0]:e.touches[0],c=p.clientX,d=p.clientY,I.on("touchmove"+a,function(e){p=e.originalEvent?e.originalEvent.touches:e.touches,f=p.length,p=p[0],(Math.abs(p.clientX-c)>10||Math.abs(p.clientY-d)>10)&&(u=!0,n())}).on("touchend"+a,function(e){n(),u||f>1||(r=!0,e.preventDefault(),clearTimeout(l),l=setTimeout(function(){r=!1},t),o())})})}s.on("click"+a,function(){r||o()})})},e.fn.destroyMfpFastClick=function(){e(this).off("touchstart"+a+" click"+a),i&&I.off("touchmove"+a+" touchend"+a)}}()})(window.jQuery||window.Zepto);

// Generated by CoffeeScript 1.6.2
/*
jQuery Waypoints - v2.0.3
Copyright (c) 2011-2013 Caleb Troughton
Dual licensed under the MIT license and GPL license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/


;(function() {
  var __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; },
    __slice = [].slice;

  (function(root, factory) {
    if (typeof define === 'function' && define.amd) {
      return define('waypoints', ['jquery'], function($) {
        return factory($, root);
      });
    } else {
      return factory(root.jQuery, root);
    }
  })(this, function($, window) {
    var $w, Context, Waypoint, allWaypoints, contextCounter, contextKey, contexts, isTouch, jQMethods, methods, resizeEvent, scrollEvent, waypointCounter, waypointKey, wp, wps;

    $w = $(window);
    isTouch = __indexOf.call(window, 'ontouchstart') >= 0;
    allWaypoints = {
      horizontal: {},
      vertical: {}
    };
    contextCounter = 1;
    contexts = {};
    contextKey = 'waypoints-context-id';
    resizeEvent = 'resize.waypoints';
    scrollEvent = 'scroll.waypoints';
    waypointCounter = 1;
    waypointKey = 'waypoints-waypoint-ids';
    wp = 'waypoint';
    wps = 'waypoints';
    Context = (function() {
      function Context($element) {
        var _this = this;

        this.$element = $element;
        this.element = $element[0];
        this.didResize = false;
        this.didScroll = false;
        this.id = 'context' + contextCounter++;
        this.oldScroll = {
          x: $element.scrollLeft(),
          y: $element.scrollTop()
        };
        this.waypoints = {
          horizontal: {},
          vertical: {}
        };
        $element.data(contextKey, this.id);
        contexts[this.id] = this;
        $element.bind(scrollEvent, function() {
          var scrollHandler;

          if (!(_this.didScroll || isTouch)) {
            _this.didScroll = true;
            scrollHandler = function() {
              _this.doScroll();
              return _this.didScroll = false;
            };
            return window.setTimeout(scrollHandler, $[wps].settings.scrollThrottle);
          }
        });
        $element.bind(resizeEvent, function() {
          var resizeHandler;

          if (!_this.didResize) {
            _this.didResize = true;
            resizeHandler = function() {
              $[wps]('refresh');
              return _this.didResize = false;
            };
            return window.setTimeout(resizeHandler, $[wps].settings.resizeThrottle);
          }
        });
      }

      Context.prototype.doScroll = function() {
        var axes,
          _this = this;

        axes = {
          horizontal: {
            newScroll: this.$element.scrollLeft(),
            oldScroll: this.oldScroll.x,
            forward: 'right',
            backward: 'left'
          },
          vertical: {
            newScroll: this.$element.scrollTop(),
            oldScroll: this.oldScroll.y,
            forward: 'down',
            backward: 'up'
          }
        };
        if (isTouch && (!axes.vertical.oldScroll || !axes.vertical.newScroll)) {
          $[wps]('refresh');
        }
        $.each(axes, function(aKey, axis) {
          var direction, isForward, triggered;

          triggered = [];
          isForward = axis.newScroll > axis.oldScroll;
          direction = isForward ? axis.forward : axis.backward;
          $.each(_this.waypoints[aKey], function(wKey, waypoint) {
            var _ref, _ref1;

            if ((axis.oldScroll < (_ref = waypoint.offset) && _ref <= axis.newScroll)) {
              return triggered.push(waypoint);
            } else if ((axis.newScroll < (_ref1 = waypoint.offset) && _ref1 <= axis.oldScroll)) {
              return triggered.push(waypoint);
            }
          });
          triggered.sort(function(a, b) {
            return a.offset - b.offset;
          });
          if (!isForward) {
            triggered.reverse();
          }
          return $.each(triggered, function(i, waypoint) {
            if (waypoint.options.continuous || i === triggered.length - 1) {
              return waypoint.trigger([direction]);
            }
          });
        });
        return this.oldScroll = {
          x: axes.horizontal.newScroll,
          y: axes.vertical.newScroll
        };
      };

      Context.prototype.refresh = function() {
        var axes, cOffset, isWin,
          _this = this;

        isWin = $.isWindow(this.element);
        cOffset = this.$element.offset();
        this.doScroll();
        axes = {
          horizontal: {
            contextOffset: isWin ? 0 : cOffset.left,
            contextScroll: isWin ? 0 : this.oldScroll.x,
            contextDimension: this.$element.width(),
            oldScroll: this.oldScroll.x,
            forward: 'right',
            backward: 'left',
            offsetProp: 'left'
          },
          vertical: {
            contextOffset: isWin ? 0 : cOffset.top,
            contextScroll: isWin ? 0 : this.oldScroll.y,
            contextDimension: isWin ? $[wps]('viewportHeight') : this.$element.height(),
            oldScroll: this.oldScroll.y,
            forward: 'down',
            backward: 'up',
            offsetProp: 'top'
          }
        };
        return $.each(axes, function(aKey, axis) {
          return $.each(_this.waypoints[aKey], function(i, waypoint) {
            var adjustment, elementOffset, oldOffset, _ref, _ref1;

            adjustment = waypoint.options.offset;
            oldOffset = waypoint.offset;
            elementOffset = $.isWindow(waypoint.element) ? 0 : waypoint.$element.offset()[axis.offsetProp];
            if ($.isFunction(adjustment)) {
              adjustment = adjustment.apply(waypoint.element);
            } else if (typeof adjustment === 'string') {
              adjustment = parseFloat(adjustment);
              if (waypoint.options.offset.indexOf('%') > -1) {
                adjustment = Math.ceil(axis.contextDimension * adjustment / 100);
              }
            }
            waypoint.offset = elementOffset - axis.contextOffset + axis.contextScroll - adjustment;
            if ((waypoint.options.onlyOnScroll && (oldOffset != null)) || !waypoint.enabled) {
              return;
            }
            if (oldOffset !== null && (oldOffset < (_ref = axis.oldScroll) && _ref <= waypoint.offset)) {
              return waypoint.trigger([axis.backward]);
            } else if (oldOffset !== null && (oldOffset > (_ref1 = axis.oldScroll) && _ref1 >= waypoint.offset)) {
              return waypoint.trigger([axis.forward]);
            } else if (oldOffset === null && axis.oldScroll >= waypoint.offset) {
              return waypoint.trigger([axis.forward]);
            }
          });
        });
      };

      Context.prototype.checkEmpty = function() {
        if ($.isEmptyObject(this.waypoints.horizontal) && $.isEmptyObject(this.waypoints.vertical)) {
          this.$element.unbind([resizeEvent, scrollEvent].join(' '));
          return delete contexts[this.id];
        }
      };

      return Context;

    })();
    Waypoint = (function() {
      function Waypoint($element, context, options) {
        var idList, _ref;

        options = $.extend({}, $.fn[wp].defaults, options);
        if (options.offset === 'bottom-in-view') {
          options.offset = function() {
            var contextHeight;

            contextHeight = $[wps]('viewportHeight');
            if (!$.isWindow(context.element)) {
              contextHeight = context.$element.height();
            }
            return contextHeight - $(this).outerHeight();
          };
        }
        this.$element = $element;
        this.element = $element[0];
        this.axis = options.horizontal ? 'horizontal' : 'vertical';
        this.callback = options.handler;
        this.context = context;
        this.enabled = options.enabled;
        this.id = 'waypoints' + waypointCounter++;
        this.offset = null;
        this.options = options;
        context.waypoints[this.axis][this.id] = this;
        allWaypoints[this.axis][this.id] = this;
        idList = (_ref = $element.data(waypointKey)) != null ? _ref : [];
        idList.push(this.id);
        $element.data(waypointKey, idList);
      }

      Waypoint.prototype.trigger = function(args) {
        if (!this.enabled) {
          return;
        }
        if (this.callback != null) {
          this.callback.apply(this.element, args);
        }
        if (this.options.triggerOnce) {
          return this.destroy();
        }
      };

      Waypoint.prototype.disable = function() {
        return this.enabled = false;
      };

      Waypoint.prototype.enable = function() {
        this.context.refresh();
        return this.enabled = true;
      };

      Waypoint.prototype.destroy = function() {
        delete allWaypoints[this.axis][this.id];
        delete this.context.waypoints[this.axis][this.id];
        return this.context.checkEmpty();
      };

      Waypoint.getWaypointsByElement = function(element) {
        var all, ids;

        ids = $(element).data(waypointKey);
        if (!ids) {
          return [];
        }
        all = $.extend({}, allWaypoints.horizontal, allWaypoints.vertical);
        return $.map(ids, function(id) {
          return all[id];
        });
      };

      return Waypoint;

    })();
    methods = {
      init: function(f, options) {
        var _ref;

        if (options == null) {
          options = {};
        }
        if ((_ref = options.handler) == null) {
          options.handler = f;
        }
        this.each(function() {
          var $this, context, contextElement, _ref1;

          $this = $(this);
          contextElement = (_ref1 = options.context) != null ? _ref1 : $.fn[wp].defaults.context;
          if (!$.isWindow(contextElement)) {
            contextElement = $this.closest(contextElement);
          }
          contextElement = $(contextElement);
          context = contexts[contextElement.data(contextKey)];
          if (!context) {
            context = new Context(contextElement);
          }
          return new Waypoint($this, context, options);
        });
        $[wps]('refresh');
        return this;
      },
      disable: function() {
        return methods._invoke(this, 'disable');
      },
      enable: function() {
        return methods._invoke(this, 'enable');
      },
      destroy: function() {
        return methods._invoke(this, 'destroy');
      },
      prev: function(axis, selector) {
        return methods._traverse.call(this, axis, selector, function(stack, index, waypoints) {
          if (index > 0) {
            return stack.push(waypoints[index - 1]);
          }
        });
      },
      next: function(axis, selector) {
        return methods._traverse.call(this, axis, selector, function(stack, index, waypoints) {
          if (index < waypoints.length - 1) {
            return stack.push(waypoints[index + 1]);
          }
        });
      },
      _traverse: function(axis, selector, push) {
        var stack, waypoints;

        if (axis == null) {
          axis = 'vertical';
        }
        if (selector == null) {
          selector = window;
        }
        waypoints = jQMethods.aggregate(selector);
        stack = [];
        this.each(function() {
          var index;

          index = $.inArray(this, waypoints[axis]);
          return push(stack, index, waypoints[axis]);
        });
        return this.pushStack(stack);
      },
      _invoke: function($elements, method) {
        $elements.each(function() {
          var waypoints;

          waypoints = Waypoint.getWaypointsByElement(this);
          return $.each(waypoints, function(i, waypoint) {
            waypoint[method]();
            return true;
          });
        });
        return this;
      }
    };
    $.fn[wp] = function() {
      var args, method;

      method = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      if (methods[method]) {
        return methods[method].apply(this, args);
      } else if ($.isFunction(method)) {
        return methods.init.apply(this, arguments);
      } else if ($.isPlainObject(method)) {
        return methods.init.apply(this, [null, method]);
      } else if (!method) {
        return $.error("jQuery Waypoints needs a callback function or handler option.");
      } else {
        return $.error("The " + method + " method does not exist in jQuery Waypoints.");
      }
    };
    $.fn[wp].defaults = {
      context: window,
      continuous: true,
      enabled: true,
      horizontal: false,
      offset: 0,
      triggerOnce: false
    };
    jQMethods = {
      refresh: function() {
        return $.each(contexts, function(i, context) {
          return context.refresh();
        });
      },
      viewportHeight: function() {
        var _ref;

        return (_ref = window.innerHeight) != null ? _ref : $w.height();
      },
      aggregate: function(contextSelector) {
        var collection, waypoints, _ref;

        collection = allWaypoints;
        if (contextSelector) {
          collection = (_ref = contexts[$(contextSelector).data(contextKey)]) != null ? _ref.waypoints : void 0;
        }
        if (!collection) {
          return [];
        }
        waypoints = {
          horizontal: [],
          vertical: []
        };
        $.each(waypoints, function(axis, arr) {
          $.each(collection[axis], function(key, waypoint) {
            return arr.push(waypoint);
          });
          arr.sort(function(a, b) {
            return a.offset - b.offset;
          });
          waypoints[axis] = $.map(arr, function(waypoint) {
            return waypoint.element;
          });
          return waypoints[axis] = $.unique(waypoints[axis]);
        });
        return waypoints;
      },
      above: function(contextSelector) {
        if (contextSelector == null) {
          contextSelector = window;
        }
        return jQMethods._filter(contextSelector, 'vertical', function(context, waypoint) {
          return waypoint.offset <= context.oldScroll.y;
        });
      },
      below: function(contextSelector) {
        if (contextSelector == null) {
          contextSelector = window;
        }
        return jQMethods._filter(contextSelector, 'vertical', function(context, waypoint) {
          return waypoint.offset > context.oldScroll.y;
        });
      },
      left: function(contextSelector) {
        if (contextSelector == null) {
          contextSelector = window;
        }
        return jQMethods._filter(contextSelector, 'horizontal', function(context, waypoint) {
          return waypoint.offset <= context.oldScroll.x;
        });
      },
      right: function(contextSelector) {
        if (contextSelector == null) {
          contextSelector = window;
        }
        return jQMethods._filter(contextSelector, 'horizontal', function(context, waypoint) {
          return waypoint.offset > context.oldScroll.x;
        });
      },
      enable: function() {
        return jQMethods._invoke('enable');
      },
      disable: function() {
        return jQMethods._invoke('disable');
      },
      destroy: function() {
        return jQMethods._invoke('destroy');
      },
      extendFn: function(methodName, f) {
        return methods[methodName] = f;
      },
      _invoke: function(method) {
        var waypoints;

        waypoints = $.extend({}, allWaypoints.vertical, allWaypoints.horizontal);
        return $.each(waypoints, function(key, waypoint) {
          waypoint[method]();
          return true;
        });
      },
      _filter: function(selector, axis, test) {
        var context, waypoints;

        context = contexts[$(selector).data(contextKey)];
        if (!context) {
          return [];
        }
        waypoints = [];
        $.each(context.waypoints[axis], function(i, waypoint) {
          if (test(context, waypoint)) {
            return waypoints.push(waypoint);
          }
        });
        waypoints.sort(function(a, b) {
          return a.offset - b.offset;
        });
        return $.map(waypoints, function(waypoint) {
          return waypoint.element;
        });
      }
    };
    $[wps] = function() {
      var args, method;

      method = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      if (jQMethods[method]) {
        return jQMethods[method].apply(null, args);
      } else {
        return jQMethods.aggregate.call(null, method);
      }
    };
    $[wps].settings = {
      resizeThrottle: 100,
      scrollThrottle: 30
    };
    return $w.load(function() {
      return $[wps]('refresh');
    });
  });

}).call(this);

// Generated by CoffeeScript 1.6.2
/*
Sticky Elements Shortcut for jQuery Waypoints - v2.0.3
Copyright (c) 2011-2013 Caleb Troughton
Dual licensed under the MIT license and GPL license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/


;(function() {
  (function(root, factory) {
    if (typeof define === 'function' && define.amd) {
      return define(['jquery', 'waypoints'], factory);
    } else {
      return factory(root.jQuery);
    }
  })(this, function($) {
    var defaults, wrap;

    defaults = {
      wrapper: '<div class="sticky-wrapper" />',
      stuckClass: 'stuck'
    };
    wrap = function($elements, options) {
      $elements.wrap(options.wrapper);
      return $elements.parent();
    };
    $.waypoints('extendFn', 'sticky', function(opt) {
      var $wrap, options, originalHandler;

      options = $.extend({}, $.fn.waypoint.defaults, defaults, opt);
      $wrap = wrap(this, options);
      originalHandler = options.handler;
      options.handler = function(direction) {
        var $sticky, shouldBeStuck;

        $sticky = $(this).children(':first');
        shouldBeStuck = direction === 'down' || direction === 'right';
        $sticky.toggleClass(options.stuckClass, shouldBeStuck);
        $wrap.height(shouldBeStuck ? $sticky.outerHeight() : '');
        if (originalHandler != null) {
          return originalHandler.call(this, direction);
        }
      };
      $wrap.waypoint(options);
      return this.data('stuckClass', options.stuckClass);
    });
    return $.waypoints('extendFn', 'unsticky', function() {
      this.parent().waypoint('destroy');
      this.unwrap();
      return this.removeClass(this.data('stuckClass'));
    });
  });

}).call(this);

/* ===========================================================
 * jquery-simple-text-rotator.js v1
 * ===========================================================
 * Copyright 2013 Pete Rojwongsuriya.
 * http://www.thepetedesign.com
 *
 * A very simple and light weight jQuery plugin that 
 * allows you to rotate multiple text without changing 
 * the layout
 * https://github.com/peachananr/simple-text-rotator
 *
 * ========================================================== */

!function($){
  
  var defaults = {
		animation: "dissolve",
		separator: ",",
		speed: 2000
	};
	
	$.fx.step.textShadowBlur = function(fx) {
    $(fx.elem).prop('textShadowBlur', fx.now).css({textShadow: '0 0 ' + Math.floor(fx.now) + 'px black'});
  };
	
  $.fn.textrotator = function(options){
    var settings = $.extend({}, defaults, options);
    
    return this.each(function(){
      var el = $(this)
      var array = [];
      $.each(el.html().split(settings.separator), function(key, value) {
		if(value) {
			array.push(value);
		}
      });
      el.html(array[0]);
      
      // animation option
      var rotate = function() {
        switch (settings.animation) { 
          case 'dissolve':
            el.animate({
              textShadowBlur:20,
              opacity: 0
            }, 500 , function() {
              index = $.inArray(el.text(), array)
              if((index + 1) == array.length) index = -1
              el.text(array[index + 1]).animate({
                textShadowBlur:0,
                opacity: 1
              }, 500 );
            });
          break;
          
          case 'flip':
            if(el.find(".back").length > 0) {
              el.html(el.find(".back").html())
            }
          
            var initial = el.html()
            var index = $.inArray(initial, array)
            if((index + 1) == array.length) index = -1
            
            el.html("");
            $("<span class='front'>" + initial + "</span>").appendTo(el);
            $("<span class='back'>" + array[index + 1] + "</span>").appendTo(el);
            el.wrapInner("<span class='rotating' />").find(".rotating").hide().addClass("flip").show().css({
              "-webkit-transform": " rotateY(-180deg)",
              "-moz-transform": " rotateY(-180deg)",
              "-o-transform": " rotateY(-180deg)",
              "transform": " rotateY(-180deg)"
            })
            
          break;
          
          case 'flipUp':
            if(el.find(".back").length > 0) {
              el.html(el.find(".back").html())
            }
          
            var initial = el.html()
            var index = $.inArray(initial, array)
            if((index + 1) == array.length) index = -1
            
            el.html("");
            $("<span class='front'>" + initial + "</span>").appendTo(el);
            $("<span class='back'>" + array[index + 1] + "</span>").appendTo(el);
            el.wrapInner("<span class='rotating' />").find(".rotating").hide().addClass("flip up").show().css({
              "-webkit-transform": " rotateX(-180deg)",
              "-moz-transform": " rotateX(-180deg)",
              "-o-transform": " rotateX(-180deg)",
              "transform": " rotateX(-180deg)"
            })
            
          break;
          
          case 'flipCube':
            if(el.find(".back").length > 0) {
              el.html(el.find(".back").html())
            }
          
            var initial = el.html()
            var index = $.inArray(initial, array)
            if((index + 1) == array.length) index = -1
            
            el.html("");
            $("<span class='front'>" + initial + "</span>").appendTo(el);
            $("<span class='back'>" + array[index + 1] + "</span>").appendTo(el);
            el.wrapInner("<span class='rotating' />").find(".rotating").hide().addClass("flip cube").show().css({
              "-webkit-transform": " rotateY(180deg)",
              "-moz-transform": " rotateY(180deg)",
              "-o-transform": " rotateY(180deg)",
              "transform": " rotateY(180deg)"
            })
            
          break;
          
          case 'flipCubeUp':
            if(el.find(".back").length > 0) {
              el.html(el.find(".back").html())
            }
          
            var initial = el.html()
            var index = $.inArray(initial, array)
            if((index + 1) == array.length) index = -1
            
            el.html("");
            $("<span class='front'>" + initial + "</span>").appendTo(el);
            $("<span class='back'>" + array[index + 1] + "</span>").appendTo(el);
            el.wrapInner("<span class='rotating' />").find(".rotating").hide().addClass("flip cube up").show().css({
              "-webkit-transform": " rotateX(180deg)",
              "-moz-transform": " rotateX(180deg)",
              "-o-transform": " rotateX(180deg)",
              "transform": " rotateX(180deg)"
            })
            
          break;
          
          case 'spin':
            if(el.find(".rotating").length > 0) {
              el.html(el.find(".rotating").html())
            }
            index = $.inArray(el.html(), array)
            if((index + 1) == array.length) index = -1
            
            el.wrapInner("<span class='rotating spin' />").find(".rotating").hide().html(array[index + 1]).show().css({
              "-webkit-transform": " rotate(0) scale(1)",
              "-moz-transform": "rotate(0) scale(1)",
              "-o-transform": "rotate(0) scale(1)",
              "transform": "rotate(0) scale(1)"
            })
          break;
          
          case 'fade':
			index = $.inArray(el.html(), array)
            el.fadeOut(1000, function() {
              if((index + 1) == array.length) index = -1
              el.html(array[index + 1]).fadeIn(settings.speed);
            });
          break;
        }
      };
      setInterval(rotate, settings.speed);
    });
  }
  
}(window.jQuery);

/******************************************************
		Jquery Elastislide Plugin
*******************************************************/
/**
 * jquery.elastislide.js v1.1.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2012, Codrops
 * http://www.codrops.com
 */

;( function( $, window, undefined ) {
	'use strict';
	/*
	* debouncedresize: special jQuery event that happens once after a window resize
	*
	* latest version and complete README available on Github:
	* https://github.com/louisremi/jquery-smartresize/blob/master/jquery.debouncedresize.js
	*
	* Copyright 2011 @louis_remi
	* Licensed under the MIT license.
	*/
	var $event = $.event,
	$special,
	resizeTimeout;

	$special = $event.special.debouncedresize = {
		setup: function() {
			$( this ).on( "resize", $special.handler );
		},
		teardown: function() {
			$( this ).off( "resize", $special.handler );
		},
		handler: function( event, execAsap ) {
			// Save the context
			var context = this,
				args = arguments,
				dispatch = function() {
					// set correct event type
					event.type = "debouncedresize";
					$event.dispatch.apply( context, args );
				};

			if ( resizeTimeout ) {
				clearTimeout( resizeTimeout );
			}

			execAsap ?
				dispatch() :
				resizeTimeout = setTimeout( dispatch, $special.threshold );
		},
		threshold: 150
	};

	// ======================= imagesLoaded Plugin ===============================
	// https://github.com/desandro/imagesloaded

	// $('#my-container').imagesLoaded(myFunction)
	// execute a callback when all images have loaded.
	// needed because .load() doesn't work on cached images

	// callback function gets image collection as argument
	//  this is the container

	// original: mit license. paul irish. 2010.
	// contributors: Oren Solomianik, David DeSandro, Yiannis Chatzikonstantinou

	// blank image data-uri bypasses webkit log warning (thx doug jones)
	var BLANK = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';
	
	$.fn.imagesLoaded = function( callback ) {
		var $this = this,
			deferred = $.isFunction($.Deferred) ? $.Deferred() : 0,
			hasNotify = $.isFunction(deferred.notify),
			$images = $this.find('img').add( $this.filter('img') ),
			loaded = [],
			proper = [],
			broken = [];

		// Register deferred callbacks
		if ($.isPlainObject(callback)) {
			$.each(callback, function (key, value) {
				if (key === 'callback') {
					callback = value;
				} else if (deferred) {
					deferred[key](value);
				}
			});
		}

		function doneLoading() {
			var $proper = $(proper),
				$broken = $(broken);

			if ( deferred ) {
				if ( broken.length ) {
					deferred.reject( $images, $proper, $broken );
				} else {
					deferred.resolve( $images );
				}
			}

			if ( $.isFunction( callback ) ) {
				callback.call( $this, $images, $proper, $broken );
			}
		}

		function imgLoaded( img, isBroken ) {
			// don't proceed if BLANK image, or image is already loaded
			if ( img.src === BLANK || $.inArray( img, loaded ) !== -1 ) {
				return;
			}

			// store element in loaded images array
			loaded.push( img );

			// keep track of broken and properly loaded images
			if ( isBroken ) {
				broken.push( img );
			} else {
				proper.push( img );
			}

			// cache image and its state for future calls
			$.data( img, 'imagesLoaded', { isBroken: isBroken, src: img.src } );

			// trigger deferred progress method if present
			if ( hasNotify ) {
				deferred.notifyWith( $(img), [ isBroken, $images, $(proper), $(broken) ] );
			}

			// call doneLoading and clean listeners if all images are loaded
			if ( $images.length === loaded.length ){
				setTimeout( doneLoading );
				$images.unbind( '.imagesLoaded' );
			}
		}

		// if no images, trigger immediately
		if ( !$images.length ) {
			doneLoading();
		} else {
			$images.bind( 'load.imagesLoaded error.imagesLoaded', function( event ){
				// trigger imgLoaded
				imgLoaded( event.target, event.type === 'error' );
			}).each( function( i, el ) {
				var src = el.src;

				// find out if this image has been already checked for status
				// if it was, and src has not changed, call imgLoaded on it
				var cached = $.data( el, 'imagesLoaded' );
				if ( cached && cached.src === src ) {
					imgLoaded( el, cached.isBroken );
					return;
				}

				// if complete is true and browser supports natural sizes, try
				// to check for image status manually
				if ( el.complete && el.naturalWidth !== undefined ) {
					imgLoaded( el, el.naturalWidth === 0 || el.naturalHeight === 0 );
					return;
				}

				// cached images don't fire load sometimes, so we reset src, but only when
				// dealing with IE, or image is complete (loaded) and failed manual check
				// webkit hack from http://groups.google.com/group/jquery-dev/browse_thread/thread/eee6ab7b2da50e1f
				if ( el.readyState || el.complete ) {
					el.src = BLANK;
					el.src = src;
				}
			});
		}

		return deferred ? deferred.promise( $this ) : $this;
	};

	// global
	var $window = $( window ),
		Modernizr = window.Modernizr;

	$.Elastislide = function( options, element ) {
		
		this.$el = $( element );
		this._init( options );
		
	};

	$.Elastislide.defaults = {
		// orientation 'horizontal' || 'vertical'
		orientation : 'horizontal',
		// sliding speed
		speed : 500,
		// sliding easing
		easing : 'ease-in-out',
		// the minimum number of items to show. 
		// when we resize the window, this will make sure minItems are always shown 
		// (unless of course minItems is higher than the total number of elements)
		minItems : 3,
		// index of the current item (left most item of the carousel)
		start : 0,
		// click item callback
		onClick : function( el, position, evt ) { return false; },
		onReady : function() { return false; },
		onBeforeSlide : function() { return false; },
		onAfterSlide : function() { return false; }
	};

	$.Elastislide.prototype = {

		_init : function( options ) {
			
			// options
			this.options = $.extend( true, {}, $.Elastislide.defaults, options );

			// https://github.com/twitter/bootstrap/issues/2870
			var self = this,
				transEndEventNames = {
					'WebkitTransition' : 'webkitTransitionEnd',
					'MozTransition' : 'transitionend',
					'OTransition' : 'oTransitionEnd',
					'msTransition' : 'MSTransitionEnd',
					'transition' : 'transitionend'
				};
			
			this.transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ];
			
			// suport for css transforms and css transitions
			this.support = Modernizr.csstransitions && Modernizr.csstransforms;

			// current item's index
			this.current = this.options.start;

			// control if it's sliding
			this.isSliding = false;

			this.$items = this.$el.children( 'li' );
			// total number of items
			this.itemsCount = this.$items.length;
			if( this.itemsCount === 0 ) {

				return false;

			}
			this._validate();
			// remove white space
			this.$items.detach();
			this.$el.empty();
			this.$el.append( this.$items );

			// main wrapper
			this.$el.wrap( '<div class="elastislide-wrapper elastislide-loading elastislide-' + this.options.orientation + '"></div>' );

			// check if we applied a transition to the <ul>
			this.hasTransition = false;
			
			// add transition for the <ul>
			this.hasTransitionTimeout = setTimeout( function() {
				
				self._addTransition();

			}, 100 );

			// preload the images
			$.fn.imagesLoaded = function( callback ) {
				var $this = this,
					deferred = $.isFunction($.Deferred) ? $.Deferred() : 0,
					hasNotify = $.isFunction(deferred.notify),
					$images = $this.find('img').add( $this.filter('img') ),
					loaded = [],
					proper = [],
					broken = [];

				// Register deferred callbacks
				if ($.isPlainObject(callback)) {
					$.each(callback, function (key, value) {
						if (key === 'callback') {
							callback = value;
						} else if (deferred) {
							deferred[key](value);
						}
					});
				}

				function doneLoading() {
					var $proper = $(proper),
						$broken = $(broken);

					if ( deferred ) {
						if ( broken.length ) {
							deferred.reject( $images, $proper, $broken );
						} else {
							deferred.resolve( $images );
						}
					}

					if ( $.isFunction( callback ) ) {
						callback.call( $this, $images, $proper, $broken );
					}
				}

				function imgLoadedHandler( event ) {
					imgLoaded( event.target, event.type === 'error' );
				}

				function imgLoaded( img, isBroken ) {
					// don't proceed if BLANK image, or image is already loaded
					if ( img.src === BLANK || $.inArray( img, loaded ) !== -1 ) {
						return;
					}

					// store element in loaded images array
					loaded.push( img );

					// keep track of broken and properly loaded images
					if ( isBroken ) {
						broken.push( img );
					} else {
						proper.push( img );
					}

					// cache image and its state for future calls
					$.data( img, 'imagesLoaded', { isBroken: isBroken, src: img.src } );

					// trigger deferred progress method if present
					if ( hasNotify ) {
						deferred.notifyWith( $(img), [ isBroken, $images, $(proper), $(broken) ] );
					}

					// call doneLoading and clean listeners if all images are loaded
					if ( $images.length === loaded.length ) {
						setTimeout( doneLoading );
						$images.unbind( '.imagesLoaded', imgLoadedHandler );
					}
				}

				// if no images, trigger immediately
				if ( !$images.length ) {
					doneLoading();
				} else {
					$images.bind( 'load.imagesLoaded error.imagesLoaded', imgLoadedHandler )
					.each( function( i, el ) {
						var src = el.src;

						// find out if this image has been already checked for status
						// if it was, and src has not changed, call imgLoaded on it
						var cached = $.data( el, 'imagesLoaded' );
						if ( cached && cached.src === src ) {
							imgLoaded( el, cached.isBroken );
							return;
						}

						// if complete is true and browser supports natural sizes, try
						// to check for image status manually
						if ( el.complete && el.naturalWidth !== undefined ) {
							imgLoaded( el, el.naturalWidth === 0 || el.naturalHeight === 0 );
							return;
						}

						// cached images don't fire load sometimes, so we reset src, but only when
						// dealing with IE, or image is complete (loaded) and failed manual check
						// webkit hack from http://groups.google.com/group/jquery-dev/browse_thread/thread/eee6ab7b2da50e1f
						if ( el.readyState || el.complete ) {
							el.src = BLANK;
							el.src = src;
						}
					});
				}

				return deferred ? deferred.promise( $this ) : $this;
			};
			
			
			this.$el.imagesLoaded( function() {
				self.$el.show();

				self._layout();
				self._configure();
				
				if( self.hasTransition ) {

					// slide to current's position
					self._removeTransition();
					self._slideToItem( self.current );

					self.$el.on( self.transEndEventName, function() {

						self.$el.off( self.transEndEventName );
						self._setWrapperSize();
						// add transition for the <ul>
						self._addTransition();
						self._initEvents();

					} );

				}
				else {

					clearTimeout( self.hasTransitionTimeout );
					self._setWrapperSize();
					self._initEvents();
					// slide to current's position
					self._slideToItem( self.current );
					setTimeout( function() { self._addTransition(); }, 25 );

				}

				self.options.onReady();

			} );

		},
		_validate : function() {

			if( this.options.speed < 0 ) {

				this.options.speed = 500;

			}
			if( this.options.minItems < 1 || this.options.minItems > this.itemsCount ) {

				this.options.minItems = 1;

			}
			if( this.options.start < 0 || this.options.start > this.itemsCount - 1 ) {

				this.options.start = 0;

			}
			if( this.options.orientation != 'horizontal' && this.options.orientation != 'vertical' ) {

				this.options.orientation = 'horizontal';

			}
				
		},
		_layout : function() {

			this.$el.wrap( '<div class="elastislide-carousel"></div>' );

			this.$carousel = this.$el.parent();
			this.$wrapper = this.$carousel.parent().removeClass( 'elastislide-loading' );

			// save original image sizes
			var $img = this.$items.find( 'img:first' );
			this.imgSize = { width : $img.outerWidth( true ), height : $img.outerHeight( true ) };

			this._setItemsSize();
			this.options.orientation === 'horizontal' ? this.$el.css( 'max-height', this.imgSize.height ) : this.$el.css( 'height', this.options.minItems * this.imgSize.height );

			// add the controls
			this._addControls();

		},
		_addTransition : function() {

			if( this.support ) {

				this.$el.css( 'transition', 'all ' + this.options.speed + 'ms ' + this.options.easing );
				
			}
			this.hasTransition = true;

		},
		_removeTransition : function() {

			if( this.support ) {

				this.$el.css( 'transition', 'all 0s' );

			}
			this.hasTransition = false;
			
		},
		_addControls : function() {

			var self = this;

			// add navigation elements
			this.$navigation = $( '<nav><span class="elastislide-prev font-icon icon-arrow_carrot-left"></span><span class="elastislide-next font-icon icon-arrow_carrot-right"></span></nav>' )
				.appendTo( this.$wrapper );


			this.$navPrev = this.$navigation.find( 'span.elastislide-prev' ).on( 'mousedown.elastislide', function( event ) {

				self._slide( 'prev' );
				return false;

			} );

			this.$navNext = this.$navigation.find( 'span.elastislide-next' ).on( 'mousedown.elastislide', function( event ) {

				self._slide( 'next' );
				return false;

			} );

		},
		_setItemsSize : function() {

			// width for the items (%)
			var w = this.options.orientation === 'horizontal' ? ( Math.floor( this.$carousel.width() / this.options.minItems ) * 100 ) / this.$carousel.width() : 100;
			
			this.$items.css( {
				'width' : w + '%',
				'max-width' : this.imgSize.width,
				'max-height' : this.imgSize.height
			} );

			if( this.options.orientation === 'vertical' ) {
			
				this.$wrapper.css( 'max-width', this.imgSize.width + parseInt( this.$wrapper.css( 'padding-left' ) ) + parseInt( this.$wrapper.css( 'padding-right' ) ) );
			
			}

		},
		_setWrapperSize : function() {

			if( this.options.orientation === 'vertical' ) {

				this.$wrapper.css( {
					'height' : this.options.minItems * this.imgSize.height + parseInt( this.$wrapper.css( 'padding-top' ) ) + parseInt( this.$wrapper.css( 'padding-bottom' ) )
				} );

			}

		},
		_configure : function() {

			// check how many items fit in the carousel (visible area -> this.$carousel.width() )
			this.fitCount = this.options.orientation === 'horizontal' ? 
								this.$carousel.width() < this.options.minItems * this.imgSize.width ? this.options.minItems : Math.floor( this.$carousel.width() / this.imgSize.width ) :
								this.$carousel.height() < this.options.minItems * this.imgSize.height ? this.options.minItems : Math.floor( this.$carousel.height() / this.imgSize.height );

		},
		_initEvents : function() {

			var self = this;

			$window.on( 'debouncedresize.elastislide', function() {

				self._setItemsSize();
				self._configure();
				self._slideToItem( self.current );

			} );

			this.$el.on( this.transEndEventName, function() {

				self._onEndTransition();

			} );

			if( this.options.orientation === 'horizontal' ) {

				this.$el.on( {
					swipeleft : function() {

						self._slide( 'next' );
					
					},
					swiperight : function() {

						self._slide( 'prev' );
					
					}
				} );

			}
			else {

				this.$el.on( {
					swipeup : function() {

						self._slide( 'next' );
					
					},
					swipedown : function() {

						self._slide( 'prev' );
					
					}
				} );

			}

			// item click event
			this.$el.on( 'click.elastislide', 'li', function( event ) {

				var $item = $( this );

				self.options.onClick( $item, $item.index(), event );
				
			});

		},
		_destroy : function( callback ) {
			
			this.$el.off( this.transEndEventName ).off( 'swipeleft swiperight swipeup swipedown .elastislide' );
			$window.off( '.elastislide' );
			
			this.$el.css( {
				'max-height' : 'none',
				'transition' : 'none'
			} ).unwrap( this.$carousel ).unwrap( this.$wrapper );

			this.$items.css( {
				'width' : 'auto',
				'max-width' : 'none',
				'max-height' : 'none'
			} );

			this.$navigation.remove();
			this.$wrapper.remove();

			if( callback ) {

				callback.call();

			}

		},
		_toggleControls : function( dir, display ) {

			if( display ) {

				( dir === 'next' ) ? this.$navNext.show() : this.$navPrev.show();

			}
			else {

				( dir === 'next' ) ? this.$navNext.hide() : this.$navPrev.hide();

			}
			
		},
		_slide : function( dir, tvalue ) {

			if( this.isSliding ) {

				return false;

			}
			
			this.options.onBeforeSlide();

			this.isSliding = true;

			var self = this,
				translation = this.translation || 0,
				// width/height of an item ( <li> )
				itemSpace = this.options.orientation === 'horizontal' ? this.$items.outerWidth( true ) : this.$items.outerHeight( true ),
				// total width/height of the <ul>
				totalSpace = this.itemsCount * itemSpace,
				// visible width/height
				visibleSpace = this.options.orientation === 'horizontal' ? this.$carousel.width() : this.$carousel.height();
			
			if( tvalue === undefined ) {
				
				var amount = this.fitCount * itemSpace;

				if( amount < 0 ) {

					return false;

				}

				if( dir === 'next' && totalSpace - ( Math.abs( translation ) + amount ) < visibleSpace ) {

					amount = totalSpace - ( Math.abs( translation ) + visibleSpace );

					// show / hide navigation buttons
					this._toggleControls( 'next', false );
					this._toggleControls( 'prev', true );

				}
				else if( dir === 'prev' && Math.abs( translation ) - amount < 0 ) {

					amount = Math.abs( translation );

					// show / hide navigation buttons
					this._toggleControls( 'next', true );
					this._toggleControls( 'prev', false );

				}
				else {
					
					// future translation value
					var ftv = dir === 'next' ? Math.abs( translation ) + Math.abs( amount ) : Math.abs( translation ) - Math.abs( amount );
					
					// show / hide navigation buttons
					ftv > 0 ? this._toggleControls( 'prev', true ) : this._toggleControls( 'prev', false );
					ftv < totalSpace - visibleSpace ? this._toggleControls( 'next', true ) : this._toggleControls( 'next', false );
						
				}
				
				tvalue = dir === 'next' ? translation - amount : translation + amount;

			}
			else {

				var amount = Math.abs( tvalue );

				if( Math.max( totalSpace, visibleSpace ) - amount < visibleSpace ) {

					tvalue	= - ( Math.max( totalSpace, visibleSpace ) - visibleSpace );
				
				}

				// show / hide navigation buttons
				amount > 0 ? this._toggleControls( 'prev', true ) : this._toggleControls( 'prev', false );
				Math.max( totalSpace, visibleSpace ) - visibleSpace > amount ? this._toggleControls( 'next', true ) : this._toggleControls( 'next', false );

			}
			
			this.translation = tvalue;

			if( translation === tvalue ) {
				
				this._onEndTransition();
				return false;

			}

			if( this.support ) {
				
				this.options.orientation === 'horizontal' ? this.$el.css( 'transform', 'translateX(' + tvalue + 'px)' ) : this.$el.css( 'transform', 'translateY(' + tvalue + 'px)' );

			}
			else {

				$.fn.applyStyle = this.hasTransition ? $.fn.animate : $.fn.css;
				var styleCSS = this.options.orientation === 'horizontal' ? { left : tvalue } : { top : tvalue };
				
				this.$el.stop().applyStyle( styleCSS, $.extend( true, [], { duration : this.options.speed, complete : function() {

					self._onEndTransition();
					
				} } ) );

			}
			
			if( !this.hasTransition ) {

				this._onEndTransition();

			}

		},
		_onEndTransition : function() {

			this.isSliding = false;
			this.options.onAfterSlide();

		},
		_slideTo : function( pos ) {

			var pos = pos || this.current,
				translation = Math.abs( this.translation ) || 0,
				itemSpace = this.options.orientation === 'horizontal' ? this.$items.outerWidth( true ) : this.$items.outerHeight( true ),
				posR = translation + this.$carousel.width(),
				ftv = Math.abs( pos * itemSpace );

			if( ftv + itemSpace > posR || ftv < translation ) {

				this._slideToItem( pos );
			
			}

		},
		_slideToItem : function( pos ) {

			// how much to slide?
			var amount	= this.options.orientation === 'horizontal' ? pos * this.$items.outerWidth( true ) : pos * this.$items.outerHeight( true );
			this._slide( '', -amount );
			
		},
		// public method: adds new items to the carousel
		/*
		
		how to use:
		var carouselEl = $( '#carousel' ),
			carousel = carouselEl.elastislide();
		...
		
		// append or prepend new items:
		carouselEl.prepend('<li><a href="#"><img src="images/large/2.jpg" alt="image02" /></a></li>');

		// call the add method:
		es.add();
		
		*/
		add : function( callback ) {
			
			var self = this,
				oldcurrent = this.current,
				$currentItem = this.$items.eq( this.current );
			
			// adds new items to the carousel
			this.$items = this.$el.children( 'li' );
			this.itemsCount = this.$items.length;
			this.current = $currentItem.index();
			this._setItemsSize();
			this._configure();
			this._removeTransition();
			oldcurrent < this.current ? this._slideToItem( this.current ) : this._slide( 'next', this.translation );
			setTimeout( function() { self._addTransition(); }, 25 );
			
			if ( callback ) {

				callback.call();

			}
			
		},
		// public method: sets a new element as the current. slides to that position
		setCurrent : function( idx, callback ) {
			
			this.current = idx;

			this._slideTo();
			
			if ( callback ) {

				callback.call();

			}
			
		},
		// public method: slides to the next set of items
		next : function() {

			self._slide( 'next' );

		},
		// public method: slides to the previous set of items
		previous : function() {

			self._slide( 'prev' );

		},
		// public method: slides to the first item
		slideStart : function() {

			this._slideTo( 0 );

		},
		// public method: slides to the last item
		slideEnd : function() {

			this._slideTo( this.itemsCount - 1 );

		},
		// public method: destroys the elastislide instance
		destroy : function( callback ) {

			this._destroy( callback );
		
		}

	};
	
	var logError = function( message ) {

		if ( window.console ) {

			window.console.error( message );
		
		}

	};
	
	$.fn.elastislide = function( options ) {

		var self = $.data( this, 'elastislide' );
		
		if ( typeof options === 'string' ) {
			
			var args = Array.prototype.slice.call( arguments, 1 );
			
			this.each(function() {
			
				if ( !self ) {

					logError( "cannot call methods on elastislide prior to initialization; " +
					"attempted to call method '" + options + "'" );
					return;
				
				}
				
				if ( !$.isFunction( self[options] ) || options.charAt(0) === "_" ) {

					logError( "no such method '" + options + "' for elastislide self" );
					return;
				
				}
				
				self[ options ].apply( self, args );
			
			});
		
		} 
		else {
		
			this.each(function() {
				
				if ( self ) {

					self._init();
				
				}
				else {

					self = $.data( this, 'elastislide', new $.Elastislide( options, this ) );
				
				}

			});
		
		}
		
		return self;
		
	};
	
} )( jQuery, window );

/* jquery.nicescroll 3.5.6 InuYaksa*2014 MIT http://nicescroll.areaaperta.com */!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){function o(){var e=document.getElementsByTagName("script"),o=e[e.length-1].src.split("?")[0]
return o.split("/").length>0?o.split("/").slice(0,-1).join("/")+"/":""}function t(e,o,t){for(var r=0;r<o.length;r++)t(e,o[r])}var r=!1,i=!1,n=0,s=2e3,l=0,a=e,c=["ms","moz","webkit","o"],d=window.requestAnimationFrame||!1,u=window.cancelAnimationFrame||!1
if(!d)for(var h in c){var p=c[h]
d||(d=window[p+"RequestAnimationFrame"]),u||(u=window[p+"CancelAnimationFrame"]||window[p+"CancelRequestAnimationFrame"])}var m=window.MutationObserver||window.WebKitMutationObserver||!1,f={zindex:"auto",cursoropacitymin:0,cursoropacitymax:1,cursorcolor:"#424242",cursorwidth:"5px",cursorborder:"1px solid #fff",cursorborderradius:"5px",scrollspeed:60,mousescrollstep:24,touchbehavior:!1,hwacceleration:!0,usetransition:!0,boxzoom:!1,dblclickzoom:!0,gesturezoom:!0,grabcursorenabled:!0,autohidemode:!0,background:"",iframeautoresize:!0,cursorminheight:32,preservenativescrolling:!0,railoffset:!1,railhoffset:!1,bouncescroll:!0,spacebarenabled:!0,railpadding:{top:0,right:0,left:0,bottom:0},disableoutline:!0,horizrailenabled:!0,railalign:"right",railvalign:"bottom",enabletranslate3d:!0,enablemousewheel:!0,enablekeyboard:!0,smoothscroll:!0,sensitiverail:!0,enablemouselockapi:!0,cursorfixedheight:!1,directionlockdeadzone:6,hidecursordelay:400,nativeparentscrolling:!0,enablescrollonselection:!0,overflowx:!0,overflowy:!0,cursordragspeed:.3,rtlmode:"auto",cursordragontouch:!1,oneaxismousemode:"auto",scriptpath:o()},g=!1,w=function(){function e(){var e=["-moz-grab","-webkit-grab","grab"];(t.ischrome&&!t.ischrome22||t.isie)&&(e=[])
for(var r=0;r<e.length;r++){var i=e[r]
if(o.style.cursor=i,o.style.cursor==i)return i}return"url(//mail.google.com/mail/images/2/openhand.cur),n-resize"}if(g)return g
var o=document.createElement("DIV"),t={}
t.haspointerlock="pointerLockElement"in document||"mozPointerLockElement"in document||"webkitPointerLockElement"in document,t.isopera="opera"in window,t.isopera12=t.isopera&&"getUserMedia"in navigator,t.isoperamini="[object OperaMini]"===Object.prototype.toString.call(window.operamini),t.isie="all"in document&&"attachEvent"in o&&!t.isopera,t.isieold=t.isie&&!("msInterpolationMode"in o.style),t.isie7=!(!t.isie||t.isieold||"documentMode"in document&&7!=document.documentMode),t.isie8=t.isie&&"documentMode"in document&&8==document.documentMode,t.isie9=t.isie&&"performance"in window&&document.documentMode>=9,t.isie10=t.isie&&"performance"in window&&document.documentMode>=10,t.isie9mobile=/iemobile.9/i.test(navigator.userAgent),t.isie9mobile&&(t.isie9=!1),t.isie7mobile=!t.isie9mobile&&t.isie7&&/iemobile/i.test(navigator.userAgent),t.ismozilla="MozAppearance"in o.style,t.iswebkit="WebkitAppearance"in o.style,t.ischrome="chrome"in window,t.ischrome22=t.ischrome&&t.haspointerlock,t.ischrome26=t.ischrome&&"transition"in o.style,t.cantouch="ontouchstart"in document.documentElement||"ontouchstart"in window,t.hasmstouch=window.navigator.msPointerEnabled||!1,t.ismac=/^mac$/i.test(navigator.platform),t.isios=t.cantouch&&/iphone|ipad|ipod/i.test(navigator.platform),t.isios4=t.isios&&!("seal"in Object),t.isandroid=/android/i.test(navigator.userAgent),t.trstyle=!1,t.hastransform=!1,t.hastranslate3d=!1,t.transitionstyle=!1,t.hastransition=!1,t.transitionend=!1
for(var r=["transform","msTransform","webkitTransform","MozTransform","OTransform"],i=0;i<r.length;i++)if(void 0!==o.style[r[i]]){t.trstyle=r[i]
break}t.hastransform=0!=t.trstyle,t.hastransform&&(o.style[t.trstyle]="translate3d(1px,2px,3px)",t.hastranslate3d=/translate3d/.test(o.style[t.trstyle])),t.transitionstyle=!1,t.prefixstyle="",t.transitionend=!1
for(var r=["transition","webkitTransition","MozTransition","OTransition","OTransition","msTransition","KhtmlTransition"],n=["","-webkit-","-moz-","-o-","-o","-ms-","-khtml-"],s=["transitionend","webkitTransitionEnd","transitionend","otransitionend","oTransitionEnd","msTransitionEnd","KhtmlTransitionEnd"],i=0;i<r.length;i++)if(r[i]in o.style){t.transitionstyle=r[i],t.prefixstyle=n[i],t.transitionend=s[i]
break}return t.ischrome26&&(t.prefixstyle=n[1]),t.hastransition=t.transitionstyle,t.cursorgrabvalue=e(),t.hasmousecapture="setCapture"in o,t.hasMutationObserver=m!==!1,o=null,g=t,t},v=function(e,o){function t(){var e=v.doc.css(x.trstyle)
return e&&"matrix"==e.substr(0,6)?e.replace(/^.*\((.*)\)$/g,"$1").replace(/px/g,"").split(/, +/):!1}function c(){var e=v.win
if("zIndex"in e)return e.zIndex()
for(;e.length>0;){if(9==e[0].nodeType)return!1
var o=e.css("zIndex")
if(!isNaN(o)&&0!=o)return parseInt(o)
e=e.parent()}return!1}function h(e,o,t){var r=e.css(o),i=parseFloat(r)
if(isNaN(i)){i=T[r]||0
var n=3==i?t?v.win.outerHeight()-v.win.innerHeight():v.win.outerWidth()-v.win.innerWidth():1
return v.isie8&&i&&(i+=1),n?i:0}return i}function p(e,o,t,r){v._bind(e,o,function(r){var r=r?r:window.event,i={original:r,target:r.target||r.srcElement,type:"wheel",deltaMode:"MozMousePixelScroll"==r.type?0:1,deltaX:0,deltaZ:0,preventDefault:function(){return r.preventDefault?r.preventDefault():r.returnValue=!1,!1},stopImmediatePropagation:function(){r.stopImmediatePropagation?r.stopImmediatePropagation():r.cancelBubble=!0}}
return"mousewheel"==o?(i.deltaY=-1/40*r.wheelDelta,r.wheelDeltaX&&(i.deltaX=-1/40*r.wheelDeltaX)):i.deltaY=r.detail,t.call(e,i)},r)}function g(e,o,t){var r,i
if(0==e.deltaMode?(r=-Math.floor(e.deltaX*(v.opt.mousescrollstep/54)),i=-Math.floor(e.deltaY*(v.opt.mousescrollstep/54))):1==e.deltaMode&&(r=-Math.floor(e.deltaX*v.opt.mousescrollstep),i=-Math.floor(e.deltaY*v.opt.mousescrollstep)),o&&v.opt.oneaxismousemode&&0==r&&i&&(r=i,i=0),r&&(v.scrollmom&&v.scrollmom.stop(),v.lastdeltax+=r,v.debounced("mousewheelx",function(){var e=v.lastdeltax
v.lastdeltax=0,v.rail.drag||v.doScrollLeftBy(e)},15)),i){if(v.opt.nativeparentscrolling&&t&&!v.ispage&&!v.zoomactive)if(0>i){if(v.getScrollTop()>=v.page.maxh)return!0}else if(v.getScrollTop()<=0)return!0
v.scrollmom&&v.scrollmom.stop(),v.lastdeltay+=i,v.debounced("mousewheely",function(){var e=v.lastdeltay
v.lastdeltay=0,v.rail.drag||v.doScrollBy(e)},15)}return e.stopImmediatePropagation(),e.preventDefault()}var v=this
if(this.version="3.5.6",this.name="nicescroll",this.me=o,this.opt={doc:a("body"),win:!1},a.extend(this.opt,f),this.opt.snapbackspeed=80,e)for(var y in v.opt)void 0!==e[y]&&(v.opt[y]=e[y])
this.doc=v.opt.doc,this.iddoc=this.doc&&this.doc[0]?this.doc[0].id||"":"",this.ispage=/^BODY|HTML/.test(v.opt.win?v.opt.win[0].nodeName:this.doc[0].nodeName),this.haswrapper=v.opt.win!==!1,this.win=v.opt.win||(this.ispage?a(window):this.doc),this.docscroll=this.ispage&&!this.haswrapper?a(window):this.win,this.body=a("body"),this.viewport=!1,this.isfixed=!1,this.iframe=!1,this.isiframe="IFRAME"==this.doc[0].nodeName&&"IFRAME"==this.win[0].nodeName,this.istextarea="TEXTAREA"==this.win[0].nodeName,this.forcescreen=!1,this.canshowonmouseevent="scroll"!=v.opt.autohidemode,this.onmousedown=!1,this.onmouseup=!1,this.onmousemove=!1,this.onmousewheel=!1,this.onkeypress=!1,this.ongesturezoom=!1,this.onclick=!1,this.onscrollstart=!1,this.onscrollend=!1,this.onscrollcancel=!1,this.onzoomin=!1,this.onzoomout=!1,this.view=!1,this.page=!1,this.scroll={x:0,y:0},this.scrollratio={x:0,y:0},this.cursorheight=20,this.scrollvaluemax=0,this.isrtlmode="auto"==this.opt.rtlmode?"rtl"==(this.win[0]==window?this.body:this.win).css("direction"):this.opt.rtlmode===!0,this.scrollrunning=!1,this.scrollmom=!1,this.observer=!1,this.observerremover=!1
do this.id="ascrail"+s++
while(document.getElementById(this.id))
this.rail=!1,this.cursor=!1,this.cursorfreezed=!1,this.selectiondrag=!1,this.zoom=!1,this.zoomactive=!1,this.hasfocus=!1,this.hasmousefocus=!1,this.visibility=!0,this.locked=!1,this.hidden=!1,this.cursoractive=!0,this.wheelprevented=!1,this.overflowx=v.opt.overflowx,this.overflowy=v.opt.overflowy,this.nativescrollingarea=!1,this.checkarea=0,this.events=[],this.saved={},this.delaylist={},this.synclist={},this.lastdeltax=0,this.lastdeltay=0,this.detected=w()
var x=a.extend({},this.detected)
this.canhwscroll=x.hastransform&&v.opt.hwacceleration,this.ishwscroll=this.canhwscroll&&v.haswrapper,this.istouchcapable=!1,x.cantouch&&x.iswebkit&&!x.isios&&!x.isandroid&&(this.istouchcapable=!0,x.cantouch=!1),x.cantouch&&x.ismozilla&&!x.isios&&!x.isandroid&&(this.istouchcapable=!0,x.cantouch=!1),v.opt.enablemouselockapi||(x.hasmousecapture=!1,x.haspointerlock=!1),this.delayed=function(e,o,t,r){var i=v.delaylist[e],n=(new Date).getTime()
return!r&&i&&i.tt?!1:(i&&i.tt&&clearTimeout(i.tt),void(i&&i.last+t>n&&!i.tt?v.delaylist[e]={last:n+t,tt:setTimeout(function(){v&&(v.delaylist[e].tt=0,o.call())},t)}:i&&i.tt||(v.delaylist[e]={last:n,tt:0},setTimeout(function(){o.call()},0))))},this.debounced=function(e,o,t){{var r=v.delaylist[e];(new Date).getTime()}v.delaylist[e]=o,r||setTimeout(function(){var o=v.delaylist[e]
v.delaylist[e]=!1,o.call()},t)}
var S=!1
if(this.synched=function(e,o){function t(){S||(d(function(){S=!1
for(e in v.synclist){var o=v.synclist[e]
o&&o.call(v),v.synclist[e]=!1}}),S=!0)}return v.synclist[e]=o,t(),e},this.unsynched=function(e){v.synclist[e]&&(v.synclist[e]=!1)},this.css=function(e,o){for(var t in o)v.saved.css.push([e,t,e.css(t)]),e.css(t,o[t])},this.scrollTop=function(e){return void 0===e?v.getScrollTop():v.setScrollTop(e)},this.scrollLeft=function(e){return void 0===e?v.getScrollLeft():v.setScrollLeft(e)},BezierClass=function(e,o,t,r,i,n,s){this.st=e,this.ed=o,this.spd=t,this.p1=r||0,this.p2=i||1,this.p3=n||0,this.p4=s||1,this.ts=(new Date).getTime(),this.df=this.ed-this.st},BezierClass.prototype={B2:function(e){return 3*e*e*(1-e)},B3:function(e){return 3*e*(1-e)*(1-e)},B4:function(e){return(1-e)*(1-e)*(1-e)},getNow:function(){var e=(new Date).getTime(),o=1-(e-this.ts)/this.spd,t=this.B2(o)+this.B3(o)+this.B4(o)
return 0>o?this.ed:this.st+Math.round(this.df*t)},update:function(e,o){return this.st=this.getNow(),this.ed=e,this.spd=o,this.ts=(new Date).getTime(),this.df=this.ed-this.st,this}},this.ishwscroll){this.doc.translate={x:0,y:0,tx:"0px",ty:"0px"},x.hastranslate3d&&x.isios&&this.doc.css("-webkit-backface-visibility","hidden"),this.getScrollTop=function(e){if(!e){var o=t()
if(o)return 16==o.length?-o[13]:-o[5]
if(v.timerscroll&&v.timerscroll.bz)return v.timerscroll.bz.getNow()}return v.doc.translate.y},this.getScrollLeft=function(e){if(!e){var o=t()
if(o)return 16==o.length?-o[12]:-o[4]
if(v.timerscroll&&v.timerscroll.bh)return v.timerscroll.bh.getNow()}return v.doc.translate.x},this.notifyScrollEvent=document.createEvent?function(e){var o=document.createEvent("UIEvents")
o.initUIEvent("scroll",!1,!0,window,1),e.dispatchEvent(o)}:document.fireEvent?function(e){var o=document.createEventObject()
e.fireEvent("onscroll"),o.cancelBubble=!0}:function(){}
var z=this.isrtlmode?1:-1
x.hastranslate3d&&v.opt.enabletranslate3d?(this.setScrollTop=function(e,o){v.doc.translate.y=e,v.doc.translate.ty=-1*e+"px",v.doc.css(x.trstyle,"translate3d("+v.doc.translate.tx+","+v.doc.translate.ty+",0px)"),o||v.notifyScrollEvent(v.win[0])},this.setScrollLeft=function(e,o){v.doc.translate.x=e,v.doc.translate.tx=e*z+"px",v.doc.css(x.trstyle,"translate3d("+v.doc.translate.tx+","+v.doc.translate.ty+",0px)"),o||v.notifyScrollEvent(v.win[0])}):(this.setScrollTop=function(e,o){v.doc.translate.y=e,v.doc.translate.ty=-1*e+"px",v.doc.css(x.trstyle,"translate("+v.doc.translate.tx+","+v.doc.translate.ty+")"),o||v.notifyScrollEvent(v.win[0])},this.setScrollLeft=function(e,o){v.doc.translate.x=e,v.doc.translate.tx=e*z+"px",v.doc.css(x.trstyle,"translate("+v.doc.translate.tx+","+v.doc.translate.ty+")"),o||v.notifyScrollEvent(v.win[0])})}else this.getScrollTop=function(){return v.docscroll.scrollTop()},this.setScrollTop=function(e){return v.docscroll.scrollTop(e)},this.getScrollLeft=function(){return v.detected.ismozilla&&v.isrtlmode?Math.abs(v.docscroll.scrollLeft()):v.docscroll.scrollLeft()},this.setScrollLeft=function(e){return v.docscroll.scrollLeft(v.detected.ismozilla&&v.isrtlmode?-e:e)}
this.getTarget=function(e){return e?e.target?e.target:e.srcElement?e.srcElement:!1:!1},this.hasParent=function(e,o){if(!e)return!1
for(var t=e.target||e.srcElement||e||!1;t&&t.id!=o;)t=t.parentNode||!1
return t!==!1}
var T={thin:1,medium:3,thick:5}
this.getOffset=function(){if(v.isfixed)return{top:parseFloat(v.win.css("top")),left:parseFloat(v.win.css("left"))}
if(!v.viewport)return v.win.offset()
var e=v.win.offset(),o=v.viewport.offset()
return{top:e.top-o.top+v.viewport.scrollTop(),left:e.left-o.left+v.viewport.scrollLeft()}},this.updateScrollBar=function(e){if(v.ishwscroll)v.rail.css({height:v.win.innerHeight()}),v.railh&&v.railh.css({width:v.win.innerWidth()})
else{var o=v.getOffset(),t={top:o.top,left:o.left}
t.top+=h(v.win,"border-top-width",!0)
{(v.win.outerWidth()-v.win.innerWidth())/2}t.left+=v.rail.align?v.win.outerWidth()-h(v.win,"border-right-width")-v.rail.width:h(v.win,"border-left-width")
var r=v.opt.railoffset
if(r&&(r.top&&(t.top+=r.top),v.rail.align&&r.left&&(t.left+=r.left)),v.locked||v.rail.css({top:t.top,left:t.left,height:e?e.h:v.win.innerHeight()}),v.zoom&&v.zoom.css({top:t.top+1,left:1==v.rail.align?t.left-20:t.left+v.rail.width+4}),v.railh&&!v.locked){var t={top:o.top,left:o.left},r=v.opt.railhoffset
r&&(r.top&&(t.top+=r.top),r.left&&(t.left+=r.left))
var i=v.railh.align?t.top+h(v.win,"border-top-width",!0)+v.win.innerHeight()-v.railh.height:t.top+h(v.win,"border-top-width",!0),n=t.left+h(v.win,"border-left-width")
v.railh.css({top:i,left:n,width:v.railh.width})}}},this.doRailClick=function(e,o,t){var r,i,n,s
v.locked||(v.cancelEvent(e),o?(r=t?v.doScrollLeft:v.doScrollTop,n=t?(e.pageX-v.railh.offset().left-v.cursorwidth/2)*v.scrollratio.x:(e.pageY-v.rail.offset().top-v.cursorheight/2)*v.scrollratio.y,r(n)):(r=t?v.doScrollLeftBy:v.doScrollBy,n=t?v.scroll.x:v.scroll.y,s=t?e.pageX-v.railh.offset().left:e.pageY-v.rail.offset().top,i=t?v.view.w:v.view.h,r(n>=s?i:-i)))},v.hasanimationframe=d,v.hascancelanimationframe=u,v.hasanimationframe?v.hascancelanimationframe||(u=function(){v.cancelAnimationFrame=!0}):(d=function(e){return setTimeout(e,15-Math.floor(+new Date/1e3)%16)},u=clearInterval),this.init=function(){function e(o){if(v.selectiondrag){if(o){var t=v.win.outerHeight(),r=o.pageY-v.selectiondrag.top
r>0&&t>r&&(r=0),r>=t&&(r-=t),v.selectiondrag.df=r}if(0!=v.selectiondrag.df){var i=2*-Math.floor(v.selectiondrag.df/6)
v.doScrollBy(i),v.debounced("doselectionscroll",function(){e()},50)}}}function o(){v.iframexd=!1
try{{var e="contentDocument"in this?this.contentDocument:this.contentWindow.document
e.domain}}catch(o){v.iframexd=!0,e=!1}if(v.iframexd)return"console"in window&&console.log("NiceScroll error: policy restriced iframe"),!0
if(v.forcescreen=!0,v.isiframe&&(v.iframe={doc:a(e),html:v.doc.contents().find("html")[0],body:v.doc.contents().find("body")[0]},v.getContentSize=function(){return{w:Math.max(v.iframe.html.scrollWidth,v.iframe.body.scrollWidth),h:Math.max(v.iframe.html.scrollHeight,v.iframe.body.scrollHeight)}},v.docscroll=a(v.iframe.body)),!x.isios&&v.opt.iframeautoresize&&!v.isiframe){v.win.scrollTop(0),v.doc.height("")
var t=Math.max(e.getElementsByTagName("html")[0].scrollHeight,e.body.scrollHeight)
v.doc.height(t)}v.lazyResize(30),x.isie7&&v.css(a(v.iframe.html),{"overflow-y":"hidden"}),v.css(a(v.iframe.body),{"overflow-y":"hidden"}),x.isios&&v.haswrapper&&v.css(a(e.body),{"-webkit-transform":"translate3d(0,0,0)"}),"contentWindow"in this?v.bind(this.contentWindow,"scroll",v.onscroll):v.bind(e,"scroll",v.onscroll),v.opt.enablemousewheel&&v.bind(e,"mousewheel",v.onmousewheel),v.opt.enablekeyboard&&v.bind(e,x.isopera?"keypress":"keydown",v.onkeypress),(x.cantouch||v.opt.touchbehavior)&&(v.bind(e,"mousedown",v.ontouchstart),v.bind(e,"mousemove",function(e){v.ontouchmove(e,!0)}),v.opt.grabcursorenabled&&x.cursorgrabvalue&&v.css(a(e.body),{cursor:x.cursorgrabvalue})),v.bind(e,"mouseup",v.ontouchend),v.zoom&&(v.opt.dblclickzoom&&v.bind(e,"dblclick",v.doZoom),v.ongesturezoom&&v.bind(e,"gestureend",v.ongesturezoom))}if(v.saved.css=[],x.isie7mobile)return!0
if(x.isoperamini)return!0
if(x.hasmstouch&&v.css(v.ispage?a("html"):v.win,{"-ms-touch-action":"none"}),v.zindex="auto",v.zindex=v.ispage||"auto"!=v.opt.zindex?v.opt.zindex:c()||"auto",v.ispage||"auto"==v.zindex||v.zindex>l&&(l=v.zindex),v.isie&&0==v.zindex&&"auto"==v.opt.zindex&&(v.zindex="auto"),!v.ispage||!x.cantouch&&!x.isieold&&!x.isie9mobile){var t=v.docscroll
v.ispage&&(t=v.haswrapper?v.win:v.doc),x.isie9mobile||v.css(t,{"overflow-y":"hidden"}),v.ispage&&x.isie7&&("BODY"==v.doc[0].nodeName?v.css(a("html"),{"overflow-y":"hidden"}):"HTML"==v.doc[0].nodeName&&v.css(a("body"),{"overflow-y":"hidden"})),!x.isios||v.ispage||v.haswrapper||v.css(a("body"),{"-webkit-overflow-scrolling":"touch"})
var s=a(document.createElement("div"))
s.css({position:"relative",top:0,"float":"right",width:v.opt.cursorwidth,height:"0px","background-color":v.opt.cursorcolor,border:v.opt.cursorborder,"background-clip":"padding-box","-webkit-border-radius":v.opt.cursorborderradius,"-moz-border-radius":v.opt.cursorborderradius,"border-radius":v.opt.cursorborderradius}),s.hborder=parseFloat(s.outerHeight()-s.innerHeight()),v.cursor=s
var d=a(document.createElement("div"))
d.attr("id",v.id),d.addClass("nicescroll-rails")
var u,h,p=["left","right"]
for(var f in p)h=p[f],u=v.opt.railpadding[h],u?d.css("padding-"+h,u+"px"):v.opt.railpadding[h]=0
d.append(s),d.width=Math.max(parseFloat(v.opt.cursorwidth),s.outerWidth())+v.opt.railpadding.left+v.opt.railpadding.right,d.css({width:d.width+"px",zIndex:v.zindex,background:v.opt.background,cursor:"default"}),d.visibility=!0,d.scrollable=!0,d.align="left"==v.opt.railalign?0:1,v.rail=d,v.rail.drag=!1
var g=!1
if(!v.opt.boxzoom||v.ispage||x.isieold||(g=document.createElement("div"),v.bind(g,"click",v.doZoom),v.zoom=a(g),v.zoom.css({cursor:"pointer","z-index":v.zindex,backgroundImage:"url("+v.opt.scriptpath+"zoomico.png)",height:18,width:18,backgroundPosition:"0px 0px"}),v.opt.dblclickzoom&&v.bind(v.win,"dblclick",v.doZoom),x.cantouch&&v.opt.gesturezoom&&(v.ongesturezoom=function(e){return e.scale>1.5&&v.doZoomIn(e),e.scale<.8&&v.doZoomOut(e),v.cancelEvent(e)},v.bind(v.win,"gestureend",v.ongesturezoom))),v.railh=!1,v.opt.horizrailenabled){v.css(t,{"overflow-x":"hidden"})
var s=a(document.createElement("div"))
s.css({position:"absolute",top:0,height:v.opt.cursorwidth,width:"0px","background-color":v.opt.cursorcolor,border:v.opt.cursorborder,"background-clip":"padding-box","-webkit-border-radius":v.opt.cursorborderradius,"-moz-border-radius":v.opt.cursorborderradius,"border-radius":v.opt.cursorborderradius}),s.wborder=parseFloat(s.outerWidth()-s.innerWidth()),v.cursorh=s
var w=a(document.createElement("div"))
w.attr("id",v.id+"-hr"),w.addClass("nicescroll-rails"),w.height=Math.max(parseFloat(v.opt.cursorwidth),s.outerHeight()),w.css({height:w.height+"px",zIndex:v.zindex,background:v.opt.background}),w.append(s),w.visibility=!0,w.scrollable=!0,w.align="top"==v.opt.railvalign?0:1,v.railh=w,v.railh.drag=!1}if(v.ispage)d.css({position:"fixed",top:"0px",height:"100%"}),d.css(d.align?{right:"0px"}:{left:"0px"}),v.body.append(d),v.railh&&(w.css({position:"fixed",left:"0px",width:"100%"}),w.css(w.align?{bottom:"0px"}:{top:"0px"}),v.body.append(w))
else{if(v.ishwscroll){"static"==v.win.css("position")&&v.css(v.win,{position:"relative"})
var y="HTML"==v.win[0].nodeName?v.body:v.win
v.zoom&&(v.zoom.css({position:"absolute",top:1,right:0,"margin-right":d.width+4}),y.append(v.zoom)),d.css({position:"absolute",top:0}),d.css(d.align?{right:0}:{left:0}),y.append(d),w&&(w.css({position:"absolute",left:0,bottom:0}),w.css(w.align?{bottom:0}:{top:0}),y.append(w))}else{v.isfixed="fixed"==v.win.css("position")
var S=v.isfixed?"fixed":"absolute"
v.isfixed||(v.viewport=v.getViewport(v.win[0])),v.viewport&&(v.body=v.viewport,0==/fixed|relative|absolute/.test(v.viewport.css("position"))&&v.css(v.viewport,{position:"relative"})),d.css({position:S}),v.zoom&&v.zoom.css({position:S}),v.updateScrollBar(),v.body.append(d),v.zoom&&v.body.append(v.zoom),v.railh&&(w.css({position:S}),v.body.append(w))}x.isios&&v.css(v.win,{"-webkit-tap-highlight-color":"rgba(0,0,0,0)","-webkit-touch-callout":"none"}),x.isie&&v.opt.disableoutline&&v.win.attr("hideFocus","true"),x.iswebkit&&v.opt.disableoutline&&v.win.css({outline:"none"})}if(v.opt.autohidemode===!1?(v.autohidedom=!1,v.rail.css({opacity:v.opt.cursoropacitymax}),v.railh&&v.railh.css({opacity:v.opt.cursoropacitymax})):v.opt.autohidemode===!0||"leave"===v.opt.autohidemode?(v.autohidedom=a().add(v.rail),x.isie8&&(v.autohidedom=v.autohidedom.add(v.cursor)),v.railh&&(v.autohidedom=v.autohidedom.add(v.railh)),v.railh&&x.isie8&&(v.autohidedom=v.autohidedom.add(v.cursorh))):"scroll"==v.opt.autohidemode?(v.autohidedom=a().add(v.rail),v.railh&&(v.autohidedom=v.autohidedom.add(v.railh))):"cursor"==v.opt.autohidemode?(v.autohidedom=a().add(v.cursor),v.railh&&(v.autohidedom=v.autohidedom.add(v.cursorh))):"hidden"==v.opt.autohidemode&&(v.autohidedom=!1,v.hide(),v.locked=!1),x.isie9mobile){v.scrollmom=new b(v),v.onmangotouch=function(){var e=v.getScrollTop(),o=v.getScrollLeft()
if(e==v.scrollmom.lastscrolly&&o==v.scrollmom.lastscrollx)return!0
var t=e-v.mangotouch.sy,r=o-v.mangotouch.sx,i=Math.round(Math.sqrt(Math.pow(r,2)+Math.pow(t,2)))
if(0!=i){var n=0>t?-1:1,s=0>r?-1:1,l=+new Date
if(v.mangotouch.lazy&&clearTimeout(v.mangotouch.lazy),l-v.mangotouch.tm>80||v.mangotouch.dry!=n||v.mangotouch.drx!=s)v.scrollmom.stop(),v.scrollmom.reset(o,e),v.mangotouch.sy=e,v.mangotouch.ly=e,v.mangotouch.sx=o,v.mangotouch.lx=o,v.mangotouch.dry=n,v.mangotouch.drx=s,v.mangotouch.tm=l
else{v.scrollmom.stop(),v.scrollmom.update(v.mangotouch.sx-r,v.mangotouch.sy-t)
{l-v.mangotouch.tm}v.mangotouch.tm=l
var a=Math.max(Math.abs(v.mangotouch.ly-e),Math.abs(v.mangotouch.lx-o))
v.mangotouch.ly=e,v.mangotouch.lx=o,a>2&&(v.mangotouch.lazy=setTimeout(function(){v.mangotouch.lazy=!1,v.mangotouch.dry=0,v.mangotouch.drx=0,v.mangotouch.tm=0,v.scrollmom.doMomentum(30)},100))}}}
var z=v.getScrollTop(),T=v.getScrollLeft()
v.mangotouch={sy:z,ly:z,dry:0,sx:T,lx:T,drx:0,lazy:!1,tm:0},v.bind(v.docscroll,"scroll",v.onmangotouch)}else{if(x.cantouch||v.istouchcapable||v.opt.touchbehavior||x.hasmstouch){v.scrollmom=new b(v),v.ontouchstart=function(e){if(e.pointerType&&2!=e.pointerType&&"touch"!=e.pointerType)return!1
if(v.hasmoving=!1,!v.locked){if(x.hasmstouch)for(var o=e.target?e.target:!1;o;){var t=a(o).getNiceScroll()
if(t.length>0&&t[0].me==v.me)break
if(t.length>0)return!1
if("DIV"==o.nodeName&&o.id==v.id)break
o=o.parentNode?o.parentNode:!1}v.cancelScroll()
var o=v.getTarget(e)
if(o){var r=/INPUT/i.test(o.nodeName)&&/range/i.test(o.type)
if(r)return v.stopPropagation(e)}if(!("clientX"in e)&&"changedTouches"in e&&(e.clientX=e.changedTouches[0].clientX,e.clientY=e.changedTouches[0].clientY),v.forcescreen){var i=e,e={original:e.original?e.original:e}
e.clientX=i.screenX,e.clientY=i.screenY}if(v.rail.drag={x:e.clientX,y:e.clientY,sx:v.scroll.x,sy:v.scroll.y,st:v.getScrollTop(),sl:v.getScrollLeft(),pt:2,dl:!1},v.ispage||!v.opt.directionlockdeadzone)v.rail.drag.dl="f"
else{var n={w:a(window).width(),h:a(window).height()},s={w:Math.max(document.body.scrollWidth,document.documentElement.scrollWidth),h:Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},l=Math.max(0,s.h-n.h),c=Math.max(0,s.w-n.w)
v.rail.drag.ck=!v.rail.scrollable&&v.railh.scrollable?l>0?"v":!1:v.rail.scrollable&&!v.railh.scrollable&&c>0?"h":!1,v.rail.drag.ck||(v.rail.drag.dl="f")}if(v.opt.touchbehavior&&v.isiframe&&x.isie){var d=v.win.position()
v.rail.drag.x+=d.left,v.rail.drag.y+=d.top}if(v.hasmoving=!1,v.lastmouseup=!1,v.scrollmom.reset(e.clientX,e.clientY),!x.cantouch&&!this.istouchcapable&&!x.hasmstouch){var u=o?/INPUT|SELECT|TEXTAREA/i.test(o.nodeName):!1
if(!u)return!v.ispage&&x.hasmousecapture&&o.setCapture(),v.opt.touchbehavior?(o.onclick&&!o._onclick&&(o._onclick=o.onclick,o.onclick=function(e){return v.hasmoving?!1:void o._onclick.call(this,e)}),v.cancelEvent(e)):v.stopPropagation(e);/SUBMIT|CANCEL|BUTTON/i.test(a(o).attr("type"))&&(pc={tg:o,click:!1},v.preventclick=pc)}}},v.ontouchend=function(e){return e.pointerType&&2!=e.pointerType&&"touch"!=e.pointerType?!1:v.rail.drag&&2==v.rail.drag.pt&&(v.scrollmom.doMomentum(),v.rail.drag=!1,v.hasmoving&&(v.lastmouseup=!0,v.hideCursor(),x.hasmousecapture&&document.releaseCapture(),!x.cantouch))?v.cancelEvent(e):void 0}
var k=v.opt.touchbehavior&&v.isiframe&&!x.hasmousecapture
v.ontouchmove=function(e,o){if(e.pointerType&&2!=e.pointerType&&"touch"!=e.pointerType)return!1
if(v.rail.drag&&2==v.rail.drag.pt){if(x.cantouch&&void 0===e.original)return!0
v.hasmoving=!0,v.preventclick&&!v.preventclick.click&&(v.preventclick.click=v.preventclick.tg.onclick||!1,v.preventclick.tg.onclick=v.onpreventclick)
var t=a.extend({original:e},e)
if(e=t,"changedTouches"in e&&(e.clientX=e.changedTouches[0].clientX,e.clientY=e.changedTouches[0].clientY),v.forcescreen){var r=e,e={original:e.original?e.original:e}
e.clientX=r.screenX,e.clientY=r.screenY}var i=ofy=0
if(k&&!o){var n=v.win.position()
i=-n.left,ofy=-n.top}var s=e.clientY+ofy,l=s-v.rail.drag.y,c=e.clientX+i,d=c-v.rail.drag.x,u=v.rail.drag.st-l
if(v.ishwscroll&&v.opt.bouncescroll?0>u?u=Math.round(u/2):u>v.page.maxh&&(u=v.page.maxh+Math.round((u-v.page.maxh)/2)):(0>u&&(u=0,s=0),u>v.page.maxh&&(u=v.page.maxh,s=0)),v.railh&&v.railh.scrollable){var h=v.isrtlmode?d-v.rail.drag.sl:v.rail.drag.sl-d
v.ishwscroll&&v.opt.bouncescroll?0>h?h=Math.round(h/2):h>v.page.maxw&&(h=v.page.maxw+Math.round((h-v.page.maxw)/2)):(0>h&&(h=0,c=0),h>v.page.maxw&&(h=v.page.maxw,c=0))}var p=!1
if(v.rail.drag.dl)p=!0,"v"==v.rail.drag.dl?h=v.rail.drag.sl:"h"==v.rail.drag.dl&&(u=v.rail.drag.st)
else{var m=Math.abs(l),f=Math.abs(d),g=v.opt.directionlockdeadzone
if("v"==v.rail.drag.ck){if(m>g&&.3*m>=f)return v.rail.drag=!1,!0
f>g&&(v.rail.drag.dl="f",a("body").scrollTop(a("body").scrollTop()))}else if("h"==v.rail.drag.ck){if(f>g&&.3*f>=m)return v.rail.drag=!1,!0
m>g&&(v.rail.drag.dl="f",a("body").scrollLeft(a("body").scrollLeft()))}}if(v.synched("touchmove",function(){v.rail.drag&&2==v.rail.drag.pt&&(v.prepareTransition&&v.prepareTransition(0),v.rail.scrollable&&v.setScrollTop(u),v.scrollmom.update(c,s),v.railh&&v.railh.scrollable?(v.setScrollLeft(h),v.showCursor(u,h)):v.showCursor(u),x.isie10&&document.selection.clear())}),x.ischrome&&v.istouchcapable&&(p=!1),p)return v.cancelEvent(e)}}}v.onmousedown=function(e,o){if(!v.rail.drag||1==v.rail.drag.pt){if(v.locked)return v.cancelEvent(e)
v.cancelScroll(),v.rail.drag={x:e.clientX,y:e.clientY,sx:v.scroll.x,sy:v.scroll.y,pt:1,hr:!!o}
var t=v.getTarget(e)
return!v.ispage&&x.hasmousecapture&&t.setCapture(),v.isiframe&&!x.hasmousecapture&&(v.saved.csspointerevents=v.doc.css("pointer-events"),v.css(v.doc,{"pointer-events":"none"})),v.hasmoving=!1,v.cancelEvent(e)}},v.onmouseup=function(e){if(v.rail.drag){if(x.hasmousecapture&&document.releaseCapture(),v.isiframe&&!x.hasmousecapture&&v.doc.css("pointer-events",v.saved.csspointerevents),1!=v.rail.drag.pt)return
return v.rail.drag=!1,v.hasmoving&&v.triggerScrollEnd(),v.cancelEvent(e)}},v.onmousemove=function(e){if(v.rail.drag){if(1!=v.rail.drag.pt)return
if(x.ischrome&&0==e.which)return v.onmouseup(e)
if(v.cursorfreezed=!0,v.hasmoving=!0,v.rail.drag.hr){v.scroll.x=v.rail.drag.sx+(e.clientX-v.rail.drag.x),v.scroll.x<0&&(v.scroll.x=0)
var o=v.scrollvaluemaxw
v.scroll.x>o&&(v.scroll.x=o)}else{v.scroll.y=v.rail.drag.sy+(e.clientY-v.rail.drag.y),v.scroll.y<0&&(v.scroll.y=0)
var t=v.scrollvaluemax
v.scroll.y>t&&(v.scroll.y=t)}return v.synched("mousemove",function(){v.rail.drag&&1==v.rail.drag.pt&&(v.showCursor(),v.rail.drag.hr?v.doScrollLeft(Math.round(v.scroll.x*v.scrollratio.x),v.opt.cursordragspeed):v.doScrollTop(Math.round(v.scroll.y*v.scrollratio.y),v.opt.cursordragspeed))}),v.cancelEvent(e)}},x.cantouch||v.opt.touchbehavior?(v.onpreventclick=function(e){return v.preventclick?(v.preventclick.tg.onclick=v.preventclick.click,v.preventclick=!1,v.cancelEvent(e)):void 0},v.bind(v.win,"mousedown",v.ontouchstart),v.onclick=x.isios?!1:function(e){return v.lastmouseup?(v.lastmouseup=!1,v.cancelEvent(e)):!0},v.opt.grabcursorenabled&&x.cursorgrabvalue&&(v.css(v.ispage?v.doc:v.win,{cursor:x.cursorgrabvalue}),v.css(v.rail,{cursor:x.cursorgrabvalue}))):(v.hasTextSelected="getSelection"in document?function(){return document.getSelection().rangeCount>0}:"selection"in document?function(){return"None"!=document.selection.type}:function(){return!1},v.onselectionstart=function(){v.ispage||(v.selectiondrag=v.win.offset())},v.onselectionend=function(){v.selectiondrag=!1},v.onselectiondrag=function(o){v.selectiondrag&&v.hasTextSelected()&&v.debounced("selectionscroll",function(){e(o)},250)}),x.hasmstouch&&(v.css(v.rail,{"-ms-touch-action":"none"}),v.css(v.cursor,{"-ms-touch-action":"none"}),v.bind(v.win,"MSPointerDown",v.ontouchstart),v.bind(document,"MSPointerUp",v.ontouchend),v.bind(document,"MSPointerMove",v.ontouchmove),v.bind(v.cursor,"MSGestureHold",function(e){e.preventDefault()}),v.bind(v.cursor,"contextmenu",function(e){e.preventDefault()})),this.istouchcapable&&(v.bind(v.win,"touchstart",v.ontouchstart),v.bind(document,"touchend",v.ontouchend),v.bind(document,"touchcancel",v.ontouchend),v.bind(document,"touchmove",v.ontouchmove)),v.bind(v.cursor,"mousedown",v.onmousedown),v.bind(v.cursor,"mouseup",v.onmouseup),v.railh&&(v.bind(v.cursorh,"mousedown",function(e){v.onmousedown(e,!0)}),v.bind(v.cursorh,"mouseup",v.onmouseup)),(v.opt.cursordragontouch||!x.cantouch&&!v.opt.touchbehavior)&&(v.rail.css({cursor:"default"}),v.railh&&v.railh.css({cursor:"default"}),v.jqbind(v.rail,"mouseenter",function(){return v.win.is(":visible")?(v.canshowonmouseevent&&v.showCursor(),void(v.rail.active=!0)):!1}),v.jqbind(v.rail,"mouseleave",function(){v.rail.active=!1,v.rail.drag||v.hideCursor()}),v.opt.sensitiverail&&(v.bind(v.rail,"click",function(e){v.doRailClick(e,!1,!1)}),v.bind(v.rail,"dblclick",function(e){v.doRailClick(e,!0,!1)}),v.bind(v.cursor,"click",function(e){v.cancelEvent(e)}),v.bind(v.cursor,"dblclick",function(e){v.cancelEvent(e)})),v.railh&&(v.jqbind(v.railh,"mouseenter",function(){return v.win.is(":visible")?(v.canshowonmouseevent&&v.showCursor(),void(v.rail.active=!0)):!1}),v.jqbind(v.railh,"mouseleave",function(){v.rail.active=!1,v.rail.drag||v.hideCursor()}),v.opt.sensitiverail&&(v.bind(v.railh,"click",function(e){v.doRailClick(e,!1,!0)}),v.bind(v.railh,"dblclick",function(e){v.doRailClick(e,!0,!0)}),v.bind(v.cursorh,"click",function(e){v.cancelEvent(e)}),v.bind(v.cursorh,"dblclick",function(e){v.cancelEvent(e)})))),x.cantouch||v.opt.touchbehavior?(v.bind(x.hasmousecapture?v.win:document,"mouseup",v.ontouchend),v.bind(document,"mousemove",v.ontouchmove),v.onclick&&v.bind(document,"click",v.onclick),v.opt.cursordragontouch&&(v.bind(v.cursor,"mousedown",v.onmousedown),v.bind(v.cursor,"mousemove",v.onmousemove),v.cursorh&&v.bind(v.cursorh,"mousedown",function(e){v.onmousedown(e,!0)}),v.cursorh&&v.bind(v.cursorh,"mousemove",v.onmousemove))):(v.bind(x.hasmousecapture?v.win:document,"mouseup",v.onmouseup),v.bind(document,"mousemove",v.onmousemove),v.onclick&&v.bind(document,"click",v.onclick),!v.ispage&&v.opt.enablescrollonselection&&(v.bind(v.win[0],"mousedown",v.onselectionstart),v.bind(document,"mouseup",v.onselectionend),v.bind(v.cursor,"mouseup",v.onselectionend),v.cursorh&&v.bind(v.cursorh,"mouseup",v.onselectionend),v.bind(document,"mousemove",v.onselectiondrag)),v.zoom&&(v.jqbind(v.zoom,"mouseenter",function(){v.canshowonmouseevent&&v.showCursor(),v.rail.active=!0}),v.jqbind(v.zoom,"mouseleave",function(){v.rail.active=!1,v.rail.drag||v.hideCursor()}))),v.opt.enablemousewheel&&(v.isiframe||v.bind(x.isie&&v.ispage?document:v.win,"mousewheel",v.onmousewheel),v.bind(v.rail,"mousewheel",v.onmousewheel),v.railh&&v.bind(v.railh,"mousewheel",v.onmousewheelhr)),v.ispage||x.cantouch||/HTML|^BODY/.test(v.win[0].nodeName)||(v.win.attr("tabindex")||v.win.attr({tabindex:n++}),v.jqbind(v.win,"focus",function(e){r=v.getTarget(e).id||!0,v.hasfocus=!0,v.canshowonmouseevent&&v.noticeCursor()}),v.jqbind(v.win,"blur",function(){r=!1,v.hasfocus=!1}),v.jqbind(v.win,"mouseenter",function(e){i=v.getTarget(e).id||!0,v.hasmousefocus=!0,v.canshowonmouseevent&&v.noticeCursor()}),v.jqbind(v.win,"mouseleave",function(){i=!1,v.hasmousefocus=!1,v.rail.drag||v.hideCursor()}))}if(v.onkeypress=function(e){if(v.locked&&0==v.page.maxh)return!0
e=e?e:window.e
var o=v.getTarget(e)
if(o&&/INPUT|TEXTAREA|SELECT|OPTION/.test(o.nodeName)){var t=o.getAttribute("type")||o.type||!1
if(!t||!/submit|button|cancel/i.tp)return!0}if(a(o).attr("contenteditable"))return!0
if(v.hasfocus||v.hasmousefocus&&!r||v.ispage&&!r&&!i){var n=e.keyCode
if(v.locked&&27!=n)return v.cancelEvent(e)
var s=e.ctrlKey||!1,l=e.shiftKey||!1,c=!1
switch(n){case 38:case 63233:v.doScrollBy(72),c=!0
break
case 40:case 63235:v.doScrollBy(-72),c=!0
break
case 37:case 63232:v.railh&&(s?v.doScrollLeft(0):v.doScrollLeftBy(72),c=!0)
break
case 39:case 63234:v.railh&&(s?v.doScrollLeft(v.page.maxw):v.doScrollLeftBy(-72),c=!0)
break
case 33:case 63276:v.doScrollBy(v.view.h),c=!0
break
case 34:case 63277:v.doScrollBy(-v.view.h),c=!0
break
case 36:case 63273:v.railh&&s?v.doScrollPos(0,0):v.doScrollTo(0),c=!0
break
case 35:case 63275:v.railh&&s?v.doScrollPos(v.page.maxw,v.page.maxh):v.doScrollTo(v.page.maxh),c=!0
break
case 32:v.opt.spacebarenabled&&(v.doScrollBy(l?v.view.h:-v.view.h),c=!0)
break
case 27:v.zoomactive&&(v.doZoom(),c=!0)}if(c)return v.cancelEvent(e)}},v.opt.enablekeyboard&&v.bind(document,x.isopera&&!x.isopera12?"keypress":"keydown",v.onkeypress),v.bind(document,"keydown",function(e){var o=e.ctrlKey||!1
o&&(v.wheelprevented=!0)}),v.bind(document,"keyup",function(e){var o=e.ctrlKey||!1
o||(v.wheelprevented=!1)}),v.bind(window,"resize",v.lazyResize),v.bind(window,"orientationchange",v.lazyResize),v.bind(window,"load",v.lazyResize),x.ischrome&&!v.ispage&&!v.haswrapper){var M=v.win.attr("style"),E=parseFloat(v.win.css("width"))+1
v.win.css("width",E),v.synched("chromefix",function(){v.win.attr("style",M)})}v.onAttributeChange=function(){v.lazyResize(250)},v.ispage||v.haswrapper||(m!==!1?(v.observer=new m(function(e){e.forEach(v.onAttributeChange)}),v.observer.observe(v.win[0],{childList:!0,characterData:!1,attributes:!0,subtree:!1}),v.observerremover=new m(function(e){e.forEach(function(e){if(e.removedNodes.length>0)for(var o in e.removedNodes)if(e.removedNodes[o]==v.win[0])return v.remove()})}),v.observerremover.observe(v.win[0].parentNode,{childList:!0,characterData:!1,attributes:!1,subtree:!1})):(v.bind(v.win,x.isie&&!x.isie9?"propertychange":"DOMAttrModified",v.onAttributeChange),x.isie9&&v.win[0].attachEvent("onpropertychange",v.onAttributeChange),v.bind(v.win,"DOMNodeRemoved",function(e){e.target==v.win[0]&&v.remove()}))),!v.ispage&&v.opt.boxzoom&&v.bind(window,"resize",v.resizeZoom),v.istextarea&&v.bind(v.win,"mouseup",v.lazyResize),v.lazyResize(30)}"IFRAME"==this.doc[0].nodeName&&(this.doc[0].readyState&&"complete"==this.doc[0].readyState&&setTimeout(function(){o.call(v.doc[0],!1)},500),v.bind(this.doc,"load",o))},this.showCursor=function(e,o){v.cursortimeout&&(clearTimeout(v.cursortimeout),v.cursortimeout=0),v.rail&&(v.autohidedom&&(v.autohidedom.stop().css({opacity:v.opt.cursoropacitymax}),v.cursoractive=!0),v.rail.drag&&1==v.rail.drag.pt||(void 0!==e&&e!==!1&&(v.scroll.y=Math.round(1*e/v.scrollratio.y)),void 0!==o&&(v.scroll.x=Math.round(1*o/v.scrollratio.x))),v.cursor.css({height:v.cursorheight,top:v.scroll.y}),v.cursorh&&(v.cursorh.css(!v.rail.align&&v.rail.visibility?{width:v.cursorwidth,left:v.scroll.x+v.rail.width}:{width:v.cursorwidth,left:v.scroll.x}),v.cursoractive=!0),v.zoom&&v.zoom.stop().css({opacity:v.opt.cursoropacitymax}))},this.hideCursor=function(e){v.cursortimeout||v.rail&&v.autohidedom&&(v.hasmousefocus&&"leave"==v.opt.autohidemode||(v.cursortimeout=setTimeout(function(){v.rail.active&&v.showonmouseevent||(v.autohidedom.stop().animate({opacity:v.opt.cursoropacitymin}),v.zoom&&v.zoom.stop().animate({opacity:v.opt.cursoropacitymin}),v.cursoractive=!1),v.cursortimeout=0},e||v.opt.hidecursordelay)))},this.noticeCursor=function(e,o,t){v.showCursor(o,t),v.rail.active||v.hideCursor(e)},this.getContentSize=v.ispage?function(){return{w:Math.max(document.body.scrollWidth,document.documentElement.scrollWidth),h:Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)}}:v.haswrapper?function(){return{w:v.doc.outerWidth()+parseInt(v.win.css("paddingLeft"))+parseInt(v.win.css("paddingRight")),h:v.doc.outerHeight()+parseInt(v.win.css("paddingTop"))+parseInt(v.win.css("paddingBottom"))}}:function(){return{w:v.docscroll[0].scrollWidth,h:v.docscroll[0].scrollHeight}},this.onResize=function(e,o){if(!v||!v.win)return!1
if(!v.haswrapper&&!v.ispage){if("none"==v.win.css("display"))return v.visibility&&v.hideRail().hideRailHr(),!1
v.hidden||v.visibility||v.showRail().showRailHr()}var t=v.page.maxh,r=v.page.maxw,i={h:v.view.h,w:v.view.w}
if(v.view={w:v.ispage?v.win.width():parseInt(v.win[0].clientWidth),h:v.ispage?v.win.height():parseInt(v.win[0].clientHeight)},v.page=o?o:v.getContentSize(),v.page.maxh=Math.max(0,v.page.h-v.view.h),v.page.maxw=Math.max(0,v.page.w-v.view.w),v.page.maxh==t&&v.page.maxw==r&&v.view.w==i.w){if(v.ispage)return v
var n=v.win.offset()
if(v.lastposition){var s=v.lastposition
if(s.top==n.top&&s.left==n.left)return v}v.lastposition=n}if(0==v.page.maxh?(v.hideRail(),v.scrollvaluemax=0,v.scroll.y=0,v.scrollratio.y=0,v.cursorheight=0,v.setScrollTop(0),v.rail.scrollable=!1):v.rail.scrollable=!0,0==v.page.maxw?(v.hideRailHr(),v.scrollvaluemaxw=0,v.scroll.x=0,v.scrollratio.x=0,v.cursorwidth=0,v.setScrollLeft(0),v.railh.scrollable=!1):v.railh.scrollable=!0,v.locked=0==v.page.maxh&&0==v.page.maxw,v.locked)return v.ispage||v.updateScrollBar(v.view),!1
v.hidden||v.visibility?v.hidden||v.railh.visibility||v.showRailHr():v.showRail().showRailHr(),v.istextarea&&v.win.css("resize")&&"none"!=v.win.css("resize")&&(v.view.h-=20),v.cursorheight=Math.min(v.view.h,Math.round(v.view.h*(v.view.h/v.page.h))),v.cursorheight=v.opt.cursorfixedheight?v.opt.cursorfixedheight:Math.max(v.opt.cursorminheight,v.cursorheight),v.cursorwidth=Math.min(v.view.w,Math.round(v.view.w*(v.view.w/v.page.w))),v.cursorwidth=v.opt.cursorfixedheight?v.opt.cursorfixedheight:Math.max(v.opt.cursorminheight,v.cursorwidth),v.scrollvaluemax=v.view.h-v.cursorheight-v.cursor.hborder,v.railh&&(v.railh.width=v.page.maxh>0?v.view.w-v.rail.width:v.view.w,v.scrollvaluemaxw=v.railh.width-v.cursorwidth-v.cursorh.wborder),v.ispage||v.updateScrollBar(v.view),v.scrollratio={x:v.page.maxw/v.scrollvaluemaxw,y:v.page.maxh/v.scrollvaluemax}
var l=v.getScrollTop()
return l>v.page.maxh?v.doScrollTop(v.page.maxh):(v.scroll.y=Math.round(v.getScrollTop()*(1/v.scrollratio.y)),v.scroll.x=Math.round(v.getScrollLeft()*(1/v.scrollratio.x)),v.cursoractive&&v.noticeCursor()),v.scroll.y&&0==v.getScrollTop()&&v.doScrollTo(Math.floor(v.scroll.y*v.scrollratio.y)),v},this.resize=v.onResize,this.lazyResize=function(e){return e=isNaN(e)?30:e,v.delayed("resize",v.resize,e),v},this._bind=function(e,o,t,r){v.events.push({e:e,n:o,f:t,b:r,q:!1}),e.addEventListener?e.addEventListener(o,t,r||!1):e.attachEvent?e.attachEvent("on"+o,t):e["on"+o]=t},this.jqbind=function(e,o,t){v.events.push({e:e,n:o,f:t,q:!0}),a(e).bind(o,t)},this.bind=function(e,o,t,r){var i="jquery"in e?e[0]:e
if("mousewheel"==o)if("onwheel"in document||document.documentMode>=9)v._bind(i,"wheel",t,r||!1)
else{var n=void 0!==document.onmousewheel?"mousewheel":"DOMMouseScroll"
p(i,n,t,r||!1),"DOMMouseScroll"==n&&p(i,"MozMousePixelScroll",t,r||!1)}else if(i.addEventListener){if(x.cantouch&&/mouseup|mousedown|mousemove/.test(o)){var s="mousedown"==o?"touchstart":"mouseup"==o?"touchend":"touchmove"
v._bind(i,s,function(e){if(e.touches){if(e.touches.length<2){var o=e.touches.length?e.touches[0]:e
o.original=e,t.call(this,o)}}else if(e.changedTouches){var o=e.changedTouches[0]
o.original=e,t.call(this,o)}},r||!1)}v._bind(i,o,t,r||!1),x.cantouch&&"mouseup"==o&&v._bind(i,"touchcancel",t,r||!1)}else v._bind(i,o,function(e){return e=e||window.event||!1,e&&e.srcElement&&(e.target=e.srcElement),"pageY"in e||(e.pageX=e.clientX+document.documentElement.scrollLeft,e.pageY=e.clientY+document.documentElement.scrollTop),t.call(i,e)===!1||r===!1?v.cancelEvent(e):!0})},this._unbind=function(e,o,t,r){e.removeEventListener?e.removeEventListener(o,t,r):e.detachEvent?e.detachEvent("on"+o,t):e["on"+o]=!1},this.unbindAll=function(){for(var e=0;e<v.events.length;e++){var o=v.events[e]
o.q?o.e.unbind(o.n,o.f):v._unbind(o.e,o.n,o.f,o.b)}},this.cancelEvent=function(e){var e=e.original?e.original:e?e:window.event||!1
return e?(e.preventDefault&&e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.preventManipulation&&e.preventManipulation(),e.cancelBubble=!0,e.cancel=!0,e.returnValue=!1,!1):!1},this.stopPropagation=function(e){var e=e.original?e.original:e?e:window.event||!1
return e?e.stopPropagation?e.stopPropagation():(e.cancelBubble&&(e.cancelBubble=!0),!1):!1},this.showRail=function(){return 0==v.page.maxh||!v.ispage&&"none"==v.win.css("display")||(v.visibility=!0,v.rail.visibility=!0,v.rail.css("display","block")),v},this.showRailHr=function(){return v.railh?(0==v.page.maxw||!v.ispage&&"none"==v.win.css("display")||(v.railh.visibility=!0,v.railh.css("display","block")),v):v},this.hideRail=function(){return v.visibility=!1,v.rail.visibility=!1,v.rail.css("display","none"),v},this.hideRailHr=function(){return v.railh?(v.railh.visibility=!1,v.railh.css("display","none"),v):v},this.show=function(){return v.hidden=!1,v.locked=!1,v.showRail().showRailHr()},this.hide=function(){return v.hidden=!0,v.locked=!0,v.hideRail().hideRailHr()},this.toggle=function(){return v.hidden?v.show():v.hide()},this.remove=function(){v.stop(),v.cursortimeout&&clearTimeout(v.cursortimeout),v.doZoomOut(),v.unbindAll(),x.isie9&&v.win[0].detachEvent("onpropertychange",v.onAttributeChange),v.observer!==!1&&v.observer.disconnect(),v.observerremover!==!1&&v.observerremover.disconnect(),v.events=null,v.cursor&&v.cursor.remove(),v.cursorh&&v.cursorh.remove(),v.rail&&v.rail.remove(),v.railh&&v.railh.remove(),v.zoom&&v.zoom.remove()
for(var e=0;e<v.saved.css.length;e++){var o=v.saved.css[e]
o[0].css(o[1],void 0===o[2]?"":o[2])}v.saved=!1,v.me.data("__nicescroll","")
var t=a.nicescroll
t.each(function(e){if(this&&this.id===v.id){delete t[e]
for(var o=++e;o<t.length;o++,e++)t[e]=t[o]
t.length--,t.length&&delete t[t.length]}})
for(var r in v)v[r]=null,delete v[r]
v=null},this.scrollstart=function(e){return this.onscrollstart=e,v},this.scrollend=function(e){return this.onscrollend=e,v},this.scrollcancel=function(e){return this.onscrollcancel=e,v},this.zoomin=function(e){return this.onzoomin=e,v},this.zoomout=function(e){return this.onzoomout=e,v},this.isScrollable=function(e){var o=e.target?e.target:e
if("OPTION"==o.nodeName)return!0
for(;o&&1==o.nodeType&&!/^BODY|HTML/.test(o.nodeName);){var t=a(o),r=t.css("overflowY")||t.css("overflowX")||t.css("overflow")||""
if(/scroll|auto/.test(r))return o.clientHeight!=o.scrollHeight
o=o.parentNode?o.parentNode:!1}return!1},this.getViewport=function(e){for(var o=e&&e.parentNode?e.parentNode:!1;o&&1==o.nodeType&&!/^BODY|HTML/.test(o.nodeName);){var t=a(o)
if(/fixed|absolute/.test(t.css("position")))return t
var r=t.css("overflowY")||t.css("overflowX")||t.css("overflow")||""
if(/scroll|auto/.test(r)&&o.clientHeight!=o.scrollHeight)return t
if(t.getNiceScroll().length>0)return t
o=o.parentNode?o.parentNode:!1}return o?a(o):!1},this.triggerScrollEnd=function(){if(v.onscrollend){var e=v.getScrollLeft(),o=v.getScrollTop(),t={type:"scrollend",current:{x:e,y:o},end:{x:e,y:o}}
v.onscrollend.call(v,t)}},this.onmousewheel=function(e){if(!v.wheelprevented){if(v.locked)return v.debounced("checkunlock",v.resize,250),!0
if(v.rail.drag)return v.cancelEvent(e)
if("auto"==v.opt.oneaxismousemode&&0!=e.deltaX&&(v.opt.oneaxismousemode=!1),v.opt.oneaxismousemode&&0==e.deltaX&&!v.rail.scrollable)return v.railh&&v.railh.scrollable?v.onmousewheelhr(e):!0
var o=+new Date,t=!1
if(v.opt.preservenativescrolling&&v.checkarea+600<o&&(v.nativescrollingarea=v.isScrollable(e),t=!0),v.checkarea=o,v.nativescrollingarea)return!0
var r=g(e,!1,t)
return r&&(v.checkarea=0),r}},this.onmousewheelhr=function(e){if(!v.wheelprevented){if(v.locked||!v.railh.scrollable)return!0
if(v.rail.drag)return v.cancelEvent(e)
var o=+new Date,t=!1
return v.opt.preservenativescrolling&&v.checkarea+600<o&&(v.nativescrollingarea=v.isScrollable(e),t=!0),v.checkarea=o,v.nativescrollingarea?!0:v.locked?v.cancelEvent(e):g(e,!0,t)}},this.stop=function(){return v.cancelScroll(),v.scrollmon&&v.scrollmon.stop(),v.cursorfreezed=!1,v.scroll.y=Math.round(v.getScrollTop()*(1/v.scrollratio.y)),v.noticeCursor(),v},this.getTransitionSpeed=function(e){var o=Math.round(10*v.opt.scrollspeed),t=Math.min(o,Math.round(e/20*v.opt.scrollspeed))
return t>20?t:0},v.opt.smoothscroll?v.ishwscroll&&x.hastransition&&v.opt.usetransition?(this.prepareTransition=function(e,o){var t=o?e>20?e:0:v.getTransitionSpeed(e),r=t?x.prefixstyle+"transform "+t+"ms ease-out":""
return v.lasttransitionstyle&&v.lasttransitionstyle==r||(v.lasttransitionstyle=r,v.doc.css(x.transitionstyle,r)),t},this.doScrollLeft=function(e,o){var t=v.scrollrunning?v.newscrolly:v.getScrollTop()
v.doScrollPos(e,t,o)},this.doScrollTop=function(e,o){var t=v.scrollrunning?v.newscrollx:v.getScrollLeft()
v.doScrollPos(t,e,o)},this.doScrollPos=function(e,o,t){var r=v.getScrollTop(),i=v.getScrollLeft()
return((v.newscrolly-r)*(o-r)<0||(v.newscrollx-i)*(e-i)<0)&&v.cancelScroll(),0==v.opt.bouncescroll&&(0>o?o=0:o>v.page.maxh&&(o=v.page.maxh),0>e?e=0:e>v.page.maxw&&(e=v.page.maxw)),v.scrollrunning&&e==v.newscrollx&&o==v.newscrolly?!1:(v.newscrolly=o,v.newscrollx=e,v.newscrollspeed=t||!1,v.timer?!1:void(v.timer=setTimeout(function(){var t=v.getScrollTop(),r=v.getScrollLeft(),i={}
i.x=e-r,i.y=o-t,i.px=r,i.py=t
var n=Math.round(Math.sqrt(Math.pow(i.x,2)+Math.pow(i.y,2))),s=v.newscrollspeed&&v.newscrollspeed>1?v.newscrollspeed:v.getTransitionSpeed(n)
if(v.newscrollspeed&&v.newscrollspeed<=1&&(s*=v.newscrollspeed),v.prepareTransition(s,!0),v.timerscroll&&v.timerscroll.tm&&clearInterval(v.timerscroll.tm),s>0){if(!v.scrollrunning&&v.onscrollstart){var l={type:"scrollstart",current:{x:r,y:t},request:{x:e,y:o},end:{x:v.newscrollx,y:v.newscrolly},speed:s}
v.onscrollstart.call(v,l)}x.transitionend?v.scrollendtrapped||(v.scrollendtrapped=!0,v.bind(v.doc,x.transitionend,v.onScrollTransitionEnd,!1)):(v.scrollendtrapped&&clearTimeout(v.scrollendtrapped),v.scrollendtrapped=setTimeout(v.onScrollTransitionEnd,s))
var a=t,c=r
v.timerscroll={bz:new BezierClass(a,v.newscrolly,s,0,0,.58,1),bh:new BezierClass(c,v.newscrollx,s,0,0,.58,1)},v.cursorfreezed||(v.timerscroll.tm=setInterval(function(){v.showCursor(v.getScrollTop(),v.getScrollLeft())},60))}v.synched("doScroll-set",function(){v.timer=0,v.scrollendtrapped&&(v.scrollrunning=!0),v.setScrollTop(v.newscrolly),v.setScrollLeft(v.newscrollx),v.scrollendtrapped||v.onScrollTransitionEnd()})},50)))},this.cancelScroll=function(){if(!v.scrollendtrapped)return!0
var e=v.getScrollTop(),o=v.getScrollLeft()
return v.scrollrunning=!1,x.transitionend||clearTimeout(x.transitionend),v.scrollendtrapped=!1,v._unbind(v.doc,x.transitionend,v.onScrollTransitionEnd),v.prepareTransition(0),v.setScrollTop(e),v.railh&&v.setScrollLeft(o),v.timerscroll&&v.timerscroll.tm&&clearInterval(v.timerscroll.tm),v.timerscroll=!1,v.cursorfreezed=!1,v.showCursor(e,o),v},this.onScrollTransitionEnd=function(){v.scrollendtrapped&&v._unbind(v.doc,x.transitionend,v.onScrollTransitionEnd),v.scrollendtrapped=!1,v.prepareTransition(0),v.timerscroll&&v.timerscroll.tm&&clearInterval(v.timerscroll.tm),v.timerscroll=!1
var e=v.getScrollTop(),o=v.getScrollLeft()
return v.setScrollTop(e),v.railh&&v.setScrollLeft(o),v.noticeCursor(!1,e,o),v.cursorfreezed=!1,0>e?e=0:e>v.page.maxh&&(e=v.page.maxh),0>o?o=0:o>v.page.maxw&&(o=v.page.maxw),e!=v.newscrolly||o!=v.newscrollx?v.doScrollPos(o,e,v.opt.snapbackspeed):(v.onscrollend&&v.scrollrunning&&v.triggerScrollEnd(),void(v.scrollrunning=!1))}):(this.doScrollLeft=function(e,o){var t=v.scrollrunning?v.newscrolly:v.getScrollTop()
v.doScrollPos(e,t,o)},this.doScrollTop=function(e,o){var t=v.scrollrunning?v.newscrollx:v.getScrollLeft()
v.doScrollPos(t,e,o)},this.doScrollPos=function(e,o,t){function r(){if(v.cancelAnimationFrame)return!0
if(v.scrollrunning=!0,h=1-h)return v.timer=d(r)||1
var e=0,o=sy=v.getScrollTop()
if(v.dst.ay){o=v.bzscroll?v.dst.py+v.bzscroll.getNow()*v.dst.ay:v.newscrolly
var t=o-sy;(0>t&&o<v.newscrolly||t>0&&o>v.newscrolly)&&(o=v.newscrolly),v.setScrollTop(o),o==v.newscrolly&&(e=1)}else e=1
var i=sx=v.getScrollLeft()
if(v.dst.ax){i=v.bzscroll?v.dst.px+v.bzscroll.getNow()*v.dst.ax:v.newscrollx
var t=i-sx;(0>t&&i<v.newscrollx||t>0&&i>v.newscrollx)&&(i=v.newscrollx),v.setScrollLeft(i),i==v.newscrollx&&(e+=1)}else e+=1
2==e?(v.timer=0,v.cursorfreezed=!1,v.bzscroll=!1,v.scrollrunning=!1,0>o?o=0:o>v.page.maxh&&(o=v.page.maxh),0>i?i=0:i>v.page.maxw&&(i=v.page.maxw),i!=v.newscrollx||o!=v.newscrolly?v.doScrollPos(i,o):v.onscrollend&&v.triggerScrollEnd()):v.timer=d(r)||1}var o=void 0===o||o===!1?v.getScrollTop(!0):o
if(v.timer&&v.newscrolly==o&&v.newscrollx==e)return!0
v.timer&&u(v.timer),v.timer=0
var i=v.getScrollTop(),n=v.getScrollLeft();((v.newscrolly-i)*(o-i)<0||(v.newscrollx-n)*(e-n)<0)&&v.cancelScroll(),v.newscrolly=o,v.newscrollx=e,v.bouncescroll&&v.rail.visibility||(v.newscrolly<0?v.newscrolly=0:v.newscrolly>v.page.maxh&&(v.newscrolly=v.page.maxh)),v.bouncescroll&&v.railh.visibility||(v.newscrollx<0?v.newscrollx=0:v.newscrollx>v.page.maxw&&(v.newscrollx=v.page.maxw)),v.dst={},v.dst.x=e-n,v.dst.y=o-i,v.dst.px=n,v.dst.py=i
var s=Math.round(Math.sqrt(Math.pow(v.dst.x,2)+Math.pow(v.dst.y,2)))
v.dst.ax=v.dst.x/s,v.dst.ay=v.dst.y/s
var l=0,a=s
0==v.dst.x?(l=i,a=o,v.dst.ay=1,v.dst.py=0):0==v.dst.y&&(l=n,a=e,v.dst.ax=1,v.dst.px=0)
var c=v.getTransitionSpeed(s)
if(t&&1>=t&&(c*=t),v.bzscroll=c>0?v.bzscroll?v.bzscroll.update(a,c):new BezierClass(l,a,c,0,1,0,1):!1,!v.timer){(i==v.page.maxh&&o>=v.page.maxh||n==v.page.maxw&&e>=v.page.maxw)&&v.checkContentSize()
var h=1
if(v.cancelAnimationFrame=!1,v.timer=1,v.onscrollstart&&!v.scrollrunning){var p={type:"scrollstart",current:{x:n,y:i},request:{x:e,y:o},end:{x:v.newscrollx,y:v.newscrolly},speed:c}
v.onscrollstart.call(v,p)}r(),(i==v.page.maxh&&o>=i||n==v.page.maxw&&e>=n)&&v.checkContentSize(),v.noticeCursor()}},this.cancelScroll=function(){return v.timer&&u(v.timer),v.timer=0,v.bzscroll=!1,v.scrollrunning=!1,v}):(this.doScrollLeft=function(e,o){var t=v.getScrollTop()
v.doScrollPos(e,t,o)},this.doScrollTop=function(e,o){var t=v.getScrollLeft()
v.doScrollPos(t,e,o)},this.doScrollPos=function(e,o){var t=e>v.page.maxw?v.page.maxw:e
0>t&&(t=0)
var r=o>v.page.maxh?v.page.maxh:o
0>r&&(r=0),v.synched("scroll",function(){v.setScrollTop(r),v.setScrollLeft(t)})},this.cancelScroll=function(){}),this.doScrollBy=function(e,o){var t=0
if(o)t=Math.floor((v.scroll.y-e)*v.scrollratio.y)
else{var r=v.timer?v.newscrolly:v.getScrollTop(!0)
t=r-e}if(v.bouncescroll){var i=Math.round(v.view.h/2);-i>t?t=-i:t>v.page.maxh+i&&(t=v.page.maxh+i)}return v.cursorfreezed=!1,py=v.getScrollTop(!0),0>t&&0>=py?v.noticeCursor():t>v.page.maxh&&py>=v.page.maxh?(v.checkContentSize(),v.noticeCursor()):void v.doScrollTop(t)},this.doScrollLeftBy=function(e,o){var t=0
if(o)t=Math.floor((v.scroll.x-e)*v.scrollratio.x)
else{var r=v.timer?v.newscrollx:v.getScrollLeft(!0)
t=r-e}if(v.bouncescroll){var i=Math.round(v.view.w/2);-i>t?t=-i:t>v.page.maxw+i&&(t=v.page.maxw+i)}return v.cursorfreezed=!1,px=v.getScrollLeft(!0),0>t&&0>=px?v.noticeCursor():t>v.page.maxw&&px>=v.page.maxw?v.noticeCursor():void v.doScrollLeft(t)},this.doScrollTo=function(e,o){var t=o?Math.round(e*v.scrollratio.y):e
0>t?t=0:t>v.page.maxh&&(t=v.page.maxh),v.cursorfreezed=!1,v.doScrollTop(e)},this.checkContentSize=function(){var e=v.getContentSize();(e.h!=v.page.h||e.w!=v.page.w)&&v.resize(!1,e)},v.onscroll=function(){v.rail.drag||v.cursorfreezed||v.synched("scroll",function(){v.scroll.y=Math.round(v.getScrollTop()*(1/v.scrollratio.y)),v.railh&&(v.scroll.x=Math.round(v.getScrollLeft()*(1/v.scrollratio.x))),v.noticeCursor()})},v.bind(v.docscroll,"scroll",v.onscroll),this.doZoomIn=function(e){if(!v.zoomactive){v.zoomactive=!0,v.zoomrestore={style:{}}
var o=["position","top","left","zIndex","backgroundColor","marginTop","marginBottom","marginLeft","marginRight"],t=v.win[0].style
for(var r in o){var i=o[r]
v.zoomrestore.style[i]=void 0!==t[i]?t[i]:""}v.zoomrestore.style.width=v.win.css("width"),v.zoomrestore.style.height=v.win.css("height"),v.zoomrestore.padding={w:v.win.outerWidth()-v.win.width(),h:v.win.outerHeight()-v.win.height()},x.isios4&&(v.zoomrestore.scrollTop=a(window).scrollTop(),a(window).scrollTop(0)),v.win.css({position:x.isios4?"absolute":"fixed",top:0,left:0,"z-index":l+100,margin:"0px"})
var n=v.win.css("backgroundColor")
return(""==n||/transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(n))&&v.win.css("backgroundColor","#fff"),v.rail.css({"z-index":l+101}),v.zoom.css({"z-index":l+102}),v.zoom.css("backgroundPosition","0px -18px"),v.resizeZoom(),v.onzoomin&&v.onzoomin.call(v),v.cancelEvent(e)}},this.doZoomOut=function(e){return v.zoomactive?(v.zoomactive=!1,v.win.css("margin",""),v.win.css(v.zoomrestore.style),x.isios4&&a(window).scrollTop(v.zoomrestore.scrollTop),v.rail.css({"z-index":v.zindex}),v.zoom.css({"z-index":v.zindex}),v.zoomrestore=!1,v.zoom.css("backgroundPosition","0px 0px"),v.onResize(),v.onzoomout&&v.onzoomout.call(v),v.cancelEvent(e)):void 0},this.doZoom=function(e){return v.zoomactive?v.doZoomOut(e):v.doZoomIn(e)},this.resizeZoom=function(){if(v.zoomactive){var e=v.getScrollTop()
v.win.css({width:a(window).width()-v.zoomrestore.padding.w+"px",height:a(window).height()-v.zoomrestore.padding.h+"px"}),v.onResize(),v.setScrollTop(Math.min(v.page.maxh,e))}},this.init(),a.nicescroll.push(this)},b=function(e){var o=this
this.nc=e,this.lastx=0,this.lasty=0,this.speedx=0,this.speedy=0,this.lasttime=0,this.steptime=0,this.snapx=!1,this.snapy=!1,this.demulx=0,this.demuly=0,this.lastscrollx=-1,this.lastscrolly=-1,this.chkx=0,this.chky=0,this.timer=0,this.time=function(){return+new Date},this.reset=function(e,t){o.stop()
var r=o.time()
o.steptime=0,o.lasttime=r,o.speedx=0,o.speedy=0,o.lastx=e,o.lasty=t,o.lastscrollx=-1,o.lastscrolly=-1},this.update=function(e,t){var r=o.time()
o.steptime=r-o.lasttime,o.lasttime=r
var i=t-o.lasty,n=e-o.lastx,s=o.nc.getScrollTop(),l=o.nc.getScrollLeft(),a=s+i,c=l+n
o.snapx=0>c||c>o.nc.page.maxw,o.snapy=0>a||a>o.nc.page.maxh,o.speedx=n,o.speedy=i,o.lastx=e,o.lasty=t},this.stop=function(){o.nc.unsynched("domomentum2d"),o.timer&&clearTimeout(o.timer),o.timer=0,o.lastscrollx=-1,o.lastscrolly=-1},this.doSnapy=function(e,t){var r=!1
0>t?(t=0,r=!0):t>o.nc.page.maxh&&(t=o.nc.page.maxh,r=!0),0>e?(e=0,r=!0):e>o.nc.page.maxw&&(e=o.nc.page.maxw,r=!0),r?o.nc.doScrollPos(e,t,o.nc.opt.snapbackspeed):o.nc.triggerScrollEnd()},this.doMomentum=function(e){var t=o.time(),r=e?t+e:o.lasttime,i=o.nc.getScrollLeft(),n=o.nc.getScrollTop(),s=o.nc.page.maxh,l=o.nc.page.maxw
o.speedx=l>0?Math.min(60,o.speedx):0,o.speedy=s>0?Math.min(60,o.speedy):0
var a=r&&60>=t-r;(0>n||n>s||0>i||i>l)&&(a=!1)
var c=o.speedy&&a?o.speedy:!1,d=o.speedx&&a?o.speedx:!1
if(c||d){var u=Math.max(16,o.steptime)
if(u>50){var h=u/50
o.speedx*=h,o.speedy*=h,u=50}o.demulxy=0,o.lastscrollx=o.nc.getScrollLeft(),o.chkx=o.lastscrollx,o.lastscrolly=o.nc.getScrollTop(),o.chky=o.lastscrolly
var p=o.lastscrollx,m=o.lastscrolly,f=function(){var e=o.time()-t>600?.04:.02
o.speedx&&(p=Math.floor(o.lastscrollx-o.speedx*(1-o.demulxy)),o.lastscrollx=p,(0>p||p>l)&&(e=.1)),o.speedy&&(m=Math.floor(o.lastscrolly-o.speedy*(1-o.demulxy)),o.lastscrolly=m,(0>m||m>s)&&(e=.1)),o.demulxy=Math.min(1,o.demulxy+e),o.nc.synched("domomentum2d",function(){if(o.speedx){var e=o.nc.getScrollLeft()
e!=o.chkx&&o.stop(),o.chkx=p,o.nc.setScrollLeft(p)}if(o.speedy){var t=o.nc.getScrollTop()
t!=o.chky&&o.stop(),o.chky=m,o.nc.setScrollTop(m)}o.timer||(o.nc.hideCursor(),o.doSnapy(p,m))}),o.demulxy<1?o.timer=setTimeout(f,u):(o.stop(),o.nc.hideCursor(),o.doSnapy(p,m))}
f()}else o.doSnapy(o.nc.getScrollLeft(),o.nc.getScrollTop())}},y=e.fn.scrollTop
e.cssHooks.pageYOffset={get:function(e){var o=a.data(e,"__nicescroll")||!1
return o&&o.ishwscroll?o.getScrollTop():y.call(e)},set:function(e,o){var t=a.data(e,"__nicescroll")||!1
return t&&t.ishwscroll?t.setScrollTop(parseInt(o)):y.call(e,o),this}},e.fn.scrollTop=function(e){if(void 0===e){var o=this[0]?a.data(this[0],"__nicescroll")||!1:!1
return o&&o.ishwscroll?o.getScrollTop():y.call(this)}return this.each(function(){var o=a.data(this,"__nicescroll")||!1
o&&o.ishwscroll?o.setScrollTop(parseInt(e)):y.call(a(this),e)})}
var x=e.fn.scrollLeft
a.cssHooks.pageXOffset={get:function(e){var o=a.data(e,"__nicescroll")||!1
return o&&o.ishwscroll?o.getScrollLeft():x.call(e)},set:function(e,o){var t=a.data(e,"__nicescroll")||!1
return t&&t.ishwscroll?t.setScrollLeft(parseInt(o)):x.call(e,o),this}},e.fn.scrollLeft=function(e){if(void 0===e){var o=this[0]?a.data(this[0],"__nicescroll")||!1:!1
return o&&o.ishwscroll?o.getScrollLeft():x.call(this)}return this.each(function(){var o=a.data(this,"__nicescroll")||!1
o&&o.ishwscroll?o.setScrollLeft(parseInt(e)):x.call(a(this),e)})}
var S=function(e){var o=this
if(this.length=0,this.name="nicescrollarray",this.each=function(e){for(var t=0,r=0;t<o.length;t++)e.call(o[t],r++)
return o},this.push=function(e){o[o.length]=e,o.length++},this.eq=function(e){return o[e]},e)for(var t=0;t<e.length;t++){var r=a.data(e[t],"__nicescroll")||!1
r&&(this[this.length]=r,this.length++)}return this}
t(S.prototype,["show","hide","toggle","onResize","resize","remove","stop","doScrollPos"],function(e,o){e[o]=function(){var e=arguments
return this.each(function(){this[o].apply(this,e)})}}),e.fn.getNiceScroll=function(e){if(void 0===e)return new S(this)
var o=this[e]&&a.data(this[e],"__nicescroll")||!1
return o},e.extend(e.expr[":"],{nicescroll:function(e){return a.data(e,"__nicescroll")?!0:!1}}),a.fn.niceScroll=function(e,o){void 0===o&&("object"!=typeof e||"jquery"in e||(o=e,e=!1))
var t=new S
void 0===o&&(o={}),e&&(o.doc=a(e),o.win=a(this))
var r=!("doc"in o)
return r||"win"in o||(o.win=a(this)),this.each(function(){var e=a(this).data("__nicescroll")||!1
e||(o.doc=r?a(this):o.doc,e=new v(o,a(this)),a(this).data("__nicescroll",e)),t.push(e)}),1==t.length?t[0]:t},window.NiceScroll={getjQuery:function(){return e}},a.nicescroll||(a.nicescroll=new S,a.nicescroll.options=f)})

/*mousewheel*/
;(function(a){function d(b){var c=b||window.event,d=[].slice.call(arguments,1),e=0,f=!0,g=0,h=0;return b=a.event.fix(c),b.type="mousewheel",c.wheelDelta&&(e=c.wheelDelta/120),c.detail&&(e=-c.detail/3),h=e,c.axis!==undefined&&c.axis===c.HORIZONTAL_AXIS&&(h=0,g=-1*e),c.wheelDeltaY!==undefined&&(h=c.wheelDeltaY/120),c.wheelDeltaX!==undefined&&(g=-1*c.wheelDeltaX/120),d.unshift(b,e,g,h),(a.event.dispatch||a.event.handle).apply(this,d)}var b=["DOMMouseScroll","mousewheel"];if(a.event.fixHooks)for(var c=b.length;c;)a.event.fixHooks[b[--c]]=a.event.mouseHooks;a.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var a=b.length;a;)this.addEventListener(b[--a],d,!1);else this.onmousewheel=d},teardown:function(){if(this.removeEventListener)for(var a=b.length;a;)this.removeEventListener(b[--a],d,!1);else this.onmousewheel=null}},a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})})(jQuery);
/*custom scrollbar*/
;(function(c){var b={init:function(e){var f={set_width:false,set_height:false,horizontalScroll:false,scrollInertia:950,mouseWheel:true,mouseWheelPixels:"auto",autoDraggerLength:true,autoHideScrollbar:false,alwaysShowScrollbar:false,snapAmount:null,snapOffset:0,scrollButtons:{enable:false,scrollType:"continuous",scrollSpeed:"auto",scrollAmount:40},advanced:{updateOnBrowserResize:true,updateOnContentResize:false,autoExpandHorizontalScroll:false,autoScrollOnFocus:true,normalizeMouseWheelDelta:false},contentTouchScroll:true,callbacks:{onScrollStart:function(){},onScroll:function(){},onTotalScroll:function(){},onTotalScrollBack:function(){},onTotalScrollOffset:0,onTotalScrollBackOffset:0,whileScrolling:function(){}},theme:"light"},e=c.extend(true,f,e);return this.each(function(){var m=c(this);if(e.set_width){m.css("width",e.set_width)}if(e.set_height){m.css("height",e.set_height)}if(!c(document).data("mCustomScrollbar-index")){c(document).data("mCustomScrollbar-index","1")}else{var t=parseInt(c(document).data("mCustomScrollbar-index"));c(document).data("mCustomScrollbar-index",t+1)}m.wrapInner("<div class='mCustomScrollBox mCS-"+e.theme+"' id='mCSB_"+c(document).data("mCustomScrollbar-index")+"' style='position:relative; height:100%; overflow:hidden; max-width:100%;' />").addClass("mCustomScrollbar _mCS_"+c(document).data("mCustomScrollbar-index"));var g=m.children(".mCustomScrollBox");if(e.horizontalScroll){g.addClass("mCSB_horizontal").wrapInner("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />");var k=g.children(".mCSB_h_wrapper");k.wrapInner("<div class='mCSB_container' style='position:absolute; left:0;' />").children(".mCSB_container").css({width:k.children().outerWidth(),position:"relative"}).unwrap()}else{g.wrapInner("<div class='mCSB_container' style='position:relative; top:0;' />")}var o=g.children(".mCSB_container");if(c.support.touch){o.addClass("mCS_touch")}o.after("<div class='mCSB_scrollTools' style='position:absolute;'><div class='mCSB_draggerContainer'><div class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' style='position:relative;'></div></div><div class='mCSB_draggerRail'></div></div></div>");var l=g.children(".mCSB_scrollTools"),h=l.children(".mCSB_draggerContainer"),q=h.children(".mCSB_dragger");if(e.horizontalScroll){q.data("minDraggerWidth",q.width())}else{q.data("minDraggerHeight",q.height())}if(e.scrollButtons.enable){if(e.horizontalScroll){l.prepend("<a class='mCSB_buttonLeft' oncontextmenu='return false;'></a>").append("<a class='mCSB_buttonRight' oncontextmenu='return false;'></a>")}else{l.prepend("<a class='mCSB_buttonUp' oncontextmenu='return false;'></a>").append("<a class='mCSB_buttonDown' oncontextmenu='return false;'></a>")}}g.bind("scroll",function(){if(!m.is(".mCS_disabled")){g.scrollTop(0).scrollLeft(0)}});m.data({mCS_Init:true,mCustomScrollbarIndex:c(document).data("mCustomScrollbar-index"),horizontalScroll:e.horizontalScroll,scrollInertia:e.scrollInertia,scrollEasing:"mcsEaseOut",mouseWheel:e.mouseWheel,mouseWheelPixels:e.mouseWheelPixels,autoDraggerLength:e.autoDraggerLength,autoHideScrollbar:e.autoHideScrollbar,alwaysShowScrollbar:e.alwaysShowScrollbar,snapAmount:e.snapAmount,snapOffset:e.snapOffset,scrollButtons_enable:e.scrollButtons.enable,scrollButtons_scrollType:e.scrollButtons.scrollType,scrollButtons_scrollSpeed:e.scrollButtons.scrollSpeed,scrollButtons_scrollAmount:e.scrollButtons.scrollAmount,autoExpandHorizontalScroll:e.advanced.autoExpandHorizontalScroll,autoScrollOnFocus:e.advanced.autoScrollOnFocus,normalizeMouseWheelDelta:e.advanced.normalizeMouseWheelDelta,contentTouchScroll:e.contentTouchScroll,onScrollStart_Callback:e.callbacks.onScrollStart,onScroll_Callback:e.callbacks.onScroll,onTotalScroll_Callback:e.callbacks.onTotalScroll,onTotalScrollBack_Callback:e.callbacks.onTotalScrollBack,onTotalScroll_Offset:e.callbacks.onTotalScrollOffset,onTotalScrollBack_Offset:e.callbacks.onTotalScrollBackOffset,whileScrolling_Callback:e.callbacks.whileScrolling,bindEvent_scrollbar_drag:false,bindEvent_content_touch:false,bindEvent_scrollbar_click:false,bindEvent_mousewheel:false,bindEvent_buttonsContinuous_y:false,bindEvent_buttonsContinuous_x:false,bindEvent_buttonsPixels_y:false,bindEvent_buttonsPixels_x:false,bindEvent_focusin:false,bindEvent_autoHideScrollbar:false,mCSB_buttonScrollRight:false,mCSB_buttonScrollLeft:false,mCSB_buttonScrollDown:false,mCSB_buttonScrollUp:false});if(e.horizontalScroll){if(m.css("max-width")!=="none"){if(!e.advanced.updateOnContentResize){e.advanced.updateOnContentResize=true}}}else{if(m.css("max-height")!=="none"){var s=false,r=parseInt(m.css("max-height"));if(m.css("max-height").indexOf("%")>=0){s=r,r=m.parent().height()*s/100}m.css("overflow","hidden");g.css("max-height",r)}}m.mCustomScrollbar("update");if(e.advanced.updateOnBrowserResize){var i,j=c(window).width(),u=c(window).height();c(window).bind("resize."+m.data("mCustomScrollbarIndex"),function(){if(i){clearTimeout(i)}i=setTimeout(function(){if(!m.is(".mCS_disabled")&&!m.is(".mCS_destroyed")){var w=c(window).width(),v=c(window).height();if(j!==w||u!==v){if(m.css("max-height")!=="none"&&s){g.css("max-height",m.parent().height()*s/100)}m.mCustomScrollbar("update");j=w;u=v}}},150)})}if(e.advanced.updateOnContentResize){var p;if(e.horizontalScroll){var n=o.outerWidth()}else{var n=o.outerHeight()}p=setInterval(function(){if(e.horizontalScroll){if(e.advanced.autoExpandHorizontalScroll){o.css({position:"absolute",width:"auto"}).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({width:o.outerWidth(),position:"relative"}).unwrap()}var v=o.outerWidth()}else{var v=o.outerHeight()}if(v!=n){m.mCustomScrollbar("update");n=v}},300)}})},update:function(){var n=c(this),k=n.children(".mCustomScrollBox"),q=k.children(".mCSB_container");q.removeClass("mCS_no_scrollbar");n.removeClass("mCS_disabled mCS_destroyed");k.scrollTop(0).scrollLeft(0);var y=k.children(".mCSB_scrollTools"),o=y.children(".mCSB_draggerContainer"),m=o.children(".mCSB_dragger");if(n.data("horizontalScroll")){var A=y.children(".mCSB_buttonLeft"),t=y.children(".mCSB_buttonRight"),f=k.width();if(n.data("autoExpandHorizontalScroll")){q.css({position:"absolute",width:"auto"}).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({width:q.outerWidth(),position:"relative"}).unwrap()}var z=q.outerWidth()}else{var w=y.children(".mCSB_buttonUp"),g=y.children(".mCSB_buttonDown"),r=k.height(),i=q.outerHeight()}if(i>r&&!n.data("horizontalScroll")){y.css("display","block");var s=o.height();if(n.data("autoDraggerLength")){var u=Math.round(r/i*s),l=m.data("minDraggerHeight");if(u<=l){m.css({height:l})}else{if(u>=s-10){var p=s-10;m.css({height:p})}else{m.css({height:u})}}m.children(".mCSB_dragger_bar").css({"line-height":m.height()+"px"})}var B=m.height(),x=(i-r)/(s-B);n.data("scrollAmount",x).mCustomScrollbar("scrolling",k,q,o,m,w,g,A,t);var D=Math.abs(q.position().top);n.mCustomScrollbar("scrollTo",D,{scrollInertia:0,trigger:"internal"})}else{if(z>f&&n.data("horizontalScroll")){y.css("display","block");var h=o.width();if(n.data("autoDraggerLength")){var j=Math.round(f/z*h),C=m.data("minDraggerWidth");if(j<=C){m.css({width:C})}else{if(j>=h-10){var e=h-10;m.css({width:e})}else{m.css({width:j})}}}var v=m.width(),x=(z-f)/(h-v);n.data("scrollAmount",x).mCustomScrollbar("scrolling",k,q,o,m,w,g,A,t);var D=Math.abs(q.position().left);n.mCustomScrollbar("scrollTo",D,{scrollInertia:0,trigger:"internal"})}else{k.unbind("mousewheel focusin");if(n.data("horizontalScroll")){m.add(q).css("left",0)}else{m.add(q).css("top",0)}if(n.data("alwaysShowScrollbar")){if(!n.data("horizontalScroll")){m.css({height:o.height()})}else{if(n.data("horizontalScroll")){m.css({width:o.width()})}}}else{y.css("display","none");q.addClass("mCS_no_scrollbar")}n.data({bindEvent_mousewheel:false,bindEvent_focusin:false})}}},scrolling:function(i,q,n,k,A,f,D,w){var l=c(this);if(!l.data("bindEvent_scrollbar_drag")){var o,p,C,z,e;if(c.support.pointer){C="pointerdown";z="pointermove";e="pointerup"}else{if(c.support.msPointer){C="MSPointerDown";z="MSPointerMove";e="MSPointerUp"}}if(c.support.pointer||c.support.msPointer){k.bind(C,function(K){K.preventDefault();l.data({on_drag:true});k.addClass("mCSB_dragger_onDrag");var J=c(this),M=J.offset(),I=K.originalEvent.pageX-M.left,L=K.originalEvent.pageY-M.top;if(I<J.width()&&I>0&&L<J.height()&&L>0){o=L;p=I}});c(document).bind(z+"."+l.data("mCustomScrollbarIndex"),function(K){K.preventDefault();if(l.data("on_drag")){var J=k,M=J.offset(),I=K.originalEvent.pageX-M.left,L=K.originalEvent.pageY-M.top;G(o,p,L,I)}}).bind(e+"."+l.data("mCustomScrollbarIndex"),function(x){l.data({on_drag:false});k.removeClass("mCSB_dragger_onDrag")})}else{k.bind("mousedown touchstart",function(K){K.preventDefault();K.stopImmediatePropagation();var J=c(this),N=J.offset(),I,M;if(K.type==="touchstart"){var L=K.originalEvent.touches[0]||K.originalEvent.changedTouches[0];I=L.pageX-N.left;M=L.pageY-N.top}else{l.data({on_drag:true});k.addClass("mCSB_dragger_onDrag");I=K.pageX-N.left;M=K.pageY-N.top}if(I<J.width()&&I>0&&M<J.height()&&M>0){o=M;p=I}}).bind("touchmove",function(K){K.preventDefault();K.stopImmediatePropagation();var N=K.originalEvent.touches[0]||K.originalEvent.changedTouches[0],J=c(this),M=J.offset(),I=N.pageX-M.left,L=N.pageY-M.top;G(o,p,L,I)});c(document).bind("mousemove."+l.data("mCustomScrollbarIndex"),function(K){if(l.data("on_drag")){var J=k,M=J.offset(),I=K.pageX-M.left,L=K.pageY-M.top;G(o,p,L,I)}}).bind("mouseup."+l.data("mCustomScrollbarIndex"),function(x){l.data({on_drag:false});k.removeClass("mCSB_dragger_onDrag")})}l.data({bindEvent_scrollbar_drag:true})}function G(J,K,L,I){if(l.data("horizontalScroll")){l.mCustomScrollbar("scrollTo",(k.position().left-(K))+I,{moveDragger:true,trigger:"internal"})}else{l.mCustomScrollbar("scrollTo",(k.position().top-(J))+L,{moveDragger:true,trigger:"internal"})}}if(c.support.touch&&l.data("contentTouchScroll")){if(!l.data("bindEvent_content_touch")){var m,E,s,t,v,F,H;q.bind("touchstart",function(x){x.stopImmediatePropagation();m=x.originalEvent.touches[0]||x.originalEvent.changedTouches[0];E=c(this);s=E.offset();v=m.pageX-s.left;t=m.pageY-s.top;F=t;H=v});q.bind("touchmove",function(x){x.preventDefault();x.stopImmediatePropagation();m=x.originalEvent.touches[0]||x.originalEvent.changedTouches[0];E=c(this).parent();s=E.offset();v=m.pageX-s.left;t=m.pageY-s.top;if(l.data("horizontalScroll")){l.mCustomScrollbar("scrollTo",H-v,{trigger:"internal"})}else{l.mCustomScrollbar("scrollTo",F-t,{trigger:"internal"})}})}}if(!l.data("bindEvent_scrollbar_click")){n.bind("click",function(I){var x=(I.pageY-n.offset().top)*l.data("scrollAmount"),y=c(I.target);if(l.data("horizontalScroll")){x=(I.pageX-n.offset().left)*l.data("scrollAmount")}if(y.hasClass("mCSB_draggerContainer")||y.hasClass("mCSB_draggerRail")){l.mCustomScrollbar("scrollTo",x,{trigger:"internal",scrollEasing:"draggerRailEase"})}});l.data({bindEvent_scrollbar_click:true})}if(l.data("mouseWheel")){if(!l.data("bindEvent_mousewheel")){i.bind("mousewheel",function(K,M){var J,I=l.data("mouseWheelPixels"),x=Math.abs(q.position().top),L=k.position().top,y=n.height()-k.height();if(l.data("normalizeMouseWheelDelta")){if(M<0){M=-1}else{M=1}}if(I==="auto"){I=100+Math.round(l.data("scrollAmount")/2)}if(l.data("horizontalScroll")){L=k.position().left;y=n.width()-k.width();x=Math.abs(q.position().left)}if((M>0&&L!==0)||(M<0&&L!==y)){K.preventDefault();K.stopImmediatePropagation()}J=x-(M*I);l.mCustomScrollbar("scrollTo",J,{trigger:"internal"})});l.data({bindEvent_mousewheel:true})}}if(l.data("scrollButtons_enable")){if(l.data("scrollButtons_scrollType")==="pixels"){if(l.data("horizontalScroll")){w.add(D).unbind("mousedown touchstart MSPointerDown pointerdown mouseup MSPointerUp pointerup mouseout MSPointerOut pointerout touchend",j,h);l.data({bindEvent_buttonsContinuous_x:false});if(!l.data("bindEvent_buttonsPixels_x")){w.bind("click",function(x){x.preventDefault();r(Math.abs(q.position().left)+l.data("scrollButtons_scrollAmount"))});D.bind("click",function(x){x.preventDefault();r(Math.abs(q.position().left)-l.data("scrollButtons_scrollAmount"))});l.data({bindEvent_buttonsPixels_x:true})}}else{f.add(A).unbind("mousedown touchstart MSPointerDown pointerdown mouseup MSPointerUp pointerup mouseout MSPointerOut pointerout touchend",j,h);l.data({bindEvent_buttonsContinuous_y:false});if(!l.data("bindEvent_buttonsPixels_y")){f.bind("click",function(x){x.preventDefault();r(Math.abs(q.position().top)+l.data("scrollButtons_scrollAmount"))});A.bind("click",function(x){x.preventDefault();r(Math.abs(q.position().top)-l.data("scrollButtons_scrollAmount"))});l.data({bindEvent_buttonsPixels_y:true})}}function r(x){if(!k.data("preventAction")){k.data("preventAction",true);l.mCustomScrollbar("scrollTo",x,{trigger:"internal"})}}}else{if(l.data("horizontalScroll")){w.add(D).unbind("click");l.data({bindEvent_buttonsPixels_x:false});if(!l.data("bindEvent_buttonsContinuous_x")){w.bind("mousedown touchstart MSPointerDown pointerdown",function(y){y.preventDefault();var x=B();l.data({mCSB_buttonScrollRight:setInterval(function(){l.mCustomScrollbar("scrollTo",Math.abs(q.position().left)+x,{trigger:"internal",scrollEasing:"easeOutCirc"})},17)})});var j=function(x){x.preventDefault();clearInterval(l.data("mCSB_buttonScrollRight"))};w.bind("mouseup touchend MSPointerUp pointerup mouseout MSPointerOut pointerout",j);D.bind("mousedown touchstart MSPointerDown pointerdown",function(y){y.preventDefault();var x=B();l.data({mCSB_buttonScrollLeft:setInterval(function(){l.mCustomScrollbar("scrollTo",Math.abs(q.position().left)-x,{trigger:"internal",scrollEasing:"easeOutCirc"})},17)})});var h=function(x){x.preventDefault();clearInterval(l.data("mCSB_buttonScrollLeft"))};D.bind("mouseup touchend MSPointerUp pointerup mouseout MSPointerOut pointerout",h);l.data({bindEvent_buttonsContinuous_x:true})}}else{f.add(A).unbind("click");l.data({bindEvent_buttonsPixels_y:false});if(!l.data("bindEvent_buttonsContinuous_y")){f.bind("mousedown touchstart MSPointerDown pointerdown",function(y){y.preventDefault();var x=B();l.data({mCSB_buttonScrollDown:setInterval(function(){l.mCustomScrollbar("scrollTo",Math.abs(q.position().top)+x,{trigger:"internal",scrollEasing:"easeOutCirc"})},17)})});var u=function(x){x.preventDefault();clearInterval(l.data("mCSB_buttonScrollDown"))};f.bind("mouseup touchend MSPointerUp pointerup mouseout MSPointerOut pointerout",u);A.bind("mousedown touchstart MSPointerDown pointerdown",function(y){y.preventDefault();var x=B();l.data({mCSB_buttonScrollUp:setInterval(function(){l.mCustomScrollbar("scrollTo",Math.abs(q.position().top)-x,{trigger:"internal",scrollEasing:"easeOutCirc"})},17)})});var g=function(x){x.preventDefault();clearInterval(l.data("mCSB_buttonScrollUp"))};A.bind("mouseup touchend MSPointerUp pointerup mouseout MSPointerOut pointerout",g);l.data({bindEvent_buttonsContinuous_y:true})}}function B(){var x=l.data("scrollButtons_scrollSpeed");if(l.data("scrollButtons_scrollSpeed")==="auto"){x=Math.round((l.data("scrollInertia")+100)/40)}return x}}}if(l.data("autoScrollOnFocus")){if(!l.data("bindEvent_focusin")){i.bind("focusin",function(){i.scrollTop(0).scrollLeft(0);var x=c(document.activeElement);if(x.is("input,textarea,select,button,a[tabindex],area,object")){var J=q.position().top,y=x.position().top,I=i.height()-x.outerHeight();if(l.data("horizontalScroll")){J=q.position().left;y=x.position().left;I=i.width()-x.outerWidth()}if(J+y<0||J+y>I){l.mCustomScrollbar("scrollTo",y,{trigger:"internal"})}}});l.data({bindEvent_focusin:true})}}if(l.data("autoHideScrollbar")&&!l.data("alwaysShowScrollbar")){if(!l.data("bindEvent_autoHideScrollbar")){i.bind("mouseenter",function(x){i.addClass("mCS-mouse-over");d.showScrollbar.call(i.children(".mCSB_scrollTools"))}).bind("mouseleave touchend",function(x){i.removeClass("mCS-mouse-over");if(x.type==="mouseleave"){d.hideScrollbar.call(i.children(".mCSB_scrollTools"))}});l.data({bindEvent_autoHideScrollbar:true})}}},scrollTo:function(e,f){var i=c(this),o={moveDragger:false,trigger:"external",callbacks:true,scrollInertia:i.data("scrollInertia"),scrollEasing:i.data("scrollEasing")},f=c.extend(o,f),p,g=i.children(".mCustomScrollBox"),k=g.children(".mCSB_container"),r=g.children(".mCSB_scrollTools"),j=r.children(".mCSB_draggerContainer"),h=j.children(".mCSB_dragger"),t=draggerSpeed=f.scrollInertia,q,s,m,l;if(!k.hasClass("mCS_no_scrollbar")){i.data({mCS_trigger:f.trigger});if(i.data("mCS_Init")){f.callbacks=false}if(e||e===0){if(typeof(e)==="number"){if(f.moveDragger){p=e;if(i.data("horizontalScroll")){e=h.position().left*i.data("scrollAmount")}else{e=h.position().top*i.data("scrollAmount")}draggerSpeed=0}else{p=e/i.data("scrollAmount")}}else{if(typeof(e)==="string"){var v;if(e==="top"){v=0}else{if(e==="bottom"&&!i.data("horizontalScroll")){v=k.outerHeight()-g.height()}else{if(e==="left"){v=0}else{if(e==="right"&&i.data("horizontalScroll")){v=k.outerWidth()-g.width()}else{if(e==="first"){v=i.find(".mCSB_container").find(":first")}else{if(e==="last"){v=i.find(".mCSB_container").find(":last")}else{v=i.find(e)}}}}}}if(v.length===1){if(i.data("horizontalScroll")){e=v.position().left}else{e=v.position().top}p=e/i.data("scrollAmount")}else{p=e=v}}}if(i.data("horizontalScroll")){if(i.data("onTotalScrollBack_Offset")){s=-i.data("onTotalScrollBack_Offset")}if(i.data("onTotalScroll_Offset")){l=g.width()-k.outerWidth()+i.data("onTotalScroll_Offset")}if(p<0){p=e=0;clearInterval(i.data("mCSB_buttonScrollLeft"));if(!s){q=true}}else{if(p>=j.width()-h.width()){p=j.width()-h.width();e=g.width()-k.outerWidth();clearInterval(i.data("mCSB_buttonScrollRight"));if(!l){m=true}}else{e=-e}}var n=i.data("snapAmount");if(n){e=Math.round(e/n)*n-i.data("snapOffset")}d.mTweenAxis.call(this,h[0],"left",Math.round(p),draggerSpeed,f.scrollEasing);d.mTweenAxis.call(this,k[0],"left",Math.round(e),t,f.scrollEasing,{onStart:function(){if(f.callbacks&&!i.data("mCS_tweenRunning")){u("onScrollStart")}if(i.data("autoHideScrollbar")&&!i.data("alwaysShowScrollbar")){d.showScrollbar.call(r)}},onUpdate:function(){if(f.callbacks){u("whileScrolling")}},onComplete:function(){if(f.callbacks){u("onScroll");if(q||(s&&k.position().left>=s)){u("onTotalScrollBack")}if(m||(l&&k.position().left<=l)){u("onTotalScroll")}}h.data("preventAction",false);i.data("mCS_tweenRunning",false);if(i.data("autoHideScrollbar")&&!i.data("alwaysShowScrollbar")){if(!g.hasClass("mCS-mouse-over")){d.hideScrollbar.call(r)}}}})}else{if(i.data("onTotalScrollBack_Offset")){s=-i.data("onTotalScrollBack_Offset")}if(i.data("onTotalScroll_Offset")){l=g.height()-k.outerHeight()+i.data("onTotalScroll_Offset")}if(p<0){p=e=0;clearInterval(i.data("mCSB_buttonScrollUp"));if(!s){q=true}}else{if(p>=j.height()-h.height()){p=j.height()-h.height();e=g.height()-k.outerHeight();clearInterval(i.data("mCSB_buttonScrollDown"));if(!l){m=true}}else{e=-e}}var n=i.data("snapAmount");if(n){e=Math.round(e/n)*n-i.data("snapOffset")}d.mTweenAxis.call(this,h[0],"top",Math.round(p),draggerSpeed,f.scrollEasing);d.mTweenAxis.call(this,k[0],"top",Math.round(e),t,f.scrollEasing,{onStart:function(){if(f.callbacks&&!i.data("mCS_tweenRunning")){u("onScrollStart")}if(i.data("autoHideScrollbar")&&!i.data("alwaysShowScrollbar")){d.showScrollbar.call(r)}},onUpdate:function(){if(f.callbacks){u("whileScrolling")}},onComplete:function(){if(f.callbacks){u("onScroll");if(q||(s&&k.position().top>=s)){u("onTotalScrollBack")}if(m||(l&&k.position().top<=l)){u("onTotalScroll")}}h.data("preventAction",false);i.data("mCS_tweenRunning",false);if(i.data("autoHideScrollbar")&&!i.data("alwaysShowScrollbar")){if(!g.hasClass("mCS-mouse-over")){d.hideScrollbar.call(r)}}}})}if(i.data("mCS_Init")){i.data({mCS_Init:false})}}}function u(w){if(i.data("mCustomScrollbarIndex")){this.mcs={top:k.position().top,left:k.position().left,draggerTop:h.position().top,draggerLeft:h.position().left,topPct:Math.round((100*Math.abs(k.position().top))/Math.abs(k.outerHeight()-g.height())),leftPct:Math.round((100*Math.abs(k.position().left))/Math.abs(k.outerWidth()-g.width()))};switch(w){case"onScrollStart":i.data("mCS_tweenRunning",true).data("onScrollStart_Callback").call(i,this.mcs);break;case"whileScrolling":i.data("whileScrolling_Callback").call(i,this.mcs);break;case"onScroll":i.data("onScroll_Callback").call(i,this.mcs);break;case"onTotalScrollBack":i.data("onTotalScrollBack_Callback").call(i,this.mcs);break;case"onTotalScroll":i.data("onTotalScroll_Callback").call(i,this.mcs);break}}}},stop:function(){var g=c(this),e=g.children().children(".mCSB_container"),f=g.children().children().children().children(".mCSB_dragger");d.mTweenAxisStop.call(this,e[0]);d.mTweenAxisStop.call(this,f[0])},disable:function(e){var j=c(this),f=j.children(".mCustomScrollBox"),h=f.children(".mCSB_container"),g=f.children(".mCSB_scrollTools"),i=g.children().children(".mCSB_dragger");f.unbind("mousewheel focusin mouseenter mouseleave touchend");h.unbind("touchstart touchmove");if(e){if(j.data("horizontalScroll")){i.add(h).css("left",0)}else{i.add(h).css("top",0)}}g.css("display","none");h.addClass("mCS_no_scrollbar");j.data({bindEvent_mousewheel:false,bindEvent_focusin:false,bindEvent_content_touch:false,bindEvent_autoHideScrollbar:false}).addClass("mCS_disabled")},destroy:function(){var e=c(this);e.removeClass("mCustomScrollbar _mCS_"+e.data("mCustomScrollbarIndex")).addClass("mCS_destroyed").children().children(".mCSB_container").unwrap().children().unwrap().siblings(".mCSB_scrollTools").remove();c(document).unbind("mousemove."+e.data("mCustomScrollbarIndex")+" mouseup."+e.data("mCustomScrollbarIndex")+" MSPointerMove."+e.data("mCustomScrollbarIndex")+" MSPointerUp."+e.data("mCustomScrollbarIndex"));c(window).unbind("resize."+e.data("mCustomScrollbarIndex"))}},d={showScrollbar:function(){this.stop().animate({opacity:1},"fast")},hideScrollbar:function(){this.stop().animate({opacity:0},"fast")},mTweenAxis:function(g,i,h,f,o,y){var y=y||{},v=y.onStart||function(){},p=y.onUpdate||function(){},w=y.onComplete||function(){};var n=t(),l,j=0,r=g.offsetTop,s=g.style;if(i==="left"){r=g.offsetLeft}var m=h-r;q();e();function t(){if(window.performance&&window.performance.now){return window.performance.now()}else{if(window.performance&&window.performance.webkitNow){return window.performance.webkitNow()}else{if(Date.now){return Date.now()}else{return new Date().getTime()}}}}function x(){if(!j){v.call()}j=t()-n;u();if(j>=g._time){g._time=(j>g._time)?j+l-(j-g._time):j+l-1;if(g._time<j+1){g._time=j+1}}if(g._time<f){g._id=_request(x)}else{w.call()}}function u(){if(f>0){g.currVal=k(g._time,r,m,f,o);s[i]=Math.round(g.currVal)+"px"}else{s[i]=h+"px"}p.call()}function e(){l=1000/60;g._time=j+l;_request=(!window.requestAnimationFrame)?function(z){u();return setTimeout(z,0.01)}:window.requestAnimationFrame;g._id=_request(x)}function q(){if(g._id==null){return}if(!window.requestAnimationFrame){clearTimeout(g._id)}else{window.cancelAnimationFrame(g._id)}g._id=null}function k(B,A,F,E,C){switch(C){case"linear":return F*B/E+A;break;case"easeOutQuad":B/=E;return -F*B*(B-2)+A;break;case"easeInOutQuad":B/=E/2;if(B<1){return F/2*B*B+A}B--;return -F/2*(B*(B-2)-1)+A;break;case"easeOutCubic":B/=E;B--;return F*(B*B*B+1)+A;break;case"easeOutQuart":B/=E;B--;return -F*(B*B*B*B-1)+A;break;case"easeOutQuint":B/=E;B--;return F*(B*B*B*B*B+1)+A;break;case"easeOutCirc":B/=E;B--;return F*Math.sqrt(1-B*B)+A;break;case"easeOutSine":return F*Math.sin(B/E*(Math.PI/2))+A;break;case"easeOutExpo":return F*(-Math.pow(2,-10*B/E)+1)+A;break;case"mcsEaseOut":var D=(B/=E)*B,z=D*B;return A+F*(0.499999999999997*z*D+-2.5*D*D+5.5*z+-6.5*D+4*B);break;case"draggerRailEase":B/=E/2;if(B<1){return F/2*B*B*B+A}B-=2;return F/2*(B*B*B+2)+A;break}}},mTweenAxisStop:function(e){if(e._id==null){return}if(!window.requestAnimationFrame){clearTimeout(e._id)}else{window.cancelAnimationFrame(e._id)}e._id=null},rafPolyfill:function(){var f=["ms","moz","webkit","o"],e=f.length;while(--e>-1&&!window.requestAnimationFrame){window.requestAnimationFrame=window[f[e]+"RequestAnimationFrame"];window.cancelAnimationFrame=window[f[e]+"CancelAnimationFrame"]||window[f[e]+"CancelRequestAnimationFrame"]}}};d.rafPolyfill.call();c.support.touch=!!("ontouchstart" in window);c.support.pointer=window.navigator.pointerEnabled;c.support.msPointer=window.navigator.msPointerEnabled;var a=("https:"==document.location.protocol)?"https:":"http:";c.event.special.mousewheel||document.write('<script src="'+a+'//cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.0.6/jquery.mousewheel.min.js"><\/script>');c.fn.mCustomScrollbar=function(e){if(b[e]){return b[e].apply(this,Array.prototype.slice.call(arguments,1))}else{if(typeof e==="object"||!e){return b.init.apply(this,arguments)}else{c.error("Method "+e+" does not exist")}}}})(jQuery);
/* BackgroundCheck
   http://kennethcachia.com/background-check
   v1.2.2 */
!function(a,b){"function"==typeof define&&define.amd?define(b):a.BackgroundCheck=b(a)}(this,function(){"use strict";function a(a){if(void 0===a||void 0===a.targets)throw"Missing attributes";H.debug=d(a.debug,!1),H.debugOverlay=d(a.debugOverlay,!1),H.targets=g(a.targets),H.images=g(a.images||"img",!0),H.changeParent=d(a.changeParent,!1),H.threshold=d(a.threshold,50),H.minComplexity=d(a.minComplexity,30),H.minOverlap=d(a.minOverlap,50),H.windowEvents=d(a.windowEvents,!0),H.maxDuration=d(a.maxDuration,500),H.mask=d(a.mask,{r:0,g:255,b:0}),H.classes=d(a.classes,{dark:"background--dark",light:"background--light",complex:"background--complex"}),void 0===B&&(h(),B&&(C.style.position="fixed",C.style.top="0px",C.style.left="0px",C.style.width="100%",C.style.height="100%",window.addEventListener(G,x.bind(null,function(){k(),w()})),window.addEventListener("scroll",x.bind(null,w)),k(),w()))}function b(){B=null,C=null,D=null,H={},E&&clearTimeout(E)}function c(a){z("debug")&&console.log(a)}function d(a,b){return e(a,typeof b),void 0===a?b:a}function e(a,b){if(void 0!==a&&typeof a!==b)throw"Incorrect attribute type"}function f(a){for(var b,d,e=[],f=0;f<a.length;f++)if(b=a[f],e.push(b),"IMG"!==b.tagName){if(d=window.getComputedStyle(b).backgroundImage,d.split(/,url|, url/).length>1)throw"Multiple backgrounds are not supported";if(!d||"none"===d)throw"Element is not an <img> but does not have a background-image";e[f]={img:new Image,el:e[f]},d=d.slice(4,-1),d=d.replace(/"/g,""),e[f].img.src=d,c("CSS Image - "+d)}return e}function g(a,b){var c=a;if("string"==typeof a?c=document.querySelectorAll(a):a&&1===a.nodeType&&(c=[a]),!c||0===c.length||void 0===c.length)throw"Elements not found";return b&&(c=f(c)),c=Array.prototype.slice.call(c)}function h(){C=document.createElement("canvas"),C&&C.getContext?(D=C.getContext("2d"),B=!0):B=!1,i()}function i(){z("debugOverlay")?(C.style.opacity=.5,C.style.pointerEvents="none",document.body.appendChild(C)):C.parentNode&&C.parentNode.removeChild(C)}function j(a){var d=(new Date).getTime()-a;c("Duration: "+d+"ms"),d>z("maxDuration")&&(console.log("BackgroundCheck - Killed"),q(),b())}function k(){F={left:0,top:0,right:document.body.clientWidth,bottom:window.innerHeight},C.width=document.body.clientWidth,C.height=window.innerHeight}function l(a,b,c){var d,e;return-1!==a.indexOf("px")?d=parseFloat(a):-1!==a.indexOf("%")?(d=parseFloat(a),e=d/100,d=e*b,c&&(d-=c*e)):d=b,d}function m(a){var b=window.getComputedStyle(a.el);a.el.style.backgroundRepeat="no-repeat",a.el.style.backgroundOrigin="padding-box";var c=b.backgroundSize.split(" "),d=c[0],e=void 0===c[1]?"auto":c[1],f=a.el.clientWidth/a.el.clientHeight,g=a.img.naturalWidth/a.img.naturalHeight;"cover"===d?f>=g?(d="100%",e="auto"):(d="auto",c[0]="auto",e="100%"):"contain"===d&&(1/g>1/f?(d="auto",c[0]="auto",e="100%"):(d="100%",e="auto")),d="auto"===d?a.img.naturalWidth:l(d,a.el.clientWidth),e="auto"===e?d/a.img.naturalWidth*a.img.naturalHeight:l(e,a.el.clientHeight),"auto"===c[0]&&"auto"!==c[1]&&(d=e/a.img.naturalHeight*a.img.naturalWidth);var h=b.backgroundPosition;"top"===h?h="50% 0%":"left"===h?h="0% 50%":"right"===h?h="100% 50%":"bottom"===h?h="50% 100%":"center"===h&&(h="50% 50%"),h=h.split(" ");var i,j;return 4===h.length?(i=h[1],j=h[3]):(i=h[0],j=h[1]),j=j||"50%",i=l(i,a.el.clientWidth,d),j=l(j,a.el.clientHeight,e),4===h.length&&("right"===h[0]&&(i=a.el.clientWidth-a.img.naturalWidth-i),"bottom"===h[2]&&(j=a.el.clientHeight-a.img.naturalHeight-j)),i+=a.el.getBoundingClientRect().left,j+=a.el.getBoundingClientRect().top,{left:Math.floor(i),right:Math.floor(i+d),top:Math.floor(j),bottom:Math.floor(j+e),width:Math.floor(d),height:Math.floor(e)}}function n(a){var b,c,d;if(a.nodeType){var e=a.getBoundingClientRect();b={left:e.left,right:e.right,top:e.top,bottom:e.bottom,width:e.width,height:e.height},d=a.parentNode,c=a}else b=m(a),d=a.el,c=a.img;d=d.getBoundingClientRect(),b.imageTop=0,b.imageLeft=0,b.imageWidth=c.naturalWidth,b.imageHeight=c.naturalHeight;var f,g=b.imageHeight/b.height;return b.top<d.top&&(f=d.top-b.top,b.imageTop=g*f,b.imageHeight-=g*f,b.top+=f,b.height-=f),b.left<d.left&&(f=d.left-b.left,b.imageLeft+=g*f,b.imageWidth-=g*f,b.width-=f,b.left+=f),b.bottom>d.bottom&&(f=b.bottom-d.bottom,b.imageHeight-=g*f,b.height-=f),b.right>d.right&&(f=b.right-d.right,b.imageWidth-=g*f,b.width-=f),b.imageTop=Math.floor(b.imageTop),b.imageLeft=Math.floor(b.imageLeft),b.imageHeight=Math.floor(b.imageHeight),b.imageWidth=Math.floor(b.imageWidth),b}function o(a){var b=n(a);a=a.nodeType?a:a.img,b.imageWidth>0&&b.imageHeight>0&&b.width>0&&b.height>0?D.drawImage(a,b.imageLeft,b.imageTop,b.imageWidth,b.imageHeight,b.left,b.top,b.width,b.height):c("Skipping image - "+a.src+" - area too small")}function p(a,b,c){var d=a.className;switch(c){case"add":d+=" "+b;break;case"remove":var e=new RegExp("(?:^|\\s)"+b+"(?!\\S)","g");d=d.replace(e,"")}a.className=d.trim()}function q(a){for(var b,c=a?[a]:z("targets"),d=0;d<c.length;d++)b=c[d],b=z("changeParent")?b.parentNode:b,p(b,z("classes").light,"remove"),p(b,z("classes").dark,"remove"),p(b,z("classes").complex,"remove")}function r(a){var b,d,e,f,g=a.getBoundingClientRect(),h=0,i=0,j=0,k=0,l=z("mask");if(g.width>0&&g.height>0){q(a),a=z("changeParent")?a.parentNode:a,d=D.getImageData(g.left,g.top,g.width,g.height).data;for(var m=0;m<d.length;m+=4)d[m]===l.r&&d[m+1]===l.g&&d[m+2]===l.b?k++:(h++,b=.2126*d[m]+.7152*d[m+1]+.0722*d[m+2],e=b-j,i+=e*e,j+=e/h);k<=d.length/4*(1-z("minOverlap")/100)&&(f=Math.sqrt(i/h)/255,j/=255,c("Target: "+a.className+" lum: "+j+" var: "+f),p(a,j<=z("threshold")/100?z("classes").dark:z("classes").light,"add"),f>z("minComplexity")/100&&p(a,z("classes").complex,"add"))}}function s(a,b){return a=(a.nodeType?a:a.el).getBoundingClientRect(),b=b===F?b:(b.nodeType?b:b.el).getBoundingClientRect(),!(a.right<b.left||a.left>b.right||a.top>b.bottom||a.bottom<b.top)}function t(a){for(var b,c=(new Date).getTime(),d=a&&("IMG"===a.tagName||a.img)?"image":"targets",e=a?!1:!0,f=z("targets").length,g=0;f>g;g++)b=z("targets")[g],s(b,F)&&("targets"!==d||a&&a!==b?"image"===d&&s(b,a)&&r(b):(e=!0,r(b)));if("targets"===d&&!e)throw a+" is not a target";j(c)}function u(a){var b=function(a){var b=0;return"static"!==window.getComputedStyle(a).position&&(b=parseInt(window.getComputedStyle(a).zIndex,10)||0,b>=0&&b++),b},c=a.parentNode,d=c?b(c):0,e=b(a);return 1e5*d+e}function v(a){var b=!1;return a.sort(function(a,c){a=a.nodeType?a:a.el,c=c.nodeType?c:c.el;var d=a.compareDocumentPosition(c),e=0;return a=u(a),c=u(c),a>c&&(b=!0),a===c&&2===d?e=1:a===c&&4===d&&(e=-1),e||a-c}),c("Sorted: "+b),b&&c(a),b}function w(a,b,d){if(B){var e=z("mask");c("--- BackgroundCheck ---"),c("onLoad event: "+(d&&d.src)),b!==!0&&(D.clearRect(0,0,C.width,C.height),D.fillStyle="rgb("+e.r+", "+e.g+", "+e.b+")",D.fillRect(0,0,C.width,C.height));for(var f,g,h=d?[d]:z("images"),i=v(h),j=!1,k=0;k<h.length;k++)f=h[k],s(f,F)&&(g=f.nodeType?f:f.img,0===g.naturalWidth?(j=!0,c("Loading... "+f.src),g.removeEventListener("load",w),i?g.addEventListener("load",w.bind(null,null,!1,null)):g.addEventListener("load",w.bind(null,a,!0,f))):(c("Drawing: "+f.src),o(f)));d||j?d&&t(d):t(a)}}function x(a){z("windowEvents")===!0&&(E&&clearTimeout(E),E=setTimeout(a,200))}function y(a,b){if(void 0===H[a])throw"Unknown property - "+a;if(void 0===b)throw"Missing value for "+a;if("targets"===a||"images"===a)try{b=g("images"!==a||b?b:"img","images"===a?!0:!1)}catch(c){throw b=[],c}else e(b,typeof H[a]);q(),H[a]=b,w(),"debugOverlay"===a&&i()}function z(a){if(void 0===H[a])throw"Unknown property - "+a;return H[a]}function A(){for(var a,b=z("images"),c=[],d=0;d<b.length;d++)a=n(b[d]),c.push(a);return c}var B,C,D,E,F,G=void 0!==window.orientation?"orientationchange":"resize",H={};return{init:a,destroy:b,refresh:w,set:y,get:z,getImageData:A}});

;(function ($) {
	$.fn.countTo = function (options) {
		options = options || {};

		return $(this).each(function () {
			// set options for current element
			var settings = $.extend({}, $.fn.countTo.defaults, {
				from:            $(this).data('from'),
				to:              $(this).data('to'),
				speed:           $(this).data('speed'),
				refreshInterval: $(this).data('refresh-interval'),
				decimals:        $(this).data('decimals')
			}, options);

			// how many times to update the value, and how much to increment the value on each update
			var loops = Math.ceil(settings.speed / settings.refreshInterval),
				increment = (settings.to - settings.from) / loops;

			// references & variables that will change with each update
			var self = this,
				$self = $(this),
				loopCount = 0,
				value = settings.from,
				data = $self.data('countTo') || {};

			$self.data('countTo', data);

			// if an existing interval can be found, clear it first
			if (data.interval) {
				clearInterval(data.interval);
			}
			data.interval = setInterval(updateTimer, settings.refreshInterval);

			// initialize the element with the starting value
			render(value);

			function updateTimer() {
				value += increment;
				loopCount++;

				render(value);

				if (typeof(settings.onUpdate) == 'function') {
					settings.onUpdate.call(self, value);
				}

				if (loopCount >= loops) {
					// remove the interval
					$self.removeData('countTo');
					clearInterval(data.interval);
					value = settings.to;

					if (typeof(settings.onComplete) == 'function') {
						settings.onComplete.call(self, value);
					}
				}
			}

			function render(value) {
				var formattedValue = settings.formatter.call(self, value, settings);
				$self.text(formattedValue);
			}
		});
	};

	$.fn.countTo.defaults = {
		from: 0,               // the number the element should start at
		to: 0,                 // the number the element should end at
		speed: 1000,           // how long it should take to count between the target numbers
		refreshInterval: 100,  // how often the element should be updated
		decimals: 0,           // the number of decimal places to show
		formatter: formatter,  // handler for formatting the value before rendering
		onUpdate: null,        // callback method for every time the element is updated
		onComplete: null       // callback method for when the element finishes updating
	};

	function formatter(value, settings) {
		return value.toFixed(settings.decimals);
	}
}(jQuery));

/*
 * jQuery appear plugin
 *
 * Copyright (c) 2012 Andrey Sidorov
 * licensed under MIT license.
 *
 * https://github.com/morr/jquery.appear/
 *
 * Version: 0.3.3
 */
(function($) {
  	var selectors = [];
	var check_binded = false;
  	var check_lock = false;
  	var on_check = false;
  	var defaults = {
    	interval: 250,
    	force_process: false
  	}
  	var $window = $(window);
	var $prior_appeared;
	$(window).off('scroll.beanimate');
	function process() {
    	check_lock = false;
    	for (var index = 0; index < selectors.length; index++) {
      		var $appeared = $(selectors[index]).filter(function() {
        		return $(this).is(':appeared');
      		});
			$appeared.trigger('appear', [$appeared]);
			if ($prior_appeared) {
        		var $disappeared = $prior_appeared.not($appeared);
        		$disappeared.trigger('disappear', [$disappeared]);
      		}
      		$prior_appeared = $appeared;
    	}
  	}
  	// "appeared" custom filter
  	$.expr[':']['appeared'] = function(element) {
    	var $element = $(element);
    	if (!$element.is(':visible')) {
      		return false;
    	}
    	var window_left = $window.scrollLeft();
    	var window_top = $window.scrollTop();
    	var offset = $element.offset();
    	var left = offset.left;
    	var top = offset.top;
    	if (top + $element.height() >= window_top &&
        	top - ($element.data('appear-top-offset') || 0) <= window_top + $window.height() &&
        	left + $element.width() >= window_left &&
        	left - ($element.data('appear-left-offset') || 0) <= window_left + $window.width()) {
      		return true;
    	} else {
      		return false;
    	}
  	}

  	$.fn.extend({
    	// watching for element's appearance in browser viewport
    	appear: function(options) {
      		var opts = $.extend({}, defaults, options || {});
      		var selector = this.selector || this;
      		if (!check_binded) {
        		on_check = function() {
          			if (check_lock) {
            			return;
          			}
          			check_lock = true;
          			setTimeout(process, opts.interval);
        		};
        		//$(window).on('scroll.beanimate', on_check);
        		$(window).on('smartresize', on_check);
        		check_binded = true;
      		}

      		if (opts.force_process) {
        		setTimeout(process, opts.interval);
      		}
      		selectors.push(selector);
      		return $(selector);
    	}
  	});

  	$.extend({
    	// force elements's appearance check
    	force_appear: function() {
      		if (check_binded) {
        		process();
        		return true;
      		};
      		return false;
    	}
  	});
})(jQuery);

jQuery.fn.center = function(parent) {
	if (parent) {
		parent = this.parent();
	} else {
		parent = window;
	}
	this.css({
		"position": "absolute",
		"top": (((jQuery(parent).height() - this.outerHeight()) / 2) + jQuery(parent).scrollTop() + "px"),
		"left": (((jQuery(parent).width() - this.outerWidth()) / 2) + jQuery(parent).scrollLeft() + "px")
	});
	return this;
}
	
;(function ( $ ) {
	var $gallery_wrap = $(this);
	var $gallery_container = $gallery_wrap.children('#gallery-container');
	var $position = 1;
	var padding_l = 0;
	var padding_r = 0;
	var current = 0, w_width = 0;
	var center = $gallery_wrap.width()/2;
	var nmb_images = $gallery_container.children('.placeholder').length;
	var scrolled = false, scrollTimeout;
	var move_slide = function() {};
	var show_image = function() {};
	var preload = function() {};
	var image_resize = function() {};
	var show_arrows = function() {};
	$.fn.CenteredSlider = function() {
		$gallery_wrap = $(this);
		$gallery_container = $gallery_wrap.children('#gallery-container');
		$gallery_all_container = $gallery_wrap.parent('.gallery-all-container');
		$position = 1;
		padding_l = 0;
		padding_r = 0;
		current = 0, w_width = 0;
		center = $gallery_wrap.width()/2;
		nmb_images = $gallery_container.children('.placeholder').length;
		scrolled = false, scrollTimeout;
		jQuery('.style1_placehloder').each(function(i) {
			jQuery(this).find('img').attr('src', jQuery(this).attr('data-source'));
			image_resize();
		});
		show_image = function($show_overlay, $moveto) {
			$show_overlay = typeof $show_overlay === 'undefined' ? true : false;
			$moveto = ((typeof $moveto === 'undefined') || $moveto == true) ? true : false;
			$obj = $gallery_container.find('.placeholder:eq('+current+')');
			$length = $gallery_container.find('.placeholder').length;
			if(($obj.length > 0) && (jQuery('#gallery-container-wrap').length > 0)) {
				var $offset 			= $obj.offset();
				var $parent_offset 		= jQuery('#gallery-container-wrap').offset();
				var obj_left 			= $offset.left-$parent_offset.left;
				var obj_center 			= obj_left + ($obj.width()/2);
				var center				= $gallery_wrap.width()/2;
				var currentScrollLeft 	= parseFloat($gallery_wrap.scrollLeft(),10);
				var move 				= currentScrollLeft + (obj_center - center);
				if($gallery_container.hasClass('vertical-carousel')) {
					obj_left 			= $offset.top-$parent_offset.top ;
					obj_center 			= obj_left + ($obj.height()/2);
					center				= $gallery_wrap.height()/2;
					currentScrollLeft 	= parseFloat($gallery_wrap.scrollTop(),10);
					move 				= currentScrollLeft + (obj_center - center);
				}
				if($show_overlay) {
					if($obj.hasClass('hentry')) {
						var $element = $obj.find('.portfolio-item-overlay');
						var $element_title = $obj.find('.attachment-details-custom-slider');
						jQuery('.portfolio-item-overlay').not($element).stop(true, true).fadeIn();
						jQuery('.attachment-details-custom-slider').not($element_title).css('display', 'none');
						$element.stop(true, true).fadeOut();
						if(!$element_title.is(":visible"))
							$element_title.css('display', 'block');
					} else {
						var $element = $obj.find('.overlay_placeholder');
						var $element_title = $obj.find('.attachment-details-custom-slider');
						jQuery('.overlay_placeholder').not($element).stop(true, true).fadeIn();
						jQuery('.attachment-details-custom-slider').not($element_title).css('display', 'none');
						$element.stop(true, true).fadeOut();
						if(!$element_title.is(":visible"))
							$element_title.css('display', 'block');
					}
				}
				if($moveto) {
					if($gallery_container.hasClass('vertical-carousel')) {
						if(move != $gallery_wrap.scrollTop()) {
							$gallery_wrap.stop().animate({scrollTop: move});
						}
					} else {
						if(move != $gallery_wrap.scrollLeft()) {
							$gallery_wrap.stop().animate({scrollLeft: move});
						}
					}
				}
			}
			show_arrows();
			$gallery_wrap.css('opacity', 1);
			jQuery('.page-loader').fadeOut();
		};
		preload = function(index) {
			var $obj = $gallery_container.find('.placeholder:eq('+index+')');
			if($obj.length > 0) {
				if($obj.hasClass('load')) {
					$obj.removeClass('load');
					if($obj.attr('data-source') != 'video') {
						loadImage($obj.attr('data-source'), function() {
							$obj.find('img').remove();
							$obj.prepend(this);
							if($obj.attr('data-href')) {
								this.wrap('<a class="slider-img-wrap dJAX_internal" href='+$obj.attr('data-href')+'></a>');
								$obj.find('.overlay_placeholder').appendTo($obj.find('a.slider-img-wrap'));
							}
							this.fadeIn(500, function() {
								jQuery('.gallery-slider-wrap').find('.loader').fadeOut();
								if($obj.hasClass('center')) {
									$obj.find('img').resizeToParent().css('opacity', 1);
								}
								else {
									$obj.find('img').css('opacity', 1);
								}
								image_resize();
								if($gallery_all_container.hasClass('normal-scroll') && jQuery('html').hasClass('no-touch')) {
									show_image(false, false);
								} else {
									show_image(false);
								}
								$obj.removeClass('show-title');
							});
						});
					}
				}
			}
		}
		loadImage = function(src, callback) {
			var img = jQuery('<img>').on('load', function(){
				callback.call(img);
			});
			img.attr('src',src);
		}
		for( i=current; i<=nmb_images; i++) {
			preload(i);
		}
		move_slide = function($action) {
			if($action == 'next' || $action == 'prev') {
				if($action == 'next') {
					nmb_images = $gallery_container.children('.placeholder').length;
					if(current+1 < nmb_images) {
						current++;
						show_image();
					}
				}
				if($action == 'prev') {
					if(current > 0) {
						current--;
						show_image();
					}
				}
			} else {
				current = $action;
				show_image();
			}
		};
		show_arrows = function() {
			if(nmb_images == 1) {
				jQuery('.arrow_prev').remove();
				jQuery('.arrow_next').remove();
			}
			if(nmb_images == current+1) {
				jQuery('.arrow_next').stop().fadeOut();
				jQuery('.arrow_prev').stop().fadeIn();
			} else if(current == 0) {
				jQuery('.arrow_prev').stop().fadeOut();
				jQuery('.arrow_next').stop().fadeIn();
			} else {
				jQuery('.arrow_prev').stop().fadeIn();
				jQuery('.arrow_next').stop().fadeIn();
			}
		};
		image_resize = function() {
			var $border_length = 2;
			if(jQuery('body').hasClass('be-themes-layout-layout-border-header-top')) {
				$border_length = 1;
			}
			var $height = (Number(jQuery(window).height())-(Number(jQuery('#header').innerHeight())+(Number(jQuery('.layout-box-bottom:visible').height())*$border_length)+Number(jQuery('#wpadminbar').innerHeight())+Number(jQuery('#portfolio-title-nav-wrap').innerHeight())+Number(jQuery('#footer').innerHeight()))), $slider_height = $height;
			if(jQuery('#gallery-container-wrap').attr('data-height')) {
				$slider_height = (($height/100)*parseInt(jQuery('#gallery-container-wrap').attr('data-height')));
				var $padding = ($height-$slider_height)/2;
				jQuery('#gallery-container-wrap').css('padding', $padding+'px 0px '+$padding+'px 0px').css('opacity', 1);
			}
			jQuery('#gallery-container-wrap').height($slider_height);
			jQuery('.style1_placehloder').each(function(i) {
				jQuery(this).height($slider_height);
				jQuery(this).find('img').height($slider_height);
			});
			jQuery('.placeholder.center img').resizeToParent();
			if($gallery_all_container.hasClass('normal-scroll') && jQuery('html').hasClass('no-touch')) {
				show_image(false, false);
			} else {
				show_image(false);
			}
			jQuery('.gallery-all-container').removeClass('resized');
		}
		if($gallery_all_container.hasClass('normal-scroll') && jQuery('html').hasClass('no-touch')) {
			show_image(true, false);
		} else {
			show_image();
		}
		if(jQuery('html').hasClass('touch') && (jQuery(window).width() > 767)) {
			jQuery('body').off('touchstart');
			jQuery('body').on('touchstart', '#gallery-container-wrap', function(e) {
				var touch = e.originalEvent,
					startX = touch.changedTouches[0].pageX;
				$gallery_wrap.on('touchmove',function(e){
					e.preventDefault();
					touch = e.originalEvent.touches[0] ||
							e.originalEvent.changedTouches[0];
					if(touch.pageX - startX > 10){
						$gallery_wrap.off('touchmove');
						move_slide('prev');
					}
					else if (touch.pageX - startX < -10){
						$gallery_wrap.off('touchmove');
						move_slide('next');
					}
				});
			}).on('touchend',function() {
				$gallery_wrap.off('touchmove');
			});
		} else {
			$gallery_wrap.off('mousewheel');
			$gallery_wrap.on('mousewheel',function(event, delta, deltaX,deltaY) {
				if(jQuery(window).width() > 767) {
					if(jQuery('.gallery-all-container').hasClass('normal-scroll') && jQuery('html').hasClass('no-touch')) {
						if($gallery_container.hasClass('vertical-carousel')) {
							$gallery_wrap.animate({scrollTop: '-='+(delta * 30)}, 0);
						} else {
							$gallery_wrap.animate({scrollLeft: '-='+(delta * 30)}, 0);
						}
						event.preventDefault();
					} else {
						event.preventDefault();
						if(!scrolled) {
							scrolled = true;
							if(delta < 0) {
								move_slide('next');
							} else {
								move_slide('prev');
							}
						}
						clearTimeout(scrollTimeout);
						scrollTimeout = setTimeout(function() {
							scrolled = false;
						}, 45);
					}
				}
			});
		}
		jQuery(document).keydown(function(e) {
			if(jQuery('#gallery-container-wrap').length > 0) {
				if(!scrolled) {
					scrolled = true;
					if(e.which == 37 || e.which == 38 || e.which == 39 || e.which == 40) {
						if(e.which == 37) {
							move_slide('prev');
						} else if(e.which == 38) {
							move_slide('prev');
						} else if(e.which == 39) {
							move_slide('next');
						} else {
							move_slide('next');
						}
						e.preventDefault();
					}
					clearTimeout(scrollTimeout);
					scrollTimeout = setTimeout(function() {
						scrolled = false;
					}, 45);
				}
			}
		});
	}
	image_resize();
	jQuery(window).smartresize(function() {
		image_resize();
	});
	jQuery(document).on('click', '.arrow_next', function(e) {
		move_slide('next');
	});
	jQuery(document).on('click', '.arrow_prev', function(e) {
		move_slide('prev');
	});
	jQuery(document).on('mouseup', '#gallery-container-wrap, .arrow_next, .arrow_prev', function(e) {
		if(jQuery('.gallery_content').hasClass('show')) {
			jQuery('.gallery_content').removeClass('show');
			jQuery('.single_portfolio_info_close').find('.font-icon').addClass('icon_document_alt').removeClass('icon_close');
		}
	});
	jQuery(document).on('click', '.elastislide-carousel ul li a', function(e) {
		e.preventDefault();
		var $target = jQuery(this).attr('data-target');
		move_slide(parseInt($target));
	});
}( jQuery ));
/**!
 * easyPieChart
 * Lightweight plugin to render simple, animated and retina optimized pie charts
 *
 * @license 
 * @author Robert Fleischmann <rendro87@gmail.com> (http://robert-fleischmann.de)
 * @version 2.1.5
 **/
!function(a,b){"object"==typeof exports?module.exports=b(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],b):b(a.jQuery)}(this,function(a){var b=function(a,b){var c,d=document.createElement("canvas");a.appendChild(d),"undefined"!=typeof G_vmlCanvasManager&&G_vmlCanvasManager.initElement(d);var e=d.getContext("2d");d.width=d.height=b.size;var f=1;window.devicePixelRatio>1&&(f=window.devicePixelRatio,d.style.width=d.style.height=[b.size,"px"].join(""),d.width=d.height=b.size*f,e.scale(f,f)),e.translate(b.size/2,b.size/2),e.rotate((-0.5+b.rotate/180)*Math.PI);var g=(b.size-b.lineWidth)/2;b.scaleColor&&b.scaleLength&&(g-=b.scaleLength+2),Date.now=Date.now||function(){return+new Date};var h=function(a,b,c){c=Math.min(Math.max(-1,c||0),1);var d=0>=c?!0:!1;e.beginPath(),e.arc(0,0,g,0,2*Math.PI*c,d),e.strokeStyle=a,e.lineWidth=b,e.stroke()},i=function(){var a,c;e.lineWidth=1,e.fillStyle=b.scaleColor,e.save();for(var d=24;d>0;--d)d%6===0?(c=b.scaleLength,a=0):(c=.6*b.scaleLength,a=b.scaleLength-c),e.fillRect(-b.size/2+a,0,c,1),e.rotate(Math.PI/12);e.restore()},j=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(a){window.setTimeout(a,1e3/60)}}(),k=function(){b.scaleColor&&i(),b.trackColor&&h(b.trackColor,b.lineWidth,1)};this.getCanvas=function(){return d},this.getCtx=function(){return e},this.clear=function(){e.clearRect(b.size/-2,b.size/-2,b.size,b.size)},this.draw=function(a){b.scaleColor||b.trackColor?e.getImageData&&e.putImageData?c?e.putImageData(c,0,0):(k(),c=e.getImageData(0,0,b.size*f,b.size*f)):(this.clear(),k()):this.clear(),e.lineCap=b.lineCap;var d;d="function"==typeof b.barColor?b.barColor(a):b.barColor,h(d,b.lineWidth,a/100)}.bind(this),this.animate=function(a,c){var d=Date.now();b.onStart(a,c);var e=function(){var f=Math.min(Date.now()-d,b.animate.duration),g=b.easing(this,f,a,c-a,b.animate.duration);this.draw(g),b.onStep(a,c,g),f>=b.animate.duration?b.onStop(a,c):j(e)}.bind(this);j(e)}.bind(this)},c=function(a,c){var d={barColor:"#ef1e25",trackColor:"#f9f9f9",scaleColor:"#dfe0e0",scaleLength:5,lineCap:"round",lineWidth:3,size:110,rotate:0,animate:{duration:1e3,enabled:!0},easing:function(a,b,c,d,e){return b/=e/2,1>b?d/2*b*b+c:-d/2*(--b*(b-2)-1)+c},onStart:function(){},onStep:function(){},onStop:function(){}};if("undefined"!=typeof b)d.renderer=b;else{if("undefined"==typeof SVGRenderer)throw new Error("Please load either the SVG- or the CanvasRenderer");d.renderer=SVGRenderer}var e={},f=0,g=function(){this.el=a,this.options=e;for(var b in d)d.hasOwnProperty(b)&&(e[b]=c&&"undefined"!=typeof c[b]?c[b]:d[b],"function"==typeof e[b]&&(e[b]=e[b].bind(this)));e.easing="string"==typeof e.easing&&"undefined"!=typeof jQuery&&jQuery.isFunction(jQuery.easing[e.easing])?jQuery.easing[e.easing]:d.easing,"number"==typeof e.animate&&(e.animate={duration:e.animate,enabled:!0}),"boolean"!=typeof e.animate||e.animate||(e.animate={duration:1e3,enabled:e.animate}),this.renderer=new e.renderer(a,e),this.renderer.draw(f),a.dataset&&a.dataset.percent?this.update(parseFloat(a.dataset.percent)):a.getAttribute&&a.getAttribute("data-percent")&&this.update(parseFloat(a.getAttribute("data-percent")))}.bind(this);this.update=function(a){return a=parseFloat(a),e.animate.enabled?this.renderer.animate(f,a):this.renderer.draw(a),f=a,this}.bind(this),this.disableAnimation=function(){return e.animate.enabled=!1,this},this.enableAnimation=function(){return e.animate.enabled=!0,this},g()};a.fn.easyPieChart=function(b){return this.each(function(){var d;a.data(this,"easyPieChart")||(d=a.extend({},b,a(this).data()),a.data(this,"easyPieChart",new c(this,d)))})}});
/*! Copyright (c) 2008 Brandon Aaron (brandon.aaron@gmail.com || http://brandonaaron.net)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) 
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 */

/**
 * Gets the width of the OS scrollbar
 */
(function($) {
	var scrollbarWidth = 0;
	$.getScrollbarWidth = function() {
		if ( !scrollbarWidth ) {
			if ( $.browser.msie ) {
				var $textarea1 = $('<textarea cols="10" rows="2"></textarea>')
						.css({ position: 'absolute', top: -1000, left: -1000 }).appendTo('body'),
					$textarea2 = $('<textarea cols="10" rows="2" style="overflow: hidden;"></textarea>')
						.css({ position: 'absolute', top: -1000, left: -1000 }).appendTo('body');
				scrollbarWidth = $textarea1.width() - $textarea2.width();
				$textarea1.add($textarea2).remove();
			} else {
				var $div = $('<div />')
					.css({ width: 100, height: 100, overflow: 'auto', position: 'absolute', top: -1000, left: -1000 })
					.prependTo('body').append('<div />').find('div')
						.css({ width: '100%', height: 200 });
				scrollbarWidth = 100 - $div.width();
				$div.parent().remove();
			}
		}
		return scrollbarWidth;
	};
})(jQuery);

/*
* jQuery djax
*
* @version v0.122
*
* Copyright 2012, Brian Zeligson
* Released under the MIT license.
* http://www.opensource.org/licenses/mit-license.php
*
* Homepage:
*   http://beezee.github.com/djax.html
*
* Authors:
*   Brian Zeligson
*
* Contributors:
*  Gary Jones @GaryJones
*
* Maintainer:
*   Brian Zeligson github @beezee
*
*/

/*jslint browser: true, indent: 4, maxerr: 50, sub: true */
/*jshint bitwise:true, curly:true, eqeqeq:true, forin:true, immed:true, latedef:true, noarg:true, noempty:true, nomen:true, nonew:true, onevar:true, plusplus:true, regexp:true, smarttabs:true, strict:true, trailing:true, undef:true, white:true, browser:true, jquery:true, indent:4, maxerr:50, */
/*global jQuery */

// ==ClosureCompiler==
// @compilation_level ADVANCED_OPTIMIZATIONS
// @output_file_name jquery.djax.js
// @externs_url http://closure-compiler.googlecode.com/svn/trunk/contrib/externs/jquery-1.7.js
// ==/ClosureCompiler==
// http://closure-compiler.appspot.com/home

(function ($, exports) {
	'use strict';
	$.fn.djax = function (selector, exceptions, replaceBlockWithFunc) {
		// If browser doesn't support pushState, abort now
		if (!history.pushState) {
			return $(this);
		}
		var self = this,
		    blockSelector = selector,
		    excludes = (exceptions && exceptions.length) ? exceptions : [],
		    replaceBlockWith = (replaceBlockWithFunc) ? replaceBlockWithFunc : $.fn.replaceWith,
			djaxing = false;
		// Ensure that the history is correct when going from 2nd page to 1st
		window.history.replaceState({
				'url' : window.location.href,
				'title' : $('title').text()
			},
			$('title').text(),
			window.location.href
		);
		self.clearDjaxing = function() {
			self.djaxing = false;
		}
		// Exclude the link exceptions
		self.attachClick = function (element, event) {
			var link = $(element),
				exception = false;
			$.each(excludes, function (index, exclusion) {
				if (link.attr('href').indexOf(exclusion) !== -1) {
					exception = true;
				}
				if (window.location.href.indexOf(exclusion) !== -1) {
					exception = true;
				}
			});

			if (link.hasClass('no-ajax') || link.parent().hasClass('no-ajax') || link.attr('target') == '_blank') {
				exception = true;
			}
			// If the link is one of the exceptions, return early so that
			// the link can be clicked and a full page load as normal
			if (exception) {
				return $(element);
			}
			// From this point on, we handle the behaviour
			event.preventDefault();
			// If we're already doing djaxing, return now and silently fail
			if (self.djaxing) {
				setTimeout(self.clearDjaxing, 1000);
				return $(element);
			}
			$(window).trigger('djaxClick', [element]);
			self.reqUrl = link.attr('href');
			self.triggered = false;
			self.navigate(link.attr('href'), true);
		};
		// Handle the navigation
		self.navigate = function (url, add) {
			var blocks = $(blockSelector);
			self.djaxing = true;
			// Get the new page
			$(window).trigger(
				'djaxLoading',
				[{
					'url' : url
				}]
			);
			var replaceBlocks = function (response) {
				if (url !== self.reqUrl) {
					self.navigate(self.reqUrl, false);
					return true;
				}
				var result = $(response),
					newBlocks = $(result).find(blockSelector);
				if (add) {
					window.history.pushState({
							'url' : url,
							'title' : $(result).filter('title').text()
						},
						$(result).filter('title').text(),
						url
					);
				}
				// Set page title as new page title
				$('title').text($(result).filter('title').text());
				// Loop through each block and find new page equivalent
				blocks.each(function () {
					var id = '#' + $(this).attr('id'),
					    newBlock = newBlocks.filter(id),
					    block = $(this);
					
					$('a', newBlock).filter(function () {
						return this.hostname === location.hostname;
					}).addClass('dJAX_internal').on('click', function (event) {
						return self.attachClick(this, event);
					});
					if (newBlock.length) {
						if (block.html() !== newBlock.html()) {
							replaceBlockWith.call(block, newBlock);
						}
					} else {
						block.remove();
					}
				});
				// Loop through new page blocks and add in as needed
				$.each(newBlocks, function () {
					var newBlock = $(this),
					    id = '#' + $(this).attr('id'),
					    $previousSibling;
					// If there is a new page block without an equivalent block
					// in the old page, we need to find out where to insert it
					if (!$(id).length) {
						// Find the previous sibling
						$previousSibling = $(result).find(id).prev();
						if ($previousSibling.length) {
							// Insert after the previous element
							newBlock.insertAfter('#' + $previousSibling.attr('id'));
						} else {
							// There's no previous sibling, so prepend to parent instead
							newBlock.prependTo('#' + newBlock.parent().attr('id'));
						}
					}
					// Only add a class to internal links
					$('a', newBlock).filter(function () {
						return this.hostname === location.hostname;
					}).addClass('dJAX_internal').on('click', function (event) {
						return self.attachClick(this, event);
					});

				});
				// Trigger djaxLoad event as a pseudo ready()
				if (!self.triggered) {
					$(window).trigger(
						'djaxLoad',
						[{
							'url' : url,
							'title' : $(result).filter('title').text(),
							'response' : response
						}]
					);
					self.triggered = true;
					self.djaxing = false;
				}
			};
			/*$.get(url, function (response) {
				replaceBlocks(response);
			}).error(function (response) {
				console.log('error', response);
				replaceBlocks(response['responseText']);
			});*/
			jQuery('.page-loader').fadeIn();
			jQuery.ajax({
				type: 'GET',
		    	url: url,
		    	cache: true,
		    	dataType: 'html',
        		async: true,
		    	success: function(response) {
		      		replaceBlocks(response);
		    	},
		    	error: function(response) {
		    		console.log('error', response);
					replaceBlocks(response['responseText']);
		    	}
		  	});
		}; /* End self.navigate */

		// Only add a class to internal links
		$(this).find('a').filter(function () {
			return this.hostname === location.hostname;
		}).addClass('dJAX_internal').on('click', function (event) {
			return self.attachClick(this, event);
		});
		jQuery('#main').on('click', '.slider-img-wrap.dJAX_internal', function (event) {
			return self.attachClick(this, event);
		});

		// On new page load
		$(window).bind('popstate', function (event) {
			self.triggered = false;
			if (event.originalEvent.state) {
				self.reqUrl = event.originalEvent.state.url;
				self.navigate(event.originalEvent.state.url, false);
			}
		});

	};

}(jQuery, window));

/* http://keith-wood.name/backgroundPos.html
   Background position animation for jQuery v1.1.1.
   Written by Keith Wood (kbwood{at}iinet.com.au) November 2010.
   Available under the MIT (https://github.com/jquery/jquery/blob/master/MIT-LICENSE.txt) license. 
   Please attribute the author if you use it. */

;(function($) { // Hide scope, no $ conflict

var usesTween = !!$.Tween;

if (usesTween) { // jQuery 1.8+
	$.Tween.propHooks['backgroundPosition'] = {
		get: function(tween) {
			return parseBackgroundPosition($(tween.elem).css(tween.prop));
		},
		set: setBackgroundPosition
	};
}
else { // jQuery 1.7-
	// Enable animation for the background-position attribute
	$.fx.step['backgroundPosition'] = setBackgroundPosition;
};

/* Parse a background-position definition: horizontal [vertical]
   @param  value  (string) the definition
   @return  ([2][string, number, string]) the extracted values - relative marker, amount, units */
function parseBackgroundPosition(value) {
	var bgPos = (value || '').split(/ /);
	var presets = {center: '50%', left: '0%', right: '100%', top: '0%', bottom: '100%'};
	var decodePos = function(index) {
		var pos = (presets[bgPos[index]] || bgPos[index] || '50%').
			match(/^([+-]=)?([+-]?\d+(\.\d*)?)(.*)$/);
		bgPos[index] = [pos[1], parseFloat(pos[2]), pos[4] || 'px'];
	};
	if (bgPos.length == 1 && $.inArray(bgPos[0], ['top', 'bottom']) > -1) {
		bgPos[1] = bgPos[0];
		bgPos[0] = '50%';
	}
	decodePos(0);
	decodePos(1);
	return bgPos;
}

/* Set the value for a step in the animation.
   @param  tween  (object) the animation properties */
function setBackgroundPosition(tween) {
	if (!tween.set) {
		initBackgroundPosition(tween);
	}
	$(tween.elem).css('background-position',
		((tween.pos * (tween.end[0][1] - tween.start[0][1]) + tween.start[0][1]) + tween.end[0][2]) + ' ' +
		((tween.pos * (tween.end[1][1] - tween.start[1][1]) + tween.start[1][1]) + tween.end[1][2]));
}

/* Initialise the animation.
   @param  tween  (object) the animation properties */
function initBackgroundPosition(tween) {
	tween.start = parseBackgroundPosition($(tween.elem).css('backgroundPosition'));
	tween.end = parseBackgroundPosition(tween.end);
	for (var i = 0; i < tween.end.length; i++) {
		if (tween.end[i][0]) { // Relative position
			tween.end[i][1] = tween.start[i][1] + (tween.end[i][0] == '-=' ? -1 : +1) * tween.end[i][1];
		}
	}
	tween.set = true;
}

})(jQuery);
/*
 * Plugin Name: Resize Image to Parent Container
 *
 * Author: Christian Varga
 * Author URI: http://christianvarga.com
 * Plugin Source: https://github.com/levymetal/jquery-resize-image-to-parent/
 *
 */
 
(function($) {
  $.fn.resizeToParent = function(opts) {
    var defaults = {
     parent: 'div',
     delay: 100
    }
 
    var opts = $.extend(defaults, opts);
 
    function positionImage(obj) {
      // reset image (in case we're calling this a second time, for example on resize)
      obj.css({'width': '', 'height': '', 'margin-left': '', 'margin-top': ''});
 
      // dimensions of the parent
      var parentWidth = obj.parents(opts.parent).width();
      var parentHeight = obj.parents(opts.parent).height();
 
      // dimensions of the image
      var imageWidth = obj.width();
      var imageHeight = obj.height();
 
      // step 1 - calculate the percentage difference between image width and container width
      var diff = imageWidth / parentWidth;
 
      // step 2 - if height divided by difference is smaller than container height, resize by height. otherwise resize by width
      if ((imageHeight / diff) < parentHeight) {
       obj.css({'width': 'auto', 'height': parentHeight});
 
       // set image variables to new dimensions
       imageWidth = imageWidth / (imageHeight / parentHeight);
       imageHeight = parentHeight;
      }
      else {
       obj.css({'height': 'auto', 'width': parentWidth});
 
       // set image variables to new dimensions
       imageWidth = parentWidth;
       imageHeight = imageHeight / diff;
      }
 
      // step 3 - center image in container
      var leftOffset = (imageWidth - parentWidth) / -2;
      var topOffset = (imageHeight - parentHeight) / -2;
 
      obj.css({'margin-left': leftOffset, 'margin-top': topOffset});
    }
 
    // run the position function on window resize (to make it responsive)
    var tid;
    var elems = this;
 
    $(window).on('resize', function() {
      clearTimeout(tid);
      tid = setTimeout(function() {
        elems.each(function() {
          positionImage($(this));
        });
      }, opts.delay);
    });
 
    return this.each(function() {
      var obj = $(this);
 
      // hack to force ie to run the load function... ridiculous bug 
      // http://stackoverflow.com/questions/7137737/ie9-problems-with-jquery-load-event-not-firing
      obj.attr("src", obj.attr("src"));
 
      // bind to load of image
      obj.load(function() {
        positionImage(obj);
      });
 
      // run the position function if the image is cached
      if (this.complete) {
        positionImage(obj);
      }
    });
  }
})( jQuery );
// The MIT License (MIT)

// Typed.js | Copyright (c) 2014 Matt Boldt | www.mattboldt.com

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
!function($){

    "use strict";

    var Typed = function(el, options){

        // chosen element to manipulate text
        this.el = $(el);
        // options
        this.options = $.extend({}, $.fn.typed.defaults, options);

        // text content of element
        this.text = this.el.text();

        // typing speed
        this.typeSpeed = this.options.typeSpeed;

        // add a delay before typing starts
        this.startDelay = this.options.startDelay;

        // backspacing speed
        this.backSpeed = this.options.backSpeed;

        // amount of time to wait before backspacing
        this.backDelay = this.options.backDelay;

        // input strings of text
        this.strings = this.options.strings;

        // character number position of current string
        this.strPos = 0;

        // current array position
        this.arrayPos = 0;
        
        // number to stop backspacing on.
        // default 0, can change depending on how many chars
        // you want to remove at the time
        this.stopNum = 0;

        // Looping logic
        this.loop = this.options.loop;
        this.loopCount = this.options.loopCount;
        this.curLoop = 0;
        
        // for stopping
        this.stop = false;

        // All systems go!
        this.build();
    };

        Typed.prototype =  {

            constructor: Typed

            , init: function(){
                // begin the loop w/ first current string (global self.string)
                // current string will be passed as an argument each time after this
                var self = this;
                self.timeout = setTimeout(function() {
                    // Start typing
                    self.typewrite(self.strings[self.arrayPos], self.strPos);
                }, self.startDelay);
            }

            , build: function(){
                // Insert cursor
                this.cursor = $("<span class=\"typed-cursor\">|</span>");
                this.el.after(this.cursor);
                this.init();
            }

            // pass current string state to each function, types 1 char per call
            , typewrite: function(curString, curStrPos){
                // exit when stopped
                if(this.stop === true)
                   return;
               
                // varying values for setTimeout during typing
                // can't be global since number changes each time loop is executed
                var humanize = Math.round(Math.random() * (100 - 30)) + this.typeSpeed;
                var self = this;

                // ------------- optional ------------- //
                // backpaces a certain string faster
                // ------------------------------------ //
                // if (self.arrayPos == 1){
                //  self.backDelay = 50;
                // }
                // else{ self.backDelay = 500; }

                // contain typing function in a timeout humanize'd delay
                self.timeout = setTimeout(function() {
                    // check for an escape character before a pause value
                    // format: \^\d+ eg: ^1000 should be able to print the ^ too using ^^
                    // single ^ are removed from string
                    var charPause = 0;
                    var substr = curString.substr(curStrPos);
                    if (substr.charAt(0) === '^') {
                        var e = 1;
                        if(substr.match(/^\^\d+/)) {
                           substr = substr.replace(/^\^(\d+).*/, "$1");
                           e += substr.length;
                           charPause = parseInt(substr);
                        }

                        // strip out the escape character and pause value so they're not printed
                        curString = curString.substring(0,curStrPos)+curString.substring(curStrPos+e);
                    }

                    // timeout for any pause after a character
                    self.timeout = setTimeout(function() {
                        if(curStrPos === curString.length) {
                           // fires callback function
                           self.options.onStringTyped(self.arrayPos);
                           
                            // is this the final string
                           if(self.arrayPos === self.strings.length-1) {
                              // animation that occurs on the last typed string
                              self.options.callback();
                              
                              self.curLoop++;
                              
                              // quit if we wont loop back
                              if(self.loop === false || self.curLoop === self.loopCount)
                                 return;                           
                           }
                           
                           self.timeout = setTimeout(function(){
                              self.backspace(curString, curStrPos);
                           }, self.backDelay);
                        } else {

                           /* call before functions if applicable */
                           if(curStrPos === 0)
                              self.options.preStringTyped(self.arrayPos);

                           // start typing each new char into existing string
                           // curString: arg, self.text: original text inside element
                           self.el.text(self.text + curString.substr(0, curStrPos+1));

                           // add characters one by one
                           curStrPos++;
                           // loop the function
                           self.typewrite(curString, curStrPos);
                        }
                    // end of character pause
                    }, charPause);

                // humanized value for typing
                }, humanize);

            }

            , backspace: function(curString, curStrPos){
                // exit when stopped
                if (this.stop === true) {
                   return;
                }
               
                // varying values for setTimeout during typing
                // can't be global since number changes each time loop is executed
                var humanize = Math.round(Math.random() * (100 - 30)) + this.backSpeed;
                var self = this;

                self.timeout = setTimeout(function() {

                    // ----- this part is optional ----- //
                    // check string array position
                    // on the first string, only delete one word
                    // the stopNum actually represents the amount of chars to
                    // keep in the current string. In my case it's 14.
                    // if (self.arrayPos == 1){
                    //  self.stopNum = 14;
                    // }
                    //every other time, delete the whole typed string
                    // else{
                    //  self.stopNum = 0;
                    // }

                    // ----- continue important stuff ----- //
                    // replace text with current text + typed characters
                    self.el.text(self.text + curString.substr(0, curStrPos));

                    // if the number (id of character in current string) is
                    // less than the stop number, keep going
                    if (curStrPos > self.stopNum){
                        // subtract characters one by one
                        curStrPos--;
                        // loop the function
                        self.backspace(curString, curStrPos);
                    }
                    // if the stop number has been reached, increase
                    // array position to next string
                    else if (curStrPos <= self.stopNum) {
                        self.arrayPos++;
                        
                        if(self.arrayPos === self.strings.length) {
                           self.arrayPos = 0;
                           self.init();
                        } else
                            self.typewrite(self.strings[self.arrayPos], curStrPos);
                    }

                // humanized value for typing
                }, humanize);

            }

            // Start & Stop currently not working

            // , stop: function() {
            //     var self = this;
                
            //     self.stop = true;
            //     clearInterval(self.timeout);
            // }

            // , start: function() {
            //     var self = this;
            //     if(self.stop === false)
            //        return;
               
            //     this.stop = false;
            //     this.init();
            // }

            // Reset and rebuild the element
            , reset: function(){
                var self = this;
                clearInterval(self.timeout);
                var id = this.el.attr('id');
                this.el.after('<span id="' + id + '"/>')
                this.el.remove();
                this.cursor.remove();
                // Send the callback
                self.options.resetCallback();
            }

        };

    $.fn.typed = function (option) {
        return this.each(function () {
          var $this = $(this)
            , data = $this.data('typed')
            , options = typeof option == 'object' && option;
          if (!data) $this.data('typed', (data = new Typed(this, options)));
          if (typeof option == 'string') data[option]();
        });
    };

    $.fn.typed.defaults = {
        strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
        // typing speed
        typeSpeed: 0,
        // time before typing starts
        startDelay: 0,
        // backspacing speed
        backSpeed: 0,
        // time before backspacing
        backDelay: 500,
        // loop
        loop: false,
        // false = infinite
        loopCount: false,
        // call when done callback function
        callback: function() {},
        // starting callback function before each string
        preStringTyped: function() {},
        //callback for every typed string
        onStringTyped: function() {},
        // callback for reset
        resetCallback: function() {}
    };
}(window.jQuery);

/**
 * jquery.hoverdir.js v1.1.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2012, Codrops
 * http://www.codrops.com
 */
;( function( $, window, undefined ) {
	
	'use strict';

	$.HoverDir = function( options, element ) {
		
		this.$el = $( element );
		this._init( options );

	};

	// the options
	$.HoverDir.defaults = {
		speed : 300,
		easing : 'ease',
		hoverDelay : 0,
		inverse : false
	};

	$.HoverDir.prototype = {

		_init : function( options ) {
			
			// options
			this.options = $.extend( true, {}, $.HoverDir.defaults, options );
			// transition properties
			this.transitionProp = 'all ' + this.options.speed + 'ms ' + this.options.easing;
			// support for CSS transitions
			this.support = Modernizr.csstransitions;
			// load the events
			this._loadEvents();

		},
		_loadEvents : function() {

			var self = this;
			
			this.$el.on( 'mouseenter.hoverdir, mouseleave.hoverdir', function( event ) {
				
				var $el = $( this ),
					$hoverElem = $el.find( 'div.thumb-overlay' ),
					direction = self._getDir( $el, { x : event.pageX, y : event.pageY } ),
					styleCSS = self._getStyle( direction );
				
				if( event.type === 'mouseenter' ) {
					
					$hoverElem.hide().css( styleCSS.from );
					clearTimeout( self.tmhover );

					self.tmhover = setTimeout( function() {
						
						$hoverElem.show( 0, function() {
							
							var $el = $( this );
							if( self.support ) {
								$el.css( 'transition', self.transitionProp );
							}
							self._applyAnimation( $el, styleCSS.to, self.options.speed );

						} );
						
					
					}, self.options.hoverDelay );
					
				}
				else {
				
					if( self.support ) {
						$hoverElem.css( 'transition', self.transitionProp );
					}
					clearTimeout( self.tmhover );
					self._applyAnimation( $hoverElem, styleCSS.from, self.options.speed );
					
				}
					
			} );

		},
		// credits : http://stackoverflow.com/a/3647634
		_getDir : function( $el, coordinates ) {
			
			// the width and height of the current div
			var w = $el.width(),
				h = $el.height(),

				// calculate the x and y to get an angle to the center of the div from that x and y.
				// gets the x value relative to the center of the DIV and "normalize" it
				x = ( coordinates.x - $el.offset().left - ( w/2 )) * ( w > h ? ( h/w ) : 1 ),
				y = ( coordinates.y - $el.offset().top  - ( h/2 )) * ( h > w ? ( w/h ) : 1 ),
			
				// the angle and the direction from where the mouse came in/went out clockwise (TRBL=0123);
				// first calculate the angle of the point,
				// add 180 deg to get rid of the negative values
				// divide by 90 to get the quadrant
				// add 3 and do a modulo by 4  to shift the quadrants to a proper clockwise TRBL (top/right/bottom/left) **/
				direction = Math.round( ( ( ( Math.atan2(y, x) * (180 / Math.PI) ) + 180 ) / 90 ) + 3 ) % 4;
			
			return direction;
			
		},
		_getStyle : function( direction ) {
			
			var fromStyle, toStyle,
				slideFromTop = { left : '0px', top : '-100%' },
				slideFromBottom = { left : '0px', top : '100%' },
				slideFromLeft = { left : '-100%', top : '0px' },
				slideFromRight = { left : '100%', top : '0px' },
				slideTop = { top : '0px' },
				slideLeft = { left : '0px' };
			
			switch( direction ) {
				case 0:
					// from top
					fromStyle = !this.options.inverse ? slideFromTop : slideFromBottom;
					toStyle = slideTop;
					break;
				case 1:
					// from right
					fromStyle = !this.options.inverse ? slideFromRight : slideFromLeft;
					toStyle = slideLeft;
					break;
				case 2:
					// from bottom
					fromStyle = !this.options.inverse ? slideFromBottom : slideFromTop;
					toStyle = slideTop;
					break;
				case 3:
					// from left
					fromStyle = !this.options.inverse ? slideFromLeft : slideFromRight;
					toStyle = slideLeft;
					break;
			};
			
			return { from : fromStyle, to : toStyle };
					
		},
		// apply a transition or fallback to jquery animate based on Modernizr.csstransitions support
		_applyAnimation : function( el, styleCSS, speed ) {

			$.fn.applyStyle = this.support ? $.fn.css : $.fn.animate;
			el.stop().applyStyle( styleCSS, $.extend( true, [], { duration : speed + 'ms' } ) );

		},

	};
	
	var logError = function( message ) {

		if ( window.console ) {

			window.console.error( message );
		
		}

	};
	
	$.fn.hoverdir = function( options ) {

		var instance = $.data( this, 'hoverdir' );
		
		if ( typeof options === 'string' ) {
			
			var args = Array.prototype.slice.call( arguments, 1 );
			
			this.each(function() {
			
				if ( !instance ) {

					logError( "cannot call methods on hoverdir prior to initialization; " +
					"attempted to call method '" + options + "'" );
					return;
				
				}
				
				if ( !$.isFunction( instance[options] ) || options.charAt(0) === "_" ) {

					logError( "no such method '" + options + "' for hoverdir instance" );
					return;
				
				}
				
				instance[ options ].apply( instance, args );
			
			});
		
		} 
		else {
		
			this.each(function() {
				
				if ( instance ) {

					instance._init();
				
				}
				else {

					instance = $.data( this, 'hoverdir', new $.HoverDir( options, this ) );
				
				}

			});
		
		}
		
		return instance;
		
	};
	
} )( jQuery, window );

// SmoothScroll for websites v1.2.1
// Licensed under the terms of the MIT license.

// People involved
//  - Balazs Galambosi (maintainer)  
//  - Michael Herf     (Pulse Algorithm)

(function(){
  
// Scroll Variables (tweakable)
var defaultOptions = {

    // Scrolling Core
    frameRate        : 150, // [Hz]
    animationTime    : 1200, // [px]
    stepSize         : 80, // [px]

    // Pulse (less tweakable)
    // ratio of "tail" to "acceleration"
    pulseAlgorithm   : true,
    pulseScale       : 8,
    pulseNormalize   : 1,

    // Acceleration
    accelerationDelta : 20,  // 20
    accelerationMax   : 1,   // 1

    // Keyboard Settings
    keyboardSupport   : true,  // option
    arrowScroll       : 50,     // [px]

    // Other
    touchpadSupport   : true,
    fixedBackground   : true, 
    excluded          : ""    
};

var options = defaultOptions;


// Other Variables
var isExcluded = false;
var isFrame = false;
var direction = { x: 0, y: 0 };
var initDone  = false;
var root = document.documentElement;
var activeElement;
var observer;
var deltaBuffer = [ 120, 120, 120 ];

var key = { left: 37, up: 38, right: 39, down: 40, spacebar: 32, 
            pageup: 33, pagedown: 34, end: 35, home: 36 };


/***********************************************
 * SETTINGS
 ***********************************************/

var options = defaultOptions;


/***********************************************
 * INITIALIZE
 ***********************************************/

/**
 * Tests if smooth scrolling is allowed. Shuts down everything if not.
 */
function initTest() {

    var disableKeyboard = false; 
    
    // disable keyboard support if anything above requested it
    if (disableKeyboard) {
        removeEvent("keydown", keydown);
    }

    if (options.keyboardSupport && !disableKeyboard) {
        addEvent("keydown", keydown);
    }
}

/**
 * Sets up scrolls array, determines if frames are involved.
 */
function init() {
  
    if (!document.body) return;

    var body = document.body;
    var html = document.documentElement;
    var windowHeight = window.innerHeight; 
    var scrollHeight = body.scrollHeight;
    
    // check compat mode for root element
    root = (document.compatMode.indexOf('CSS') >= 0) ? html : body;
    activeElement = body;
    
    initTest();
    initDone = true;

    // Checks if this script is running in a frame
    if (top != self) {
        isFrame = true;
    }

    /**
     * This fixes a bug where the areas left and right to 
     * the content does not trigger the onmousewheel event
     * on some pages. e.g.: html, body { height: 100% }
     */
    else if (scrollHeight > windowHeight &&
            (body.offsetHeight <= windowHeight || 
             html.offsetHeight <= windowHeight)) {

        // DOMChange (throttle): fix height
        var pending = false;
        var refresh = function () {
            if (!pending && html.scrollHeight != document.height) {
                pending = true; // add a new pending action
                setTimeout(function () {
                    html.style.height = document.height + 'px';
                    pending = false;
                }, 500); // act rarely to stay fast
            }
        };
        html.style.height = 'auto';
        setTimeout(refresh, 10);

        // clearfix
        if (root.offsetHeight <= windowHeight) {
            var underlay = document.createElement("div"); 	
            underlay.style.clear = "both";
            body.appendChild(underlay);
        }
    }

    // disable fixed background
    if (!options.fixedBackground && !isExcluded) {
        body.style.backgroundAttachment = "scroll";
        html.style.backgroundAttachment = "scroll";
    }
}


/************************************************
 * SCROLLING 
 ************************************************/
 
var que = [];
var pending = false;
var lastScroll = +new Date;

/**
 * Pushes scroll actions to the scrolling queue.
 */
function scrollArray(elem, left, top, delay) {
    
    delay || (delay = 1000);
    directionCheck(left, top);

    if (options.accelerationMax != 1) {
        var now = +new Date;
        var elapsed = now - lastScroll;
        if (elapsed < options.accelerationDelta) {
            var factor = (1 + (30 / elapsed)) / 2;
            if (factor > 1) {
                factor = Math.min(factor, options.accelerationMax);
                left *= factor;
                top  *= factor;
            }
        }
        lastScroll = +new Date;
    }          
    
    // push a scroll command
    que.push({
        x: left, 
        y: top, 
        lastX: (left < 0) ? 0.99 : -0.99,
        lastY: (top  < 0) ? 0.99 : -0.99, 
        start: +new Date
    });
        
    // don't act if there's a pending queue
    if (pending) {
        return;
    }  

    var scrollWindow = (elem === document.body);
    
    var step = function (time) {
        
        var now = +new Date;
        var scrollX = 0;
        var scrollY = 0; 
    
        for (var i = 0; i < que.length; i++) {
            
            var item = que[i];
            var elapsed  = now - item.start;
            var finished = (elapsed >= options.animationTime);
            
            // scroll position: [0, 1]
            var position = (finished) ? 1 : elapsed / options.animationTime;
            
            // easing [optional]
            if (options.pulseAlgorithm) {
                position = pulse(position);
            }
            
            // only need the difference
            var x = (item.x * position - item.lastX) >> 0;
            var y = (item.y * position - item.lastY) >> 0;
            
            // add this to the total scrolling
            scrollX += x;
            scrollY += y;            
            
            // update last values
            item.lastX += x;
            item.lastY += y;
        
            // delete and step back if it's over
            if (finished) {
                que.splice(i, 1); i--;
            }           
        }

        // scroll left and top
        if (scrollWindow) {
            window.scrollBy(scrollX, scrollY);
        } 
        else {
            if (scrollX) elem.scrollLeft += scrollX;
            if (scrollY) elem.scrollTop  += scrollY;                    
        }
        
        // clean up if there's nothing left to do
        if (!left && !top) {
            que = [];
        }
        
        if (que.length) { 
            requestFrame(step, elem, (delay / options.frameRate + 1)); 
        } else { 
            pending = false;
        }
    };
    
    // start a new queue of actions
    requestFrame(step, elem, 0);
    pending = true;
}


/***********************************************
 * EVENTS
 ***********************************************/

/**
 * Mouse wheel handler.
 * @param {Object} event
 */
function wheel(event) {

    if (!initDone) {
        init();
    }
    
    var target = event.target;
    var overflowing = overflowingAncestor(target);
    
    // use default if there's no overflowing
    // element or default action is prevented    
    if (!overflowing || event.defaultPrevented ||
        isNodeName(activeElement, "embed") ||
       (isNodeName(target, "embed") && /\.pdf/i.test(target.src))) {
        return true;
    }

    var deltaX = event.wheelDeltaX || 0;
    var deltaY = event.wheelDeltaY || 0;
    
    // use wheelDelta if deltaX/Y is not available
    if (!deltaX && !deltaY) {
        deltaY = event.wheelDelta || 0;
    }

    // check if it's a touchpad scroll that should be ignored
    if (!options.touchpadSupport && isTouchpad(deltaY)) {
        return true;
    }

    // scale by step size
    // delta is 120 most of the time
    // synaptics seems to send 1 sometimes
    if (Math.abs(deltaX) > 1.2) {
        deltaX *= options.stepSize / 120;
    }
    if (Math.abs(deltaY) > 1.2) {
        deltaY *= options.stepSize / 120;
    }
    
    scrollArray(overflowing, -deltaX, -deltaY);
    event.preventDefault();
}

/**
 * Keydown event handler.
 * @param {Object} event
 */
function keydown(event) {

    var target   = event.target;
    var modifier = event.ctrlKey || event.altKey || event.metaKey || 
                  (event.shiftKey && event.keyCode !== key.spacebar);
    
    // do nothing if user is editing text
    // or using a modifier key (except shift)
    // or in a dropdown
    if ( /input|textarea|select|embed/i.test(target.nodeName) ||
         target.isContentEditable || 
         event.defaultPrevented   ||
         modifier ) {
      return true;
    }
    // spacebar should trigger button press
    if (isNodeName(target, "button") &&
        event.keyCode === key.spacebar) {
      return true;
    }
    
    var shift, x = 0, y = 0;
    var elem = overflowingAncestor(activeElement);
    var clientHeight = elem.clientHeight;

    if (elem == document.body) {
        clientHeight = window.innerHeight;
    }

    switch (event.keyCode) {
        case key.up:
            y = -options.arrowScroll;
            break;
        case key.down:
            y = options.arrowScroll;
            break;         
        case key.spacebar: // (+ shift)
            shift = event.shiftKey ? 1 : -1;
            y = -shift * clientHeight * 0.9;
            break;
        case key.pageup:
            y = -clientHeight * 0.9;
            break;
        case key.pagedown:
            y = clientHeight * 0.9;
            break;
        case key.home:
            y = -elem.scrollTop;
            break;
        case key.end:
            var damt = elem.scrollHeight - elem.scrollTop - clientHeight;
            y = (damt > 0) ? damt+10 : 0;
            break;
        case key.left:
            x = -options.arrowScroll;
            break;
        case key.right:
            x = options.arrowScroll;
            break;            
        default:
            return true; // a key we don't care about
    }

    scrollArray(elem, x, y);
    event.preventDefault();
}

/**
 * Mousedown event only for updating activeElement
 */
function mousedown(event) {
    activeElement = event.target;
}


/***********************************************
 * OVERFLOW
 ***********************************************/
 
var cache = {}; // cleared out every once in while
setInterval(function () { cache = {}; }, 10 * 1000);

var uniqueID = (function () {
    var i = 0;
    return function (el) {
        return el.uniqueID || (el.uniqueID = i++);
    };
})();

function setCache(elems, overflowing) {
    for (var i = elems.length; i--;)
        cache[uniqueID(elems[i])] = overflowing;
    return overflowing;
}

function overflowingAncestor(el) {
    var elems = [];
    var rootScrollHeight = root.scrollHeight;
    do {
        var cached = cache[uniqueID(el)];
        if (cached) {
            return setCache(elems, cached);
        }
        elems.push(el);
        if (rootScrollHeight === el.scrollHeight) {
            if (!isFrame || root.clientHeight + 10 < rootScrollHeight) {
                return setCache(elems, document.body); // scrolling root in WebKit
            }
        } else if (el.clientHeight + 10 < el.scrollHeight) {
            overflow = getComputedStyle(el, "").getPropertyValue("overflow-y");
            if (overflow === "scroll" || overflow === "auto") {
                return setCache(elems, el);
            }
        }
    } while (el = el.parentNode);
}


/***********************************************
 * HELPERS
 ***********************************************/

function addEvent(type, fn, bubble) {
    window.addEventListener(type, fn, (bubble||false));
}

function removeEvent(type, fn, bubble) {
    window.removeEventListener(type, fn, (bubble||false));  
}

function isNodeName(el, tag) {
    return (el.nodeName||"").toLowerCase() === tag.toLowerCase();
}

function directionCheck(x, y) {
    x = (x > 0) ? 1 : -1;
    y = (y > 0) ? 1 : -1;
    if (direction.x !== x || direction.y !== y) {
        direction.x = x;
        direction.y = y;
        que = [];
        lastScroll = 0;
    }
}

var deltaBufferTimer;

function isTouchpad(deltaY) {
    if (!deltaY) return;
    deltaY = Math.abs(deltaY)
    deltaBuffer.push(deltaY);
    deltaBuffer.shift();
    clearTimeout(deltaBufferTimer);
    var allDivisable = (isDivisible(deltaBuffer[0], 120) &&
                        isDivisible(deltaBuffer[1], 120) &&
                        isDivisible(deltaBuffer[2], 120));
    return !allDivisable;
} 

function isDivisible(n, divisor) {
    return (Math.floor(n / divisor) == n / divisor);
}

var requestFrame = (function () {
      return  window.requestAnimationFrame       || 
              window.webkitRequestAnimationFrame || 
              function (callback, element, delay) {
                  window.setTimeout(callback, delay || (1000/60));
              };
})();


/***********************************************
 * PULSE
 ***********************************************/
 
/**
 * Viscous fluid with a pulse for part and decay for the rest.
 * - Applies a fixed force over an interval (a damped acceleration), and
 * - Lets the exponential bleed away the velocity over a longer interval
 * - Michael Herf, http://stereopsis.com/stopping/
 */
function pulse_(x) {
    var val, start, expx;
    // test
    x = x * options.pulseScale;
    if (x < 1) { // acceleartion
        val = x - (1 - Math.exp(-x));
    } else {     // tail
        // the previous animation ended here:
        start = Math.exp(-1);
        // simple viscous drag
        x -= 1;
        expx = 1 - Math.exp(-x);
        val = start + (expx * (1 - start));
    }
    return val * options.pulseNormalize;
}

function pulse(x) {
    if (x >= 1) return 1;
    if (x <= 0) return 0;

    if (options.pulseNormalize == 1) {
        options.pulseNormalize /= pulse_(1);
    }
    return pulse_(x);
}

var isChrome = /chrome/i.test(window.navigator.userAgent);
var wheelEvent = null;
if ("onwheel" in document.createElement("div"))
	wheelEvent = "wheel";
else if ("onmousewheel" in document.createElement("div"))
	wheelEvent = "mousewheel";

if (wheelEvent && isChrome && jQuery('body').hasClass('smooth-scroll')) {
	addEvent(wheelEvent, wheel);
	addEvent("mousedown", mousedown);
	addEvent("load", init);
}

})();

/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */

;(function(root, factory) {

  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.NProgress = factory();
  }

})(this, function() {
  var NProgress = {};

  NProgress.version = '0.1.6';

  var Settings = NProgress.settings = {
    minimum: 0.08,
    easing: 'ease',
    positionUsing: '',
    speed: 200,
    trickle: true,
    trickleRate: 0.02,
    trickleSpeed: 800,
    showSpinner: true,
    barSelector: '[role="bar"]',
    spinnerSelector: '[role="spinner"]',
    parent: 'body',
    template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
  };

  /**
   * Updates configuration.
   *
   *     NProgress.configure({
   *       minimum: 0.1
   *     });
   */
  NProgress.configure = function(options) {
    var key, value;
    for (key in options) {
      value = options[key];
      if (value !== undefined && options.hasOwnProperty(key)) Settings[key] = value;
    }

    return this;
  };

  /**
   * Last number.
   */

  NProgress.status = null;

  /**
   * Sets the progress bar status, where `n` is a number from `0.0` to `1.0`.
   *
   *     NProgress.set(0.4);
   *     NProgress.set(1.0);
   */

  NProgress.set = function(n) {
    var started = NProgress.isStarted();

    n = clamp(n, Settings.minimum, 1);
    NProgress.status = (n === 1 ? null : n);

    var progress = NProgress.render(!started),
        bar      = progress.querySelector(Settings.barSelector),
        speed    = Settings.speed,
        ease     = Settings.easing;

    progress.offsetWidth; /* Repaint */

    queue(function(next) {
      // Set positionUsing if it hasn't already been set
      if (Settings.positionUsing === '') Settings.positionUsing = NProgress.getPositioningCSS();

      // Add transition
      css(bar, barPositionCSS(n, speed, ease));

      if (n === 1) {
        // Fade out
        css(progress, { 
          transition: 'none', 
          opacity: 1 
        });
        progress.offsetWidth; /* Repaint */

        setTimeout(function() {
          css(progress, { 
            transition: 'all ' + speed + 'ms linear', 
            opacity: 0 
          });
          setTimeout(function() {
            NProgress.remove();
            next();
          }, speed);
        }, speed);
      } else {
        setTimeout(next, speed);
      }
    });

    return this;
  };

  NProgress.isStarted = function() {
    return typeof NProgress.status === 'number';
  };

  /**
   * Shows the progress bar.
   * This is the same as setting the status to 0%, except that it doesn't go backwards.
   *
   *     NProgress.start();
   *
   */
  NProgress.start = function() {
    if (!NProgress.status) NProgress.set(0);

    var work = function() {
      setTimeout(function() {
        if (!NProgress.status) return;
        NProgress.trickle();
        work();
      }, Settings.trickleSpeed);
    };

    if (Settings.trickle) work();

    return this;
  };

  /**
   * Hides the progress bar.
   * This is the *sort of* the same as setting the status to 100%, with the
   * difference being `done()` makes some placebo effect of some realistic motion.
   *
   *     NProgress.done();
   *
   * If `true` is passed, it will show the progress bar even if its hidden.
   *
   *     NProgress.done(true);
   */

  NProgress.done = function(force) {
    if (!force && !NProgress.status) return this;

    return NProgress.inc(0.3 + 0.5 * Math.random()).set(1);
  };

  /**
   * Increments by a random amount.
   */

  NProgress.inc = function(amount) {
    var n = NProgress.status;

    if (!n) {
      return NProgress.start();
    } else {
      if (typeof amount !== 'number') {
        amount = (1 - n) * clamp(Math.random() * n, 0.1, 0.95);
      }

      n = clamp(n + amount, 0, 0.994);
      return NProgress.set(n);
    }
  };

  NProgress.trickle = function() {
    return NProgress.inc(Math.random() * Settings.trickleRate);
  };

  /**
   * Waits for all supplied jQuery promises and
   * increases the progress as the promises resolve.
   * 
   * @param $promise jQUery Promise
   */
  (function() {
    var initial = 0, current = 0;
    
    NProgress.promise = function($promise) {
      if (!$promise || $promise.state() == "resolved") {
        return this;
      }
      
      if (current == 0) {
        NProgress.start();
      }
      
      initial++;
      current++;
      
      $promise.always(function() {
        current--;
        if (current == 0) {
            initial = 0;
            NProgress.done();
        } else {
            NProgress.set((initial - current) / initial);
        }
      });
      
      return this;
    };
    
  })();

  /**
   * (Internal) renders the progress bar markup based on the `template`
   * setting.
   */

  NProgress.render = function(fromStart) {
    if (NProgress.isRendered()) return document.getElementById('nprogress');

    addClass(document.documentElement, 'nprogress-busy');
    
    var progress = document.createElement('div');
    progress.id = 'nprogress';
    progress.innerHTML = Settings.template;

    var bar      = progress.querySelector(Settings.barSelector),
        perc     = fromStart ? '-100' : toBarPerc(NProgress.status || 0),
        parent   = document.querySelector(Settings.parent),
        spinner;
    
    css(bar, {
      transition: 'all 0 linear',
      transform: 'translate3d(' + perc + '%,0,0)'
    });

    if (!Settings.showSpinner) {
      spinner = progress.querySelector(Settings.spinnerSelector);
      spinner && removeElement(spinner);
    }

    if (parent != document.body) {
      addClass(parent, 'nprogress-custom-parent');
    }

    parent.appendChild(progress);
    return progress;
  };

  /**
   * Removes the element. Opposite of render().
   */

  NProgress.remove = function() {
    removeClass(document.documentElement, 'nprogress-busy');
    removeClass(document.querySelector(Settings.parent), 'nprogress-custom-parent')
    var progress = document.getElementById('nprogress');
    progress && removeElement(progress);
  };

  /**
   * Checks if the progress bar is rendered.
   */

  NProgress.isRendered = function() {
    return !!document.getElementById('nprogress');
  };

  /**
   * Determine which positioning CSS rule to use.
   */

  NProgress.getPositioningCSS = function() {
    // Sniff on document.body.style
    var bodyStyle = document.body.style;

    // Sniff prefixes
    var vendorPrefix = ('WebkitTransform' in bodyStyle) ? 'Webkit' :
                       ('MozTransform' in bodyStyle) ? 'Moz' :
                       ('msTransform' in bodyStyle) ? 'ms' :
                       ('OTransform' in bodyStyle) ? 'O' : '';

    if (vendorPrefix + 'Perspective' in bodyStyle) {
      // Modern browsers with 3D support, e.g. Webkit, IE10
      return 'translate3d';
    } else if (vendorPrefix + 'Transform' in bodyStyle) {
      // Browsers without 3D support, e.g. IE9
      return 'translate';
    } else {
      // Browsers without translate() support, e.g. IE7-8
      return 'margin';
    }
  };

  /**
   * Helpers
   */

  function clamp(n, min, max) {
    if (n < min) return min;
    if (n > max) return max;
    return n;
  }

  /**
   * (Internal) converts a percentage (`0..1`) to a bar translateX
   * percentage (`-100%..0%`).
   */

  function toBarPerc(n) {
    return (-1 + n) * 100;
  }


  /**
   * (Internal) returns the correct CSS for changing the bar's
   * position given an n percentage, and speed and ease from Settings
   */

  function barPositionCSS(n, speed, ease) {
    var barCSS;

    if (Settings.positionUsing === 'translate3d') {
      barCSS = { transform: 'translate3d('+toBarPerc(n)+'%,0,0)' };
    } else if (Settings.positionUsing === 'translate') {
      barCSS = { transform: 'translate('+toBarPerc(n)+'%,0)' };
    } else {
      barCSS = { 'margin-left': toBarPerc(n)+'%' };
    }

    barCSS.transition = 'all '+speed+'ms '+ease;

    return barCSS;
  }

  /**
   * (Internal) Queues a function to be executed.
   */

  var queue = (function() {
    var pending = [];
    
    function next() {
      var fn = pending.shift();
      if (fn) {
        fn(next);
      }
    }

    return function(fn) {
      pending.push(fn);
      if (pending.length == 1) next();
    };
  })();

  /**
   * (Internal) Applies css properties to an element, similar to the jQuery 
   * css method.
   *
   * While this helper does assist with vendor prefixed property names, it 
   * does not perform any manipulation of values prior to setting styles.
   */

  var css = (function() {
    var cssPrefixes = [ 'Webkit', 'O', 'Moz', 'ms' ],
        cssProps    = {};

    function camelCase(string) {
      return string.replace(/^-ms-/, 'ms-').replace(/-([\da-z])/gi, function(match, letter) {
        return letter.toUpperCase();
      });
    }

    function getVendorProp(name) {
      var style = document.body.style;
      if (name in style) return name;

      var i = cssPrefixes.length,
          capName = name.charAt(0).toUpperCase() + name.slice(1),
          vendorName;
      while (i--) {
        vendorName = cssPrefixes[i] + capName;
        if (vendorName in style) return vendorName;
      }

      return name;
    }

    function getStyleProp(name) {
      name = camelCase(name);
      return cssProps[name] || (cssProps[name] = getVendorProp(name));
    }

    function applyCss(element, prop, value) {
      prop = getStyleProp(prop);
      element.style[prop] = value;
    }

    return function(element, properties) {
      var args = arguments,
          prop, 
          value;

      if (args.length == 2) {
        for (prop in properties) {
          value = properties[prop];
          if (value !== undefined && properties.hasOwnProperty(prop)) applyCss(element, prop, value);
        }
      } else {
        applyCss(element, args[1], args[2]);
      }
    }
  })();

  /**
   * (Internal) Determines if an element or space separated list of class names contains a class name.
   */

  function hasClass(element, name) {
    var list = typeof element == 'string' ? element : classList(element);
    return list.indexOf(' ' + name + ' ') >= 0;
  }

  /**
   * (Internal) Adds a class to an element.
   */

  function addClass(element, name) {
    var oldList = classList(element),
        newList = oldList + name;

    if (hasClass(oldList, name)) return; 

    // Trim the opening space.
    element.className = newList.substring(1);
  }

  /**
   * (Internal) Removes a class from an element.
   */

  function removeClass(element, name) {
    var oldList = classList(element),
        newList;

    if (!hasClass(element, name)) return;

    // Replace the class name.
    newList = oldList.replace(' ' + name + ' ', ' ');

    // Trim the opening and closing spaces.
    element.className = newList.substring(1, newList.length - 1);
  }

  /**
   * (Internal) Gets a space separated list of the class names on the element. 
   * The list is wrapped with a single space on each end to facilitate finding 
   * matches within the list.
   */

  function classList(element) {
    return (' ' + (element.className || '') + ' ').replace(/\s+/gi, ' ');
  }

  /**
   * (Internal) Removes an element from the DOM.
   */

  function removeElement(element) {
    element && element.parentNode && element.parentNode.removeChild(element);
  }

  return NProgress;
});