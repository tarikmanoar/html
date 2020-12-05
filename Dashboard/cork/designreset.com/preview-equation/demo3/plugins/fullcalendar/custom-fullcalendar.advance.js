$(document).ready(function() {

    $("#add-e").click(function(event) {
        event.preventDefault();
        var inputField = $("#write-e");
        var inputValue = $("#write-e").val();            
        var html = '<div class=\'fc-event fc-new\' data-color=\'fc-new\'>'+inputValue+'</div>';
        $(html).appendTo(".add-event").hide().slideDown();
        $(inputField).val('');
        initializeExternalEvents();
    });

    initializeExternalEvents();
    function initializeExternalEvents() {

        /* initialize the external events
        -----------------------------------------------------------------*/

        $('#external-events .fc-event').each(function() {

            // store data so the calendar knows to render an event upon drop
            $(this).data('event', {
                title: $.trim($(this).text()), // use the element's text as the event title
                className: $(this).data('color'),
                stick: true // maintain when user navigates (see docs on the renderEvent method)
            });

            // make the event draggable using jQuery UI
            $(this).draggable({
                zIndex: 999,
                revert: true,      // will cause the event to go back to its
                revertDuration: 0  //  original position after the drag
            });

        });
    }



    /* initialize the calendar
    -----------------------------------------------------------------*/

    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        events: [
            {
                title: 'All Day Event',
                start: '2019-02-01T14:30:00',
                className: "bg-light-danger"
            },
            {
                title: 'Long Event',
                start: '2019-02-07T19:30:00',
                end: '2019-02-10T14:30:00',
                className: "bg-light-info"
            },
            {
                title: 'Conference',
                start: '2019-02-17T14:30:00',
                end: '2019-02-13T14:30:00',
                className: "bg-light-warning"
            },
            {
                title: 'Meeting',
                start: '2019-02-12T10:30:00',
                end: '2019-02-12T12:30:00',
                className: "bg-light-primary"
            },
            {
                title: 'Lunch',
                start: '2019-02-12T15:00:00',
                className: "bg-light-secondary"
            },
            {
                title: 'Meeting',
                start: '2019-02-12T21:30:00',
                className: "bg-light-success"
            },
            {
                title: 'Happy Hour',
                start: '2019-02-12T05:30:00',
                className: "bg-light-warning"
            },
            {
                title: 'Dinner',
                start: '2019-02-12T20:00:00',
                className: "bg-light-dark"
            },
            {
                title: 'Click for Google',
                url: 'http://google.com/',
                start: '2019-02-28',
                className: "bg-light-success"
            }
        ],
        editable: true,
        droppable: true, // this allows things to be dropped onto the calendar
        eventLimit: true,
        drop: function() {
            // is the "remove after drop" checkbox checked?
            if ($('#drop-remove').is(':checked')) {
                // if so, remove the element from the "Draggable Events" list
                $(this).remove();
            }
        }
    });


    // NOTE:  Event marker are updated automatically with respect to current date. You can modify these event markers according to your need.

    var today = new Date();
    var y = today.getFullYear();
    var m = today.getMonth();
    var d = today.getDate();
    console.log(new Date(y, m, d - 12));
    console.log(new Date(y, m, d));
    $('#c').fullCalendar({
        header: {
            left: "prev,next",
            center: "title",
            right: "month,agendaWeek,agendaDay"
        },
        editable: true,
        droppable: true, // this allows things to be dropped onto the calendar
        eventLimit: true,
        dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        timeFormat: "hh:mm a",
        events: [{
            title: "Meeting with James",
            start: "2019-01-28",
            className: "fc-event--orange",
            allDay: !0
        }, {
            // title: "New branding launch",
            // start: "2019-01-24",
            // end: "2019-01-26",
            // allDay: !0
            title: 'All Day Event',
            start: new Date(y, m, d - 12),
            className: "fc-event--green",
            // backgroundColor: 'rgba(38, 180, 255, 0.5)'
        }, {
            title: "Deliver new product",
            start: new Date(y, m, d - 30),
            className: "fc-event--blue"
        }, {
            title: "Meeting with CEO",
            start: new Date(y, m, d - 3, 14, 30),
            className: "fc-event--green",
            // allDay: !0
        }, {
            title: "Julia's birthday",
            start: new Date(y, m, d - 2, 7, 0),
            className: "fc-event--green"
        }, {
            title: "New job interview",
            start: new Date(y, m, d + 21),
            end: new Date(y, m, d + 7),
            className: "fc-event--orange",
            // allDay: !0
        }, {
            title: "Custom design",
            start: new Date(y, m, d + 1, 16, 0),
            className: "fc-event--green",
            // allDay: !0
        }, {
            title: "Buy New iPhone",
            start: new Date(y, m, d + 15),
            className: "fc-event--blue"
        }, {
            title: "Travel to Canada",
            start: new Date(y, m, d - 8),
            end: new Date(y, m, d - 5),
            className: "fc-event--green",
            // allDay: !0
        }, {
            title: "Agency brainstorming",
            start: new Date(y, m, d + 13),
            className: "fc-event--green"
        }]
    });

});