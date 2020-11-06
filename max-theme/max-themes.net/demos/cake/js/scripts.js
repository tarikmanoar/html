(function($){

    "use strict";
	
    /* ---------------------------------------------------------------------------
	 * Sticky header
	 * --------------------------------------------------------------------------- */
    var mfn_header_height = $('#Top_bar').innerHeight();
	function mfn_sticky(){
		if( $('body').hasClass('sticky-header') ){	
			var start_y = mfn_header_height;
			var window_y = $(window).scrollTop();
	
			if( window_y > start_y ){
				if( ! ($('#Top_bar').hasClass('is-sticky'))) {
					$('.header_placeholder').css('margin-top', mfn_header_height);
					$('#Top_bar')
						.addClass('is-sticky')
						.css('top',-60)
						.animate({
							'top': $('#wpadminbar').innerHeight()
						},300);
				}
			}
			else {
				if($('#Top_bar').hasClass('is-sticky')) {
					$('.header_placeholder').css('margin-top',0);
					$('#Top_bar')
						.removeClass('is-sticky')
						.css('top', 0);
				}	
			}
		}
	}
	
    /* ---------------------------------------------------------------------- */
	/*	Contact Map
	/* ---------------------------------------------------------------------- */
	var contact = {"lat":"25.281219100000000000", "lon":"55.393181799999980000"}; //Change a map coordinate here!

	try {
		$('#map').gmap3({
		    action: 'addMarker',
		    latLng: [contact.lat, contact.lon],
		    map:{
		    	center: [contact.lat, contact.lon],
		    	zoom: 14
		   		},
		    },
		    {action: 'setOptions', args:[{scrollwheel:false}]}
		);
	} catch(err) {

	}
	
	/* --------------------------------------------------------------------------------------------------------------------------
	 * $(document).ready
	 * ----------------------------------------------------------------------------------------------------------------------- */
	$(document).ready(function(){
		
		/* ---------------------------------------------------------------------------
		 * Content sliders
		 * --------------------------------------------------------------------------- */
		mfnSliderPortfolio();
		
		
		/* ---------------------------------------------------------------------------
		 * Testimonials
		 * --------------------------------------------------------------------------- */
		var owl_testimonials = $("ul.testimonials-slider").owlCarousel({
			autoPlay			: 6000,
			goToFirst			: true,
			stopOnHover			: true,
			items				: 1,
			itemsDesktop		: false,
			itemsDesktopSmall	: false,
			itemsTablet			: false,
			itemsMobile			: false,
			
			startDragging			: function(){
				owl_testimonials.find('.owl-pagination').fadeOut(200);
			},		
			beforeMove			: function(){
				owl_testimonials.find('.owl-pagination').fadeOut(200);
			},		
			afterMove			: function(){
				owl_testimonials.find('.owl-pagination').delay(500).fadeIn(200);
			}		
		});
		
		
		/* ---------------------------------------------------------------------------
		 * WP Gallery
		 * --------------------------------------------------------------------------- */
		$('.gallery-icon').addClass('has_hover')
			.children('a')
				.attr('rel', 'prettyPhoto[gallery]')
				.addClass('photo_mask')
				.append('<div class="mask"></div><span class="button_image more"><i class="icon-eye"></i></span>')
				.children('img' )
					.css('height', 'auto')
					.css('width', '100%');
		
		
		/* ---------------------------------------------------------------------------
		 * PrettyPhoto
		 * --------------------------------------------------------------------------- */
		if( $(window).width() >= 768 ){
			$('a[rel^="prettyPhoto"], .prettyphoto').prettyPhoto({
				show_title		: false,
				deeplinking		: false,
				social_tools	: false
			});
		}
				
	
		/* ---------------------------------------------------------------------------
		 * Add Classes
		 * --------------------------------------------------------------------------- */		
		// highlight sections ----------------------------------
		$('.highlight-left .column:first-child, .highlight-right .column:last-child').addClass('dark');
		
		
		/* ---------------------------------------------------------------------------
		 * Responsive menu
		 * --------------------------------------------------------------------------- */
		$('.responsive-menu-toggle').click(function(e){
			e.preventDefault();
			$(this).toggleClass('active');
			$('#Header #menu').stop(true,true).slideToggle(200);
		});
		
		
		/* ---------------------------------------------------------------------------
		 * Main menu
		 * --------------------------------------------------------------------------- */
		
		// Muffin Menu -------------------------------
		$("#Header #menu > ul").muffingroup_menu({
			arrows	: true
		});
		
		mfn_sticky();

		
		/* ---------------------------------------------------------------------------
		 * Header search
		 * --------------------------------------------------------------------------- */
		$("#Header #searchform .icon").click(function(e){
			e.preventDefault();
			
			if( $(this).parent().hasClass('focus') ){
				
				$(this).fadeOut(200)
					.siblings('.icon_search').fadeIn(200)
					.siblings('input.field').fadeOut(200)
						.parent().removeClass('focus');
				$('#Header #menu .menu').delay(200).fadeIn(200);
				
			} else {

				var menuW = $('#Header #menu').width();
				$('#Header #menu .menu').fadeOut(200);
				$(this).fadeOut(200)
					.siblings('.icon_close').fadeIn(200)
					.siblings('input.field').width(menuW).delay(200).fadeIn(200)
						.parent().addClass('focus');
				
			}
		});
		
		
		/* ---------------------------------------------------------------------------
		 * Paralex Backgrounds
		 * --------------------------------------------------------------------------- */
		var ua = navigator.userAgent,
		isMobileWebkit = /WebKit/.test(ua) && /Mobile/.test(ua);
		if( ! isMobileWebkit && $(window).width() >= 768 ){
			$.stellar({
				horizontalScrolling	: false,
				responsive			: true
			});
		}
	
		/* ---------------------------------------------------------------------- */
	    /*  Contact Form
	    /* ---------------------------------------------------------------------- */

	    var submitContact = $('#submit_contact'),
	        message = $('#msg');

	    submitContact.on('click', function(e){
	        e.preventDefault();

	        var $this = $(this);
	        
	        $.ajax({
	            type: "POST",
	            url: 'contact.php',
	            dataType: 'json',
	            cache: false,
	            data: $('#contact-form').serialize(),
	            success: function(data) {

	                if(data.info !== 'error'){
	                    $this.parents('form').find('input[type=text],textarea,select').filter(':visible').val('');
	                    message.hide().removeClass('success').removeClass('error').addClass('success').html(data.msg).fadeIn('slow').delay(5000).fadeOut('slow');
	                } else {
	                    message.hide().removeClass('success').removeClass('error').addClass('error').html(data.msg).fadeIn('slow').delay(5000).fadeOut('slow');
	                }
	            }
	        });
	    });
		
		/* ---------------------------------------------------------------------------
		 * Blog & Portfolio filters
		 * --------------------------------------------------------------------------- */
		$('.filters_buttons .open').click(function(e){
			e.preventDefault();
			var type = $(this).closest('li').attr('class');
			$('.filters_wrapper').show(200);
			$('.filters_wrapper ul.'+ type).show(200);
			$('.filters_wrapper ul:not(.'+ type +')').hide();
		});
		
		$('.filters_wrapper .close a').click(function(e){
			e.preventDefault();
			$('.filters_wrapper').hide(200);
		});
		
		/* ---------------------------------------------------------------------------
		 * Tabs
		 * --------------------------------------------------------------------------- */
		$(".jq-tabs").tabs();

		
		/* ---------------------------------------------------------------------------
		 * Anchor Fix for Sticky header + Smooth scroll
		 * --------------------------------------------------------------------------- */
		var hash = window.location.hash;
		if( hash && $(hash).length ){	
			var stickyH = $('#Top_bar.is-sticky').innerHeight();
			var tabsHeaderH = $(hash).siblings('.ui-tabs-nav').innerHeight();
			
			$('html, body').animate({ 
				scrollTop: $(hash).offset().top - 0 - stickyH - tabsHeaderH
			}, 500);
		}

		$('#menu li.scroll > a').click(function(){
			var url = $(this).attr('href');
			var hash = '#' + url.split('#')[1];
			var stickyH = $('#Top_bar.is-sticky').innerHeight();
			var tabsHeaderH = $(hash).siblings('.ui-tabs-nav').innerHeight();
			
			if( hash ){
				$('html, body').animate({ 
					scrollTop: $(hash).offset().top - 0 - stickyH - tabsHeaderH
				}, 500);
			}
		});

		
		/* ---------------------------------------------------------------------------
		 * Muffin Accordion & FAQ
		 * --------------------------------------------------------------------------- */
		$(".mfn-acc.open1st .question:first")
			.addClass("active")
			.children(".answer")
				.show();

		$(".mfn-acc .question > h5").click(function(){
			if($(this).parent().hasClass("active")) {
				$(this).parent().removeClass("active").children(".answer").slideToggle(200);
			}
			else
			{
				$(this).parents(".mfn-acc").children().each(function() {
					if($(this).hasClass("active")) {
						$(this).removeClass("active").children(".answer").slideToggle(200);
					}
				});
				$(this).parent().addClass("active");
				$(this).next(".answer").slideToggle(200);
			}
		});

		
		/* ---------------------------------------------------------------------------
		 * jPlayer
		 * --------------------------------------------------------------------------- */
		$('.mfn-jplayer').each(function(){
			var m4v = $(this).attr('data-m4v');
			var poster = $(this).attr('data-img');
			var swfPath = $(this).attr('data-swf');
			var cssSelectorAncestor = '#' + $(this).closest('.mfn-jcontainer').attr('id');
			
			$(this).jPlayer({
				ready	: function () {
					$(this).jPlayer('setMedia', {
						m4v		: m4v,
						poster	: poster
					});
				},
				play	: function () { // To avoid both jPlayers playing together.
					$(this).jPlayer('pauseOthers');
				},
				size: {
					cssClass	: 'jp-video-360p',
					width		: '100%',
					height		: '360px'
				},
				swfPath				: swfPath,
				supplied			: 'm4v',
				cssSelectorAncestor	: cssSelectorAncestor,
				wmode				: 'opaque'
			});
		});
		
        
        /* ---------------------------------------------------------------------------
		 * Video Box
		 * --------------------------------------------------------------------------- */
		$('.video_box').each(function(){
			var el = $(this);
			var desc = el.children('.desc_wrapper');
			var player = el.children('.player_wrapper');
			
			desc.find('.icon').click(function(e){
				e.preventDefault();
				
				var itemH = desc.outerHeight();
				el.attr('data-height',itemH);
				
				player.height(itemH)
					.find('.jp-video, .jp-jplayer').height(itemH);
				
				desc.hide();
				player
					.show()
					.find('.jp-play').click();
			});
		});
		
		function videoBoxHeight(){
			$('.video_box').each(function(){
				var el = $(this);
				var player = el.children('.player_wrapper');
				var itemH = $(this).attr('data-height');
				
				if( itemH ){
					player.height(itemH)
						.find('.jp-video, .jp-jplayer').height(itemH);
				}
			});
		}
		
		
		/* ---------------------------------------------------------------------------
		 * Love
		 * --------------------------------------------------------------------------- */
		$('.mfn-love').click(function() {
			var el = $(this);
			if( el.hasClass('loved') ) return false;
			
			var post = {
				action: 'mfn_love',
				post_id: el.attr('data-id')
			};
			
			$.post(window.mfn_ajax, post, function(data){
				el.find('.label').html(data);
				el.addClass('loved');
			});

			return false;
		});		
			

		/* ---------------------------------------------------------------------------
		 * Animations
		 * --------------------------------------------------------------------------- */
		$('[data-animation]').waypoint({
			offset		: '100%',
			triggerOnce	: true,
			handler		: function(){
				$(this).addClass('animated ' + $(this).attr('data-animation'));
			}
		});
		
		
		/* ---------------------------------------------------------------------------
		 * Go to top
		 * --------------------------------------------------------------------------- */	
		$('#back_to_top').click(function(){
			$('body,html').animate({
				scrollTop: 0
			}, 500);
			return false;
		});
		
		
		/* ---------------------------------------------------------------------------
		 * Iframe height
		 * --------------------------------------------------------------------------- */		
		function iframeHeight( item, ratio ){
			var itemW = item.width();
			var itemH = itemW * ratio;
			if( itemH < 147 ) itemH = 147;
			item.height(itemH);
		}
		
		function iframesHeight(){
			iframeHeight($(".blog_wrapper.classic .post-photo .mfn-jplayer, .blog_wrapper.classic .post-photo iframe"), 1);		// blog - classic
			iframeHeight($(".blog_wrapper.masonry .post-photo .mfn-jplayer, .blog_wrapper.masonry .post-photo iframe"), 0.68);	// blog - masonry
			iframeHeight($(".blog_wrapper.modern .post-photo .mfn-jplayer,  .blog_wrapper.modern .post-photo iframe" ), 0.47);	// blog - modern
			
			iframeHeight($(".single-post .post-photo .mfn-jplayer, .single-post .post-photo iframe" ), 0.47);	// blog - single
			
			iframeHeight($(".section-portfolio-header .mfn-jplayer, .section-portfolio-header iframe" ), 0.47);	// portfolio - single
		}
		iframesHeight();
		
		
		/* ---------------------------------------------------------------------------
		 * Debouncedresize
		 * --------------------------------------------------------------------------- */
		$(window).bind("debouncedresize", function() {
			
			iframesHeight();
			videoBoxHeight();
			
			$('.masonry .isotope').isotope();
			mfnSliderPortfolio_setup();			
		});
		
		/* ---------------------------------------------------------------------------
		 * isotope
		 * --------------------------------------------------------------------------- */
		function isotopeFilter( domEl, isoWrapper ){
			var filter = domEl.attr('data-rel');
			isoWrapper.isotope({ filter: filter });
		}
		
		$('.isotope-filters .filters_wrapper').find('li:not(.close) a').click(function(e){
			e.preventDefault();
			isotopeFilter( $(this), $('.isotope') );
		});
		$('.isotope-filters .filters_buttons').find('li.reset a').click(function(e){
			e.preventDefault();
			isotopeFilter( $(this), $('.isotope') );
		});
	
	});
	
	
	/* --------------------------------------------------------------------------------------------------------------------------
	 * $(window).scroll
	 * ----------------------------------------------------------------------------------------------------------------------- */
	$(window).scroll(function(){
		mfn_sticky();
	});
	
	
	/* --------------------------------------------------------------------------------------------------------------------------
	 * $(window).load
	 * ----------------------------------------------------------------------------------------------------------------------- */
	$(window).load(function(){

		/* ---------------------------------------------------------------------------
		 * Isotope
		 * --------------------------------------------------------------------------- */
		// Blog - Masonry
		$('.portfolio_wrapper  .isotope').isotope({
			itemSelector	: '.portfolio-item',
			layoutMode		: 'fitRows',
			resizable		: false
		});
		
		// Blog - Masonry
		$('.masonry .isotope').isotope({
			itemSelector	: '.isotope-item',
			layoutMode		: 'masonry',
			resizable		: false
		});
		
		
		/* ---------------------------------------------------------------------------
		 * Chart
		 * --------------------------------------------------------------------------- */
		$('.chart').waypoint({
			offset		: '100%',
			triggerOnce	: true,
			handler		: function(){
				$(this).easyPieChart({
					animate		: 1000,
					barColor	: '#6FA81B',
					lineCap		: 'circle',
					lineWidth	: 10,
					size		: 100,
					scaleColor	: false,
					trackColor	: '#D9D9D9'
				});
			}
		});
		
		
		/* ---------------------------------------------------------------------------
		 * Progress bars
		 * --------------------------------------------------------------------------- */
		$('.bars_list, .progress_box').waypoint({
			offset		: '100%',
			triggerOnce	: true,
			handler		: function(){
				$(this).addClass('hover');
			}
		});
		
		
		/* ---------------------------------------------------------------------------
		 * Animate Math [counter, quick_fact, etc.]
		 * --------------------------------------------------------------------------- */
		$('.animate-math .number').waypoint({
			offset		: '100%',
			triggerOnce	: true,
			handler		: function(){
				var el			= $(this);
				var duration	= Math.floor((Math.random()*1000)+1000);
				var to			= el.attr('data-to');

				$({property:0}).animate({property:to}, {
					duration	: duration,
					easing		:'linear',
					step		: function() {
						el.text(Math.floor(this.property));
					},
					complete	: function() {
						el.text(this.property);
					}
				});
			}
		});
		
		
		// Portfolio - Setup
		mfnSliderPortfolio_setup();
	});
	

	/* --------------------------------------------------------------------------------------------------------------------------
	 * $(document).mouseup
	 * ----------------------------------------------------------------------------------------------------------------------- */
	$(document).mouseup(function(e){
		
		// search
		if( $("#searchform").has(e.target).length === 0 ){
			if( $("#searchform").hasClass('focus') ){
				$(this).find('.icon_close').click();
			}
		}
		
	});
	
	
	/* ---------------------------------------------------------------------------
	 * Sliders configuration
	 * --------------------------------------------------------------------------- */
	
	// --- mfnSliderPortfolio ---------------------------------------------------------
	
	// Slider wrapper height set
	function mfnSliderPortfolio_setup(){
		$('.portfolio_slider_ul').each(function(){
			var itemH = $(this).find('li img').outerHeight();
			$(this).closest('.caroufredsel_wrapper').height(itemH);
		});
	}	
	
	// Init mfnSliderPortfolio
	function mfnSliderPortfolio(){	
		if( $('.portfolio_slider_ul').length ){
			
			// Init carouFredSel
			$('.portfolio_slider_ul').carouFredSel({
				circular	: true,
				responsive	: true,
				items		: {
					width : 380,
					visible	: {
						min		: 1,
						max		: 5
					}
				},
				scroll		: {
					duration	: 600,
					easing		: 'swing'
				},
				auto		: {
					play: false
				},
				swipe		: {
					onTouch		: true,
					onMouse		: true,
					onBefore	: function(){
						$(this).find('a').addClass('disable');
						$(this).find('li').trigger('mouseleave');
					},
					onAfter		: function(){
						$(this).find('a').removeClass('disable');
					}
				}
			});
			
			// Disable accidental clicks while swiping
			$('.portfolio_slider_ul').on('click', 'a.disable', function() {
				return false; 
			});
			
			// Do some height fixes
			mfnSliderPortfolio_setup();
			
		}
	}

})(jQuery);