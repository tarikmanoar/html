$(document).ready(function(){

	$(document).on("click", "#nfyReadClose", function() {
		$("#nfyWrap").fadeOut(500, function(){$(this).remove() });
	});
	$(".notifybub").click(function() {
		// user clicked on N bubble again to hide event-box
		if( $("#nfyWrap").length>0 && $("#nfyWrap").is(":visible") ) {
			$("#nfyWrap").fadeOut(500, function(){$(this).remove() });
		}
		else {
		var evrequest = "receiveNotify";
			$.ajax({
				 type: "POST",
				 url: eventnotifyAjaxURL, // root
				 data: {ajax:evrequest},
				 cache: false,
				 success: function(data) {
					// remove Event-Box if formerly loaded
					$("#nfyWrap").fadeOut(500, function(){$(this).remove() });
					// insert ajax-loaded html 
					// $(".king-nav-user").append(data);
					$(".king-history-new-event-link").append(data);
					// make yellow notification bubble gray
					$(".ntfy-event-new").addClass('ntfy-read');
				 }
			});
		}
	});
	
	$(document).click(function(event) { 
		if($(event.target).parents().index($('#nfyWrap')) == -1) {
			if($('#nfyWrap').is(":visible")) {
				$("#nfyWrap").fadeOut(500, function(){$(this).remove() });
			}
		}        
	})

});