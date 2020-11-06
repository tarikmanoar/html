(function($){
	"use strict";

	// get portfolio using ajax
	function greennature_portfolio_ajax(port_holder, ajax_info, category, paged){

		var args = new Object();
		args['num-fetch'] = ajax_info.attr('data-num-fetch');
		args['num-excerpt'] = ajax_info.attr('data-num-excerpt');
		args['order'] = ajax_info.attr('data-order');
		args['orderby'] = ajax_info.attr('data-orderby');
		args['thumbnail-size'] = ajax_info.attr('data-thumbnail-size');
		args['thumbnail-size-featured'] = ajax_info.attr('data-thumbnail-size-featured');
		args['portfolio-style'] = ajax_info.attr('data-port-style');
		args['portfolio-size'] = ajax_info.attr('data-port-size');
		args['portfolio-layout'] = ajax_info.attr('data-port-layout');
		args['pagination'] = ajax_info.attr('data-pagination');
		args['category'] = (category)? category: ajax_info.attr('data-category');
		args['paged'] = (paged)? paged: 1;

		// hide the un-used elements
		var animate_complete = false;
		port_holder.slideUp(500, function(){
			animate_complete = true;
		});
		port_holder.siblings('.greennature-pagination').slideUp(500, function(){
			$(this).remove();
		});
		
		var now_loading = $('<div class="greennature-now-loading"></div>');
		now_loading.insertBefore(port_holder);
		now_loading.slideDown();
		
		// call ajax to get portfolio item
		$.ajax({
			type: 'POST',
			url: ajax_info.attr('data-ajax'),
			data: {'action': 'greennature_get_portfolio_ajax', 'args': args},
			error: function(a, b, c){ console.log(a, b, c); },
			success: function(data){
				now_loading.css('background-image','none').slideUp(function(){ $(this).remove(); });	
			
				var port_item = $(data).hide();
				if( animate_complete ){
					greennature_bind_portfolio_item(port_holder, port_item);
				}else{
					setTimeout(function() {
						greennature_bind_portfolio_item(port_holder, port_item);
					}, 500);
				}	
			}
		});		
		
	}
	
	function greennature_bind_portfolio_item(port_holder, port_item){
		if( port_holder ){
			port_holder.replaceWith(port_item);
		}
		port_item.slideDown();
		
		// bind events
		port_item.each(function(){
			if( $(this).hasClass('greennature-pagination') ){
				$(this).children().greennature_bind_portfolio_pagination();
			}
		});	
		port_item.greennature_fluid_video();		
		port_item.find('.greennature-portfolio-item').greennature_portfolio_hover();
		port_item.find('.flexslider').greennature_flexslider();
		port_item.find('.greennature-isotope').greennature_isotope();
		port_item.find('[data-rel="fancybox"]').greennature_fancybox();
		
		if( port_item.closest('.greennature-portfolio-link-lightbox').length > 0 ){
			port_item.find('a[data-lightbox]').click(function(){
				$(this).greennature_portfolio_lightbox(); return false;
			});
		}
		port_item.find('img').load(function(){ $(window).trigger('resize'); });
	}
	
	$.fn.greennature_bind_portfolio_pagination = function(){
		$(this).click(function(){
			if($(this).hasClass('current')) return;
			var port_holder = $(this).parent('.greennature-pagination').siblings('.portfolio-item-holder');
			var ajax_info = $(this).parent('.greennature-pagination').siblings('.greennature-ajax-info');
			
			var category = $(this).parent('.greennature-pagination').siblings('.portfolio-item-filter');
			if( category ){
				category = category.children('.active').attr('data-category');
			}

			greennature_portfolio_ajax(port_holder, ajax_info, category, $(this).attr('data-paged'));
			return false;
		});		
	}
	
	$.fn.greennature_portfolio_hover = function(){
		$(this).each(function(){
			var port_item = $(this);
			
			$(this).find('.portfolio-thumbnail').hover(function(){
				$(this).children('img').transition({ scale: 1.1, duration: 200 });
				$(this).find('.portfolio-overlay').animate({opacity: 0.6}, 200);
				$(this).find('.portfolio-overlay-content, .portfolio-overlay-icon').animate({opacity: 1}, 200);
			}, function(){
				$(this).children('img').transition({ scale: 1, duration: 200 });
				$(this).find('.portfolio-overlay').animate({opacity: 0}, 200);
				$(this).find('.portfolio-overlay-content, .portfolio-overlay-icon').animate({opacity: 0}, 200);
			});		

			function set_portfolio_height(){
				
				port_item.find('.portfolio-overlay-content').each(function(){
					$(this).css('margin-top', -($(this).height()/2));
				});		
			}	
			set_portfolio_height();
			$(window).resize(function(){ set_portfolio_height(); });
		});		
	}

	$(document).ready(function(){

		// script for portfolio item
		$('.greennature-portfolio-item').greennature_portfolio_hover();
		
		// script for calling ajax portfolio when selecting category
		$('.portfolio-item-filter a').click(function(){
			if($(this).hasClass('active')) return false;
			$(this).addClass('active').siblings().removeClass('active');
		
			var port_holder = $(this).parent('.portfolio-item-filter').siblings('.portfolio-item-holder');
			var ajax_info = $(this).parent('.portfolio-item-filter').siblings('.greennature-ajax-info');

			greennature_portfolio_ajax(port_holder, ajax_info, $(this).attr('data-category'));
			return false;
		});
		
		// script for calling ajax portfolio when using pagination
		$('.greennature-pagination.greennature-ajax .page-numbers').greennature_bind_portfolio_pagination();
	});

})(jQuery);