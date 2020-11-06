(function($){
    $(document).bind('ready ajaxComplete',function(){
       $('.cms-grid-masonry').each(function(){
       		$this = $(this);
          $filter = $this.parent().find('.cms-grid-filter');
       		$this.imagesLoaded(function(){
       			$this.shuffle({
		           itemSelector:'.cms-grid-item',
		       });
       		});
          if($filter){
            $filter.find('a').on('click',function(e){
              e.preventDefault();
              // set active class
              $filter.find('a').removeClass('active');
              $(this).addClass('active');
                   
              // get group name from clicked item
              var groupName = $(this).attr('data-group');
              // reshuffle grid
              $(this).parent().parent().parent().parent().find('.cms-grid-masonry').shuffle('shuffle', groupName );
            });
          }
       });  
    });
})(jQuery);