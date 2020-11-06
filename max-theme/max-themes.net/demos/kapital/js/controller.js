	(function($){

		"use strict";

		function toggleLangClick(target){
			target.off('click').on('click',function(){
				$(this).toggleClass('animate').find('ul ul').slideToggle(300, "easeOutQuart");
			});
		}

		function toggleLangHover(target){
			target.hoverIntent(
				function(){
					$(this).children('ul').stop().slideDown(300, "easeOutQuart").css('display','block');
				},
				function(){
					$(this).children('ul').stop().slideUp(300, "easeOutQuart", function(){
						$(this).css('display','none');
					});
				}
			);
		}

		toggleLangClick($('.ls #lang_sel_click'));
		toggleLangHover($('.desk #lang_sel ul li'));
		toggleLangClick($('.ls #lang_sel_click2'));
		toggleLangHover($('.desk #lang_sel2 ul li'));
		toggleLangClick($('.widget_icl_lang_sel_widget #lang_sel_click'));
		toggleLangHover($('.widget_icl_lang_sel_widget #lang_sel ul li'));

		// Header mob
		// -------------------

			$('.mob-header .menu-toggle').on('click',function(){
				$(this).toggleClass('animate');
				$('.mob-header .header-content').slideToggle(300, "easeOutQuart");
			});

			$('.mob-int-true .mob-menu ul li a > .di').on("click", function(e){
				$(this).parent().toggleClass('animate');
				$(this).parent().next('ul').stop().slideToggle(300, "easeOutQuart");
				e.preventDefault();
			});

			$('.mob-ls-true .ls div > ul > li > a').on("click", function(e){
				$(this).toggleClass('animate');
				$(this).next('ul').stop().slideToggle(300, "easeOutQuart");
				e.preventDefault();
			});

		// Header horizontal
		// -------------------

			$('.sub-effect-fade .desk-menu ul li').hoverIntent(
				function(){
					$(this).children('ul').stop().fadeIn(300, "easeOutQuart").css('display','block');
				},
				function(){
					$(this).children('ul').stop().fadeOut(300, "easeOutQuart", function(){
						$(this).css('display','none');
					});
				}
			);

			$('.sub-effect-fade .cart-toggle').hoverIntent(
				function(){
					$(this).children('.cart-dropdown').stop().fadeIn(300, "easeOutQuart").css('display','block');
				},
				function(){
					$(this).children('.cart-dropdown').stop().fadeOut(300, "easeOutQuart", function(){
						$(this).css('display','none');
					});
				}
			);

			$('.sub-effect-slide .desk-menu ul li').hoverIntent(
				function(){
					$(this).children('ul').stop(true, true).slideDown(300, "easeOutQuart").css('display','block');
				},
				function(){
					$(this).children('ul').stop(true, true).slideUp(300, "easeOutQuart", function(){
						$(this).css('display','none');
					});
				}
			);

			$('.sub-effect-slide .cart-toggle').hoverIntent(
				function(){
					$(this).children('.cart-dropdown').stop(true, true).slideDown(300, "easeOutQuart").css('display','block');
				},	
				function(){
					$(this).children('.cart-dropdown').stop(true, true).slideUp(300, "easeOutQuart", function(){
						$(this).css('display','none');
					});
				}
			);

			$('.sub-effect-ghost .desk-menu ul li').hoverIntent(
				function(){
					$(this).children('ul').stop(true, true).animate({'margin-top':'0px','opacity':'1'}, 300, "easeOutQuart").css('display','block');
				},
				function(){
					$(this).children('ul').stop(true, true).animate({'margin-top':'40px','opacity':'0'}, 300, "easeOutQuart", function(){
						$(this).css('display','none');
					});
				}
			);

			$('.sub-effect-ghost .cart-toggle').hoverIntent(
				function(){
					$(this).children('.cart-dropdown').stop().animate({'margin-top':'0px','opacity':'1'}, 300, "easeOutQuart").css('display','block');
				},
				function(){
					$(this).children('.cart-dropdown').stop().animate({'margin-top':'40px','opacity':'0'}, 300, "easeOutQuart", function(){
						$(this).css('display','none');
					});
				}
			);

			var docElem = document.documentElement,
			header         = $( '.desk-fixed-true' ),
	        didScroll = false,
	        changeHeaderOn  = 500;

		    function init() {
		        window.addEventListener( 'scroll', function( event ) {
		            if( !didScroll ) {
		                didScroll = true;
		                scrollPage();
		            }
		        }, false );
		    }

		    function scrollPage() {
		        var sy = scrollY();

	    		if ( sy >= changeHeaderOn ) {
	        		header.addClass('fixed');
	        		setTimeout(function(){
	        			header.addClass('active');
	        		},400);
	        	} else {
	        		header
	        		.removeClass('active')
	        		.removeClass('fixed');
	        	}
		        
		        didScroll = false;
		    }

		    function scrollY() {
		        return window.pageYOffset || docElem.scrollTop;
		    }

		    init();

		    $('.header .search-toggle').on('click', function(){
		    	// $(this).toggleClass('icon-search2').toggleClass('icon-close');
				$('.header .search').fadeToggle(300);
			});

	})(jQuery);

/* SLIDER VIDEO PLAY
/*======================*/
	
	(function($){

		"use strict";

		$("#ninzio-slider .ninzio-slider").each(function(){
			var video = $(this).find('.slide-back-video');
			if (video.paused) {video.hide();}
		});

	})(jQuery);

/*  MISC
/*======================*/

	(function($){

		"use strict";

		var $genWrap        = $('#gen-wrap'),
			$sidebarToggle  = $('.sidebar-toggle'),
			$sidebarClose   = $('.sidebar-close'),
			$mainWidgetArea = $('.main-widget-area');

		$sidebarToggle.on('click',function(event){
			event.stopImmediatePropagation();
			$mainWidgetArea.toggleClass('animate');
		});

		$sidebarClose.on('click',function(event){
			event.stopImmediatePropagation();
			$mainWidgetArea.toggleClass('animate');
		});

		$genWrap.on('click',function(event){
			$mainWidgetArea.removeClass('animate');
		});

		setTimeout(function(){
			$('.lazy').addClass('in');
		},600);
		
		// Calendar
		var prev = $('.widget_calendar td#prev').attr('colspan','1'),
			next = $('.widget_calendar td#next').attr('colspan','1');

		$('.widget_calendar tbody td').each(function(){
			if($(this).children('a').length != 0){
				$(this).addClass('has-children');
			}
		});

		if (prev.children('a').length != 0) {
			prev.children('a').html("<span class='icon-arrow-left9'></span>");
		} else {
			prev.html("<span class='icon-arrow-left9'></span>");
		}

		if (next.children('a').length != 0) {
			next.children('a').html("<span class='icon-arrow-right9'></span>");
		} else {
			next.html("<span class='icon-arrow-right9'></span>");
		}

		$('.widget_calendar tfoot td.pad:not(#next, #prev)').attr('colspan','5');

		// Gallery
		$('.nz-gallery').each(function(){
			$(this).find('a').attr('title', $.trim($(this).find('.gallery-caption').text().replace( /[\s\n\r]+/g, ' ' )));
		});

		$('.widget_nav_menu ul li > a:not(:only-child)').append('<span class="toggle icon-plus4"></span>');

		$('.widget_nav_menu ul li a > span.toggle').on('click',function(e){
			if ($(this).parent().next('ul').length != 0) {
				$(this).parent().toggleClass('animate');
				$(this).parent().next('ul').stop().slideToggle(300, "easeOutQuart");
			};
			e.preventDefault();
		});

		$('.widget_photos_from_flickr .flickr_badge_image a')
		.append('<div class="ninzio-overlay"></div>');

		var login = $('.widget_reglog #login-form'),
			reg   = $('.widget_reglog #registration-form'),
			pass  = $('.widget_reglog #password-form');

		$('.widget_reglog input[type="submit"]').addClass('small');

		$('.pricing-table-button.button-3d').on('hover',
			function(){
				var $this = $(this);
				$this.css('box-shadow','0 2px '+$this.data('color'))
			},
			function(){
				var $this = $(this);
				$this.css('box-shadow','0 4px '+$this.data('color'))
			}
		)

		$('.pricing-table-button.button-ghost').on('hover',
			function(){
				var $this = $(this);
				$this.css('background-color',$this.data('color'))
			},
			function(){
				var $this = $(this);
				$this.css('background-color','transparent')
			}
		)

		$('.pricing-table-button.button-normal').on('hover',
			function(){
				var $this = $(this);
				$this.css('background-color',$this.data('colorhover'))
			},
			function(){
				var $this = $(this);
				$this.css('background-color',$this.data('color'))
			}
		)

		$('.nz-sl a').on('hover',
			function(){
				var $this = $(this);
				$this.css('background-color',$this.data('colorhover'))
			},
			function(){
				var $this = $(this);
				$this.css('background-color',$this.data('color'))
			}
		)

		$("a[href$='.jpg'],a[href$='.jpeg'],a[href$='.png'],a[href$='.gif'],a[href$='.svg']").each(function(){
			$(this).attr('title',$(this).children('img').attr('alt'));
		});

		$('.nz-carousel').each(function(){

			$("a[href$='.jpg'],a[href$='.jpeg'],a[href$='.png'],a[href$='.gif'],a[href$='.svg']").each(function(){
				$(this).attr('data-lightbox-gallery','nz-gallery3');
			});

		});

		$('.woocommerce .thumbnails a').attr('data-lightbox-gallery','gallery7');

		$('.woocommerce .product-det').each(function(){
			var $this = $(this);
				$this.find('a:empty').remove();
				var rating = $this.find('.woocommerce-product-rating');
				rating.clone().insertAfter($this.find('h3'));
				rating.remove();
		});

		$('.woocommerce .images img').each(function(){
			var $this = $(this);
			$this.wrap('<div class="nz-thumbnail"></div>')
			$this.parent().prepend('<div class="ninzio-overlay"></div>');
		});

		$('img[class*="wp-image"]').each(function(){
			var $this = $(this);
			if ($this.parents().is('a')) {
				$this.after( '<div class="ninzio-overlay"></div>');
			};
		});

	})(jQuery);

/*  CONTENT BOXES, 
	COLUMNS, 
	CLIENTS, 
	CAROUSEL, 
	PRICING TABLES, 
	PERSONS, 
	RECENT PROJECTS, 
	GALLERY
/*======================*/
	
	(function($){

		"use strict";

		function animateInView(container,child,delay){

			container.each(function(){

				var $this   = $(this);
				var child   = $this.children(child);
				var length  = child.length;
				var i       = 0;
				var timer   = '';

				function animation() {
					$(child[i]).addClass('active');
					i++;
					if (i == length ) {clearInterval(timer);}
				}

				$this.one('inview', function(event, isInView, visiblePartX, visiblePartY){
			    	if (isInView) {
						var timer = setInterval(animation, delay); 
			    	};
			    });
			});

		}

		animateInView($('.nz-row'), $('.col-animate-true'),250);
		animateInView($('.nz-recent-portfolio.grid[data-animate="true"] .nz-portfolio-posts'), $('.post'),150);
		animateInView($('.nz-recent-portfolio.masonry[data-animate="true"] .nz-portfolio-posts'), $('.post'),150);
		animateInView($('.nz-recent-portfolio.carousel[data-animate="true"] .nz-portfolio-posts'), $('.post'),250);
		animateInView($('.nz-recent-posts.masonry[data-animate="true"] .posts-inner'), $('.post'),150);
		animateInView($('.nz-recent-posts.carousel[data-animate="true"] .posts-inner'), $('.post'),250);
		animateInView($('.nz-gallery:not(.none)'), $('.gallery-item'),150);
		animateInView($('.nz-content-box.fade'), $('.nz-box'),150);
		animateInView($('.nz-content-box.scale'), $('.nz-box'),250);
		animateInView($('.nz-clients.fade'), $('.client'),150);
		animateInView($('.nz-clients.scale'), $('.client'),250);
		animateInView($('.nz-testimonials.fade'), $('.testimonial'),150);
		animateInView($('.nz-testimonials.scale'), $('.testimonial'),250);
		animateInView($('.nz-carousel.fade'), $('.item'),150);
		animateInView($('.nz-carousel.scale'), $('.item'),250);
		animateInView($('.nz-pricing-table.fade'), $('.column'),150);
		animateInView($('.nz-pricing-table.scale'), $('.column'),250);
		animateInView($('.nz-persons.fade'), $('.person'),150);
		animateInView($('.nz-persons.scale'), $('.person'),250);
		animateInView($('.animation-true .blog-post'), $('.post'),150);
		animateInView($('.animation-true .nz-portfolio-posts'), $('.portfolio'),150);
		animateInView($('.animation-true .products'), $('.product'),150);
		
	})(jQuery);

/*  PARALLAX
/*======================*/

	(function($){

		"use strict";

		function parallax(target, offset){
	    	var $window = $(window);

	    	$.each(target,function(){
				var $this = $(this);
			    $(window).scroll(function() {
					var yPos   = (offset) ? Math.round((($window.scrollTop()-$this.offset().top) / 2.5)) : Math.round(($window.scrollTop() / 2.5));
					$this.find('.parallax-container').css({
						'-webkit-transform':'translateY('+yPos + 'px)',
						'-moz-transform':'translateY('+yPos + 'px)',
						'transform':'translateY('+yPos + 'px)'
					});  
				}); 
			})
		}

		parallax($('#ninzio-slider[data-parallax="true"]:not([data-fixed="true"]) .ninzio-slider'), false);
		parallax($('.nz-section[data-parallax="true"]'),true);
		parallax($('.rich-header[data-parallax="true"]'),true);
		

	})(jQuery);

/*	SEPARATORS
/*======================*/

	(function($){

		"use strict";

		$('.i-separator').each(function(){

			var $this = $(this);

			if ($this.data('target') !== undefined) {

				$this.on('click.smoothscroll', function (event) {
				    event.preventDefault();
				    var target = $this.data('target');
				    $('html, body').stop().animate({'scrollTop': $(target).offset().top}, 500, function () {
				        window.location.hash = target;
				    });
				});

			};
			
		})
		;
	})(jQuery);

/*	SECTIONS
/*======================*/

	(function($){

		"use strict";

		var section = $('.nz-section');

		function backgroundScroll(el, speed,direction){
	    		var size = (direction === "horizontal") ? el.data('img-width') : el.data('img-height');
	    		if (direction === "horizontal") {
					el.animate({'background-position-x' :size}, {duration:speed,easing:'linear',complete:function(){el.css('background-position-x','0');backgroundScroll(el, speed,direction);}});
	    		} else if (direction === "vertical") {
	    			el.animate({'background-position-y' :size}, {duration:speed,easing:'linear',complete:function(){el.css('background-position-y','0');backgroundScroll(el, speed,direction);}});
	    		};
		}

	    section.each(function(){

	    	var $this = $(this);

		    if ($this.hasClass('animate-true')) {
		    	if ($this.hasClass('horizontal')) {
		    		backgroundScroll($this, $this.data('animation-speed'), 'horizontal');
		    	} else if ($this.hasClass('vertical')) {
		    		backgroundScroll($this, $this.data('animation-speed'), 'vertical');
		    	};
	    	}

	    });


	})(jQuery);

/*	SMOOTH SCROLL
/*======================*/

	(function($){

		"use strict";

		function init() {
			window.addEventListener( 'scroll', function( event ) {
			    if( !didScroll ) {
			        didScroll = true;
			        scrollPage();
			    }
			}, false );
		}

		function scrollPage() {
			var sy = scrollY();
			if ( sy >= activateOn ) {
				top.addClass('animate')
			} else {
				top.removeClass('animate')
			}

			didScroll = false;
		}

		function scrollY() {
			return window.pageYOffset || docElem.scrollTop;
		}

		var top         = $('#top'),
			docElem     = document.documentElement,
			didScroll   = false,
			activateOn  = 700;

		top.on('click.smoothscroll', function (event) {
			event.preventDefault();
			var target = this.hash;
			$('html, body').stop().animate({
			    'scrollTop': $(target).offset().top
			}, 800, function () {
			    window.location.hash = target;
			});
		});

		init();

	})(jQuery);

/*  ICON PROGRESS BAR
/*======================*/
	
	(function($){

		"use strict";

		$('.nz-icon-progress').each(function(){

			var $this = $(this);
			var dataColor = $this.data('color');
			var dataActive = $this.data('active');
			var icons = $this.find('.icon');
			var i = 0;

			$this.one('inview', function(event, isInView, visiblePartX, visiblePartY){
			    if (isInView) {
					var timer = setInterval(function(){
						$(icons[i]).css({backgroundColor:dataColor});
						i++;
						if (i == dataActive) {clearInterval(timer);}
					}, 125);
		    	};
		    });
		})

	})(jQuery);

/*	GMAP
/*======================*/
	
	(function($){

		"use strict";

		var styleArray = '';

		$('.map').each(function(){

			var $this     = $(this),
				x         = ($this.attr('data-x')) ? $this.data('x') : 53.385873,
				y         = ($this.attr('data-y')) ? $this.data('y') : -1.471471,
				z         = ($this.attr('data-zoom')) ? parseInt($this.data('zoom')) : 18,
				t         = ($this.attr('data-type')) ? $this.attr('data-type') : 'roadmap',
				mapTypeId = "roadmap";

				switch(t){
					case 'roadmap':
					case 'black':
					case 'grey':
					case 'routexl':
				        mapTypeId = "roadmap";
				        break;
				    case 'satellite':
				        mapTypeId = "satellite";
				        break;
				    case 'hybrid':
				        mapTypeId = "hybrid";
				    case 'terrain':
				        mapTypeId = "terrain";
				        break;
				}

				if (t === 'black') {
					console.log('styleArray');
					styleArray = [{"stylers":[{"hue":"#ff1a00"},{"invert_lightness":true},{"saturation":-100},{"lightness":33},{"gamma":0.5}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#2D333C"}]}];
				} else if(t === 'grey') {
					styleArray = [{"featureType":"all","stylers":[{"saturation":-100},{"gamma":0.5}]}];
				}  else if(t === 'routexl') {
					styleArray = [{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"on"},{"saturation":-100},{"lightness":20}]},{"featureType":"road","elementType":"all","stylers":[{"visibility":"on"},{"saturation":-100},{"lightness":40}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"on"},{"saturation":-10},{"lightness":30}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"visibility":"simplified"},{"saturation":-60},{"lightness":10}]},{"featureType":"landscape.natural","elementType":"all","stylers":[{"visibility":"simplified"},{"saturation":-60},{"lightness":60}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"},{"saturation":-100},{"lightness":60}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"},{"saturation":-100},{"lightness":60}]}];
				}


				mapTypeId = mapTypeId.toUpperCase();

			var options = {
				center     : new google.maps.LatLng(x, y),
				zoom       : z, 
				mapTypeId  : google.maps.MapTypeId.mapTypeId,
				styles     : styleArray,
				scrollwheel: false
			};
			var map    = new google.maps.Map(document.getElementById($this.attr('id')), options);
			if ($this.attr('data-marker')) {
				var marker = new google.maps.Marker({ position: new google.maps.LatLng(x,y), map: map, icon: $this.attr('data-marker')});
			};

			if (marker.getAnimation() != null) {marker.setAnimation(null);} else {marker.setAnimation(google.maps.Animation.BOUNCE);}
		});

	})(jQuery);

/*  ALERT MESSAGES
/*======================*/
	
	(function($){

		"use strict";

		var alert = $('.alert');
			
			alert.each(function(){
				var $this = $(this);
				$this.find('.close-alert').on('click', function(){
					$this.fadeOut(200);
				})
			});

	})(jQuery);

/*  PROGRESS BAR
/*======================*/
	
	(function($){

		"use strict";

		$(".nz-progress").each(function() {

			var $this = $(this);
			var line = $this.find('.nz-line');

			function progressLine(){

				line.each(function(){
					var $self = $(this).addClass('visible');
					var percentage = $self.data('percentage');
					$self
					.width(0)
					.animate({width: percentage+'%'}, 2500, 'easeOutQuart')
					.fromTo({from: 0, to: percentage, speed: 2500});
				});
				
			}
			
			$this.one('inview', function(event, isInView, visiblePartX, visiblePartY){
			    	if (isInView) {
		    		setTimeout(function(){
		    			progressLine();
		    		},250)
		    	};
		    });
				
		});

	})(jQuery);

/*  CIRLCE PROGRESS
/*======================*/
	
	(function($){

		"use strict";

		$('.nz-circle-progress').each(function(){

			var $self = $(this);
			var circleP = $self.find(".nz-circle");

			function circleProgress(){

				circleP.each(function(){

					var $this      = $(this).animate({'opacity':'1'}, 300),
						child      = $this.find('.circle'),
						parent     = $this.parent(),
						trackColor = child.data('track'),
						barColor   = child.data('bar'),
						percent    = child.data('percent'),
						lineWidth  = 20,
						size = 220;

					child.easyPieChart({
						barColor: barColor,
						trackColor: (typeof trackColor == "undefined") ? "#eaeaea" : trackColor,
						lineCap:'round',
						lineWidth:lineWidth,
						size:size,
						animate:'1500',
						scaleColor: false
					});

				});

			}

			$self.one('inview', function(event, isInView, visiblePartX, visiblePartY){
			    	if (isInView) {
		    		setTimeout(function(){
		    			circleProgress();
		    		},200);
		    	};
		    });

		});

	})(jQuery);

/*  TABS
/*======================*/
	
	(function($){

		"use strict";

		$('.nz-tabs').each(function(){

			var $this = $(this),
				tabs = $this.find('.tab'),
				tabsQ = tabs.length,
				tabsContent = $this.find('.tab-content'),
				tabsDefaultWidth  = 0,
				tabsDefaultHeight = 0;

			tabs.wrapAll('<div class="tabset nz-clearfix"></div>');
			tabsContent.wrapAll('<div class="tabs-container nz-clearfix"></div>');

			var tabSet = $this.find('.tabset');

				if(!tabs.hasClass('active')){
					tabs.first().addClass('active');
				}
				
				tabs.each(function(){
					tabsDefaultWidth += $(this).outerWidth();
					tabsDefaultHeight += $(this).outerHeight();
				});

				function OverflowCorrection(){

					if(tabsDefaultWidth >= $this.outerWidth()  && $this.hasClass('horizontal')){
						$this.addClass('tab-full');
					} else {
						$this.removeClass('tab-full');
					}

				}

				if(tabsQ >= 2){

					tabs.on('click', function(){
						var $self = $(this);
						
						if(!$self.hasClass("active")){

							$self.addClass("active").siblings().removeClass("active");
							tabsContent.hide();
							tabsContent.eq($self.index()).fadeIn();
						}
						
					});
				}

				if($this.hasClass('vertical')){
					$this.find('.tabs-container').css("min-height",tabsDefaultHeight + (tabs.length - 1));
				}

				OverflowCorrection();

				$(window).on('resize', OverflowCorrection);			

		});

	})(jQuery);

	(function($){

		"use strict";

		$('.wpb_tabs').each(function(){

			var $this = $(this),
				tabs = $this.find('.wpb_tabs_nav li'),
				tabsQ = tabs.length,
				tabSet = $this.find('.wpb_tabs_nav'),
				tabsDefaultWidth  = 0,
				tabsDefaultHeight = 0,
				tabsContent = $this.find('.wpb_tab');

				$this.find('.wpb_tab').wrapAll('<div class="tabs-container"/>');

				if(!tabs.hasClass('active')){
					tabs.first().addClass('active');
				}

				tabs.find('a').on('click',function(e){
					e.preventDefault();
				});
				
				tabs.each(function(){
					tabsDefaultWidth += $(this).outerWidth();
					tabsDefaultHeight += $(this).outerHeight();
				});

				function OverflowCorrection(){

					if(tabsDefaultWidth >= $this.outerWidth()){
						$this.addClass('tab-full');
					} else {
						$this.removeClass('tab-full');
					}

				}

				if(tabsQ >= 2){

					tabs.on('click', function(){
						$self = $(this);

						if(!$self.hasClass("active")){

							$self.addClass("active").siblings().removeClass("active");
							tabsContent.hide();
							tabsContent.eq($self.index()).fadeIn();
						}
						
					});
				}

				OverflowCorrection();

				$(window).on('resize', OverflowCorrection);			

		});

	})(jQuery);

/*  ACCORDION
/*======================*/
	
	(function($){

		"use strict";

		$('.nz-accordion ').each(function(){
			var $this = $(this),
				title = $this.find('.toggle-title'),
				content =  $this.find('.toggle-content');

				if($this.data('collapsible') == "yes"){
					$this.find('.active:not(:first)').removeClass("active");
				}

				content.hide();

				$this.find('.toggle-title.active').next().show();
				$this.find('.toggle-title.active .arrow').removeClass('icon-plus4').addClass('icon-minus4');

				title.on('click', function(){

					var $self = $(this);
					var $selfContent = $self.next();
			
					if($this.data('collapsible') == "yes"){

						if(!$self.hasClass('active')){

							$self.addClass("active").siblings().removeClass("active");
							content.slideUp(150);
							$selfContent.slideDown(150);

							$self.find('.arrow').removeClass('icon-plus4').addClass('icon-minus4');

							$self.siblings().find('.arrow').addClass('icon-plus4').removeClass('icon-minus4');
						}

					} else {

						if(!$self.hasClass('active')){

							$self.addClass("active");
							$selfContent.stop().slideDown(150);
							$self.find('.arrow').removeClass('icon-plus4').addClass('icon-minus4');

						} else {

							$self.removeClass("active");
							$selfContent.stop().slideUp(150);
							$self.find('.arrow').addClass('icon-plus4').removeClass('icon-minus4');

						}

					}

				});

		});

	})(jQuery);

/*  COUNTERS
/*======================*/
	
	(function($){

		"use strict";

		$('.nz-counter').each(function(){

			var $self = $(this),
				count = $self.find('.count-value').text("0");

			function counter(){
				count.each(function(){
					var $this = $(this);
					$this.fromTo({from: 0, to: $this.data('value'), speed: 2000});
				})
			}

			$self.one('inview', function(event, isInView, visiblePartX, visiblePartY){
			    if (isInView) {
		    		setTimeout(function(){
		    			counter();
		    		}, 250)
		    	};
		    });

		});

	})(jQuery);

/*  WOOCOMMERCE
/*======================*/

	(function($){

		"use strict";

		$('.woocommerce .products .product').each(function(){

			var product         = $(this);
			var addToCard       = product.find('.add_to_cart_button');
			var productProgress = product.find('.shop-loader');

			if (!addToCard.hasClass('added')) {

				addToCard.on('click',function(){

					var $this = $(this);

					$this.addClass('no-icon');

					productProgress.fadeIn(250,function(){
						var $thisProgress = $(this);

						setTimeout(function(){
							$thisProgress.fadeOut(250,function(){
								$this.addClass('added');
							});
						}, 500);

					})
					
				})
			};
		});

		var wooTab = $('.woocommerce-tabs');
		var tabs   = wooTab.find('.tabs > li');
		var tabsDefaultWidth  = 0;
		
		tabs.each(function(){
			tabsDefaultWidth += $(this).outerWidth() + 4;
		});

		function OverflowCorrection(){

			if(tabsDefaultWidth >= wooTab.outerWidth()){
				wooTab.addClass('tab-full');
			} else {
				wooTab.removeClass('tab-full');
			}

		}
		
		OverflowCorrection();
		$(window).on('resize', OverflowCorrection);

	})(jQuery);

/*  EXTERNAL PLUGINS
/*======================*/
	
	(function($){

		"use strict";

		/*  TIMER
		/*-----------------------*/

			$('.nz-timer').each(function(){
				
				var $this        = $(this),
					endDate      = $this.data('enddate'),
					daysLabel    = $this.data('days'),
					minLabel     = $this.data('minutes'),
					hoursLabel   = $this.data('hours'),
					secLabel     = $this.data('seconds');

				$(this).countdown({
		          date: endDate,
		          render: function(data) {
		            $this.html("<div class='timer-item timer-days'><div class='timer-item-wrap'><span class='days'>" + this.leadingZeros(data.days, 3) + "</span><span class='label'>"+daysLabel+"</span></div></div>" + "<div class='timer-item timer-hours'><div class='timer-item-wrap'><span class='hours'>" + this.leadingZeros(data.hours, 2) + "</span><span class='label'>"+hoursLabel+"</span></div></div>" + "<div class='timer-item timer-min'><div class='timer-item-wrap'><span class='min'>" + this.leadingZeros(data.min, 2) + "</span><span class='label'>"+minLabel+"</span></div></div>" + "<div class='timer-item timer-sec'><div class='timer-item-wrap'><span class='sec'>" + this.leadingZeros(data.sec, 2) + "</span><span class='label'>"+secLabel+"</span></div></div>");
		          }
		        });
			});

	    /*  NINZIO SLIDER
	    /*-----------------------*/

	    	$('#ninzio-slider').NinzioSlider();

    	/*  CUSTOM SCROLL
		/*-----------------------*/

			$('.main-widget-area').perfectScrollbar({
				suppressScrollX:true,
				includePadding:true
			});

		/*  NIVOLIGHTBOX
		/*-----------------------*/

			if(Modernizr.mq("only screen and (min-width: 1024px)")){
				$("a").has('img').nivoLightbox({
					effect: 'fadeScale',
				    theme: 'default', 
				    keyboardNav: true, 
				    clickOverlayToClose: true, 
				    errorMessage: 'The requested content cannot be loaded. Please try again later.' 
				});

				$('.nz-gallery').each(function(){
					$(this).find('a[data-lightbox-gallery="gallery1"]').nivoLightbox({
						effect: 'fadeScale',
					    theme: 'default', 
					    keyboardNav: true, 
					    clickOverlayToClose: true, 
					    errorMessage: 'The requested content cannot be loaded. Please try again later.' 
					});
				});

			}



		/*  CAROUSEL
		/*-----------------------*/

			$(".nz-carousel").each(function(){

				var $this    = $(this),
					$col     = $this.data('columns'),
					$auto    = $this.data('autoplay'),
					$col1024 = ($col < 3) ? 2 : 3;

				$this.owlCarousel({
 
				    items :$col,
				    itemsDesktop : [1280,$col],
				    itemsDesktopSmall : [1024,$col1024],
				    itemsTablet: [768,2],
				    itemsTabletSmall: [640,1],
				    itemsMobile : [480,1],
				    singleItem : false,
				 
				    //Basic Speeds
				    slideSpeed : 200,
				    paginationSpeed : 800,
				    rewindSpeed : 1000,
				 
				    //Autoplay
				    autoPlay : $auto,
				    stopOnHover : true,
				 
				    // Navigation
				    navigation : false,
				    navigationText : ["prev","next"],
				    rewindNav : true,
				    scrollPerPage : false,
				 
				    //Pagination
				    pagination : true,
				    paginationNumbers: false,
				 
				    // Responsive 
				    responsive: true,
				    responsiveRefreshRate : 200,
				    responsiveBaseWidth: window
				    
				});
			});

			$(".nz-clients").each(function(){

				var $this    = $(this),
					$col     = $this.data('columns'),
					$auto    = $this.data('autoplay'),
					$col1024 = ($col < 3) ? 2 : 3;

				$this.owlCarousel({
 
				    items :$col,
				    itemsDesktop : [1280,$col],
				    itemsDesktopSmall : [1024,$col1024],
				    itemsTablet: [768,2],
				    itemsTabletSmall: [640,1],
				    itemsMobile : [480,1],
				    singleItem : false,
				 
				    //Basic Speeds
				    slideSpeed : 200,
				    paginationSpeed : 800,
				    rewindSpeed : 1000,
				 
				    //Autoplay
				    autoPlay : $auto,
				    stopOnHover : true,
				 
				    // Navigation
				    navigation : true,
				    navigationText : ["",""],
				    rewindNav : true,
				    scrollPerPage : false,
				 
				    //Pagination
				    pagination : false,
				    paginationNumbers: false,
				 
				    // Responsive 
				    responsive: true,
				    responsiveRefreshRate : 200,
				    responsiveBaseWidth: window,
				});
			});

			$(".nz-testimonials").each(function(){

				var $this    = $(this),
					$col     = $this.data('columns'),
					$auto    = $this.data('autoplay'),
					$col1024 = ($col < 3) ? 2 : 3;

				$this.owlCarousel({
 
				    items :$col,
				    itemsDesktop : [1280,$col],
				    itemsDesktopSmall : [1024,$col1024],
				    itemsTablet: [768,2],
				    itemsTabletSmall: [640,1],
				    itemsMobile : [480,1],
				    singleItem : false,
				 
				    //Basic Speeds
				    slideSpeed : 200,
				    paginationSpeed : 800,
				    rewindSpeed : 1000,
				 
				    //Autoplay
				    autoPlay : $auto,
				    stopOnHover : true,
				 
				    // Navigation
				    navigation : true,
				    navigationText : ["",""],
				    rewindNav : true,
				    scrollPerPage : false,
				 
				    //Pagination
				    pagination : false,
				    paginationNumbers: false,
				 
				    // Responsive 
				    responsive: true,
				    responsiveRefreshRate : 200,
				    responsiveBaseWidth: window,
				});
			});

			$(".nz-ss").each(function(){

				var $this    = $(this),
					$auto    = $this.data('autoplay'),
					$nav     = $this.data('nav'),
					$bull    = $this.data('bullets');

				$this.owlCarousel({
 
				    singleItem : true,
				 
				    //Basic Speeds
				    slideSpeed : 200,
				    paginationSpeed : 800,
				    rewindSpeed : 1000,
				 
				    //Autoplay
				    autoPlay : $auto,
				    stopOnHover : true,
				 
				    // Navigation
				    navigation : $nav,
				    navigationText : ["<span class='icon-arrow-left10'></span>","<span class='icon-uniE91B'></span>"],
				    rewindNav : true,
				    scrollPerPage : false,
				 
				    //Pagination
				    pagination : $bull,
				    paginationNumbers: false,
				 
				    // Responsive 
				    responsive: true,
				    responsiveRefreshRate : 200,
				    responsiveBaseWidth: window,
				    autoHeight:true
				    
				});
			});

			$(".nz-tweets").each(function(){

				var $this    = $(this),
					$auto    = $this.data('autoplay');

				$this.find('ul').owlCarousel({
 
				    singleItem : true,
				 
				    //Basic Speeds
				    slideSpeed : 200,
				    paginationSpeed : 800,
				    rewindSpeed : 1000,
				 
				    //Autoplay
				    autoPlay : $auto,
				    stopOnHover : true,
				 
				    // Navigation
				    navigation : false,
				 
				    //Pagination
				    pagination : true,
				    paginationNumbers: false,
				 
				    // Responsive 
				    responsive: true,
				    responsiveRefreshRate : 200,
				    responsiveBaseWidth: window,
				});
			});

			$('.nz-recent-portfolio.carousel').each(function(){

				var $this = $(this),
					$col  = $this.data('columns'),
					$auto = $this.data('autoplay');

				$this.find('.nz-portfolio-posts').owlCarousel({
 
				    items :$col,
				    itemsDesktop : [1280,$col],
				    itemsDesktopSmall : [1024,3],
				    itemsTablet: [768,2],
				    itemsTabletSmall: [640,1],
				    itemsMobile : [480,1],
				    singleItem : false,
				    slideSpeed : 200,
				    paginationSpeed : 800,
				    rewindSpeed : 1000,
				    autoPlay : $auto,
				    stopOnHover : true,
				    navigation : false,
				    pagination : false,
				    responsive: true,
				    responsiveRefreshRate : 200,
				    responsiveBaseWidth: window,
				});
			});

			$('.nz-recent-posts.carousel').each(function(){

				var $this    = $(this),
					$col     = $this.data('columns'),
					$auto    = $this.data('autoplay');

				$this.find('.posts-inner').owlCarousel({
					items :$col,
				    itemsDesktop : [1280,$col],
					itemsDesktopSmall : [1024,3],
					itemsTablet: [768,2],
					itemsTabletSmall: [640,1],
					itemsMobile : [480,1],
					singleItem : false,
					slideSpeed : 200,
					paginationSpeed : 800,
					rewindSpeed : 1000,
					autoPlay : $auto,
					stopOnHover : true,
					navigation : true,
					navigationText : ["",""],
					pagination : false,
				    paginationNumbers: false,
					responsive: true,
					responsiveRefreshRate : 200,
					responsiveBaseWidth: window
				});
			});

			$(".nz-gallery.carousel").each(function(){

				var $this    = $(this),
					$col     = $this.data('columns'),
					$auto    = $this.data('autoplay'),
					$col1024 = ($col < 3) ? 2 : 3;

				$this.owlCarousel({
 
				    items :$col,
				    itemsDesktop : [1280,$col],
				    itemsDesktopSmall : [1024,$col1024],
				    itemsTablet: [768,2],
				    itemsTabletSmall: [640,1],
				    itemsMobile : [480,1],
				    singleItem : false,
				 
				    //Basic Speeds
				    slideSpeed : 200,
				    paginationSpeed : 800,
				    rewindSpeed : 1000,
				 
				    //Autoplay
				    autoPlay : $auto,
				    stopOnHover : true,
				 
				    // Navigation
				    navigation : false,
				    navigationText : ["",""],
				    rewindNav : true,
				    scrollPerPage : false,
				 
				    //Pagination
				    pagination : true,
				    paginationNumbers: false,
				 
				    // Responsive 
				    responsive: true,
				    responsiveRefreshRate : 200,
				    responsiveBaseWidth: window
				    
				});
			});

		/*  SLICK CAROUSEL
		/*-----------------------*/

			$('.nz-slick-carousel').each(function(){
				var $this             = $(this),
					dataAutoplay      = $this.data('autoplay'),
					dataAutoplaySpeed = $this.data('autoplayspeed');

				$this.slick({
					centerMode: true,
					speed:500,
					easing:"easeOutQuart",
					centerPadding: '250px',
					slidesToShow: 1,
					autoplay:dataAutoplay,
					autoplaySpeed:dataAutoplaySpeed,
					prevArrow:"<span class='icon-arrow-left9 slick-prev'></span>",
					nextArrow:"<span class='icon-arrow-right9 slick-next'></span>",
					responsive: [
						{
					      breakpoint: 1920,
					      settings: {
					        centerPadding: '450px',
					      }
					    },
						{
					      breakpoint: 1600,
					      settings: {
					        centerPadding: '350px',
					      }
					    },
					    {
					      breakpoint: 1366,
					      settings: {
					        centerPadding: '250px',
					      }
					    },
						{
					      breakpoint: 1280,
					      settings: {
					        centerPadding: '200px',
					      }
					    },
						{
					      breakpoint: 1024,
					      settings: {
					        centerPadding: '150px',
					      }
					    },
						{
					      breakpoint: 768,
					      settings: {
					        centerPadding: '100px',
					      }
					    },
						{
					      breakpoint: 640,
					      settings: {
					        centerPadding: '100px',
					      }
					    },
						{
					      breakpoint: 480,
					      settings: {
					        centerPadding: '80px',
					      }
					    },
					    {
					      breakpoint: 320,
					      settings: {
					        centerPadding: '50px',
					      }
					    }
					]
				});
			});

		/*  FLEXSLIDER
		/*-----------------------*/

			$('.nz-media-slider').each(function(){

				var $this = $(this);

				$this.flexslider({
					animation: $this.data('effect'),
					smoothHeight:false,
					touch: true,
					animationSpeed: 450,
					controlNav:$this.data('bullets'),
					slideshow:$this.data('autoplay'),
					directionNav:$this.data('navigation'),
					pauseOnHover: true,
					prevText: "",
					nextText: "",
				});

			});

			$('.post-gallery').flexslider({
				animation:'fade',
				smoothHeight:false,
				touch: true,
				animationSpeed: 450,
				controlNav:false,
				slideshow:false,
				directionNav:true,
				pauseOnHover: true,
				prevText: "",
				nextText: "",
			});

		/*  SHUFFLE
		/*-----------------------*/


			var portLoopMasonrySizer = $('.loop .nz-portfolio-posts > .post');
			imagesLoaded( $('.loop .nz-portfolio-posts'), function() {
				$('.loop .port-layout:not(.full) .nz-portfolio-posts').shuffle({
					itemSelector: '.portfolio',
					sizer:portLoopMasonrySizer,
					gutterWidth:0,
					speed: 300,
					easing: 'ease-out'
				});
			});

			var blogLoopMasonrySizer = $('.loop .blog-post > .post');
			imagesLoaded( $('.loop .blog-post'), function() {
				$('.loop .blog-layout:not(.full):not(.standard) .blog-post').shuffle({
					itemSelector: '.post',
					sizer:blogLoopMasonrySizer,
					gutterWidth:0,
					speed: 300,
					easing: 'ease-out' 
				});
			});




			var portfolioGrid    = $('.nz-recent-portfolio.grid'),
				portfolioMasonry = $('.nz-recent-portfolio.masonry'),
				gridSizer        = portfolioGrid.find('.post'),
			    masonrySizer     = portfolioMasonry.find('.post');

			imagesLoaded( portfolioMasonry, function() {
				portfolioMasonry.find('.nz-portfolio-posts').shuffle({
					itemSelector: '.post',
					sizer:masonrySizer,
					gutterWidth: 20,
					speed: 300,
					easing: 'ease-out'
				});
			});

			imagesLoaded( portfolioGrid, function() {
				portfolioGrid.find('.nz-portfolio-posts').shuffle({
					itemSelector: '.post',
					sizer:gridSizer,
					gutterWidth: 20,
					speed: 300,
					easing: 'ease-out'
				});
			});

			var blogMasonrySizer = $('.nz-recent-posts.masonry .post');

			imagesLoaded( $('.nz-recent-posts.masonry'), function() {
				$('.nz-recent-posts.masonry').find('.posts-inner').shuffle({
					itemSelector: '.post',
					sizer:blogMasonrySizer,
					gutterWidth: 20,
					speed: 300,
					easing: 'ease-out'
				});
			});


			var shopLoopMasonrySizer = $('ul.products > .product');
			imagesLoaded( $('ul.products'), function() {
				$('ul.products').shuffle({
					itemSelector: '.product',
					sizer:blogLoopMasonrySizer,
					gutterWidth:0,
					speed: 300,
					easing: 'ease-out' 
				});
			});

			function portfolioFilter($container){
				if ($container.hasClass('filter-true')) {
					$container.find('.nz-portfolio-filter .filter').on('click', function() {
						var $this    = $(this),
							isActive = $this.hasClass( 'active' ),
							group    = $this.data('group');
							if ( !isActive ) {$('.nz-portfolio-filter .active').removeClass('active');}
							$this.toggleClass('active');
							$container.find('.nz-portfolio-posts').shuffle( 'shuffle', group );
				    });
				};
			}

			portfolioFilter(portfolioMasonry);
			portfolioFilter(portfolioGrid);
			portfolioFilter($('.for-filter'));

	})(jQuery);