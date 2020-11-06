(function() {
  jQuery(window).scroll(function() {
    var oVal;
    oVal = -(jQuery(window).scrollTop()/2);
    
    jQuery("#post_featured_slider li .slider_image .slide_post .slide_post_wrapper").css({"transform":"translateY("+oVal+"px)"});
    jQuery("#page_caption.hasbg .page_title_wrapper .page_title_inner").css({"transform":"translateY("+oVal+"px)"});
  });

}).call(this);

jQuery(document).ready(function(){ 
	"use strict";

	jQuery(document).setNav();
	
	jQuery(window).resize(function(){
		jQuery(document).setNav();
	});
	
	if(jQuery('#tg_lightbox_enable').val() > 0 && jQuery('#tg_lightbox_enable').val() != '')
	{
		jQuery(document).setiLightbox();
	}
    
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
	
	jQuery(window).resize(function() {
		if(jQuery(this).width() < 768)
		{
			jQuery('#menu_expand_wrapper a').trigger('click');
		}
	});
	
	var isDisableRightClick = jQuery('#pp_enable_right_click').val();
	
	if(isDisableRightClick!=0)
	{
		jQuery(this).bind("contextmenu", function(e) {
	    	e.preventDefault();
	    });
	}
    
    //Add to top button when scrolling
    jQuery(window).scroll(function() {
	 	var calScreenWidth = jQuery(window).width();
		
		if(jQuery(this).scrollTop() > 200) {
		    jQuery('#toTop').stop().css({opacity: 0.5, "visibility": "visible"}).animate({"visibility": "visible"}, {duration:1000,easing:"easeOutExpo"});
		} else if(jQuery(this).scrollTop() == 0) {
		    jQuery('#toTop').stop().css({opacity: 0, "visibility": "hidden"}).animate({"visibility": "hidden"}, {duration:1500,easing:"easeOutExpo"});
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
	
	jQuery(window).resize(function(){
	    if(jQuery(this).width()>768)
	    {
	    	if(menuLayout != 'leftmenu')
	    	{
		    	var resizedTopBarHeight = jQuery('.top_bar').height();
		    	jQuery('#wrapper').css('paddingTop', resizedTopBarHeight+'px');
		    	jQuery('#page_content_wrapper.split, .page_content_wrapper.split').css('top', resizedTopBarHeight+'px');
		    	jQuery('.logo_wrapper').css('marginTop', '');
		    	jQuery('.top_bar #searchform button').css('paddingTop', '');
		    }
		    else
		    {
			    jQuery('#wrapper').css('paddingTop', 0);
		    }
	    }
	    else
	    {
	    	jQuery('#wrapper').css('paddingTop', parseInt(jQuery('.header_style_wrapper').height())+'px');
	    }
	    
	});
	
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
					jQuery('.top_bar').addClass(jQuery('#tg_fixed_menu_color').val());
					
					if(jQuery('.top_bar').hasClass('hasbg'))
					{
					    jQuery('.top_bar').removeClass('hasbg');
					    jQuery('.top_bar').data('hasbg', 1);
					    
					    jQuery('#custom_logo').removeClass('hidden');
					    jQuery('#custom_logo_transparent').addClass('hidden');
					}
					
					if(jQuery('#tg_fixed_menu_color').val() == 'dark')
					{
						jQuery('#custom_logo').addClass('hidden');
					    jQuery('#custom_logo_transparent').removeClass('hidden');
					}
					
					if(jQuery(window).width()>960)
					{
						jQuery('#mobile_nav_icon').hide();
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
					jQuery('#menu_wrapper div .nav > li > a').css('paddingBottom', menuPaddingBottom+'px');;
					
					if(jQuery('.top_bar').data('hasbg')==1)
					{
					    jQuery('.top_bar').addClass('hasbg');
					    jQuery('#custom_logo').addClass('hidden');
					    jQuery('#custom_logo_transparent').removeClass('hidden');
					}
					
					if(jQuery('#tg_fixed_menu_color').val() == 'dark')
					{
						if(jQuery('.top_bar').data('hasbg')==1)
						{
							jQuery('#custom_logo').addClass('hidden');
							jQuery('#custom_logo_transparent').removeClass('hidden');
						}
						else
						{
							jQuery('#custom_logo').removeClass('hidden');
							jQuery('#custom_logo_transparent').addClass('hidden');
						}
					}
					
					jQuery('.header_style_wrapper').removeClass('scroll');
					jQuery('.top_bar').removeClass('scroll');
					jQuery('.top_bar').removeClass(jQuery('#tg_fixed_menu_color').val());
					jQuery('#mobile_nav_icon').show();
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
	
	jQuery('.post_img img').imagesLoaded(function(){
		jQuery(this).parent('.post_img').addClass('fadeIn');
	});
	
	jQuery(document).mouseenter(function()
	{	
	    jQuery('body').addClass('hover');	
	});	
	
	jQuery(document).mouseleave(function()
	{	
	    jQuery('body').removeClass('hover');	
	});	
	
	var siteBaseURL = jQuery('#pp_homepage_url').val();
	if(jQuery('#grandphotography_ajax_search').val() != '')
    {
		jQuery('#s').on('input', function() {
			jQuery.ajax({
				url:siteBaseURL+"/wp-admin/admin-ajax.php",
				type:'POST',
				data:'action=grandphotography_ajax_search&s='+jQuery('#s').val(),
				success:function(results) {
					jQuery("#autocomplete").html(results);
					
					if(results != '')
					{
						jQuery("#autocomplete").addClass('visible');
						jQuery("#autocomplete").show();
						jQuery("body.js_nav .mobile_menu_wrapper").css('overflow', 'visible');
					}
					else
					{
						jQuery("#autocomplete").hide();
						jQuery("body.js_nav .mobile_menu_wrapper").css('overflow', 'scroll');
					}
				}
			})
		});
		
		jQuery("#s").keypress(function(event) {
		    if (event.which == 13) {
		        event.preventDefault();
		        jQuery("form#searchform").submit();
		    }
		});
		
		jQuery('#s').focus(function(){
			if (jQuery('#autocomplete').html() != ''){
				jQuery("#autocomplete").addClass('visible');
				jQuery("#autocomplete").fadeIn();
			}
		});
		
		jQuery('#s').blur(function(){
	      jQuery("#autocomplete").fadeOut();
		});
	}
	
	jQuery('.animated').imagesLoaded(function() {
		var windowWidth = jQuery(window).width();
	
		if(windowWidth >= 960)
		{
			jQuery(this).waypoint(function(direction) {
				var animationClass = jQuery(this).data('animation');
			
				jQuery(this).addClass(animationClass, direction === 'down');
				
			} , { offset: '100%' });
		}
	});
	
	jQuery('#post_more_close').on( 'click', function(){
		jQuery('#post_more_wrapper').animate({ right: '-380px' }, 300);
		
		return false;
	});
	
	jQuery('#mobile_nav_icon').on( 'click', function() {
		jQuery('body,html').animate({scrollTop:0},100);
		jQuery('body').toggleClass('js_nav');
		jQuery('#close_mobile_menu').addClass('open');
		
		if(is_touch_device())
		{
			jQuery('body.js_nav').css('overflow', 'auto');
		}
	});
	
	jQuery('#close_mobile_menu').on( 'click', function() {
		jQuery('body').removeClass('js_nav');
		jQuery(this).removeClass('open');
	});
	
	jQuery('.mobile_menu_close a, #mobile_menu_close').on( 'click', function() {
		jQuery('body').removeClass('js_nav');
		jQuery('#close_mobile_menu').removeClass('open');
	});
	
	jQuery('.close_alert').on( 'click', function() {
		var target = jQuery(this).data('target');
		jQuery('#'+target).fadeOut();
	});
	
	jQuery('.progress_bar').each(function(){
		jQuery(this).addClass('fadeIn');
		var progressContent = jQuery(this).children('.progress_bar_holder').children('.progress_bar_content');
        var progressWidth = progressContent.data('score');
     
        progressContent.css({'width': progressWidth+'%'});
	});	
	
	jQuery('.tooltip').tooltipster();
	jQuery('.demotip').tooltipster({
		position: 'left'
	});
	
	jQuery('.portfolio_prev_next_link').each(function(){
		jQuery(this).tooltipster({
			content: jQuery('<img src="'+jQuery(this).attr('data-img')+'" /><br/><div style="text-align:center;margin:7px 0 5px 0;"><strong>'+jQuery(this).attr('data-title')+'</strong></div>')
		});
	});
	
	jQuery('.post_prev_next_link').each(function(){
		jQuery(this).tooltipster({
			content: jQuery('<img src="'+jQuery(this).attr('data-img')+'" />')
		});
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
	
	jQuery(window).resize(function(){
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
	
	jQuery('.skin_box').on( 'click', function(){
		jQuery('.skin_box').removeClass('selected');
		jQuery(this).addClass('selected');
    	jQuery('#skin').val(jQuery(this).attr('data-color'));
    });
    
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
	
	jQuery('.animate').waypoint(function(direction) {
		var windowWidth = jQuery(window).width();
	
		jQuery(this).addClass('visible', direction === 'down');
	    
	} , { offset: '80%' });
	
	var calScreenHeight = jQuery(window).height()-108;
	var miniRightPos = 800;
      
    var cols = 3
	var masonry = jQuery('.gallery_mansory_wrapper');
	
	// initialize masonry
	masonry.imagesLoaded(function(){
	    
	    masonry.masonry({
	    	itemSelector: '.mansory_thumbnail',
	    	isResizable: true,
	    	isAnimated: true,
	    	isFitWidth: true,
	    	columnWidth:Math.floor((masonry.width()/ cols))
	      });
	      
	     masonry.children('.mansory_thumbnail').children('.gallery_type').each(function(){
		    jQuery(this).addClass('fade-in');
	    });
	});
	
	jQuery(window).resize(function(){
		var masonry = jQuery('.gallery_mansory_wrapper');
		
	    masonry.imagesLoaded(function(){
	    
		    masonry.masonry({
		    	itemSelector: '.mansory_thumbnail',
		    	isResizable: true,
		    	isAnimated: true,
		    	isFitWidth: true,
		    	columnWidth:Math.floor((masonry.width()/ cols))
		      });
		      
		     masonry.children('.mansory_thumbnail').children('.gallery_type').each(function(){
			    jQuery(this).addClass('fade-in');
		    });
		});
	});
	
	if(jQuery.browser.msie && parseFloat(jQuery.browser.version)<10)
	{
		jQuery('.animate').css('opacity', 1);
		jQuery('.animate').css('visibility', 'visible');
		
		jQuery('.animated').each(function() {
			jQuery(this).css('opacity', 1);
			jQuery(this).css('visibility', 'visible');
		});
	}
	
	function launchFullscreen(element) {
	  if(element.requestFullscreen) {
	    element.requestFullscreen();
	  } else if(element.mozRequestFullScreen) {
	    element.mozRequestFullScreen();
	  } else if(element.webkitRequestFullscreen) {
	    element.webkitRequestFullscreen();
	  } else if(element.msRequestFullscreen) {
	    element.msRequestFullscreen();
	  }
	}
	
	function exitFullscreen() {
	  if(document.exitFullscreen) {
	    document.exitFullscreen();
	  } else if(document.mozCancelFullScreen) {
	    document.mozCancelFullScreen();
	  } else if(document.webkitExitFullscreen) {
	    document.webkitExitFullscreen();
	  }
	}
	
	jQuery(document).bind('webkitfullscreenchange mozfullscreenchange fullscreenchange', function(e) {
	    var state = document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen;
	    var event = state ? 'FullscreenOn' : 'FullscreenOff';
	
		if(event == 'FullscreenOff')
		{
		    jQuery('#page_maximize').show();
			jQuery('#option_btn').show();
		}    
	});
	
	jQuery('#page_maximize').on( 'click', function(){
		launchFullscreen(document.documentElement);
		jQuery(this).hide();
		jQuery('#option_btn').hide();
	});
	
	jQuery('#page_minimize').on( 'click', function(){
		exitFullscreen();
		jQuery('#page_maximize').show();
		jQuery(this).hide();
		jQuery('#option_btn').show();
	});
	
	jQuery('#page_share').on( 'click', function(){
		jQuery('#overlay_background').addClass('visible');
		jQuery('#overlay_background').addClass('share_open');
		jQuery('#fullscreen_share_wrapper').css('visibility', 'visible');
	});
	
	jQuery('#overlay_background').on( 'click', function(){
		if(!jQuery('body').hasClass('js_nav'))
		{
			jQuery('#overlay_background').removeClass('visible');
			jQuery('#overlay_background').removeClass('share_open');
			jQuery('#fullscreen_share_wrapper').css('visibility', 'hidden');
		}
	});
    
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");
    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./) || jQuery('#tg_live_builder').val() == 1)
    {
	    jQuery('.parallax').each(function(){
	    	var dataImgURL = jQuery(this).data('image');
	    	if(jQuery.type(dataImgURL) != "undefined")
	    	{
	    		jQuery(this).css('background-image', 'url('+dataImgURL+')');
	    		jQuery(this).css('background-size', 'cover');
	    		jQuery(this).css('background-position', 'center center');
	    	}
	    });
    }
    else
    {
    	jQuery('.parallax:not(.split)').each(function(){
    		var parallaxObj = jQuery(this);
    	
		 	jQuery(this).jarallax({
		 		zIndex          : 0,
		 		speed			: 0.4,
		 		onCoverImage: function() {
			        parallaxObj.css('z-index', 0);
			    }
		 	});
		 });
    }
    
    var menuLayout = jQuery('#pp_menu_layout').val();

    if(jQuery(window).width()<960 && menuLayout == 'leftmenu')
	{
		document.getElementById("grandphotography-leftmenu-css").disabled = true;
		jQuery('.mobile_menu_wrapper .logo_container').hide();
	}
	
	jQuery(window).resize(function(){
		if(jQuery(window).width()>=960 && menuLayout == 'leftmenu')
		{
			document.getElementById("grandphotography-leftmenu-css").disabled = false;
			jQuery('.mobile_menu_wrapper .logo_container').show();
		}
		else if(jQuery(window).width()<960 && menuLayout == 'leftmenu')
		{
			document.getElementById("grandphotography-leftmenu-css").disabled = true;
			jQuery('.mobile_menu_wrapper .logo_container').hide();
		}
	});
	
	jQuery('.rev_slider_wrapper.fullscreen-container').each(function(){
		jQuery(this).append('<div class="icon-scroll"></div>');
	});
	
	if(jQuery('.one.fullwidth.slideronly').length > 0)
	{
		jQuery('body').addClass('overflow_hidden');
	}
	
	// filter items when filter link is clicked
	var dropdowns = jQuery(".portfolio_filter_dropdown");

	dropdowns.find(".portfolio_filter_dropdown_title").on( 'click', function(){
		dropdowns.find(".portfolio_filter_dropdown_select ul.portfolio_select").hide();
		jQuery(this).next().children().toggle();
	});
	
	dropdowns.find(".portfolio_filter_dropdown_select ul.portfolio_select li a").on( 'click', function(){
		var leSpan = jQuery(this).parents(".portfolio_filter_dropdown").find(".portfolio_filter_dropdown_title a span");
	  
		jQuery(this).parents(".portfolio_filter_dropdown").find('.portfolio_filter_dropdown_select a').each(function(){
		    jQuery(this).removeClass('selected');
		});
	  
		jQuery('#filter_selected').html(jQuery(this).html());
	  
		if(jQuery(this).hasClass('default'))
		{
	    	leSpan.removeClass('selected');
		}
		else
		{
			leSpan.addClass('selected');
			jQuery(this).addClass('selected');
		}
	  
		jQuery(this).parents("ul").hide();
	});
	
	// Close all dropdown onclick on another element
	jQuery(document).bind('click', function(e){
		if (! jQuery(e.target).parents().hasClass("portfolio_filter_dropdown")) jQuery(".portfolio_filter_dropdown .portfolio_filter_dropdown_select ul.portfolio_select").hide();
	});
	
	if(!is_touch_device())
	{
		var stellarActivated = true;
	    
	    jQuery(window).stellar({ positionProperty: 'transform', parallaxBackgrounds: false, responsive: true, horizontalScrolling: false, hideDistantElements: false });
	}
});

jQuery(window).on('resize load',adjustIframes);