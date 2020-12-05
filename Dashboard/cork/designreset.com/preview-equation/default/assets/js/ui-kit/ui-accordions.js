$('#toggleAccordion .collapse').on('shown.bs.collapse', function(){
    $(this).parent().find(".flaticon-down-arrow").removeClass("flaticon-down-arrow").addClass("flaticon-arrows-1");
}).on('hidden.bs.collapse', function(){
        $(this).parent().find(".flaticon-arrows-1").removeClass("flaticon-arrows-1").addClass("flaticon-down-arrow");
});

$('.icon-accordion-content #accordion .collapse').on('shown.bs.collapse', function(){
    $(this).parent().find(".flaticon-plus-1").removeClass("flaticon-plus-1").addClass("flaticon-minus-2");
}).on('hidden.bs.collapse', function(){
    $(this).parent().find(".flaticon-minus-2").removeClass("flaticon-minus-2").addClass("flaticon-plus-1");
});

$('.creative-accordion-content #taccordion .collapse').on('shown.bs.collapse', function(){
    $(this).parent().find(".flaticon-right-arrow").removeClass("flaticon-right-arrow").addClass("flaticon-down-arrow");
}).on('hidden.bs.collapse', function(){
    $(this).parent().find(".flaticon-down-arrow").removeClass("flaticon-down-arrow").addClass("flaticon-right-arrow");
});

$('.small-accordion-content #saccordion .collapse').on('shown.bs.collapse', function(){
    $(this).parent().find(".flaticon-right-arrow").removeClass("flaticon-right-arrow").addClass("flaticon-down-arrow");
}).on('hidden.bs.collapse', function(){
    $(this).parent().find(".flaticon-down-arrow").removeClass("flaticon-down-arrow").addClass("flaticon-right-arrow");
});

$('.creative2-accordion-content #creativeAccordion .collapse').on('shown.bs.collapse', function(){
    $(this).parent().find(".flaticon-plus-1").removeClass("flaticon-plus-1").addClass("flaticon-minus-2");
}).on('hidden.bs.collapse', function(){
    $(this).parent().find(".flaticon-minus-2").removeClass("flaticon-minus-2").addClass("flaticon-plus-1");
});

$('.creative3-accordion-content #creative3Accordion .collapse').on('shown.bs.collapse', function(){
    $(this).parent().find(".flaticon-down-arrow").removeClass("flaticon-down-arrow").addClass("flaticon-arrows-1");
}).on('hidden.bs.collapse', function(){
    $(this).parent().find(".flaticon-arrows-1").removeClass("flaticon-arrows-1").addClass("flaticon-down-arrow");
});

$('#toggleFalseAccordion').collapse({
  toggle: false
})
