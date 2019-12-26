;(function($){
    'use strict';
    $.fn.smoothScroll = function(setting) {
        var _default = {
                duration: 1000,
                easing: 'swing',
                offset: 0
            },
            _setting = $.extend(_default, setting),
            _handler = function() {
                var dest = 0,
                    target = this.hash,
                    $target = $(target);

                $(this).on('click', function(e){
                    e.preventDefault();
                    if ($target.offset().top > ($(document).height() - $(window).height())) {
                        dest = $(document).height() - $(window).height();
                    } else {
                        dest = $target.offset().top - _setting.offset;
                    }
                    $('html, body').animate({
                        scrollTop: dest
                    }, _setting.duration, _setting.easing);
                });
            };
        return this.each(_handler);
    };
})(jQuery);