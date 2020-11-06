 var $ = jQuery.noConflict();

$(document).ready(function($) {
   /* ---------------------------------------------------------------------- */
    /*  Contact Form
    /* ---------------------------------------------------------------------- */

    var submitContact = $('#submit_contact'),
        message = $('#msg');

    submitContact.on('click', function(e){
        e.preventDefault();

        var $this = $(this);
        
        $.ajax({
            type: "POST",
            url: 'contact.php',
            dataType: 'json',
            cache: false,
            data: $('#contact-form').serialize(),
            success: function(data) {

                if(data.info !== 'error'){
                    $this.parents('form').find('input[type=text],textarea,select').filter(':visible').val('');
                    message.hide().removeClass('success').removeClass('error').addClass('success').html(data.msg).fadeIn('slow').delay(5000).fadeOut('slow');
                } else {
                    message.hide().removeClass('success').removeClass('error').addClass('error').html(data.msg).fadeIn('slow').delay(5000).fadeOut('slow');
                }
            }
        });
    });


  /* audio player START */
  if (jQuery("audio").length > 0) {
      jQuery(document).ready(function($) {
          (function(doc){var addEvent='addEventListener',type='gesturestart',qsa='querySelectorAll',scales=[1,1],meta=qsa in doc?doc[qsa]('meta[name=viewport]'):[];function fix(){meta.content='width=device-width,minimum-scale='+scales[0]+',maximum-scale='+scales[1];doc.removeEventListener(type,fix,true);}if((meta=meta[meta.length-1])&&addEvent in doc){fix();scales=[.25,1.6];doc[addEvent](type,fix,true);}}(document));
          jQuery( function($) { $( 'audio' ).audioPlayer(); } ); 
      });
  }
  /* audio player END */

      
  /* Post filter START */ 
  if (jQuery(".pego-isotope-wrapper").length > 0) {   
  jQuery(document).ready(function(){

   jQuery(function() {
      var container = jQuery(".pego-isotope-wrapper");
            container.isotope({
              itemSelector : ".isotope-item",
              layoutMode: "masonry",
              transitionDuration: "0.7s"  
        });
        var optionSets = jQuery(".option-set"),
            optionLinks = optionSets.find("a");

        optionLinks.click(function(){
          var $this = jQuery(this);
          
          if ( $this.hasClass("selected") ) {
            return false;
          }
          var optionSet = $this.parents(".option-set");
          optionSet.find(".selected").removeClass("selected");
          $this.addClass("selected");
    
          var options = {},
              key = optionSet.attr("data-option-key"),
              value = $this.attr("data-option-value");
       
          value = value === "false" ? false : value;
          options[ key ] = value;
          if ( key === "layoutMode" && typeof changeLayoutMode === "function" ) {
           
            changeLayoutMode( $this, options )
          } else {
            // otherwise, apply new options
            container.isotope( options );
          }
          
          return false;
        });
      
      
   });
  });  

  jQuery(window).load(function(){
      var container = jQuery(".pego-isotope-wrapper");
          container.isotope({
          itemSelector : ".isotope-item",
          layoutMode: "masonry",
          transitionDuration: "0.7s"  
      });
  });

  jQuery(window).load(function(){
      setTimeout(function(){
          var container = jQuery(".pego-isotope-wrapper");
              container.isotope({
              itemSelector : ".isotope-item",
              layoutMode: "masonry",
              transitionDuration: "0.7s"  
        });
        },700);
  });





  jQuery(window).smartresize(function(){
      "use strict";
      var container = jQuery(".pego-isotope-wrapper");
          container.isotope({
          itemSelector : ".isotope-item",
          layoutMode: "masonry",
          transitionDuration: "0.7s"  
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

  if (jQuery(".pego-isotope-wrapper-fitrows").length > 0) {   
  jQuery(document).ready(function(){

   jQuery(function() {
      var container = jQuery(".pego-isotope-wrapper-fitrows");
            container.isotope({
              itemSelector : ".isotope-item",
              layoutMode: "fitRows",
              transitionDuration: "0.7s"  
        });
        var optionSets = jQuery(".option-set"),
            optionLinks = optionSets.find("a");

        optionLinks.click(function(){
          var $this = jQuery(this);
          
          if ( $this.hasClass("selected") ) {
            return false;
          }
          var optionSet = $this.parents(".option-set");
          optionSet.find(".selected").removeClass("selected");
          $this.addClass("selected");
    
          var options = {},
              key = optionSet.attr("data-option-key"),
              value = $this.attr("data-option-value");
       
          value = value === "false" ? false : value;
          options[ key ] = value;
          if ( key === "layoutMode" && typeof changeLayoutMode === "function" ) {
           
            changeLayoutMode( $this, options )
          } else {
            // otherwise, apply new options
            container.isotope( options );
          }
          
          return false;
        });
      
      
   });
  });  

  jQuery(window).load(function(){
      var container = jQuery(".pego-isotope-wrapper-fitrows");
          container.isotope({
          itemSelector : ".isotope-item",
          layoutMode: "fitRows",
          transitionDuration: "0.7s"  
      });
  });

  jQuery(window).load(function(){
      setTimeout(function(){
          var container = jQuery(".pego-isotope-wrapper-fitrows");
              container.isotope({
              itemSelector : ".isotope-item",
              layoutMode: "fitRows",
              transitionDuration: "0.7s"  
        });
        },700);
  });


  jQuery(window).smartresize(function(){
      "use strict";
      var container = jQuery(".pego-isotope-wrapper-fitrows");
          container.isotope({
          itemSelector : ".isotope-item",
          layoutMode: "fitRows",
          transitionDuration: "0.7s"  
      });
      
  });
  }

  jQuery(window).smartresize(function(){
      if (jQuery(window).width() > 959) {
          jQuery('.mobile-menu-wrapper').css({'display': 'none'});
      }
  });

  /* Post filter END */   







  /* Diamonds animation
   ---------------------------------------------------------- */


  jQuery(window).load(function($) { 
      setTimeout(function(){ 
        jQuery('.wpb_animate_when_almost_visible1:not(.wpb_start_animation)').waypoint(function () {
          jQuery(this).addClass('wpb_start_animation');
          }, { offset:'85%' });
     }, 700);
      setTimeout(function(){ 
        jQuery('.wpb_animate_when_almost_visible4:not(.wpb_start_animation)').waypoint(function () {
          jQuery(this).addClass('wpb_start_animation');
          }, { offset:'85%' });
     }, 1000);
     setTimeout(function(){ 
        jQuery('.wpb_animate_when_almost_visible2:not(.wpb_start_animation)').waypoint(function () {
          jQuery(this).addClass('wpb_start_animation');
          }, { offset:'85%' });
     }, 1300);
     setTimeout(function(){ 
        jQuery('.wpb_animate_when_almost_visible5:not(.wpb_start_animation)').waypoint(function () {
          jQuery(this).addClass('wpb_start_animation');
          }, { offset:'85%' });
     }, 1600);
     setTimeout(function(){ 
        jQuery('.wpb_animate_when_almost_visible3:not(.wpb_start_animation)').waypoint(function () {
          jQuery(this).addClass('wpb_start_animation');
          }, { offset:'85%' });
     }, 1900);
     setTimeout(function(){ 
        jQuery('.wpb_animate_when_almost_visible6:not(.wpb_start_animation)').waypoint(function () {
          jQuery(this).addClass('wpb_start_animation');
          }, { offset:'85%' });
     }, 2100);
     setTimeout(function(){ 
        jQuery('.wpb_animate_when_almost_visible7:not(.wpb_start_animation)').waypoint(function () {
          jQuery(this).addClass('wpb_start_animation');
          }, { offset:'85%' });
     }, 2400);
   });
   


  if (navigator.appVersion.indexOf("Win")!=-1) 
  {
    jQuery('body').css({'background': '#f7f7f7'});
  }

});