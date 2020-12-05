$(document).ready(function(){
    $("#testimonial-slider-4").owlCarousel({
        items:1,
        dots: true,
        // dotsSpeed: 2,
        // dotsEach: true,
        nav: false,
        loop: true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        navText:["",""],    
        responsive:{
            1200:{
                items:3
            },
            768:{
                items:2
            }
        }

    });


    $('.testimonialSlider').owlCarousel({
            loop: true,
            margin: 50,
            items: 1,
            nav: true,
            smartSpeed: 700,
            autoplay: 5000,
            navText: ['<span class=""></span>', '<span class=""></span>'],

        });















});