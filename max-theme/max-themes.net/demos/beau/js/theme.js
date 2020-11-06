'use strict'
;
(function($) {
    $.fn.fadeUp = function(duration) {
        $(this)
            .slideUp(duration)
            .animate({
                opacity: 0
            }, {
                queue: false,
                duration: duration
            });
    }

    $(function() {
        new WOW().init();

        /* Visual Composer waypoint 3 override */
		setTimeout( function () {
			if ( typeof $.fn.waypoint !== 'undefined' ) {
				$( '.wpb_animate_when_almost_visible:not(.wpb_start_animation)' ).waypoint( function () {
					$( this.element ).addClass( 'wpb_start_animation' );
				}, { offset: '85%' } );
			}
		}, 1600 );
		setTimeout( function () {
			if ( typeof $.fn.waypoint !== 'undefined' ) {
				$( '.vc_progress_bar' ).waypoint( function () {
					$( this.element ).find( '.vc_single_bar' ).each( function ( index ) {
						var $this = $( this ),
							bar = $this.find( '.vc_bar' ),
							val = bar.data( 'percentage-value' );

						setTimeout( function () {
							bar.css( { "width": val + '%' } );
						}, index * 200 );
					} );
				}, { offset: '85%' } );
			}
		}, 100 );

        /* Event Handler for Header Search Icon */
        $("#nav-link-search").on('click', function() {
            if ($(this).hasClass("visible-search"))
                $(this).removeClass("visible-search");
            else
                $(this).addClass("visible-search");

            return false;
        });

        $("#nav-search-container").on('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        });

        $("input[name=s]", "#nav-search-container").on('keypress', function(e) {
                if (e.keyCode == 13)
                    $(this).closest("form").submit();
            })
            /* end of header search */

        /* responsive menu toggle */
        $("#navbar-toggle.toggle-button").on('click', toggle_mobile_menu);
        $("#mobile-menu-container").on('click', toggle_mobile_menu);
        $("#mobile-menu-container ul.menu").on('click', function(e) {
            e.stopPropagation();
        });

        //$("mobile-menu-container").on('click', function(e) {
        //    if ($("#mobile-menu-container").hasClass("ani-appear-mobile-nav")) {
        //        //$(this).closest(".ani-appear-mobile-nav").removeClass("ani-appear-mobile-nav");
        //        $("#mobile-menu-container").removeClass("ani-appear-mobile-nav");
        //        $("body").removeClass("mobilemenu-open");
        //    } else {
        //        $("#mobile-menu-container").addClass("ani-appear-mobile-nav");
        //        $("body").addClass("mobilemenu-open");
        //    }
        //});

        $(">span.caret", "li.menu-item-has-children > a").on('click', function(e) {
            // if ($(document).width() >= 992) return true;

            var link = $(this).parent();
            var submenu = link.next();

            if (link.hasClass("menu-collapsed")) {
                submenu.slideUp(400, function(e) {
                    link.removeClass("menu-collapsed");
                    submenu.css('display', '');
                });
            } else {
                submenu.slideDown(400, function(e) {
                    submenu.css('display', '');
                    link.addClass("menu-collapsed");
                });
            }
            e.preventDefault();
            e.stopPropagation();

            return false;
        });

        /* MailPoet Subscription : input.submit into button.submit for fontawesome icon */
        $("<button class=\"wysija-submit wysija-submit-field\" type=\"submit\"><i class=\"fa fa-check\"></i></button>").insertAfter(
            $("input.wysija-submit.wysija-submit-field")
        );
        $("input.wysija-submit.wysija-submit-field").remove();
        /* End of Mailpoet customization */

        /* FancyBox Initialization */
        $('.fancybox-link').fancybox();
        $('.fancybox-image').fancybox(
        		{
        			padding: 0
        		}
        );
        
        $('figure.gallery-item > .gallery-icon > a').fancybox(
        		{
        			padding: 0
        		}
        );
        
        $('.fancybox-media')
            .attr('rel', 'media-gallery')
            .fancybox({
                openEffect: 'none',
                closeEffect: 'none',
                prevEffect: 'none',
                nextEffect: 'none',
                padding : 0,
                arrows: false,
                width: 1000,
                height: 800,
                helpers: {
                    media: {},
                    buttons: {}
                }
            });

        /* Progress Bar */
        $('.beau-progress-bar').each(function() {
            var progressbar = $(this);
            progressbar.waypoint(function() {
                var value = progressbar.data('value');
                progressbar.find('.gauge').css('width', value + '%');
                progressbar.find('.value span').countTo({
                    from: 0,
                    to: value,
                    speed: 1500,
                    refreshInterval: 1500 / value
                });

                this.destroy();
            }, {
                offset: 'bottom-in-view'
            });
        });

        function getBaseLog(x, y) {
            return Math.log(y) / Math.log(x);
        }

        /* Data Counter */
        $('.beau-data-counter').each(function() {
            var data_counter = $(this);
            data_counter.waypoint(function() {
                var value = data_counter.data('value');
                data_counter.find('.count').countTo({
                    from: 0,
                    to: value,
                    speed: 1500 +  getBaseLog(10, value) * 300,
                    refreshInterval: 10
                });

                this.destroy();
            }, {
                offset: 'bottom-in-view'
            });
        });

        /* Messagebox Close */
        $('.vc_message_box .beau_message_box-close').on('click', function() {
            var message_box = $(this).closest('.vc_message_box');
            message_box.fadeTo(400, 0.2, function() {
                message_box.fadeUp(200);
            });
            return false;
        });

        /* Tabs */
        if ($('.beau_tabs, .beau_vtabs').length > 0) {
            $('.beau_tabs, .beau_vtabs').each(function(index) {
                var ver = jQuery.ui && jQuery.ui.version ? jQuery.ui.version.split('.') : '1.10',
                    old_version = parseInt(ver[0]) == 1 && parseInt(ver[1]) < 9;

                var $tabs,
                    interval = jQuery(this).attr("data-interval"),
                    tabs_array = [];
                //
                $tabs = jQuery(this).find('.beau_tabs_wrapper').tabs({
                    show: function(event, ui) {
                        wpb_prepare_tab_content(event, ui);
                    },
                    beforeActivate: function(event, ui) {
                        ui.newPanel.index() !== 1 && ui.newPanel.find('.vc_pie_chart:not(.vc_ready)');
                    },
                    activate: function(event, ui) {

                        if ($(ui.newPanel).find('.beau-progress-bar').length) {
                            $(ui.newPanel).find('.beau-progress-bar').each(function() {
                                var progressbar = $(this);
                                var gauge = $(progressbar.find('.gauge'));
                                var value = progressbar.data('value');

                                gauge.addClass('notransition'); // Disable transitions
                                gauge.css('width', '10%');
                                gauge[0].offsetHeight; // Trigger a reflow, flushing the CSS changes
                                gauge.removeClass('notransition'); // Re-enable transitions

                                gauge.css('width', value + '%');
                                progressbar.find('.value span').countTo({
                                    from: 0,
                                    to: value,
                                    speed: 1500,
                                    refreshInterval: 1500 / value
                                });
                            });
                        }

                        wpb_prepare_tab_content(event, ui);

                    }
                });
                if (interval && interval > 0) {
                    try {
                        $tabs.tabs('rotate', interval * 1000);
                    } catch (e) {
                        // nothing.
                        window.console && window.console.log && console.log(e);
                    }
                }

                jQuery(this).find('.beau_tab').each(function() {
                    tabs_array.push(this.id);
                });

                jQuery(this).find('.beau_tabs_nav li').on('click',function(e) {
                    e.preventDefault();
                    if (old_version) {
                        $tabs.tabs("select", jQuery('a', this).attr('href'));
                    } else {
                        $tabs.tabs("option", "active", jQuery(this).index());
                    }
                    return false;
                });

                jQuery(this).find('.beau_prev_slide a, .beau_next_slide a').on('click',function(e) {
                    e.preventDefault();
                    if (old_version) {
                        var index = $tabs.tabs('option', 'selected');
                        if (jQuery(this).parent().hasClass('beau_next_slide')) {
                            index++;
                        } else {
                            index--;
                        }
                        if (index < 0) {
                            index = $tabs.tabs("length") - 1;
                        } else if (index >= $tabs.tabs("length")) {
                            index = 0;
                        }
                        $tabs.tabs("select", index);
                    } else {
                        var index = $tabs.tabs("option", "active"),
                            length = $tabs.find('.beau_tab').length;

                        if (jQuery(this).parent().hasClass('beau_next_slide')) {
                            index = (index + 1) >= length ? 0 : index + 1;
                        } else {
                            index = index - 1 < 0 ? length - 1 : index - 1;
                        }
                        $tabs.tabs("option", "active", index);
                    }
                });
            });
        }

        imagesLoaded($('body'), function() {

            ///* Testimonial sliders */
            //$('.beau-testimonial-slider').each(function() {
            //
            //    var testimonial_slider = $( $(this).find('.beau-testimonial-items') );
            //    testimonial_slider.owlCarousel({
            //        autoPlay: 3000,
            //        slideSpeed: 300,
            //        paginationSpeed: 400,
            //        singleItem: true,
            //        navigation: true,
            //        navigationText: ["<i class='fa fa-angle-left fa-fw'></i>", "<i class='fa fa-angle-right fa-fw'></i>"]
            //    });
            //});

            /* Image Carousels */
            $('.beau-image-carousel').each(function() {
                var carousel = $(this).find('.owl-carousel');
                var items = $(this).data('items');
                var mid_items = 3;
                if (!items || items < 0) {
                    items = 5;
                }
                if (items <= 4 && items > 1) {
                    mid_items = 2;
                } else if (items == 1) {
                    mid_items = 1;
                }
                carousel.owlCarousel({
                    autoPlay: 3000,
                    items: items,
                    itemsDesktop: [1199, items],
                    itemsDesktopSmall: [991, mid_items],
                    itemsDesktopTablet: [767, mid_items],
                    itemsMobile: [479, 1],
                    pagination: false
                });
                $(this).find('.carousel-control.prev').on('click', function() {
                    carousel.trigger('owl.prev');
                    return false;
                });
                $(this).find('.carousel-control.next').on('click', function() {
                    carousel.trigger('owl.next');
                    return false;
                });
            });

            $(".beau-post-carousel-container").each(function() {
                $(this).owlCarousel({
                    items: Math.min( 5, $(this).data('view-count') ),
                    itemsDesktop: [ 1199, Math.min( 4, $(this).data('view-count') ) ],
                    itemsDesktopSmall: [ 991, Math.min( 3, $(this).data('view-count') ) ],
                    itemsTablet: [ 767, Math.min( $(this).data('view-count'), 2 ) ],
                    itemsMobile: [479, 1],
                    
                    navigation: false,
                    pagination: false,
                    autoHeight: false,
                    navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
                });
            });

            /* post featured gallery owl carousel */
            $(".owl-gallery-carousel", ".beau-article-featured-wrapper").owlCarousel({
                singleItem: true,
                navigation: true,
                pagination: false,
                autoHeight: true,
                navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
            });

            /* portfolio featured gallery owl carousel */
            $(".owl-gallery-carousel", ".beau-portfolio-image-wrapper").owlCarousel({
                singleItem: true,
                navigation: true,
                pagination: false,
                autoHeight: true,
                navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
            });

            /* blog list isotope - masonry layout */
            $(".blog-list-isotope-container", ".blog-list-style-masonry .beau-blogs-list-container").isotope({
                itemSelector: 'article',
                animationEngine: 'best-available',
                masonry: {
                    gutter: 20
                }
            });

            /* blog list isotope fitrows layout */
            $(".blog-list-isotope-container", ".blog-list-style-fitrows .beau-blogs-list-container").isotope({
                layoutMode: 'fitRows',
                fitRows: {
                    gutter: 20
                },
                itemSelector: 'article',
                animationEngine: 'best-available'
            });

            /* load more for blog post */
            $(".beau-btn-load-more", ".beau-blogs-list-container").on('click', function() {
                var thisObj = $(this);

                var listContainer = thisObj.closest('.beau-blogs-list-container');
                var isotopeContainer = listContainer.find(".blog-list-isotope-container");

                thisObj.hide();
                thisObj.parent().find('.ajax-loader').show();

                var count = listContainer.find('article.type-post:not(.sticky)').length;

                $.ajax({
                    url: ajaxpagination.ajaxurl,
                    type: 'post',
                    data: {
                        action: 'beau_load_posts',
                        params: {
                            "count": count,
                            'style': listContainer.data('style'),
                            'query_vars': thisObj.data('query_vars')
                        }
                    },
                    success: function(html) {
                        if (html != "") {
                            html = html.replace(/>\s+<article/ig, '><article');
                            html = html.trim();
                            var newItems = $(html);

                            /* gallery post carousel */
                            if (isotopeContainer.length > 0) {
                                isotopeContainer.append(newItems).isotope("appended", newItems);

                                imagesLoaded(isotopeContainer, function() {
                                    newItems.find(".owl-gallery-carousel").owlCarousel({
                                        singleItem: true,
                                        navigation: true,
                                        pagination: false,
                                        autoHeight: true,
                                        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
                                    });

                                    setTimeout(function() {
                                        isotopeContainer.isotope('layout');
                                    }, 500);
                                });
                            } else {
                                if (thisObj.parent().prev().is(".beau-article-end-border")) {
                                    newItems.insertBefore(thisObj.parent().prev());
                                } else {
                                    newItems.insertBefore(thisObj.parent());
                                }
                                imagesLoaded(thisObj.parent().parent(), function() {
                                    $(".owl-gallery-carousel").owlCarousel({
                                        singleItem: true,
                                        navigation: true,
                                        pagination: false,
                                        autoHeight: true,
                                        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
                                    });
                                });
                            }

                            if (newItems.length == thisObj.data('posts-per-page'))
                                thisObj.show();
                            
                            Waypoint.refreshAll();
                        }

                        thisObj.parent().find('.ajax-loader').hide();
                    },
                    error: function(html) {
                        console.log(html);
                        thisObj.show();
                        thisObj.parent().find('.ajax-loader').hide();
                    }
                });

                return false;
            }); /* end of load-more event handler */

            $(".infinite-scroll-placeholder", ".beau-blogs-list-container").waypoint({
                handler: function(direction) {
                    var waypoint = this;
                    waypoint.disable();
                    var thisObj = $(this.element);

                    var listContainer = thisObj.closest('.beau-blogs-list-container');
                    var isotopeContainer = listContainer.find(".blog-list-isotope-container");
                    var count = listContainer.find('article.type-post:not(.sticky)').length;

                    $.ajax({
                        url: ajaxpagination.ajaxurl,
                        type: 'post',
                        data: {
                            action: 'beau_load_posts',
                            params: {
                                "count": count,
                                'style': listContainer.data('style'),
                                'query_vars': thisObj.data('query_vars')
                            }
                        },
                        success: function(html) {
                            if (html != "") {
                                html = html.replace(/>\s+<article/ig, '><article');
                                html = html.trim();
                                var newItems = $(html);

                                if (isotopeContainer.length > 0) {
                                    isotopeContainer.append(newItems).isotope("appended", newItems);
                                    imagesLoaded(isotopeContainer, function() {
                                        newItems.find(".owl-gallery-carousel").owlCarousel({
                                            singleItem: true,
                                            navigation: true,
                                            pagination: false,
                                            autoHeight: true,
                                            navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
                                        });

                                        setTimeout(function() {
                                            isotopeContainer.isotope('layout');
                                        }, 500);
                                    });
                                } else {
                                    if (thisObj.prev().is(".beau-article-end-border")) {
                                        newItems.insertBefore(thisObj.prev());
                                    } else {
                                        newItems.insertBefore(thisObj);
                                    }

                                    imagesLoaded(thisObj.parent(), function() {
                                        $(".owl-gallery-carousel").owlCarousel({
                                            singleItem: true,
                                            navigation: true,
                                            pagination: false,
                                            autoHeight: true,
                                            navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
                                        });
                                    });
                                }

                                Waypoint.refreshAll();
                                waypoint.enable();

                                if (newItems.length < listContainer.data('posts-per-page')) {
                                    thisObj.remove();
                                }
                            } else {
                                thisObj.remove();
                            }
                        },
                        error: function(html) {
                            thisObj.remove();
                        }
                    });
                },
                offset: 'bottom-in-view'
            }); /* end of infinite scroll handler */

            /* load more for portfolio */
            $(".beau-btn-load-more", ".beau-portfolio-pagination-wrapper").on('click', function() {
                var thisObj = $(this);

                var listContainer = thisObj.parent().parent().prev(); // .beau-portfolio-items-wrapper
                var isotopeContainer = listContainer;

                thisObj.hide();
                thisObj.parent().find('.ajax-loader').show();

                var count = listContainer.find('article.beau-portfolio-item').length;

                $.ajax({
                    url: ajaxpagination.ajaxurl,
                    type: 'post',
                    data: {
                        action: 'beau_load_portfolio',
                        params: {
                            "count": count,
                            "query_vars": thisObj.data('query_vars'),
                            "style": thisObj.data('portfolio-style')
                        }
                    },
                    success: function(html) {
                        if (html != "") {
                            html = html.replace(/>\s+<article/ig, '><article');
                            html = html.trim();
                            var newItems = $(html);

                            /* gallery post carousel */
                            if (isotopeContainer.length > 0) {
                                isotopeContainer.append(newItems).isotope("appended", newItems);

                                imagesLoaded(isotopeContainer, function() {
                                    setTimeout(function() {
                                        isotopeContainer.isotope('layout');
                                    }, 500);
                                });
                            }

                            if ( newItems.length == thisObj.data('posts-per-page') )
                                thisObj.show();
                            
                            Waypoint.refreshAll();
                        }

                        thisObj.parent().find('.ajax-loader').hide();
                    },
                    error: function(html) {
                        console.log(html);
                        thisObj.show();
                        thisObj.parent().find('.ajax-loader').hide();
                    }
                });

                return false;
            }); /* end of load-more event handler */

            $(".infinite-scroll-placeholder", ".beau-portfolio-pagination-wrapper").waypoint({
                handler: function(direction) {
                    var waypoint = this;
                    waypoint.disable();
                    var thisObj = $(this.element);

                    var listContainer = thisObj.parent().prev(); // .beau-portfolio-items-wrapper
                    var isotopeContainer = listContainer;
                    var count = listContainer.find('article.beau-portfolio-item').length;

                    $.ajax({
                        url: ajaxpagination.ajaxurl,
                        type: 'post',
                        data: {
                            action: 'beau_load_portfolio',
                            params: {
                                "count": count,
                                "query_vars": thisObj.data('query_vars'),
                                "style": thisObj.data('portfolio-style')
                            }
                        },
                        success: function(html) {
                            if (html != "") {
                                html = html.replace(/>\s+<article/ig, '><article');
                                html = html.trim();
                                var newItems = $(html);

                                if (isotopeContainer.length > 0) {
                                    isotopeContainer.append(newItems).isotope("appended", newItems);
                                    imagesLoaded(isotopeContainer, function() {
                                        setTimeout(function() {
                                            isotopeContainer.isotope('layout');
                                        }, 500);
                                    });
                                }

                                Waypoint.refreshAll();
                                waypoint.enable();

                                if (newItems.length < thisObj.data('posts-per-page') ) {
                                    thisObj.remove();
                                }
                            } else {
                                thisObj.remove();
                            }
                        },
                        error: function(html) {
                            thisObj.remove();
                        }
                    });
                },
                offset: 'bottom-in-view' 
            });
             /* end of infinite scroll handler */

            $(".beau-portfolio-masonry-wrapper").each(function() {
                $(".beau-portfolio-items-wrapper").isotope({
                    itemSelector: '.beau-portfolio-item',
                    animationEngine: 'best-available',
                    masonry: {
                        gutter: 0
                    }
                });
            });

            $(".beau-portfolio-grid-list-wrapper").each(function() {
                $(".beau-portfolio-items-wrapper").isotope({
                    itemSelector: '.beau-portfolio-item',
                    animationEngine: 'best-available',
                    masonry: {
                        gutter: 0
                    }
                });
            });

            $(".beau-products-wrapper").each(function() {
                $(this).isotope({
                    layoutMode: 'fitRows',
                    fitRows: {
                        gutter: 30
                    },
                    itemSelector: '.beau-product',
                    animationEngine: 'best-available'
                });
            });

            $(".beau-gmap-canvas").each(function() {
                var $canvas = $(this);
                var container = document.getElementById($canvas.prop('id'));
                var position = new google.maps.LatLng( parseFloat($canvas.data('lat')), parseFloat($canvas.data('lng')) );
                var mapOptions = {
                    zoom: 11,
                    center: position,
                    styles: [{
                        stylers: [{
                            saturation: -100
                        }]
                    }]
                };
                var map = new google.maps.Map(container, mapOptions);
                var contentString = $canvas.data('info');
                var infowindow = new google.maps.InfoWindow({
                    content: contentString
                });

                var marker = new google.maps.Marker({
                    position: position,
                    map: map,
                    title:  $canvas.data('tooltip')
                });
                marker.addListener('click', function() {
                    infowindow.open(map, marker);
                });
            });

            $(window).resize();
            Waypoint.refreshAll();
            /* Hack to prevent strange parallax behavior of Visual Composer */
			var resize_event = document.createEvent( 'UIEvents' );
			resize_event.initUIEvent( 'resize', true, false, window, 0 );
			window.dispatchEvent( resize_event );
			
        }); /* end of imagesLoaded event handler */

        $('body').on('adding_to_cart', function(e, button) {
            button.closest('.beau-add-cart-wrapper').removeClass('added').addClass('adding');
        });

        $('body').on('added_to_cart', function(e, fragments, cart_hash, thisbutton) {
            var iconwrapper = thisbutton.closest('.beau-add-cart-wrapper');
            iconwrapper.removeClass('adding').addClass('added');
            setTimeout(function() {
                iconwrapper.removeClass('added');
            }, 3000);

            if (fragments['beau_wc_mini_cart'] == '') return;

            var obj = $("#nav-shopping-cart-wrapper", "header#beau-header");
            obj.after(fragments['beau_wc_mini_cart']);
            obj.remove();
        });

        $("input[type=number]").each(function() {
            var obj = $(this);
            beau_to_spinner( obj );
        });

        if (typeof(moment) == 'function') {
            if ($(".beau-timer-wrapper").length > 0) {
                countdown_handler();
            }
        }

        /* sticky nav bar */
        var header_height = $("header#beau-header.enable-sticky").height() + 200;
        var adminbar = $("#wpadminbar");
        var obj = $("header#beau-header.enable-sticky");
        var sticky_visible = false;
        if (adminbar.length > 0) {
            header_height += adminbar.height();
        }

        function check_sticky() {
            if ($(document).scrollTop() > header_height) {
                if (sticky_visible == false) {
                    if (!obj.hasClass('slider-nav')) {
                        obj.next().css('margin-top', obj.height());
                    }

                    obj.addClass('header-stuck');
                    setTimeout(function() {
                        obj.addClass('do-animate');
                    }, 100);
                    sticky_visible = true;
                }
            } else if (sticky_visible == true) {
                obj.removeClass('do-animate').removeClass('header-stuck');
                if (!obj.hasClass('slider-nav')) {
                    obj.next().css('margin-top', '');
                }
                sticky_visible = false;
            }
        }
        $(window).on('scroll', function() {
            check_sticky();
        });
        check_sticky();

        $("ul.filters>li>a", ".beau-portfolio-categories-wrapper").on('click', function(e) {
            var filter = $(this).data('filter');
            var wrapper = $(this).closest(".beau-portfolio-masonry-wrapper");
            if (wrapper.length == 0)
                wrapper = $(this).closest(".beau-portfolio-grid-list-wrapper");

            var isotopeObj = wrapper.find(".beau-portfolio-items-wrapper");
            if (filter == '*') {
                isotopeObj.isotope({
                    filter: "*"
                });
            } else {
                isotopeObj.isotope({
                    filter: ".project_category-" + filter
                });
            }

            Waypoint.refreshAll();

            var li = $(this).parent();
            var ul = li.parent();
            ul.find("li").removeClass('active');
            li.addClass('active');

            e.preventDefault();
            e.stopPropagation();
        });

        $("a.beau-to-top-anchor").on('click', function(e) {
            $("html, body").animate({ scrollTop: 0 }, 1500 );

            e.preventDefault();
            e.stopPropagation();
        });
        
        $(window).on('scroll', function(e) {
            if ( $(window).scrollTop() > 2000 ) {
                if ( $(".beau-to-top").is(":hidden") ) {
                    $(".beau-to-top").fadeIn();
                }
            }
            else {
                if ( $(".beau-to-top").is(":visible") ) {
                    $(".beau-to-top").fadeOut();
                }
            }
        });

        // enable touch action on touchable devices
        $('body').bind('touchstart', function() {});

        $(document).bind('qv_loader_stop', function( e ) {
        	var parent = $(".yith-wcqv-main");

        	parent.find("input[type=number]").each(function() {
                var obj = $(this);
                beau_to_spinner( obj );
            });
        });

        /* mega menu */
        $(window).trigger('debouncedresize');
    }); /* end of document.ready */


    $(window).on('debouncedresize', function() {

        $('.wpb_column.fit_in_container').each(function() {

            var col = $(this);
            if (col.outerWidth() == col.closest(".vc_row").width()) {
                if (col.is(':first-child')) {
                    col.css('padding-left', 'initial');
                }
                if (col.is(':last-child')) {
                    col.css('padding-right', 'initial');
                }
            } else if (col.closest(".vc_row").data('vc-full-width')) {
                var container_width = $('body').width();
                var $boxed_container = $( '.topmost-page-container' );
                if ( $boxed_container.length && $(window).width() >= 1200 ) {
                    container_width = $boxed_container.width();
                }
                if (col.is(':first-child')) {
                    col.css('padding-left', ( container_width - $('.container:first').width()) / 2 + 'px');
                }
                if (col.is(':last-child')) {
                    col.css('padding-right', ( container_width - $('.container:first').width()) / 2 + 'px');
                }
            }
        });

        $('.beau-portfolio-video-wrapper').each(function() {
            var wrapper = $(this);
            var body_width = $('body').width();
            var container_width = $('.container').width();

            wrapper.css('width', body_width );
            wrapper.css('left', - ( body_width - container_width ) / 2 + 'px');
        });
        //$('.beau-portfolio-video-cover').each(function() {
        //    var wrapper = $(this);
        //    var body_width = $('body').width();
        //    var container_width = $('.container').width();
        //
        //    wrapper.css('width', body_width );
        //    wrapper.css('left', - ( body_width - container_width ) / 2 + 'px');
        //});

        /* Tab Bar */
        $('.beau_tabs').each(function() {
            var tabs = $(this);
            var tab_width = Math.floor( tabs.find( '.beau_tabs_wrapper' ) .width() / tabs.find( '.beau_tabs_nav li').length ) + 1;
            $('.beau_tabs_nav li.with-image a').css('width', tab_width + 'px ');
        });

        $("ul.beau-megamenu-wrapper", "#beau-header").each( function () {
            var docu_width = $(window).width() - 20; 

            var menuobj = $(this);
            var maxwidth = 0;

            var menus = menuobj.find( ">li");

            menus.each( function() {
                maxwidth = maxwidth < $(this).outerWidth( true ) ? $(this).outerWidth( true ) : maxwidth;
            })
            menus.width( maxwidth );

            var menuwidth = maxwidth * menus.length;
            menuobj.css('left', '');

            var menuoffset = menuobj.offset();
            
            if ( docu_width > menuwidth ) {
                menuobj.width( menuwidth );
                if ( docu_width < menuoffset.left + menuwidth + 10 ) {
                    menuobj.css('left', ( docu_width - (menuoffset.left + menuwidth + 10 ) ) );
                }
            }
            else {
                menuobj.width( docu_width );
                menuobj.css('left', - menuoffset.left + 10 );
            }
        } );

        $("ul.sub-menu", "#beau-header").each( function () {
            var docu_width = $(window).width();
            var menuobj = $(this);

            var prevObj = menuobj.prev();
            var offset = prevObj.offset().left + prevObj.outerWidth(true) ;

            if ( docu_width < offset + menuobj.outerWidth(true) + 20 ) {
                menuobj.addClass( 'right-aligned' );
            }
            else {
                menuobj.removeClass( 'right-aligned' );
            }
        } );
    });

    function countdown_handler() {
        $(".beau-timer-wrapper").each(function() {
            var obj = $(this);

            var end = moment.unix(obj.data('ending'));
            var current = moment();
            var dur = moment.duration(end.diff(current));

            var mdiff = end.diff(current, 'months');
            var ddiff = end.diff(current, 'days');

            if ( dur.get('s') < 0 || dur.get('m') < 0 || dur.get('h') < 0 || dur.get('d') < 0 || dur.get('M') < 0 || dur.get('Y') < 0 ) {
        		dur = moment.duration( 0 );
        		clearInterval( refreshIntervalId );
        		mdiff = 0;
        		ddiff = 0;
        	}

            if (obj.data('show') == 5) {
            	var pmo = obj.find(".beau-timer-el-Months > .svg-wrapper");
            	pmo.attr('data-pct', parseFloat( (mdiff+1) / 12 * 100));
            	pmo.attr('data-rel', (mdiff+1));
            	beau_update_svg_path(pmo);
            }
            else if (obj.data('show') > 4) {
                var pmo = obj.find(".beau-timer-el-Months > .svg-wrapper");
                pmo.attr('data-pct', parseFloat((dur.get('M')) / 12 * 100));
                pmo.attr('data-rel', dur.get('M'));
                beau_update_svg_path(pmo);
            }

            if ( obj.data('show') == 4 ) {
            	var pmo = obj.find(".beau-timer-el-Days > .svg-wrapper");
                pmo.attr('data-pct', parseFloat(ddiff / 30 * 100));
                pmo.attr('data-rel', ddiff);
                beau_update_svg_path(pmo);
            }
            else if (obj.data('show') > 3) {
                var pmo = obj.find(".beau-timer-el-Days > .svg-wrapper");
                pmo.attr('data-pct', parseFloat((dur.get('d')) / 30 * 100));
                pmo.attr('data-rel', dur.get('d'));

                beau_update_svg_path(pmo);
            }

            pmo = obj.find(".beau-timer-el-Hours > .svg-wrapper");
            pmo.attr('data-pct', parseFloat((dur.get('h')) / 24 * 100));
            pmo.attr('data-rel', dur.get('h'));
            beau_update_svg_path(pmo);

            pmo = obj.find(".beau-timer-el-Minutes > .svg-wrapper");
            pmo.attr('data-pct', parseFloat((dur.get('m')) / 60 * 100));
            pmo.attr('data-rel', dur.get('m'));
            beau_update_svg_path(pmo);

            pmo = obj.find(".beau-timer-el-Seconds > .svg-wrapper");
            pmo.attr('data-pct', parseFloat((dur.get('s')) / 60 * 100));
            pmo.attr('data-rel', dur.get('s'));
            beau_update_svg_path(pmo);
        });

        var refreshIntervalId = setTimeout(function() {
            countdown_handler()
        }, 1000);
    }

    function toggle_mobile_menu(e) {
        if ($("#mobile-menu-container").hasClass("ani-appear-mobile-nav")) {
            //$(this).closest(".ani-appear-mobile-nav").removeClass("ani-appear-mobile-nav");
            $("#mobile-menu-container").removeClass("ani-appear-mobile-nav");
            $("body").removeClass("mobilemenu-open");
        } else {
            $("#mobile-menu-container").addClass("ani-appear-mobile-nav");
            $("body").addClass("mobilemenu-open");
        }
    }

    function beau_update_svg_path(obj) {
        var pct = parseFloat(obj.attr('data-pct'));
        if ( pct > 100 ) pct = 99.999;
        
        var svg = obj.find("svg");

        var r = svg.data('radius');
        var ctx = svg.data('ctx');
        var cty = svg.data('cty');

        var inity = ctx - r;

        var path = "M" + ctx + "," + inity + " A " + r + "," + r + " 0 ";
        var large_arc = 0;
        var sweep = 1;

        var track = obj.find("path.beau-timer-track");
        var fill = obj.find("path.beau-timer-fill");

        var edx = 0;
        var edy = 0;

        var edx = ctx + r * Math.cos(Math.PI / 180 * (3.6 * pct - 90));
        var edy = cty + r * Math.sin(Math.PI / 180 * (3.6 * pct - 90));

        if (pct > 50) {
            large_arc = 1;
            sweep = 1;
        }

        track.attr('d', path + large_arc + " " + sweep + " " + edx + " " + edy);

        large_arc = large_arc == 1 ? 0 : 1;
        sweep = sweep == 1 ? 0 : 1;

        fill.attr('d', path + large_arc + " " + sweep + " " + edx + " " + edy);

        if (pct == 0) {
            obj.find("circle.beau-timer-zero").show();
        } else {
            obj.find("circle.beau-timer-zero").hide();
        }
    }

    function beau_to_spinner( obj ) {
    	obj.addClass('beau-spinner');
        obj.before('<button class="beau-spinner-down"><i class="fa fa-minus"></i></button>');
        obj.after('<button class="beau-spinner-up"><i class="fa fa-plus"></i></button>');

        obj.next().on('click', function(e) {
            var newValue = parseFloat(obj.val());

            if (obj.attr('step')) {
                newValue += parseFloat(obj.attr('step'));
            } else {
                newValue += 1;
            }

            if (obj.attr('max') && newValue > parseFloat(obj.attr('max'))) {
                newValue = obj.attr('max');
            }

            obj.val(newValue);

            e.preventDefault();
            e.stopPropagation();
        });

        obj.prev().on('click', function(e) {
            var newValue = parseFloat(obj.val());

            if (obj.attr('step')) {
                newValue -= parseFloat(obj.attr('step'));
            } else {
                newValue -= 1;
            }

            if (obj.attr('min') && newValue < parseFloat(obj.attr('min'))) {
                newValue = obj.attr('min');
            }

            obj.val(newValue);

            e.preventDefault();
            e.stopPropagation();
        });
    }
})(jQuery);

(function ($) {
    "use strict";

        
    /*==========  Validate Email  ==========*/
    function validateEmail($validate_email) {
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        if( !emailReg.test( $validate_email ) ) {
            return false;
        } else {
            return true;
        }
        return false;
    }
    
    /*==========  Newsletter Form  ==========*/
    var $form = $('#mc-embedded-subscribe-form');
    $form.submit(function() {
        $('#newsletter-error').fadeOut();
        $('#newsletter-success').fadeOut();
        $('#newsletter-loading').fadeOut();
        $('#newsletter-info').fadeOut();
        $('#newsletter-loading').fadeIn();
        if (validateEmail($('#mce-EMAIL').val()) && $('#mce-EMAIL').val().length !== 0) {
            $.ajax({
                type: $form.attr('method'),
                url: $form.attr('action'),
                data: $form.serialize(),
                cache: false,
                dataType: 'json',
                contentType: 'application/json; charset=utf-8',
                error: function(err) {
                    $('#newsletter-error').fadeOut();
                    $('#newsletter-success').fadeOut();
                    $('#newsletter-loading').fadeOut();
                    $('#newsletter-info').fadeOut();
                    $('#newsletter-error .message').html(err.msg);
                    $('#newsletter-error').fadeIn();
                },
                success: function(data) {
                    if (data.result !== 'success') {
                        $('#newsletter-error').fadeOut();
                        $('#newsletter-success').fadeOut();
                        $('#newsletter-loading').fadeOut();
                        $('#newsletter-info').fadeOut();
                        $('#newsletter-info .message').html(data.msg);
                        $('#newsletter-info').fadeIn();
                    } else {
                        $('#newsletter-error').fadeOut();
                        $('#newsletter-success').fadeOut();
                        $('#newsletter-loading').fadeOut();
                        $('#newsletter-info').fadeOut();
                        $('#newsletter-success .message').html(data.msg);
                        $('#newsletter-success').fadeIn();
                    }
                }
            });
        } else {
            $('#newsletter-error').fadeOut();
            $('#newsletter-success').fadeOut();
            $('#newsletter-loading').fadeOut();
            $('#newsletter-info').fadeOut();
            $('#newsletter-error .message').html('Please enter a valid email.');
            $('#newsletter-error').fadeIn();
        }
        return false;
    });


    /* ---------------------------------------------------------------------- */
    /*  Contact Form
    /* ---------------------------------------------------------------------- */

    var submitContact = $('#submit_contact'),
        message = $('#msg');

    submitContact.on('click', function(e){
        e.preventDefault();

        var $this = $(this);
        
        $.ajax({
            type: "POST",
            url: 'contact.php',
            dataType: 'json',
            cache: false,
            data: $('#contact-form').serialize(),
            success: function(data) {

                if(data.info !== 'error'){
                    $this.parents('form').find('input[type=text],textarea,select').filter(':visible').val('');
                    message.hide().removeClass('success').removeClass('error').addClass('success').html(data.msg).fadeIn('slow').delay(5000).fadeOut('slow');
                } else {
                    message.hide().removeClass('success').removeClass('error').addClass('error').html(data.msg).fadeIn('slow').delay(5000).fadeOut('slow');
                }
            }
        });
    });
    
})(jQuery);