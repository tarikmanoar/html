var dataDate = jQuery('#clock1573568515278500141').attr('data-date');

jQuery('#clock1573568515278500141').countdown(dataDate, function(event) {
  var clock = jQuery(this).html(event.strftime(''
    + '<div class="clock_bg"><div class="clock_counter">%w</div><div class="clock_label">weeks</div></div>'
    + '<div class="clock_bg"><div class="clock_counter">%d</div><div class="clock_label">days</div></div>'
    + '<div class="clock_bg"><div class="clock_counter">%H</div><div class="clock_label">hours</div></div>'
    + '<div class="clock_bg"><div class="clock_counter">%M</div><div class="clock_label">minutes</div></div>'
    + '<div class="clock_bg"><div class="clock_counter">%S</div><div class="clock_label">seconds</div></div>'));
});

var grid = jQuery('#15735685156033855').masonry({
  itemSelector: '.scheduleday_wrapper',
  gutter: 40
});

jQuery('#15735685156033855 li .session_content_wrapper.expandable').on( 'click', function(e) {
	var targetID = jQuery(this).attr('data-expandid');
	
	jQuery('#'+targetID).toggleClass('hide');
	jQuery(this).toggleClass('active');
	grid.masonry();
});

