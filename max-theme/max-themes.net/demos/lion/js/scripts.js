jQuery(window).load(function() {
    "use strict";
    // One page
    jQuery('body.page-template-template-onepage-php ul#menu li,body.page-template-template-onepage-php nav#mobile-menu li').removeClass('current-menu-item').removeClass('current_page_item').removeClass('current-menu-ancestor').removeClass('sfHover');
    
    jQuery(window).resize();
});
jQuery(window).resize(function() {
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
    
    // Goto Link
    jQuery('a').on('click', function(e){
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
        var $menuParents   = $menuContainer.find('ul.sf-menu>li');
        var $menuWidget    = jQuery('.search-on-menu');
        var $scrollTop = jQuery(window).scrollTop();

        // START - One Page Home
        if ($scrollTop <= 50 && jQuery('body.page-template-template-onepage-php ul#menu a[href$=#one-page-home]').closest('li').hasClass('menu-item')) {
                jQuery('ul#menu li.tw-menu-active').removeClass('tw-menu-active');
                jQuery('ul#menu a[href$=#one-page-home]').closest('li').addClass('tw-menu-active');
        }
        // END   - One Page Home
        
        // START - Header resize        
        if(jQuery('body').hasClass('menu-fixed')) {
        
            var $bodyOffsetTop=jQuery('body').offset().top;
            var $addH=0;
            if(jQuery('#wpadminbar').attr('id')==='wpadminbar'){
                $addH-=jQuery('#wpadminbar').height();
            }
            if(jQuery('#slider.with-top-slider').hasClass('with-top-slider')){
                $addH+=jQuery('#slider.with-top-slider').height();
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
                    if($menuWidget.hasClass('search-on-menu')){
                        var $tmpMenuWidMar=((($menuPaddingSmall-10)*2+$menuParents.height())-$menuWidget.height())/2;
                        $menuWidget.stop().animate({paddingTop: $tmpMenuWidMar+'px',paddingBottom: $tmpMenuWidMar+'px'},300);
                    }
                    jQuery('header .tw-logo').stop().animate({height: ($headerheight-20)+'px',lineHeight: ($headerheight-20)+'px'},300);
                    if(defLogoH > 40) {
                        $oldH=jQuery('.tw-logo img').height();
                        $oldW=jQuery('.tw-logo img').width();
                        $newH=$oldH-10;
                        $newW=$newH*($oldW/$oldH);
                        jQuery('header .tw-logo img').stop().animate({height: $newH+'px',width: $newW+'px'},300);
                    }
                    $header.removeClass('header-large').addClass('header-small');
                    $header.siblings('.header-clone').css('height',$header.height()+'px').stop().animate({height: ($header.height()-20)+'px'},300);
                }
            } else {
                if($header.hasClass('header-small')){
                    $menuParents.stop().animate({paddingTop: $menuPaddingSmall+'px',paddingBottom: $menuPaddingSmall+'px'},300);
                    $menuWidget.stop().animate({paddingTop: $menuWidMargin+'px',paddingBottom: $menuWidMargin+'px'},300);
                    jQuery('header .tw-logo').stop().animate({height: $headerheight+'px',lineHeight: $headerheight+'px'},300);
                    if(defLogoH > 40) {
                        $oldH=jQuery('.tw-logo img').height();
                        $oldW=jQuery('.tw-logo img').width();
                        $newH=$oldH+10;
                        $newW=$newH*($oldW/$oldH);
                        jQuery('header .tw-logo img').stop().animate({height: $newH+'px',width: $newW+'px'},300);
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
    jQuery('#scrollUp, .divider-top').on('click', function() {
        jQuery("html, body").animate({scrollTop: 0}, 500);
        return false;
    });
    
    if (jQuery().parallax) {
        jQuery('.bg-parallax').each(function() {
            jQuery(this).parallax("50%", 0.2);
        });
    }
    
    //portfolio like
    jQuery('.likeit').on('click', function() {
        var $this = jQuery(this);
        if(!$this.hasClass('liked')){
            jQuery.post($this.data('ajaxurl'), {liked_pid: $this.data('pid')}).done(function(response) {
                if(jQuery(response).find('.likeit').hasClass('likeit')){
                    $this.addClass('liked').html(jQuery(response).find('.likeit').html());
                }
            });
        }
    });
    
    //facebook
    $('.facebook-share > a').on('click', function(e){e.preventDefault();
        window.open( 'https://www.facebook.com/sharer/sharer.php?u='+jQuery(this).attr('href'), "facebookWindow", "height=380,width=660,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0" );
        return false;
    });
    
    //twitter
    $('.twitter-share > a').on('click', function(e){e.preventDefault();
        window.open( 'http://twitter.com/intent/tweet?text='+$(this).data('title') +' '+jQuery(this).attr('href'), "twitterWindow", "height=380,width=660,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0" ); 
        return false;
    });
    
    //pinterest
    $('.pinterest-share > a').on('click', function(e){e.preventDefault();
        window.open( 'http://pinterest.com/pin/create/button/?url='+jQuery(this).attr('href')+'&media='+$(this).closest('article').find('img').first().attr('src')+'&description='+$('.section-title h1').text(), "pinterestWindow", "height=640,width=660,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0" ); 
        return false;
    });
    
    
    //google
    $('.googleplus-share > a').on('click', function(e){e.preventDefault();
        window.open( 'https://plus.google.com/share?url={'+jQuery(this).attr('href')+'}', "googleWindow", "height=640,width=660,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0" );
        return false;
    });
    //Post Share
    jQuery('.waves-sharebox a').on('click', function(){
        var $this = jQuery(this);
        jQuery.post(waves_script_data.home_uri, {shared_pid: $this.closest('.waves-sharebox').data('pid')}).done(function(response) {
            if(jQuery(response).find('.share-btn').hasClass('share-btn')){
                $this.closest('.waves-sharebox').siblings('.share-btn').html(jQuery(response).find('.share-btn').html());
            }
        });
    });
});

/* mobile navigation */
/* ------------------------------------------------------------------- */
function mobNav(){
    "use strict";
    jQuery('#waves-loader').remove();
    /* mobile navigation */
    jQuery('.show-mobile-menu').on('click', function(e){e.preventDefault();
        
        jQuery('#mobile-menu').css('top',jQuery('header').height()+'px').slideToggle('fast').promise().done(function() {
//            jQuery('#mobile-menu li').css('width', '100%').css('width', '');
        });
    });
    jQuery('#mobile-menu ul.sub-menu').each(function() {
        var $parentMenu = jQuery(this).parent('li');
        $parentMenu.addClass('has-children').prepend('<div class="action-expand"><span class="opened">-</span><span class="closed">+</span></div>');
        $parentMenu.children('.action-expand').on('click', function(e){e.preventDefault();
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