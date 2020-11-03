var swiper9 = new Swiper('.related-product-carousel', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    // Responsive breakpoints
    breakpoints: {
        // when window width is <= 575px
        575: {
            slidesPerView: 1,
        },
        // when window width is <= 1199px
        1199: {
            slidesPerView: 2,
        }
    }
});

$('[data-toggle="tooltip"]').tooltip();