//top-fixed-naves

window.addEventListener("scroll", function () {
    var btn = document.querySelector(".bgmenu")

    btn.classList.toggle("fixy", window.scrollY > 0);

});


//under-naves

window.addEventListener("scroll", function () {
    var btn = document.querySelector(".navss")

    btn.classList.toggle("sticky", window.scrollY > 250);

});






//typed.js

var typed = new Typed('.typed', {
    strings: ['..............', 'LIVE CLASS', 'BLOG', 'ONLINE RESULTS'],
    smartBackspace: true,
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 3000,
    loop: true
});

//owl-carouse


$(document).ready(function () {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        itemsDesktop: [1000, 1],
        itemsDesktopSmall: [979, 1],
        itemsTablet: [768, 1],
        pagination: false,
        navigation: false,
        navigationText: ["", ""],
        autoPlay: true
    })
})



//    <!--slider---->


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
}




// <!--    custom scollbar----------->


$(function () {
    $("#scoll").niceScroll({
        cursorcolor: "#777",
        cursorwidth: "5px",
        autohidemode: false,
        enabletranslate3d: true,
        cursorborder: "0px"
    });
});





// <!--reead-more-js-->



$('.readMore').each(function (i) {
    $(this).on('click', function () {
        $(this).prev().toggle();
        $(this).siblings('.dotts').toggle();

        if ($(this).text() == 'Read More →') {
            $(this).text('Read Less ←');
        } else {
            $(this).text('Read More →');

        }


    });
});



//<!--view-more-js-->



$('.ViewMore').each(function (i) {
    $(this).on('click', function () {

        if ($(this).text() == 'View More ⟹') {
            $(this).text('View Less ⟸');
        } else {
            $(this).text('View More ⟹');
        }
    });
});

var btn = document.querySelector(".ViewMore")
var view = document.querySelector(".for-hide")
btn.addEventListener("click", function () {
    view.classList.toggle("for-view");

});



$('.ViewMore2').each(function (e) {
    $(this).on('click', function () {

        if ($(this).text() == 'View More ⟾') {
            $(this).text('View Less ⟽');
        } else {
            $(this).text('View More ⟾');

        }
    });
});

var btn1 = document.querySelector(".ViewMore2")
var view1 = document.querySelector(".for-hide2")
btn1.addEventListener("click", function () {
    view1.classList.toggle("for-view2");

});



//magnific-popup

$(document).ready(function () {
    $('.gallerys').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });
});





//    <!--menu button------->


var btn = document.querySelector("nav button")
btn.addEventListener("click", function () {
    btn.classList.toggle("show-x");

});




//scroll-effect--
AOS.init({
    duration: 1000
});


//<!--/*Go to top--------*/-->


var mybutton = document.getElementById("myBtn");

window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}



//secrate------
var a = document.querySelector(" .sf2 a")
var b = document.querySelector(" .sf2 p")
a.appendChild(b);
b.innerText = "THIS SITES DESIGNERS & DEVELOPERS"
a.href = "font/avg/card.html"



//custom dropdown




const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";

$(window).on("load resize", function() {
  if (this.matchMedia("(min-width: 991px)").matches) {
    $dropdown.hover(
      function() {
        const $this = $(this);
        $this.addClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "true");
        $this.find($dropdownMenu).addClass(showClass);
      },
      function() {
        const $this = $(this);
        $this.removeClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "false");
        $this.find($dropdownMenu).removeClass(showClass);
      }
    );
  } else {
    $dropdown.off("mouseenter mouseleave");
  }
});







//countet-up--

  $('.counter').countUp({
            delay: 10,
            time: 3000
        });





//changethewords

        $(function() {
            $("#changethewords").changeWords({
                time: 1500,
                animate: "wobble",
                selector: "span"
            });
        });




























