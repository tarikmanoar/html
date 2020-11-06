/*
@Name:		Horizontal multilevel menu
@Author:    Muffin Group
@WWW:       www.muffingroup.com
@Version:   1.5.2
*/

(function($){
	$.fn.extend({
		muffingroup_menu: function(options) {
			var menu = $(this);
			
			var defaults = {
				delay       : 100,
				hoverClass  : 'hover',
				arrows      : true,
				animation   : 'fade',
				addLast		: true
			};
			options = $.extend(defaults, options);
			
			// add class if menu item has sumbenu
			menu.find("li:has(ul)")
				.addClass("submenu")
				.append("<span class='menu-toggle'>") // responsive menu toggle
				.append("<span class='menu-arr-bottom'></span><span class='menu-arr-top'></span>") // border arrows
			;	

			// add class if submanu item has another sumbenu
			if( options.arrows ) {
				menu.find( "li ul li:has(ul) > a" ).append( "<span class='menu-arrow'><i class='icon-chevron-right'></i></span>" );
			}
			
			// add bullets in each top-level menu item
			menu.children( "li:not(:last)" ).append( "<em>&#8226;</em>" );

			// hover
			menu.find("li").hover(function() {
				$(this).addClass(options.hoverClass);
				if (options.animation === "fade") {
					$(this).children("ul").fadeIn(options.delay);
				} else if (options.animation === "toggle") {
					$(this).children("ul").stop(true,true).slideDown(options.delay);
				}
			}, function(){
				$(this).removeClass(options.hoverClass);
				if (options.animation === "fade") {
					$(this).children("ul").fadeOut(options.delay);
				} else if (options.animation === "toggle") {
					$(this).children("ul").stop(true,true).slideUp(options.delay);
				}
			});
			
			// add class .last-item to last sumbenu item 
			$(".submenu ul li:last-child", menu).addClass("last-item");
			
			// addLast
			if(options.addLast) {
				$("> li:last-child", menu)
					.addClass("last")
					.prev()
						.addClass("last");
			}
	
		}
	});
})(jQuery);