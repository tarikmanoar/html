/* *********************************************************************************************************************
 * Global namespace "ish"
 */
if (ish == null || typeof(ish) !== "object") { var ish = {} }

/* *********************************************************************************************************************
 * jQuery Ready - Activate everything
 */
jQuery(document).ready(function($) {

    // Widgets ---------------------------------------------------------------------------------------------------------
    ish.activate_widget_dribbble();
    ish.activate_widget_twitter();

});


/* *********************************************************************************************************************
 * function_exists() definition
 */
function function_exists( name ){
    return ( 'function' === eval( 'typeof ish.'  + name ) );
}


/* *********************************************************************************************************************
 * Widgets
 */

// Dribbble widget -----------------------------------------------------------------------------------------------------
if ( ! function_exists( 'activate_widget_dribbble' ) ) {
    ish.activate_widget_dribbble = function (){

        var bbb = jQuery('.dribbble-widget');
        if ( bbb.length > 0 ) {

            bbb.each( function() {
                var me = jQuery(this);

                jQuery.jribbble.getShotsByPlayerId( (me.attr('data-user-name') ? me.attr('data-user-name') : 'IshYoBoy') , function(playerShots) {
                    var html = '';

                    jQuery.each(playerShots.shots, function(i, shot) {
                        html += '<a href="' + shot.url + '">';
                        html += '<img src="' + shot.image_teaser_url + '" ';
                        html += 'alt="' + shot.title + '"></a>';
                    });

                    me.html(html);
                }, {
                    page: 1,
                    per_page: ( me.attr('data-shots-count' ) ? me.attr('data-shots-count') : 9 )
                });
            });
        }

    }
}


// Twitter widget ------------------------------------------------------------------------------------------------------
if ( ! function_exists( 'activate_widget_twitter' ) ) {
    ish.activate_widget_twitter = function (){

        jQuery('div[class^="tweets-"]').each( function(){
            var me = jQuery(this);
            jQuery(this).tweetMachine( (me.attr('data-username') ? me.attr('data-username') : 'ishyoboydotcom'), {
                limit: parseInt(jQuery(this).attr('class').substr(7), 10),
                endpoint: 'ishyoboy_get_tweets',
                backendScript:  php_array.admin_ajax,
                autoRefresh: false,
                tweetFormat: "<div class='tweet'><div class='text'></div><div class='tweet-details'><a href='' class='time'></a></div></div>"
            });
        });

    }
}