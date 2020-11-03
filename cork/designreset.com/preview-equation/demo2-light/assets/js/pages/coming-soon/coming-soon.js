$('#clockdiv').countdown('2020/10/10', function(event) {
  var $this = $(this).html(event.strftime(''
    + ' <div><span class="days">%d</span><div class="smalltext">days</div></div>  '
    + ' <div><span class="hours">%H</span><div class="smalltext">hours</div></div> '
    + ' <div><span class="minutes">%M</span><div class="smalltext">minutes</div></div>  '
    + ' <div><span class="seconds">%S</span><div class="smalltext">seconds</div></div>  '));
});