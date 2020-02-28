/*
Name: 			theme.js
Written by: 	Glorythemes - (http://www.glorytheme.com)
Version: 		1.1.0
*/

// ------------------------------------------------------------------

// ************************  CONTENTS   *****************************

// ------------------------------------------------------------------ 

/* 

//---------------------
// WINDOW LOAD FUCNTION
//---------------------
1. prettyPhoto
2. initIsotopeGrid
3. preload

//-----------------------
// WINDOW RESIZE FUCNTION
//-----------------------
1. initIsotopeGrid
2. preload


//----------------------
// WINDOW READY FUCNTION
//----------------------
1.	owlSlider
2.	progressBar
3.	bootstrapForm
4.  subscribeForm
5.  bgImage
6.  parallaxBg
7.  fullscreen
8.  backgroundVideo
9.  colEqheight
10. allCharts
11.	dataAnimations

*/






//---------------------
// WINDOW LOAD FUCNTION
//---------------------

jQuery(window).load(function() {

	prettyPhoto();

	initIsotopeGrid();
	
	preload();

});	


//-----------------------
// WINDOW RESIZE FUCNTION
//-----------------------

function resizeend() {

	if (new Date() - rtime < delta) {

		setTimeout(resizeend, delta);

	} else {

		timeout = false;

		initIsotopeGrid();

		colEqheight();

	} 

}


//----------------------
// WINDOW READY FUCNTION
//----------------------

$(document).ready(function() {
	
	
	// Init Fuctions
	
	owlSlider();
	
	progressBar();
	
	bootstrapForm();
	
	subscribeForm();
	
	bgImage();
	
	parallaxBg();
	
	fullscreen();
	
	backgroundVideo();
	
	colEqheight();
	
	allCharts();
	
	dataAnimations();
	
	
		
	// Counter
	$(".count-number").appear(function(){
		$('.count-number').each(function(){
			datacount = $(this).attr('data-count');
			$(this).find('.counter').delay(6000).countTo({
				from: 10,
				to: datacount,
				speed: 3000,
				refreshInterval: 50,
			});
		});
	});
	
	
	// Countdown
	$('.daycounter').each(function(){
		var counter_id = $(this).attr('id');
		var counter_type = $(this).data('counter');
		var year = $(this).data('year');
		var month = $(this).data('month');
		var date = $(this).data('date');
		var countDay = new Date();
		countDay = new Date(year, month - 1, date);
		
		if( counter_type == "down" ) {
			$("#"+counter_id).countdown({
				labels: ['Years', 'Months', 'Weeks', 'Days', 'Hours', 'Mins', 'Secs'],
				labels1: ['Year', 'Month', 'Week', 'Day', 'Hour', 'Min', 'Sec'],
				until: countDay
			});
		} else if( counter_type == "up" ) {
			$("#"+counter_id).countdown({
				labels: ['Years', 'Months', 'Weeks', 'Days', 'Hours', 'Mins', 'Secs'],
				labels1: ['Year', 'Month', 'Week', 'Day', 'Hour', 'Min', 'Sec'],
				since: countDay
			});
		}
		
	});
	
	
	
	
	// Scroll top top
	var offset = 300,
		offset_opacity = 1200,
		scroll_top_duration = 700,
		$back_to_top = $('.cd-top');

	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

	
	// Tooltip
	$(function () {
	  $('[data-toggle="tooltip"]').tooltip()
	})
	
	// Popover
	$(function () {
	  $('[data-toggle="popover"]').popover()
	})
		
	// Form Focus 
	$("input").focus(function(){
	
		$(this).parent().addClass("input-focus");
	
	}).blur(function(){
		
		$(this).parent().removeClass("input-focus");
	})
	

});



// Pre Loader
function preload(){
	$(".loader-inner").delay(700).fadeOut();
	$("#pageloader").delay(1000).fadeOut("slow")
}


// Theme Panel
$( "#theme-panel .panel-button" ).click(function(){
	$( "#theme-panel" ).toggleClass( "close-theme-panel", "open-theme-panel", 1000 );
	$( "#theme-panel" ).toggleClass( "open-theme-panel", "close-theme-panel", 1000 );
	return false;
});

// Boxed
$( "#layout-config-boxed" ).click(function(){
	$( "html" ).toggleClass( "boxed" );
	initIsotopeGrid();
	return false;
});	

// Wide Mode
$( "#layout-config-wide" ).click(function(){
	$( "html" ).removeClass( "boxed" ).toggleClass( "wide" );
	initIsotopeGrid();
	return false;
});	



// Boxed Mode Backgrounds
function boxedMode(){
	$( "html" ).removeClass( "boxed-solid boxed-image boxed-pattern" );
}

// Boxed Mode Backgrounds
$( "#bg-config-color, #bg-config-pattern, #bg-config-image" ).click(function(){
	
	boxedMode();
	
	if($(this).attr('id') == 'bg-config-color' ){	
		$( "html.boxed" ).addClass( "boxed-solid" );
		
	}else if($(this).attr('id') == 'bg-config-pattern' ){
		$( "html.boxed" ).addClass( "boxed-pattern" );
		
	}else{
		$( "html.boxed" ).addClass( "boxed-image" );	
	}
	
	return false;
	
});	




// Progress 
function progressBar() {		

	if ($('.progress-bar').length) {

		$('.progress-bar').each(function() {

			$(this).appear(function(){

			 var datavl = $(this).attr('data-percentage');

			 $(this).animate({ "width" : datavl + "%"}, '1200');

			 $(this).find('span').fadeIn(4000);

			 $(this).css('background', $(this).attr('data-bg'));

			})

		});

		$('.progress').each(function() {

			var dathgt = $(this).attr('data-height');

			$(this).css({'line-height': dathgt + "px", 'height': dathgt});

		});

	}

} 


// Pretty Photo
function prettyPhoto() {

	"use strict";
	
	if( $("a[rel^='prettyPhoto'], a[data-rel^='prettyPhoto']").length != 0 ) { 
	
	 $("a[rel^='prettyPhoto'], a[data-rel^='prettyPhoto']").prettyPhoto({hook: 'data-rel', social_tools: false, deeplinking: false});
	
	}

}

// Background Image
function bgImage(){		

	var pageSection = $("section,.bg-img");

	pageSection.each(function(indx){

		if ($(this).attr("data-background")){

			$(this).css("background-image", "url(" + $(this).data("background") + ")");

		}

	});

}


// Fullscreen
function fullscreen() {
	"use strict";
	if ($(window).width() > 1025) {
		$('.full-screen, .full-screen .item').css({ 'height': $(window).height() });
			$(window).on('resize', function() {
			$('.full-screen, .full-screen .item').css({ 'height': $(window).height() });
		});
	}
}


// Owl Slider
 function owlSlider() {

	(function($) {

		"use strict";

		if ($('.owl-carousel').length) {		    

			  $(".owl-carousel").each(function (index) {

				var autoplay = $(this).data('autoplay');

				var timeout = $(this).data('delay');

				var slidemargin = $(this).data('margin');

				var slidepadding = $(this).data('stagepadding');

				var items = $(this).data('items');

				var animationin = $(this).data('animatein');

				var animationout = $(this).data('animateout');

				var itemheight = $(this).data('autoheight');

				var itemwidth = $(this).data('autowidth');

				var itemmerge = $(this).data('merge');

				var navigation = $(this).data('nav');

				var pagination = $(this).data('dots');

				var infinateloop = $(this).data('loop');

				var itemsdesktop = $(this).data('desktop');

				var itemsdesktopsmall = $(this).data('desktopsmall');

				var itemstablet = $(this).data('tablet');

				var itemsmobile = $(this).data('mobile');

				$(this).on('initialized.owl.carousel changed.owl.carousel',function(property){

					var current = property.item.index;

					$(property.target).find(".owl-item").eq(current).find(".animated").each(function(){

						var elem = $(this);

						var animation = elem.data('animate');

						if ( elem.hasClass('visible') ) {

							elem.removeClass( animation + ' visible');

						}

						if ( !elem.hasClass('visible') ) {

							var animationDelay = elem.data('animation-delay');

							if ( animationDelay ) {			

								setTimeout(function(){

								 elem.addClass( animation + " visible" );

								}, animationDelay);				

							} else {

								elem.addClass( animation + " visible" );

							}

						}

					});					

				}).owlCarousel({ 

					autoplay: autoplay,

					autoplayTimeout:timeout,

					items : items,

					margin:slidemargin,

					autoHeight:itemheight,

					animateIn: animationin,

					animateOut: animationout,

					autoWidth:itemwidth,

					stagePadding:slidepadding,

					merge:itemmerge,

					nav:navigation,

					dots:pagination,

					loop:infinateloop,

					responsive:{

						479:{

							items:itemsmobile,

						},

						768:{

							items:itemstablet,

						},

						980:{

							items:itemsdesktopsmall,

						},

						1199:{

							items:itemsdesktop,

						}

					}

				});

			});

		}  

	})(jQuery);

}


// Parallax
function parallaxBg(){		
	if ($(window).width() > 1025) {
		if($('.parallax-bg').length != 0 && !navigator.userAgent.match(/iPad|iPhone|Android/i)){	
	
				$.stellar({
	
					horizontalScrolling: true,
	
					verticalOffset: 0,
	
					horizontalOffset: 0,
	
					responsive: true,
	
					scrollProperty: 'scroll',
	
					parallaxElements: false,
	
			  });
	
			}
		}	

}


// Animation 
function dataAnimations() {
  $('[data-animation]').each(function() {
		var element = $(this);
		element.addClass('animated');
		element.appear(function() {
			var delay = ( element.data('delay') ? element.data('delay') : 1 );
			if( delay > 1 ) element.css('animation-delay', delay + 'ms');				
			element.addClass( element.data('animation') );
			setTimeout(function() {
				element.addClass('visible');
			}, delay);
		});
  });
}

// Column Equal Height
function equalHeight(group) {

	var tallest = 0;

	group.each(function() {

		var thisHeight = $(this).outerHeight();

		if(thisHeight > tallest) {

			tallest = thisHeight;

		}

	});

	group.css("height", tallest);

}

function colEqheight() {

	equalHeight($(".row > .col-eq-height"));

} 


// Background Video
function backgroundVideo(){

	if (typeof $.fn.mb_YTPlayer != 'undefined' && $.isFunction($.fn

		.mb_YTPlayer)) {

		var m = false;

		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(

			navigator.userAgent)) {

			m = true

		}

		var v = $('.player');

		if (m == false) {

			v.mb_YTPlayer();

			$('#video-controls a')

				.each(function() {

					var t = $(this);

					t.on('click', (function(e) {

						e.preventDefault();

						if (t.hasClass(

							'fa-volume-off')) {

							t.removeClass(

									'fa-volume-off'

								)

								.addClass(

									'fa-volume-down'

								);

							v.unmuteYTPVolume();

							return false

						}

						if (t.hasClass(

							'fa-volume-down')) {

							t.removeClass(

									'fa-volume-down'

								)

								.addClass(

									'fa-volume-off'

								);

							v.muteYTPVolume();

							return false

						}

						if (t.hasClass('fa-pause')) {

							t.removeClass(

									'fa-pause')

								.addClass('fa-play');

							v.pauseYTP();

							return false

						}

						if (t.hasClass('fa-play')) {

							t.removeClass('fa-play')

								.addClass(

									'fa-pause');

							v.playYTP();

							return false

						}

					}));

				});

			$('#video-controls')

				.show();

		}

	}

}


// Contact Form
function bootstrapForm(){	

	if ( $( "#bootstrap-form" ).length !== 0 ) {

		$('#bootstrap-form').bootstrapValidator({

			container: 'tooltip',

			feedbackIcons: {

				valid: 'fa fa-check',

				warning: 'fa fa-user',

				invalid: 'fa fa-times',

				validating: 'fa fa-refresh'

			},

			fields: { 

				contact_name: {

					validators: {

						notEmpty: {

							message: ''

						}

					}

				},

				contact_email: {

					validators: {

						notEmpty: {

							message: ''

						},

						emailAddress: {

							message: ''

						}

					}

				},

				contact_phone: {

					validators: {

						notEmpty: {

							message: ''

						}

					}

				},

				contact_message: {

					validators: {

						notEmpty: {

							message: ''

						}

					}

				},

			}

		})	

		.on('success.form.bv', function(e) {

			e.preventDefault();

			var $form        = $(e.target),

			validator    = $form.data('bootstrapValidator'),

			submitButton = validator.getSubmitButton();

			var form_data = $('#bootstrap-form').serialize();

			$.ajax({

					type: "POST",

					dataType: 'json',

					url: "form/contact-form.php",					

					data: form_data,

					success: function(msg){						

						$('.form-message').html(msg.data);

						$('.form-message').show();

						submitButton.removeAttr("disabled");

						resetForm($('#bootstrap-form'));						

					},

					error: function(msg){}

			 });

			return false;

		});

	}

	function resetForm($form) {



		$form.find(

				'input:text, input:password, input, input:file, select, textarea'

			)

			.val('');



		$form.find('input:radio, input:checkbox')

			.removeAttr('checked')

			.removeAttr('selected');

		$form.find('button[type=submit]')

			.attr("disabled", "disabled");	



	}

}



// Subscribe 
function subscribeForm(){	 

	if ( $( "#subscribe-form" ).length !== 0 ) {

		$('#subscribe-form').bootstrapValidator({

			container: 'tooltip',

			feedbackIcons: {

				valid: 'fa fa-check',

				warning: 'fa fa-user',

				invalid: 'fa fa-times',

				validating: 'fa fa-refresh'

			},

			fields: { 

				subscribe_email: {

					validators: {

						notEmpty: {

							message: 'Email is required. Please enter email.'

						},

						emailAddress: {

							message: 'Please enter a correct email address.'

						}

					}

				},	

			}

		})	

		.on('success.form.bv', function(e) {

			e.preventDefault();

			var $form        = $(e.target),

			validator    = $form.data('bootstrapValidator'),

			submitButton = validator.getSubmitButton();

			var form_data = $('#subscribe-form').serialize();

			$.ajax({

					type: "POST",

					dataType: 'json',

					url: "form/subscription.php",					

					data: form_data,

					success: function(msg){						

						$('.form-message1').html(msg.data);

						$('.form-message1').show();

						submitButton.removeAttr("disabled");

						resetForm($('#subscribe-form'));						

					},

					error: function(msg){}

			 });

			return false;

		});

	}

	function resetForm($form) {



		$form.find(

				'input:text, input:password, input, input:file, select, textarea'

			)

			.val('');



		$form.find('input:radio, input:checkbox')

			.removeAttr('checked')

			.removeAttr('selected');

		$form.find('button[type=submit]')

			.attr("disabled", "disabled");



	}

}



// Isotope Grid
function initIsotopeGrid() {

  $('.isotope-grid').each(function(){  

	   var $port_container = $(this);  

		$containerProxy = $port_container;

		var filter_selector = $port_container.parent().find('.isotope-filters a.active').data('filter');  

		var gutterSize = $port_container.data('gutter');  

		var columns = $port_container.data('columns');

		 

		if ($(window).width() > 1025) {

			$port_container.imagesLoaded(function(){

				if( columns == 2 ) {

					var masonryGutter = gutterSize / columns;					

				} else if( columns == 3 ) {

					var colValue = gutterSize / 2;

					var masonryGutter = colValue + ( colValue / 3 );					

				} else if( columns == 4 ) {

					var colValue = gutterSize / 2;

					var masonryGutter = colValue + ( colValue / 2 );					

				}

				

				// calculate columnWidth

				var colWidth = Math.floor( $containerProxy.width() / columns );

				var masonryWidth = Math.floor( colWidth - masonryGutter );

				

				$port_container.find('.item').css('width', masonryWidth);

				$port_container.find('.item').css('margin-bottom', gutterSize);

		

				$port_container.isotope({

					resizable: false,

					filter: filter_selector,

					animationEngine: "css",

					masonry: {

						columnWidth: masonryWidth,

						gutter: gutterSize

					},

				});

				

				jQuery( window ).bind( 'load resize', function() {

					var colWidth = Math.floor( $containerProxy.width() / columns );

					var masonryWidth = Math.floor( colWidth - masonryGutter );

					$port_container.find('.item').css('width', masonryWidth);

					

					$port_container.isotope({

						masonry: {

							columnWidth: masonryWidth,

							gutter: gutterSize

						},

					});

				});

			});					

		}

		if ($(window).width() > 992 && $(window).width() < 1024) {

			$port_container.imagesLoaded(function(){

				if( columns == 4 ) {

					columns = 3;

				}

				

				if( columns == 2 ) {

					var masonryGutter = gutterSize / columns;					

				} else if( columns == 3 || columns == 4 ) {

					var colValue = gutterSize / 2;

					var masonryGutter = colValue + ( colValue / 3 );					

				}

				

				// calculate columnWidth

				var colWidth = Math.floor( $containerProxy.width() / columns );

				var masonryWidth = Math.floor( colWidth - masonryGutter );

				

				$port_container.find('.item').css('width', masonryWidth);

				$port_container.find('.item').css('margin-bottom', gutterSize);

		

				$port_container.isotope({

					resizable: false,

					filter: filter_selector,

					animationEngine: "css",

					masonry: {

						columnWidth: masonryWidth,

						gutter: gutterSize

					},

				});

				

				jQuery( window ).bind( 'load resize', function() {

					var colWidth = Math.floor( $containerProxy.width() / columns );

					var masonryWidth = Math.floor( colWidth - masonryGutter );

					$port_container.find('.item').css('width', masonryWidth);

					

					$port_container.isotope({

						masonry: {

							columnWidth: masonryWidth,

							gutter: gutterSize

						},

					});

				});

			});	

		}

		if ($(window).width() > 768 && $(window).width() < 991) {

			$port_container.imagesLoaded(function(){

				if( columns == 3 || columns == 4 ) {

					columns = 2;

				}

				

				if( columns == 2 ) {

					var masonryGutter = gutterSize / columns;					

				}

				

				// calculate columnWidth

				var colWidth = Math.floor( $containerProxy.width() / columns );

				var masonryWidth = Math.floor( colWidth - masonryGutter );

				

				$port_container.find('.item').css('width', masonryWidth);

				$port_container.find('.item').css('margin-bottom', gutterSize);

		

				$port_container.isotope({

					resizable: false,

					filter: filter_selector,

					animationEngine: "css",

					masonry: {

						columnWidth: masonryWidth,

						gutter: gutterSize

					},

				});

				

				jQuery( window ).bind( 'load resize', function() {

					var colWidth = Math.floor( $containerProxy.width() / columns );

					var masonryWidth = Math.floor( colWidth - masonryGutter );

					$port_container.find('.item').css('width', masonryWidth);

					

					$port_container.isotope({

						masonry: {

							columnWidth: masonryWidth,

							gutter: gutterSize

						},

					});

				});

			});

		}

		if ($(window).width() < 767) {

			$port_container.imagesLoaded(function(){

				var gutterSize = Math.floor( $port_container.closest('.isotope-grid').attr('data-gutter') );

				$port_container.find('.item').css('width', '100%');

				$port_container.find('.item').css('margin-bottom', gutterSize);

				

				var selector = $port_container.parent().find('.isotope-filters a.active').data('filter');

				

				$port_container.isotope({

					resizable: false,

					filter: filter_selector,

				 	animationEngine: "css",

					masonry: {

						columnWidth: '.item',

						gutter: 0

					},

				});


			});

		}



  

		// Filter

		$('.isotope-filters a').click(function(){

		

			$(this).parent().parent().find('a.active').removeClass('active');    

			$(this).addClass('active');

			var selector = $(this).parent().parent().find('a.active').attr('data-filter');  

			$(this).parents().find('.isotope-grid').isotope({ filter: selector, animationEngine : "css" });

		

			return false; 

		});


	});

}



// Pie Chart 
function allCharts() {

	jQuery(window).load( function(){

		var pieChartData = [

			{

				value: 90,

				color:"#2196f3"

			},

			{

				value : 30,

				color : "#333"

			},

			{

				value : 60,

				color : "#2196f3"

			},

			{

				value : 100,

				color : "#2196f3"

			},

			{

				value : 20,

				color : "#2196f3"

			}



		];


		function showPieChart(){

			var ctx = document.getElementById("pieChart").getContext("2d");

			new Chart(ctx).Pie(pieChartData,{	responsive: true	});

		}

	
		$('#pieChart').appear( function(){ $(this).css({ opacity: 1 }); setTimeout(showPieChart,300); },{accX: 0, accY: -155},'easeInCubic');


	});



}




/* SUB MENU
	$('#header nav ul li a').filter(function () {
	   return this.href == url;
	}).parent().addClass('active');
	// apply active class to the li before the ul class of the submenu
	$('#header nav ul li a').filter(function () {
	   return this.href == url;
	}).parent().parent().prev('li').addClass('active'); */

// Google Map 

window.onload = MapLoadScript;
function GmapInit() {
	  Gmap = jQuery('.map-canvas');
	  Gmap.each(function() {
		var $this           = $(this),
			lat             = -35.2835,
			lng             = 149.128,
			zoom            = 12,
			scrollwheel     = false,
			zoomcontrol 	= true,
			draggable       = true,
			mapType         = google.maps.MapTypeId.ROADMAP,
			title           = '',
			contentString   = '',
			dataLat         = $this.data('lat'),
			dataLng         = $this.data('lng'),
			dataZoom        = $this.data('zoom'),
			dataType        = $this.data('type'),
			dataScrollwheel = $this.data('scrollwheel'),
			dataZoomcontrol = $this.data('zoomcontrol'),
			dataHue         = $this.data('hue'),
			dataSaturation  = $this.data('saturation'),
			dataLightness   = $this.data('lightness'),
			dataTitle       = $this.data('title'),
			dataContent     = $this.data('content');
			
		if( dataZoom !== undefined && dataZoom !== false ) {
			zoom = parseFloat(dataZoom);
		}
		if( dataLat !== undefined && dataLat !== false ) {
			lat = parseFloat(dataLat);
		}
		if( dataLng !== undefined && dataLng !== false ) {
			lng = parseFloat(dataLng);
		}
		if( dataScrollwheel !== undefined && dataScrollwheel !== null ) {
			scrollwheel = dataScrollwheel;
		}
		if( dataZoomcontrol !== undefined && dataZoomcontrol !== null ) {
			zoomcontrol = dataZoomcontrol;
		}
		if( dataType !== undefined && dataType !== false ) {
			if( dataType == 'satellite' ) {
				mapType = google.maps.MapTypeId.SATELLITE;
			} else if( dataType == 'hybrid' ) {
				mapType = google.maps.MapTypeId.HYBRID;
			} else if( dataType == 'terrain' ) {
				mapType = google.maps.MapTypeId.TERRAIN;
			}		  	
		}
		if( dataTitle !== undefined && dataTitle !== false ) {
			title = dataTitle;
		}
		if( navigator.userAgent.match(/iPad|iPhone|Android/i) ) {
			draggable = false;
		}
		
		var mapOptions = {
		  zoom        : zoom,
		  scrollwheel : scrollwheel,
		  zoomControl : zoomcontrol,
		  draggable   : draggable,
		  center      : new google.maps.LatLng(lat, lng),
		  mapTypeId   : mapType
		};		
		var map = new google.maps.Map($this[0], mapOptions);
		
		var image = 'images/default/map-marker.png';
		if( dataContent !== undefined && dataContent !== false ) {
			contentString = '<div class="map-data">' + '<h6>' + title + '</h6>' + '<div class="map-content">' + dataContent + '</div>' + '</div>';
		}
		var infowindow = new google.maps.InfoWindow({
			content: contentString
		});
		
		var marker = new google.maps.Marker({
		  position : new google.maps.LatLng(lat, lng),
		  map      : map,
		  icon     : image,
		  title    : title
		});
		if( dataContent !== undefined && dataContent !== false ) {
			google.maps.event.addListener(marker, 'click', function() {
				infowindow.open(map,marker);
			});
		}
		
		if( dataHue !== undefined && dataHue !== false ) {
		  var styles = [
			{
			  stylers : [
				{ hue : dataHue },
				{ saturation: dataSaturation },
				{ lightness: dataLightness }
			  ]
			}
		  ];
		  map.setOptions({styles: styles});
		}
	 });	 
}

function MapLoadScript() {
	
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAAT3zaiO9ryRgreIPwHqWHIlmN3n9gGHU&v=3.exp&sensor=false&' + 'callback=GmapInit';
	//script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDpJn4TOjxdVfAOToPnZnSyV8s5dmfLH6o&v=3.exp&sensor=false&' + 'callback=GmapInit';
	document.body.appendChild(script);
}
 
