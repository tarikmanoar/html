jQuery(document).ready(function($){
    var is_mobile = false;
    "use strict";

    function detectmob() {
     if( navigator.userAgent.match(/Android/i)
     || navigator.userAgent.match(/webOS/i)
     || navigator.userAgent.match(/iPhone/i)
     || navigator.userAgent.match(/iPad/i)
     || navigator.userAgent.match(/iPod/i)
     || navigator.userAgent.match(/BlackBerry/i)
     || navigator.userAgent.match(/Windows Phone/i)
     ){

        return true;
      }
     else {
        return false;
      }
    }
    if(detectmob()){
        is_mobile=true;
    }else
    {
        is_mobile=false;
    }

    // Add body class
    function add_body_class()
    {
        if(detectmob()){
            $('body').addClass('is_mobile');
        }
    }
    add_body_class();

    if ($('div').hasClass('has_animation')) {
        /* ==============================================
        WOW plugin triggers animation.css on scroll
        Disable this feature on mobile
        =============================================== */
        var wow = new WOW(
          {
            boxClass:     'wow',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset:       0,          // distance to the element when triggering the animation (default is 0)
            mobile:       false,       // trigger animations on mobile devices (default is true)
            live:         true,       // act on asynchronously loaded content (default is true)
            callback:     function(box) {
              // the callback is fired every time an animation is started
              // the argument that is passed in is the DOM node being animated
            },
            scrollContainer: null // optional scroll container selector, otherwise use window
          }
        );
        wow.init();
    };


    // Alert Notification
    $(".alert .toggle-alert").on('click',function(){
      $(this).closest(".alert").slideUp();
      return false;
    });

    // Filter Back Text
    $('.jt-filter li a').on('click',function() {
        $('.jt-filter li a.active').removeClass('active');
        $(this).closest('li a').addClass('active');

        var back_text = $( ".jt-filter a.active" ).text();
        $( ".back-text" ).html( back_text );
    });

    // WWD Tabs Start :)
    $( ".jt-wwd-image-bg .wwd-tab-box:nth-child(2)" ).addClass( "wwd-current" );
    $( ".jt-wwd-tab-links .tab-each-link:nth-child(2)" ).addClass( "wwd-active-link" );
    $(".jt-wwd-tab-links").find(".tab-each-link").on('click', function() {
        $(".wwd-tab-box").removeClass('wwd-current');
        $($(this).attr("href")).addClass('wwd-current');
        return false;
    });

    // When Click Close icon it removes outer div tab content
    $(".tab-each-link .close-icon").on('click', function() {
        $(".wwd-tab-box").removeClass('wwd-current');
        return false;
    });

    // Click on that Tab link
    $(".tab-each-link").on('click', function() {
        $(".tab-each-link").removeClass('wwd-active-link');
        $(this).addClass('wwd-active-link');

        $(".tab-each-link .close-icon").on('click', function() {
            $(".tab-each-link").removeClass('wwd-deactive-link');
            $(this).parent(".tab-each-link").addClass('wwd-deactive-link');
            return false;
        });

        $(".tab-each-link").on('click', function() {
            $(".tab-each-link").removeClass('wwd-deactive-link');
            return false;
        });

    });
    // WWD Tabs End :(

    // Skill Bars
    $('.jt-skill').waypoint(function() {
            jQuery(this).find('.jt-skillbar').animate({
                width:jQuery(this).attr('data-percent')
            },2000);
            jQuery(this).find('.skill-arrow').animate({
                left:jQuery(this).attr('data-percent')
            },2000);

        }, { offset: '100%'
    });


    // Process Shortcode
    $( "ul.jt-process-cnt li:first-child" ).addClass( "jt-process-li-right text-right" );
    $( "ul.jt-process-cnt li:nth-child(2)" ).addClass( "jt-process-li-left text-left" );
    $( "ul.jt-process-cnt li:nth-child(3)" ).addClass( "jt-process-li-left text-left" );
    $( "ul.jt-process-cnt li:nth-child(4)" ).addClass( "jt-process-li-right text-right" );

    $( ".jt-trendy-item-wrap .jt-trend-group:first-child" ).addClass( "jt-treny-list-active" );

    // Timeline Shortcode
    $( ".jt-timeline-wrapper .jt-tym-content > div:nth-child(odd)" ).addClass( "jt-box-right" );
    $( ".jt-timeline-wrapper .jt-tym-content > div:nth-child(even)" ).addClass( "jt-box-left" );

    // Timeline Popup
    $('.jt-popup-image').magnificPopup({
        type: 'image',
        delegate: 'a'
    });

    // Gallery Popup
    $('.format-gallery > .format-gallery-popup').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
        },
    });

    // Video Popup
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });

    // Image Popup
    $('.format-image-popup').magnificPopup({
      type: 'image'
    });

    // Image Popup
    $('.jt-port-hover-overlay').magnificPopup({
      type: 'image'
    });

    // Image Popup
    $('.jt-shop-image-popup').magnificPopup({
        type: 'image'
    });

    // List Number
    $("ul.jt-list-num").each(function(){
        $(this).children().each(function(i) {
            $(this).prepend("<span>0" + ($(this).index() +1) + "</span>");
        });
    });
    $(".jt-list-num-style .jt-about-wrap").each(function(i){
        $(this).prepend("<span class='jt-list-numb'>" + ($(this).index() +1) + "</span>");
    });

    // Fixed Footer - Get Footer Height
    var footer_height = $( "body.jt-fixed-footer footer" ).height();
    $( "body.jt-fixed-footer" ).css( "padding-bottom", footer_height );

    // Grid Gallery Slideshow Top Value
    var slideshow_top = $( "body header" ).height();
    $( "#grid-gallery > .slideshow" ).css( "top", slideshow_top );

    // Top Search
    $("#top-search-trigger").on('click', function(e) {
        $body = $('body');
        $body.toggleClass('top-search-open');
        $( '#main-nav > ul' ).toggleClass("show", false);
        if ($body.hasClass('top-search-open')){
            $('#top-search').find('input').focus();
        }
        e.stopPropagation();
        e.preventDefault();
    });


    // Slim Menu
    $("#top-search-trigger-slim").on('click', function(e) {
        $body = $('body');
        $body.toggleClass('top-search-open');
        $( '#main-nav > ul' ).toggleClass("show", false);
        if ($body.hasClass('top-search-open')){
            $('#top-search-slim').find('input').focus();
        }
        e.stopPropagation();
        e.preventDefault();
    });

    $("#jt-top-cart-trigger").on('click', function(e) {
        $topCart = $('#jt-top-cart');
        $topCart.toggleClass('top-cart-open');
        if (!$(event.target).closest('#jt-top-cart').length) { $topCart.toggleClass('top-cart-open', false); }
        e.stopPropagation();
        e.preventDefault();
    });

     // new cart
    $("#jt-top-cart-trigger-slim").on('click', function(e) {
        $topCart = $('#jt-top-cart-slim');
        $topCart.toggleClass('top-cart-open-slim');
        if (!$(event.target).closest('#jt-top-cart-slim').length) { $topCart.toggleClass('top-cart-open-slim', false); }
        e.stopPropagation();
        e.preventDefault();
    });
    // new cart

    $('.product_list_widget li > a').each(function() {
        $(this).contents().eq(2).wrap('<span class="jt-cart-product-title"/>');
    });
    $('.top-cart-content .product_list_widget li > a.remove').wrapInner('<i></i>');

    // YITH Compare Product
    $('.single-product .entry-summary form.cart .woocommerce.product.compare-button a.compare.button.added').wrapInner('<i></i>');
    $('.single-product .entry-summary form.cart .woocommerce.product.compare-button a.compare.button').wrapInner('<i></i>');

    // Remove Plus and Minus from quantity control
    $('.quantity .plus').attr('value', '');
    $('.quantity .minus').attr('value', '');

    // Comment Review Submit
    $('form.comment-form p.form-submit input.submit').attr('value', 'submit review');
    $('.woocommerce-checkout #billing_address_1').attr('placeholder', '');

    // Adding and Removing dropdown-menu class.
    $( ".left-menu-list .left-menu > li.menu-item-has-children > ul" ).removeClass( "dropdown-menu" ).addClass( "sub-menu" );

    // Sub Menu Hover
    jQuery('.left-menu-list .left-menu > li.menu-item-has-children > a, .left-menu-list .left-menu > li > span, .jt-top-white .jt-slimmenu > li > span').on('mouseenter', function(){
        jQuery(this).next('.port-filter, .left-menu-list .left-menu > li.menu-item-has-children .sub-menu').stop().slideDown();
    });
    jQuery('.left-menu-list .left-menu > li.menu-item-has-children, .left-menu-list .left-menu > li, .jt-top-white .jt-slimmenu > li > span').on('mouseleave', function(){
        jQuery('.port-filter, .left-menu-list .left-menu > li.menu-item-has-children .sub-menu').stop().slideUp();
    });

    // Share Popup
    $('.jt-share-link').magnificPopup({
        type:'inline',
        midClick: true
    });

    // Grid Gallery Height Value
    var pagecontainer_height = $( "#grid-gallery ul.grid" ).height();
    $( ".page-template-page-photography.jt_arch_content .page-container" ).css( "height", pagecontainer_height );
    $(".page-template-page-photography.jt_arch_content .type-page" ).css( "height",pagecontainer_height );
    $( ".page-template-page-photography.jt_arch_content" ).css( "height", pagecontainer_height );
    $(".page-template-page-photography.jt_arch_content .entry-content" ).css( "height", pagecontainer_height );
    $(".page-template-page-photography.jt_arch_content .wrapper" ).css( "height", pagecontainer_height);
    $(".page-template-page-photography.jt_arch_content .main-content.padding-zero" ).css( "height", pagecontainer_height);
    $(".page-template-page-photography.jt_arch_content .jt-portfolio-wrapper" ).css( "height", pagecontainer_height);

    // Freelancer Header Grid Gallery Height Value
    $(".page-template-page-photography.jt_freelance_content .page-container" ).css( "height", pagecontainer_height );
    $(".page-template-page-photography.jt_freelance_content .type-page" ).css( "height",pagecontainer_height );
    $( ".page-template-page-photography.jt_freelance_content" ).css( "height", pagecontainer_height );
    $(".page-template-page-photography.jt_freelance_content .entry-content" ).css( "height", pagecontainer_height );
    $(".page-template-page-photography.jt_freelance_content .wrapper" ).css( "height", pagecontainer_height);
    $(".page-template-page-photography.jt_freelance_content .main-content.padding-zero" ).css( "height", pagecontainer_height);
    $(".page-template-page-photography.jt_freelance_content .jt-portfolio-wrapper" ).css( "height", pagecontainer_height);

    // Left Header Grid Gallery Height Value
    $(".page-template-page-photography.jt_left_content .page-container" ).css( "height", pagecontainer_height );
    $(".page-template-page-photography.jt_left_content .type-page" ).css( "height", pagecontainer_height );
    $( ".page-template-page-photography.jt_left_content" ).css( "height", pagecontainer_height );
    $(".page-template-page-photography.jt_left_content .entry-content" ).css( "height", pagecontainer_height );
    $(".page-template-page-photography.jt_left_content .wrapper" ).css( "height", pagecontainer_height);
    $(".page-template-page-photography.jt_left_content .main-content.padding-zero" ).css( "height", pagecontainer_height);
    $(".page-template-page-photography.jt_left_content .jt-portfolio-wrapper" ).css( "height", pagecontainer_height);

    //Rightside Header Grid Gallery Height Value
    $(".page-template-page-photography.jt_right_content .page-container" ).css( "height", pagecontainer_height );
    $(".page-template-page-photography.jt_right_content .type-page" ).css( "height", pagecontainer_height );
    $( ".page-template-page-photography.jt_right_content" ).css( "height", pagecontainer_height );
    $(".page-template-page-photography.jt_right_content .entry-content" ).css( "height", pagecontainer_height );
    $(".page-template-page-photography.jt_right_content .wrapper" ).css( "height", pagecontainer_height);
    $(".page-template-page-photography.jt_right_content .main-content.padding-zero" ).css( "height", pagecontainer_height);
    $(".page-template-page-photography.jt_right_content .jt-portfolio-wrapper" ).css( "height", pagecontainer_height);

    // Header With top bar Grid Gallery Height Value
    $(".page-template-page-photography.jt_business_content .page-container" ).css( "height", pagecontainer_height );
    $(".page-template-page-photography.jt_business_content .type-page" ).css( "height", pagecontainer_height );
    $( ".page-template-page-photography.jt_business_content" ).css( "height", pagecontainer_height );
    $(".page-template-page-photography.jt_business_content .entry-content" ).css( "height", pagecontainer_height );
    $(".page-template-page-photography.jt_business_content .wrapper" ).css( "height", pagecontainer_height);
    $(".page-template-page-photography.jt_business_content .main-content.padding-zero" ).css( "height", pagecontainer_height);
    $(".page-template-page-photography.jt_business_content .jt-portfolio-wrapper" ).css( "height", pagecontainer_height);

    // Top Menu With Logo Left Grid Gallery Height Value
    $(".page-template-page-photography.jt_main_content .page-container" ).css( "height", pagecontainer_height );
    $(".page-template-page-photography.jt_main_content .type-page" ).css( "height", pagecontainer_height );
    $( ".page-template-page-photography.jt_main_content" ).css( "height", pagecontainer_height );
    $(".page-template-page-photography.jt_main_content .entry-content" ).css( "height", pagecontainer_height );
    $(".page-template-page-photography.jt_main_content .wrapper" ).css( "height", pagecontainer_height);
    $(".page-template-page-photography.jt_main_content .main-content.padding-zero" ).css( "height", pagecontainer_height);
    $(".page-template-page-photography.jt_main_content .jt-portfolio-wrapper" ).css( "height", pagecontainer_height);

    // Top Menu With Banner Logo  Grid Gallery Height Value
    $(".page-template-page-photography.jt_blog_content .page-container" ).css( "height", pagecontainer_height );
    $(".page-template-page-photography.jt_blog_content .type-page" ).css( "height", pagecontainer_height );
    $( ".page-template-page-photography.jt_blog_content" ).css( "height", pagecontainer_height );
    $(".page-template-page-photography.jt_blog_content .entry-content" ).css( "height", pagecontainer_height );
    $(".page-template-page-photography.jt_blog_content .wrapper" ).css( "height", pagecontainer_height);
    $(".page-template-page-photography.jt_blog_content .main-content.padding-zero" ).css( "height", pagecontainer_height);
    $(".page-template-page-photography.jt_blog_content .jt-portfolio-wrapper" ).css( "height", pagecontainer_height);

    // Header Agency  Grid Gallery Height Value
    $(".page-template-page-photography.jt_agency_content .page-container" ).css( "height", pagecontainer_height );
    $(".page-template-page-photography.jt_agency_content .type-page" ).css( "height", pagecontainer_height );
    $( ".page-template-page-photography.jt_agency_content" ).css( "height", pagecontainer_height );
    $(".page-template-page-photography.jt_agency_content .entry-content" ).css( "height", pagecontainer_height );
    $(".page-template-page-photography.jt_agency_content .wrapper" ).css( "height", pagecontainer_height);
    $(".page-template-page-photography.jt_agency_content .main-content.padding-zero" ).css( "height", pagecontainer_height);
    $(".page-template-page-photography.jt_agency_content .jt-portfolio-wrapper" ).css( "height", pagecontainer_height);

     // Header Studio Grid Gallery Height Value
    $(".page-template-page-photography.jt_studio_content .page-container" ).css( "height", pagecontainer_height );
    $(".page-template-page-photography.jt_studio_content .type-page" ).css( "height", pagecontainer_height );
    $( ".page-template-page-photography.jt_studio_content" ).css( "height", pagecontainer_height );
    $(".page-template-page-photography.jt_studio_content .entry-content" ).css( "height", pagecontainer_height );
    $(".page-template-page-photography.jt_studio_content .wrapper" ).css( "height", pagecontainer_height);
    $(".page-template-page-photography.jt_studio_content .main-content.padding-zero" ).css( "height", pagecontainer_height);
    $(".page-template-page-photography.jt_studio_content .jt-portfolio-wrapper" ).css( "height", pagecontainer_height);

    // Header vintage Grid Gallery Height Value
    $(".page-template-page-photography.jt_vintage_content .page-container" ).css( "height", pagecontainer_height );
    $(".page-template-page-photography.jt_vintage_content .type-page" ).css( "height", pagecontainer_height );
    $( ".page-template-page-photography.jt_vintage_content" ).css( "height", pagecontainer_height );
    $(".page-template-page-photography.jt_vintage_content .entry-content" ).css( "height", pagecontainer_height );
    $(".page-template-page-photography.jt_vintage_content .wrapper" ).css( "height", pagecontainer_height);
    $(".page-template-page-photography.jt_vintage_content .main-content.padding-zero" ).css( "height", pagecontainer_height);
    $(".page-template-page-photography.jt_vintage_content .jt-portfolio-wrapper" ).css( "height", pagecontainer_height);

    // Header Box Layout Grid Gallery Height Value
    $(".page-template-page-photography.jt-box-layout-bg .page-container" ).css( "height", pagecontainer_height );
    $(".page-template-page-photography.jt-box-layout-bg .type-page" ).css( "height", pagecontainer_height );
    $( ".page-template-page-photography.jt-box-layout-bg" ).css( "height", pagecontainer_height );
    $(".page-template-page-photography.jt-box-layout-bg .entry-content" ).css( "height", pagecontainer_height );
    $(".page-template-page-photography.jt-box-layout-bg .wrapper" ).css( "height", pagecontainer_height);
    $(".page-template-page-photography.jt-box-layout-bg .main-content.padding-zero" ).css( "height", pagecontainer_height);
    $(".page-template-page-photography.jt-box-layout-bg .jt-portfolio-wrapper" ).css( "height", pagecontainer_height);

     // Header Shop Grid Gallery Height Value
    $(".page-template-page-photography.jt_shop_content .page-container" ).css( "height", pagecontainer_height );
    $(".page-template-page-photography.jt_shop_content .type-page" ).css( "height", pagecontainer_height );
    $( ".page-template-page-photography.jt_shop_content" ).css( "height", pagecontainer_height );
    $(".page-template-page-photography.jt_shop_content .entry-content" ).css( "height", pagecontainer_height );
    $(".page-template-page-photography.jt_shop_content .wrapper" ).css( "height", pagecontainer_height);
    $(".page-template-page-photography.jt_shop_content .main-content.padding-zero" ).css( "height", pagecontainer_height);
    $(".page-template-page-photography.jt_shop_content .jt-portfolio-wrapper" ).css( "height", pagecontainer_height);

    // Architecture Top Social
    $("#jt-top-share").on('click', function(){
        $body = $('body');
        $body.toggleClass('top-share-open');
    });
    $(".jt-top-share").on('click', function(){
        $body = $('body');
        $body.toggleClass('top-share-open');
    });
    $("#jt-top-share-slim").on('click', function(){
        $body = $('body');
        $body.toggleClass('top-share-open');
    });

    // Architecture
    $("body#archid").addClass("have-js");
    if (document.getElementById( 'slideshow' )) {
        (function() {

            header = document.getElementById( 'header' )
            switchBtnn = header.querySelector( 'button.slider-switch' ),
            toggleBtnn = function() {
                if( slideshow.isFullscreen ) {
                    classie.add( switchBtnn, 'view-maxi' );
                }
                else {
                    classie.remove( switchBtnn, 'view-maxi' );
                }
            },
            toggleCtrls = function() {
                if( !slideshow.isContent ) {
                    classie.add( header, 'hide' );
                    $(".jt-arch-header").addClass("jt-hidden");
                    $("body").addClass("jt-sticky-nav-hidden");
                }
            },
            toggleCompleteCtrls = function() {
                if( !slideshow.isContent ) {
                    classie.remove( header, 'hide' );
                    $(".jt-arch-header").removeClass("jt-hidden");
                     $("body").removeClass("jt-sticky-nav-hidden");

                }
            },
            slideshow = new DragSlideshow( document.getElementById( 'slideshow' ), {
                // toggle between fullscreen and minimized slideshow
                onToggle : toggleBtnn,
                // toggle the main image and the content view
                onToggleContent : toggleCtrls,
                // toggle the main image and the content view (triggered after the animation ends)
                onToggleContentComplete : toggleCompleteCtrls
            }),
            toggleSlideshow = function() {
                slideshow.toggle();
                toggleBtnn();
            },

            // toggle between fullscreen and small slideshow
            switchBtnn.addEventListener( 'click', toggleSlideshow );

        }());

    }
    // Architecture

    if (document.getElementById( 'scene' )) {
        // Agency
        var scene = document.getElementById('scene');
        var parallax = new Parallax(scene);
    }

    // Hamburger
    $('.jt-hamburger').on('click',function(){
        $(".jt-hamburger .jt-ham-nav").toggleClass('open');
    });
    $('.jt-whole-menu').on('click',function(){
        $(".jt-whole-menu .jt-ham-nav").toggleClass('open');
    });
    $(".jt-whole-menu").on('click',function() {
        $( ".jt-agency-menu-list" ).toggle( "slide" );
        $(".jt-agency-menu h3").toggleClass("jt-menu-display");
        $(".jt-agency-menu").toggleClass("jt-menu-open");
    });

    $(".jt-hamburger").on('click',function(){
        $(".jt-slide-filter-list").slideToggle();
    });

    if (document.getElementById( 'slider' )) {
        $("#large-header").blissSlider({
            auto: 1,
            transitionTime: 2000,
            timeBetweenSlides: 4000
        });
    }

    // Header Main - Is single portoflio sticky class
    $(".single-portfolio.jt_main_content .jt-main-banner-holder .jt-page-header").addClass("is_single_portfolio_header");
    $(".single-portfolio.jt_freelance_content .jt-freelance-head .jt-blog-logo").addClass("is_single_portfolio_header");

    // Slim Menu
    // Added for Slimmenu
    $('.jt-top-slimmenu').slimmenu({
        resizeWidth: '767',
        collapserTitle: '',
        easingEffect:'easeInOutQuint',
        animSpeed:'medium',
        indentChildren: true,
        childrenIndenter: '&raquo;'
    });
    $('.jt-side-menu').slimmenu({
        resizeWidth: '992',
        collapserTitle: '',
        easingEffect: 'easeInOutQuint',
        animSpeed: 'medium',
        indentChildren: true,
        childrenIndenter: '&raquo;'
    });
    // Added for Slimmenu
    // Slim Menu

    
    /* ==============================================
      Hover on dropdown only in >= 768px devices
    =============================================== */
    function close_nav_dropdown() {

      "use strict";

      if ($(window).width() >= 768) {
        $('.navbar .dropdown').hover(function() {
          $(this).find('.dropdown-menu').first().stop(true, true).slideDown(150);
        }, function() {
          $(this).find('.dropdown-menu').first().stop(true, true).slideUp(105);
        });
      }
    }
    close_nav_dropdown();
    $(window).resize(close_nav_dropdown);

    // Mega Menu
    $('.megamenu > .dropdown-menu > li > ul').removeClass('dropdown-menu');
    $('.megamenu > .dropdown-menu > li > ul').addClass('mega-dropdown-menu');

    // Slim Menu Add Extra Class
    $('.jt-slim-top .navbar-nav.navbar-right > .dropdown > ul > .dropdown.menu-item-has-children > a').addClass('sub-collapser');
    $(".jt-slim-top .navbar-nav.navbar-right > .dropdown > ul > .dropdown.menu-item-has-children > a").append("<b class='caret'></b>");
    // Architecture Header
    $('.hidden-big-screen .navbar-nav.navbar-right > .dropdown > ul > .dropdown.menu-item-has-children > a').addClass('sub-collapser');
    $(".hidden-big-screen .navbar-nav.navbar-right > .dropdown > ul > .dropdown.menu-item-has-children > a").append("<b class='caret'></b>");
    // Blog Header
    $('.jt-top-white ul ul li.menu-item-has-children.dropdown > a').addClass('sub-collapser');
    $(".jt-top-white ul ul li.menu-item-has-children.dropdown > a").append("<b class='caret'></b>");

    // Image Popup
    $('.jt-shop-image-popup').magnificPopup({
        type: 'image'
    });

    // Top WooCommerce Body Class
    if ($('div').hasClass('vc-products')) {
        $('body').addClass('woocommerce woocommerce-page');
    }

    // Top Add if is sticky enabled
    if ($('header').hasClass('sticky-nav')) {
        $('body').addClass('jt-sticky-enabled');
    }

    // Trending Item Group
    var $container = $('.jt-trendy-item-wrap').isotope({
        itemSelector: '.jt-trend-group ',
        // layoutMode: 'fitRows',
        filter: '.jt-treny-list-active',
        hiddenStyle: {
            opacity: 0
        },
        visibleStyle: {
            opacity: 1
        },
        getSortData: {
            name: '.name',
            symbol: '.symbol',
            number: '.number parseInt',
            category: '[data-category]',
            weight: function(itemElem) {
                var weight = $(itemElem).find('.weight').text();
                return parseFloat(weight.replace(/[\(\)]/g, ''));
            }
        }
    });


    // Menu Links
    if ($('body').hasClass('jt-sticky-enabled')){
        $('.navbar a').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 69
            }, 1500, 'easeOutExpo');
            event.preventDefault();
        });
    } else {
        $('.navbar a').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 0
            }, 1500, 'easeOutExpo');
            event.preventDefault();
        });
    }

    // Move Links - Script for All.
    $('.moving-link a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 0
        }, 1500, 'easeOutExpo');
        event.preventDefault();
    });

    /* ==============================================
        All Owl Carousels
    =============================================== */
    // Gallery Carousel
    $(".format-gallery > .jt-featured-img").owlCarousel({
        items: 1,
        autoplay: true,
        autoplayHoverPause: true,
        mouseDrag: true,
        autoHeight:true,
        loop: true,
        dots: false,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    });
    // Agency Single Portfolio
    var owl = $("#jt-agency-slide");
      $("#jt-agency-slide").owlCarousel({
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true,
        pagination:false,
        rewindNav : false,
        nav:true,
        navText: ['<span class="jt-arrow-prev">', '<span class="jt-arrow-next">'],
        items : 1,
    });
    $('#jt-agency-slide .owl-nav .owl-prev').addClass("off");
    var elm = '#jt-agency-slide';
    function toggleArrows(){

        if($(elm).find(".owl-item").last().hasClass('active') &&
           $(elm).find(".owl-item.active").index() == $(elm).find(".owl-item").first().index()){
            $(elm).find('.owl-nav .owl-next').addClass("off");
            $(elm).find('.owl-nav .owl-prev').addClass("off");
        }
        //disable next
        else if($(elm).find(".owl-item").last().hasClass('active')){
            $(elm).find('.owl-nav .owl-next').addClass("off");
            $(elm).find('.owl-nav .owl-prev').removeClass("off");
        }
        //disable previus
        else if($(elm).find(".owl-item.active").index() == $(elm).find(".owl-item").first().index()) {
            $(elm).find('.owl-nav .owl-next').removeClass("off");
            $(elm).find('.owl-nav .owl-prev').addClass("off");
        }
        else{
            $(elm).find('.owl-nav .owl-next,.owl-nav .owl-prev').removeClass("off");
        }
    }

    //turn off buttons if last or first - after change
    $(elm).on('initialized.owl.carousel', function (event) {
    toggleArrows();
    });
    $(elm).on('translated.owl.carousel', function (event) { toggleArrows(); });
    // Agency Single Portfolio

    // Clients Corousal
    $(".jt-client-carousel").owlCarousel({
        margin: 0,
        responsiveClass:true,
        loop:true,
        autoplay: true,
        autoplayHoverPause: true,
        mouseDrag: true,
        nav: true,
        navText: ['<span class="client-arrow-left"></span>', '<span class="client-arrow-right"></span>'],
        responsive:{
            0:{ items:1 },
            667:{ items:2 },
            991:{ items:2 },
            1300:{ items:4 },
            2000:{ items:4 },
        }
    });

    // Team Members
    $(".jt-team-members").owlCarousel({
        items: 3,
        margin: 30,
        nav: true,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsiveClass:true,
        dots: true,
        navText: ['<i class="pe-7s-left-arrow"></i>', '<i class="pe-7s-right-arrow"></i>'],
        responsive:{
            0:{ items:1 },
            667:{ items:1 },
            668:{ items:2 },
            992:{ items:2 },
            1199:{ items:3 }
        }
    });

    $(".jt-team-members-two").owlCarousel({
        items:1,
        margin:0,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        nav: true,
        navText: ['<span class="jt-test-two-left"></span>', '<span class="jt-test-two-right"></span>'],
    });

    //Carousal
    $(".jt-cnt-carousel-wrapper").owlCarousel({
        items:1,
        margin: 0,
        mouseDrag: true,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        nav: true,
        navText: ['<span class="carousel-arrow-left"></span>', '<span class="carousel-arrow-right"></span>'],
    });

    // Intro
    $(".jt-intro-carousel").owlCarousel({
        items:1,
        margin: 0,
        mouseDrag: true,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        autoHeight : true,
        nav: true,
        navText: ['<i class="pe-7s-left-arrow"></i>', '<i class="pe-7s-right-arrow"></i>'],
    });

    // Blog
    $(".jt-blog-carousel-two").owlCarousel({
        items:3,
        margin:90,
        mouseDrag: false,
        autoplay: true,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        responsiveClass:true,
        dots: true,
        navText: ['<span class="jt-blog-arrow-left"></span>', '<span class="jt-blog-arrow-right"></span>'],
        responsive:{
            0:{ items:1 },
            767:{ items:1 },
            769:{ items:2 },
            992:{ items:2, margin:40 },
            1199:{ items:3 }
            // 1200:{ items:3,margin:80 }
            // 1361:{ items:3,margin:80 }
        }
    });

    // Testimonials
    $(".jt-test-carousel-two").owlCarousel({
        items:1,
        margin:0,
        autoplay: true,
        autoHeight : true,
        autoplayHoverPause: true,
        loop: true,
        nav: false,
        dots: true,
        navText: ['<i class="pe-7s-left-arrow"></i>', '<i class="pe-7s-right-arrow"></i>'],
    });

    $(".jt-testimonial-carousel").owlCarousel({
        items:1,
        margin:0,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplay: true,
        autoHeight : true,
        autoplayHoverPause: true,
        loop: true,
        nav: false,
        dots: true,
        navText: ['<i class="pe-7s-left-arrow"></i>', '<i class="pe-7s-right-arrow"></i>'],
    });

    // Gallery Carousel
    $("#jt-slide-wrap").owlCarousel({
        items:3,
        autoHeight:true,
        autoplay: true,
        autoplayHoverPause: true,
        loop: true,
        dots: false,
        responsiveClass:true,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive:{
            0:{ items:1 },
            979:{ items:2 },
            992:{ items:3 },
            1300:{ items:3 },
            2000:{ items:3 },
        }
    });

    // Testimoials Style Three & Four
    $(".jt-studio-testimonials, .jt-testimonials-style-three").owlCarousel({
        items:1,
        autoHeight:true,
        loop: true,
        dots: true,
        nav: true,
        navText: ['<span class="jt-slide-left"></span>', '<span class="jt-slide-right"></span>'],
        autoplay:true,
        autoplayHoverPause:true,
    });
    $(".jt-studio-testimonials, .jt-testimonials-style-three").owlCarousel({
        items:1,
        autoHeight:true,
        loop: true,
        dots: true,
        nav: true,
        navText: ['<span class="jt-slide-left"></span>', '<span class="jt-slide-right"></span>'],
        autoplay:true,
        autoplayHoverPause:true,
    });

    // Adding Slide nav and slide numbers
    $(".have-number-nav.owl-carousel .owl-controls .owl-nav .owl-prev").after("<div class='slider-no-prev'><span class='prev-no'></span><span class='total-no'></span></div>");
    $(".have-number-nav.owl-carousel .owl-controls .owl-nav .owl-next").after("<div class='slider-no-next'><span class='next-no'></span><span class='total-no'></span></div>");
    var totalLength=$(".owl-carousel .owl-wrapper, .owl-carousel .owl-item").length;
    var totLength=$(".have-number-nav.owl-carousel .owl-item").length-4;
    $(".total-no").html(totLength);
    $(".prev-no").html(totLength);
    $(".next-no").html(2);
    var owl = $('.owl-carousel');
    owl.owlCarousel();

    // Owl Event nav slide previous and next numbers
    owl.on('changed.owl.carousel', function(event) {
        var tot = event.page.count;
        var prev = event.page.index;
        var next = event.page.index+2;
        $(".prev-no").html(prev);
        $(".total-no").html(tot);
        $(".next-no").html(next);
        if(prev =='0') {
            $(".prev-no").html(tot);
        }
        if(next > tot ) {
            $(".next-no").html(1);
        }
    });

    // Studio Slide
    $(".jt-studio-small-slide").owlCarousel({
        items:1,
        autoHeight:true,
        loop: true,
        dots: true,
        nav: false,
        autoplay:true,
        autoplayHoverPause:true
    });

    // Vintage Testimonilas
    $(".jt-vintage-testimonials").owlCarousel({
        items:1,
        autoHeight:true,
        loop: true,
        dots: true,
        nav: true,
        navText: ['<span class="jt-vint-arrow-left">', '<span class="jt-vint-arrow-right">'],
        autoplay:true,
        autoplayHoverPause:true
    });

    // Product Carousel
    $('.jt-shop-small-carousel').owlCarousel({
        autoHeight:true,
        loop:true,
        margin:30,
        nav:true,
        items:1,
        mouseDrag: true,
        navText: ['<span class="jt-small-slide-left"></span>', '<span class="jt-small-slide-right"></span>'],
    });

    // Adding Slide nav and slide numbers
    $(".jt-vintage-testimonials.owl-carousel .owl-controls .owl-nav .owl-prev").after("<div class='slider-no-prev'><span class='prev-no'></span><span class='total-no'></span></div>");
    $(".jt-vintage-testimonials.owl-carousel .owl-controls .owl-nav .owl-next").after("<div class='slider-no-next'><span class='next-no'></span><span class='total-no'></span></div>");
    var totalLength=$(".jt-vintage-testimonials.owl-carousel .owl-wrapper, .owl-carousel .owl-item").length;
    var totLength=$(".jt-vintage-testimonials.owl-carousel .owl-item").length-4;
    $(".jt-vintage-testimonials .total-no").html(totLength);
    $(".jt-vintage-testimonials .prev-no").html(totLength);
    $(".jt-vintage-testimonials .next-no").html(2);
    var owl = $('.owl-carousel');
    owl.owlCarousel();

    // Owl Event nav slide previous and next numbers
    owl.on('changed.owl.carousel', function(event) {
        var tot = event.page.count;
        var prev = event.page.index;
        var next = event.page.index+2;
        $(".prev-no").html(prev);
        $(".total-no").html(tot);
        $(".next-no").html(next);
        if(prev=='0') {
            $(".prev-no").html(tot);
        }
        if(next > tot ) {
            $(".next-no").html(1);
        }
    });

    // Corporate Testimonials
    $(".jt-testimonial-style-six").owlCarousel({
        items:1,
        autoHeight:true,
        loop: true,
        dots: true,
        nav: false,
        animateIn: 'fadeIn',
        mouseDrag: false,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true
    });

    // Corporate Blog Slide
    $('.jt-box-blog-slide').owlCarousel({
        loop:true,
        margin:45,
        nav:true,
        autoplay: true,
        responsiveClass:true,
        autoplayHoverPause: true,
        items:3,
        mouseDrag: true,
        navText: ['<span class="jt-box-arrow-left">', '<span class="jt-box-arrow-right">'],
        responsive:{
            0:{ items:1 },
            767:{ items:1 },
            768:{ items:2 },
            992:{ items:2 },
            1199:{ items:3 }
        }
    });

    //Simple Slide One & Two
    $(".jt-simple-slider-one").owlCarousel({
        loop:true,
        items:1,
        autoplay: true,
        autoplayHoverPause: true,
        autoHeight:true,
        margin:0,
        nav: true,
        navText: ['<span class="jt-slider-left-arrow"></span>', '<span class="jt-slider-right-arrow"></span>'],
    });

    $(".jt-simple-slider-two").owlCarousel({
        items:1,
        margin:0,
        autoplay: true,
        autoplayHoverPause: true,
        autoHeight:true,
        loop: true,
        nav: false,
        dots: true,
        navText: ['<i class="pe-7s-left-arrow"></i>', '<i class="pe-7s-right-arrow"></i>'],
  });

    // Trade Items
    $('.jt-trend-group').owlCarousel({
        loop: true,
        responsiveClass:true,
        margin: 30,
        nav: true,
        items: 4,
        mouseDrag: true,
        navText: ['<span class="jt-trend-left">', '<span class="jt-trend-right">'],
        responsive:{
            0:{ items:1 },
            767:{ items:2, margin: 0 },
            991:{ items:2, margin: 0 },
            992:{ items:3, margin: 0 },
            1100:{ items:3, margin: 0 },
            1200:{ items:3, margin: 0 },
            1280:{ items:4, margin: 0 },
            1300:{ items:4, margin: 0 },
        }
    });
    $('.jt-new-prod').owlCarousel({
        loop: true,
        margin: 30,
        responsiveClass:true,
        nav: true,
        items: 4,
        mouseDrag: true,
        navText: ['<span class="jt-small-slide-left">', '<span class="jt-small-slide-right">'],
        responsive:{
            0:{ items:1 },
            667:{ items:2, margin: 0 },
            767:{ items:2, margin: 0 },
            991:{ items:2, margin: 0 },
            992:{ items:3, margin: 0 },
            1100:{ items:3, margin: 0 },
            1200:{ items:4, margin: 0 },
            1300:{ items:4, margin: 0 },
        }
    });

    $(".jt-trend-item").mouseenter(function() {
        $(this).find(".jt-trend-hover").stop().slideDown('fast');
    });
    $(".jt-trend-item").mouseleave(function() {
        $(this).find(".jt-trend-hover").stop().slideUp('fast');
    });

    /* ==============================================
        Misc
    =============================================== */

    // Custom-shortcode Seperator Line Type Hover Control
    $( '.have_control_sep' ).parent().addClass('sep-hover-control');

    // Subscribe
    $(".jt-corp-news-letter a").on('click',function(){
        $(".jt-corp-news-letter .jt-box-slide-content").slideToggle("fast");
         $( '.jt-corp-news-letter .jt-box-slide-content' ).parent().addClass('hide-icon-class');
    });

    if (document.getElementById( 'grid-gallery' )) {
        new CBPGridGallery( document.getElementById( 'grid-gallery' ) );
    }

    // Sub Menu Hovers
    jQuery('.jt-photo-filter a.jt-filter-tit').on('click', function(){
        jQuery(this).next('.jt-photo-filter-list').slideToggle();
        jQuery(this).next('.jt-photo-filter-list').addClass("jt-filter-display");
    });
    jQuery('.jt-photo-filter-list li a').on('click', function(){
        jQuery('.jt-photo-filter-list').slideUp();
    });

    // Social Icons Seven
    $( ".jt-studio-social-list > li" ).addClass( "jt-studio-social" );
    $( ".jt-studio-social-list > li > a" ).addClass( "chaffle" );
    $( ".jt-studio-social-list > li > a" ).attr( "data-lang", "en" );

    var social_list=$(".jt-studio-social-list li").length;
    if(social_list=='7') {
        $('.jt-studio-social-list li').addClass("jt-stud-width-7");
    } else
    if(social_list=='6') {
        $('.jt-studio-social-list li').addClass("jt-stud-width-6");
    }else
    if(social_list=='5') {
        $('.jt-studio-social-list li').addClass("jt-stud-width-5");
    } else
    if (social_list=='4') {
        $('.jt-studio-social-list li').addClass("jt-stud-width-4");
    } else
    if (social_list=='3') {
        $('.jt-studio-social-list li').addClass("jt-stud-width-3");
    }

    // Vintage Clients
    $(".jt-vint-clients a").hover(function(){
        $(this).toggleClass("active");
        $(".jt-vint-clients a").toggleClass("non-active");
    });

    /* ==============================================
        Tooltip
    =============================================== */
    $("[data-toggle='tooltip']").tooltip();
    $(".alert").alert();

    /*===============================================
        Tabs Title Width
    ===============================================*/
    var li_count_flat = $('.jt-tab-width-fill .vc_tta-tabs.vc_tta-style-flat .vc_tta-tabs-list > li').length;
    var li_count_classic = $('.jt-tab-width-fill .vc_tta-tabs.vc_tta-style-classic .vc_tta-tabs-list > li').length;
    var li_count_outline = $('.jt-tab-width-fill .vc_tta-tabs.vc_tta-style-outline .vc_tta-tabs-list > li').length;
    var li_count_modern = $('.jt-tab-width-fill .vc_tta-tabs.vc_tta-style-modern .vc_tta-tabs-list > li').length;
    var percent = '%';
    if(li_count_flat >= 0) {
        var li_width_flat = 100 / li_count_flat;
        var li_width_per_flat = (li_width_flat - 0.0011)+percent;
        $(".jt-tab-width-fill .vc_tta-tabs.vc_tta-style-flat .vc_tta-tabs-container .vc_tta-tabs-list li").css({"width": li_width_per_flat, "text-align" : "center"});
    }
    if(li_count_classic >= 0) {
        var li_width_classic = 100 / li_count_classic;
        var li_width_per_classic = li_width_classic+percent;
        $(".jt-tab-width-fill .vc_tta-tabs.vc_tta-style-classic .vc_tta-tabs-container .vc_tta-tabs-list li").css({"width": li_width_per_classic, "text-align" : "center"});
    }
    if(li_count_outline >= 0) {
        var li_width_outline = 100 / li_count_outline;
        var li_width_per_outline = li_width_outline+percent;
        $(".jt-tab-width-fill .vc_tta-tabs.vc_tta-style-outline .vc_tta-tabs-container .vc_tta-tabs-list li").css({"width": li_width_per_outline, "text-align" : "center"});
    }
    if(li_count_modern >= 0) {
        var li_width_modern = 100 / li_count_modern;
        var li_width_per_modern = li_width_modern+percent;
        $(".jt-tab-width-fill .vc_tta-tabs.vc_tta-style-modern .vc_tta-tabs-container .vc_tta-tabs-list li").css({"width": li_width_per_modern, "text-align" : "center"});
    }

    /* ==============================================
    Active Menu Item on Page Scroll
    =============================================== */
    var sections = $('.jt_row_class');
    var nav = $('.navbar-nav');
    var nav_height = nav.outerHeight();

    $(window).on('scroll', function () {

        "use strict";

        var cur_pos = $(this).scrollTop();

        sections.each(function() {
            var top = $(this).offset().top - nav_height,
            bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('jt-active-section');
                sections.removeClass('jt-active-section');

                $(this).addClass('jt-active-section');
                nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('jt-active-section');
            }
        });
    });
});
jQuery(window).load( function($ ) {
// All load functions for isotope
    jQuery('.isotope').isotope({
        itemSelector: '.jt-able-filter',
    });
    // Here that isotope
    jQuery('.isotope.have-gutter-space.jt-port-col-2').isotope({
        itemSelector: '.jt-able-filter',
        percentPosition: true,
        masonry: {
          columnWidth: '.jt-grid-sizer-2',
          gutter: '.jt-gutter-sizer'
        }
    });
    jQuery('.isotope.have-gutter-space.jt-port-col-3').isotope({
        itemSelector: '.jt-able-filter',
        percentPosition: true,
        masonry: {
          columnWidth: '.jt-grid-sizer-3',
          gutter: '.jt-gutter-sizer'
        }
    });
    jQuery('.isotope.have-gutter-space.jt-port-col-4').isotope({
        itemSelector: '.jt-able-filter',
        percentPosition: true,
        masonry: {
          columnWidth: '.jt-grid-sizer-4',
          gutter: '.jt-gutter-sizer'
        }
    });
    jQuery('.isotope.have-gutter-space.jt-port-col-5').isotope({
        itemSelector: '.jt-able-filter',
        percentPosition: true,
        masonry: {
          columnWidth: '.jt-grid-sizer-5',
          gutter: '.jt-gutter-sizer'
        }
    });

    var $container = jQuery('.isotope').isotope({
        itemSelector: '.grid-item ',
        // layoutMode: 'fitRows',
        getSortData: {
          name: '.name',
          symbol: '.symbol',
          number: '.number parseInt',
          category: '[data-category]',
          weight: function( itemElem ) {
            var weight = $( itemElem ).find('.weight').text();
            return parseFloat( weight.replace( /[\(\)]/g, '') );
          }
        }
      });

      // filter functions
      var filterFns = {
        // show if number is greater than 50
        numberGreaterThan50: function() {
          var number = $(this).find('.number').text();
          return parseInt( number, 10 ) > 50;
        },
        // show if name ends with -ium
        ium: function() {
          var name = $(this).find('.name').text();
          return name.match( /ium$/ );
        }
      };

    // bind filter button click
    jQuery('#filters').on( 'click', '.filter', function() {
      jQuery('#filters a.active').removeClass('active');
      var filterValue = jQuery( this ).attr('data-filter');
      // use filterFn if matches value
      filterValue = filterFns[ filterValue ] || filterValue;
      $container.isotope({ filter: filterValue });
      jQuery(this).addClass('active');
      return false;
    });
    // Agency

    // // bind filter button click
    jQuery('#filters-slim').on( 'click', '.filter', function() {
      jQuery('#filters-slim a.active').removeClass('active');
      var filterValue = jQuery( this ).attr('data-filter');
      // use filterFn if matches value
      filterValue = filterFns[ filterValue ] || filterValue;
      $container.isotope({ filter: filterValue });
      jQuery(this).addClass('active');
      return false;
    });
    // Agency

    // Blog Monsory
    jQuery('.isotope-blog').isotope({
        itemSelector: '.blog-width'
    });
    // bind filter button click
    jQuery('#jt-filter').on('click', '.filter', function() {
        jQuery('#jt-filter a.active').removeClass('active');
        var filterValue = jQuery(this).attr('data-filter');
        // use filterFn if matches value
        filterValue = filterFns[filterValue] || filterValue;
        $container.isotope({
            filter: filterValue
        });
        jQuery(this).addClass('active');
        return false;
    });

    // Portfolio Count - Portfolio Template
    jQuery(".port-filter > li:first-child > a.filter > .jt_cat_count_port").html(jQuery(".jt-portfolio-wrapper .jt-portfolio-item").length);

});