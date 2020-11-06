jQuery(document).ready(function($) {
	"use strict";
	/* window */
	var window_width, window_height, scroll_top;
	
	/* admin bar */
	var adminbar = $('#wpadminbar');
	var adminbar_height = 0;
	
	/* header menu */
	var header = $('.header');
	var header_top = 0;
	/**
	 * window load event.
	 * 
	 * Bind an event handler to the "load" JavaScript event.
	 * @author Fox
	 */
	 
	$(window).load(function() {

		
		/** current scroll */
		scroll_top = $(window).scrollTop();
		setHeightItemPortfolioCircles();
		/** current window width */
		window_width = $(window).width();
		setHeightCounter(window_width);
		setHeightLayoutMiddle(window_width);
		/** current window height */
		window_height = $(window).height();
		
		/* get admin bar height */
		adminbar_height = adminbar.length > 0 ? adminbar.outerHeight(true) : 0 ;
		
		/* get top header menu */
		header_top = header.length > 0 ? header.offset().top - adminbar_height : 0 ;
		
		/* check sticky menu. */
		if(CMSOptions.menu_sticky == '1'){
			cms_stiky_menu(scroll_top);
		}
		
		/* check mobile menu */
		cms_mobile_menu();
		
		/* check back to top */
		if(CMSOptions.back_to_top == '1'){
			/* add html. */
			$('#footer-bottom').append('<div id="back_to_top" class="back_to_top"><span class="go_up"><i style="" class="fa fa-chevron-up"></i></span></div><!-- #back-to-top -->');
			cms_back_to_top();
		}

        /* add min-height team item */
        $('.cms-carousel-layout-team').each(function(){
            var items=$(this).find('.cms-carousel-team-item');
            var height=0;
            items.each(function(){
                var item_h=$(this).children('.team-media').outerHeight() + $(this).children('.cms-carousel-team-content').outerHeight();
                if(item_h > height){
                    height=item_h;
                }
            });
            $(this).find('.cms-carousel-team-item').css('min-height',height+'px');
            items.each(function(){
                var media_h=$(this).children('.team-media').outerHeight();
                var content_h=height-media_h;
                $(this).children('.cms-carousel-team-content').css('min-height',content_h+'px')
            })
        })

        /* add min-height lastest post item */
        $('.cms-carousel-layout-lastest-post').each(function(){
            var items=$(this).find('.cms-carouse-post-item');
            var height=0;
            items.each(function(){
                var item_h=$(this).children('.post-media').outerHeight() + $(this).children('.cms-carousel-post-content').outerHeight();
                if(item_h > height){
                    height=item_h;
                }
            });
            $(this).find('.cms-carouse-post-item').css('min-height',height+'px');
            items.each(function(){
                var media_h=$(this).children('.post-media').outerHeight();
                var content_h=height-media_h;
                $(this).children('.cms-carousel-post-content').css('min-height',content_h+'px');
            })
        })

        /* carousel layout team */

        $(".cms-carousel-next").on('click', function(){
            var id=$(this).attr('data-slide');
            $('#'+id).trigger('next.owl.carousel');
        })
        $(".cms-carousel-prev").on('click', function(){
            var id=$(this).attr('data-slide');
            $('#'+id).trigger('prev.owl.carousel');
        })

        /* Grid layout portfolio  */
        $('.cms-grid-portfolio-item-lightbox').fancybox();

        

        /* check video size */
        cms_auto_video_width();

        /* add min-height  post item layout blog 1 */
        var min_height=0;
        
        $('.page-blog .post-item-inner').each(function() {
        	var item_height=$(this).height();
        	if(item_height > min_height){
        		min_height=item_height;
        	}
        	
        });
        $('.page-blog  .post-item-inner').css({
        	'min-height': min_height+'px'
        });
        $('.page-blog .post-item-inner').each(function() {
        	var media_height=$(this).children('.post-media').outerHeight();
            var content_height=min_height-media_height;
            $(this).children('.post-content').css('min-height',content_height+'px')
        });

        /* add min-height  post item layout blog 1 column */
        if(window_width >= 768){
        	$('.page-blog-1-column .post-item-inner').each(function() {
        		$(this).children('.post-content').css('min-height',($(this).children('.post-media').height() )+'px');
        	});
        }

        $('.template-cms_fancybox--adv').each(function() {
        	var adv_h=0;
        	$(this).find('.cms-fancyboxes-adv-item-wrap').each(function() {
        		var item_h=$(this).children('.fancy-box-icon').height() + $(this).children('h3').height() +$(this).children('.fancy-box-driver').height()+ $(this).children('.fancy-box-content').height()+60;
        		if(item_h> adv_h){
        			adv_h=item_h;
        		}
        	});
        	$(this).find('.cms-fancyboxes-adv-item-wrap').height(adv_h);
        }); 

        /* Change layout product woocommerce */
        ChangeLayoutProducts();

        /*** Select filter products ***/
        $(".orderby").selectbox();
		$(".filter-products-per-page").selectbox();

		/*** Same height ***/
		$('.template-cms_fancybox--services').each(function(){
			var sameHeight=0;
			$(this).find('.cms-fancyboxes-services-item-wrap').each(function(){

				var iconHeight=$(this).children('.cms-fancyboxes-services-item-icon-wrap').height();
				var contentHeight=$(this).children('.cms-fancyboxes-services-item-content-wrap').height();
				if(iconHeight > contentHeight){
					if(iconHeight > sameHeight){
						sameHeight=iconHeight;
					}
				}else{
					if(contentHeight > sameHeight){
						sameHeight=contentHeight;
					}
				}
			})
			$(this).find('.cms-fancyboxes-services-item-wrap').css('min-height',sameHeight+'px');
		})

		/******** Portfolio Lightbox *******/
		$('.porfolio-lightbox').on('click',function(){
			var $img=new Array();
			$img[0]=$(this).parent().next().find('.item.active').attr('data-src');
			$(this).parent().next().find('.item:not(.active)').each(function(index){
				$img[index+1]=$(this).attr('data-src');
			})
			$.fancybox($img);
		})

		/******** Single post Lightbox *******/
		$('.post-lightbox').on('click',function(){
			var $img=new Array();

			$img[0]=$(this).prev().find('.item.active').attr('data-src');
			$(this).prev().find('.item:not(.active)').each(function(index){
				$img[index+1]=$(this).attr('data-src');
			})


			$.fancybox($img);
		})
		
	});

	/**
	 * resize event.
	 * 
	 * Bind an event handler to the "resize" JavaScript event, or trigger that event on an element.
	 * @author Fox
	 */
	$(window).resize(function(event, ui) {
		/** current window width */
		window_width = $(event.target).width();
		setHeightItemPortfolioCircles();
		/** current window height */
		window_height = $(window).height();
		
		/** current scroll */
		scroll_top = $(window).scrollTop();
		setHeightCounter(window_width);
		setHeightLayoutMiddle(window_width);
		/* check sticky menu. */
		if(CMSOptions.menu_sticky == '1'){
			cms_stiky_menu(scroll_top);
		}
		
		/* check mobile menu */
		cms_mobile_menu();
        /* add min-height team item */
        $('.cms-carousel-layout-team').each(function(){
            var items=$(this).find('.cms-carousel-team-item');
            var height=0;
            items.each(function(){
                var item_h=$(this).children('.team-media').outerHeight() + $(this).children('.cms-carousel-team-content').outerHeight();
                if(item_h > height){
                    height=item_h;
                }
            });
            $(this).find('.cms-carousel-team-item').css('min-height',height+'px');
        });

        /* check video size */
        cms_auto_video_width();

        if(window_width >= 768){
        	$('.page-blog-1-column .post-item-inner').each(function() {
        		$(this).children('.post-content').css('min-height',($(this).children('.post-media').height() )+'px');
        	});
        }else{
        	$('.page-blog-1-column .post-item-inner').each(function() {
        		$(this).children('.post-content').height('auto');
        	});
        }

        $('.template-cms_fancybox--adv').each(function() {
        	var adv_h=0;
        	$(this).find('.cms-fancyboxes-adv-item-wrap').each(function() {
        		if($(this).height() > adv_h){
        			adv_h=$(this).height();
        		}
        	});
        	$(this).find('.cms-fancyboxes-adv-item-wrap').height(adv_h);
        });

	});
	
	/**
	 * scroll event.
	 * 
	 * Bind an event handler to the "scroll" JavaScript event, or trigger that event on an element.
	 * @author Fox
	 */
	var lastScrollTop = 0;
	
	$(window).scroll(function() {
		/** current scroll */
		scroll_top = $(window).scrollTop();
		/** check scroll up or down. */
		if(scroll_top < lastScrollTop) {
			/* scroll up. */
			console.log('up');
		} else {
			/* scroll down. */
			console.log('down');
		}
		
		lastScrollTop = scroll_top;
		
		/* check sticky menu. */
		if(CMSOptions.menu_sticky == '1'){
			cms_stiky_menu();
		}
		
		/* check back to top */
		cms_back_to_top();
	});

	/**
	 * Stiky menu
	 * 
	 * Show or hide sticky menu.
	 * @author Fox
	 * @since 1.0.0
	 */
	function cms_stiky_menu() {
		if (header_top <= scroll_top) {
			switch (true) {
				case (window_width > 992):
					header.addClass('header-fixed');
					$('body').css('margin-top', header.outerHeight(true)+'px');
					break;
				case ((window_width <= 992 && window_width >= 768) && (CMSOptions.menu_sticky_tablets == '1')):
					header.addClass('header-fixed');
					$('body').css('margin-top', header.outerHeight(true)+'px');
					break;
				case ((window_width <= 768) && (CMSOptions.menu_sticky_mobile == '1')):
					header.addClass('header-fixed');
					$('body').css('margin-top', header.outerHeight(true)+'px');
					break;
			}
		} else {
			header.removeClass('header-fixed');
			$('body').css('margin-top', '0');
		}
	}
	
	/**
	 * Mobile menu
	 * 
	 * Show or hide mobile menu.
	 * @author Fox
	 * @since 1.0.0
	 */
	
	$('#menu-mobile').on('click',function(){
		var navigation = $(this).parent().find('#header-navigation');
		if(!navigation.hasClass('collapse')){
			navigation.addClass('collapse');
		} else {
			navigation.removeClass('collapse');
		}
	});
	/* check mobile screen. */
	function cms_mobile_menu() {
		var menu = $('#header-navigation');
		
		/* active mobile menu. */
		switch (true) {
		case (window_width <= 992 && window_width >= 768):
			menu.removeClass('phones-nav').addClass('tablets-nav');
			/* */
			cms_mobile_menu_group(menu);
			break;
		case (window_width <= 768):
			menu.removeClass('tablets-nav').addClass('phones-nav');
			break;
		default:
			menu.removeClass('mobile-nav tablets-nav');
			menu.find('li').removeClass('mobile-group');
			break;
		}	
	}
	/* group sub menu. */
	function cms_mobile_menu_group(nav) {
		nav.each(function(){
			$(this).find('li').each(function(){
				if($(this).find('ul:first').length > 0){
					$(this).addClass('mobile-group');
				}
			});
		});
	}
	
	/**
	 * Parallax.
	 * 
	 * @author Fox
	 * @since 1.0.0
	 */
	var cms_parallax = $('.cms_parallax');
	if(cms_parallax.length > 0 && CMSOptions.paralax == '1'){
		cms_parallax.each(function() {
			"use strict";
			var speed = $(this).attr('data-speed');
			
			speed = (speed != undefined && speed != '') ? speed : 0.1 ;
			
			$(this).parallax("50%", speed);
		});
	}
	
	/** smoothscroll */


    /**
     * Post Like.
     *
     * @author Fox
     * @since 1.0.0
     */

    $('body').on('click', '.cms-post-like', function () {

        "use strict";
        /* get post id. */
        var bt_like = $(this);

        var post_id = bt_like.attr('data-id');

        if(post_id != undefined && post_id != ''){
            /* add like. */
            $.post(ajaxurl, {
                'action' : 'cms_post_like',
                'id' : post_id
            }, function(response) {
                if(response != ''){
                    //bt_like.find('i').attr('class', 'fa fa-heart')
                    bt_like.find('span').html(response);
                }
            });
        }

    });
	/**
	 * Back To Top
	 * 
	 * @author Fox
	 * @since 1.0.0
	 */
	$('body').on('click', '#back_to_top', function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1500);
    });
	
	/* show or hide buttom  */
	function cms_back_to_top(){
		/* back to top */
        if (scroll_top < window_height) {
        	$('#back_to_top').addClass('off').removeClass('on');
        } else {
        	$('#back_to_top').removeClass('off').addClass('on');
        }
	}

	/**
	 * Auto width video iframe
	 * 
	 * Youtube Vimeo.
	 * @author Fox
	 */
	function cms_auto_video_width() {
		$('.post-header-media iframe').each(function(){
			var v_width = $(this).width();
			
			v_width = v_width / (16/9);
			$(this).attr('height',v_width + 35);
		})
	}


	/**
	 * Change layout products
	 * 
	 */
	function ChangeLayoutProducts() {
		jQuery('.change-layout .layout-grid').on('click',function() {
            jQuery(this).addClass('active');
            jQuery('.change-layout .layout-full').removeClass('active');
            jQuery.cookie('gridcookie','grid', { path: '/' });
            jQuery('.products-list li').removeClass('layout-full');
            jQuery('.products-list li').addClass('layout-grid');
            return false;
        });

        jQuery('.change-layout .layout-full').on('click',function() {
            jQuery(this).addClass('active');
            jQuery('.change-layout .layout-grid').removeClass('active');
            jQuery.cookie('gridcookie','list', { path: '/' });
            jQuery('.products-list li').removeClass('layout-grid');
            jQuery('.products-list li').addClass('layout-full');
            return false;
        });

        if(typeof (jQuery.cookie)!='undefined'){
	        if (jQuery.cookie('gridcookie') == 'grid') {
	            jQuery('.change-layout .layout-grid').addClass('active');
	            jQuery('.change-layout .layout-full').removeClass('active');
	            jQuery('.products-list li').removeClass('layout-full');
	            jQuery('.products-list li').addClass('layout-grid');
	        }

	        else if (jQuery.cookie('gridcookie') == 'list') {
	            jQuery('.change-layout .layout-full').addClass('active');
	            jQuery('.change-layout .layout-grid').removeClass('active');
	            jQuery('.products-list li').addClass('layout-full');
	            jQuery('.products-list li').removeClass('layout-grid');
	        }
	        else {
	            jQuery('.change-layout .layout-grid').removeClass('active');
	            jQuery('.change-layout .layout-full').addClass('active');
	            jQuery('.products-list li').addClass('layout-full');
	            jQuery('.products-list li').removeClass('layout-grid');
	        }
	    }

        

        jQuery('.change-layout  a').on('click',function(event) {
            event.preventDefault();
        });
		
	}

	/**
	 * Set height counter
	 * 
	 */
	 function setHeightCounter(window_width){
	 	if(window_width > 768 || window_width==768){
	 		$('.cms-counter-layout-1').each(function(){
		 		$(this).css('min-height', ($(this).parent().parent().parent().height())+'px');
		 	})
	 	}else{
	 		$('.cms-counter-layout-1').css('min-height','0px');
	 	}
	 	
	 }

	/**
	 * Set height Layout middle
	 * 
	 */
	 function setHeightLayoutMiddle(window_width){
	 	if(window_width > 768 || window_width==768){
	 		$('.layout-middle').each(function(){
		 		$(this).css('min-height', ($(this).parent().height())+'px');
		 	})
	 	}else{
	 		$('.layout-middle').css('min-height','0px');
	 	}
	 	
	 }
	 
	 function setHeightItemPortfolioCircles(){
		$('.template-cms_grid--portfolio-circles').each(function(){
			var $item=$(this).find('.cms-grid-media');
			$item.height($item.width());
		})
	 }

});