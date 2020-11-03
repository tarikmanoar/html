/*
  ==============================
		Smooth Scrolling Script
	==============================
*/

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });
  
  // Add scrollspy to <body>
  $('body').scrollspy({target: ".navbar", offset: 50});

  // Add smooth scrolling on all links inside the navbar
  $("#nav-content a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800);
    }  // End if
  });


/*
	============================================================
		Change nav color on click of the hamburger icon menu
	============================================================
*/

$("nav.navbar button.navbar-toggler").click(function(event) {
	var scroll = $(window).scrollTop();
	var ariaExpand = $(this).attr('aria-expanded');
	// console.log( ariaExpand );

	if (scroll != 0) {
		if (ariaExpand == 'false') {
			$('nav.navbar').addClass('scrolling');
		}
	} else {
		if (ariaExpand == 'true') {
			setTimeout( function(){
				$('nav.navbar').removeClass('scrolling');
			}, 250);
		} else if (ariaExpand == 'false') {
			$('nav.navbar').addClass('scrolling');
		}
	}
});

/*	Testimonial Slider 	*/

if ($('.testimonialSlider').length) {
	$('.testimonialSlider').owlCarousel({
	    loop: true,
      margin: 50,
      items: 1,
      nav: true,
      smartSpeed: 700,
      autoplay: 5000,
      navText: ['<span class=""></span>', '<span class=""></span>'],


	});
}


 /* 	Partners Carousel 	*/  

if ($('.partnersSlider').length) {
    $('.partnersSlider').owlCarousel({
	    loop: true,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplaySpeed: 900,
            lazyLoad: true,
            dragEndSpeed: 1000,
            responsive: {
                0: {
                    items: 1,
                    stagePadding: 70,
                    margin: 75
                },
                450: {
                    items: 2
                },
                700: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
	});
}


// Scroll To Top

$(document).on('click', '.arrow', function(event) {
	event.preventDefault();
	var body = $("html, body");
	body.stop().animate({scrollTop:0}, 500, 'swing');
});

$(document).scroll(function(event) {

  var lanWrapper = $('.scroll-offset');
  var landingNavList = $( '.header-nav');
  var windowScroll = $(window).scrollTop()
  var windowWidth = $(window).width()
  var elementoffset = lanWrapper.offset().top;
  var ariaExpand = $('nav.navbar button.navbar-toggler').attr('aria-expanded');

  // Check if window scroll > or == element offset?
  if (windowScroll >= elementoffset) {
    // console.log('attached');
    landingNavList.addClass('fixed-top');
    landingNavList.attr('style', 'position: fixed !important');
    $("nav.navbar").addClass('scrolling');
    $("nav.navbar").parent().css('height', '103px');

  } else if (windowScroll < elementoffset) {
    // console.log('deattached');
    landingNavList.removeClass('fixed-top');
    landingNavList.attr('style', 'position: inherit');
    var $hasShow = $('.navbar-collapse').hasClass('show');
      
      if (ariaExpand == 'false') {
        $("nav.navbar").removeClass('scrolling');
        $("nav.navbar").parent().css('height', 'auto');
      } 
      
      if (windowWidth > 991) {
        if (ariaExpand == 'true') {
          $("nav.navbar").removeClass('scrolling');
          $("nav.navbar").parent().css('height', 'auto');
        }
      }

  }

});

$(window).resize(function(event) {
  var $window = $(window).width();
  if ($window > 991) {
    var $hasScrolling = $('.navbar').hasClass('scrolling');
    if ($hasScrolling) {
      $('.navbar').removeClass('scrolling');
      // console.log('has class and remove it');
    } else {
      // console.log('returning at 992px or below');
      return;
    }
  } else if ($window <= 991) {
    var $hasShown = $('.navbar-collapse').hasClass('show');
    if ($hasShown) {
      $('.navbar').addClass('scrolling');
    } else {
      // console.log('returning at 991px or below')
      return;
    }
  }

});