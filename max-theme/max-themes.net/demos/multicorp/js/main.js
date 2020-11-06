(function($) {
	"use strict";

	/* *********************************************************************************************************************
	 * Global namespace "ish"
	 */
	if (ish == null || typeof(ish) !== "object") {
		var ish = {}
	}


	/* *********************************************************************************************************************
	 * Global variables
	 */
	var logo;
	var nav;
	var mainNav;
	var topNav;
	var WAIT_INTERVAL = 100;
	var BREAKINGPOINT = 768;
	var RESPONSIVE = true;
	var skillz;
	var onepage_sections;
	var onepage_current;
	var chartz;
	var counters;
	var floated_areas_opened = false;
	var ie11;

	var sidenav_opened;
	var sidenavWidth;
	var sidenavSize;
	var sidenavSizeType;
	var sidenavDel = 250;
	var sidenav_flBtn;

	var isFullNav = true;
	var FullNavBreakingPoint;

	var isFullHeaderBar = true;
	var FullHeaderBarBreakingPoint;

	var boxed_padding = 60;

	var top_nav_resp_menu_btn = 'Open menu';

	var $container;

	if (typeof ishyoboy_fe_globals !== 'undefined') {
		if (typeof ishyoboy_fe_globals.IYB_RESPONSIVE !== 'undefined') {
			RESPONSIVE = ishyoboy_fe_globals.IYB_RESPONSIVE;
		}
		if (typeof ishyoboy_fe_globals.IYB_BREAKINGPOINT !== 'undefined') {
			BREAKINGPOINT = ishyoboy_fe_globals.IYB_BREAKINGPOINT;
		}
	}


	/* *********************************************************************************************************************
	 * After resize function
	 */
	var waitForFinalEvent = (function () {
		var timers = {};
		return function (callback, ms, uniqueId) {
			if (!uniqueId) {
				uniqueId = "Don't call this twice without a uniqueId";
			}
			if (timers[uniqueId]) {
				clearTimeout(timers[uniqueId]);
			}
			timers[uniqueId] = setTimeout(callback, ms);
		};
	})();


	/* *********************************************************************************************************************
	 * jQuery Ready - Activate everything
	 */
	jQuery(document).ready(function ($) {

		// Detect IE
		jQuery.browser = {};
		(function () {
			jQuery.browser.msie = false;
			jQuery.browser.version = 0;
			if (navigator.userAgent.match(/MSIE ([0-9]+)\./)) {
				jQuery.browser.msie = true;
				jQuery.browser.version = RegExp.$1
			}
		})();

		ie11 = !!window.MSStream;
		// Detect browser != IE
		jQuery.browser.mozilla = /mozilla/.test(navigator.userAgent.toLowerCase()) && !/webkit/.test(navigator.userAgent.toLowerCase());
		jQuery.browser.webkit = /webkit/.test(navigator.userAgent.toLowerCase());
		jQuery.browser.opera = /opera/.test(navigator.userAgent.toLowerCase());

		// Global variables ------------------------------------------------------------------------------------------------
		mainNav = jQuery('.ish-ph-main_nav').find('ul');
		topNav = jQuery('.ish-top_nav_container').find('ul');

		// Call the rest ---------------------------------------------------------------------------------------------------
		ish.activate_sticky_navigation();
		ish.activate_header_resize();
		ish.activate_header_bar_resize();
		ish.activate_main_navigation();
		ish.activate_side_navigation();
		ish.activate_header_bar_navigation();
		ish.activate_breadcrumbs();
		ish.activate_floated_areas();
		ish.activate_smooth_scroll();
		ish.activate_back_to_top_link();
		ish.activate_onepage_menu();
		ish.activate_skillbars();
		ish.activate_portfolio_preloader();
		ish.activate_portfolio_3dcube();
		ish.activate_portfolio_filter();
		ish.activate_portfolio_packery();
		ish.activate_portfolio_ie_no_3d();
		ish.activate_gallery_packery();
		ish.activate_dynamic_parallax();
		ish.activate_shortcode_slidable();
		ish.activate_tooltips();
		ish.activate_blog_packery();
		ish.activate_iframe_embed_video_heigh_fix();
		ish.activate_ish_like_it();
		ish.activate_vunit();
		ish.activate_fancybox();
		ish.activate_text_separator_size_fix();
		ish.activate_accordions();
		ish.activate_accordions_filter();
		ish.activate_tabs();
		ish.activate_last_shape_footer();
		ish.activate_masonry_blog_responsive_class();
		ish.activate_masonry_blog_preloader();
		ish.activate_scroll_on_resize();
		ish.activate_charts();
		ish.activate_counters();

		jQuery(window).resize();
		jQuery(window).scroll();

	});

	/* *********************************************************************************************************************
	 * jQuery Load - Deactivate Pre-loader
	 */
	jQuery(window).load(function () {

		// Do not add code here. This event triggers after ALL JavaScripts have loaded
		ish.deactivate_site_preloader();

	});

	/* *****************************************************************************************************************
	 * jQuery Unload - Activate Pre-loader
	 */
	jQuery(window).bind('beforeunload', function () {

		// Do not add code here. This event triggers before user navigates away from current site
		ish.activate_site_preloader();

	});


	/* *****************************************************************************************************************
	 * function_exists() definition
	 */
	function function_exists(name) {
		return ( 'function' === eval('typeof ish.' + name) );
	}


	/* *****************************************************************************************************************
	 * ISH pluggable functions
	 */


	// Sticky nav ******************************************************************************************************
	if (!function_exists('activate_sticky_navigation')) {
		ish.activate_sticky_navigation = function () {

			if (jQuery('.ish-sticky-on').length > 0) {
				var header = jQuery('.ish-sticky-on .ish-part_header');
				var headerHeight = iyb_globals.header_height;
				var headerStickyHeight = iyb_globals.sticky_height + 'px';
				var lastScrollTop = 0;
				var isSticky = false;
				var header_bar = jQuery('.ish-part_header_bar');
				var header_bar_height = ( header_bar.length > 0 ) ? header_bar.height() : 0;
				var nav_css_position_switch = 0;

				var responsive_sticky_on = !( jQuery('.ish-sticky_resp-off').length > 0);

				jQuery(window).scroll(function () {
					var scrollPos = jQuery(this).scrollTop();

					var is_boxed_layout = ( jQuery('.ish-boxed').length > 0 );

					var scroll_break = ( header_bar_height > 0 ) ? header_bar_height : ( headerHeight / 2 );

					// Boxed version top padding
					if ( is_boxed_layout ) {
						scroll_break += boxed_padding;
						nav_css_position_switch = boxed_padding;

						if ( jQuery(window).width() < iyb_globals.page_width ) {
							scroll_break -= boxed_padding;
							nav_css_position_switch = 0;
						}
					}

					// Fix if admin bar present and on screen width < 600px
					if ( ( jQuery('#wpadminbar').length > 0 ) && ( jQuery(window).width() <= 600 ) ){
						scroll_break = ( header_bar_height > 0 ) ? ( header_bar_height + 46 ) : ( headerHeight / 2 );
						nav_css_position_switch = scroll_break;
					}

					//alert( responsive_sticky_on );

					/* Fix horizontal scroll of position fixed header
					 jQuery(window).scroll(function(){
					 jQuery('.ish-sticky-scrolling').css('left', 0 - jQuery(this).scrollLeft());
					 });
					 */

					if ( !RESPONSIVE || ( responsive_sticky_on || jQuery(window).width() > BREAKINGPOINT )) {

						if (scrollPos > lastScrollTop) {
							// Scroll down

							// Fix header position if no top bar present
							if ( is_boxed_layout && ( 0 == header_bar_height) && (scrollPos > nav_css_position_switch) ) {
								header.css('position', 'fixed');

								var wpadminbar = jQuery('#wpadminbar');

								if ( wpadminbar.length > 0 ){
									header.css('top', wpadminbar.outerHeight() );
								} else {
									header.css('top', 0 );
								}

							}


							if (scrollPos > scroll_break) {
								// Remove general scrolldown class
								header.addClass('ish-sticky-scrolling');

								// Animate header height
								header.find('.ish-row_inner').css('height', headerStickyHeight);

								isSticky = true;
							}
						} else {
							// Scroll top

							// Fix header position if no top bar present
							if ( is_boxed_layout && ( 0 == header_bar_height) && (scrollPos <= nav_css_position_switch) ) {
								header.css('position', '');
								header.css('top', '');
							}

							if (scrollPos <= scroll_break) {
								// Remove general scrolldown class
								header.removeClass('ish-sticky-scrolling');

								// Animate header height
								header.find('.ish-row_inner').css('height', headerHeight);
							}
						}
					}

					lastScrollTop = scrollPos;

					// console.log(headerHeight);
				});
			}

		}
	}

	// Check header menu length ----------------------------------------------------------------------------------------
	if ( ! function_exists( 'activate_header_resize' ) ) {
		ish.activate_header_resize = function (){

			if ( jQuery('.ish-ph-main_nav').length > 0 ) {

				jQuery(window).resize(function() {
					waitForFinalEvent(function(){

						ish.do_header_resize_check();

					}, WAIT_INTERVAL, "HeaderMenuResize");
				});

			}

		}
	}

	// Check header menu length ----------------------------------------------------------------------------------------
	if ( ! function_exists( 'do_header_resize_check' ) ) {
		ish.do_header_resize_check = function (){
			var _main_nav = jQuery('.ish-ph-main_nav');
			var _logo = jQuery('.ish-ph-logo');
			var _logo_width = ( _logo.length > 0 ) ? _logo.width() : 0;
			var _tagline = jQuery('.ish-ph-wp_tagline');
			var _tagline_width = ( _tagline.length > 0 ) ? _tagline.width() : 0;
			var _nav_width = _main_nav.width();

			if ( true == isFullNav ) {

				if ( ( _nav_width + 15 ) > ( jQuery('.ish-part_header > .ish-row > .ish-row_inner').width() - _logo_width - _tagline_width ) ) {

					// Hide main wp nav
					jQuery('.ish-ph-main_nav .ish-ph-mn-main_nav').css({
						'display': 'none'
					});

					// Show responsive button navigation
					jQuery('.ish-ph-main_nav .ish-ph-mn-resp_nav.ish-ph-mn-hidden').css({
						'max-width': '100%',
						'position': 'relative',
						'display': 'table-cell',
						'vertical-align': 'middle'
					});

					isFullNav = false;
					FullNavBreakingPoint = jQuery(window).width();
				}
			}
			else {
				if ( jQuery(window).width() > ( FullNavBreakingPoint + 10 ) ) {
					isFullNav = true;

					// Hide responsive button navigation
					jQuery('.ish-ph-main_nav .ish-ph-mn-resp_nav.ish-ph-mn-hidden').css({
						'display': 'none'
					});

					// Show main wp nav
					jQuery('.ish-ph-main_nav .ish-ph-mn-main_nav').css({
						'display': 'table-cell'
					});
				}
			}
		}
	}


	// Check header bar menu length ----------------------------------------------------------------------------------------
	if ( ! function_exists( 'activate_header_bar_resize' ) ) {
		ish.activate_header_bar_resize = function (){

			if ( jQuery('.ish-top_nav').length > 0 ) {

				jQuery(window).resize(function() {
					waitForFinalEvent(function(){

						ish.do_header_bar_resize_check();

					}, WAIT_INTERVAL, "HeaderBarMenuResize");
				});

			}

		}
	}

	// Check header bar menu length ----------------------------------------------------------------------------------------
	if ( ! function_exists( 'do_header_bar_resize_check' ) ) {
		ish.do_header_bar_resize_check = function (){

			var _top_nav = jQuery('.ish-top_nav');
			var _top_nav_width = _top_nav.width();

			var _hb_socials = jQuery('.ish-hb-social');

			var _hb_socials_width = ( _hb_socials.length > 0) ? _hb_socials.width() : 0;

			if ( true == isFullHeaderBar ) {
				if ( ( _top_nav_width + 15 ) > ( jQuery('.ish-part_header_bar > .ish-row > .ish-row_inner').width() - _hb_socials_width  ) ) {

					// Hide original nav
					jQuery('.ish-top_nav_container .ish-top_nav').css({
						'display': 'none'
					});

					// Show responsive button navigation
					jQuery('.ish-top_nav_container .ish-phb-resp_nav.ish-phb-hidden').css({
						'max-width': '100%',
						'position': 'relative',
						'display': 'table-cell',
						'vertical-align': 'middle'
					});

					isFullHeaderBar = false;
					FullHeaderBarBreakingPoint = jQuery(window).width();
				}
			}
			else {
				if ( jQuery(window).width() > ( FullHeaderBarBreakingPoint + 10 ) ) {
					isFullHeaderBar = true;

					// Hide responsive button navigation
					jQuery('.ish-top_nav_container .ish-phb-resp_nav.ish-phb-hidden').css({
						'display': 'none'
					});

					// Show main wp nav
					jQuery('.ish-top_nav_container .ish-top_nav').css({
						'display': 'table-cell'
					});
				}
			}
		}
	}

	// MultipleDropDown main navigation --------------------------------------------------------------------------------
	if (!function_exists('activate_main_navigation')) {
		ish.activate_main_navigation = function () {

			if (mainNav.length > 0) {
				mainNav.multipleDropDown();
			}

		}
	}


	// Floated menu ----------------------------------------------------------------------------------------------------
	if (!function_exists('activate_side_navigation')) {
		ish.activate_side_navigation = function () {

			if (jQuery('.ish-sidenav').length > 0) {
				//var ishBody = jQuery('.ish-body');
				var flMenu = jQuery('.ish-sidenav');
				sidenav_flBtn = jQuery('a[href="#sidenav"]');
				var closeBtn = jQuery('.ish-sidenav-close');
				sidenav_opened = false;
				sidenavWidth = iyb_globals.sidenav_width;

				// sidenav width px vs %
				if (sidenavWidth.indexOf('px') > 0) {
					sidenavSizeType = 'px';
					sidenavSize = sidenavWidth.replace('px', '');
				}
				else if (sidenavWidth.indexOf('%') > 0) {
					sidenavSizeType = '%';
					sidenavSize = sidenavWidth.replace('%', '');
				}

				// Height of sidenav -> horizontal scroll
				jQuery(window).resize(function () {
					flMenu.css({
						'height': jQuery(window).height()
					});
				});

				// Open sidenav
				sidenav_flBtn.click(function () {
					ish.open_sidenav();
					ish.do_text_separator_size_fix();
					return false;
				});


				// Close sidenav
				closeBtn.click(function () {
					if (sidenav_opened) {
						ish.close_sidenav();
					}

					return false;
				});

				// Close on ESC
				jQuery(document).keyup(function (e) {
					if (sidenav_opened) {
						if (e.keyCode == 27) {
							var isExp = jQuery('.ish-a-expandable');
							var isSearch = jQuery('.ish-a-search');

							if (isExp.length > 0 && isSearch.length > 0) {
								if (( !isExp.hasClass('ish-opened') ) && ( !isSearch.hasClass('ish-opened') )) {
									ish.close_sidenav();
								}
							}
							else if (isExp.length > 0) {
								if (!isExp.hasClass('ish-opened')) {
									ish.close_sidenav();
								}
							}
							else if (isSearch.length > 0) {
								if (!isSearch.hasClass('ish-opened')) {
									ish.close_sidenav();
								}
							}
						}
					}
				});
			}
		}
	}

	// MultipleDropDown header bar navigation --------------------------------------------------------------------------------
	if (!function_exists('activate_header_bar_navigation')) {
		ish.activate_header_bar_navigation = function () {

			if ( topNav.length > 0 ) {
				topNav.multipleDropDown();
			}

		}
	}

	// Breadcrumbs animation -------------------------------------------------------------------------------------------
	if (!function_exists('activate_breadcrumbs')) {
		ish.activate_breadcrumbs = function () {

			var bc = jQuery('.ish-pt-taglines-right');

			if ( bc.length > 0 ) {
				bc.hover(
					function() {
						// MOUSE ENTER
						if ( jQuery(window).width() > BREAKINGPOINT ) {
							jQuery('.ish-pt-taglines-left').stop(true, true).fadeTo( 300, 0.1 );
						}
					},
					function() {
						// MOUSE LEAVE
						if ( jQuery(window).width() > BREAKINGPOINT ) {
							jQuery('.ish-pt-taglines-left').stop(true, true).fadeTo( 300, 1 );
						}
					}
				)
			}

		}
	}

	// Open sidenav function
	if ( ! function_exists( 'open_sidenav' ) ) {
		ish.open_sidenav = function () {

			jQuery('body').addClass('ish-sidenav-opened').css('overflow-x', 'hidden');

			if ( ! sidenav_opened ) {

				var flMenu = jQuery('.ish-sidenav');
				//var ishBody = jQuery('.ish-body');
				//var header = jQuery('.ish-sticky-on .ish-part_header');

				// Left
				if (flMenu.hasClass('ish-sn_left')) {

					// Slide menu from left to right
					flMenu.show().css({
						'left': '-' + sidenavSize + sidenavSizeType
					}).animate({
						'left': 0
					}, sidenavDel);

					//ishBody.animate({'right': '-' + sidenavSize + sidenavSizeType}, sidenavDel);
					flMenu.animate({'left': '0'}, sidenavDel);
					/*jQuery('.ish-back_to_top').animate({
					 'right': -sidenavSize + sidenavSizeType,
					 'margin-left': '10px'
					 }, sidenavDel);*/

					// Unboxed
					if (jQuery('.ish-sticky-on').length > 0) {
						/*header.css({'right': header.position().left}).animate({'right': header.position().left - Number(sidenavSize) + sidenavSizeType}, sidenavDel, function () {
						 // Center sticky nav in boxed version on resize
						 if (jQuery('.ish-boxed').length > 0 && flMenu.is(':visible')) {
						 jQuery(window).resize(function () {
						 header.css({'right': ( ( jQuery(window).width() - header.width() ) / 2 ) - jQuery('.ish-sidenav').outerWidth()});
						 }).resize();
						 }

						 sidenav_opened = true;
						 });*/

						sidenav_opened = true;
					}
				}
				// Right - default
				else {

					// Slide menu from right to left
					flMenu.show().css({
						'right': '-' + sidenavSize + sidenavSizeType
					}).animate({
						'right': 0
					}, sidenavDel);

					//ishBody.animate({'left': '-' + sidenavSize + sidenavSizeType}, sidenavDel);
					flMenu.animate({'right': '0'}, sidenavDel);
					/*jQuery('.ish-back_to_top').animate({
					 'right': sidenavSize + sidenavSizeType,
					 'margin-right': '10px'
					 }, sidenavDel);*/

					// Unboxed
					if (jQuery('.ish-sticky-on').length > 0) {
						/*header.css({'left': header.position().left}).animate({'left': header.position().left - Number(sidenavSize) + sidenavSizeType}, sidenavDel, function () {
						 // Center sticky nav in boxed version on resize
						 if (jQuery('.ish-boxed').length > 0 && flMenu.is(':visible')) {
						 jQuery(window).resize(function () {
						 header.css({'left': ( ( jQuery(window).width() - header.width() ) / 2 ) - jQuery('.ish-sidenav').outerWidth()});
						 }).resize();
						 }

						 sidenav_opened = true;
						 });*/

						sidenav_opened = true;
					}
				}

				sidenav_flBtn.addClass('ish-active');
			}
			else {
				ish.close_sidenav();
			}
		}
	}


	// Close sidenav function
	if ( ! function_exists( 'close_sidenav' ) ) {
		ish.close_sidenav = function () {

			if (sidenav_opened) {

				var flMenu = jQuery('.ish-sidenav');
				//var ishBody = jQuery('.ish-body');
				//var header = jQuery('.ish-sticky-on .ish-part_header');

				// Left
				if (flMenu.hasClass('ish-sn_left')) {

					if (jQuery(window).width() < 560) {
						// Slide menu from right to left
						flMenu.animate({
							'left': -Number(sidenavSize * 2) + sidenavSizeType
						}, sidenavDel);
					}
					else {
						// Slide menu from right to left
						flMenu.animate({
							'left': -sidenavSize + sidenavSizeType
						}, sidenavDel);
					}

					//ishBody.animate({'right': '0'}, sidenavDel);
					flMenu.animate({'right': '-' + sidenavSize + sidenavSizeType}, sidenavDel);
					/*jQuery('.ish-back_to_top').animate({'right': 10}, sidenavDel, function () {
					 jQuery('body').css('overflow-x', 'auto');
					 });*/

					if (jQuery('.ish-sticky-on').length > 0) {
						/*header.animate({'right': ( jQuery(window).width() - header.width() ) / 2}, sidenavDel, function () {
						 // Center sticky nav in boxed version on resize
						 if (jQuery('.ish-boxed').length > 0 && flMenu.is(':hidden')) {
						 jQuery(window).resize(function () {
						 header.css({'right': ( jQuery(window).width() - header.width() ) / 2});
						 }).resize();
						 }

						 jQuery('body').removeClass('ish-sidenav-opened');
						 });*/

						jQuery('body').removeClass('ish-sidenav-opened');
					}
				}
				// Right - default
				else {
					if (jQuery(window).width() < 560) {
						// Slide menu from right to left
						flMenu.stop().animate({
							'right': -Number(sidenavSize * 2) + sidenavSizeType
						}, sidenavDel);
					}
					else {
						// Slide menu from right to left
						flMenu.stop().animate({
							'right': -sidenavSize + sidenavSizeType
						}, sidenavDel);
					}

					//ishBody.animate({'left': '0'}, sidenavDel);
					/*jQuery('.ish-back_to_top').animate({'right': 10}, sidenavDel, function () {
					 jQuery('body').css('overflow-x', 'auto');
					 });*/

					if (jQuery('.ish-sticky-on').length > 0) {
						/*header.animate({'left': ( jQuery(window).width() - header.width() ) / 2}, sidenavDel, function () {
						 // Center sticky nav in boxed version on resize
						 if (jQuery('.ish-boxed').length > 0 && flMenu.is(':hidden')) {
						 jQuery(window).resize(function () {
						 header.css({'left': ( jQuery(window).width() - header.width() ) / 2});
						 }).resize();
						 }

						 jQuery('body').removeClass('ish-sidenav-opened');
						 });*/

						jQuery('body').removeClass('ish-sidenav-opened');
					}
				}

				sidenav_flBtn.removeClass('ish-active');
				sidenav_opened = false;
			}
		}
	}


// Floated areas - (search, expandable, resp menu) ---------------------------------------------------------------------
	if ( ! function_exists( 'activate_floated_areas' ) ) {
		ish.activate_floated_areas = function () {

			// Create resp menu if not exist
			if ( jQuery('.ish-ph-mn-be_resp').length == 0 ) {
				jQuery('.ish-ph-main_nav .ish-ph-mn-main_nav').clone().appendTo('body').addClass('ish-ph-mn-be_resp ish-a-respnav').hide();
			}

			// Create close button for resp menu if not exist
			if ( jQuery('.ish-ph-mn-be_resp-close').length == 0 ) {
				jQuery('.ish-ph-mn-be_resp').append('<a href="#close" class="ish-ph-mn-be_resp-close ish-icon-cancel"></a>');
			}

			// Create Header Bar's resp menu if not exist
			if ( jQuery('.ish-phb-be_resp').length == 0 ) {
				if ( jQuery('.ish-top_nav_container .ish-top_nav').length > 0 ){
					jQuery('.ish-top_nav_container .ish-top_nav').clone().appendTo('body').addClass('ish-phb-be_resp ish-a-phb-respnav').hide();
				}

				// Create close button for header bar's resp menu if not exist
				if ( jQuery('.ish-phb-be_resp-close').length == 0 ) {
					jQuery('.ish-phb-be_resp').append('<a href="#phb-close" class="ish-phb-be_resp-close ish-icon-cancel"></a>');
				}

			}

			// Variables
			var areas = jQuery('.ish-a-search, .ish-a-expandable, .ish-a-respnav, .ish-a-phb-respnav');
			var opens = jQuery('a[href="#search"], a[href="#expandable"], a[href="#respnav"], a[href="#phb-respnav"]');
			var closes = jQuery('.ish-ps-searchform_close, .ish-pe-close, .ish-ph-mn-be_resp-close, .ish-phb-be_resp-close');
			floated_areas_opened = false;
			var del = 150; // If you change this, please change also the value on the line with comment "RESP_NAV_CLOSE_DURATION"


			// Open areas
			opens.click(function() {
				if ( ! floated_areas_opened ) {
					var _this = jQuery(this);
					var _who = _this.attr('href').replace('#', '');

					jQuery('.ish-a-' + _who).fadeIn(del, function() {
						// Wait until end of fadein
						setTimeout(function() {
							// Focus on search field
							if ( _who == "search" ) {
								jQuery('.ish-a-search input[type="text"]').focus();
							}

							// Fix body & make scrollable only floated area
							jQuery('body').css('overflow', 'hidden');
							jQuery('.ish-a-' + _who).css('overflow-y', 'scroll').addClass('ish-opened');

						}, del);
					});

					// Must re-check all visible lined separators widths again
					ish.do_text_separator_size_fix();

					floated_areas_opened = true;
				}

				return false;
			});

			// Close areas
			closes.click(function() {
				closeAllAreas();
				return false;
			});

			// Close on ESC
			jQuery(document).keyup(function(e) {
				if ( floated_areas_opened ) {
					if (e.keyCode == 27) {
						closeAllAreas();
					}
				}
			});



			// Close all areas
			function closeAllAreas() {
				// Disable scroll for floated area and make scrollable body
				areas
					.css('overflow-y', 'hidden')
					.fadeOut(del, function() {
						jQuery('body').css({ 'overflow-y': 'auto' });
						areas.removeClass('ish-opened');
					});

				floated_areas_opened = false;
			}

		}
	}


// HTML5 placeholder ---------------------------------------------------------------------------------------------------
	if ( ! function_exists( 'activate_html5_placeholders' ) ) {
		ish.activate_html5_placeholders = function () {

			if( !isPlaceholder() ) {
				var placeholder = jQuery('[placeholder]');

				placeholder.focus(function() {
					var input = jQuery(this);

					if ( input.val() == input.attr('placeholder') ) {
						input.val('').removeClass('placeholder');
					}
				}).blur(function() {
					var input = jQuery(this);

					if ( input.val() == '' || input.val() == input.attr('placeholder') ) {
						input.addClass('placeholder').val( input.attr('placeholder') );
					}
				}).blur();

				placeholder.parents('form').submit(function() {
					jQuery(this).find('[placeholder]').each(function() {
						var input = jQuery(this);

						if ( input.val() == input.attr('placeholder') ) {
							input.val('');
						}
					});
				});
			}

			// Check if placeholder is supported -----------------------------------------------------------------------------------
			function isPlaceholder() {
				var inp = document.createElement('input');
				return ('placeholder' in inp);
			}

		}
	}


// Smooth scroll -------------------------------------------------------------------------------------------------------
	if ( ! function_exists( 'activate_smooth_scroll' ) ) {
		ish.activate_smooth_scroll = function (){

			jQuery('.ish-smooth_scroll, .ish-ph-mn-main_nav a, .ish-sc_icon a[href*="#"], .ish-sc_svg_icon a[href*="#"], .ish-sc_button[href*="#"], .widget_nav_menu a, .ish-sc_menu a').smoothScrollAnchor();

		}
	}


// Back to top link ----------------------------------------------------------------------------------------------------
	if ( ! function_exists( 'activate_back_to_top_link' ) ) {
		ish.activate_back_to_top_link = function (){

			var fixedTop = jQuery('.ish-back_to_top');
			var del = 250;

			jQuery(window).scroll(function() {
				if ( jQuery(window).scrollTop() > 150 ) {
					fixedTop.fadeIn(del);
				}
				else {
					fixedTop.fadeOut(del);
				}
			});
		}
	}

// Text Separator fix ---------------------------------------------------------------------------------------------
	if ( ! function_exists( 'do_text_separator_size_fix' ) ) {
		ish.do_text_separator_size_fix = function (){

			// remove line and change white-space if title is too long
			var lined = jQuery('.ish-sc_text_separator');

			if ( lined.length > 0 ) {
				lined.each(function() {
					var self = jQuery(this);

					var textwidth = parseInt(self.textWidth());
					var selfwidth = parseInt(self.parent().width());

					if ( selfwidth > 0 ) {
						if (textwidth >= selfwidth) {
							self.css('white-space', 'normal').find('.ish-line:visible').addClass('ish-hidden').hide();
						}
						else {
							self.css('white-space', 'nowrap').find('.ish-line.ish-hidden').show();
						}
					}
				});
			}

		}
	}

// Text Separator breaking ---------------------------------------------------------------------------------------------
	if ( ! function_exists( 'activate_text_separator_size_fix' ) ) {
		ish.activate_text_separator_size_fix = function (){

			// remove line and change white-space if title is too long
			var lined = jQuery('.ish-sc_text_separator');

			if ( lined.length > 0 ) {
				jQuery(window).resize(function() {
					waitForFinalEvent(function(){

						ish.do_text_separator_size_fix();

					}, WAIT_INTERVAL, "LinedTitlesResize");
				});
			}

		}
	}


// Skill bars ----------------------------------------------------------------------------------------------------------
	if ( ! function_exists( 'activate_skillbars' ) ) {
		ish.activate_skillbars = function (){

			skillz = jQuery('.ish-sc_skills');
			if ( skillz.length > 0 ) {
				skillz = skillz.find('div div');

				jQuery(window).scroll(function() {
					animateSkillBars();
				});
			}

		}
	}

// Skill bars animation
	function animateSkillBars(){

		skillz.find('span:in-viewport').each(function() {
			var me = jQuery(this);
			if (!me.hasClass('done')){
				var skillzDel = 1000;
				me.addClass('done').animate({
					'width': me.attr('data-count') + '%',
					'opacity': '1'
				}, skillzDel);

			}
		});

	}

// OnePage menu --------------------------------------------------------------------------------------------------------

	if ( ! function_exists( 'activate_onepage_menu' ) ) {
		ish.activate_onepage_menu = function (){

			onepage_sections = jQuery('.wpb_row[id]');
			if ( onepage_sections.length > 0 ) {
				jQuery(window).scroll(function() {
					ish.highlight_onepage_menu();
				});
			}

		}
	}

// Highlight OnePage Menu Sections
	if ( ! function_exists( 'highlight_onepage_menu' ) ) {
		ish.highlight_onepage_menu = function (){
			var fold = jQuery(window).height() + jQuery(window).scrollTop();
			var top = jQuery(window).scrollTop();
			var offset = 0;
			var sticky_nav = jQuery('.ish-sticky-scrolling');
			var wpadminbar = jQuery('#wpadminbar');

			if ( wpadminbar.length > 0 ){
				offset = offset - ( -1 * wpadminbar.outerHeight() );
			}

			if ( sticky_nav.length > 0 ){
				offset = offset - ( -1 * sticky_nav.outerHeight() );
			}

			onepage_sections.each(function() {
				var me = jQuery(this);
				var is_below = fold <= me.offset().top - offset;
				var is_above = top >= me.offset().top + me.height() - offset;

				if ( !is_above && !is_below ){
					var me_id = me.attr('id');
					if ( onepage_current != me_id ){
						onepage_current = me_id;

						jQuery('.ish-ph-mn-main_nav li').removeClass('ish-op-active');
						jQuery('.ish-ph-mn-main_nav a[href*=#' + me_id + ']').each(function(){

							var this_link = jQuery(this);
							var current_url = window.location.href.split("#");
							var this_href = this_link.attr("href").split("#");
							if ( current_url[0] == this_href[0] ){
								this_link.parent().addClass('ish-op-active');
							}

						});

					}
					return false;
				}

			});
		}
	}

// Portfolio 3d cube----------------------------------------------------------------------------------------------------
	if ( ! function_exists( 'activate_portfolio_3dcube' ) ) {
		ish.activate_portfolio_3dcube = function (){

			var cube = jQuery('[class*="ish-p-3dcube-"]');

			if ( cube.length > 0 ) {
				jQuery(window).resize(function(){
					cube.each(function() {
						calculate3dcube(jQuery(this));
					});
				});
			}

		}
	}

// Calculate 3d cube attributes
	function calculate3dcube(cube) {

		/*var a = jQuery('[class*="ish-p-3dcube-"] a');
		 var p3dType = jQuery('[class*="ish-p-3dcube-"]');
		 var pitem = p3dType.find('.ish-p-item');*/
		var a = cube.find('a');
		var p3dType = cube;
		var pitem = p3dType.find('.ish-p-item');

		// Common definitions top / bottom
		if ( p3dType.hasClass('ish-p-3dcube-top') || p3dType.hasClass('ish-p-3dcube-bottom') ) {
			pitem.each(function() {
				var _this = jQuery(this), _height = _this.height() / 2;

				var def1_1 = 'translateZ( -' + _height + 'px )', def1_2 = '50% ' + _height + 'px )';
				_this.css({ '-webkit-transform': def1_1, 'transform': def1_1, '-webkit-transform-origin:': def1_2, 'transform-origin:': def1_2 });

				var def2 = 'translateZ( ' + _height + 'px )';
				_this.find('.ish-p-img').css({ '-webkit-transform': def2, 'transform': def2 });
			});

			a.hover(function() {
			}, function() {
				var _this = jQuery(this), _height = _this.height() / 2;

				var def1 = 'rotateX(0deg) translateZ( -' + _height + 'px )';
				_this.find('.ish-p-item').css({ '-webkit-transform': def1, 'transform': def1 });

				// FF fix unhover z-index
				if ( jQuery.browser.mozilla ) _this.css( 'z-index', '98' );
			});
		}

		// Top
		if ( p3dType.hasClass('ish-p-3dcube-top') ) {
			pitem.each(function() {
				var _this = jQuery(this), _height = _this.height() / 2;

				var def3 = 'rotateX(-90deg) translateY( ' + _height + 'px )';
				_this.find('.ish-p-overlay').css({ '-webkit-transform': def3, 'transform': def3 });
			});

			a.hover(function() {
				var _this = jQuery(this), _height = _this.height() / 2;

				var def1 = 'rotateX(90deg) translateY( -' + _height + 'px )';
				_this.find('.ish-p-item').css({ '-webkit-transform': def1, 'transform': def1 });
			}, function() {});
		}

		// Bottom
		if ( p3dType.hasClass('ish-p-3dcube-bottom') ) {
			pitem.each(function() {
				var _this = jQuery(this), _height = _this.height() / 2;

				var def3 = 'rotateX(90deg) translateY( ' + _height + 'px ) translateZ( ' + _height*2 + 'px )';
				_this.find('.ish-p-overlay').css({ '-webkit-transform': def3, 'transform': def3 });
			});

			a.hover(function() {
				var _this = jQuery(this), _height = _this.height() / 2;

				var def1 = 'rotateX(-90deg) translateY( ' + _height + 'px )';
				_this.find('.ish-p-item').css({ '-webkit-transform': def1, 'transform': def1 });
			}, function() {});
		}

		// Common definitions left / right
		if ( p3dType.hasClass('ish-p-3dcube-left') || p3dType.hasClass('ish-p-3dcube-right') ) {
			pitem.each(function() {
				var _this = jQuery(this), _width = _this.width() / 2;

				var def1_1 = 'translateZ( -' + _width + 'px )', def1_2 = '50% ' + _width + 'px )';
				_this.css({ '-webkit-transform': def1_1, 'transform': def1_1, '-webkit-transform-origin:': def1_2, 'transform-origin:': def1_2 });

				var def2 = 'translateZ( ' + _width + 'px )';
				_this.find('.ish-p-img').css({ '-webkit-transform': def2, 'transform': def2 });
			});

			a.hover(function() {
			}, function() {
				var _this = jQuery(this), _width = _this.width() / 2;

				var def1 = 'rotateX(0deg) translateZ( -' + _width + 'px )';
				_this.find('.ish-p-item').css({ '-webkit-transform': def1, 'transform': def1 });

				// FF fix unhover z-index
				if ( jQuery.browser.mozilla ) _this.css( 'z-index', '98' );
			});
		}

		// Left
		if ( p3dType.hasClass('ish-p-3dcube-left') ) {
			pitem.each(function() {
				var _this = jQuery(this), _width = _this.width() / 2;

				var def3 = 'rotateY(90deg) translateZ( ' + _width + 'px )';
				_this.find('.ish-p-overlay').css({ '-webkit-transform': def3, 'transform': def3 });
			});

			a.hover(function() {
				var _this = jQuery(this), _width = _this.width() / 2;

				var def1 = 'rotateY(-90deg) translateX( -' + _width + 'px )';
				_this.find('.ish-p-item').css({ '-webkit-transform': def1, 'transform': def1 });
			}, function() {});
		}

		// Right
		if ( p3dType.hasClass('ish-p-3dcube-right') ) {
			pitem.each(function() {
				var _this = jQuery(this), _width = _this.width() / 2;

				var def3 = 'rotateY(-90deg) translateZ( ' + _width + 'px )';
				_this.find('.ish-p-overlay').css({ '-webkit-transform': def3, 'transform': def3 });
			});

			a.hover(function() {
				var _this = jQuery(this), _width = _this.width() / 2;

				var def1 = 'rotateY(90deg) translateX( ' + _width + 'px )';
				_this.find('.ish-p-item').css({ '-webkit-transform': def1, 'transform': def1 });
			}, function() {});
		}

		// Common definitions left / right inverse
		if ( p3dType.hasClass('ish-p-3dcube-inverse-left') || p3dType.hasClass('ish-p-3dcube-inverse-right') ) {
			pitem.each(function() {
				var _this = jQuery(this), _width = _this.width() / 2;

				var def1_1 = 'translateZ( -' + _width + 'px )', def1_2 = '50% ' + _width + 'px )';
				_this.css({ '-webkit-transform': def1_1, 'transform': def1_1, '-webkit-transform-origin:': def1_2, 'transform-origin:': def1_2 });

				var def2 = 'translateZ( ' + _width + 'px )';
				_this.find('.ish-p-img').css({ '-webkit-transform': def2, 'transform': def2 });
			});

			a.hover(function() {
			}, function() {
				var _this = jQuery(this);
				// FF fix unhover z-index
				if ( jQuery.browser.mozilla ) _this.css( 'z-index', '98' );
			});
		}

		// Left
		if ( p3dType.hasClass('ish-p-3dcube-inverse-left') ) {
			pitem.each(function() {
				var _this = jQuery(this), _width = _this.width() / 2;

				var def1 = 'rotateY(90deg) translateX( ' + _width + 'px )';
				_this.css({ '-webkit-transform': def1, 'transform': def1 });

				var def2 = 'rotateY(-90deg) translateZ( ' + _width + 'px )';
				_this.find('.ish-p-overlay').css({ '-webkit-transform': def2, 'transform': def2 });
			});

			a.hover(function() {
				var _this = jQuery(this), _width = _this.width() / 2;

				var def1 = 'rotateY(0deg) translateZ( -' + _width + 'px )';
				_this.find('.ish-p-item').css({ '-webkit-transform': def1, 'transform': def1 });
			}, function() {
				var _this = jQuery(this), _width = _this.width() / 2;

				var def1 = 'rotateY(90deg) translateX( ' + _width + 'px )';
				_this.find('.ish-p-item').css({ '-webkit-transform': def1, 'transform': def1 });
			});
		}

		// Right
		if ( p3dType.hasClass('ish-p-3dcube-inverse-right') ) {
			pitem.each(function() {
				var _this = jQuery(this), _width = _this.width() / 2;

				var def1 = 'rotateY(-90deg) translateX( -' + _width + 'px )';
				_this.css({ '-webkit-transform': def1, 'transform': def1 });

				var def3 = 'rotateY(90deg) translateZ( ' + _width + 'px )';
				_this.find('.ish-p-overlay').css({ '-webkit-transform': def3, 'transform': def3 });
			});

			a.hover(function() {
				var _this = jQuery(this), _width = _this.width() / 2;

				var def1 = 'rotateY(0deg) translateZ( -' + _width + 'px )';
				_this.find('.ish-p-item').css({ '-webkit-transform': def1, 'transform': def1 });
			}, function() {
				var _this = jQuery(this), _width = _this.width() / 2;

				var def1 = 'rotateY(-90deg) translateX( -' + _width + 'px )';
				_this.find('.ish-p-item').css({ '-webkit-transform': def1, 'transform': def1 });
			});
		}

		// Common definitions top / bottom inverse
		if ( p3dType.hasClass('ish-p-3dcube-inverse-top') || p3dType.hasClass('ish-p-3dcube-inverse-bottom') ) {
			pitem.each(function() {
				var _this = jQuery(this), _height = _this.height() / 2;

				var def1_1 = 'translateZ( -' + _height + 'px )', def1_2 = '50% ' + _height + 'px )';
				_this.css({ '-webkit-transform': def1_1, 'transform': def1_1, '-webkit-transform-origin:': def1_2, 'transform-origin:': def1_2 });

				var def2 = 'translateZ( ' + _height + 'px )';
				_this.find('.ish-p-img').css({ '-webkit-transform': def2, 'transform': def2 });
			});

			a.hover(function() {
			}, function() {
				var _this = jQuery(this);
				// FF fix unhover z-index
				if ( jQuery.browser.mozilla ) _this.css( 'z-index', '98' );
			});
		}

		// Top
		if ( p3dType.hasClass('ish-p-3dcube-inverse-top') ) {
			pitem.each(function() {
				var _this = jQuery(this), _height = _this.height() / 2;

				var def1 = 'rotateX(-90deg) translateY( ' + _height + 'px )';
				_this.css({ '-webkit-transform': def1, 'transform': def1 });

				var def3 = 'rotateX(90deg) translateY( ' + _height + 'px ) translateZ( ' + _height*2 + 'px )';
				_this.find('.ish-p-overlay').css({ '-webkit-transform': def3, 'transform': def3 });
			});

			a.hover(function() {
				var _this = jQuery(this), _height = _this.height() / 2;

				var def1 = 'rotateX(0deg) translateZ( -' + _height + 'px )';
				_this.find('.ish-p-item').css({ '-webkit-transform': def1, 'transform': def1 });
			}, function() {
				var _this = jQuery(this), _height = _this.height() / 2;

				var def1 = 'rotateX(-90deg) translateY( ' + _height + 'px )';
				_this.find('.ish-p-item').css({ '-webkit-transform': def1, 'transform': def1 });
			});
		}

		// Bottom
		if ( p3dType.hasClass('ish-p-3dcube-inverse-bottom') ) {
			pitem.each(function() {
				var _this = jQuery(this), _height = _this.height() / 2;

				var def1 = 'rotateX(90deg) translateY( -' + _height + 'px )';
				_this.css({ '-webkit-transform': def1, 'transform': def1 });

				var def3 = 'rotateX(-90deg) translateY( ' + _height + 'px )';
				_this.find('.ish-p-overlay').css({ '-webkit-transform': def3, 'transform': def3 });
			});

			a.hover(function() {
				var _this = jQuery(this), _height = _this.height() / 2;

				var def1 = 'rotateX(0deg) translateZ( -' + _height + 'px )';
				_this.find('.ish-p-item').css({ '-webkit-transform': def1, 'transform': def1 });
			}, function() {
				var _this = jQuery(this), _height = _this.height() / 2;

				var def1 = 'rotateX(90deg) translateY( -' + _height + 'px )';
				_this.find('.ish-p-item').css({ '-webkit-transform': def1, 'transform': def1 });
			});
		}

	}


// Portfolio filter ----------------------------------------------------------------------------------------------------
	if ( ! function_exists( 'activate_portfolio_filter' ) ) {
		ish.activate_portfolio_filter = function (){

			var pfilter = jQuery('.ish-p-filter');

			if ( pfilter.length > 0 ) {
				var portfolio = jQuery('.ish-sc_portfolio');

				portfolio.each(function() {
					var _thisp = jQuery(this);
					var link = _thisp.find('.ish-p-filter a');
					var filterType = _thisp.find('.ish-p-filter').attr('data-type');
					var items = _thisp.find('.ish-p-col');
					var del = 200;
					var fadeTo = 0.1;
					var onFire = false;
					var wasActive = '*';

					if ( '' != filterType && 'link' != filterType ){
						// Filter
						link.click(function() {
							var _thisl = jQuery(this);
							var clicked = _thisl.attr('data-filter');
							var notclicked;

							// Acrove item in filter
							link.removeClass('ish-active');
							link.filter('[data-filter="' + clicked + '"]').addClass('ish-active');

							if ( _thisl.attr('data-filter') == '*' ) {
								if ( !_thisl.hasClass('selected-all') ) {
									if ( !onFire ) {
										// Organize effect
										if ( filterType == 'organize' ) {
											// render them but not show
											items.fadeTo(0, 1);

											// Relayout packery
											_thisp.find('.ish-p-items-container').packery();

											// Now show them
											items.fadeIn(del);


											setTimeout(function() {
												onFire = false;
											}, del);
										}

										// Fade effect
										if ( filterType == 'fade' ) {
											items.css({
												'pointer-events': 'auto',
												'cursor': 'pointer'
											}).animate({
												'opacity': '1'
											}, del, function() {
												onFire = false;
											});

										}

										onFire = true;
										_thisl.addClass('selected-all');
									}
								}
							}
							else {
								if ( wasActive != clicked ) {
									link.removeClass('selected-all');

									if ( ! onFire ) {

										onFire = true;

										// Organize effect
										if ( filterType == 'organize' ) {
											if ( wasActive == '*' ) {
												items.show();
												notclicked = items.not( clicked );
												if ( notclicked.length > 0 ) {
													notclicked.hide(0);
													_thisp.find('.ish-p-items-container').packery();
													onFire = false;
												}else{
													onFire = false;
												}
											}
											else {
												items.filter( clicked ).fadeTo(0.00001, 1);
												notclicked = items.not( clicked );
												if ( notclicked.length > 0 ) {
													notclicked.hide(0);
													// Now show them
													items.filter( clicked ).fadeIn(del);

													// Relayout packery
													_thisp.find('.ish-p-items-container').packery();

													onFire = false;

												} else{
													// Now show them
													items.filter( clicked ).fadeIn(del);

													// Relayout packery
													_thisp.find('.ish-p-items-container').packery();

													// Stop animation lock if no items are animated
													onFire = false;
												}
											}
										}

										// Fade effect
										if ( filterType == 'fade' ) {
											items.css({
												'pointer-events': 'none',
												'cursor': 'default'
											}).animate({
												'opacity': fadeTo
											}, del);

											var items_to_show = _thisp.find('.ish-p-col' + clicked);

											if ( items_to_show.length > 0 ) {
												items_to_show.css({
													'pointer-events': 'auto',
													'cursor': 'pointer'
												}).animate({
													'opacity': '1'
												}, del, function() {
													onFire = false;
												});
											} else{
												// Stop animation lock if no items are animated
												onFire = false;
											}
										}
									}
								}
							}

							wasActive = _thisl.attr('data-filter');

							return false;
						});
					}

				});
			}

		}
	}


// Portfolio pre-loader ------------------------------------------------------------------------------------------------
	if ( ! function_exists( 'activate_portfolio_preloader' ) ) {
		ish.activate_portfolio_preloader = function (){

			var portfolio = jQuery('.ish-sc_portfolio');

			portfolio.each(function() {
				var _thisp = jQuery(this);
				var del = 200;

				// Preloading
				_thisp.imagesLoaded( function() {
					_thisp.find('.ish-section-filter .ish-sc-element, .ish-p-col').css({
						'visibility': 'visible',
						'opacity': '0'
					}).fadeTo(del * 5, 1);

					jQuery('.ish-preloader').fadeOut(del);
				});

			});

		}
	}


	// Portfolio packery ---------------------------------------------------------------------------------------------------
	if ( ! function_exists( 'activate_portfolio_packery' ) ) {
		ish.activate_portfolio_packery = function (){

			//$container = jQuery('.ish-sc_portfolio.ish-p-packery .ish-p-items-container');
			$container = jQuery('.ish-sc_portfolio .ish-p-items-container');

			// initialize
			$container.each( function(){
				var _this = jQuery(this);

				// Preloading
				_this.imagesLoaded().done( function() {
					_this.packery({
						itemSelector: '.ish-p-col'
					});
				});

			});
			$container.packery();

		}
	}


	// Portfolio IE no 3D ------------------------------------------------------------------------------------------------------------
	if ( ! function_exists( 'activate_portfolio_ie_no_3d' ) ) {
		ish.activate_portfolio_ie_no_3d = function (){

			// Check IE
			if ( jQuery.browser.msie || ie11 ) {
				var p3d = jQuery('[class*="ish-p-flip-"], [class*="ish-p-3dcube-"]');
				var toReplace = 'ish-p-flip-left ish-p-flip-right ish-p-flip-top ish-p-flip-bottom ish-p-flip-inverse-left ish-p-flip-inverse-right ish-p-flip-inverse-top ish-p-flip-inverse-bottom ish-p-3dcube-left ish-p-3dcube-right ish-p-3dcube-top ish-p-3dcube-bottom ish-p-3dcube-inverse-left ish-p-3dcube-inverse-right ish-p-3dcube-inverse-top ish-p-3dcube-inverse-bottom';
				var replaceWith = 'ish-p-zoomin';

				p3d.removeClass( toReplace ).addClass( replaceWith );
			}

		}
	}

	// Gallery packery ---------------------------------------------------------------------------------------------------
	if ( ! function_exists( 'activate_gallery_packery' ) ) {
		ish.activate_gallery_packery = function (){

			var $container = jQuery('.ish-sc_gallery.ish-g-masonry .ish-row');

			// initialize
			$container.each( function(){
				var _this = jQuery(this);

				// Preloading
				_this.imagesLoaded().done( function() {
					_this.packery({
						itemSelector: '.ish-gallery-image'
					});
				});

			});

		}
	}


	// Ajax history --------------------------------------------------------------------------------------------------------
	if ( ! function_exists( 'activate_content_fade' ) ) {
		ish.activate_content_fade = function (){
			/*
			 var content = jQuery('.ish-wrapper-all');
			 jQuery('body').css('visibility','visible');
			 content.hide().fadeIn(250);

			 jQuery('a').click( function(e){

			 var me = jQuery(this);
			 var href = me.attr( 'href' );

			 if ( href && href.indexOf( document.domain ) !== -1 && href.indexOf('#') == -1) {
			 var content = jQuery('.ish-wrapper-all');
			 content.fadeTo( 350, 0 );
			 }

			 });
			 */

		}
	}


// Parallax dynamic ----------------------------------------------------------------------------------------------------
	if ( ! function_exists( 'activate_dynamic_parallax' ) ) {
		ish.activate_dynamic_parallax = function (){

			var parallaxDyn = jQuery('.ish-parallax-dynamic');

			if ( parallaxDyn.length > 0 ) {
				parallaxDyn.each( function() {

					var $div = jQuery(this);
					var $dataScroll = $div.data( 'scroll' );
					var $dataAmount = $div.data( 'amount' );
					var $dur = $div.data( 'duration' );
					var $eas = $div.data( 'easing' );

					if ( ! $dataScroll  || $dataScroll == "" || $dataScroll === null ) { $dataScroll = '0.1' }
					if ( ! $dataAmount  || $dataAmount == "" || $dataAmount === null ) { $dataAmount = '50%' }
					if ( ! $dur  || $dur == "" || $dur === null ) { $dur = '250' }
					if ( ! $eas  || $eas == "" || $eas === null ) { $eas = 'easeOutExpo' }

					var bg = $div.css( 'background-image' );

					if ( bg ) {
						var src = bg.replace(/(^url\()|(\)$|[\"\'])/g, ''),
							$img = jQuery('<img>').attr( 'src', src ).on( 'load', function() {

								// do something, maybe:
								$div.parallax( $dataAmount, $dataScroll, true, $dur, $eas );
							});
					}
				});
			}

		}
	}


// Slidable container --------------------------------------------------------------------------------------------------
	if ( ! function_exists( 'activate_shortcode_slidable' ) ) {
		ish.activate_shortcode_slidable = function (){

			var slidable = jQuery('.ish-slidable');

			if ( slidable.length > 0 ) {
				slidable.each(function() {
					jQuery(this).find('[class*="ish-slide"]').wrapAll('<div class="ish-slidable-container" />');
				});

				slidable.each(function() {
					var me = jQuery(this);
					var me_slider = me.find('.ish-slidable-container');
					var dataAttr = {
						autoslide: me.attr('data-autoslide'),
						interval: me.attr('data-interval'),
						animation: me.attr('data-animation'),
						navigation: me.attr('data-navigation'),
						prevnext: me.attr('data-prevnext'),
						maxheight: me.attr('data-maxheight'),
						itemscount: me.attr('data-itemscount')
					};

					var opts = {

						transitionStyle : false, // Add CSS3 transition style. Works only with one item on screen.
						navigation: true, // Show next and prev buttons
						pagination: true, // Show dots for each slide
						autoPlay: false,
						autoHeight: true,
						navigationText: ['<span></span>', '<span></span>'],	//["prev","next"]	array	You can cusomize your own text for navigation. To get empty buttons use navigationText : false. Also HTML can be used here
						stopOnHover: true,
						singleItem: true,
						theme: 'ish-owl-theme',
						baseClass: 'ish-slidable-container',

						rewindNav: true, // Make the slides rotate to the first once they reach the end
						mouseDrag: true,

						afterInit: function(){

							me.resize();

							// Hide images from the very beginning
							jQuery('.ish-slidable img').css('visibility', 'visible');

							// Show navigation arrows on hover
							me.hover(function () {
								me.find('.owl-buttons').stop(true, true).fadeIn();
							}, function() {
								me.find('.owl-buttons').stop(true, true).fadeOut();
							});

							// Turn off navigation
							if ( dataAttr.maxheight != undefined ) {
								me.find('.owl-wrapper-outer').css('max-height', dataAttr.maxheight + 'px');
							}


						}


						// "singleItem:true" is a shortcut for:
						// items : 1,
						// itemsDesktop : false,
						// itemsDesktopSmall : false,
						// itemsTablet: false,
						// itemsMobile : false

					}

					// Only if autoslide is 'yes' set the interval -> default / custom
					if ( dataAttr.autoslide == 'yes' ) {

						//opts.autoPlay = true;

						if ( dataAttr.interval != undefined ) {
							//opts.slideSpeed = dataAttr.interval * 1000;
							//opts.paginationSpeed = opts.slideSpeed;
							//opts.rewindSpeed = opts.slideSpeed;
							opts.autoPlay = dataAttr.interval * 1000;
						}
						else {
							//opts.slideSpeed = 4000;
							//opts.paginationSpeed = 4000;
							//opts.rewindSpeed = 4000;
							opts.autoPlay = 4000;
						}

					}

					// Change animation to fade
					if ( dataAttr.animation == 'fade' ) {
						opts.transitionStyle = 'fade';
						//me.addClass('anim-fade');
					}

					// Turn off navigation
					if ( dataAttr.navigation == 'no' ) {
						opts.pagination = false;
					}

					// Turn off direction Nav
					if ( dataAttr.prevnext == 'no' ) {
						opts.navigation = false;
					}

					// Turn off autoheight if using max heght
					if ( dataAttr.maxheight != undefined ) {
						//opts.autoHeight = false;
					}

					// Set items per slide
					if ( ( dataAttr.itemscount != undefined ) && ( dataAttr.itemscount > 1 ) ) {
						opts.items = dataAttr.itemscount;
						opts.singleItem = false;
						//opts.scrollPerPage = true; - Crashes Chrome
						opts.autoHeight = false;
						opts.itemsDesktop = false;
						opts.itemsDesktopSmall = false;


						if ( 3 <= opts.items) {
							opts.itemsTablet = [768, 3]; // between 768 and 481px
						}
						if ( 2 <= opts.items) {
							opts.itemsTabletSmall = [480,2]; // 2 items between 480 and 321px
						}

						if ( 1 <= opts.items) {
							opts.itemsMobile = [320,1]; // itemsMobile
						}


					}

					fixVideoHeights();

					me.imagesLoaded(function() {

						me_slider.owlCarousel( opts );
						me_slider.data('owlCarousel').reinit( opts );



						// Stop when slider not in viewport
						jQuery(window).scroll(function() {

							if ( me.isOnScreen() ) {
								me_slider.data('owlCarousel').play(); // Autoplay Stop
							}
							else {
								me_slider.data('owlCarousel').stop(); // Autoplay Stop
							}

						});

						if ( me.isOnScreen() ) {
							me_slider.data('owlCarousel').play(); // Autoplay Stop
						}
						else {
							me_slider.data('owlCarousel').stop(); // Autoplay Stop
						}

					});



				});
			}

		}
	}



// Tooltip -------------------------------------------------------------------------------------------------------------
	if ( ! function_exists( 'activate_tooltips' ) ) {
		ish.activate_tooltips = function (){

			var tooltip = jQuery('[data-type="tooltip"]');

			if ( tooltip.length > 0 ) {
				tooltip.tooltipster({
					functionReady: function(origin) {
						var classList = origin.attr('class').split(/\s+/);
						var col = '';

						jQuery.each( classList, function(index, item){
							if ( item.indexOf('ish-tooltip-color') === 0 ) {
								col += item;
							}
							if ( item.indexOf('ish-tooltip-text-color') === 0 ) {
								col += ' ' + item;
							}
						});

						jQuery('.tooltipster-default').addClass( col );
					}
				});
			}

		}
	}


// Blog packery ---------------------------------------------------------------------------------------------------
	if ( ! function_exists( 'activate_blog_packery' ) ) {
		ish.activate_blog_packery = function (){

			var $container = jQuery('.ish-blog-masonry .ish-packery');

			// initialize
			$container.packery({
				itemSelector: '.ish-blog-post-masonry'
			});

		}
	}


// Video ---------------------------------------------------------------------------------------------------------------
	function fixVideoHeights(){
		var src = jQuery('.ish-blog-video-content');
		var rec_post = jQuery('.recent_posts_post_content');

		src.each(function() {
			var me = jQuery(this);
			var iframe = me.find('iframe');
			var iframe_w = iframe.attr('width');
			var iframe_h = iframe.attr('height');

			var parent_w = me.width();

			if (iframe_h > 0 && 0 == parent_w) {

				var visible_parent_w = 0;
				var visible_parent = me.parents('.ish-slidable').find('.recent_posts_post_content');
				if (visible_parent.length > 0 ){
					visible_parent_w = visible_parent.width();
				}

				parent_w = visible_parent_w;
			}

			var rat = parent_w / iframe_w;

			if ( parent_w > 0 && iframe_h > 0 ){
				iframe.attr('width', parent_w);
				iframe.attr('height', iframe_h * rat);
				iframe.show();
			}
		});
	}


// Iframe video height fix ---------------------------------------------------------------------------------------------
	if ( ! function_exists( 'activate_iframe_embed_video_heigh_fix' ) ) {
		ish.activate_iframe_embed_video_heigh_fix = function (){

			if ( jQuery('.ish-blog-video-content').length > 0 ) {
				jQuery(window).resize(function() {
					fixVideoHeights();
				});
			}

			if ( jQuery('embed').length > 0 ) {
				jQuery(window).resize(function() {
					var src = jQuery('embed');
					src.each(function() {
						var self = jQuery(this);
						var parent = self.parent();
						var ow = parent.width();

						var w = self.attr('width');
						var h = self.attr('height');
						var rat = ow / w;

						self.attr('width', ow);
						self.attr('height', parseInt(h * rat));

						self.show();
					});
				});
			}
			if ( jQuery('iframe').length > 0 ) {
				jQuery(window).resize(function() {
					var src = jQuery('iframe');
					src.each(function() {
						var self = jQuery(this);
						var parent = self.parent();
						var ow = parent.width();

						var attsrc = self.attr('src');

						if ( attsrc ){

							var w = self.attr('width');
							var h = self.attr('height');
							var rat = ow / w;

							self.css('width', '100%');

							if ( ow > 0 ){
								self.attr('width', ow);
								self.attr('height', parseInt(h * rat));
							}

							self.show();
						}
					});
				});
			}

		}
	}


// Ish Like It ---------------------------------------------------------------------------------------------------------
	if ( ! function_exists( 'activate_ish_like_it' ) ) {
		ish.activate_ish_like_it = function (){

			var likes_btn = jQuery('a.ish-likes');

			if ( likes_btn.length > 0 ) {

				likes_btn.live('click',
					function() {
						var link = jQuery(this);
						if ( link.hasClass('active') ) return false;

						var id = link.attr('id');

						link.addClass('active');

						jQuery.post( iyb_globals.admin_ajax, { action:'ish-like-it', likes_id: id }, function(data){
							link.find('.ish-likes-count').html(data);
							link.replaceWith(function(){
								return jQuery('<span class="' + jQuery(this).attr('class') + '">' + jQuery(this).html() + '</span>');
							});
						});

						return false;
					}
				);

			}

		}
	}


// V Unit --------------------------------------------------------------------------------------------------------------
	if ( ! function_exists( 'activate_vunit' ) ) {
		ish.activate_vunit = function (){

			/* https://github.com/joaocunha/v-unit */
			(function(h,c){var b={a:{c:"v-unit-sheet",h:100},b:{height:0,width:0},j:function(){b.e();b.l()},l:function(){return h.setInterval(b.e,b.a.h)},e:function(){var a=b.b.height,d=b.b.width,c=b.d();c.height==a&&c.width==d||b.i()},g:function(){var a=c.createElement("style");a.rel="stylesheet";a.type="text/css";a.id=b.a.c;return a},k:function(a){for(var d=b.d(),f=d.height/100,d=d.width/100,g="",e=1;100>=e;e++)g+=".vh"+e+"{height:"+Math.round(f*e)+"px;}.vw"+e+"{width:"+Math.round(d*e)+"px;}\n";a.styleSheet?
				a.styleSheet.cssText=g:a.appendChild(c.createTextNode(g))},f:function(a){var d=c.getElementById(b.a.c),f=c.head||c.getElementsByTagName("head")[0]||c.documentElement;d&&f.removeChild(d);f.appendChild(a)},d:function(){var a={height:c.documentElement.clientHeight,width:c.documentElement.clientWidth};return b.b=a},i:function(){var a=b.g();b.k(a);b.f(a)}};b.j()})(window,document);

		}
	}


// Fancybox ------------------------------------------------------------------------------------------------------------
	if ( ! function_exists( 'activate_fancybox' ) ) {
		ish.activate_fancybox = function (){

			fancybox_init();

			// Fancybox ------------------------------------------------------------------------------------------------------------
			function fancybox_init() {
				if ( jQuery('.openfancybox-video').length > 0 ) {
					jQuery(".openfancybox-video").each(function(){
						var target = jQuery(jQuery(this).attr("href"));
						var src = target.find('iframe').attr("src");
						jQuery(this).fancybox({
							'type': "inline",
							'content': target,
							'transitionIn'	: 'none',
							'transitionOut'	: 'none',
							'onClosed': function(){
								target.find('iframe').attr("src", src);
							}
						});
					});
				}

				if ( jQuery('.openfancybox-image').length > 0 ) {
					jQuery(".openfancybox-image").fancybox({
						'padding' : 10,
						'helpers' : {
							'title': {
								'type': 'over'
							}
						}
					});
				}

				if ( jQuery('.openfancybox-audio').length > 0 ) {
					jQuery(".openfancybox-audio").fancybox({
						'padding' : 10,
						'helpers' : {
							'title': {
								'type': 'over'
							}
						}
					});
				}
			}

		}
	}


// Accordion -----------------------------------------------------------------------------------------------------------
	if ( ! function_exists( 'activate_accordions' ) ) {
		ish.activate_accordions = function (){

			var acc = jQuery('.ish-sc_tgg_acc');

			if ( acc.length > 0 ) {
				// for each accordion on page
				acc.each(function() {
					var accDel = 250;
					var _this = jQuery(this);
					var iconP = 'ish-icon-right-open';
					var iconM = 'ish-icon-down-open';

					// pointer active
					_this.find('.ish-active i.pointer').removeClass(iconP).addClass(iconM);

					// Hide all apart from 'active'
					_this.find('li').not('.ish-active').children('div').hide();

					if ( _this.attr('class').indexOf("accordion") !== -1 ) {
						_this.find('.ish-tgg-acc-title').click(function() {
							var _t = jQuery(this);

							// Close previous
							_this.parent().find('.ish-tgg-acc-content').stop().slideUp(accDel);
							setTimeout(function() {
								_this.parent().find('.ish-tgg-acc-title').removeClass('ish-active');
								_t.addClass('ish-active');
							}, accDel);
							_this.parent().find('.ish-tgg-acc-title').find('i.pointer').removeClass(iconM).addClass(iconP);

							_t.siblings('.ish-tgg-acc-content').stop().slideDown(accDel);
							_t.find('i.pointer').removeClass(iconP).addClass(iconM);

							jQuery(window).resize();
						});
					}
					else if ( _this.attr('class').indexOf("toggle") !== -1 ) {
						_this.find('.ish-tgg-acc-title').each(function() {
							var _t = jQuery(this);

							if ( _t.hasClass('ish-active') )
								var tggOpened = true;
							else
								var tggOpened = false;

							_t.click(function() {
								if ( !tggOpened ) {
									_t.siblings('div').stop().slideDown(accDel);
									_t.parent().find('.ish-tgg-acc-title').addClass('ish-active');
									_t.find('i.pointer').removeClass(iconP).addClass(iconM);
									tggOpened = true;
								}
								else {
									_t.siblings('div').stop().slideUp(accDel);
									setTimeout(function() {
										_t.parent().find('.ish-tgg-acc-title').removeClass('ish-active');
									}, accDel);
									_t.find('i.pointer').removeClass(iconM).addClass(iconP);
									tggOpened = false;
								}
								jQuery(window).resize();
							});
						});
					}
				});
			}

		}
	}


// Accordion filter ----------------------------------------------------------------------------------------------------
	if ( ! function_exists( 'activate_accordions_filter' ) ) {
		ish.activate_accordions_filter = function (){

			//var acc = jQuery('.ish-tgg_acc_filter');
			var accF = jQuery('.ish-tgg-acc-filter');

			if ( accF.length > 0 ) {

				accF.each(function() {
					var _t = jQuery(this);
					var del = 250;

					var items = _t.parent().find('.ish-sc_tgg_acc_item');

					var who = items.attr('class');

					_t.find('a').click(function() {
						var clicked = jQuery(this).attr('href');
						var who = clicked.replace('#', '');

						// Change class
						_t.find('a').removeClass('ish-active');
						_t.find('a[href="' + clicked + '"]').addClass('ish-active');

						if ( who == 'all' ) {
							items.fadeIn(del);
						}
						else {
							items.hide();
							items.filter( '.' + who ).fadeIn(del);
						}

						return false;
					});

				});
			}

		}
	}


// Tabs ----------------------------------------------------------------------------------------------------------------
	if ( ! function_exists( 'activate_tabs' ) ) {
		ish.activate_tabs = function (){

			var tabs = jQuery('.ish-sc_tabs');

			if ( tabs.length > 0 ) {
				tabs.each(function() {
					var nav = jQuery(this).find('.ish-tabs-navigation li');
					var tab = jQuery(this).find('.ish-tabs-content .ish-sc_tab');
					var tabsDel = 350;

					// Click tab
					nav.find('a').click(function( e ) {

						e.preventDefault();

						var _this = jQuery(this);
						var idx = _this.parent().index();

						// Switch tabs
						tab.hide();

						// Temporarily change tab content ID so we can change location.hash without page-scrolling
						var id = tab.eq(idx).attr('id');
						tab.eq(idx).attr('id', 'ish_temp_' + id );

						// Change URL hash
						if ( window.location.hash != this.hash ) {
							window.location.hash = this.hash;
						}

						// Change the id back to original
						tab.eq(idx).attr('id', id );

						// Show tab content
						tab.eq(idx).fadeIn(tabsDel);

						nav.removeClass('ish-active');
						tab.removeClass('ish-active');

						_this.parent().addClass('ish-active');

						// Must re-check all visible lined separators widths again
						ish.do_text_separator_size_fix();
					});

					if ( '' != window.location.hash ) {
						var hash = window.location.hash;

						var nav_item_from_uri = jQuery(this).find('.ish-tabs-navigation li a[href^=' + hash + ']');
						nav_item_from_uri.click();

						// Initiate hash change to scroll to the selected tab
						window.location.hash = hash;
					}

				});
			}

		}
	}


// Last bottom shape + footer padding top ------------------------------------------------------------------------------
	if ( ! function_exists( 'activate_last_shape_footer' ) ) {
		ish.activate_last_shape_footer = function (){

			jQuery('[class*="ish-row-svg-bottom-"]:last-child').parent().find('+ .ish-part_footer > .ish-row:first-child').css({'padding-top': '50px'});

		}
	}


// Masonry blog responsive class ---------------------------------------------------------------------------------------
	if ( ! function_exists( 'activate_masonry_blog_responsive_class' ) ) {
		ish.activate_masonry_blog_responsive_class = function (){

			var masCont = jQuery('.ish-part_content.ish-blog-masonry:not(.ish-blog-masonry-layout-grid)');

			if ( masCont.length > 0 ) {
				var ww;

				jQuery(window).resize(function() {
					ww = jQuery(window).width();

					if ( ww < BREAKINGPOINT ) {
						masCont.addClass('ish-blog-masonry-layout-grid');
					}
					else {
						masCont.removeClass('ish-blog-masonry-layout-grid');
					}
				});
			}

		}
	}


// Masonry blog preloader ----------------------------------------------------------------------------------------------
	if ( ! function_exists( 'activate_masonry_blog_preloader' ) ) {
		ish.activate_masonry_blog_preloader = function (){

			var masonry_blog = jQuery('.ish-part_content.ish-blog-masonry');

			masonry_blog.each(function() {
				var _thisp = jQuery(this);
				var del = 200;

				// Preloading
				_thisp.find('.ish-blog-post-media').imagesLoaded().done( function() {
					masonry_blog.find('.ish-packery').packery();

					_thisp.find('.ish-section-filter .ish-vc_row_inner *, .ish-masonry-container .ish-packery').css({
						'visibility': 'visible',
						'opacity': '0'
					}).fadeTo(del * 5, 1);

					jQuery('.ish-preloader').fadeOut(del);
				});

			});

		}
	}


	// Scroll on resize ----------------------------------------------------------------------------------------------------
	if ( ! function_exists( 'activate_scroll_on_resize' ) ) {
		ish.activate_scroll_on_resize = function (){

			jQuery(window).resize(function(){
				jQuery(window).scroll();
			});

		}
	}


	/*
	 * Charts animation
	 */
	if ( ! function_exists( 'animate_charts' ) ) {
		ish.animate_charts = function (){

			jQuery('.ish-sc_chart:in-viewport').each(function() {
				var me = jQuery(this);
				if ( ! me.hasClass('done') ) {
					me.addClass('done');
					var percent = parseInt( me.attr('data-percent') , 10 );
					me.data('easyPieChart').update(percent);
				}
			});

		}
	}


	// Charts - EasyPieChart -----------------------------------------------------------------------------------------------
	if ( ! function_exists( 'activate_charts' ) ) {
		ish.activate_charts = function (){

			var chart = jQuery('.ish-sc_chart');
			chartz = chart;

			if ( chart.length > 0 ) {
				chart.each(function() {
					var me = jQuery(this);

					// attributes from html
					var dataAttr = {
						lineCap: me.attr('data-linecap'),
						lineWidth: me.attr('data-linewidth'),
						size: me.attr('data-size'),
						barColor: me.attr('data-barcolor'),
						trackColor: me.attr('data-trackcolor'),
						animate: me.attr('data-animate')
					};

					// options for easyPieChart
					var opts = {
						scaleColor: false,
						lineCap: 'square',
						lineWidth: 10,
						size: 150
					};

					if ( dataAttr.lineCap== 'round' ) {
						opts.lineCap = 'round';
					}
					if ( dataAttr.lineWidth != undefined ) {
						opts.lineWidth = dataAttr.lineWidth;
					}
					if ( dataAttr.size != undefined ) {
						opts.size = dataAttr.size;
					}
					if ( dataAttr.barColor != undefined ) {
						opts.barColor = dataAttr.barColor;
					}
					if ( dataAttr.trackColor != undefined ) {
						opts.trackColor = dataAttr.trackColor;
					}
					if ( dataAttr.animate != undefined ) {
						opts.animate = dataAttr.animate;
					}

					// do charts
					me.easyPieChart(opts);
					me.data('easyPieChart').update(0);
				});

				jQuery(window).scroll(function() {
					ish.animate_charts();
				});
			}

		}
	}

	/*
	 * Counters animation
	 */
	if ( ! function_exists( 'animate_counters' ) ) {
		ish.animate_counters = function (){

			jQuery('.ish-sc_counter:in-viewport').each(function() {
				var me = jQuery(this);
				if ( ! me.hasClass('done') ) {
					me.addClass('done');

					var counter = me.find('.ish-counter');

					// attributes from html
					var duration = me.attr('data-duration');
					var value = counter.text();

					if ( duration != undefined ) {
						duration = duration * 1000;
					} else {
						duration = 1000;
					}

					jQuery({ Counter: 0 }).animate({ Counter: counter.text() }, {
						duration: duration,
						easing: 'swing',
						step: function () {
							counter.text(Math.ceil(this.Counter));
						},
						done: function () {
							counter.text( value );
						}
					});
				}
			});

		}
	}


	// Counters --------------------------------------------------------------------------------------------------------
	if ( ! function_exists( 'activate_counters' ) ) {
		ish.activate_counters = function (){

			var counter = jQuery('.ish-sc_counter');
			counters = counter;

			if ( counter.length > 0 ) {

				jQuery(window).scroll(function() {
					ish.animate_counters();
				});
			}

		}
	}

	// Site Preloader ------------------------------------------------------------------------------------------------------
	if ( ! function_exists( 'activate_site_preloader' ) ) {
		ish.activate_site_preloader = function (){

			var site_preloader = jQuery('.ish-site-preloader-holder');

			if ( site_preloader.length > 0 ) {
				site_preloader.fadeIn(250);
			}

		}
	}
	if ( ! function_exists( 'deactivate_site_preloader' ) ) {
		ish.deactivate_site_preloader = function (){

			var site_preloader = jQuery('.ish-site-preloader-holder');

			if ( site_preloader.length > 0 ) {
				site_preloader.fadeOut(250);
			}

		}
	}





















































	/*
	 * Boxgroup - same height for boxes
	 */
	if ( ! function_exists( 'activate_shortcode_boxgroup' ) ) {
		ish.activate_shortcode_boxgroup = function (){

			var boxgroup = jQuery('.boxgroup');
			if ( boxgroup.length > 0 ) {
				jQuery(window).resize(function() {

					if ( RESPONSIVE === true ){
						// only if the layout is responsive

						waitForFinalEvent(function(){
							if ( jQuery(window).width() > BREAKINGPOINT ) {
								boxgroup.each(function() {
									var box = jQuery(this).find('.box');

									box.css('height', 'auto');
									box.sameHeight();
								});
							}
							else {
								boxgroup.find('.box').each(function() {
									jQuery(this).css('height', 'auto');
								});
							}
						}, WAIT_INTERVAL, "BoxgroupResize");
					}
					else{
						waitForFinalEvent(function(){
							boxgroup.each(function() {
								var box = jQuery(this).find('.box');

								box.css('height', 'auto');
								box.sameHeight();
							});
						}, WAIT_INTERVAL, "BoxgroupResize");
					}
				});
			}

		}
	}


	/*
	 * Alerts - close button
	 */
	if ( ! function_exists( 'activate_shortcode_alert' ) ) {
		ish.activate_shortcode_alert = function (){

			var alertsClose = jQuery('.box.success.close, .box.warning.close, .box.info.close, .box.error.close');

			if ( alertsClose.length > 0 ) {
				alertsClose.prepend('<a href="#alert-close" class="icon-cancel-squared"></a>');

				var alertsCloseBtn = alertsClose.find('a[href="#alert-close"]');

				alertsCloseBtn.click(function() {
					jQuery(this).parent().fadeOut(500);

					return false;
				});
			}

		}
	}

	/*
	 * Table column highlight
	 */
	if ( ! function_exists( 'activate_shortcode_table_highlight' ) ) {
		ish.activate_shortcode_table_highlight = function (){

			var highCol = jQuery('.highlight-col');

			if ( highCol.length > 0 ) {
				//highCol.parents('table').each(function() {
				highCol.each(function() {
					var tbl = jQuery(this).parents('table');
					var me = jQuery(this);
					var idx = me.index() + 1;
					var classList = me.attr('class');

					tbl.find('th:nth-child(' + idx + '), td:nth-child(' + idx + ')').addClass(classList);
					tbl.find('tr:nth-child(even)').find('th:nth-child(' + idx + '), td:nth-child(' + idx + ')').addClass('even');
				});
			}

		}
	}

	/*
	 * EasyPieChart - charts
	 */
	if ( ! function_exists( 'activate_shortcode_chart' ) ) {
		ish.activate_shortcode_chart = function (){

			var chart = jQuery('.chart');
			chartz = chart;

			if ( chart.length > 0 ) {
				chart.each(function() {
					var me = jQuery(this);

					// attributes from html
					var dataAttr = {
						lineCap: me.attr('data-linecap'),
						lineWidth: me.attr('data-linewidth'),
						size: me.attr('data-size'),
						barColor: me.attr('data-barcolor'),
						trackColor: me.attr('data-trackcolor'),
						animate: me.attr('data-animate')
					};

					// options for easyPieChart
					var opts = {
						scaleColor: false,
						lineCap: 'square',
						lineWidth: 10,
						size: 150
					};

					if ( dataAttr.lineCap== 'round' ) {
						opts.lineCap = 'round';
					}
					if ( dataAttr.lineWidth != undefined ) {
						opts.lineWidth = dataAttr.lineWidth;
					}
					if ( dataAttr.size != undefined ) {
						opts.size = dataAttr.size;
					}
					if ( dataAttr.barColor != undefined ) {
						opts.barColor = dataAttr.barColor;
					}
					if ( dataAttr.trackColor != undefined ) {
						opts.trackColor = dataAttr.trackColor;
					}
					if ( dataAttr.animate != undefined ) {
						opts.animate = dataAttr.animate;
					}

					// do charts
					me.easyPieChart(opts);
					me.data('easyPieChart').update(0);
				});

				jQuery(window).scroll(function() {
					animateCharts();
				});
			}

		}
	}


	/* *********************************************************************************************************************
	 * Plugins
	 */


// Multiple dropdown menu ----------------------------------------------------------------------------------------------
	jQuery.fn.multipleDropDown = function() {

		var nav = this;

		// Check all menu items
		nav.children('li').each(function() {

			var me = jQuery(this);

			// If exist child ul
			if ( me.find('ul').length > 0  ) {

				me.children('a').click(function(e){
					if (jQuery(this).attr('href') == '#'){
						e.preventDefault();
					}
				});

				// Add arrow for current parent
				var currItem = me.children('a');
				currItem.addClass('sub');

				// Show 1st level submenu
				var currChild = me.children('ul');
				var hasActive = false;

				// If exists active child mark all parents active
				if ( me.find('.active').length > 0  ) {
					me.addClass('active');
				}

				// Over
				var currParent = currItem.parent();
				currParent.hover(function() {

					var me = jQuery(this);
					var me_parent = me.parent();
					var me_submenu = me.children('ul.sub-menu');
					var currChild = me.children('ul');

					if ( me.hasClass('active') ) {
						hasActive = true;
					}
					else {
						me.addClass('active');
					}

					currChild.stop( true, true ).fadeIn(100);

					var submenu_width;

					if ( me_parent.hasClass('sub-menu') ){
						// 2nd level submenu and on

						submenu_width = me_parent.offset().left + me_parent.width() + currChild.width();

						if ( submenu_width >= jQuery(window).width() ){
							// The submenu does not fit the screen, show it from right to left
							me_submenu.css({
								'left': -1 * currChild.width()
							});

						}
						else{
							// The submenu fits the screen width, show it from left to right
							me_submenu.css({
								'left': -1 + 1 + me_parent.width()
							});

						}

					} else {
						// 1sr level submenu - we need to count the position differently

						submenu_width = me.offset().left + currChild.width();

						if ( submenu_width >= jQuery(window).width() ){
							// The submenu does not fit the screen, show it from right to left
							currChild.css({
								'left': -1 * Math.abs( me.width() - currChild.width() )
							});

						}
						else{
							// The submenu fits the screen width, show it from left to right
							currChild.css({
								'left': 0
							});

						}

					}

				}, function() {
					var me = jQuery(this);
					var currChild = me.children('ul');

					if ( !hasActive ){
						currParent.removeClass('active');
					}

					currChild.stop( true, true ).hide();

					hasActive = false;
				});
			}
		});

	};


// Smooth scroll -------------------------------------------------------------------------------------------------------
	jQuery.fn.smoothScrollAnchor = function() {
		var who = this;

		if ( who.length != 0 ) {
			var scrollDel = 500;
			var inScroll = false;

			who.click( function() {

				if ( jQuery(this).attr("href").indexOf('#') >= 0 ) {

					var current_url = window.location.href.split("#");
					var where_id = jQuery(this).attr("href").split("#");

					// Only scroll if the current URL is the same as the one of the link
					if ( ( current_url[0] == where_id[0] ) || ( '' == where_id[0] ) ) {

						// Set the ID
						where_id = '#' + where_id[1];


						if (( jQuery(where_id).length > 0 ) || ( '#top' == where_id )) {
							// Check if element with the given ID even Exists

							if (!inScroll) {
								var where;

								if (jQuery(this).attr("href") == '#top')
									where = 0;
								else {
									where = where_id;
								}

								var sticky_nav = jQuery('.ish-sticky-scrolling');
								var offset = 0;

								var wpadminbar = jQuery('#wpadminbar');

								if (wpadminbar.length > 0) {
									offset = offset + ( -1 * wpadminbar.outerHeight() );
								}

								if ( jQuery(where).hasClass('ish-row-full-height') ) {
									offset = offset + 50;
								}

								// Check if tab with the given ID exists and open it
								var selected_tab = jQuery('.ish-tabs-navigation li a[href^=' + where + ']');
								if ( selected_tab.length > 0 ) {
									selected_tab.click();
								}

								jQuery(window).scrollTo(where, {
									duration: scrollDel,
									offset: offset,
									easing: 'easeInOutQuart',
									axis: 'y',
									onAfter: function () {
										inScroll = false;

										var sticky_nav = jQuery('.ish-sticky-scrolling');
										var offset = 0;

										var wpadminbar = jQuery('#wpadminbar');

										if (wpadminbar.length > 0) {
											offset = offset + ( -1 * wpadminbar.outerHeight() );
										}

										if (!jQuery(where).hasClass('ish-row-full-height')) {
											if (sticky_nav.length > 0) {
												// offset = offset + ( -1 * sticky_nav.outerHeight() );
												offset = offset + ( -1 * sticky_nav.children('.ish-row').outerHeight() ); // .children('.ish-row') because of the gradient "shadow" effect
											}
										}

										jQuery(window).scrollTo(where, {
											duration: scrollDel * 0.75,
											offset: offset,
											axis: 'y',
											onAfter: function () {
												inScroll = false;
											}
										});
									}
								});

								inScroll = true;
							}

							var resp_nav = jQuery('.ish-ph-mn-be_resp.ish-opened');
							var del = 150; // If you change this, please change also the value on the line with comment "RESP_NAV_CLOSE_DURATION"

							if (resp_nav.length > 0) {
								resp_nav
									.css('overflow-y', 'hidden')
									.fadeOut(del, function () {
										jQuery('body').css({'overflow-y': 'auto'});
										resp_nav.removeClass('ish-opened');
									});

								floated_areas_opened = false;
							}

							return false;

						}
					}
				}
			});

		}
	};


// String width --------------------------------------------------------------------------------------------------------
	jQuery.fn.textWidth = function(){


		var html_calc = jQuery('#html_calc');

		if (html_calc.length > 0){
			html_calc.css('font-size',jQuery(this).css('font-size'));
			html_calc.html(jQuery(this).html());
		}else{
			var nhtml_calc = jQuery('<span id="html_calc">' + jQuery(this).html() + '</span>');
			nhtml_calc.css('font-size',jQuery(this).css('font-size')).hide();
			nhtml_calc.prependTo('body');
			html_calc = nhtml_calc;
		}

		return html_calc.width();
	};


// Same height for boxes - .boxgroup -----------------------------------------------------------------------------------
	jQuery.fn.sameHeight = function(){
		return this.height( Math.max.apply(this, jQuery.map( this , function(e){ return jQuery(e).height() }) ) );
	};


// Check if element is on viewport -------------------------------------------------------------------------------------
	jQuery.fn.isOnScreen = function(){

		var win = jQuery(window);

		var viewport = {
			top : win.scrollTop(),
			left : win.scrollLeft()
		};
		viewport.right = viewport.left + win.width();
		viewport.bottom = viewport.top + win.height();

		var bounds = this.offset();
		bounds.right = bounds.left + this.outerWidth();
		bounds.bottom = bounds.top + this.outerHeight();

		return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

	};


	/* *********************************************************************************************************************
	 * Initialization of google maps
	 */

	jQuery.fn.initGoogleMaps = function () {

		// LOAD GOOGLE MAPS JS INFOBOX
		var script = document.createElement("script");
		script.type = "text/javascript";
		script.src = iyb_globals.js_uri + "/vendor/infobox_packed.js";
		document.body.appendChild(script);

	};


	/*
	 * Viewport - jQuery selectors for finding elements in viewport
	 *
	 * Copyright (c) 2008-2009 Mika Tuupola
	 *
	 * Licensed under the MIT license:
	 *   http://www.opensource.org/licenses/mit-license.php
	 *
	 * Project home:
	 *  http://www.appelsiini.net/projects/viewport
	 *
	 */
	(function($){$.belowthefold=function(element,settings){var fold=$(window).height()+$(window).scrollTop();return fold<=$(element).offset().top-settings.threshold;};$.abovethetop=function(element,settings){var top=$(window).scrollTop();return top>=$(element).offset().top+$(element).height()-settings.threshold;};$.rightofscreen=function(element,settings){var fold=$(window).width()+$(window).scrollLeft();return fold<=$(element).offset().left-settings.threshold;};$.leftofscreen=function(element,settings){var left=$(window).scrollLeft();return left>=$(element).offset().left+$(element).width()-settings.threshold;};$.inviewport=function(element,settings){return!$.rightofscreen(element,settings)&&!$.leftofscreen(element,settings)&&!$.belowthefold(element,settings)&&!$.abovethetop(element,settings);};$.extend($.expr[':'],{"below-the-fold":function(a,i,m){return $.belowthefold(a,{threshold:0});},"above-the-top":function(a,i,m){return $.abovethetop(a,{threshold:0});},"left-of-screen":function(a,i,m){return $.leftofscreen(a,{threshold:0});},"right-of-screen":function(a,i,m){return $.rightofscreen(a,{threshold:0});},"in-viewport":function(a,i,m){return $.inviewport(a,{threshold:0});}});})(jQuery);



	/* *********************************************************************************************************************
	 * Width function override to fix mediaelements responsiveness
	 */
	var ish_orig_width = jQuery.fn.width;

	jQuery.fn.width = function(){

		var objClass = jQuery(this).attr("class");

		if (objClass == 'mejs-time-rail')
		{
			if (arguments.length)
			{
				arguments[0] = arguments[0] - 1;
			}
		}

		var ret = ish_orig_width.apply(this, arguments);

		return ret;
	}

})(jQuery);

/* *********************************************************************************************************************
 * Global Functions
 */


// Charts bars animation -----------------------------------------------------------------------------------------------
function animateCharts(){

	jQuery('.chart:in-viewport').each(function() {
		var me = jQuery(this);
		if (!me.hasClass('done')){
			me.addClass('done');
			var percent = parseInt( me.attr('data-percent') , 10 );
			me.data('easyPieChart').update(percent);
		}
	});

}


// Color for Google map ------------------------------------------------------------------------------------------------
function rgb2hex(rgb){
	if (rgb.indexOf("#") == -1){
		rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

		return "#" +
			("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
			("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
			("0" + parseInt(rgb[3],10).toString(16)).slice(-2);
	}
	else{
		return rgb;
	}
}


// Google map ------------------------------------------------------------------------------------------------------
function initialize(){

	var $mapObject = jQuery('.ish-sc_map');


	// Google Maps module
	google.maps.visualRefresh = true;

	// Init InfoBox
	if ($mapObject.length > 0){
		$mapObject.initGoogleMaps();
	}

	$mapObject.each( function(){

		me = jQuery(this);


		var styles = [
			{
				"stylers": [
					{ "invert_lightness" : !!(( 'yes' == me.attr('data-invert') )) },
					{ "hue": ( me.attr('data-color') ) ? rgb2hex( me.attr('data-color') ) : '' }
				]

			},
			{
				"elementType": "geometry.fill",
				"stylers": [
					{ "weight": 2 }
				]
			}
		];

		var positions = [];
		var locations = [];


		var $map_locations = me.find('.ish-sc_map_location');

		var i = 1;
		$map_locations.each( function(){
			var latlngStr = jQuery(this).attr('data-latlng').split( ",", 2 );
			positions[i - 1] = new google.maps.LatLng( parseFloat(latlngStr[0]) , parseFloat(latlngStr[1]) );
			locations[i - 1] = jQuery(this);
			locations[i - 1].removeClass('ish-sc_map_location');
			i++;
		});


		if ( ! positions[0] ) {
			positions[0] = new google.maps.LatLng(0, 0);
		}

		var zoom = 15;

		if ( '' != me.attr('data-zoom') ){
			zoom = parseInt(me.attr('data-zoom'));
		}

		var $mapOptions;
		$mapOptions = {
			center: positions[0],
			zoom: zoom,
			disableDefaultUI: true,
			backgroundColor: me.css('background-color'),       //Color used for the background of the Map div. This color will be visible when tiles have not yet loaded as the user pans. This option can only be set when the map is initialized.
			styles: styles,
			overviewMapControl: false,
			scrollwheel: false,                   //If false, disables scrollwheel zooming on the map. The scrollwheel is enabled by default.
			mapTypeControl: true,
			streetViewControl: true,
			rotateControl: true,
			zoomControl: true,
			zoomControlOptions: {
				style: google.maps.ZoomControlStyle.DEFAULT
			},
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};

		var $map;
		$map = new google.maps.Map(document.getElementById( me.attr('id') ), $mapOptions);


		var markers = new Array();
		var last_marker = null;

		var infobox = null;
		var default_marker = {
			path: 'M768 896q0 106 -75 181t-181 75t-181 -75t-75 -181t75 -181t181 -75t181 75t75 181zM1024 896q0 -109 -33 -179l-364 -774q-16 -33 -47.5 -52t-67.5 -19t-67.5 19t-46.5 52l-365 774q-33 70 -33 179q0 212 150 362t362 150t362 -150t150 -362z',
			scale: 0.02,
			strokeWeight: 0,
			strokeColor: '#f74926',
			strokeOpacity: 1,
			fillColor: '#f74926',
			fillOpacity: 1,
			rotation: 180
		};

		if ( jQuery('html').hasClass('ie8') ){
			default_marker = '//maps.google.com/mapfiles/ms/icons/red-dot.png';
		}


		for (var j = 0; j < positions.length; j++){

			markers[j] = new google.maps.Marker({
				position: positions[j],
				map: $map,
				animation: google.maps.Animation.DROP,
				icon: default_marker,
				id : j
			});


			google.maps.event.addListener(markers[j], 'click', function() {

				var box_class =  locations[this.id].attr('class');
				var box_style =  locations[this.id].attr('style');


				if ( 'undefined' != typeof(box_style) && box_style.length > 0 ) {

					var stylestemp = box_style.split(';');
					var styles = {};
					var c = '';
					for (var x = 0, l = stylestemp.length -1 ; x < l; x++) {
						c = stylestemp[x].split(':');
						styles[ jQuery.trim( c[0] ) ] = jQuery.trim( c[1] );
					}
					box_style = styles;

				}



				var boxText = document.createElement("div");
				boxText.innerHTML = locations[this.id].html();

				var box_offset = -160;
				if ( jQuery('html').hasClass('ie8') ){
					box_offset = -150;
				}

				var myOptions = {
					content: boxText,
					disableAutoPan: false,
					maxWidth: 0,
					pixelOffset: new google.maps.Size( box_offset, 3 ),
					zIndex: null,
					boxClass: "ish-gmap_box " + box_class,
					closeBoxMargin: "10px 2px 2px 2px",
					closeBoxURL: "",
					infoBoxClearance: new google.maps.Size(1, 1),
					isHidden: false,
					pane: "floatPane",
					enableEventPropagation: false,
					boxStyle: box_style
				};

				if (infobox) {
					infobox.close();

					if (last_marker) {
						last_marker.setIcon(default_marker);
					}
				}

				infobox = new InfoBox(myOptions);
				infobox.open($map, this);

				if ( !jQuery('html').hasClass('ie8') ){
					var color_class = box_class.match(/color(\d+)/);
					if ( null !== color_class ){

						this.setIcon({
							path: 'M768 896q0 106 -75 181t-181 75t-181 -75t-75 -181t75 -181t181 -75t181 75t75 181zM1024 896q0 -109 -33 -179l-364 -774q-16 -33 -47.5 -52t-67.5 -19t-67.5 19t-46.5 52l-365 774q-33 70 -33 179q0 212 150 362t362 150t362 -150t150 -362z',
							scale: 0.02,
							strokeWeight: 1,
							strokeColor: '#000000',
							strokeOpacity: 0.1,
							fillColor: iyb_globals.colors[color_class[0]],
							fillOpacity: 1,
							rotation: 180
						});

					}
				}

				last_marker = this;


			});

		}

		google.maps.event.addListener($map, 'click', function() {
			if(infobox){
				infobox.close();
				infobox = null;
			}
			if (last_marker) {
				last_marker.setIcon(default_marker);
				last_marker = null;
			}
		});


		jQuery(window).resize( function(){
			google.maps.event.trigger($map, 'resize');
			$map.setCenter(positions[0]);
		});

	});

}