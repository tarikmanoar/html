var $ = jQuery.noConflict();

$(document).ready(function($) {
	"use strict";
	
	$(".corner").click(function(){
	    $('#customizer').toggleClass('s-open');
	});


});



function swapStyleSheet(sheet){
document.getElementById('pagestyle').setAttribute('href', sheet);
}
