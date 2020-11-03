 var icons = new Skycons({"color": "#FFD700"}),
         list  = [
               "clear-day"
         ],
         i;

 for(i = list.length; i--; )
       icons.set(list[i], list[i]);

 icons.play();


var icons = new Skycons({"color": "#f5f5f5"}),
        list  = [
              "clear-night", "partly-cloudy-day", "partly-cloudy-night", "cloudy", "cloudy-night", "rain", "rain-night", "sleet", "sleet-night", "snow", "snow-night", "wind", "wind-night", "fog", "fog-night"
        ],
        i;

 for(i = list.length; i--; )
       icons.set(list[i], list[i]);

 icons.play();

// Second weather start SCRIPTS

$(document).ready(function() { 
          $("#owl-demo").owlCarousel({ 
            autoPlay: 3000, //Set AutoPlay to 3 seconds

            items : 3,
            itemsDesktop : [768,3],
            itemsDesktopSmall : [414,4]

          });
 
}); 

// Second weather end SCRIPTS 
var icons = new Skycons({"color": "#fff"}),
    list  = [
          "clear-night", "partly-cloudy-day", "partly-cloudy-night", "cloudy", "cloudy-night", "rain", "rain-night", "sleet", "sleet-night", "snow", "snow-night", "wind", "wind-night", "fog", "fog-night"
    ],
    i;

 for(i = list.length; i--; )
       icons.set(list[i], list[i]);

 icons.play();


// Time-JavaScript 

$(document).ready(function() { 
    $("#owl-demo2").owlCarousel({

      autoPlay: 3000, //Set AutoPlay to 3 seconds
      items : 6,
      itemsDesktop : [640,5],
      itemsDesktopSmall : [414,4]

    });

}); 

// Time-JavaScript
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
    }
    function checkTime(i) {
    if (i < 10) {i = "0" + i}; // add zero in front of numbers < 10
    return i;
}