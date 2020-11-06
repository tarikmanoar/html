jQuery(document).ready(function($) {
    "use strict";

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

});