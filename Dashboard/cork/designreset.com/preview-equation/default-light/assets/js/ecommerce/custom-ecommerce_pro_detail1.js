$(function() {

  $("form.product-quantity div.input-group").prepend('<div class="input-group-prepend btn-plus"><button class="btn btn-outline-secondary inc" type="button">+</button></div>');
  $("form.product-quantity div.input-group").append('<div class="input-group-append btn-minus"><button class="btn btn-outline-secondary dec" type="button">-</button></div>');
  $("form.product-quantity div.input-group button").on("click", function() {

    var $button = $(this);
    var oldValue = $button.parent().find("input").val();

    if ($button.text() == "+") {
  	  var newVal = parseFloat(oldValue) + 1;
  	} else {
	   // Don't allow decrementing below zero
      if (oldValue > 0) {
        var newVal = parseFloat(oldValue) - 1;
	    } else {
        newVal = 0;
      }
	  }

    $button.parent().find("input").val(newVal);

  });

});