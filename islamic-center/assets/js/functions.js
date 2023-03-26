(function ($) {
    "use strict";
    $(window).on('load', function () {
        $('.preloader').fadeOut(1000);
    })

    $(document).ready(function () {

        //=======================

        //sticky menu
        var fixed_top = $(".header-area");
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 100) {
                fixed_top.addClass("animated fadeInDown menu-fixed");
            } else {
                fixed_top.removeClass("animated fadeInDown menu-fixed");
            }
        });
        //Menu Dropdown Icon Adding
        $("ul>li>.submenu").parent("li").addClass("menu-item-has-children");
        // drop down menu width overflow problem fix
        $('ul').parent('li').hover(function () {
            var menu = $(this).find("ul");
            var menupos = $(menu).offset();
            if (menupos.left + menu.width() > $(window).width()) {
                var newpos = -$(menu).width();
                menu.css({
                    left: newpos
                });
            }
        });
        $('.menu li a').on('click', function (e) {
            var element = $(this).parent('li');
            if (element.hasClass('open')) {
                element.removeClass('open');
                element.find('li').removeClass('open');
                element.find('ul').slideUp(300, "swing");
            } else {
                element.addClass('open');
                element.children('ul').slideDown(300, "swing");
                element.siblings('li').children('ul').slideUp(300, "swing");
                element.siblings('li').removeClass('open');
                element.siblings('li').find('li').removeClass('open');
                element.siblings('li').find('ul').slideUp(300, "swing");
            }
        })
        $('.ellepsis-bar').on('click', function (e) {
            var element = $('.header-top');
            if (element.hasClass('open')) {
                element.removeClass('open');
                element.slideUp(300, "swing");
                $('.overlayTwo').removeClass('active');
            } else {
                element.addClass('open');
                element.slideDown(300, "swing");
                $('.overlayTwo').addClass('active');

            }
        });
        $('.header-bar').on('click', function () {
            $(this).toggleClass('active');
            $('.overlay').toggleClass('active');
            $('.menu').toggleClass('active');
        });
        //======================






        // lightcase 
        $('a[data-rel^=lightcase]').lightcase();

        // search cart option
        $(document).on('click', '.cart-option', function () {
            $(".cart-option").toggleClass("open");
        });
        $(document).on('click', '.search-option, .search-close', function () {
            $(".search-input").toggleClass("open");
        });
        $(document).on('click', '.navbar-toggler-icon', function () {
            $(".top-header").toggleClass("open");
        });

        // Header Section Menu Part
        $("ul li ul").parent("li").addClass("menu-item-has-children");
        $(".shop-menu>li .shop-submenu").parent("li").children("a").addClass("dd-icon-down");

        // drop down menu width overflow problem fix
        $('ul').parent().on('hover', function () {
            var menu = $(this).find("ul");
            var menupos = $(menu).offset();
            if (menupos.left + menu.width() > $(window).width()) {
                var newpos = -$(menu).width();
                menu.css({
                    left: newpos
                });
            }
        });

        // mobile menu responsive
        $(document).on('click', '.header-bar', function () {
            $(".header-bar").toggleClass("close");
            $(".mobile-menu").toggleClass("open");
        });

        // scroll up start here
        $(function () {
            //Check to see if the window is top if not then display button
            $(window).scroll(function () {
                if ($(this).scrollTop() > 300) {
                    $('.scrollToTop').css({
                        'bottom': '2%',
                        'opacity': '1',
                        'transition': 'all .5s ease'
                    });
                } else {
                    $('.scrollToTop').css({
                        'bottom': '-30%',
                        'opacity': '0',
                        'transition': 'all .5s ease'
                    })
                }
            });
            //Click event to scroll to top
            $('.scrollToTop').on('click', function () {
                $('html, body').animate({
                    scrollTop: 0
                }, 500);
                return false;
            });
        });



        //program donate money active class
        $(".pay-price").on('click', function () {
            $(this).addClass('active').siblings().removeClass('active');
        });


        
        //Isotope
        
        jQuery(window).on('load',function() { 
            var $grid = $('.grid').isotope({
                itemSelector: '.grid-item',
                masonry: {
                    columnWidth: 0
                }
            })

            // filter items on button click
            $('.filter-button-group').on('click', '.filter-btn', function () {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({
                    filter: filterValue
                });
            });

            $('.filter-button-group').each(function (i, buttonGroup) {
                var $buttonGroup = $(buttonGroup);
                $buttonGroup.on('click', '.filter-btn', function () {
                    $buttonGroup.find('.is-checked').removeClass('is-checked');
                    $(this).addClass('is-checked');
                });
            });
        });

        // Banner slider
        var swiper = new Swiper('.banner-slider', {
            slidesPerView: 1,
            autoplay: {
                delay: 10000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: '.banner-next',
                prevEl: '.banner-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            loop: true,
        });


        //blog-slider

        var swiper = new Swiper('.post-thumb-container', {
            slidesPerView: 1,
            autoplay: {
                delay: 10000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: '.thumb-next',
                prevEl: '.thumb-prev',
            },
            loop: true,
        });

        //about slider
        var swiper = new Swiper('.about-slider', {
            slidesPerView: 1,
            spaceBetween: 10,
            autoplay: {
                delay: 10000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            loop: true,
        });

        //qoute slider
        var swiper = new Swiper('.qoute-container', {
            slidesPerView: 1,
            spaceBetween: 20,
            autoplay: {
                delay: 10000,
                disableOnInteraction: false,
            },
            loop: true,
        });

        //Program Slier
        var swiper = new Swiper('.program-item-wrapper', {
            slidesPerView: 2,
            spaceBetween: 20,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: true,
            },
            navigation: {
                nextEl: '.program-next',
                prevEl: '.program-prev'
            },
            breakpoints: {
                767: {
                    spaceBetween: 20,
                    slidesPerView: 1,
                }
            }
        });

        // counterup js start here
        $('.count-number').each(function () {
            var size = $(this).text().split(".")[1] ? $(this).text().split(".")[1].length : 0;
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 8000,
                step: function (func) {
                    $(this).text(parseFloat(func).toFixed(size));
                }
            });
        });

        //Progress-bar 

        $(function () {
            $('.progress-bar-wrapper').each(function () {
                $(this).find('.progress-bar').animate({
                    width: $(this).attr('data-percent')
                }, 6000);
            });
        });

        // product view mode change js
        $(function () {
            $('.product-view-mode').on('click', 'a', function (e) {
                e.preventDefault();
                var shopProductWrap = $('.shop-product-wrap');
                var viewMode = $(this).data('target');
                $('.product-view-mode a').removeClass('active');
                $(this).addClass('active');
                shopProductWrap.removeClass('grids lists').addClass(viewMode);
            });
        });

        // shop cart + - start here
        var CartPlusMinus = $('.cart-plus-minus');
        CartPlusMinus.prepend('<div class="dec qtybutton">-</div>');
        CartPlusMinus.append('<div class="inc qtybutton">+</div>');
        $(".qtybutton").on("click", function () {
            var $button = $(this);
            var oldValue = $button.parent().find("input").val();
            if ($button.text() === "+") {
                var newVal = parseFloat(oldValue) + 1;
            } else {
                // Don't allow decrementing below zero
                if (oldValue > 0) {
                    var newVal = parseFloat(oldValue) - 1;
                } else {
                    newVal = 1;
                }
            }
            $button.parent().find("input").val(newVal);
        });

        // sop single slider
        var galleryThumbs = new Swiper('.gallery-thumbs', {
            spaceBetween: 10,
            slidesPerView: 5,
            freeMode: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            breakpoints: {
                768: {
                    slidesPerView: 3,
                },
                576: {
                    slidesPerView: 2,
                }
            }
        });
        var galleryTop = new Swiper('.gallery-top', {
            spaceBetween: 10,
            autoplay: {
                delay: 10000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: '.shop-slider-next',
                prevEl: '.shop-slider-prev',
            },
            thumbs: {
                swiper: galleryThumbs
            },
            loop: true,
        });

        //Review Tabs
        $('ul.review-nav').on('click', 'li', function (e) {
            e.preventDefault();
            var reviewContent = $('.review-content');
            var viewRev = $(this).data('target');
            $('ul.review-nav li').removeClass('active');
            $(this).addClass('active');
            reviewContent.removeClass('review-content-show description-show').addClass(viewRev);
        });
    });
    //progressbar
    window.addEventListener('DOMContentLoaded', function () {
        const circle = new CircularProgressBar('pie');
        setInterval(() => {
            const options = {
                index: 0,
                percent: Math.floor((Math.random() * 100) + 1)
            }
            circle.animationTo(options);
        }, 2000);

    });
    
    
    //Countdown js initialization
    document.addEventListener('readystatechange', event => {
        if (event.target.readyState === "complete") {
            var clockdiv = document.getElementsByClassName("event-count");
            var countDownDate = new Array();
            for (var i = 0; i < clockdiv.length; i++) {
                countDownDate[i] = new Array();
                countDownDate[i]['el'] = clockdiv[i];
                countDownDate[i]['time'] = new Date(clockdiv[i].getAttribute('data-date')).getTime();
                countDownDate[i]['days'] = 0;
                countDownDate[i]['hours'] = 0;
                countDownDate[i]['seconds'] = 0;
                countDownDate[i]['minutes'] = 0;
            }

            var countdownfunction = setInterval(function () {
                for (var i = 0; i < countDownDate.length; i++) {
                    var now = new Date().getTime();
                    var distance = countDownDate[i]['time'] - now;
                    countDownDate[i]['days'] = Math.floor(distance / (1000 * 60 * 60 * 24));
                    countDownDate[i]['hours'] = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    countDownDate[i]['minutes'] = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                    countDownDate[i]['seconds'] = Math.floor((distance % (1000 * 60)) / 1000);

                    if (distance < 0) {
                        countDownDate[i]['el'].querySelector('.days').innerHTML = 0;
                        countDownDate[i]['el'].querySelector('.hours').innerHTML = 0;
                        countDownDate[i]['el'].querySelector('.minutes').innerHTML = 0;
                        countDownDate[i]['el'].querySelector('.seconds').innerHTML = 0;
                    } else {
                        countDownDate[i]['el'].querySelector('.days').innerHTML = countDownDate[i]['days'];
                        countDownDate[i]['el'].querySelector('.hours').innerHTML = countDownDate[i]['hours'];
                        countDownDate[i]['el'].querySelector('.minutes').innerHTML = countDownDate[i]['minutes'];
                        countDownDate[i]['el'].querySelector('.seconds').innerHTML = countDownDate[i]['seconds'];
                    }
                }
            }, 1000);
        }
    });
}(jQuery));




