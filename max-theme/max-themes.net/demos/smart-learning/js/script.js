/*jshint jquery:true */
/*global $:true */
var $ = jQuery.noConflict();

$(document).ready(function($) {
    "use strict";


    $(window).load(function() { // makes sure the whole site is loaded
        $('#status').fadeOut(); // will first fade out the loading animation
        $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
        $('body').delay(350).css({
            'overflow': 'visible'
        });
    })



    try {
        $('.html-style').tooltip(options);
    } catch (err) {}


    // Styling Select elements
    try {
        Select.init({
            selector: '.elselect'
        });
    } catch (err) {}




    /*-------------------------------------------------*/
    /* =  Mobile Menu
    /*-------------------------------------------------*/
    // Create the dropdown base
    $("<select />").appendTo("#nav");


    // Create default option "Go to..."
    $("<option />", {
        "selected": "selected",
        "value": "",
        "text": "Main Menu"
    }).appendTo("#nav select");

    // Populate dropdown with menu items
    $(".sf-menu a").each(function() {
        var el = $(this);
        $("<option />", {
            "value": el.attr("href"),
            "text": el.text()
        }).appendTo("#nav select");
    });

    $("#nav select").change(function() {
        window.location = $(this).find("option:selected").val();
    });

    /*-------------------------------------------------*/
    /* =  CarouSels
    /*-------------------------------------------------*/

    //  Responsive layout, resizing the items
    try {
        $('#foo1').carouFredSel({
            responsive: true,
            width: '100%',
            scroll: 1,
            auto: true,
            prev: '#prev1',
            next: '#next1',
            items: {
                width: 370,
                height: 550,
                visible: {
                    min: 1,
                    max: 3
                }
            }
        });
    } catch (err) {}

    try {
        $('#foo2').carouFredSel({
            responsive: true,
            width: '100%',
            scroll: 1,
            auto: false,
            prev: '#prev2',
            next: '#next2',
            items: {
                width: 350,
                height: 250,
                visible: {
                    min: 1,
                    max: 5
                }
            }
        });
    } catch (err) {}


    /* ---------------------------------------------------------------------- */
    /*	magnific-popup
    /* ---------------------------------------------------------------------- */

    try {
        // Example with multiple objects
        var ZoomImage = $('.zoom, .zoom-image');
        ZoomImage.magnificPopup({
            type: 'image'
        });
    } catch (err) {

    }

    /*-------------------------------------------------*/
    /* =  Isotope
    /*-------------------------------------------------*/



    var winDow = $(window);
    // Needed variables
    var $container = $('.filter-container');
    var $filter = $('.filter');


    try {
        $container.imagesLoaded(function() {
            $container.show();
            $container.isotope({
                filter: '*',
                layoutMode: 'masonry',
                animationOptions: {
                    duration: 750,
                    easing: 'linear'
                }
            });
        });
    } catch (err) {}

    winDow.on('resize', function() {
        var selector = $filter.find('a.active').attr('data-filter');

        try {
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false,
                }
            });
        } catch (err) {}
        return false;
    });

    // Isotope Filter 
    $filter.find('a').on('click', function() {
        var selector = $(this).attr('data-filter');

        try {
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false,
                }
            });
        } catch (err) {

        }
        return false;
    });


    var filterItemA = $('.filter a');

    filterItemA.on('click', function() {
        var $this = $(this);
        if (!$this.hasClass('active')) {
            filterItemA.removeClass('active');
            $this.addClass('active');
        }
    });




    /*-------------------------------------------------*/
    /* =  Testimonials
    /*-------------------------------------------------*/

    try {
        $('.bxslider').bxSlider({
            mode: 'horizontal',
            slideMargin: 0,
            auto: true
        });
    } catch (err) {

    }

    try {
        $('.bxslider2').bxSlider({
            mode: 'horizontal',
            slideMargin: 0,
            auto: true
        });
    } catch (err) {

    }



    /*-------------------------------------------------*/
    /* =  Fancybox
    /*-------------------------------------------------*/
    try {
        $('.fancybox').fancybox();

    } catch (err) {

    }



    /*-------------------------------------------------*/
    /* =  Tabs Widget - { Popular, Recent and Comments }
    /*-------------------------------------------------*/

    $('.tab-links li a').on('click', function(e) {
        e.preventDefault();
        if (!$(this).parent('li').hasClass('active')) {
            var link = $(this).attr('href');

            $(this).parents('ul').children('li').removeClass('active');
            $(this).parent().addClass('active');

            $('.tabs-widget > div').hide();

            $(link).fadeIn();
        }
    });

    var tabs = $('#tabs-titles li'); //grab tabs
    var contents = $('#tabs-contents li'); //grab contents

    tabs.on('click', function() {
        contents.hide(); //hide all contents
        tabs.removeClass('current'); //remove 'current' classes
        $(contents[$(this).index()]).show(); //show tab content that matches tab title index
        $(this).addClass('current'); //add current class on clicked tab title
    });


    /*-------------------------------------------------*/
    /* =  flexslider
    /*-------------------------------------------------*/
    try {

        var SliderPost = $('.flexslider');

        SliderPost.flexslider({
            animation: "swing",
            slideshowSpeed: 4000
        });
    } catch (err) {

    }

    /* ---------------------------------------------------------------------- */
    /*	Contact Map
    /* ---------------------------------------------------------------------- */
    var contact = {
        "lat": "40.714623",
        "lon": "-74.006605"
    }; //Change a map coordinate here!

    try {
        $('#map').gmap3({
            action: 'addMarker',
            latLng: [contact.lat, contact.lon],
            map: {
                center: [contact.lat, contact.lon],
                zoom: 14
            },
        }, {
            action: 'setOptions',
            args: [{
                scrollwheel: false
            }]
        });
    } catch (err) {

    }



    /*-------------------------------------------------*/
    /* =  Easy PieChart
    /*-------------------------------------------------*/
    try {

        var PieChart = $('.skill-item');
        PieChart.appear(function() {

            $(function() {
                $('.chart').easyPieChart({
                    easing: 'easeOutBounce',
                    onStep: function(from, to, percent) {
                        $(this.el).find('.percent').text(Math.round(percent));
                    }
                });
                var chart = window.chart = $('.chart').data('easyPieChart');
                $('.js_update').on('click', function() {
                    chart.update(Math.random() * 200 - 100);
                });
            });
        });
    } catch (err) {

    }




    /*-------------------------------------------------*/
    /* =  count increment
    /*-------------------------------------------------*/
    try {
        $('.statistic-post').appear(function() {
            $('.timer').countTo({
                speed: 4000,
                refreshInterval: 60,
                formatter: function(value, options) {
                    return value.toFixed(options.decimals);
                }
            });
        });
    } catch (err) {

    }


    /*-------------------------------------------------*/
    /* =  Scroll to TOP
    /*-------------------------------------------------*/


    $('a[href="#top"]').on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, 'slow');
        return false;
    });


    /* Counter */

    $('.dnd_countdown.simple_style').each(function() {
        var $this = $(this);
        var countDownString = $this.data("value");

        function update_countown_element($element, number) {
            $element.html(number);
            var $span = $element.next('span');
            if (parseInt(number) == 1) {
                $span.html($span.data("singular"));
            } else {
                $span.html($span.data("plural"));
            }
        }

        $this.find('.simple.countdown.year').countdown(countDownString).on('update.countdown', function(event) {
            update_countown_element($(this), event.strftime('%Y'));
        });

        $this.find('.simple.countdown.month').countdown(countDownString).on('update.countdown', function(event) {
            update_countown_element($(this), event.strftime('%m'));
        });

        $this.find('.simple.countdown.day').countdown(countDownString).on('update.countdown', function(event) {
            update_countown_element($(this), event.strftime('%d'));
        });

        $this.find('.simple.countdown.hour').countdown(countDownString).on('update.countdown', function(event) {
            update_countown_element($(this), event.strftime('%H'));
        });

        $this.find('.simple.countdown.minute').countdown(countDownString).on('update.countdown', function(event) {
            update_countown_element($(this), event.strftime('%M'));
        });

        $this.find('.simple.countdown.second').countdown(countDownString).on('update.countdown', function(event) {
            update_countown_element($(this), event.strftime('%S'));
        });
    });




    /* ---------------------------------------------------------------------- */
    /*	Contact Form
    /* ---------------------------------------------------------------------- */

    var submitContact = $('#submit_contact'),
        message = $('#msg');

    submitContact.on('click', function(e) {
        e.preventDefault();

        var $this = $(this);

        $.ajax({
            type: "POST",
            url: 'contact.php',
            dataType: 'json',
            cache: false,
            data: $('#contact-form').serialize(),
            success: function(data) {

                if (data.info !== 'error') {
                    $this.parents('form').find('input[type=text],textarea,select').filter(':visible').val('');
                    message.hide().removeClass('success').removeClass('error').addClass('success').html(data.msg).fadeIn('slow').delay(5000).fadeOut('slow');
                } else {
                    message.hide().removeClass('success').removeClass('error').addClass('error').html(data.msg).fadeIn('slow').delay(5000).fadeOut('slow');
                }
            }
        });
    });


    //Add Inactive Class To All Accordion Headers
    $('.accordion-header').toggleClass('inactive-header');

    //Set The Accordion Content Width
    // var contentwidth = $('.accordion-header').width();
    // $('.accordion-content').css({'width' : contentwidth });

    //Open The First Accordion Section When Page Loads
    $('.accordion-header').first().toggleClass('active-header').toggleClass('inactive-header');
    $('.accordion-content').first().slideDown().toggleClass('open-content');

    // The Accordion Effect
    $('.accordion-header').on('click', function() {
        if ($(this).is('.inactive-header')) {
            $('.active-header').toggleClass('active-header').toggleClass('inactive-header').next().slideToggle().toggleClass('open-content');
            $(this).toggleClass('active-header').toggleClass('inactive-header');
            $(this).next().slideToggle().toggleClass('open-content');
        } else {
            $(this).toggleClass('active-header').toggleClass('inactive-header');
            $(this).next().slideToggle().toggleClass('open-content');
        }
    });

    return false;

});