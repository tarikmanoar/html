// Resize
jQuery(window).resize(function(){
    "use strict";
    resizeFullElement();
    // waves-map-contact
    jQuery('.waves-map').not(".styled").each(function(){
        jQuery(this).height(jQuery(this).children('.map').find('iframe').height());
    });

    // Compare Sidebar Height
    var $wavesMain    = jQuery('.waves-main');
    var $wavesSidebar = jQuery('.waves-sidebar');
    $wavesSidebar.parent().css('height','');
    if(jQuery(window).width()>=975 && $wavesMain.height()<$wavesSidebar.height()){
        $wavesSidebar.parent().height($wavesSidebar.height());
    }
    // ThemeWaves Redraw
    jQuery('.tw-redraw').each(function() {
        var $curr = jQuery(this);
        if (!$curr.hasClass('not-drawed')) {
            $curr.trigger('tw-animate');
        }
    });
    // Media Resize
    resizeMediaElement();
//    // Header Background
//    jQuery('.waves-title').each(function() {
//        var $title=jQuery(this);
//        var $text=$title.children('h3');
//        var $bg=$title.children('.title-bg');
//        var $wi=$title.width()-$text.width()-twItemRL($text);
//        if($title.closest('.tw-element').hasClass('center')){
//            $wi=$wi/2;
//            if($title.children('.title-bg').length===1){
//                $title.prepend($bg.clone());
//            }
//            $title.children('.title-bg').width($wi-2);
//        }else{
//            $bg.width($wi-3);
//        }
//    });
    // Mega Menu Resize
    try{
        var $megaHeader    =jQuery('#header>.container>.header');
        var $megaHeaderLeft=0;
        var $megaHeaderWidth=0;
        jQuery('.waves-mega-menu').each(function(){
            var $currMega=jQuery(this);
            var $currMegaWidth=0;
            var $liW=0;
            var $rem=0;
            var $currMegaLeft=0;
            var $colCnt  =parseInt($currMega.data('col').replace('column-', ''), 10);
            
            
            if(jQuery('body').hasClass('theme-boxed')){
                $megaHeaderLeft=jQuery('#theme-layout').offset().left;
                $megaHeaderWidth=jQuery('#theme-layout').width();
            }else{
                $megaHeaderLeft =$megaHeader.closest('.container').offset().left+parseInt($megaHeader.closest('.container').css('padding-left').replace('px', ''), 10);
                $megaHeaderWidth=$megaHeader.closest('.container').width();
            }
            $currMega.css({'display':'block','opacity':'0'});
            jQuery('>li',$currMega).each(function(){
                jQuery(this).css('width','');
                if(jQuery(this).width()>$liW){
                    $liW=jQuery(this).width();
                }
            }).promise().done(function(){
                $currMega.css('margin-left','0px').css('left','0px');
                $currMegaLeft=$currMega.offset().left;
                if($colCnt<=3){
                    $currMegaWidth=$liW*$colCnt;
                    $rem=($megaHeaderLeft+$megaHeaderWidth)-($currMegaLeft+$currMegaWidth);
                }else{
                    $currMegaWidth=$megaHeaderWidth;
                    $liW=$currMegaWidth/$colCnt;
                    $rem=$megaHeaderLeft-$currMegaLeft;
                }
                jQuery('>li',$currMega).width($liW);
                $currMega.width($currMegaWidth);
                
                if($rem<0){
                    $currMega.css('margin-left',$rem+'px');
                }else{
                    $currMega.css('margin-left','').css('left','');
                }
                
                $currMega.css({'display':'','opacity':'','visibility':''});
            });
        });
    }catch(err){}
    // bg video horizontal
    jQuery('.bg-video-container.bg-video-horizontal h2').each(function(){
        jQuery(this).css('margin-top','-'+parseInt((jQuery(this).height()/2),10)+'px');
    });
    //-------
    headerMTS();
});
jQuery(document).ready(function($){
    "use strict";
    // Header Widget Fix
    jQuery('.top-widget-title').each(function(){
        var $topWidCont=jQuery(this).siblings();
        if($topWidCont.text()===''&&$topWidCont.html()===''){
            $topWidCont.remove();
        }
    });
    // Animated Background Colors
    jQuery('.waves-team.style_4>.team-member').on('click', function(e){e.preventDefault();
        var $currTeam=jQuery(this); //jQuery(this).closest('.team-member');
        var $currTeamHiddenContent=$currTeam.find('.hidden-content'); //jQuery(this).closest('.team-member');
        var $currTabContainer=$currTeam.siblings('.team-tab-content');
        $currTabContainer.html($currTeamHiddenContent.html()).show();
        $currTeam.addClass('active').siblings('.team-member').removeClass('active');
        $currTeam.find('.team-tab-close').unbind('click').on('click',function(e){e.preventDefault();
            $currTeam.removeClass('active');
            $currTabContainer.hide();
            return false;
        });
    });
    // Animated Background Colors
    jQuery('.btn-border').hover(function(){
        var $bg = $(this).css('border-top-color');
            $(this) .css('color',$(this).hasClass('white-button')?'#000000':'#ffffff');
            $(this).css('background-color', $bg);
        },function(){
            var $color = jQuery(this).css('background-color');
            $(this).css('color', $color);
            $(this).css('background-color', 'transparent');
        }
    );
    $(".btn-flat").hover(
        function() {
            var $color = jQuery(this).css('border-top-color');
            $(this).css('color', $color);
            $(this).css('background-color', 'transparent');
        },
        function() {
            var $bg = $(this).css('border-top-color');
            $(this).css('background-color', $bg);
            $(this).css('color', '#fff');                
        }
    );
    $(".waves-heading i").each(function() {
        var $color = jQuery(this).closest('.row-container').css('background-color');
        if($color===''){
            $color='#ffffff';
        }
        try{
            if($color===''|| $color.replace(/ /gi,'')==='transparent'|| $color.replace(/ /gi,'')==='rgba(0,0,0,0)'){
                $color='#ffffff';
            }
        }catch(err){$color='#ffffff';}
        jQuery(this).css('background-color', $color);
    });
    
    // Accordion And Toggle
    $('.waves-accordion,.waves-toggle').each(function() {
        var $currAccCont = $(this);
        $('>.accordion-group>.accordion-heading>.accordion-toggle', $currAccCont).on('click', function(e) {
            e.preventDefault();
            var $currGroup = $(this).closest('.accordion-group');
            if ($currGroup.hasClass('active') && !$currGroup.hasClass('closing')) {
                $currGroup.removeClass('active').addClass('closing').children('.accordion-body').stop().slideUp("fast", function() {
                    $currGroup.removeClass('closing');
                });
            } else {
                $currGroup.removeClass('closing');
                $currGroup.addClass('active').children('.accordion-body').css({'display': 'none'}).stop().slideDown("fast");
                if ($currAccCont.hasClass('waves-accordion')) {
                    $currGroup.siblings('.accordion-group.active').addClass('closing').removeClass('active').children('.accordion-body').stop().slideUp("fast", function() {
                        $currGroup.removeClass('closing');
                    });
                }
            }
        });
    });

    // Tab
    $('.waves-tab').each(function() {
        var $currTabCont=$(this);
        $currTabCont.find(">li").each(function($i) {
            $(this).appendTo($(this).closest('.waves-tab').find('ul.nav-tabs'));
            if ($i === 0) {
                $(this).addClass('active');
            }
        });
        $currTabCont.find(".tab-pane").each(function($in) {
            jQuery(this).appendTo(jQuery(this).closest('.waves-tab').find('div.tab-content'));
            if ($in === 0) {
                $(this).addClass('active');
            }else{
                $(this).css('display','none');
            }
        });
        $('>ul>li',$currTabCont).each(function($i){
            var $currLi  = $(this);
            var $currCon = $('>.tab-content>.tab-pane',$currTabCont).eq($i);
            $currLi.on('click', function(e) {e.preventDefault();
                if($currLi.not('.active')){
                    $currLi.addClass('active').siblings('.active').removeClass('active');
                    $currCon.siblings('.active').fadeOut().removeClass('active');
                    $currCon.addClass('active').fadeIn();
                }                
            });
        });
        $currTabCont.removeClass('tab-init');
    });
    
    // ThemeWaves Animate General - Init
    jQuery('.tw-animate-gen').each(function() {
        var $curr = jQuery(this);
        var $currChild = $curr.children().eq(-1);
        if ($currChild.attr('id') === 'sidebar' || $currChild.hasClass('tw-pricing') || $currChild.hasClass('tw-our-team') || $currChild.hasClass('tw-blog')) {
            $currChild.children().addClass('tw-animate-gen').attr('data-animation', $curr.attr('data-animation')).attr('data-animation-delay', $curr.attr('data-animation-delay')).attr('data-animation-offset', $curr.attr('data-animation-offset')).css('opacity', '0');
            $curr.removeClass('tw-animate-gen').attr('data-animation', '').attr('data-animation-delay', '').attr('ddata-animation-offset', '').css('opacity', '');
        }
        if ($currChild.hasClass('carousel-anim')) {
            $currChild.find('ul.waves-carousel>li').css('opacity', '0');
            $curr.css('opacity', '');
        }
    });
    jQuery(window).resize();
});
jQuery(window).load(function() {
    "use strict";
    /* Google Map Style */
    jQuery('.waves-map.styled').each(function(i){
        var $currMap=jQuery(this);
        var $currMapStyle=$currMap.data('style');
        var $currMapMouse=$currMap.data('mouse');
        var $currMapLat=$currMap.data('lat');
        var $currMapLng=$currMap.data('lng');
        var $currMapZoom=$currMap.data('zoom');
        var $currMapAdministrativeColor=$currMap.data('administrativecolor');
        var $currMapLandscapeColor=$currMap.data('landscapecolor');
        var $currMapPoiColor=$currMap.data('poicolor');
        var $currMapRoadColor=$currMap.data('roadcolor');
        var $currMapTransitColor=$currMap.data('transitcolor');
        var $currMapWaterColor=$currMap.data('watercolor');
        var $currMapArea=$currMap.children('.map').attr('id','waves-map-styled-'+i);
        
        var $map;
        var $center = new google.maps.LatLng($currMapLat,$currMapLng);
        var MY_MAPTYPE_ID = 'custom_style_'+i;
        $map = new google.maps.Map(
            document.getElementById('waves-map-styled-'+i),
            {
                zoom: $currMapZoom,
                center: $center,
                mapTypeControlOptions:{
                    mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
                },
                mapTypeId: MY_MAPTYPE_ID
            }
        );
        $map.setOptions({scrollwheel:$currMapMouse});
        var $featureOpts = [];
        //administrative
        if($currMapAdministrativeColor){
            $featureOpts.push({
                featureType: 'administrative',
                elementType: "geometry",
                stylers: [
                    { color: $currMapAdministrativeColor }
                ]
            });
        }
        //landscape
        if($currMapLandscapeColor){
            $featureOpts.push({
                featureType: 'landscape',
                elementType: "geometry",
                stylers: [
                    { color: $currMapLandscapeColor}
                ]
            });
        }
        //poi
        if($currMapPoiColor){
            $featureOpts.push({
                featureType: 'poi',
                elementType: "geometry",
                stylers: [
                    { color: $currMapPoiColor}
                ]
            });
        }
        //road
        if($currMapRoadColor){
            $featureOpts.push({
                featureType: 'road',
                elementType: "geometry",
                stylers: [
                    { color: $currMapRoadColor}
                ]
            });
        }
        //transit
        if($currMapTransitColor){
            $featureOpts.push({
                featureType: 'transit',
                elementType: "geometry",
                stylers: [
                    { color: $currMapTransitColor}
                ]
            });
        }
        //water
        if($currMapWaterColor){
            $featureOpts.push({
                featureType: 'water',
                elementType: "geometry",
                stylers: [
                    { color: $currMapWaterColor}
                ]
            });
        }
        $map.mapTypes.set(MY_MAPTYPE_ID, new google.maps.StyledMapType($featureOpts,{name: $currMapStyle}));
        // markers
        $currMap.waypoint(function() {
            $currMapArea.siblings('.map-markers').children('.map-marker').each(function(j){
                var $currMar=jQuery(this);
                var $currMarTitle=$currMar.data('title');
                var $currMarLat=$currMar.data('lat');
                var $currMarLng=$currMar.data('lng');
                var $currMarIconSrc=$currMar.data('iconsrc');
                var $currMarIconWidth=$currMar.data('iconwidth');
                var $currMarIconHeight=$currMar.data('iconheight');

                var markerOp={
                    position: new google.maps.LatLng($currMarLat,$currMarLng),
                    map: $map,
                    title: $currMarTitle,
                    animation: google.maps.Animation.DROP,
                    zIndex: j
                };
                if($currMarIconSrc&&$currMarIconWidth&&$currMarIconHeight){
                    markerOp.icon={
                        url: $currMarIconSrc,
                        size: new google.maps.Size($currMarIconWidth, $currMarIconHeight),
                        origin: new google.maps.Point(0,0),
                        anchor: new google.maps.Point(parseInt($currMarIconWidth,10)/2,$currMarIconHeight)
                    };
                }
                setTimeout(function() {
                    var marker = new google.maps.Marker(markerOp);
                    var infowindow = new google.maps.InfoWindow({content: $currMar.html()});
                    google.maps.event.addListener(marker, 'click', function() {
                        if(infowindow.getMap()){
                            infowindow.close();
                        }else{
                            infowindow.open($map,marker);
                        }
                    });
                }, j * 300);
            });
        }, {triggerOnce: true, offset: 'bottom-in-view'});
    });
    //----------------------------Initial Functions-----------------------------------------------
    wavesReInit(jQuery('#theme-layout'));
    waves_carousel();
    jQuery('.waves-portfolio .overlay-container img').each(function(){
        if(!jQuery(this).closest('.waves-portfolio').hasClass('list_carousel')){
            twPortImgResize(jQuery(this));
        }
    });
    // ThemeWaves Animate Custom
    jQuery('.tw-animate').each(function() {
        var $curr = jQuery(this);
        var $currOffset = $curr.attr('data-animation-offset');
        if ($currOffset === '' || $currOffset === 'undefined' || $currOffset === undefined) {
            $currOffset = 'bottom-in-view';
        }
        if ($currOffset === 'none') {
            $curr.trigger('tw-animate');
        } else {
            $curr.waypoint(function() {
                $curr.trigger('tw-animate');
            }, {triggerOnce: true, offset: $currOffset});
        }
    });
    // ThemeWaves Animate General - Bind
    jQuery('.tw-animate-gen').each(function() {
        var $curr = jQuery(this);
        var $currChild = $curr.children().eq(-1);
        var $removeClass = true;
        if ($curr.data('animation') === 'pulse' || $curr.data('animation') === 'floating' || $curr.data('animation') === 'tossing') {
            $removeClass = false;
        }
        $curr.on('tw-animate', function() {
            var $currDelay = parseInt($curr.attr('data-animation-delay'), 10);
            if($currDelay<0){$currDelay=0;}
            setTimeout(function(){
                if ($currChild.hasClass('carousel-anim')) {
                    $currChild.find('ul.waves-carousel>li').each(function(i) {
                        var $currLi = jQuery(this);
                        setTimeout(function() {
                            $currLi.css('opacity', '');
                            $currLi.addClass('animated ' + $curr.data('animation'));
                            if ($removeClass) {
                                setTimeout(function() {
                                    $currLi.removeClass('animated');
                                    $currLi.removeClass($curr.data('animation'));
                                }, 3000);
                            }
                        }, 300 * i);
                    });
                } else {
                    $curr.css('opacity', '');
                    $curr.addClass('animated ' + $curr.data('animation'));
                    if ($removeClass) {
                        setTimeout(function() {
                            $curr.removeClass('animated');
                            $curr.removeClass($curr.data('animation'));
                        }, 3000);
                    }
                }
            },$currDelay);
        });
    });
    // ThemeWaves Animate General
    jQuery('.tw-animate-gen').each(function() {
        var $curr = jQuery(this);
        var $currOffset = $curr.attr('data-animation-offset');
        if ($currOffset === '' || $currOffset === 'undefined' || $currOffset === undefined) {
            $currOffset = 'bottom-in-view';
        }
        $curr.waypoint(function() {
            $curr.trigger('tw-animate');
        }, {triggerOnce: true, offset: $currOffset});
    });
    jQuery(window).resize();
    jQuery(window).scroll();
});
jQuery(window).scroll(function() {
    "use strict";
    //-------
    headerMTS();
});


function waves_carousel() {
    "use strict";
    jQuery('.list_carousel').each(function() {
        var $items = 1;
        var $singleItem = false;
        var $auto = false;
        var $navigation = true;
        var $pagination = false;
        var $duration = 1500;
        var $timeoutDuration = 300;
        var $currentCrsl = jQuery(this).children('div.waves-carousel');
        //artHoverAnimateCSS($currentCrsl.children('li'));
        if (jQuery(this).hasClass('waves-carousel-portfolio')) {
            $auto  = jQuery(this).data('autoplay');
            $items = parseInt(jQuery(this).data('items'),10);
        } else if (jQuery(this).hasClass('waves-carousel-partner')) {
            $navigation = false;
            $pagination = true;
            $auto  = jQuery(this).data('autoplay');
            if(jQuery(this).hasClass('style_2')){
                $items = 3;
            }else{
                $items = 5;
            }
        } else if (jQuery(this).hasClass('waves-carousel-post')) {
            $navigation = false;
            $pagination = true;
            $auto  = jQuery(this).data('autoplay');
            $items = parseInt(jQuery(this).data('items'),10);
        } else if (jQuery(this).hasClass('waves-carousel-twitter')) {
            $singleItem = true;
            $navigation = false;
            $pagination = true;
            $auto  = jQuery(this).data('autoplay');
            $duration           = parseInt(jQuery(this).attr('data-duration'),10);
            $timeoutDuration    = parseInt(jQuery(this).attr('data-timeout'), 10);
        } else if (jQuery(this).hasClass('waves-carousel-testimonial')) {
            $singleItem = true;
            $navigation = false;
            $pagination = true;
            $auto  = jQuery(this).data('autoplay');
            $duration           = parseInt(jQuery(this).attr('data-duration'),10);
            $timeoutDuration    = parseInt(jQuery(this).attr('data-timeout'), 10);
            if (jQuery(this).hasClass('waves-testimonials')){
                $singleItem = false;
                $items = parseInt(jQuery(this).data('items'),10);
            }
        } else if (jQuery(this).hasClass('waves-carousel-text')) {
            $navigation = false;
            $pagination = true;
            $auto  = jQuery(this).data('autoplay');
            $items = parseInt(jQuery(this).data('items'),10);
            $duration           = parseInt(jQuery(this).attr('data-duration'),10);
            $timeoutDuration    = parseInt(jQuery(this).attr('data-timeout'), 10);
        } else if (jQuery(this).hasClass('image-slider-element')) {
            $navigation = true;
            $pagination = false;
        }
        
        $currentCrsl.owlCarousel({
            items : $items,
            autoPlay: $auto,
            singleItem:$singleItem,
            slideSpeed:$duration,
            pagination:$pagination,
            paginationSpeed:$timeoutDuration,
            navigationText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
            autoHeight : false,
//            transitionStyle : 'fade',
//            lazyLoad : true,
            navigation : $navigation,
            afterAction : function(elem){
//              Waves Custom Auto Height
                var $max=0;
                var $visItems=this.owl.visibleItems;
                var n=$visItems.length;
                jQuery('>.owl-wrapper-outer>.owl-wrapper>.owl-item',elem).removeClass('owl-visible-first').removeClass('owl-visible').removeClass('owl-visible-last');
                for (var i = 0; i < n; i++) {
                    var $curr=jQuery('>.owl-wrapper-outer>.owl-wrapper>.owl-item',elem).eq($visItems[i]).addClass('owl-visible');
                    if($curr.height()>$max){$max=$curr.height();}
                    if(i===0){$curr.addClass('owl-visible-first');}
                    if((i+1)===n){$curr.addClass('owl-visible-last');}
                }
                jQuery('>.owl-wrapper-outer',elem).animate({height:$max},500);
            },
            afterInit : function(elem){
                if(elem.closest('.waves-carousel-testimonial').hasClass('style_2')){
                    elem.children('.owl-wrapper-outer').append(elem.children('.owl-controls'));
                }
            }
        });
    });
}

/* Item Right Left Width */
/* ------------------------------------------------------------------- */
function wavesReInit($selector){
    "use strict";
    // Grid Blog Share
    jQuery(".blog-grid .sharebox-container",$selector).each(function(){
        var $curr = jQuery(this);
        var $currBtn = $curr.children('i');
        var $currShareBox = $curr.children('.tw_post_sharebox');
        if($currBtn.hasClass('fa')){
            $currBtn.unbind('click').on('click',function(e){e.preventDefault();
                if($curr.hasClass('active')){
                    $curr.removeClass('active');
                    $curr.stop().animate({width:$currBtn.width()+'px'},800);
                }else{
                    $curr.addClass('active');
                    $curr.stop().animate({width:($currBtn.width()+$currShareBox.width())+'px'},800);
                }
            });
        }
    });
    // PrettyPhoto
    jQuery("a[data-gal^='prettyPhoto']",$selector).prettyPhoto({
        deeplinking: false
    });
    // Milestones
    jQuery('.tw-milestones-box',$selector).each(function() {
        var $curr = jQuery(this);
        var $delay = 1000;
        if($curr.attr('data-animation-delay')!==''){
            $delay += parseInt($curr.attr('data-animation-delay'), 10);
        }
        $curr.on('tw-animate', function() {
            jQuery('>.tw-milestones-content>.tw-milestones-count>.tw-milestones-show>ul', $curr).each(function() {
                jQuery(this).css('bottom', '-' + jQuery(this).height() + 'px');
            });
            setTimeout(function() {
                jQuery('>.tw-milestones-content>.tw-milestones-count>.tw-milestones-show>ul', $curr).each(function() {
                    jQuery(this).animate({bottom: '5px'}, 800).animate({bottom: '0px'}, 'slow');
                });
            }, $delay);
        });
    });
    // jPlayer
    if (jQuery().jPlayer||jQuery().jPlayer!==undefined||jQuery().jPlayer!=='undefined') {
        jQuery('.jp-jplayer-audio',$selector).each(function() {
            jQuery(this).jPlayer({
                ready: function() {
                    jQuery(this).jPlayer("setMedia", {
                        mp3: jQuery(this).data('mp3')
                    });
                },
                swfPath: "",
                cssSelectorAncestor: "#jp_interface_" + jQuery(this).data('pid'),
                supplied: "mp3, all"
            });
        });

        jQuery('.jp-jplayer-video',$selector).each(function(i) {
            jQuery(this).attr('id',"jquery_jplayer_" + i).attr('data-pid',i).siblings('.jp-video-container').find('.jp-interface').attr('id',"jp_interface_" + i);
            jQuery(this).jPlayer({
                ready: function() {
                    jQuery(this).jPlayer("setMedia", {
                        m4v: jQuery(this).data('m4v'),
                        poster: jQuery(this).data('thumb')
                    });
                },
                play: function() {jQuery(this).jPlayer("pauseOthers", 0);},
                size: {
                    width: '100%',
                    height: 'auto'
                },
                swfPath: "",
                cssSelectorAncestor: "#jp_interface_" + i,
                supplied: "m4v, all"
            });
        });
        jQuery('.jp-jplayer-bgvideo',$selector).each(function() {
            var $bgPlayer=jQuery(this);
            var $bgPauseBtn=$bgPlayer.closest('.row-container');
            var $bgPlayBtn =$bgPauseBtn.children('.container').find('.bg-video-play').hasClass('bg-video-play')?$bgPlayer.closest('.row-container').children('.container').find('.bg-video-play'):false;
            $bgPlayer.jPlayer({
                ready: function() {
                    $bgPlayer.jPlayer("setMedia", {
                        m4v: $bgPlayer.data('m4v'),
                        poster: $bgPlayer.data('thumb')
                    });
                    if($bgPlayBtn===false){
                        $bgPlayer.jPlayer("play");
                    }
                },
                size: {
                    width: '100%',
                    height: 'auto'
                },
                muted: true,
                loop: true,
                swfPath: "",
                cssSelectorAncestor: "#jp_interface_" + $bgPlayer.data('pid'),
                supplied: "m4v, all"
            });
            if($bgPlayBtn){
                if($bgPlayBtn.data('pattern')){
                    $bgPlayer.closest('.background-video').siblings('.video-mask').css('background-image','url('+$bgPlayBtn.data('pattern')+')');
                }
                if($bgPlayBtn.data('size')){
                    $bgPlayer.closest('.background-video').siblings('.video-mask').css('background-size',$bgPlayBtn.data('size'));
                }
                if($bgPlayBtn.data('color')){
                    $bgPlayer.closest('.background-video').siblings('.video-mask-color').css('background-color',$bgPlayBtn.data('color'));
                }
                if($bgPlayBtn.data('opacity')){
                    $bgPlayer.closest('.background-video').siblings('.video-mask').css('opacity','0.'+$bgPlayBtn.data('opacity')).siblings('.video-mask-color').css('opacity','0.'+$bgPlayBtn.data('opacity'));
                }
                $bgPlayBtn.unbind('click').on('click',function(){
                    if($bgPauseBtn.hasClass('paused')){
                        $bgPlayer.jPlayer("play");
                        $bgPauseBtn.removeClass('paused').css({height:$bgPauseBtn.height()+'px',cursor: 'pointer'}).children('.container').fadeOut();
                        return false;
                    }
                });
                $bgPauseBtn.unbind('click').on('click',function(){
                    if(!$bgPauseBtn.hasClass('paused')){
                        $bgPlayer.jPlayer("pause");
                        $bgPauseBtn.addClass("paused").css({height:'',cursor: ''}).children('.container').fadeIn();
                    }
                });
                $bgPauseBtn.on('click');
            }
        });
    }
    // Video Responsive
    jQuery('#main iframe').each(function(){
        if(!jQuery(this).closest('.ls-slide').hasClass('ls-slide')&&!jQuery(this).hasClass('fluidvids-elem')){
            jQuery(this).addClass('makeFluid');
        }
    });
    Fluidvids.init({
        selector: '#main iframe.makeFluid',
        players: ['www.youtube.com', 'player.vimeo.com']
    });
    jQuery('#main iframe').removeClass('makeFluid');
}

/* Item Top Bottom Height */
/* ------------------------------------------------------------------- */
function twItemTB($item) {
    "use strict";
    $item = jQuery($item);
    var $itemMarginTB = parseInt($item.css('margin-top').replace('px', ''), 10) + parseInt($item.css('margin-bottom').replace('px', ''), 10);
    var $itemPaddingTB = parseInt($item.css('padding-top').replace('px', ''), 10) + parseInt($item.css('padding-bottom').replace('px', ''), 10);
    var $itemBorderTB  = parseInt($item.css('border-top-width').replace('px',''),10) + parseInt($item.css('border-bottom-width').replace('px',''),10);
    var $itemTB = $itemMarginTB + $itemPaddingTB + $itemBorderTB;
    return $itemTB;
}
/* Item Right Left Width */
/* ------------------------------------------------------------------- */
function twItemRL($item) {
    "use strict";
    $item = jQuery($item);
    var $itemMarginRL  = parseInt($item.css('margin-left').replace('px', '')      ,10) + parseInt($item.css('margin-right').replace('px', '')      ,10);
    var $itemPaddingRL = parseInt($item.css('padding-left').replace('px', '')     ,10) + parseInt($item.css('padding-right').replace('px', '')     ,10);
    var $itemBorderRL  = parseInt($item.css('border-left-width').replace('px', ''),10) + parseInt($item.css('border-right-width').replace('px', ''),10);
    var $itemRL = $itemMarginRL + $itemPaddingRL + $itemBorderRL;
    return $itemRL;
}
/* Full Element Resize */
/* ------------------------------------------------------------------- */
function resizeFullElement(){
    "use strict";
    jQuery('.waves-full-element').each(function(){
        var $currentWavesFullElement=jQuery(this);
        var $w=jQuery(window).width();
        if(jQuery('body').hasClass('theme-full') || (1183<=$w && $w<=1242) || $w<=974){
            $currentWavesFullElement.css('margin-left','0px').css('margin-right','0px').css('padding-left','0px').css('padding-right','0px').css('width','');
            var $currLayoutWidth = jQuery(window).width();
            var $marginLeft=$currentWavesFullElement.offset().left*-1;
            
            if(jQuery('body').hasClass('header-left')||jQuery('body').hasClass('header-right')){
                $currLayoutWidth=jQuery('body').width();
                if(jQuery('body').hasClass('header-left')){
                    $marginLeft=($currentWavesFullElement.offset().left-jQuery('body').offset().left)*-1;
                }
            }
            $currentWavesFullElement.css('margin-left',$marginLeft+'px');
            $currentWavesFullElement.css('width',($currLayoutWidth-1)+'px');
        }else{
            $currentWavesFullElement.css('margin-left','').css('margin-right','').css('padding-left','').css('padding-right','').css('width','');
        }
    });
}
/* Media Resize */
/* ------------------------------------------------------------------- */
function resizeMediaElement() {
    "use strict";
    // Twitter Post Resize
    jQuery('iframe.twitter-tweet.twitter-tweet-rendered').each(function() {setTimeout(function(){try{jQuery(this).height(jQuery(this).contents().find('html').height());}catch(err){}},1000);});
    // jPlayer Resize
    jQuery('.jp-audio-container, .jp-video-container').each(function() {
        jQuery(this).find('.jp-progress-container').width((jQuery(this).width() - 149 < 0) ? 0 : (jQuery(this).width() - 149));
        jQuery(this).find('.jp-progress').width((jQuery(this).width() - 152 < 0) ? 0 : (jQuery(this).width() - 152));
    });
    // Isotope
    jQuery('.isotope .entry-media.image-slide-container').each(function(){
        var $curr=jQuery(this);
        var $maxH=1000;
        $curr.find('.image-item').each(function(){
           jQuery(this).width($curr.width());
           if($maxH>jQuery(this).height()){$maxH=jQuery(this).height();}
        });
        $curr.css('max-height',$maxH+'px');
    });
}
/* Header Mobile Top Space */
/* ------------------------------------------------------------------- */
function headerMTS(){
    "use strict";
    if(jQuery('body').hasClass('admin-bar')){
        if(jQuery('#wpadminbar').css('position')==='absolute'&&jQuery(window).scrollTop()>30){
            jQuery('header').css('top','0px');
        }else{
            jQuery('header').css('top','');
        }
    }
}
/* WC Widget Title */
/* ------------------------------------------------------------------- */
function wcWidgetTitle() {
    "use strict";
    jQuery('.widget_shopping_cart_content').each(function() {
        if (jQuery(this).find('.total>.amount').hasClass('amount')) {
            var $total = 0;
            jQuery(this).find('ul>li>.quantity').each(function() {
                var $cln = jQuery(this).clone();
                $cln.find('.amount').remove();
                $total += parseInt($cln.text().replace(' × ', ''), 10);
            });
            jQuery(this).siblings('.top-widget-title').find('span.count-cart').remove();
            jQuery(this).siblings('.top-widget-title').html('<span class="count-cart">'+$total+'</span>');
        }
    });
    jQuery('.loading-cart').removeClass('loading-cart');
}