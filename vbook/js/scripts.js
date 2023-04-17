//   all ------------------
function initVbook() {
   "use strict";
   $(".body-preload").fadeOut(500, function () {
      firstLoad();
   });
   function firstLoad() {
      $("#main").delay(500).animate({
         opacity: "1"
      }, 1500);
      var chdpt = $(".content").data("pagetitle"),
         pstt = $(".content").data("pagesubtitle");
      $(".dynamic-title span").text(pstt);
      $(".page-subtitle span").text(chdpt).shuffleLetters({});
   }
   //   Background image ------------------
   var a = $(".bg");
   a.each(function (a) {
      if ($(this).attr("data-bg")) $(this).css("background-image", "url(" + $(this).data("bg") + ")");
   });
   //   sliders ------------------		
   if ($(".testilider").length > 0) {
      var j2 = new Swiper(".testilider .swiper-container", {
         preloadImages: false,
         slidesPerView: 2,
         spaceBetween: 20,
         loop: true,
         grabCursor: true,
         centeredSlides: false,
         mousewheel: false,
         navigation: {
            nextEl: '.tc-button-next',
            prevEl: '.tc-button-prev',
         },
         pagination: {
            el: '.tc-pagination',
            clickable: true,
         },
         breakpoints: {
            1195: {
               centeredSlides: true,
            },
            640: {
               slidesPerView: 1,
            },
         }
      });
   }
   if ($(".single-slider").length > 0) {
      var j2 = new Swiper(".single-slider .swiper-container", {
         preloadImages: false,
         slidesPerView: 1,
         spaceBetween: 0,
         loop: true,
         autoHeight: true,
         grabCursor: true,
         mousewheel: false,
         pagination: {
            el: '.tc-pagination',
            clickable: true,
         },
         navigation: {
            nextEl: '.ss-button-next',
            prevEl: '.ss-button-prev',
         },
      });
   }
   if ($(".center-carousel").length > 0) {
      var j2 = new Swiper(".center-carousel .swiper-container", {
         preloadImages: true,
         slidesPerView: 'auto',
         spaceBetween: 4,
         loop: true,
         grabCursor: true,
         mousewheel: false,
         centeredSlides: false,
         autoHeight: false,
         pagination: {
            el: '.tc-pagination2',
            clickable: true,

         },
         navigation: {
            nextEl: '.ccsw-next',
            prevEl: '.ccsw-prev',
         },
      });
   }
   //   Isotope------------------		
   function n() {
      if ($(".gallery-items").length) {
         var $grid = $(".gallery-items").isotope({
            singleMode: true,
            columnWidth: ".grid-sizer, .grid-sizer-second, .grid-sizer-three",
            itemSelector: ".gallery-item, .gallery-item-second, .gallery-item-three",
            resizable: true,
            transformsEnabled: true,
            transitionDuration: "400ms"
         });
         $grid.imagesLoaded(function () {
            $grid.isotope("layout");
         });
         $(".gallery-filters").on("click", "a.gallery-filter", function (b) {
            b.preventDefault();
            var c = $(this).attr("data-filter");
            $grid.isotope({
               filter: c
            });
            $(".gallery-filters a").removeClass("gallery-filter-active");
            $(this).addClass("gallery-filter-active");
         });
         $grid.isotope("on", "layoutComplete", function (a, b) {
            $(".scr-bar_container").getNiceScroll().resize();
         });
      }
   }
   n();
   //   lightGallery------------------
   $(".image-popup").lightGallery({
      selector: "this",
      cssEasing: "cubic-bezier(0.25, 0, 0.25, 1)",
      download: false,
      counter: false
   });
   var o = $(".lightgallery"),
      p = o.data("looped");
   o.lightGallery({
      selector: ".lightgallery a.popup-image",
      cssEasing: "cubic-bezier(0.25, 0, 0.25, 1)",
      download: false,
      loop: false,
      counter: false
   });
   function hoverdirInit() {
      $(".hover-dir .gallery-item").each(function () {
         $(this).hoverdir();
      });
   }
   hoverdirInit();
   //   appear------------------
   $(".stats").appear(function () {
      $(".num").countTo();
   });
   $(".skillbar-box").appear(function () {
      $(this).find("div.skillbar-bg").each(function () {
         $(this).find(".custom-skillbar").delay(600).animate({
            width: $(this).attr("data-percent")
         }, 1500);
      });
   });
   $(".piechart-holder").appear(function () {
      $(this).find(".chart").each(function () {
         var cbc = $(".piechart-holder").attr("data-skcolor");
         $(".chart").easyPieChart({
            barColor: cbc,
            trackColor: "#29323B",
            scaleColor: "#29323B",
            size: "80",
            lineWidth: "12",
            lineCap: "butt",
            animate: 3500,
            easing: "easeInBounce",
            onStep: function (a, b, c) {
               $(this.el).find(".percent").text(Math.round(c));
            }
         });
      });
   });
   // Share   ------------------
   $(".share-container").share({
      networks: ['facebook', 'pinterest', 'twitter', 'tumblr']
   });
   var shrcn = $(".share-container"),
      swra = $(".share-wrapper"),
      shic = $(".share-icon"),
      ssbtn = $(".show-share");
   function showShare() {
      swra.slideDown(300);
      ssbtn.addClass("uncl-share");
      shrcn.removeClass("isShare");
      shic.each(function (a) {
         var boi = $(this);
         setTimeout(function () {
            boi.addClass("vis-ic");
         }, 130 * a);
      });
   }
   function hideShare() {
      ssbtn.removeClass("uncl-share");
      shrcn.addClass("isShare");
      shic.removeClass("vis-ic");
      swra.delay(400).slideUp(300);
   }
   ssbtn.on("click", function () {
      if ($(".share-container").hasClass("isShare")) showShare();
      else hideShare();
   });
   //   Contact form------------------
   $("#contactform").submit(function () {
      var a = $(this).attr("action");
      $("#message").slideUp(750, function () {
         $("#message").hide();
         $("#submit").attr("disabled", "disabled");
         $.post(a, {
            name: $("#name").val(),
            email: $("#email").val(),
            phone: $("#phone").val(),
            subject: $('#subject').val(),
            comments: $("#comments").val(),
            verify: $('#verify').val()

         }, function (a) {
            document.getElementById("message").innerHTML = a;
            $("#message").slideDown("slow");
            $("#submit").removeAttr("disabled");
            if (null != a.match("success")) $("#contactform").slideDown("slow");
         });
      });
      return false;
   });
   $("#contactform input, #contactform textarea").keyup(function () {
      $("#message").slideUp(1500);
   });
   //   mailchimp------------------
   $("#subscribe").ajaxChimp({
      language: "eng",
      url: "https://gmail.us1.list-manage.com/subscribe/post?u=1fe818378d5c129b210719d80&amp;id=a2792f681b"
   });
   $.ajaxChimp.translations.eng = {
      submit: "Submitting...",
      0: '<i class="fa fa-check"></i> We will be in touch soon!',
      1: '<i class="fa fa-warning"></i> You must enter a valid e-mail address.',
      2: '<i class="fa fa-warning"></i> E-mail address is not valid.',
      3: '<i class="fa fa-warning"></i> E-mail address is not valid.',
      4: '<i class="fa fa-warning"></i> E-mail address is not valid.',
      5: '<i class="fa fa-warning"></i> E-mail address is not valid.'
   };
   $(".scr-bar_container").on("scroll", function () {
      var c = $(this).scrollTop();
      $('.hero-section_bg .bg').css('transform', 'translate3d(0, ' + +(c * 0.25) + 'px, 0)');

   });
   $('.hero-decor-let').rotaterator({
      fadeSpeed: 1200,
      pauseSpeed: 1200
   });
   $('.to-top').on('click', function () {
      $('.scr-bar_container').animate({
         scrollTop: 0
      }, 500);
   });
   $(".scr-bar_container").niceScroll({
      cursorwidth: "4px",
      cursorborder: "none",
      cursorborderradius: "4px",
      cursorcolor: "#ff9800",
      scrollspeed: 90,
      mousescrollstep: 20,
      hwacceleration: true,
      autohidemode: false,
      railpadding: {
         top: 20,
         right: 15,
         left: 0,
         bottom: 20
      }
   });
}
//  menu------------------			
$("#menu").menu();
$(".sliding-menu li a.nav").parent("li").addClass("submen-dec");
function initpageloadAnimation() {
   $(".content").removeClass("hidcont");
}
//   load animation------------------
function contentAnimShow() {
   $(".lg-backdrop , .lg-outer").remove();
   $(".page-load").fadeIn(1).addClass("act_pl");
   $(".pl-spinner").addClass("act-loader");
   $(".show-share").removeClass("uncl-share");
   $(".content").addClass("hidcont");
   setTimeout(function () {
      $(".dynamic-title span").addClass("hidcont2");
   }, 500);
   if ($(window).width() < 1100) {
      hideMenu();
   }
}
function contentAnimHide() {
   var chdpt = $(".content").data("pagetitle"),
      pstt = $(".content").data("pagesubtitle");
   $(".dynamic-title span").text(pstt);
   setTimeout(function () {
      $(".pl-spinner").removeClass("act-loader");
      $(".page-load").removeClass("act_pl");
      setTimeout(function () {
         $(".page-load").fadeOut(1);
      }, 800);
   }, 500);
   $(".page-subtitle span").text(chdpt).shuffleLetters({});
   setTimeout(function () {
      initpageloadAnimation();
   }, 800);
   setTimeout(function () {
      $(".dynamic-title span").removeClass("hidcont2");
   }, 1500);
}
var mbt = $(".header-titile h1").text(),
   mbts = $(".header-titile h4").text();
$(".mob-logo span").text(mbt);
$(".mob-logo strong").text(mbts);
var mmb = $(".nav-button-wrap"),
   mh = $(".main-header"),
   nov = $(".nav-overlay");
function showMenu() {
   mh.addClass("vismenu");
   mmb.removeClass("c_sb");
   nov.fadeIn(300);
}
function hideMenu() {
   mh.removeClass("vismenu");
   mmb.addClass("c_sb");
   nov.fadeOut(300);
}
mmb.on("click", function () {
   if ($(this).hasClass("c_sb")) showMenu();
   else hideMenu();
});
nov.on("click", function () {
   hideMenu();
});
$('head').append('<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">');
//   Init Ajax------------------
$(function () {
   $.coretemp({
      reloadbox: "#wrapper",
      outDuration: 700,
      inDuration: 200
   });
   readyFunctions();
   $(document).on({
      ksctbCallback: function () {
         readyFunctions();
      }
   });
});
document.addEventListener('gesturestart', function (e) {
   e.preventDefault();
});
//   Init All Functions------------------
function readyFunctions() {
   initVbook();
}