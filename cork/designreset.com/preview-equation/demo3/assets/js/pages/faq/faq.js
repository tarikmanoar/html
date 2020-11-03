// Add scrollspy to <body>
$('body').scrollspy({offset: 10});

// Add smooth scrolling on all links inside the navbar
$(".list-group a").on('click', function(event) {
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

$('.faq-container .collapse').on('shown.bs.collapse', function(){
    $(this).parent().find(".flaticon-down-arrow").removeClass("flaticon-down-arrow").addClass("flaticon-arrows-1");
}).on('hidden.bs.collapse', function(){
        $(this).parent().find(".flaticon-arrows-1").removeClass("flaticon-arrows-1").addClass("flaticon-down-arrow");
});


$(document).scroll(function(event) {

  var faqWrapper = $('#faqWrapper');
  var faqNavList = $( '#faqWrapper .faq-nav-list');
  var windowScroll = $(window).scrollTop()
  var elementoffset = faqWrapper.offset().top;

  console.log(windowScroll);
  console.log(elementoffset);
  if (windowScroll >= elementoffset) {
    console.log('attached');
    faqNavList.addClass('fixed-nav-list');
  } else if (windowScroll < elementoffset) {
    console.log('deattached');
    faqNavList.removeClass('fixed-nav-list');
  }

});
