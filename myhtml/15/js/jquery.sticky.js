  // Sticky Div
       function sticky_relocate() {
          var window_top = $(window).scrollTop();
          var div_top = $('#sticky-anchor').offset().top;
        if (window_top > div_top) {
          $('#sticky').addClass('stick');
          $('#sticky-anchor').height($('#sticky').outerHeight());
        } else {
          $('#sticky').removeClass('stick');
          $('#sticky-anchor').height(0);
        }
      }

      $(function() {
        $(window).scroll(sticky_relocate);
        sticky_relocate();
      });

        var dir = 1;
        var MIN_TOP = 200;
        var MAX_TOP = 350;

      function autoscroll() {
        var window_top = $(window).scrollTop() + dir;
      if (window_top >= MAX_TOP) {
          window_top = MAX_TOP;
          dir = -1;
      } else if (window_top <= MIN_TOP) {
          window_top = MIN_TOP;
          dir = 1;
      }
        $(window).scrollTop(window_top);
        window.setTimeout(autoscroll, 100);
      }