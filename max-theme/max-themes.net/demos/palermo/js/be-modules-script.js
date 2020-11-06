;(function (jQuery) {
    "use strict";
    /*jslint browser: true, unparam: true, regexp: true, node: true*/
    /*global $, jQuery, alert, google, no_ajax_pages*/
    var $page_loader = jQuery('.page-loader'), ajax_url = jQuery('#ajax_url').val(), transition, $exclude_links;



    /************************************
        COUNTDOWN
    ************************************/

    function be_countdown() {
      //  jQuery.countdown.setDefaults();
       if(jQuery('.be-countdown').length > 0) {  
            jQuery('.be-countdown').each( function() {
                var $this = jQuery(this);
                var $date = new Date( $this.attr('data-time') );
                jQuery(this).countdown({until: $date});
               // $(this).countdown($.countdown.regionalOptions[$langcode]); 
            }); 
       }
    }    


    /************************************
        GOOGLE MAPS
    ************************************/
    function be_google_maps() {
        if(jQuery('.gmap').length > 0) {
            var styles = {
                black : [{"featureType" : "water", "elementType" : "geometry", "stylers" : [{"color" : "#000000"}, {"lightness" : 17}]}, {"featureType" : "landscape", "elementType" : "geometry", "stylers" : [{"color" : "#000000"}, {"lightness" : 20}]}, {"featureType" : "road.highway", "elementType" : "geometry.fill", "stylers" : [{"color" : "#000000"}, {"lightness" : 17}]}, {"featureType" : "road.highway", "elementType" : "geometry.stroke", "stylers" : [{"color" : "#000000"}, {"lightness" : 29}, {"weight" : 0.2}]}, {"featureType" : "road.arterial", "elementType" : "geometry", "stylers" : [{"color" : "#000000"}, {"lightness" : 18}]}, {"featureType" : "road.local", "elementType" : "geometry", "stylers" : [{"color" : "#000000"}, {"lightness" : 16}]}, {"featureType" : "poi", "elementType" : "geometry", "stylers" : [{"color" : "#000000"}, {"lightness" : 21}]}, {"elementType" : "labels.text.stroke", "stylers" : [{"visibility" : "on"}, {"color" : "#000000"}, {"lightness" : 16}]}, {"elementType" : "labels.text.fill", "stylers" : [{"saturation" : 36}, {"color" : "#000000"}, {"lightness" : 40}]}, {"elementType" : "labels.icon", "stylers" : [{"visibility" : "off"}]}, {"featureType" : "transit", "elementType" : "geometry", "stylers" : [{"color" : "#000000"}, {"lightness" : 19}]}, {"featureType" : "administrative", "elementType" : "geometry.fill", "stylers" : [{"color" : "#000000"}, {"lightness" : 20}]}, {"featureType" : "administrative", "elementType" : "geometry.stroke", "stylers" : [{"color" : "#000000"}, {"lightness" : 17}, {"weight" : 1.2}]}],
                greyscale: [{"featureType" : "landscape", "stylers" : [{"saturation" : -100}, {"lightness" : 65}, {"visibility" : "on"}]}, {"featureType" : "poi", "stylers" : [{"saturation" : -100}, {"lightness" : 51}, {"visibility" : "simplified"}]}, {"featureType" : "road.highway", "stylers" : [{"saturation" : -100}, {"visibility" : "simplified"}]}, {"featureType" : "road.arterial", "stylers" : [{"saturation" : -100}, {"lightness" : 30}, {"visibility" : "on"}]}, {"featureType" : "road.local", "stylers" : [{"saturation" : -100}, {"lightness" : 40}, {"visibility" : "on"}]}, {"featureType" : "transit", "stylers" : [{"saturation" : -100}, {"visibility" : "simplified"}]}, {"featureType" : "administrative.province", "stylers" : [{"visibility" : "off"}]}, {"featureType" : "water", "elementType" : "labels", "stylers" : [{"visibility" : "on"}, {"lightness" : -25}, {"saturation" : -100}]}, {"featureType" : "water", "elementType" : "geometry", "stylers" : [{"hue" : "#ffff00"}, {"lightness" : -25}, {"saturation" : -97}]}],
                midnight: [{"featureType" : "water", "stylers" : [{"color" : "#021019"}]}, {"featureType" : "landscape", "stylers" : [{"color" : "#08304b"}]}, {"featureType" : "poi", "elementType" : "geometry", "stylers" : [{"color" : "#0c4152"}, {"lightness" : 5}]}, {"featureType" : "road.highway", "elementType" : "geometry.fill", "stylers" : [{"color" : "#000000"}]}, {"featureType" : "road.highway", "elementType" : "geometry.stroke", "stylers" : [{"color" : "#0b434f"}, {"lightness" : 25}]}, {"featureType" : "road.arterial", "elementType" : "geometry.fill", "stylers" : [{"color" : "#000000"}]}, {"featureType" : "road.arterial", "elementType" : "geometry.stroke", "stylers" : [{"color" : "#0b3d51"}, {"lightness" : 16}]}, {"featureType" : "road.local", "elementType" : "geometry", "stylers" : [{"color" : "#000000"}]}, {"elementType" : "labels.text.fill", "stylers" : [{"color" : "#ffffff"}]}, {"elementType" : "labels.text.stroke", "stylers" : [{"color" : "#000000"}, {"lightness" : 13}]}, {"featureType" : "transit", "stylers" : [{"color" : "#146474"}]}, {"featureType" : "administrative", "elementType" : "geometry.fill", "stylers" : [{"color" : "#000000"}]}, {"featureType" : "administrative", "elementType" : "geometry.stroke", "stylers" : [{"color" : "#144b53"}, {"lightness" : 14}, {"weight" : 1.4}]}],
                standard: [],
                bluewater: [{"featureType" : "water", "stylers" : [{"color" : "#46bcec"}, {"visibility" : "on"}]}, {"featureType" : "landscape", "stylers" : [{"color" : "#f2f2f2"}]}, {"featureType" : "road", "stylers" : [{"saturation" : -100}, {"lightness" : 45}]}, {"featureType" : "road.highway", "stylers" : [{"visibility" : "simplified"}]}, {"featureType" : "road.arterial", "elementType" : "labels.icon", "stylers" : [{"visibility" : "off"}]}, {"featureType" : "administrative", "elementType" : "labels.text.fill", "stylers" : [{"color" : "#444444"}]}, {"featureType" : "transit", "stylers" : [{"visibility" : "off"}]}, {"featureType" : "poi", "stylers" : [{"visibility" : "off"}]}]
            };
            jQuery('.gmap').each(function () {
                var $address = jQuery(this).data('address'), $zoom = jQuery(this).data('zoom'), $lat = jQuery(this).attr('data-latitude'), $lan = jQuery(this).attr('data-longitude'), map_style = jQuery(this).attr('data-style'), mapOptions = {
                    zoom: $zoom,
                    scrollwheel: false,
                    navigationControl: false,
                    mapTypeControl: false,
                    scaleControl: false,
                    streetViewControl: false,
                    center: new google.maps.LatLng(parseFloat($lat), parseFloat($lan)),
                    styles: styles[map_style]
                }, map = new google.maps.Map(jQuery(this)[0], mapOptions), marker = new google.maps.Marker({
                    position: new google.maps.LatLng(parseFloat($lat), parseFloat($lan)),
                    map: map,
                    title: $address
                });
                marker.setMap(map);
            });
        }
    }
    /************************************
        PORTFOLIO LAYOUTS
    ************************************/
    function be_portfolio_layout() {
        if(jQuery('.portfolio-container').length > 0) {
            jQuery('.portfolio-container').each(function () {
                var $this = jQuery(this), $width, $col, $columnWidth, $gutter_width = Number($this.closest('.portfolio').attr('data-gutter-width'));
                if (!$this.closest('.portfolio').hasClass('full-screen-gutter')) {
                    $gutter_width = 0;
                }
                if ($this.closest('.portfolio').hasClass('full-screen')) {
                    $width = Number($this.closest('.portfolio').width());
                    if ($this.closest('.portfolio').hasClass('five-col')) {
                        $col = 5;
                    } else if ($this.closest('.portfolio').hasClass('four-col')) {
                        $col = 4;
                    } else if ($this.closest('.portfolio').hasClass('two-col')) {
                        $col = 2;
                    } else {
                        $col = 3;
                    }
                    if ((jQuery(window).width() + jQuery.getScrollbarWidth()) < 1280) {
                        if ($this.closest('.portfolio').hasClass('two-col')) {
                            $col = 2;
                        } else {
                            $col = 3;
                        }
                    }
                    if ((jQuery(window).width() + jQuery.getScrollbarWidth()) < 768) {
                        $col = 2;
                    }
                    if ((jQuery(window).width() + jQuery.getScrollbarWidth()) < 480) {
                        $col = 1;
                    }
                    while (($width % $col) !== 0) {
                        $width = $width + 1;
                    }
                    $this.width($width);
                    $columnWidth = $this.width() / $col;
                } else {
                    if ($this.closest('.portfolio').hasClass('four-col')) {
                        $columnWidth = (($this.width() - 120) / 4);
                    } else if ($this.closest('.portfolio').hasClass('three-col')) {
                        $columnWidth = (($this.width() - 80) / 3);
                    } else {
                        $columnWidth = (($this.width() - 40) / 2);
                    }
                    if ($this.closest('.portfolio').width() <= 740) {
                        $columnWidth = (($this.width() - 40) / 2);
                    }
                    if ($this.closest('.portfolio').width() <= 440) {
                        $columnWidth = (($this.width() - 40) / 2);
                    }
                }
                $this.imagesLoaded(function () {
                    if ($this.closest('.portfolio').hasClass('full-screen-gutter') && Number($this.closest('.portfolio').attr('data-masonry')) !== 1) {
                        jQuery($this.find('.element.wide-width-height, .element.wide-height').find('.element-inner .flip-wrap .flip-img-wrap')).height(($this.find('.element.no-wide-width-height:visible').find('.flip-wrap').height() * 2) + $gutter_width);
                        jQuery($this.find('.element.wide-width').find('.element-inner .flip-wrap .flip-img-wrap')).height(($this.find('.element.no-wide-width-height:visible').find('.flip-wrap').height()));
                        $this.find('.element.wide-width-height, .element.wide-height, .element.wide-width').find('.element-inner .flip-wrap .flip-img-wrap img').resizeToParent();
                    }
                    $this.isotope({
                        itemSelector : '.element',
                        masonry: {
                            columnWidth : $columnWidth
                        }
                    }).addClass('masonry-activated');
                    if ($this.hasClass('portfolio-shortcode')) {
                        var delay = 1;
                        $this.find('.element').each(function () {
                            jQuery(this).find('img').one("load", function () {
                                jQuery(this).parent().delay(delay).addClass('img-loaded', 300);
                                delay += 200;
                            }).each(function () {
                                if (this.complete) {
                                    jQuery(this).load();
                                }
                            });
                        });
                    }
                });
                if($this.hasClass('portfolio-item-parallax')) {
                    $this.parentsUntil('.be-section').css('overflow', 'visible');
                    $this.closest('.be-section').css('overflow', 'visible');
                    $this.css('overflow', 'visible').find('.element').css('overflow', 'visible');
                }
            });
        }
    }
    function arrange_team() {
        jQuery('.grid-wrap:not(.changed)').each(function () {
            var $this = jQuery(this), $col = Number($this.attr('data-col')), i = 0;
            $this.addClass('changed');
            $this.find('.grid-col').css('width', 100 / $col + '%');
            $this.find('.grid-col:nth-of-type(' + $col + 'n)').css('border-right', 'none');
            for (i; i < $this.find('.grid-col').length; i += $col) {
                $this.find('.grid-col').slice(i, i + $col).wrapAll("<div class='grid-row clearfix'></div>");
            }
            $this.find('.grid-row:last-child').find('.grid-col').css('border-bottom', 'none');
            $this.css('opacity', 1);
        });
        if(jQuery('.process-style1').length > 0) {
            jQuery('.process-style1').each(function () {
                jQuery(this).find('.process-divider:last-child').remove();
            });
        }
    }
    function arrange_animate_icon() {
        jQuery('.animate-icon-module-style1').each(function () {
            var $this = jQuery(this), $width, $gutter = Number($this.closest('.animate-icon-module-style1-wrap').attr('data-gutter-width')), $item_width;
            $width = Number($this.closest('.animate-icon-module-style1-wrap-container').width());
            $this.closest('.animate-icon-module-style1-wrap').width($width);
            $item_width = ($width - (($this.siblings().length) * $gutter));
            $this.width($item_width / ($this.siblings().length + 1));
            if ($this.is(':last-child')) {
                $this.css('margin-right', '0px');
            } else {
                $this.css('margin-right', $gutter + 'px');
            }
            $this.css('opacity', 1);
        });
        jQuery('.animate-icon-module-style2').each(function () {
            var $this = jQuery(this), $normal_content_height = 0, $hover_content_height = 0, $module_height = 0;
            $this.width((100 / $this.siblings().length) + '%');
            $normal_content_height = Number($this.find('.animate-icon-module-style2-normal-content').height());
            $hover_content_height = Number($this.find('.animate-icon-module-style2-hover-content').height());
            $module_height = $normal_content_height + $hover_content_height;
            //$this.height($module_height * 2);
            
            $this.find('.animate-icon-module-style2-normal-content').css('padding-top', ($module_height - ($normal_content_height / 2)));
            $this.css('height', $module_height * 2 + 'px');
            $this.css('opacity', 1);
        });
    }
    function be_lightbox() {
        if (jQuery('.image-popup-vertical-fit').length > 0) {
            jQuery('.image-popup-vertical-fit').magnificPopup({
                mainClass: 'mfp-img-mobile my-mfp-zoom-in',
                closeOnContentClick: true,
                gallery: {
                    enabled: true
                },
                image: {
                    verticalFit: true,
                    titleSrc: 'title'
                },
                zoom: {
                    enabled: true,
                    duration: 300
                },
                preloader: true,
                type: 'inline',
                overflowY: 'auto',
                removalDelay: 300,
                callbacks: {
                    afterClose: function () {
                        jQuery(window).trigger('resize');
                        if (jQuery('body').hasClass('smooth-scroll')) {
                            jQuery('html').css('overflow-y', 'scroll');
                        }
                    },
                    open: function () {
                        jQuery('body').addClass('mfp-active-state');
                        if (jQuery('#main').hasClass('layout-border')) {
                            jQuery('.mfp-content').addClass('layout-border');
                        }
                    },
                    close: function () {
                        jQuery('body').removeClass('mfp-active-state');
                    }
                }
            });
        }
        if (jQuery('.popup-gallery').length > 0) {
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
                        if (jQuery('body').hasClass('smooth-scroll')) {
                            jQuery('html').css('overflow-y', 'scroll');
                        }
                    },
                    open: function () {
                        jQuery('body').addClass('mfp-active-state');
                        if (jQuery('#main').hasClass('layout-border')) {
                            jQuery('.mfp-content').addClass('layout-border');
                        }
                    },
                    close: function () {
                        jQuery('body').removeClass('mfp-active-state');
                    }
                }
            });
        }
        if (jQuery('.popup-with-content').length > 0) {
            jQuery('.popup-with-content').magnificPopup({
                type: 'inline',
                preloader: false
            });
        }
    }
    function be_custom_scroll_animation() {
        if(jQuery('.animate-number.animate').length > 0) {
            jQuery('.animate-number.animate').each(function (i, el) {
                var el = jQuery(el);
                if (el.visible(true)) {
                    el.removeClass('animate');
                    var $endval = Number(el.attr('data-number'));
                    el.countTo({
                        from : 0,
                        to : $endval,
                        speed : 1500,
                        refreshInterval : 30
                    });
                }
            });
        }
        if(jQuery('.chart').length > 0) {
            jQuery('.chart').each(function (i, el) {
                var el = jQuery(el);
                if (el.visible(true)) {
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
                }
            });
        }
        if(jQuery('.be-skill').length > 0) {
            jQuery('.be-skill').each(function (i, el) {
                var el = jQuery(el);
                if (el.visible(true)) {
                    var $this = jQuery(this), $animate_property = 'width';
                    if ($this.closest('.skill_container').hasClass('skill-vertical')) {
                        $animate_property = 'height';
                    }
                    $this.css($animate_property, jQuery(this).attr('data-skill-value'));
                }
            });
        }
        if(jQuery('.be-animate').length > 0) {
            jQuery('.be-animate').each(function (i, el) {
                var el = jQuery(el);
                if (el.visible(true)) {
                    el.addClass("already-visible");
                    el.addClass(el.attr('data-animation'));
                    el.addClass('animated');
                }
            });
        }
        if(jQuery('.be-section.be-bg-parallax').length > 0) {
            jQuery('.be-section.be-bg-parallax').each(function (i, el) {
                var el = jQuery(el);
                if (el.visible(true)) {
                    if(!jQuery(this).hasClass('parallaxed')) {
                        jQuery(this).parallax("50%", 0.4);
                        jQuery(this).addClass('parallaxed');
                    }
                }
            });
        }
        if(jQuery('.portfolio-container.portfolio-item-parallax').length > 0) {
            if(jQuery('html').hasClass('no-touch') && (jQuery(window).width() >= 768)) {
                jQuery('.portfolio-container.portfolio-item-parallax').each(function() {
                    var $window_height = jQuery(window).height(), $window_scroll_top = jQuery(window).scrollTop();
                    jQuery(this).find('.element.parallax-effect').each(function() {
                        var $this = jQuery(this), offset = $this.offset().top, animate_pos = offset-($window_height/2), opacity = ((animate_pos) - $window_scroll_top)/1.5, opacity_2 = opacity*1.7;
                        $this.find('.element-inner').css({
                            '-webkit-transform' : 'translatey('+opacity_2+'px) scale(0.7) translatez(0px)',
                            '-moz-transform' : 'translatey('+opacity_2+'px) scale(0.7) translatez(0px)',
                            '-o-transform' : 'translatey('+opacity_2+'px) scale(0.7) translatez(0px)',
                            '-ms-transform' : 'translatey('+opacity_2+'px) scale(0.7) translatez(0px)',
                            'transform' : 'translatey('+opacity_2+'px) scale(0.7) translatez(0px)'
                        });
                        $this.find('.thumb-title-wrap, .custom-like-button').css({
                            '-webkit-transform' : 'scale(1.4) translatez(0px)',
                            '-moz-transform' : 'scale(1.4) translatez(0px)',
                            '-o-transform' : 'scale(1.4) translatez(0px)',
                            '-ms-transform' : 'scale(1.4) translatez(0px)',
                            'transform' : 'scale(1.4) translatez(0px)'
                        });
                    });
                    jQuery(this).find('.element.no-parallax-effect').each(function() {
                        var $this = jQuery(this), offset = $this.offset().top, animate_pos = offset-($window_height/2), opacity = ((animate_pos) - $window_scroll_top)/2;
                        $this.find('.element-inner').css({
                            '-webkit-transform' : 'translatey('+opacity+'px) translatez(0px)',
                            '-moz-transform' : 'translatey('+opacity+'px) translatez(0px)',
                            '-o-transform' : 'translatey('+opacity+'px) translatez(0px)',
                            '-ms-transform' : 'translatey('+opacity+'px) translatez(0px)',
                            'transform' : 'translatey('+opacity+'px) translatez(0px)',
                        });
                    });
                });
            }
        }
    }
    /************************************
        DOCUMEnT READY EVENT
    ************************************/
    function do_ajax_complete() {
        /********************************
            Accordion
        ********************************/
        if(jQuery('.accordion').length > 0) {
            jQuery('.accordion').each(function () {
                var $accordion = jQuery(this), $collapse = Number($accordion.attr('data-collapsed'));
                if ($collapse === 1) {
                    $accordion.accordion({
                        collapsible: $collapse,
                        heightStyle: "content",
                        active: false
                    }).css('opacity', 1);
                } else {
                    $accordion.accordion({
                        collapsible: $collapse,
                        heightStyle: "content"
                    }).css('opacity', 1);
                }
            });
        }
         

        /********************************
            Tabs
        ********************************/
        if (jQuery('.tabs').length > 0) {
            jQuery('.tabs').tabs({
                fx : {
                    opacity : 'toggle',
                    duration : 200
                }
            }).css('opacity', 1);
        }
        /********************************
            Parallax
        ********************************/
        if ((!jQuery('html').hasClass('touch')) && (jQuery('.be-section.be-bg-parallax').length > 0)) {
            jQuery('.be-section.be-bg-parallax').appear();
            jQuery('.be-section.be-bg-parallax').each(function () {
                if (jQuery(this).is(':appeared')) {
                    if(!jQuery(this).hasClass('parallaxed')) {
                        jQuery(this).parallax("50%", 0.5);
                        jQuery(this).addClass('parallaxed');
                    }
                }
            });
        }
        /********************************
            Portfolio 
        ********************************/
        be_portfolio_layout();
        if(jQuery('.portfolio-container').length > 0) {
            jQuery('.portfolio-container').each(function () {
                var $this = jQuery(this), $i = 0;
                if($this.closest('.portfolio').hasClass('two-col')) {
                    $this.find('.element').each(function() {
                        if($i == 1 || $i == 2) {
                            jQuery(this).addClass('parallax-effect');
                            $i = $i+1;
                        } else if($i == 3) {
                            jQuery(this).addClass('no-parallax-effect');
                            $i = 0;
                        } else {
                            jQuery(this).addClass('no-parallax-effect');
                            $i = $i+1;
                        }
                    });
                } else {
                    $this.find('.element:odd').addClass('parallax-effect');
                    $this.find('.element:even').addClass('no-parallax-effect');
                }
            });
        }
        if(jQuery('.element.style3-hover .element-inner').length > 0) {
            jQuery('.element.style3-hover .element-inner').each(function () {
                jQuery(this).hoverdir();
            });
        }
        if(jQuery('.element.style4-hover .element-inner').length > 0) {
            jQuery('.element.style4-hover .element-inner').each(function () {
                jQuery(this).hoverdir({
                    inverse : true
                });
            });
        }
        if(jQuery(".trigger_infinite_scroll.portfolio_infinite_scroll").length > 0) {
            jQuery(".trigger_infinite_scroll.portfolio_infinite_scroll").each(function () {
                var $this = jQuery(this),
                    $action = $this.closest('.portfolio').attr("data-action"),
                    $col = $this.closest('.portfolio').attr("data-col"),
                    $data_gutter_width = Number($this.closest('.portfolio').attr("data-gutter-width")),
                    $category = $this.closest('.portfolio').attr("data-category"),
                    $masonry = $this.closest('.portfolio').attr("data-masonry"),
                    $showposts = $this.closest('.portfolio').attr("data-showposts"),
                    $paged = Number($this.closest('.portfolio').attr("data-paged")),
                    $gallery = $this.closest('.portfolio').attr("data-gallery"),
                    $filter = $this.closest('.portfolio').attr("data-filter"),
                    $show_filters = $this.closest('.portfolio').attr("data-show_filters"),
                    $data_thumbnail_bg_color = $this.closest('.portfolio').attr("data-thumbnail-bg-color"),
                    $data_title_style = $this.closest('.portfolio').attr("data-title-style"),
                    $data_title_color = $this.closest('.portfolio').attr("data-title-color"),
                    $data_cat_color = $this.closest('.portfolio').attr("data-cat-color"),
                    $title_animation_type = $this.closest('.portfolio').attr("data-title-animation-type"),
                    $cat_animation_type = $this.closest('.portfolio').attr("data-cat-animation-type"),
                    $img_grayscale = $this.closest('.portfolio').attr("data-img-grayscale"),
                    $image_effect = $this.closest('.portfolio').attr("data-image-effect"),
                    $gradient_style_color = $this.closest('.portfolio').attr("data-gradient-style-color"),
                    $data_hover_style = $this.closest('.portfolio').attr("data-hover-style"),
                    $dat_cat_hide = $this.closest('.portfolio').attr("data-cat-hide"),
                    opts = {
                        offset: '100%'
                    };
                $this.waypoint(function (direction) {
                    if (direction === 'down') {
                        $this.waypoint('disable');
                        jQuery('.page-loader').fadeIn();
                        jQuery.ajax({
                            type: "POST",
                            url: ajax_url,
                            data: "action=" + $action + "&category=" + $category + "&masonry=" + $masonry + "&showposts=" + $showposts + "&paged=" + $paged + "&col=" + $col + "&gallery=" + $gallery + "&filter=" + $filter + "&show_filters=" + $show_filters + "&thumb_overlay_color=" + $data_thumbnail_bg_color + "&title_style=" + $data_title_style + "&title_color=" + $data_title_color + "&cat_color=" + $data_cat_color + "&title_animation_type=" + $title_animation_type + "&cat_animation_type=" + $cat_animation_type + "&gutter_width=" + $data_gutter_width + "&hover_style=" + $data_hover_style + "&img_grayscale=" + $img_grayscale + "&image_effect=" + $image_effect + "&gradient_style_color=" + $gradient_style_color + "&cat_hide=" + $dat_cat_hide
                        }).done(function (data) {
                            if (data !== 0 && data !== '0' && data) {
                                var $newItems = jQuery(data);
                                $newItems.imagesLoaded(function () {
                                    $this.closest('.portfolio').find('.portfolio-container').append($newItems).isotope('appended', $newItems);
                                    jQuery(window).trigger('resize');
                                    $paged = $paged + 1;
                                    $this.waypoint(opts);
                                    jQuery('.page-loader').fadeOut();
                                    be_lightbox();
                                    jQuery('.element.style3-hover .element-inner').each(function () {
                                        jQuery(this).hoverdir();
                                    });
                                    jQuery('.element.style4-hover .element-inner').each(function () {
                                        jQuery(this).hoverdir({
                                            inverse : true
                                        });
                                    });
                                });
                            } else {
                                $this.waypoint('disable');
                                jQuery('.page-loader').fadeOut();
                            }
                        });
                    }
                }, opts);
            });
        }
        if(jQuery(".trigger_infinite_scroll.blog_infinite_scroll").length > 0) {
            jQuery(".trigger_infinite_scroll.blog_infinite_scroll").each(function () {
                var $this = jQuery(this),
                    $action = $this.closest('.portfolio').attr("data-action"),
                    $showposts = $this.closest('.portfolio').attr("data-showposts"),
                    $data_gutter_width = Number($this.closest('.portfolio').attr("data-gutter-width")),
                    $paged = Number($this.closest('.portfolio').attr("data-paged")),
                    opts = {
                        offset: '100%'
                    };
                $this.waypoint(function (direction) {
                    if (direction === 'down') {
                        $this.waypoint('disable');
                        jQuery('.page-loader').fadeIn();
                        jQuery.ajax({
                            type: "POST",
                            url: ajax_url,
                            data: "action=" + $action + "&showposts=" + $showposts + "&paged=" + $paged + "&gutter_width=" + $data_gutter_width
                        }).done(function (data) {
                            if (data !== 0 && data !== '0' && data) {
                                var $newItems = jQuery(data);
                                $newItems.imagesLoaded(function () {
                                    $this.closest('.portfolio').find('.portfolio-container').append($newItems).isotope('appended', $newItems);
                                    $newItems.find('.be-flex-slider').each(function () {
                                        var $animation_type = jQuery(this).attr('data-animation'), $slideshow = false, $slide_interval = Number(jQuery(this).attr('data-slide-interval'));
                                        if (jQuery(this).attr('data-auto-slide') === 'yes') {
                                            $slideshow = true;
                                        }
                                        jQuery(this).flexslider({
                                            start : function (slider) {
                                                slider.closest(".be-flex-slider").removeClass('flex-loading');
                                                slider.closest(".be-flex-slider").find('.loader-icon').remove();
                                                if (slider.find('ul.slides li').length < 2) {
                                                    slider.closest(".be-flex-slider").find('.flex-control-nav,.flex-direction-nav').remove();
                                                }
                                                if (slider.closest('.portfolio-container').length > 0) {
                                                    jQuery(window).trigger('resize');
                                                }
                                            },
                                            after: function (slider) {
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
                                    $newItems.fitVids();
                                    jQuery(window).trigger('resize');
                                    $paged = $paged + 1;
                                    $this.waypoint(opts);
                                    jQuery('.page-loader').fadeOut();
                                    be_lightbox();
                                });
                            } else {
                                $this.waypoint('disable');
                                jQuery('.page-loader').fadeOut();
                            }
                        });
                    }
                }, opts);
            });
        }
        /********************************
            Text Rotate
        ********************************/
        if(jQuery(".rotates").length > 0) {
            jQuery(".rotates").each(function () {
                var $animation = jQuery(this).attr('data-animation'), $speed = Number(jQuery(this).attr('data-speed'));
                jQuery(this).textrotator({
                    animation : $animation,
                    separator : "||",
                    speed : $speed
                }).css('opacity', 1);
            });
        }
        /********************************
            Text Typed
        ********************************/
        if(jQuery(".typed").length > 0) {
            jQuery(".typed").each(function () {
                var $this = jQuery(this), $typed_text = $this.text(), $typed_text_arr = $typed_text.split('||');
                $this.empty().typed({
                    strings: $typed_text_arr,
                    typeSpeed: 30,
                    backDelay: 500,
                    loop: true,
                    loopCount: false
                }).css('opacity', 1);
            });
        }
        /********************************
            Services
        ********************************/
        if(jQuery(".services").length > 0) {
            jQuery('.services').each(function () {
                var $this = jQuery(this);
                $this.find('li:even').addClass('even');
                $this.find('li:odd').addClass('odd');
                $this.find('li:last-child').addClass('last');
                $this.animate({opacity: 1});
            });
        }
        /********************************
            Sliders
        ********************************/
        jQuery('body').imagesLoaded(function () {
            /********************************
                Carousel 
            ********************************/
            if (jQuery(".be-carousel").length > 0) {
                jQuery(".be-carousel:not(.portfolios-carousel)").each(function () {
                    var $this = jQuery(this), col = $this.parent().width() / 5, $max, $slideshow = Number($this.attr('data-slide-show'), 10), $slideshowspeed = Number($this.attr('data-slide-show-speed'));
                    if (jQuery(window).width() < 767) {
                        $max = 2;
                    } else {
                        $max = 5;
                    }
                    if ($slideshow) {
                        $slideshow = true;
                    } else {
                        $slideshow = false;
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
                            play: $slideshow,
                            timeoutDuration: $slideshowspeed
                        }
                    }).css('opacity',  1);
                    $this.closest('.carousel-wrap').find('a.prev, a.next').css('opacity',  1);
                });
                jQuery(".be-carousel.portfolios-carousel").each(function () {
                    var $this = jQuery(this), col = $this.parent().width() / 4, $max;
                    if (jQuery(window).width() < 767) {
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
                Testimonial Slider 
            ********************************/
            if (jQuery('.flexslider.testimonial-flex-slider').length > 0) {
                jQuery('.flexslider.testimonial-flex-slider').each(function () {
                    var $this = jQuery(this), $slideshow = Number($this.attr('data-slide-show')), $slideshowspeed = $this.attr('data-slide-show-speed'), $animation_type = $this.attr('data-slide-animation-type');
                    $this.flexslider({
                        animation : $animation_type,
                        slideshow : $slideshow,
                        slideshowSpeed : $slideshowspeed,
                        controlNav : false,
                        smoothHeight : true,
                        directionNav: false,
                        useCSS: false
                    });
                });
            }
            /********************************
                Tweets Slider 
            ********************************/
            if (jQuery('.flexslider.tweet-flex-slider').length > 0) {
                jQuery('.flexslider.tweet-flex-slider').each(function () {
                    var $this = jQuery(this);
                    $this.flexslider({
                        animation : 'slide',
                        slideshow : true,
                        slideshowSpeed : 4000,
                        controlNav : false,
                        smoothHeight : true,
                        directionNav: false,
                        useCSS: false
                    });
                });
            }
            /********************************
                Testimonial Slider 
            ********************************/
            if (jQuery('.flexslider.content-flex-slider').length > 0) {
                jQuery('.flexslider.content-flex-slider').each(function () {
                    var $this = jQuery(this), $slideshow = Number($this.attr('data-slide-show')), $slideshowspeed = $this.attr('data-slide-show-speed'), $animation_type = $this.attr('data-slide-animation-type'), $i=0, $control_nav_length = $this.find('.slides').find('.testimonial_slide').length, $controls, $append = '';
                    if($control_nav_length !== 0) {
                        for($i=0; $i<$control_nav_length; $i++) {
                            $append += '<li><a href="#"></a></li>';
                        }
                        $this.siblings('.flexslider-controls').find('.flex-control-nav').append($append);   
                    }
                    $controls = $this.siblings('.flexslider-controls').find('.flex-control-nav li');
                    $this.flexslider({
                        animation : $animation_type,
                        slideshow : $slideshow,
                        slideshowSpeed : $slideshowspeed,
                        controlNav : true,
                        manualControls: $controls,
                        smoothHeight : true,
                        directionNav: false,
                        useCSS: false
                    });
                });
            }
        });
        /********************************
            Skill bar
        ********************************/
        if(jQuery('.skill_container.skill-vertical').length > 0) {
            jQuery('.skill_container.skill-vertical').each(function () {
                var $this = jQuery(this), $width = (100 / $this.find('.skill-wrap').length) + '%';
                $this.find('.skill-wrap').css('width', $width).css('display', 'block');
            });
        }
        arrange_team();
        arrange_animate_icon();
        be_google_maps();
        be_custom_scroll_animation();
        be_countdown();
    }
    /*******************************************************
    Ajax Load Pages with HTML Pushstate and page transitions
    ********************************************************/
    jQuery(document).on('update_content', function(){
        do_ajax_complete();
    });
    /************************************
        DOCUMET READY EVENT
    ************************************/
    jQuery(document).ready(function () {
        do_ajax_complete();
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
        });
        jQuery(document).on('mouseenter', '.style1-hover .element-inner', function () {
            jQuery(this).find('.thumb-overlay').stop(true, true).fadeIn(400);
        });
        jQuery(document).on('mouseleave', '.style1-hover .element-inner', function () {
            jQuery(this).find('.thumb-overlay').stop(true, true).fadeOut(400);
        });
        jQuery(document).on('click', '.trigger_load_more.portfolio_load_more:not(.disabled)', function () {
            var $this = jQuery(this),
                $action = $this.closest('.portfolio').attr("data-action"),
                $col = $this.closest('.portfolio').attr("data-col"),
                $data_gutter_width = Number($this.closest('.portfolio').attr("data-gutter-width")),
                $category = $this.closest('.portfolio').attr("data-category"),
                $masonry = $this.closest('.portfolio').attr("data-masonry"),
                $showposts = $this.closest('.portfolio').attr("data-showposts"),
                $paged = Number($this.closest('.portfolio').attr("data-paged")),
                $gallery = $this.closest('.portfolio').attr("data-gallery"),
                $filter = $this.closest('.portfolio').attr("data-filter"),
                $show_filters = $this.closest('.portfolio').attr("data-show_filters"),
                $data_thumbnail_bg_color = $this.closest('.portfolio').attr("data-thumbnail-bg-color"),
                $data_title_style = $this.closest('.portfolio').attr("data-title-style"),
                $data_title_color = $this.closest('.portfolio').attr("data-title-color"),
                $data_cat_color = $this.closest('.portfolio').attr("data-cat-color"),
                $title_animation_type = $this.closest('.portfolio').attr("data-title-animation-type"),
                $cat_animation_type = $this.closest('.portfolio').attr("data-cat-animation-type"),
                $img_grayscale = $this.closest('.portfolio').attr("data-img-grayscale"),
                $image_effect = $this.closest('.portfolio').attr("data-image-effect"),
                $gradient_style_color = $this.closest('.portfolio').attr("data-gradient-style-color"),
                $data_hover_style = $this.closest('.portfolio').attr("data-hover-style"),
                $dat_cat_hide = $this.closest('.portfolio').attr("data-cat-hide");
            jQuery('.page-loader').fadeIn();
            $this.addClass('disabled');
            jQuery.ajax({
                type: "POST",
                url: ajax_url,
                data: "action=" + $action + "&category=" + $category + "&masonry=" + $masonry + "&showposts=" + $showposts + "&paged=" + $paged + "&col=" + $col + "&gallery=" + $gallery + "&filter=" + $filter + "&show_filters=" + $show_filters + "&thumb_overlay_color=" + $data_thumbnail_bg_color + "&title_style=" + $data_title_style + "&title_color=" + $data_title_color + "&cat_color=" + $data_cat_color + "&title_animation_type=" + $title_animation_type + "&cat_animation_type=" + $cat_animation_type + "&gutter_width=" + $data_gutter_width + "&hover_style=" + $data_hover_style + "&img_grayscale=" + $img_grayscale + "&image_effect=" + $image_effect + "&gradient_style_color=" + $gradient_style_color + "&cat_hide=" + $dat_cat_hide,
                success: function (data) {
                    if (data !== 0 && data !== '0' && data) {
                        var $newItems = jQuery(data);
                        $newItems.imagesLoaded(function () {
                            $this.closest('.portfolio').find('.portfolio-container').append($newItems).isotope('appended', $newItems);
                            jQuery(window).trigger('resize');
                            $this.closest('.portfolio').attr("data-paged", $paged + 1);
                            $this.attr("data-total-items", function () {
                                return (Number(jQuery(this).attr('data-total-items')) - $newItems.length);
                            });
                            if ($this.attr("data-total-items") < 1) {
                                $this.fadeOut(500, function () {
                                    $this.remove();
                                });
                            }
                            $this.removeClass('disabled');
                            jQuery('.page-loader').fadeOut();
                            be_lightbox();
                            jQuery('.element.style3-hover .element-inner').each(function () {
                                jQuery(this).hoverdir();
                            });
                            jQuery('.element.style4-hover .element-inner').each(function () {
                                jQuery(this).hoverdir({
                                    inverse : true
                                });
                            });
                        });
                    } else {
                        $this.addClass('disabled');
                        jQuery('.page-loader').fadeOut();
                    }
                }
            });
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
            Contact Form
        ********************************/
        jQuery(document).on('click', '.mail-chimp-submit', function () {
            var $this = jQuery(this), $subscribe_status = $this.closest('.mail-chimp-wrap').find(".subscribe_status"), $subscribe_loader = $this.closest('.mail-chimp-wrap').find(".subscribe_loader");
            $subscribe_loader.fadeIn();
            jQuery.ajax({
                type: "POST",
                url: ajax_url,
                dataType: 'json',
                data: "action=mailchimp_subscription&" + jQuery(this).closest(".mail-chimp-form").serialize(),
                success : function (msg) {
                    $subscribe_loader.fadeOut();
                    if (msg.status === "error") {
                        $subscribe_status.removeClass("success").addClass("error");
                    } else {
                        $subscribe_status.addClass("success").removeClass("error");
                    }
                    $subscribe_status.html(msg.data).slideDown();
                },
                error: function () {
                    $subscribe_status.html("Please Try Again Later").slideDown();
                    $subscribe_loader.fadeOut();
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
            jQuery(this).css('color', $color);
            jQuery(this).find('i').css('color', $icon_color);
            if(!((jQuery('html').hasClass('cssgradients')) && (jQuery(this).hasClass('bg-animation-slide-top') || jQuery(this).hasClass('bg-animation-slide-left') || jQuery(this).hasClass('bg-animation-slide-bottom') || jQuery(this).hasClass('bg-animation-slide-right')))) {
                jQuery(this).css('background-color', $bg_color);
            }
        });
        jQuery(document).on('mouseleave', '.be-button', function () {
            var $border_color = jQuery(this).attr("data-border-color"), $bg_color = jQuery(this).attr("data-bg-color"), $color = jQuery(this).attr("data-color"), $icon_color = jQuery(this).attr("data-icon-color");
            jQuery(this).css('border-color', $border_color);
            jQuery(this).css('color', $color);
            jQuery(this).find('i').css('color', $icon_color);
            if(!((jQuery('html').hasClass('cssgradients')) && (jQuery(this).hasClass('bg-animation-slide-top') || jQuery(this).hasClass('bg-animation-slide-left') || jQuery(this).hasClass('bg-animation-slide-bottom') || jQuery(this).hasClass('bg-animation-slide-right')))) {
                jQuery(this).css('background-color', $bg_color);
            }
        });
        /********************************
            ANIMATED ICONS 
        ********************************/
        jQuery(document).on('mouseenter', '.animate-icon-module', function () {
            var $bg_color = jQuery(this).attr("data-hover-bg-color");
            jQuery(this).css('background-color', $bg_color);
        });
        jQuery(document).on('mouseleave', '.animate-icon-module', function () {
            var $bg_color = jQuery(this).attr("data-bg-color");
            jQuery(this).css('background-color', $bg_color);
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
            Custom Like Button
        ********************************/
        jQuery(document).on('click', '.custom-like-button', function (e) {
            var $this = jQuery(this), $post_id = $this.attr('data-post-id');
            $this.addClass('disable');
            jQuery.ajax({
                type: "POST",
                url: ajax_url,
                dataType: 'json',
                data: "action=post_like&post_id=" + $post_id,
                success : function (msg) {
                    if (msg.status === "success") {
                        $this.addClass('liked');
                        $this.removeClass('no-liked');
                        $this.find('span').text(msg.count);
                    }
                },
                error: function (msg) {
                    alert(msg);
                }
            });
            return false;
        });
        jQuery(document).on('mouseenter', '.element-inner', function (e) {
            jQuery(this).find('.animation-trigger').addClass(function () {
                return jQuery(this).attr('data-animation-type');
            });
        });
        jQuery(document).on('mouseleave', '.element-inner', function (e) {
            jQuery(this).find('.animation-trigger').removeClass(function () {
                return jQuery(this).attr('data-animation-type');
            });
        });
        /********************************
            Animate Icon Module
        ********************************/
        jQuery(document).on('mouseenter', '.animate-icon-module-style2', function () {
            var $this = jQuery(this), $normal_content_height = Number($this.find('.animate-icon-module-style2-normal-content').height()), $distence = 2;
            $this.css('background-color', $this.attr('data-hover-bg-color'));
            $this.find('.animate-icon-title').css('color', $this.attr('data-hover-title-color'));
            $this.find('.animate-icon-icon').css('color', $this.attr('data-hover-icon-color'));
            if ($this.find('.animate-icon-module-style2-hover-content').height() < 1) {
                $distence = 4;
            }
            jQuery(this).find('.animate-icon-module-style2-normal-content').stop().animate({
                top: '-' + ($normal_content_height / $distence)
            }, {
                duration: 400,
                easing: 'easeOutBack'
            });
            jQuery(this).find('.animate-icon-module-style2-hover-content').stop().animate({
                top: '50%'
            }, {
                duration: 400,
                easing: 'easeOutExpo'
            });
        });
        jQuery(document).on('mouseleave', '.animate-icon-module-style2', function () {
            var $this = jQuery(this);
            $this.css('background-color', $this.attr('data-bg-color'));
            $this.find('.animate-icon-title').css('color', $this.attr('data-title-color'));
            $this.find('.animate-icon-icon').css('color', $this.attr('data-icon-color'));
            $this.find('.animate-icon-module-style2-normal-content').stop().animate({
                top: '0%'
            }, {
                duration: 400,
                easing: 'easeOutBack'
            });
            $this.find('.animate-icon-module-style2-hover-content').stop().animate({
                top: '100%'
            }, {
                duration: 400,
                easing: 'easeOutExpo'
            });
        });
        jQuery(document).on('mouseenter', '.animate-icon-module-style1.be-bg-overlay', function (e) {
            var $this = jQuery(this);
            $this.find('.section-overlay').css('background-color', $this.find('.section-overlay').attr('data-hover-bg-color'));
        });
        jQuery(document).on('mouseleave', '.animate-icon-module-style1.be-bg-overlay', function (e) {
            var $this = jQuery(this);
            $this.find('.section-overlay').css('background-color', $this.find('.section-overlay').attr('data-default-bg-color'));
        });
    });// END DOCUMENT READY EVENT
    jQuery(window).smartresize(function() {
        be_portfolio_layout();
        arrange_animate_icon();
        be_custom_scroll_animation();
    });// END WINDOW RESIZE EVENT
    jQuery(window).on('scroll', function() {
        be_custom_scroll_animation();
    });// END WINDOW SCROLL EVENT
}(jQuery));