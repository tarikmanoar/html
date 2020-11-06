jQuery(document).ready(function($) {
	
	$('#ABp_latest_portfolio').carouFredSel({
		prev: '#portfolio_prev',
		next: '#portfolio_next',
		auto: false,
		width: '100%',
		scroll : {
            items           : 1,
            easing          : "linear",
        }                
	});

});