var $ = jQuery.noConflict();

$(document).ready(function($) {
	"use strict";
	
    /* ---------------------------------------------------------------------- */
    /*  Contact Form
    /* ---------------------------------------------------------------------- */

    var submitContact = $('#submit_contact'),
        message = $('#msg');

    submitContact.on('click', function(e){
        e.preventDefault();

        var $this = $(this);
        
        $.ajax({
            type: "POST",
            url: 'contact.php',
            dataType: 'json',
            cache: false,
            data: $('#contact-form').serialize(),
            success: function(data) {

                if(data.info !== 'error'){
                    $this.parents('form').find('input[type=text],textarea,select').filter(':visible').val('');
                    message.hide().removeClass('success').removeClass('error').addClass('success').html(data.msg).fadeIn('slow').delay(5000).fadeOut('slow');
                } else {
                    message.hide().removeClass('success').removeClass('error').addClass('error').html(data.msg).fadeIn('slow').delay(5000).fadeOut('slow');
                }
            }
        });
    });

    /* ---------------------------------------------------------------------- */
    /*  Contact Map
    /* ---------------------------------------------------------------------- */

    
    var myMarkers = {
        "markers": [
            {
                "latitude": "40.7127",       // latitude
                "longitude":"-74.0059",       // longitude
                "icon": "images/map_pin_1.png"  // Pin icon
            }
             

            // Add As Plenty As u want
            , {
                "latitude": "40.712785",
                "longitude":"-73.969708",
                "icon": "images/map_pin_1.png"
            }
            , {
                "latitude": "40.722785",
                "longitude":"-73.999708",
                "icon": "images/map_pin_1.png"
            }
            
            
        ]
    };

    try {
        $("#google_map").mapmarker({
            zoom : 14,                          // Zoom
            center: "40.7127,-74.0059",        // Center of map
            type: "ROADMAP",                    // Map Type
            controls: "HORIZONTAL_BAR",         // Controls style
            dragging:1,                         // Allow dragging?
            mousewheel:0,                       // Allow zooming with mousewheel
            markers: myMarkers,
            styling: 0,                         // Bool - do you want to style the map?
            featureType:"all",
            visibility: "on",
            elementType:"geometry",
            hue:"#00AAFF",
            saturation:-100,
            lightness:0,
            gamma:1,
            navigation_control:0
            /*
            To play with the map colors and styles you can try this tool right here http://gmaps-samples-v3.googlecode.com/svn/trunk/styledmaps/wizard/index.html
            */
        });

    } catch(err) {
    }
    

});
