(function($){

    $('.stripe-video-wrap').each(function () {
        var $this=$(this);

        if($('.exp-videobg-control-btn',$this).length > 0){
            console.log('ok');
            var video = $(this).find('video');

            var content = $(this).find('.cms_videbg_content_wrap');
            var overlay=$this.find('.cms-bg-overlay');

            video.bind("ended", function() {
                content.fadeTo( "slow", 1 );
                overlay.fadeTo( "slow", 1 );
                $(this).addClass('video-pause').removeClass('video-play');
            });
            video.bind("play", function() {
                content.fadeTo( "slow", 0 );
                overlay.fadeTo( "slow", 0 );
                $(this).addClass('video-pause').removeClass('video-pause');
            });
            video.bind("pause", function() {
                content.fadeTo( "slow", 1 );
                overlay.fadeTo( "slow", 1 );
                $(this).addClass('video-pause').removeClass('video-play');
            });
            video.bind("playing", function() {
                content.fadeTo( "slow", 0 );
                overlay.fadeTo( "slow", 0 );
                $(this).addClass('video-play').removeClass('video-pause');
            });
            $('.exp-videobg-control-btn',$this).click(function(e){
                //console.log('click button');
                e.stopPropagation();
                $this.addClass('video-play');
                playVideo(video);
            })
            $('.ww-video-bg,.stripe-video-content,video,.cms-bg-overlay',$this).click(function(e){
                e.stopPropagation();
                pauseVideo(video);
            })
        }
    });
    function playVideo(video){
        if (video.get(0).paused == true) {
            video.get(0).play();
        } else {
            video.get(0).pause();
        }
    }
    function pauseVideo(video){
        if (video.get(0).paused != true) {
            video.get(0).pause();
        }
    }
})(jQuery);
