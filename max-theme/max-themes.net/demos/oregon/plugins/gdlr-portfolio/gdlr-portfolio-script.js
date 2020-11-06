(function($){
	"use strict";

	// get portfolio using ajax
	function gdlr_portfolio_ajax(port_holder, ajax_info, category, paged){

		var args = new Object();
		args['num-fetch'] = ajax_info.attr('data-num-fetch');
		args['num-excerpt'] = ajax_info.attr('data-num-excerpt');
		args['order'] = ajax_info.attr('data-order');
		args['orderby'] = ajax_info.attr('data-orderby');
		args['thumbnail-size'] = ajax_info.attr('data-thumbnail-size');
		args['portfolio-style'] = ajax_info.attr('data-port-style');
		args['portfolio-size'] = ajax_info.attr('data-port-size');
		args['portfolio-layout'] = ajax_info.attr('data-port-layout');
		args['category'] = (category)? category: ajax_info.attr('data-category');
		args['paged'] = (paged)? paged: 1;

		// hide the un-used elements
		var animate_complete = false;
		port_holder.slideUp(500, function(){
			animate_complete = true;
		});
		port_holder.siblings('.gdlr-pagination').slideUp(500, function(){
			$(this).remove();
		});
		
		var now_loading = $('<div class="gdlr-now-loading"></div>');
		now_loading.insertBefore(port_holder);
		now_loading.slideDown();
		
		// call ajax to get portfolio item
		$.ajax({
			type: 'POST',
			url: ajax_info.attr('data-ajax'),
			data: {'action': 'gdlr_get_portfolio_ajax', 'args': args},
			error: function(a, b, c){ console.log(a, b, c); },
			success: function(data){
				now_loading.css('background-image','none').slideUp(function(){ $(this).remove(); });	
			
				var port_item = $(data).hide();
				if( animate_complete ){
					gdlr_bind_portfolio_item(port_holder, port_item);
				}else{
					setTimeout(function() {
						gdlr_bind_portfolio_item(port_holder, port_item);
					}, 500);
				}	
			}
		});		
		
	}
	
	function gdlr_bind_portfolio_item(port_holder, port_item){
		if( port_holder ){
			port_holder.replaceWith(port_item);
		}
		port_item.slideDown();
		
		// bind events
		port_item.each(function(){
			if( $(this).hasClass('gdlr-pagination') ){
				$(this).children().gdlr_bind_portfolio_pagination();
			}
		});	
		port_item.gdlr_fluid_video();		
		port_item.find('.gdlr-portfolio-item').gdlr_portfolio_hover();
		port_item.find('.flexslider').gdlr_flexslider();
		port_item.find('.gdlr-isotope').gdlr_isotope();
		port_item.find('[data-rel="fancybox"]').gdlr_fancybox();
		
		if( port_item.closest('.gdlr-portfolio-link-lightbox').length > 0 ){
			port_item.find('a[data-lightbox]').click(function(){
				$(this).gdlr_portfolio_lightbox(); return false;
			});
		}
		port_item.find('img').load(function(){ $(window).trigger('resize'); });
	}
	
	$.fn.gdlr_bind_portfolio_pagination = function(){
		$(this).click(function(){
			if($(this).hasClass('current')) return;
			var port_holder = $(this).parent('.gdlr-pagination').siblings('.portfolio-item-holder');
			var ajax_info = $(this).parent('.gdlr-pagination').siblings('.gdlr-ajax-info');
			
			var category = $(this).parent('.gdlr-pagination').siblings('.portfolio-item-filter');
			if( category ){
				category = category.children('.active').attr('data-category');
			}

			gdlr_portfolio_ajax(port_holder, ajax_info, category, $(this).attr('data-paged'));
			return false;
		});		
	}
	
	$.fn.gdlr_portfolio_hover = function(){
		$(this).each(function(){
			var port_item = $(this);
			
			$(this).find('.portfolio-thumbnail').hover(function(){
				$(this).children('img').transition({ scale: 1.1, duration: 200 });
				$(this).find('.portfolio-overlay').animate({opacity: 0.85}, 200);
				$(this).find('.portfolio-overlay-content').animate({opacity: 1}, 200);
			}, function(){
				$(this).children('img').transition({ scale: 1, duration: 200 });
				$(this).find('.portfolio-overlay').animate({opacity: 0}, 200);
				$(this).find('.portfolio-overlay-content').animate({opacity: 0}, 200);
			});		
		});		
	}

	$(document).ready(function(){

		// script for portfolio item
		$('.gdlr-portfolio-item').gdlr_portfolio_hover();
		
		// script for calling ajax portfolio when selecting category
		$('.portfolio-item-filter a').click(function(){
			if($(this).hasClass('active')) return false;
			$(this).addClass('active').siblings().removeClass('active');
		
			var port_holder = $(this).parent('.portfolio-item-filter').siblings('.portfolio-item-holder');
			var ajax_info = $(this).parent('.portfolio-item-filter').siblings('.gdlr-ajax-info');

			gdlr_portfolio_ajax(port_holder, ajax_info, $(this).attr('data-category'));
			return false;
		});
		
		// script for calling ajax portfolio when using pagination
		$('.gdlr-pagination.gdlr-ajax .page-numbers').gdlr_bind_portfolio_pagination();
	});

})(jQuery);