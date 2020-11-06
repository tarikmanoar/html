jQuery(document).ready(function($) {
    'use strict';
    $(".wpb_row .testimonials-list").owlCarousel({
        responsive: {
            0: {
                items: 1
            },
            769: {
                items: 2
            }
        },
        navigation: false,
        margin: 30,
        dots: true,
        autoplay: true,
        autoplayHoverPause: true
    });

    var essapi_3;
    essapi_3 = jQuery("#esg-grid-3-1").tpessential({
        gridID: 3,
        layout: "even",
        forceFullWidth: "off",
        lazyLoad: "off",
        row: 1,
        loadMoreAjaxToken: "7ac9dc1f8a",

        loadMoreAjaxAction: "Essential_Grid_Front_request_ajax",
        ajaxContentTarget: "ess-grid-ajax-container-",
        ajaxScrollToOffset: "0",
        ajaxCloseButton: "off",
        ajaxContentSliding: "on",
        ajaxScrollToOnLoad: "on",
        ajaxNavButton: "off",
        ajaxCloseType: "type1",
        ajaxCloseInner: "false",
        ajaxCloseStyle: "light",
        ajaxClosePosition: "tr",
        space: 0,
        pageAnimation: "fade",
        paginationScrollToTop: "off",
        spinner: "spinner0",
        evenGridMasonrySkinPusher: "off",
        lightBoxMode: "single",
        animSpeed: 1000,
        delayBasic: 1,
        mainhoverdelay: 1,
        filterType: "single",
        showDropFilter: "hover",
        filterGroupClass: "esg-fgc-3",
        googleFonts: ['Open+Sans:300,400,600,700,800', 'Raleway:100,200,300,400,500,600,700,800,900', 'Droid+Serif:400,700'],
        aspectratio: "4:3",
        responsiveEntries: [{
            width: 1400,
            amount: 5
        }, {
            width: 1170,
            amount: 4
        }, {
            width: 1024,
            amount: 3
        }, {
            width: 960,
            amount: 3
        }, {
            width: 778,
            amount: 3
        }, {
            width: 640,
            amount: 3
        }, {
            width: 480,
            amount: 1
        }]
    });

    try {
        jQuery("#esg-grid-3-1 .esgbox").esgbox({
            padding: [0, 0, 0, 0],
            afterLoad: function() {
                if (this.element.hasClass("esgboxhtml5")) {
                    var mp = this.element.data("mp4"),
                        ogv = this.element.data("ogv"),
                        webm = this.element.data("webm");
                    this.content = '<div style="width:100%;height:100%;"><video autoplay="true" loop="" class="rowbgimage" poster="" width="100%" height="auto"><source src="' + mp + '" type="video/mp4"><source src="' + webm + '" type="video/webm"><source src="' + ogv + '" type="video/ogg"></video></div>';
                    var riint = setInterval(function() {
                        jQuery(window).trigger("resize");
                    }, 100);
                    setTimeout(function() {
                        clearInterval(riint);
                    }, 2500);
                };
            },
            beforeShow: function() {
                this.title = jQuery(this.element).attr('lgtitle');
                if (this.title) {
                    this.title = "";
                    this.title = '<div style="padding:0px 0px 0px 0px">' + this.title + '</div>';
                }
            },
            afterShow: function() {},
            openEffect: 'fade',
            closeEffect: 'fade',
            nextEffect: 'fade',
            prevEffect: 'fade',
            openSpeed: 'normal',
            closeSpeed: 'normal',
            nextSpeed: 'normal',
            prevSpeed: 'normal',
            helpers: {
                media: {},
                title: {
                    type: ""
                }
            }
        });

    } catch (e) {}


});


    