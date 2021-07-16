/**
 * 
 *
 * This file contains all theme JS functions
 *
 * @package 
--------------------------------------------------------------
				   Contents
--------------------------------------------------------------
 * 01 - Search
 * 02 - Load More
 * 03 - Masonry
 * 04 - Scroll Top
 * 05 - Tag
 * 06 - Share Button
 * 07 - Preloader
--------------------------------------------------------------*/

(function($) {
  "use strict";

/* ================================= */
	/*===== Search =====*/
/* ================================= */
	$('.search-input').focus(function(){
	  $(this).parent().addClass('focus');
	}).blur(function(){
	  $(this).parent().removeClass('focus');
	})

  /* ========================= */
    /*===== Load More =====*/
  /* ========================= */
  $(function () {
    $(".work-block").slice(0, 6).show();
    $("#loadMore").on('click', function (e) {
      e.preventDefault();
      $(".work-block:hidden").slice(0, 6).slideDown();
      if ($(".work-block:hidden").length == 0) {
          $("#load").fadeOut('slow');
      }
      $('html,body').animate({
          scrollTop: $(this).offset().top
      }, 1500);
    });
  });

  /* ========================= */
    /*===== Masonry =====*/
  /* ========================= */

  $('.grid').imagesLoaded( function(){
    $('.grid').masonry({
      itemSelector : '.work-img-block'
    });
  });
    
  /* ========================= */
    /*===== Scroll Top =====*/
  /* ========================= */
  $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
          $('.totop a').fadeIn();
      } else {
          $('.totop a').fadeOut();
      }
  });

  /* ========================= */
    /*===== Tag =====*/
  /* ========================= */
  $(".tags-select").select2({
    tags: true,
    tokenSeparators: [',',';'],
    placeholder: {
      id: '-1', // the value of the option
      text: 'Select Tags'
    },
    createTag: function(newTag) {
      return {
          id: 'new:' + newTag.term,
          text: newTag.term
      };
    },
  });

  /* ========================= */
    /*===== Summernote =====*/
  /* ========================= */
  $('#summernote-main').summernote({
    height: 100,                 // set editor height
  });


  /* ========================= */
    /*===== Share Button =====*/
  /* ========================= */
  $( ".share-btn" ).click(function(e) {
      $('.sharer').not($(this).next( ".sharer" )).each(function(){
        $(this).removeClass("active");
      });
     
      $(this).next( ".sharer" ).toggleClass( "active" );
    });  

  /* ========================= */
    /*===== Category Slider =====*/
  /* ========================= */
    $("#category-slider").owlCarousel({
      loop: true,
      items: 6,
      dots: false,
      nav: false,
      autoHeight: true,
      touchDrag: true,
      mouseDrag: true,
      margin: 30,
      autoplay: true,
      autoplayTimeout: 5000,
      slideSpeed: 5000,
      smartSpeed: 1000,
      navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
      responsive: {
        0: {
            items: 1,
            nav: false,
            dots: false,
        },
        600: {
            items: 1,
            nav: false,
            dots: false,
        },
        768: {
            items: 2,
            nav: false,
        },
        1100: {
            items: 6,
            nav: false,
            dots: false,
        }
      }
    });

  /* ========================= */
    /*===== Preloader =====*/
  /* ========================= */
  $(window).on('load', function()  { 
      $('.status').fadeOut();
      $('.preloader').delay(350).fadeOut('slow'); 
  }); 

})(jQuery);