/*-----------------------------------------------------------------------------------*/
/* 		Mian Js Start 
/*-----------------------------------------------------------------------------------*/
$(document).ready(function($) {
    "use strict"
    /*-----------------------------------------------------------------------------------*/
    /* 	LOADER
    /*-----------------------------------------------------------------------------------*/
    $("#loader").delay(500).fadeOut("slow");
    
    /*-----------------------------------------------------------------------------------*/
    /*  Top Bar
    /*-----------------------------------------------------------------------------------*/


    $("#info").on('click', function(){
        $(".hidden2").slideToggle();
    });

    // search in menu
    var $search_btn = $( '.search-box > i' ),
        $search_form = $( 'form.search-form' );

    $search_btn.on( 'click', function () {
        $search_form.toggleClass( 'open' );
    } );

    $( document ).on( 'click', function ( e ) {
        if ( $( e.target ).closest( $search_btn ).length == 0
             && $( e.target ).closest( 'input.search-field' ).length == 0
             && $search_form.hasClass( 'open' ) ) {
            $search_form.removeClass( 'open' );
        }
    } );

    var snapper = new Snap( {
        element: document.getElementById( 'page' ),
        dragger: document.getElementsByClassName( 'page' ),
        disable: 'right',
        slideIntent: 10,
    } );
    var addEvent = function addEvent( element, eventName, func ) {
        if ( element.addEventListener ) {
            return element.addEventListener( eventName, func, false );
        } else if ( element.attachEvent ) {
            return element.attachEvent( "on" + eventName, func );
        }
    };
    addEvent( document.getElementById( 'open-left' ), 'click', function () {
        snapper.open( 'left' );
    } );
    /*-----------------------------------------------------------------------------------*/
    /* 	GALLERY SLIDER
    /*-----------------------------------------------------------------------------------*/
    $('.gallery-slider').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
    	navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
    }});
    /*-----------------------------------------------------------------------------------*/
    /* Magnific Popup
    /*-----------------------------------------------------------------------------------*/

    try { 
         $(document).ready(function() {
            $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
              disableOn: 700,
              type: 'iframe',
              mainClass: 'mfp-fade',
              removalDelay: 160,
              preloader: false,

              fixedContentPos: false
            });
         });
    } catch (err) {
    }
    try { 
        $('.popup-image').magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            mainClass: 'mfp-img-mobile',
            image: {
                verticalFit: true
            }
            
        });
    } catch (err) {
    }

    try { 
        $('.popup-gallery').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0,1] // Will preload 0 - before current, and 1 after the current image
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function(item) {
                    return item.el.attr('title') + '<small>by Max Themes</small>';
                }
            }
        });
    } catch (err) {
    }
    /*-----------------------------------------------------------------------------------*/
    /*	CUBE PORTFOLIO
    /*-----------------------------------------------------------------------------------*/
    $('.ajax-work').cubeportfolio({
         filters: '#ajax-work-filter',
         loadMore: '#ajax-loadMore',
         loadMoreAction: 'click',
         layoutMode: 'grid',
         defaultFilter: '*',
         animationType: 'scaleSides',
         gapHorizontal: 30,
         gapVertical: 30,
    	 gridAdjustment: 'responsive',
            mediaQueries: [{
                width: 1500,
                cols: 3
            }, {
                width: 1100,
                cols: 3
            }, {
                width: 480,
                cols: 2
            }, {
                width: 320,
                cols: 1
            }],
         caption: 'zoom',
         displayType: 'lazyLoading',
         displayTypeSpeed: 400,
         // singlePage popup
         singlePageDelegate: '.cbp-singlePage',
         singlePageDeeplinking: true,
         singlePageStickyNavigation: true,
         singlePageCounter: '<div class="cbp-popup-singlePage-counter">{{current}} of {{total}}</div>',
         singlePageCallback: function(url, element) {
    // to update singlePage content use the following method: this.updateSinglePage(yourContent)
    var t = this;
     $.ajax({
         url: url,
         type: 'GET',
         dataType: 'html',
         timeout: 10000
     })
     .done(function(result) {
        t.updateSinglePage(result);
     })
      .fail(function() {
         t.updateSinglePage('AJAX Error! Please refresh the page!');
          });
       },
    });
    /*-----------------------------------------------------------------------------------*/
    /* 	SLIDER REVOLUTION
    /*-----------------------------------------------------------------------------------*/
    jQuery('.tp-banner').show().revolution({
    	dottedOverlay:"none",
    	delay:10000,
    	startwidth:1170,
    	startheight:700,
    	navigationType:"bullet",
    	navigationArrows:"solo",
    	navigationStyle:"preview4",
    	parallax:"mouse",
    	parallaxBgFreeze:"on",
    	parallaxLevels:[7,4,3,2,5,4,3,2,1,0],												
    	keyboardNavigation:"on",						
    	shadow:0,
    	fullWidth:"on",
    	fullScreen:"off",
    	shuffle:"off",						
    	autoHeight:"off",						
    	forceFullWidth:"off",	
    	fullScreenOffsetContainer:""	
    });
    /*-----------------------------------------------------------------------------------*/
    /* 	TESTIMONIAL SLIDER
    /*-----------------------------------------------------------------------------------*/
    $(".single-slide").owlCarousel({ 
        items : 1,
    	autoplay:true,
    	loop:true,
    	autoplayTimeout:5000,
    	autoplayHoverPause:true,
    	singleItem	: true,
        navigation : true,
    	navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    	pagination : true,
    	animateOut: 'fadeOut'	
    });
    $('.item-slide').owlCarousel({
        loop:true,
        margin:30,
        nav:false,
    	navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
        responsive:{
            0:{
                items:1
            },
            400:{
                items:2
            },
    		900:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });
    /*-----------------------------------------------------------------------------------*/
    /* 		Active Menu Item on Page Scroll
    /*-----------------------------------------------------------------------------------*/
    $(window).on('scroll', function(event) {
    		Scroll();
    });	
    $('.scroll a').on('click', function() {  
    	$('html, body').animate({scrollTop: $(this.hash).offset().top -0}, 1000);
    		return false;
    });
    // User define function
    function Scroll() {
    var contentTop      =   [];
    var contentBottom   =   [];
    var winTop      =   $(window).scrollTop();
    var rangeTop    =   0;
    var rangeBottom =   1000;
    $('nav').find('.scroll a').each(function(){
    	contentTop.push( $( $(this).attr('href') ).offset().top);
    		contentBottom.push( $( $(this).attr('href') ).offset().top + $( $(this).attr('href') ).height() );
    })
    $.each( contentTop, function(i){
    if ( winTop > contentTop[i] - rangeTop ){
    	$('nav li.scroll')
    	  .removeClass('active')
    		.eq(i).addClass('active');			
    }}  )};
    });
    /*-----------------------------------------------------------------------------------*/
    /*    CONTACT FORM
    /*-----------------------------------------------------------------------------------*/
    function checkmail(input){
      var pattern1=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      	if(pattern1.test(input)){ return true; }else{ return false; }}     
        function proceed(){
        	var name = document.getElementById("name");
    		var email = document.getElementById("email");
    		var company = document.getElementById("company");
    		var msg = document.getElementById("message");
    		var errors = "";
    	if(name.value == ""){ 
    		name.className = 'error';
    	  	  return false;}    
    		  else if(email.value == ""){
    		  email.className = 'error';
    		  return false;}
    		    else if(checkmail(email.value)==false){
    		        alert('Please provide a valid email address.');
    		        return false;}
    		    else if(company.value == ""){
    		        company.className = 'error';
    		        return false;}
    		   else if(msg.value == ""){
    		        msg.className = 'error';
    		        return false;}
    		   else 
    		  {
    $.ajax({
    	type: "POST",
    	url: "php/submit.php",
    	data: $("#contact_form").serialize(),
    	success: function(msg){
    	//alert(msg);
        if(msg){
    		$('#contact_form').fadeOut(1000);
            $('#contact_message').fadeIn(1000);
            	document.getElementById("contact_message");
             return true;
            }}
    });
}};
