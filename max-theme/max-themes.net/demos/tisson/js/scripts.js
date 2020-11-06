/* ---------------------------------------------------------------------------
 * jQuery(document).ready
 * --------------------------------------------------------------------------- */
jQuery(document).ready(function() {

	/* ---------------------------------------------------------------------------
     * Content sliders
     * --------------------------------------------------------------------------- */
	new MfnPostsSlider();
	new MfnPortfolioSlider();
	new MfnClientsSlider();

    
    /* ---------------------------------------------------------------------------
	 * Testimonials
	 * --------------------------------------------------------------------------- */
	jQuery(".testimonial ul.slider").responsiveSlides({
		
		auto:			true,	// Boolean: Animate automatically, true or false
		timeout:		7000,	// Integer: Time between slide transitions, in milliseconds
		
		speed:			0, 
		prevText:		"",
		nextText:		"",
		pager:			false,
		nav:			true
		
	});
    
	
	/* ---------------------------------------------------------------------------
	 * Fancybox
	 * --------------------------------------------------------------------------- */
	jQuery("a.fancybox, .gallery-icon a, .the_content .attachment a").fancybox({
		'overlayShow'	: false,
		'transitionIn'	: 'elastic',
		'transitionOut'	: 'elastic'	
	});
		
	jQuery("a.iframe").fancybox({
		'transitionIn'	: 'none',
		'transitionOut'	: 'none'
	});
	
	jQuery("a.fancyboxFull").fancybox({
		'transitionIn'	: 'elastic',
		'transitionOut'	: 'elastic',
		'autoScale'		: false
	});

	
	/* ---------------------------------------------------------------------------
	 * WP Gallery
	 * --------------------------------------------------------------------------- */
	jQuery(".gallery-icon a").attr("rel","gallery");
	jQuery(".gallery-item img").css("height","auto").css("width","100%");
		
	
	/* ---------------------------------------------------------------------------
	 * Add classes first/last
	 * --------------------------------------------------------------------------- */
	jQuery(".Recent_comments li:last-child, .Recent_posts li:last-child, .Twitter li:last-child, #Footer .container .column:last-child, .pricing-box .plan-inside ul li:last-child").addClass("last");
	jQuery(".commentlist li li .comment-body:last-child").addClass("last");
	jQuery(".commentlist li .comment-body:last-child").addClass("lastBorder");
	jQuery(".widget ul.menu li:last-child, .widget_links ul li:last-child, .widget_meta ul li:last-child").addClass("last");

	
	/* ---------------------------------------------------------------------------
	 * Responsive menu
	 * --------------------------------------------------------------------------- */
	jQuery('.responsive-menu-toggle').click(function(){
		jQuery(this).toggleClass('active');
		jQuery('#Header #menu').stop(true,true).slideToggle(200);
	});
	
	
	/* ---------------------------------------------------------------------------
	 * Main menu
	 * --------------------------------------------------------------------------- */
	jQuery("#menu > ul").muffingroup_menu({
		delay		: 100,
		animation	: 'toggle'
	});
	
	
	/* ---------------------------------------------------------------------------
	 * IE placeholder fix
	 * --------------------------------------------------------------------------- */
	jQuery("[placeholder]").each(function(){
		if( jQuery(this).val() === "" && jQuery(this).attr("placeholder") !== "" ){
			jQuery(this).val(jQuery(this).attr("placeholder"));
			jQuery(this).focus(function(){
				if(jQuery(this).val() === jQuery(this).attr("placeholder")) { jQuery(this).val(""); }
			});
			jQuery(this).blur(function(){
				if( jQuery(this).val() === "" ) { jQuery(this).val(jQuery(this).attr("placeholder")); }
			});
		}
	});

	
	/* ---------------------------------------------------------------------------
	 * Tabs
	 * --------------------------------------------------------------------------- */
	jQuery(".jq-tabs").tabs();
	
	
	/* ---------------------------------------------------------------------------
	 * mfn accordion/faq
	 * --------------------------------------------------------------------------- */
	jQuery(".mfn-acc .question:not(:first)").children(".answer").hide();
	jQuery(".mfn-acc .question:first").addClass("active");
	jQuery(".mfn-acc .question > h5").append('<span class="icon"></span>');
	
	jQuery(".mfn-acc .question > h5").click(function() {
		if(jQuery(this).parent().hasClass("active")) {
			jQuery(this).parent().removeClass("active").children(".answer").slideToggle(200);
		}
		else
		{
			jQuery(".mfn-acc .question").each(function() {
				if(jQuery(this).hasClass("active")) {
					jQuery(this).removeClass("active").children(".answer").slideToggle(200);
				}
			});
			jQuery(this).parent().addClass("active");
			jQuery(this).next(".answer").slideToggle(200);
		}
	});



    /* ---------------------------------------------------------------------------
	 * Ajax contact form
	 * --------------------------------------------------------------------------- */
    function mfn_contact_validate(){
		var error = false;
		jQuery('.contact_form input.required, .contact_form textarea.required').removeClass('inp_error');
		
		jQuery('.contact_form input.required, .contact_form textarea.required').each(function() {
			if ( (! this.value) || ( this.value === this.defaultValue ) || ( this.value === jQuery(this).attr('placeholder') ) ) {
				jQuery(this).addClass('inp_error');
				error = true;
			}
		});

		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		if( ! emailReg.test(jQuery('.contact_form #Email').val()) )
		{
			jQuery('.contact_form #Email').addClass('inp_error');
			error = true;
		}
			
		if( error ){
			return false;
		}
		return true;
	}
	
	function mfn_contact_processJson(data){
		if( data.status && data.status === 'ok' ){
			jQuery('.contact_form .alert_success').show();
		} else {
			jQuery('.contact_form .alert_error').show();
		}
	}
	
	jQuery('#json_contact_form').ajaxForm({ 
        dataType:		'json', 
		beforeSubmit:	mfn_contact_validate,
        success:		mfn_contact_processJson 
    }); 
	
	
	/* ---------------------------------------------------------------------------
	 * hoverdir
	 * --------------------------------------------------------------------------- */
	jQuery('.da-thumbs > li:not(.header_li)').each( function() { jQuery(this).hoverdir({
		hoverDelay : 75
	}); } );
	
	jQuery('.Projects_inside_wrapper .portfolio_item').each( function() { jQuery(this).hoverdir({
		hoverDelay : 75
	}); } );
	
	
	/* ---------------------------------------------------------------------------
	 * isotope
	 * --------------------------------------------------------------------------- */
	function mfnIsotope(domEl,isoWrapper){
		var filter = domEl.attr('rel');
		isoWrapper.isotope({ filter: filter });
		
		domEl.parents('ul').find('li.current-cat').removeClass('current-cat');
		domEl.parent().addClass('current-cat');
	}
	
	jQuery('.portfolio-isotope .categories a').click(function(e){
		e.preventDefault();
		mfnIsotope(jQuery(this),jQuery('.portfolio-isotope .Projects_inside_wrapper'));
	});
	
	jQuery('#Projects .categories a').click(function(e){
		e.preventDefault();
		mfnIsotope(jQuery(this),jQuery('#Projects .Projects_inside_wrapper'));
	});
	
});


/* ---------------------------------------------------------------------------
 * jQuery(window).load
 * --------------------------------------------------------------------------- */
jQuery(window).load(function() {
	
	/* ---------------------------------------------------------------------------
	 * isotope
	 * --------------------------------------------------------------------------- */
	jQuery('.portfolio-isotope .Projects_inside_wrapper').isotope({
		itemSelector: '.column',
		layoutMode: 'fitRows'
	});
	jQuery('#Projects .Projects_inside_wrapper').isotope({
		itemSelector: '.column',
		layoutMode: 'fitRows'
	});
    
});


/* ---------------------------------------------------------------------------
 * Sliders configuration
 * --------------------------------------------------------------------------- */
function MfnPostsSlider(){
	
	var mfn_slider_posts = window.mfn_slider_posts;
	
	mfn_slider_posts.vertical		= true;
	mfn_slider_posts.visible		= 2;
	mfn_slider_posts.scroll			= 1;
	mfn_slider_posts.wrap			= 'both';
	mfn_slider_posts.buttonPrevHTML	= '<a class="slider_control slider_control_prev"></a>';
	mfn_slider_posts.buttonNextHTML	= '<a class="slider_control slider_control_next"></a>';

	jQuery(".Latest_posts ul.latest-post-slider-wrapper").jcarousel( mfn_slider_posts );
}

function MfnPortfolioSlider(){
	
	var mfn_slider_portfolio = window.mfn_slider_portfolio;
	
	mfn_slider_portfolio.visible		= 1;
	mfn_slider_portfolio.wrap			= 'both';
	mfn_slider_portfolio.scroll			= 1;
	mfn_slider_portfolio.buttonPrevHTML	= '<a class="slider_control slider_control_prev"></a>';
	mfn_slider_portfolio.buttonNextHTML	= '<a class="slider_control slider_control_next"></a>';
	
	jQuery(".recent_works > ul").jcarousel( mfn_slider_portfolio );
}

function MfnClientsSlider(){
	
	function initCallback(carousel) {
		jQuery('.Our_clients_slider .slider_control_prev').bind('click', function() { carousel.prev(); return false; });
		jQuery('.Our_clients_slider .slider_control_next').bind('click', function() { carousel.next(); return false; });
	}
	
	var mfn_slider_clients = window.mfn_slider_clients;
	
	mfn_slider_clients.wrap				= 'both';	
	mfn_slider_clients.scroll			= 1;
	mfn_slider_clients.initCallback		= initCallback;
	mfn_slider_clients.buttonNextHTML	= null;
	mfn_slider_clients.buttonPrevHTML	= null;
	
	jQuery(".Our_clients_slider .inside > ul").jcarousel( mfn_slider_clients );
}