/* Template Name: Adminto - Bootstrap 4 Landing Page Tamplate
   Author: CoderThemes
   File Description: Main JS file of the template
*/


// Sticky Navbar

function windowScroll() {
    const navbar = document.getElementById("nav-sticky");
    if (navbar) {
        if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
            navbar.classList.add("nav-sticky");
        } else {
            navbar.classList.remove("nav-sticky");
        }
    }
}

window.addEventListener("scroll", (ev) => {
    ev.preventDefault();
    windowScroll();
});



// back-to-top

var mybutton = document.getElementById("back-to-top");

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        console.log(document.body.scrollTop);
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Contact form

function validateForm() {
    var name = document.forms["myForm"]["name"].value;
    var email = document.forms["myForm"]["email"].value;
    var comments = document.forms["myForm"]["comments"].value;
    document.getElementById("error-msg").style.opacity = 0;
    document.getElementById("error-msg").innerHTML = "";
    if (name == "" || name == null) {
        document.getElementById("error-msg").innerHTML = "<div class='alert alert-danger error_message text-center'>Please enter a Name</div>";
        fadeIn();
        return false;
    }
    if (email == "" || email == null) {
        document.getElementById("error-msg").innerHTML = "<div class='alert alert-danger error_message text-center'>Please enter a Email</div>";
        fadeIn();
        return false;
    }
    if (subject == "" || subject == null) {
        document.getElementById("error-msg").innerHTML = "<div class='alert alert-danger error_message text-center'>Please enter a Subject</div>";
        fadeIn();
        return false;
    }
    if (comments == "" || comments == null) {
        document.getElementById("error-msg").innerHTML = "<div class='alert alert-danger error_message text-center'>Please enter a Comments</div>";
        fadeIn();
        return false;
    }

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("simple-msg").innerHTML = this.responseText;
            document.forms["myForm"]["name"].value = "";
            document.forms["myForm"]["email"].value = "";
            document.forms["myForm"]["subject"].value = "";
            document.forms["myForm"]["comments"].value = "";
        }
    };
    xhttp.open("POST", "php/contact.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("name=" + name + "&email=" + email + "&comments=" + comments);
    return false;
}

function fadeIn() {
    var fade = document.getElementById("error-msg");
    var opacity = 0;
    var intervalID = setInterval(function () {
        if (opacity < 1) {
            opacity = opacity + 0.5;
            fade.style.opacity = opacity;
        } else {
            clearInterval(intervalID);
        }
    }, 200);
}



// ! function($) {
//     "use strict";

//     var Adminto = function() {};

//     Adminto.prototype.initStickyMenu = function() {
//         $(window).scroll(function() {
//             var scroll = $(window).scrollTop();
        
//             if (scroll >= 50) {
//                 $(".sticky").addClass("nav-sticky");
//             } else {
//                 $(".sticky").removeClass("nav-sticky");
//             }
//         });
//     },

//     Adminto.prototype.initSmoothLink = function() {
//         $('.navbar-nav a').on('click', function(event) {
//             var $anchor = $(this);
//             $('html, body').stop().animate({
//                 scrollTop: $($anchor.attr('href')).offset().top - 50
//             }, 1500, 'easeInOutExpo');
//             event.preventDefault();
//         });
//     },

//     Adminto.prototype.initScrollspy = function() {
//         $("#navbarCollapse").scrollspy({
//             offset: 50
//         });
//     },

//     Adminto.prototype.initMfpvideo = function() {
//         $('.video-play-icon').magnificPopup({
//             disableOn: 700,
//             type: 'iframe',
//             mainClass: 'mfp-fade',
//             removalDelay: 160,
//             preloader: false,
//             fixedContentPos: false
//         });
//     },

//     Adminto.prototype.initContact = function() {
        
//         $('#contact-form').submit(function() {

//             var action = $(this).attr('action');
        
//             $("#message").slideUp(750, function() {
//                 $('#message').hide();
        
//                 $('#submit')
//                     .before('')
//                     .attr('disabled', 'disabled');
        
//                 $.post(action, {
//                         name: $('#name').val(),
//                         email: $('#email').val(),
//                         comments: $('#comments').val(),
//                     },
//                     function(data) {
//                         document.getElementById('message').innerHTML = data;
//                         $('#message').slideDown('slow');
//                         $('#cform img.contact-loader').fadeOut('slow', function() {
//                             $(this).remove()
//                         });
//                         $('#submit').removeAttr('disabled');
//                         if (data.match('success') != null) $('#cform').slideUp('slow');
//                     }
//                 );
        
//             });
        
//             return false;
        
//         });

//     },

//     Adminto.prototype.initBacktoTop = function() {
//         $(window).scroll(function(){
//             if ($(this).scrollTop() > 100) {
//                 $('.back-to-top').fadeIn();
//             } else {
//                 $('.back-to-top').fadeOut();
//             }
//         }); 
//         $('.back-to-top').click(function(){
//             $("html, body").animate({ scrollTop: 0 }, 1000);
//             return false;
//         });
//     },


//     Adminto.prototype.init = function() {
//         this.initStickyMenu();
//         this.initSmoothLink();
//         this.initScrollspy();
//         this.initMfpvideo();
//         this.initContact();
//         this.initBacktoTop();
//     },
//     //init
//     $.Adminto = new Adminto, $.Adminto.Constructor = Adminto
// }(window.jQuery),

// //initializing
// function($) {
//     "use strict";
//     $.Adminto.init();
// }(window.jQuery);