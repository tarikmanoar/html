(function($) {
    "use strict";

    //===== Prealoder
    $(window).on('load', function(event) {
        $('.proloader').delay(500).fadeOut(500);
    });


    // sticky
    var wind = $(window);
    var sticky = $('.header-bar-area');
    wind.on('scroll', function() {
        var scroll = wind.scrollTop();
        if (scroll < 100) {
            sticky.removeClass('sticky');
        } else {
            sticky.addClass('sticky');
        }
    });



    /*=========================
      OwlCarousel START
    ===========================*/

    $(".ta-active").owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        autoplay: true,
        dots:false,
        autoplayHoverPause: true,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });



    //===== Back to top

    // Show or hide the sticky footer button
    $(window).on('scroll', function(event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });


    //Animate the scroll to yop
    $('.back-to-top').on('click', function(event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });

    $('#arrow-next').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top - 90 }, 500, 'linear');
    });



    // Smoot Scroll Effect
    $('.main-menu li a').bind('click', function(event) {
        var $anchor = $(this);
        var headerH = '88';
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
        }, 1200, 'easeInSine');
        event.preventDefault();
    });


    // Smoot Scroll Effect
    $('.ofcavas-menu ul li a').bind('click', function(event) {
        var $anchor = $(this);
        var headerH = '88';
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
        }, 1200, 'easeInSine');
        event.preventDefault();
    });


    $('.ofcavas-menu ul li a').on('click', function(e) {
        e.preventDefault();
        $('.ofcavas-menu').removeClass('current');
    });


    // Hamburger-menu
    $('.hamburger-menu').on('click', function() {
        $('.hamburger-menu .line-top, .ofcavas-menu').toggleClass('current');
        $('.hamburger-menu .line-center').toggleClass('current');
        $('.hamburger-menu .line-bottom').toggleClass('current');
    });


    $('.ofcavas-menu ul li a').on('click', function() {
        $('.hamburger-menu .line-top, .ofcavas-menu').removeClass('current');
        $('.hamburger-menu .line-center').removeClass('current');
        $('.hamburger-menu .line-bottom').removeClass('current');
    });


    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 90)
                }, 1000);
                return false;
            }
        }
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 90
    });



})(jQuery);