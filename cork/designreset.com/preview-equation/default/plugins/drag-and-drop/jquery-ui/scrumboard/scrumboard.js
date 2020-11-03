$(function() {

/*
=========================================
|                                       |
|          Variables Definations        |
|                                       |
=========================================
*/

var Container = {
    scrumboard: $('.scrumboard'),
    card: $('.scrumboard .card')
}
var DataAttr = {
    sNew: $('[data-section="s-new"]'),
    sInProgress: $('[data-section="s-in-progress"]'),
    sOnReview: $('[data-section="s-on-review"]'),
    sApproved: $('[data-section="s-approved"]')
}
var Elements = {
    collapseIcon: $('.f-icon i'),
    checkbox: $('.scrumboard .card .new-control-input')
}


// Containers
var scrumboard = Container.scrumboard;
var card = Container.card;


// Data Attributes
var sNew = DataAttr.sNew;
var sInProgress = DataAttr.sInProgress;
var sOnReview = DataAttr.sOnReview;
var sApproved = DataAttr.sApproved;

// Elements
var collapseIcon = Elements.collapseIcon;
var checkbox = Elements.checkbox;




function checkboxCount() {

    card.each(function(index, el) {
        var chkLength = $(this).find('input[type="checkbox"]').length;
        var max = 100;
        var div = max/chkLength;

        $('.scrumboard .card .task-quantity').text('0/'+chkLength);

        $(this).find('input[type="checkbox"]').attr('value', div);
    });
}
checkboxCount();



function progressjs() {
    $('.scrumboard .card .new-control-input').on('change', function(event) {
        var $checkbox = $(this);

        $checkbox.closest('.card').find(".progress .progress-bar").css("width", function() {

            var width = $(this).data('width') || 0;
            
            if ($checkbox.is(':checked')) {
            
              width += parseInt($checkbox.val());
            
            } else {
            
              width -= parseInt($checkbox.val());
            
            }
            
            $(this).data('width', width);
            
            return width + "%";

        });
    })
}
progressjs();

/*
=========================================
|                                       |
|           Widget Collapse             |
|                                       |
=========================================
*/

collapseIcon.on('click', function(event) {
    var icon = $(this);
    event.preventDefault();
    icon.parent().parent().parent().find('.project-detail').slideToggle('slow', function() {
        if (icon.hasClass('flaticon-down-arrow-fill')) {
            icon.removeClass('flaticon-down-arrow-fill').addClass('flaticon-up-arrow-fill-1');
        } else if (icon.hasClass('flaticon-up-arrow-fill-1')) {
            icon.removeClass('flaticon-up-arrow-fill-1').addClass('flaticon-down-arrow-fill');
        }

    });

});


$('[data-sortable="true"]').sortable({
    connectWith: '.connect-sorting',
    cursor: 'move',
    placeholder: "ui-state-highlight",
    helper: function(){
        return $("<div class='scrumboard-on-sort-change'></div>");
    },
    refreshPosition: true,
    stop: function( event, ui ) {
        var parent_ui = ui.item.parent().attr('data-section');

        sortOnStopCallback( parent_ui );
    },
    cursorAt: { left:  18, top: 53 }
});




function sortOnStopCallback( identity ) {

    if (identity === "s-new") {

        console.log('s-new ss');
        sNew.find('.status-badge').text('New');

    } else if (identity === "s-in-progress") {

        console.log('s-in-progress ss');
        sInProgress.find('.status-badge').html('<i class="flaticon-refresh-1"></i>');

    } else if (identity === "s-on-review") {

        console.log('s-on-review ss');
        sOnReview.find('.status-badge').html('<i class="flaticon-view-3"></i>');

    } else if (identity === "s-approved") {

        console.log('s-approved ss');
        sApproved.find('.status-badge').html('<i class="flaticon-double-check"></i>');
        approval();
    }

}

function approval() {
    sApproved.find('input[type="checkbox"]').attr('checked', 'checked');
}

approval();

});