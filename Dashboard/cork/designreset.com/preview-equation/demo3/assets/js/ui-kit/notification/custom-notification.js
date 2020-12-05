/*   G L O W  -  L I K E */

// scale-notification

$(function() {
    var bttn = document.getElementById( 'scale-notification' );

    // make sure..
    bttn.disabled = false;
    
    bttn.addEventListener( 'click', function() {
        // simulate loading (for demo purposes only)
        classie.add( bttn, 'active' );
        setTimeout( function() {

            classie.remove( bttn, 'active' );
            
            // create the notification
            var notification = new NotificationFx({
                message : '<p>This is just a simple notice. Everything is in order and this is a <a href="#">simple link</a>.</p>',
                layout : 'growl',
                effect : 'scale',
                type : 'notice', // notice, warning, error or success
                onClose : function() {
                    bttn.disabled = false;
                }
            });

            // show the notification
            notification.show();

        }, 1200 );
        
        // disable the button (for demo purposes only)
        this.disabled = true;
    } );
});


// jelly-notification

$(function() {
        var bttn = document.getElementById( 'jelly-notification' );

        // make sure..
        bttn.disabled = false;

        bttn.addEventListener( 'click', function() {
            // simulate loading (for demo purposes only)
            classie.add( bttn, 'active' );
            setTimeout( function() {

                classie.remove( bttn, 'active' );
                
                // create the notification
                var notification = new NotificationFx({
                    message : '<p>Hello there! I\'m a classic notification but I have some elastic jelliness thanks to <a href="#">bounce.js</a>. </p>',
                    layout : 'growl',
                    effect : 'jelly',
                    type : 'notice', // notice, warning, error or success
                    onClose : function() {
                        bttn.disabled = false;
                    }
                });

                // show the notification
                notification.show();

            }, 1200 );
            
            // disable the button (for demo purposes only)
            this.disabled = true;
        } );
    });


// slide-in-notification

$(function() {
    var bttn = document.getElementById( 'slide-in-notification' );

    // make sure..
    bttn.disabled = false;

    bttn.addEventListener( 'click', function() {
        // simulate loading (for demo purposes only)
        classie.add( bttn, 'active' );
        setTimeout( function() {

            classie.remove( bttn, 'active' );
            
            // create the notification
            var notification = new NotificationFx({
                message : '<p>This notification has slight elasticity to it thanks to <a href="#">bounce.js</a>.</p>',
                layout : 'growl',
                effect : 'slide',
                type : 'notice', // notice, warning or error
                onClose : function() {
                    bttn.disabled = false;
                }
            });

            // show the notification
            notification.show();

        }, 1200 );
        
        // disable the button (for demo purposes only)
        this.disabled = true;
    } );
});


// genie-notification

$(function() {
    var bttn = document.getElementById( 'genie-notification' );

    // make sure..
    bttn.disabled = false;

    bttn.addEventListener( 'click', function() {
        // simulate loading (for demo purposes only)
        classie.add( bttn, 'active' );
        setTimeout( function() {

            classie.remove( bttn, 'active' );
            
            // create the notification
            var notification = new NotificationFx({
                message : '<p>Your preferences have been saved successfully. See all your settings in your <a href="#">profile overview</a>.</p>',
                layout : 'growl',
                effect : 'genie',
                type : 'notice', // notice, warning or error
                onClose : function() {
                    bttn.disabled = false;
                }
            });

            // show the notification
            notification.show();

        }, 1200 );
        
        // disable the button (for demo purposes only)
        this.disabled = true;
    } );
});


/* A T T A C H E D */

// bouncyflip-notification

$(function() {
    var bttn = document.getElementById( 'bounceflip-notification' );

    // make sure..
    bttn.disabled = false;

    bttn.addEventListener( 'click', function() {
        // simulate loading (for demo purposes only)
        classie.add( bttn, 'active' );
        setTimeout( function() {

            classie.remove( bttn, 'active' );
            
            // create the notification
            var notification = new NotificationFx({
                message : '<i class="flaticon-calendar"></i><p>The event was added to your calendar. Check out all your events in your <a href="#">event overview</a>.</p>',
                layout : 'attached',
                effect : 'bouncyflip',
                type : 'notice', // notice, warning or error
                onClose : function() {
                    bttn.disabled = false;
                }
            });

            // show the notification
            notification.show();

        }, 1200 );
        
        // disable the button (for demo purposes only)
        this.disabled = true;
    } );
});


// flip-notification

$(function() {
    var bttn = document.getElementById( 'flip-notification' );

    // make sure..
    bttn.disabled = false;

    bttn.addEventListener( 'click', function() {
        // simulate loading (for demo purposes only)
        classie.add( bttn, 'active' );
        setTimeout( function() {

            classie.remove( bttn, 'active' );
            
            // create the notification
            var notification = new NotificationFx({
                message : '<p>Your preferences have been saved successfully. See all your settings in your <a href="#">profile overview</a>.</p>',
                layout : 'attached',
                effect : 'flip',
                type : 'notice', // notice, warning or error
                onClose : function() {
                    bttn.disabled = false;
                }
            });

            // show the notification
            notification.show();

        }, 1200 );
        
        // disable the button (for demo purposes only)
        this.disabled = true;
    } );
});


/*   T o p     B a r */

// slide-on-top-notification

$(function() {
    var bttn = document.getElementById( 'slide-on-top-notification' );

    // make sure..
    bttn.disabled = false;

    bttn.addEventListener( 'click', function() {
        // simulate loading (for demo purposes only)
        classie.add( bttn, 'active' );
        setTimeout( function() {

            classie.remove( bttn, 'active' );
            
            // create the notification
            var notification = new NotificationFx({
                message : '<span class="icon-"></span><p>You have some interesting news in your inbox. Go <a href="#">check it out</a> now.</p>',
                layout : 'bar',
                effect : 'slidetop',
                type : 'notice', // notice, warning or error
                onClose : function() {
                    bttn.disabled = false;
                }
            });

            // show the notification
            notification.show();

        }, 1200 );
        
        // disable the button (for demo purposes only)
        this.disabled = true;
    } );
});

// expanding-loader-notification

$(function() {
    var bttn = document.getElementById( 'expanding-loader-notification' );

    // make sure..
    bttn.disabled = false;

    bttn.addEventListener( 'click', function() {

            
            
            // create the notification
            var notification = new NotificationFx({
                message : '<span class="flaticon-checked-1" style="display: block;position: relative;float: left;top: 6px;font-size: 16px;"></span><p>Your preferences have been saved successfully. See all your settings in your <a href="#">profile overview</a>.</p>',
                layout : 'bar',
                effect : 'exploader',
                ttl : 9000000,
                type : 'notice', // notice, warning or error
                onClose : function() {
                    bttn.disabled = false;
                }
            });

            // show the notification
            notification.show();

        
        
        // disable the button (for demo purposes only)
        this.disabled = true;
    } );
});


/*  O T H E R S */

// corner-expand-notification

$(function() {
    var svgshape = document.getElementById( 'notification-corner-expand-shape' ),
        s = Snap( svgshape.querySelector( 'svg' ) ),
        path = s.select( 'path' ),
        pathConfig = {
            from : path.attr( 'd' ),
            to : svgshape.getAttribute( 'data-path-to' )
        },
        bttn = document.getElementById( 'corner-expand-notification' );

    // make sure..
    bttn.disabled = false;

    bttn.addEventListener( 'click', function() {
        $('.notification-shape.shape-box').addClass('ns-shape-show');
        // simulate loading (for demo purposes only)
        classie.add( bttn, 'active' );
        setTimeout( function() {

            path.animate( { 'path' : pathConfig.to }, 300, mina.easeinout );

            classie.remove( bttn, 'active' );
            
            // create the notification
            var notification = new NotificationFx({
                wrapper : svgshape,
                message : '<p><i class="icon flaticon-idea-bulb"></i> I\'m appaering in a morphed shape thanks to <a href="#">Snap.svg</a></p>',
                layout : 'other',
                effect : 'cornerexpand',
                type : 'notice', // notice, warning or error
                onClose : function() {
                    bttn.disabled = false;
                    setTimeout(function() {
                        path.animate( { 'path' : pathConfig.from }, 300, mina.easeinout );
                        $('.notification-shape.shape-box').removeClass('ns-shape-show');
                    }, 200 );
                }
            });

            // show the notification
            notification.show();

        }, 1200 );
        
        // disable the button (for demo purposes only)
        this.disabled = true;
    } );
});


// loading-circle-notification

$(function() {
    var svgshape = document.getElementById( 'notification-loading-circle-shape' ),
        bttn = document.getElementById( 'loading-circle-notification' );

    // make sure..
    bttn.disabled = false;

    bttn.addEventListener( 'click', function() {
        // create the notification
        var notification = new NotificationFx({
            wrapper : svgshape,
            message : '<p>Whatever you did, it was successful!</p>',
            layout : 'other',
            effect : 'loadingcircle',
            ttl : 9000,
            type : 'notice', // notice, warning or error
            onClose : function() {
                bttn.disabled = false;
            }
        });

        // show the notification
        notification.show();

        // disable the button (for demo purposes only)
        this.disabled = true;
    } );
});


// thumb-slider-notification

$(function() {
    var bttn = document.getElementById( 'thumb-slider-notification' );

    // make sure..
    bttn.disabled = false;
    
    bttn.addEventListener( 'click', function() {
        // simulate loading (for demo purposes only)
        classie.add( bttn, 'active' );
        setTimeout( function() {

            classie.remove( bttn, 'active' );
            
            // create the notification
            var notification = new NotificationFx({
                message : '<div class="ns-thumb"><img src="assets/img/user1.jpeg"/></div><div class="ns-content"><p><a href="#">Zoe Moulder</a> accepted your invitation.</p></div>',
                layout : 'other',
                ttl : 6000,
                effect : 'thumbslider',
                type : 'notice', // notice, warning, error or success
                onClose : function() {
                    bttn.disabled = false;
                }
            });

            // show the notification
            notification.show();

        }, 1200 );
        
        // disable the button (for demo purposes only)
        this.disabled = true;
    } );
});



$( "#demo-1" ).click(function() {
  $.iaoAlert({msg: "This is a pink notification",
            type: "notification",
            mode: "pink"})
});
$( "#demo-2" ).click(function() {
  $.iaoAlert({msg: "This is a orange notification",
            type: "notification",
            mode: "orange",})
});
$( "#demo-3" ).click(function() {
  $.iaoAlert({msg: "This is a peach notification",
            type: "notification",
            mode: "peach"})
});
var options1 = {
    'title': 'Default',
    'message': 'Default Notification!',
    'icon': 'checked-1',
};

var n1 = new notifi(options1);

$( "#n1" ).click(function() {
  n1.show();
});

var options2 = {
    'title': 'Success',
        'style': 'success',
    'message': 'I am a Notification!',
    'icon': 'double-check',
};

var n2 = new notifi(options2);

$( "#n2" ).click(function() {
  n2.show();
});

var options3 = {
    'title': 'Success',
        'style': 'info',
    'message': 'I am a Notification!',
    'icon': 'danger-2',
};

var n3 = new notifi(options3);

$( "#n3" ).click(function() {
  n3.show();
});

var options4 = {
    'title': 'Error',
        'style': 'error',
    'message': 'I am a Notification!',
    'icon': 'danger-3',
};

var n4 = new notifi(options4);

$( "#n4" ).click(function() {
  n4.show();
});

var options5 = {
    'title': 'Settings Changed',
    'message': 'Your changes has been saved',
    'icon': 'settings-7',
        'theme': 'flat'
};

var n5 = new notifi(options5);

$( "#n5" ).click(function() {
  n5.show();
});

function notify(style) {
    $.notify({
        title: 'Email Notification',
        text: 'You received an e-mail from your boss. You should read it right now!',
        image: "<img src='assets/img/boy.png'/>"
    }, {
        style: 'metro',
        className: style,
        autoHide: false,
        clickToHide: true
    });
}

$('form').submit(function(e){
    e.preventDefault(); 
    var text = $('#toast-text').val();
    $.toast(text,5000);
});