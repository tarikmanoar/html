jQuery(document).ready(function(){ 
	"use strict";

	jQuery(document).setNav();
	
	var moduloThumbnail = false;
	if(jQuery('#tg_lightbox_thumbnails').val() == 'thumbnail')
	{
		moduloThumbnail = true;
	}
	
	var lightboxTimer = jQuery('#tg_lightbox_timer').val();
	
	// create instance of ModuloBox
	var mobx = '';
	
	mobx = new ModuloBox({
	    // options
	    mediaSelector : '.tg_gallery_lightbox, .woocommerce-product-gallery__image a',
	    scrollToZoom  : true,
	    controls : ['zoom', 'play', 'fullScreen', 'share', 'close'],
	    shareButtons  : ['facebook', 'googleplus', 'twitter', 'pinterest', 'linkedin'],
	    slideShowInterval : parseInt(lightboxTimer),
	    countTimer: true,
	    thumbnails: moduloThumbnail,
	    videoAutoPlay: true,
	    thumbnailSizes : {
		    1920 : {          // browser width in 'px'
		        width  : 110, // thumbnail width in 'px' - 0 in width will hide thumbnails
		        height : 80,  // thumbnail height in 'px' - 0 in height will hide thumbnails
		        gutter : 10   // gutter width in 'px' between thumbnails
		    },
		    1280 : {
		        width  : 90,
		        height : 65,
		        gutter : 10
		    },
		    680 : {
		        width  : 70,
		        height : 50,
		        gutter : 8
		    },
		    480 : {
		        width  : 60,
		        height : 44,
		        gutter : 5
		    }
		}
	});
	
	// initialize the instance	
	mobx.init();
	
	jQuery(window).resize(function(){
		//Resize main menu
		jQuery(document).setNav();
		
		if(jQuery(this).width() < 768)
		{
			//Remove sticky sidebar for mobile & tablet devices
		    jQuery("#page_content_wrapper .sidebar_wrapper").trigger("sticky_kit:detach");
		}
		else
		{
			//Calculate wrapper padding top value
			jQuery('#wrapper').css('paddingTop', parseInt(jQuery('.header_style_wrapper').height())+'px');
			
			//Reset menu padding top and bottom
			jQuery('#menu_wrapper div .nav > li > a').attr('style', '');
			jQuery('#menu_wrapper div .nav > li > a').attr('style', '');
		}
		
		//Calculate revolution slider height
		if(jQuery('.page_slider.menu_transparent').find('.rev_slider_wrapper').length > 0)
		{
			var sliderHeight = jQuery('.page_slider.menu_transparent').find('.rev_slider_wrapper').height();
			var topBarHeight = jQuery('.top_bar').height();
			
			if(jQuery('.above_top_bar').length > 0)
			{
				topBarHeight+= jQuery('.above_top_bar').height();
			}
			
			if(jQuery('.page_slider.menu_transparent').find('.rev_slider_wrapper.fullscreen-container').length > 0)
			{
				var topBarHeight = 55;
			}
	
			jQuery('.ppb_wrapper').css('marginTop', sliderHeight-topBarHeight+'px');
			jQuery('#page_content_wrapper').css('marginTop', sliderHeight-topBarHeight+'px');
		}
	});
    
    jQuery('#menu_expand_wrapper a').on( 'click', function(){
    	jQuery('#menu_wrapper').fadeIn();
	    jQuery('#custom_logo').animate({'left': '15px', 'opacity': 1}, 400);
	    jQuery('#menu_close').animate({'left': '-10px', 'opacity': 1}, 400);
	    jQuery(this).animate({'left': '-60px', 'opacity': 0}, 400);
	    jQuery('#menu_border_wrapper select').animate({'left': '0', 'opacity': 1}, 400).fadeIn();
    });
	
	jQuery('#menu_close').on( 'click', function(){
		jQuery('#custom_logo').animate({'left': '-200px', 'opacity': 0}, 400);
	    jQuery(this).stop().animate({'left': '-200px', 'opacity': 0}, 400);
	    jQuery('#menu_expand_wrapper a').animate({'left': '20px', 'opacity': 1}, 400);
	    jQuery('#menu_border_wrapper select').animate({'left': '-200px', 'opacity': 0}, 400).fadeOut();
	    jQuery('#menu_wrapper').fadeOut();
	});
    
    //Add to top button when scrolling
    jQuery(window).scroll(function() {
	 	var calScreenWidth = jQuery(window).width();
		
		if(jQuery(this).scrollTop() > 200) {
		    jQuery('#toTop').stop().css({opacity: 1, "visibility": "visible"}).animate({"visibility": "visible"}, {duration:1000,easing:"easeOutExpo"});
		    jQuery('.icon-scroll').hide();
		} else if(jQuery(this).scrollTop() == 0) {
		    jQuery('#toTop').stop().css({opacity: 0, "visibility": "hidden"}).animate({"visibility": "hidden"}, {duration:1500,easing:"easeOutExpo"});
		    jQuery('.icon-scroll').show();
		}
	});
 
	jQuery('#toTop, .hr_totop').on( 'click', function() {
		jQuery('body,html,#page_content_wrapper.split').animate({scrollTop:0},800);
	});
	
	var isDisableDragging = jQuery('#pp_enable_dragging').val();
	
	if(isDisableDragging!='')
	{
		jQuery("img").mousedown(function(){
		    return false;
		});
	}
	
	if(jQuery('#pp_topbar').val()==0)
	{
		var topBarHeight = jQuery('.header_style_wrapper').height();
	}
	else
	{
		var topBarHeight = parseInt(jQuery('.header_style_wrapper').height()-jQuery('.header_style_wrapper .above_top_bar').height());
	}
	
	var logoHeight = jQuery('#custom_logo img').height();
	var logoTransHeight = jQuery('#custom_logo_transparent img').height();
	var logoMargin = parseInt(jQuery('#custom_logo').css('marginTop'));
	var logoTransMargin = parseInt(jQuery('#custom_logo_transparent').css('marginTop'));
	var menuPaddingTop = parseInt(jQuery('#menu_wrapper div .nav li > a').css('paddingTop'));
	var menuPaddingBottom = parseInt(jQuery('#menu_wrapper div .nav li > a').css('paddingBottom'));
	var SearchPaddingTop = parseInt(jQuery('.top_bar #searchform button').css('paddingTop'));
	var menuLayout = jQuery('#pp_menu_layout').val();
	
	if(menuLayout != 'leftmenu' || jQuery(window).width()<=768)
	{
		jQuery('#wrapper').css('paddingTop', parseInt(jQuery('.header_style_wrapper').height())+'px');
	}
	
	if(menuLayout != 'leftmenu' || jQuery(window).width()<=960)
	{
		jQuery('#page_content_wrapper.split, .page_content_wrapper.split').css('top', parseInt(topBarHeight+jQuery('.header_style_wrapper .above_top_bar').height())+'px');
		jQuery('#page_content_wrapper.split, .page_content_wrapper.split').css('paddingBottom', parseInt(topBarHeight+jQuery('.header_style_wrapper .above_top_bar').height())+'px');
		
		jQuery(window).scroll(function(){
			if(jQuery('#pp_fixed_menu').val()==1 && jQuery('html').data('style') != 'fullscreen'  && jQuery('html').data('style') != 'fullscreen_white')
			{
				if(jQuery(this).scrollTop() >= 200){
					jQuery('.extend_top_contact_info').hide();
					
					jQuery('.header_style_wrapper').addClass('scroll');
					jQuery('.top_bar').addClass('scroll');
					
					if(jQuery('.top_bar').hasClass('hasbg'))
					{
					    jQuery('.top_bar').removeClass('hasbg');
					    jQuery('.top_bar').data('hasbg', 1);
					    
					    jQuery('#custom_logo').removeClass('hidden');
					    jQuery('#custom_logo_transparent').addClass('hidden');
					}
			    }
			    else if(jQuery(this).scrollTop() < 200)
			    {
			    	jQuery('.extend_top_contact_info').show();
				    
				    jQuery('#custom_logo img').removeClass('zoom');
				    jQuery('#custom_logo img').css('maxHeight', '');
					jQuery('#custom_logo_transparent img').removeClass('zoom');
				    
				    jQuery('#custom_logo').css('marginTop', parseInt(logoMargin)+'px');
					jQuery('#custom_logo_transparent').css('marginTop', parseInt(logoTransMargin)+'px');
					
					jQuery('#menu_wrapper div .nav > li > a').css('paddingTop', menuPaddingTop+'px');
					jQuery('#menu_wrapper div .nav > li > a').css('paddingBottom', menuPaddingBottom+'px');
					
					if(jQuery('.top_bar').data('hasbg')==1)
					{
					    jQuery('.top_bar').addClass('hasbg');
					    jQuery('#custom_logo').addClass('hidden');
					    jQuery('#custom_logo_transparent').removeClass('hidden');
					}
					
					jQuery('.header_style_wrapper').removeClass('scroll');
					jQuery('.top_bar').removeClass('scroll');
			    }
		   }
		   else
		   {
			   if(jQuery(this).scrollTop() >= 200)
			   {
			   		jQuery('.header_style_wrapper').addClass('nofixed');
			   }
			   else
			   {
			   		jQuery('.header_style_wrapper').removeClass('nofixed');
			   }
		   }
		});
		
		if(jQuery('#tg_smart_fixed_menu').val()==1 && jQuery('html').data('style') != 'fullscreen'  && jQuery('html').data('style') != 'fullscreen_white')
		{
			//Smart sticky menu
			if(!is_touch_device())
			{
			    var lastScrollTop = 0;
			    jQuery(window).scroll(function(event){
			       var st = jQuery(this).scrollTop();
			       if (st > lastScrollTop && st > 0){
			           jQuery('.top_bar').removeClass('scroll_up');
			           jQuery('.header_style_wrapper').removeClass('scroll_up');
			           jQuery('.header_style_wrapper').addClass('scroll_down');
			       } else {
			          jQuery('.top_bar').addClass('scroll_up');
			          jQuery('.header_style_wrapper').addClass('scroll_up');
			          jQuery('.header_style_wrapper').removeClass('scroll_down');
			       }
			       lastScrollTop = st;
			       
			       jQuery('.header_style_wrapper').attr('data-st', st);
			       jQuery('.header_style_wrapper').attr('data-lastscrolltop', lastScrollTop);
			    });
			}
			else
			{
			    var lastY;
			    jQuery(document).bind('touchmove', function (e){
			         var currentY = e.originalEvent.touches[0].clientY;

			         if(currentY > 200){
			         	jQuery('.top_bar').addClass('scroll_up');
			            jQuery('.header_style_wrapper').addClass('scroll_up');
			            jQuery('.header_style_wrapper').removeClass('scroll_down');
			            
			         } else {
			            jQuery('.top_bar').removeClass('scroll_up');
			            jQuery('.header_style_wrapper').removeClass('scroll_up');
			            jQuery('.header_style_wrapper').addClass('scroll_down');
			         }
			         
			         jQuery('.header_style_wrapper').attr('data-pos', currentY);
			    });
			}
		}
	} //If not left menu layout
	
	jQuery(document).mouseenter(function()
	{	
	    jQuery('body').addClass('hover');	
	});	
	
	jQuery(document).mouseleave(function()
	{	
	    jQuery('body').removeClass('hover');	
	});	
	
	jQuery('#post_more_close').on( 'click', function(){
		jQuery('#post_more_wrapper').animate({ right: '-380px' }, 300);
		
		return false;
	});
	
	jQuery('#mobile_nav_icon').on( 'click', function() {
		jQuery('body').toggleClass('js_nav');
		jQuery('body').toggleClass('modalview');
		jQuery('#close_mobile_menu').addClass('open');
		
		if(is_touch_device())
		{
			jQuery('body.js_nav').css('overflow', 'auto');
		}
	});
	
	jQuery('#close_mobile_menu').on( 'click', function() {
		jQuery('body').removeClass('js_nav');
		setTimeout(function () { jQuery('body').toggleClass('modalview'); }, 400);
		jQuery(this).removeClass('open');
	});
	
	jQuery('.mobile_menu_close a, #mobile_menu_close').on( 'click', function() {
		jQuery('body').removeClass('js_nav');
		setTimeout(function () { jQuery('body').toggleClass('modalview'); }, 400);
		jQuery('#close_mobile_menu').removeClass('open');
	});
		
	jQuery('.post_share').on( 'click', function() {
		var targetShareID = jQuery(this).attr('data-share');
		var targetParentID = jQuery(this).attr('data-parent');
		
		jQuery(this).toggleClass('visible');
		jQuery('#'+targetShareID).toggleClass('slideUp');
		jQuery('#'+targetParentID).toggleClass('sharing');
		
		return false;
	});
	
	
	if(jQuery('.page_slider.menu_transparent').find('.rev_slider_wrapper').length > 0)
	{
		var sliderHeight = jQuery('.page_slider.menu_transparent').find('.rev_slider_wrapper').height();
		var topBarHeight = jQuery('.top_bar').height();
		
		if(jQuery('.above_top_bar').length > 0)
		{
			topBarHeight+= jQuery('.above_top_bar').height();
		}
		
		if(jQuery('.page_slider.menu_transparent').find('.rev_slider_wrapper.fullscreen-container').length > 0)
		{
			var topBarHeight = 55;
		}

		jQuery('.ppb_wrapper').css('marginTop', sliderHeight-topBarHeight+'px');
		jQuery('#page_content_wrapper').css('marginTop', sliderHeight-topBarHeight+'px');
	}
    
    jQuery('#demo_apply').on( 'click', function(){
    	jQuery('#ajax_loading').addClass('visible');
    	jQuery('body').addClass('loading');
    	jQuery("form#form_option").submit();
    });
    
    jQuery('#option_wrapper').mouseenter(function()
	{	
	    jQuery('body').addClass('overflow_hidden');	
	});	
	
	jQuery('#option_wrapper').mouseleave(function()
	{	
	    jQuery('body').removeClass('overflow_hidden');	
	});	
	
	var calScreenHeight = jQuery(window).height()-108;
	var miniRightPos = 800;
	
	if(jQuery.browser.msie && parseFloat(jQuery.browser.version)<10)
	{
		jQuery('.animate').css('opacity', 1);
		jQuery('.animate').css('visibility', 'visible');
		
		jQuery('.animated').each(function() {
			jQuery(this).css('opacity', 1);
			jQuery(this).css('visibility', 'visible');
		});
	}
	
	jQuery('#overlay_background').on( 'click', function(){
		if(!jQuery('body').hasClass('js_nav'))
		{
			jQuery('#overlay_background').removeClass('visible');
			jQuery('#overlay_background').removeClass('share_open');
			jQuery('#fullscreen_share_wrapper').css('visibility', 'hidden');
		}
	});
    
    var menuLayout = jQuery('#pp_menu_layout').val();
	
	if(jQuery('.one.fullwidth.slideronly').length > 0)
	{
		jQuery('body').addClass('overflow_hidden');
	}
	
	// Find all YouTube & Vimeo videos
	jQuery('iframe[src*="youtube.com"]').each(function() {
		jQuery(this).wrap('<div class="video-container"></div>');
	});
	
	jQuery('iframe[src*="vimeo.com"]').each(function() {
		jQuery(this).wrap('<div class="video-container"></div>');
	});
	
	jQuery('.blog-tilt').tilt({
		perspective: 5000
	});
	
	jQuery(".input_wrapper input").focusout(function(){
		if(jQuery(this).val() != "")
		{
			$(this).addClass("has-content");
		} else {
			jQuery(this).removeClass("has-content");
		}
	});
	
	jQuery(window).scroll(function() {
	    var oVal;
	    oVal = jQuery(window).scrollTop() / 300;
	    if(oVal>1)
	    {
		    oVal = 1;
	    }
	    oVal = parseFloat(1-oVal);
	    
	    jQuery('#page_caption.hasbg .page_title_wrapper .page_title_inner').css('opacity', oVal);
	    
	    var posVal = -(jQuery(window).scrollTop() * 0.005);
	    jQuery('#page_caption.hasbg .page_title_wrapper .page_title_inner').css({'transform':'translate(0px,'+posVal+'px)'});
	});
	
	if(!is_touch_device())
	{
		jQuery('.stellar').each(function() {
			jQuery(this).attr('data-stellar-ratio', '1.2');
		});
		
		jQuery(window).stellar({
			positionProperty: 'transform',
			responsive: true,
			parallaxBackgrounds: false,
			horizontalScrolling: false,
			hideDistantElements: false,
		});
	}
	
	var isFooterReveal = jQuery('#tg_footer_reveal').val();
	
	if(isFooterReveal!='')
	{
		var bumpIt = function() {
			if(jQuery(window).width() > 768)
			{
				jQuery('#wrapper').css('margin-bottom', parseInt(jQuery('#footer_wrapper').height()));
			}
	    },
	    didResize = false;
	    
	    setInterval(function() {
			bumpIt();
		}, 250);
		
		jQuery(window).resize(function() {
		  didResize = true;
		});
		setInterval(function() {
		  if(didResize) {
		    didResize = false;
		    bumpIt();
		  }
		}, 250);
	}
});

jQuery(window).on('resize load',adjustIframes);