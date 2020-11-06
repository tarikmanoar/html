(function($){
	"use strict";

	// get car using ajax
	function limoking_car_ajax(car_holder, ajax_info, category, paged){

		var args = new Object();
		args['num-fetch'] = ajax_info.attr('data-num-fetch');
		args['num-excerpt'] = ajax_info.attr('data-num-excerpt');
		args['order'] = ajax_info.attr('data-order');
		args['orderby'] = ajax_info.attr('data-orderby');
		args['thumbnail-size'] = ajax_info.attr('data-thumbnail-size');
		args['thumbnail-size-featured'] = ajax_info.attr('data-thumbnail-size-featured');
		args['car-style'] = ajax_info.attr('data-car-style');
		args['car-size'] = ajax_info.attr('data-car-size');
		args['car-layout'] = ajax_info.attr('data-car-layout');
		args['car-price-display'] = ajax_info.attr('data-car-price-display');
		args['pagination'] = ajax_info.attr('data-pagination');
		args['category'] = (category)? category: ajax_info.attr('data-category');
		args['paged'] = (paged)? paged: 1;

		// hide the un-used elements
		var animate_complete = false;
		car_holder.slideUp(500, function(){
			animate_complete = true;
		});
		car_holder.siblings('.limoking-pagination').slideUp(500, function(){
			$(this).remove();
		});
		
		var now_loading = $('<div class="limoking-now-loading"></div>');
		now_loading.insertBefore(car_holder);
		now_loading.slideDown();
		
		// call ajax to get car item
		$.ajax({
			type: 'POST',
			url: ajax_info.attr('data-ajax'),
			data: {'action': 'limoking_get_car_ajax', 'args': args},
			error: function(a, b, c){ console.log(a, b, c); },
			success: function(data){
				now_loading.css('background-image','none').slideUp(function(){ $(this).remove(); });	
			
				var car_item = $(data).hide();
				if( animate_complete ){
					limoking_bind_car_item(car_holder, car_item);
				}else{
					setTimeout(function() {
						limoking_bind_car_item(car_holder, car_item);
					}, 500);
				}	
			}
		});		
		
	}
	
	function limoking_bind_car_item(car_holder, car_item){
		if( car_holder ){
			car_holder.replaceWith(car_item);
		}
		car_item.slideDown();
		
		// bind events
		car_item.each(function(){
			if( $(this).hasClass('limoking-pagination') ){
				$(this).children().limoking_bind_car_pagination();
			}
		});	
		car_item.limoking_fluid_video();		
		car_item.find('.limoking-car-item').limoking_car_hover();
		car_item.find('.flexslider').limoking_flexslider();
		car_item.find('.limoking-isotope').limoking_isotope();
		car_item.find('[data-rel="fancybox"]').limoking_fancybox();
		
		if( car_item.closest('.limoking-car-link-lightbox').length > 0 ){
			car_item.find('a[data-lightbox]').click(function(){
				$(this).limoking_car_lightbox(); return false;
			});
		}
		car_item.find('img').load(function(){ $(window).trigger('resize'); });
	}
	
	$.fn.limoking_bind_car_pagination = function(){
		$(this).click(function(){
			if($(this).hasClass('current')) return;
			var car_holder = $(this).parent('.limoking-pagination').siblings('.car-item-holder');
			var ajax_info = $(this).parent('.limoking-pagination').siblings('.limoking-ajax-info');
			
			var category = $(this).parent('.limoking-pagination').siblings('.car-item-filter');
			if( category ){
				category = category.children('.active').attr('data-category');
			}

			limoking_car_ajax(car_holder, ajax_info, category, $(this).attr('data-paged'));
			return false;
		});		
	}
	
	$.fn.limoking_car_hover = function(){
		$(this).each(function(){
			var car_item = $(this);
			
			$(this).find('.car-thumbnail').hover(function(){
				$(this).children('img').transition({ duration: 200 });
				$(this).find('.car-overlay').animate({opacity: 0.5}, 200);
				$(this).find('.car-overlay-content, .car-overlay-icon').animate({opacity: 1}, 200);
			}, function(){
				$(this).children('img').transition({ duration: 200 });
				$(this).find('.car-overlay').animate({opacity: 0}, 200);
				$(this).find('.car-overlay-content, .car-overlay-icon').animate({opacity: 0}, 200);
			});		

			function set_car_height(){
				
				car_item.find('.car-overlay-content').each(function(){
					$(this).css('margin-top', -($(this).height()/2));
				});		
			}	
			set_car_height();
			$(window).resize(function(){ set_car_height(); });
		});		
	}

	$(document).ready(function(){

		// script for car item
		$('.limoking-car-item').limoking_car_hover();
		
		// script for calling ajax car when selecting category
		$('.car-item-filter a').click(function(){
			if($(this).hasClass('active')) return false;
			$(this).addClass('active').siblings().removeClass('active');
		
			var car_holder = $(this).parent('.car-item-filter').siblings('.car-item-holder');
			var ajax_info = $(this).parent('.car-item-filter').siblings('.limoking-ajax-info');

			limoking_car_ajax(car_holder, ajax_info, $(this).attr('data-category'));
			return false;
		});
		
		// script for calling ajax car when using pagination
		$('.limoking-pagination.limoking-ajax .page-numbers').limoking_bind_car_pagination();
	});

})(jQuery);