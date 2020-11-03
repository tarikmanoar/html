$(".l-a-scroll").mCustomScrollbar({
  axis:"y", // vertical and horizontal scrollbar
  autoHideScrollbar:true,
  setHeight: 499
});

var chart = new Chartist.Line('#t-s-chart', {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
      series: [  {
        name: 'series-3',
        data: [4, 3, 5, 3, 1, 3, 6, 4, 4, 3, 5, 3]
      }]
    }, {
      fullWidth: true,
      chartPadding: {
        right: 0,
        left: 0
      },
      series: {
        'series-3': {
          showPoint: false
        }
      },
        axisY: {
           offset: 0
        },
        axisX: {
            offset: 0
        }
    });

var bar = new ProgressBar.Circle("#t-r-chart", {
  color: '#888ea8',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 2,
  trailWidth: 2,
  trailColor: "#888ea8",
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#888ea8', width: 2 },
  to: { color: '#888ea8', width: 2 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText( "<p class='mb-0 t-r-progress-value'>" + value + "k </p> Users");
    }

  }
});
bar.text.style.fontSize = '1rem';

bar.animate(0.65);  // Number from 0.0 to 1.0

var data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  series: [
    [5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8],
    [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4]
  ]
};

var options = {
    seriesBarDistance: 10,
    chartPadding: {
      right: 0,
      left: 0
    },
    axisY: {
        offset: 0
    },
    axisX: {
        offset: 0
    }
};

var responsiveOptions = [
  ['screen and (max-width: 640px)', {
    seriesBarDistance: 5,
    axisX: {
      labelInterpolationFnc: function (value) {
        return value[0];
      }
    }
  }]
];

new Chartist.Bar('#t-services-chart', data, options, responsiveOptions);

new Chartist.Pie('#revenue-stats', {
  series: [55, 18, 27]
}, {
  donut: true,
  donutWidth: 30,
  donutSolid: true,
  // startAngle: 270,
  showLabel: false
});


// Calender script
$('.calendar').pignoseCalendar();

// Driver List table
checkall('driverListAll', 'driverListchk');

// Booked Cars
checkall('bookedCarsAll', 'bookedCarschk');

$(".booked-cars-list .booked-cars-list-body .booked-car-scroll").mCustomScrollbar({
  axis:"x", // vertical and horizontal scrollbar
  autoHideScrollbar:true,
});

$(".available-cars-list .available-cars-list-body .available-car-scroll").mCustomScrollbar({
  axis:"x", // vertical and horizontal scrollbar
  autoHideScrollbar:true,
});

$(".best-mechanics-container .best-mechanics-body .best-mechanics-scroll").mCustomScrollbar({
  axis:"yx", // vertical and horizontal scrollbar
  autoHideScrollbar:true,
  setHeight: 448
});

function timer() {
  var d = new Date();
  var h = d.getHours(),
      mm = d.getMinutes(),
      ss = d.getSeconds(),
      dd = 'AM',
      hh = h;
  if (hh >= 12) {
    hh = h - 12;
    dd= 'PM';
  }
  if (hh === 0) {
    hh = 12;
  }
  hh = hh<10?'0'+hh:hh;
  mm = mm<10?'0'+mm:mm;
  ss = ss<10?'0'+ss:ss;
      
  $(".todo-list #hour").html(hh + ':');
  $(".todo-list #minut").html(mm + '&nbsp;');
  $(".todo-list #date").html(dd);
  $('.todo-list .time').addClass('time-style');

}
setInterval(function() {timer();}, 1000);