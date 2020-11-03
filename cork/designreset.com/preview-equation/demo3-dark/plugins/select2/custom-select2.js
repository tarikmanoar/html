

$(".basic").select2({
	tags: true
});
$(".nested").select2({
	tags: true
});
$(".tagging").select2({
	tags: true
});
$(".multiple-limit").select2({
	maximumSelectionLength: 2
});
$(".disabled-results").select2();
$(".placeholder").select2({
	placeholder: "Make a Selection",
	allowClear: true
});

function formatState (state) {
  if (!state.id) {
    return state.text;
  }
  var baseClass = "flaticon-";
  var $state = $(
    '<span><i class="' + baseClass + state.element.value.toLowerCase() + '" /> ' + state.text + '</i> </span>'
  );
  return $state;
};

$(".templating").select2({
  templateSelection: formatState
});