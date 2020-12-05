$('#block-page').on('click', function() {
    $.blockUI({
        message: '<i class="flaticon-spinner-circle spin"></i>',
        fadeIn: 800, 
        timeout: 2000, //unblock after 2 seconds
        overlayCSS: {
            backgroundColor: '#1b2024',
            opacity: 0.8,
            zIndex: 1200,
            cursor: 'wait'
        },
        css: {
            border: 0,
            color: '#fff',
            zIndex: 1201,
            padding: 0,
            backgroundColor: 'transparent'
        }
    });
});


$('#block-content').on('click', function() {
    var block = $('#reload');
    $(block).block({ 
        message: '<i class="flaticon-spinner-1 spin"></i>',
        timeout: 2000, //unblock after 2 seconds
        overlayCSS: {
            backgroundColor: '#000',
            opacity: 0.8,
            cursor: 'wait'
        },
        css: {
            border: 0,
            color: '#fff',
            padding: 0,
            backgroundColor: 'transparent'
        }
    });
});

// Growl notification
$('#block-growl').on('click', function() {
    $.blockUI({
        message: $('.blockui-growl-message'), 
        fadeIn: 700, 
        fadeOut: 700, 
        timeout: 3000, //unblock after 3 seconds
        showOverlay: false, 
        centerY: false, 
        css: { 
            width: '250px',
            backgroundColor: 'transparent',
            top: '20px',
            left: 'auto',
            right: '20px',
            border: 0,
            opacity: .95,
            zIndex: 1200,
        } 
    }); 
});



// Custom message position
$('#message-position').on('click', function() {
    var block = $('#m-s-reload');
    $(block).block({ 
        message: '<i class="flaticon-circle-reload-line spin"></i>',
        timeout: 2000, //unblock after 2 seconds
        centerX: 0,
        centerY: 0,
        overlayCSS: {
            backgroundColor: '#fff',
            opacity: 0.8,
            cursor: 'wait'
        },
        css: {
            width: 35,
            top: '',
            left: '',
            right: 0,
            bottom: '15px',
            border: 0,
            padding: 0,
            backgroundColor: 'transparent'
        }
    });
});


// Auto unblock
$('#auto-unblock').on('click', function() {
    var block = $('#a-u-reload');
    $(block).block({
        message: '<i class="flaticon-spinner-4 spin"></i>',
        timeout: 2000, //unblock after 2 seconds
        overlayCSS: {
            backgroundColor: '#fff',
            opacity: 0.8,
            cursor: 'wait'
        },
        css: {
            border: 0,
            padding: 0,
            backgroundColor: 'transparent'
        }
    });
});




// Block callback
$('#block-callback').on('click', function() {
    $.blockUI({
        message: '<i class="flaticon-spinner-3 spin"></i>',
        fadeIn: 800, 
        timeout: 2000, //unblock after 2 seconds
        overlayCSS: {
            backgroundColor: '#1b2024',
            opacity: 0.8,
            zIndex: 1200,
            cursor: 'wait'
        },
        css: {
            border: 0,
            color: '#fff',
            zIndex: 1201,
            padding: 0,
            backgroundColor: 'transparent'
        },
        onBlock: function() {
            alert('Page is now blocked. FadeIn completed.'); 
        } 
    });
});





// Default message
$('#default-message').on('click', function() {
    var block = $('#d-t-reload');
    $(block).block({
        message: '<span class="text-semibold">Please wait...</span>',
        timeout: 2000, //unblock after 2 seconds
        overlayCSS: {
            backgroundColor: '#fff',
            opacity: 0.8,
            cursor: 'wait'
        },
        css: {
            border: 0,
            padding: 0,
            color: '#e7515a',
            backgroundColor: 'transparent'
        }
    });
});



// Custom message animation
$('#message-animation').on('click', function() {
    var block = $(this).parent();
    $(block).block({
        message: $('.blockui-animation-container'),
        timeout: 3000, //unblock after 3 seconds
        overlayCSS: {
            backgroundColor: '#fff',
            opacity: 0.8,
            cursor: 'wait'
        },
        css: {
            width: 36,
            height: 36,
            color: '#000',
            border: 0,
            padding: 0,
            backgroundColor: 'transparent'
        }
    });

    var animation = $(this).data("animation");
    $('.blockui-animation-container').addClass("animated " + animation).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
        $(this).removeClass("animated " + animation);
    });
});




// Modal Blockui
$('#modal-blockui').on('click', function() {
    var block = $('#modal-reload');
    $(block).block({ 
        message: '<i class="flaticon-circle-reload-line spin"></i>',
        showOverlay: false,
        timeout: 2000, //unblock after 2 seconds
        css: {
            border: 0,
            color: '#000',
            padding: 0,
            backgroundColor: 'transparent'
        }
    });
});


// Custom Overlay
$('#overlay-custom').on('click', function() {
    var block = $('#custom-overlay');
    $(block).block({ 
        message: '<i class="flaticon-spinner-5 spin"></i>',
        timeout: 2000, //unblock after 2 seconds
        overlayCSS: {
            backgroundColor: '#4f5163',
            opacity: 0.9,
            cursor: 'wait'
        },
        css: {
            border: 0,
            padding: 0,
            color: '#fff',
            backgroundColor: 'transparent'
        }
    });
});




// Custom message
$('#custom-message').on('click', function() {
    var block = $('#c-style');
    $(block).block({
        message: '<span class="text-semibold"><i class="flaticon-spinner-1 spin position-left"></i>&nbsp; Updating data</span>',
        timeout: 2000, //unblock after 2 seconds
        overlayCSS: {
            backgroundColor: '#fff',
            opacity: 0.8,
            cursor: 'wait'
        },
        css: {
            border: 0,
            padding: '10px 15px',
            color: '#fff',
            width: 'auto',
            '-webkit-border-radius': 2,
            '-moz-border-radius': 2,
            backgroundColor: '#333'
        }
    });
});





// Multiple messages
$('#multiple-messages').on('click', function() {
    var message = $(this).next('.multiMessageBlockUi');
    var block = $(this).parent();
    $(block).block({ 
        message: message,
        overlayCSS: {
            backgroundColor: '#fff',
            opacity: 0.8,
            cursor: 'wait'
        },
        css: {
            width: 100,
            '-webkit-border-radius': 2,
            '-moz-border-radius': 2,
            border: 0,
            padding: 0,
            backgroundColor: 'transparent'
        },
        onBlock: function(){
            clearTimeout();
        }
    });

    window.setTimeout(function () {
       message.html('<i class="flaticon-spinner-4 spin"></i> <span class="text-semibold display-block">Loading</span>')
    }, 0); 

    window.setTimeout(function () {
       message.html('<i class="flaticon-spinner-4 spin"></i> <span class="text-semibold display-block">Please wait</span>')
    }, 2000); 

    window.setTimeout(function () {
       message.addClass('bg-danger').html('<i class="flaticon-danger-3"></i> <span class="text-semibold display-block">Load error</span>')
    }, 4000);

    window.setTimeout(function () {
       $(block).unblock({
        onUnblock: function(){
            message.removeClass('bg-danger');
        }
       });
    }, 6000);
});



















































































