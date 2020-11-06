(function( $ ) {
  $( document ).ready( function() {
    $( '.typed-me' ).each( function() {
      var options = {}, strings = [];
      for( var key in this.dataset ) {
        if( key.substr( 0, 6 ) == "string" ) {
          var v = this.dataset[ key ].replace( /&quot;/g, '"' );
          // Replace & with &amp; otherwise the browser freezes.
          v = v.replace(/"/g, '&quot;');
          v = v.replace('&amp;', '&'); // in case the user already used &amp;
          v = v.replace('&', '&amp;');

          strings.push( v );
        } else {
          options[ key ] = parseInt( this.dataset[ key ] );
        }
      }

      options[ 'strings' ] = strings;
      options[ 'contentType' ] = 'html';

      $( this ).typed( options );
    });
  });
})(jQuery);
