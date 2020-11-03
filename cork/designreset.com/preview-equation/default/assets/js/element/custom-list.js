$(function(){
    var checks = $("input:radio");
    var lv = $("#lv1");
    checks.on('change', function(){
        if ($(this).is(":checked")) {
            lv.removeClass(function (index, css) {
                return (css.match(/(^|\s)list-type-\S+/g) || []).join(' ');
            }).addClass($(this).val());
        }
    });
});