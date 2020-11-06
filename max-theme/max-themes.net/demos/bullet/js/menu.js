
(function ($) {
    "use strict";
    $(document).ready(function(){
        var $menu = $('.nav-menu');
        $menu.find('ul.sub-menu > li').each(function(){
            var $submenu = $(this).find('>ul');
            if($submenu.length == 1){
                $(this).hover(function(){
                    if($submenu.offset().left + $submenu.width() > $(window).width()){
                        $submenu.addClass('back');
                    }else if($submenu.offset().left < 0){
                        $submenu.addClass('back');
                    }
                }, function(){
                    $submenu.removeClass('back');
                });
            }
        });
        /* Menu drop down*/
        $('.nav-menu li.menu-item-has-children >a').append('<span class="cs-menu-toggle"><i class="fa fa-angle-right"></i></span>');
        
        $('.cs-menu-toggle').click(function(e){
            e.preventDefault();
            if($(this).parent().next('.sub-menu').hasClass('submenu-open')){
                $(this).parent().parent().siblings().children('.sub-menu').removeClass('submenu-open');
                $(this).parent().next('.sub-menu').removeClass('submenu-open');
                $(this).children().removeClass('fa-angle-down').addClass('fa-angle-right');
            }else{
                $(this).parent().parent().siblings().children('.sub-menu').removeClass('submenu-open');
                $(this).parent().next('.sub-menu').addClass('submenu-open');
                $(this).parent().parent().siblings().find('i').each(function(){
                   if($(this).hasClass('fa-angle-down')){
                    $(this).removeClass('fa-angle-down').addClass('fa-angle-right');
                   } 
                })
                $(this).children().removeClass('fa-angle-right').addClass('fa-angle-down');
            }
            
        })

        /* Page Fixed Menu */
        $('.header-fixed-page').parents('body').addClass('remove-margin-top');
        $('#cshero-header.no-sticky').parents('body').addClass('remove-margin-top');
        $('#menu-mobile').click(function(){
            $('#header-navigation').slideToggle();
        })
    });

})(jQuery);