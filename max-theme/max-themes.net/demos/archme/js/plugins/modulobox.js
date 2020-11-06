/**
 * ModuloBox PACKAGED v1.3.0
 * Touch & responsive multimedia Lightbox
 *
 * @author Themeone [https://theme-one.com/]
 * Copyright © 2016 All Rights Reserved.
 */

/* global navigator, location, window, document, screen, history, setTimeout, clearTimeout, requestAnimationFrame, cancelAnimationFrame, XMLHttpRequest, Image */
/* global define, module, require, jQuery, MediaElementPlayer */

/**
 * requestAnimationFrame polyfill
 * Modified version of Paul Irish (https://gist.github.com/paulirish/1579671)
 * v1.0.0
 */
( function() {

	var win = window,
		lastTime = 0;

	// get rAF, prefixed, if present
	win.requestAnimationFrame = win.requestAnimationFrame || win.webkitRequestAnimationFrame;

	// fallback to setTimeout
	if ( !win.requestAnimationFrame ) {

		win.requestAnimationFrame = function( callback ) {

			var currTime   = new Date().getTime(),
				timeToCall = Math.max( 0, 16 - ( currTime - lastTime ) ),
				id         = setTimeout( callback, timeToCall );

			lastTime = currTime + timeToCall;

			return id;

		};

	}

	// fallback to setTimeout
	if ( !win.cancelAnimationFrame ) {

		win.cancelAnimationFrame = function( id ) {
			clearTimeout( id );
		};

	}

}());

/**
 * Themeone Utils
 * Utilities
 * v1.0.0
 */
( function( root, factory ) {

	if ( typeof define === 'function' && define.amd ) {

		// AMD
		define(
			'themeone-utils/utils',
			factory
		);

	} else if ( typeof module === 'object' && module.exports ) {

		// Node, CommonJS-like
		module.exports = factory();

	} else {

		// Browser globals (root is window)
		root.ThemeoneUtils = factory();

	}

}( this, function() {

	"use strict";

	var utils = {};
	var Console = window.console;

	/**
	 * Output console error
	 * @param {string} message
	 */
	utils.error = function( message ) {

		if ( typeof Console !== 'undefined' ) {

			Console.error( message );

		}

	};

	/**
	 * Extend an Object
	 * @param {Object} options
	 * @param {Object} defaults
	 * @return {Object} defaults
	 */
	utils.extend = function( options, defaults ) {

		if ( options ) {

			if ( typeof options !== 'object' ) {

				this.error( 'Custom options must be an object' );

			} else {

				for ( var prop in defaults ) {

					if ( defaults.hasOwnProperty( prop ) && options.hasOwnProperty( prop ) ) {
						defaults[prop] = options[prop];
					}

				}

			}

		}

		return defaults;

	};

	/**
	 * Find style property (with vendor prefix)
	 * @param {string} prop
	 * @return {string} prefixedProp
	 */
	utils.prop = function( prop ) {

		var el = this.createEl(),
			prefixes = ['', 'Webkit', 'Moz', 'ms', 'O'];

		for ( var p = 0, pl = prefixes.length; p < pl; p++ ) {

			var prefixedProp = prefixes[p] ? prefixes[p] + prop.charAt( 0 ).toUpperCase() + prop.slice( 1 ) : prop;

			if ( el.style[prefixedProp] !== undefined ) {
				return prefixedProp;
			}

		}

		return '';

	};

	/**
	 * Clone object properties
	 * @param {Object} obj
	 * @return {Object} copy
	 */
	utils.cloneObject = function( obj ) {

		var copy = {};

		for ( var attr in obj ) {

			if ( obj.hasOwnProperty( attr ) ) {
				copy[attr] = obj[attr];
			}

		}

		return copy;

	};

	/**
	 * Create DOM element
	 * @param {string} tag
	 * @param {string} classes
	 * @return {Object} el
	 */
	utils.createEl = function( tag, classes ) {

		var el = document.createElement( tag || 'div' );

		if ( classes ) {
			el.className = classes;
		}

		return el;

	};

	/**
	 * Camel case string
	 * @param {string} string
	 * @return {string} string
	 */
	utils.camelize = function( string ) {

		return string.replace( /-([a-z])/g, function( g ) {
			return g[1].toUpperCase();
		});

	};

	/**
	 * Add/remove event listeners
	 * @param {Object} _this
	 * @param {Object} el
	 * @param {Array} event
	 * @param {string} fn
	 * @param {boolean} isBind
	 */
	utils.handleEvents = function( _this, el, event, fn, isBind ) {

		if ( typeof this.event_handlers !== 'object' ) {
			this.event_handlers = {};
		}

		// register handlers for later (to remove)
		if ( !this.event_handlers[fn] ) {
			this.event_handlers[fn] = _this[fn].bind( _this );
		}

		// set bind method
		isBind = isBind === undefined ? true : !!isBind;
		var bindMethod = isBind ? 'addEventListener' : 'removeEventListener';

		// loop through each event
		event.forEach( function( ev ) {
			el[bindMethod]( ev, this.event_handlers[fn], false );
		}.bind( this ) );

	};

	/**
	 * Emits events via EvEmitter and jQuery events
	 * @param {Object} _this
	 * @param {string} namespace - namespace of event
	 * @param {string} type - name of event
	 * @param {Event} event - original event
	 * @param {Array} args - extra arguments
	 */
	utils.dispatchEvent = function( _this, namespace, type, event, args ) {

		// add Namespace for the event
		type += namespace ? '.' + namespace : '';
		// add original event to arguments
		var emitArgs = event ? [event].concat( args ) : [args];

		// trigger vanilla JS event
		_this.emitEvent( type, emitArgs );

	};

	/**
	 * Function for applying a debounce effect to a function call.
	 * @function
	 * @param {Function} func - Function to be called at end of timeout.
	 * @param {number} delay - Time in ms to delay the call of `func`.
	 * @returns function
	 */
	utils.throttle = function( func, delay ) {

		var timestamp = null,
			limit = delay;

		return function() {

			var self = this,
				args = arguments,
				now = Date.now();

			if ( !timestamp || now - timestamp >= limit ) {

				timestamp = now;
				func.apply( self, args );

			}

		};

	};

	/**
	 * Modulo calculation
	 * @param {number} length
	 * @param {number} index
	 * @return {number}
	 */
	utils.modulo = function( length, index ) {

		return ( length + ( index % length ) ) % length;

	};

	/**
	 * Regex classname from string
	 * @param {string} className
	 * @return {RegExp}
	 */
	utils.classReg = function( className ) {

		return new RegExp( '(^|\\s+)' + className + '(\\s+|$)' );

	};

	/**
	 * Check if element has class name
	 * @param {Object} el
	 * @param {string} className
	 * @return {boolean}
	 */
	utils.hasClass = function( el, className ) {

		return !!el.className.match( this.classReg( className ) );

	};

	/**
	 * Add a class name to an element
	 * @param {Object} el
	 * @param {string} className
	 */
	utils.addClass = function( el, className ) {

		if ( !this.hasClass( el, className ) ) {
			el.className += ( el.className ? ' ' : '' )  + className;
		}

	};

	/**
	 * Remove a class name to an element
	 * @param {Object} el
	 * @param {string} className
	 */
	utils.removeClass = function( el, className ) {

		if ( this.hasClass( el, className ) ) {
			el.className = el.className.replace( this.classReg( className ), ' ' ).replace( /\s+$/, '' );
		}

	};

	/**
	 * Translate an element
	 * @param {Object} el
	 * @param {number} x
	 * @param {number} y
	 * @param {number} s
	 */
	utils.translate = function( el, x, y, s ) {

		var scale = s ? ' scale(' + s + ',' + s + ')' : '';

		el.style[this.browser.trans] = ( this.browser.gpu ) ?
			'translate3d(' + ( x || 0 ) + 'px, ' + ( y || 0 ) + 'px, 0)' + scale :
			'translate(' + ( x || 0 ) + 'px, ' + ( y || 0 ) + 'px)' + scale;

	};

	/*
	 * Browser features detection
	 */
	utils.browser = {
		trans : utils.prop( 'transform' ),
		gpu   : utils.prop( 'perspective' ) ? true : false
	};

	return utils;

}));

/**
 * EvEmitter (Emit event)
 * Modified version of David Desandro (https://github.com/desandro/EventEmitter)
 * v1.0.0
 */
( function( root, factory ) {

	if ( typeof define === 'function' && define.amd ) {

		// AMD
		define(
			'themeone-event/event',
			factory
		);

	} else if ( typeof module === 'object' && module.exports ) {

		// Node, CommonJS-like
		module.exports = factory();

	} else {

		// Browser globals (root is window)
		root.ThemeoneEvent = factory();

	}

}( typeof window !== 'undefined' ? window : this, function() {

	"use strict";

	var EvEmitter = function() {},
		proto = EvEmitter.prototype;

	/**
	 * Bind on event
	 * @param {string} eventName
	 * @param {Object} listener
	 * @return {Object} this
	 */
	proto.on = function( eventName, listener ) {

		if ( !eventName || !listener ) {
			return null;
		}

		// set events hash
		var events = this._events = this._events || {};
		// set listeners array
		var listeners = events[eventName] = events[eventName] || [];

		// only add once
		if ( listeners.indexOf( listener ) === -1 ) {
			listeners.push( listener );
		}

		return this;

	};

	/**
	 * Unbind event event
	 * @param {string} eventName
	 * @param {Object} listener
	 * @return {Object} this
	 */
	proto.off = function( eventName, listener ) {

		var listeners = this._events && this._events[eventName];

		if ( !listeners || !listeners.length ) {
			return null;
		}

		var index = listeners.indexOf( listener );

		if ( index !== -1 ) {
			listeners.splice( index, 1 );
		}

		return this;

	};

	/**
	 * Emit an event
	 * @param {string} eventName
	 * @param {Object} args
	 * @return {Object} this
	 */
	proto.emitEvent = function( eventName, args ) {

		var listeners = this._events && this._events[eventName];
		if ( !listeners || !listeners.length ) {
			return null;
		}

		var i = 0,
			listener = listeners[i];
			args = args || [];

		// once stuff
		var onceListeners = this._onceEvents && this._onceEvents[eventName];

		while ( listener ) {

			var isOnce = onceListeners && onceListeners[listener];

			if ( isOnce ) {

				// remove before trigger to prevent recursion
				this.off( eventName, listener );
				// unset once flag
				delete onceListeners[listener];

			}

			// trigger listener
			listener.apply( this, args );

			// get next listener
			i += isOnce ? 0 : 1;
			listener = listeners[i];

		}

		return this;

	};

	return EvEmitter;

}));

/**
 * Animate
 * RAF animations
 * v1.0.0
 */
( function( root, factory ) {

	if ( typeof define === 'function' && define.amd ) {

		// AMD
		define(
			'themeone-animate/animate',
			['themeone-utils/utils',
			'themeone-event/event'],
			factory
		);

	} else if ( typeof module === 'object' && module.exports ) {

		// Node, CommonJS-like
		module.exports = factory(
			require( 'themeone-utils' ),
			require( 'themeone-event' )
		);

	} else {

		// Browser globals (root is window)
		root.ThemeoneAnimate = factory(
			root.ThemeoneUtils,
			root.ThemeoneEvent
		);

	}

}( this, function( utils, EvEmitter ) {

	'use strict';

	/**
	 * Animate
	 * @param {Object} element
	 * @param {Object} positions
	 * @param {Object} friction
	 * @param {Object} attraction
	 */
	var Animate = function( element, positions, friction, attraction ) {

		this.element  = element;
		this.defaults = positions;
		this.forces   = {
			friction   : friction || 0.28,
			attraction : attraction || 0.028
		};

		this.resetAnimate();

	};

	var proto = Animate.prototype = Object.create( EvEmitter.prototype );

	/**
	 * Update animation on drag
	 * @param {Object} obj
	 */
	proto.updateDrag = function( obj ) {

		this.move = true;
		this.drag = obj;

	};

	/**
	 * Release drag
	 */
	proto.releaseDrag = function() {

		this.move = false;

	};

	/**
	 * Animate to a specific position
	 * @param {Object} obj
	 */
	proto.animateTo = function( obj ) {

		this.attraction = obj;

	};

	/**
	 * Start render animation
	 */
	proto.startAnimate = function() {

		this.move = true;
		this.settle = false;
		this.restingFrames = 0;

		if ( !this.RAF ) {
			this.animate();
		}

	};

	/**
	 * Stop animation
	 */
	proto.stopAnimate = function() {

		this.move = false;
		this.restingFrames = 0;

		if ( this.RAF ) {
			cancelAnimationFrame( this.RAF );
			this.RAF = false;
		}

		this.start = utils.cloneObject( this.position );
		this.velocity = {
			x : 0,
			y : 0,
			s : 0
		};

	};

	/**
	 * Reset animation
	 */
	proto.resetAnimate = function() {

		this.stopAnimate();

		this.settle = true;
		this.drag = utils.cloneObject( this.defaults );
		this.start = utils.cloneObject( this.defaults );
		this.resting = utils.cloneObject( this.defaults );
		this.position = utils.cloneObject( this.defaults );
		this.attraction = utils.cloneObject( this.defaults );

	};

	/**
	 * Handle animation rendering
	 */
	proto.animate = function() {

		// animation loop function
		var loop = ( function() {

			if ( typeof this.position !== 'undefined' ) {

				// get clone previous values
				var previous = utils.cloneObject( this.position );

				// set main forces
				this.applyDragForce();
				this.applyAttractionForce();

				// dispatch render event (before physic otherwise calculation will be wrong)
				utils.dispatchEvent( this, 'toanimate', 'render', this );

				// apply physics
				this.integratePhysics();
				this.getRestingPosition();

				// render positions
				this.render( 100 );

				// loop
				this.RAF = requestAnimationFrame( loop );

				// cancel RAF if no animations
				this.checkSettle( previous );

			}

		}).bind( this );

		// start animation loop
		this.RAF = requestAnimationFrame( loop );

	};

	/**
	 * Simulation physic velocity
	 */
	proto.integratePhysics = function() {

		for ( var k in this.position ) {

			if ( typeof this.position[k] !== 'undefined' ) {

				this.position[k] += this.velocity[k];
				this.position[k] = ( k === 's' ) ? Math.max( 0.1, this.position[k] ) : this.position[k];
				this.velocity[k] *= this.getFrictionFactor();

			}

		}

	};

	/**
	 * Simulation physic friction
	 */
	proto.applyDragForce = function() {

		if ( this.move ) {

			for ( var k in this.drag ) {

				if ( typeof this.drag[k] !== 'undefined' ) {

					var dragVelocity = this.drag[k] - this.position[k];
					var dragForce = dragVelocity - this.velocity[k];
					this.applyForce( k, dragForce );

				}

			}

		}

	};

	/**
	 * Simulation physic attraction
	 */
	proto.applyAttractionForce = function() {

		if ( !this.move ) {

			for ( var k in this.attraction ) {

				if ( typeof this.attraction[k] !== 'undefined' ) {

					var distance = this.attraction[k] - this.position[k];
					var force = distance * this.forces.attraction;
					this.applyForce( k, force );

				}

			}

		}

	};

	/**
	 * Calculate estimated resting position from physic
	 */
	proto.getRestingPosition = function() {

		for ( var k in this.position ) {

			if ( typeof this.position[k] !== 'undefined' ) {
				this.resting[k] = this.position[k] + this.velocity[k] / ( 1 - this.getFrictionFactor() );
			}

		}

	};

	/**
	 * Apply an attraction force
	 * @param {string} direction
	 * @param {number} force
	 */
	proto.applyForce = function( direction, force ) {

		this.velocity[direction] += force;

	};

	/**
	 * Apply a friction factor
	 * @return {number}
	 */
	proto.getFrictionFactor = function() {

		return 1 - this.forces.friction;

	};

	/**
	 * Round value to correctly calculate if animate is settle or not
	 * @param {number} values
	 * @param {number} round
	 */
	proto.roundValues = function( values, round ) {

		for ( var k in values ) {

			if ( typeof values[k] !== 'undefined' ) {

				round = k === 's' ? round * 100 : round;
				values[k] = Math.round( values[k] * round ) / round;

			}

		}

	};

	/**
	 * Check if the current animated object is settled
	 * @param {Object} previous
	 */
	proto.checkSettle = function( previous ) {

		// keep track of frames where x hasn't moved
		if ( !this.move ) {

			var count = 0;

			for ( var k in this.position ) {

				if ( typeof this.position[k] !== 'undefined' ) {

					var round = k === 's' ? 10000 : 100;

					if ( Math.round( this.position[k] * round ) === Math.round( previous[k] * round ) ) {

						count++;
						if ( count === Object.keys( this.position ).length ) {
							this.restingFrames++;
						}

					}

				}

			}

		}

		// stop RAF animation if position didn't change during 3 frames (60fps)
		if ( this.restingFrames > 2 ) {

			this.stopAnimate();
			this.render( this.position.s > 1 ? 10 : 1 );
			this.settle = true;

			// dispatch settle only if moved
			if ( JSON.stringify( this.start ) !== JSON.stringify( this.position ) ) {
				utils.dispatchEvent( this, 'toanimate', 'settle', this );
			}

		}

	};

	/**
	 * Render animation
	 * @param {number} round
	 */
	proto.render = function( round ) {

		// round new position values
		this.roundValues( this.position, round );

		// translate
		utils.translate(
			this.element,
			this.position.x,
			this.position.y,
			this.position.s
		);

	};

	return Animate;

}));

/**
 * ModuloBox
 * Core Plugin
 * v1.3.0
 */
( function( root, factory ) {

	if ( typeof define === 'function' && define.amd ) {

		// AMD
		define(
			['themeone-utils/utils',
			'themeone-event/event',
			'themeone-animate/animate'],
			factory
		);

	} else if ( typeof exports === 'object' && module.exports ) {

		// Node, CommonJS-like
		module.exports = factory(
			require( 'themeone-utils' ),
			require( 'themeone-event' ),
			require( 'themeone-animate' )
		);

	} else {

		// Browser globals (root is window)
		root.ModuloBox = factory(
			root.ThemeoneUtils,
			root.ThemeoneEvent,
			root.ThemeoneAnimate
		);

	}

}( this, function( utils, EvEmitter, Animate ) {

	'use strict';

	// Modulobox version
	var version = '1.3.0';

	// Globally unique identifiers
	var GUID = 0;

	// Internal store of all plugin intances
	var instances = {};

	// Internal cache
	var expando = 'mobx' + ( version + Math.random() ).replace( /\D/g, '' );
	var cache   = { uid : 0 };

	// Default options
	var defaults = {
		// Setup
		mediaSelector      : '.mobx', // Media class selector used to fetch media in document
		// Behaviour
		threshold          : 5,       // Dragging doesn't start until 5px moved (not taken into account when pinched with 2 fingers)
		attraction         : {        // Attracts the position of the slider to the selected cell. Higher value makes the slider move faster. Lower value makes it move slower.
			slider : 0.055, // From 0 to 1
			slide  : 0.018, // From 0 to 1
			thumbs : 0.016  // From 0 to 1
		},
		friction           : {       // Friction slows the movement of slider. Higher value makes the slider feel stickier & less bouncy. Lower value makes the slider feel looser & more wobbly
			slider : 0.62,  // From 0 to 1
			slide  : 0.18,  // From 0 to 1
			thumbs : 0.22   // From 0 to 1
		},
		rightToLeft        : false,   // Enable right to left layout
		loop               : 3,       // From how much items infinite loop start (0: no loop, 1: always loop, 2: loop if 2 items at least, etc...)
		preload            : 1,       // Number of media to preload. If 1 set, it will load the currently media opened and once loaded it'll preload the 2 closest media. value can be 1, 3 or 5
		unload             : false,   // Allows to unload media which are out of the visible viewport to improve performance (EXPERIMENTAL - not work in Safari, can create issue on other browsers)
		timeToIdle         : 4000,    // Hide controls when an idle state exceed 4000ms (0 - always keep controls visible)
		history            : false,   // Enable/disable history in browser (deeplink) when opening/navigating/closing a gallery
		mouseWheel         : true,    // Enable/disable mouseWheel (up/down/space keys) to scroll page
		contextMenu        : true,    // Enable/disable contextmenu on right click (on image)
		scrollBar          : true,    // Show/hide browser scrollbar
		fadeIfSettle       : false,   // Show media only if the slider is settled (improves performance especially for iframe/html)
		// User Interface
		controls           : ['close'], // 'zoom', 'play', 'fullScreen', 'download', 'share', 'close'
		prevNext           : true,    // Show/hide prev/next navigation buttons
		prevNextTouch      : false,   // Show/hide prev/next navigation buttons on small touch capable devices
		counterMessage     : '[index] / [total]', // Message used in the item counter. If empty, no counter will be displayed
		caption            : true,    // Show/hide caption under media (globally)
		autoCaption        : false,   // Generate captions from alt and/or title attributes if data-title and/or data-desc missing
		captionSmallDevice : true,    // Show/hide caption under media on small browser width like mobile devices
		thumbnails         : true,    // Enable/disable thumbnail
		thumbnailsNav      : 'basic', // Navigation type for the thumbnail (basic or centered)
		thumbnailSizes     : {        // Set thumbnails size for different browser widths (unlimited)
			1920 : {          // browser width (px)
				width  : 110, // thumbnail width (px) - 0 in width will hide thumbnails
				height : 80,  // thumbnail height(px) - 0 in height will hide thumbnails
				gutter : 10   // gutter width (px) between thumbnails
			},
			1280 : {
				width  : 90,
				height : 65,
				gutter : 10
			},
			680 : {
				width  : 70,
				height : 50,
				gutter : 8
			},
			480 : {
				width  : 60,
				height : 44,
				gutter : 5
			}
		},
		spacing            : 0.1,     // Space in percent between each slide. For example, 0.1 will render as a 10% of sliding viewport width
		smartResize        : true,    // Allow images to overflow on top bar and/or caption on small devices only if image can fill the full screen height
		overflow           : false,   // Allow images to overflow on top bar and/or caption (if enable, smart resize will be ignored)
		loadError          : 'Sorry, an error occured while loading the content...',
		noContent          : 'Sorry, no content was found!',
		// functions
		prevNextKey        : true,    // Press keyboard left/right to navigate
		scrollToNav        : false,   // Scroll with a mousewheel to navigate next/prev (disabled if scrollToZoom set to true)
		scrollSensitivity  : 15,      // Threshold in 'px' from when a methods is called (Useful to fine tune touchpad and free mousewheel sensitivity)
		zoomTo             : 'auto',  // Zoom factor applied on button click and double tap ('auto' will scale to the natural image size, accept number value (e.g.: 2, 3, 4, etc...)
		minZoom            : 1.2,     // Min zoom factor required to enable Zoom feature on click or pinch
		maxZoom            : 4,       // Max zoom factor allowed when pinched/scrolled or if the zoomTo auto value is superior to maxZoom
		doubleTapToZoom    : true,    // double Tap/click to zoom on image
		scrollToZoom       : false,   // Scroll with a mousewheel to zoom in/out
		pinchToZoom        : true,    // Pinch in with 2 fingers to zoom on image
		escapeToClose      : true,    // Esc keyboard key to close the lightbox
		scrollToClose      : false,   // Scroll with a mousewheel to close the lightbox (disabled if scrollToNav and/or scrollToZoom set to true)
		pinchToClose       : true,    // Pinch out with 2 fingers to close the lightbox
		dragToClose        : true,    // Drag vertically to close the lightbox
		tapToClose         : true,    // Tap/click outside the image/media to close the lightbox
		shareButtons       : ['facebook', 'googleplus', 'twitter', 'pinterest', 'linkedin', 'reddit'], // 'facebook', 'googleplus', 'twitter', 'pinterest', 'linkedin', 'reddit', 'stumbleupon', 'tumblr', 'blogger', 'buffer', 'digg', 'evernote'
		shareText          : 'Share on', // text displayed above social sharing buttons
		sharedUrl          : 'deeplink', // url used to share the media ('page', deeplink', 'media')
		slideShowInterval  : 4000,    // Time interval, in milliseconds, between slide changes in slideshow mode
		slideShowAutoPlay  : false,   // Automatically start slideShow mode on opening
		slideShowAutoStop  : false,   // Stop slideshow when the last item is reached (only if slider loop)
		countTimer         : true,    // Show a circular countdown timer next to the counter message when autoplay (slideshow)
		countTimerBg       : 'rgba(255,255,255,0.25)', // Background color of the circular timer stroke
		countTimerColor    : 'rgba(255,255,255,0.75)', // Color of the circular timer stroke
		mediaelement       : false,   // Play HTML5 videos with mediaelement (jQuery library required & mediaelement.js script)
		videoRatio         : 16 / 9,  // Video aspect ratio
		videoMaxWidth      : 1180,    // Video max width allowed in a slide
		videoAutoPlay      : false,   // Autoplay video on opening
		videoThumbnail     : false    // Automatically fetches poster/thumbnails of iframe videos if missing
	};

	/**
	 * ModuloBox
	 * @constructor
	 * @param {Object} options
	 */
	var ModuloBox = function( options ) {

		// extend defaults with user-set options
		this.options = utils.extend( options, defaults );
		// set main plugin variables
		this.setVar();

	};

	// Set plugin prototype (and add EvEmitter proto)
	var proto = ModuloBox.prototype = Object.create( EvEmitter.prototype );

	/**
	 * Initialize ModuloBox
	 * Create main instance & DOM
	 */
	proto.init = function() {

		// prevent to initialize twice
		if ( this.GUID ) {
			return instances[this.GUID];
		}

		// set instance
		this.GUID = ++GUID;
		instances[this.GUID] = this;

		this.createDOM();
		this.setAnimation();
		this.getGalleries();
		this.openFromQuery();

	};

	/**
	 * Set main plugin variable
	 */
	proto.setVar = function() {

		var win = window,
			doc = document,
			nav = navigator;

		// prefix used for class names
		this.pre = 'mobx';

		// set main var
		this.gesture  = {};
		this.buttons  = {};
		this.slider   = {};
		this.slides   = {};
		this.cells    = {};
		this.states   = {};
		this.pointers = [];

		// set internal cache
		this.expando  = expando;
		this.cache    = cache;

		// drag events
		this.dragEvents = this.detectPointerEvents();

		// browser detection
		this.browser = {
			touchDevice : ( 'ontouchstart' in win ) || ( nav.maxTouchPoints > 0 ) || ( nav.msMaxTouchPoints > 0 ),
			pushState   : 'history' in win && 'pushState' in history,
			fullScreen  : this.detectFullScreen(),
			mouseWheel  : 'onwheel' in doc.createElement( 'div' ) ?
						'wheel' : doc.onmousewheel !== undefined ?
						'mousewheel' : 'DOMMouseScroll'
		};

		// add social & video stream support
		this.iframeVideo = this.iframeVideo();
		this.socialMedia = this.socialMedia();

	};

	/**
	 * Detect pointer type browser support
	 * @return {Object}
	 */
	proto.detectPointerEvents = function() {

		var nav = navigator;

		// listen for W3C Pointer Events (IE11)
		if ( nav.pointerEnabled ) {

			return {
				start : ['pointerdown'],
				move  : ['pointermove'],
				end   : ['pointerup', 'pointercancel']
			};

		}

		// listen for IE10 Pointer Events
		if ( nav.msPointerEnabled ) {

			return {
				start : ['MSPointerDown'],
				move  : ['MSPointerMove'],
				end   : ['MSPointerUp', 'MSPointerCancel']
			};

		}

		// listen for both Mouse & Touch Events
		return {
			start : ['mousedown', 'touchstart'],
			move  : ['mousemove', 'touchmove'],
			end   : ['mouseup', 'mouseleave', 'touchend', 'touchcancel']
		};

	};

	/**
	 * Detect fullScreen browser support
	 * Remove fullScreen button if not supported
	 * @return {Object}
	 */
	proto.detectFullScreen = function() {

		var fullScreen = ['fullscreenEnabled', 'webkitFullscreenEnabled', 'mozFullScreenEnabled', 'msFullscreenEnabled'];

		for ( var i = 0, l = fullScreen.length; i < l; i++ ) {

			if ( document[fullScreen[i]] ) {

				return {
					element : ['fullscreenElement', 'webkitFullscreenElement', 'mozFullScreenElement', 'msFullscreenElement'][i],
					request : ['requestFullscreen', 'webkitRequestFullscreen', 'mozRequestFullScreen', 'msRequestFullscreen'][i],
					change  : ['fullscreenchange', 'webkitfullscreenchange', 'mozfullscreenchange', 'MSFullscreenChange'][i],
					exit    : ['exitFullscreen', 'webkitExitFullscreen', 'mozCancelFullScreen', 'msExitFullscreen'][i]
				};

			}

		}

		var controls = this.options.controls,
			index = controls.indexOf( 'fullScreen' );

		// if no fullscreen support remove fullscreen button if exists
		if ( index > -1 ) {
			controls.splice( index, 1 );
		}

		return null;

	};

	/**
	 * Iframe stream video
	 * HTML5 window post message API
	 * [ID] => iframe video ID
	 * @return {Object}
	 */
	proto.iframeVideo = function() {

		return {
			youtube : {
				reg    : /(?:www\.)?youtu\.?be(?:\.com)?\/?.*?(?:watch|embed)?(?:.*v=|v\/|watch%3Fv%3D|\/)([\w\-_]+)&?/i,
				url    : 'https://www.youtube.com/embed/[ID]?enablejsapi=1&rel=0&autoplay=1',
				share  : 'https://www.youtube.com/watch?v=[ID]',
				poster : 'https://img.youtube.com/vi/[ID]/maxresdefault.jpg',
				thumb  : 'https://img.youtube.com/vi/[ID]/default.jpg',
				play   : { event : 'command', func : 'playVideo' },
				pause  : { event : 'command', func : 'pauseVideo' }
			},
			vimeo : {
				reg    : /(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/(?:[^\/]*)\/videos\/|album\/(?:\d+)\/video\/|video\/)?(\d+)(?:[a-zA-Z0-9_\-]+)?/i,
				url    : 'https://player.vimeo.com/video/[ID]?autoplay=1&api=1',
				share  : 'https://vimeo.com/[ID]',
				poster : 'https://vimeo.com/api/v2/video/[ID].json',
				play   : { event : 'command', method : 'play' },
				pause  : { event : 'command', method : 'pause' }
			},
			dailymotion : {
				reg    : /(?:www\.)?(?:dailymotion\.com(?:\/embed)(?:\/video|\/hub)|dai\.ly)\/([0-9a-z]+)(?:[\-_0-9a-zA-Z]+#video=(?:[a-zA-Z0-9_\-]+))?/i,
				url    : 'https://dailymotion.com/embed/video/[ID]?autoplay=1&api=postMessage',
				share  : 'https://www.dailymotion.com/video/[ID]',
				poster : 'https://www.dailymotion.com/thumbnail/video/[ID]',
				thumb  : 'https://www.dailymotion.com/thumbnail/video/[ID]',
				play   : 'play',
				pause  : 'pause'
			},
			wistia : {
				reg    : /(?:www\.)?(?:wistia\.(?:com|net)|wi\.st)\/(?:(?:m|medias|projects)|embed\/(?:iframe|playlists))\/([a-zA-Z0-9_\-]+)/i,
				url    : 'https://fast.wistia.net/embed/iframe/[ID]?version=3&enablejsapi=1&html5=1&autoplay=1',
				share  : 'https://fast.wistia.net/embed/iframe/[ID]',
				poster : 'https://fast.wistia.com/oembed?url=https://home.wistia.com/medias/[ID].json',
				play   : { event : 'cmd', method : 'play' },
				pause  : { event : 'cmd', method : 'pause' }
			}
		};

	};

	/**
	 * Social media url
	 * [url]   => location deeplink or media url
	 * [text]  => text from title or null
	 * [image] => image or video poster or null
	 * @return {Object}
	 */
	proto.socialMedia = function() {

		return {
			facebook    : 'https://www.facebook.com/sharer/sharer.php?u=[url]',
			googleplus  : 'https://plus.google.com/share?url=[url]',
			twitter     : 'https://twitter.com/intent/tweet?text=[text]&url=[url]',
			pinterest   : 'https://www.pinterest.com/pin/create/button/?url=[url]&media=[image]&description=[text]',
			linkedin    : 'https://www.linkedin.com/shareArticle?url=[url]&mini=true&title=[text]',
			reddit      : 'https://www.reddit.com/submit?url=[url]&title=[text]',
			stumbleupon : 'https://www.stumbleupon.com/badge?url=[url]&title=[text]',
			tumblr      : 'https://www.tumblr.com/share?v=3&u=[url]&t=[text]',
			blogger     : 'https://www.blogger.com/blog_this.pyra?t&u=[url]&n=[text]',
			buffer      : 'https://bufferapp.com/add?url=[url]title=[text]',
			digg        : 'https://digg.com/submit?url=[url]&title=[text]',
			evernote    : 'https://www.evernote.com/clip.action?url=[url]&title=[text]'
		};

	};

	// ----- Create & append Lightbox in document ----- //

	/**
	 * Create DOM for the lightbox
	 */
	proto.createDOM = function() {

		this.DOM = {};

		var elements = [
			'holder',
			'overlay',
			'slider',
			'item',
			'item-inner',
			'ui',
			'top-bar',
			'bottom-bar',
			'share-tooltip',
			'counter',
			'caption',
			'caption-inner',
			'thumbs-holder',
			'thumbs-inner'
		];

		for ( var i = 0; i < elements.length; i++ ) {
			this.DOM[utils.camelize( elements[i] )] = utils.createEl( 'div', this.pre + '-' + elements[i] );
		}

		this.appendDOM( this.DOM );

	};

	/**
	 * Append lightbox DOM to body
	 * @param {{holder, item, itemInner, overlay, slider, ui, topBar}} dom
	 */
	proto.appendDOM = function( dom ) {

		var opt = this.options;

		// append main containers
		dom.holder.appendChild( dom.overlay );
		dom.holder.appendChild( dom.slider );
		dom.holder.appendChild( dom.ui );

		// append slides & cells to slider
		for ( var i = 0; i < 5; i++ ) {

			var slide = dom.item.cloneNode( true );
			slide.appendChild( dom.itemInner.cloneNode( true ) );
			dom.slider.appendChild( slide );

			// manually assign dom to slides object
			this.slides[i] = slide;

		}

		// set slides length
		this.slides.length = dom.slider.children.length;

		// create UI elements
		this.createUI( dom, opt );

		// add lightbox attribute
		dom.holder.setAttribute( 'tabindex', -1 );
		dom.holder.setAttribute( 'aria-hidden', true );

		// add plugin version in comment
		this.DOM.comment = document.createComment( ' ModuloBox (v' + version + ') by Themeone ' );
		document.body.appendChild( this.DOM.comment );

		// Dispatch event before appending lightbox DOM (to add custom markup)
		utils.dispatchEvent( this, 'modulobox', 'beforeAppendDOM', dom );

		// append lightbox to body
		document.body.appendChild( dom.holder );

		// store top bar height for later
		dom.topBar.height = dom.topBar.clientHeight;

	};

	/**
	 * Create UI elements
	 * @param {{holder, ui, topBar, bottomBar, thumbsHolder, thumbsInner, counter, shareTooltip, caption, captionInner}} dom
	 * @param {Object} opt
	 */
	proto.createUI = function( dom, opt ) {

		var shareIndex = opt.controls.indexOf( 'share' );

		// append share tooltip
		if ( shareIndex > -1 ) {

			var buttons = opt.shareButtons,
				i = buttons.length;

			// check if each social button exists
			while ( i-- ) {

				if ( !this.socialMedia.hasOwnProperty( buttons[i] ) ) {
					buttons.splice( i, 1 );
				}

			}

			// if there are social button(s) registered
			if ( buttons.length ) {

				dom.ui.appendChild( dom.shareTooltip );

				// add share text
				if ( opt.shareText ) {
					dom.shareTooltip.appendChild( utils.createEl( 'span' ) ).textContent = opt.shareText;
				}

				this.createButtons( buttons, dom.shareTooltip, 'shareOn' );

				// remove share button if no social media
			} else {
				opt.controls.splice( shareIndex, 1 );
			}

		}

		// append top bar & buttons
		if ( opt.controls.length || opt.counterMessage ) {

			var slideShow = opt.controls.indexOf( 'play' );

			dom.ui.appendChild( dom.topBar );

			// append counter message
			if ( opt.counterMessage ) {
				dom.topBar.appendChild( dom.counter );
			}

			// remove play button if slideShow interval <= 0
			if ( opt.slideShowInterval < 1 && slideShow > -1 ) {
				opt.controls.splice( slideShow, 1 );
			}

			// append countdown timer
			if ( opt.countTimer && slideShow > -1 ) {

				var timer = this.DOM.timer = utils.createEl( 'canvas', this.pre + '-timer' );
				timer.setAttribute( 'width', 48 );
				timer.setAttribute( 'height', 48 );
				dom.topBar.appendChild( timer );

			}

			// append crontrol buttons
			if ( opt.controls.length ) {
				// clone array (prevent options to be reversed if destroyed and initialized again)
				var controls = opt.controls.slice();
				this.createButtons( controls.reverse(), dom.topBar );
			}

		}

		// append bottom bar
		if ( opt.caption || opt.thumbnails ) {

			dom.ui.appendChild( dom.bottomBar );

			// append caption
			if ( opt.caption ) {

				dom.bottomBar.appendChild( dom.caption )
					.appendChild( dom.captionInner );


			}

			// append thumbnails
			if ( opt.thumbnails ) {

				dom.bottomBar.appendChild( dom.thumbsHolder )
					.appendChild( dom.thumbsInner );

			}

		}

		// append prev/next buttons
		if ( opt.prevNext ) {
			this.createButtons( ['prev', 'next'], dom.ui );
		}

	};

	/**
	 * Create Buttons elements
	 * @param {Array} buttons
	 * @param {Object} dom
	 * @param {string} event (event name attached to a button)
	 */
	proto.createButtons = function( buttons, dom, event ) {

		var length = buttons.length;

		for ( var i = 0; i < length; i++ ) {

			var type = buttons[i];

			// create and append button
			this.buttons[type] = utils.createEl( 'BUTTON', this.pre + '-' + type.toLowerCase() );
			dom.appendChild( this.buttons[type] );

			// attach event if button have a corresponding prototype event
			if ( ( type && typeof this[type] === 'function' ) || event ) {

				this.buttons[type].event  = event ? event : type;
				this.buttons[type].action = type;

				if ( event === 'shareOn' ) {
					this.buttons[type].setAttribute( 'title', type.charAt( 0 ).toUpperCase() + type.slice( 1 ) );
				}

			}

		}

	};

	/**
	 * Get media galleries (img, video, iframe, HTML)
	 */
	proto.getGalleries = function() {

		// prepare galleries
		// reset if executed again
		this.galleries = {};

		// prepare querySelector
		var selectors = this.options.mediaSelector,
			sources   = '';

		// if no selector set (prevent to trigger unnecessary errors)
		if ( !selectors ) {
			return false;
		}

		// setup sources
		try {
			sources = document.querySelectorAll( selectors );
		} catch (error) {
			utils.error( 'Your current mediaSelector is not a valid selector: "' + selectors + '"' );
		}

		for ( var i = 0, l = sources.length; i < l; i++ ) {

			var source = sources[i],
				media = {};

			// get original image url/src depending of the tagName
			media.src = source.tagName === 'A'   ? source.getAttribute( 'href' ) : null;
			media.src = source.tagName === 'IMG' ? source.currentSrc || source.src  : media.src;
			// if mediaSelector have data-src attr, take this one instead of src or href attributes
			media.src = source.getAttribute( 'data-src' ) || media.src;

			if ( media.src ) {

				this.getMediaAtts( source, media );
				this.setMediaType( media );

				// If the media have a known type
				if ( media.type ) {

					this.getMediaThumb( source, media );
					this.getVideoThumb( media );
					this.getMediaCaption( source, media );

					// format caption
					this.setMediaCaption( media );

					// get the gallery name & features
					var gallery = this.setGalleryName( source );
					this.setGalleryFeatures( gallery, media );

					// assign media index
					media.index = gallery.length;
					// push media data in gallery
					gallery.push( media );

					// attach click event to media
					this.setMediaEvent( source, gallery.name, media.index );

				}

			}

		}

		// dispatch updateGalleries event
		utils.dispatchEvent( this, 'modulobox', 'updateGalleries', this.galleries );

	};

	/**
	 * Add media in a gallery
	 * @param {number|string} name (gallery name)
	 * @param {Object} media (media collection)
	 */
	proto.addMedia = function( name, media ) {

		if ( !media || typeof media !== 'object' ) {

			utils.error( 'No media was found to addMedia() in a gallery' );
			return false;

		}

		// set gallery
		name = name === '' ? 1 : name;
		var gallery = this.galleries[name];
		gallery = !gallery ? ( this.galleries[name] = [] ) : gallery;
		gallery.name = name;

		var length = media.length;
		for ( var i = 0; i < length; i++ ) {

			var item = utils.cloneObject( media[i] );

			if ( item.src ) {

				this.setMediaType( item );
				this.getVideoThumb( item );
				this.setMediaCaption( item );
				this.setGalleryFeatures( gallery, item );

				// assign media index
				item.index = gallery.length;
				// push media data in gallery
				gallery.push( item );

			}

		}

	};

	/**
	 * Set media type depending of its content
	 * Image/video types only, iframe & HTML must be set manually
	 * @param {Object} media
	 */
	proto.setMediaType = function( media ) {

		// if the media type is already set and valid
		if ( ['image', 'video', 'iframe', 'HTML'].indexOf( media.type ) > -1 ) {
			return;
		}

		// reset media type in case not valid
		media.type = null;

		// get source
		var source = media.src ? media.src : null;

		/* jslint bitwise: true */
		// get extension without query string
		var extension = ( source.split( /[?#]/ )[0] || source ).substr( ( ~-source.lastIndexOf( '.' ) >>> 0 ) + 2 );
		/* jslint bitwise: false */

		// detect image
		if ( /(jpg|jpeg|png|bmp|gif|tif|tiff|jfi|jfif|exif|svg)/i.test( extension ) || ['external.xx.fbcdn', 'drscdn.500px.org'].indexOf( source ) > -1 ) {

			media.type = 'image';
			media.src  = this.getSrc( source );

		// detect HTML5 video
		} else if ( /(mp4|webm|ogv)/i.test( extension ) ) {

			media.type   = 'video';
			media.format = 'html5';

		// detect iframe video
		} else {

			var stream = this.iframeVideo;

			for ( var type in stream ) {

				if ( stream.hasOwnProperty( type ) ) {

					var regs = source.match( stream[type].reg );

					if ( regs && regs[1] ) {

						var object = stream[type];

						media.type   = 'video';
						media.format = type;
						media.share  = object.share.replace( '[ID]', regs[1] );
						media.src    = object.url.replace( '[ID]', regs[1] );
						media.pause  = object.pause;
						media.play   = object.play;

						if ( this.options.videoThumbnail ) {
							media.poster = !media.poster && object.poster ? object.poster.replace( '[ID]', regs[1] ) : media.poster;
							media.thumb  = !media.thumb && object.poster ? object.poster.replace( '[ID]', regs[1] ) : media.thumb;
						}

						break;

					}

				}

			}

		}

	};

	/**
	 * Get image srcset custom
	 * @param {string} source
	 * @return {string} image url
	 */
	proto.getSrc = function( source ) {

		var srcset = ( source || '' ).split( /,/ ),
			length = srcset.length,
			width  = 0;

		if ( length <= 1 ) {
			return source;
		}

		for ( var i = 0; i < length; i++ ) {

			var parts = srcset[i].replace(/\s+/g, ' ').trim().split( / / ),
				value = parseFloat( parts[1] ) || 0,
				unit  = parts[1] ? parts[1].slice(-1) : null;

			if ( ( unit === 'w' && screen.width >= value && value > width ) || !value || i === 0 ) {

				width  = value;
				source = parts[0];

			}

		}

		return source;

	};

	/**
	 * Get media attributes
	 * @param {Object} source
	 * @param {Object} media
	 */
	proto.getMediaAtts = function( source, media ) {

		var auto = this.options.autoCaption,
			data = this.getAttr( source ),
			img  = source.firstElementChild;
			img  = source.tagName !== 'IMG' && img && img.tagName === 'IMG' ? img : source;

		media.type   = !media.type ? data.type || source.getAttribute( 'data-type' ) : media.type;
		media.title  = data.title  || source.getAttribute( 'data-title' ) || ( auto ? img.title : null );
		media.desc   = data.desc   || source.getAttribute( 'data-desc' )  || ( auto ? img.alt  : null );
		media.thumb  = data.thumb  || source.getAttribute( 'data-thumb' );
		media.poster = this.getSrc( data.poster || source.getAttribute( 'data-poster' ) );
		media.width  = data.width  || source.getAttribute( 'data-width' );
		media.height = data.height || source.getAttribute( 'data-height' );

		// prevent duplicate content if autoCaption enabled
		if ( media.title === media.desc ) {
			media.desc = null;
		}

	};

	/**
	 * Get media thumbnail
	 * @param {Object} source
	 * @param {Object} media
	 */
	proto.getMediaThumb = function( source, media ) {

		var thumbnail = source.getElementsByTagName( 'img' );

		if ( !media.thumb && thumbnail[0] ) {
			media.thumb = thumbnail[0].src;
		}

	};

	/**
	 * Get iframe video thumbnail
	 * @param {Object} media
	 */
	proto.getVideoThumb = function( media ) {

		if ( !this.options.videoThumbnail ||  media.type !== 'video' || media.format === 'html5' ) {
			return;
		}

		var hasPoster = media.poster && media.poster.indexOf( '.json' ) > -1,
			hasThumb  = media.thumb && media.thumb.indexOf( '.json' ) > -1;

		if ( hasPoster || hasThumb ) {

			var uri = hasPoster ? media.poster : media.thumb,
				xhr = new XMLHttpRequest();

			xhr.onload = function( event ) {

				/** @type {?|{thumbnail_large: string, thumbnail_url: string, thumbnail_small: string}} */
				var response = event.target.responseText;
					response = JSON.parse( response );
					response = response.hasOwnProperty( 0 ) ? response[0] : response;

				if ( response ) {

					media.poster = response.thumbnail_large || response.thumbnail_url;

					// replace background image if image DOM already built
					if ( media.dom ) {
						media.dom.style.backgroundImage = 'url("' + media.poster + '")';
					}

					if ( hasThumb ) {

						var thumb = response.thumbnail_small || response.thumbnail_url;

						// replace background image if thumbnail already built
						if ( typeof media.thumb === 'object' ) {
							media.thumb.style.backgroundImage = 'url("' + thumb + '")';
						} else {
							media.thumb = thumb;
						}

					}

				}

			}.bind( this );

			xhr.open( 'GET', encodeURI( uri ), true );

			setTimeout( function() {
				xhr.send();
			}, 0 );

		}

	};

	/**
	 * Get media caption
	 * @param {Object} source
	 * @param {Object} media
	 */
	proto.getMediaCaption = function( source, media ) {

		var next = source.nextElementSibling;

		// if gallery follow schema.org markup
		if ( next && next.tagName === 'FIGCAPTION' ) {

			var caption = next.innerHTML;

			if ( ! media.title ) {
				media.title = caption;
			} else if ( ! media.desc ) {
				media.desc  = caption;
			}

		}

	};

	/**
	 * Build media caption
	 * @param {Object} media
	 */
	proto.setMediaCaption = function( media ) {

		media.title   = media.title ? '<div class="' + this.pre + '-title">' + media.title.trim() + '</div>' : '';
		media.desc    = media.desc ? '<div class="' + this.pre + '-desc">' + media.desc.trim() + '</div>' : '';
		media.caption = media.title + media.desc;

	};

	/**
	 * Get gallery name from DOM
	 * @param {Object} source
	 */
	proto.getGalleryName = function( source ) {

		var parent = source,
			node = 0;

		while ( parent && node < 2 ) {

			parent = parent.parentNode;

			if ( parent && parent.tagName === 'FIGURE' && parent.parentNode ) {

				return parent.parentNode.getAttribute( 'id' );

			}

			node++;

		}

	};

	/**
	 * Set gallery name
	 * @param {Object} source
	 */
	proto.setGalleryName = function( source ) {

		var data = this.getAttr( source );

		// get name
		var name = data.rel || source.getAttribute( 'data-rel' );
		name = !name ? this.getGalleryName( source ) : name;
		name = !name ? Object.keys( this.galleries ).length + 1 : name;

		// set gallery
		var gallery = this.galleries[name];
		gallery = !gallery ? ( this.galleries[name] = [] ) : gallery;
		gallery.name = name;

		return gallery;

	};

	/**
	 * Set gallery features
	 * @param {Object} gallery
	 * @param {Object} media
	 */
	proto.setGalleryFeatures = function( gallery, media ) {

		if ( !gallery.zoom && media.type === 'image' ) {
			gallery.zoom = true;
		}

		if ( !gallery.download && ( media.type === 'image' || media.format === 'html5' ) ) {
			gallery.download = true;
		}

	};

	/**
	 * Attach click event to Media DOM
	 * @param {Object} source
	 * @param {number} name (of gallery)
	 * @param {number} index
	 */
	proto.setMediaEvent = function( source, name, index ) {

		// if media already have a click event attached
		if ( source.mobxListener ) {
			source.removeEventListener( 'click', source.mobxListener, false );
		}

		// set listener function to remove later if gallery updated
		source.mobxListener = this.open.bind( this, name, index );
		source.addEventListener( 'click', source.mobxListener, false );

	};

	/**
	 * Open lightbox from a given Gallery name and media index
	 * @param {string} name
	 * @param {number} index
	 * @param {Object} event
	 */
	proto.open = function( name, index, event ) {

		// prevent default action and to bubbling up the DOM tree
		if ( event ) {

			event.preventDefault();
			event.stopPropagation();

		}

		// if the instance was destroyed or does not exist
		if ( !this.GUID ) {
			return false;
		}

		// check if gallery exists
		if ( !this.galleries.hasOwnProperty( name ) ) {

			utils.error( 'This gallery name : "' + name + '", does not exist!' );
			return false;

		}

		// check if gallery have media
		if ( !this.galleries[name].length ) {

			utils.error( 'Sorry, no media was found for the current gallery.' );
			return false;

		}

		// check if current media index exists (mainly to open from query param)
		if ( !this.galleries[name][index] ) {

			utils.error( 'Sorry, no media was found for the current media index: ' + index );
			return false;

		}

		// dispatch beforeOpen Event
		utils.dispatchEvent( this, 'modulobox', 'beforeOpen', name, index );

		// reset slide index
		this.slides.index = index;

		// set gallery
		this.gallery = this.galleries[name];
		this.gallery.name   = name;
		this.gallery.index  = index;
		this.gallery.loaded = false;

		// prepare lightbox
		this.removeContent();
		this.wrapAround();
		this.hideScrollBar();
		this.setSlider();
		this.setThumbs();
		this.setCaption();
		this.setMedia( this.options.preload );
		this.updateMediaInfo();
		this.replaceState();
		this.setControls();
		this.bindEvents( true );
		this.show();

		// autoplay video on opening
		if ( this.options.videoAutoPlay ) {
			this.appendVideo();
		}

		// autoplay slideshow on opening (only if video autoplay not set or not a video item opened)
		if ( this.options.slideShowAutoPlay && this.options.controls.indexOf( 'play' ) > -1 &&
			( ! this.options.videoAutoPlay || this.galleries[name][index].type !== 'video' ) ) {
			this.startSlideShow();
		}

		// set lightbox states
		this.states.zoom = false;
		this.states.open = true;

	};

	/**
	 * Open lightbox from query string in url
	 */
	proto.openFromQuery = function() {

		var query = this.getQueryString( window.location.search );

		if ( query.hasOwnProperty( 'guid' ) && query.hasOwnProperty( 'mid' ) ) {

			var open = this.open(
				decodeURIComponent( query.guid ),
				decodeURIComponent( query.mid ) - 1
			);

			// remove query string if failed to open
			if ( open === false ) {

				this.replaceState( true );

			}

		}

	};

	/**
	 * Reveal lightbox
	 */
	proto.show = function() {

		var holder = this.DOM.holder,
			method = this.options.rightToLeft ? 'add' : 'remove';

		holder.setAttribute( 'aria-hidden', false );
		utils.removeClass( holder, this.pre + '-idle' );
		utils.removeClass( holder, this.pre + '-panzoom' );
		utils.removeClass( holder, this.pre + '-will-close' );
		utils[method + 'Class']( holder, this.pre + '-rtl' );
		utils.addClass( holder, this.pre + '-open' );

	};

	/**
	 * Close lightbox
	 */
	proto.close = function( event ) {

		// Prevent click/touch propagation
		if ( event ) {
			event.preventDefault();
		}

		var holder  = this.DOM.holder,
			gallery = this.gallery,
			index   = gallery ? gallery.index : 'undefined',
			name    = gallery ? gallery.name : 'undefined';

		// dispatch beforeClose Event
		utils.dispatchEvent( this, 'modulobox', 'beforeClose', name, index );

		// exist from fullscreen
		if ( this.states.fullScreen ) {

			this.exitFullScreen();
			utils.removeClass( holder, this.pre + '-fullscreen' );

		}

		// stop all actions
		this.share();
		this.stopSlideShow();
		this.pauseVideo();

		this.bindEvents( false );
		this.replaceState( true );
		this.hideScrollBar();

		// hide lightbox
		holder.setAttribute( 'aria-hidden', true );
		utils.removeClass( holder, this.pre + '-open' );

		this.states.open = false;

	};

	/**
	 * Set controls and buttons states
	 */
	proto.setControls = function() {

		// handle play/prev/next buttons
		var gallery = this.gallery,
			options = this.options,
			buttons = this.buttons;

		// hide counter message if one media
		if ( this.DOM.counter ) {
			this.DOM.counter.style.display = ( gallery.initialLength > 1 ) ? '' : 'none';
		}

		// hide play button if one media
		if ( options.controls.indexOf( 'play' ) > -1 ) {
			buttons.play.style.display = ( gallery.initialLength > 1 ) ? '' : 'none';
		}

		// hide zoom button if one media and not zoomable
		if ( options.controls.indexOf( 'zoom' ) > -1 ) {
			buttons.zoom.style.display = !gallery.zoom ? 'none' : '';
		}

		// hide download button if one media and not Downloadable
		if ( options.controls.indexOf( 'download' ) > -1 ) {
			buttons.download.style.display = !gallery.download ? 'none' : '';
		}

		// hide/show prev & next buttons
		this.setPrevNextButtons();

	};

	/**
	 * Set responsive Prev/Next buttons
	 */
	proto.setPrevNextButtons = function() {

		if ( this.options.prevNext ) {

			var hide = this.slider.width < 680 && this.browser.touchDevice && !this.options.prevNextTouch;
			this.buttons.prev.style.display =
			this.buttons.next.style.display = ( this.gallery.length > 1 && !hide ) ? '' : 'none';

		}

	};

	/**
	 * Set caption display depending of the screen size
	 */
	proto.setCaption = function() {

		this.states.caption = !( !this.options.captionSmallDevice && ( this.slider.width <= 480 || this.slider.height <= 480 ) );
		this.DOM.caption.style.display = this.states.caption ? '' : 'none';

	};

	/**
	 * Set buttons states
	 */
	proto.hideScrollBar = function() {

		if ( !this.options.scrollBar ) {

			var open = this.states.open,
				scrollBar = open === 'undefined' || !open ? true : false;

			document.body.style.overflow =
			document.documentElement.style.overflow = scrollBar ? 'hidden' : '';

		}

	};

	// ----- Handle events ----- //

	/**
	 * Bind/unbind all events attached to the lightbox
	 * @param {boolean} bind
	 */
	proto.bindEvents = function( bind ) {

		var win     = window,
			doc     = document,
			opt     = this.options,
			holder  = this.DOM.holder,
			buttons = this.buttons,
			scrollMethod;

		// handle buttons
		for ( var type in buttons ) {

			if ( buttons.hasOwnProperty( type ) ) {

				var DOM = ( type !== 'share' ) ? buttons[type] : win;
				utils.handleEvents( this, DOM, ['click', 'touchend'], buttons[type].event, bind );

			}

		}

		// touch events
		utils.handleEvents( this, holder, this.dragEvents.start, 'touchStart', bind );

		// keyboard event
		utils.handleEvents( this, win, ['keydown'], 'keyDown', bind );

		// window resize event
		utils.handleEvents( this, win, ['resize', 'orientationchange'], 'resize', bind );

		// transition end event
		utils.handleEvents( this, holder, ['transitionend', 'webkitTransitionEnd', 'oTransitionEnd', 'otransitionend', 'MSTransitionEnd'], 'opened' );

		// disable double tap to zoom
		utils.handleEvents( this, holder, ['touchend'], 'disableZoom', bind );

		// handle fullscreen
		if ( this.browser.fullScreen ) {
			utils.handleEvents( this, doc, [this.browser.fullScreen.change], 'toggleFullScreen', bind );
		}

		// handle history navigation (replaceState)
		if ( opt.history ) {
			utils.handleEvents( this, win, ['mouseout'], 'mouseOut', bind );
		}

		// handle idle state
		if ( opt.timeToIdle > 0 ) {
			utils.handleEvents( this, holder, ['mousemove'], 'mouseMove', bind );
		}

		// prevent right click
		if ( !opt.contextMenu ) {
			utils.handleEvents( this, holder, ['contextmenu'], 'contextMenu', bind );
		}

		// disable scroll
		if ( !opt.mouseWheel ) {
			this.disableScroll( bind );
		}

		// scroll to zoom
		if ( opt.scrollToZoom ) {
			scrollMethod = 'scrollToZoom';
		}
		// scroll to navigate
		else if ( opt.scrollToNav ) {
			scrollMethod = 'scrollToNav';
		}
		// scroll to close
		else if ( opt.scrollToClose ) {
			scrollMethod = 'scrollToClose';
		}

		// handle scroll method
		if ( scrollMethod ) {
			utils.handleEvents( this, holder, [this.browser.mouseWheel], scrollMethod, bind );
		}

	};

	/**
	 * Detect animation transition end
	 * Set open/close state
	 * Unload/remove media only when the lightbox is closed and hidden (transitionend)
	 * @param {Object} event
	 */
	proto.opened = function( event ) {

		if ( event.propertyName === 'visibility' && event.target === this.DOM.holder ) {

			var name  = this.gallery.name,
				index = this.gallery.index;

			if ( !this.states.open ) {

				// remove media in slide and thumbnails
				this.removeContent();

				// dispatch afterClose Event
				utils.dispatchEvent( this, 'modulobox', 'afterClose', name, index );

			} else {

				// dispatch afterOpen Event
				utils.dispatchEvent( this, 'modulobox', 'afterOpen', name, index );

			}

		}

	};

	/**
	 * Detect when mouse leave browser window
	 * @param {Object} event
	 */
	proto.mouseOut = function( event ) {

		var e = event ? event : window.event,
			from = e.relatedTarget || e.toElement;

		if ( !from || from.nodeName === 'HTML' ) {

			this.replaceState();

		}

	};

	/**
	 * Detect idle state from mousemove
	 */
	proto.mouseMove = function() {

		var holder    = this.DOM.holder,
			idleClass = this.pre + '-idle';

		clearTimeout( this.states.idle );

		this.states.idle = setTimeout( function() {

			// prevent to hide top bar if tooltip opened
			if ( !utils.hasClass( holder, this.pre + '-open-tooltip' ) ) {

				utils.addClass( holder, idleClass );

			}

		}.bind( this ), this.options.timeToIdle );

		utils.removeClass( holder, idleClass );

	};

	/**
	 * Disable contextmenu (right click) on image
	 * @param {Object} event
	 */
	proto.contextMenu = function( event ) {

		var target    = event.target,
			tagName   = target.tagName,
			className = target.className;

		if ( tagName === 'IMG' || tagName === 'VIDEO' ||
			className.indexOf( this.pre + '-video' ) > -1 ||
			className.indexOf( this.pre + '-thumb-bg' ) > -1 ||
			className === this.pre + '-thumb' ) {

			event.preventDefault();

		}

	};

	/**
	 * Disable scroll
	 * @param {boolean} bind
	 */
	proto.disableScroll = function( bind ) {

		var doc  = document,
			win  = window;

		var prevent = function( e ) {

			if ( !this.isEl( e ) ) {
				return;
			}

			e = e || win.event;

			if ( e.preventDefault ) {

				e.preventDefault();
				e.returnValue = false;
				return false;

			}

		};

		win.onwheel      =
		win.ontouchmove  =
		win.onmousewheel =
		doc.onmousewheel =
		doc.onmousewheel = bind ? prevent.bind( this ) : null;

	};

	/**
	 * Scroll to zoom
	 * @param {Object} event
	 */
	proto.scrollToZoom = function( event ) {

		if ( !this.isEl( event ) ) {
			return;
		}

		var data = this.normalizeWheel( event );

		if ( data && data.deltaY ) {

			var cell  = this.getCell(),
				scale = cell.attraction.s || cell.position.s;
				scale = Math.min( this.options.maxZoom, Math.max( 1, scale - Math.abs( data.deltaY ) / data.deltaY ) );

			this.stopSlideShow();
			this.zoomTo( event.clientX, event.clientY, Math.round( scale * 10 ) / 10 );

		}

	};

	/**
	 * Scroll to navigate (next/prev slide)
	 * @param {Object} event
	 */
	proto.scrollToNav = function( event ) {

		if ( !this.isEl( event ) ) {
			return;
		}

		var data = this.normalizeWheel( event );

		if ( data && data.delta ) {

			this[data.delta * this.isRTL() < 0 ? 'prev' : 'next']();

		}

	};

	/**
	 * Scroll to close
	 * @param {Object} event
	 */
	proto.scrollToClose = function( event ) {

		if ( !this.isEl( event ) ) {
			return;
		}

		event.preventDefault();
		this.close();

	};

	/**
	 * Disable double tap to zoom on touch devices
	 * @param {Object} event
	 */
	proto.disableZoom = function( event ) {

		var node = event.target;

		while ( node ) {

			// Prevent issue on Android with native HTML5 video controls
			// If preventDefault on Android devices, video controls will never be shown on tap
			// Keep click on link/input for HTML content
			if ( ['VIDEO', 'INPUT', 'A'].indexOf( node.tagName ) > -1 ) {
				return;
			}

			node = node.parentElement;

		}

		event.preventDefault();

	};

	/**
	 * Resize lightbox
	 */
	proto.resize = function( event ) {

		// Set new top bar height (in case icons are replaced)
		this.DOM.topBar.height = this.DOM.topBar.clientHeight;

		this.share();
		this.setSlider();
		this.setThumbsPosition();
		this.setCaption();
		this.resizeMedia();
		this.updateMediaInfo();
		this.setPrevNextButtons();

		// reset current slide zoom
		this.states.zoom = false;
		utils.removeClass( this.DOM.holder, this.pre + '-panzoom' );

		// dispatch resize Event
		utils.dispatchEvent( this, 'modulobox', 'resize', event );

	};

	/**
	 * Resize media on window resize
	 */
	proto.resizeMedia = function() {

		var slides = this.slides;

		for ( var i = 0; i < slides.length; i++ ) {

			if ( !this.gallery ) {
				break;
			}

			var media = this.gallery[slides[i].media];

			if ( media && ( ( media.dom && media.dom.loaded ) || ( media.dom && ['video', 'iframe', 'HTML'].indexOf( media.type ) > -1 ) ) ) {

				this.setMediaSize( media, slides[i] );

			}

		}

	};

	// ----- main plugin helper functions  ----- //

	/**
	 * Check if current element is part of Modulobox UI
	 * @param {Object} event
	 * @return {boolean}
	 */
	proto.isEl = function( event ) {

		var name = event.target.className;
			name = typeof name === 'string' ? name : name.baseVal;

		return name.indexOf( this.pre ) > -1;

	};

	/**
	 * Check if current media is zoomable
	 * @return {boolean}
	 */
	proto.isZoomable = function() {

		var media = this.getMedia(),
			zoom = false;

		if ( media.type === 'image' && media.dom && media.dom.size && media.dom.size.scale > 1 ) {
			zoom = true;
		}

		this.DOM.holder.setAttribute( 'data-zoom', zoom );
		return zoom;

	};

	/**
	 * Check if current media is downloadable
	 * @return {boolean}
	 */
	proto.isDownloadable = function() {

		var media = this.getMedia(),
			download = true;

		if ( media.type !== 'image' && media.format !== 'html5' ) {
			download = false;
		}

		this.DOM.holder.setAttribute( 'data-download', download );
		return download;

	};

	/**
	 * Check if RTL layout is enabled
	 * @return {number}
	 */
	proto.isRTL = function() {

		return this.options.rightToLeft ? - 1 : 1;

	};

	/**
	 * Add attribute(s) in cache
	 * @param {Object} el
	 * @param {Object} attrs
	 */
	proto.addAttr = function( el, attrs ) {

		var cacheID;

		if ( typeof el[this.expando] === 'undefined' ) {

			cacheID = this.cache.uid++;
			el[this.expando] = cacheID;
			this.cache[cacheID] = {};

		} else {
			cacheID = el[this.expando];
		}

		for ( var attr in attrs ) {

			if ( attrs.hasOwnProperty( attr ) ) {

				this.cache[cacheID][attr] = attrs[attr];

			}

		}

	};

	/**
	 * Get attribute(s) in cache
	 * @param {Object} el
	 * @return {Object}
	 */
	proto.getAttr = function( el ) {

		return this.cache[el[this.expando]] || {};

	};

	/**
	 * Get thumbnail height
	 * @return {number}
	 */
	proto.getThumbHeight = function() {

		var thumb = this.thumbs;
		return thumb.height > 0 && thumb.width > 0 ? thumb.height + Math.min( 10, thumb.gutter ) * 2 : 0;

	};

	/**
	 * Get current media in opened gallery
	 * @return {Object}
	 */
	proto.getMedia = function() {

		var gallery = this.gallery;
		return gallery ? gallery[gallery.index] : null;

	};

	/**
	 * Get current cell in slide
	 * @return {Object}
	 */
	proto.getCell = function() {

		var slides = this.slides,
			index  = utils.modulo( slides.length, slides.index );

		return this.cells[index];

	};

	/**
	 * Remove/reset media in slide and remove thumbnails
	 */
	proto.removeContent = function() {

		// remove media in each slide
		for ( var i = 0; i < this.slides.length; i++ ) {

			var slide = this.slides[i];

			// clean slide content
			this.unloadMedia( slide );
			this.removeMedia( slide );

			// reset index and media index previously set
			slide.index =
				slide.media = null;

		}

		// remove all thumbnails
		this.removeMedia( this.DOM.thumbsHolder );

	};

	/**
	 * Get query string paramaters from url
	 * @param {string} search
	 * @return {Object}
	 */
	proto.getQueryString = function( search ) {

		var params = {};

		search.substr( 1 ).split( '&' ).forEach( function( param ) {

			param = param.split( '=' );
			params[decodeURIComponent( param[0] )] = param.length > 1 ? decodeURIComponent( param[1] ) : '';

		});

		return params;

	};

	/**
	 * Replace query parameter in url
	 * @param {Object} key
	 * @return {string}
	 */
	proto.setQueryString = function( key ) {

		var search = window.location.search,
			query  = this.getQueryString( search );

		// decode URI part
		search = decodeURI( search );

		for ( var prop in key ) {

			if ( key.hasOwnProperty( prop ) ) {

				// encode string component
				// value to replace in URI
				var replace = encodeURIComponent( key[prop] );

				if ( query.hasOwnProperty( prop ) ) {

					// already decoded from getQueryString
					// value to search from decoded search URI
					var value = query[prop];

					if ( !replace ) {

						search = search.replace( '&' + prop + '=' + value, '' );
						search = search.replace( prop + '=' + value, '' );

					} else {

						search = search.replace( prop + '=' + value, prop + '=' + replace );

					}

				} else {

					if ( replace ) {

						search = search + ( !search ? '?' : '&' ) + prop + '=' + replace;

					} else {

						search = search.replace( prop + '=', '' );

					}

				}

			}

		}

		// create base url
		var base = [location.protocol, '//', location.host, location.pathname].join( '' );
		// check if search query is empty or not
		search = !search.substr( 1 ) ? search.substr( 1 ) : search;

		// encode complete URI
		return encodeURI( base + search );

	};

	/**
	 * Replace url state with HTML5 API replaceState method
	 * @param {boolean} remove
	 */
	proto.replaceState = function( remove ) {

		if ( ( this.options.history || remove ) && this.browser.pushState && !this.states.push ) {

			var prevData = window.history.state,
				data = {
					guid : !remove ? this.gallery.name : '',
					mid  : !remove ? utils.modulo( this.gallery.initialLength, this.gallery.index ) + 1 : ''
				};

			if ( !prevData || prevData.mid !== data.mid ) {

				var search = this.setQueryString( data );

				try {

					window.history.replaceState( data, '', search );

				} catch (error) {

					// disable history
					this.options.history = false;
					// display error message in console
					utils.error( 'SecurityError: A history state object with origin \'null\' cannot be created. Please run the script on a server.' );

				}

			}

		}

		this.states.push = false;

	};

	/**
	 * Normalize mousewheel event accross browsers
	 * @param {Object} event
	 */
	proto.normalizeWheel = function( event ) {

		var ev = event || window.event,
			data = null,
			deltaX,
			deltaY,
			delta;

		event.preventDefault();

		// old scrollwheel events
		if ( 'detail' in ev ) {
			deltaY = ev.detail * -1;
		}
		if ( 'wheelDelta' in ev ) {
			deltaY = ev.wheelDelta * -1;
		}
		if ( 'wheelDeltaY' in ev ) {
			deltaY = ev.wheelDeltaY * -1;
		}
		if ( 'wheelDeltaX' in ev ) {
			deltaX = ev.wheelDeltaX * -1;
		}

		// W3C wheel event
		if ( 'deltaY' in ev ) {
			deltaY = ev.deltaY;
		}
		if ( 'deltaX' in ev ) {
			deltaX = ev.deltaX * -1;
		}

		// deltaX/Y values are specified in lines
		if ( ev.deltaMode === 1 ) {

			deltaX *= 40;
			deltaY *= 40;

			// deltaX/Y values are specified in pages
		} else if ( ev.deltaMode === 2 ) {

			deltaX *= 100;
			deltaY *= 100;

		}

		// normalize deltaX & deltaY
		delta = Math.abs( deltaX ) > Math.abs( deltaY ) ? deltaX : deltaY;
		delta = Math.min( 100, Math.max( -100, delta ) );

		// if no scroll happened
		if ( Math.abs( delta ) < this.options.scrollSensitivity ) {
			this.states.prevDelta = delta;
			return data;
		}

		var time = +new Date();
		// if mouse wheel velocity increases (touchpad or free wheel)
		// or elapsed time between mouse wheel events is superior to 60ms (user touchend touchpad or free wheel stopped)
		if ( Math.abs( delta ) > Math.abs( this.states.prevDelta ) || time - this.states.prevScroll > 60 ) {

			// set data
			data = {
				'deltaX' : deltaX,
				'deltaY' : deltaY,
				'delta'  : delta
			};

		}

		// store last scroll data
		this.states.prevDelta  = delta;
		this.states.prevScroll = time;

		return data;

	};

	// ----- Main function / events ----- //

	/**
	 * Reveal/hide share tooltip holder on click
	 * @param {Object} event
	 */
	proto.share = function( event ) {

		// prevent issue on Android with native HTML5 video controls
		if ( event && event.target.tagName === 'VIDEO' ) {
			return;
		}

		var holder    = this.DOM.holder,
			className = this.pre + '-open-tooltip',
			element   = event ? event.target.className : null,
			method    = utils.hasClass( holder, className ) ? 'remove' : 'add';

		if ( ( method === 'remove' && ( element !== this.pre + '-share' || !event ) ) || element === this.pre + '-share' ) {

			if ( method === 'add' ) {
				this.setShareTooltip();
			}

			utils[method + 'Class']( holder, className );

		}

	};

	/**
	 * Share lightbox media from query url on social icon click
	 * @param {Object} event
	 */
	proto.shareOn = function( event ) {

		var type    = event.target.action,
			gallery = this.gallery,
			media   = this.getMedia(),
			image   = media.type === 'image' ? media.src : media.poster,
			url     = this.socialMedia[type],
			uri;

		if ( url ) {

			// prepare uri from base url
			if ( this.options.sharedUrl === 'page' ) {

				uri = [location.protocol, '//', location.host, location.pathname].join( '' );

			// prepare uri from deeplink
			} else if ( this.options.sharedUrl === 'deeplink' || ['iframe', 'HTML'].indexOf( media.type ) > -1 ) {

				uri = this.setQueryString({
					guid : gallery.name,
					mid  : gallery.index + 1
				});

			// prepare uri from media file
			} else {

				uri = media.src.replace( /\s/g, '' ).split( ',' )[0];

				if ( media.type === 'video' && media.format !== 'html5' ) {
					uri = media.share;
				}

			}

			// convert to absolute path if necessary
			var link = utils.createEl( 'a' );
			link.href = image;
			image = link.href;
			link.href = uri;
			uri = link.href;

			var tmp = utils.createEl( 'div' );
			tmp.innerHTML = media.caption;
			var text = ( tmp.textContent || tmp.innerText ).replace( /\s+/g, ' ' ).trim() || '';

			url = url.replace( '[url]', encodeURIComponent( uri ) )
					.replace( '[image]', encodeURIComponent( image ) )
					.replace( '[text]', encodeURIComponent( text || document.title ) );

			if ( url ) {

				var left = Math.round( window.screenX + ( window.outerWidth - 626 ) / 2 ),
					top  = Math.round( window.screenY + ( window.outerHeight - 436 ) / 2 );

				window.open( url, this.pre + '_share', 'status=0,resizable=1,location=1,toolbar=0,width=626,height=436,top=' + top + ',left=' + left );

			}

		} else {

			utils.error( 'This social share media does not exist' );

		}

		return false;

	};

	/**
	 * Set share tooltip position
	 */
	proto.setShareTooltip = function() {

		if ( this.options.controls.indexOf( 'share' ) > -1 ) {

			var attribute = 'right',
				tooltip   = this.DOM.shareTooltip,
				width     = tooltip.clientWidth,
				button    = this.buttons.share.getBoundingClientRect(),
				position  = button.left - width + button.width / 2 + 20;

			if ( position < 0 ) {
				attribute = 'left';
				position  = button.left + button.width / 2 - 20;
			}

			tooltip.setAttribute( 'data-position', attribute );
			tooltip.style.top  = this.DOM.topBar.height + 6 + 'px';
			tooltip.style.left = position + 'px';

		}

	};

	/**
	 * Download a media, generate downloadable link
	 */
	proto.download = function() {

		if ( !this.isDownloadable() ) {
			return false;
		}

		var media = this.getMedia(),
			url   = media.src.replace( /\s/g, '' ).split( ',' )[0],
			link  = document.createElement( 'a' );

		link.href = url;
		link.download = new Date().getTime();
		link.setAttribute( 'target', '_blank' );
		document.body.appendChild( link );
		link.click();
		document.body.removeChild( link );

	};

	/**
	 * Handle click on fullScreen button
	 */
	proto.fullScreen = function() {

		var fullScreenElement = this.browser.fullScreen.element;

		if ( !document[fullScreenElement] ) {
			this.requestFullScreen();
		} else {
			this.exitFullScreen();
		}

	};

	/**
	 * Switch fullscreen state on fullScreen change
	 */
	proto.toggleFullScreen = function() {

		var holder = this.DOM.holder,
			fullScreenElement = document[this.browser.fullScreen.element];

		if ( !fullScreenElement ) {

			this.share();
			this.states.fullScreen = false;
			utils.removeClass( holder, this.pre + '-fullscreen' );

		} else if ( fullScreenElement === holder ) {

			// set share tooltip position (fix issue on Safari)
			this.setShareTooltip();
			this.states.fullScreen = true;
			utils.addClass( holder, this.pre + '-fullscreen' );

		}

		this.videoFullScreen();

	};

	/**
	 * RequestFullScreen lightbox holder
	 */
	proto.requestFullScreen = function() {

		var request = this.browser.fullScreen.request;

		if ( document.documentElement[request] ) {
			this.DOM.holder[request]();
		}

	};

	/**
	 * ExitFullScreen lightbox holder
	 */
	proto.exitFullScreen = function() {

		var exit = this.browser.fullScreen.exit;

		if ( document[exit] ) {
			document[exit]();
		}

	};

	// ----- Slideshow & count down timer ----- //

	/**
	 * Play slideshow event on click
	 */
	proto.play = function() {

		if ( this.states.play ) {
			this.stopSlideShow();
		} else {
			this.startSlideShow();
		}

	};

	/**
	 * Start play and countdown timer
	 */
	proto.startSlideShow = function() {

		var start    = 0,
			gallery  = this.gallery,
			options  = this.options,
			loop     = this.states.loop,
			autoStop = options.slideShowAutoStop,
			cycle    = Math.max( 120, options.slideShowInterval ),
			count    = options.countTimer,
			canvas   = count && this.DOM.timer ? this.DOM.timer.getContext( '2d' ) : null;

		var countDown = ( function( now ) {

			now = !now ? +new Date() : now;
			start = !start ? now : start;

			if ( !loop || autoStop ) {

				if ( gallery.index === gallery.initialLength - 1 ) {

					this.stopSlideShow();
					return;

				}

			}

			if ( count && canvas ) {

				var percent = Math.min( 1, ( now - start + cycle ) / cycle - 1 ),
					radians = percent * 360 * ( Math.PI / 180 );

				canvas.clearRect( 0, 0, 48, 48 );
				this.timerProgress( canvas, options.countTimerBg, 100 );
				this.timerProgress( canvas, options.countTimerColor, radians );

			}

			if ( now >= start + cycle ) {

				start = now;
				this.slideTo( this.slides.index + 1, true );

			}

			this.timer = requestAnimationFrame( countDown );

		}).bind( this );

		// reveal canvas timer
		utils.addClass( this.DOM.holder, this.pre + '-autoplay' );
		// play state
		this.states.play = true;
		// start timer
		this.timer = requestAnimationFrame( countDown );

	};

	/**
	 * Stop slideshow
	 */
	proto.stopSlideShow = function() {

		cancelAnimationFrame( this.timer );
		utils.removeClass( this.DOM.holder, this.pre + '-autoplay' );
		this.states.play = false;

	};

	/**
	 * Canvas arc countdown timer progress
	 * @param {Object} canvas
	 * @param {string} color
	 * @param {number} end
	 */
	proto.timerProgress = function( canvas, color, end ) {

		var start = 1.5 * Math.PI;
		canvas.strokeStyle = color;
		canvas.lineWidth = 5;
		canvas.beginPath();
		canvas.arc( 24, 24, 18, start, start + end, false );
		canvas.stroke();

	};

	// ----- Handle videos ----- //

	/**
	 * Append video DOM in slide on click
	 */
	proto.appendVideo = function() {

		var media = this.getMedia();

		if ( media.type !== 'video' ) {
			return;
		}

		utils.addClass( media.dom, this.pre + '-loading' );
		utils.removeClass( media.dom, this.pre + '-playing' );

		if ( !media.video ) {

			// append HTML5 video
			if ( media.format === 'html5' ) {

				// keep in memory video dom (for progression)
				media.video = utils.createEl( 'video' );
				media.video.setAttribute( 'controls', '' );
				media.video.setAttribute( 'autoplay', '' );

				var urls = media.src.replace( /\s/g, '' ).split( ',' );

				// loop through each video source
				for ( var i = 0; i < urls.length; i++ ) {

					var frag   = document.createDocumentFragment(),
						source = utils.createEl( 'source' ),
						type   = ( /^.+\.([^.]+)$/ ).exec( urls[i] );

					// check if video type is HTML5 valid
					if ( type && ['mp4', 'webm', 'ogv'].indexOf( type[1] ) > -1 ) {

						source.src = urls[i];
						source.setAttribute( 'type', 'video/' + ( type[1] === 'ogv' ? 'ogg' : type[1] ) );
						frag.appendChild( source );

					}

					media.video.appendChild( frag );

				}

			}
			// append iFrame video
			else if ( media.format ) {

				// create iframe
				media.video = utils.createEl( 'iframe' );
				media.video.src = media.src;
				media.video.setAttribute( 'frameborder', 0 );
				media.video.setAttribute( 'allowfullscreen', '' );

			}

			// set width/height
			media.video.setAttribute( 'width', '100%' );
			media.video.setAttribute( 'height', '100%' );

		}

		// append video if not exists
		if ( !media.dom.firstChild ) {

			// append video if not exists
			media.dom.appendChild( media.video );

			// reset loaded for iframe to preload before reveal
			if ( media.format !== 'html5' ) {
				media.video.loaded = false;
			}

		}

		// play video
		this.playVideo( media );

	};

	/**
	 * Play video
	 * @param {Object} media
	 */
	proto.onVideoLoaded = function( media ) {

		media.video.loaded = true;

		utils.removeClass( media.dom, this.pre + '-loading' );
		utils.addClass( media.dom, this.pre + '-playing' );

		this.cloneVideo( media );

	};

	/**
	 * Clone video
	 * allows to preserve video state if wrapped around (loop)
	 * @param {Object} media
	 */
	proto.cloneVideo = function( media ) {

		if ( this.states.loop && media.format === 'html5' ) {

			var gallery = this.gallery,
				length  = gallery.length,
				initial = gallery.initialLength,
				current = utils.modulo( initial, media.index );

			for ( var i = 0; i < length; i++ ) {

				var index = utils.modulo( initial, gallery[i].index );

				if ( index === current && gallery[i].index !== media.index ) {
					gallery[i].video = media.video;
				}

			}

		}

	};

	/**
	 * Enable/disable iframe video fullscreen
	 * Disable fullscreen iframe if lightbox in fullscreen
	 * Prevent issue on webkit browsers
	 */
	proto.videoFullScreen = function() {

		var media = this.getMedia(),
			fullScreen = this.states.fullScreen;

		if ( media.type === 'video' && media.format !== 'html5' && media.video ) {

			media.video[fullScreen ? 'removeAttribute' : 'setAttribute']( 'allowfullscreen', '' );

		}

	};

	/**
	 * Play video
	 * @param {{player}} media
	 */
	proto.playVideo = function( media ) {

		// if video already loaded
		if ( media.video.loaded ) {

			// trigger reflow to apply css transition
			media.video.getClientRects();

			utils.removeClass( media.dom, this.pre + '-loading' );
			utils.addClass( media.dom, this.pre + '-playing' );

			if ( media.format !== 'html5' ) {

				if ( media.play ) {

					var message = typeof media.play === 'object' ? JSON.stringify( media.play ) : String( media.play );
					media.video.contentWindow.postMessage( message, '*' );

				}

			} else if ( !media.video.error ) {

				if ( typeof MediaElementPlayer === 'function' && typeof jQuery !== 'undefined' && this.options.mediaelement ) {

					// because on IOS/Android the native HTML5 player is preserved
					var mejs = ( media.video.tagName === 'VIDEO' ) ? media.video : media.video.getElementsByTagName( 'video' )[0];

					if ( mejs.player ) {
						mejs.player.setControlsSize();
					}

					mejs.play();

				} else {

					media.video.play();

				}

			}

		} else {

			var _this = this;

			// if mediaelement player
			if ( typeof jQuery !== 'undefined' && typeof MediaElementPlayer === 'function' && !media.play && this.options.mediaelement && !media.video.player ) {

				MediaElementPlayer( media.video, {
					features                 : ['playpause', 'stop', 'current', 'progress', 'duration', 'volume', 'fullscreen'],
					videoVolume              : 'horizontal',
					startVolume              : 0.8,
					keyActions               : false,
					enableKeyboard           : false,
					iPadUseNativeControls    : true,
					iPhoneUseNativeControls  : true,
					AndroidUseNativeControls : true,
					success : function( mejs ) {

						mejs.addEventListener( 'loadeddata', function() {

							// get right DOM (because on mobile devices preserve original HTML5 player)
							// (iPadUseNativeControls, iPhoneUseNativeControls, AndroidUseNativeControls)
							media.video = media.dom.lastChild;

							// if video is still in a slide
							if ( media.video ) {

								// remove offscreen div to prevent display issue
								var offScreen = media.video.previousSibling;
								if ( offScreen && offScreen.parentNode ) {
									offScreen.parentNode.removeChild( offScreen );
								}

								_this.onVideoLoaded( media );

							}

						}, media, false );

					},
					error : function() {

						_this.onVideoLoaded( media );

					}
				});

			} else if ( !media.video.onload ) {

				media.video.onload  =
				media.video.onerror =
				media.video.onloadedmetadata = function() {

						// if video is still in a slide
						if ( media.dom.firstChild ) {

							_this.onVideoLoaded( media );
							_this.videoFullScreen();

						}

					};

				media.video.src = media.src.replace( /\s/g, '' ).split( ',' )[0];

			}

		}

	};

	/**
	 * Pause video
	 */
	proto.pauseVideo = function() {

		var media = this.getMedia();

		if ( media && media.type === 'video' && media.video ) {

			utils.removeClass( media.dom, this.pre + '-playing' );

			// prevent iframe to autoplay if pause while loading
			if ( !media.video.loaded ) {

				media.dom.innerHTML = '';
				utils.removeClass( media.dom, this.pre + '-loading' );
				return;

			}

			if ( media.format === 'html5' ) {

				if ( typeof MediaElementPlayer === 'function' && typeof jQuery !== 'undefined' && this.options.mediaelement ) {

					// because on IOS/Android the native HTML5 player is preserved
					var mejs = ( media.video.tagName === 'VIDEO' ) ? media.video : media.video.getElementsByTagName( 'video' )[0];
					mejs.pause();

				} else {

					media.video.pause();

				}

			} else {

				if ( media.pause && media.format !== 'dailymotion' ) {

					var message = typeof media.pause === 'object' ? JSON.stringify( media.pause ) : String( media.pause );
					media.video.contentWindow.postMessage( message, '*' );

				// to handle embed videos with unknown postMessage methods
				} else {

					media.dom.innerHTML = '';
					media.video = null;

				}

			}

		}

	};

	// ----- Handle Media loading/sizing ----- //

	/**
	 * Append media in slider
	 * @param {number} media_index
	 * @param {number} slide_index
	 */
	proto.insertMedia = function( media_index, slide_index ) {

		// get media from current gallery
		var media = this.gallery[media_index];

		if ( !media ) {
			return;
		}

		// assign an index if not exists
		// necessary if manually pushed from the API
		if ( typeof media.index === 'undefined' ) {
			media.index = this.gallery.indexOf( media );
		}

		this.buildMedia( media );
		this.appendMedia( media, slide_index );
		this.loadMedia( media, slide_index );

	};

	/**
	 * Build media DOM
	 * @param {Object} media
	 */
	proto.buildMedia = function( media ) {

		// if the media is not defined
		if ( typeof media.dom === 'undefined' ) {

			// detect media type
			switch ( media.type ) {

				case 'image':
					media.dom = utils.createEl( 'img', this.pre + '-img' );
					media.dom.src = media.src;
					break;

				case 'video':
					media.dom = utils.createEl( 'div', this.pre + '-video' );
					if ( media.poster ) {
						media.dom.style.backgroundImage = 'url("' + media.poster + '")';
					} else {
						media.dom.loaded = true;
					}
					break;

				case 'iframe':
					media.dom = utils.createEl( 'iframe', this.pre + '-iframe' );
					media.dom.setAttribute( 'allowfullscreen', '' );
					media.dom.setAttribute( 'frameborder', 0 );
					media.dom.src = media.src;
					break;

				case 'HTML':
					var element = media.src;
					var content = document.querySelector( element );
					media.dom = utils.createEl( 'div', this.pre + '-html' );
					media.dom.appendChild( utils.createEl( 'div', this.pre + '-html-inner' ) );
					media.dom.firstChild.innerHTML = content ? content.innerHTML : null;
					media.src = content ? content : '';
					media.dom.loaded = true;
					break;

			}

			// handle no media type & not content found (HMTL src empty for example)
			if ( !media.type || !media.src ) {

				// build no content message
				media.dom = utils.createEl( 'div', this.pre + '-error' );
				media.dom.textContent = this.options.noContent;
				media.dom.loaded = true;
				media.dom.error  = true;

				// dispatch load error event
				utils.dispatchEvent( this, 'modulobox', 'noContent', this.gallery.name, parseInt( media.index, 10 ) );

			}

		}

	};

	/**
	 * Append in a slide media DOM
	 * @param {Object} media
	 * @param {number} slide_index
	 */
	proto.appendMedia = function( media, slide_index ) {

		// get media slide
		var slide  = this.slides[slide_index],
			holder = slide.firstChild,
			loader;

		// if slide empty
		if ( !holder.childElementCount ) {

			var fragment = document.createDocumentFragment();

			loader = utils.createEl( 'div', this.pre + '-loader' );
			fragment.appendChild( loader );
			fragment.appendChild( media.dom );
			holder.appendChild( fragment );

			// if a media is already present in the slide
		} else {

			var oldMedia = holder.lastChild;
			loader = holder.firstChild;

			loader.style.visibility = '';

			// prevent unnecessary DOM manipulations if media already exists in slide
			if ( media.dom !== oldMedia ) {

				// prevent to remove and duplicate media from another slide (because of replaceChild)
				// small hack for low performance (like IE9 or too much long key frames)
				// slideTo() method already includes a throttle (120ms) which will also fix it more naturally
				var method = holder.childElementCount === 1 ? 'appendChild' : 'replaceChild';
				holder[method]( media.dom, oldMedia );

			}

		}

		// Assign media index to slide
		slide.media = media.index;

	};

	/**
	 * Load image/iframe
	 * @param {Object} media
	 * @param {number} slide_index
	 */
	proto.loadMedia = function( media, slide_index ) {

		// show immediatly media if already loaded
		if ( media.dom.loaded ) {

			this.showMedia( media, slide_index );
			return;

		}

		var _this = this,
			dom = media.type === 'iframe' ? media.dom : media.dom.img = new Image();

		// on media load complete
		var onComplete = function() {

			// dispatch loaded event
			if ( !media.dom.error ) {
				utils.dispatchEvent( _this, 'modulobox', 'loadComplete', _this.gallery.name, parseInt( media.index, 10 ) );
			}

			// need to reload iframe because loaded DOM can't be stored due to cross-origin policy
			media.dom.loaded = media.type !== 'iframe' ? true : false;
			// reveal media
			_this.showMedia( media, slide_index );

		};

		// handle onload events
		dom.onload = onComplete;

		// handle onerror event
		dom.onerror = function(e) {

			// set error message
			// not for video because it only concerns a poster and not the media itself
			if ( media.type !== 'video' ) {

				// build load error message
				media.dom = utils.createEl( 'p', _this.pre + '-error' );
				media.dom.textContent = _this.options.loadError;
				media.dom.error = true;

				// append error message
				_this.appendMedia( media, slide_index );

			}

			// dispatch loaded error event
			utils.dispatchEvent( _this, 'modulobox', 'loadError', _this.gallery.name, parseInt( media.index, 10 ) );

			// trigger complete to reveal error
			onComplete();

		};

		// set src
		dom.src = ( media.type === 'video' ) ? media.poster : media.src;

	};

	/**
	 * Unload media src
	 * @param {Object} slide
	 */
	proto.unloadMedia = function( slide ) {

		if ( !this.gallery ) {
			return;
		}

		var index = slide.media,
			media = this.gallery[index];

		if ( !media || !media.dom ) {
			return;
		}

		// cancel old media if exists (and option enabled)
		if ( this.options.unload && media.type === 'image' && !media.dom.loaded && !media.dom.complete && !media.dom.naturalWidth ) {

			// unset events and src
			media.dom.onload  = null;
			media.dom.onerror = null;
			media.dom.src     = '';

			if ( media.dom.img ) {

				// unset events and src for img object
				media.dom.img.onload  = null;
				media.dom.img.onerror = null;
				media.dom.img.src     = '';
				delete media.dom.img;

			}

			// unset dom to reset src from buildMedia method
			delete media.dom;

		}
		// remove iframe video (prevent autoplay if loop enable)
		else if ( media.type === 'video' && media.format !== 'html5' && media.dom.firstChild ) {

			media.video = null;
			media.dom.removeChild( media.dom.firstChild );

		}

	};

	/**
	 * Remove all content present in slide
	 * @param {Object} holder
	 */
	proto.removeMedia = function( holder ) {

		var content = holder.firstChild;

		if ( !content ) {
			return;
		}

		while ( content.firstChild ) {
			content.removeChild( content.firstChild );
		}

	};

	/**
	 * Reveal media content in slide
	 * @param {Object} media
	 * @param {number} slide_index
	 */
	proto.showMedia = function( media, slide_index ) {

		// get slider states
		var slider = this.slider;

		// if option fade when settled, check if slider settled to reveal
		if ( this.options.fadeIfSettle && !slider.settle && !media.dom.revealed ) {
			return;
		}

		// get slide DOM
		var slide   = this.slides[slide_index],
			gallery = this.gallery,
			holder  = slide.firstChild,
			loader  = holder.firstChild,
			preload = this.options.preload;

		// set media size
		this.setMediaSize( media, slide );

		// check if media is zoomable
		if ( media.index === gallery.index ) {
			this.isZoomable();
		}

		// reveal media object
		// even if media is not in a slide, it will be revealed in media object (stored in gallery obj)
		utils.addClass( media.dom, this.pre + '-media-loaded' );
		media.dom.revealed = true;

		// if current media match slide
		if ( slide.media === media.index ) {

			// hide loader
			loader.style.visibility = 'hidden';

			// increment number of media loaded in the gallery
			gallery.loaded += 1;

			// set closest media
			if ( gallery.loaded === preload && preload < 4 ) {
				this.setMedia( preload + 2 );
			}

		}

		// if iframe than reset loaded
		// because we can't store content due to cross-origin policy
		if ( media.type === 'iframe' ) {
			media.dom.loaded = false;
		}


	};

	/**
	 * Calculate and set media size styles
	 * @param {Object} media
	 * @param {Object} slide
	 */
	proto.setMediaSize = function( media, slide ) {

		var object   = media.dom,
			slider   = this.slider,
			viewport = object.viewport,
			thumbs   = this.getThumbHeight();

		// if error no size to calculate
		if ( object.error ) {
			return;
		}

		// if the media was not already sized for the current slider viewport
		// prevent unnecessary calculations and reflows from caption calculations (clientHeight)
		if ( !viewport ||
			viewport.width !== slider.width ||
			viewport.height !== slider.height - thumbs ) {

			this.getCaptionHeight( media, slide );
			this.getMediaSize( media, slide );
			this.fitMediaSize( media, slide );
			this.setMediaOffset( media, slide );

		}

		var style = object.style;

		// media is not displayed (no reflow)
		style.width  = object.size.width + 'px';
		style.height = object.size.height + 'px';
		style.left   = object.offset.left + 'px';
		style.top    = object.offset.top + 'px';

	};

	/**
	 * Calculate caption height & assign slide size
	 * @param {Object} media
	 * @param {Object} slide
	 */
	proto.getCaptionHeight = function( media, slide ) {

		var caption = this.DOM.captionInner,
			topBar  = this.DOM.topBar.height,
			content = caption.innerHTML,
			thumbs  = this.getThumbHeight();

		if ( this.options.caption && this.states.caption && media.caption ) {

			// set media caption
			caption.innerHTML = media.caption;
			// get caption height
			caption.height = Math.max( topBar, parseInt( caption.clientHeight, 10 ) ) || topBar;
			// restore current caption
			caption.innerHTML = content;

			// if caption is hidden
		} else {

			// set caption height to top bar
			// allow to center image in the viewport
			// if thumbnails fit to the top of the thumbs slider
			caption.height = thumbs ? 0 : topBar;

		}

		// set slide size (not real size, just an helper)
		slide.width  = this.slider.width;
		slide.height = this.slider.height - topBar - caption.height - thumbs;

	};

	/**
	 * Calculate natural media size
	 * @param {Object} media
	 * @param {Object} slide
	 */
	proto.getMediaSize = function( media, slide ) {

		var size = media.dom.size = {};

		switch ( media.type ) {

			case 'image':
				size.width  = media.dom.naturalWidth;
				size.height = media.dom.naturalHeight;
				break;

			case 'video':
				size.width  = this.options.videoMaxWidth;
				size.height = size.width / this.options.videoRatio;
				break;

			case 'iframe':
				size.width  = media.width ? media.width : slide.width > 680 ? slide.width * 0.8 : slide.width;
				size.height = media.height ? media.height : slide.height;
				break;

			case 'HTML':
				size.width  = media.width ? media.width : slide.width;
				size.height = media.height ? media.height : slide.height;
				break;

		}

	};

	/**
	 * Fit media size to slide
	 * @param {Object} media
	 * @param {Object} slide
	 */
	proto.fitMediaSize = function( media, slide ) {

		var slider      = this.slider,
			options     = this.options,
			zoom        = options.zoomTo,
			size        = media.dom.size,
			ratio       = size.width / size.height,
			thumbs      = this.getThumbHeight(),
			smallDevice = slider.width <= 480 || slider.height <= 680,
			canOverflow = ['video', 'iframe', 'HTML'].indexOf( media.type ) < 0,
			smartResize = options.smartResize && smallDevice,
			width, height;

		// add slide height viewport
		var viewports = [slide.height];

		// add slider height viewport
		if ( ( smartResize || options.overflow ) && canOverflow ) {

			viewports.unshift( slider.height - thumbs );

		}

		// check if media size fit to viewports (viewport)
		viewports.forEach( function( viewport ) {

			if ( !height || height < slider.height - thumbs ) {

				width  = Math.min( size.width, ratio * viewport );
				width  = width > slide.width ? slide.width : Math.round( width );
				height = Math.ceil( 1 / ratio * width );
				height = height % viewport < 2 ? viewport : height;

			}

		});

		// Calculate from how much the image can be zoomed
		var scale = Number( ( size.width / width ).toFixed( 3 ) );
			zoom  = zoom === 'auto' ? scale : zoom;

		media.dom.size = {
			width  : width,
			height : height,
			scale  : scale >= options.minZoom ? Math.min( options.maxZoom, zoom ) : 1
		};

	};

	/**
	 * Calculate media offset
	 * @param {Object} media
	 * @param {Object} slide
	 */
	proto.setMediaOffset = function( media, slide ) {

		var size    = media.dom.size,
			slider  = this.slider,
			topBar  = this.DOM.topBar.height,
			thumbs  = this.getThumbHeight(),
			fromTop = 0;

		// if the media can be centered
		if ( size.height <= slide.height ) {

			// center from the available slide height
			fromTop = topBar + ( slide.height - size.height ) * 0.5;

		}

		// set media offset
		media.dom.offset = {
			top  : fromTop < 0 ? 0 : Math.round( fromTop ),
			left : Math.round( ( slide.width - size.width ) * 0.5 )
		};

		// set media viewport
		media.dom.viewport = {
			width  : slider.width,
			height : slider.height - thumbs
		};

	};

	/**
	 * Calculate media viewport
	 * @param {number} scale
	 * @return {Object}
	 * hGap : difference between slider height and image size
	 * vGap : difference image offset and image overflow
	 * cGap : distance between image center and slider center
	 * sGap : cGap scaled
	 * these values allows to take into account the image center gap regarding the slide center
	 */
	proto.mediaViewport = function( scale ) {

		var media = this.getMedia();

		// if loading or not a media (error)
		if ( !media.dom || !media.dom.size ) {

			return {
				top    : 0,
				bottom : 0,
				left   : 0,
				right  : 0
			};

		}

		// calculate media viewport
		var size   = media.dom.size,
			offset = media.dom.offset,
			height = this.slider.height,
			width  = this.slider.width,
			hGap   = ( height - size.height ) * 0.5,
			vGap   = offset.top * 2 - hGap,
			cGap   = ( hGap - vGap ) * 0.5,
			sGap   = cGap * scale - cGap * 2 - vGap,
			left   = size.width / 2 * ( scale - 1 ) - offset.left,
			top    = size.height * scale <= height ? cGap * scale : -size.height / 2 * ( scale - 1 ) + height - size.height + sGap,
			bottom = size.height * scale <= height ? cGap * scale : size.height / 2 * ( scale - 1 ) + sGap;

		// set panZoom viewport
		return {
			top    : scale <= 1 ? 0 : Math.round( top ),
			bottom : scale <= 1 ? 0 : Math.round( bottom ),
			left   : size.width * scale < width ? 0 : Math.round( left ),
			right  : size.width * scale < width ? 0 : Math.round( -left )
		};

	};

	/**
	 * Set/add media in slides
	 * @param {number} number
	 */
	proto.setMedia = function( number ) {

		var gallery = this.gallery,
			slides  = this.slides,
			loop    = this.states.loop,
			RTL     = this.isRTL(),
			index   = Math.round( - RTL * this.slider.position.x / slides.width ),
			length  = gallery.initialLength - 1,
			adjust  = 0,
			toLoad  = [],
			i;

		// find number of media to load
		if ( !number && !gallery.loaded ) {

			number = 0;

			for ( i = 0; i < slides.length; i++ ) {

				if ( slides[i].firstChild.childElementCount ) {
					number++;
				}

			}

			number += 2;
			gallery.loaded = this.options.preload;

		}

		// prepare positions
		switch ( number ) {
			case 0:
			case 1:
				toLoad = [0];
				break;
			case 2:
			case 3:
				toLoad = [-1, 0, 1];
				break;
			default:
				number = 5;
				toLoad = [-2, -1, 0, 1, 2];
		}

		// adjust positions to ends if no loop
		if ( !loop ) {

			var maxMedia = index + toLoad[number - 1],
				minMedia = index + toLoad[0];

			adjust = ( minMedia < 0 ) ? -minMedia : 0;
			adjust = ( maxMedia > length ) ? length - maxMedia : adjust;

		}

		// convert positions to media index
		toLoad = toLoad.map( function( i ) {

			return utils.modulo( gallery.length, i + adjust + index );

		});

		// insert media in corresponding slides
		for ( i = 0; i < slides.length; i++ ) {

			var slide = slides[i],
				media_index = utils.modulo( gallery.length, slide.index );

			// if no loop && media index bigger than slide index
			if ( !loop && slide.index > media_index ) {
				continue;
			}

			// if the media corresponds to a slide and is not already assigned
			if ( toLoad.indexOf( media_index ) > -1 && slide.media !== media_index ) {

				// unload previous media
				this.unloadMedia( slide );
				// insert media in slide
				this.insertMedia( media_index, i );

			}

		}

	};

	/**
	 * Update media info based on current slide index
	 */
	proto.updateMediaInfo = function() {

		var slides   = this.slides,
			gallery  = this.gallery;

		// update gallery index
		gallery.index = utils.modulo( gallery.length, slides.index );

		this.isZoomable();
		this.isDownloadable();
		this.updateCounter();
		this.updateCaption();
		this.updateThumbs();

		// dispatch update event
		utils.dispatchEvent( this, 'modulobox', 'updateMedia', this.getMedia() );

	};

	/**
	 * Set thumbnails
	 */
	proto.setThumbs = function() {

		var gallery      = this.gallery,
			thumbs       = this.thumbs,
			length       = gallery.initialLength,
			thumbnails   = this.options.thumbnails,
			thumbsHolder = this.DOM.thumbsHolder;

		// return if no thumb opt or if only one thumbnail to display
		if ( !thumbnails || length < 2 ) {

			// hide thumbs and reset caption position
			this.DOM.caption.style.bottom = 0;
			thumbsHolder.style.visibility = 'hidden';
			thumbsHolder.style.height     = 0;

			// unset thumbs
			thumbs.height =
			thumbs.gutter = 0;

			return;

		}

		// get max screen width available on the current device
		var sizes   = this.options.thumbnailSizes,
			screenW = Math.max( window.innerWidth, Math.max( screen.width, screen.height ) ),
			thumbNb = 0,
			i;

		// sort thumbnail browser widths
		var widths = Object.keys( sizes ).sort( function( a, b ) {
			return a - b;
		});

		// find number of thumbnails needed to build the thumbnails slider
		for ( i = 0; i < widths.length; i++ ) {

			var size   = widths[i],
				width  = i === widths.length - 1 ? screenW : Math.min( screenW, size ),
				number = Math.ceil( width / ( sizes[size].width + sizes[size].gutter ) * 2 );

			if ( isFinite( number ) && number > thumbNb ) {
				thumbNb = number;
			}

			if ( size >= screenW ) {
				break;
			}

		}

		// set the number of thumbnail requiered for the current gallery
		var fragment = document.createDocumentFragment();
		length = length > 50 ? Math.min( thumbNb, length ) : length;

		// prepare thumbnails
		for ( i = 0; i < length; i++ ) {

			var thumb = utils.createEl( 'div', this.pre + '-thumb' );
			fragment.appendChild( thumb );

		}

		// append thumbnails
		this.DOM.thumbsInner.appendChild( fragment );
		// set thumbnails position
		this.setThumbsPosition();

	};

	/**
	 * Set thumbnails
	 * @param {Object} event
	 */
	proto.thumbClick = function( event ) {

		var target = event.target;

		if ( !utils.hasClass( target, this.pre + '-thumb' ) ) {
			target = target.parentNode;
		}

		if ( parseInt( target.index, 10 ) >= 0 ) {
			this.slideTo( target.index );
		}

	};

	/**
	 * Set & init animation (slider & cells)
	 * @param {Object} thumb
	 * @param {number} index
	 */
	proto.loadThumb = function( thumb, index ) {

		// get media
		var media = this.gallery[index],
			src;

		// if the thumbnail was not loaded (is not DOM object)
		if ( !media.thumb || typeof media.thumb !== 'object' ) {

			src = media.thumb;
			media.thumb = utils.createEl( 'div', this.pre + '-thumb-bg' );
			media.thumb.style.backgroundImage = src && src.indexOf( '.json' ) < 0 ? 'url(' + src + ')' : null;

			// add video icon
			if ( media.type === 'video' ) {

				utils.addClass( media.thumb, this.pre + '-thumb-video' );
				utils.addClass( media.thumb, this.pre + '-thumb-loaded' );

			}

		}

		// append/replace thumbnail
		var method = thumb.firstChild ? 'replaceChild' : 'appendChild';
		thumb[method]( media.thumb, thumb.firstChild );

		// save media index to thumb
		thumb.media = index;

		// load thumbnail
		if ( src ) {

			var dom = new Image();

			// handle onload events (no need to handle error/abort)
			dom.onload = function() {

				// reveal thumbnail
				utils.addClass( media.thumb, this.pre + '-thumb-loaded' );

			}.bind( this );

			// set image src
			dom.src = src;

		}

	};

	/**
	 * Update thumbnail active
	 */
	proto.updateThumbs = function() {

		var gallery = this.gallery;

		if ( !this.options.thumbnails || gallery.initialLength < 2 ) {
			return;
		}

		var thumbs   = this.thumbs,
			position = this.getThumbPosition( thumbs );

		// stop current animation
		thumbs.stopAnimate();

		// if thumb slider already at the right position
		if ( position === thumbs.position.x ) {

			this.shiftThumbs( thumbs );
			return;

		}

		// move thumbnails without animation
		if ( Math.abs( position - thumbs.position.x ) > 50 * thumbs.size ) {

			this.DOM.thumbsHolder.style.visibility = 'hidden';
			thumbs.position.x = position;
			utils.translate( this.DOM.thumbsInner, position, 0 );
			this.renderThumbs( thumbs );
			this.DOM.thumbsHolder.style.visibility = '';

		// move thumbnails
		} else {

			thumbs.startAnimate();
			thumbs.releaseDrag();
			thumbs.animateTo({
				x : position
			});

		}

	};

	/**
	 * Set caption height
	 */
	proto.updateCaption = function() {

		if ( this.options.caption ) {

			// get caption content
			var media   = this.getMedia(),
				content = media.caption ? media.caption : '',
				caption = this.DOM.captionInner;

			// set the caption content if not already present
			if ( caption.innerHTML !== content ) {
				caption.innerHTML = content;
			}

		}

	};

	/**
	 * Set counter index
	 */
	proto.updateCounter = function() {

		if ( this.options.counterMessage ) {

			var gallery = this.gallery,
				length  = gallery.initialLength,
				index   = utils.modulo( length, gallery.index ),
				message = this.options.counterMessage,
				content = message.replace( '[index]', index + 1 ).replace( '[total]', length ),
				counter = this.DOM.counter;

			// set the counter if not already set
			if ( counter.textContent !== content ) {
				counter.textContent = content;
			}

		}

	};

	// ----- Set position and animations ----- //

	/**
	 * Wrap media around for infinite loop
	 */
	proto.wrapAround = function() {

		var loop    = this.options.loop,
			gallery = this.gallery,
			length  = gallery.length;

		// store initial length
		if ( !gallery.initialLength ) {
			gallery.initialLength = length;
		}

		// set loop state
		this.states.loop = loop && loop <= length ? true : false;

		// add fake media if infinite loop and media length inferior to slides length
		if ( this.states.loop && length < this.slides.length ) {

			var add = Math.ceil( this.slides.length / length ) * length - length;

			for ( var i = 0; i < add; i++ ) {

				var index = length + i;
				gallery[index] = utils.cloneObject( gallery[utils.modulo( length, i )] );
				gallery[index].index = index;

			}

		}

	};

	/**
	 * Set slider
	 */
	proto.setSlider = function() {

		var slider = this.slider,
			slides = this.slides;

		this.setSizes( slider, slides );
		this.setSliderPosition( slider, slides );
		this.setSlidesPositions( slides );

		// show overlay
		this.DOM.overlay.style.opacity = 1;

	};

	/**
	 * Set slider and slide sizes
	 * @param {Object} slider
	 * @param {Object} slides
	 */
	proto.setSizes = function( slider, slides ) {

		// prevent issue on Google Chrome and mobile devices on orientation change
		// this.DOM.holder.clientWidth wrong on mobile devices with Chrome because fixed position
		slider.width  = document.body.clientWidth;
		slider.height = window.innerHeight; // always right value on IOS devices (prevent Safari top bar issue on resize)
		slides.width  = slider.width + Math.round( slider.width * this.options.spacing );

	};

	/**
	 * Set slides/cells positions
	 * @param {Object} slides
	 */
	proto.setSlidesPositions = function( slides ) {

		for ( var i = 0; i < slides.length; i++ ) {

			slides[i].position = null;
			this.setCellPosition( i );

		}

		this.shiftSlides();

	};

	/**
	 * Set thumbnails positions
	 */
	proto.setThumbsPosition = function() {

		if ( !this.options.thumbnails || this.gallery.initialLength < 2 ) {
			return;
		}

		var thumbs  = this.thumbs,
			slider  = this.slider,
			holder  = this.DOM.thumbsHolder,
			inner   = this.DOM.thumbsInner,
			sizes   = this.options.thumbnailSizes,
			RTL     = this.options.rightToLeft,
			widths  = Object.keys( sizes ).sort( function( a, b ) { return b - a; }),
			width   = Math.max.apply( null, widths ),
			browser = window.innerWidth,
			size;

		// get current thumbnail size
		for ( var i = 0; i < widths.length; i++ ) {

			size = Number( widths[i] );

			if ( browser <= size ) {

				width = size;

			}

		}

		// set thumbnails data
		thumbs.width  = Number( sizes[width].width );
		thumbs.gutter = Number( sizes[width].gutter );
		thumbs.height = Number( sizes[width].height );
		thumbs.size   = thumbs.width + thumbs.gutter;
		thumbs.length = this.gallery.initialLength;

		// get thumbnails slider total width
		var totalWidth = thumbs.length * thumbs.size;

		// basic navigation
		thumbs.bound = {
			left: 0,
			right: totalWidth > slider.width ? slider.width - totalWidth : 0
		};

		if ( RTL ) {

			thumbs.bound.right = totalWidth > slider.width ? slider.width - thumbs.size : totalWidth - thumbs.size;
			thumbs.bound.left  = totalWidth - thumbs.size;

		}

		// centered navigation
		if ( this.options.thumbnailsNav === 'centered' ) {

			thumbs.bound = {
				left  : totalWidth > slider.width ? Math.floor( slider.width * 0.5 - thumbs.size * 0.5 ) : Math.floor( totalWidth * 0.5 - thumbs.size * 0.5 ),
				right : totalWidth > slider.width ? Math.ceil( slider.width * 0.5 - totalWidth + thumbs.size * 0.5 ) : -Math.ceil( totalWidth * 0.5 - thumbs.size * 0.5 )
			};

			if ( RTL ) {

				thumbs.bound.right = thumbs.bound.left;
				thumbs.bound.left  = thumbs.bound.left + totalWidth - thumbs.size;

			}

		}

		// reset thumbnail animation
		thumbs.resetAnimate();

		var position = this.getThumbPosition( thumbs );

		// reset thumbnails position;
		thumbs.position.x = position;

		// set thumbnails inner position
		utils.translate( inner, position, 0 );

		// set holder/inner sizes
		var hasHeight = this.getThumbHeight();
		holder.style.visibility = hasHeight ? '' : 'hidden';
		holder.style.height     = hasHeight ? hasHeight + 'px' : '';
		inner.style.height      = hasHeight ? thumbs.height + Math.min( 10, thumbs.gutter ) + 'px' : '';
		inner.style.width       = thumbs.length * thumbs.size + 'px';
		inner.style.right       = totalWidth > slider.width && RTL ? 'auto' : '';

	};

	/**
	 * Set thumbnails positions
	 * @param {Object} thumbs
	 */
	proto.getThumbPosition = function( thumbs ) {

		var slider   = this.slider,
			gallery  = this.gallery,
			thumbNav = this.options.thumbnailsNav,
			RTL      = this.isRTL(),
			left     = RTL < 0 ? 'right' : 'left',
			index    = utils.modulo( gallery.initialLength, gallery.index ),
			centered = slider.width * 0.5 - thumbs.size * 0.5,
			position = thumbs.bound[left] - index * thumbs.size * RTL;
			position = !thumbs.bound[left] ? position + centered : position + (RTL < 0 && thumbNav !== 'centered' ? - centered : 0);

		return Math.max( thumbs.bound.right, Math.min( thumbs.bound.left, position ) );

	};

	/**
	 * Set cell (inside slides) positions
	 * @param {number} index
	 */
	proto.setCellPosition = function( index ) {

		var cell = this.cells[index];

		cell.resetAnimate();

		utils.translate( this.slides[index].children[0], 0, 0, 1 );

	};

	/**
	 * Set slider position
	 * @param {Object} slider
	 * @param {Object} slides
	 */
	proto.setSliderPosition = function( slider, slides ) {

		var RTL  = this.options.rightToLeft,
			posX = - slides.index * slides.width;
			posX = RTL ? - posX : posX;

		slider.resetAnimate();

		// set slider position/attraction to animate from right position
		slider.position.x =
		slider.attraction.x = posX;

		slider.bound = {
			left  : 0,
			right : - ( this.gallery.length - 1 ) * slides.width
		};

		if ( RTL ) {
			slider.bound.left  = - slider.bound.right;
			slider.bound.right = 0;
		}

		utils.translate( this.DOM.slider, posX, 0 );

	};

	/**
	 * Set & init animation (slider & cells)
	 */
	proto.setAnimation = function() {

		// set slider animations
		var slider     = this.DOM.slider,
			friction   = this.options.friction,
			attraction = this.options.attraction;

		this.slider = new Animate(
			// element to animate
			slider,
			// initial position
			{ x : 0, y : 0 },
			// friction coefficient
			Math.min( Math.max( friction.slider, 0 ), 1 ),
			// attraction coefficient
			Math.min( Math.max( attraction.slider, 0 ), 1 )
		);

		this.slider.on( 'settle.toanimate', this.settleSider.bind( this ) );
		this.slider.on( 'render.toanimate', this.renderSlider.bind( this ) );

		// set cell animations
		var slides = slider.children,
			length = slides.length;

		for ( var i = 0; i < length; i++ ) {

			this.cells[i] = new Animate(
				// element to animate
				slides[i].children[0],
				// initial position
				{ x : 0, y : 0, s : 1 },
				// friction coefficient
				Math.min( Math.max( friction.slide, 0 ), 1 ),
				// attraction coefficient
				Math.min( Math.max( attraction.slide, 0 ), 1 )
			);

			this.cells[i].on( 'settle.toanimate', this.settleCell.bind( this ) );
			this.cells[i].on( 'render.toanimate', this.renderCell.bind( this ) );

		}

		// set thumbnail animation
		this.thumbs = new Animate(
			// element to animate
			this.DOM.thumbsInner,
			// initial position
			{ x : 0 },
			// friction coefficient
			Math.min( Math.max( friction.thumbs, 0 ), 1 ),
			// attraction coefficient
			Math.min( Math.max( attraction.thumbs, 0 ), 1 )
		);

		this.thumbs.on( 'settle.toanimate', this.settleThumbs.bind( this ) );
		this.thumbs.on( 'render.toanimate', this.renderThumbs.bind( this ) );

	};

	/**
	 * Executed when the slider settle event is emitted from animate
	 * @param {Object} slider
	 */
	proto.settleSider = function( slider ) {

		var media;

		utils.dispatchEvent( this, 'modulobox', 'sliderSettled', slider.position );

		if ( this.states.open ) {

			this.setMedia();
			this.replaceState();

		}

		if ( this.options.fadeIfSettle ) {

			var slides = this.slides;

			for ( var i = 0; i < slides.length; i++ ) {

				var index = slides[i].media;
				media = this.gallery[index];

				if ( media.dom.loaded ) {
					this.showMedia( media, i );
				}

			}

		}

	};

	/**
	 * Executed when the cell settle event is emitted from animate
	 * @param {Object} cell
	 */
	proto.settleCell = function( cell ) {

		var gesture = this.gesture;

		if ( gesture.closeBy ) {
			utils.dispatchEvent( this, 'modulobox', 'panYSettled', null, cell.position );
		}

		if ( ( gesture.closeBy && gesture.canClose === false ) || !gesture.closeBy ) {
			utils.dispatchEvent( this, 'modulobox', 'panZoomSettled', null, cell.position );
		}

	};

	/**
	 * Executed when the thumbs slider is settled
	 * @param {Object} thumbs
	 */
	proto.settleThumbs = function( thumbs ) {

		utils.dispatchEvent( this, 'modulobox', 'thumbsSettled', null, thumbs.position );

	};

	/**
	 * Executed when the slider is animated/rendered
	 * @param {Object} slider
	 */
	proto.renderSlider = function( slider ) {

		// shift slide
		this.shiftSlides();

		// calculate progress in float percent
		var RTL       = this.isRTL(),
			length    = this.gallery.initialLength,
			indexPos  = - RTL * slider.position.x / this.slides.width,
			moduloPos = utils.modulo( length, indexPos ),
			progress  = ( moduloPos > length - 0.5 ? 0 : moduloPos ) / ( length - 1 );

		// dispatch sliderProgress event
		utils.dispatchEvent( this, 'modulobox', 'sliderProgress', null, Math.min( 1, Math.max( 0, progress ) ) );

	};

	/**
	 * Executed when a cell is animated/rendered
	 * @param {Object} cell
	 */
	proto.renderCell = function( cell ) {

		this.willClose( cell );

		var progress;

		// dispatch panYProgress event
		if ( this.gesture.type === 'panY' || this.gesture.closeBy || ( this.gesture.type === 'dragSlider' && cell.position.y !== 0 ) ) {

			progress = 1 - Math.abs( cell.position.y ) / ( this.slider.height * 0.5 );
			utils.dispatchEvent( this, 'modulobox', 'panYProgress', null, progress );

		}

		// dispatch panZoomProgress event
		if ( this.gesture.type !== 'panY' && cell.position.s !== 1 ) {

			progress = cell.position.s;
			utils.dispatchEvent( this, 'modulobox', 'panZoomProgress', null, progress );

		}

	};

	/**
	 * Executed when the thumbnails slider is animated/rendered
	 * @param {Object} thumbs
	 */
	proto.renderThumbs = function( thumbs ) {

		this.shiftThumbs( thumbs );

		// calculate progress in float percent
		var progress = thumbs.bound.left !== thumbs.bound.right ? ( thumbs.bound.left - thumbs.position.x ) / ( thumbs.bound.left - thumbs.bound.right ) : 0;

		// dispatch thumbsProgress event
		utils.dispatchEvent( this, 'modulobox', 'thumbsProgress', null, progress );

	};

	// ----- gesture events ----- //

	/**
	 * Touch start event (mouse/touch/pointer)
	 * @param {Object} event
	 */
	proto.touchStart = function( event ) {

		// get current target tag name
		var element   = event.target,
			tagName   = element.tagName,
			className = element.className;

		// stop slideshow (if not play button touched)
		if ( event.which !== 3 && element !== this.buttons.play ) {
			this.stopSlideShow();
		}

		// if right click or element touched is not part of the lightbox or a button/video/input/a
		if ( event.which === 3 || !this.isEl( event ) || ['BUTTON', 'VIDEO', 'INPUT', 'A'].indexOf( tagName ) > -1 ) {
			return;
		}

		// add dragging class if an image in a gallery is touched
		if ( tagName === 'IMG' && this.gallery.length > 1) {
			utils.addClass( this.DOM.holder, this.pre + '-dragging' );
		}

		// prevent default action
		event.preventDefault();

		// if share tooltip is open
		// after preventDefault() to prevent flicker on touch device (prevent touch scroll)
		if ( utils.hasClass( this.DOM.holder, this.pre + '-open-tooltip' ) ) {
			return;
		}

		// if no pointers available
		// then 1 first time pointer touches screen (without move)
		if ( !this.pointers.length ) {

			// reset can close var
			this.gesture.canClose = undefined;

			// bind move/end events
			utils.handleEvents( this, window, this.dragEvents.move, 'touchMove' );
			utils.handleEvents( this, window, this.dragEvents.end, 'touchEnd' );

		}

		// add pointers
		this.addPointer( event );

		// if thumbs not touched
		if ( className.indexOf( '-thumb' ) < 0 ) {

			// stop slider animation
			this.slider.stopAnimate();

			// stop current cell animation
			var cell = this.getCell();
			if ( Math.round( cell.position.s * 100 ) / 100 !== 1 || this.pointers.length === 2 || this.gesture.closeBy ) {
				cell.stopAnimate();
			}

		} else {

			// stop thumbs slider animation
			this.thumbs.stopAnimate();

		}

		// capture gestures
		this.gestures( 'start' );

	};

	/**
	 * Touch move event (mouse/touch/pointer)
	 * @param {Object} event
	 */
	proto.touchMove = function( event ) {

		// update active pointers
		this.updatePointer( event );

		var gesture = this.gesture;
		// get number of actif pointers
		var pointerNb = this.pointers.length;
		// check if slider is near settled
		var isSettle = this.isSliderSettle();

		// Switch panZoom to pan gesture (2 to 1 pointers)
		this.switchPointers();

		// capture gestures
		this.gestures( 'move' );

		// if a gesture occured
		if ( gesture.type ) {

			// handle/dispatch gesture Move
			this[gesture.type]( event );
			utils.dispatchEvent( this, 'modulobox', gesture.type + 'Move', event, gesture );

			// set gesture movement
			gesture.move = true;

		}
		// if dragged more than the threshold offset or pinched
		else if ( ( pointerNb === 2 && isSettle ) ||
			Math.abs( gesture.dx ) > this.options.threshold ||
			Math.abs( gesture.dy ) > this.options.threshold ) {

			// add threshold to prevent jump when panY/dragSlider
			gesture.sx += gesture.dx;
			gesture.sy += gesture.dy;

			// set for pinchToclose
			gesture.canZoom = this.isZoomable();
			// reset closeBy gesture event on first move
			gesture.closeBy = false;

			// set gesture type
			gesture.type = Math.abs( gesture.dx ) < Math.abs( gesture.dy ) / 2 ? false : 'dragSlider';
			gesture.type = this.options.dragToClose  && !gesture.type && isSettle ? 'panY' : gesture.type;
			gesture.type = ( this.options.pinchToZoom || this.states.zoom ) && gesture.canZoom && isSettle && ( pointerNb === 2 || this.states.zoom ) ? 'panZoom' : gesture.type;
			gesture.type = this.options.pinchToClose && gesture.scale < 1 && isSettle && pointerNb === 2 ? 'panZoom' : gesture.type;
			gesture.type = event.target.className.indexOf( '-thumb' ) > -1 ? 'dragThumbs' : gesture.type;

			// update media before animation
			if ( gesture.type === 'dragSlider' ) {
				this.setMedia();
			}

			// replace cell if dragSlider (slider move)
			if ( ['dragSlider', 'dragThumbs'].indexOf( gesture.type ) > -1 ) {

				var cell = this.getCell();
				cell.startAnimate();
				cell.releaseDrag();
				cell.animateTo({
					x : 0,
					y : 0,
					s : 1
				});

			}

			// replace slider if not settle and if cell move
			if ( gesture.type !== 'dragSlider' ) {

				var slider = this.slider,
					slides = this.slides;

				// if the slider does not snap to slides
				var RTL = this.isRTL();
				if ( - RTL * slider.position.x !== slides.index * slides.width ) {
					slider.startAnimate();
					slider.releaseDrag();
				}

			}

			// if gesture occured
			if ( gesture.type ) {

				this.pauseVideo();

				// dispatch start event
				utils.dispatchEvent( this, 'modulobox', gesture.type + 'Start', event, gesture );

				// add dragging class
				if ( this.gallery.length > 1 || gesture.type !== 'dragSlider' ) {
					utils.addClass( this.DOM.holder, this.pre + '-dragging' );
				}

			}

		}

	};

	/**
	 * Touch end event (mouse/touch/pointer)
	 * @param {Object} event
	 */
	proto.touchEnd = function( event ) {

		// delete released pointers
		this.deletePointer( event );

		// if no more pointer on screen
		if ( !this.pointers.length ) {

			// remove dragging class
			utils.removeClass( this.DOM.holder, this.pre + '-dragging' );

			// remove events
			utils.handleEvents( this, window, this.dragEvents.move, 'touchMove', false );
			utils.handleEvents( this, window, this.dragEvents.end, 'touchEnd', false );

			// if slider settle and no gesture happened
			if ( this.isSliderSettle() ) {

				var className = event.target.className;

				// play video
				if ( utils.hasClass( event.target, this.pre + '-video' ) ) {
					this.appendVideo();
				// close lightbox
				} else if ( this.options.tapToClose && !this.states.zoom && ( className === this.pre + '-item-inner' || className === this.pre + '-top-bar' ) && Math.abs( this.gesture.dx ) < this.options.threshold ) {

					this.close();
					return;

				}

				// check if double tap/click
				if ( event.target.tagName === 'IMG' ) {
					this.doubleTap( event );
				}

			}

			// handle click on thumbnail
			if ( this.options.thumbnails && !this.gesture.move ) {
				this.thumbClick( event );
			}

			// handle/dispatch gesture End
			var gestureEnd = this.gesture.type + 'End';
			if ( this.gesture.type && typeof this[gestureEnd] === 'function' ) {

				this[gestureEnd]( event );
				utils.dispatchEvent( this, 'modulobox', gestureEnd, event, this.gesture );

			}

			// unset gesture
			this.gesture.type =
				this.gesture.move = false;

			// return if gesture trigger a close() (prevent to animate twice)
			if ( !this.states.open ) {
				return;
			}

			// make sure cell is settled
			var cell = this.getCell();
			if ( !cell.settle ) {

				cell.startAnimate();
				cell.releaseDrag();

			}

			// make sure slider is settled
			var slider = this.slider;
			if ( !slider.settle ) {

				slider.startAnimate();
				slider.releaseDrag();

			}

		}

	};

	/**
	 * Switch panZoom to pan gestures
	 */
	proto.switchPointers = function() {

		// if switch from 2 pointers to 1 pointer (reset animation)
		if ( this.gesture.type === 'panZoom' && this.pointers.length === 1 && this.gesture.distance !== 0 ) {

			var moving = this.getCell();

			moving.stopAnimate();
			moving.startAnimate();

			this.gesture.move = false;
			this.gestures( 'start' );
			this.gestures( 'move' );

		}

	};

	/**
	 * Handle double tap
	 * @param {Object} event
	 */
	proto.doubleTap = function( event ) {

		event.preventDefault();

		// map pointers
		var touches = this.mapPointer( event ),
			clientX = touches[0].clientX,
			clientY = touches[0].clientY;

		// check if double tap/click
		if ( typeof this.tap !== 'undefined' && // if already tap once
			+new Date() - this.tap.delay < 350 && // if delay between 2 taps < 350ms
			Math.abs( this.tap.deltaX - clientX ) < 30 && // if distanceX between 2 taps < 30px
			Math.abs( this.tap.deltaY - clientY ) < 30 // if distanceY between 2 taps < 30px
			) {

			// restore idle state if double tap
			if ( this.states.tapIdle ) {
				clearTimeout( this.states.tapIdle );
			}

			// zoom on image from pointer coordinates
			if ( this.options.doubleTapToZoom ) {
				this.zoomTo( clientX, clientY );
			}

			// reset double tap data
			this.tap = undefined;

		// if first tap
		} else {

			// check if it's a touch device only (no mouse detect thanks to states.idle)
			if ( this.browser.touchDevice && this.options.timeToIdle && !this.states.idle ) {

				// wait to check if double tap will happen
				this.states.tapIdle = setTimeout( function() {

					var method = !utils.hasClass( this.DOM.holder, this.pre + '-idle' ) ? 'add' : 'remove';
					utils[method + 'Class']( this.DOM.holder, this.pre + '-idle' );

				}.bind( this ), 350 );

			}

			// set tap data
			this.tap = {
				delay  : +new Date(),
				deltaX : touches[0].clientX,
				deltaY : touches[0].clientY
			};

		}

	};

	/**
	 * Check if slider is near settled
	 * @return {boolean}
	 */
	proto.isSliderSettle = function() {

		// if a gesture occured return
		if ( this.gesture.type ) {
			return false;
		}

		// calculate from how much in percent we are from a settled position of the slider (threshold for pinch/close methods)
		var RTL      = this.isRTL(),
			slides   = this.slides,
			width    = slides.width,
			toSettle = Math.abs( RTL * this.slider.position.x + slides.index * width ) / width * 100;

		// if slider position is a least inferior to 3%  from viewport edges (treshold in percent)
		return toSettle <= 3 ? true : false;

	};

	// ----- handle pointer event ----- //

	/**
	 * Map mouse and touch events
	 * @param {Object} event
	 * @return {Object}
	 */
	proto.mapPointer = function( event ) {

		return event.touches ? event.changedTouches : [event];

	};

	/**
	 * Add custom pointer for current event
	 * Prevent multiple pointers breaking gesture
	 * @param {Object} event
	 */
	proto.addPointer = function( event ) {

		var pointers = this.mapPointer( event );

		for ( var i = 0; i < pointers.length; i++ ) {

			if ( this.pointers.length < 2 && ['dragSlider', 'panY', 'dragThumbs'].indexOf( this.gesture.type ) === -1 ) {

				var ev = pointers[i],
					// .pointerId for pointer events, .indentifier for touch events
					id = ev.pointerId !== undefined ? ev.pointerId : ev.identifier;

				if ( !this.getPointer( id ) ) {

					this.pointers[this.pointers.length] = {
						id : id,
						// clientX/clientY are rounded because "pointer" event return float values
						// prevent from inaccurate calculations for the direction on W3C devices capable
						x  : Math.round( ev.clientX ),
						y  : Math.round( ev.clientY )
					};

				}

			}

		}

	};

	/**
	 * Update custom pointer for current event
	 * @param {Object} event
	 */
	proto.updatePointer = function( event ) {

		var pointers = this.mapPointer( event );

		for ( var i = 0; i < pointers.length; i++ ) {

			var ev = pointers[i],
				id = ev.pointerId !== undefined ? ev.pointerId : ev.identifier,
				pt = this.getPointer( id );

			if ( pt ) {

				pt.x = Math.round( ev.clientX );
				pt.y = Math.round( ev.clientY );

			}

		}

	};

	/**
	 * Delete custom pointer for current event
	 * @param {Object} event
	 */
	proto.deletePointer = function( event ) {

		var pointers = this.mapPointer( event );

		for ( var i = 0; i < pointers.length; i++ ) {

			var ev = pointers[i],
				id = ev.pointerId !== undefined ? ev.pointerId : ev.identifier;

			for ( var p = 0; p < this.pointers.length; p++ ) {

				if ( this.pointers[p].id === id ) {
					this.pointers.splice( p, 1 );
				}

			}

		}

	};

	/**
	 * Check if current pointer was record for the current gesture
	 * @param {number} id
	 * @return {Object}
	 */
	proto.getPointer = function( id ) {

		for ( var k in this.pointers ) {

			if ( this.pointers[k].id === id ) {
				return this.pointers[k];
			}

		}

		return null;

	};

	/**
	 * Calculate distances from pointers
	 * @param {string} type (start, move)
	 */
	proto.gestures = function( type ) {

		var g = this.gesture,
			pointers = this.pointers,
			distance;

		// if no pointer found return immediately
		if ( !pointers.length ) {
			return;
		}

		// set x direction
		g.direction = g.x ? pointers[0].x > g.x ? 1 : -1 : 0;

		// get current coordinates (1st pointer)
		g.x = pointers[0].x;
		g.y = pointers[0].y;

		if ( pointers.length === 2 ) {

			// get current coordinates (2nd pointer)
			var x2 = pointers[1].x,
				y2 = pointers[1].y;

			// calculate current distance between 2 pointers
			distance = this.getDistance( [g.x, g.y], [x2, y2] );

			// get center coordinates (between 2 pointers)
			g.x = g.x - ( g.x - x2 ) / 2;
			g.y = g.y - ( g.y - y2 ) / 2;

		}

		// on touchStart only
		if ( type === 'start' ) {

			// store initial coordinates
			g.dx = 0;
			g.dy = 0;
			g.sx = g.x;
			g.sy = g.y;

			// get initial distance (between 2 pointers)
			g.distance = distance ? distance : 0;

		} else {

			// calculate distance in x & y when 1st pointer move
			g.dx = g.x - g.sx;
			g.dy = g.y - g.sy;

			// calculate scale factor (between 2 pointers)
			g.scale = distance && g.distance ? distance / g.distance : 1;

		}

	};

	/**
	 * Calculate distance between 2 pointers
	 * @param {Array} p1 - pointer 1
	 * @param {Array} p2 - pointer 2
	 * @return {number}
	 */
	proto.getDistance = function( p1, p2 ) {

		var x = p2[0] - p1[0],
			y = p2[1] - p1[1];

		return Math.sqrt( ( x * x ) + ( y * y ) );

	};

	// ----- handle gesture ----- //

	/**
	 * Handle drag gesture in Y axis (1 pointer)
	 */
	proto.panY = function() {

		var moving = this.getCell();

		moving.startAnimate();
		moving.updateDrag({
			x : moving.position.x,
			y : moving.start.y + this.gesture.dy,
			s : moving.position.s
		});

	};

	/**
	 * Handle drag gesture in Y axis (1 pointer) end event
	 */
	proto.panYEnd = function() {

		var posY    = 0,
			moving  = this.getCell(),
			height  = this.slider.height,
			resting = moving.resting.y;

		if ( 1 - Math.abs( resting ) / ( height * 0.5 ) < 0.8 ) {

			posY = Math.abs( resting ) < height * 0.5 ? Math.abs( resting ) / resting * height * 0.5 : resting;
			this.close();

			moving.animateTo({
				x : 0,
				y : posY,
				s : posY ? moving.resting.s : 1
			});

			moving.startAnimate();
			moving.releaseDrag();

		}

	};

	/**
	 * Handle panZoom gesture (2 pointers only)
	 */
	proto.panZoom = function() {

		var moving  = this.getCell(),
			gesture = this.gesture,
			bound   = this.mediaViewport( moving.position.s ),
			minZoom = this.options.pinchToClose && gesture.canClose ? 0.1 : 0.6,
			scale   = Math.min( this.options.maxZoom * 1.5, Math.max( minZoom, moving.start.s * gesture.scale ) ),
			posX    = moving.start.x + gesture.dx,
			posY    = moving.start.y + gesture.dy,
			centerX = gesture.sx - this.slider.width * 0.5,
			centerY = gesture.sy - this.slider.height * 0.5;

		// prevent to zoom in if can't zoom but pinch to close
		if ( !gesture.canZoom || ( !this.options.pinchToZoom && !this.states.zoom ) ) {
			scale = Math.min( 1, scale );
		}

		// prevent to zoom in if disabled (pinch) and keep current scale to pan
		if ( !this.options.pinchToZoom && this.states.zoom ) {
			scale = moving.position.s;
		}

		// if pan only, outside viewport, and just started animation
		// remove previous friction added outside viewport
		if ( !gesture.move && this.pointers.length === 1 ) {

			moving.start.x += posX > bound.left ? posX - bound.left : posX < bound.right ? posX - bound.right : 0;
			moving.start.y += posY > bound.bottom ? posY - bound.bottom : posY < bound.top ? posY - bound.top : 0;

		}

		// calculate center between 1 or 2 pointers if zoom
		posX = gesture.dx + centerX + ( moving.start.x - centerX ) * ( scale / moving.start.s );
		posY = gesture.dy + centerY + ( moving.start.y - centerY ) * ( scale / moving.start.s );

		// add friction if pan (1 pointer) and outside viewport
		if ( this.pointers.length === 1 ) {

			posX = posX > bound.left ? ( posX + bound.left ) * 0.5 : posX < bound.right ? ( posX + bound.right ) * 0.5 : posX;
			posY = posY > bound.bottom ? ( posY + bound.bottom ) * 0.5 : posY < bound.top ? ( posY + bound.top ) * 0.5 : posY;

		}

		moving.startAnimate();
		moving.updateDrag({
			x : posX,
			y : posY,
			s : scale
		});

		this.updateZoom( scale );

	};

	/**
	 * Handle panZoom gesture (2 pointers only) end event
	 */
	proto.panZoomEnd = function() {

		// if the resting scale value is near at 1 (under 1.1) force unzoom (allow faster gesture recognition)
		var moving  = this.getCell(),
			gesture = this.gesture,
			scale   = moving.resting.s > this.options.maxZoom ? this.options.maxZoom : moving.resting.s < 1 ? 1 : moving.resting.s,
			bound   = this.mediaViewport( scale ),
			posX, posY;

		// if scaled more than authorized then recalculate position to max authorized scale
		if ( Math.round( moving.resting.s * 10 ) / 10 > this.options.maxZoom ) {

			var centerX = gesture.distance ? gesture.sx - this.slider.width * 0.5 : 0;
			var centerY = gesture.distance ? gesture.sy - this.slider.height * 0.5 : 0;

			posX = gesture.dx + centerX + ( moving.start.x - centerX ) * ( scale / moving.start.s );
			posY = gesture.dy + centerY + ( moving.start.y - centerY ) * ( scale / moving.start.s );
			posX = posX > bound.left ? bound.left : posX < bound.right ? bound.right : posX;
			posY = posY > bound.bottom ? bound.bottom : posY < bound.top ? bound.top : posY;

		} else {

			posX = moving.resting.x > bound.left ? bound.left : moving.resting.x < bound.right ? bound.right : undefined;
			posY = moving.resting.y > bound.bottom ? bound.bottom : moving.resting.y < bound.top ? bound.top : undefined;

		}

		// add resting to scale to animate when closing
		if ( this.options.pinchToClose && moving.resting.s < 0.8 && gesture.canClose ) {

			scale = moving.resting.s < 0.3 ? moving.resting.s : 0.15;
			posX = moving.resting.x;
			posY = moving.resting.y;
			this.close();

		}

		moving.animateTo({
			x : posX,
			y : posY,
			s : scale !== moving.resting.s ? scale : undefined
		});
		moving.startAnimate();
		moving.releaseDrag();

		this.updateZoom( moving.resting.s );

	};

	/**
	 * Handle drag gesture in X axis (1 pointer)
	 */
	proto.dragThumbs = function() {

		var moving = this.thumbs,
			bound  = moving.bound,
			posX   = moving.start.x + this.gesture.dx;

		// add resistance on ends
		if ( !this.gesture.move ) {

			moving.start.x += posX > bound.left ? posX - bound.left : posX < bound.right ? posX - bound.right : 0;
			posX = moving.start.x + this.gesture.dx;

		}

		posX = posX > bound.left ? ( posX + bound.left ) * 0.5 : posX < bound.right ? ( posX + bound.right ) * 0.5 : posX;

		moving.startAnimate();
		// to add freescroll
		moving.attraction.x = undefined;
		moving.updateDrag({
			x : posX
		});

	};

	/**
	 * Handle drag gesture in X axis (1 pointer)
	 */
	proto.dragThumbsEnd = function() {

		var moving = this.thumbs,
			bound  = moving.bound,
			posX   = moving.resting.x;

		posX = posX > bound.left ? bound.left : posX < bound.right ? bound.right : posX;

		// if resting reach bounds/ends
		if ( posX !== moving.resting.x ) {

			moving.animateTo({
				x: posX
			});

		}
		moving.startAnimate();
		moving.releaseDrag();

	};

	/**
	 * Handle drag gesture in X axis (1 pointer)
	 */
	proto.dragSlider = function() {

		// prevent dragging slider if one media
		if ( this.gallery.length === 1 ) {
			return;
		}

		var moving = this.slider,
			posX   = moving.start.x + this.gesture.dx;

		// add resistance if no loop
		if ( !this.states.loop ) {

			var bound = moving.bound;

			if ( !this.gesture.move ) {

				moving.start.x += posX > bound.left ? posX - bound.left : posX < bound.right ? posX - bound.right : 0;
				posX = moving.start.x + this.gesture.dx;

			}

			posX = posX > bound.left ? ( posX + bound.left ) * 0.5 : posX < bound.right ? ( posX + bound.right ) * 0.5 : posX;

		}

		moving.startAnimate();
		moving.updateDrag({
			x : posX
		});

	};

	/**
	 * Handle drag gesture in X axis (1 pointer) end event
	 */
	proto.dragSliderEnd = function() {

		// prevent dragging slider if one media
		if ( this.gallery.length === 1 ) {
			return;
		}

		var moving    = this.slider,
			slides    = this.slides,
			oldIndex  = slides.index,
			RTL       = this.isRTL(),
			restingX  = moving.resting.x,
			positionX = moving.position.x;

		this.getRestingIndex( positionX, restingX );

		if ( oldIndex !== slides.index ) {
			this.updateMediaInfo();
		}

		this.slider.animateTo({
			x : - RTL * slides.index * slides.width,
			y : undefined,
			s : undefined
		});

		moving.startAnimate();
		moving.releaseDrag();

	};

	/**
	 * Calculate new index based on velocity and slider position
	 * @param {number} positionX
	 * @param {number} restingX
	 */
	proto.getRestingIndex = function( positionX, restingX ) {

		var direction = this.gesture.direction,
			gallery   = this.gallery,
			slides    = this.slides,
			deltaX    = this.gesture.dx,
			RTL       = this.isRTL(),
			index     = Math.round( - RTL * positionX / slides.width ),
			moved     = Math.abs( restingX - positionX );

		if ( Math.abs( deltaX ) < slides.width * 0.5 && moved ) {

			if ( deltaX > 0 && direction > 0 ) {
				index -= 1 * RTL;
			} else if ( deltaX < 0 && direction < 0 ) {
				index += 1 * RTL;
			}

		}

		// constrain to slide one slide by one slide
		var gap = Math.max( -1, Math.min( 1, index - slides.index ) );

		// prevent going outside limit if no loop
		if ( !this.states.loop &&
			( ( gallery.index + gap < 0 ) ||
			( gallery.index + gap > gallery.length - 1 ) ) ) {

			return;

		}

		slides.index += gap;

	};

	/**
	 * Shift slide around when slider render
	 */
	proto.shiftSlides = function() {

		var slides  = this.slides,
			gallery = this.gallery,
			loop    = this.states.loop,
			RTL     = this.isRTL(),
			from    = RTL * Math.round( - this.slider.position.x / slides.width ) - 2,
			to      = from + 5;

		if ( !loop && to > gallery.initialLength - 1 ) {
			from = gallery.initialLength - 5;
			to   = from + 5;
		}

		if ( !loop && from < 0 ) {
			from = 0;
			to   = 5;
		}

		for ( var i = from; i < to; i++ ) {

			var position    = RTL * i * slides.width,
				slide_index = utils.modulo( slides.length, i ),
				slide       = slides[slide_index];

			if ( slide.index !== i || slide.position !== position ) {

				// set slide virtual index to get the media index
				slide.index      = i;
				// set position (to resize) if slide width change
				slide.position   = position;
				// apply new position
				slide.style.left = position + 'px';

			}

		}

		// if open only because need to be set after sizing
		if ( this.states.open ) {

			// load only 3 media to prevent appending one or several DOM while dragging/realasing
			// before a touchMove media are set (5), so no reflow/repaint happen during an animation
			// improve performance on touch (mobile) devices
			this.setMedia( 3 );

		}

	};

	/**
	 * Shift thumbnails and load thumbs img
	 * @param {Object} thumbs
	 */
	proto.shiftThumbs = function( thumbs ) {

		var child   = this.DOM.thumbsInner.children,
			slider  = this.slider,
			gallery = this.gallery,
			RTL     = this.isRTL(),
			length  = child.length,
			index   = utils.modulo( gallery.initialLength, gallery.index ),
			width   = thumbs.size * ( length ) * 0.5,
			center  = Math.round( ( - RTL * thumbs.position.x + RTL * width * 0.5 ) / thumbs.size ),
			from    = Math.max( 0, center - Math.floor( length / 2 ) ),
			to      = from + length;

		// current thumbnail viewport
		var tolerance  = slider.width * 0.5,
			boundLeft  = thumbs.position.x + tolerance,
			boundRight = thumbs.position.x - slider.width - tolerance;

		if ( to > gallery.initialLength ) {

			to   = gallery.initialLength;
			from = to - length;

		}

		// make sure we are looping through all thumbs
		if ( to === gallery.initialLength - 1 && from - to < length ) {

			from = gallery.initialLength - length;

		}

		for ( var i = from; i < to; i++ ) {

			var thumb     = child[utils.modulo( length, i )],
				position  = RTL * i * thumbs.size + thumbs.gutter * 0.5,
				className = this.pre + '-active-thumb',
				isActive  = utils.hasClass( thumb, className );

			// set thumbnail position
			if ( thumb.index !== i || thumb.position !== position ) {

				thumb.index      = i;
				thumb.position   = position;
				thumb.style.left = position + 'px';

			}

			// set thumbnail size
			this.setThumbSize( thumb, thumbs );

			// if thumbnail is in the viewport
			if ( - thumb.position <= boundLeft && - thumb.position >= boundRight && thumb.media !== i ) {
				this.loadThumb( thumb, i );
			}

			// add active class
			if ( isActive && index !== i ) {
				utils.removeClass( thumb, className );
			} else if ( !isActive && index === i ) {
				utils.addClass( thumb, className );
			}

		}

	};

	/**
	 * Set thumbnail size
	 * @param {Object} thumb
	 * @param {Object} thumbs
	 */
	proto.setThumbSize = function( thumb, thumbs ) {

		// set thumbnail size if not already assigned
		if ( thumb.width !== thumbs.width ||
			thumb.height !== thumbs.height ||
			thumb.gutter !== thumbs.gutter ) {

			// store sizes
			thumb.width  = thumbs.width;
			thumb.height = thumbs.height;
			thumb.gutter = thumbs.gutter;

			// set thumbnail size
			thumb.style.width  = thumbs.width + 'px';
			thumb.style.height = thumbs.height + 'px';

		}

	};

	/**
	 * Handle close gesture
	 * @param {Object} cell
	 */
	proto.willClose = function( cell ) {

		var opacity      = this.DOM.overlay.style.opacity,
			canClose     = this.gesture.canClose,
			gestureType  = this.gesture.type,
			gestureClose = this.gesture.closeBy,
			pinchToClose = gestureType === 'panZoom' || gestureClose === 'panZoom',
			dragYToClose = gestureType === 'panY' || gestureClose === 'panY';

		// check if the lightbox can be closed with a pinch
		if ( cell.position.s > 1.1 && typeof canClose === 'undefined' ) {
			this.gesture.canClose = false;
		} else if ( cell.position.s < 1 && typeof canClose === 'undefined' ) {
			this.gesture.canClose = true;
		}

		// apply opacity if the user try to close the lightbox
		if ( this.options.pinchToClose && pinchToClose && this.gesture.canClose ) {

			opacity = cell.position.s;
			this.gesture.closeBy = 'panZoom';

		} else if ( dragYToClose ) {

			opacity = 1 - Math.abs( cell.position.y ) / ( this.slider.height * 0.5 );
			this.gesture.closeBy = 'panY';

		} else if ( opacity && opacity < 1 ) {

			opacity = 1;
			this.gesture.closeBy = false;

		}

		// normalize opacity value
		opacity = !opacity ? 1 : Math.max( 0, Math.min( 1, opacity ) );

		// hide ui if the user try to close the lightbox
		// only if the opacity factor is enough to close (0.8)
		var method = opacity <= 0.8 || !opacity ? 'add' : 'remove';
		utils[method + 'Class']( this.DOM.holder, this.pre + '-will-close' );

		this.DOM.overlay.style.opacity = opacity;

	};

	// ----- Slide Navigation ----- //

	/**
	 * Go to prev slide
	 * Throttle function to reduce sliding speed
	 */
	proto.prev = utils.throttle( function() {

		if ( !this.gesture.move ) {

			this.slideTo( this.slides.index - 1 * this.isRTL() );

		}

	}, 120 );

	/**
	 * Go to next slide
	 * Throttle function to reduce sliding speed
	 */
	proto.next = utils.throttle( function() {

		if ( !this.gesture.move ) {

			this.slideTo( this.slides.index + 1 * this.isRTL() );

		}

	}, 120 );

	/**
	 * Slide to gallery index
	 * @param {number} to
	 * @param {boolean} slideShow
	 */
	proto.slideTo = function( to, slideShow ) {

		var slides     = this.slides,
			gallery    = this.gallery,
			holder     = this.DOM.slider,
			RTL        = this.isRTL(),
			length     = gallery.initialLength,
			moduloTo   = utils.modulo( length, to ),
			moduloFrom = utils.modulo( length, gallery.index ),
			slideBy    = moduloTo - moduloFrom,
			fromEnds   = length - Math.abs( slideBy );

		// if no loop and outside gallery ends
		if ( !this.states.loop && ( to < 0 || to > this.gallery.initialLength - 1 ) ) {
			return;
		}

		// if we are closed to a slider end, then go directly
		if ( this.states.loop && fromEnds < 3 && fromEnds * 2 < length ) {
			slideBy = slideBy < 0 ? fromEnds : -fromEnds;
		}

		// if same slide but different media index
		// necessary in loop and thumb click or slideTo triggered manually
		if ( moduloTo === to ) {
			to = slides.index + slideBy;
		}

		// number of slides to animate
		slideBy = to - slides.index;

		// if same slide selected
		if ( !slideBy ) {
			return;
		}

		// unset zoom of current cell
		if ( this.states.zoom ) {
			this.zoom();
		}

		// pause video
		this.pauseVideo();

		// remove share tooltip
		this.share();

		// if not triggered by the slideshow
		if ( !slideShow ) {
			this.stopSlideShow();
		}

		// set new index
		slides.index = to;

		// prepare slider
		var slider = this.slider;

		// if the slide will move more than 2 slides
		// fake animation
		if ( Math.abs( slideBy ) > 2 ) {

			// hide slider with css
			utils.addClass( holder, this.pre + '-hide' );

			// set slider position to selected media
			this.setSliderPosition( slider, slides );
			this.setSlidesPositions( slides );

			// set slider position 2 slide before/after selected media
			var moveBy = RTL * slides.width * Math.min( 2, Math.abs( slideBy ) ) * Math.abs( slideBy ) / slideBy;
			slider.position.x   =
			slider.attraction.x = slider.position.x + moveBy;
			utils.translate( holder, slider.position.x, 0 );

			// trigger reflow for css transitions.
			holder.getClientRects();

		}

		// update media info with new index
		this.updateMediaInfo();

		// reveal slider with css transition
		utils.removeClass( holder, this.pre + '-hide' );

		slider.startAnimate();
		slider.releaseDrag();
		slider.animateTo({
			x : - RTL * to * slides.width,
			y : 0,
			s : undefined
		});

	};

	/**
	 * Handle keydown event
	 * @param {Object} event
	 */
	proto.keyDown = function( event ) {

		var key = event.keyCode,
			opt = this.options;

		if ( opt.prevNextKey ) {

			if ( key === 37 ) {
				this.prev( event );
			} else if ( key === 39 ) {
				this.next( event );
			}

		}

		if ( key === 27 && opt.escapeToClose ) {
			this.close();
		}

		// disable scroll on keydown
		// Space: 32, Page Up: 33, Page Down: 34, End: 35, Home: 36, Up arrow: 38, Down arrow: 40
		if ( !opt.mouseWheel && [32, 33, 34, 35, 36, 38, 40].indexOf( key ) > -1 ) {

			event.preventDefault();
			return false;

		}

	};

	// ----- Zoom functionality ----- //

	/**
	 * Handle zoom on icon click
	 */
	proto.zoom = function() {

		this.zoomTo();

	};

	/**
	 * Zoom to a position (x & y) and scale factor on image
	 * @param {number} x
	 * @param {number} y
	 * @param {number} scale
	 */
	proto.zoomTo = function( x, y, scale ) {

		if ( !this.isSliderSettle() || ( !this.isZoomable() && scale > 1 ) ) {
			return;
		}

		this.gesture.closeBy = false;

		var media = this.getMedia();
		scale = scale ? scale : this.states.zoom ? 1 : media.dom.size.scale;

		var cell  = this.getCell(),
			bound = this.mediaViewport( scale ),
			centX = x ? x - this.slider.width * 0.5 : 0,
			centY = y ? y - this.slider.height * 0.5 : 0,
			PosX  = scale > 1 ? Math.ceil( centX + ( cell.position.x - centX ) * ( scale / cell.position.s ) ) : 0,
			PosY  = scale > 1 ? Math.ceil( centY + ( cell.position.y - centY ) * ( scale / cell.position.s ) ) : 0;

		cell.startAnimate();
		cell.releaseDrag();
		cell.animateTo({
			x : PosX > bound.left ? bound.left : PosX < bound.right ? bound.right : PosX,
			y : PosY > bound.bottom ? bound.bottom : PosY < bound.top ? bound.top : PosY,
			s : scale
		});

		this.updateZoom( scale );

	};

	/**
	 * Update zoom state when zoomTo
	 * @param {number} scale
	 */
	proto.updateZoom = function( scale ) {

		this.states.zoom = scale > 1 ? true : false;
		utils[this.states.zoom ? 'addClass' : 'removeClass']( this.DOM.holder, this.pre + '-panzoom' );

	};

	/**
	 * Destroy method
	 */
	proto.destroy = function() {

		// if no instance
		if ( !this.GUID ) {
			return;
		}

		// Close only if destroy method is called when opened
		if ( this.states.open ) {
			this.close();
		}

		// setup sources
		var selectors = this.options.mediaSelector,
			sources   = '';

		// get all media attached to Modulobox
		try {
			sources = document.querySelectorAll( selectors );
		} catch (error) {}

		// remove all events attached to media
		for ( var i = 0, l = sources.length; i < l; i++ ) {

			var source = sources[i];

			if ( source.mobxListener ) {
				source.removeEventListener( 'click', source.mobxListener, false );
			}

		}

		// unbind all events
		this.bindEvents( false );

		// reset slider animation
		this.slider.resetAnimate();

		// reset cells animations
		for ( i = 0; i < this.slides.length; i++ ) {
			this.cells[i].resetAnimate();
		}

		// reset thumbs animation
		if ( this.thumbs ) {
			this.thumbs.resetAnimate();
		}

		// remove main holders
		this.DOM.holder.parentNode.removeChild( this.DOM.holder );
		this.DOM.comment.parentNode.removeChild( this.DOM.comment );

		// delete instance;
		delete instances[this.GUID];
		delete this.GUID;

	};

	/**
	 * jQuery plugin
	 */
	if ( typeof jQuery !== 'undefined' ) {

		( function( $ ) {

			$.ModuloBox = function( options ) {

				return new ModuloBox( options );

			};

		})( jQuery );

	}

	return ModuloBox;

}));
