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



    $('.dnd-video-bg .section_video_background').mediaelementplayer( {pauseOtherPlayers: false} );

    function dnd_resize_video_bg($section){
        var $video = $section.find('.dnd_video_background');
        $video.width('auto');
        var video_height = $video.height();
        var ratio = $video.width()/video_height;
        var difference = $section.height()-video_height;
        if(difference>0){
            $video.width((video_height+difference)*ratio);
        }
    }

    $('.dnd-video-bg').each(function(){
        dnd_resize_video_bg($(this));
        $(this).find('.dnd_video_background').css({'visibility':'visible'});
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
    $( ".dnd_alert_box_close" ).click(function(){
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


/*********** Tooltip ************************************************************/
    $('.dnd_tooltip').tipsy({
        fade: true,
        opacity: dnd_options.dnd_tipsy_opacity,
        gravity: function(){
            var gravity = $(this).data("gravity");
            gravity = (gravity !== undefined) ? gravity : 's';
            return gravity;
        }
    });


/*********** Back to Top ************************************************************/
    $('.dnd_divider a').click(function(e){
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, 'slow');
    });


/*********** Team Member ************************************************************/
    $('.dnd_team_member_modal_link').click(function(e){
        e.preventDefault();
        var $parent = $(this).closest('.dnd_team_member');
        var $modal = $parent.find('.dnd_team_member_modal');
        var $section = $parent.closest('.dnd_section_DD');
        $modal.detach().appendTo('body').fadeIn().addClass('dnd_team_member_modal_opened');
        $parent.addClass('dnd_team_member_with_opened_modal');
    });
    $('.dnd_team_member_modal_close').click(function(e){
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




$(window).resize(function() {
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



/**
 * jQuery.browser.mobile (http://detectmobilebrowser.com/)
 *
 * jQuery.browser.mobile will be true if the browser is a mobile device
 *
 **/
(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);