
// Slider 1    ( Default )

var swiper = new Swiper('.swiper-container');

// Slider 2    ( Responsive/Fullscreen + Pagination )

var swiper2 = new Swiper('.swiper-container2', {
            pagination: '.swiper-pagination',
            paginationClickable: true
        });

// Slider 3    ( Simple Pagination )

var swiper3 = new Swiper('.swiper-container3', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            spaceBetween: 30
        });

// Slider 4    ( Space between slides )

var swiper4 = new Swiper('.swiper-container4', {
            pagination: '.swiper-pagination',
            slidesPerView: 3,
            paginationClickable: true,
            spaceBetween: 30
        });

// Slider 5    ( Multi Row Slides Layout )

var swiper5 = new Swiper('.swiper-container5', {
            pagination: '.swiper-pagination',
            slidesPerView: 3,
            slidesPerColumn: 2,
            paginationClickable: true,
            spaceBetween: 30
        });

// Slider 6    ( Grab Cusor )

var swiper6 = new Swiper('.swiper-container6', {
            pagination: '.swiper-pagination',
            slidesPerView: 4,
            centeredSlides: true,
            paginationClickable: true,
            spaceBetween: 30,
            grabCursor: true
        });

// Slider 7    ( Scrollbar )

var swiper7 = new Swiper('.swiper-container7', {
            scrollbar: '.swiper-scrollbar',
            scrollbarHide: true,
            slidesPerView: 'auto',
            centeredSlides: true,
            spaceBetween: 30,
            grabCursor: true
        });

// Slider 8    ( Navigation Buttons )

var swiper8 = new Swiper('.swiper-container8', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            spaceBetween: 30
        });

// Slider 9    ( Autoplay )

var swiper9 = new Swiper('.swiper-container9', {
            pagination: '.swiper-pagination',
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            paginationClickable: true,
            spaceBetween: 30,
            centeredSlides: true,
            autoplay: 2500,
            autoplayDisableOnInteraction: false
        });

// Slider 10    ( RTL Slides )

var swiper10 = new Swiper('.swiper-container11', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev'
        });

// Slider 11    ( Fraction Pagination )

var swiper11 = new Swiper('.swiper-container12', {
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            pagination: '.swiper-pagination',
            paginationType: 'fraction'
        });

// Slider 12    ( Progress Pagination )

var swiper12 = new Swiper('.swiper-container13', {
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            pagination: '.swiper-pagination',
            paginationType: 'progress'
        });