/**
 * Copyright: http://www.backslash.gr/content/blog/webdevelopment/6-navigation-menu-that-stays-on-top-with-jquery
 */

jQuery(document).ready(function($) {
	"use strict";
	
	// grab the initial top offset of the navigation 
	// our function that decides weather the navigation bar should have "fixed" css position or not.
	var sticky_navigation = function(){
		var sticky_navigation_offset_top = $('.sticky_navigation_wrapper').offset().top;

		var scroll_top = $(window).scrollTop(); // our current vertical position from the top
		
		// if we've scrolled more than the navigation, change its position to fixed to stick to top, otherwise change it back to relative
		if (scroll_top > sticky_navigation_offset_top) {
			var totalWidth = 0;
			$('.sticky_navigation ul li').each(function(){
				totalWidth  += $(this).outerWidth(true);
			});	
			
			$('.sticky_navigation').addClass('sticked');
			setTimeout(function (){ $('.sticky_navigation ul').css('width',totalWidth+2); $('.sticky_navigation').addClass('animate_menu') }, 5);
			
		} else {
			$('.sticky_navigation.animate_menu').removeClass('sticked animate_menu'); 
			setTimeout(function (){ $('.sticky_navigation ul').css('width', '100%'); }, 5);
		}   
	};
	
	// run our function on load
	sticky_navigation();
	
	// and run it again every time you scroll
	$(window).scroll(function() {
		 sticky_navigation();
	});
	
	// Cache selectors
	var lastId,
	topMenu = $(".sticky_navigation"),
	topMenuHeight = topMenu.outerHeight(),
	// All list items
	menuItems = topMenu.find("a"),
	// Anchors corresponding to menu items
	scrollItems = menuItems.map(function(){
		var item = $($(this).attr("href"));
		if (item.length) { return item; }
	});
	
	// Stop animated scroll if the user does something
	$('html,body').bind('scroll mousedown DOMMouseScroll mousewheel keyup', function(e){
		if ( e.which > 0 || e.type == 'mousedown' || e.type == 'mousewheel' ){
			$('html,body').stop();
		}
	})

	menuItems.click(function(e){
		var href = $(this).attr("href"),
			offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
		$('html, body').stop().animate({ 
			scrollTop: offsetTop
		}, 800);
		e.preventDefault();
	});

	// Bind to scroll
	$(window).scroll(function(){
		// Get container scroll position
		var fromTop = $(this).scrollTop()+topMenuHeight+5;
	   
		// Get id of current scroll item
		var cur = scrollItems.map(function(){
		if ($(this).offset().top < fromTop)
			return this;
		});
		// Get the id of the current element
		cur = cur[cur.length-1];
		var id = cur && cur.length ? cur[0].id : "";

		if (lastId !== id) {
			lastId = id;
			// Set/remove active class
			menuItems
			.parent().removeClass("active")
			.end().filter('[href="#'+id+'"]').parent().addClass("active");
	   }
	});
	
});