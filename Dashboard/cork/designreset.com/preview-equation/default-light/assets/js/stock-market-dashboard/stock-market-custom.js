function scrollbar(selector, init, destroy) {
  $selector = selector;
  $init = init;
  $destroy = destroy;
  if ($init === true) {
    $($selector).mCustomScrollbar({
        axis:"x",
        autoHideScrollbar:true,
    });
  }
  if ($destroy === true) {
    $($selector).mCustomScrollbar("destroy");
  }
}


var data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  series: [
    [4, 3, 2, 6, 4, 9, 2, 3, 7, 9, 5, 7]
  ]
};

var options = {
  seriesBarDistance: 10,
  axisX: {
    showGrid: false,
    showLabel: false,
    offset: 0
  },
  axisY: {
    showGrid: false,
    showLabel: false,
    offset: 0
  }

};

new Chartist.Bar('#trad-1', data, options);

var data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  series: [
    [4, 3, 2, 6, 4, 9, 2, 3, 7, 9, 5, 7]
  ]
};

var options = {
  seriesBarDistance: 10,
  axisX: {
    showGrid: false,
    showLabel: false,
    offset: 0
  },
  axisY: {
    showGrid: false,
    showLabel: false,
    offset: 0
  }
};

new Chartist.Bar('#trad-2', data, options);

var data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  series: [
    [4, 3, 2, 6, 4, 9, 2, 3, 7, 9, 5, 7]
  ]
};

var options = {
  seriesBarDistance: 10,
  axisX: {
    showGrid: false,
    showLabel: false,
    offset: 0
  },
  axisY: {
    showGrid: false,
    showLabel: false,
    offset: 0
  }
};

new Chartist.Bar('#trad-3', data, options);

var data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  series: [
    [4, 3, 2, 6, 4, 9, 2, 3, 7, 9, 5, 7]
  ]
};

var options = {
  seriesBarDistance: 10,
  axisX: {
    showGrid: false,
    showLabel: false,
    offset: 0
  },
  axisY: {
    showGrid: false,
    showLabel: false,
    offset: 0
  }
};

new Chartist.Bar('#trad-4', data, options);

var data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  series: [
    [4, 3, 2, 6, 4, 9, 2, 3, 7, 9, 5, 7]
  ]
};

var options = {
  seriesBarDistance: 10,
  axisX: {
    showGrid: false,
    showLabel: false,
    offset: 0
  },
  axisY: {
    showGrid: false,
    showLabel: false,
    offset: 0
  }
};

new Chartist.Bar('#trad-5', data, options);

var d = new Date();
var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
var weekNames = ["Sunday","Monday", "Tuesday", "Wednessday", "Thursday", "Friday", "Saturday"];
$(".trading-time #months").html(monthNames[d.getMonth()] + ', &nbsp;');
$(".trading-time #days").html(d.getDate() + ' &nbsp; ');

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
      
  $(".trading-time #hour").html(hh + '&nbsp;<span class="semi">:</span>');
  $(".trading-time #minut").html(mm + '&nbsp;<span class="semi">:</span>');
  $(".trading-time #sec").html(ss);
  $('.trading-time .time').addClass('time-style');

}
setInterval(function() {timer();}, 1000);
timer();

var responsiveOptions = [
  ['screen and (max-width: 575px)', {
    seriesBarDistance: 5,
    axisX: {
      labelInterpolationFnc: function (value) {
        return value[0];
      }
    }
  }]
];

function tradeMonthlyRender() {
  new Chartist.Line('.t-s-trade-monthly-chart', {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    series: [
      [30, 60, 50, 60, 30, 10, 30, 20, 60, 30, 10, 30]
    ]
  }, {
    low: 0,
    showArea: true,
    axisY: {
      labelInterpolationFnc: function(value) {
        if (value == 0) {
          return value;
        } else {
          return value + 'k';
        }
      }
    }
  }, responsiveOptions);
}

function salesMonthlyRender() {
  var data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    series: [
      [4, 3, 2, 6, 4, 9, 2, 3, 7, 9, 5, 7],
      [2, 1, 8, 4, 3, 4, 3, 5, 6, 7, 6, 3]
    ]
  };

  var options = {
    seriesBarDistance: 10,
    axisY: {
      labelInterpolationFnc: function(value) {
        if (value == 0) {
          return value;
        } else {
          return value + 'k';
        }
      }
    }
  };
  new Chartist.Bar('.s-g-monthly-chart', data, options, responsiveOptions);
}

tradeMonthlyRender();
salesMonthlyRender();


$('.total-shared-traded li a, .sales-growth li a').on('shown.bs.tab', function(event) {
  
  tradeMonthlyRender();
  salesMonthlyRender();
  var responsiveOptions = [
    ['screen and (max-width: 575px)', {
      seriesBarDistance: 5,
      axisX: {
        labelInterpolationFnc: function (value) {
          return value[0];
        }
      }
    }]
  ];
  new Chartist.Line('.t-s-trade-yearly-chart', {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    series: [
      [500, 900, 700, 800, 500, 300, 500, 400, 800, 500, 300, 500]
    ]
  }, {
    low: 0,
    showArea: true,
    axisY: {
    labelInterpolationFnc: function(value) {
        if (value == 0) {
          return value;
        } else {
          return value + 'k';
        }
      }
    }
  }, responsiveOptions);

  var data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    series: [
      [50, 40, 30, 70, 50, 100, 30, 40, 80, 100, 60, 80],
      [30, 20, 90, 50, 40, 60, 40, 60, 70, 80, 70, 40]
    ]
  };

  var options = {
    seriesBarDistance: 10,
    axisY: {
    labelInterpolationFnc: function(value) {
        if (value == 0) {
          return value;
        } else {
          return value + 'k';
        }
      }
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

  new Chartist.Bar('.s-g-yearly-chart', data, options, responsiveOptions);

})


// Calender script

$('.evcalendar').pignoseCalendar();

$("#m-a-s-chart-1").sparkline([4,6,7,5,4,5,7,3,4,9,6,3], {
  type: 'line',
  width: '80',
  height: '30',
  lineColor: '#e7515a',
  lineWidth: 1.5,
  spotRadius: 3.5,
  fillColor: 'transparent',
  spotColor: '#1ad271',
  spotRadius: 0,
  minSpotColor: '#fff',
  maxSpotColor: '#fff'
});

$("#m-a-s-chart-2").sparkline([3,6,5,2,4,5,8,3,4,7,6,9], {
  type: 'line',
  width: '80',
  height: '30',
  lineColor: '#00d1c1',
  lineWidth: 1.5,
  spotRadius: 3.5,
  fillColor: 'transparent',
  spotColor: '#1ad271',
  spotRadius: 0,
  minSpotColor: '#fff',
  maxSpotColor: '#fff'
});

$("#m-a-s-chart-3").sparkline([5,6,7,9,8,5,2,3,9,4,6,7], {
  type: 'line',
  width: '80',
  height: '30',
  lineColor: '#00d1c1',
  lineWidth: 1.5,
  spotRadius: 3.5,
  fillColor: 'transparent',
  spotColor: '#1ad271',
  spotRadius: 0,
  minSpotColor: '#fff',
  maxSpotColor: '#fff'
});

$("#m-a-s-chart-4").sparkline([4,6,7,5,4,5,7,3,4,9], {
  type: 'line',
  width: '80',
  height: '30',
  lineColor: '#00d1c1',
  lineWidth: 1.5,
  spotRadius: 3.5,
  fillColor: 'transparent',
  spotColor: '#1ad271',
  spotRadius: 0,
  minSpotColor: '#fff',
  maxSpotColor: '#fff'
});

$("#m-a-s-chart-5").sparkline([4,6,8,5,3,5,7,8,6,9], {
  type: 'line',
  width: '80',
  height: '30',
  lineColor: '#00d1c1',
  lineWidth: 1.5,
  spotRadius: 3.5,
  fillColor: 'transparent',
  spotColor: '#1ad271',
  spotRadius: 0,
  minSpotColor: '#fff',
  maxSpotColor: '#fff'
});

$("#m-a-s-chart-6").sparkline([4,6,7,5,4,5,7,6,4], {
  type: 'line',
  width: '80',
  height: '30',
  lineColor: '#e7515a',
  lineWidth: 1.5,
  spotRadius: 3.5,
  fillColor: 'transparent',
  spotColor: '#1ad271',
  spotRadius: 0,
  minSpotColor: '#fff',
  maxSpotColor: '#fff'
});


//--monthly_growth_chart script--//

var data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    series: [
        [-5, 20, 50, 40, 30, 10, -5, 30, 40, -5, -10, -15]
    ]
};

var options = {
    high: 50,
    low: -20,
    axisY: {
        labelInterpolationFnc: function(value) {
            return (value) + 'K';
        }
    }
};

new Chartist.Bar('#monthly_growth_chart', data, options, responsiveOptions);
//--monthly_growth_chart script--//

$(".b-p-weekly-chart-1").sparkline([ [2, 1], [3, 1.3], [2.5, 1], [2.2, 1.2], [2.3, 1.4], [2.4, 1.3], [2.6, 1.2], [2.1, 1.4], [2, 1.3], [2, 1.2], [2.3, 1.3], [2.5, 1.5] ], {
    type: 'bar',
    height: '30',
    barWidth: 2,
    barSpacing: 4,
    zeroAxis: false,
    barColor: '#f58b22',
    stackedBarColor: ['#6424c9', '#989ebf']
});

$(".b-p-weekly-chart-2").sparkline([ [2.4, 1.7], [2, 1.3], [1.5, 1.6], [2.9, 1], [2.3, 1.4], [1.4, 1.6], [3.6, 2.2], [2.1, 1.4], [2.6, 1.4], [2, 1.2], [4.3, 1.2], [2.5, 1.5] ], {
    type: 'bar',
    height: '30',
    barWidth: 2,
    barSpacing: 4,
    zeroAxis: false,
    barColor: '#f58b22',
    stackedBarColor: ['#6424c9', '#989ebf']
});

$(".b-p-weekly-chart-3").sparkline([ [3, 0.7], [2, 1.3], [2.5, 1.5], [3.2, 1.2], [5.0, 1.5], [2.0, 1.7], [2.6, 1.2], [2.1, 1.4], [2, 1.0], [3, 1.6], [6.3, 1.3], [2.7, 3.5] ], {
    type: 'bar',
    height: '30',
    barWidth: 2,
    barSpacing: 4,
    zeroAxis: false,
    barColor: '#f58b22',
    stackedBarColor: ['#6424c9', '#989ebf']
});

$(".b-p-weekly-chart-4").sparkline([ [1, 1.6], [3, 1.0], [2.6, 1.8], [2.2, 1.2], [2.9, 1.7], [3.4, 2.9], [2.6, 1.2], [1.1, 1.8], [2, 1.3], [2, 1.2], [1.3, 2.3], [2.5, 1.5] ], {
    type: 'bar',
    height: '30',
    barWidth: 2,
    barSpacing: 4,
    zeroAxis: false,
    barColor: '#f58b22',
    stackedBarColor: ['#6424c9', '#989ebf']
});

$(".b-p-weekly-chart-5").sparkline([ [2.3, 1.9], [2.4, 0.8], [3.5, 2.8], [2.6, 1.2], [2.3, 1.4], [2.4, 2.3], [2.6, 1.2], [2.1, 1.4], [2.1, 1.3], [2, 1.2], [2, 1.3], [2, 1] ], {
    type: 'bar',
    height: '30',
    barWidth: 2,
    barSpacing: 4,
    zeroAxis: false,
    barColor: '#f58b22',
    stackedBarColor: ['#6424c9', '#989ebf']
});

$('.best-performers-tab li a').on('shown.bs.tab', function(event) {

  $(".b-p-weekly-chart-6").sparkline([ [2.3, 1.9], [2.4, 0.8], [3.5, 2.8], [2.6, 1.2], [2.3, 1.4], [2.4, 2.3], [2.6, 1.2], [2.1, 1.4], [2.1, 1.3], [2, 1.2], [2, 1.3], [2, 1] ], {
      type: 'bar',
      height: '30',
      barWidth: 2,
      barSpacing: 4,
      zeroAxis: false,
      barColor: '#f58b22',
      stackedBarColor: ['#1abc9c', '#989ebf']
  });

  $(".b-p-weekly-chart-7").sparkline([ [3, 0.7], [2, 1.3], [2.5, 1.5], [3.2, 1.2], [5.0, 1.5], [2.0, 1.7], [2.6, 1.2], [2.1, 1.4], [2, 1.0], [3, 1.6], [6.3, 1.3], [2.7, 3.5] ], {
      type: 'bar',
      height: '30',
      barWidth: 2,
      barSpacing: 4,
      zeroAxis: false,
      barColor: '#f58b22',
      stackedBarColor: ['#1abc9c', '#989ebf']
  });
  
  $(".b-p-weekly-chart-8").sparkline([ [2.3, 1.9], [2.4, 0.8], [3.5, 2.8], [2.6, 1.2], [2.3, 1.4], [2.4, 2.3], [2.6, 1.2], [2.1, 1.4], [2.1, 1.3], [2, 1.2], [2, 1.3], [2, 1] ], {
      type: 'bar',
      height: '30',
      barWidth: 2,
      barSpacing: 4,
      zeroAxis: false,
      barColor: '#f58b22',
      stackedBarColor: ['#1abc9c', '#989ebf']
  });

  $(".b-p-weekly-chart-9").sparkline([ [1, 1.6], [3, 1.0], [2.6, 1.8], [2.2, 1.2], [2.9, 1.7], [3.4, 2.9], [2.6, 1.2], [1.1, 1.8], [2, 1.3], [2, 1.2], [1.3, 2.3], [2.5, 1.5] ], {
      type: 'bar',
      height: '30',
      barWidth: 2,
      barSpacing: 4,
      zeroAxis: false,
      barColor: '#f58b22',
      stackedBarColor: ['#1abc9c', '#989ebf']
  });

  $(".b-p-weekly-chart-10").sparkline([ [2, 1.1], [2, 1.3], [2.5, 1.5], [2.2, 1.2], [2.3, 1.4], [2.4, 1.3], [2.6, 1.2], [2.1, 1.4], [2, 1.3], [2, 1.2], [2.3, 1.3], [2.5, 1.5] ], {
      type: 'bar',
      height: '30',
      barWidth: 2,
      barSpacing: 4,
      zeroAxis: false,
      barColor: '#f58b22',
      stackedBarColor: ['#1abc9c', '#989ebf']
  });

});


(function() {
  var Message;

  Message = function(arg) {
    this.text = arg.text, this.message_side = arg.message_side;
    this.draw = (function(_this) {
      return function() {
        var $message;
        $message = $($('.message_template').clone().html());
        $message.addClass(_this.message_side).find('.text').html(_this.text);
        $('.chat-messages').append($message);
        return setTimeout(function() {
          return $message.addClass('appeared');
        }, 0);
      };
    })(this);
    return this;
  };

  $(function() {
    var getMessageText, message_side, sendMessage;
    message_side = 'right';
    getMessageText = function() {
      var $message_input;
      $message_input = $('.message_input');
      return $message_input.val();
    };
    sendMessage = function(text) {
      var $messages, message;
      if (text.trim() === '') {
        return;
      }
      $('.message_input').val('');
      $messages = $('.chat-messages');
      message_side = message_side === 'left' ? 'right' : 'left';
      message = new Message({
        text: text,
        message_side: message_side
      });
      message.draw();
      return $messages.animate({
        scrollTop: $messages.prop('scrollHeight')
      }, 300);
    };
    $('.send_message').click(function(e) {
      return sendMessage(getMessageText());
    });
    $('.message_input').keyup(function(e) {
      if (e.which === 13) {
        return sendMessage(getMessageText());
      }
    });
    sendMessage('<h6 class="mb-0">Shaun Park</h6><p class="mb-0">Hello Alma! :)</p>');
    setTimeout(function() {
      return sendMessage('<h6 class="mb-0">Alma Clarke</h6><p class="mb-0">Hi Shaun! How are you?</p>');
    }, 1000);
    setTimeout(function() {
      return sendMessage('<h6 class="mb-0">Shaun Park</h6><p class="mb-0">I\'m fine and u</p>');
    }, 2000);
    setTimeout(function() {
      return sendMessage('<h6 class="mb-0">Alma Clarke</h6><p class="mb-0">Me too</p>');
    }, 3000);
    setTimeout(function() {
      return sendMessage('<h6 class="mb-0">Shaun Park</h6><p class="mb-0">How is the project coming along?</p>');
    }, 4000);

    setTimeout(function() {
      return sendMessage('<h6 class="mb-0">Alma Clarke</h6><p class="mb-0">Project has been already finished and I have results to show you.</p>');
    }, 4000);

    setTimeout(function() {
      return sendMessage('<h6 class="mb-0">Shaun Park</h6><p class="mb-0">Have you faced any problems at the last phase of the project?</p>');
    }, 4000);

    setTimeout(function() {
      return sendMessage('<h6 class="mb-0">Alma Clarke</h6><p class="mb-0">Everything is fine. I\'m very excited to show this to our team.</p>');
    }, 4000);

  });

}).call(this);


if (GetIEVersion() > 0) {
  $(".tasks .tasks-body .task-scroll").mCustomScrollbar({
    axis:"yx",
    autoHideScrollbar:true,
    setHeight: 478
  });
} else {
    $(".tasks .tasks-body .task-scroll").mCustomScrollbar({
      axis:"y",
      autoHideScrollbar:true,
      setHeight: 478
    });
}


$(".tasks .tasks-body .task-scroll").mCustomScrollbar({
  axis:"yx",
  autoHideScrollbar:true,
  setHeight: 478
});


$(".commodity-prices .commodity-prices-body .commodity-prices-scroll").mCustomScrollbar({
  axis:"yx",
  autoHideScrollbar:true,
  setHeight: 533,
});

$(".recent-activity .recent-activity-body .recent-activity-scroll").mCustomScrollbar({
  axis:"yx",
  autoHideScrollbar:true,
  setHeight: 604
});

$(".top-exchange-rate .top-exchange-rate-body .top-exchange-rate-scroll").mCustomScrollbar({
  axis:"yx",
  autoHideScrollbar:true,
  setHeight: 548
});

$(".best-performers .best-performers-body .best-performers-scroll").mCustomScrollbar({
  axis:"x",
  autoHideScrollbar:true,
});

scrollbar(".worst-performers .worst-performers-body .worst-performers-scroll1", true)
$('.worst-performers-tab a#worst-performers-weekly-tab').on('shown.bs.tab', function (e) {
  scrollbar(".worst-performers .worst-performers-body .worst-performers-scroll1", true)
}).on('hidden.bs.tab', function (e) {
  scrollbar(".worst-performers .worst-performers-body .worst-performers-scroll1", '',true)
})
$('.worst-performers-tab a#worst-performers-monthly-tab').on('shown.bs.tab', function (e) {  
  scrollbar(".worst-performers .worst-performers-body .worst-performers-scroll2", true)
}).on('hidden.bs.tab', function (e) {
  scrollbar(".worst-performers .worst-performers-body .worst-performers-scroll2", '',true)
})

$(".latest-transactions .l-t-scroll").mCustomScrollbar({
  axis:"yx",
  autoHideScrollbar:true,
  setHeight: 541
});

var d = new Date();
var monthNames = ["01", "02", "03", "04", "05", "06",
  "07", "08", "09", "10", "11", "12"
];
$(".task #month").html(monthNames[d.getMonth()] + '.');
$(".task #day").html(d.getDate() + '.');
$(".task #year").html(d.getFullYear() + '');