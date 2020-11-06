(function($){

    "use strict";	
	
    /* ---------------------------------------------------------------------------
	 * Sticky header
	 * --------------------------------------------------------------------------- */
    var mfn_header_height = $('#Header').innerHeight();
	function mfn_sticky(){
		if( $('body').hasClass('sticky-header') ){	
			var start_y = mfn_header_height - 17;
			var window_y = $(window).scrollTop();
	
			if( window_y > start_y ){
				if( ! ($('#Header').hasClass('is-sticky'))) {
					$('.header_placeholder').css('margin-top', mfn_header_height);
					$('#Header')
						.addClass('is-sticky')
						.css('top', $('#wpadminbar').innerHeight());
				}
			}
			else {
				if($('#Header').hasClass('is-sticky')) {
					$('.header_placeholder').css('margin-top',0);
					$('#Header')
						.removeClass('is-sticky')
						.css('top', 0);
				}
			}
		}
	}

	
	/* ---------------------------------------------------------------------------
	 * $(document).ready
	 * --------------------------------------------------------------------------- */
	$(document).ready(function(){
		
		/* ---------------------------------------------------------------------------
		 * Content sliders
		 * --------------------------------------------------------------------------- */
		new MfnSlider();
		new MfnOfferSlider();
		new MfnPostsSlider();
		new MfnPortfolioSlider();
		
		
		/* ---------------------------------------------------------------------------
		 * Testimonials
		 * --------------------------------------------------------------------------- */
		$("ul.testimonials-slider").owlCarousel({
			autoPlay			: 6000,
			goToFirst			: true,
			stopOnHover			: true,
			items				: 1,
			itemsDesktop		: false,
			itemsDesktopSmall	: false,
			itemsTablet			: false,
			itemsMobile			: false,
		});
		
		
		/* ---------------------------------------------------------------------------
		 * WP Gallery
		 * --------------------------------------------------------------------------- */
		$('.gallery-icon').addClass('hover-mask')
			.children('a')
				.attr('rel', 'prettyPhoto[gallery]')
				.append('<span class="ico"><i class="fa fa-eye"></i></span>')
				.children('img' )
					.css('height', 'auto')
					.css('width', '100%');
		
		
		/* ---------------------------------------------------------------------------
		 * PrettyPhoto
		 * --------------------------------------------------------------------------- */
		if( $(window).width() >= 768 ){
			$('a[data-gal^="prettyPhoto"], .prettyphoto').prettyPhoto({
				show_title		: false,
				deeplinking		: false,
				social_tools	: false
			});
		}
				
	
		/* ---------------------------------------------------------------------------
		 * Add classes first/last
		 * --------------------------------------------------------------------------- */
		$(".Recent_comments li:last-child, .Recent_posts li:last-child, .Twitter li:last-child, #Footer .container .column:last-child, .pricing-box .plan-inside ul li:last-child").addClass("last");
		$(".commentlist li li .comment-body:last-child").addClass("last");
		$(".commentlist li .comment-body:last-child").addClass("lastBorder");
		$(".widget ul.menu li:last-child, .widget_links ul li:last-child, .widget_meta ul li:last-child").addClass("last");
	
		// portfolio / blog  -------------------------------------
		$('.portfolio_item.one-second:nth-child(2n+3), .post.one-second:nth-child(2n+3)').css("clear", "both");	
		$('.portfolio_item.one-third:nth-child(3n+4),  .post.one-third:nth-child(3n+4)' ).css("clear", "both");	
		$('.portfolio_item.one-fourth:nth-child(4n+5), .post.one-fourth:nth-child(4n+5)').css("clear", "both");
		
		
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
		$("#Header #searchform .ico").click(function(e){
			e.preventDefault();
			$('#searchform').submit();
		});

		
		/* ---------------------------------------------------------------------------
		 * Header icons expand
		 * --------------------------------------------------------------------------- */
		$("#Header .addons .expand").click(function(){
			$(this).toggleClass('focus');
		});

		
		/* ---------------------------------------------------------------------------
		 * IE fixes
		 * --------------------------------------------------------------------------- */
		if ( $.browser.msie || !!navigator.userAgent.match(/Trident\/7\./) ) {
			$("body").addClass("browser-ie");
		}
	
		
		/* ---------------------------------------------------------------------------
		 * Tabs
		 * --------------------------------------------------------------------------- */
		$(".jq-tabs").tabs();

		
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
		 * Anchor Fix for Sticky header + Smooth scroll
		 * --------------------------------------------------------------------------- */
		var hash = window.location.hash;
		if( hash && $(hash).length ){	
			
			var stickyH = $('#Header.is-sticky').innerHeight();
			var tabsHeaderH = $(hash).siblings('.ui-tabs-nav').innerHeight();
			
			$('html, body').animate({ 
				scrollTop: $(hash).offset().top - stickyH - tabsHeaderH
			}, 500);
		}

		$('#menu li.scroll > a, a.scroll').click(function(){
			var url = $(this).attr('href');
			var hash = '#' + url.split('#')[1];
			
			var stickyH = $('#Header.is-sticky').innerHeight();
			var tabsHeaderH = $(hash).siblings('.ui-tabs-nav').innerHeight();
			
			if( hash && $(hash).length ){
				$('html, body').animate({ 
					scrollTop: $(hash).offset().top - stickyH - tabsHeaderH
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
		
		$(".mfn-acc .question > h5").append('<span class="icon"></span>');
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
		 * Skills
		 * --------------------------------------------------------------------------- */
		$('.bars_list').waypoint({
			offset		: '100%',
			triggerOnce	: true,
			handler		: function(){
				$(this).addClass('hover');
			}
		});
			
		
		/* ---------------------------------------------------------------------------
		 * Quick Fact
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
			iframeHeight($(".posts_wrapper .post_photo iframe"),0.60);			// blog - list
			iframeHeight($(".post_header .post_photo iframe"),0.38);			// blog - single
			iframeHeight($(".single-portfolio .portfolio_photo iframe"),0.66);	// portfolio - single
			iframeHeight($(".offer_wrapper .image iframe"),0.56);				// offer - item
		}
		iframesHeight();
		

		/* ---------------------------------------------------------------------------
		 * Portfolio - Isotope
		 * --------------------------------------------------------------------------- */
		function mfnIsotope(domEl,isoWrapper){
			var filter = domEl.attr('data-rel');
			isoWrapper.isotope({ filter: filter });
			
			domEl.parents('ul').find('li.current-cat').removeClass('current-cat');
			domEl.parent().addClass('current-cat');
		}
		
		$('.portfolio-isotope .categories a').click(function(e){
			e.preventDefault();
			mfnIsotope($(this),$('.portfolio-isotope .Projects_inside_wrapper'));
		});
		
		$('#Projects .categories a').click(function(e){
			e.preventDefault();
			mfnIsotope($(this),$('#Projects .Projects_inside_wrapper'));
		});
		
		
		/* ---------------------------------------------------------------------------
		 * Debouncedresize
		 * --------------------------------------------------------------------------- */
		$(window).bind("debouncedresize", function() {
			iframesHeight();
		});
		
	});

	/* ---------------------------------------------------------------------------
	 * $(window).load
	 * --------------------------------------------------------------------------- */
	$(window).load(function(){
		
		/* ---------------------------------------------------------------------------
		 * isotope
		 * --------------------------------------------------------------------------- */
		$('.portfolio-isotope .Projects_inside_wrapper').isotope({
			itemSelector: '.column',
			layoutMode: 'fitRows'
		});
		$('#Projects .Projects_inside_wrapper').isotope({
			itemSelector: '.column',
			layoutMode: 'fitRows'
		});
		
	});
	
	
	/* ---------------------------------------------------------------------------
	 * $(window).scroll
	 * --------------------------------------------------------------------------- */
	$(window).scroll(function(){
		mfn_sticky();
    });
	
	
	/* ---------------------------------------------------------------------------
	 * $(document).mouseup
	 * --------------------------------------------------------------------------- */
	$(document).mouseup(function(e){
		if ($("#Header .addons .expand").has(e.target).length === 0){
			$("#Header .addons .expand").removeClass('focus');
		}
		if ($("#searchform").has(e.target).length === 0){
			$("#searchform").removeClass('focus');
		}
	});
	
	
	/* ---------------------------------------------------------------------------
	 * Sliders configuration
	 * --------------------------------------------------------------------------- */
	
	// --- MfnSlider ---------------------------------------------------------	
	function MfnSlider(){
//		var supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints || $(document).width() <= 767;	
		var mfn_slider = window.mfn_slider_vertical;
		
		mfn_slider.speed				= 1700;
		mfn_slider.loop					= true;
		mfn_slider.pagination			= '.swiper-controls';
		mfn_slider.paginationClickable	= true; 
//		mfn_slider.mode					= supportsTouch ? 'horizontal' : 'vertical';
			
		var mfnSlider = new Swiper('.swiper-container',mfn_slider);
		
		$('.swiper-prev').click(function(e){
			e.preventDefault();
			mfnSlider.swipePrev();
		});
		$('.swiper-next').click(function(e){
			e.preventDefault();
			mfnSlider.swipeNext();
		});
		
		$('#configurator .text-select a').click(function(){
			mfnSlider.resizeFix();
		});
	}
	
	
	// --- MfnOfferSlider ---------------------------------------------------------
	function MfnOfferSliderPager(slider){
		
		// wrap -----------------------
		slider.find('.owl-pagination').wrap('<div class="owl-controls-inner"><div class="owl-pagination-wrapper"></div></div>');

		// pager - arrow --------------
		var pager = slider.find('.owl-controls .owl-page');
		var itemH = slider.find('.owl-page').height();
		var count = pager.length;
		var visible = count < 5 ? count : 4;
		var firstVisible = 1;
		var lastVisible = visible;
		
		if( count > 4 ){
			// arrows -----------------
			slider.find('.owl-controls').append('<a class="owl-pagination-arrow owl-arrow-prev" href="#"></a><a class="owl-pagination-arrow owl-arrow-next" href="#"></a>');
			
			// arrow click prev -------
			slider.find('.owl-arrow-prev').click(function(e){
				e.preventDefault();
				if( firstVisible > 1 ){
					firstVisible--;
					lastVisible--;
					slider.find('.owl-pagination').css('top', - ( (firstVisible-1) * itemH - 5));
				}
			});
			
			// arrow click next -------
			slider.find('.owl-arrow-next').click(function(e){
				e.preventDefault();
				if( lastVisible < count ){
					firstVisible++;
					lastVisible++;
					slider.find('.owl-pagination').css('top', - ( (firstVisible-1) * itemH - 5));
				}
			});
		}
	}
	
	// pager - thumbnails
	function MfnOfferSliderPagerThumbs(slider){
		var pager = slider.find('.owl-controls .owl-page');
		pager.each(function( index ) {
			var thumbnail = slider.find('.owl-item:eq('+index+') .thumbnail img').clone(true,true);
			$(this).children('span').html(thumbnail);
		});
	}
	
	function MfnOfferSlider(){
		$("ul.offer-slider").owlCarousel({
			items				: 1,
			itemsDesktop		: false,
			itemsDesktopSmall	: false,
			itemsTablet			: false,
			itemsMobile			: false,
			afterInit			: MfnOfferSliderPager,
			afterAction			: MfnOfferSliderPagerThumbs
		});			
	}
	
	
	// --- MfnPostsSlider ---------------------------------------------------------
	function MfnPostsSlider(){		
		$("ul.posts-slider").owlCarousel({ 
			autoPlay			: false,
			goToFirst			: true,
			navigation			: true,
			pagination			: false,
			stopOnHover			: true,
			items				: 1,
			itemsDesktop		: false,
			itemsDesktopSmall	: false,
			itemsTablet			: false,
			itemsMobile			: false
		});
	}
	
	// --- MfnPortfolioSlider ---------------------------------------------------------
	function MfnPortfolioSlider(){		
		$("ul.recent-works-slider").owlCarousel({ 
			autoPlay			: false,
			goToFirst			: true,
			navigation			: true,
			navigationText		: ["<",">"],
			pagination			: false,
			stopOnHover			: true,
			items				: 3,
			itemsDesktop		: false,
			itemsDesktopSmall	: false,
			itemsTablet			: false,
			itemsMobile			: [767,1]
		});
	}

})(jQuery);