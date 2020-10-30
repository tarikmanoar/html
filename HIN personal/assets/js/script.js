(function ($) {
    'use strict'

    /* ============================================================
        [Master Stylesheet]

    	Theme Name: Mariana - App Landing HTML Template
    	Theme URI: https://themeforest.net/user/jubaearislam86664
    	Description: Mariana - App Landing HTML Template
    	Author: Riyadhossain 
    	Author URI: 
    	Version: 1.0  

    ============================================================== */
    /*
    ========================================
    Preloader
    ========================================
    */
    $(window).on('load', function () {
        $('#preloader').delay(200).fadeOut('slow');
        $('body').delay(200).css({
            'overflow': 'visible'
        });
    });

    /* ===============================================
        fixed menu js
       ===============================================
    */
    if ($('#navigation').length) {
        window.onscroll = function () { myFunction() };

        var navbar = document.getElementById("navigation");
        var sticky = navbar.offsetTop;

        function myFunction() {
            if (window.pageYOffset >= sticky) {
                navbar.classList.add("sticky")
            } else {
                navbar.classList.remove("sticky");
            }
        }
    }

    /* ===============================================
            sidebar menu js
        ===============================================
    */
    if ($('#sidebar').length) {
        $("#sidebar").mCustomScrollbar({
            theme: "minimal"
        });

        $('#dismiss, .overlay').on('click', function () {
            $('#sidebar').removeClass('active');
            $('.overlay').removeClass('active');
        });

        $('#sidebarCollapse').on('click', function () {
            $('#sidebar').addClass('active');
            $('.overlay').addClass('active');
            $('.collapse.in').toggleClass('in');
            $('a[aria-expanded=true]').attr('aria-expanded', 'false');
        });
    }

    /* 
    =====================================================
        Start active menu
    ======================================================
    */
    var sections = jQuery('section'),
        nav = jQuery('nav'),
        nav_height = nav.outerHeight();

    jQuery(window).on('scroll', function () {
        var cur_pos = jQuery(this).scrollTop();

        sections.each(function () {
            var top = jQuery(this).offset().top - nav_height,
                bottom = top + jQuery(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                sections.removeClass('active');

                jQuery(this).addClass('active');
                nav.find('a[href="#' + jQuery(this).attr('id') + '"]').addClass('active');
            }
        });
    });
    /*
    ========================================
       circle progress bar
    ========================================
    */
    if ($('.progress-circle').length) {
        $(".progress-circle").loading();
    }
    /* 
    ========================================
        Magnific popup
    ========================================
    */
    $('.open-videos').magnificPopup({
        type: 'iframe'
    });
    /* gallery */
    $('.images-gallery').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    /* 
    ========================================
        portfolio filter
    ========================================
    */
    if ($('.images-loads').length) {
        $('.images-loads').imagesLoaded(function () {
            var $grid = $('.portfolio-filters').isotope({
                itemSelector: '.grid-item',
            });
            // filter items on button click
            $('.filter-button-group').on('click', 'button', function () {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({ filter: filterValue });
            });
            //for filter button active class
            $('.filter-button-group button').on('click', function (event) {
                $(this).siblings('.active').removeClass('active');
                $(this).addClass('active');
                event.preventDefault();
            });
        });
    }
    /* 
    ========================================
        slick slide
    ========================================
    */

    $('.slide-fades').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.testimonial-slick',
    });
    $('.testimonial-slick').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slide-fades',
        dots: false,
        centerMode: false,
        nextArrow: '<i class="fas fa-chevron-right"></i>',
        prevArrow: '<i class="fas fa-chevron-left"></i>',
        focusOnSelect: false,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
    });
    /* testimonial2 */
    $('.testimonial-slide-image-slick').slick({
        slidesToShow: 4.1,
        slidesToScroll: 1,
        fade: false,
        asNavFor: '.testimonial-slide-all-slick',
        focusOnSelect: true,
        speed: 500,
        centerMode: true,
        arrows: false,
        centerPadding: '20px',
    });
    $('.testimonial-slide-all-slick').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.testimonial-slide-image-slick',
        dots: false,
        arrows: true,
        nextArrow: '<i class="fas fa-chevron-right"></i>',
        prevArrow: '<i class="fas fa-chevron-left"></i>',
        centerMode: false,
        focusOnSelect: false,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
    });

    /* 
    ========================================
        ScrollToTop 
    ========================================
    */
    //Check to see if the window is top if not then display button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.scrollsTop').fadeIn();
            $('.scrollsTop').addClass('active');
        } else {
            $('.scrollsTop').fadeOut();
            $('.scrollsTop').removeClass('active');
        }
    });
    //Click event to scroll to top
    $('.scrollsTop').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });
    /* 
    ========================================
        introduce-tab
    ========================================
    */
    $('ul.tabs li').click(function () {
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    });
    /*
    ========================================
        Pricing-tab
    ========================================
    */
    $('ul.tab-change-1 li').click(function () {
        var tab_id = $(this).attr('data-tab');

        $('ul.tab-change-1 li').removeClass('currents');
        $('.tab-content').removeClass('currents');

        $(this).addClass('currents');
        $("#" + tab_id).addClass('currents');
    });


    $('ul.tab-change-2 li').click(function () {
        var tab_id = $(this).attr('data-tab');

        $('ul.tab-change-2 li').removeClass('shown');
        $('.tab-content').removeClass('shown');

        $(this).addClass('shown');
        $("#" + tab_id).addClass('shown');
    });


    $('ul.tab-change-3 li').click(function () {
        var tab_id = $(this).attr('data-tab');

        $('ul.tab-change-3 li').removeClass('activate');
        $('.tab-content').removeClass('activate');

        $(this).addClass('activate');
        $("#" + tab_id).addClass('activate');
    });


    /*
  ========================================
  Contact Form
  ========================================
  */
    if ($('#contact-form').length) {
        $(function () {

            // Get the form.
            var form = $('#contact-form');

            // Get the messages div.
            var formMessages = $('.form-message');

            // Set up an event listener for the contact form.
            $(form).submit(function (e) {
                // Stop the browser from submitting the form.
                e.preventDefault();

                // Serialize the form data.
                var formData = $(form).serialize();

                // Submit the form using AJAX.
                $.ajax({
                    type: 'POST',
                    url: $(form).attr('action'),
                    data: formData
                })
                    .done(function (response) {
                        // Make sure that the formMessages div has the 'success' class.
                        $(formMessages).removeClass('error');
                        $(formMessages).addClass('success');

                        // Set the message text.
                        $(formMessages).text(response);

                        // Clear the form.
                        $('#contact-form input,#contact-form textarea').val('');
                    })
                    .fail(function (data) {
                        // Make sure that the formMessages div has the 'error' class.
                        $(formMessages).removeClass('success');
                        $(formMessages).addClass('error');

                        // Set the message text.
                        if (data.responseText !== '') {
                            $(formMessages).text(data.responseText);
                        } else {
                            $(formMessages).text('Oops! An error occured and your message could not be sent.');
                        }
                    });
            });

        });
    }
    /*
    ========================================
        water ripple js
    ========================================
    */
    $('.blog-right-hero').ripples({
        resolution: 400,
        dropRadius: 20,
        perturbance: 0.01,
        crossOrigin: "",
    });


})(jQuery);
/*
========================================
    line-progress bar
========================================
*/
$(document).ready(function () {
    $('#example-9').progress_fnc();
    $('#example-8').progress_fnc();
    $('#example-7').progress_fnc();
    $('#example-6').progress_fnc();
    $('#example-5').progress_fnc();
    $('#example-4').progress_fnc();
    $('#example-3').progress_fnc();
    $('#example-2').progress_fnc();
    $('#example-1').progress_fnc();
});
(function ($) {
    $.fn.progress_fnc = function (options) {
        var settings = $.extend({
            type: 'start'
        }, options);
        var div = $(this);
        var progress = div.find('.cssProgress, .cssProgress-2');
        progress.each(function () {
            var self = $(this);
            var progress_bar = self.find('.cssProgress-bar, .cssProgress-bar-2');
            var progress_label = self.find('.cssProgress-label, .cssProgress-label2');
            var progress_value = progress_bar.data('percent');
            var percentage = parseInt(progress_value, 10) + '%';
            progress_bar.css({ 'width': '0%', 'transition': 'none', '-webkit-transition': 'none', '-moz-transition': 'none' });
            if (settings.type == 'start') {
                progress_bar.animate({
                    width: percentage
                }, {
                    duration: 2000,
                    step: function (x) {
                        progress_label.text(Math.round(x) + '%');
                    }
                });
            } else if (settings.type == 'reset') {
                progress_bar.css('width', '0%');
                progress_label.text('0%');
            }
        });
    }
}(jQuery));