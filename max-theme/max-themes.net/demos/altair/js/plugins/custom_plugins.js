jQuery.fn.center = function () {
	"use strict";
    this.css("left", (jQuery(window).width() / 2) - (this.outerWidth() / 2));
    return this;
}

jQuery.fn.animateAuto = function(prop, speed, callback){
	"use strict";
    var elem, height, width;
    return this.each(function(i, el){
        el = jQuery(el), elem = el.clone().css({"height":"auto"}).appendTo("body");
        
        if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1)
        {
        	height = elem.height();
	        height = elem.css("auto"),
	        width = elem.css("width");
        }
        else
        {
	        height = elem.height();
	        height = height,
	        width = elem.css("width");
	    }
        elem.remove();
        
        if(prop === "height")
            el.animate({"height":height+15}, speed, callback);
        else if(prop === "max-height")
            el.animate({"max-height":height}, speed, callback);
        else if(prop === "width")
            el.animate({"width":width}, speed, callback);  
        else if(prop === "both")
            el.animate({"width":width,"height":height}, speed, callback);
    });  
}

function adjustIframes()
{
  jQuery('iframe').each(function(){
  
    var
    $this       = jQuery(this),
    proportion  = $this.data( 'proportion' ),
    w           = $this.attr('width'),
    actual_w    = $this.width();
    
    if ( ! proportion )
    {
        proportion = $this.attr('height') / w;
        $this.data( 'proportion', proportion );
    }
  
    if ( actual_w != w )
    {
        $this.css( 'height', Math.round( actual_w * proportion ) + 'px !important' );
    }
  });
}

function is_touch_device() {
  return 'ontouchstart' in window // works on most browsers 
      || 'onmsgesturechange' in window; // works on ie10
};

jQuery.fn.verticalAlign = function (){
	"use strict";
	var verticalMarginTop = (jQuery(this).parent().height() - jQuery(this).height())/2;
	if(verticalMarginTop > 0)
	{
    	return this.css("margin-top",verticalMarginTop + 'px' );
    }
};