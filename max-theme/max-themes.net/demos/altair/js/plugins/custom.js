jQuery(document).ready(function(){ 
	"use strict";

	var calScreenWidth = jQuery(window).width();
	
	if(calScreenWidth >= 960)
	{
		jQuery('#menu_border_wrapper').css({display: 'block'});
		jQuery('#main_menu li ul').css({display: 'none', opacity: 1});
	
		jQuery('#main_menu li').each(function()
		{	
			var jQuerysublist = jQuery(this).find('ul:first');
			
			jQuery(this).hover(function()
			{	
				var position = jQuery(this).position();
				
				if(jQuery(this).parents().attr('class') == 'sub-menu')
				{	
					jQuerysublist.stop().css({height:'auto', display:'none'}).fadeIn(200);
				}
				else
				{
					jQuerysublist.stop().css({overflow: 'visible', height:'auto', display:'none'}).fadeIn(200);
				}
			},
			function()
			{	
				jQuerysublist.stop().css({height:'auto'}).fadeOut(500);
			});
	
		});
		
		jQuery('#menu_wrapper .nav ul li ul').css({display: 'none', opacity: 1});
	
		jQuery('#menu_wrapper .nav ul li').each(function()
		{
			
			var jQuerysublist = jQuery(this).find('ul:first');
			
			jQuery(this).hover(function()
			{	
				jQuerysublist.stop().fadeIn(500);	
			},
			function()
			{	
				jQuerysublist.stop().fadeOut(500);	
			});		
			
		});
	}
	
	jQuery(window).resize(function(){
		var calScreenWidth = jQuery(window).width();
	
		if(calScreenWidth >= 960)
		{
			jQuery('#menu_border_wrapper').css({display: 'block'});
			jQuery('#main_menu li ul').css({display: 'none', opacity: 1});
		
			jQuery('#main_menu li').each(function()
			{	
				var jQuerysublist = jQuery(this).find('ul:first');
				
				jQuery(this).hover(function()
				{	
					var position = jQuery(this).position();
					
					if(jQuery(this).parents().attr('class') == 'sub-menu')
					{	
						jQuerysublist.stop().css({height:'auto', display:'none'}).fadeIn(200);
					}
					else
					{
						jQuerysublist.stop().css({overflow: 'visible', height:'auto', display:'none'}).fadeIn(200);
					}
				},
				function()
				{	
					jQuerysublist.stop().css({height:'auto', display:'none'}).hide(200);	
				});
		
			});
			
			jQuery('#menu_wrapper .nav ul li ul').css({display: 'none', opacity: 1});
		
			jQuery('#menu_wrapper .nav ul li').each(function()
			{
				
				var jQuerysublist = jQuery(this).find('ul:first');
				
				jQuery(this).hover(function()
				{	
					jQuerysublist.stop().css({height:'auto', display:'none'}).fadeIn(200);	
				},
				function()
				{	
					jQuerysublist.stop().css({height:'auto', display:'none'}).hide(200);	
				});		
				
			});
		}
	});
	
	jQuery('.lightbox_youtube, .lightbox_vimeo').magnificPopup({
	  	src: jQuery(this).attr('href'),
	  	type: 'inline',
	  	removalDelay: 300,
	  	mainClass: 'mfp-fade'
	});
	
	jQuery('a.fancy-gallery, .flickr li a, .pp_gallery a').magnificPopup({
	  	type: 'image',
	  	removalDelay: 300,
	  	mainClass: 'mfp-fade',
	  	gallery:{
	    	enabled:true
		}
	});
	
	jQuery('.img_frame').magnificPopup({
	  	type: 'image',
	  	removalDelay: 300,
	  	mainClass: 'mfp-fade'
	});
	
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
    
    jQuery('#menu_expand_wrapper a').click(function(){
    	jQuery('#menu_wrapper').fadeIn();
	    jQuery('#custom_logo').animate({'left': '15px', 'opacity': 1}, 400);
	    jQuery('#menu_close').animate({'left': '-10px', 'opacity': 1}, 400);
	    jQuery(this).animate({'left': '-60px', 'opacity': 0}, 400);
	    jQuery('#menu_border_wrapper select').animate({'left': '0', 'opacity': 1}, 400).fadeIn();
    });
	
	jQuery('#menu_close').click(function(){
		jQuery('#custom_logo').animate({'left': '-200px', 'opacity': 0}, 400);
	    jQuery(this).stop().animate({'left': '-200px', 'opacity': 0}, 400);
	    jQuery('#menu_expand_wrapper a').animate({'left': '20px', 'opacity': 1}, 400);
	    jQuery('#menu_border_wrapper select').animate({'left': '-200px', 'opacity': 0}, 400).fadeOut();
	    jQuery('#menu_wrapper').fadeOut();
	});
	
	// Isotope
	// modified Isotope methods for gutters in masonry
	jQuery.Isotope.prototype._getMasonryGutterColumns = function() {
	    var gutter = this.options.masonry && this.options.masonry.gutterWidth || 0;
	    var containerWidth = this.element.width();
  
	this.masonry.columnWidth = this.options.masonry && this.options.masonry.columnWidth ||
              // or use the size of the first item
              this.$filteredAtoms.outerWidth(true) ||
              // if there's no items, use size of container
              containerWidth;

	this.masonry.columnWidth += gutter;

	this.masonry.cols = Math.floor( ( containerWidth + gutter ) / this.masonry.columnWidth );
	this.masonry.cols = Math.max( this.masonry.cols, 1 );
	};

	jQuery.Isotope.prototype._masonryReset = function() {
	    // layout-specific props
	    this.masonry = {};
	    // FIXME shouldn't have to call this again
	    this._getMasonryGutterColumns();
	    var i = this.masonry.cols;
	    this.masonry.colYs = [];
	    while (i--) {
	    	this.masonry.colYs.push( 0 );
	    }
	};

	jQuery.Isotope.prototype._masonryResizeChanged = function() {
	    var prevSegments = this.masonry.cols;
	    // update cols/rows
	    this._getMasonryGutterColumns();
	    // return if updated cols/rows is not equal to previous
	    return ( this.masonry.cols !== prevSegments );
	};
  
	// cache jQuery window
	var $window = jQuery(window);
	
	// filter items when filter link is clicked
	jQuery('#portfolio_filters li a').click(function(){
	  	var selector = jQuery(this).attr('data-filter');
	  	$container.isotope({ filter: selector });
	  	jQuery('#portfolio_filters li a').removeClass('active');
	  	jQuery(this).addClass('active');
	  	return false;
	});
	
	
	jQuery('.portfolio_filters li a').click(function(){
	  	var selector = jQuery(this).attr('data-filter');
	  	var target = jQuery(this).attr('data-target');
	  	
	  	jQuery('#'+target).isotope({ filter: selector });
	  	jQuery('.portfolio_filters li a').removeClass('active');
	  	jQuery(this).addClass('active');
	  	return false;
	});
	
	var $container = jQuery('#photo_wall_wrapper');
	
	// start up isotope with default settings
	$container.imagesLoaded( function(){
	    reLayout();
	    $window.smartresize( reLayout );
	    
	    $container.children('.wall_entry').children('.gallery_type').each(function(){
		    jQuery(this).addClass('fade-in');
	    });
	    
	    jQuery(window).trigger('hwparallax.reconfigure');
	});
	
	function reLayout() {
		var columnCount = jQuery('#pp_wall_columns').val();

		if(jQuery(window).width() >= 753 && jQuery(window).width() < 960)
		{
			var columnCount = 2;
		}
	
		if(jQuery.type(columnCount) === "undefined")
		{
			var columnCount = 3;
		}

	    var masonryOpts = {
		  columnWidth: $container.width() / columnCount
		};
		
		$container.addClass('visible');

	    $container.isotope({
	      resizable: false, // disable resizing by default, we'll trigger it manually
	      itemSelector : '.wall_entry',
	      masonry: masonryOpts
	    }).isotope( 'reLayout' );

	}
	
	jQuery(window).resize(function() {
		if(jQuery(this).width() < 768)
		{
			jQuery('#menu_expand_wrapper a').trigger('click');
		}
	});
	
	var isDisableRightClick = jQuery('#pp_enable_right_click').val();
	
	if(isDisableRightClick!='')
	{
		jQuery(this).bind("contextmenu", function(e) {
	    	e.preventDefault();
	    });
	}
	
	function rePortfolioLayout() {
	
		var windowWidth = jQuery(window).width();
		var jQuerycontainer = jQuery('#portfolio_filter_wrapper, .portfolio_filter_wrapper');
		var containerWidth = jQuerycontainer.width();
		if(jQuery('#page_content_wrapper').hasClass('fullwidth'))
		{
			containerWidth = windowWidth;
		}
		var columnValue = 0;
		
		if(jQuerycontainer.hasClass('list'))
		{
			columnValue = windowWidth/1;
		}
		else
		{
			if(containerWidth > 2400)
			{
				columnValue = jQuerycontainer.width() / 5;
			}
			else if(containerWidth < 2400 && containerWidth >= 1600)
			{
				columnValue = jQuerycontainer.width() / 4;
				//alert(parseInt(columnValue));
			}
			else if(containerWidth < 1600 && containerWidth >= 960)
			{
				columnValue = jQuerycontainer.width() / 3;
			}
			else if(containerWidth < 960 && containerWidth >= 726)
			{
				columnValue = jQuerycontainer.width() / 2;
			}
			else
			{
				columnValue = windowWidth/1;
			}
		}

		//alert(parseInt(containerWidth));
	    var masonryOpts = {
		  columnWidth: parseInt(containerWidth/columnValue)
		};

	    jQuerycontainer.isotope({
	      resizable: false, // disable resizing by default, we'll trigger it manually
	      itemSelector : '.element',
	      masonry: masonryOpts
	    } ).isotope();

	}
	
	// cache jQuery window
	var $window = jQuery(window);
  
	// cache container
	var jQuerycontainer = jQuery('#portfolio_filter_wrapper, .portfolio_filter_wrapper');
	
	// start up isotope with default settings
	jQuerycontainer.imagesLoaded( function(){
	    rePortfolioLayout();
	    $window.smartresize( rePortfolioLayout );
	    
	    jQuerycontainer.children('.element').children('.gallery_type').each(function(){
		    jQuery(this).addClass('fadeIn');
	    });
	    
	    jQuerycontainer.children('.element').children('.portfolio_type').each(function(){
		    jQuery(this).addClass('fadeIn');
	    });
	    
	    jQuery(this).addClass('visible');
	    
	    jQuery(window).trigger('hwparallax.reconfigure');
	});
	
	// filter items when filter link is clicked
	jQuery('#portfolio_filters li a').click(function(){
	  	var selector = jQuery(this).attr('data-filter');
	  	jQuerycontainer.isotope({ filter: selector });
	  	jQuery('#portfolio_filters li a').removeClass('active');
	  	jQuery(this).addClass('active');
	  	return false;
	});
	
	function reBlogLayout() {
		var windowWidth = jQuery(window).width();
		var jQueryblogcontainer = jQuery('#blog_grid_wrapper');
		var $blogGridColumn = 3;
		var columnValue = 0;
		var containerWidth = jQueryblogcontainer.width();
		if(jQuery('#page_content_wrapper').hasClass('fullwidth'))
		{
			containerWidth = windowWidth;
		}
		
		if(containerWidth < 2800 && containerWidth >= 2400)
		{
			columnValue = jQueryblogcontainer.width() / 7;
		}
		else if(containerWidth < 2400 && containerWidth >= 2000)
		{
			columnValue = jQueryblogcontainer.width() / 6;
		}
		else if(containerWidth < 2000 && containerWidth >= 1600)
		{
			columnValue = jQueryblogcontainer.width() / 5;
		}
		else if(containerWidth < 1600 && containerWidth >= 1200)
		{
			columnValue = jQueryblogcontainer.width() / 4;
		}
		else if(containerWidth < 1200 && containerWidth >= 960)
		{
			columnValue = jQueryblogcontainer.width() / $blogGridColumn;
		}
		else if(containerWidth < 960 && containerWidth >= 726)
		{
			columnValue = jQueryblogcontainer.width() / 2;
		}
		else
		{
			columnValue = windowWidth/1;
		}

		//alert(columnValue);
	    var masonryOpts = {
		  columnWidth: columnValue
		};

	    jQueryblogcontainer.isotope({
	      resizable: false, // disable resizing by default, we'll trigger it manually
	      itemSelector : '.status-publish',
	      masonry: masonryOpts
	    } ).isotope();
	}
	
	var jQueryblogcontainer = jQuery('#blog_grid_wrapper');
	
	jQueryblogcontainer.imagesLoaded( function(){
	    reBlogLayout();
	    $window.smartresize( reBlogLayout );
	});
	
	var jQuerygalleriescontainer = jQuery('#galleries_grid_wrapper');
	
	jQuerygalleriescontainer.imagesLoaded( function(){
	    var columnCount = 3;
	
	    var masonryOpts = {
		  columnWidth: jQuerygalleriescontainer.width() / columnCount
		};

	    jQuerygalleriescontainer.isotope({
	      resizable: false,
	      itemSelector : '.galleries.type-galleries',
	      masonry: masonryOpts
	    }).isotope();
	});
    
    //Add to top button when scrolling
    jQuery(window).scroll(function() {
	 	var calScreenWidth = jQuery(window).width();
		
		if(jQuery(this).scrollTop() > 200) {
		    jQuery('#toTop').stop().css({opacity: 0.3, "visibility": "visible"}).animate({"visibility": "visible", "bottom": "-5px"}, {duration:1000,easing:"easeOutExpo"});
		} else if(jQuery(this).scrollTop() == 0) {
		    jQuery('#toTop').stop().css({opacity: 0, "visibility": "hidden"}).animate({"bottom": "0px", "visibility": "hidden"}, {duration:1500,easing:"easeOutExpo"});
		}
	});
 
	jQuery('#toTop, .hr_totop').click(function() {
		jQuery('body,html').animate({scrollTop:0},800);
	});
	
	var isDisableDragging = jQuery('#pp_enable_dragging').val();
	
	if(isDisableDragging!='')
	{
		jQuery("img").mousedown(function(){
		    return false;
		});
	}
	
	var topBarHeight = jQuery('.header_style_wrapper').height();
	
	jQuery(window).scroll(function(){
	
		if(jQuery(this).scrollTop() >= 200){
			if(jQuery(this).width()>768)
			{
				jQuery('.header_style_wrapper').css('height', topBarHeight+'px');
				jQuery('.header_style_wrapper').addClass('fixed');
				jQuery('#custom_logo').removeClass('hidden');
				jQuery('#custom_logo_transparent').addClass('hidden');
				jQuery('.top_bar').addClass('fixed');
			}		
	    }
	    else if(jQuery(this).scrollTop() < 200)
	    {
	    	jQuery('.header_style_wrapper').removeClass('fixed');
	    	
	    	if(jQuery('#custom_logo_transparent').hasClass('default'))
			{
				jQuery('#custom_logo').addClass('hidden');
				jQuery('#custom_logo_transparent').removeClass('hidden');
			}
			
			if(jQuery('#custom_logo').hasClass('default'))
			{
				jQuery('#custom_logo').removeClass('hidden');
				jQuery('#custom_logo_transparent').addClass('hidden');
			}
			
		    jQuery('.top_bar').removeClass('fixed');
		    jQuery('.header_style_wrapper').css('height', 'auto');
		    
		    if(jQuery('#pp_fixed_menu').val()=='true')
			{
				jQuery('.header_style_wrapper').css('height', 'auto');
			}
	    }
	});
	
	jQuery('.post_img a img').imagesLoaded(function(){
		jQuery(this).parent('a').parent('.post_img').addClass('fadeIn');
	});
	
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
	
	jQuery('#flow_view_button').click(function(){
		jQuery('#imageFlow_gallery_info').stop().animate({"left": "-370px", "height": jQuery(window).height()+"px"}, {duration:1000,easing:"easeOutExpo"});
		jQuery('#flow_info_button').fadeIn();
	});
	
	jQuery('#flow_info_button').click(function(){
		jQuery('#flow_info_button').hide();
		jQuery('#imageFlow_gallery_info').stop().animate({"left": "0", "height": jQuery(window).height()+"px"}, {duration:1000,easing:"easeOutExpo"});
	});
	
	jQuery('.top_bar #searchform button').click(function(e)
	{
		e.preventDefault();
		
		if(jQuery(window).width() < 960)
		{
			if(jQuery(this).hasClass('active'))
			{
				jQuery('#custom_logo').attr('style', '');
				jQuery('#custom_logo_transparent').attr('style', '');
			}
			else
			{
				jQuery('#custom_logo').attr('style', 'display:none;');
				jQuery('#custom_logo_transparent').attr('style', 'display:none;');
			}
		}
		if(jQuery(this).hasClass('active'))
		{
			jQuery(this).removeClass('active');
		}
		else
		{
			jQuery(this).addClass('active');
		}
		jQuery('#menu_border_wrapper').toggle();
		jQuery('#searchform label').toggleClass('visible');
		jQuery('.top_bar #searchform input').toggle();
	    jQuery('.top_bar #searchform input').focus();
	});
	
	var siteBaseURL = jQuery('#pp_homepage_url').val();
	if(jQuery('#pp_ajax_search').val() != '')
    {
		jQuery('#s').on('input', function() {
			jQuery.ajax({
				url:siteBaseURL+"/wp-admin/admin-ajax.php",
				type:'POST',
				data:'action=pp_ajax_search&s='+jQuery('#s').val(),
				success:function(results) {
					jQuery("#autocomplete").html(results);
					
					if(results != '')
					{
						jQuery("#autocomplete").addClass('visible');
						jQuery("#autocomplete").show();
					}
					else
					{
						jQuery("#autocomplete").hide();
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
	
	jQuery('#wrapper').waypoint(function(direction) {
		jQuery('#post_more_wrapper').toggleClass('hiding', direction === "up");
	}, {
		offset: function() {
			return jQuery.waypoints('viewportHeight') - jQuery(this).height() + 100;
		}
	});
	
	jQuery('.animated').imagesLoaded(function() {
		jQuery(this).waypoint(function(direction) {
			var animationClass = jQuery(this).data('animation');
		
			jQuery(this).addClass(animationClass, direction === 'down');
			
		} , { offset: '80%' });
	});
	
	jQuery('#post_more_close').click(function(){
		jQuery('#post_more_wrapper').animate({ right: '-380px' }, 300);
		
		return false;
	});
	
	jQuery('#mobile_nav_icon').click(function() {
		jQuery('body,html').animate({scrollTop:0},100);
		jQuery('body').toggleClass('js_nav');
	});
	
	jQuery('#close_mobile_menu').click(function() {
		jQuery('body').removeClass('js_nav');
	});
	
	jQuery('.mobile_menu_close a').click(function() {
		jQuery('body').removeClass('js_nav');
	});
	
	jQuery('.close_alert').click(function() {
		var target = jQuery(this).data('target');
		jQuery('#'+target).fadeOut();
	});
	
	jQuery('.progress_bar').waypoint(function(direction) {
		jQuery(this).addClass('fadeIn');
		var progressContent = jQuery(this).children('.progress_bar_holder').children('.progress_bar_content');
        var progressWidth = progressContent.data('score');
     
        progressContent.css({'width': progressWidth+'%'});
	} , { offset: '80%' });			
	
	jQuery('.tooltip').tooltipster();
	
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
	
	if(jQuery('.page_slider.menu_transparent').find('.rev_slider_wrapper').length > 0)
	{
		var sliderHeight = jQuery('.page_slider.menu_transparent').find('.rev_slider_wrapper').height();
		var topBarHeight = jQuery('.top_bar').height();
		var menuMarginTop = 0;
		
		if(jQuery('.above_top_bar').length > 0)
		{
			topBarHeight+= jQuery('.above_top_bar').height();
		}
		
		if(jQuery('.page_slider.menu_transparent').find('.rev_slider_wrapper.fullscreen-container').length > 0)
		{
			menuMarginTop = jQuery('.page_slider.menu_transparent').find('.rev_slider_wrapper.fullscreen-container').height();
		}
		else
		{
			if(jQuery('.page_slider').hasClass('menu_transparent'))
			{
			    menuMarginTop = sliderHeight;
			}
			else
			{
			    menuMarginTop = sliderHeight-topBarHeight;
			}
		}

		jQuery('.ppb_wrapper').css('marginTop', menuMarginTop+'px');
		jQuery('#page_content_wrapper').css('marginTop', menuMarginTop+'px');
	}
	
	jQuery(window).resize(function(){
	   if(jQuery('.page_slider.menu_transparent').find('.rev_slider_wrapper').length > 0)
		{
			var sliderHeight = jQuery('.page_slider.menu_transparent').find('.rev_slider_wrapper').height();
			var topBarHeight = jQuery('.top_bar').height();
			var menuMarginTop = 0;
			
			if(jQuery('.above_top_bar').length > 0)
			{
				topBarHeight+= jQuery('.above_top_bar').height();
			}
			
			if(jQuery('.page_slider.menu_transparent').find('.rev_slider_wrapper.fullscreen-container').length > 0)
			{
				menuMarginTop = jQuery('.page_slider.menu_transparent').find('.rev_slider_wrapper.fullscreen-container').height();
			}
			else
			{
				if(jQuery('.page_slider').hasClass('menu_transparent'))
				{
					menuMarginTop = sliderHeight;
				}
				else
				{
					menuMarginTop = sliderHeight-topBarHeight;
				}
			}
	
			jQuery('.ppb_wrapper').css('marginTop', menuMarginTop+'px');
			jQuery('#page_content_wrapper').css('marginTop', menuMarginTop+'px');
		}
	});
	
	jQuery('.skin_box').click(function(){
		jQuery('.skin_box').removeClass('selected');
		jQuery(this).addClass('selected');
    	jQuery('#skin').val(jQuery(this).attr('data-color'));
    });
    
    jQuery('#demo_apply').click(function(){
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
	
	jQuery('.post_share').mouseenter(function()
	{	
		var shar_id = jQuery(this).data('share');
	    jQuery('#'+shar_id).removeClass('hidden');	
	    
	    jQuery('#'+shar_id).mouseenter(function()
		{
			jQuery(this).removeClass('hidden');
		});
		
		jQuery('#'+shar_id).mouseleave(function()
		{
			jQuery(this).addClass('hidden');
		});
	});	
	
	jQuery('.post_share').mouseleave(function()
	{	
	    var shar_id = jQuery(this).data('share');
	    jQuery('#'+shar_id).addClass('hidden');
	});
	
	jQuery('#tour_book_btn, #call_to_action_tour_book_btn').click(function() {
		var bookURL = jQuery(this).attr('href');
	    
	    if(jQuery.type(bookURL) == "undefined")
	    {
			jQuery('#tour_book_wrapper').fadeIn();
			jQuery('body').addClass('bookform');
		}
	});
	
	jQuery('#booking_cancel_btn').click(function() {
		jQuery('#tour_book_wrapper').fadeOut();
		jQuery('body').removeClass('bookform');
	});
});

jQuery(window).on('resize load',adjustIframes);

jQuery(document).ready(function(){
	var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");
    
    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./) || is_touch_device())
    {
	    jQuery('.parallax').each(function(){
	    	var dataImgURL = jQuery(this).data('image');
	    	if(jQuery.type(dataImgURL) != "undefined")
	    	{
	    		jQuery(this).css('background-image', 'url('+dataImgURL+')');
	    		jQuery(this).css('background-size', 'cover');
	    	}
	    });
    }
    else
    {
	 	jQuery('.parallax').parallax({
	    	scroll_factor: 0.7
		});
    }
    
    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./) || is_touch_device())
    {
    	jQuery('#page_caption.hasbg').each(function(){
	    	var dataImgURL = jQuery(this).data('image');
	    	if(jQuery.type(dataImgURL) != "undefined")
	    	{
	    		jQuery(this).css('background-image', 'url('+dataImgURL+')');
	    		jQuery(this).css('background-size', 'cover');
	    	}
	    });
    }
    else
    {
	    jQuery('#page_caption.hasbg').each(function(){
	        var bgobj = jQuery(this);
	        var objYPost = bgobj.position();
	        objYPost = parseInt(objYPost.top);
	        
	        var backgroundPos = bgobj.css('backgroundPosition').split(" ");
			var xPos = backgroundPos[0],
			yPos = backgroundPos[1];
	     
	        jQuery(window).scroll(function() {
	        	var yPos = 50 - parseInt((objYPost-jQuery(window).scrollTop()) / bgobj.data('speed'));
	            var coords = xPos+' '+ yPos + '%';
	 
	            bgobj.css({ backgroundPosition: coords });
	        });
	    });
	}
	
	jQuery('#page_caption.hasbg').css('paddingTop', jQuery('.top_bar').height()+'px');
	jQuery('#page_caption .page_title_wrapper').verticalAlign();
	jQuery(window).resize(function(){
		jQuery('#page_caption .page_title_wrapper').verticalAlign();
	});
	jQuery('#page_caption .page_title_wrapper').addClass('fadeIn');
});

jQuery(window).load(function(){
	var calScreenWidth = jQuery(window).width();
	
	var contentMarginTop = parseInt(jQuery('#page_caption.hasbg').height())+parseInt(jQuery('#page_caption.hasbg').css('paddingTop'));
		
	if(jQuery('#page_caption').hasClass('hasbg'))
	{
	    var contentMarginTop = parseInt(jQuery('#page_caption.hasbg').height())+parseInt(jQuery('#page_caption.hasbg').css('paddingTop'));	
	}
	
	//If no transparent menu option
	if(jQuery('#page_caption').hasClass('notransparent') && !jQuery('#page_caption').hasClass('fullscreen'))
	{
	    //If no top bar
	    if(!jQuery('#page_caption').hasClass('withtopbar'))
	    {
	    	var contentMarginTop = parseInt(jQuery('#page_caption.hasbg').height()) + parseInt(jQuery('#page_caption.hasbg').css('paddingTop'));
	    }
	    else
	    {
	    	var contentMarginTop = parseInt(jQuery('#page_caption.hasbg').height() + parseInt(jQuery('#page_caption.hasbg').css('paddingTop')) - jQuery('.header_style_wrapper').height());
	    }
	}
	//If transparent menu
	else if(jQuery('#page_caption').hasClass('hasbg') && !jQuery('#page_caption').hasClass('fullscreen'))
	{
		var contentMarginTop = parseInt(jQuery('#page_caption.hasbg').height() + parseInt(jQuery('#page_caption.hasbg').css('paddingTop')));
	}
	//If fullscreen page caption
	else if(jQuery('#page_caption').hasClass('fullscreen'))
	{
	    var contentMarginTop = parseInt(jQuery('#page_caption.hasbg').height() + parseInt(jQuery('#page_caption.hasbg').css('paddingTop')));
	}
	
	jQuery('.ppb_wrapper.hasbg, #page_content_wrapper.hasbg').css('marginTop', contentMarginTop+'px');
});
		
jQuery(window).resize(function(){
    var calScreenWidth = jQuery(window).width();
	
	var contentMarginTop = parseInt(jQuery('#page_caption.hasbg').height())+parseInt(jQuery('#page_caption.hasbg').css('paddingTop'));
		
	if(jQuery('#page_caption').hasClass('hasbg'))
	{
	    var contentMarginTop = parseInt(jQuery('#page_caption.hasbg').height())+parseInt(jQuery('#page_caption.hasbg').css('paddingTop'));	
	}
	
	//If no transparent menu option
	if(jQuery('#page_caption').hasClass('notransparent') && !jQuery('#page_caption').hasClass('fullscreen'))
	{
	    //If no top bar
	    if(!jQuery('#page_caption').hasClass('withtopbar'))
	    {
	    	var contentMarginTop = parseInt(jQuery('#page_caption.hasbg').height());
	    }
	    else
	    {
	    	var contentMarginTop = parseInt(jQuery('#page_caption.hasbg').height() + parseInt(jQuery('#page_caption.hasbg').css('paddingTop')) - jQuery('.header_style_wrapper').height());
	    }
	}
	//If transparent menu
	else if(jQuery('#page_caption').hasClass('hasbg') && !jQuery('#page_caption').hasClass('fullscreen'))
	{
	    //If no top bar
	    if(!jQuery('#page_caption').hasClass('withtopbar'))
	    {
	    	var contentMarginTop = parseInt(jQuery('#page_caption.hasbg').height() + parseInt(jQuery('#page_caption.hasbg').css('paddingTop')) - jQuery('.header_style_wrapper').height());
	    }
	    else
	    {
		    var contentMarginTop = parseInt(jQuery('#page_caption.hasbg').height() + parseInt(jQuery('#page_caption.hasbg').css('paddingTop')));
	    }
	}
	//If fullscreen page caption
	else if(jQuery('#page_caption').hasClass('fullscreen'))
	{
	    var contentMarginTop = parseInt(jQuery('#page_caption.hasbg').height() + parseInt(jQuery('#page_caption.hasbg').css('paddingTop')));
	}
	
	jQuery('.ppb_wrapper.hasbg, #page_content_wrapper.hasbg').css('marginTop', contentMarginTop+'px');
});