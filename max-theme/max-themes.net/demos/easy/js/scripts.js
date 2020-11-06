jQuery(document).ready(function($) {
    "use strict";

/*********** Parallax ************************************************************/
    
    $('.dnd-parallax').each(function(){
        var parallax_amount = $(this).data('parallax');
        var background_image = $(this).data('background_image');
        if(!jQuery.browser.mobile && background_image!==undefined){
            $(this).css('background-image', 'url(' + background_image + ')');
            $(this).parallax("50%", parallax_amount,false);
        }
        else{
            $(this).css('background-attachment', 'scroll');
        }
    });


    try {

      var ZoomImage = jQuery('.zoom, .zoom-image');
        ZoomImage.magnificPopup({
            type: 'image',
             gallery: {
                enabled: true
            }
        });
      } catch(err) {
    }

    

    $('.ABt_testimonials_wrapper').each(function() {
        var $slider = $(this).find('.ABt_testimonials_slide');
        var fx = $slider.data("fx");
        var play = $slider.data("play");
        var easing = $slider.data("easing");
        var direction = $slider.data("direction");
        var duration = parseInt($slider.data("duration"), 10);
        var pauseonhover = $slider.data("pauseonhover");
        var timeoutduration = parseInt($slider.data("timeoutduration"), 10);
        var $prev = $(this).find('.ABt_prev');
        var $next = $(this).find('.ABt_next');
        var $pagination = $(this).find('.ABt_pagination');
        $slider.carouFredSel({
            prev   : $prev,
            next   : $next,
            pagination: $pagination,
            direction       : direction,
            responsive : true,
            auto   : {
                play            : play,
                fx              : fx,
                easing          : easing,
                duration        : duration,
                pauseOnHover    : pauseonhover,
                timeoutDuration : timeoutduration,
            },
            scroll   : {
                fx              : fx,
                easing          : easing,
                duration        : duration,
            },
            width  : 'auto',
            items  : {
                visible:1,
            },
        });
    });

    $('.ABt_form').each(function(){
        var $form = $(this);
        var $wrapper = $(this).parent();
        $form.ajaxForm({ 
            url: ABt_custom.ajaxurl,
            beforeSubmit: function () {
                $wrapper.find('.ABt_success_message').html(ABt_custom.sending).slideDown(400);
            },
            success: function (responseText)  {
                if(responseText === "OK"){
                    $form.animate({ height: '0px' }, 800, function() {
                        $form.hide();
                    });
                    $wrapper.find('.ABt_success_message').delay(400).html(ABt_custom.success).slideDown(600);
                }
                else {
                    $wrapper.find('input[type=text], textarea').each( function(){
                        if($(this).val() === ''){
                            $(this).addClass('ABt_field_error');
                        }
                        else{
                            $(this).removeClass('ABt_field_error');
                        }
                    });
                    $wrapper.find('.ABt_success_message').html(ABt_custom.error).slideDown(600);
                }
            },
        }); 
    });

    $('.ABt_form input, .ABt_form textarea').placeholder();

    /*-------------------------------------------------*/
    /* = skills animate
    /*-------------------------------------------------*/

    try{
        var skillBar = $('.skills-progress');
        skillBar.appear(function() {

            var animateElement = $(".meter > span");
            animateElement.each(function() {
                $(this)
                    .data("origWidth", $(this).width())
                    .width(0)
                    .animate({
                        width: $(this).data("origWidth")
                    }, 1200);
            });

        });
    } catch(err) {
    }


    /*==========  Portfolio Thirds  ==========*/
    var $portfolioThirdsContainer = $('#portfolio-thirds').imagesLoaded(function() {
        $('#portfolio-thirds .item').height($('#portfolio-thirds .item').width());
        $(window).on('resize', function() {
            $('#portfolio-thirds .item').height($('#portfolio-thirds .item').width());
        });
        $portfolioThirdsContainer.isotope({
            itemSelector: '.item',
            layoutMode: 'masonry',
            percentPosition: true,
            masonry: {
                columnWidth: $portfolioThirdsContainer.find('.portfolio-sizer')[0]
            }
        });
        return false;
    });
    $('#portfolio-thirds-filters').on('click', 'button', function() {
        $('#portfolio-thirds-filters button').removeClass('active');
        $(this).addClass('active');
        var filterValue = $(this).attr('data-filter');
        $portfolioThirdsContainer.isotope({filter: filterValue});
    });

    /*==========  Portfolio Fifths  ==========*/
    var $portfolioFifthsContainer = $('#portfolio-fifths').imagesLoaded(function() {
        $portfolioFifthsContainer.isotope({
            itemSelector: '.item',
            layoutMode: 'masonry',
            percentPosition: true,
            masonry: {
                columnWidth: $portfolioFifthsContainer.find('.portfolio-sizer')[0]
            }
        });
        return false;
    });
    $('#portfolio-fifths-filters').on('click', 'button', function() {
        $('#portfolio-fifths-filters button').removeClass('active');
        $(this).addClass('active');
        var filterValue = $(this).attr('data-filter');
        $portfolioFifthsContainer.isotope({filter: filterValue});
    });

    /*==========  Portfolio Details  ==========*/
    var $portfolioDetailsContainer = $('#portfolio-details').imagesLoaded(function() {
        $portfolioDetailsContainer.isotope({
            itemSelector: '.item',
            layoutMode: 'masonry',
            percentPosition: true,
            masonry: {
                columnWidth: $portfolioDetailsContainer.find('.portfolio-sizer')[0]
            }
        });
        return false;
    });


/*********** Animations ************************************************************/
    if(!jQuery.browser.mobile){
        $(".dnd-animo").one('inview', function(event, isInView) {
            if (isInView) {
                var animation = $(this).data('animation');
                var duration = $(this).data('duration')/1000;
                var delay = parseInt($(this).data('delay'),10);
                var $element = $(this);
                setTimeout(function() {
                   $element.css({visibility: "visible"}).animo( { animation: animation, duration: duration} );
                }, delay);
                
            }
        });
    }
    else{
        $(".dnd-animo").css({visibility: "visible"});
    }

    $(".dnd-animo-children").one('inview', function(event, isInView) {
        var animation = $(this).data('animation');
        var duration = $(this).data('duration')/1000;
        var delay = parseInt($(this).data('delay'),10);
        var difference = 0;
        if (isInView) {
            $(this).children().each(function(){
                var $element = $(this);
                setTimeout(function() {
                    $element.css({visibility: "visible"}).animo( { animation: animation, duration: duration} );
                }, difference);
                difference = difference + delay;

            });
        }
    });


/*********** Accordions ************************************************************/
    $( ".dnd-accordion" ).accordion({
        collapsible: true,
        active: false,
        heightStyle: "content",
        create: function( event, ui ) {
            var expanded = $(this).data("expanded");
            if(expanded===0){
                expanded = false;
            }
            else{
                expanded = expanded-1;
            }
            $(this).accordion( "option", "active", expanded);
        },
    }); 


/*********** Tabs ************************************************************/
    $('.dnd-tabs').each(function() {
        var $tabs = $(this);
        var effect = $tabs.data("effect");
        var optionSelected = $tabs.data("selected")-1;
        var directions;
        if($tabs.hasClass('dnd-tabs-horizontal')){
            directions = {'after':'right', 'before':'left'};
        }
        else{
            directions = {'after':'down', 'before':'up'};
        }
        $tabs.tabs({ 
            active:optionSelected,
            beforeActivate: function( event, ui ) {
                if(effect==='slide'){
                    var parent = ui.oldPanel.parent();
                    var diffHeight = parent.height() - (ui.oldPanel.height() - ui.newPanel.height());
                    parent.animate({height: diffHeight}, 300, function() {
                        parent.height('auto');
                    });
                    if (ui.newTab.index() > ui.oldTab.index()){
                        $tabs.tabs( "option", "show", { effect: "slide", direction: directions.after, duration: 400 } );
                    }
                    else{
                        $tabs.tabs( "option", "show", { effect: "slide", direction: directions.before, duration: 400 } );
                    }
                }
                else if(effect==='fade'){
                    $tabs.tabs( "option", "show", true );
                }
            },
        });
    });

    function dnd_tabs_responsive(){
        $('.dnd-tabs').each(function(){
            var $tabs = $(this);
            if($tabs.width() < parseInt($tabs.data('break_point'))){
                $tabs.addClass('dnd-tabs-fullwidthtabs');
            }
            else{
                $tabs.removeClass('dnd-tabs-fullwidthtabs');
            }
        });
    }

    dnd_tabs_responsive();



/*********** Alert Box ************************************************************/
    $( ".dnd_alert_box_close" ).on('click', function(){
        var $parent = $(this).parent();
        $parent.animate({height:"0px", paddingTop:"0px", paddingBottom:"0px", margin:"0px", opacity:"0"},400);
    });


/*********** Stats excerpt counter ************************************************************/
    function dnd_counter($object,interval,max,increment) {
        var number = parseInt($object.text(),10) + increment;
        if (number < max){
            setTimeout(function() {dnd_counter($object,interval,max,increment);} ,interval);
            $object.text(number);
        }
        else{
            $object.text(max);
        }
    }

    if(!jQuery.browser.mobile){
        $(".dnd_stats_number").one('inview', function(event, isInView) {
            if (isInView) {
                var max = $(this).data("number");
                var increment = 1;
                if (max > 50) increment = 10;
                if (max > 500) increment = 100;
                if (max > 5000) increment = 200;
                if (max > 10000) increment = 1000;
                var interval = $(this).data("duration")/(max/increment);
                $(this).text('0');
                dnd_counter($(this),interval,max,increment);
            }
        });
    }
    else{
        $(".dnd_stats_number").each(function() {
            var max = $(this).data("number");
            $(this).text(max);
        });
    }


/*********** Knob ************************************************************/
    $(".dnd_knob_wrapper").each(function(){
        var $knob = $(this).find(".dnd_knob");
        var $number_sign = $(this).find(".dnd_knob_number_sign");
        var $number = $(this).find(".dnd_knob_number");

        $knob.knob({
            'displayInput' : false,
        });

        var canvas_width = $(this).find("canvas").width();

        $number_sign.css({
            'visibility' : 'visible',
            'lineHeight' : canvas_width+'px',
        });
    
        if(!jQuery.browser.mobile){
            $knob.val(0).trigger('change');
            $(this).one('inview', function(event, isInView) {
                if (isInView) {
                    $({value: 0}).animate({value: $knob.data("number")}, {
                        duration: 1000,
                        easing:'swing',
                        step: function() 
                        {
                            var current = Math.ceil(this.value);
                            $knob.val(current).trigger('change');
                            $number.html(current);
                        }
                    })
                }
            });
        }
        else{
            $number.html($knob.data("number"));
        }
    });

    

/*********** PrettyPrint ************************************************************/
    $(function(){
      window.prettyPrint && prettyPrint(); 
    });



/*********** Back to Top ************************************************************/
    $('.dnd_divider a').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, 'slow');
    });


/*********** Team Member ************************************************************/
    $('.dnd_team_member_modal_link').on('click', function(e){
        e.preventDefault();
        var $parent = $(this).closest('.dnd_team_member');
        var $modal = $parent.find('.dnd_team_member_modal');
        var $section = $parent.closest('.dnd_section_DD');
        $modal.detach().appendTo('body').fadeIn().addClass('dnd_team_member_modal_opened');
        $parent.addClass('dnd_team_member_with_opened_modal');
    });
    $('.dnd_team_member_modal_close').on('click', function(e){
        e.preventDefault();
        $(this).parent().fadeOut('slow', function(){
            $(this).detach().appendTo($('.dnd_team_member_with_opened_modal')).removeClass('dnd_team_member_modal_opened');
            $('.dnd_team_member_with_opened_modal').removeClass('dnd_team_member_with_opened_modal');
        })
    });
    $(document).on('keydown', function(e) {
        if ( e.keyCode === 27 ) { //ESC
            $('.dnd_team_member_modal_opened').fadeOut('slow', function(){
                $(this).detach().appendTo($('.dnd_team_member_with_opened_modal')).removeClass('dnd_team_member_modal_opened');
                $('.dnd_team_member_with_opened_modal').removeClass('dnd_team_member_with_opened_modal');
            })
        }
    });


/*********** Progress Bar ************************************************************/
    if(!jQuery.browser.mobile){
        $(".dnd_meter .dnd_meter_percentage").width(0).one('inview', function(event, isInView) {
          if (isInView) {
            var newwidth = $(this).data("percentage") + '%';
            $(this).animate({width: newwidth}, {
                duration:1500,
                step: function(now) {
                    $(this).find('span').html(Math.floor(now) + '%');
                    var above_tenths = Math.floor(now/10);
                    for(var i=1; i<=above_tenths; i++){
                        $(this).addClass('dnd_meter_above'+above_tenths*10);
                    }
                }
            });
          }
        });
    }
    else{
        $(".dnd_meter .dnd_meter_percentage").each(function(){
            var newwidth = $(this).data("percentage");
            $(this).css('width', newwidth+'%');
            for(var i=0; i<=newwidth; i++){
                var above_tenths = Math.floor(i/10);
                $(this).addClass('dnd_meter_above'+above_tenths*10);
            }

        });
    }

    
/*********** Google Maps ************************************************************/
//contact page google maps
function initialize_gmap($element) {
    var myLatlng = new google.maps.LatLng($element.data('lat'),$element.data('lng'));
    var markerLatlng = new google.maps.LatLng($element.data('markerlat'),$element.data('markerlng'));
    var scrollwheel = ($element.data('scrollwheel') == 1 ? true : false);
    var mapTypeControl = ($element.data('maptypecontrol') == 1 ? true : false);
    var panControl = ($element.data('pancontrol') == 1 ? true : false);
    var zoomControl = ($element.data('zoomcontrol') == 1 ? true : false);
    var scaleControl = ($element.data('scalecontrol') == 1 ? true : false);
    var styles = dnd_options.dnd_custom_map_style;
    var map_type = google.maps.MapTypeId.ROADMAP;
    if ($element.data('map_type') == 'SATELLITE') map_type = google.maps.MapTypeId.SATELLITE;
    if ($element.data('map_type') == 'HYBRID') map_type = google.maps.MapTypeId.HYBRID;
    if ($element.data('map_type') == 'TERRAIN') map_type = google.maps.MapTypeId.TERRAIN;
  var mapOptions = {
    zoom: parseInt($element.data('zoom'),10),
    center: myLatlng,
    mapTypeId: map_type,
    styles: jQuery.parseJSON(styles),
    scrollwheel: scrollwheel,
    mapTypeControl: mapTypeControl,
    mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        position: google.maps.ControlPosition.BOTTOM_CENTER
    },
    panControl: panControl,
    panControlOptions: {
        position: google.maps.ControlPosition.RIGHT_CENTER
    },
    zoomControl: zoomControl,
    zoomControlOptions: {
        style: google.maps.ZoomControlStyle.LARGE,
        position: google.maps.ControlPosition.RIGHT_CENTER
    },
    scaleControl: scaleControl,
    scaleControlOptions: {
        position: google.maps.ControlPosition.BOTTOM_LEFT
    },
    streetViewControl: false,
    streetViewControlOptions: {
        position: google.maps.ControlPosition.RIGHT_CENTER
    }
  };
  var elemnt_id = $element.attr('id');
  var map = new google.maps.Map(document.getElementById(elemnt_id), mapOptions);
  var infowindow = new google.maps.InfoWindow({
      content: $element.data('markercontent')
  });
  var marker = new google.maps.Marker({
      position: markerLatlng,
      map: map,
      title: $element.data('markertitle'),
      icon: $element.data('markericon')
  });
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });
}


$('.dnd_google_map').each(function(){
    google.maps.event.addDomListener(window, 'load', initialize_gmap($(this)));
});




$(window).on('resize', function() {
    $(".dnd_knob_wrapper").each(function(){
        var $number_sign = $(this).find(".dnd_knob_number_sign");
        var canvas_width = $(this).find("canvas").width();
        $number_sign.css({
            'lineHeight' : canvas_width+'px'
        });
    });

    $('.dnd-video-bg').each(function(){
        dnd_resize_video_bg($(this));
    });

    dnd_tabs_responsive();

});



});

