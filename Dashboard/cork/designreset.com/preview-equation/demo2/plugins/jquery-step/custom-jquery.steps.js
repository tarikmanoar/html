$("#example-basic").steps({
    headerTag: "h3",
    bodyTag: "section",
    transitionEffect: "slideLeft",
    autoFocus: true,
    cssClass: 'pill wizard'
});
$("#classic-basic").steps({
    headerTag: "h3",
    bodyTag: "section",
    transitionEffect: "slideLeft",
    autoFocus: true,
    cssClass: 'classic wizard'
});
$("#icon-change").steps({
    headerTag: "h3",
    bodyTag: "section",
    transitionEffect: "slideLeft",
    autoFocus: true,
    titleTemplate: '<span class="">#title#</span>',
    cssClass: 'icon-changing wizard',
});
$("#icon-text").steps({
    headerTag: "h3",
    bodyTag: "section",
    transitionEffect: "slideLeft",
    autoFocus: true,
    titleTemplate: '#title#',
    cssClass: 'ico-text wizard'
});
$("#circle-basic").steps({
    headerTag: "h3",
    bodyTag: "section",
    transitionEffect: "slideLeft",
    autoFocus: true,
    cssClass: 'circle wizard'
});
var formValidate = $("#formValidate");
formValidate.validate({
    errorPlacement: function errorPlacement(error, element) { element.before(error); },
    rules: {
        confirm: {
            equalTo: "#password"
        }
    }
});
formValidate.children("div").steps({
    headerTag: "h3",
    bodyTag: "section",
    transitionEffect: "slideLeft",
    autoFocus: true,
    titleTemplate: '#title#',
    cssClass: 'ico-text wizard',
    onStepChanging: function (event, currentIndex, newIndex)
    {
        formValidate.validate().settings.ignore = ":disabled,:hidden";
        return formValidate.valid();
    },
    onFinishing: function (event, currentIndex)
    {
        formValidate.validate().settings.ignore = ":disabled";
        return formValidate.valid();
    },
    onFinished: function (event, currentIndex)
    {
        alert("Submitted!");
    }
});
$("#example-vertical").steps({
    headerTag: "h3",
    bodyTag: "section",
    transitionEffect: "slideLeft",
    cssClass: 'circle wizard',
    titleTemplate: '<span class="number">#index#</span>',
    stepsOrientation: "vertical"
});
$("#pill-vertical").steps({
    headerTag: "h3",
    bodyTag: "section",
    transitionEffect: "slideLeft",
    cssClass: 'pills wizard',
    titleTemplate: '#title#',
    stepsOrientation: "vertical"
});