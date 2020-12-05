$(document).ready(function() {
	
    var navListItems = $('ul.arrow-steps li a');

    navListItems.click(function(e) {
        e.preventDefault();
        var $target = $($(this).attr('href')),
            $item = $(this).closest('li');
        
        if (!$item.hasClass('disabled')) {
            navListItems.closest('li').removeClass('active');
            $item.addClass('active');
            $target.show();
        }
    });

    var rectangleStep = $('ul.rectangular-steps li a');
    rectangleStep.click(function(e) {
        e.preventDefault();
        var $rtarget = $($(this).attr('href')),
            $ritem = $(this).closest('li');
        
        if (!$ritem.hasClass('disabled')) {
            rectangleStep.closest('li').removeClass('active');
            $ritem.addClass('active');
            $rtarget.show();
        }
    });

    var lineStepTxt = $('ul.line-steps-txt li a');

    lineStepTxt.click(function(e) {
        e.preventDefault();
        var $ltargettxt = $($(this).attr('href')),
            $lineTxt = $(this).closest('li');
        
        if (!$lineTxt.hasClass('disabled')) {
            lineStepTxt.closest('li').removeClass('active');
            $lineTxt.addClass('active');
            $ltargettxt.show();
        }
    });

    var lineStep = $('ul.s-line li a');

    lineStep.click(function(e) {
        e.preventDefault();
        var $ltarget = $($(this).attr('href')),
            $line = $(this).closest('li');
        
        if (!$line.hasClass('disabled')) {
            lineStep.closest('li').removeClass('active');
            $line.addClass('active');
            $ltarget.show();
        }
    });

    var sCircle = $('ul.s-circle-step li a');

    sCircle.click(function(e) {
        e.preventDefault();
        var $ctarget = $($(this).attr('href')),
            $simplecircle = $(this).closest('li');
        
        if (!$simplecircle.hasClass('disabled')) {
            sCircle.closest('li').removeClass('active');
            $simplecircle.addClass('active');
            $ctarget.show();
        }
    });

    var txtCircle = $('ul.circle-txt li a');

    txtCircle.click(function(e) {
        e.preventDefault();
        var $txttarget = $($(this).attr('href')),
            $textcircle = $(this).closest('li');
        
        if (!$textcircle.hasClass('disabled')) {
            txtCircle.closest('li').removeClass('active');
            $textcircle.addClass('active');
            $txttarget.show();
        }
    });

});