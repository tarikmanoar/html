jQuery(document).ready(function($) {
    "use strict";

    $('body.preloader').jpreLoader({
        showSplash : false,
        loaderVPos : '50%'
    }).css('visibility','visible');

                        
    if (typeof revapi1 !== "undefined") {
        revapi1.bind("revolution.slide.onloaded",function (e) {
            $('.revolution_slider_overlayed .tp-bgimg').after('<div class="tp-overlay"></div>');
        });
    }

    $(".scroll").click(function(e){
        e.preventDefault();
        var scroll_to = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(scroll_to).offset().top-20
        }, 1000);
    });

    $('#back_to_top').click(function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, 900);
        return false;
    })

    $("a.add_review_link").click(function(e){
            e.preventDefault();
            $("div.woocommerce-tabs>ul.tabs>li.reviews_tab>a").click();
            $('html, body').animate({scrollTop: $("div.woocommerce-tabs").offset().top-160}, 1000);
        });


    $('.home.page .dnd_section_DD').waypoint(function(direction) {
        var section_id = $(this).attr('id');
        if(section_id!==undefined){
            $('.current-menu-item, .current-menu-ancestor').removeClass('current-menu-item').removeClass('current-menu-ancestor');
            if(direction==='down'){
                var $menu_item = $('#main_menu a[href=#'+section_id+']').parent();
                if($menu_item.length>0){
                    $menu_item.addClass('current-menu-item');
                }
                else{
                    $('#main_menu .current_page_item').addClass('current-menu-item');
                }
            }
            else if(direction==='up'){
                var previous_section_id = $(this).prevAll('[id]:first').attr('id');
                var $menu_item = $('#main_menu a[href=#'+previous_section_id+']').parent();
                if($menu_item.length>0){
                    $menu_item.addClass('current-menu-item');
                }
                else{
                    $('#main_menu .current_page_item').addClass('current-menu-item');
                }
            }
        }
    },{
      offset: 100
    });



    var $main_slider = $('#ABdev_main_slider');
    $main_slider.height('auto');
    var $main_header = $('#ABdev_main_header');
    var $sticky_main_header = $('.sticky_main_header');
    var $switch_main_header = $('.switch_main_header');

    var $header_spacer = $('#ABdev_header_spacer');

    $('#ABdev_main_slider.ABdev_parallax_slider').height($(window).height());

    var header_height = $main_header.outerHeight();

    $header_spacer.height(header_height);
    // $header_spacer.height(header_height).hide();
    var admin_toolbar_height = parseInt($('html').css('marginTop'), 10);


    var $main_logo = $('#main_logo');
    var $inversed_logo = $('#inversed_logo');


    function header_switch(){
            if($(document).scrollTop() < $main_slider.height() && $(window).width()>979){
                if($(document).scrollTop() < $switch_main_header.height()){
                    $switch_main_header.addClass('transparent').removeClass('default').fadeIn();
                    $main_logo.hide();
                    $inversed_logo.show();
                }
                else{
                    $switch_main_header.fadeOut();
                }
            }
            else{
                $switch_main_header.removeClass('transparent').addClass('default').slideDown();
                $main_logo.show();
                $inversed_logo.hide();
            }
    }

    function sticky_header(){
                $(document).scroll(function(){
                    header_switch();
                    var scrollTop = parseInt($(document).scrollTop() ,10);
                    if(scrollTop>19 && $(window).width()>979){
                        $sticky_main_header.addClass('sticky_header_low');
                    }
                    else{
                        $sticky_main_header.removeClass('sticky_header_low');
                    }
                });
            }
        

        sticky_header();
        header_switch();


    $('.add_to_wishlist_on_grid').click(function(){
        var $shop_links = $('#shop_links');
        var $wishlist_no = $shop_links.find('.link_wishlist span');
        $wishlist_no.text(parseInt($wishlist_no.text())+1);
    });


    $('.add_to_cart_ajax').click(function(e){
        e.preventDefault();
        var $this = $(this);
        var product_id = $this.data('product_id');
        var added_title = $this.data('added_title');
        var $shop_links = $('#shop_links');
        var $cart_no = $shop_links.find('.link_cart span .items_count');
        var $cart_amount = $shop_links.find('.link_cart span .amount');
        var currentPrice = $this.parents('li.product').find('.price ins .amount , .price > .amount').text();
        var data = {
            action: 'ABdev_incomeup_add_to_cart_wishlist',
            product_id: product_id,
            add_to: 'cart'
        };
        $.post(ajaxurl, data, function(response) {
            $cart_no.text(parseInt($cart_no.text())+1);
            if(!$this.hasClass('in-cart')){
                $this.addClass('in-cart').tipsy("hide").attr("original-title",added_title).tipsy("show");
            }
        });
    });

    // Search toggle
    $('.search-icon').on('click', function(e) {
        e.preventDefault();
        var $that = $(this);
        var $wrapper = $('.search-box-wrapper');

        $that.toggleClass('active');
        $wrapper.slideToggle('300');

        if ($that.hasClass('active')) {
            $wrapper.find('input').focus();
        }
    } );

    try{
        $( "#slider-range" ).slider({
              range: true,
              min: 0,
              max: 500,
              values: [ 0, 500 ],
              slide: function( event, ui ) {
                $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
              }
            });
            $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
              " - $" + $( "#slider-range" ).slider( "values", 1 ) );


        $('.accordion-group').on('show', function() {
            $(this).find('i').removeClass('icon-plus').addClass('icon-minus');
        });
        $('.accordion-group').on('hide', function() {
            $(this).find('i').removeClass('icon-minus').addClass('icon-plus');
        });
    } catch(err) {
    }
try{
    $('.sp-wrap').smoothproducts();
    } catch(err) {
    }


    var sf, body;
    body = $('body');
    sf = $('#main_menu');
    if($('#ABdev_menu_toggle').css('display') === 'none') {
        // enable superfish when the page first loads if we're on desktop
        sf.superfish({
            delay:          300,
            animation:      {opacity:'show',height:'show'},
            animationOut:   {height:'hide'},
            speed:          'fast',
            speedOut:       'fast',            
            cssArrows:      false, 
            disableHI:      true /* load hoverIntent.js in header to use this option */,
            onBeforeShow:   function(){
                var ww = $(window).width();
                var locUL = this.parent().offset().left + this.width();
                var locsubUL = this.parent().offset().left + this.parent().width() + this.width();
                var par = this.parent();
                if(par.hasClass("menu-item-depth-0") && (locUL > ww)){
                    this.css('marginLeft', "-"+(locUL-ww+20)+"px");
                }
                else if (!par.hasClass("menu-item-depth-0") && (locsubUL > ww)){
                    this.css('left', "-"+(this.width())+"px"); 
                }
            }
        });
    }

    var $menu_responsive = $('#ABdev_main_header nav');
    $('#ABdev_menu_toggle').click(function(){
        $menu_responsive.animate({width:'toggle'},350);
    });


    $('.dnd-tabs-timeline').each(function(){
        var $this = $(this);
        var $tabs = $this.find('.dnd-tabs-ul > li');
        var tabsCount = $tabs.length;
        $tabs.addClass('tab_par_'+tabsCount);
    });


    $(".fancybox").fancybox({
        'transitionIn'      : 'elastic',
        'transitionOut'     : 'elastic',
        'titlePosition'     : 'over',
        'cyclic'            : true,
        'overlayShow'       : true,
        'titleFormat'       : function(title, currentArray, currentIndex) {
            return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
        }
    });
    

    $(".submit").click(function () {
        $(this).closest("form").submit();
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



    $('input, textarea').placeholder();

    
    var $content = $("#timeline_posts");
    var $loader = $("#timeline_loading");
    var itemSelector = ('.timeline_post');
    function Timeline_Classes(){ 
        $content.find(itemSelector).each(function(){
           var posLeft = $(this).css("left");
           if(posLeft == "0px"){
               $(this).removeClass('timeline_post_right').addClass('timeline_post_left');          
           }
           else{
               $(this).removeClass('timeline_post_left').addClass('timeline_post_right');
           } 
        });
    }
    $content.imagesLoaded( function() {
        $content.masonry({
          columnWidth: ".timeline_post_first",
          gutter: 100,
          itemSelector: itemSelector
        });
        Timeline_Classes();
        $loader.bind('inview', function(event, isInView) {
          if (isInView) {
            pageNumber++;
            load_posts();
          }
        });
    });
    var pageNumber = 1;
    var load_posts = function(){
            var url = $loader.data("ajaxurl") + '&pageNumber=' + pageNumber;
            var noPosts = $loader.data("noposts");
            $.ajax({
                type       : "GET",
                dataType   : "html",
                url        : url,
                beforeSend : function(){
                        $loader.addClass('timeline_loading_loader').html('');
                },
                success : function(data){
                    var $data = $(data);
                    if($data.length){
                            var $newElements = $data.css({ opacity: 0 });
                            $content.append( $newElements );
                        $content.imagesLoaded(function(){
                            $loader.removeClass('timeline_loading_loader');
                            $content.masonry( 'appended', $newElements, false );
                            $newElements.animate({ opacity: 1 });
                            Timeline_Classes();
                        }); 
                    } else {
                        $loader.removeClass('timeline_loading_loader').html(noPosts);
                    }
                },
                error : function(jqXHR, textStatus, errorThrown) {
                    $loader.html(jqXHR + " :: " + textStatus + " :: " + errorThrown);
                },
                complete : function(){
                    Timeline_Classes();
                }
        });
    };

    /* Counter */

    $('.dnd_countdown.simple_style').each(function() {
        var $this = $(this);
        var countDownString = $this.data("value"); 

        function update_countown_element($element,number){
            $element.html(number);
            var $span = $element.next('span');
            if(parseInt(number) == 1){
                $span.html($span.data("singular"));
            }
            else{
                $span.html($span.data("plural"));
            }
        }

        $this.find('.simple.countdown.year').countdown(countDownString).on('update.countdown', function(event){
            update_countown_element($(this),event.strftime('%Y'));
        });

        $this.find('.simple.countdown.month').countdown(countDownString).on('update.countdown', function(event){
            update_countown_element($(this),event.strftime('%m'));
        });

        $this.find('.simple.countdown.day').countdown(countDownString).on('update.countdown', function(event){
            update_countown_element($(this),event.strftime('%d'));
        });

        $this.find('.simple.countdown.hour').countdown(countDownString).on('update.countdown', function(event){
            update_countown_element($(this),event.strftime('%H'));
        });

        $this.find('.simple.countdown.minute').countdown(countDownString).on('update.countdown', function(event){
            update_countown_element($(this),event.strftime('%M'));
        });

        $this.find('.simple.countdown.second').countdown(countDownString).on('update.countdown', function(event){
            update_countown_element($(this),event.strftime('%S'));
        });
    });


    $('.dnd_countdown.flip_style').each(function() {
        var $this = $(this);
        var countDownString = $this.data("value"); 

        function zeroPad(num, places) {
          var zero = places - num.toString().length + 1;
          return Array(+(zero > 0 && zero)).join("0") + num;
        }

        function update_flip_countown_element($element,new_number,if_negative){
            var current_number = parseInt($element.find('.count.curr').html());
            if(current_number!=new_number && !$element.hasClass('in_a_flip')){
                var $span = $element.find('span');
                if(parseInt(new_number) == 1){
                    $span.html($span.data("singular"));
                }
                else{
                    $span.html($span.data("plural"));
                }
                setTimeout(function(){
                    $element.addClass('flip in_a_flip');
                },5);
                
                setTimeout(function(){
                    $element.find('.count.curr').html(zeroPad(new_number, 2));
                },510);
                
                setTimeout(function(){
                    $element.removeClass('flip in_a_flip');
                    new_number = (new_number-1 === -1) ? if_negative : new_number-1;
                    $element.find('.count.next').html(zeroPad(new_number, 2));
                },600);
                
            }
        }

        $this.find('.flip_element.year .count.curr.top').countdown(countDownString).on('update.countdown', function(event){
            update_flip_countown_element($(this).parent(),event.strftime('%Y'),0);
        });

        $this.find('.flip_element.month .count.curr.top').countdown(countDownString).on('update.countdown', function(event){
            update_flip_countown_element($(this).parent(),event.strftime('%m'),11);
        });

        $this.find('.flip_element.day .count.curr.top').countdown(countDownString).on('update.countdown', function(event){
            update_flip_countown_element($(this).parent(),event.strftime('%d'),30);
        });

        $this.find('.flip_element.hour .count.curr.top').countdown(countDownString).on('update.countdown', function(event){
            update_flip_countown_element($(this).parent(),event.strftime('%H'),23);
        });

        $this.find('.flip_element.minute .count.curr.top').countdown(countDownString).on('update.countdown', function(event){
            update_flip_countown_element($(this).parent(),event.strftime('%M'),59);
        });

        $this.find('.flip_element.second .count.curr.top').countdown(countDownString).on('update.countdown', function(event){
            update_flip_countown_element($(this).parent(),event.strftime('%S'),59);
        });

     });




  /*  isotope portfolio  */
    var sortBy = 'original-order';
    var columnWidth = '.portfolio_item';

    $('.ABdev_latest_portfolio').each(function(){
        var $current_portfolio = $(this);
        if( $current_portfolio.find('.portfolio_item').hasClass('portfolio_masonry_fullwidth')){
            sortBy = 'random';
            columnWidth = '.portfolio_item.small';
        }
        $current_portfolio.imagesLoaded( function() {
            $current_portfolio.isotope({
                layoutMode: 'masonry',
                masonry: {
                  columnWidth: columnWidth
                },
                itemSelector : '.portfolio_item',
                sortBy: sortBy
            });
        });
    });


    $('.portfolio_filter_button').click(function(){
        var $portfolio_filter_clicked_button = $(this);
        if ( $portfolio_filter_clicked_button.hasClass('selected') ) {
            return false;
        }
        var $portfolio_filter = $portfolio_filter_clicked_button.parents('.portfolio_filter');
        $portfolio_filter.find('.selected').removeClass('selected');
        $portfolio_filter_clicked_button.addClass('selected');
        var options = {},
            key = $portfolio_filter.attr('data-option-key'),
            value = $portfolio_filter_clicked_button.attr('data-option-value');
        value = value === 'false' ? false : value;
        options[ key ] = value;
        if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
            changeLayoutMode( $portfolio_filter_clicked_button, options );
        } else {
            $portfolio_filter.next('.ABdev_latest_portfolio').isotope( options );
        }
        return false;
    });
    


    /*Nivo Slider in Portfolio*/

    $(window).load(function() {
        $('#slider').nivoSlider({
            effect:'fade', // Specify sets like: 'fold,fade,sliceDown' 
            pauseTime:3000, // How long each slide will show
            directionNav:false, // Next & Prev navigation
            controlNavThumbs:true,
            controlNavThumbsFromRel:false,
            manualAdvance: false
        });

        /* carouFredSel */

    $('.ABp_latest_portfolio').each(function (){
        var $prev = $(this).find('.portfolio_prev');
        var $next = $(this).find('.portfolio_next');
        $(this).find('ul').carouFredSel({
            prev: $prev,
            next: $next,
            auto: false,
            width: '100%',
            scroll: 1
        });
        
    });

    $('.dnd-carousel').each(function (){
        var $prev = $(this).find('.carousel_prev');
        var $next = $(this).find('.carousel_next');

        var $autoPlay = $(this).data("autoplay") == '0' ? false : true;
        var $items = $(this).data("items");
        var $effect = $(this).data("effect");
        var $easing = $(this).data("easing");
        var $duration = $(this).data("duration");

        $(this).find('ul').carouFredSel({
            prev: $prev,
            next: $next,
            width: '100%',
            play: true,
            auto: $autoPlay,
            scroll: {
                items: $items,
                fx: $effect,
                easing: $easing,
                duration: $duration
            }
        });
    });


    fill_empty_space($('.section_to_strech'));

    });


    $(window).resize(function() {

        Timeline_Classes();

        // sticky_header();
        
        $('.ABdev_latest_portfolio').isotope('layout');

        if($('#ABdev_menu_toggle').css('display') === 'none' && !sf.hasClass('sf-js-enabled')) {
            // you only want SuperFish to be re-enabled once (sf.hasClass)
            $menu_responsive.show();
            sf.superfish({
                delay:          300,
                animation:      {opacity:'show',height:'show'},
                animationOut:   {height:'hide'},
                speed:          'fast',
                speedOut:       'fast',            
                cssArrows:      false, 
                disableHI:      true /* load hoverIntent.js in header to use this option */,
                onBeforeShow:   function(){
                    var ww = $(window).width();
                    var locUL = this.parent().offset().left + this.width();
                    var locsubUL = this.parent().offset().left + this.parent().width() + this.width();
                    var par = this.parent();
                    if(par.hasClass("menu-item-depth-0") && (locUL > ww)){
                        this.css('marginLeft', "-"+(locUL-ww+20)+"px");
                    }
                    else if (!par.hasClass("menu-item-depth-0") && (locsubUL > ww)){
                        this.css('left', "-"+(this.width())+"px"); 
                    }
                }
            });
        } else if($('#ABdev_menu_toggle').css('display') != 'none' && sf.hasClass('sf-js-enabled')) {
            // smaller screen, disable SuperFish
            sf.superfish('destroy');
            $menu_responsive.hide();
        }


        fill_empty_space($('.section_to_strech'));
            sticky_header();
            $('#ABdev_header_spacer').height($('#coming_soon_header').outerHeight());

        sticky_header();
        header_switch();

    });


    function fill_empty_space($section_to_strech){
        var initial_height = $section_to_strech.data('height');
        if(initial_height !== undefined){
            $section_to_strech.height(initial_height);
        }
        else{
            $section_to_strech.data('height', $section_to_strech.height());
        }
        var empty_space = $(window).height() - $('body').height();
        if(empty_space>0){
            $section_to_strech.height($section_to_strech.height()+empty_space);
        }
    }


});


