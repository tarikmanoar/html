/*jshint jquery:true */
/*global $:true */

var $ = jQuery.noConflict();

$(document).ready(function($) {
	"use strict";


	/*-------------------------------------------------*/
	/* =  Main Nav 
	/*-------------------------------------------------*/


	/*-------------------------------------------------*/
	/* =  Mobile Menu
	/*-------------------------------------------------*/
	// Create the dropdown base
    $("<select />").appendTo("#menu_border_wrapper");
    
    // Create default option "Go to..."
    $("<option />", {
		"selected": "selected",
		"value"   : "",
		"text"    : "Menu"
    }).appendTo("#menu_border_wrapper select");
    
    // Populate dropdown with menu items
    $(".nav a").each(function() {
		var el = $(this);
		$("<option />", {
			"value"   : el.attr("href"),
			"text"    : el.text()
		}).appendTo("#menu_border_wrapper select");
    });

    $("#menu_border_wrapper select").change(function() {
		window.location = $(this).find("option:selected").val();
    });
	




});