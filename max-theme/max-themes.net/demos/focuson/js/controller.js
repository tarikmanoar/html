/*  HELPER FUNCTIONS
/*======================*/

	function delay_exec( id, wait_time, callback_f ){
	    if( typeof wait_time === "undefined" ){ wait_time = 500; }
	    if( typeof window['delay_exec'] === "undefined" ){ window['delay_exec'] = [];}
	    if( typeof window['delay_exec'][id] !== "undefined" ){ clearTimeout( window['delay_exec'][id] );}
	    window['delay_exec'][id] = setTimeout( callback_f , wait_time );
	}

	function formPlaceholder(target){
		target.each(function(){
			var self       = jQuery(this);
			if (self.attr('placeholder')) {
				self.data("placeholder", self.attr('placeholder'));
				self.removeAttr('placeholder');
			};
			var placeholder = self.data("placeholder");
			if(self.val() == '') { self.val(placeholder);}
			self
			.on('focus', function(){
				if(self.val() == placeholder) { self.val('');}
			})
			.on('focusout', function(){
				if(self.val() == '') { self.val(placeholder);}
			});
		});
	}

	(function($,sr){
 
	  // debouncing function from John Hann
	  // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
	  var debounce = function (func, threshold, execAsap) {
	      var timeout;
	 
	      return function debounced () {
	          var obj = this, args = arguments;
	          function delayed () {
	              if (!execAsap)
	                  func.apply(obj, args);
	              timeout = null; 
	          };
	 
	          if (timeout)
	              clearTimeout(timeout);
	          else if (execAsap)
	              func.apply(obj, args);
	 
	          timeout = setTimeout(delayed, threshold || 100); 
	      };
	  }
		// smartresize 
		jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };
	 
	})(jQuery,'smartresize');

/*  PLUGINS
/*======================*/
	
	// - Easing
	(function($){$.easing.jswing=$.easing.swing;$.extend($.easing,{def:"easeOutQuad",swing:function(e,f,a,h,g){return $.easing[$.easing.def](e,f,a,h,g)},easeInQuad:function(e,f,a,h,g){return h*(f/=g)*f+a},easeOutQuad:function(e,f,a,h,g){return -h*(f/=g)*(f-2)+a},easeInOutQuad:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f+a}return -h/2*((--f)*(f-2)-1)+a},easeInCubic:function(e,f,a,h,g){return h*(f/=g)*f*f+a},easeOutCubic:function(e,f,a,h,g){return h*((f=f/g-1)*f*f+1)+a},easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f+a}return h/2*((f-=2)*f*f+2)+a},easeInQuart:function(e,f,a,h,g){return h*(f/=g)*f*f*f+a},easeOutQuart:function(e,f,a,h,g){return -h*((f=f/g-1)*f*f*f-1)+a},easeInOutQuart:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f+a}return -h/2*((f-=2)*f*f*f-2)+a},easeInQuint:function(e,f,a,h,g){return h*(f/=g)*f*f*f*f+a},easeOutQuint:function(e,f,a,h,g){return h*((f=f/g-1)*f*f*f*f+1)+a},easeInOutQuint:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f*f+a}return h/2*((f-=2)*f*f*f*f+2)+a},easeInSine:function(e,f,a,h,g){return -h*Math.cos(f/g*(Math.PI/2))+h+a},easeOutSine:function(e,f,a,h,g){return h*Math.sin(f/g*(Math.PI/2))+a},easeInOutSine:function(e,f,a,h,g){return -h/2*(Math.cos(Math.PI*f/g)-1)+a},easeInExpo:function(e,f,a,h,g){return(f==0)?a:h*Math.pow(2,10*(f/g-1))+a},easeOutExpo:function(e,f,a,h,g){return(f==g)?a+h:h*(-Math.pow(2,-10*f/g)+1)+a},easeInOutExpo:function(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a},easeInCirc:function(e,f,a,h,g){return -h*(Math.sqrt(1-(f/=g)*f)-1)+a},easeOutCirc:function(e,f,a,h,g){return h*Math.sqrt(1-(f=f/g-1)*f)+a},easeInOutCirc:function(e,f,a,h,g){if((f/=g/2)<1){return -h/2*(Math.sqrt(1-f*f)-1)+a}return h/2*(Math.sqrt(1-(f-=2)*f)+1)+a},easeInElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return -(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e},easeOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return g*Math.pow(2,-10*h)*Math.sin((h*k-i)*(2*Math.PI)/j)+l+e},easeInOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k/2)==2){return e+l}if(!j){j=k*(0.3*1.5)}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}if(h<1){return -0.5*(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e}return g*Math.pow(2,-10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j)*0.5+l+e},easeInBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*(f/=h)*f*((g+1)*f-g)+a},easeOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a},easeInOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}if((f/=h/2)<1){return i/2*(f*f*(((g*=(1.525))+1)*f-g))+a}return i/2*((f-=2)*f*(((g*=(1.525))+1)*f+g)+2)+a},easeInBounce:function(e,f,a,h,g){return h-$.easing.easeOutBounce(e,g-f,0,h,g)+a},easeOutBounce:function(e,f,a,h,g){if((f/=g)<(1/2.75)){return h*(7.5625*f*f)+a}else{if(f<(2/2.75)){return h*(7.5625*(f-=(1.5/2.75))*f+0.75)+a}else{if(f<(2.5/2.75)){return h*(7.5625*(f-=(2.25/2.75))*f+0.9375)+a}else{return h*(7.5625*(f-=(2.625/2.75))*f+0.984375)+a}}}},easeInOutBounce:function(e,f,a,h,g){if(f<g/2){return $.easing.easeInBounce(e,f*2,0,h,g)*0.5+a}return $.easing.easeOutBounce(e,f*2-g,0,h,g)*0.5+h*0.5+a}});})(jQuery);
	// - HoverIntent
	(function($){$.fn.hoverIntent=function(handlerIn,handlerOut,selector){var cfg={interval:100,sensitivity:6,timeout:0};if(typeof handlerIn==="object"){cfg=$.extend(cfg,handlerIn)}else{if($.isFunction(handlerOut)){cfg=$.extend(cfg,{over:handlerIn,out:handlerOut,selector:selector})}else{cfg=$.extend(cfg,{over:handlerIn,out:handlerIn,selector:handlerOut})}}var cX,cY,pX,pY;var track=function(ev){cX=ev.pageX;cY=ev.pageY};var compare=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);if(Math.sqrt((pX-cX)*(pX-cX)+(pY-cY)*(pY-cY))<cfg.sensitivity){$(ob).off("mousemove.hoverIntent",track);ob.hoverIntent_s=true;return cfg.over.apply(ob,[ev])}else{pX=cX;pY=cY;ob.hoverIntent_t=setTimeout(function(){compare(ev,ob)},cfg.interval)}};var delay=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);ob.hoverIntent_s=false;return cfg.out.apply(ob,[ev])};var handleHover=function(e){var ev=$.extend({},e);var ob=this;if(ob.hoverIntent_t){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t)}if(e.type==="mouseenter"){pX=ev.pageX;pY=ev.pageY;$(ob).on("mousemove.hoverIntent",track);if(!ob.hoverIntent_s){ob.hoverIntent_t=setTimeout(function(){compare(ev,ob)},cfg.interval)}}else{$(ob).off("mousemove.hoverIntent",track);if(ob.hoverIntent_s){ob.hoverIntent_t=setTimeout(function(){delay(ev,ob)},cfg.timeout)}}};return this.on({"mouseenter.hoverIntent":handleHover,"mouseleave.hoverIntent":handleHover},cfg.selector)}})(jQuery);
	// - Nivo LightBox
	(function(e,t,n,r){function o(t,n){this.el=t;this.$el=e(this.el);this.options=e.extend({},s,n);this._defaults=s;this._name=i;this.init()}var i="nivoLightbox",s={effect:"fade",theme:"default",keyboardNav:true,clickOverlayToClose:true,onInit:function(){},beforeShowLightbox:function(){},afterShowLightbox:function(e){},beforeHideLightbox:function(){},afterHideLightbox:function(){},onPrev:function(e){},onNext:function(e){},errorMessage:"The requested content cannot be loaded. Please try again later."};o.prototype={init:function(){var t=this;if(!e("html").hasClass("nivo-lightbox-notouch"))e("html").addClass("nivo-lightbox-notouch");if("ontouchstart"in n)e("html").removeClass("nivo-lightbox-notouch");this.$el.on("click",function(e){t.showLightbox(e)});if(this.options.keyboardNav){e("body").off("keyup").on("keyup",function(n){var r=n.keyCode?n.keyCode:n.which;if(r==27)t.destructLightbox();if(r==37)e(".nivo-lightbox-prev").trigger("click");if(r==39)e(".nivo-lightbox-next").trigger("click")})}this.options.onInit.call(this)},showLightbox:function(t){var n=this,r=this.$el;var i=this.checkContent(r);if(!i)return;t.preventDefault();this.options.beforeShowLightbox.call(this);var s=this.constructLightbox();if(!s)return;var o=s.find(".nivo-lightbox-content");if(!o)return;e("body").addClass("nivo-lightbox-body-effect-"+this.options.effect);this.processContent(o,r);if(this.$el.attr("data-lightbox-gallery")){var u=e('[data-lightbox-gallery="'+this.$el.attr("data-lightbox-gallery")+'"]');e(".nivo-lightbox-nav").show();e(".nivo-lightbox-prev").off("click").on("click",function(t){t.preventDefault();var i=u.index(r);r=u.eq(i-1);if(!e(r).length)r=u.last();n.processContent(o,r);n.options.onPrev.call(this,[r])});e(".nivo-lightbox-next").off("click").on("click",function(t){t.preventDefault();var i=u.index(r);r=u.eq(i+1);if(!e(r).length)r=u.first();n.processContent(o,r);n.options.onNext.call(this,[r])})}setTimeout(function(){s.addClass("nivo-lightbox-open");n.options.afterShowLightbox.call(this,[s])},1)},checkContent:function(e){var t=this,n=e.attr("href"),r=n.match(/(youtube|youtu|vimeo)\.(com|be)\/(watch\?v=([\w-]+)|([\w-]+))/);if(n.match(/\.(jpeg|jpg|gif|png)$/i)!==null){return true}else if(r){return true}else if(e.attr("data-lightbox-type")=="ajax"){return true}else if(n.substring(0,1)=="#"&&e.attr("data-lightbox-type")=="inline"){return true}else if(e.attr("data-lightbox-type")=="iframe"){return true}return false},processContent:function(n,r){var i=this,s=r.attr("href"),o=s.match(/(youtube|youtu|vimeo)\.(com|be)\/(watch\?v=([\w-]+)|([\w-]+))/);n.html("").addClass("nivo-lightbox-loading");if(this.isHidpi()&&r.attr("data-lightbox-hidpi")){s=r.attr("data-lightbox-hidpi")}if(s.match(/\.(jpeg|jpg|gif|png)$/i)!==null){var u=e("<img>",{src:s});u.one("load",function(){var r=e('<div class="nivo-lightbox-image" />');r.append(u);n.html(r).removeClass("nivo-lightbox-loading");r.css({"line-height":e(".nivo-lightbox-content").height()+"px",height:e(".nivo-lightbox-content").height()+"px"});e(t).resize(function(){r.css({"line-height":e(".nivo-lightbox-content").height()+"px",height:e(".nivo-lightbox-content").height()+"px"})})}).each(function(){if(this.complete)e(this).load()});u.error(function(){var t=e('<div class="nivo-lightbox-error"><p>'+i.options.errorMessage+"</p></div>");n.html(t).removeClass("nivo-lightbox-loading")})}else if(o){var a="",f="nivo-lightbox-video";if(o[1]=="youtube"){a="http://www.youtube.com/embed/"+o[4];f="nivo-lightbox-youtube"}if(o[1]=="youtu"){a="http://www.youtube.com/embed/"+o[3];f="nivo-lightbox-youtube"}if(o[1]=="vimeo"){a="http://player.vimeo.com/video/"+o[3];f="nivo-lightbox-vimeo"}if(a){var l=e("<iframe>",{src:a,"class":f,frameborder:0,vspace:0,hspace:0,scrolling:"auto"});n.html(l);l.load(function(){n.removeClass("nivo-lightbox-loading")})}}else if(r.attr("data-lightbox-type")=="ajax"){e.ajax({url:s,cache:false,success:function(r){var i=e('<div class="nivo-lightbox-ajax" />');i.append(r);n.html(i).removeClass("nivo-lightbox-loading");if(i.outerHeight()<n.height()){i.css({position:"relative",top:"50%","margin-top":-(i.outerHeight()/2)+"px"})}e(t).resize(function(){if(i.outerHeight()<n.height()){i.css({position:"relative",top:"50%","margin-top":-(i.outerHeight()/2)+"px"})}})},error:function(){var t=e('<div class="nivo-lightbox-error"><p>'+i.options.errorMessage+"</p></div>");n.html(t).removeClass("nivo-lightbox-loading")}})}else if(s.substring(0,1)=="#"&&r.attr("data-lightbox-type")=="inline"){if(e(s).length){var c=e('<div class="nivo-lightbox-inline" />');c.append(e(s).clone().show());n.html(c).removeClass("nivo-lightbox-loading");if(c.outerHeight()<n.height()){c.css({position:"relative",top:"50%","margin-top":-(c.outerHeight()/2)+"px"})}e(t).resize(function(){if(c.outerHeight()<n.height()){c.css({position:"relative",top:"50%","margin-top":-(c.outerHeight()/2)+"px"})}})}else{var h=e('<div class="nivo-lightbox-error"><p>'+i.options.errorMessage+"</p></div>");n.html(h).removeClass("nivo-lightbox-loading")}}else if(r.attr("data-lightbox-type")=="iframe"){var p=e("<iframe>",{src:s,"class":"nivo-lightbox-item",frameborder:0,vspace:0,hspace:0,scrolling:"auto"});n.html(p);p.load(function(){n.removeClass("nivo-lightbox-loading")})}else{return false}if(r.attr("title")){var d=e("<span>",{"class":"nivo-lightbox-title"});d.text(r.attr("title"));e(".nivo-lightbox-title-wrap").html(d)}else{e(".nivo-lightbox-title-wrap").html("")}},constructLightbox:function(){if(e(".nivo-lightbox-overlay").length)return e(".nivo-lightbox-overlay");var t=e("<div>",{"class":"nivo-lightbox-overlay nivo-lightbox-theme-"+this.options.theme+" nivo-lightbox-effect-"+this.options.effect});var n=e("<div>",{"class":"nivo-lightbox-wrap"});var r=e("<div>",{"class":"nivo-lightbox-content"});var i=e('<a href="#" class="nivo-lightbox-nav nivo-lightbox-prev">Previous</a><a href="#" class="nivo-lightbox-nav nivo-lightbox-next">Next</a>');var s=e('<a href="#" class="nivo-lightbox-close" title="Close">Close</a>');var o=e("<div>",{"class":"nivo-lightbox-title-wrap"});var u=0;if(u)t.addClass("nivo-lightbox-ie");n.append(r);n.append(o);t.append(n);t.append(i);t.append(s);e("body").append(t);var a=this;if(a.options.clickOverlayToClose){t.on("click",function(t){if(t.target===this||e(t.target).hasClass("nivo-lightbox-content")||e(t.target).hasClass("nivo-lightbox-image")){a.destructLightbox()}})}s.on("click",function(e){e.preventDefault();a.destructLightbox()});return t},destructLightbox:function(){var t=this;this.options.beforeHideLightbox.call(this);e(".nivo-lightbox-overlay").removeClass("nivo-lightbox-open");e(".nivo-lightbox-nav").hide();e("body").removeClass("nivo-lightbox-body-effect-"+t.options.effect);var n=0;if(n){e(".nivo-lightbox-overlay iframe").attr("src"," ");e(".nivo-lightbox-overlay iframe").remove()}e(".nivo-lightbox-prev").off("click");e(".nivo-lightbox-next").off("click");e(".nivo-lightbox-content").empty();this.options.afterHideLightbox.call(this)},isHidpi:function(){var e="(-webkit-min-device-pixel-ratio: 1.5),                              (min--moz-device-pixel-ratio: 1.5),                              (-o-min-device-pixel-ratio: 3/2),                              (min-resolution: 1.5dppx)";if(t.devicePixelRatio>1)return true;if(t.matchMedia&&t.matchMedia(e).matches)return true;return false}};e.fn[i]=function(t){return this.each(function(){if(!e.data(this,i)){e.data(this,i,new o(this,t))}})}})(jQuery,window,document);
	// - Mobile Events
	(function(e){function d(){var e=o();if(e!==u){u=e;i.trigger("orientationchange")}}function E(t,n,r,i){var s=r.type;r.type=n;e.event.dispatch.call(t,r,i);r.type=s}e.attrFn=e.attrFn||{};var t=navigator.userAgent.toLowerCase(),n=t.indexOf("chrome")>-1&&(t.indexOf("windows")>-1||t.indexOf("macintosh")>-1||t.indexOf("linux")>-1)&&t.indexOf("chrome")<0,r={swipe_h_threshold:50,swipe_v_threshold:50,taphold_threshold:750,doubletap_int:500,touch_capable:"ontouchstart"in document.documentElement&&!n,orientation_support:"orientation"in window&&"onorientationchange"in window,startevent:"ontouchstart"in document.documentElement&&!n?"touchstart":"mousedown",endevent:"ontouchstart"in document.documentElement&&!n?"touchend":"mouseup",moveevent:"ontouchstart"in document.documentElement&&!n?"touchmove":"mousemove",tapevent:"ontouchstart"in document.documentElement&&!n?"tap":"click",scrollevent:"ontouchstart"in document.documentElement&&!n?"touchmove":"scroll",hold_timer:null,tap_timer:null};e.isTouchCapable=function(){return r.touch_capable};e.getStartEvent=function(){return r.startevent};e.getEndEvent=function(){return r.endevent};e.getMoveEvent=function(){return r.moveevent};e.getTapEvent=function(){return r.tapevent};e.getScrollEvent=function(){return r.scrollevent};e.each(["tapstart","tapend","tap","singletap","doubletap","taphold","swipe","swipeup","swiperight","swipedown","swipeleft","swipeend","scrollstart","scrollend","orientationchange"],function(t,n){e.fn[n]=function(e){return e?this.bind(n,e):this.trigger(n)};e.attrFn[n]=true});e.event.special.tapstart={setup:function(){var t=this,n=e(t);n.bind(r.startevent,function(e){n.data("callee",arguments.callee);if(e.which&&e.which!==1){return false}var i=e.originalEvent,s={position:{x:r.touch_capable?i.touches[0].screenX:e.screenX,y:r.touch_capable?i.touches[0].screenY:e.screenY},offset:{x:r.touch_capable?i.touches[0].pageX-i.touches[0].target.offsetLeft:e.offsetX,y:r.touch_capable?i.touches[0].pageY-i.touches[0].target.offsetTop:e.offsetY},time:(new Date).getTime(),target:e.target};E(t,"tapstart",e,s);return true})},remove:function(){e(this).unbind(r.startevent,e(this).data.callee)}};e.event.special.tapend={setup:function(){var t=this,n=e(t);n.bind(r.endevent,function(e){n.data("callee",arguments.callee);var i=e.originalEvent;var s={position:{x:r.touch_capable?i.changedTouches[0].screenX:e.screenX,y:r.touch_capable?i.changedTouches[0].screenY:e.screenY},offset:{x:r.touch_capable?i.changedTouches[0].pageX-i.changedTouches[0].target.offsetLeft:e.offsetX,y:r.touch_capable?i.changedTouches[0].pageY-i.changedTouches[0].target.offsetTop:e.offsetY},time:(new Date).getTime(),target:e.target};E(t,"tapend",e,s);return true})},remove:function(){e(this).unbind(r.endevent,e(this).data.callee)}};e.event.special.taphold={setup:function(){var t=this,n=e(t),i,s,o={x:0,y:0};n.bind(r.startevent,function(e){if(e.which&&e.which!==1){return false}else{n.data("tapheld",false);i=e.target;var s=e.originalEvent;var u=(new Date).getTime(),a={x:r.touch_capable?s.touches[0].screenX:e.screenX,y:r.touch_capable?s.touches[0].screenY:e.screenY},f={x:r.touch_capable?s.touches[0].pageX-s.touches[0].target.offsetLeft:e.offsetX,y:r.touch_capable?s.touches[0].pageY-s.touches[0].target.offsetTop:e.offsetY};o.x=e.originalEvent.targetTouches?e.originalEvent.targetTouches[0].pageX:e.pageX;o.y=e.originalEvent.targetTouches?e.originalEvent.targetTouches[0].pageY:e.pageY;r.hold_timer=window.setTimeout(function(){var l=e.originalEvent.targetTouches?e.originalEvent.targetTouches[0].pageX:e.pageX,c=e.originalEvent.targetTouches?e.originalEvent.targetTouches[0].pageY:e.pageY;if(e.target==i&&o.x==l&&o.y==c){n.data("tapheld",true);var h=(new Date).getTime(),p={x:r.touch_capable?s.touches[0].screenX:e.screenX,y:r.touch_capable?s.touches[0].screenY:e.screenY},d={x:r.touch_capable?s.touches[0].pageX-s.touches[0].target.offsetLeft:e.offsetX,y:r.touch_capable?s.touches[0].pageY-s.touches[0].target.offsetTop:e.offsetY};duration=h-u;var v={startTime:u,endTime:h,startPosition:a,startOffset:f,endPosition:p,endOffset:d,duration:duration,target:e.target};n.data("callee1",arguments.callee);E(t,"taphold",e,v)}},r.taphold_threshold);return true}}).bind(r.endevent,function(){n.data("callee2",arguments.callee);n.data("tapheld",false);window.clearTimeout(r.hold_timer)})},remove:function(){e(this).unbind(r.startevent,e(this).data.callee1).unbind(r.endevent,e(this).data.callee2)}};e.event.special.doubletap={setup:function(){var t=this,n=e(t),i,s,o,u;n.bind(r.startevent,function(e){if(e.which&&e.which!==1){return false}else{n.data("doubletapped",false);i=e.target;n.data("callee1",arguments.callee);u=e.originalEvent;o={position:{x:r.touch_capable?u.touches[0].screenX:e.screenX,y:r.touch_capable?u.touches[0].screenY:e.screenY},offset:{x:r.touch_capable?u.touches[0].pageX-u.touches[0].target.offsetLeft:e.offsetX,y:r.touch_capable?u.touches[0].pageY-u.touches[0].target.offsetTop:e.offsetY},time:(new Date).getTime(),target:e.target};return true}}).bind(r.endevent,function(e){var a=(new Date).getTime();var f=n.data("lastTouch")||a+1;var l=a-f;window.clearTimeout(s);n.data("callee2",arguments.callee);if(l<r.doubletap_int&&l>0&&e.target==i&&l>100){n.data("doubletapped",true);window.clearTimeout(r.tap_timer);var c={position:{x:r.touch_capable?u.touches[0].screenX:e.screenX,y:r.touch_capable?u.touches[0].screenY:e.screenY},offset:{x:r.touch_capable?u.touches[0].pageX-u.touches[0].target.offsetLeft:e.offsetX,y:r.touch_capable?u.touches[0].pageY-u.touches[0].target.offsetTop:e.offsetY},time:(new Date).getTime(),target:e.target};var h={firstTap:o,secondTap:c,interval:c.time-o.time};E(t,"doubletap",e,h)}else{n.data("lastTouch",a);s=window.setTimeout(function(e){window.clearTimeout(s)},r.doubletap_int,[e])}n.data("lastTouch",a)})},remove:function(){e(this).unbind(r.startevent,e(this).data.callee1).unbind(r.endevent,e(this).data.callee2)}};e.event.special.singletap={setup:function(){var t=this,n=e(t),i=null,s=null,o={x:0,y:0};n.bind(r.startevent,function(e){if(e.which&&e.which!==1){return false}else{s=(new Date).getTime();i=e.target;n.data("callee1",arguments.callee);o.x=e.originalEvent.targetTouches?e.originalEvent.targetTouches[0].pageX:e.pageX;o.y=e.originalEvent.targetTouches?e.originalEvent.targetTouches[0].pageY:e.pageY;return true}}).bind(r.endevent,function(e){n.data("callee2",arguments.callee);if(e.target==i){end_pos_x=e.originalEvent.changedTouches?e.originalEvent.changedTouches[0].pageX:e.pageX;end_pos_y=e.originalEvent.changedTouches?e.originalEvent.changedTouches[0].pageY:e.pageY;r.tap_timer=window.setTimeout(function(){if(!n.data("doubletapped")&&!n.data("tapheld")&&o.x==end_pos_x&&o.y==end_pos_y){var i=e.originalEvent;var s={position:{x:r.touch_capable?i.changedTouches[0].screenX:e.screenX,y:r.touch_capable?i.changedTouches[0].screenY:e.screenY},offset:{x:r.touch_capable?i.changedTouches[0].pageX-i.changedTouches[0].target.offsetLeft:e.offsetX,y:r.touch_capable?i.changedTouches[0].pageY-i.changedTouches[0].target.offsetTop:e.offsetY},time:(new Date).getTime(),target:e.target};E(t,"singletap",e,s)}},r.doubletap_int)}})},remove:function(){e(this).unbind(r.startevent,e(this).data.callee1).unbind(r.endevent,e(this).data.callee2)}};e.event.special.tap={setup:function(){var t=this,n=e(t),i=false,s=null,o,u={x:0,y:0};n.bind(r.startevent,function(e){n.data("callee1",arguments.callee);if(e.which&&e.which!==1){return false}else{i=true;u.x=e.originalEvent.targetTouches?e.originalEvent.targetTouches[0].pageX:e.pageX;u.y=e.originalEvent.targetTouches?e.originalEvent.targetTouches[0].pageY:e.pageY;o=(new Date).getTime();s=e.target;return true}}).bind(r.endevent,function(e){n.data("callee2",arguments.callee);var a=e.originalEvent.targetTouches?e.originalEvent.changedTouches[0].pageX:e.pageX,f=e.originalEvent.targetTouches?e.originalEvent.changedTouches[0].pageY:e.pageY;if(s==e.target&&i&&(new Date).getTime()-o<r.taphold_threshold&&u.x==a&&u.y==f){var l=e.originalEvent;var c={position:{x:r.touch_capable?l.changedTouches[0].screenX:e.screenX,y:r.touch_capable?l.changedTouches[0].screenY:e.screenY},offset:{x:r.touch_capable?l.changedTouches[0].pageX-l.changedTouches[0].target.offsetLeft:e.offsetX,y:r.touch_capable?l.changedTouches[0].pageY-l.changedTouches[0].target.offsetTop:e.offsetY},time:(new Date).getTime(),target:e.target};E(t,"tap",e,c)}})},remove:function(){e(this).unbind(r.startevent,e(this).data.callee1).unbind(r.endevent,e(this).data.callee2)}};e.event.special.swipe={setup:function(){function f(t){n=e(t.target);n.data("callee1",arguments.callee);o.x=t.originalEvent.targetTouches?t.originalEvent.targetTouches[0].pageX:t.pageX;o.y=t.originalEvent.targetTouches?t.originalEvent.targetTouches[0].pageY:t.pageY;u.x=o.x;u.y=o.y;i=true;var s=t.originalEvent;a={position:{x:r.touch_capable?s.touches[0].screenX:t.screenX,y:r.touch_capable?s.touches[0].screenY:t.screenY},offset:{x:r.touch_capable?s.touches[0].pageX-s.touches[0].target.offsetLeft:t.offsetX,y:r.touch_capable?s.touches[0].pageY-s.touches[0].target.offsetTop:t.offsetY},time:(new Date).getTime(),target:t.target};var f=new Date;while(new Date-f<100){}}function l(t){n=e(t.target);n.data("callee2",arguments.callee);u.x=t.originalEvent.targetTouches?t.originalEvent.targetTouches[0].pageX:t.pageX;u.y=t.originalEvent.targetTouches?t.originalEvent.targetTouches[0].pageY:t.pageY;window.clearTimeout(r.hold_timer);var f;var l=n.data("xthreshold"),c=n.data("ythreshold"),h=typeof l!=="undefined"&&l!==false&&parseInt(l)?parseInt(l):r.swipe_h_threshold,p=typeof c!=="undefined"&&c!==false&&parseInt(c)?parseInt(c):r.swipe_v_threshold;if(o.y>u.y&&o.y-u.y>p){f="swipeup"}if(o.x<u.x&&u.x-o.x>h){f="swiperight"}if(o.y<u.y&&u.y-o.y>p){f="swipedown"}if(o.x>u.x&&o.x-u.x>h){f="swipeleft"}if(f!=undefined&&i){o.x=0;o.y=0;u.x=0;u.y=0;i=false;var d=t.originalEvent;endEvnt={position:{x:r.touch_capable?d.touches[0].screenX:t.screenX,y:r.touch_capable?d.touches[0].screenY:t.screenY},offset:{x:r.touch_capable?d.touches[0].pageX-d.touches[0].target.offsetLeft:t.offsetX,y:r.touch_capable?d.touches[0].pageY-d.touches[0].target.offsetTop:t.offsetY},time:(new Date).getTime(),target:t.target};var v=Math.abs(a.position.x-endEvnt.position.x),m=Math.abs(a.position.y-endEvnt.position.y);var g={startEvnt:a,endEvnt:endEvnt,direction:f.replace("swipe",""),xAmount:v,yAmount:m,duration:endEvnt.time-a.time};s=true;n.trigger("swipe",g).trigger(f,g)}}function c(t){n=e(t.target);var o="";n.data("callee3",arguments.callee);if(s){var u=n.data("xthreshold"),f=n.data("ythreshold"),l=typeof u!=="undefined"&&u!==false&&parseInt(u)?parseInt(u):r.swipe_h_threshold,c=typeof f!=="undefined"&&f!==false&&parseInt(f)?parseInt(f):r.swipe_v_threshold;var h=t.originalEvent;endEvnt={position:{x:r.touch_capable?h.changedTouches[0].screenX:t.screenX,y:r.touch_capable?h.changedTouches[0].screenY:t.screenY},offset:{x:r.touch_capable?h.changedTouches[0].pageX-h.changedTouches[0].target.offsetLeft:t.offsetX,y:r.touch_capable?h.changedTouches[0].pageY-h.changedTouches[0].target.offsetTop:t.offsetY},time:(new Date).getTime(),target:t.target};if(a.position.y>endEvnt.position.y&&a.position.y-endEvnt.position.y>c){o="swipeup"}if(a.position.x<endEvnt.position.x&&endEvnt.position.x-a.position.x>l){o="swiperight"}if(a.position.y<endEvnt.position.y&&endEvnt.position.y-a.position.y>c){o="swipedown"}if(a.position.x>endEvnt.position.x&&a.position.x-endEvnt.position.x>l){o="swipeleft"}var p=Math.abs(a.position.x-endEvnt.position.x),d=Math.abs(a.position.y-endEvnt.position.y);var v={startEvnt:a,endEvnt:endEvnt,direction:o.replace("swipe",""),xAmount:p,yAmount:d,duration:endEvnt.time-a.time};n.trigger("swipeend",v)}i=false;s=false}var t=this,n=e(t),i=false,s=false,o={x:0,y:0},u={x:0,y:0},a;n.bind(r.startevent,f);n.bind(r.moveevent,l);n.bind(r.endevent,c)},remove:function(){e(this).unbind(r.startevent,e(this).data.callee1).unbind(r.moveevent,e(this).data.callee2).unbind(r.endevent,e(this).data.callee3)}};e.event.special.scrollstart={setup:function(){function o(e,n){i=n;E(t,i?"scrollstart":"scrollend",e)}var t=this,n=e(t),i,s;n.bind(r.scrollevent,function(e){n.data("callee",arguments.callee);if(!i){o(e,true)}clearTimeout(s);s=setTimeout(function(){o(e,false)},50)})},remove:function(){e(this).unbind(r.scrollevent,e(this).data.callee)}};var i=e(window),s,o,u,a,f,l={0:true,180:true};if(r.orientation_support){var c=window.innerWidth||e(window).width(),h=window.innerHeight||e(window).height(),p=50;a=c>h&&c-h>p;f=l[window.orientation];if(a&&f||!a&&!f){l={"-90":true,90:true}}}e.event.special.orientationchange=s={setup:function(){if(r.orientation_support){return false}u=o();i.bind("throttledresize",d);return true},teardown:function(){if(r.orientation_support){return false}i.unbind("throttledresize",d);return true},add:function(e){var t=e.handler;e.handler=function(e){e.orientation=o();return t.apply(this,arguments)}}};e.event.special.orientationchange.orientation=o=function(){var e=true,t=document.documentElement;if(r.orientation_support){e=l[window.orientation]}else{e=t&&t.clientWidth/t.clientHeight<1.1}return e?"portrait":"landscape"};e.event.special.throttledresize={setup:function(){e(this).bind("resize",m)},teardown:function(){e(this).unbind("resize",m)}};var v=250,m=function(){b=(new Date).getTime();w=b-g;if(w>=v){g=b;e(this).trigger("throttledresize")}else{if(y){window.clearTimeout(y)}y=window.setTimeout(d,v-w)}},g=0,y,b,w;e.each({scrollend:"scrollstart",swipeup:"swipe",swiperight:"swipe",swipedown:"swipe",swipeleft:"swipe",swipeend:"swipe"},function(t,n,r){e.event.special[t]={setup:function(){e(this).bind(n,e.noop)}}})})(jQuery);
	// - OwlCarousel
	(function($){if(typeof Object.create!=="function"){Object.create=function(obj){function F(){}F.prototype=obj;return new F()}}(function($,window,document){var Carousel={init:function(options,el){var base=this;base.$elem=$(el);base.options=$.extend({},$.fn.owlCarousel.options,base.$elem.data(),options);base.userOptions=options;base.loadContent()},loadContent:function(){var base=this,url;function getData(data){var i,content="";if(typeof base.options.jsonSuccess==="function"){base.options.jsonSuccess.apply(this,[data])}else{for(i in data.owl){if(data.owl.hasOwnProperty(i)){content+=data.owl[i].item}}base.$elem.html(content)}base.logIn()}if(typeof base.options.beforeInit==="function"){base.options.beforeInit.apply(this,[base.$elem])}if(typeof base.options.jsonPath==="string"){url=base.options.jsonPath;$.getJSON(url,getData)}else{base.logIn()}},logIn:function(){var base=this;base.$elem.data("owl-originalStyles",base.$elem.attr("style"));base.$elem.data("owl-originalClasses",base.$elem.attr("class"));base.$elem.css({opacity:0});base.orignalItems=base.options.items;base.checkBrowser();base.wrapperWidth=0;base.checkVisible=null;base.setVars()},setVars:function(){var base=this;if(base.$elem.children().length===0){return false}base.baseClass();base.eventTypes();base.$userItems=base.$elem.children();base.itemsAmount=base.$userItems.length;base.wrapItems();base.$owlItems=base.$elem.find(".owl-item");base.$owlWrapper=base.$elem.find(".owl-wrapper");base.playDirection="next";base.prevItem=0;base.prevArr=[0];base.currentItem=0;base.customEvents();base.onStartup()},onStartup:function(){var base=this;base.updateItems();base.calculateAll();base.buildControls();base.updateControls();base.response();base.moveEvents();base.stopOnHover();base.owlStatus();if(base.options.transitionStyle!==false){base.transitionTypes(base.options.transitionStyle)}if(base.options.autoPlay===true){base.options.autoPlay=5000}base.play();base.$elem.find(".owl-wrapper").css("display","block");if(!base.$elem.is(":visible")){base.watchVisibility()}else{base.$elem.css("opacity",1)}base.onstartup=false;base.eachMoveUpdate();if(typeof base.options.afterInit==="function"){base.options.afterInit.apply(this,[base.$elem])}},eachMoveUpdate:function(){var base=this;if(base.options.lazyLoad===true){base.lazyLoad()}if(base.options.autoHeight===true){base.autoHeight()}base.onVisibleItems();if(typeof base.options.afterAction==="function"){base.options.afterAction.apply(this,[base.$elem])}},updateVars:function(){var base=this;if(typeof base.options.beforeUpdate==="function"){base.options.beforeUpdate.apply(this,[base.$elem])}base.watchVisibility();base.updateItems();base.calculateAll();base.updatePosition();base.updateControls();base.eachMoveUpdate();if(typeof base.options.afterUpdate==="function"){base.options.afterUpdate.apply(this,[base.$elem])}},reload:function(){var base=this;window.setTimeout(function(){base.updateVars()},0)},watchVisibility:function(){var base=this;if(base.$elem.is(":visible")===false){base.$elem.css({opacity:0});window.clearInterval(base.autoPlayInterval);window.clearInterval(base.checkVisible)}else{return false}base.checkVisible=window.setInterval(function(){if(base.$elem.is(":visible")){base.reload();base.$elem.animate({opacity:1},200);window.clearInterval(base.checkVisible)}},500)},wrapItems:function(){var base=this;base.$userItems.wrapAll("<div class=\"owl-wrapper\">").wrap("<div class=\"owl-item\"></div>");base.$elem.find(".owl-wrapper").wrap("<div class=\"owl-wrapper-outer\">");base.wrapperOuter=base.$elem.find(".owl-wrapper-outer");base.$elem.css("display","block")},baseClass:function(){var base=this,hasBaseClass=base.$elem.hasClass(base.options.baseClass),hasThemeClass=base.$elem.hasClass(base.options.theme);if(!hasBaseClass){base.$elem.addClass(base.options.baseClass)}if(!hasThemeClass){base.$elem.addClass(base.options.theme)}},updateItems:function(){var base=this,width,i;if(base.options.responsive===false){return false}if(base.options.singleItem===true){base.options.items=base.orignalItems=1;base.options.itemsCustom=false;base.options.itemsDesktop=false;base.options.itemsDesktopSmall=false;base.options.itemsTablet=false;base.options.itemsTabletSmall=false;base.options.itemsMobile=false;return false}width=$(base.options.responsiveBaseWidth).width();if(width>(base.options.itemsDesktop[0]||base.orignalItems)){base.options.items=base.orignalItems}if(base.options.itemsCustom!==false){base.options.itemsCustom.sort(function(a,b){return a[0]-b[0]});for(i=0;i<base.options.itemsCustom.length;i+=1){if(base.options.itemsCustom[i][0]<=width){base.options.items=base.options.itemsCustom[i][1]}}}else{if(width<=base.options.itemsDesktop[0]&&base.options.itemsDesktop!==false){base.options.items=base.options.itemsDesktop[1]}if(width<=base.options.itemsDesktopSmall[0]&&base.options.itemsDesktopSmall!==false){base.options.items=base.options.itemsDesktopSmall[1]}if(width<=base.options.itemsTablet[0]&&base.options.itemsTablet!==false){base.options.items=base.options.itemsTablet[1]}if(width<=base.options.itemsTabletSmall[0]&&base.options.itemsTabletSmall!==false){base.options.items=base.options.itemsTabletSmall[1]}if(width<=base.options.itemsMobile[0]&&base.options.itemsMobile!==false){base.options.items=base.options.itemsMobile[1]}}if(base.options.items>base.itemsAmount&&base.options.itemsScaleUp===true){base.options.items=base.itemsAmount}},response:function(){var base=this,smallDelay,lastWindowWidth;if(base.options.responsive!==true){return false}lastWindowWidth=$(window).width();base.resizer=function(){if($(window).width()!==lastWindowWidth){if(base.options.autoPlay!==false){window.clearInterval(base.autoPlayInterval)}window.clearTimeout(smallDelay);smallDelay=window.setTimeout(function(){lastWindowWidth=$(window).width();base.updateVars()},base.options.responsiveRefreshRate)}};$(window).resize(base.resizer)},updatePosition:function(){var base=this;base.jumpTo(base.currentItem);if(base.options.autoPlay!==false){base.checkAp()}},appendItemsSizes:function(){var base=this,roundPages=0,lastItem=base.itemsAmount-base.options.items;base.$owlItems.each(function(index){var $this=$(this);$this.css({"width":base.itemWidth}).data("owl-item",Number(index));if(index%base.options.items===0||index===lastItem){if(!(index>lastItem)){roundPages+=1}}$this.data("owl-roundPages",roundPages)})},appendWrapperSizes:function(){var base=this,width=base.$owlItems.length*base.itemWidth;base.$owlWrapper.css({"width":width*2,"left":0});base.appendItemsSizes()},calculateAll:function(){var base=this;base.calculateWidth();base.appendWrapperSizes();base.loops();base.max()},calculateWidth:function(){var base=this;base.itemWidth=Math.round(base.$elem.width()/base.options.items)},max:function(){var base=this,maximum=((base.itemsAmount*base.itemWidth)-base.options.items*base.itemWidth)*-1;if(base.options.items>base.itemsAmount){base.maximumItem=0;maximum=0;base.maximumPixels=0}else{base.maximumItem=base.itemsAmount-base.options.items;base.maximumPixels=maximum}return maximum},min:function(){return 0},loops:function(){var base=this,prev=0,elWidth=0,i,item,roundPageNum;base.positionsInArray=[0];base.pagesInArray=[];for(i=0;i<base.itemsAmount;i+=1){elWidth+=base.itemWidth;base.positionsInArray.push(-elWidth);if(base.options.scrollPerPage===true){item=$(base.$owlItems[i]);roundPageNum=item.data("owl-roundPages");if(roundPageNum!==prev){base.pagesInArray[prev]=base.positionsInArray[i];prev=roundPageNum}}}},buildControls:function(){var base=this;if(base.options.navigation===true||base.options.pagination===true){base.owlControls=$("<div class=\"owl-controls\"/>").toggleClass("clickable",!base.browser.isTouch).appendTo(base.$elem)}if(base.options.pagination===true){base.buildPagination()}if(base.options.navigation===true){base.buildButtons()}},buildButtons:function(){var base=this,buttonsWrapper=$("<div class=\"owl-buttons\"/>");base.owlControls.append(buttonsWrapper);base.buttonPrev=$("<div/>",{"class":"owl-prev","html":base.options.navigationText[0]||""});base.buttonNext=$("<div/>",{"class":"owl-next","html":base.options.navigationText[1]||""});buttonsWrapper.append(base.buttonPrev).append(base.buttonNext);buttonsWrapper.on("touchstart.owlControls mousedown.owlControls","div[class^=\"owl\"]",function(event){event.preventDefault()});buttonsWrapper.on("touchend.owlControls mouseup.owlControls","div[class^=\"owl\"]",function(event){event.preventDefault();if($(this).hasClass("owl-next")){base.next()}else{base.prev()}})},buildPagination:function(){var base=this;base.paginationWrapper=$("<div class=\"owl-pagination\"/>");base.owlControls.append(base.paginationWrapper);base.paginationWrapper.on("touchend.owlControls mouseup.owlControls",".owl-page",function(event){event.preventDefault();if(Number($(this).data("owl-page"))!==base.currentItem){base.goTo(Number($(this).data("owl-page")),true)}})},updatePagination:function(){var base=this,counter,lastPage,lastItem,i,paginationButton,paginationButtonInner;if(base.options.pagination===false){return false}base.paginationWrapper.html("");counter=0;lastPage=base.itemsAmount-base.itemsAmount%base.options.items;for(i=0;i<base.itemsAmount;i+=1){if(i%base.options.items===0){counter+=1;if(lastPage===i){lastItem=base.itemsAmount-base.options.items}paginationButton=$("<div/>",{"class":"owl-page"});paginationButtonInner=$("<span></span>",{"text":base.options.paginationNumbers===true?counter:"","class":base.options.paginationNumbers===true?"owl-numbers":""});paginationButton.append(paginationButtonInner);paginationButton.data("owl-page",lastPage===i?lastItem:i);paginationButton.data("owl-roundPages",counter);base.paginationWrapper.append(paginationButton)}}base.checkPagination()},checkPagination:function(){var base=this;if(base.options.pagination===false){return false}base.paginationWrapper.find(".owl-page").each(function(){if($(this).data("owl-roundPages")===$(base.$owlItems[base.currentItem]).data("owl-roundPages")){base.paginationWrapper.find(".owl-page").removeClass("active");$(this).addClass("active")}})},checkNavigation:function(){var base=this;if(base.options.navigation===false){return false}if(base.options.rewindNav===false){if(base.currentItem===0&&base.maximumItem===0){base.buttonPrev.addClass("disabled");base.buttonNext.addClass("disabled")}else if(base.currentItem===0&&base.maximumItem!==0){base.buttonPrev.addClass("disabled");base.buttonNext.removeClass("disabled")}else if(base.currentItem===base.maximumItem){base.buttonPrev.removeClass("disabled");base.buttonNext.addClass("disabled")}else if(base.currentItem!==0&&base.currentItem!==base.maximumItem){base.buttonPrev.removeClass("disabled");base.buttonNext.removeClass("disabled")}}},updateControls:function(){var base=this;base.updatePagination();base.checkNavigation();if(base.owlControls){if(base.options.items>=base.itemsAmount){base.owlControls.hide()}else{base.owlControls.show()}}},destroyControls:function(){var base=this;if(base.owlControls){base.owlControls.remove()}},next:function(speed){var base=this;if(base.isTransition){return false}base.currentItem+=base.options.scrollPerPage===true?base.options.items:1;if(base.currentItem>base.maximumItem+(base.options.scrollPerPage===true?(base.options.items-1):0)){if(base.options.rewindNav===true){base.currentItem=0;speed="rewind"}else{base.currentItem=base.maximumItem;return false}}base.goTo(base.currentItem,speed)},prev:function(speed){var base=this;if(base.isTransition){return false}if(base.options.scrollPerPage===true&&base.currentItem>0&&base.currentItem<base.options.items){base.currentItem=0}else{base.currentItem-=base.options.scrollPerPage===true?base.options.items:1}if(base.currentItem<0){if(base.options.rewindNav===true){base.currentItem=base.maximumItem;speed="rewind"}else{base.currentItem=0;return false}}base.goTo(base.currentItem,speed)},goTo:function(position,speed,drag){var base=this,goToPixel;if(base.isTransition){return false}if(typeof base.options.beforeMove==="function"){base.options.beforeMove.apply(this,[base.$elem])}if(position>=base.maximumItem){position=base.maximumItem}else if(position<=0){position=0}base.currentItem=base.owl.currentItem=position;if(base.options.transitionStyle!==false&&drag!=="drag"&&base.options.items===1&&base.browser.support3d===true){base.swapSpeed(0);if(base.browser.support3d===true){base.transition3d(base.positionsInArray[position])}else{base.css2slide(base.positionsInArray[position],1)}base.afterGo();base.singleItemTransition();return false}goToPixel=base.positionsInArray[position];if(base.browser.support3d===true){base.isCss3Finish=false;if(speed===true){base.swapSpeed("paginationSpeed");window.setTimeout(function(){base.isCss3Finish=true},base.options.paginationSpeed)}else if(speed==="rewind"){base.swapSpeed(base.options.rewindSpeed);window.setTimeout(function(){base.isCss3Finish=true},base.options.rewindSpeed)}else{base.swapSpeed("slideSpeed");window.setTimeout(function(){base.isCss3Finish=true},base.options.slideSpeed)}base.transition3d(goToPixel)}else{if(speed===true){base.css2slide(goToPixel,base.options.paginationSpeed)}else if(speed==="rewind"){base.css2slide(goToPixel,base.options.rewindSpeed)}else{base.css2slide(goToPixel,base.options.slideSpeed)}}base.afterGo()},jumpTo:function(position){var base=this;if(typeof base.options.beforeMove==="function"){base.options.beforeMove.apply(this,[base.$elem])}if(position>=base.maximumItem||position===-1){position=base.maximumItem}else if(position<=0){position=0}base.swapSpeed(0);if(base.browser.support3d===true){base.transition3d(base.positionsInArray[position])}else{base.css2slide(base.positionsInArray[position],1)}base.currentItem=base.owl.currentItem=position;base.afterGo()},afterGo:function(){var base=this;base.prevArr.push(base.currentItem);base.prevItem=base.owl.prevItem=base.prevArr[base.prevArr.length-2];base.prevArr.shift(0);if(base.prevItem!==base.currentItem){base.checkPagination();base.checkNavigation();base.eachMoveUpdate();if(base.options.autoPlay!==false){base.checkAp()}}if(typeof base.options.afterMove==="function"&&base.prevItem!==base.currentItem){base.options.afterMove.apply(this,[base.$elem])}},stop:function(){var base=this;base.apStatus="stop";window.clearInterval(base.autoPlayInterval)},checkAp:function(){var base=this;if(base.apStatus!=="stop"){base.play()}},play:function(){var base=this;base.apStatus="play";if(base.options.autoPlay===false){return false}window.clearInterval(base.autoPlayInterval);base.autoPlayInterval=window.setInterval(function(){base.next(true)},base.options.autoPlay)},swapSpeed:function(action){var base=this;if(action==="slideSpeed"){base.$owlWrapper.css(base.addCssSpeed(base.options.slideSpeed))}else if(action==="paginationSpeed"){base.$owlWrapper.css(base.addCssSpeed(base.options.paginationSpeed))}else if(typeof action!=="string"){base.$owlWrapper.css(base.addCssSpeed(action))}},addCssSpeed:function(speed){return{"-webkit-transition":"all "+speed+"ms ease","-moz-transition":"all "+speed+"ms ease","-o-transition":"all "+speed+"ms ease","transition":"all "+speed+"ms ease"}},removeTransition:function(){return{"-webkit-transition":"","-moz-transition":"","-o-transition":"","transition":""}},doTranslate:function(pixels){return{"-webkit-transform":"translate3d("+pixels+"px, 0px, 0px)","-moz-transform":"translate3d("+pixels+"px, 0px, 0px)","-o-transform":"translate3d("+pixels+"px, 0px, 0px)","-ms-transform":"translate3d("+pixels+"px, 0px, 0px)","transform":"translate3d("+pixels+"px, 0px,0px)"}},transition3d:function(value){var base=this;base.$owlWrapper.css(base.doTranslate(value))},css2move:function(value){var base=this;base.$owlWrapper.css({"left":value})},css2slide:function(value,speed){var base=this;base.isCssFinish=false;base.$owlWrapper.stop(true,true).animate({"left":value},{duration:speed||base.options.slideSpeed,complete:function(){base.isCssFinish=true}})},checkBrowser:function(){var base=this,translate3D="translate3d(0px, 0px, 0px)",tempElem=document.createElement("div"),regex,asSupport,support3d,isTouch;tempElem.style.cssText="  -moz-transform:"+translate3D+"; -ms-transform:"+translate3D+"; -o-transform:"+translate3D+"; -webkit-transform:"+translate3D+"; transform:"+translate3D;regex=/translate3d\(0px, 0px, 0px\)/g;asSupport=tempElem.style.cssText.match(regex);support3d=(asSupport!==null&&asSupport.length>=1&&asSupport.length<=2);isTouch="ontouchstart"in window||window.navigator.msMaxTouchPoints;base.browser={"support3d":support3d,"isTouch":isTouch}},moveEvents:function(){var base=this;if(base.options.mouseDrag!==false||base.options.touchDrag!==false){base.gestures();base.disabledEvents()}},eventTypes:function(){var base=this,types=["s","e","x"];base.ev_types={};if(base.options.mouseDrag===true&&base.options.touchDrag===true){types=["touchstart.owl mousedown.owl","touchmove.owl mousemove.owl","touchend.owl touchcancel.owl mouseup.owl"]}else if(base.options.mouseDrag===false&&base.options.touchDrag===true){types=["touchstart.owl","touchmove.owl","touchend.owl touchcancel.owl"]}else if(base.options.mouseDrag===true&&base.options.touchDrag===false){types=["mousedown.owl","mousemove.owl","mouseup.owl"]}base.ev_types.start=types[0];base.ev_types.move=types[1];base.ev_types.end=types[2]},disabledEvents:function(){var base=this;base.$elem.on("dragstart.owl",function(event){event.preventDefault()});base.$elem.on("mousedown.disableTextSelect",function(e){return $(e.target).is('input, textarea, select, option')})},gestures:function(){var base=this,locals={offsetX:0,offsetY:0,baseElWidth:0,relativePos:0,position:null,minSwipe:null,maxSwipe:null,sliding:null,dargging:null,targetElement:null};base.isCssFinish=true;function getTouches(event){if(event.touches!==undefined){return{x:event.touches[0].pageX,y:event.touches[0].pageY}}if(event.touches===undefined){if(event.pageX!==undefined){return{x:event.pageX,y:event.pageY}}if(event.pageX===undefined){return{x:event.clientX,y:event.clientY}}}}function swapEvents(type){if(type==="on"){$(document).on(base.ev_types.move,dragMove);$(document).on(base.ev_types.end,dragEnd)}else if(type==="off"){$(document).off(base.ev_types.move);$(document).off(base.ev_types.end)}}function dragStart(event){var ev=event.originalEvent||event||window.event,position;if(ev.which===3){return false}if(base.itemsAmount<=base.options.items){return}if(base.isCssFinish===false&&!base.options.dragBeforeAnimFinish){return false}if(base.isCss3Finish===false&&!base.options.dragBeforeAnimFinish){return false}if(base.options.autoPlay!==false){window.clearInterval(base.autoPlayInterval)}if(base.browser.isTouch!==true&&!base.$owlWrapper.hasClass("grabbing")){base.$owlWrapper.addClass("grabbing")}base.newPosX=0;base.newRelativeX=0;$(this).css(base.removeTransition());position=$(this).position();locals.relativePos=position.left;locals.offsetX=getTouches(ev).x-position.left;locals.offsetY=getTouches(ev).y-position.top;swapEvents("on");locals.sliding=false;locals.targetElement=ev.target||ev.srcElement}function dragMove(event){var ev=event.originalEvent||event||window.event,minSwipe,maxSwipe;base.newPosX=getTouches(ev).x-locals.offsetX;base.newPosY=getTouches(ev).y-locals.offsetY;base.newRelativeX=base.newPosX-locals.relativePos;if(typeof base.options.startDragging==="function"&&locals.dragging!==true&&base.newRelativeX!==0){locals.dragging=true;base.options.startDragging.apply(base,[base.$elem])}if((base.newRelativeX>8||base.newRelativeX<-8)&&(base.browser.isTouch===true)){if(ev.preventDefault!==undefined){ev.preventDefault()}else{ev.returnValue=false}locals.sliding=true}if((base.newPosY>10||base.newPosY<-10)&&locals.sliding===false){$(document).off("touchmove.owl")}minSwipe=function(){return base.newRelativeX/5};maxSwipe=function(){return base.maximumPixels+base.newRelativeX/5};base.newPosX=Math.max(Math.min(base.newPosX,minSwipe()),maxSwipe());if(base.browser.support3d===true){base.transition3d(base.newPosX)}else{base.css2move(base.newPosX)}}function dragEnd(event){var ev=event.originalEvent||event||window.event,newPosition,handlers,owlStopEvent;ev.target=ev.target||ev.srcElement;locals.dragging=false;if(base.browser.isTouch!==true){base.$owlWrapper.removeClass("grabbing")}if(base.newRelativeX<0){base.dragDirection=base.owl.dragDirection="left"}else{base.dragDirection=base.owl.dragDirection="right"}if(base.newRelativeX!==0){newPosition=base.getNewPosition();base.goTo(newPosition,false,"drag");if(locals.targetElement===ev.target&&base.browser.isTouch!==true){$(ev.target).on("click.disable",function(ev){ev.stopImmediatePropagation();ev.stopPropagation();ev.preventDefault();$(ev.target).off("click.disable")});handlers=$._data(ev.target,"events").click;owlStopEvent=handlers.pop();handlers.splice(0,0,owlStopEvent)}}swapEvents("off")}base.$elem.on(base.ev_types.start,".owl-wrapper",dragStart)},getNewPosition:function(){var base=this,newPosition=base.closestItem();if(newPosition>base.maximumItem){base.currentItem=base.maximumItem;newPosition=base.maximumItem}else if(base.newPosX>=0){newPosition=0;base.currentItem=0}return newPosition},closestItem:function(){var base=this,array=base.options.scrollPerPage===true?base.pagesInArray:base.positionsInArray,goal=base.newPosX,closest=null;$.each(array,function(i,v){if(goal-(base.itemWidth/20)>array[i+1]&&goal-(base.itemWidth/20)<v&&base.moveDirection()==="left"){closest=v;if(base.options.scrollPerPage===true){base.currentItem=$.inArray(closest,base.positionsInArray)}else{base.currentItem=i}}else if(goal+(base.itemWidth/20)<v&&goal+(base.itemWidth/20)>(array[i+1]||array[i]-base.itemWidth)&&base.moveDirection()==="right"){if(base.options.scrollPerPage===true){closest=array[i+1]||array[array.length-1];base.currentItem=$.inArray(closest,base.positionsInArray)}else{closest=array[i+1];base.currentItem=i+1}}});return base.currentItem},moveDirection:function(){var base=this,direction;if(base.newRelativeX<0){direction="right";base.playDirection="next"}else{direction="left";base.playDirection="prev"}return direction},customEvents:function(){var base=this;base.$elem.on("owl.next",function(){base.next()});base.$elem.on("owl.prev",function(){base.prev()});base.$elem.on("owl.play",function(event,speed){base.options.autoPlay=speed;base.play();base.hoverStatus="play"});base.$elem.on("owl.stop",function(){base.stop();base.hoverStatus="stop"});base.$elem.on("owl.goTo",function(event,item){base.goTo(item)});base.$elem.on("owl.jumpTo",function(event,item){base.jumpTo(item)})},stopOnHover:function(){var base=this;if(base.options.stopOnHover===true&&base.browser.isTouch!==true&&base.options.autoPlay!==false){base.$elem.on("mouseover",function(){base.stop()});base.$elem.on("mouseout",function(){if(base.hoverStatus!=="stop"){base.play()}})}},lazyLoad:function(){var base=this,i,$item,itemNumber,$lazyImg,follow;if(base.options.lazyLoad===false){return false}for(i=0;i<base.itemsAmount;i+=1){$item=$(base.$owlItems[i]);if($item.data("owl-loaded")==="loaded"){continue}itemNumber=$item.data("owl-item");$lazyImg=$item.find(".lazyOwl");if(typeof $lazyImg.data("src")!=="string"){$item.data("owl-loaded","loaded");continue}if($item.data("owl-loaded")===undefined){$lazyImg.hide();$item.addClass("loading").data("owl-loaded","checked")}if(base.options.lazyFollow===true){follow=itemNumber>=base.currentItem}else{follow=true}if(follow&&itemNumber<base.currentItem+base.options.items&&$lazyImg.length){base.lazyPreload($item,$lazyImg)}}},lazyPreload:function($item,$lazyImg){var base=this,iterations=0,isBackgroundImg;if($lazyImg.prop("tagName")==="DIV"){$lazyImg.css("background-image","url("+$lazyImg.data("src")+")");isBackgroundImg=true}else{$lazyImg[0].src=$lazyImg.data("src")}function showImage(){$item.data("owl-loaded","loaded").removeClass("loading");$lazyImg.removeAttr("data-src");if(base.options.lazyEffect==="fade"){$lazyImg.fadeIn(400)}else{$lazyImg.show()}if(typeof base.options.afterLazyLoad==="function"){base.options.afterLazyLoad.apply(this,[base.$elem])}}function checkLazyImage(){iterations+=1;if(base.completeImg($lazyImg.get(0))||isBackgroundImg===true){showImage()}else if(iterations<=100){window.setTimeout(checkLazyImage,100)}else{showImage()}}checkLazyImage()},autoHeight:function(){var base=this,$currentimg=$(base.$owlItems[base.currentItem]).find("img"),iterations;function addHeight(){var $currentItem=$(base.$owlItems[base.currentItem]).height();base.wrapperOuter.css("height",$currentItem+"px");if(!base.wrapperOuter.hasClass("autoHeight")){window.setTimeout(function(){base.wrapperOuter.addClass("autoHeight")},0)}}function checkImage(){iterations+=1;if(base.completeImg($currentimg.get(0))){addHeight()}else if(iterations<=100){window.setTimeout(checkImage,100)}else{base.wrapperOuter.css("height","")}}if($currentimg.get(0)!==undefined){iterations=0;checkImage()}else{addHeight()}},completeImg:function(img){var naturalWidthType;if(!img.complete){return false}naturalWidthType=typeof img.naturalWidth;if(naturalWidthType!=="undefined"&&img.naturalWidth===0){return false}return true},onVisibleItems:function(){var base=this,i;if(base.options.addClassActive===true){base.$owlItems.removeClass("active")}base.visibleItems=[];for(i=base.currentItem;i<base.currentItem+base.options.items;i+=1){base.visibleItems.push(i);if(base.options.addClassActive===true){$(base.$owlItems[i]).addClass("active")}}base.owl.visibleItems=base.visibleItems},transitionTypes:function(className){var base=this;base.outClass="owl-"+className+"-out";base.inClass="owl-"+className+"-in"},singleItemTransition:function(){var base=this,outClass=base.outClass,inClass=base.inClass,$currentItem=base.$owlItems.eq(base.currentItem),$prevItem=base.$owlItems.eq(base.prevItem),prevPos=Math.abs(base.positionsInArray[base.currentItem])+base.positionsInArray[base.prevItem],origin=Math.abs(base.positionsInArray[base.currentItem])+base.itemWidth/2,animEnd='webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend';base.isTransition=true;base.$owlWrapper.addClass('owl-origin').css({"-webkit-transform-origin":origin+"px","-moz-perspective-origin":origin+"px","perspective-origin":origin+"px"});function transStyles(prevPos){return{"position":"relative","left":prevPos+"px"}}$prevItem.css(transStyles(prevPos,10)).addClass(outClass).on(animEnd,function(){base.endPrev=true;$prevItem.off(animEnd);base.clearTransStyle($prevItem,outClass)});$currentItem.addClass(inClass).on(animEnd,function(){base.endCurrent=true;$currentItem.off(animEnd);base.clearTransStyle($currentItem,inClass)})},clearTransStyle:function(item,classToRemove){var base=this;item.css({"position":"","left":""}).removeClass(classToRemove);if(base.endPrev&&base.endCurrent){base.$owlWrapper.removeClass('owl-origin');base.endPrev=false;base.endCurrent=false;base.isTransition=false}},owlStatus:function(){var base=this;base.owl={"userOptions":base.userOptions,"baseElement":base.$elem,"userItems":base.$userItems,"owlItems":base.$owlItems,"currentItem":base.currentItem,"prevItem":base.prevItem,"visibleItems":base.visibleItems,"isTouch":base.browser.isTouch,"browser":base.browser,"dragDirection":base.dragDirection}},clearEvents:function(){var base=this;base.$elem.off(".owl owl mousedown.disableTextSelect");$(document).off(".owl owl");$(window).off("resize",base.resizer)},unWrap:function(){var base=this;if(base.$elem.children().length!==0){base.$owlWrapper.unwrap();base.$userItems.unwrap().unwrap();if(base.owlControls){base.owlControls.remove()}}base.clearEvents();base.$elem.attr("style",base.$elem.data("owl-originalStyles")||"").attr("class",base.$elem.data("owl-originalClasses"))},destroy:function(){var base=this;base.stop();window.clearInterval(base.checkVisible);base.unWrap();base.$elem.removeData()},reinit:function(newOptions){var base=this,options=$.extend({},base.userOptions,newOptions);base.unWrap();base.init(options,base.$elem)},addItem:function(htmlString,targetPosition){var base=this,position;if(!htmlString){return false}if(base.$elem.children().length===0){base.$elem.append(htmlString);base.setVars();return false}base.unWrap();if(targetPosition===undefined||targetPosition===-1){position=-1}else{position=targetPosition}if(position>=base.$userItems.length||position===-1){base.$userItems.eq(-1).after(htmlString)}else{base.$userItems.eq(position).before(htmlString)}base.setVars()},removeItem:function(targetPosition){var base=this,position;if(base.$elem.children().length===0){return false}if(targetPosition===undefined||targetPosition===-1){position=-1}else{position=targetPosition}base.unWrap();base.$userItems.eq(position).remove();base.setVars()}};$.fn.owlCarousel=function(options){return this.each(function(){if($(this).data("owl-init")===true){return false}$(this).data("owl-init",true);var carousel=Object.create(Carousel);carousel.init(options,this);$.data(this,"owlCarousel",carousel)})};$.fn.owlCarousel.options={items:5,itemsCustom:false,itemsDesktop:[1199,4],itemsDesktopSmall:[979,3],itemsTablet:[768,2],itemsTabletSmall:false,itemsMobile:[479,1],singleItem:false,itemsScaleUp:false,slideSpeed:200,paginationSpeed:800,rewindSpeed:1000,autoPlay:false,stopOnHover:false,navigation:false,navigationText:["prev","next"],rewindNav:true,scrollPerPage:false,pagination:true,paginationNumbers:false,responsive:true,responsiveRefreshRate:200,responsiveBaseWidth:window,baseClass:"owl-carousel",theme:"owl-theme",lazyLoad:false,lazyFollow:true,lazyEffect:"fade",autoHeight:false,jsonPath:false,jsonSuccess:false,dragBeforeAnimFinish:true,mouseDrag:true,touchDrag:true,addClassActive:false,transitionStyle:false,beforeUpdate:false,afterUpdate:false,beforeInit:false,afterInit:false,beforeMove:false,afterMove:false,afterAction:false,startDragging:false,afterLazyLoad:false}}(jQuery,window,document));})(jQuery);
	// - Images Loaded
	(function(){function e(){}function t(e,t){for(var n=e.length;n--;)if(e[n].listener===t)return n;return-1}function n(e){return function(){return this[e].apply(this,arguments)}}var i=e.prototype;i.getListeners=function(e){var t,n,i=this._getEvents();if("object"==typeof e){t={};for(n in i)i.hasOwnProperty(n)&&e.test(n)&&(t[n]=i[n])}else t=i[e]||(i[e]=[]);return t},i.flattenListeners=function(e){var t,n=[];for(t=0;e.length>t;t+=1)n.push(e[t].listener);return n},i.getListenersAsObject=function(e){var t,n=this.getListeners(e);return n instanceof Array&&(t={},t[e]=n),t||n},i.addListener=function(e,n){var i,r=this.getListenersAsObject(e),o="object"==typeof n;for(i in r)r.hasOwnProperty(i)&&-1===t(r[i],n)&&r[i].push(o?n:{listener:n,once:!1});return this},i.on=n("addListener"),i.addOnceListener=function(e,t){return this.addListener(e,{listener:t,once:!0})},i.once=n("addOnceListener"),i.defineEvent=function(e){return this.getListeners(e),this},i.defineEvents=function(e){for(var t=0;e.length>t;t+=1)this.defineEvent(e[t]);return this},i.removeListener=function(e,n){var i,r,o=this.getListenersAsObject(e);for(r in o)o.hasOwnProperty(r)&&(i=t(o[r],n),-1!==i&&o[r].splice(i,1));return this},i.off=n("removeListener"),i.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},i.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},i.manipulateListeners=function(e,t,n){var i,r,o=e?this.removeListener:this.addListener,s=e?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(i=n.length;i--;)o.call(this,t,n[i]);else for(i in t)t.hasOwnProperty(i)&&(r=t[i])&&("function"==typeof r?o.call(this,i,r):s.call(this,i,r));return this},i.removeEvent=function(e){var t,n=typeof e,i=this._getEvents();if("string"===n)delete i[e];else if("object"===n)for(t in i)i.hasOwnProperty(t)&&e.test(t)&&delete i[t];else delete this._events;return this},i.removeAllListeners=n("removeEvent"),i.emitEvent=function(e,t){var n,i,r,o,s=this.getListenersAsObject(e);for(r in s)if(s.hasOwnProperty(r))for(i=s[r].length;i--;)n=s[r][i],n.once===!0&&this.removeListener(e,n.listener),o=n.listener.apply(this,t||[]),o===this._getOnceReturnValue()&&this.removeListener(e,n.listener);return this},i.trigger=n("emitEvent"),i.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},i.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},i._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},i._getEvents=function(){return this._events||(this._events={})},"function"==typeof define&&define.amd?define(function(){return e}):"object"==typeof module&&module.exports?module.exports=e:this.EventEmitter=e}).call(this),function(e){"use strict";var t=document.documentElement,n=function(){};t.addEventListener?n=function(e,t,n){e.addEventListener(t,n,!1)}:t.attachEvent&&(n=function(t,n,i){t[n+i]=i.handleEvent?function(){var t=e.event;t.target=t.target||t.srcElement,i.handleEvent.call(i,t)}:function(){var n=e.event;n.target=n.target||n.srcElement,i.call(t,n)},t.attachEvent("on"+n,t[n+i])});var i=function(){};t.removeEventListener?i=function(e,t,n){e.removeEventListener(t,n,!1)}:t.detachEvent&&(i=function(e,t,n){e.detachEvent("on"+t,e[t+n]);try{delete e[t+n]}catch(i){e[t+n]=void 0}});var r={bind:n,unbind:i};"function"==typeof define&&define.amd?define(r):e.eventie=r}(this),function(e){"use strict";function t(e,t){for(var n in t)e[n]=t[n];return e}function n(e){return"[object Array]"===c.call(e)}function i(e){var t=[];if(n(e))t=e;else if("number"==typeof e.length)for(var i=0,r=e.length;r>i;i++)t.push(e[i]);else t.push(e);return t}function r(e,n){function r(e,n,s){if(!(this instanceof r))return new r(e,n);"string"==typeof e&&(e=document.querySelectorAll(e)),this.elements=i(e),this.options=t({},this.options),"function"==typeof n?s=n:t(this.options,n),s&&this.on("always",s),this.getImages(),o&&(this.jqDeferred=new o.Deferred);var a=this;setTimeout(function(){a.check()})}function c(e){this.img=e}r.prototype=new e,r.prototype.options={},r.prototype.getImages=function(){this.images=[];for(var e=0,t=this.elements.length;t>e;e++){var n=this.elements[e];"IMG"===n.nodeName&&this.addImage(n);for(var i=n.querySelectorAll("img"),r=0,o=i.length;o>r;r++){var s=i[r];this.addImage(s)}}},r.prototype.addImage=function(e){var t=new c(e);this.images.push(t)},r.prototype.check=function(){function e(e,r){return t.options.debug&&a&&s.log("confirm",e,r),t.progress(e),n++,n===i&&t.complete(),!0}var t=this,n=0,i=this.images.length;if(this.hasAnyBroken=!1,!i)return this.complete(),void 0;for(var r=0;i>r;r++){var o=this.images[r];o.on("confirm",e),o.check()}},r.prototype.progress=function(e){this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded;var t=this;setTimeout(function(){t.emit("progress",t,e),t.jqDeferred&&t.jqDeferred.notify(t,e)})},r.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";this.isComplete=!0;var t=this;setTimeout(function(){if(t.emit(e,t),t.emit("always",t),t.jqDeferred){var n=t.hasAnyBroken?"reject":"resolve";t.jqDeferred[n](t)}})},o&&(o.fn.imagesLoaded=function(e,t){var n=new r(this,e,t);return n.jqDeferred.promise(o(this))});var f={};return c.prototype=new e,c.prototype.check=function(){var e=f[this.img.src];if(e)return this.useCached(e),void 0;if(f[this.img.src]=this,this.img.complete&&void 0!==this.img.naturalWidth)return this.confirm(0!==this.img.naturalWidth,"naturalWidth"),void 0;var t=this.proxyImage=new Image;n.bind(t,"load",this),n.bind(t,"error",this),t.src=this.img.src},c.prototype.useCached=function(e){if(e.isConfirmed)this.confirm(e.isLoaded,"cached was confirmed");else{var t=this;e.on("confirm",function(e){return t.confirm(e.isLoaded,"cache emitted confirmed"),!0})}},c.prototype.confirm=function(e,t){this.isConfirmed=!0,this.isLoaded=e,this.emit("confirm",this,t)},c.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},c.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindProxyEvents()},c.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindProxyEvents()},c.prototype.unbindProxyEvents=function(){n.unbind(this.proxyImage,"load",this),n.unbind(this.proxyImage,"error",this)},r}var o=e.jQuery,s=e.console,a=s!==void 0,c=Object.prototype.toString;"function"==typeof define&&define.amd?define(["eventEmitter/EventEmitter","eventie/eventie"],r):e.imagesLoaded=r(e.EventEmitter,e.eventie)}(window);
	// - EasyPieChart
	(function($){$.easyPieChart=function(el,options){var addScaleLine,animateLine,drawLine,easeInOutQuad,rAF,renderBackground,renderScale,renderTrack,_this=this;this.el=el;this.$el=$(el);this.$el.data("easyPieChart",this);this.init=function(){var percent,scaleBy;_this.options=$.extend({},$.easyPieChart.defaultOptions,options);percent=parseInt(_this.$el.data('percent'),10);_this.percentage=0;_this.canvas=$("<canvas width='"+_this.options.size+"' height='"+_this.options.size+"'></canvas>").get(0);_this.$el.append(_this.canvas);if(typeof G_vmlCanvasManager!=="undefined"&&G_vmlCanvasManager!==null){G_vmlCanvasManager.initElement(_this.canvas)}_this.ctx=_this.canvas.getContext('2d');if(window.devicePixelRatio>1){scaleBy=window.devicePixelRatio;$(_this.canvas).css({width:_this.options.size,height:_this.options.size});_this.canvas.width*=scaleBy;_this.canvas.height*=scaleBy;_this.ctx.scale(scaleBy,scaleBy)}_this.ctx.translate(_this.options.size/2,_this.options.size/2);_this.ctx.rotate(_this.options.rotate*Math.PI/180);_this.$el.addClass('easyPieChart');_this.$el.css({width:_this.options.size,height:_this.options.size,lineHeight:""+_this.options.size+"px"});_this.update(percent);return _this};this.update=function(percent){percent=parseFloat(percent)||0;if(_this.options.animate===false){drawLine(percent)}else{animateLine(_this.percentage,percent)}return _this};renderScale=function(){var i,_i,_results;_this.ctx.fillStyle=_this.options.scaleColor;_this.ctx.lineWidth=1;_results=[];for(i=_i=0;_i<=24;i=++_i){_results.push(addScaleLine(i))}return _results};addScaleLine=function(i){var offset;offset=i%6===0?0:_this.options.size*0.017;_this.ctx.save();_this.ctx.rotate(i*Math.PI/12);_this.ctx.fillRect(_this.options.size/2-offset,0,-_this.options.size*0.05+offset,1);_this.ctx.restore()};renderTrack=function(){var offset;offset=_this.options.size/2-_this.options.lineWidth/2;if(_this.options.scaleColor!==false){offset-=_this.options.size*0.08}_this.ctx.beginPath();_this.ctx.arc(0,0,offset,0,Math.PI*2,true);_this.ctx.closePath();_this.ctx.strokeStyle=_this.options.trackColor;_this.ctx.lineWidth=_this.options.lineWidth;_this.ctx.stroke()};renderBackground=function(){if(_this.options.scaleColor!==false){renderScale()}if(_this.options.trackColor!==false){renderTrack()}};drawLine=function(percent){var offset;renderBackground();_this.ctx.strokeStyle=$.isFunction(_this.options.barColor)?_this.options.barColor(percent):_this.options.barColor;_this.ctx.lineCap=_this.options.lineCap;_this.ctx.lineWidth=_this.options.lineWidth;offset=_this.options.size/2-_this.options.lineWidth/2;if(_this.options.scaleColor!==false){offset-=_this.options.size*0.08}_this.ctx.save();_this.ctx.rotate(-Math.PI/2);_this.ctx.beginPath();_this.ctx.arc(0,0,offset,0,Math.PI*2*percent/100,false);_this.ctx.stroke();_this.ctx.restore()};rAF=(function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(callback){return window.setTimeout(callback,1000/60)}})();animateLine=function(from,to){var anim,startTime;_this.options.onStart.call(_this);_this.percentage=to;Date.now||(Date.now=function(){return+(new Date)});startTime=Date.now();anim=function(){var currentValue,process;process=Date.now()-startTime;if(process<_this.options.animate){rAF(anim)}_this.ctx.clearRect(-_this.options.size/2,-_this.options.size/2,_this.options.size,_this.options.size);renderBackground.call(_this);currentValue=[easeInOutQuad(process,from,to-from,_this.options.animate)];_this.options.onStep.call(_this,currentValue);drawLine.call(_this,currentValue);if(process>=_this.options.animate){return _this.options.onStop.call(_this,currentValue,to)}};rAF(anim)};easeInOutQuad=function(t,b,c,d){var easeIn,easing;easeIn=function(t){return Math.pow(t,2)};easing=function(t){if(t<1){return easeIn(t)}else{return 2-easeIn((t/2)*-2+2)}};t/=d/2;return c/2*easing(t)+b};return this.init()};$.easyPieChart.defaultOptions={barColor:'#ef1e25',trackColor:'#f2f2f2',scaleColor:'#dfe0e0',lineCap:'round',rotate:0,size:110,lineWidth:3,animate:false,onStart:$.noop,onStop:$.noop,onStep:$.noop};$.fn.easyPieChart=function(options){return $.each(this,function(i,el){var $el,instanceOptions;$el=$(el);if(!$el.data('easyPieChart')){instanceOptions=$.extend({},options,$el.data());return $el.data('easyPieChart',new $.easyPieChart(el,instanceOptions))}})};return void 0})(jQuery); 
	// - Animate Colors
	(function(d){function h(a,b,e){var c="rgb"+(d.support.rgba?"a":"")+"("+parseInt(a[0]+e*(b[0]-a[0]),10)+","+parseInt(a[1]+e*(b[1]-a[1]),10)+","+parseInt(a[2]+e*(b[2]-a[2]),10);d.support.rgba&&(c+=","+(a&&b?parseFloat(a[3]+e*(b[3]-a[3])):1));return c+")"}function f(a){var b;return(b=/#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})/.exec(a))?[parseInt(b[1],16),parseInt(b[2],16),parseInt(b[3],16),1]:(b=/#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])/.exec(a))?[17*parseInt(b[1],16),17*parseInt(b[2],16),17*parseInt(b[3],16),1]:(b=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(a))?[parseInt(b[1]),parseInt(b[2]),parseInt(b[3]),1]:(b=/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9\.]*)\s*\)/.exec(a))?[parseInt(b[1],10),parseInt(b[2],10),parseInt(b[3],10),parseFloat(b[4])]:l[a]}d.extend(!0,d,{support:{rgba:function(){var a=d("script:first"),b=a.css("color"),e=!1;if(/^rgba/.test(b))e=!0;else try{e=b!=a.css("color","rgba(0, 0, 0, 0.5)").css("color"),a.css("color",b)}catch(c){}return e}()}});var k="color backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor outlineColor".split(" ");d.each(k,function(a,b){d.Tween.propHooks[b]={get:function(a){return d(a.elem).css(b)},set:function(a){var c=a.elem.style,g=f(d(a.elem).css(b)),m=f(a.end);a.run=function(a){c[b]=h(g,m,a)}}}});d.Tween.propHooks.borderColor={set:function(a){var b=a.elem.style,e=[],c=k.slice(2,6);d.each(c,function(b,c){e[c]=f(d(a.elem).css(c))});var g=f(a.end);a.run=function(a){d.each(c,function(d,c){b[c]=h(e[c],g,a)})}}};var l={aqua:[0,255,255,1],azure:[240,255,255,1],beige:[245,245,220,1],black:[0,0,0,1],blue:[0,0,255,1],brown:[165,42,42,1],cyan:[0,255,255,1],darkblue:[0,0,139,1],darkcyan:[0,139,139,1],darkgrey:[169,169,169,1],darkgreen:[0,100,0,1],darkkhaki:[189,183,107,1],darkmagenta:[139,0,139,1],darkolivegreen:[85,107,47,1],darkorange:[255,140,0,1],darkorchid:[153,50,204,1],darkred:[139,0,0,1],darksalmon:[233,150,122,1],darkviolet:[148,0,211,1],fuchsia:[255,0,255,1],gold:[255,215,0,1],green:[0,128,0,1],indigo:[75,0,130,1],khaki:[240,230,140,1],lightblue:[173,216,230,1],lightcyan:[224,255,255,1],lightgreen:[144,238,144,1],lightgrey:[211,211,211,1],lightpink:[255,182,193,1],lightyellow:[255,255,224,1],lime:[0,255,0,1],magenta:[255,0,255,1],maroon:[128,0,0,1],navy:[0,0,128,1],olive:[128,128,0,1],orange:[255,165,0,1],pink:[255,192,203,1],purple:[128,0,128,1],violet:[128,0,128,1],red:[255,0,0,1],silver:[192,192,192,1],white:[255,255,255,1],yellow:[255,255,0,1],transparent:[255,255,255,0]}})(jQuery);
	// - Inview
	(function(d){var p={},e,a,h=document,i=window,f=h.documentElement,j=d.expando;d.event.special.inview={add:function(a){p[a.guid+"-"+this[j]]={data:a,$element:d(this)}},remove:function(a){try{delete p[a.guid+"-"+this[j]]}catch(d){}}};d(i).bind("scroll resize",function(){e=a=null});!f.addEventListener&&f.attachEvent&&f.attachEvent("onfocusin",function(){a=null});setInterval(function(){var k=d(),j,n=0;d.each(p,function(a,b){var c=b.data.selector,d=b.$element;k=k.add(c?d.find(c):d)});if(j=k.length){var b;if(!(b=e)){var g={height:i.innerHeight,width:i.innerWidth};if(!g.height&&((b=h.compatMode)||!d.support.boxModel))b="CSS1Compat"===b?f:h.body,g={height:b.clientHeight,width:b.clientWidth};b=g}e=b;for(a=a||{top:i.pageYOffset||f.scrollTop||h.body.scrollTop,left:i.pageXOffset||f.scrollLeft||h.body.scrollLeft};n<j;n++)if(d.contains(f,k[n])){b=d(k[n]);var l=b.height(),m=b.width(),c=b.offset(),g=b.data("inview");if(!a||!e)break;c.top+l>a.top&&c.top<a.top+e.height&&c.left+m>a.left&&c.left<a.left+e.width?(m=a.left>c.left?"right":a.left+e.width<c.left+m?"left":"both",l=a.top>c.top?"bottom":a.top+e.height<c.top+l?"top":"both",c=m+"-"+l,(!g||g!==c)&&b.data("inview",c).trigger("inview",[!0,m,l])):g&&b.data("inview",!1).trigger("inview",[!1])}}},250)})(jQuery);
	// - FlexSlider
	(function(e){e.flexslider=function(t,n){var r=e(t);r.vars=e.extend({},e.flexslider.defaults,n);var i=r.vars.namespace,s=window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture,o=("ontouchstart"in window||s||window.DocumentTouch&&document instanceof DocumentTouch)&&r.vars.touch,u="click touchend MSPointerUp",a="",f,l=r.vars.direction==="vertical",c=r.vars.reverse,h=r.vars.itemWidth>0,p=r.vars.animation==="fade",d=r.vars.asNavFor!=="",v={},m=!0;e.data(t,"flexslider",r);v={init:function(){r.animating=!1;r.currentSlide=parseInt(r.vars.startAt?r.vars.startAt:0,10);isNaN(r.currentSlide)&&(r.currentSlide=0);r.animatingTo=r.currentSlide;r.atEnd=r.currentSlide===0||r.currentSlide===r.last;r.containerSelector=r.vars.selector.substr(0,r.vars.selector.search(" "));r.slides=e(r.vars.selector,r);r.container=e(r.containerSelector,r);r.count=r.slides.length;r.syncExists=e(r.vars.sync).length>0;r.vars.animation==="slide"&&(r.vars.animation="swing");r.prop=l?"top":"marginLeft";r.args={};r.manualPause=!1;r.stopped=!1;r.started=!1;r.startTimeout=null;r.transitions=!r.vars.video&&!p&&r.vars.useCSS&&function(){var e=document.createElement("div"),t=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var n in t)if(e.style[t[n]]!==undefined){r.pfx=t[n].replace("Perspective","").toLowerCase();r.prop="-"+r.pfx+"-transform";return!0}return!1}();r.vars.controlsContainer!==""&&(r.controlsContainer=e(r.vars.controlsContainer).length>0&&e(r.vars.controlsContainer));r.vars.manualControls!==""&&(r.manualControls=e(r.vars.manualControls).length>0&&e(r.vars.manualControls));if(r.vars.randomize){r.slides.sort(function(){return Math.round(Math.random())-.5});r.container.empty().append(r.slides)}r.doMath();r.setup("init");r.vars.controlNav&&v.controlNav.setup();r.vars.directionNav&&v.directionNav.setup();r.vars.keyboard&&(e(r.containerSelector).length===1||r.vars.multipleKeyboard)&&e(document).bind("keyup",function(e){var t=e.keyCode;if(!r.animating&&(t===39||t===37)){var n=t===39?r.getTarget("next"):t===37?r.getTarget("prev"):!1;r.flexAnimate(n,r.vars.pauseOnAction)}});r.vars.mousewheel&&r.bind("mousewheel",function(e,t,n,i){e.preventDefault();var s=t<0?r.getTarget("next"):r.getTarget("prev");r.flexAnimate(s,r.vars.pauseOnAction)});r.vars.pausePlay&&v.pausePlay.setup();r.vars.slideshow&&r.vars.pauseInvisible&&v.pauseInvisible.init();if(r.vars.slideshow){r.vars.pauseOnHover&&r.hover(function(){!r.manualPlay&&!r.manualPause&&r.pause()},function(){!r.manualPause&&!r.manualPlay&&!r.stopped&&r.play()});if(!r.vars.pauseInvisible||!v.pauseInvisible.isHidden())r.vars.initDelay>0?r.startTimeout=setTimeout(r.play,r.vars.initDelay):r.play()}d&&v.asNav.setup();o&&r.vars.touch&&v.touch();(!p||p&&r.vars.smoothHeight)&&e(window).bind("resize orientationchange focus",v.resize);r.find("img").attr("draggable","false");setTimeout(function(){r.vars.start(r)},200)},asNav:{setup:function(){r.asNav=!0;r.animatingTo=Math.floor(r.currentSlide/r.move);r.currentItem=r.currentSlide;r.slides.removeClass(i+"active-slide").eq(r.currentItem).addClass(i+"active-slide");if(!s)r.slides.on(u,function(t){t.preventDefault();var n=e(this),s=n.index(),o=n.offset().left-e(r).scrollLeft();if(o<=0&&n.hasClass(i+"active-slide"))r.flexAnimate(r.getTarget("prev"),!0);else if(!e(r.vars.asNavFor).data("flexslider").animating&&!n.hasClass(i+"active-slide")){r.direction=r.currentItem<s?"next":"prev";r.flexAnimate(s,r.vars.pauseOnAction,!1,!0,!0)}});else{t._slider=r;r.slides.each(function(){var t=this;t._gesture=new MSGesture;t._gesture.target=t;t.addEventListener("MSPointerDown",function(e){e.preventDefault();e.currentTarget._gesture&&e.currentTarget._gesture.addPointer(e.pointerId)},!1);t.addEventListener("MSGestureTap",function(t){t.preventDefault();var n=e(this),i=n.index();if(!e(r.vars.asNavFor).data("flexslider").animating&&!n.hasClass("active")){r.direction=r.currentItem<i?"next":"prev";r.flexAnimate(i,r.vars.pauseOnAction,!1,!0,!0)}})})}}},controlNav:{setup:function(){r.manualControls?v.controlNav.setupManual():v.controlNav.setupPaging()},setupPaging:function(){var t=r.vars.controlNav==="thumbnails"?"control-thumbs":"control-paging",n=1,s,o;r.controlNavScaffold=e('<ol class="'+i+"control-nav "+i+t+'"></ol>');if(r.pagingCount>1)for(var f=0;f<r.pagingCount;f++){o=r.slides.eq(f);s=r.vars.controlNav==="thumbnails"?'<img src="'+o.attr("data-thumb")+'"/>':"<a>"+n+"</a>";if("thumbnails"===r.vars.controlNav&&!0===r.vars.thumbCaptions){var l=o.attr("data-thumbcaption");""!=l&&undefined!=l&&(s+='<span class="'+i+'caption">'+l+"</span>")}r.controlNavScaffold.append("<li>"+s+"</li>");n++}r.controlsContainer?e(r.controlsContainer).append(r.controlNavScaffold):r.append(r.controlNavScaffold);v.controlNav.set();v.controlNav.active();r.controlNavScaffold.delegate("a, img",u,function(t){t.preventDefault();if(a===""||a===t.type){var n=e(this),s=r.controlNav.index(n);if(!n.hasClass(i+"active")){r.direction=s>r.currentSlide?"next":"prev";r.flexAnimate(s,r.vars.pauseOnAction)}}a===""&&(a=t.type);v.setToClearWatchedEvent()})},setupManual:function(){r.controlNav=r.manualControls;v.controlNav.active();r.controlNav.bind(u,function(t){t.preventDefault();if(a===""||a===t.type){var n=e(this),s=r.controlNav.index(n);if(!n.hasClass(i+"active")){s>r.currentSlide?r.direction="next":r.direction="prev";r.flexAnimate(s,r.vars.pauseOnAction)}}a===""&&(a=t.type);v.setToClearWatchedEvent()})},set:function(){var t=r.vars.controlNav==="thumbnails"?"img":"a";r.controlNav=e("."+i+"control-nav li "+t,r.controlsContainer?r.controlsContainer:r)},active:function(){r.controlNav.removeClass(i+"active").eq(r.animatingTo).addClass(i+"active")},update:function(t,n){r.pagingCount>1&&t==="add"?r.controlNavScaffold.append(e("<li><a>"+r.count+"</a></li>")):r.pagingCount===1?r.controlNavScaffold.find("li").remove():r.controlNav.eq(n).closest("li").remove();v.controlNav.set();r.pagingCount>1&&r.pagingCount!==r.controlNav.length?r.update(n,t):v.controlNav.active()}},directionNav:{setup:function(){var t=e('<ul class="'+i+'direction-nav"><li><a class="'+i+'prev" href="#">'+r.vars.prevText+'</a></li><li><a class="'+i+'next" href="#">'+r.vars.nextText+"</a></li></ul>");if(r.controlsContainer){e(r.controlsContainer).append(t);r.directionNav=e("."+i+"direction-nav li a",r.controlsContainer)}else{r.append(t);r.directionNav=e("."+i+"direction-nav li a",r)}v.directionNav.update();r.directionNav.bind(u,function(t){t.preventDefault();var n;if(a===""||a===t.type){n=e(this).hasClass(i+"next")?r.getTarget("next"):r.getTarget("prev");r.flexAnimate(n,r.vars.pauseOnAction)}a===""&&(a=t.type);v.setToClearWatchedEvent()})},update:function(){var e=i+"disabled";r.pagingCount===1?r.directionNav.addClass(e).attr("tabindex","-1"):r.vars.animationLoop?r.directionNav.removeClass(e).removeAttr("tabindex"):r.animatingTo===0?r.directionNav.removeClass(e).filter("."+i+"prev").addClass(e).attr("tabindex","-1"):r.animatingTo===r.last?r.directionNav.removeClass(e).filter("."+i+"next").addClass(e).attr("tabindex","-1"):r.directionNav.removeClass(e).removeAttr("tabindex")}},pausePlay:{setup:function(){var t=e('<div class="'+i+'pauseplay"><a></a></div>');if(r.controlsContainer){r.controlsContainer.append(t);r.pausePlay=e("."+i+"pauseplay a",r.controlsContainer)}else{r.append(t);r.pausePlay=e("."+i+"pauseplay a",r)}v.pausePlay.update(r.vars.slideshow?i+"pause":i+"play");r.pausePlay.bind(u,function(t){t.preventDefault();if(a===""||a===t.type)if(e(this).hasClass(i+"pause")){r.manualPause=!0;r.manualPlay=!1;r.pause()}else{r.manualPause=!1;r.manualPlay=!0;r.play()}a===""&&(a=t.type);v.setToClearWatchedEvent()})},update:function(e){e==="play"?r.pausePlay.removeClass(i+"pause").addClass(i+"play").html(r.vars.playText):r.pausePlay.removeClass(i+"play").addClass(i+"pause").html(r.vars.pauseText)}},touch:function(){var e,n,i,o,u,a,f=!1,d=0,v=0,m=0;if(!s){t.addEventListener("touchstart",g,!1);function g(s){if(r.animating)s.preventDefault();else if(window.navigator.msPointerEnabled||s.touches.length===1){r.pause();o=l?r.h:r.w;a=Number(new Date);d=s.touches[0].pageX;v=s.touches[0].pageY;i=h&&c&&r.animatingTo===r.last?0:h&&c?r.limit-(r.itemW+r.vars.itemMargin)*r.move*r.animatingTo:h&&r.currentSlide===r.last?r.limit:h?(r.itemW+r.vars.itemMargin)*r.move*r.currentSlide:c?(r.last-r.currentSlide+r.cloneOffset)*o:(r.currentSlide+r.cloneOffset)*o;e=l?v:d;n=l?d:v;t.addEventListener("touchmove",y,!1);t.addEventListener("touchend",b,!1)}}function y(t){d=t.touches[0].pageX;v=t.touches[0].pageY;u=l?e-v:e-d;f=l?Math.abs(u)<Math.abs(d-n):Math.abs(u)<Math.abs(v-n);var s=500;if(!f||Number(new Date)-a>s){t.preventDefault();if(!p&&r.transitions){r.vars.animationLoop||(u/=r.currentSlide===0&&u<0||r.currentSlide===r.last&&u>0?Math.abs(u)/o+2:1);r.setProps(i+u,"setTouch")}}}function b(s){t.removeEventListener("touchmove",y,!1);if(r.animatingTo===r.currentSlide&&!f&&u!==null){var l=c?-u:u,h=l>0?r.getTarget("next"):r.getTarget("prev");r.canAdvance(h)&&(Number(new Date)-a<550&&Math.abs(l)>50||Math.abs(l)>o/2)?r.flexAnimate(h,r.vars.pauseOnAction):p||r.flexAnimate(r.currentSlide,r.vars.pauseOnAction,!0)}t.removeEventListener("touchend",b,!1);e=null;n=null;u=null;i=null}}else{t.style.msTouchAction="none";t._gesture=new MSGesture;t._gesture.target=t;t.addEventListener("MSPointerDown",w,!1);t._slider=r;t.addEventListener("MSGestureChange",E,!1);t.addEventListener("MSGestureEnd",S,!1);function w(e){e.stopPropagation();if(r.animating)e.preventDefault();else{r.pause();t._gesture.addPointer(e.pointerId);m=0;o=l?r.h:r.w;a=Number(new Date);i=h&&c&&r.animatingTo===r.last?0:h&&c?r.limit-(r.itemW+r.vars.itemMargin)*r.move*r.animatingTo:h&&r.currentSlide===r.last?r.limit:h?(r.itemW+r.vars.itemMargin)*r.move*r.currentSlide:c?(r.last-r.currentSlide+r.cloneOffset)*o:(r.currentSlide+r.cloneOffset)*o}}function E(e){e.stopPropagation();var n=e.target._slider;if(!n)return;var r=-e.translationX,s=-e.translationY;m+=l?s:r;u=m;f=l?Math.abs(m)<Math.abs(-r):Math.abs(m)<Math.abs(-s);if(e.detail===e.MSGESTURE_FLAG_INERTIA){setImmediate(function(){t._gesture.stop()});return}if(!f||Number(new Date)-a>500){e.preventDefault();if(!p&&n.transitions){n.vars.animationLoop||(u=m/(n.currentSlide===0&&m<0||n.currentSlide===n.last&&m>0?Math.abs(m)/o+2:1));n.setProps(i+u,"setTouch")}}}function S(t){t.stopPropagation();var r=t.target._slider;if(!r)return;if(r.animatingTo===r.currentSlide&&!f&&u!==null){var s=c?-u:u,l=s>0?r.getTarget("next"):r.getTarget("prev");r.canAdvance(l)&&(Number(new Date)-a<550&&Math.abs(s)>50||Math.abs(s)>o/2)?r.flexAnimate(l,r.vars.pauseOnAction):p||r.flexAnimate(r.currentSlide,r.vars.pauseOnAction,!0)}e=null;n=null;u=null;i=null;m=0}}},resize:function(){if(!r.animating&&r.is(":visible")){h||r.doMath();if(p)v.smoothHeight();else if(h){r.slides.width(r.computedW);r.update(r.pagingCount);r.setProps()}else if(l){r.viewport.height(r.h);r.setProps(r.h,"setTotal")}else{r.vars.smoothHeight&&v.smoothHeight();r.newSlides.width(r.computedW);r.setProps(r.computedW,"setTotal")}}},smoothHeight:function(e){if(!l||p){var t=p?r:r.viewport;e?t.animate({height:r.slides.eq(r.animatingTo).height()},e):t.height(r.slides.eq(r.animatingTo).height())}},sync:function(t){var n=e(r.vars.sync).data("flexslider"),i=r.animatingTo;switch(t){case"animate":n.flexAnimate(i,r.vars.pauseOnAction,!1,!0);break;case"play":!n.playing&&!n.asNav&&n.play();break;case"pause":n.pause()}},uniqueID:function(t){t.find("[id]").each(function(){var t=e(this);t.attr("id",t.attr("id")+"_clone")});return t},pauseInvisible:{visProp:null,init:function(){var e=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var t=0;t<e.length;t++)e[t]+"Hidden"in document&&(v.pauseInvisible.visProp=e[t]+"Hidden");if(v.pauseInvisible.visProp){var n=v.pauseInvisible.visProp.replace(/[H|h]idden/,"")+"visibilitychange";document.addEventListener(n,function(){v.pauseInvisible.isHidden()?r.startTimeout?clearTimeout(r.startTimeout):r.pause():r.started?r.play():r.vars.initDelay>0?setTimeout(r.play,r.vars.initDelay):r.play()})}},isHidden:function(){return document[v.pauseInvisible.visProp]||!1}},setToClearWatchedEvent:function(){clearTimeout(f);f=setTimeout(function(){a=""},3e3)}};r.flexAnimate=function(t,n,s,u,a){!r.vars.animationLoop&&t!==r.currentSlide&&(r.direction=t>r.currentSlide?"next":"prev");d&&r.pagingCount===1&&(r.direction=r.currentItem<t?"next":"prev");if(!r.animating&&(r.canAdvance(t,a)||s)&&r.is(":visible")){if(d&&u){var f=e(r.vars.asNavFor).data("flexslider");r.atEnd=t===0||t===r.count-1;f.flexAnimate(t,!0,!1,!0,a);r.direction=r.currentItem<t?"next":"prev";f.direction=r.direction;if(Math.ceil((t+1)/r.visible)-1===r.currentSlide||t===0){r.currentItem=t;r.slides.removeClass(i+"active-slide").eq(t).addClass(i+"active-slide");return!1}r.currentItem=t;r.slides.removeClass(i+"active-slide").eq(t).addClass(i+"active-slide");t=Math.floor(t/r.visible)}r.animating=!0;r.animatingTo=t;n&&r.pause();r.vars.before(r);r.syncExists&&!a&&v.sync("animate");r.vars.controlNav&&v.controlNav.active();h||r.slides.removeClass(i+"active-slide").eq(t).addClass(i+"active-slide");r.atEnd=t===0||t===r.last;r.vars.directionNav&&v.directionNav.update();if(t===r.last){r.vars.end(r);r.vars.animationLoop||r.pause()}if(!p){var m=l?r.slides.filter(":first").height():r.computedW,g,y,b;if(h){g=r.vars.itemMargin;b=(r.itemW+g)*r.move*r.animatingTo;y=b>r.limit&&r.visible!==1?r.limit:b}else r.currentSlide===0&&t===r.count-1&&r.vars.animationLoop&&r.direction!=="next"?y=c?(r.count+r.cloneOffset)*m:0:r.currentSlide===r.last&&t===0&&r.vars.animationLoop&&r.direction!=="prev"?y=c?0:(r.count+1)*m:y=c?(r.count-1-t+r.cloneOffset)*m:(t+r.cloneOffset)*m;r.setProps(y,"",r.vars.animationSpeed);if(r.transitions){if(!r.vars.animationLoop||!r.atEnd){r.animating=!1;r.currentSlide=r.animatingTo}r.container.unbind("webkitTransitionEnd transitionend");r.container.bind("webkitTransitionEnd transitionend",function(){r.wrapup(m)})}else r.container.animate(r.args,r.vars.animationSpeed,r.vars.easing,function(){r.wrapup(m)})}else if(!o){r.slides.eq(r.currentSlide).css({zIndex:1}).animate({opacity:0},r.vars.animationSpeed,r.vars.easing);r.slides.eq(t).css({zIndex:2}).animate({opacity:1},r.vars.animationSpeed,r.vars.easing,r.wrapup)}else{r.slides.eq(r.currentSlide).css({opacity:0,zIndex:1});r.slides.eq(t).css({opacity:1,zIndex:2});r.wrapup(m)}r.vars.smoothHeight&&v.smoothHeight(r.vars.animationSpeed)}};r.wrapup=function(e){!p&&!h&&(r.currentSlide===0&&r.animatingTo===r.last&&r.vars.animationLoop?r.setProps(e,"jumpEnd"):r.currentSlide===r.last&&r.animatingTo===0&&r.vars.animationLoop&&r.setProps(e,"jumpStart"));r.animating=!1;r.currentSlide=r.animatingTo;r.vars.after(r)};r.animateSlides=function(){!r.animating&&m&&r.flexAnimate(r.getTarget("next"))};r.pause=function(){clearInterval(r.animatedSlides);r.animatedSlides=null;r.playing=!1;r.vars.pausePlay&&v.pausePlay.update("play");r.syncExists&&v.sync("pause")};r.play=function(){r.playing&&clearInterval(r.animatedSlides);r.animatedSlides=r.animatedSlides||setInterval(r.animateSlides,r.vars.slideshowSpeed);r.started=r.playing=!0;r.vars.pausePlay&&v.pausePlay.update("pause");r.syncExists&&v.sync("play")};r.stop=function(){r.pause();r.stopped=!0};r.canAdvance=function(e,t){var n=d?r.pagingCount-1:r.last;return t?!0:d&&r.currentItem===r.count-1&&e===0&&r.direction==="prev"?!0:d&&r.currentItem===0&&e===r.pagingCount-1&&r.direction!=="next"?!1:e===r.currentSlide&&!d?!1:r.vars.animationLoop?!0:r.atEnd&&r.currentSlide===0&&e===n&&r.direction!=="next"?!1:r.atEnd&&r.currentSlide===n&&e===0&&r.direction==="next"?!1:!0};r.getTarget=function(e){r.direction=e;return e==="next"?r.currentSlide===r.last?0:r.currentSlide+1:r.currentSlide===0?r.last:r.currentSlide-1};r.setProps=function(e,t,n){var i=function(){var n=e?e:(r.itemW+r.vars.itemMargin)*r.move*r.animatingTo,i=function(){if(h)return t==="setTouch"?e:c&&r.animatingTo===r.last?0:c?r.limit-(r.itemW+r.vars.itemMargin)*r.move*r.animatingTo:r.animatingTo===r.last?r.limit:n;switch(t){case"setTotal":return c?(r.count-1-r.currentSlide+r.cloneOffset)*e:(r.currentSlide+r.cloneOffset)*e;case"setTouch":return c?e:e;case"jumpEnd":return c?e:r.count*e;case"jumpStart":return c?r.count*e:e;default:return e}}();return i*-1+"px"}();if(r.transitions){i=l?"translate3d(0,"+i+",0)":"translate3d("+i+",0,0)";n=n!==undefined?n/1e3+"s":"0s";r.container.css("-"+r.pfx+"-transition-duration",n);r.container.css("transition-duration",n)}r.args[r.prop]=i;(r.transitions||n===undefined)&&r.container.css(r.args);r.container.css("transform",i)};r.setup=function(t){if(!p){var n,s;if(t==="init"){r.viewport=e('<div class="'+i+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(r).append(r.container);r.cloneCount=0;r.cloneOffset=0;if(c){s=e.makeArray(r.slides).reverse();r.slides=e(s);r.container.empty().append(r.slides)}}if(r.vars.animationLoop&&!h){r.cloneCount=2;r.cloneOffset=1;t!=="init"&&r.container.find(".clone").remove();r.container.append(r.slides.first().clone().addClass("clone").attr("aria-hidden","true")).prepend(r.slides.last().clone().addClass("clone").attr("aria-hidden","true"));v.uniqueID(r.slides.first().clone().addClass("clone")).appendTo(r.container);v.uniqueID(r.slides.last().clone().addClass("clone")).prependTo(r.container)}r.newSlides=e(r.vars.selector,r);n=c?r.count-1-r.currentSlide+r.cloneOffset:r.currentSlide+r.cloneOffset;if(l&&!h){r.container.height((r.count+r.cloneCount)*200+"%").css("position","absolute").width("100%");setTimeout(function(){r.newSlides.css({display:"block"});r.doMath();r.viewport.height(r.h);r.setProps(n*r.h,"init")},t==="init"?100:0)}else{r.container.width((r.count+r.cloneCount)*200+"%");r.setProps(n*r.computedW,"init");setTimeout(function(){r.doMath();r.newSlides.css({width:r.computedW,"float":"left",display:"block"});r.vars.smoothHeight&&v.smoothHeight()},t==="init"?100:0)}}else{r.slides.css({width:"100%","float":"left",marginRight:"-100%",position:"relative"});t==="init"&&(o?r.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+r.vars.animationSpeed/1e3+"s ease",zIndex:1}).eq(r.currentSlide).css({opacity:1,zIndex:2}):r.slides.css({opacity:0,display:"block",zIndex:1}).eq(r.currentSlide).css({zIndex:2}).animate({opacity:1},r.vars.animationSpeed,r.vars.easing));r.vars.smoothHeight&&v.smoothHeight()}h||r.slides.removeClass(i+"active-slide").eq(r.currentSlide).addClass(i+"active-slide");r.vars.init(r)};r.doMath=function(){var e=r.slides.first(),t=r.vars.itemMargin,n=r.vars.minItems,i=r.vars.maxItems;r.w=r.viewport===undefined?r.width():r.viewport.width();r.h=e.height();r.boxPadding=e.outerWidth()-e.width();if(h){r.itemT=r.vars.itemWidth+t;r.minW=n?n*r.itemT:r.w;r.maxW=i?i*r.itemT-t:r.w;r.itemW=r.minW>r.w?(r.w-t*(n-1))/n:r.maxW<r.w?(r.w-t*(i-1))/i:r.vars.itemWidth>r.w?r.w:r.vars.itemWidth;r.visible=Math.floor(r.w/r.itemW);r.move=r.vars.move>0&&r.vars.move<r.visible?r.vars.move:r.visible;r.pagingCount=Math.ceil((r.count-r.visible)/r.move+1);r.last=r.pagingCount-1;r.limit=r.pagingCount===1?0:r.vars.itemWidth>r.w?r.itemW*(r.count-1)+t*(r.count-1):(r.itemW+t)*r.count-r.w-t}else{r.itemW=r.w;r.pagingCount=r.count;r.last=r.count-1}r.computedW=r.itemW-r.boxPadding};r.update=function(e,t){r.doMath();if(!h){e<r.currentSlide?r.currentSlide+=1:e<=r.currentSlide&&e!==0&&(r.currentSlide-=1);r.animatingTo=r.currentSlide}if(r.vars.controlNav&&!r.manualControls)if(t==="add"&&!h||r.pagingCount>r.controlNav.length)v.controlNav.update("add");else if(t==="remove"&&!h||r.pagingCount<r.controlNav.length){if(h&&r.currentSlide>r.last){r.currentSlide-=1;r.animatingTo-=1}v.controlNav.update("remove",r.last)}r.vars.directionNav&&v.directionNav.update()};r.addSlide=function(t,n){var i=e(t);r.count+=1;r.last=r.count-1;l&&c?n!==undefined?r.slides.eq(r.count-n).after(i):r.container.prepend(i):n!==undefined?r.slides.eq(n).before(i):r.container.append(i);r.update(n,"add");r.slides=e(r.vars.selector+":not(.clone)",r);r.setup();r.vars.added(r)};r.removeSlide=function(t){var n=isNaN(t)?r.slides.index(e(t)):t;r.count-=1;r.last=r.count-1;isNaN(t)?e(t,r.slides).remove():l&&c?r.slides.eq(r.last).remove():r.slides.eq(t).remove();r.doMath();r.update(n,"remove");r.slides=e(r.vars.selector+":not(.clone)",r);r.setup();r.vars.removed(r)};v.init()};e(window).blur(function(e){focused=!1}).focus(function(e){focused=!0});e.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7e3,animationSpeed:600,initDelay:0,randomize:!1,thumbCaptions:!1,pauseOnAction:!0,pauseOnHover:!1,pauseInvisible:!0,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:1,maxItems:0,move:0,allowOneSlide:!0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){},init:function(){}};e.fn.flexslider=function(t){t===undefined&&(t={});if(typeof t=="object")return this.each(function(){var n=e(this),r=t.selector?t.selector:".slides > li",i=n.find(r);if(i.length===1&&t.allowOneSlide===!0||i.length===0){i.fadeIn(400);t.start&&t.start(n)}else n.data("flexslider")===undefined&&new e.flexslider(this,t)});var n=e(this).data("flexslider");switch(t){case"play":n.play();break;case"pause":n.pause();break;case"stop":n.stop();break;case"next":n.flexAnimate(n.getTarget("next"),!0);break;case"prev":case"previous":n.flexAnimate(n.getTarget("prev"),!0);break;default:typeof t=="number"&&n.flexAnimate(t,!0)}}})(jQuery);(function(e){e.flexslider=function(t,n){var r=e(t);r.vars=e.extend({},e.flexslider.defaults,n);var i=r.vars.namespace,s=window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture,o=("ontouchstart"in window||s||window.DocumentTouch&&document instanceof DocumentTouch)&&r.vars.touch,u="click touchend MSPointerUp",a="",f,l=r.vars.direction==="vertical",c=r.vars.reverse,h=r.vars.itemWidth>0,p=r.vars.animation==="fade",d=r.vars.asNavFor!=="",v={},m=!0;e.data(t,"flexslider",r);v={init:function(){r.animating=!1;r.currentSlide=parseInt(r.vars.startAt?r.vars.startAt:0,10);isNaN(r.currentSlide)&&(r.currentSlide=0);r.animatingTo=r.currentSlide;r.atEnd=r.currentSlide===0||r.currentSlide===r.last;r.containerSelector=r.vars.selector.substr(0,r.vars.selector.search(" "));r.slides=e(r.vars.selector,r);r.container=e(r.containerSelector,r);r.count=r.slides.length;r.syncExists=e(r.vars.sync).length>0;r.vars.animation==="slide"&&(r.vars.animation="swing");r.prop=l?"top":"marginLeft";r.args={};r.manualPause=!1;r.stopped=!1;r.started=!1;r.startTimeout=null;r.transitions=!r.vars.video&&!p&&r.vars.useCSS&&function(){var e=document.createElement("div"),t=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var n in t)if(e.style[t[n]]!==undefined){r.pfx=t[n].replace("Perspective","").toLowerCase();r.prop="-"+r.pfx+"-transform";return!0}return!1}();r.vars.controlsContainer!==""&&(r.controlsContainer=e(r.vars.controlsContainer).length>0&&e(r.vars.controlsContainer));r.vars.manualControls!==""&&(r.manualControls=e(r.vars.manualControls).length>0&&e(r.vars.manualControls));if(r.vars.randomize){r.slides.sort(function(){return Math.round(Math.random())-.5});r.container.empty().append(r.slides)}r.doMath();r.setup("init");r.vars.controlNav&&v.controlNav.setup();r.vars.directionNav&&v.directionNav.setup();r.vars.keyboard&&(e(r.containerSelector).length===1||r.vars.multipleKeyboard)&&e(document).bind("keyup",function(e){var t=e.keyCode;if(!r.animating&&(t===39||t===37)){var n=t===39?r.getTarget("next"):t===37?r.getTarget("prev"):!1;r.flexAnimate(n,r.vars.pauseOnAction)}});r.vars.mousewheel&&r.bind("mousewheel",function(e,t,n,i){e.preventDefault();var s=t<0?r.getTarget("next"):r.getTarget("prev");r.flexAnimate(s,r.vars.pauseOnAction)});r.vars.pausePlay&&v.pausePlay.setup();r.vars.slideshow&&r.vars.pauseInvisible&&v.pauseInvisible.init();if(r.vars.slideshow){r.vars.pauseOnHover&&r.hover(function(){!r.manualPlay&&!r.manualPause&&r.pause()},function(){!r.manualPause&&!r.manualPlay&&!r.stopped&&r.play()});if(!r.vars.pauseInvisible||!v.pauseInvisible.isHidden())r.vars.initDelay>0?r.startTimeout=setTimeout(r.play,r.vars.initDelay):r.play()}d&&v.asNav.setup();o&&r.vars.touch&&v.touch();(!p||p&&r.vars.smoothHeight)&&e(window).bind("resize orientationchange focus",v.resize);r.find("img").attr("draggable","false");setTimeout(function(){r.vars.start(r)},200)},asNav:{setup:function(){r.asNav=!0;r.animatingTo=Math.floor(r.currentSlide/r.move);r.currentItem=r.currentSlide;r.slides.removeClass(i+"active-slide").eq(r.currentItem).addClass(i+"active-slide");if(!s)r.slides.on(u,function(t){t.preventDefault();var n=e(this),s=n.index(),o=n.offset().left-e(r).scrollLeft();if(o<=0&&n.hasClass(i+"active-slide"))r.flexAnimate(r.getTarget("prev"),!0);else if(!e(r.vars.asNavFor).data("flexslider").animating&&!n.hasClass(i+"active-slide")){r.direction=r.currentItem<s?"next":"prev";r.flexAnimate(s,r.vars.pauseOnAction,!1,!0,!0)}});else{t._slider=r;r.slides.each(function(){var t=this;t._gesture=new MSGesture;t._gesture.target=t;t.addEventListener("MSPointerDown",function(e){e.preventDefault();e.currentTarget._gesture&&e.currentTarget._gesture.addPointer(e.pointerId)},!1);t.addEventListener("MSGestureTap",function(t){t.preventDefault();var n=e(this),i=n.index();if(!e(r.vars.asNavFor).data("flexslider").animating&&!n.hasClass("active")){r.direction=r.currentItem<i?"next":"prev";r.flexAnimate(i,r.vars.pauseOnAction,!1,!0,!0)}})})}}},controlNav:{setup:function(){r.manualControls?v.controlNav.setupManual():v.controlNav.setupPaging()},setupPaging:function(){var t=r.vars.controlNav==="thumbnails"?"control-thumbs":"control-paging",n=1,s,o;r.controlNavScaffold=e('<ol class="'+i+"control-nav "+i+t+'"></ol>');if(r.pagingCount>1)for(var f=0;f<r.pagingCount;f++){o=r.slides.eq(f);s=r.vars.controlNav==="thumbnails"?'<img src="'+o.attr("data-thumb")+'"/>':"<a>"+n+"</a>";if("thumbnails"===r.vars.controlNav&&!0===r.vars.thumbCaptions){var l=o.attr("data-thumbcaption");""!=l&&undefined!=l&&(s+='<span class="'+i+'caption">'+l+"</span>")}r.controlNavScaffold.append("<li>"+s+"</li>");n++}r.controlsContainer?e(r.controlsContainer).append(r.controlNavScaffold):r.append(r.controlNavScaffold);v.controlNav.set();v.controlNav.active();r.controlNavScaffold.delegate("a, img",u,function(t){t.preventDefault();if(a===""||a===t.type){var n=e(this),s=r.controlNav.index(n);if(!n.hasClass(i+"active")){r.direction=s>r.currentSlide?"next":"prev";r.flexAnimate(s,r.vars.pauseOnAction)}}a===""&&(a=t.type);v.setToClearWatchedEvent()})},setupManual:function(){r.controlNav=r.manualControls;v.controlNav.active();r.controlNav.bind(u,function(t){t.preventDefault();if(a===""||a===t.type){var n=e(this),s=r.controlNav.index(n);if(!n.hasClass(i+"active")){s>r.currentSlide?r.direction="next":r.direction="prev";r.flexAnimate(s,r.vars.pauseOnAction)}}a===""&&(a=t.type);v.setToClearWatchedEvent()})},set:function(){var t=r.vars.controlNav==="thumbnails"?"img":"a";r.controlNav=e("."+i+"control-nav li "+t,r.controlsContainer?r.controlsContainer:r)},active:function(){r.controlNav.removeClass(i+"active").eq(r.animatingTo).addClass(i+"active")},update:function(t,n){r.pagingCount>1&&t==="add"?r.controlNavScaffold.append(e("<li><a>"+r.count+"</a></li>")):r.pagingCount===1?r.controlNavScaffold.find("li").remove():r.controlNav.eq(n).closest("li").remove();v.controlNav.set();r.pagingCount>1&&r.pagingCount!==r.controlNav.length?r.update(n,t):v.controlNav.active()}},directionNav:{setup:function(){var t=e('<ul class="'+i+'direction-nav"><li><a class="'+i+'prev" href="#">'+r.vars.prevText+'</a></li><li><a class="'+i+'next" href="#">'+r.vars.nextText+"</a></li></ul>");if(r.controlsContainer){e(r.controlsContainer).append(t);r.directionNav=e("."+i+"direction-nav li a",r.controlsContainer)}else{r.append(t);r.directionNav=e("."+i+"direction-nav li a",r)}v.directionNav.update();r.directionNav.bind(u,function(t){t.preventDefault();var n;if(a===""||a===t.type){n=e(this).hasClass(i+"next")?r.getTarget("next"):r.getTarget("prev");r.flexAnimate(n,r.vars.pauseOnAction)}a===""&&(a=t.type);v.setToClearWatchedEvent()})},update:function(){var e=i+"disabled";r.pagingCount===1?r.directionNav.addClass(e).attr("tabindex","-1"):r.vars.animationLoop?r.directionNav.removeClass(e).removeAttr("tabindex"):r.animatingTo===0?r.directionNav.removeClass(e).filter("."+i+"prev").addClass(e).attr("tabindex","-1"):r.animatingTo===r.last?r.directionNav.removeClass(e).filter("."+i+"next").addClass(e).attr("tabindex","-1"):r.directionNav.removeClass(e).removeAttr("tabindex")}},pausePlay:{setup:function(){var t=e('<div class="'+i+'pauseplay"><a></a></div>');if(r.controlsContainer){r.controlsContainer.append(t);r.pausePlay=e("."+i+"pauseplay a",r.controlsContainer)}else{r.append(t);r.pausePlay=e("."+i+"pauseplay a",r)}v.pausePlay.update(r.vars.slideshow?i+"pause":i+"play");r.pausePlay.bind(u,function(t){t.preventDefault();if(a===""||a===t.type)if(e(this).hasClass(i+"pause")){r.manualPause=!0;r.manualPlay=!1;r.pause()}else{r.manualPause=!1;r.manualPlay=!0;r.play()}a===""&&(a=t.type);v.setToClearWatchedEvent()})},update:function(e){e==="play"?r.pausePlay.removeClass(i+"pause").addClass(i+"play").html(r.vars.playText):r.pausePlay.removeClass(i+"play").addClass(i+"pause").html(r.vars.pauseText)}},touch:function(){var e,n,i,o,u,a,f=!1,d=0,v=0,m=0;if(!s){t.addEventListener("touchstart",g,!1);function g(s){if(r.animating)s.preventDefault();else if(window.navigator.msPointerEnabled||s.touches.length===1){r.pause();o=l?r.h:r.w;a=Number(new Date);d=s.touches[0].pageX;v=s.touches[0].pageY;i=h&&c&&r.animatingTo===r.last?0:h&&c?r.limit-(r.itemW+r.vars.itemMargin)*r.move*r.animatingTo:h&&r.currentSlide===r.last?r.limit:h?(r.itemW+r.vars.itemMargin)*r.move*r.currentSlide:c?(r.last-r.currentSlide+r.cloneOffset)*o:(r.currentSlide+r.cloneOffset)*o;e=l?v:d;n=l?d:v;t.addEventListener("touchmove",y,!1);t.addEventListener("touchend",b,!1)}}function y(t){d=t.touches[0].pageX;v=t.touches[0].pageY;u=l?e-v:e-d;f=l?Math.abs(u)<Math.abs(d-n):Math.abs(u)<Math.abs(v-n);var s=500;if(!f||Number(new Date)-a>s){t.preventDefault();if(!p&&r.transitions){r.vars.animationLoop||(u/=r.currentSlide===0&&u<0||r.currentSlide===r.last&&u>0?Math.abs(u)/o+2:1);r.setProps(i+u,"setTouch")}}}function b(s){t.removeEventListener("touchmove",y,!1);if(r.animatingTo===r.currentSlide&&!f&&u!==null){var l=c?-u:u,h=l>0?r.getTarget("next"):r.getTarget("prev");r.canAdvance(h)&&(Number(new Date)-a<550&&Math.abs(l)>50||Math.abs(l)>o/2)?r.flexAnimate(h,r.vars.pauseOnAction):p||r.flexAnimate(r.currentSlide,r.vars.pauseOnAction,!0)}t.removeEventListener("touchend",b,!1);e=null;n=null;u=null;i=null}}else{t.style.msTouchAction="none";t._gesture=new MSGesture;t._gesture.target=t;t.addEventListener("MSPointerDown",w,!1);t._slider=r;t.addEventListener("MSGestureChange",E,!1);t.addEventListener("MSGestureEnd",S,!1);function w(e){e.stopPropagation();if(r.animating)e.preventDefault();else{r.pause();t._gesture.addPointer(e.pointerId);m=0;o=l?r.h:r.w;a=Number(new Date);i=h&&c&&r.animatingTo===r.last?0:h&&c?r.limit-(r.itemW+r.vars.itemMargin)*r.move*r.animatingTo:h&&r.currentSlide===r.last?r.limit:h?(r.itemW+r.vars.itemMargin)*r.move*r.currentSlide:c?(r.last-r.currentSlide+r.cloneOffset)*o:(r.currentSlide+r.cloneOffset)*o}}function E(e){e.stopPropagation();var n=e.target._slider;if(!n)return;var r=-e.translationX,s=-e.translationY;m+=l?s:r;u=m;f=l?Math.abs(m)<Math.abs(-r):Math.abs(m)<Math.abs(-s);if(e.detail===e.MSGESTURE_FLAG_INERTIA){setImmediate(function(){t._gesture.stop()});return}if(!f||Number(new Date)-a>500){e.preventDefault();if(!p&&n.transitions){n.vars.animationLoop||(u=m/(n.currentSlide===0&&m<0||n.currentSlide===n.last&&m>0?Math.abs(m)/o+2:1));n.setProps(i+u,"setTouch")}}}function S(t){t.stopPropagation();var r=t.target._slider;if(!r)return;if(r.animatingTo===r.currentSlide&&!f&&u!==null){var s=c?-u:u,l=s>0?r.getTarget("next"):r.getTarget("prev");r.canAdvance(l)&&(Number(new Date)-a<550&&Math.abs(s)>50||Math.abs(s)>o/2)?r.flexAnimate(l,r.vars.pauseOnAction):p||r.flexAnimate(r.currentSlide,r.vars.pauseOnAction,!0)}e=null;n=null;u=null;i=null;m=0}}},resize:function(){if(!r.animating&&r.is(":visible")){h||r.doMath();if(p)v.smoothHeight();else if(h){r.slides.width(r.computedW);r.update(r.pagingCount);r.setProps()}else if(l){r.viewport.height(r.h);r.setProps(r.h,"setTotal")}else{r.vars.smoothHeight&&v.smoothHeight();r.newSlides.width(r.computedW);r.setProps(r.computedW,"setTotal")}}},smoothHeight:function(e){if(!l||p){var t=p?r:r.viewport;e?t.animate({height:r.slides.eq(r.animatingTo).height()},e):t.height(r.slides.eq(r.animatingTo).height())}},sync:function(t){var n=e(r.vars.sync).data("flexslider"),i=r.animatingTo;switch(t){case"animate":n.flexAnimate(i,r.vars.pauseOnAction,!1,!0);break;case"play":!n.playing&&!n.asNav&&n.play();break;case"pause":n.pause()}},uniqueID:function(t){t.find("[id]").each(function(){var t=e(this);t.attr("id",t.attr("id")+"_clone")});return t},pauseInvisible:{visProp:null,init:function(){var e=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var t=0;t<e.length;t++)e[t]+"Hidden"in document&&(v.pauseInvisible.visProp=e[t]+"Hidden");if(v.pauseInvisible.visProp){var n=v.pauseInvisible.visProp.replace(/[H|h]idden/,"")+"visibilitychange";document.addEventListener(n,function(){v.pauseInvisible.isHidden()?r.startTimeout?clearTimeout(r.startTimeout):r.pause():r.started?r.play():r.vars.initDelay>0?setTimeout(r.play,r.vars.initDelay):r.play()})}},isHidden:function(){return document[v.pauseInvisible.visProp]||!1}},setToClearWatchedEvent:function(){clearTimeout(f);f=setTimeout(function(){a=""},3e3)}};r.flexAnimate=function(t,n,s,u,a){!r.vars.animationLoop&&t!==r.currentSlide&&(r.direction=t>r.currentSlide?"next":"prev");d&&r.pagingCount===1&&(r.direction=r.currentItem<t?"next":"prev");if(!r.animating&&(r.canAdvance(t,a)||s)&&r.is(":visible")){if(d&&u){var f=e(r.vars.asNavFor).data("flexslider");r.atEnd=t===0||t===r.count-1;f.flexAnimate(t,!0,!1,!0,a);r.direction=r.currentItem<t?"next":"prev";f.direction=r.direction;if(Math.ceil((t+1)/r.visible)-1===r.currentSlide||t===0){r.currentItem=t;r.slides.removeClass(i+"active-slide").eq(t).addClass(i+"active-slide");return!1}r.currentItem=t;r.slides.removeClass(i+"active-slide").eq(t).addClass(i+"active-slide");t=Math.floor(t/r.visible)}r.animating=!0;r.animatingTo=t;n&&r.pause();r.vars.before(r);r.syncExists&&!a&&v.sync("animate");r.vars.controlNav&&v.controlNav.active();h||r.slides.removeClass(i+"active-slide").eq(t).addClass(i+"active-slide");r.atEnd=t===0||t===r.last;r.vars.directionNav&&v.directionNav.update();if(t===r.last){r.vars.end(r);r.vars.animationLoop||r.pause()}if(!p){var m=l?r.slides.filter(":first").height():r.computedW,g,y,b;if(h){g=r.vars.itemMargin;b=(r.itemW+g)*r.move*r.animatingTo;y=b>r.limit&&r.visible!==1?r.limit:b}else r.currentSlide===0&&t===r.count-1&&r.vars.animationLoop&&r.direction!=="next"?y=c?(r.count+r.cloneOffset)*m:0:r.currentSlide===r.last&&t===0&&r.vars.animationLoop&&r.direction!=="prev"?y=c?0:(r.count+1)*m:y=c?(r.count-1-t+r.cloneOffset)*m:(t+r.cloneOffset)*m;r.setProps(y,"",r.vars.animationSpeed);if(r.transitions){if(!r.vars.animationLoop||!r.atEnd){r.animating=!1;r.currentSlide=r.animatingTo}r.container.unbind("webkitTransitionEnd transitionend");r.container.bind("webkitTransitionEnd transitionend",function(){r.wrapup(m)})}else r.container.animate(r.args,r.vars.animationSpeed,r.vars.easing,function(){r.wrapup(m)})}else if(!o){r.slides.eq(r.currentSlide).css({zIndex:1}).animate({opacity:0},r.vars.animationSpeed,r.vars.easing);r.slides.eq(t).css({zIndex:2}).animate({opacity:1},r.vars.animationSpeed,r.vars.easing,r.wrapup)}else{r.slides.eq(r.currentSlide).css({opacity:0,zIndex:1});r.slides.eq(t).css({opacity:1,zIndex:2});r.wrapup(m)}r.vars.smoothHeight&&v.smoothHeight(r.vars.animationSpeed)}};r.wrapup=function(e){!p&&!h&&(r.currentSlide===0&&r.animatingTo===r.last&&r.vars.animationLoop?r.setProps(e,"jumpEnd"):r.currentSlide===r.last&&r.animatingTo===0&&r.vars.animationLoop&&r.setProps(e,"jumpStart"));r.animating=!1;r.currentSlide=r.animatingTo;r.vars.after(r)};r.animateSlides=function(){!r.animating&&m&&r.flexAnimate(r.getTarget("next"))};r.pause=function(){clearInterval(r.animatedSlides);r.animatedSlides=null;r.playing=!1;r.vars.pausePlay&&v.pausePlay.update("play");r.syncExists&&v.sync("pause")};r.play=function(){r.playing&&clearInterval(r.animatedSlides);r.animatedSlides=r.animatedSlides||setInterval(r.animateSlides,r.vars.slideshowSpeed);r.started=r.playing=!0;r.vars.pausePlay&&v.pausePlay.update("pause");r.syncExists&&v.sync("play")};r.stop=function(){r.pause();r.stopped=!0};r.canAdvance=function(e,t){var n=d?r.pagingCount-1:r.last;return t?!0:d&&r.currentItem===r.count-1&&e===0&&r.direction==="prev"?!0:d&&r.currentItem===0&&e===r.pagingCount-1&&r.direction!=="next"?!1:e===r.currentSlide&&!d?!1:r.vars.animationLoop?!0:r.atEnd&&r.currentSlide===0&&e===n&&r.direction!=="next"?!1:r.atEnd&&r.currentSlide===n&&e===0&&r.direction==="next"?!1:!0};r.getTarget=function(e){r.direction=e;return e==="next"?r.currentSlide===r.last?0:r.currentSlide+1:r.currentSlide===0?r.last:r.currentSlide-1};r.setProps=function(e,t,n){var i=function(){var n=e?e:(r.itemW+r.vars.itemMargin)*r.move*r.animatingTo,i=function(){if(h)return t==="setTouch"?e:c&&r.animatingTo===r.last?0:c?r.limit-(r.itemW+r.vars.itemMargin)*r.move*r.animatingTo:r.animatingTo===r.last?r.limit:n;switch(t){case"setTotal":return c?(r.count-1-r.currentSlide+r.cloneOffset)*e:(r.currentSlide+r.cloneOffset)*e;case"setTouch":return c?e:e;case"jumpEnd":return c?e:r.count*e;case"jumpStart":return c?r.count*e:e;default:return e}}();return i*-1+"px"}();if(r.transitions){i=l?"translate3d(0,"+i+",0)":"translate3d("+i+",0,0)";n=n!==undefined?n/1e3+"s":"0s";r.container.css("-"+r.pfx+"-transition-duration",n);r.container.css("transition-duration",n)}r.args[r.prop]=i;(r.transitions||n===undefined)&&r.container.css(r.args);r.container.css("transform",i)};r.setup=function(t){if(!p){var n,s;if(t==="init"){r.viewport=e('<div class="'+i+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(r).append(r.container);r.cloneCount=0;r.cloneOffset=0;if(c){s=e.makeArray(r.slides).reverse();r.slides=e(s);r.container.empty().append(r.slides)}}if(r.vars.animationLoop&&!h){r.cloneCount=2;r.cloneOffset=1;t!=="init"&&r.container.find(".clone").remove();r.container.append(r.slides.first().clone().addClass("clone").attr("aria-hidden","true")).prepend(r.slides.last().clone().addClass("clone").attr("aria-hidden","true"));v.uniqueID(r.slides.first().clone().addClass("clone")).appendTo(r.container);v.uniqueID(r.slides.last().clone().addClass("clone")).prependTo(r.container)}r.newSlides=e(r.vars.selector,r);n=c?r.count-1-r.currentSlide+r.cloneOffset:r.currentSlide+r.cloneOffset;if(l&&!h){r.container.height((r.count+r.cloneCount)*200+"%").css("position","absolute").width("100%");setTimeout(function(){r.newSlides.css({display:"block"});r.doMath();r.viewport.height(r.h);r.setProps(n*r.h,"init")},t==="init"?100:0)}else{r.container.width((r.count+r.cloneCount)*200+"%");r.setProps(n*r.computedW,"init");setTimeout(function(){r.doMath();r.newSlides.css({width:r.computedW,"float":"left",display:"block"});r.vars.smoothHeight&&v.smoothHeight()},t==="init"?100:0)}}else{r.slides.css({width:"100%","float":"left",marginRight:"-100%",position:"relative"});t==="init"&&(o?r.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+r.vars.animationSpeed/1e3+"s ease",zIndex:1}).eq(r.currentSlide).css({opacity:1,zIndex:2}):r.slides.css({opacity:0,display:"block",zIndex:1}).eq(r.currentSlide).css({zIndex:2}).animate({opacity:1},r.vars.animationSpeed,r.vars.easing));r.vars.smoothHeight&&v.smoothHeight()}h||r.slides.removeClass(i+"active-slide").eq(r.currentSlide).addClass(i+"active-slide");r.vars.init(r)};r.doMath=function(){var e=r.slides.first(),t=r.vars.itemMargin,n=r.vars.minItems,i=r.vars.maxItems;r.w=r.viewport===undefined?r.width():r.viewport.width();r.h=e.height();r.boxPadding=e.outerWidth()-e.width();if(h){r.itemT=r.vars.itemWidth+t;r.minW=n?n*r.itemT:r.w;r.maxW=i?i*r.itemT-t:r.w;r.itemW=r.minW>r.w?(r.w-t*(n-1))/n:r.maxW<r.w?(r.w-t*(i-1))/i:r.vars.itemWidth>r.w?r.w:r.vars.itemWidth;r.visible=Math.floor(r.w/r.itemW);r.move=r.vars.move>0&&r.vars.move<r.visible?r.vars.move:r.visible;r.pagingCount=Math.ceil((r.count-r.visible)/r.move+1);r.last=r.pagingCount-1;r.limit=r.pagingCount===1?0:r.vars.itemWidth>r.w?r.itemW*(r.count-1)+t*(r.count-1):(r.itemW+t)*r.count-r.w-t}else{r.itemW=r.w;r.pagingCount=r.count;r.last=r.count-1}r.computedW=r.itemW-r.boxPadding};r.update=function(e,t){r.doMath();if(!h){e<r.currentSlide?r.currentSlide+=1:e<=r.currentSlide&&e!==0&&(r.currentSlide-=1);r.animatingTo=r.currentSlide}if(r.vars.controlNav&&!r.manualControls)if(t==="add"&&!h||r.pagingCount>r.controlNav.length)v.controlNav.update("add");else if(t==="remove"&&!h||r.pagingCount<r.controlNav.length){if(h&&r.currentSlide>r.last){r.currentSlide-=1;r.animatingTo-=1}v.controlNav.update("remove",r.last)}r.vars.directionNav&&v.directionNav.update()};r.addSlide=function(t,n){var i=e(t);r.count+=1;r.last=r.count-1;l&&c?n!==undefined?r.slides.eq(r.count-n).after(i):r.container.prepend(i):n!==undefined?r.slides.eq(n).before(i):r.container.append(i);r.update(n,"add");r.slides=e(r.vars.selector+":not(.clone)",r);r.setup();r.vars.added(r)};r.removeSlide=function(t){var n=isNaN(t)?r.slides.index(e(t)):t;r.count-=1;r.last=r.count-1;isNaN(t)?e(t,r.slides).remove():l&&c?r.slides.eq(r.last).remove():r.slides.eq(t).remove();r.doMath();r.update(n,"remove");r.slides=e(r.vars.selector+":not(.clone)",r);r.setup();r.vars.removed(r)};v.init()};e(window).blur(function(e){focused=!1}).focus(function(e){focused=!0});e.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7e3,animationSpeed:600,initDelay:0,randomize:!1,thumbCaptions:!1,pauseOnAction:!0,pauseOnHover:!1,pauseInvisible:!0,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:1,maxItems:0,move:0,allowOneSlide:!0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){},init:function(){}};e.fn.flexslider=function(t){t===undefined&&(t={});if(typeof t=="object")return this.each(function(){var n=e(this),r=t.selector?t.selector:".slides > li",i=n.find(r);if(i.length===1&&t.allowOneSlide===!0||i.length===0){i.fadeIn(400);t.start&&t.start(n)}else n.data("flexslider")===undefined&&new e.flexslider(this,t)});var n=e(this).data("flexslider");switch(t){case"play":n.play();break;case"pause":n.pause();break;case"stop":n.stop();break;case"next":n.flexAnimate(n.getTarget("next"),!0);break;case"prev":case"previous":n.flexAnimate(n.getTarget("prev"),!0);break;default:typeof t=="number"&&n.flexAnimate(t,!0)}}})(jQuery);
	// - Slick
	(function($){!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):"undefined"!=typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){"use strict";var b=window.Slick||{};b=function(){function c(c,d){var f,g,e=this;if(e.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:a(c),appendDots:a(c),arrows:!0,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(a,b){return'<button type="button" data-role="none">'+(b+1)+"</button>"},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",fade:!1,focusOnSelect:!1,infinite:!0,lazyLoad:"ondemand",onBeforeChange:null,onAfterChange:null,onInit:null,onReInit:null,pauseOnHover:!0,pauseOnDotsHover:!1,responsive:null,rtl:!1,slide:"div",slidesToShow:1,slidesToScroll:1,speed:300,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,variableWidth:!1,vertical:!1,waitForAnimate:!0},e.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentSlide:0,currentLeft:null,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1},a.extend(e,e.initials),e.activeBreakpoint=null,e.animType=null,e.animProp=null,e.breakpoints=[],e.breakpointSettings=[],e.cssTransitions=!1,e.paused=!1,e.positionProp=null,e.$slider=a(c),e.$slidesCache=null,e.transformType=null,e.transitionType=null,e.windowWidth=0,e.windowTimer=null,e.options=a.extend({},e.defaults,d),e.originalSettings=e.options,f=e.options.responsive||null,f&&f.length>-1){for(g in f)f.hasOwnProperty(g)&&(e.breakpoints.push(f[g].breakpoint),e.breakpointSettings[f[g].breakpoint]=f[g].settings);e.breakpoints.sort(function(a,b){return b-a})}e.autoPlay=a.proxy(e.autoPlay,e),e.autoPlayClear=a.proxy(e.autoPlayClear,e),e.changeSlide=a.proxy(e.changeSlide,e),e.selectHandler=a.proxy(e.selectHandler,e),e.setPosition=a.proxy(e.setPosition,e),e.swipeHandler=a.proxy(e.swipeHandler,e),e.dragHandler=a.proxy(e.dragHandler,e),e.keyHandler=a.proxy(e.keyHandler,e),e.autoPlayIterator=a.proxy(e.autoPlayIterator,e),e.instanceUid=b++,e.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,e.init()}var b=0;return c}(),b.prototype.addSlide=function(b,c,d){var e=this;if("boolean"==typeof c)d=c,c=null;else if(0>c||c>=e.slideCount)return!1;e.unload(),"number"==typeof c?0===c&&0===e.$slides.length?a(b).appendTo(e.$slideTrack):d?a(b).insertBefore(e.$slides.eq(c)):a(b).insertAfter(e.$slides.eq(c)):d===!0?a(b).prependTo(e.$slideTrack):a(b).appendTo(e.$slideTrack),e.$slides=e.$slideTrack.children(this.options.slide),e.$slideTrack.children(this.options.slide).detach(),e.$slideTrack.append(e.$slides),e.$slides.each(function(b,c){a(c).attr("index",b)}),e.$slidesCache=e.$slides,e.reinit()},b.prototype.animateSlide=function(b,c){var d={},e=this;if(1===e.options.slidesToShow&&e.options.adaptiveHeight===!0&&e.options.vertical===!1){var f=e.$slides.eq(e.currentSlide).outerHeight(!0);e.$list.animate({height:f},e.options.speed)}e.options.rtl===!0&&e.options.vertical===!1&&(b=-b),e.transformsEnabled===!1?e.options.vertical===!1?e.$slideTrack.animate({left:b},e.options.speed,e.options.easing,c):e.$slideTrack.animate({top:b},e.options.speed,e.options.easing,c):e.cssTransitions===!1?a({animStart:e.currentLeft}).animate({animStart:b},{duration:e.options.speed,easing:e.options.easing,step:function(a){e.options.vertical===!1?(d[e.animType]="translate("+a+"px, 0px)",e.$slideTrack.css(d)):(d[e.animType]="translate(0px,"+a+"px)",e.$slideTrack.css(d))},complete:function(){c&&c.call()}}):(e.applyTransition(),d[e.animType]=e.options.vertical===!1?"translate3d("+b+"px, 0px, 0px)":"translate3d(0px,"+b+"px, 0px)",e.$slideTrack.css(d),c&&setTimeout(function(){e.disableTransition(),c.call()},e.options.speed))},b.prototype.asNavFor=function(b){var c=this,d=null!=c.options.asNavFor?a(c.options.asNavFor).getSlick():null;null!=d&&d.slideHandler(b,!0)},b.prototype.applyTransition=function(a){var b=this,c={};c[b.transitionType]=b.options.fade===!1?b.transformType+" "+b.options.speed+"ms "+b.options.cssEase:"opacity "+b.options.speed+"ms "+b.options.cssEase,b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.autoPlay=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer),a.slideCount>a.options.slidesToShow&&a.paused!==!0&&(a.autoPlayTimer=setInterval(a.autoPlayIterator,a.options.autoplaySpeed))},b.prototype.autoPlayClear=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer)},b.prototype.autoPlayIterator=function(){var a=this;a.options.infinite===!1?1===a.direction?(a.currentSlide+1===a.slideCount-1&&(a.direction=0),a.slideHandler(a.currentSlide+a.options.slidesToScroll)):(0===a.currentSlide-1&&(a.direction=1),a.slideHandler(a.currentSlide-a.options.slidesToScroll)):a.slideHandler(a.currentSlide+a.options.slidesToScroll)},b.prototype.buildArrows=function(){var b=this;b.options.arrows===!0&&b.slideCount>b.options.slidesToShow&&(b.$prevArrow=a(b.options.prevArrow),b.$nextArrow=a(b.options.nextArrow),b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.appendTo(b.options.appendArrows),b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.appendTo(b.options.appendArrows),b.options.infinite!==!0&&b.$prevArrow.addClass("slick-disabled"))},b.prototype.buildDots=function(){var c,d,b=this;if(b.options.dots===!0&&b.slideCount>b.options.slidesToShow){for(d='<ul class="'+b.options.dotsClass+'">',c=0;c<=b.getDotCount();c+=1)d+="<li>"+b.options.customPaging.call(this,b,c)+"</li>";d+="</ul>",b.$dots=a(d).appendTo(b.options.appendDots),b.$dots.find("li").first().addClass("slick-active")}},b.prototype.buildOut=function(){var b=this;b.$slides=b.$slider.children(b.options.slide+":not(.slick-cloned)").addClass("slick-slide"),b.slideCount=b.$slides.length,b.$slides.each(function(b,c){a(c).attr("index",b)}),b.$slidesCache=b.$slides,b.$slider.addClass("slick-slider"),b.$slideTrack=0===b.slideCount?a('<div class="slick-track"/>').appendTo(b.$slider):b.$slides.wrapAll('<div class="slick-track"/>').parent(),b.$list=b.$slideTrack.wrap('<div class="slick-list"/>').parent(),b.$slideTrack.css("opacity",0),b.options.centerMode===!0&&(b.options.slidesToScroll=1,0===b.options.slidesToShow%2&&(b.options.slidesToShow=3)),a("img[data-lazy]",b.$slider).not("[src]").addClass("slick-loading"),b.setupInfinite(),b.buildArrows(),b.buildDots(),b.updateDots(),b.options.accessibility===!0&&b.$list.prop("tabIndex",0),b.setSlideClasses("number"==typeof this.currentSlide?this.currentSlide:0),b.options.draggable===!0&&b.$list.addClass("draggable")},b.prototype.checkResponsive=function(){var c,d,b=this;if(b.originalSettings.responsive&&b.originalSettings.responsive.length>-1&&null!==b.originalSettings.responsive){d=null;for(c in b.breakpoints)b.breakpoints.hasOwnProperty(c)&&a(window).width()<b.breakpoints[c]&&(d=b.breakpoints[c]);null!==d?null!==b.activeBreakpoint?d!==b.activeBreakpoint&&(b.activeBreakpoint=d,b.options=a.extend({},b.options,b.breakpointSettings[d]),b.refresh()):(b.activeBreakpoint=d,b.options=a.extend({},b.options,b.breakpointSettings[d]),b.refresh()):null!==b.activeBreakpoint&&(b.activeBreakpoint=null,b.options=a.extend({},b.options,b.originalSettings),b.refresh())}},b.prototype.changeSlide=function(b){var e,f,g,c=this,d=a(b.target);switch(d.is("a")&&b.preventDefault(),g=0!==c.slideCount%c.options.slidesToScroll,e=g?0:(c.slideCount-c.currentSlide)%c.options.slidesToScroll,b.data.message){case"previous":f=0===e?c.options.slidesToScroll:c.options.slidesToShow-e,c.slideCount>c.options.slidesToShow&&c.slideHandler(c.currentSlide-f);break;case"next":f=0===e?c.options.slidesToScroll:e,c.slideCount>c.options.slidesToShow&&c.slideHandler(c.currentSlide+f);break;case"index":var h=0===b.data.index?0:b.data.index||a(b.target).parent().index()*c.options.slidesToScroll;c.slideHandler(h);default:return!1}},b.prototype.destroy=function(){var b=this;b.autoPlayClear(),b.touchObject={},a(".slick-cloned",b.$slider).remove(),b.$dots&&b.$dots.remove(),b.$prevArrow&&(b.$prevArrow.remove(),b.$nextArrow.remove()),b.$slides.parent().hasClass("slick-track")&&b.$slides.unwrap().unwrap(),b.$slides.removeClass("slick-slide slick-active slick-visible").css("width",""),b.$slider.removeClass("slick-slider"),b.$slider.removeClass("slick-initialized"),b.$list.off(".slick"),a(window).off(".slick-"+b.instanceUid),a(document).off(".slick-"+b.instanceUid)},b.prototype.disableTransition=function(a){var b=this,c={};c[b.transitionType]="",b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.fadeSlide=function(a,b,c){var d=this;d.cssTransitions===!1?(d.$slides.eq(b).css({zIndex:1e3}),d.$slides.eq(b).animate({opacity:1},d.options.speed,d.options.easing,c),d.$slides.eq(a).animate({opacity:0},d.options.speed,d.options.easing)):(d.applyTransition(b),d.applyTransition(a),d.$slides.eq(b).css({opacity:1,zIndex:1e3}),d.$slides.eq(a).css({opacity:0}),c&&setTimeout(function(){d.disableTransition(b),d.disableTransition(a),c.call()},d.options.speed))},b.prototype.filterSlides=function(a){var b=this;null!==a&&(b.unload(),b.$slideTrack.children(this.options.slide).detach(),b.$slidesCache.filter(a).appendTo(b.$slideTrack),b.reinit())},b.prototype.getCurrent=function(){var a=this;return a.currentSlide},b.prototype.getDotCount=function(){var e,a=this,b=0,c=0,d=0;for(e=a.options.infinite===!0?a.slideCount+a.options.slidesToShow-a.options.slidesToScroll:a.slideCount;e>b;)d++,c+=a.options.slidesToScroll,b=c+a.options.slidesToShow;return d},b.prototype.getLeft=function(a){var c,d,g,b=this,e=0;return b.slideOffset=0,d=b.$slides.first().outerHeight(),b.options.infinite===!0?(b.slideCount>b.options.slidesToShow&&(b.slideOffset=-1*b.slideWidth*b.options.slidesToShow,e=-1*d*b.options.slidesToShow),0!==b.slideCount%b.options.slidesToScroll&&a+b.options.slidesToScroll>b.slideCount&&b.slideCount>b.options.slidesToShow&&(b.slideOffset=-1*b.slideCount%b.options.slidesToShow*b.slideWidth,e=-1*b.slideCount%b.options.slidesToShow*d)):0!==b.slideCount%b.options.slidesToShow&&a+b.options.slidesToScroll>b.slideCount&&b.slideCount>b.options.slidesToShow&&(b.slideOffset=b.options.slidesToShow*b.slideWidth-b.slideCount%b.options.slidesToShow*b.slideWidth,e=b.slideCount%b.options.slidesToShow*d),b.slideCount<=b.options.slidesToShow&&(b.slideOffset=0,e=0),b.options.centerMode===!0&&b.options.infinite===!0?b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)-b.slideWidth:b.options.centerMode===!0&&(b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)),c=b.options.vertical===!1?-1*a*b.slideWidth+b.slideOffset:-1*a*d+e,b.options.variableWidth===!0&&(g=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow),c=g[0]?-1*g[0].offsetLeft:0,b.options.centerMode===!0&&(g=b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow+1),c=g[0]?-1*g[0].offsetLeft:0,c+=(b.$list.width()-g.outerWidth())/2)),c},b.prototype.init=function(){var b=this;a(b.$slider).hasClass("slick-initialized")||(a(b.$slider).addClass("slick-initialized"),b.buildOut(),b.setProps(),b.startLoad(),b.loadSlider(),b.initializeEvents(),b.checkResponsive()),null!==b.options.onInit&&b.options.onInit.call(this,b)},b.prototype.initArrowEvents=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.on("click.slick",{message:"previous"},a.changeSlide),a.$nextArrow.on("click.slick",{message:"next"},a.changeSlide))},b.prototype.initDotEvents=function(){var b=this;b.options.dots===!0&&b.slideCount>b.options.slidesToShow&&a("li",b.$dots).on("click.slick",{message:"index"},b.changeSlide),b.options.dots===!0&&b.options.pauseOnDotsHover===!0&&b.options.autoplay===!0&&a("li",b.$dots).on("mouseenter.slick",b.autoPlayClear).on("mouseleave.slick",b.autoPlay)},b.prototype.initializeEvents=function(){var b=this;b.initArrowEvents(),b.initDotEvents(),b.$list.on("touchstart.slick mousedown.slick",{action:"start"},b.swipeHandler),b.$list.on("touchmove.slick mousemove.slick",{action:"move"},b.swipeHandler),b.$list.on("touchend.slick mouseup.slick",{action:"end"},b.swipeHandler),b.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},b.swipeHandler),b.options.pauseOnHover===!0&&b.options.autoplay===!0&&(b.$list.on("mouseenter.slick",b.autoPlayClear),b.$list.on("mouseleave.slick",b.autoPlay)),b.options.accessibility===!0&&b.$list.on("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.options.slide,b.$slideTrack).on("click.slick",b.selectHandler),a(window).on("orientationchange.slick.slick-"+b.instanceUid,function(){b.checkResponsive(),b.setPosition()}),a(window).on("resize.slick.slick-"+b.instanceUid,function(){a(window).width()!==b.windowWidth&&(clearTimeout(b.windowDelay),b.windowDelay=window.setTimeout(function(){b.windowWidth=a(window).width(),b.checkResponsive(),b.setPosition()},50))}),a(window).on("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).on("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.initUI=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.show(),a.$nextArrow.show()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.show(),a.options.autoplay===!0&&a.autoPlay()},b.prototype.keyHandler=function(a){var b=this;37===a.keyCode?b.changeSlide({data:{message:"previous"}}):39===a.keyCode&&b.changeSlide({data:{message:"next"}})},b.prototype.lazyLoad=function(){function g(b){a("img[data-lazy]",b).each(function(){var b=a(this),c=a(this).attr("data-lazy");b.load(function(){b.animate({opacity:1},200)}).css({opacity:0}).attr("src",c).removeAttr("data-lazy").removeClass("slick-loading")})}var c,d,e,f,b=this;b.options.centerMode===!0?b.options.infinite===!0?(e=b.currentSlide+(b.options.slidesToShow/2+1),f=e+b.options.slidesToShow+2):(e=Math.max(0,b.currentSlide-(b.options.slidesToShow/2+1)),f=2+(b.options.slidesToShow/2+1)+b.currentSlide):(e=b.options.infinite?b.options.slidesToShow+b.currentSlide:b.currentSlide,f=e+b.options.slidesToShow,b.options.fade===!0&&(e>0&&e--,f<=b.slideCount&&f++)),c=b.$slider.find(".slick-slide").slice(e,f),g(c),b.slideCount<=b.options.slidesToShow?(d=b.$slider.find(".slick-slide"),g(d)):b.currentSlide>=b.slideCount-b.options.slidesToShow?(d=b.$slider.find(".slick-cloned").slice(0,b.options.slidesToShow),g(d)):0===b.currentSlide&&(d=b.$slider.find(".slick-cloned").slice(-1*b.options.slidesToShow),g(d))},b.prototype.loadSlider=function(){var a=this;a.setPosition(),a.$slideTrack.css({opacity:1}),a.$slider.removeClass("slick-loading"),a.initUI(),"progressive"===a.options.lazyLoad&&a.progressiveLazyLoad()},b.prototype.postSlide=function(a){var b=this;null!==b.options.onAfterChange&&b.options.onAfterChange.call(this,b,a),b.animating=!1,b.setPosition(),b.swipeLeft=null,b.options.autoplay===!0&&b.paused===!1&&b.autoPlay()},b.prototype.progressiveLazyLoad=function(){var c,d,b=this;c=a("img[data-lazy]").length,c>0&&(d=a("img[data-lazy]",b.$slider).first(),d.attr("src",d.attr("data-lazy")).removeClass("slick-loading").load(function(){d.removeAttr("data-lazy"),b.progressiveLazyLoad()}).error(function(){d.removeAttr("data-lazy"),b.progressiveLazyLoad()}))},b.prototype.refresh=function(){var b=this,c=b.currentSlide;b.destroy(),a.extend(b,b.initials),b.currentSlide=c,b.init()},b.prototype.reinit=function(){var b=this;b.$slides=b.$slideTrack.children(b.options.slide).addClass("slick-slide"),b.slideCount=b.$slides.length,b.currentSlide>=b.slideCount&&0!==b.currentSlide&&(b.currentSlide=b.currentSlide-b.options.slidesToScroll),b.slideCount<=b.options.slidesToShow&&(b.currentSlide=0),b.setProps(),b.setupInfinite(),b.buildArrows(),b.updateArrows(),b.initArrowEvents(),b.buildDots(),b.updateDots(),b.initDotEvents(),b.options.focusOnSelect===!0&&a(b.options.slide,b.$slideTrack).on("click.slick",b.selectHandler),b.setSlideClasses(0),b.setPosition(),null!==b.options.onReInit&&b.options.onReInit.call(this,b)},b.prototype.removeSlide=function(a,b){var c=this;return"boolean"==typeof a?(b=a,a=b===!0?0:c.slideCount-1):a=b===!0?--a:a,c.slideCount<1||0>a||a>c.slideCount-1?!1:(c.unload(),c.$slideTrack.children(this.options.slide).eq(a).remove(),c.$slides=c.$slideTrack.children(this.options.slide),c.$slideTrack.children(this.options.slide).detach(),c.$slideTrack.append(c.$slides),c.$slidesCache=c.$slides,c.reinit(),void 0)},b.prototype.setCSS=function(a){var d,e,b=this,c={};b.options.rtl===!0&&(a=-a),d="left"==b.positionProp?a+"px":"0px",e="top"==b.positionProp?a+"px":"0px",c[b.positionProp]=a,b.transformsEnabled===!1?b.$slideTrack.css(c):(c={},b.cssTransitions===!1?(c[b.animType]="translate("+d+", "+e+")",b.$slideTrack.css(c)):(c[b.animType]="translate3d("+d+", "+e+", 0px)",b.$slideTrack.css(c)))},b.prototype.setDimensions=function(){var b=this;b.options.vertical===!1?b.options.centerMode===!0&&b.$list.css({padding:"0px "+b.options.centerPadding}):(b.$list.height(b.$slides.first().outerHeight(!0)*b.options.slidesToShow),b.options.centerMode===!0&&b.$list.css({padding:b.options.centerPadding+" 0px"})),b.listWidth=b.$list.width(),b.listHeight=b.$list.height(),b.options.vertical===!1&&b.options.variableWidth===!1?(b.slideWidth=Math.ceil(b.listWidth/b.options.slidesToShow),b.$slideTrack.width(Math.ceil(b.slideWidth*b.$slideTrack.children(".slick-slide").length))):b.options.variableWidth===!0?(b.slideWidth=0,b.$slideTrack.children(".slick-slide").each(function(){b.slideWidth+=Math.ceil(a(this).outerWidth(!0))}),b.$slideTrack.width(Math.ceil(b.slideWidth)+1)):(b.slideWidth=Math.ceil(b.listWidth),b.$slideTrack.height(Math.ceil(b.$slides.first().outerHeight(!0)*b.$slideTrack.children(".slick-slide").length)));var c=b.$slides.first().outerWidth(!0)-b.$slides.first().width();b.options.variableWidth===!1&&b.$slideTrack.children(".slick-slide").width(b.slideWidth-c)},b.prototype.setFade=function(){var c,b=this;b.$slides.each(function(d,e){c=-1*b.slideWidth*d,a(e).css({position:"relative",left:c,top:0,zIndex:800,opacity:0})}),b.$slides.eq(b.currentSlide).css({zIndex:900,opacity:1})},b.prototype.setHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.css("height",b)}},b.prototype.setPosition=function(){var a=this;a.setDimensions(),a.setHeight(),a.options.fade===!1?a.setCSS(a.getLeft(a.currentSlide)):a.setFade()},b.prototype.setProps=function(){var a=this,b=document.body.style;a.positionProp=a.options.vertical===!0?"top":"left","top"===a.positionProp?a.$slider.addClass("slick-vertical"):a.$slider.removeClass("slick-vertical"),(void 0!==b.WebkitTransition||void 0!==b.MozTransition||void 0!==b.msTransition)&&a.options.useCSS===!0&&(a.cssTransitions=!0),void 0!==b.OTransform&&(a.animType="OTransform",a.transformType="-o-transform",a.transitionType="OTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.MozTransform&&(a.animType="MozTransform",a.transformType="-moz-transform",a.transitionType="MozTransition",void 0===b.perspectiveProperty&&void 0===b.MozPerspective&&(a.animType=!1)),void 0!==b.webkitTransform&&(a.animType="webkitTransform",a.transformType="-webkit-transform",a.transitionType="webkitTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.msTransform&&(a.animType="msTransform",a.transformType="-ms-transform",a.transitionType="msTransition",void 0===b.msTransform&&(a.animType=!1)),void 0!==b.transform&&a.animType!==!1&&(a.animType="transform",a.transformType="transform",a.transitionType="transition"),a.transformsEnabled=null!==a.animType&&a.animType!==!1},b.prototype.setSlideClasses=function(a){var c,d,e,f,b=this;b.$slider.find(".slick-slide").removeClass("slick-active").removeClass("slick-center"),d=b.$slider.find(".slick-slide"),b.options.centerMode===!0?(c=Math.floor(b.options.slidesToShow/2),b.options.infinite===!0&&(a>=c&&a<=b.slideCount-1-c?b.$slides.slice(a-c,a+c+1).addClass("slick-active"):(e=b.options.slidesToShow+a,d.slice(e-c+1,e+c+2).addClass("slick-active")),0===a?d.eq(d.length-1-b.options.slidesToShow).addClass("slick-center"):a===b.slideCount-1&&d.eq(b.options.slidesToShow).addClass("slick-center")),b.$slides.eq(a).addClass("slick-center")):a>=0&&a<=b.slideCount-b.options.slidesToShow?b.$slides.slice(a,a+b.options.slidesToShow).addClass("slick-active"):d.length<=b.options.slidesToShow?d.addClass("slick-active"):(f=b.slideCount%b.options.slidesToShow,e=b.options.infinite===!0?b.options.slidesToShow+a:a,b.options.slidesToShow==b.options.slidesToScroll&&b.slideCount-a<b.options.slidesToShow?d.slice(e-(b.options.slidesToShow-f),e+f).addClass("slick-active"):d.slice(e,e+b.options.slidesToShow).addClass("slick-active")),"ondemand"===b.options.lazyLoad&&b.lazyLoad()},b.prototype.setupInfinite=function(){var c,d,e,b=this;if((b.options.fade===!0||b.options.vertical===!0)&&(b.options.centerMode=!1),b.options.infinite===!0&&b.options.fade===!1&&(d=null,b.slideCount>b.options.slidesToShow)){for(e=b.options.centerMode===!0?b.options.slidesToShow+1:b.options.slidesToShow,c=b.slideCount;c>b.slideCount-e;c-=1)d=c-1,a(b.$slides[d]).clone(!0).attr("id","").attr("index",d-b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");for(c=0;e>c;c+=1)d=c,a(b.$slides[d]).clone(!0).attr("id","").attr("index",d+b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");b.$slideTrack.find(".slick-cloned").find("[id]").each(function(){a(this).attr("id","")})}},b.prototype.selectHandler=function(b){var c=this,d=parseInt(a(b.target).parents(".slick-slide").attr("index"));d||(d=0),c.slideCount<=c.options.slidesToShow||c.slideHandler(d)},b.prototype.slideHandler=function(a,b){var c,d,e,f,g,h=null,i=this;return b=b||!1,i.animating===!0&&i.options.waitForAnimate===!0?!1:(b===!1&&i.asNavFor(a),c=a,h=i.getLeft(c),f=i.getLeft(i.currentSlide),g=0!==i.slideCount%i.options.slidesToScroll?i.options.slidesToScroll:0,i.currentLeft=null===i.swipeLeft?f:i.swipeLeft,i.options.infinite===!1&&i.options.centerMode===!1&&(0>a||a>i.slideCount-i.options.slidesToShow+g)?(i.options.fade===!1&&(c=i.currentSlide,i.animateSlide(f,function(){i.postSlide(c)})),!1):i.options.infinite===!1&&i.options.centerMode===!0&&(0>a||a>i.slideCount-i.options.slidesToScroll)?(i.options.fade===!1&&(c=i.currentSlide,i.animateSlide(f,function(){i.postSlide(c)})),!1):(i.options.autoplay===!0&&clearInterval(i.autoPlayTimer),d=0>c?0!==i.slideCount%i.options.slidesToScroll?i.slideCount-i.slideCount%i.options.slidesToScroll:i.slideCount+c:c>=i.slideCount?0!==i.slideCount%i.options.slidesToScroll?0:c-i.slideCount:c,i.animating=!0,null!==i.options.onBeforeChange&&a!==i.currentSlide&&i.options.onBeforeChange.call(this,i,i.currentSlide,d),e=i.currentSlide,i.currentSlide=d,i.setSlideClasses(i.currentSlide),i.updateDots(),i.updateArrows(),i.options.fade===!0?(i.fadeSlide(e,d,function(){i.postSlide(d)}),!1):(i.animateSlide(h,function(){i.postSlide(d)}),void 0)))},b.prototype.startLoad=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.hide(),a.$nextArrow.hide()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.hide(),a.$slider.addClass("slick-loading")},b.prototype.swipeDirection=function(){var a,b,c,d,e=this;return a=e.touchObject.startX-e.touchObject.curX,b=e.touchObject.startY-e.touchObject.curY,c=Math.atan2(b,a),d=Math.round(180*c/Math.PI),0>d&&(d=360-Math.abs(d)),45>=d&&d>=0?"left":360>=d&&d>=315?"left":d>=135&&225>=d?"right":"vertical"},b.prototype.swipeEnd=function(b){var d,e,c=this;if(c.dragging=!1,void 0===c.touchObject.curX)return!1;if(c.touchObject.swipeLength>=c.touchObject.minSwipe)switch(a(b.target).on("click.slick",function(b){b.stopImmediatePropagation(),b.stopPropagation(),b.preventDefault(),a(b.target).off("click.slick")}),c.options.swipeToSlide===!0?(e=Math.round(c.touchObject.swipeLength/c.slideWidth),d=e):d=c.options.slidesToScroll,c.swipeDirection()){case"left":c.slideHandler(c.currentSlide+d),c.touchObject={};break;case"right":c.slideHandler(c.currentSlide-d),c.touchObject={}}else c.touchObject.startX!==c.touchObject.curX&&(c.slideHandler(c.currentSlide),c.touchObject={})},b.prototype.swipeHandler=function(a){var b=this;if(!(b.options.swipe===!1||"ontouchend"in document&&b.options.swipe===!1||b.options.draggable===!1&&-1!==a.type.indexOf("mouse")))switch(b.touchObject.fingerCount=a.originalEvent&&void 0!==a.originalEvent.touches?a.originalEvent.touches.length:1,b.touchObject.minSwipe=b.listWidth/b.options.touchThreshold,a.data.action){case"start":b.swipeStart(a);break;case"move":b.swipeMove(a);break;case"end":b.swipeEnd(a)}},b.prototype.swipeMove=function(a){var c,d,e,f,b=this;return f=void 0!==a.originalEvent?a.originalEvent.touches:null,c=b.getLeft(b.currentSlide),!b.dragging||f&&1!==f.length?!1:(b.touchObject.curX=void 0!==f?f[0].pageX:a.clientX,b.touchObject.curY=void 0!==f?f[0].pageY:a.clientY,b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curX-b.touchObject.startX,2))),d=b.swipeDirection(),"vertical"!==d?(void 0!==a.originalEvent&&b.touchObject.swipeLength>4&&a.preventDefault(),e=b.touchObject.curX>b.touchObject.startX?1:-1,b.swipeLeft=b.options.vertical===!1?c+b.touchObject.swipeLength*e:c+b.touchObject.swipeLength*(b.$list.height()/b.listWidth)*e,b.options.fade===!0||b.options.touchMove===!1?!1:b.animating===!0?(b.swipeLeft=null,!1):(b.setCSS(b.swipeLeft),void 0)):void 0)},b.prototype.swipeStart=function(a){var c,b=this;return 1!==b.touchObject.fingerCount||b.slideCount<=b.options.slidesToShow?(b.touchObject={},!1):(void 0!==a.originalEvent&&void 0!==a.originalEvent.touches&&(c=a.originalEvent.touches[0]),b.touchObject.startX=b.touchObject.curX=void 0!==c?c.pageX:a.clientX,b.touchObject.startY=b.touchObject.curY=void 0!==c?c.pageY:a.clientY,b.dragging=!0,void 0)},b.prototype.unfilterSlides=function(){var a=this;null!==a.$slidesCache&&(a.unload(),a.$slideTrack.children(this.options.slide).detach(),a.$slidesCache.appendTo(a.$slideTrack),a.reinit())},b.prototype.unload=function(){var b=this;a(".slick-cloned",b.$slider).remove(),b.$dots&&b.$dots.remove(),b.$prevArrow&&(b.$prevArrow.remove(),b.$nextArrow.remove()),b.$slides.removeClass("slick-slide slick-active slick-visible").css("width","")},b.prototype.updateArrows=function(){var a=this;a.options.arrows===!0&&a.options.infinite!==!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.removeClass("slick-disabled"),a.$nextArrow.removeClass("slick-disabled"),0===a.currentSlide?(a.$prevArrow.addClass("slick-disabled"),a.$nextArrow.removeClass("slick-disabled")):a.currentSlide>=a.slideCount-a.options.slidesToShow&&(a.$nextArrow.addClass("slick-disabled"),a.$prevArrow.removeClass("slick-disabled")))},b.prototype.updateDots=function(){var a=this;null!==a.$dots&&(a.$dots.find("li").removeClass("slick-active"),a.$dots.find("li").eq(Math.floor(a.currentSlide/a.options.slidesToScroll)).addClass("slick-active"))},a.fn.slick=function(a){var c=this;return c.each(function(c,d){d.slick=new b(d,a)})},a.fn.slickAdd=function(a,b,c){var d=this;return d.each(function(d,e){e.slick.addSlide(a,b,c)})},a.fn.slickCurrentSlide=function(){var a=this;return a.get(0).slick.getCurrent()},a.fn.slickFilter=function(a){var b=this;return b.each(function(b,c){c.slick.filterSlides(a)})},a.fn.slickGoTo=function(a){var b=this;return b.each(function(b,c){c.slick.changeSlide({data:{message:"index",index:parseInt(a)}})})},a.fn.slickNext=function(){var a=this;return a.each(function(a,b){b.slick.changeSlide({data:{message:"next"}})})},a.fn.slickPause=function(){var a=this;return a.each(function(a,b){b.slick.autoPlayClear(),b.slick.paused=!0})},a.fn.slickPlay=function(){var a=this;return a.each(function(a,b){b.slick.paused=!1,b.slick.autoPlay()})},a.fn.slickPrev=function(){var a=this;return a.each(function(a,b){b.slick.changeSlide({data:{message:"previous"}})})},a.fn.slickRemove=function(a,b){var c=this;return c.each(function(c,d){d.slick.removeSlide(a,b)})},a.fn.slickGetOption=function(a){var b=this;return b.get(0).slick.options[a]},a.fn.slickSetOption=function(a,b,c){var d=this;return d.each(function(d,e){e.slick.options[a]=b,c===!0&&(e.slick.unload(),e.slick.reinit())})},a.fn.slickUnfilter=function(){var a=this;return a.each(function(a,b){b.slick.unfilterSlides()})},a.fn.unslick=function(){var a=this;return a.each(function(a,b){b.slick&&b.slick.destroy()})},a.fn.getSlick=function(){var a=null,b=this;return b.each(function(b,c){a=c.slick}),a}});})(jQuery);
	// - Mousewheel
	(function(factory){if(typeof define==='function'&&define.amd){define(['jquery'],factory)}else if(typeof exports==='object'){module.exports=factory}else{factory(jQuery)}}(function($){var toFix=['wheel','mousewheel','DOMMouseScroll','MozMousePixelScroll'],toBind=('onwheel'in document||document.documentMode>=9)?['wheel']:['mousewheel','DomMouseScroll','MozMousePixelScroll'],slice=Array.prototype.slice,nullLowestDeltaTimeout,lowestDelta;if($.event.fixHooks){for(var i=toFix.length;i;){$.event.fixHooks[toFix[--i]]=$.event.mouseHooks}}var special=$.event.special.mousewheel={version:'3.1.9',setup:function(){if(this.addEventListener){for(var i=toBind.length;i;){this.addEventListener(toBind[--i],handler,false)}}else{this.onmousewheel=handler}$.data(this,'mousewheel-line-height',special.getLineHeight(this));$.data(this,'mousewheel-page-height',special.getPageHeight(this))},teardown:function(){if(this.removeEventListener){for(var i=toBind.length;i;){this.removeEventListener(toBind[--i],handler,false)}}else{this.onmousewheel=null}},getLineHeight:function(elem){return parseInt($(elem)['offsetParent'in $.fn?'offsetParent':'parent']().css('fontSize'),10)},getPageHeight:function(elem){return $(elem).height()},settings:{adjustOldDeltas:true}};$.fn.extend({mousewheel:function(fn){return fn?this.bind('mousewheel',fn):this.trigger('mousewheel')},unmousewheel:function(fn){return this.unbind('mousewheel',fn)}});function handler(event){var orgEvent=event||window.event,args=slice.call(arguments,1),delta=0,deltaX=0,deltaY=0,absDelta=0;event=$.event.fix(orgEvent);event.type='mousewheel';if('detail'in orgEvent){deltaY=orgEvent.detail*-1}if('wheelDelta'in orgEvent){deltaY=orgEvent.wheelDelta}if('wheelDeltaY'in orgEvent){deltaY=orgEvent.wheelDeltaY}if('wheelDeltaX'in orgEvent){deltaX=orgEvent.wheelDeltaX*-1}if('axis'in orgEvent&&orgEvent.axis===orgEvent.HORIZONTAL_AXIS){deltaX=deltaY*-1;deltaY=0}delta=deltaY===0?deltaX:deltaY;if('deltaY'in orgEvent){deltaY=orgEvent.deltaY*-1;delta=deltaY}if('deltaX'in orgEvent){deltaX=orgEvent.deltaX;if(deltaY===0){delta=deltaX*-1}}if(deltaY===0&&deltaX===0){return}if(orgEvent.deltaMode===1){var lineHeight=$.data(this,'mousewheel-line-height');delta*=lineHeight;deltaY*=lineHeight;deltaX*=lineHeight}else if(orgEvent.deltaMode===2){var pageHeight=$.data(this,'mousewheel-page-height');delta*=pageHeight;deltaY*=pageHeight;deltaX*=pageHeight}absDelta=Math.max(Math.abs(deltaY),Math.abs(deltaX));if(!lowestDelta||absDelta<lowestDelta){lowestDelta=absDelta;if(shouldAdjustOldDeltas(orgEvent,absDelta)){lowestDelta/=40}}if(shouldAdjustOldDeltas(orgEvent,absDelta)){delta/=40;deltaX/=40;deltaY/=40}delta=Math[delta>=1?'floor':'ceil'](delta/lowestDelta);deltaX=Math[deltaX>=1?'floor':'ceil'](deltaX/lowestDelta);deltaY=Math[deltaY>=1?'floor':'ceil'](deltaY/lowestDelta);event.deltaX=deltaX;event.deltaY=deltaY;event.deltaFactor=lowestDelta;event.deltaMode=0;args.unshift(event,delta,deltaX,deltaY);if(nullLowestDeltaTimeout){clearTimeout(nullLowestDeltaTimeout)}nullLowestDeltaTimeout=setTimeout(nullLowestDelta,200);return($.event.dispatch||$.event.handle).apply(this,args)}function nullLowestDelta(){lowestDelta=null}function shouldAdjustOldDeltas(orgEvent,absDelta){return special.settings.adjustOldDeltas&&orgEvent.type==='mousewheel'&&absDelta%120===0}}));
	// - Perfect Scroll
	(function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?e(require("jquery")):e(jQuery)})(function(e){"use strict";var t={wheelSpeed:10,wheelPropagation:!1,minScrollbarLength:null,maxScrollbarLength:null,useBothWheelAxes:!1,useKeyboard:!0,suppressScrollX:!1,suppressScrollY:!1,scrollXMarginOffset:0,scrollYMarginOffset:0,includePadding:!1},o=function(){var e=0;return function(){var t=e;return e+=1,".perfect-scrollbar-"+t}}();e.fn.perfectScrollbar=function(n,r){return this.each(function(){var l=e.extend(!0,{},t),s=e(this);if("object"==typeof n?e.extend(!0,l,n):r=n,"update"===r)return s.data("perfect-scrollbar-update")&&s.data("perfect-scrollbar-update")(),s;if("destroy"===r)return s.data("perfect-scrollbar-destroy")&&s.data("perfect-scrollbar-destroy")(),s;if(s.data("perfect-scrollbar"))return s.data("perfect-scrollbar");s.addClass("ps-container");var a,i,c,u,d,p,f,h,v,b,g=e("<div class='ps-scrollbar-x-rail'></div>").appendTo(s),m=e("<div class='ps-scrollbar-y-rail'></div>").appendTo(s),w=e("<div class='ps-scrollbar-x'></div>").appendTo(g),L=e("<div class='ps-scrollbar-y'></div>").appendTo(m),T=parseInt(g.css("bottom"),10),y=T===T,x=y?null:parseInt(g.css("top"),10),S=parseInt(m.css("right"),10),I=S===S,P=I?null:parseInt(m.css("left"),10),D="rtl"===s.css("direction"),M=o(),C=parseInt(g.css("borderLeftWidth"),10)+parseInt(g.css("borderRightWidth"),10),X=parseInt(g.css("borderTopWidth"),10)+parseInt(g.css("borderBottomWidth"),10),Y=function(e,t){var o=e+t,n=u-v;b=0>o?0:o>n?n:o;var r=parseInt(b*(p-u)/(u-v),10);s.scrollTop(r),y?g.css({bottom:T-r}):g.css({top:x+r})},k=function(e,t){var o=e+t,n=c-f;h=0>o?0:o>n?n:o;var r=parseInt(h*(d-c)/(c-f),10);s.scrollLeft(r),I?m.css({right:S-r}):m.css({left:P+r})},W=function(e){return l.minScrollbarLength&&(e=Math.max(e,l.minScrollbarLength)),l.maxScrollbarLength&&(e=Math.min(e,l.maxScrollbarLength)),e},j=function(){var e={width:c,display:a?"inherit":"none"};e.left=D?s.scrollLeft()+c-d:s.scrollLeft(),y?e.bottom=T-s.scrollTop():e.top=x+s.scrollTop(),g.css(e);var t={top:s.scrollTop(),height:u,display:i?"inherit":"none"};I?t.right=D?d-s.scrollLeft()-S-L.outerWidth():S-s.scrollLeft():t.left=D?s.scrollLeft()+2*c-d-P-L.outerWidth():P+s.scrollLeft(),m.css(t),w.css({left:h,width:f-C}),L.css({top:b,height:v-X}),a?s.addClass("ps-active-x"):s.removeClass("ps-active-x"),i?s.addClass("ps-active-y"):s.removeClass("ps-active-y")},O=function(){c=l.includePadding?s.innerWidth():s.width(),u=l.includePadding?s.innerHeight():s.height(),d=s.prop("scrollWidth"),p=s.prop("scrollHeight"),!l.suppressScrollX&&d>c+l.scrollXMarginOffset?(a=!0,f=W(parseInt(c*c/d,10)),h=parseInt(s.scrollLeft()*(c-f)/(d-c),10)):(a=!1,f=0,h=0,s.scrollLeft(0)),!l.suppressScrollY&&p>u+l.scrollYMarginOffset?(i=!0,v=W(parseInt(u*u/p,10)),b=parseInt(s.scrollTop()*(u-v)/(p-u),10)):(i=!1,v=0,b=0,s.scrollTop(0)),b>=u-v&&(b=u-v),h>=c-f&&(h=c-f),j()},E=function(){var t,o;w.bind("mousedown"+M,function(e){o=e.pageX,t=w.position().left,g.addClass("in-scrolling"),e.stopPropagation(),e.preventDefault()}),e(document).bind("mousemove"+M,function(e){g.hasClass("in-scrolling")&&(k(t,e.pageX-o),e.stopPropagation(),e.preventDefault())}),e(document).bind("mouseup"+M,function(){g.hasClass("in-scrolling")&&g.removeClass("in-scrolling")}),t=o=null},H=function(){var t,o;L.bind("mousedown"+M,function(e){o=e.pageY,t=L.position().top,m.addClass("in-scrolling"),e.stopPropagation(),e.preventDefault()}),e(document).bind("mousemove"+M,function(e){m.hasClass("in-scrolling")&&(Y(t,e.pageY-o),e.stopPropagation(),e.preventDefault())}),e(document).bind("mouseup"+M,function(){m.hasClass("in-scrolling")&&m.removeClass("in-scrolling")}),t=o=null},A=function(e,t){var o=s.scrollTop();if(0===e){if(!i)return!1;if(0===o&&t>0||o>=p-u&&0>t)return!l.wheelPropagation}var n=s.scrollLeft();if(0===t){if(!a)return!1;if(0===n&&0>e||n>=d-c&&e>0)return!l.wheelPropagation}return!0},q=function(){l.wheelSpeed/=10;var e=!1;s.bind("mousewheel"+M,function(t,o,n,r){var c=t.deltaX*t.deltaFactor||n,u=t.deltaY*t.deltaFactor||r;e=!1,l.useBothWheelAxes?i&&!a?(u?s.scrollTop(s.scrollTop()-u*l.wheelSpeed):s.scrollTop(s.scrollTop()+c*l.wheelSpeed),e=!0):a&&!i&&(c?s.scrollLeft(s.scrollLeft()+c*l.wheelSpeed):s.scrollLeft(s.scrollLeft()-u*l.wheelSpeed),e=!0):(s.scrollTop(s.scrollTop()-u*l.wheelSpeed),s.scrollLeft(s.scrollLeft()+c*l.wheelSpeed)),O(),e=e||A(c,u),e&&(t.stopPropagation(),t.preventDefault())}),s.bind("MozMousePixelScroll"+M,function(t){e&&t.preventDefault()})},B=function(){var t=!1;s.bind("mouseenter"+M,function(){t=!0}),s.bind("mouseleave"+M,function(){t=!1});var o=!1;e(document).bind("keydown"+M,function(n){if(!(n.isDefaultPrevented&&n.isDefaultPrevented()||!t||e(document.activeElement).is(":input,[contenteditable]"))){var r=0,l=0;switch(n.which){case 37:r=-30;break;case 38:l=30;break;case 39:r=30;break;case 40:l=-30;break;case 33:l=90;break;case 32:case 34:l=-90;break;case 35:l=-u;break;case 36:l=u;break;default:return}s.scrollTop(s.scrollTop()-l),s.scrollLeft(s.scrollLeft()+r),o=A(r,l),o&&n.preventDefault()}})},F=function(){var e=function(e){e.stopPropagation()};L.bind("click"+M,e),m.bind("click"+M,function(e){var t=parseInt(v/2,10),o=e.pageY-m.offset().top-t,n=u-v,r=o/n;0>r?r=0:r>1&&(r=1),s.scrollTop((p-u)*r)}),w.bind("click"+M,e),g.bind("click"+M,function(e){var t=parseInt(f/2,10),o=e.pageX-g.offset().left-t,n=c-f,r=o/n;0>r?r=0:r>1&&(r=1),s.scrollLeft((d-c)*r)})},z=function(){var t=function(e,t){s.scrollTop(s.scrollTop()-t),s.scrollLeft(s.scrollLeft()-e),O()},o={},n=0,r={},l=null,a=!1;e(window).bind("touchstart"+M,function(){a=!0}),e(window).bind("touchend"+M,function(){a=!1}),s.bind("touchstart"+M,function(e){var t=e.originalEvent.targetTouches[0];o.pageX=t.pageX,o.pageY=t.pageY,n=(new Date).getTime(),null!==l&&clearInterval(l),e.stopPropagation()}),s.bind("touchmove"+M,function(e){if(!a&&1===e.originalEvent.targetTouches.length){var l=e.originalEvent.targetTouches[0],s={};s.pageX=l.pageX,s.pageY=l.pageY;var i=s.pageX-o.pageX,c=s.pageY-o.pageY;t(i,c),o=s;var u=(new Date).getTime(),d=u-n;d>0&&(r.x=i/d,r.y=c/d,n=u),e.preventDefault()}}),s.bind("touchend"+M,function(){clearInterval(l),l=setInterval(function(){return.01>Math.abs(r.x)&&.01>Math.abs(r.y)?(clearInterval(l),void 0):(t(30*r.x,30*r.y),r.x*=.8,r.y*=.8,void 0)},10)})},K=function(){s.bind("scroll"+M,function(){O()})},Q=function(){s.unbind(M),e(window).unbind(M),e(document).unbind(M),s.data("perfect-scrollbar",null),s.data("perfect-scrollbar-update",null),s.data("perfect-scrollbar-destroy",null),w.remove(),L.remove(),g.remove(),m.remove(),g=m=w=L=a=i=c=u=d=p=f=h=T=y=x=v=b=S=I=P=D=M=null},R=function(t){s.addClass("ie").addClass("ie"+t);var o=function(){var t=function(){e(this).addClass("hover")},o=function(){e(this).removeClass("hover")};s.bind("mouseenter"+M,t).bind("mouseleave"+M,o),g.bind("mouseenter"+M,t).bind("mouseleave"+M,o),m.bind("mouseenter"+M,t).bind("mouseleave"+M,o),w.bind("mouseenter"+M,t).bind("mouseleave"+M,o),L.bind("mouseenter"+M,t).bind("mouseleave"+M,o)},n=function(){j=function(){var e={left:h+s.scrollLeft(),width:f};y?e.bottom=T:e.top=x,w.css(e);var t={top:b+s.scrollTop(),height:v};I?t.right=S:t.left=P,L.css(t),w.hide().show(),L.hide().show()}};6===t&&(o(),n())},N="ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch,Z=function(){var e=navigator.userAgent.toLowerCase().match(/(msie) ([\w.]+)/);e&&"msie"===e[1]&&R(parseInt(e[2],10)),O(),K(),E(),H(),F(),N&&z(),s.mousewheel&&q(),l.useKeyboard&&B(),s.data("perfect-scrollbar",s),s.data("perfect-scrollbar-update",O),s.data("perfect-scrollbar-destroy",Q)};return Z(),s})}}),function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e:e(jQuery)}(function(e){function t(t){var s=t||window.event,a=i.call(arguments,1),c=0,u=0,d=0,p=0;if(t=e.event.fix(s),t.type="mousewheel","detail"in s&&(d=-1*s.detail),"wheelDelta"in s&&(d=s.wheelDelta),"wheelDeltaY"in s&&(d=s.wheelDeltaY),"wheelDeltaX"in s&&(u=-1*s.wheelDeltaX),"axis"in s&&s.axis===s.HORIZONTAL_AXIS&&(u=-1*d,d=0),c=0===d?u:d,"deltaY"in s&&(d=-1*s.deltaY,c=d),"deltaX"in s&&(u=s.deltaX,0===d&&(c=-1*u)),0!==d||0!==u){if(1===s.deltaMode){var f=e.data(this,"mousewheel-line-height");c*=f,d*=f,u*=f}else if(2===s.deltaMode){var h=e.data(this,"mousewheel-page-height");c*=h,d*=h,u*=h}return p=Math.max(Math.abs(d),Math.abs(u)),(!l||l>p)&&(l=p,n(s,p)&&(l/=40)),n(s,p)&&(c/=40,u/=40,d/=40),c=Math[c>=1?"floor":"ceil"](c/l),u=Math[u>=1?"floor":"ceil"](u/l),d=Math[d>=1?"floor":"ceil"](d/l),t.deltaX=u,t.deltaY=d,t.deltaFactor=l,t.deltaMode=0,a.unshift(t,c,u,d),r&&clearTimeout(r),r=setTimeout(o,200),(e.event.dispatch||e.event.handle).apply(this,a)}}function o(){l=null}function n(e,t){return u.settings.adjustOldDeltas&&"mousewheel"===e.type&&0===t%120}var r,l,s=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],a="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(e.event.fixHooks)for(var c=s.length;c;)e.event.fixHooks[s[--c]]=e.event.mouseHooks;var u=e.event.special.mousewheel={version:"3.1.9",setup:function(){if(this.addEventListener)for(var o=a.length;o;)this.addEventListener(a[--o],t,!1);else this.onmousewheel=t;e.data(this,"mousewheel-line-height",u.getLineHeight(this)),e.data(this,"mousewheel-page-height",u.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var e=a.length;e;)this.removeEventListener(a[--e],t,!1);else this.onmousewheel=null},getLineHeight:function(t){return parseInt(e(t)["offsetParent"in e.fn?"offsetParent":"parent"]().css("fontSize"),10)},getPageHeight:function(t){return e(t).height()},settings:{adjustOldDeltas:!0}};e.fn.extend({mousewheel:function(e){return e?this.bind("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.unbind("mousewheel",e)}})});
	// - Single Page Nav
	(function($){"function"!==typeof Object.create&&(Object.create=function(c){function f(){}f.prototype=c;return new f});(function(c,f,h,k){var g={init:function(a,b){this.options=c.extend({},c.fn.singlePageNav.defaults,a);this.container=b;this.$container=c(b);this.$links=this.$container.find("a");""!==this.options.filter&&(this.$links=this.$links.filter(this.options.filter));this.$window=c(f);this.$htmlbody=c("html, body");this.$links.on("click.singlePageNav",c.proxy(this.handleClick,this));this.didScroll=!1;this.checkPosition();this.setTimer()},handleClick:function(a){var b=this,d=a.currentTarget,e=c(d.hash);a.preventDefault();e.length&&(b.clearTimer(),"function"===typeof b.options.beforeStart&&b.options.beforeStart(),b.setActiveLink(d.hash),b.scrollTo(e,function(){b.options.updateHash&&history.pushState&&history.pushState(null,null,d.hash);b.setTimer();if("function"===typeof b.options.onComplete)b.options.onComplete()}))},scrollTo:function(a,b){var c=this.getCoords(a).top,e=!1;this.$htmlbody.stop().animate({scrollTop:c},{duration:this.options.speed,easing:this.options.easing,complete:function(){"function"!==typeof b||e||b();e=!0}})},setTimer:function(){var a=this;a.$window.on("scroll.singlePageNav",function(){a.didScroll=!0});a.timer=setInterval(function(){a.didScroll&&(a.didScroll=!1,a.checkPosition())},250)},clearTimer:function(){clearInterval(this.timer);this.$window.off("scroll.singlePageNav");this.didScroll=!1},checkPosition:function(){var a=this.$window.scrollTop(),a=this.getCurrentSection(a);null!==a&&this.setActiveLink(a)},getCoords:function(a){return{top:Math.round(a.offset().top)-this.options.offset}},setActiveLink:function(a){a=this.$container.find("a[href$='"+a+"']");a.parent().hasClass(this.options.currentClass)||(this.$links.parent().removeClass(this.options.currentClass),a.parent().addClass(this.options.currentClass))},getCurrentSection:function(a){var b,d,e,f;for(b=0;b<this.$links.length;b++)d=this.$links[b].hash,c(d).length&&(e=this.getCoords(c(d)),a>=e.top-this.options.threshold&&(f=d));return f||(0===this.$links.length?null:this.$links[0].hash)}};c.fn.singlePageNav=function(a){return this.each(function(){Object.create(g).init(a,this)})};c.fn.singlePageNav.defaults={offset:0,threshold:120,speed:400,currentClass:"current",easing:"swing",updateHash:!1,filter:"",onComplete:!1,beforeStart:!1}})(jQuery,window,document);})(jQuery);
	// - From To
	(function($){"use strict";$.fn.counterUp=function(options){var settings=$.extend({'time':400,'delay':10},options);return this.each(function(){var $this=$(this);var $settings=settings;var counterUpper=function(){var nums=[];var divisions=$settings.time/$settings.delay;var num=$this.text();var isComma=/[0-9]+,[0-9]+/.test(num);num=num.replace(/,/g,'');var isInt=/^[0-9]+$/.test(num);var isFloat=/^[0-9]+\.[0-9]+$/.test(num);var decimalPlaces=isFloat?(num.split('.')[1]||[]).length:0;for(var i=divisions;i>=1;i--){var newNum=parseInt(num/divisions*i);if(isFloat){newNum=parseFloat(num/divisions*i).toFixed(decimalPlaces)}if(isComma){while(/(\d+)(\d{3})/.test(newNum.toString())){newNum=newNum.toString().replace(/(\d+)(\d{3})/,'$1'+','+'$2')}}nums.unshift(newNum)}$this.data('counterup-nums',nums);$this.text('0');var f=function(){$this.text($this.data('counterup-nums').shift());if($this.data('counterup-nums').length){setTimeout($this.data('counterup-func'),$settings.delay)}else{delete $this.data('counterup-nums');$this.data('counterup-nums',null);$this.data('counterup-func',null)}};$this.data('counterup-func',f);setTimeout($this.data('counterup-func'),$settings.delay)};counterUpper()})}})(jQuery);
	// - Count Down
	(function(e){e.fn.countdown=function(t,n){function o(){var e=new Date(r.date),t=s();var o=e-t;if(o<0){clearInterval(u);if(n&&typeof n==="function")n();return}var a=1e3,f=a*60,l=f*60,c=l*24;var h=Math.floor(o/c),p=Math.floor(o%c/l),d=Math.floor(o%l/f),v=Math.floor(o%f/a);h=String(h).length>=2?h:"0"+h;p=String(p).length>=2?p:"0"+p;d=String(d).length>=2?d:"0"+d;v=String(v).length>=2?v:"0"+v;var m=h===1?r.day:r.days,g=p===1?r.hour:r.hours,y=d===1?r.minute:r.minutes,b=v===1?r.second:r.seconds;i.find(".days").text(h);i.find(".hours").text(p);i.find(".minutes").text(d);i.find(".seconds").text(v);i.find(".days_text").text(m);i.find(".hours_text").text(g);i.find(".minutes_text").text(y);i.find(".seconds_text").text(b)}var r=e.extend({date:null,offset:null,day:"Day",days:"Days",hour:"Hour",hours:"Hours",minute:"Minute",minutes:"Minutes",second:"Second",seconds:"Seconds"},t);if(!r.date){e.error("Date is not defined.")}if(!Date.parse(r.date)){e.error("Incorrect date format, it should look like this, 12/24/2012 12:00:00.")}var i=this;var s=function(){var e=new Date;var t=e.getTime()+e.getTimezoneOffset()*6e4;var n=new Date(t+36e5*r.offset);return n};var u=setInterval(o,1e3)}})(jQuery);
	// - ToolTip
	(function($,window,document,undefined){var pluginName="tipso",defaults={speed:400,background:'#55b555',color:'#ffffff',position:'top',width:200,delay:200,animationIn:'',animationOut:'',offsetX:0,offsetY:0,content:null,ajaxContentUrl:null,useTitle:true,onBeforeShow:null,onShow:null,onHide:null};function Plugin(element,options){this.element=$(element);this.settings=$.extend({},defaults,options);this._defaults=defaults;this._name=pluginName;this._title=this.element.attr('title');this.mode='hide';this.ieFade=false;if(!supportsTransitions){this.ieFade=true}this.init()}$.extend(Plugin.prototype,{init:function(){var obj=this,$e=this.element;$e.addClass('tipso_style').removeAttr('title');$e.hoverIntent(function(){obj.show();},function(){obj.hide();});},tooltip:function(){if(!this.tipso_bubble){this.tipso_bubble=$('<div class="tipso_bubble"><div class="tipso_content"></div><div class="tipso_arrow"></div></div>')}return this.tipso_bubble},show:function(){var tipso_bubble=this.tooltip(),obj=this,$win=$(window);if($.isFunction(obj.settings.onBeforeShow)){obj.settings.onBeforeShow($(this))}tipso_bubble.css({background:obj.settings.background,color:obj.settings.color,width:obj.settings.width}).hide();tipso_bubble.find('.tipso_content').html(obj.content());reposition(obj);$win.resize(function(){reposition(obj)});obj.timeout=window.setTimeout(function(){if(obj.ieFade||obj.settings.animationIn===''||obj.settings.animationOut===''){tipso_bubble.appendTo('body').stop(true,true).fadeIn(obj.settings.speed,function(){obj.mode='show';if($.isFunction(obj.settings.onShow)){obj.settings.onShow($(this))}})}else{tipso_bubble.remove().appendTo('body').stop(true,true).removeClass('css-animated '+obj.settings.animationOut).addClass('noAnimation').removeClass('noAnimation').addClass('css-animated '+obj.settings.animationIn).fadeIn(obj.settings.speed,function(){$(this).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){$(this).removeClass('css-animated '+obj.settings.animationIn)});obj.mode='show';if($.isFunction(obj.settings.onShow)){obj.settings.onShow($(this))}})}},obj.settings.delay)},hide:function(){var obj=this,tipso_bubble=this.tooltip();window.clearTimeout(obj.timeout);obj.timeout=null;if(obj.ieFade||obj.settings.animationIn===''||obj.settings.animationOut===''){tipso_bubble.stop(true,true).fadeOut(obj.settings.speed,function(){$(this).remove();if($.isFunction(obj.settings.onHide)&&obj.mode=='show'){obj.settings.onHide($(this))}obj.mode='hide'})}else{tipso_bubble.stop(true,true).removeClass('css-animated '+obj.settings.animationIn).addClass('noAnimation').removeClass('noAnimation').addClass('css-animated '+obj.settings.animationOut).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){$(this).removeClass('css-animated '+obj.settings.animationOut).remove();if($.isFunction(obj.settings.onHide)&&obj.mode=='show'){obj.settings.onHide($(this))}obj.mode='hide'})}},destroy:function(){var $e=this.element;$e.off('.'+pluginName);$e.removeData(pluginName);$e.removeClass('tipso_style').attr('title',this._title)},content:function(){var content,$e=this.element,obj=this,title=this._title;if(obj.settings.ajaxContentUrl){content=$.ajax({type:"GET",url:obj.settings.ajaxContentUrl,async:false}).responseText}else if(obj.settings.content){content=obj.settings.content}else{if(obj.settings.useTitle===true){content=title}else{content=$e.data('tipso')}}return content},update:function(key,value){var obj=this;if(value){obj.settings[key]=value}else{return obj.settings[key]}}});function isTouchSupported(){var msTouchEnabled=window.navigator.msMaxTouchPoints;var generalTouchEnabled="ontouchstart"in document.createElement("div");if(msTouchEnabled||generalTouchEnabled){return true}return false}function realHeight(obj){var clone=obj.clone();clone.css("visibility","hidden");$('body').append(clone);var height=clone.outerHeight();clone.remove();return height}var supportsTransitions=(function(){var s=document.createElement('p').style,v=['ms','O','Moz','Webkit'];if(s['transition']=='')return true;while(v.length)if(v.pop()+'Transition'in s)return true;return false})();function reposition(thisthat){var tipso_bubble=thisthat.tooltip(),$e=thisthat.element,obj=thisthat,$win=$(window),arrow=10,pos_top,pos_left,diff;if($e.parent().outerWidth()>$win.outerWidth()){$win=$e.parent()}switch(obj.settings.position){case'top':pos_left=$e.offset().left+($e.outerWidth()/2)-(tipso_bubble.outerWidth()/2);pos_top=$e.offset().top-realHeight(tipso_bubble)-arrow;tipso_bubble.find('.tipso_arrow').css({marginLeft:-8});if(pos_top<$win.scrollTop()){pos_top=$e.offset().top+$e.outerHeight()+arrow;tipso_bubble.find('.tipso_arrow').css({'border-bottom-color':obj.settings.background,'border-top-color':'transparent'});tipso_bubble.removeClass('top bottom left right');tipso_bubble.addClass('bottom')}else{tipso_bubble.find('.tipso_arrow').css({'border-top-color':obj.settings.background,'border-bottom-color':'transparent'});tipso_bubble.removeClass('top bottom left right');tipso_bubble.addClass('top')}break;case'bottom':pos_left=$e.offset().left+($e.outerWidth()/2)-(tipso_bubble.outerWidth()/2);pos_top=$e.offset().top+$e.outerHeight()+arrow;tipso_bubble.find('.tipso_arrow').css({marginLeft:-8});if(pos_top+realHeight(tipso_bubble)>$win.scrollTop()+$win.outerHeight()){pos_top=$e.offset().top-realHeight(tipso_bubble)-arrow;tipso_bubble.find('.tipso_arrow').css({'border-top-color':obj.settings.background,'border-bottom-color':'transparent'});tipso_bubble.removeClass('top bottom left right');tipso_bubble.addClass('top')}else{tipso_bubble.find('.tipso_arrow').css({'border-bottom-color':obj.settings.background,'border-top-color':'transparent'});tipso_bubble.removeClass('top bottom left right');tipso_bubble.addClass(obj.settings.position)}break;case'left':pos_left=$e.offset().left-tipso_bubble.outerWidth()-arrow;pos_top=$e.offset().top+($e.outerHeight()/2)-(realHeight(tipso_bubble)/2);tipso_bubble.find('.tipso_arrow').css({marginTop:-8,marginLeft:''});if(pos_left<$win.scrollLeft()){pos_left=$e.offset().left+$e.outerWidth()+arrow;tipso_bubble.find('.tipso_arrow').css({'border-right-color':obj.settings.background,'border-left-color':'transparent','border-top-color':'transparent','border-bottom-color':'transparent'});tipso_bubble.removeClass('top bottom left right');tipso_bubble.addClass('right')}else{tipso_bubble.find('.tipso_arrow').css({'border-left-color':obj.settings.background,'border-right-color':'transparent','border-top-color':'transparent','border-bottom-color':'transparent'});tipso_bubble.removeClass('top bottom left right');tipso_bubble.addClass(obj.settings.position)}break;case'right':pos_left=$e.offset().left+$e.outerWidth()+arrow;pos_top=$e.offset().top+($e.outerHeight()/2)-(realHeight(tipso_bubble)/2);tipso_bubble.find('.tipso_arrow').css({marginTop:-8,marginLeft:''});if(pos_left+arrow+obj.settings.width>$win.scrollLeft()+$win.outerWidth()){pos_left=$e.offset().left-tipso_bubble.outerWidth()-arrow;tipso_bubble.find('.tipso_arrow').css({'border-left-color':obj.settings.background,'border-right-color':'transparent','border-top-color':'transparent','border-bottom-color':'transparent'});tipso_bubble.removeClass('top bottom left right');tipso_bubble.addClass('left')}else{tipso_bubble.find('.tipso_arrow').css({'border-right-color':obj.settings.background,'border-left-color':'transparent','border-top-color':'transparent','border-bottom-color':'transparent'});tipso_bubble.removeClass('top bottom left right');tipso_bubble.addClass(obj.settings.position)}break}if(pos_left<$win.scrollLeft()&&(obj.settings.position=='bottom'||obj.settings.position=='top')){tipso_bubble.find('.tipso_arrow').css({marginLeft:pos_left-8});pos_left=0}if(pos_left+obj.settings.width>$win.outerWidth()&&(obj.settings.position=='bottom'||obj.settings.position=='top')){diff=$win.outerWidth()-(pos_left+obj.settings.width);tipso_bubble.find('.tipso_arrow').css({marginLeft:-diff-8,marginTop:''});pos_left=pos_left+diff}if(pos_left<$win.scrollLeft()&&(obj.settings.position=='left'||obj.settings.position=='right')){pos_left=$e.offset().left+($e.outerWidth()/2)-(tipso_bubble.outerWidth()/2);tipso_bubble.find('.tipso_arrow').css({marginLeft:-8,marginTop:''});pos_top=$e.offset().top-realHeight(tipso_bubble)-arrow;if(pos_top<$win.scrollTop()){pos_top=$e.offset().top+$e.outerHeight()+arrow;tipso_bubble.find('.tipso_arrow').css({'border-bottom-color':obj.settings.background,'border-top-color':'transparent','border-left-color':'transparent','border-right-color':'transparent'});tipso_bubble.removeClass('top bottom left right');tipso_bubble.addClass('bottom')}else{tipso_bubble.find('.tipso_arrow').css({'border-top-color':obj.settings.background,'border-bottom-color':'transparent','border-left-color':'transparent','border-right-color':'transparent'});tipso_bubble.removeClass('top bottom left right');tipso_bubble.addClass('top')}if(pos_left+obj.settings.width>$win.outerWidth()){diff=$win.outerWidth()-(pos_left+obj.settings.width);tipso_bubble.find('.tipso_arrow').css({marginLeft:-diff-8,marginTop:''});pos_left=pos_left+diff}if(pos_left<$win.scrollLeft()){tipso_bubble.find('.tipso_arrow').css({marginLeft:pos_left-8});pos_left=0}}if(pos_left+obj.settings.width>$win.outerWidth()&&(obj.settings.position=='left'||obj.settings.position=='right')){pos_left=$e.offset().left+($e.outerWidth()/2)-(tipso_bubble.outerWidth()/2);tipso_bubble.find('.tipso_arrow').css({marginLeft:-8,marginTop:''});pos_top=$e.offset().top-realHeight(tipso_bubble)-arrow;if(pos_top<$win.scrollTop()){pos_top=$e.offset().top+$e.outerHeight()+arrow;tipso_bubble.find('.tipso_arrow').css({'border-bottom-color':obj.settings.background,'border-top-color':'transparent','border-left-color':'transparent','border-right-color':'transparent'});tipso_bubble.removeClass('top bottom left right');tipso_bubble.addClass('bottom')}else{tipso_bubble.find('.tipso_arrow').css({'border-top-color':obj.settings.background,'border-bottom-color':'transparent','border-left-color':'transparent','border-right-color':'transparent'});tipso_bubble.removeClass('top bottom left right');tipso_bubble.addClass('top')}if(pos_left+obj.settings.width>$win.outerWidth()){diff=$win.outerWidth()-(pos_left+obj.settings.width);tipso_bubble.find('.tipso_arrow').css({marginLeft:-diff-8,marginTop:''});pos_left=pos_left+diff}if(pos_left<$win.scrollLeft()){tipso_bubble.find('.tipso_arrow').css({marginLeft:pos_left-8});pos_left=0}}tipso_bubble.css({left:pos_left+obj.settings.offsetX,top:pos_top+obj.settings.offsetY})}$[pluginName]=$.fn[pluginName]=function(options){var args=arguments;if(options===undefined||typeof options==='object'){if(!(this instanceof $)){$.extend(defaults,options)}return this.each(function(){if(!$.data(this,'plugin_'+pluginName)){$.data(this,'plugin_'+pluginName,new Plugin(this,options))}})}else if(typeof options==='string'&&options[0]!=='_'&&options!=='init'){var returns;this.each(function(){var instance=$.data(this,'plugin_'+pluginName);if(!instance){instance=$.data(this,'plugin_'+pluginName,new Plugin(this,options))}if(instance instanceof Plugin&&typeof instance[options]==='function'){returns=instance[options].apply(instance,Array.prototype.slice.call(args,1))}if(options==='destroy'){$.data(this,'plugin_'+pluginName,null)}});return returns!==undefined?returns:this}}})(jQuery,window,document);

/*  MISC
/*======================*/

	(function($){

		"use strict";

		setTimeout(function(){
			$('.lazy').addClass('in');
		},600);

		$('.alert').each(function(){
			var $this = $(this);
			$this.find('.close-alert').on('click', function(){
				$this.fadeOut(200);
			})
		});

		$('.rich-header').each(function(){
			var win   = $(window);
			var $this = $(this);
			win.scroll(function(){
				var percent = ($(document).scrollTop()/win.height());
				$this.find('.rich-header-content').css('opacity', 1 - percent);
			});
		});

		$('.i-separator').each(function(){

			var $this = $(this);

			if ($this.data('target') !== undefined) {

				$this.bind('click.smoothscroll', function (event) {
				    event.preventDefault();
				    var target = $this.data('target');
				    $('html, body').stop().animate({'scrollTop': $(target).offset().top - $this.data('offset')}, 500, function () {
				        window.location.hash = target;
				    });
				});

			};
			
		});

		// Calendar
		var prev = $('.widget_calendar td#prev').attr('colspan','1'),
			next = $('.widget_calendar td#next').attr('colspan','1');

		$('.widget_calendar tbody td').each(function(){
			if($(this).children('a').length != 0){
				$(this).addClass('has-children');
			}
		});

		if (prev.children('a').length != 0) {
			prev.children('a').html("<span class='icon-arrow-left9'></span>");
		} else {
			prev.html("<span class='icon-arrow-left9'></span>");
		}

		if (next.children('a').length != 0) {
			next.children('a').html("<span class='icon-arrow-right9'></span>");
		} else {
			next.html("<span class='icon-arrow-right9'></span>");
		}

		$('.widget_calendar tfoot td.pad:not(#next, #prev)').attr('colspan','5');

		// Gallery
		$('.nz-gallery').each(function(){
			$(this).find('a').attr('title', $.trim($(this).find('.gallery-caption').text().replace( /[\s\n\r]+/g, ' ' )));
		});

		function widgetNav(){
			if (window.innerWidth < 1024) {
				$('.widget_nav_menu')
				.addClass('mobile')
				.removeClass('desktop');

				$('.widget_product_categories')
				.addClass('mobile')
				.removeClass('desktop');

			} else
			if(window.innerWidth >= 1024){

				$('.widget_nav_menu')
				.addClass('desktop')
				.removeClass('mobile');

				$('.widget_product_categories')
				.addClass('desktop')
				.removeClass('mobile');
			}
		}

		widgetNav();
		$(window).resize(widgetNav);

		$('.widget_nav_menu ul li > a:not(:only-child)').append('<span class="toggle icon-arrow-down9"></span>');
		$('.widget_nav_menu.mobile ul li a > span.toggle').on('click',function(e){
			if ($(this).parent().next('ul').length != 0) {
				$(this).parent().toggleClass('animate');
				$(this).parent().next('ul').stop().slideToggle(300, "easeOutQuart");
			};
			e.preventDefault();
		});

		$('.widget_nav_menu.desktop ul li').hoverIntent(
			function(){
				$(this).children('ul').stop(true, true).animate({'margin-left':'0px','opacity':'1'}, 400, "easeOutCirc").css('display','block');
			},
			function(){
				$(this).children('ul').stop(true, true).animate({'margin-left':'50px','opacity':'0'}, 400, "easeOutCirc", function(){
					$(this).css('display','none');
				});
			}
		);

		$('.widget_product_categories ul li').each(function(){
			var $this      = $(this);
			var countClone = $this.children('span.count').clone();
			$this.children('span.count').remove();
			$this.children('a').append(countClone);
		});

		$('.widget_product_categories ul li > a:not(:only-child)').append('<span class="toggle icon-arrow-down9"></span>');
		$('.widget_product_categories.mobile ul li a > span.toggle').on('click',function(e){
			if ($(this).parent().next('ul').length != 0) {
				$(this).parent().toggleClass('animate');
				$(this).parent().next('ul').stop().slideToggle(300, "easeOutQuart");
			};
			e.preventDefault();
		});

		$('.widget_product_categories.desktop ul li').hoverIntent(
			function(){
				$(this).children('ul').stop(true, true).animate({'margin-left':'0px','opacity':'1'}, 400, "easeOutCirc").css('display','block');
			},
			function(){
				$(this).children('ul').stop(true, true).animate({'margin-left':'50px','opacity':'0'}, 400, "easeOutCirc", function(){
					$(this).css('display','none');
				});
			}
		);
		

		$('.widget_photos_from_flickr .flickr_badge_image a').append('<div class="ninzio-overlay"><span class="nz-overlay-before icon-plus4"></span></div>');

		var login = $('.widget_reglog #login-form'),
			reg   = $('.widget_reglog #registration-form'),
			pass  = $('.widget_reglog #password-form');

		$('.widget_reglog label').each(function(){
			var $this = $(this);
			$this.next('input').attr('data-placeholder',$this.html());
			$this.remove();
		});

		$('.widget_reglog input[type="submit"]').addClass('small');

		$(".nz-content a").has('img').each(function(){
			$(this).attr('title',$(this).children('img').attr('alt'));
		});

		$('.nz-carousel').each(function(){

			$(".nz-content a").has('img').each(function(){
				$(this).attr('data-lightbox-gallery','nz-gallery3');
			});

		});

		$('.post-social-share').on("click",function(){
			$(this).toggleClass("animate");
		});

		formPlaceholder($('input:not([type="submit"]),textarea'));

		$('.ls a[href="#"]').click(function(e){e.preventDefault();});

		$('.get-location').click(function(e){
			e.preventDefault();
			$($(this).attr('href')).fadeIn(400).toggleClass('animate');
		});

		$('.location-close').click(function(e){
			$('#get-location').toggleClass('animate');
			setTimeout(function(){
				$('#get-location').fadeOut(400)
			},250);
		});

		$('.ninzio-filter').each(function(){
			var $this = $(this);
			$this.find('.filter-toggle').click(function(){
				$this.find('.filter-container').slideToggle();
			});
		});


	})(jQuery);

/*  HEADER
/*======================*/
	
	(function($){

		"use strict";

		$('.mob-header-content .header-top-menu ul li.menu-item-has-children > a').each(function(){
			$(this).append('<span class="di icon-arrow-down9"></span>');
		});

		$('.page-content-wrap .widget_icl_lang_sel_widget > div > ul > li > a').off('click').on('click',function(event){
			event.preventDefault();
			$('.page-content-wrap .widget_icl_lang_sel_widget').toggleClass('animated');
			$(this).next('ul').slideToggle(300, "easeOutQuart");
		});

		$('.mob-menu ul li a > .di, .mob-header-content .header-top-menu ul li a > .di').on("click", function(event){
			$(this).toggleClass('animate');
			$(this).parent().next('ul').toggleClass('animate').stop().slideToggle(300, "easeOutQuart");
			event.preventDefault();
		});

		$('.mob-menu-toggle, .mob-menu-toggle2, .mob-overlay').on("click",function(event){
			event.stopImmediatePropagation();
			$('.mob-header-content').toggleClass('animate');
		});

		if (!$('html').hasClass('shoping-cart')) {
			$(".desk-cart-toggle").on("click",function(event){
    			event.preventDefault();
				$(this).toggleClass('animated');
				$('.search-toggle').removeClass('animated');
				$('.woo-cart').toggleClass('animated');
				$('.desk .search').removeClass('animated');
			});
		};

		$('.search-toggle').on('click', function(){
			$(this).toggleClass('animated');
			$('.desk .search').toggleClass('animated');
			$('.woo-cart').removeClass('animated');
			$('.desk-cart-toggle').removeClass('animated');
		});

		$('.desk .ls').off('click').on('click',function(){
			$(this).toggleClass('animated');
		});

		// Header megamenu background image

			$('.desk [data-mm="true"]').each(function(){
				var $this = $(this),
					$img  = $this.data('mmb');

				if (typeof $img !== "undefined") {
					$this.children('.sub-menu').css({'background-image':'url('+$img+')'});
				};
			});

		/// Header submenu

			$('.subeffect-ghost .desk-menu ul li, .subeffect-ghost .header-top-menu ul li').hoverIntent(
				function(){
					var $this = $(this);
					$this.children('ul')
					.stop(true, true)
					.animate({'opacity':'1','margin-top':'0'}, 300, "easeOutQuart")
					.css('display','block');
				},
				function(){
					var $this = $(this);
					$this.children('ul')
					.stop(true, true).animate({'opacity':'0','margin-top':'40px'}, 300, "easeOutQuart", function(){
						$(this).css('display','none');
					});
				}
			);

			$('.subeffect-move .desk-menu ul li, .subeffect-move .header-top-menu ul li').hoverIntent(
				function(){
					var $this = $(this);
					$this.children('ul')
					.stop(true, true)
					.animate({'opacity':'1','margin-left':'0'}, 300, "easeOutQuart")
					.css('display','block');
				},
				function(){
					var $this = $(this);
					$this.children('ul')
					.stop(true, true).animate({'opacity':'0','margin-left':'-40px'}, 300, "easeOutQuart", function(){
						$(this).css('display','none');
					});
				}
			);

			$('.subeffect-fade .desk-menu ul li, .subeffect-fade .header-top-menu ul li').hoverIntent(
				function(){
					var $this = $(this);
					$this.children('ul')
					.stop(true, true)
					.animate({'opacity':'1'}, 300, "easeOutQuart")
					.css('display','block');
				},
				function(){
					var $this = $(this);
					$this.children('ul')
					.stop(true, true).animate({'opacity':'0'}, 300, "easeOutQuart", function(){
						$(this).css('display','none');
					});
				}
			);

			$('.subeffect-slide .desk-menu ul li, .subeffect-slide .header-top-menu ul li').hoverIntent(
				function(){
					var $this = $(this);
					$this.children('ul')
					.stop(true, true)
					.slideToggle(300, "easeOutQuart")
					.css('display','block');
				},
				function(){
					var $this = $(this);
					$this.children('ul')
					.stop(true, true)
					.slideToggle(300, "easeOutQuart",function(){
						$(this).css('display','none');
					})
				}
			);

		// Fixed header

			var docElem = document.documentElement,
			header           = $( '.fixed-true' ),
			headerOffset     = header.offset(),
			top              = $('#top'),
	        didScroll        = false,
	        changeHeaderOn   = (header.hasClass('version3') && header.parents('.revolution-slider-active')) ? headerOffset.top : 50;

		    function init() {

		    	if( !didScroll ) {
	                didScroll = true;
	                scrollPage();
	            }

		        window.addEventListener( 'scroll', function( event ) {
		            if( !didScroll ) {
		                didScroll = true;
		                scrollPage();
		            }
		        }, false );

		    }

		    function scrollPage() {
		        var sy = scrollY();

	    		if ( sy >= changeHeaderOn ) {
	        		header.addClass('active');
	        		top.addClass('active');
	        	} else {
	        		header.removeClass('active');
	        		top.removeClass('active');
	        	}
		        
		        didScroll = false;
		    }

		    function scrollY() {
		        return window.pageYOffset || docElem.scrollTop;
		    }

		    init();

	})(jQuery);

/*  PARALLAX
/*======================*/

	(function($){

		"use strict";

		function parallax(target,offset){

			target.each(function(){
				var $this = $(this),
					plx = $this.find('.parallax-container');
				$(window).scroll(function() {
					var yPos   = offset ? Math.round(($(window).scrollTop()-plx.offset().top) / 2.5) : Math.round($(window).scrollTop() / 2.5);
					plx.css({
						'-webkit-transform':'translateY('+yPos + 'px)',
						'-moz-transform':'translateY('+yPos + 'px)',
						'transform':'translateY('+yPos + 'px)'
					});    
				});
			});

		}

		parallax($('.nz-section[data-parallax="true"]'),true);
		parallax($('.rich-header[data-parallax="true"]'),false);

	})(jQuery);

/*	SECTIONS
/*======================*/

	(function($){

		"use strict";

		function backgroundScroll(el, speed,direction){
    		var size = (direction == "horizontal") ? el.data('img-width') : el.data('img-height');
    		if (direction == "horizontal") {
				el.animate({'background-position-x' :size}, {duration:speed,easing:'linear',complete:function(){el.css('background-position-x','0');backgroundScroll(el, speed,direction);}});
    		} else if (direction == "vertical") {
    			el.animate({'background-position-y' :size}, {duration:speed,easing:'linear',complete:function(){el.css('background-position-y','0');backgroundScroll(el, speed,direction);}});
    		};
		}

	    $('.nz-section').each(function(){

	    	var $this      = $(this), 
	    		fx         = $this.find('.fixed-container'),
	    		$secHeight = $(this).outerHeight(),			
			    $secWidth  = $(this).outerWidth(),
				video      = $this.find('.nz-section-back-video');

			fx.css({'height':window.outerHeight*1.2+'px'});

		    if ($this.hasClass('animate-true')) {
		    	if ($this.hasClass('horizontal')) {
		    		backgroundScroll($this, $this.data('animation-speed'), 'horizontal');
		    	} else if ($this.hasClass('vertical')) {
		    		backgroundScroll($this, $this.data('animation-speed'), 'vertical');
		    	};
	    	}

	    	delay_exec('resizeCorrections', 200, function(){
				fx.css({'height':window.outerHeight+100+'px'});
	    	})
	    });

	})(jQuery);

/*  ICON PROGRESS BAR
/*======================*/
	
	(function($){

		"use strict";

		$('.nz-icon-progress').each(function(){

			var $this = $(this);
			var dataColor = $this.data('color');
			var dataActive = $this.data('active');
			var icons = $this.find('.icon');
			var i = 0;

			$this.one('inview', function(event, isInView, visiblePartX, visiblePartY){
			    if (isInView) {
					var timer = setInterval(function(){
						$(icons[i]).css({color:dataColor});
						i++;
						if (i == dataActive) {clearInterval(timer);}
					}, 125);
		    	};
		    });
		})

	})(jQuery);

/*	GMAP
/*======================*/
	
	(function($){

		"use strict";

		var styleArray = '';

		$('.map').each(function(){

			var $this     = $(this),
				x         = ($this.attr('data-x')) ? $this.data('x') : 53.385873,
				y         = ($this.attr('data-y')) ? $this.data('y') : -1.471471,
				z         = ($this.attr('data-zoom')) ? parseInt($this.data('zoom')) : 18,
				t         = ($this.attr('data-type')) ? $this.attr('data-type') : 'roadmap',
				mapTypeId = "roadmap";

				switch(t){
					case 'roadmap':
					case 'black':
					case 'grey':
					case 'routexl':
				        mapTypeId = google.maps.MapTypeId.ROADMAP
				        break;
				    case 'satellite':
				        mapTypeId = google.maps.MapTypeId.SATELLITE
				        break;
				    case 'hybrid':
				        mapTypeId = google.maps.MapTypeId.HYBRID
				    case 'terrain':
				        mapTypeId = google.maps.MapTypeId.TERRAIN
				        break;
				}

				if (t === 'black') {
					styleArray = [{"stylers":[{"hue":"#ff1a00"},{"invert_lightness":true},{"saturation":-100},{"lightness":33},{"gamma":0.5}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#2D333C"}]}];
				} else if(t === 'grey') {
					styleArray = [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}];
				}  else if(t === 'routexl') {
					styleArray = [{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"on"},{"saturation":-100},{"lightness":20}]},{"featureType":"road","elementType":"all","stylers":[{"visibility":"on"},{"saturation":-100},{"lightness":40}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"on"},{"saturation":-10},{"lightness":30}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"visibility":"simplified"},{"saturation":-60},{"lightness":10}]},{"featureType":"landscape.natural","elementType":"all","stylers":[{"visibility":"simplified"},{"saturation":-60},{"lightness":60}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"},{"saturation":-100},{"lightness":60}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"},{"saturation":-100},{"lightness":60}]}];
				}

				var options = {
					center     : new google.maps.LatLng(x, y),
					zoom       : z, 
					mapTypeId  : mapTypeId,
					styles     : styleArray,
					scrollwheel: false
				};
				
				var map    = new google.maps.Map(document.getElementById($this.attr('id')), options);
				if ($this.attr('data-marker')) {
					var marker = new google.maps.Marker({ position: new google.maps.LatLng(x,y), map: map, icon: $this.attr('data-marker')});
				};

				if ($this.attr('data-animate') == "true") {
					if (marker.getAnimation() != null) {marker.setAnimation(null);} else {marker.setAnimation(google.maps.Animation.BOUNCE);}
				};
		});

	})(jQuery);

/*	SMOOTH SCROLL
/*======================*/

	(function($){

		"use strict";

		function init() {
			window.addEventListener( 'scroll', function( event ) {
			    if( !didScroll ) {
			        didScroll = true;
			        scrollPage();
			    }
			}, false );
		}

		function scrollPage() {
			var sy = scrollY();
			if ( sy >= activateOn ) {
				top.addClass('animate');
				$('.one-page-bullets').addClass('animate');
			} else {
				top.removeClass('animate');
				$('.one-page-bullets').removeClass('animate');
			}

			didScroll = false;
		}

		function scrollY() {
			return window.pageYOffset || docElem.scrollTop;
		}

		var top         = $('#top'),
			docElem     = document.documentElement,
			didScroll   = false,
			activateOn  = 600;

		top.bind('click.smoothscroll', function (event) {
			event.preventDefault();
			var target = this.hash;
			$('html, body').stop().animate({
			    'scrollTop': $(target).offset().top
			}, 800, function () {
			    window.location.hash = target;
			});
		});

		init();

	})(jQuery);

/*  PROGRESS BAR
/*======================*/
	
	(function($){

		"use strict";

		$(".nz-progress").each(function() {

			var $this = $(this);
			var line = $this.find('.bar');

			function progressLine(){

				line.each(function(){
					var $self      = $(this);
					var percentage = $self.find('.nz-line').data('percentage');

					$self.find('.nz-line').addClass('visible').width(0)
					.animate({width: percentage+'%'}, 4000, 'easeOutQuart');

					$self.find('.progress-percent').addClass('visible')
					.animate({left: percentage+'%'}, 4000, 'easeOutQuart')
					.counterUp({ delay: 10,time: 2500 });
				});
				
			}
			
			$this.one('inview', function(event, isInView, visiblePartX, visiblePartY){
			    if (isInView) {
		    		setTimeout(function(){
		    			progressLine();
		    		},250)
		    	};
		    });
				
		});

	})(jQuery);

/*  CIRLCE PROGRESS
/*======================*/
	
	(function($){

		"use strict";

		$('.nz-circle-progress').each(function(){

			var $self = $(this);
			var circleP = $self.find(".nz-circle");

			function circleProgress(){

				circleP.each(function(){

					var $this      = $(this).animate({'opacity':'1'}, 300),
						child      = $this.find('.circle'),
						parent     = $this.parent(),
						trackColor = child.data('track'),
						barColor   = child.data('bar'),
						percent    = child.data('percent'),
						lineWidth  = 5,
						size = 180,
						title = $this.find('.nz-value');
						title.counterUp({ delay: 10,time: 1500 });

					child.easyPieChart({
						barColor: barColor,
						trackColor: (typeof trackColor == "undefined") ? "#e0e0e0" : trackColor,
						lineCap:'round',
						lineWidth:lineWidth,
						size:size,
						animate:'1500',
						scaleColor: false
					});

				});

			}

			$self.one('inview', function(event, isInView, visiblePartX, visiblePartY){
			    	if (isInView) {
		    		setTimeout(function(){
		    			circleProgress();
		    		},200);
		    	};
		    });

		});

	})(jQuery);

/*  TABS
/*======================*/
	
	(function($){

		"use strict";

		$('.nz-tabs').each(function(){

			var $this    = $(this),
				tabs     = $this.find('.tab'),
				tabsQ    = tabs.length,
				tabsDefaultWidth  = 0,
				tabsDefaultHeight = 0,
				tabsContent = $this.find('.tab-content');

			tabs.wrapAll('<div class="tabset nz-clearfix"></div>');
			tabsContent.wrapAll('<div class="tabs-container nz-clearfix"></div>');

			var tabSet = $this.find('.tabset');

				if(!tabs.hasClass('active')){
					tabs.first().addClass('active');
				}
				
				tabs.each(function(){
					tabsDefaultWidth += $(this).outerWidth();
					tabsDefaultHeight += $(this).outerHeight();
				});

				function OverflowCorrection(){

					if(tabsDefaultWidth >= $this.outerWidth()  && $this.hasClass('horizontal')){
						$this.addClass('tab-full');
					} else {
						$this.removeClass('tab-full');
					}

				}

				if(tabsQ >= 2){

					tabs.on('click', function(){
						var $self = $(this);
						
						if(!$self.hasClass("active")){

							$self.addClass("active").siblings().removeClass("active");
							tabsContent.hide(0);
							tabsContent.eq($self.index()).show(0);
						}
						
					});
				}

				OverflowCorrection();

				$(window).resize(OverflowCorrection);			

		});

	})(jQuery);

	(function($){

		"use strict";

		$('.wpb_tabs').each(function(){

			var $this = $(this),
				tabs = $this.find('.wpb_tabs_nav li'),
				tabsQ = tabs.length,
				tabSet = $this.find('.wpb_tabs_nav'),
				tabsDefaultWidth  = 0,
				tabsDefaultHeight = 0,
				tabsContent = $this.find('.wpb_tab');

				$this.find('.wpb_tab').wrapAll('<div class="tabs-container"/>');

				if(!tabs.hasClass('active')){
					tabs.first().addClass('active');
				}

				tabs.find('a').on('click',function(e){
					e.preventDefault();
				});
				
				tabs.each(function(){
					tabsDefaultWidth += $(this).outerWidth();
					tabsDefaultHeight += $(this).outerHeight();
				});

				function OverflowCorrection(){

					if(tabsDefaultWidth >= $this.outerWidth()){
						$this.addClass('tab-full');
					} else {
						$this.removeClass('tab-full');
					}

				}

				if(tabsQ >= 2){

					tabs.on('click', function(){
						$self = $(this);

						if(!$self.hasClass("active")){

							$self.addClass("active").siblings().removeClass("active");
							tabsContent.hide();
							tabsContent.eq($self.index()).fadeIn();
						}
						
					});
				}

				OverflowCorrection();

				$(window).resize(OverflowCorrection);			

		});

	})(jQuery);

/*  TABS IMG
/*======================*/
	
	(function($){

		"use strict";

		$('.nz-tabs-image').each(function(){

			var $this             = $(this),
				tabsContent       = $this.find('.tab-img-content'),
				tabsImg           = $this.find('.tab-image'),
				tabsDefaultWidth  = 0;

			tabsImg.wrapAll('<div class="tab-img-container nz-clearfix"></div>');
			tabsContent.wrapAll('<div class="tabs-img-content nz-clearfix"></div>');

			$this.find('.tabs-img-content').wrapAll('<div class="tab-img-panel"></div>');
			$this.find('.tab-img-panel').prepend('<div class="tab-img-tabset nz-clearfix"></div>');
			for (var i = 0; i < tabsContent.length; i++) {
				$this.find('.tab-img-tabset').append('<div data-target="'+$(tabsContent[i]).attr('data-title')+'" class="tab-img">'+$(tabsContent[i]).attr('data-title')+'</div>');
			};

			var tabs  = $this.find('.tab-img'),
				tabsQ = tabs.length;

			tabs.first().addClass('active');
			tabs.each(function(){
				tabsDefaultWidth += $(this).outerWidth();
			});

			function OverflowCorrection(){

				if(tabsDefaultWidth >= $this.find('.tab-img-panel').outerWidth()){
					$this.addClass('tab-full');
				} else {
					$this.removeClass('tab-full');
				}

			}

			OverflowCorrection();
			$(window).resize(OverflowCorrection);

			if(tabsQ >= 2){

				tabs.on('click', function(){
					var $self = $(this);
					
					if(!$self.hasClass("active")){
						$self.addClass("active").siblings().removeClass("active");
						tabsContent.hide();
						tabsContent.eq($self.index()).show();
						tabsImg.hide();
						tabsImg.eq($self.index()).fadeIn();
					}
					
				});
			}
		});

	})(jQuery);

	(function($){

		"use strict";

		$('.wpb_tabs').each(function(){

			var $this = $(this),
				tabs = $this.find('.wpb_tabs_nav li'),
				tabsQ = tabs.length,
				tabSet = $this.find('.wpb_tabs_nav'),
				tabsDefaultWidth  = 0,
				tabsDefaultHeight = 0,
				tabsContent = $this.find('.wpb_tab');

				$this.find('.wpb_tab').wrapAll('<div class="tabs-container"/>');

				if(!tabs.hasClass('active')){
					tabs.first().addClass('active');
				}

				tabs.find('a').on('click',function(e){
					e.preventDefault();
				});
				
				tabs.each(function(){
					tabsDefaultWidth += $(this).outerWidth();
					tabsDefaultHeight += $(this).outerHeight();
				});

				function OverflowCorrection(){

					if(tabsDefaultWidth >= $this.outerWidth()){
						$this.addClass('tab-full');
					} else {
						$this.removeClass('tab-full');
					}

				}

				if(tabsQ >= 2){

					tabs.on('click', function(){
						$self = $(this);

						if(!$self.hasClass("active")){

							$self.addClass("active").siblings().removeClass("active");
							tabsContent.hide();
							tabsContent.eq($self.index()).fadeIn();
						}
						
					});
				}

				OverflowCorrection();

				$(window).resize(OverflowCorrection);			

		});

	})(jQuery);

/*  ACCORDION
/*======================*/
	
	(function($){

		"use strict";

		$('.nz-accordion').each(function(){
			var $this = $(this),
				title = $this.find('.toggle-title'),
				content =  $this.find('.toggle-content');

				if($this.attr('data-collapsible') == "true"){
					$this.find('.active:not(:first)').removeClass("active");
				}

				content.hide();

				$this.find('.toggle-title.active').next().show();

				title.on('click', function(){

					var $self = $(this);
					var $selfContent = $self.next();
			
					if($this.attr('data-collapsible') == "true"){

						if(!$self.hasClass('active')){

							$self.addClass("active").siblings().removeClass("active");
							content.slideUp(150);
							$selfContent.slideDown(150);
						}

					} else {

						if(!$self.hasClass('active')){

							$self.addClass("active");
							$selfContent.stop().slideDown(150);

						} else {

							$self.removeClass("active");
							$selfContent.stop().slideUp(150);

						}

					}

				});

		});

	})(jQuery);

/*  COUNTERS
/*======================*/
	
	(function($){

		"use strict";

		$('.nz-counter').each(function(){

			var $self = $(this),
				count = $self.find('.count-value');

			function counter(){
				count.each(function(){
					var $this = $(this);
					$this.counterUp({ delay: 50,time: 2000 });;
				})
			}

			$self.one('inview', function(event, isInView, visiblePartX, visiblePartY){
			    if (isInView) {
		    		setTimeout(function(){
		    			counter();
		    		}, 250)
		    	};
		    });

		});

	})(jQuery);

/*  WOOCOMMERCE
/*======================*/

	(function($){

		"use strict";

		var $singleProductImages = $('.woocommerce .single-product-image .images'),
			thumbs  = $singleProductImages.find('.thumbnails > a'),
			thumbsQ = thumbs.length,
			galleryImage = $singleProductImages.find('.woocommerce-main-image');
			galleryImage.find('img').removeAttr('srcset');

			thumbs.hoverIntent(
				function(e){
					var $self = $(this);
					e.preventDefault();

					var pruductImg      = $self.attr('href');
					var prudctImgFORMAT = pruductImg.substr(pruductImg.length - 3);
					var prudctImgSTRING = pruductImg.substr(0, pruductImg.length - 4);
					var productNewImage = prudctImgSTRING+'-460x520.'+prudctImgFORMAT;
					$self.addClass("active").siblings().removeClass("active");
					galleryImage.attr('href',$self.attr('href'));
					galleryImage.find('img').attr('src',productNewImage);
				},
				function(e){
					var $self = $(this);
					e.preventDefault();

					var pruductImg      = $self.attr('href');
					var prudctImgFORMAT = pruductImg.substr(pruductImg.length - 3);
					var prudctImgSTRING = pruductImg.substr(0, pruductImg.length - 4);
					var productNewImage = prudctImgSTRING+'-460x520.'+prudctImgFORMAT;
					$self.addClass("active").siblings().removeClass("active");
					galleryImage.attr('href',$self.attr('href'));
					galleryImage.find('img').attr('src',productNewImage);
				}
			);

			thumbs.on('click', function(e){
				var $self = $(this);
				e.preventDefault();
			});


		$('.woocommerce .images img').each(function(){
			var $this = $(this);
			$this.wrap('<div class="nz-thumbnail"></div>')
			$this.parent().prepend('<div class="ninzio-overlay"><span class="nz-overlay-before"></span></div>');
		});

		$('.woocommerce-pagination a.next').html('<span class="icon icon-arrow-right8">');
		$('.woocommerce-pagination a.prev').html('<span class="icon icon-arrow-left8">');

		$('.loop .product, .nz-related-products .product, .nz-recent-products .product').each(function(){

			var product         = $(this);
			var addToCard       = product.find('.add_to_cart_button');
			var productProgress = product.find('.shop-loader');

			if (!addToCard.hasClass('added')) {

				addToCard.on('click',function(){

					var $this = $(this);
					productProgress.fadeIn(400,function(){

						var $thisProgress = $(this);
							$this.fadeOut(400);

						setTimeout(function(){
							$thisProgress.fadeOut(400);
						}, 1500);

					});
					
				});
			};
		});

	})(jQuery);

/*  CONTENT BOXES, 
	COLUMNS, 
	CLIENTS, 
	CAROUSEL, 
	PRICING TABLES, 
	PERSONS, 
	RECENT PROJECTS, 
	GALLERY
/*======================*/
	
	(function($){

		"use strict";

		function animateInView(container,delay){

			container.each(function(){

				var $this   = $(this);
				var child   = $this.children();
				var length  = child.length;
				var i       = 0;
				var timer   = '';

				function animation() {
					$(child[i]).addClass('css-animated');
					i++;
					if (i == length ) {clearInterval(timer);}
				}

				$this.one('inview', function(event, isInView, visiblePartX, visiblePartY){
			    	if (isInView) {
						var timer = setInterval(animation, delay); 
			    	};
			    });
			});

		}

        animateInView($('.nz-content-box[data-animate="true"]'),250);
        animateInView($('.nz-clients[data-animate="true"]'), 250);
        animateInView($('.nz-carousel[data-animate="true"]'), 250);
        animateInView($('.nz-pricing-table[data-animate="true"]'), 250);
        animateInView($('.nz-persons[data-animate="true"]'), 250);
        animateInView($('.nz-recent-events[data-animate="true"] .nz-events-posts'),250);
        animateInView($('.nz-recent-projects[data-animate="true"] .recent-projects-wrap'),250);
        animateInView($('.nz-recent-posts[data-animate="true"] .posts-inner'),250);
        animateInView($('.nz-gallery'),250);

        animateInView($('.loop .animation-true .blog-post'),250);
        animateInView($('.loop .animation-true .events-post'),250);
        animateInView($('.loop .animation-true .projects-post'),250);
        animateInView($('.shop-layout.animation-true .products'),250);

        $('.nz-section .nz-row').each(function(){

        		var $this   = $(this);
				var child   = $this.find('.col-animate-true');
				var length  = child.length;
				var i       = 0;
				var timer   = '';

				function animation() {
					$(child[i]).addClass('css-animated');
					i++;
					if (i == length ) {clearInterval(timer);}
				}

				$this.one('inview', function(event, isInView, visiblePartX, visiblePartY){
			    	if (isInView) {
						var timer = setInterval(animation, 250); 
			    	};
			    });

        });

		
	})(jQuery);

/*  EXTERNAL PLUGINS
/*======================*/
	
	(function($){

		"use strict";

		/*  TIPSO
		/*-----------------------*/

			$('.nz-popup')
			.tipso({
			    background      : 'rgba(0,0,0,0.8)',
			    color           : '#ffffff',
			    animationIn     : 'flipInX',
  				animationOut    : 'flipOutX',
			    width           : 350,
			    useTitle        : false
			})
			.unbind("click");

		/*  FLEXSLIDER
		/*-----------------------*/

			$('.nz-media-slider').each(function(){

				var $this = $(this);

				$this.flexslider({
					animation: $this.data('effect'),
					smoothHeight:false,
					touch: true,
					animationSpeed: 450,
					controlNav:$this.data('bullets'),
					slideshow:$this.data('autoplay'),
					directionNav:$this.data('navigation'),
					pauseOnHover: true,
					prevText: "",
					nextText: "",
				});

			});

			$('.post-gallery').flexslider({
				animation:'fade',
				smoothHeight:false,
				touch: true,
				animationSpeed: 450,
				slideshow:false,
				directionNav:false,
				controlNav:true,
				pauseOnHover: true,
				prevText: "",
				nextText: "",
			});

		/*  TIMER
		/*-----------------------*/

			$('.nz-timer').each(function(){
				
				var $this        = $(this)
					$this.find('ul').countdown({
						date: $this.data('enddate'),
						offset: -8,
						day: 'Day',
						days: 'Days'
					});
			});

    	/*  CUSTOM SCROLL
		/*-----------------------*/

			$('.custom-scroll-bar').perfectScrollbar({
				suppressScrollX:true,
				includePadding:true
			});

		/*  NIVOLIGHTBOX
		/*-----------------------*/

			$(".woocommerce-main-image,a.nz-single-image[href$='.jpg'],a.nz-single-image[href$='.jpeg'],a.nz-single-image[href$='.png'],a.nz-single-image[href$='.gif'],a.nz-single-image[href$='.svg']").nivoLightbox({
				effect: 'slideDown',
			    theme: 'default', 
			    keyboardNav: true, 
			    clickOverlayToClose: true, 
			    errorMessage: 'The requested content cannot be loaded. Please try again later.' 
			});

			$('a.video-modal').nivoLightbox({
				effect: 'fadeScale',
			    theme: 'default', 
			    keyboardNav: true, 
			    clickOverlayToClose: true, 
			    errorMessage: 'The requested content cannot be loaded. Please try again later.' 
			});

			$('a[data-lightbox-gallery="gallery3"]').nivoLightbox({
				effect: 'fadeScale',
			    theme: 'default', 
			    keyboardNav: true, 
			    clickOverlayToClose: true, 
			    errorMessage: 'The requested content cannot be loaded. Please try again later.' 
			});

			$('a[data-lightbox-gallery="gallery1"]').nivoLightbox({
				effect: 'fadeScale',
			    theme: 'default', 
			    keyboardNav: true, 
			    clickOverlayToClose: true, 
			    errorMessage: 'The requested content cannot be loaded. Please try again later.' 
			});

			$('.nz-gallery').each(function(){
				$(this).find('a[data-lightbox-gallery="gallery2"]').nivoLightbox({
					effect: 'fadeScale',
				    theme: 'default', 
				    keyboardNav: true, 
				    clickOverlayToClose: true, 
				    errorMessage: 'The requested content cannot be loaded. Please try again later.' 
				});
			});

		/*  CAROUSEL
		/*-----------------------*/

			$(".nz-carousel").each(function(){

				var $this    = $(this),
					$col     = $this.data('columns'),
					$col1024 = ($col == 1) ? 1 : ($col > 3) ? 2 : $col,
					$auto    = $this.data('autoplay');

				$this.owlCarousel({
 
				    items :$col,
				    itemsDesktop : [1280,$col],
				    itemsDesktopSmall : [1024,$col1024],
				    itemsTablet: [768,$col1024],
				    itemsTabletSmall: [640,1],
				    itemsMobile : [480,1],
				    singleItem : false,
				 
				    //Basic Speeds
				    slideSpeed : 200,
				    paginationSpeed : 800,
				    rewindSpeed : 1000,
				 
				    //Autoplay
				    autoPlay : $auto,
				    stopOnHover : true,
				 
				    // Navigation
				    navigation : true,
				    navigationText : ["",""],
				    rewindNav : true,
				    scrollPerPage : false,
				 
				    //Pagination
				    pagination : false,
				    paginationNumbers: false,
				 
				    // Responsive 
				    responsive: true,
				    responsiveRefreshRate : 200,
				    responsiveBaseWidth: window,

				    autoHeight:true
				    
				});
			});

			$(".nz-tweets").each(function(){

				var $this    = $(this),
					$auto    = $this.data('autoplay');

				$this.find('ul').owlCarousel({
 
				    singleItem : true,
				 
				    //Basic Speeds
				    slideSpeed : 200,
				    paginationSpeed : 800,
				    rewindSpeed : 1000,
				 
				    //Autoplay
				    autoPlay : $auto,
				    stopOnHover : true,
				 
				    // Navigation
				    navigation : false,
				    navigationText : ["",""],
				 
				    //Pagination
				    pagination : true,
				    paginationNumbers: false,
				 
				    // Responsive 
				    responsive: true,
				    responsiveRefreshRate : 200,
				    responsiveBaseWidth: window,
				    transitionStyle:'goDown',
				    touchDrag:false
				});
			});

			$(".nz-gallery.carousel").each(function(){

				var $this    = $(this),
					$col     = $this.data('columns'),
					$auto    = $this.data('autoplay'),
					$col1024 = ($col < 3) ? 2 : 3;

				$this.owlCarousel({
 
				    items :$col,
				    itemsDesktop : [1280,$col],
				    itemsDesktopSmall : [1024,$col1024],
				    itemsTablet: [768,2],
				    itemsTabletSmall: [640,1],
				    itemsMobile : [480,1],
				    singleItem : false,
				 
				    //Basic Speeds
				    slideSpeed : 200,
				    paginationSpeed : 800,
				    rewindSpeed : 1000,
				 
				    //Autoplay
				    autoPlay : $auto,
				    stopOnHover : true,
				 
				    // Navigation
				    navigation : false,
				    navigationText : ["",""],
				    rewindNav : true,
				    scrollPerPage : false,
				 
				    //Pagination
				    pagination : true,
				    paginationNumbers: false,
				 
				    // Responsive 
				    responsive: true,
				    responsiveRefreshRate : 200,
				    responsiveBaseWidth: window
				    
				});
			});

		/*  SLICK CAROUSEL
		/*-----------------------*/

			$('.nz-slick-carousel').each(function(){
				var $this             = $(this),
					dataAutoplay      = $this.data('autoplay'),
					dataAutoplaySpeed = $this.data('autoplayspeed');

				var respSettings = [
					{breakpoint: 1920,settings: {centerPadding: '450px'}},
					{breakpoint: 1600,settings: {centerPadding: '350px'}},
				    {breakpoint: 1366,settings: {centerPadding: '250px'}},
					{breakpoint: 1280,settings: {centerPadding: '200px'}},
					{breakpoint: 1024,settings: {centerPadding: '150px'}},
					{breakpoint: 768, settings: {centerPadding: '100px'}},
					{breakpoint: 640, settings: {centerPadding: '100px'}},
					{breakpoint: 480, settings: {centerPadding: '0px'}},
				    {breakpoint: 320, settings: {centerPadding: '0px'}}
				];

				if ($('#wrap').hasClass('nz-boxed')) {
					respSettings = [
						{breakpoint: 1920,settings: {centerPadding: '220px'}},
						{breakpoint: 1600,settings: {centerPadding: '220px'}},
					    {breakpoint: 1366,settings: {centerPadding: '220px'}},
						{breakpoint: 1280,settings: {centerPadding: '200px'}},
						{breakpoint: 1024,settings: {centerPadding: '150px'}},
						{breakpoint: 768, settings: {centerPadding: '100px'}},
						{breakpoint: 640, settings: {centerPadding: '100px'}},
						{breakpoint: 480, settings: {centerPadding: '0px'}},
					    {breakpoint: 320, settings: {centerPadding: '0px'}}
					];
				}

				$this.slick({
					centerMode: true,
					speed:500,
					easing:"easeOutQuart",
					centerPadding: '250px',
					slidesToShow: 1,
					autoplay:dataAutoplay,
					autoplaySpeed:dataAutoplaySpeed,
					prevArrow:"<span class='icon-arrow-left9 slick-prev'></span>",
					nextArrow:"<span class='icon-arrow-right9 slick-next'></span>",
					responsive: respSettings
				});
			});

		/*  SHUFFLE
		/*-----------------------*/

			// imagesLoaded( $('.blog-layout-wrap:not(.standard) .loop .blog-post'), function() {
			// 	$('.blog-layout-wrap:not(.standard) .loop .blog-post').shuffle({
			// 		itemSelector: '.post',
			// 		sizer:$('.loop .blog-post').find('.post'),
			// 		gutterWidth:0,
			// 		speed: 300,
			// 		easing: 'ease-out' 
			// 	});
			// });


			// imagesLoaded( $('.nz-recent-projects'), function() {
			// 	$('.nz-recent-projects .recent-projects-wrap').shuffle({
			// 		itemSelector: '.projects',
			// 		sizer:'.projects',
			// 		gutterWidth:0,
			// 		speed: 300,
			// 		easing: 'ease-out' 
			// 	});
			// });

			// $('.nz-recent-projects .nz-projects-filter .filter').on('click', function() {
			// 	var $this    = $(this),
			// 		isActive = $this.hasClass( 'active' ),
			// 		group    = $this.data('group');

			// 		if ( !isActive ) {
			// 			$('.nz-projects-filter .active').removeClass('active');
			// 			$this.toggleClass('active');
			// 			$('.recent-projects-wrap').shuffle( 'shuffle', group );
			// 		}
		 //    });

			// imagesLoaded( $('.loop .projects-post'), function() {
			// 	$('.loop .projects-post').shuffle({
			// 		itemSelector: '.loop .projects',
			// 		sizer:$('.loop .projects-post').find('.projects'),
			// 		gutterWidth:0,
			// 		speed: 300,
			// 		easing: 'ease-out' 
			// 	});
			// });

			// $('.projects-layout-wrap .nz-projects-filter .filter').on('click', function() {
			// 	var $this    = $(this),
			// 		isActive = $this.hasClass( 'active' ),
			// 		group    = $this.data('group');

			// 		if ( !isActive ) {
			// 			$('.nz-projects-filter .active').removeClass('active');
			// 			$this.toggleClass('active');
			// 			$('.projects-post').shuffle( 'shuffle', group );
			// 		}
		 //    });

			// $('ul.products').each(function(){
			// 	var $container = $(this);
			// 	imagesLoaded( $container, function() {
			// 		$container.shuffle({
			// 			itemSelector: '.product',
			// 			sizer:$container.find('.product'),
			// 			gutterWidth:0,
			// 			speed: 300,
			// 			easing: 'ease-out' 
			// 		});
			// 	});
			// 	$container.parent().find('.nz-product-filter .filter').on('click', function() {
			// 		var $this    = $(this),
			// 			isActive = $this.hasClass( 'active' ),
			// 			group    = $this.data('group');

			// 			if ( !isActive ) {
			// 				$('.nz-product-filter .active').removeClass('active');
			// 				$this.toggleClass('active');
			// 				$container.shuffle( 'shuffle', group );
			// 			}
			//     });
			// });

	})(jQuery);