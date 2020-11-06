(function($){
	"use strict";

	var attorna_display = 'desktop';
	if( typeof(window.matchMedia) == 'function' ){
		$(window).on('resize attorna-set-display', function(){
			if( window.matchMedia('(max-width: 419px)').matches ){
				attorna_display = 'mobile-portrait';
			}else if( window.matchMedia('(max-width: 767px)').matches ){
				attorna_display = 'mobile-landscape'
			}else if( window.matchMedia('(max-width: 959px)').matches ){
				attorna_display = 'tablet'
			}else{
				attorna_display = 'desktop';
			}
		});
		$(window).trigger('attorna-set-display');
	}else{
		$(window).on('resize attorna-set-display', function(){
			if( $(window).innerWidth() <= 419 ){
				attorna_display = 'mobile-portrait';
			}else if( $(window).innerWidth() <= 767 ){
				attorna_display = 'mobile-landscape'
			}else if( $(window).innerWidth() <= 959 ){
				attorna_display = 'tablet'
			}else{
				attorna_display = 'desktop';
			}
		});
		$(window).trigger('attorna-set-display');
	}

	// ref : http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
	// ensure 1 is fired
	var attorna_debounce = function(func, threshold, execAsap){
		
		var timeout;

		return function debounced(){
			
			var obj = this, args = arguments;
			
			function delayed(){
				if( !execAsap ){
					func.apply(obj, args);
				}
				timeout = null;
			};

			if( timeout ){
				clearTimeout(timeout);
			}else if( execAsap ){
				func.apply(obj, args);
			}
			timeout = setTimeout(delayed, threshold);
		};
	}	
	
	// reduce the event occurance
	var attorna_throttling = function(func, threshold){
		
		var timeout;

		return function throttled(){
			var obj = this, args = arguments;
			
			function delayed(){
				func.apply(obj, args);
				timeout = null;
			};

			if( !timeout ){
				timeout = setTimeout(delayed, threshold);
			}
		};
	}	

	/////////////////////////
	// menu handle function
	/////////////////////////
	var attorna_sf_menu = function( menu ){

		if( menu.length == 0 ) return;

		this.main_menu = menu;

		this.slide_bar = this.main_menu.children('.attorna-navigation-slide-bar');
		this.slide_bar_val = { width: 0, left: 0 };
		this.slide_bar_offset = '15';

		this.current_menu = this.main_menu.children('.sf-menu').children('.current-menu-item, .current-menu-ancestor').children('a');
		
		this.init();
		
	} // attorna_sf_menu

	attorna_sf_menu.prototype = {
		
		init: function(){
			
			var t = this;
			
			// sf menu mod
			t.sf_menu_mod();
			
			// init superfish menu
			if(typeof($.fn.superfish) == 'function'){
				t.main_menu.superfish({ delay: 400, speed: 'fast' });	
				
				t.sf_menu_position();
				$(window).resize(attorna_debounce(function(){
					t.sf_menu_position();
				}, 300));
			}
			
			// init the slidebar
			if( t.slide_bar.length > 0 ){
				t.init_slidebar();
			}
			
		}, // init
		
		sf_menu_mod: function(){
			
			// create the mega menu script
			this.main_menu.find('.sf-mega > ul').each(function(){	
				var mega_content = $('<div></div>');
				var mega_row = $('<div class="sf-mega-section-wrap" ></div>');
				var mega_column_size = 0;
				
				$(this).children('li').each(function(){
					var column_size = parseInt($(this).attr('data-size'));
					if( mega_column_size + column_size  <= 60 ){
						mega_column_size += column_size;
					}else{	
						mega_column_size = column_size;
						mega_content.append(mega_row);
						mega_row = $('<div class="sf-mega-section-wrap" ></div>');
					}
					
					mega_row.append( $('<div class="sf-mega-section" ></div>')
						.addClass('attorna-column-' + column_size)
						.html( $('<div class="sf-mega-section-inner" ></div>')
							.addClass($(this).attr('class'))
							.attr('id', $(this).attr('id'))
							.html($(this).html())
						)
					);
				});
				
				mega_content.append(mega_row);
				$(this).replaceWith(mega_content.html());
			});
			
		}, // sf_menu_mod
		
		sf_menu_position: function(){

			if( attorna_display == 'mobile-landscape' || attorna_display == 'mobile-portrait' || attorna_display == 'tablet' ) return;

			// submenu of normal menu
			var body_wrapper = $('.attorna-body-wrapper');
			var sub_normal_menu = this.main_menu.find('.sf-menu > li.attorna-normal-menu .sub-menu');
			
			sub_normal_menu.css({display: 'block'}).removeClass('sub-menu-right');
			sub_normal_menu.each(function(){
				if( $(this).offset().left + $(this).width() > body_wrapper.outerWidth() ){
					$(this).addClass('sub-menu-right');
				}
			});
			sub_normal_menu.css({display: 'none'});
			
			// submenu of mega menu
			this.main_menu.find('.sf-menu > li.attorna-mega-menu .sf-mega').each(function(){
				if( !$(this).hasClass('sf-mega-full') ){
					
					$(this).css({ display: 'block' });
					
					// set the position
					$(this).css({ right: '', 'margin-left': -(($(this).width() - $(this).parent().outerWidth()) / 2) });
					
					// if exceed the screen
					if( $(this).offset().left + $(this).width() > $(window).width() ){
						$(this).css({ right: 0, 'margin-left': '' });
					}
					
					$(this).css({ display: 'none' });
				}
				
			});
			
		}, // sf_menu_position
		
		init_slidebar: function(){
			
			var t = this;
			
			t.init_slidebar_pos();
			$(window).load(function(){ t.init_slidebar_pos(); });
			
			// animate slidebar 
			t.main_menu.children('.sf-menu').children('li').on({
				mouseenter: function(){
					var nav_element = $(this).children('a');

					if( nav_element.length > 0 ){
						t.slide_bar.animate({ left: nav_element.position().left + (nav_element.outerWidth() / 2) }, { queue: false, duration: 250 });
					}
				}, 
				mouseleave: function(){
					t.slide_bar.animate({ left: t.slide_bar_val.left }, { queue: false, duration: 250 });
				}
			});
			
			// window resize event
			$(window).on('resize', function(){ t.init_slidebar_pos(); });
			$(window).on('attorna-navigation-slider-bar-init', function(){ 
				t.current_menu = t.main_menu.children('.sf-menu').children('.current-menu-item, .current-menu-ancestor').children('a');
				t.animate_slidebar_pos(); 
			});
			$(window).on('attorna-navigation-slider-bar-animate', function(){ t.animate_slidebar_pos(); });
			
		}, // init_slidebar
		
		init_slidebar_pos: function(){

			if( attorna_display == 'mobile-landscape' || attorna_display == 'mobile-portrait' || attorna_display == 'tablet' ) return;

			var t = this;
			
			if( t.current_menu.length > 0 ){
				var temp_half = t.current_menu.outerWidth() / 2;
				t.slide_bar_val = { left: t.current_menu.position().left + temp_half };
			}else{
				var temp_menu_item = t.main_menu.children('ul').children('li:first-child');
				var temp_half = temp_menu_item.outerWidth() / 2;
				t.slide_bar_val = { left: temp_menu_item.position().left + temp_half }
			}
			t.slide_bar.css({ left: t.slide_bar_val.left, display: 'block' });

		}, // set_slidebar_pos	
		animate_slidebar_pos: function(){

			if( attorna_display == 'mobile-landscape' || attorna_display == 'mobile-portrait' || attorna_display == 'tablet' ) return;

			var t = this;

			if( t.current_menu.length > 0 ){
				var temp_half = t.current_menu.outerWidth() / 2;
				t.slide_bar_val = { left: t.current_menu.position().left + temp_half };
			}else{
				var temp_menu_item = t.main_menu.children('ul').children('li:first-child');
				var temp_half = temp_menu_item.outerWidth() / 2;
				t.slide_bar_val = { left: temp_menu_item.position().left + temp_half };
			}
			t.slide_bar.animate({ left: t.slide_bar_val.left }, { queue: false, duration: 250 });

		} // set_slidebar_pos
		
	}; // attorna_sf_menu.prototype
	
	/////////////////////////
	// mobile menu
	/////////////////////////
	$.fn.attorna_mobile_menu = function( args ){
		
		var menu_button = $(this).siblings('.attorna-mm-menu-button');
		var options = {
			navbar: { title: '<span class="mmenu-custom-close" ></span>' },
			extensions: [ 'pagedim-black' ],

		};
		var extensions = { 
			offCanvas: { pageNodetype: '.attorna-body-outer-wrapper' } 
		};

		// remove the wrap for submenu
		$(this).find('a[href="#"]').each(function(){
			var content = $(this).html();
			$('<span class="attorna-mm-menu-blank" ></span>').html(content).insertBefore($(this));
			$(this).remove();
		});
		
		if( $(this).attr('data-slide') ){
			var html_class = 'attorna-mmenu-' + $(this).attr('data-slide');
			$('html').addClass(html_class);

			options.offCanvas = { position : $(this).attr('data-slide') };
		}		
		
		$(this).mmenu(options, extensions);

		var menu_api = $(this).data('mmenu');
		$(this).find('a').not('.mm-next, .mm-prev').on('click', function(){
			menu_api.close();
		});
		$(this).find('.mmenu-custom-close').on('click', function(){
			menu_api.close();
		});
		$(window).resize(function(){
			menu_api.close();
		});

		// add class active to button
		menu_api.bind('open', function($panel){
			menu_button.addClass('attorna-active');
		});
		menu_api.bind('close', function($panel){
			menu_button.removeClass('attorna-active');
		});

	}	

	/////////////////////////
	// overlay menu
	/////////////////////////
	var attorna_overlay_menu = function( menu ){

		this.menu = menu;
		this.menu_button = menu.children('.attorna-overlay-menu-icon');
		this.menu_content = menu.children('.attorna-overlay-menu-content');
		this.menu_close = this.menu_content.children('.attorna-overlay-menu-close');

		this.init();
	}
	attorna_overlay_menu.prototype = {
		
		init: function(){

			var t = this;

			// add transition delay for each menu
			var delay_count = 0;
			t.menu_content.appendTo('body');
			t.menu_content.find('ul.menu > li').each(function(){
				$(this).css('transition-delay', (delay_count * 150) + 'ms');

				delay_count++;
			});

			// bind the menu button
			t.menu_button.on('click', function(){
				$(this).addClass('attorna-active');

				t.menu_content.fadeIn(200, function(){
					$(this).addClass('attorna-active');
				});

				return false;
			});

			// bind the menu close button
			t.menu_close.on('click', function(){
				t.menu_button.removeClass('attorna-active');

				t.menu_content.fadeOut(400, function(){
					$(this).removeClass('attorna-active');
				});
				t.menu_content.find('.sub-menu').slideUp(200).removeClass('attorna-active');

				return false;
			});

			// menu item click
			t.menu_content.find('a').on('click', function(e){ 
				var sub_menu = $(this).siblings('.sub-menu');
				if( sub_menu.length > 0 ){
					if( !sub_menu.hasClass('attorna-active') ){
						var prev_active = sub_menu.closest('li').siblings().find('.sub-menu.attorna-active');
						if( prev_active.length > 0 ){
							prev_active.removeClass('attorna-active').slideUp(150);
							sub_menu.delay(150).slideDown(400, 'easeOutQuart').addClass('attorna-active');
						}else{
							sub_menu.slideDown(400, 'easeOutQuart').addClass('attorna-active');
						}

						$(this).addClass('attorna-no-preload');
						return false;
					}else{
						$(this).removeClass('attorna-no-preload');
					}
				}else{
					t.menu_close.trigger('click');
				}
			});

		}

	}; // attorna_overlay_menu.prototype

	/////////////////////////
	// header side navigation
	/////////////////////////
	var attorna_header_side_nav = function( side_nav ){

		if( side_nav.length == 0 ) return;

		this.prev_scroll = 0;

		this.side_nav = side_nav;
		this.side_nav_content = side_nav.children();

		this.init();

	} // attorna_header_side_nav

	attorna_header_side_nav.prototype = {

		init: function(){

			var t = this;

			t.init_nav_bar_element();

			$(window).resize(function(){ 
				t.init_nav_bar_element();
			});
			
			$(window).scroll(function(){

				if( attorna_display == 'mobile-landscape' || attorna_display == 'mobile-portrait' || attorna_display == 'tablet' ) return;

				// if content longer than screen height
				if( t.side_nav.hasClass('attorna-allow-slide') ){

					var admin_bar_height = parseInt($('html').css('margin-top'));
					var scroll_down = ($(window).scrollTop() > t.prev_scroll);
					t.prev_scroll = $(window).scrollTop();

					// if scroll down
					if( scroll_down ){

						if( !t.side_nav.hasClass('attorna-fix-bottom') ){
							if( t.side_nav.hasClass('attorna-fix-top') ){
								t.side_nav.css('top', t.side_nav.offset().top);
								t.side_nav.removeClass('attorna-fix-top');

							}else if( $(window).height() + $(window).scrollTop() > t.side_nav_content.offset().top + t.side_nav_content.outerHeight() ){ 
								if( !t.side_nav.hasClass('attorna-fix-bottom') ){
									t.side_nav.addClass('attorna-fix-bottom');
									t.side_nav.css('top', '');
								}
							}
						}

					// if scroll up
					}else{

						if( !t.side_nav.hasClass('attorna-fix-top') ){
							if( t.side_nav.hasClass('attorna-fix-bottom') ){
								var top_pos = $(window).scrollTop() + ($(window).height() - admin_bar_height) - t.side_nav_content.outerHeight();
								t.side_nav.css('top', top_pos);
								t.side_nav.removeClass('attorna-fix-bottom');

							}else if( $(window).scrollTop() + admin_bar_height < t.side_nav_content.offset().top ){ 
								if( !t.side_nav.hasClass('attorna-fix-top') ){
									t.side_nav.addClass('attorna-fix-top');
									t.side_nav.css('top', '');
								}
							}
						}
					
					}

				}
			});

		},

		init_nav_bar_element: function(){

			if( attorna_display == 'mobile-landscape' || attorna_display == 'mobile-portrait' || attorna_display == 'tablet' ) return;

			var t = this;
			var middle_pos = t.side_nav_content.children('.attorna-pos-middle').addClass('attorna-active');
			var bottom_pos = t.side_nav_content.children('.attorna-pos-bottom').addClass('attorna-active');

			// remove all additional space
			t.side_nav_content.children('.attorna-pre-spaces').remove();

			// add class depends on the screen size/content
			if( $(window).height() < t.side_nav_content.height() ){
				t.side_nav.addClass('attorna-allow-slide');
			}else{
				t.side_nav.removeClass('attorna-allow-slide attorna-fix-top attorna-fix-bottom').css('top', '');

				// set the middle position
				if( t.side_nav.hasClass('attorna-style-middle') ){
					middle_pos.each(function(){
						var top_padding = parseInt($(this).css('padding-top'));
						var prespace = ((t.side_nav.height() - (t.side_nav_content.height() - top_padding)) / 2) - top_padding;

						if( prespace > 0 ){
							$('<div class="attorna-pre-spaces" ></div>').css('height', prespace).insertBefore($(this));
						}
					});
				}

				// set the bottom position
				bottom_pos.each(function(){
					var prespace = t.side_nav.height() - t.side_nav_content.height();

					if( prespace > 0 ){
						$('<div class="attorna-pre-spaces" ></div>').css('height', prespace).insertBefore($(this));
					}
				});

			}
		}

	}; // attorna_sf_menu.prototype

	/////////////////////////
	// anchoring
	/////////////////////////	

	var attorna_anchor = function(){

		this.anchor_link = $('a[href*="#"]').not('[href="#"]').filter(function(){

			// for mm-menu plugin
			if( $(this).is('.attorna-mm-menu-button, .mm-next, .mm-prev, .mm-title, .gdlr-core-ilightbox') ){
				return false;
			}

			// for additional plugins
			if( $(this).is('.fbx-btn-transition') ){
				return false;
			}

			// for woocommerce
			if( $(this).parent('.description_tab, .reviews_tab').length || $(this).not('[class^="attorna"]').closest('.woocommerce').length ){
				return false;
			}

			return true;
		});

		if( this.anchor_link.length ){
			this.menu_anchor = $('#attorna-main-menu, #attorna-bullet-anchor');
			this.home_anchor = this.menu_anchor.find('ul.sf-menu > li.current-menu-item > a, ul.sf-menu > li.current-menu-ancestor > a, .attorna-bullet-anchor-link.current-menu-item');

			this.init();
		}
	}
	attorna_anchor.prototype = {

		init: function(){

			var t = this;

			t.animate_anchor();
			t.scroll_section();

			// init bullet anchor height
			t.menu_anchor.filter('#attorna-bullet-anchor').each(function(){
				$(this).css('margin-top', - t.menu_anchor.height() / 2).addClass('attorna-init');
			});

			// initialize if the page hash exists
			// wait for all element to initialize ( eg. flexslider )
			var url_hash = window.location.hash;
			if( url_hash ){
				setTimeout(function(){

					var current_menu = t.menu_anchor.find('a[href*="' + url_hash + '"]');
					if( !current_menu.is('.current-menu-item, .current-menu-ancestor') ){
						current_menu.addClass('current-menu-item').siblings().removeClass('current-menu-item current-menu-ancestor');

						$(window).trigger('attorna-navigation-slider-bar-init');
					}

					t.scroll_to(url_hash, false, 300);
				}, 500);
			}
	
		},

		animate_anchor: function(){

			var t = this;

			// home anchor
			t.home_anchor.on('click', function(){

				if( window.location.href == this.href ){
					$('html, body').animate({ scrollTop: 0 }, { duration: 1500, easing: 'easeOutQuart' });
					return false;
				}
				
			});

			// normal anchor
			t.anchor_link.on('click', function() {
				if( location.hostname == this.hostname && location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') ){
					return t.scroll_to(this.hash, true);
				}
			});

		}, // animate anchor

		scroll_to: function( hash, redirect, duration ){

			// start scrolling
			if( hash == '#attorna-top-anchor' ){
				var scroll_position = 0;
			}else{
				
				var target = $(hash);

				if( target.length ){
					var scroll_position = target.offset().top;
				}
			}

			if( typeof(scroll_position) != 'undefined' ){

				// offset for wordpress admin bar
				scroll_position = scroll_position - parseInt($('html').css('margin-top'));

				// offset for fixed nav bar
				if( attorna_display == 'mobile-portrait' || attorna_display == 'mobile-landscape' ){
					scroll_position = scroll_position - 75;
				}else if( typeof(window.attorna_anchor_offset) != 'undefined' ){
					scroll_position = scroll_position - parseInt(window.attorna_anchor_offset);
				}

				if( scroll_position < 0 ) scroll_position = 0;

				$('html, body').animate({ scrollTop: scroll_position }, { duration: 1500, easing: 'easeOutQuart', queue: false });

				return false;

			}else if( redirect ){

				window.location.href = $('body').attr('data-home-url') + hash;

				return false;
			}

		}, // scroll to

		scroll_section: function(){

			var t = this;

			// have anchor in anchor menu
			var menu_link_anchor = this.menu_anchor.find('a[href*="#"]').not('[href="#"]');
			if( !menu_link_anchor.length ){ return; }

			// get anchor section
			var home_anchor_section = $('#attorna-page-wrapper');
			var anchor_section = home_anchor_section.find('div[id], section[id]');
			if( !anchor_section.length ){ return; }

			// add data for faster query
			menu_link_anchor.each(function(){
				if( $(this).closest('.sub-menu').length == 0 && $(this.hash).length ){
					$(this).attr('data-anchor', this.hash);
				}
			});

			// check section on scroll event
			$(window).scroll(function(){

				if( attorna_display == 'mobile-landscape' || attorna_display == 'mobile-portrait' || attorna_display == 'tablet' ) return;
				
				if( t.home_anchor.length && $(window).scrollTop() <= home_anchor_section.offset().top ){

					t.home_anchor.each(function(){
						if( $(this).hasClass('attorna-bullet-anchor-link') ){
							$(this).addClass('current-menu-item').siblings().removeClass('current-menu-item');
							$(this).parent('.attorna-bullet-anchor').attr('data-anchor-section', 'attorna-home');
						}else if( !$(this).parent('.current-menu-item, .current-menu-ancestor').length ){
							$(this).parent().addClass('current-menu-item').siblings().removeClass('current-menu-item current-menu-ancestor');
							$(window).trigger('attorna-navigation-slider-bar-init');
						}			
					});

				}else{
					var section_position = $(window).scrollTop() + ($(window).height() / 2);

					anchor_section.each(function(){
						if( $(this).css('display') == 'none' ) return;
						
						var top_offset_pos = $(this).offset().top;

						if( (section_position > top_offset_pos) && (section_position <  top_offset_pos + $(this).outerHeight()) ){
							var section_id = $(this).attr('id');
							menu_link_anchor.filter('[data-anchor="#' +  section_id + '"]').each(function(){
								if( $(this).hasClass('attorna-bullet-anchor-link') ){
									$(this).addClass('current-menu-item').siblings().removeClass('current-menu-item');
									$(this).parent('.attorna-bullet-anchor').attr('data-anchor-section', section_id);
								}else if( $(this).parent('li.menu-item').length && !$(this).parent('li.menu-item').is('.current-menu-item, .current-menu-ancestor') ){
									$(this).parent('li.menu-item').addClass('current-menu-item').siblings().removeClass('current-menu-item current-menu-ancestor');
									$(window).trigger('attorna-navigation-slider-bar-init');
								}
							});
							
							return false;
						}

					});
				}

			});

		} // scroll section

	};

	var attorna_sticky_navigation = function(){

		var t = this;

		// get navigation
		t.sticky_nav = $('.attorna-with-sticky-navigation .attorna-sticky-navigation');
		t.mobile_menu = $('#attorna-mobile-header');

		// set the anchor offset
		if( t.sticky_nav.hasClass('attorna-sticky-navigation-height') ){
			window.attorna_anchor_offset = t.sticky_nav.outerHeight();
			$(window).resize(function(){
				window.attorna_anchor_offset = t.sticky_nav.outerHeight();
			});
		}else if( t.sticky_nav.attr('data-navigation-offset') ){
			window.attorna_anchor_offset = parseInt(t.sticky_nav.attr('data-navigation-offset'));
		}else if( t.sticky_nav.length ){
			window.attorna_anchor_offset = 75;
		}

		// init the sticky navigation
		if( t.sticky_nav.length ){
			t.init(); 
		}

		if( t.mobile_menu.hasClass('attorna-sticky-mobile-navigation') ){
			t.style_mobile_slide();
			$(window).trigger('attorna-set-sticky-mobile-navigation'); 
		}

	}
	attorna_sticky_navigation.prototype = {
		
		init: function(){

			var t = this;

			if( t.sticky_nav.hasClass('attorna-style-fixed') ){
				t.style_fixed();
			}else if( t.sticky_nav.hasClass('attorna-style-slide') ){
				t.style_slide();
			}

			$(window).trigger('attorna-set-sticky-navigation'); 
		},

		style_fixed: function(){

			var t = this;
			var placeholder = $('<div class="attorna-sticky-menu-placeholder" ></div>');

			$(window).on('scroll attorna-set-sticky-navigation', function(){

				if( attorna_display == 'mobile-landscape' || attorna_display == 'mobile-portrait' || attorna_display == 'tablet' ) return;

				var page_offset = parseInt($('html').css('margin-top'));

				if( !t.sticky_nav.hasClass('attorna-fixed-navigation') ){

					if( $(window).scrollTop() + page_offset > t.sticky_nav.offset().top ){
						if( !t.sticky_nav.hasClass('attorna-without-placeholder') ){
							placeholder.height(t.sticky_nav.outerHeight());
						}
						placeholder.insertAfter(t.sticky_nav);
						$('body').append(t.sticky_nav);
						t.sticky_nav.addClass('attorna-fixed-navigation');
						
						setTimeout(function(){ t.sticky_nav.addClass('attorna-animate-fixed-navigation'); }, 10);	
						setTimeout(function(){ 
							t.sticky_nav.css('height', ''); 
							$(window).trigger('attorna-navigation-slider-bar-animate');
						}, 200);
					}
				}else{

					if( $(window).scrollTop() + page_offset <= placeholder.offset().top ){
						if( !t.sticky_nav.hasClass('attorna-without-placeholder') ){
							t.sticky_nav.height(placeholder.height());
						}
						t.sticky_nav.insertBefore(placeholder);
						t.sticky_nav.removeClass('attorna-fixed-navigation');
						placeholder.remove();

						setTimeout(function(){ t.sticky_nav.removeClass('attorna-animate-fixed-navigation'); }, 10);	
						setTimeout(function(){ 
							t.sticky_nav.css('height', ''); 
							$(window).trigger('attorna-navigation-slider-bar-animate');
						}, 200);
					}
				}
			});

		}, // style_fixed

		style_slide: function(){

			var t = this;
			var placeholder = $('<div class="attorna-sticky-menu-placeholder" ></div>');

			$(window).on('scroll attorna-set-sticky-navigation', function(){

				if( attorna_display == 'mobile-landscape' || attorna_display == 'mobile-portrait' || attorna_display == 'tablet' ){ return; }

				var page_offset = parseInt($('html').css('margin-top'));

				if( !t.sticky_nav.hasClass('attorna-fixed-navigation') ){

					if( $(window).scrollTop() + page_offset > t.sticky_nav.offset().top + t.sticky_nav.outerHeight() + 200 ){
						
						if( !t.sticky_nav.hasClass('attorna-without-placeholder') ){
							placeholder.height(t.sticky_nav.outerHeight());
						}
						placeholder.insertAfter(t.sticky_nav);
						t.sticky_nav.css('display', 'none');

						$('body').append(t.sticky_nav);
						t.sticky_nav.addClass('attorna-fixed-navigation attorna-animate-fixed-navigation');
						t.sticky_nav.slideDown(200);
						$(window).trigger('attorna-navigation-slider-bar-animate');
					}
				}else{

					if( $(window).scrollTop() + page_offset <= placeholder.offset().top + placeholder.height() + 200 ){
						var clone = t.sticky_nav.clone();
						clone.insertAfter(t.sticky_nav);
						clone.slideUp(200, function(){ $(this).remove(); });

						t.sticky_nav.insertBefore(placeholder);
						placeholder.remove();
						t.sticky_nav.removeClass('attorna-fixed-navigation attorna-animate-fixed-navigation');
						t.sticky_nav.css('display', 'block');

						$(window).trigger('attorna-navigation-slider-bar-animate');
					}
				}
			});

		}, // style_slide		

		style_mobile_slide: function(){

			var t = this;
			var placeholder = $('<div class="attorna-sticky-mobile-placeholder" ></div>');

			$(window).on('scroll attorna-set-sticky-mobile-navigation', function(){

				if( attorna_display == 'mobile-landscape' || attorna_display == 'mobile-portrait' || attorna_display == 'tablet' ){

					var page_offset = parseInt($('html').css('margin-top'));

					if( !t.mobile_menu.hasClass('attorna-fixed-navigation') ){
						if( $(window).scrollTop() + page_offset > t.mobile_menu.offset().top + t.mobile_menu.outerHeight() + 200 ){
							placeholder.height(t.mobile_menu.outerHeight()).insertAfter(t.mobile_menu);
							$('body').append(t.mobile_menu);
							t.mobile_menu.addClass('attorna-fixed-navigation');
							t.mobile_menu.css('display', 'none').slideDown(200);
						}
					}else{
						if( $(window).scrollTop() + page_offset <= placeholder.offset().top + placeholder.height() + 200 ){
							var clone = t.mobile_menu.clone();
							clone.insertAfter(t.mobile_menu);
							clone.slideUp(200, function(){ $(this).remove(); });

							t.mobile_menu.insertBefore(placeholder);
							placeholder.remove();
							t.mobile_menu.removeClass('attorna-fixed-navigation');
							t.mobile_menu.css('display', 'block');
						}
					}
				}

			});

		}, // style_slide

	};

	var attorna_font_resize = function(){

		this.heading_font = $('h1, h2, h3, h4, h5, h6');

		this.init();

	}
	attorna_font_resize.prototype = {

		init: function(){

			var t = this;

			t.resize();
			$(window).on('resize', attorna_throttling(function(){
				t.resize();
			}, 100));

		},

		resize: function(){
			
			var t = this;

			if( attorna_display == 'mobile-landscape' || attorna_display == 'mobile-portrait' ){

				t.heading_font.each(function(){
					if( parseInt($(this).css('font-size')) > 40 ){
						if( !$(this).attr('data-orig-font') ){
							$(this).attr('data-orig-font', $(this).css('font-size')); 
						}

						$(this).css('font-size', '40px');
					}
				});

			// return font to normal
			}else{

				t.heading_font.filter('[data-orig-font]').each(function(){
					$(this).css('font-size', $(this).attr('data-orig-font'));
				});

			}
		}

	};

	// tourmaster lightbox
	function attorna_lightbox( content ){

		var lightbox_wrap = $('<div class="attorna-lightbox-wrapper" ></div>').hide();
		var lightbox_content_wrap = $('<div class="attorna-lightbox-content-cell" ></div>');
		lightbox_wrap.append(lightbox_content_wrap);
		lightbox_content_wrap.wrap($('<div class="attorna-lightbox-content-row" ></div>'));

		lightbox_content_wrap.append(content);

		var scrollPos = $(window).scrollTop();
		$('html').addClass('attorna-lightbox-on');
		$('body').append(lightbox_wrap);
		lightbox_wrap.fadeIn(300);

		// do a lightbox action
		lightbox_wrap.on('click', '.attorna-lightbox-close', function(){
			$('html').removeClass('attorna-lightbox-on');
			$(window).scrollTop(scrollPos);
			lightbox_wrap.fadeOut(300, function(){
				$(this).remove();
			});
		});

	} // attorna_lightbox

	////////////////////////////////
	// starting running the script
	////////////////////////////////
	$(document).ready(function(){
	
		// resize font on mobile
		new attorna_font_resize();

		// init main navigation menu
		$('#attorna-main-menu, #attorna-right-menu, #attorna-mobile-menu, #attorna-top-bar-menu').each(function(){
			if( $(this).hasClass('attorna-overlay-menu') ){
				new attorna_overlay_menu( $(this) );
			}else if( $(this).hasClass('attorna-mm-menu-wrap') ){
				$(this).attorna_mobile_menu();
			}else{
				new attorna_sf_menu( $(this) );
			}
		});

		$('#attorna-top-search, #attorna-mobile-top-search').each(function(){

			var search_wrap = $(this).siblings('.attorna-top-search-wrap');
			search_wrap.appendTo('body');

			// bind click button
			$(this).on('click', function(){
				search_wrap.fadeIn(200, function(){
					$(this).addClass('attorna-active');
				});
			});

			// bind close button
			search_wrap.find('.attorna-top-search-close').on('click', function(){
				search_wrap.fadeOut(200, function(){
					$(this).addClass('attorna-active');
				});
			});

			// bind search button
			search_wrap.find('.search-submit').on('click', function(){
				if( search_wrap.find('.search-field').val().length == 0 ){
					return false;
				}
			});
		});

		$('#attorna-main-menu-cart, #attorna-mobile-menu-cart').each(function(){
			
			$(this).on({
				mouseenter: function(){
					$(this).addClass('attorna-active attorna-animating');
				}, 
				mouseleave: function(){
					var menu_cart = $(this);
					menu_cart.removeClass('attorna-active');
					setTimeout(function(){
						menu_cart.removeClass('attorna-animating');
					}, 400)
				}
			});
		});

		// woocommerce top bar cart
		$('body').on('added_to_cart', function(){
			$.ajax({
				type: 'POST',
				url: wc_add_to_cart_params.ajax_url,
				data: { 'action': 'top_bar_woocommerce_cart' },
				dataType: 'json',
				error: function(jqXHR, textStatus, errorThrown){
					console.log(jqXHR, textStatus, errorThrown);
				},
				success: function(data){
					if( typeof(data['title']) != 'undefined' ){
						$('.attorna-top-cart-title').replaceWith(data['title']);
					}
					if( typeof(data['cart-items']) != 'undefined' ){
						$('.attorna-top-cart-item-wrap').replaceWith(data['cart-items']);
					}
				}
			});
		});

		// attorna
		$('#attorna-dropdown-attorna-flag').hover(function(){
			$(this).children('.attorna-dropdown-attorna-list').fadeIn(200);
		}, function(){
			$(this).children('.attorna-dropdown-attorna-list').fadeOut(200);
		});

		// additional space for header transparent
		$('.attorna-header-boxed-wrap, .attorna-header-background-transparent, .attorna-navigation-bar-wrap.attorna-style-transparent').each(function(){
			var header_transparent = $(this);
			var header_transparent_sub = $('.attorna-header-transparent-substitute');

			header_transparent_sub.height(header_transparent.outerHeight());
			$(window).on('load resize', function(){
				header_transparent_sub.height(header_transparent.outerHeight());
			});
		});

		// full screen for 404 not found
		$('body.error404, body.search-no-results').each(function(){

			var wrap = $(this).find('#attorna-full-no-header-wrap');
			var body_wrap_offset = parseInt($(this).children('.attorna-body-outer-wrapper').children('.attorna-body-wrapper').css('margin-bottom'));
			
			var padding = ($(window).height() - wrap.offset().top - wrap.outerHeight() - body_wrap_offset) / 2;
			if( padding > 0 ){
				wrap.css({ 'padding-top': padding, 'padding-bottom': padding });
			}

			$(window).on('load resize', function(){
				wrap.css({ 'padding-top': 0, 'padding-bottom': 0 });
				padding = ($(window).height() - wrap.offset().top - wrap.outerHeight() - body_wrap_offset) / 2;
				if( padding > 0 ){
					wrap.css({ 'padding-top': padding, 'padding-bottom': padding });
				}
			});
		});

		// back to top button
		var back_to_top = $('#attorna-footer-back-to-top-button');
		if( back_to_top.length ){ 
			$(window).on('scroll', function(){
				if( $(window).scrollTop() > 300 ){
					back_to_top.addClass('attorna-scrolled');
				}else{
					back_to_top.removeClass('attorna-scrolled');
				}
			});
		}

		// page preload
		$('body').children('#attorna-page-preload').each(function(){
			var page_preload = $(this);
			var animation_time = parseInt(page_preload.attr('data-animation-time'));
			
			$('a[href]').not('[href^="#"], [target="_blank"], .gdlr-core-js, .strip').on('click', function(e){
				if( e.which != 1 || $(this).hasClass('attorna-no-preload') || e.ctrlKey ) return;
				
				if( window.location.href != this.href ){
					page_preload.addClass('attorna-out').fadeIn(animation_time);
				}
			});
			
			$(window).load(function(){
				page_preload.fadeOut(animation_time);
			});
		});

		// single nav style 2 sync height
		$('body.attorna-blog-style-2 .attorna-single-nav-area').each(function(){
			var max_height;
			var single_nav_2 = $(this).children();

			max_height = 0;
			single_nav_2.css('min-height', '0px');
			single_nav_2.each(function(){
				if( max_height < $(this).outerHeight() ){
					max_height = $(this).outerHeight();
				}
			});
			single_nav_2.css('min-height', max_height);

			$(window).resize(function(){
				max_height = 0;
				single_nav_2.css('min-height', '0px');
				single_nav_2.each(function(){
					if( max_height < $(this).outerHeight() ){
						max_height = $(this).outerHeight();
					}
				});
				single_nav_2.css('min-height', max_height);
			});
		});

		// lightbox popup
		$('[data-attorna-lb]').click(function(){
			var lb_content = $(this).siblings('[data-attorna-lb-id="' + $(this).attr('data-attorna-lb') + '"]');
			attorna_lightbox(lb_content.clone());
		});
		
	});

	// fix back button for preload
	$(window).on('pageshow', function(event) {
	    if( event.originalEvent.persisted ){
	        $('body').children('#attorna-page-preload').each(function(){
				$(this).fadeOut(400);
			});
	    }
	});
	// $(window).on('beforeunload', function(){
	// 	$('body').children('#attorna-page-preload').each(function(){
	// 		$(this).fadeOut(400);
	// 	});
	// });

	$(window).load(function(){

		// fixed footer
		$('#attorna-fixed-footer').each(function(){
			var fixed_footer = $(this);
			var placeholder = $('<div class="attorna-fixed-footer-placeholder" ></div>');

			placeholder.insertBefore(fixed_footer);
			placeholder.height(fixed_footer.outerHeight());
			$('body').css('min-height', $(window).height() - parseInt($('html').css('margin-top'))); // for safari
			$(window).resize(function(){ 
				placeholder.height(fixed_footer.outerHeight()); 
				$('body').css('min-height', $(window).height() - parseInt($('html').css('margin-top')));
			});
		});

		// side navigation bar
		new attorna_header_side_nav( $('#attorna-header-side-nav') );

		// sticky navigation
		new attorna_sticky_navigation();

		// anchoring
		new attorna_anchor();

	});

})(jQuery);