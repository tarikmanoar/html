// Calender script
$('.calendar').pignoseCalendar();


// Date And Time

var d = new Date();
var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
$("#month").text(monthNames[d.getMonth()]);
$("#day").text(d.getDate());
var weekNames = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
$("#week").text(weekNames[d.getDay()]);
function timer() {
  var d = new Date();
  var h = d.getHours(),
      mm = d.getMinutes(),
      ss = d.getSeconds(),
      dd = 'AM',
      hh = h;
  if (hh >= 12) {
    hh = h - 12;
    dd= 'PM';
  }
  if (hh === 0) {
    hh = 12;
  }
  hh = hh<10?'0'+hh:hh;
  mm = mm<10?'0'+mm:mm;
  ss = ss<10?'0'+ss:ss;
      
  $("#hour").html(hh);
  $("#minut").html(mm);
  $("#date").html(dd);

}
setInterval(function(){ timer();}, 1000);


// weather script

var icons = new Skycons({"color": "#FFD700"}),
    list  = ["clear-day"],
    i;
 for(i = list.length; i--; )
    icons.set(list[i], list[i]);
    icons.play();

var icons = new Skycons({"color": "#6156ce"}),
    list  = ["clear-night", "partly-cloudy-day","partly-cloudy-night", "cloudy", "rain", "sleet", "snow", "wind","fog"],
    i;
 for(i = list.length; i--; )
    icons.set(list[i], list[i]);
    icons.play();