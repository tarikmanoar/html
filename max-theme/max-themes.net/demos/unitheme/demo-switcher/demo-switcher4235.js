(function($){

    this.imagePreview = function(){	
		var preview = $("a.demo-preview");
		var xOffset = 10;
		var yOffset = 20;

		preview.hover(
			function(e){
				this.t = this.title;
				this.title = "";
				href = $(this).data('img');

				var c = (this.t != "") ? "<br/>" + this.t : "";
				$("body").append("<div id='demo-preview'><img src='"+ href +"' alt='Image demo-preview' />"+ c +"</div>");								 
				$("#demo-preview")
					.css("top",(e.pageY + xOffset) + "px")
					.css("left",-(e.pageX + yOffset) + "px")
					.fadeIn(250);
		    },
			function(){
				this.title = this.t;	
				$("#demo-preview").remove();
		    }
		);

		preview.mousemove(function(e){
			$("#demo-preview")
				.css("top",(e.pageY + xOffset) + "px")
				.css("left",(e.pageX + yOffset) + "px");
		});			
	};

	var frontEndPanel = $('.front-end-panel');
	frontEndPanel.find('.front-end-trigger').on('click', function(){
		frontEndPanel.toggleClass('close-front-end');
	});
	if (Modernizr.mq("only screen and (min-width: 768px)")) {
		imagePreview();
	};
    
})(jQuery);