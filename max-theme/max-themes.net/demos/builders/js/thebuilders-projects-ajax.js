(function($){

	// Get required DOM elements

	var filter   	   = $('.loop .nz-projects-filter');
	var projects 	   = $('.loop .projects-post');
	var loading  	   = $('.loop .ajax-loading-wrap');
	var error          = $('.loop .ajax-loading-error');
	var requestRunning = false;

	// ON click loading
	filter.find('.filter').on('click',function(){

		if (requestRunning) {
			return;
		}

		requestRunning = true;

        var link = $(this).attr('data-link');
        $('.nz-projects-filter .active').removeClass('active');
		$(this).toggleClass('active');

		loading.fadeIn(300,function(){
			projects
			.css('opacity','0')
			.empty();

			projects.load(link + ' .projects',
				function(response, status, xhr) {

					if (status == "error") {
						projects.css('height','200px');
						loading.fadeOut(300);
						error.fadeIn(300,function(){
							requestRunning = false;
						});
					} else {
						imagesLoaded( $('.loop .projects-post'), function() {
							$('.loop .projects-post').masonry("reloadItems");
	  						$('.loop .projects-post').masonry({
	  							itemSelector: '.projects',
								columnWidth:'.projects'
	  						});
	  						setTimeout(function(){
	  							$('.loop .projects-post')
	  							.css('opacity','1');
								loading.fadeOut(300);
								error.fadeOut(300);
	  						},600);
						});
						requestRunning = false;
					}
				}
			);

		});
	});

})(jQuery);