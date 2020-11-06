/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	__webpack_require__(490);

	$(function() {
	  var body, configsEl, currentLayout, currentNavbar, currentUrl, hash, hashes, i, j, navbar, navbarStyle, params, ref;
	  params = {};
	  currentUrl = window.location.href;
	  if (currentUrl.indexOf('?') > -1) {
	    hashes = currentUrl.slice(currentUrl.indexOf('?') + 1).split('&');
	    for (i = j = 0, ref = hashes.length; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
	      hash = hashes[i].split('=');
	      params[hash[0]] = hash[1];
	    }
	    if (params['navbar_position'] === 'top') {
	      navbarStyle = params['navbar_style'];
	    } else {
	      navbarStyle = params['side_navbar_style'];
	    }
	    currentNavbar = params['navbar_position'] + '-' + navbarStyle;
	  } else {
	    navbar = $('.btx-navbar');
	    if (navbar.length) {
	      currentNavbar = 'top-' + navbar.data('style');
	    } else {
	      currentNavbar = 'left-' + $('.btx-side-navbar').data('style');
	    }
	  }
	  if (currentNavbar) {
	    $(".js-navbar-styles").find("li[data-value=" + currentNavbar + "]").addClass('active');
	  }
	  configsEl = $('#btx-configs');
	  configsEl.css('right', -330);
	  configsEl.addClass('js-hide');
	  $('.js-configs-toggle').on('click', function(e) {
	    if (configsEl.hasClass('js-hide')) {
	      configsEl.addClass('opened');
	      configsEl.velocity({
	        right: 0
	      });
	    } else {
	      configsEl.removeClass('opened');
	      configsEl.velocity({
	        right: -330
	      });
	    }
	    return configsEl.toggleClass('js-hide');
	  });
	  body = $('body');
	  currentLayout = body.data('layout');
	  $(".js-configs-layout[data-value=" + currentLayout + "]").addClass('active');
	  $('.js-configs-layout').on('click', function(e) {
	    var el, frame, newLayout;
	    el = $(e.currentTarget);
	    newLayout = el.data('value');
	    frame = "<span class=\"btx-frame btx-s-bg-bg btx-frame--top\"></span>\n<span class=\"btx-frame btx-s-bg-bg btx-frame--right\"></span>\n<span class=\"btx-frame btx-s-bg-bg btx-frame--bottom\"></span>\n<span class=\"btx-frame btx-s-bg-bg btx-frame--left\"></span>";
	    if (!el.hasClass('active')) {
	      el.addClass('active').siblings().removeClass('active');
	    }
	    if (newLayout !== currentLayout) {
	      body.removeClass('btx-layout--wide btx-layout--boxed btx-layout--frame').addClass("btx-layout--" + newLayout);
	      body.find('.btx-item').trigger('hiddenOpen.btx');
	      if (newLayout === 'frame') {
	        body.before(frame);
	      } else {
	        $('.btx-frame').remove();
	      }
	      currentLayout = newLayout;
	    }
	    return $(window).resize();
	  });
	  return $('.js-navbar-styles').on('click', 'li', function(e) {
	    var position, style, url;
	    position = $(e.currentTarget).data('position');
	    style = $(e.currentTarget).data('style');
	    params = {};
	    params['navbar_position'] = position;
	    if (position === 'top') {
	      params['navbar_style'] = style;
	    } else {
	      params['side_navbar_style'] = style;
	    }
	    url = '//' + location.host + location.pathname + '?' + $.param(params);
	    return window.location.href = url;
	  });
	});

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },

/***/ 1:
/***/ function(module, exports) {

	module.exports = jQuery;

/***/ },

/***/ 490:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

/******/ });