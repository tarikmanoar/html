jQuery(document).ready(function($){
	"use strict";
	$('.cms-grid-wraper').each(function(){
		var $this = $(this);
		var $id = $(this).attr('id');
		$this.find('a.page-numbers').live('click',function(){
			$this.fadeTo('slow',0.3);
			var $link = $(this).attr('href');
			jQuery.get($link,function(data){
				$this.html($(data).find('#'+$id).html());
				$this.fadeTo('slow',1);
			});
			return false;
		});
	})
});