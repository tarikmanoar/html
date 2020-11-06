var $ = jQuery.noConflict();

$(document).ready(function($) {
  "use strict";

    /* Menu  */    
    $('.main-menu .sf-menu').superfish({
        delay:  300,    // one second delay on mouseout 
        animation:   {opacity:'show',height:'show'}, // fade-in and slide-down animation
        speed:       'fast',  // faster animation speed 
        autoArrows:  true,   // generation of arrow mark-up (for submenu) 
        dropShadows: false
    });


    /* prettyphoto  */    
    $("a[rel^='prettyPhoto']").prettyPhoto();

    /* post owl slider START  */    
    if ($(".owl-fade-slide").length > 0) {
        var owl = $(".owl-fade-slide");
     
        owl.owlCarousel({
            navigation : true,
            pagination : false,
            stopOnHover: true,
            singleItem : true,
            transitionStyle : "fadeUp"
        });
    }

    /* Socials  */    
    $('.social-item').on('hover', function () {
        $('.icon', this).toggleClass('active');
        $('.icon', this).css({'display':'block'});
    });

    /* Circle progress bar START */
    function easyCharts() {
       $('.easyPieChart').each(function () {
            var $this, $parent_width, $chart_size;
            $this =$(this);
            $parent_width = $(this).parent().width();
            $chart_size = $this.attr('data-barSize');
            if (!$this.hasClass('chart-animated')) {
                $this.easyPieChart({
                    animate: 3000,
                    lineCap: 'round',
                    lineWidth: $this.attr('data-lineWidth'),
                    size: $chart_size,
                    barColor: $this.attr('data-barColor'),
                    trackColor: $this.attr('data-trackColor'),
                    scaleColor: 'transparent',
                    onStep: function (value) {
                        this.$el.find('.chart-percent span').text(Math.ceil(value));
                    }
                });
            }
        });
     }
     easyCharts();

    /* Share Icons  */    
   $(".share-post-wrapper")
    .on('mouseenter', function() {
      $(this).parent().find(".socials-wrap").addClass("showit");
    })
    .on('mouseleave' ,function() {
      $(this).parent().find(".socials-wrap").removeClass("showit");
    });
    
   $(".aboutme-socials-wrapper")
    .on('mouseenter', function() {
      $(this).parent().find(".aboutme-socials-list").addClass("showit");
    })
    .on('mouseleave' ,function() {
      $(this).parent().find(".aboutme-socials-list").removeClass("showit");
    });

    // Get #comment-section div
    var commentsDiv = $('.comments-wrapper');
      // Only do this work if that div isn't empty
      if (commentsDiv.length) {
      // Hide #comment-section div by default
      //$(commentsDiv).hide();
      // Append a link to show/hide
      $('<a>')
          .attr('class', 'toggle-comments')
          .attr('href', '#')
          .html('Hide Comments ('+post_comments_count+')')
          .insertBefore(commentsDiv);
      // Encase button in #toggle-comments-container div
      $('.toggle-comments').wrap($('<div/>', {
          id: 'toggle-comments-container'
      }))
      // When show/hide is clicked
      $('.toggle-comments').on('click', function(e) {
          e.preventDefault();
      // Show/hide the div using $'s toggle()
      $(commentsDiv).slideToggle('slow', function() {
      // change the text of the anchor
          var anchor = $('.toggle-comments');
          var anchorText = anchor.html() == 'Show Comments ('+post_comments_count+')' ? 'Hide Comments ('+post_comments_count+')' : 'Show Comments ('+post_comments_count+')';
          $(anchor).html(anchorText);
      });
    });
    } // End of commentsDiv.length


    /*  Testimonials START */
    if ($(".owl-carousel.testimonials-wrapper").length > 0) {

      var owl = $(".owl-carousel.testimonials-wrapper");
      owl.owlCarousel({
         
          itemsCustom : [
            [0, 1],
            [450, 1],
            [600, 1],
            [700, 1],
            [1000, 1],
            [1200, 1],
            [1400, 1],
            [1600, 1]
          ],
          navigation : false,
          pagination : true,
          autoPlay: 5000
      });
    }
    /*  Testimonials END */

    /* Bounsing Effect  */    
    (function($,sr){

      // debouncing function from John Hann
      // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
      var debounce = function (func, threshold, execAsap) {
          var timeout;

          return function debounced () {
              var obj = this, args = arguments;
              function delayed () {
                  if (!execAsap)
                      func.apply(obj, args);
                  timeout = null;
              };

              if (timeout)
                  clearTimeout(timeout);
              else if (execAsap)
                  func.apply(obj, args);

              timeout = setTimeout(delayed, threshold || 100);
          };
      }
      // smartresize 
      jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

    })(jQuery,'smartresize');

    /* Back on TOp  */    
    $('.scrollup').on('click', function () {
        $('body,html').animate({ scrollTop: 0 }, 800);
        return false;
    });


    $(".share-post-wrapper")
    .on('mouseenter', function() {
      $(this).parent().find(".socials-wrap-post").addClass("showit");
    })
    .on('mouseleave', function() {
      $(this).parent().find(".socials-wrap-post").removeClass("showit");
    });


    /* Animations  */    
    $(".animsition").animsition({
    
      inClass               :   'fade-in',
      outClass              :   'fade-out',
      inDuration            :    1500,
      outDuration           :    800,
      linkElement           :   '.animsition-link',
      // e.g. linkElement   :   'a:not([target="_blank"]):not([href^=#])'
      loading               :    true,
      loadingParentElement  :   'body', //animsition wrapper element
      loadingClass          :   'animsition-loading',
      unSupportCss          : [ 'animation-duration',
                                '-webkit-animation-duration',
                                '-o-animation-duration'
                              ],
      //"unSupportCss" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
      //The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
      
      overlay               :   false,
      
      overlayClass          :   'animsition-overlay-slide',
      overlayParentElement  :   'body'
    });

    /* Mobile Menu  */    
    var slide = false;
    $(".mobile-menu-show").on('click', function(){
    
        if (slide == false) {
            $(".mobile-menu-wrapper").slideDown("slow");
            slide = true;
        }
        else {
            $(".mobile-menu-wrapper").slideUp("slow");
            slide = false;
        }
    });
    


    /* j  */    
    try {
       var ZoomImage = jQuery('.zoom, .zoom-image');
        ZoomImage.magnificPopup({
            type: 'image',
             gallery: {
                enabled: true
            }
        }); 
    } catch (err){

    }
});