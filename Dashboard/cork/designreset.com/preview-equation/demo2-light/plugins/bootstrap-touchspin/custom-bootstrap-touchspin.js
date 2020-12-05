// Example with postfix (large)
$("input[name='demo1']").TouchSpin({
    min: 0,
    max: 100,
    step: 0.1,
    decimals: 2,
    boostat: 5,
    maxboostedstep: 10,
    postfix: '%',
    buttondown_class: "btn btn-classic btn-primary",
    buttonup_class: "btn btn-classic btn-primary"
});

// With prefix
$("input[name='demo2']").TouchSpin({
    min: 0,
    max: 100,
    step: 0.1,
    decimals: 2,
    boostat: 5,
    maxboostedstep: 10,
    prefix: '%',
    buttondown_class: "btn btn-classic btn-primary",
    buttonup_class: "btn btn-classic btn-primary"
});


// Multiple select boxes
$("input[name='demo_vertical']").TouchSpin({
    verticalbuttons: true,
    buttondown_class: "btn btn-classic btn-outline-info",
    buttonup_class: "btn btn-classic btn-outline-danger"
});


// Vertical buttons with custom icons
$("input[name='demo_vertical2']").TouchSpin({
    verticalbuttons: true,
    verticalup: '<i class="flaticon-arrows-1"></i>',
    verticaldown: '<i class="flaticon-down-arrow"></i>',
    buttondown_class: "btn btn-classic btn-info",
    buttonup_class: "btn btn-classic btn-danger"
});

// Init with empty value
$("input[name='demo3']").TouchSpin({
    buttondown_class: "btn btn-classic btn-primary",
    buttonup_class: "btn btn-classic btn-primary"
});

// Value attribute is not set (applying settings.initval)
$("input[name='demo3_21']").TouchSpin({
    initval: 40,
    buttondown_class: "btn btn-classic btn-primary",
    buttonup_class: "btn btn-classic btn-primary"
});

// Value is set explicitly to 33 (skipping settings.initval)
$("input[name='demo3_22']").TouchSpin({
    initval: 40,
    buttondown_class: "btn btn-classic btn-primary",
    buttonup_class: "btn btn-classic btn-primary"
});

// Button postfix
$("input[name='demo4']").TouchSpin({
    postfix: "Button",
    postfix_extraclass: "btn btn-outline-info",
    buttondown_class: "btn btn-classic btn-primary",
    buttonup_class: "btn btn-classic btn-primary"
});

// Button group
$("input[name='demo5']").TouchSpin({
    prefix: "$",
    postfix: ".00",
    buttondown_class: "btn btn-classic btn-primary",
    buttonup_class: "btn btn-classic btn-primary"
});

// Change button class
$("input[name='demo6']").TouchSpin({
    buttondown_class: "btn btn-classic btn-danger",
    buttonup_class: "btn btn-classic btn-success"
});