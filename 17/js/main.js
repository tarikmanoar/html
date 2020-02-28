$(document).ready(function(){
/* Scroll to top
    ===================*/
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });

    // Smoot Scroll

    $('.smootclick').click(function(e){
    	var linkhref = $(this).attr('href');
    	$('html, body').animate({
    		scrollTop: $(linkhref).offset().top
    	},2000);
    	e.preventDefault();
    });

    //Type Effects
        $(".type").typed({
        strings: ["Photographer", "Cameraman","Photojournalist","Chotocopier","TARIK MANOAR"],
        typeSpeed: 50,
        backSpeed: 12,
	shuffle: true,
        loop: true,
        cursorChar: "_",
    });
    /*WoW js Active
    =================*/
    $(".carousel-inner .item:first-child").addClass("active");
    new WOW().init({
        mobile: false,
    });

});
    