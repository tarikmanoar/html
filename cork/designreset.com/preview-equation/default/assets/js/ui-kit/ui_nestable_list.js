"use strict";
$(document).ready(function() {
    $("#nestable_list_1").nestable({
        group: 1
    });
    $("#nestable_list_2").nestable({
        group: 1
    });
    ($("#nestable_list_1").data("output", $("#nestable_list_1_output")));
    ($("#nestable_list_2").data("output", $("#nestable_list_2_output")));
    $("#nestable_list_menu").on("click", function(d) {
        var c = $(d.target),
            b = c.data("action");
        if (b === "expand-all") {
            $(".dd").nestable("expandAll")
        }
        if (b === "collapse-all") {
            $(".dd").nestable("collapseAll")
        }
    });
    $("#nestable_list_3").nestable()
});