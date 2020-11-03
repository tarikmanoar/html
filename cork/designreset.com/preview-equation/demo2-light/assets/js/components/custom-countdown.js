$('#cd-seperator').countdown('2020/10/10', function(event) {
  var $this = $(this).html(event.strftime(''
    + '<div class="col-md-3 col-sm-3 col-6"><div class="countdown"><span class="clock-seperator">|</span><div class="row"><div class="col-md-12"><h1 class="clock-val">%d</h1></div><div class="col-md-12"><h4 class="clock-text"> Days </h4></div></div></div></div>'
    + '<div class="col-md-3 col-sm-3 col-6"><div class="countdown"><span class="clock-seperator d-none d-sm-block">|</span><div class="row"><div class="col-md-12"><h1 class="clock-val">%H</h1></div><div class="col-md-12"><h4 class="clock-text"> Hours </h4></div></div></div></div>'
    + '<div class="col-md-3 col-sm-3 col-6"><div class="countdown"><span class="clock-seperator">|</span><div class="row"><div class="col-md-12"><h1 class="clock-val">%M</h1></div><div class="col-md-12"><h4 class="clock-text"> Mins </h4></div></div></div></div>'
    + '<div class="col-md-3 col-sm-3 col-6"><div class="countdown"><div class="row"><div class="col-md-12"><h1 class="clock-val">%S</h1></div><div class="col-md-12"><h4 class="clock-text"> Sec </h4></div></div></div></div>'));
});

$('#cd-circle').countdown('2020/10/10', function(event) {
  var $this = $(this).html(event.strftime(''
    + '<div class="col-md-3 mb-sm-4 col-sm-6 mb-4 col-12"><div class="countdown mx-auto"><div class="row"><div class="col-md-12"><h1 class="clock-val">365</h1></div><div class="col-md-12"><h4 class="clock-text"> Days </h4></div></div></div></div>'
    + '<div class="col-md-3 mb-sm-4 col-sm-6 mb-4 col-12"><div class="countdown mx-auto"><div class="row"><div class="col-md-12"><h1 class="clock-val">%H</h1></div><div class="col-md-12"><h4 class="clock-text"> Hours </h4></div></div></div></div>'
    + '<div class="col-md-3 mb-sm-4 col-sm-6 mb-4 col-12"><div class="countdown mx-auto"><div class="row"><div class="col-md-12"><h1 class="clock-val">%M</h1></div><div class="col-md-12"><h4 class="clock-text"> Mins </h4></div></div></div></div>'
    + '<div class="col-md-3 mb-sm-4 col-sm-6 mb-4 col-12"><div class="countdown mx-auto"><div class="row"><div class="col-md-12"><h1 class="clock-val">%S</h1></div><div class="col-md-12"><h4 class="clock-text"> Sec </h4></div></div></div></div>'));
});

$('#cd-square').countdown('2020/10/10', function(event) {
  var $this = $(this).html(event.strftime(''
    + '<div class="mb-md-0 col-md-3 mb-sm-4 col-sm-6 mb-4 col-12"><div class="countdown"><div class="row"><div class="col-md-12"><h1 class="clock-val">%d</h1></div><div class="col-md-12"><h4 class="clock-text"> Days </h4></div></div></div></div>'
    + '<div class="mb-md-0 col-md-3 mb-sm-4 col-sm-6 mb-4 col-12"><div class="countdown"><div class="row"><div class="col-md-12"><h1 class="clock-val">%H</h1></div><div class="col-md-12"><h4 class="clock-text"> Hours </h4></div></div></div></div>'
    + '<div class="mb-md-0 col-md-3 mb-sm-4 col-sm-6 mb-4 col-12"><div class="countdown"><div class="row"><div class="col-md-12"><h1 class="clock-val">%M</h1></div><div class="col-md-12"><h4 class="clock-text"> Mins </h4></div></div></div></div>'
    + '<div class="mb-md-0 col-md-3 mb-sm-4 col-sm-6 mb-4 col-12"><div class="countdown"><div class="row"><div class="col-md-12"><h1 class="clock-val">%S</h1></div><div class="col-md-12"><h4 class="clock-text"> Sec </h4></div></div></div></div>'));
});

$('#cd-fill-square').countdown('2020/10/10', function(event) {
  var $this = $(this).html(event.strftime(''
    + '<div class="mb-md-0 col-md-3 mb-sm-4 col-sm-6 mb-4 col-12"><div class="countdown"><div class="row"><div class="col-md-12"><h1 class="clock-val">%d</h1></div><div class="col-md-12"><h4 class="clock-text"> Days </h4></div></div></div></div>'
    + '<div class="mb-md-0 col-md-3 mb-sm-4 col-sm-6 mb-4 col-12"><div class="countdown"><div class="row"><div class="col-md-12"><h1 class="clock-val">%H</h1></div><div class="col-md-12"><h4 class="clock-text"> Hours </h4></div></div></div></div>'
    + '<div class="mb-md-0 col-md-3 mb-sm-4 col-sm-6 mb-4 col-12"><div class="countdown"><div class="row"><div class="col-md-12"><h1 class="clock-val">%M</h1></div><div class="col-md-12"><h4 class="clock-text"> Mins </h4></div></div></div></div>'
    + '<div class="mb-md-0 col-md-3 mb-sm-4 col-sm-6 mb-4 col-12"><div class="countdown"><div class="row"><div class="col-md-12"><h1 class="clock-val">%S</h1></div><div class="col-md-12"><h4 class="clock-text"> Sec </h4></div></div></div></div>'));
});