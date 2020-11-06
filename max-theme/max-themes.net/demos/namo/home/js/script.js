;(function (jQuery) {
    "use strict";
    /*jslint browser: true*/
    /*global $, jQuery, alert*/
    var $gallery_loader = jQuery('.gallery-slider-wrap').find('.loader'), $page_loader = jQuery('.page-loader'), ajax_url = jQuery('#ajax_url').val(), $offset = '-' + jQuery('#header-inner-wrap').height() + 'px';
    /************************************
        RESIZE GALLERY SLIDER VIDEO
    ************************************/
    function resize_gallery_video() {
        if (jQuery(window).width() < 769) {
            jQuery('iframe.gallery').each(function () {
                jQuery(this).width(jQuery('#gallery-container-wrap').width());
            });
        } else {
            jQuery('iframe.gallery').each(function () {
                jQuery(this).width((jQuery(this).height() * 1.77));
            });
        }
    }
    /************************************
        RESIZE GALLERY SLIDER VIDEO
    ************************************/
    function munu_item_update() {
        if(jQuery('body').hasClass('single-page-version')) {
            jQuery('li.menu-item').removeClass('current-menu-item');
            jQuery('.be-section, .header-hero-section').each(function() {
                if((jQuery(window).scrollTop()+parseInt(jQuery('#header-wrap').attr('data-sticky-height'))+jQuery('#wpadminbar').height() >= jQuery(this).offset().top)) {
                    jQuery('li.menu-item').removeClass('current-menu-item');
                    var $id = jQuery(this).attr('id');
                    if($id) {
                        jQuery('li.menu-item a[href$="#'+$id+'"]').closest('li.menu-item').addClass('current-menu-item');
                    }
                }
            });
        }
    }
    /************************************
        SECTION BACKGROUND VIDEO
    ************************************/
    function be_resize_background_video() {
        jQuery('.be-section .be-bg-video, .be-slider-video .be-bg-video').each(function () {
            var $img = jQuery(this), $section = $img.parent(), windowWidth = $section.width(), windowHeight = $section.outerHeight(), r_w = windowHeight / windowWidth, i_w = $img.width(), i_h = $img.height(), r_i = i_h / i_w, new_w, new_h;
            if (r_w > r_i) {
                new_h = windowHeight;
                new_w = windowHeight / r_i;
            } else {
                new_h = windowWidth * r_i;
                new_w = windowWidth;
            }
            $img.css({
                width : new_w,
                height : new_h,
                left : (windowWidth - new_w) / 2,
                top : (windowHeight - new_h) / 2
            });
        });
    }


    /* ---------------------------------------------------------------------- */
    /*  Contact Form
    /* ---------------------------------------------------------------------- */

    var submitContact = jQuery('#submit_contact'),
        message = jQuery('#msg');

    submitContact.on('click', function(e){
        e.preventDefault();

        var jQuerythis = jQuery(this);
        
        jQuery.ajax({
            type: "POST",
            url: 'contact.php',
            dataType: 'json',
            cache: false,
            data: jQuery('#contact-form').serialize(),
            success: function(data) {

                if(data.info !== 'error'){
                    jQuerythis.parents('form').find('input[type=text],textarea,select').filter(':visible').val('');
                    message.hide().removeClass('success').removeClass('error').addClass('success').html(data.msg).fadeIn('slow').delay(5000).fadeOut('slow');
                } else {
                    message.hide().removeClass('success').removeClass('error').addClass('error').html(data.msg).fadeIn('slow').delay(5000).fadeOut('slow');
                }
            }
        });
    });


    /************************************
        Close Custom Popups
    ************************************/
    function be_close_sidebar() {
        if (jQuery('.sb-slidebar').hasClass('opened')) {
            jQuery('.sb-slidebar').removeClass('opened');
            jQuery('html,body').removeClass('slider-bar-opened');
        }
    }
    function be_close_mobilemenu() {
        if(jQuery('#mobile-menu').is(":visible")) {
            jQuery('#mobile-menu').slideFadeToggle();
        }
    }
    function be_close_searchbox() {
        if(jQuery('.search-box-wrapper').is(":visible")) {
            jQuery('.search-box-wrapper').fadeOut();
        }
    }
    /************************************
        ANIMATE SCROLL 
    ************************************/
    function be_animate_scroll(element) {
        if(jQuery('body').hasClass('section-scroll') && (jQuery(window).width() > 960) && jQuery('html').hasClass('csstransforms')) {
            jQuery.fn.translate(element);
            return false;
        }
        var $scroll_to = 1, $sticky_offset;
        if (element.length > 0) {
            $scroll_to = parseInt(element.offset().top, 10);
        }
        if (jQuery(window).width() > 760) {
            if (jQuery('body').hasClass('sticky-header') || jQuery('body').hasClass('transparent-sticky')) {
                if (jQuery('body').hasClass('sticky-header')) {
                    $sticky_offset = (jQuery('#header').offset().top + parseInt(jQuery('#header-wrap').attr('data-default-height'), 10));
                }
                if (jQuery('body').hasClass('transparent-sticky')) {
                    $sticky_offset = (jQuery('.header-hero-section').offset().top + jQuery('.header-hero-section').height());
                }
                if ($scroll_to > $sticky_offset) {
                    $scroll_to = $scroll_to - parseInt(jQuery('#header-wrap').attr('data-sticky-height'), 10);
                }
                if ($scroll_to < $sticky_offset) {
                    $scroll_to = $scroll_to - parseInt(jQuery('#header-wrap').attr('data-default-height'), 10);
                }
                if ($scroll_to == $sticky_offset && jQuery('body').hasClass('transparent-sticky')) {
                    $scroll_to = $scroll_to - parseInt(jQuery('#header-wrap').attr('data-sticky-height'), 10);
                }
            }
        }
        jQuery('html, body').stop().animate({scrollTop: $scroll_to }, 800, 'easeOutQuart', function() {
            be_close_sidebar();
        });
    }
    /************************************
        STICKY SIDEBAR
    ************************************/
    function be_sticky_sidebar() {
        if (jQuery(".floting-sidebar").length > 0) {
            var $sidebar = jQuery(".floting-sidebar"), offset = $sidebar.offset(), $scrollHeight = jQuery("#page-content").height(), $scrollOffset = jQuery("#page-content").offset(), $window = jQuery(window), $headerHeight = 0;
            $window.scroll(function () {
                if (jQuery('body').hasClass('sticky-header') || jQuery('body').hasClass('transparent-sticky')) {
                    $headerHeight = parseInt(jQuery('#header-inner-wrap').css('height'), 10);
                } else {
                    $headerHeight = 0;
                }
                if ($window.width() > 960) {
                    if ($window.scrollTop() + $headerHeight + 3 > offset.top) {
                        if ($window.scrollTop() + $headerHeight + $sidebar.height() + 50 < $scrollOffset.top + $scrollHeight) {
                            $sidebar.stop().animate({
                                marginTop: $window.scrollTop() - offset.top + $headerHeight + 30
                            });
                        } else {
                            $sidebar.stop().animate({
                                marginTop: ($scrollHeight - $sidebar.height() - 80) + 30
                            });
                        }
                    } else {
                        $sidebar.stop().animate({
                            marginTop: 0
                        });
                    }
                } else {
                    $sidebar.css('margin-top', 0);
                }
            });
        }
    }
    /************************************
        GOOGLE MAPS
    ************************************/
    function be_google_maps() {
        
        var styles = { 
                        redalert : [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#ffdfa6"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#b52127"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#c5531b"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#74001b"},{"lightness":-10}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#da3c3c"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#74001b"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#da3c3c"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"#990c19"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#74001b"},{"lightness":-8}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#6a0d10"},{"visibility":"on"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"color":"#ffdfa6"},{"weight":0.4}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]}],
                        black : [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]}],
                        greyscale: [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}],
                        midnight: [{"featureType":"water","stylers":[{"color":"#021019"}]},{"featureType":"landscape","stylers":[{"color":"#08304b"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#0c4152"},{"lightness":5}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#0b434f"},{"lightness":25}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#0b3d51"},{"lightness":16}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#000000"},{"lightness":13}]},{"featureType":"transit","stylers":[{"color":"#146474"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#144b53"},{"lightness":14},{"weight":1.4}]}],
                        standard: [], 
                        bluewater: [{"featureType":"water","stylers":[{"color":"#46bcec"},{"visibility":"on"}]},{"featureType":"landscape","stylers":[{"color":"#f2f2f2"}]},{"featureType":"road","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"transit","stylers":[{"visibility":"off"}]},{"featureType":"poi","stylers":[{"visibility":"off"}]}]
                    }    
        jQuery('.gmap').each(function () {
            var $address = jQuery(this).data('address'), $zoom = jQuery(this).data('zoom'), $lat = jQuery(this).attr('data-latitude'), $lan = jQuery(this).attr('data-longitude');
            /*jQuery(this).gmap3({
                action : 'addMarker',
                address : $address,
                map : {
                    center : true,
                    zoom : $zoom,
                    navigationControl : true
                }
            });*/
            var map_style = jQuery(this).attr('data-style');
            var mapOptions = {
                zoom: $zoom,
                scrollwheel: false,
                navigationControl: false,
                mapTypeControl: false,
                scaleControl: false,
                streetViewControl: false,                
                center: new google.maps.LatLng(parseFloat($lat), parseFloat($lan)),
                styles: styles[map_style]
            };

            var map = new google.maps.Map(jQuery(this)[0], mapOptions);

            var marker = new google.maps.Marker({
                  position: new google.maps.LatLng(parseFloat($lat), parseFloat($lan)),
                  map: map
            });

        });
    }
    /************************************
        PORTFOLIO LAYOUTS
    ************************************/
    function be_portfolio_layout() {
        jQuery('.portfolio-container').each(function () {
            var $this = jQuery(this), $width, $col, $columnWidth, $gutter_width;
            if(!$this.hasClass('style3-blog')) {
                if($this.closest('.portfolio').hasClass('full-screen')) {
                    $width = parseInt($this.closest('.portfolio').width(), 10);
                    if($this.closest('.portfolio').hasClass('five-col')) {
                        $col = 5;
                    } else if($this.closest('.portfolio').hasClass('four-col')) {
                        $col = 4;
                    } else {
                        $col = 3;
                    }
                    if($this.closest('.portfolio').hasClass('full-screen-gutter')) {
                        $gutter_width = 40;
                    } else {
                        $gutter_width = 0;
                    }
                    if(($this.closest('.portfolio').width()+$gutter_width) < (961-jQuery.getScrollbarWidth())) {
                        $col = 3;
                    }
                    if(($this.closest('.portfolio').width()+$gutter_width) < (768-jQuery.getScrollbarWidth())) {
                        $col = 2;
                    }
                    if(($this.closest('.portfolio').width()+$gutter_width) < (480-jQuery.getScrollbarWidth())) {
                        $col = 1;
                    }
                    while (($width % $col) != 0) {
                        $width++;
                    }
                    $this.width($width);
                    $columnWidth = $this.width() / $col;
                } else {
                    if($this.closest('.portfolio').hasClass('four-col')) {
                        $columnWidth = (($this.width() - 120) / 4);
                    } else if($this.closest('.portfolio').hasClass('three-col')) {
                        $columnWidth = (($this.width() - 80) / 3);
                    } else {
                        $columnWidth = (($this.width() - 40) / 2);
                    }
                    if( $this.closest('.portfolio').width() <= 740 ) {
                        $columnWidth = (($this.width() - 40) / 2);
                    }
                    if( $this.closest('.portfolio').width() <= 440 ) {
                        $columnWidth = (($this.width() - 40) / 2);
                    }
                }
            } else {
                $columnWidth = '.element';
            }
            $this.imagesLoaded(function () {
                if ($this.parent('.portfolio').hasClass('full-screen')) {
                    $this.isotope({
                        itemSelector : '.element',
                        masonry: {
                            columnWidth : $columnWidth
                        }
                    });
                } else {
                    $this.isotope({
                        itemSelector : '.element',
                        masonry: {
                            columnWidth : $columnWidth,
                            gutter: 40
                        }
                    });
                }
            });
        });
    }
    /************************************
        LIGHTBOX
    ************************************/
    function be_lightbox() {
        jQuery('.image-popup-vertical-fit').magnificPopup({
            mainClass: 'mfp-img-mobile my-mfp-zoom-in',
            closeOnContentClick: true,
            gallery: {
                enabled: true
            },
            image: {
                verticalFit: true
            },
            zoom: {
                enabled: true,
                duration: 300 // don't foget to change the duration also in CSS
            },
            preloader: true,
            type: 'inline',
            overflowY: 'auto',
            removalDelay: 300,
            callbacks: {
                afterClose: function () {
                    jQuery(window).trigger('resize');
                }
            }
        });
        jQuery('.popup-gallery').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1]
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
            },
            preloader: true,
            callbacks: {
                afterClose: function () {
                    jQuery(window).trigger('resize');
                }
            }
        });
        jQuery('.popup-with-content').magnificPopup({
            type: 'inline',
            preloader: false
        });
    }
    function photostream() {
        jQuery('.photostream').each(function() {
            jQuery(this).find('ul').empty();
            jQuery(this).bra_photostream({
                user: jQuery(this).attr('data-user'),
                limit: jQuery(this).attr('data-limit'),
                social_network: jQuery(this).attr('data-social-media')
            });
        });
    }
    /************************************
        DOCUMEnT READY EVENT
    ************************************/
    function do_ajax_complete() {
        jQuery('input[placeholder], textarea[placeholder]').placeholder();
        jQuery('.hero-section-wrap, .full-screen-section').FullScreen();
        jQuery(".scrollToFade").scrollToFade();
        jQuery('#header').Transparent();
        jQuery('body').SectionScroll();
        jQuery('.one-col script:last-child').prev('.rev_slider_wrapper').parent('.one-col').css('margin-bottom', '0px');
        be_google_maps();
        be_lightbox();
        be_close_sidebar();
        photostream();
        munu_item_update();
        jQuery('a[href="'+window.location.href+'"]').unbind( 'click' );
        jQuery('a[href="'+window.location.href+'"]').click(function(e) {
            e.preventDefault();
        });
        jQuery('.component ul li:first-child').addClass('current');
        /********************************
            Accordion
        ********************************/
        jQuery('.accordion').each(function () {
            var $accordion = jQuery(this);
            $accordion.accordion({
                collapsible: true,
                heightStyle: "content",
            }).css('opacity', 1);
        });
        /********************************
            Sticky Header
        ********************************/
        if (jQuery('body').hasClass('sticky-header')) {
            jQuery('#header-inner-wrap').waypoint('sticky', {
                handler: function (direction) {
                    if (direction === 'down') {
                        jQuery('#header-inner-wrap').addClass('no-transparent').removeClass('transparent');
                        setTimeout(function () {
                            jQuery('#header-inner-wrap').addClass('top-animate');
                        }, 10);
                    } else {
                        jQuery('#header-inner-wrap').removeClass('no-transparent').addClass('transparent').delay(20000).removeClass('top-animate');
                    }
                },
                offset: $offset
            });
        }
        /************************************
            RESPONSIVE IFRAME
        ************************************/
        jQuery('body').find('iframe').not('.rev_slider iframe').each(function () {
            jQuery(this).parent().fitVids();
        });
        /********************************
            Menu 
        ********************************/
        var $menu = jQuery('#navigation .menu').children('ul');
        $menu.superfish({
            animation: {opacity: 'show'},
            animationOut: {opacity: 'hide'},
            speed : 400,
            delay: 600
        });
        /********************************
            Video Backgrounds
        ********************************/
        jQuery('.be-section .be-bg-video, .be-slider-video .be-bg-video').load();
        jQuery('.be-section .be-bg-video, .be-slider-video .be-bg-video').on("loadedmetadata", function () {
            jQuery(this).css({
                width: this.videoWidth,
                height: this.videoHeight
            });
            be_resize_background_video();
            jQuery(this).css('display', 'block');
        });
        /********************************
            Parallax
        ********************************/
        if (!jQuery('html').hasClass('touch')) {
            jQuery('.be-section.be-bg-parallax').appear();
            jQuery(document).on('appear', '.be-section.be-bg-parallax', function () {
                jQuery(this).each(function () {
                    jQuery(this).parallax("50%", 0.2);
                });
            });
        }
        jQuery('.be-section.be-bg-parallax').each(function () {
            if (jQuery(this).is(':appeared')) {
                jQuery(this).parallax("50%", 0.2);
            }
        });
        /********************************
            Portfolio 
        ********************************/
        be_portfolio_layout();
        jQuery(".trigger_infinite_scroll").each(function( index ) {
            var $this = jQuery(this), $action = $this.closest('.portfolio').attr("data-action"), $category = $this.closest('.portfolio').attr("data-category"), $masonry = $this.closest('.portfolio').attr("data-masonry"), $showposts = $this.closest('.portfolio').attr("data-showposts"), $paged = $this.closest('.portfolio').attr("data-paged"), $col = $this.closest('.portfolio').attr("data-col"), $gallery = $this.closest('.portfolio').attr("data-gallery"), $filter = $this.closest('.portfolio').attr("data-filter"), $show_filters = $this.closest('.portfolio').attr("data-show_filters"), $data_thumbnail_bg_color = $this.closest('.portfolio').attr("data-thumbnail-bg-color");
            var opts = {
                offset: '100%'
            };
            $this.waypoint(function(direction) {
                if (direction === 'down') {
                    $this.waypoint('disable');
                    jQuery('.page-loader').fadeIn();
                    jQuery.ajax({
                        type: "POST",
                        url: ajax_url,
                        data: "action="+$action+"&category="+$category+"&masonry="+$masonry+"&showposts="+$showposts+"&paged="+$paged+"&col="+$col+"&gallery="+$gallery+"&filter="+$filter+"&show_filters="+$show_filters+"&thumb_overlay_color="+$data_thumbnail_bg_color,
                    }).done(function(data) {
                        if(data != 0) {
                            var $newItems = jQuery(data);
                            $newItems.imagesLoaded(function () {
                                $this.closest('.portfolio').find('.portfolio-container').append( $newItems ).isotope( 'appended', $newItems );
                                jQuery(window).trigger('resize');
                                $paged++;
                                $this.waypoint(opts);
                                jQuery('.page-loader').fadeOut();
                                be_lightbox();
                            });
                        }
                        else {
                            $this.waypoint('disable');
                            jQuery('.page-loader').fadeOut();
                        }
                    });
                }
            }, opts);
        });
        /********************************
            Text Rotate
        ********************************/
        jQuery(".rotates").each(function () {
            var $animation = jQuery(this).attr('data-animation'), $speed = parseInt(jQuery(this).attr('data-speed'), 10);
            jQuery(this).textrotator({
                animation : $animation,
                separator : "||",
                speed : $speed
            }).css('opacity', 1);
        });
        /********************************
            Services
        ********************************/
        jQuery('.services').each(function () {
            var $this = jQuery(this);
            $this.find('li:even').addClass('even');
            $this.find('li:odd').addClass('odd');
            $this.find('li:last-child').addClass('last');
            $this.animate({opacity: 1});
        });
        /********************************
            Sliders
        ********************************/
        jQuery('body').imagesLoaded(function () {
            /********************************
                Carousel 
            ********************************/
            if (jQuery(".be-carousel").length > 0) {
                jQuery(".be-carousel:not(.portfolios-carousel)").each(function () {
                    var $this = jQuery(this), col = $this.parent().width() / 5, $data_col = parseInt($this.attr('data-col')), $max;
                    if(jQuery(window).width() < 767) {
                        $max = 2;
                    } else {
                        $max = 5;
                    }
                    $this.carouFredSel({
                        prev: $this.closest('.carousel-wrap').find('a.prev'),
                        next: $this.closest('.carousel-wrap').find('a.next'),
                        items: {
                            width: col,
                            height: '250',
                            visible: {
                                min: 2,
                                max: $max
                            }
                        },
                        responsive: true,
                        width: '100%',
                        mousewheel: false,
                        swipe: {
                            onMouse: true,
                            onTouch: true
                        },
                        scroll: {
                            items: 1,
                            pauseOnHover: false
                        },
                        auto: {
                            play: false
                        }
                    }).css('opacity',  1);
                    $this.closest('.carousel-wrap').find('a.prev, a.next').css('opacity',  1);
                });
                jQuery(".be-carousel.portfolios-carousel").each(function () {
                    var $this = jQuery(this), col = $this.parent().width() / 4, $data_col = parseInt($this.attr('data-col')), $max;
                    if(jQuery(window).width() < 767) {
                        $max = 2;
                    } else {
                        $max = 4;
                    }
                    $this.carouFredSel({
                        prev: $this.closest('.carousel-wrap').find('a.prev'),
                        next: $this.closest('.carousel-wrap').find('a.next'),
                        items: {
                            width: col,
                            height: '385',
                            visible: {
                                min: 2,
                                max: $max
                            }
                        },
                        responsive: true,
                        width: '100%',
                        mousewheel: false,
                        swipe: {
                            onMouse: true,
                            onTouch: true
                        },
                        scroll: {
                            items: 1,
                            pauseOnHover: false
                        },
                        auto: {
                            play: false
                        }
                    }).css('opacity',  1);
                    $this.closest('.carousel-wrap').find('a.prev, a.next').css('opacity',  1);
                });
            }
            /********************************
                Flexslider 
            ********************************/
            if (jQuery('.be-flex-slider').length > 0) {
                jQuery('.be-flex-slider').each(function () {
                    var $animation_type = jQuery(this).attr('data-animation'), $slideshow = false, $slide_interval = parseInt(jQuery(this).attr('data-slide-interval'), 10);
                    if (jQuery(this).attr('data-auto-slide') === 'yes') {
                        $slideshow = true;
                    }
                    jQuery(this).flexslider({
                        start : function (slider) {
                            slider.closest(".be-flex-slider").removeClass('flex-loading');
                            slider.closest(".be-flex-slider").find('i.font-icon.icon-cog.icon-spin').remove();
                            if (slider.find('ul.slides li').length < 2) {
                                slider.closest(".be-flex-slider").find('.flex-control-nav,.flex-direction-nav').remove();
                            }
                            if((jQuery('.flex-direction-nav li a,.flex-control-nav li a').length > 0) && jQuery('.flexslider img')) {
                                BackgroundCheck.init({
                                    targets: '.flex-direction-nav li a,.flex-control-nav li a',
                                    images: '.flexslider img'
                                });
                            }
                            if (slider.closest('.portfolio-container').length > 0) {
                                jQuery(window).trigger('resize');
                            }
                        },
                        after: function (slider) {
                            if((jQuery('.flex-direction-nav li a,.flex-control-nav li a').length > 0) && jQuery('.flexslider img')) {
                                BackgroundCheck.refresh();
                            }
                            if (slider.closest('.portfolio-container').length > 0) {
                                jQuery(window).trigger('resize');
                            }
                        },
                        animation : $animation_type,
                        slideshow : $slideshow,
                        slideshowSpeed : $slide_interval,
                        controlNav : true,
                        smoothHeight : true,
                        directionNav : true,
                        prevText : '',
                        nextText : ''
                    });
                });
            }
            /********************************
                Testimonial Slider 
            ********************************/
            if (jQuery('.flexslider.testimonial-flex-slider').length > 0) {
                jQuery('.flexslider.testimonial-flex-slider').each(function () {
                    jQuery(this).flexslider({
                        animation : 'slide',
                        slideshow : true,
                        controlNav : true,
                        slideshowSpeed : 7000,
                        smoothHeight : true,
                        directionNav: false,
                        start: function (slider) {
                            if((jQuery('.flex-direction-nav li a,.flex-control-nav li a').length > 0) && jQuery('.flexslider img')) {
                                BackgroundCheck.init({
                                    targets: '.flex-direction-nav li a,.flex-control-nav li a',
                                    images: '.flexslider img'
                                });
                            }
                        },
                        after: function (slider) {
                            if((jQuery('.flex-direction-nav li a,.flex-control-nav li a').length > 0) && jQuery('.flexslider img')) {
                                BackgroundCheck.refresh();
                            }
                        }
                    });
                });
            }
        });
        /********************************
            Tabs
        ********************************/
        if (jQuery('.tabs').length > 0) {
            jQuery('.tabs').tabs({
                fx: { 
                    opacity : 'toggle', 
                    duration : 200 
                }
            }).css('opacity', 1);
        }
        /********************************
            Animate Number
        ********************************/
        jQuery('.animate-number.animate').appear();
        jQuery('.animate-number.animate').each(function () {
            if (jQuery(this).is(':appeared')) {
                jQuery(this).removeClass('animate');
                var $endval = parseInt(jQuery(this).attr('data-number'), 10);
                jQuery(this).countTo({
                    from : 0,
                    to : $endval,
                    speed : 1500,
                    refreshInterval : 30
                });
            }
        });
        jQuery(document).on('appear', '.animate-number.animate', function () {
            jQuery(this).each(function () {
                jQuery(this).removeClass('animate');
                var $endval = parseInt(jQuery(this).attr('data-number'), 10);
                jQuery(this).countTo({
                    from : 0,
                    to : $endval,
                    speed : 1500,
                    refreshInterval : 30
                });
            });
        });
        /********************************
            PIE CHART
        ********************************/
        jQuery('.chart').appear();
        jQuery('.chart').each(function () {
            if (jQuery(this).is(':appeared')) {
                var $this = jQuery(this), $barColor = $this.attr('data-percentage-bar-color'), $trackColor = $this.attr('data-percentage-track-color'), $scaleColor = $this.attr('data-percentage-scale-color'), $size = $this.attr('data-size'), $lineWidth = $this.attr('data-linewidth');
                $this.easyPieChart({
                    animate: 1000,
                    barColor: $barColor,
                    trackColor: $trackColor,
                    scaleColor: $scaleColor,
                    size: $size,
                    lineWidth: $lineWidth,
                    onStep: function (from, to, percent) {
                        jQuery(this.el).find('span.percentage').text(Math.round(percent));
                        jQuery(this.el).find('span.percentage').attr('data-from', from);
                        jQuery(this.el).find('span.percentage').attr('data-to', to);
                    }
                });
            }
        });
        jQuery(document).on('appear', '.chart', function () {
            var $this = jQuery(this), $barColor = $this.attr('data-percentage-bar-color'), $trackColor = $this.attr('data-percentage-track-color'), $scaleColor = $this.attr('data-percentage-scale-color'), $size = $this.attr('data-size'), $lineWidth = $this.attr('data-linewidth');
            $this.easyPieChart({
                animate : 1000,
                barColor : $barColor,
                trackColor : $trackColor,
                scaleColor : $scaleColor,
                size : $size,
                lineWidth : $lineWidth,
                onStep : function (from, to, percent) {
                    jQuery(this.el).find('span.percentage').text(Math.round(percent));
                    jQuery(this.el).find('span.percentage').attr('data-from', from);
                    jQuery(this.el).find('span.percentage').attr('data-to', to);
                }
            });
        });
        /********************************
            Skill bar
        ********************************/
        jQuery('.be-skill').appear();
        jQuery('.be-skill').each(function () {
            var $this = jQuery(this);
            if ($this.is(':appeared')) {
                $this.css('width', jQuery(this).attr('data-skill-value'));
            }
        });
        jQuery(document).on('appear', '.be-skill', function () {
            var $this = jQuery(this);
            if ($this.is(':appeared')) {
                $this.css('width', jQuery(this).attr('data-skill-value'));
            }
        });
        /********************************
            CSS3 Animations
        ********************************/
        jQuery(".be-animate").appear();
        jQuery(".be-animate").each(function () {
            var $this = jQuery(this);
            if ($this.is(':appeared')) {
                $this.addClass("already-visible");
                $this.addClass($this.attr('data-animation'));
                $this.addClass('animated');
            }
        });
        jQuery(document).on('appear', '.be-animate', function () {
            var $this = jQuery(this);
            if ($this.is(':appeared')) {
                $this.addClass("already-visible");
                $this.addClass($this.attr('data-animation'));
                $this.addClass('animated');
            }
        });
    }
    /*******************************************************
    Ajax Load Pages with HTML Pushstate and page transitions
    ********************************************************/
    
    /*if(jQuery('body').hasClass('all-ajax-content')) {
        var transition = function($newEl) {
            var $oldEl = this;
            $oldEl.after($newEl);
            $oldEl.find('#logo').hide();
            be_close_sidebar();
            $oldEl.slideFadeToggle(1000, function () {
                $oldEl.remove();
                jQuery('body').imagesLoaded( function() {
                    do_ajax_complete();
                    jQuery(document).trigger("update_content");
                });
                jQuery(document).trigger('change');
            });
        };
        window.no_ajax_pages.push('product', 'add-to-cart', 'pdf', 'doc', 'eps', 'png', 'zip', 'admin','wp-', 'feed', '#', '?remove_item');
        jQuery('html').djax('.ajaxable', no_ajax_pages, transition);
        jQuery(window).bind('djaxLoad', function(e, data) {
            data = data.response.replace(/(<\/?)body( .+?)?>/gi,'$1NOTBODY$2>', data);
            var nobodyClass = jQuery(data).filter('notbody').attr("class");
            jQuery('body').attr("class", nobodyClass);
            jQuery(document).trigger('change');
        });
        jQuery(window).bind('djaxClick', function(e, data) {
            jQuery('.page-loader').fadeIn();
        });
        jQuery(window).bind('djaxClick', function(e, data) {
            jQuery('html, body, document').stop().animate({scrollTop: jQuery('#main-wrapper').offset().top }, 1000, 'easeInOutQuint');
        });
    }*/

    /************************************
        DOCUMET READY EVENT
    ************************************/
    jQuery(document).ready(function () {
        do_ajax_complete();
        /**************************************
            EVENTS
        **************************************/
        jQuery(document).on('click', '.header-search-controls .search-button', function () {
            jQuery('.search-box-wrapper').fadeToggle().find('.s').focus();
        });
        /********************************
            Navigations 
        ********************************/
        jQuery(document).on('click', '.mobile-nav-controller', function () {
            jQuery('#mobile-menu').slideFadeToggle();
        });
        jQuery(document).on('click', '.mobile-sub-menu-controller', function () {
            jQuery(this).siblings('.sub-menu').slideFadeToggle();
            if (jQuery(this).find('i').hasClass('icon-angle-down')) {
                jQuery(this).find('i').removeClass('icon-angle-down');
                jQuery(this).find('i').addClass('icon-angle-up');
            } else {
                jQuery(this).find('i').removeClass('icon-angle-up');
                jQuery(this).find('i').addClass('icon-angle-down');
            }
        });
        /********************************
            Notifications 
        ********************************/
        jQuery(document).on('click', '.be-notification .close', function (e) {
            e.preventDefault();
            jQuery(this).closest('.be-notification').slideUp(500);
        });
        /********************************
            Portfolio 
        ********************************/
        jQuery(document).on('click', '.sort', function () {
            var $this = jQuery(this), myClass = $this.attr("data-id");
            $this.closest(".filters").find(".sort").removeClass("current_choice");
            $this.addClass("current_choice");
            $this.closest('.portfolio').find('.portfolio-container').isotope({ filter: '.' + myClass });
            be_portfolio_layout();
        });
        jQuery(document).on('mouseenter', '.thumb-wrap,.carousel-item a', function () {
            jQuery(this).find('.thumb-overlay').stop(true, true).fadeIn(300);
        });
        jQuery(document).on('mouseleave', '.thumb-wrap,.carousel-item a', function () {
            jQuery(this).find('.thumb-overlay').stop(true, true).fadeOut(300);
        });
        jQuery(document).on('click', '.trigger_load_more:not(.disabled)', function () {
            var $this = jQuery(this), $action = $this.closest('.portfolio').attr("data-action"), $category = $this.closest('.portfolio').attr("data-category"), $masonry = $this.closest('.portfolio').attr("data-masonry"), $showposts = $this.closest('.portfolio').attr("data-showposts"), $paged = parseInt($this.closest('.portfolio').attr("data-paged")), $col = $this.closest('.portfolio').attr("data-col"), $gallery = $this.closest('.portfolio').attr("data-gallery"), $filter = $this.closest('.portfolio').attr("data-filter"), $show_filters = $this.closest('.portfolio').attr("data-show_filters"), $data_thumbnail_bg_color = $this.closest('.portfolio').attr("data-thumbnail-bg-color");
            jQuery('.page-loader').fadeIn();
            $this.addClass('disabled');
            jQuery.ajax({
                type: "POST",
                url: ajax_url,
                data: "action="+$action+"&category="+$category+"&masonry="+$masonry+"&showposts="+$showposts+"&paged="+$paged+"&col="+$col+"&gallery="+$gallery+"&filter="+$filter+"&show_filters="+$show_filters+"&thumb_overlay_color="+$data_thumbnail_bg_color,
                success: function(data) {
                    if(data) {
                        var $newItems = jQuery(data);
                        $newItems.imagesLoaded(function () {
                            $this.closest('.portfolio').find('.portfolio-container').append( $newItems ).isotope( 'appended', $newItems );
                            jQuery(window).trigger('resize');
                            $this.closest('.portfolio').attr("data-paged", $paged+1);
                            $this.attr("data-total-items", function() {
                                return (parseInt(jQuery(this).attr('data-total-items'))-$newItems.length);
                            });
                            if( $this.attr("data-total-items") < 1 ) {
                                $this.fadeOut(500, function() {
                                    $this.remove();
                                });
                            }
                            $this.removeClass('disabled');
                            jQuery('.page-loader').fadeOut();
                            be_lightbox();
                        });
                    } else {
                        $this.addClass('disabled');
                        jQuery('.page-loader').fadeOut();
                    }
                }
            });
        });
        /********************************
            Lightbox 
        ********************************/
        jQuery(document).on('click','.be-lightbox-gallery', function (e) {
            e.preventDefault();
            jQuery(this).next('.popup-gallery').magnificPopup( 'open' );
        });
        /********************************
            Contact Form
        ********************************/
        jQuery(document).on('click', '.contact_submit', function () {
            var $this = jQuery(this), $contact_status = $this.closest('.contact_form').find(".contact_status"), $contact_loader = $this.closest('.contact_form').find(".contact_loader");
            $contact_loader.fadeIn();
            jQuery.ajax({
                type: "POST",
                url: ajax_url,
                dataType: 'json',
                data: "action=contact_authentication&" + jQuery(this).closest(".contact").serialize(),
                success    : function (msg) {
                    $contact_loader.fadeOut();
                    if (msg.status === "error") {
                        $contact_status.removeClass("success").addClass("error");
                    } else {
                        $contact_status.addClass("success").removeClass("error");
                    }
                    $contact_status.html(msg.data).slideDown();
                },
                error: function () {
                     $contact_status.html("Please Try Again Later").slideDown();
                }
            });
            return false;
        });
        /********************************
            BUTTON 
        ********************************/
        jQuery(document).on('mouseenter', '.be-button', function () {
            var $border_color = jQuery(this).attr("data-hover-border-color"), $bg_color = jQuery(this).attr("data-hover-bg-color"), $color = jQuery(this).attr("data-hover-color"), $icon_color = jQuery(this).attr("data-hover-icon-color");
            jQuery(this).css('border-color', $border_color);
            jQuery(this).css('background-color', $bg_color);
            jQuery(this).css('color', $color);
            jQuery(this).find('i').css('color', $icon_color);
        });
        jQuery(document).on('mouseleave', '.be-button', function () {
            var $border_color = jQuery(this).attr("data-border-color"), $bg_color = jQuery(this).attr("data-bg-color"), $color = jQuery(this).attr("data-color"), $icon_color = jQuery(this).attr("data-icon-color");
            jQuery(this).css('border-color', $border_color);
            jQuery(this).css('background-color', $bg_color);
            jQuery(this).css('color', $color);
            jQuery(this).find('i').css('color', $icon_color);
        });
        /********************************
            Font Icon 
        ********************************/
        jQuery(document).on('mouseenter', '.icon-shortcode .font-icon', function () {
            var $border_color = jQuery(this).attr("data-hover-border-color"), $bg_color = jQuery(this).attr("data-hover-bg-color"), $color = jQuery(this).attr("data-hover-color");
            jQuery(this).css('border-color', $border_color);
            jQuery(this).css('background-color', $bg_color);
            jQuery(this).css('color', $color);
        });
        jQuery(document).on('mouseleave', '.icon-shortcode .font-icon', function () {
            var $border_color = jQuery(this).attr("data-border-color"), $bg_color = jQuery(this).attr("data-bg-color"), $color = jQuery(this).attr("data-color");
            jQuery(this).css('border-color', $border_color);
            jQuery(this).css('background-color', $bg_color);
            jQuery(this).css('color', $color);
        });
        /********************************
            Team
        ********************************/
        jQuery(document).on('mouseenter', '.team_icons', function () {
            var hover_color = jQuery(this).attr("data-hover-color");
            jQuery(this).css('color', hover_color);
        });
        jQuery(document).on('mouseleave', '.team_icons', function () {
            var default_color = jQuery(this).attr("data-default-color");
            jQuery(this).css('color', default_color);
        });
        /********************************
            Local Scroll
        ********************************/
        jQuery(document).on('click', 'a[href="#"]', function (e) {
            e.preventDefault();
        });
        jQuery(document).on('click', 'a', function (e) {
            var $link_to = jQuery(this).attr('href'), url_arr, $element, $path = window.location.href;
            if (jQuery(this).hasClass('ui-tabs-anchor')) {
                return false;
            }
            url_arr = $link_to.split('#');
            if ($link_to.indexOf('#') >= 0 && $path.indexOf(url_arr[0]) >= 0) {
                $element = $link_to.substring($link_to.indexOf('#') + 1);
                if ($element) {
                    if (jQuery('#' + $element).length > 0) {
                        e.preventDefault();
                        if (jQuery(window).width() < 960) {
                            jQuery('#mobile-menu').slideFadeToggle(500, function () {
                                be_animate_scroll(jQuery('#' + $element));
                            });
                        } else {
                            be_animate_scroll(jQuery('#' + $element));
                        }
                    }
                }
            }
        });
        /********************************
            Services
        ********************************/
        jQuery(document).on('mouseenter', '.service-wrap', function () {
            var $hover_bg_color = jQuery(this).attr("data-hover-bg-color"), $hover_color = jQuery(this).attr("data-hover-color");
            jQuery(this).find('.font-icon').css({
                "background-color": $hover_bg_color,
                "color": $hover_color
            });
        });
        jQuery(document).on('mouseleave', '.service-wrap', function () {
            var $default_bg_color = jQuery(this).attr("data-bg-color"), $default_color = jQuery(this).attr("data-color");
            jQuery(this).find('.font-icon').css({
                "background-color": $default_bg_color,
                "color": $default_color
            });
        });
        /********************************
            Menu Sidebar
        ********************************/
        jQuery(document).on('click', '.sliderbar-menu-controller', function () {
            jQuery('.sb-slidebar').toggleClass('opened');
            jQuery('html,body').toggleClass('slider-bar-opened');
        });
        /********************************
            Portfolio Custom Gallery
        ********************************/
        jQuery(document).on('click', '.single_portfolio_info_close', function () {
            jQuery(this).closest('.gallery_content').toggleClass('show');
        });
        jQuery(document).on('click', '.single_portfolio_close', function () {
            if (jQuery('.gallery-slider-wrap').hasClass('opened')) {
                jQuery('html').removeClass('overflow-hidden');
                jQuery(window).trigger('resize');
                jQuery('.gallery-slider-wrap').css('left', '100%').css('opacity', 0);
                setTimeout(function () {
                    jQuery('.gallery-slider-wrap').removeClass('opened');
                    jQuery('.gallery-slider-content').empty();
                    jQuery('.gallery-slider-wrap').css('left', '-100%');
                    jQuery(window).trigger('resize');
                }, 300);
            }
        });
        jQuery(document).on('click', '.custom-slider', function (e) {
            e.preventDefault();
            var $this = jQuery(this);
            $gallery_loader.fadeIn();
            jQuery('.gallery-slider-wrap').css('left', '0%').css('opacity', 1);
            setTimeout(function () {
                jQuery('html').addClass('overflow-hidden');
                jQuery('.gallery-slider-wrap').addClass('opened');
                jQuery.ajax({
                    type : "GET",
                    url : $this.attr('data-href'),
                    success : function (data) {
                        jQuery('.gallery-slider-content').html(data);
                        if(jQuery('.gallery-slider-content').find('.single-page-lightbox-content').length > 0){
                            jQuery('.single-page-lightbox-content').imagesLoaded(function () {
                                do_ajax_complete();
                                jQuery('.page-loader, .loader').fadeOut();
                            });
                            jQuery('.single-page-lightbox-content').scroll(function () {
                                jQuery(window).trigger('resize');
                                console.log('test');
                            });
                            return false;
                        }
                        jQuery('#gallery-container-wrap').imagesLoaded(function () {
                            if (('#gallery-container-wrap').length > 0) {
                                jQuery('#gallery-container-wrap').fitVids();
                                jQuery('#gallery-container-wrap').CenteredSlider();
                                resize_gallery_video();
                            }
                        });
                        jQuery('#carousel').imagesLoaded(function () {
                            jQuery('#carousel').elastislide();
                        });
                        jQuery(".gallery_content_area").mCustomScrollbar({
                            autoHideScrollbar: true,
                            mouseWheelPixels: 300
                        });
                    }
                });
            }, 300);
        });
        jQuery(document).on('mouseenter', '.carousel_bar_area', function () {
            jQuery(this).find('.carousel_bar_wrap').css('opacity', '0').stop().animate({ opacity: 1, bottom: '0px' }, 500);
        });
        jQuery(document).on('mouseleave', '.carousel_bar_area', function () {
            jQuery(this).find('.carousel_bar_wrap').stop().animate({ opacity: 0, bottom: '-500px' }, 500);
        });
        /********************************
            Close Custom Popups
        ********************************/
         jQuery(document).on('mouseup', '.sliderbar-menu-controller, .sb-slidebar, .mobile-nav-controller, #mobile-menu, .header-search-controls .search-button, .search-box-wrapper', function () {
            if(jQuery(this).hasClass('sliderbar-menu-controller') || jQuery(this).hasClass('sb-slidebar')) {
                be_close_mobilemenu();
                be_close_searchbox();
            }
            if(jQuery(this).hasClass('mobile-nav-controller') || jQuery(this).hasClass('mobile-menu')) {
                be_close_sidebar();
                be_close_searchbox();
            }
            if(jQuery(this).hasClass('search-button') || jQuery(this).hasClass('search-box-wrapper')) {
                be_close_mobilemenu();
                be_close_sidebar();
            }
            return false;
        });
        jQuery(document).on('mouseup', function () {
            be_close_sidebar();
            be_close_mobilemenu();
            be_close_searchbox();
        });
        jQuery(document).on('keyup', function (e) {
            if (e.keyCode === 27) {
                be_close_sidebar();
                if (jQuery('.gallery_content').hasClass('show')) {
                    jQuery('.gallery_content').removeClass('show');
                } else {
                    if (jQuery('.gallery-slider-wrap').hasClass('opened')) {
                        jQuery('html').removeClass('overflow-hidden');
                        jQuery(window).trigger('resize');
                        jQuery('.gallery-slider-wrap').css('left', '100%').css('opacity', 0);
                        setTimeout(function () {
                            jQuery('.gallery-slider-wrap').removeClass('opened');
                            jQuery('.gallery-slider-content').empty();
                            jQuery('.gallery-slider-wrap').css('left', '-100%');
                            jQuery(window).trigger('resize');
                        }, 300);
                    }
                }
            }
        });
        /********************************
            MouseMove Parallax
        ********************************/
        jQuery(document).on('mousemove', '.be-bg-mousemove-parallax', function (e) {
            var amountMovedX = (event.pageX / jQuery(this).width()) * 100, amountMovedY = (event.pageY / jQuery(this).height()) * 100;
            if(amountMovedX > 100) {
                amountMovedX = 100;
            } else if(amountMovedX < 0) {
                amountMovedX = 0;
            }
            if(amountMovedY > 100) {
                amountMovedY = 100;
            } else if(amountMovedY < 0) {
                amountMovedY = 0;
            }
            jQuery(this).stop(true, false).animate({backgroundPosition: amountMovedX + '% ' + amountMovedY + '%'}, 200);
        });
        /********************************
            Back To Top
        ********************************/
        jQuery(document).on('click', '#back-to-top', function (e) {
            e.preventDefault();
            jQuery('body,html').animate({ scrollTop: 0 }, 1000, 'easeInOutQuint')
        });
        /*jQuery(document).on('mousewheel', '.be-section, #hero-section', function (event) {
            var $scroll = false;
            if(jQuery(this).hasClass('be-section')) {
                if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
                    if(jQuery(this).prev('.be-section').length > 0) {
                        $scroll = jQuery(this).prev('.be-section');
                    } else if(jQuery('#hero-section').length > 0) {
                        $scroll = jQuery('#hero-section');
                    }
                }
                else {
                    if(jQuery(this).next('.be-section').length > 0) {
                        $scroll = jQuery(this).next('.be-section');
                    }
                }   
            }
            if(jQuery(this).hasClass('header-hero-section')) {
                if (!(event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0)) {
                    if(jQuery('#content').find('.be-section').length > 0) {
                        $scroll = jQuery('#content').find('.be-section').first();
                    }
                }   
            }
            if($scroll && jQuery('body').hasClass('section-scroll')) { 
                event.preventDefault();
                be_animate_scroll($scroll);
            }
        });*/
    });// END DOCUMENT READY EVENT
    jQuery(window).smartresize(function () {
        be_portfolio_layout();
        resize_gallery_video();
        jQuery(".gallery_content_area").mCustomScrollbar("update");
        be_sticky_sidebar();
        be_resize_background_video();
        if (jQuery(window).width() > 960) {
            jQuery('#mobile-menu').fadeOut();
        }
        if (jQuery('body').hasClass('header-transparent') && jQuery('.rev_slider_wrapper').length > 0) {
            BackgroundCheck.refresh();
        }
    });// END WINDOW RESIZE EVENT
    jQuery(window).scroll(function () {
        if (jQuery('body').hasClass('header-transparent') && jQuery('.rev_slider_wrapper').length > 0) {
            BackgroundCheck.refresh();
        }
        if (jQuery(this).scrollTop() > 10) {
            jQuery('#back-to-top').fadeIn();
        } else {
            jQuery('#back-to-top').fadeOut();
        }
        munu_item_update();
    });// END WINDOW SCROLL EVENT
    jQuery(window).load(function () {
        setTimeout(function () {
            jQuery('body').imagesLoaded(function () {
                var $hash = window.location.hash;
                if ($hash) {
                    if (jQuery($hash).length > 0) {
                        be_animate_scroll(jQuery($hash));
                    }
                }
                be_sticky_sidebar();
                $page_loader.fadeOut();
            });
            jQuery(window).trigger('resize');
        }, 200);
        if (jQuery('body').hasClass('header-transparent') && jQuery('.rev_slider_wrapper').length > 0) {
            jQuery('.rev_slider_wrapper').each(function () {
                var $wrapper = jQuery(this).attr('id'), $instance = jQuery(this).find('.rev_slider').attr('id'), revapi2 = tpj('#' + $instance).revolution();
                setTimeout(function () {
                    jQuery('.tp-bgimg').removeClass('current-slide');
                    jQuery('#' + $instance + ' ul li:nth-of-type(1) .slotholder .tp-bgimg').addClass('current-slide');
                    BackgroundCheck.init({
                        targets: '#header #header-inner-wrap',
                        images: '.tp-bgimg.current-slide'
                    });
                    BackgroundCheck.refresh();
                }, 100);
                revapi2.bind("revolution.slide.onchange", function (e, data) {
                    setTimeout(function () {
                        jQuery('.tp-bgimg').removeClass('current-slide');
                        jQuery('#' + $instance + ' ul li:nth-of-type(' + (data.slideIndex) + ') .slotholder .tp-bgimg').addClass('current-slide');
                        BackgroundCheck.init({
                            targets: '#header #header-inner-wrap',
                            images: '.tp-bgimg.current-slide'
                        });
                        BackgroundCheck.refresh();
                    }, 100);
                });
            });
        }
    });// END WINDOW LOAD EVENT
}(jQuery));