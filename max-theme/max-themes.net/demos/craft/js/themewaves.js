jQuery(window).load(function() {
    "use strict";
    // One page
    jQuery('body.page-template-template-onepage-php ul#menu li,body.page-template-template-onepage-php nav#mobile-menu li').removeClass('current-menu-item').removeClass('current_page_item').removeClass('current-menu-ancestor').removeClass('sfHover');
    
    jQuery(window).resize();
});
jQuery(window).resize(function($) {
    "use strict";
    if(jQuery('.fixed-footer').hasClass('fixed-footer')){
        var $f_height = jQuery('.fixed-footer').height();
        var $f_bottom = parseInt(jQuery('body').css('margin-bottom').replace('px', '')      ,10);
        $f_height += $f_bottom;
        if(jQuery(window).width() > 800 && (jQuery(window).height()-100) > $f_height) {
            jQuery('.fixed-footer').css('position', '');
            if($f_bottom > 0) {
                jQuery('.fixed-footer').css('margin-bottom', $f_bottom);
            }
            if($f_height > 0) {
                jQuery('#main').css('margin-bottom', $f_height);
            }
        }else {
            jQuery('#main').css('margin-bottom', '');
            jQuery('.fixed-footer').css('position', 'static');
        }
    }
});
jQuery(document).ready(function($) {
    "use strict";
    if(waves_script_data.pageloader==='1'){
        try{
            Pace.on('hide', function(){
                jQuery('body').removeClass('loading');
                jQuery('body>.pace').remove();
                jQuery(window).resize();
            });
        }catch(err){}
    }
    mobNav();
    var defLogoH=jQuery('.tw-logo img').height();
    
    // One Page 
    jQuery('body.page-template-template-onepage-php a').click(function(e){
        if($(this).attr('href')){
            //get current
            var targetSection = $(this).attr('href').split("#")[1];
            if (targetSection || targetSection !== '') {
                targetSection = '#' + targetSection;
                if ($(targetSection).attr('id') !== '' && $(targetSection).attr('id') !== 'undefined' && $(targetSection).attr('id') !== undefined) {
                    e.preventDefault();
                    //get pos of target section
                    var targetOffset = $(targetSection).offset().top;
                    
                    if(jQuery('body').hasClass('menu-fixed')){
                        targetOffset-=$('#header').height();
                    }
                    if(jQuery('body').hasClass('admin-bar')){
                        targetOffset-=jQuery('#wpadminbar').height();
                    }
                    
                    //scroll			 
                    $('html,body').animate({scrollTop: targetOffset}, 1000);
                }
            }
        }
    });



    /*nav handling
     -------------------*/
    $(function() {
    "use strict";
        jQuery('.page-template-template-onepage-php .row-container').waypoint({
            handler: function(direction) {
                var activeSection = jQuery(this);

                if (direction === "up") {
                    activeSection = activeSection.prev();
                }

                var activeMenuLink = jQuery('ul#menu a[href$=#' + activeSection.attr('id') + ']');
                if(activeMenuLink.html()) {
                    jQuery('ul#menu a').parent('li').removeClass('tw-menu-active');
                    activeMenuLink.parent('li').addClass('tw-menu-active');
                }
                // One Page - Mobile Menu
//                if (!jQuery('html').hasClass('mm-opened')) {
//                    jQuery('nav#mobile-menu a').parent('li').removeClass('mm-selected');
//                    jQuery('nav#mobile-menu a[href$=#' + activeSection.attr('id') + ']').parent('li').addClass('mm-selected');
//                }
            },
            offset: $('#header').height()	//when it should switch on consecutive page
        });
    });
    
    /* navigation */
    $('ul#menu').superfish({
        delay: 200,
        animation: {
            opacity: 'show',
            height: 'show'
        },
        speed: 'fast',
        autoArrows: false,
        dropShadows: false
    });
    
    jQuery(window).scroll(function() {
        var $header = jQuery('#header');
        var $menuContainer = jQuery('#header nav.menu-container');
        var $menuParents   = $menuContainer.find('ul.sf-menu>li>a');
        var $menuWidget    = jQuery('.tw-menu-widget');
        var $scrollTop = jQuery(window).scrollTop();

        // START - One Page Home
        if ($scrollTop <= 50 && jQuery('body.page-template-template-onepage-php ul#menu a[href$=#one-page-home]').closest('li').hasClass('menu-item')) {
                jQuery('ul#menu li.tw-menu-active').removeClass('tw-menu-active');
                jQuery('ul#menu a[href$=#one-page-home]').closest('li').addClass('tw-menu-active');
                // One Page - Mobile Menu
//                if (!jQuery('html').hasClass('mm-opened')) {
//                    jQuery('nav#mobile-menu li.mm-selected').removeClass('mm-selected');
//                    jQuery('nav#mobile-menu a[href$=#one-page-home]').closest('li').addClass('mm-selected');
//                }
        }
        // END   - One Page Home
        
        // START - Header resize        
        if(jQuery('body').hasClass('menu-fixed')) {
        
            var $bodyOffsetTop=jQuery('body').offset().top;
            var $addH=0;
            if(jQuery('.tw-top-bar').hasClass('tw-top-bar')){
                $addH+=jQuery('.tw-top-bar').height();
            }
            if(jQuery('#wpadminbar').attr('id')==='wpadminbar'){
                $addH-=jQuery('#wpadminbar').height();
            }

            var $menuPaddingSmall = waves_script_data.menu_padding;
            var $menuWidMargin = waves_script_data.menu_wid_margin;
            var $headerheight = waves_script_data.header_height;
            var $oldH=0;
            var $oldW=0;
            var $newH=0;
            var $newW=0;
            if ($bodyOffsetTop+$addH < $scrollTop) {
                if($header.hasClass('header-large')){
                    $menuParents.stop().animate({paddingTop: ($menuPaddingSmall-10)+'px',paddingBottom: ($menuPaddingSmall-10)+'px'},300);
                    if($menuWidget.hasClass('tw-menu-widget')){
                        var $tmpMenuWidMar=((($menuPaddingSmall-10)*2+$menuParents.height())-$menuWidget.height())/2;
                        $menuWidget.stop().animate({marginTop: $tmpMenuWidMar+'px',marginBottom: $tmpMenuWidMar+'px'},300);
                    }
                    jQuery('.tw-logo').stop().animate({height: ($headerheight-20)+'px',lineHeight: ($headerheight-20)+'px'},300);
                    if(defLogoH > 40) {
                        $oldH=jQuery('.tw-logo img').height();
                        $oldW=jQuery('.tw-logo img').width();
                        $newH=$oldH-10;
                        $newW=$newH*($oldW/$oldH);
                        jQuery('.tw-logo img').stop().animate({height: $newH+'px',width: $newW+'px'},300);
                    }
                    $header.removeClass('header-large').addClass('header-small');
                    $header.siblings('.header-clone').css('height',$header.height()+'px').stop().animate({height: ($header.height()-20)+'px'},300);
                }
            } else {
                if($header.hasClass('header-small')){
                    $menuParents.stop().animate({paddingTop: $menuPaddingSmall+'px',paddingBottom: $menuPaddingSmall+'px'},300);
                    $menuWidget.stop().animate({marginTop: $menuWidMargin+'px',marginBottom: $menuWidMargin+'px'},300);
                    jQuery('.tw-logo').stop().animate({height: $headerheight+'px',lineHeight: $headerheight+'px'},300);
                    if(defLogoH > 40) {
                        $oldH=jQuery('.tw-logo img').height();
                        $oldW=jQuery('.tw-logo img').width();
                        $newH=$oldH+10;
                        $newW=$newH*($oldW/$oldH);
                        jQuery('.tw-logo img').stop().animate({height: $newH+'px',width: $newW+'px'},300);
                    }
                    $header.removeClass('header-small').addClass('header-large');
                    $header.siblings('.header-clone').css('height','').stop();
                }
            }
        }
        // END   - Header resize
        
        if (jQuery(this).scrollTop() > $header.height()) {
            jQuery('#scrollUp').fadeIn();
        } else {
            jQuery('#scrollUp').fadeOut();
        }
        // Single Portfolio Half, Full
        jQuery('.single-portfolio-half .col-md-3,.single-portfolio-full .col-md-3').each(function() {
            var $currContainer = jQuery(this);
            var $currFetContainer = $currContainer.siblings('.col-md-9');
            $currContainer.removeClass('pos-bottom').removeClass('pos-top').css('left', '').css('width','');
            var $currOffsetTop = $currContainer.offset().top;
            var $currOffsetLeft = $currContainer.offset().left - parseInt($currContainer.css('margin-left'), 10);
            var $currHeight = $currContainer.height();
            var $currWidth  = $currContainer.width()+twItemRL($currContainer);
            if ($currFetContainer.height() > $currHeight && (($currOffsetTop + $currHeight) <= (jQuery(window).scrollTop() + jQuery(window).height()))) {
                $currContainer.addClass('pos-top').css('left', $currOffsetLeft + 'px').css('width', $currWidth + 'px');
                $currOffsetTop = $currContainer.offset().top;
                $currHeight = $currContainer.height();
                var $currFetOffsetTop = $currFetContainer.offset().top;
                var $currFetHeight = $currFetContainer.height();
                if ($currFetOffsetTop + $currFetHeight < $currOffsetTop + $currHeight) {
                    $currContainer.removeClass('pos-top').css('left', '').css('width', '').addClass('pos-bottom');
                } else if ($currOffsetTop < $currFetOffsetTop) {
                    $currContainer.removeClass('pos-bottom').css('left', '').css('width', '').removeClass('pos-top');
                }
            }
        });
    });
    jQuery(window).scroll();
    jQuery('#scrollUp, .divider-top').click(function() {
        jQuery("html, body").animate({scrollTop: 0}, 500);
        return false;
    });
    
    if (jQuery().parallax) {
        jQuery('.bg-parallax').each(function() {
            jQuery(this).parallax("50%", 0.2);
        });
    }
    
    //portfolio like
    jQuery('.likeit').live('click', function() {
        var $this = jQuery(this);
        jQuery.post($this.data('ajaxurl'), {liked_pid: $this.data('pid')})
                .done(function(response) {
            var $aa = jQuery(response).find('#post_liked');
            if ($aa.attr('id') == 'post_liked') {
                $this.addClass('liked');
                var $val = $aa.text();
                $this.find('span').text($val);
            }
        });
    });
    
    //facebook
    function facebookShare(){
            window.open( 'https://www.facebook.com/sharer/sharer.php?u='+window.location, "facebookWindow", "height=380,width=660,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0" ); 
            return false;
    }
    $('.facebook-share > a').click(facebookShare);
    
    //twitter
    function twitterShare(){
            window.open( 'http://twitter.com/intent/tweet?text='+$(this).data('title') +' '+window.location, "twitterWindow", "height=380,width=660,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0" ); 
            return false;
    }
    $('.twitter-share > a').click(twitterShare);
    
    //pinterest
    function pinterestShare(){
            window.open( 'http://pinterest.com/pin/create/button/?url='+window.location+'&media='+$('#post-area img').first().attr('src')+'&description='+$('.section-title h1').text(), "pinterestWindow", "height=640,width=660,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0" ); 
            return false;
    }
    $('.pinterest-share > a').click(pinterestShare);
    
    
    //google
    
    function googleShare(e){e.preventDefault();
        window.open( 'https://plus.google.com/share?url={'+window.location+'}', "googleWindow", "height=640,width=660,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0" ); 
    }
    $('.googleplus-share > a').click(googleShare);
   
    //Top Widget Search
    $('.tw-top-widget .button-search,.tw-menu-widget .button-search').click(function() {
        $(this).closest('.input').toggleClass('opened');
    });
    
    //Add to Cart Loader
    $('.tw_product_container>.tw_cart_buttons>.add_to_cart_button').click(function() {
        jQuery(this).closest('.tw_cart_buttons').siblings('a').addClass('loading-cart');
    });

    //Cart On Menu
    $('.tw-top-widget[id^="woocommerce_widget_cart"],.tw-menu-widget[id^="woocommerce_widget_cart"]').hover(function() {
        $(this).children('.widget_shopping_cart_content').addClass('opened').stop().fadeIn('fast');
    }, function() {
        $(this).children('.widget_shopping_cart_content').removeClass('opened').stop().fadeOut('fast');
    });
         
    setTimeout(function() {
        wcWidgetTitle();
    }, 1);
    setTimeout(function() {
        wcWidgetTitle();
    }, 500); 
   jQuery(document).ajaxComplete(function() {
        wcWidgetTitle();
    });
});

/* mobile navigation */
/* ------------------------------------------------------------------- */
function mobNav(){
    jQuery('#waves-loader').remove();
    /* mobile navigation */
    jQuery('.show-mobile-menu').click(function(e){e.preventDefault();
        jQuery('#mobile-menu').slideToggle('fast').promise().done(function() {
//            jQuery('#mobile-menu li').css('width', '100%').css('width', '');
        });
    });
    jQuery('#mobile-menu ul.sub-menu').each(function() {
        var $parentMenu = jQuery(this).parent('li');
        $parentMenu.addClass('has-children').prepend('<div class="action-expand"><span class="opened">-</span><span class="closed">+</span></div>');
        $parentMenu.children('.action-expand').click(function(e){e.preventDefault();
            var $this = jQuery(this).closest('.has-children');
            $this.siblings('li.menu-open').removeClass('menu-open').children('.sub-menu').slideUp('fast');
            $this.toggleClass('menu-open');
            if ($this.hasClass('menu-open')) {
                $this.children('.sub-menu').slideDown('fast');
            } else {
                $this.children('.sub-menu').slideUp('fast');
            }
            return false;
        });
    });
}