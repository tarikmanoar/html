jQuery(document).ready(function($) {
    "use strict";

    $(".ABss_form").submit(function() {
        "use strict";
        var str = $(this).serialize() + '&action=ABss_save_subscriber';
        var $form = $(this);
        var $wrapper = $(this).parent();
        $.ajax({
            type: "POST",
            url: ABss_custom.ajaxurl,
            data: str,
            success: function(msg){
                if(msg === "OK"){
                    $form.animate({ height: '0px' }, 800, function() {
                        $form.hide();
                    });
                    $wrapper.find('.ABss_success_message').delay(400).html(ABss_custom.success).slideDown(600);
                }
                else {
                    $wrapper.find('.ABss_subscriber_email').addClass('ABss_field_error').attr("placeholder", ABss_custom.error).val('').focus();
                }
            }
        });
        return false;
    });

    $('.ABss_form input').placeholder();

});