$(function () {
    $('[data-toggle="tooltip"]').tooltip();

// Date And Time

var d = new Date();
var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
$("#month").html(monthNames[d.getMonth()]);
$("#day").html(d.getDate() + "&nbsp;");
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
      
  $("#hour").html(hh + ":");
  $("#minut").html(mm + "&nbsp;");
  $("#date").html(dd);

}
setInterval(function(){ timer();}, 1000);
timer();

})