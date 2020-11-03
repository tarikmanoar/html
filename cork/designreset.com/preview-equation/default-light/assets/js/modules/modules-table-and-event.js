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

// New Product table
checkall('checkAll', 'chkbox');

// Latest Invoice table
checkall('invoiceAll', 'invoicechk');

collapse('panel');

reload("card");


/* Message Scroll*/

$(".message-scroll").mCustomScrollbar({
  setHeight: 390,
  scrollbarPosition:"outside",
  scrollInertia:450,
  theme:"dark-thin"
});

$(".product-sales-list .product-sales-body #ps1").sparkline([4,6,7,5,4,5,7,3,4,9,6,3], {
  type: 'line',
  width: '100',
  height: '30',
  lineColor: '#5247bd',
  lineWidth: 1,
  spotRadius: 3.5,
  fillColor: 'transparent',
  spotColor: '#1ad271',
  spotRadius: 0,
  minSpotColor: '#5247bd',
  maxSpotColor: '#5247bd'
});

$(".product-sales-list .product-sales-body #ps2").sparkline([4,6,7,5,4,5,7,3,4,9,6,3], {
  type: 'line',
  width: '100',
  height: '30',
  lineColor: '#f58b22',
  lineWidth: 1,
  spotRadius: 3.5,
  fillColor: 'transparent',
  spotColor: '#1ad271',
  spotRadius: 0,
  minSpotColor: '#f58b22',
  maxSpotColor: '#f58b22'
});

$(".product-sales-list .product-sales-body #ps3").sparkline([4,6,7,5,4,5,7,3,4,9,6,3], {
  type: 'line',
  width: '100',
  height: '30',
  lineColor: '#07dabf',
  lineWidth: 1,
  spotRadius: 3.5,
  fillColor: 'transparent',
  spotColor: '#1ad271',
  spotRadius: 0,
  minSpotColor: '#07dabf',
  maxSpotColor: '#07dabf'
});

$('.product-sales li a').on('shown.bs.tab', function(event) {
    $(".product-sales-list .product-sales-body #ps4").sparkline([4,6,7,5,4,5,7,3,4,9,6,3], {
      type: 'line',
      width: '100',
      height: '30',
      lineColor: '#5247bd',
      lineWidth: 1,
      spotRadius: 3.5,
      fillColor: 'transparent',
      spotColor: '#1ad271',
      spotRadius: 0,
      minSpotColor: '#5247bd',
      maxSpotColor: '#5247bd'
    });

    $(".product-sales-list .product-sales-body #ps5").sparkline([4,6,7,5,4,5,7,3,4,9,6,3], {
      type: 'line',
      width: '100',
      height: '30',
      lineColor: '#f58b22',
      lineWidth: 1,
      spotRadius: 3.5,
      fillColor: 'transparent',
      spotColor: '#1ad271',
      spotRadius: 0,
      minSpotColor: '#f58b22',
      maxSpotColor: '#f58b22'
    });

    $(".product-sales-list .product-sales-body #ps6").sparkline([4,6,7,5,4,5,7,3,4,9,6,3], {
      type: 'line',
      width: '100',
      height: '30',
      lineColor: '#07dabf',
      lineWidth: 1,
      spotRadius: 3.5,
      fillColor: 'transparent',
      spotColor: '#1ad271',
      spotRadius: 0,
      minSpotColor: '#07dabf',
      maxSpotColor: '#07dabf'
    });  
});

$(".l-a-scroll").mCustomScrollbar({
  axis:"y", // vertical and horizontal scrollbar
  autoHideScrollbar:true,
  setHeight: 350
});
$(".booked-cars-list .booked-cars-list-body .booked-car-scroll").mCustomScrollbar({
  axis:"x", // vertical and horizontal scrollbar
  autoHideScrollbar:true,
});

$(".available-cars-list .available-cars-list-body .available-car-scroll").mCustomScrollbar({
  axis:"x", // vertical and horizontal scrollbar
  autoHideScrollbar:true,
});
$(".best-performers .best-performers-body .best-performers-scroll").mCustomScrollbar({
  axis:"x", // vertical and horizontal scrollbar
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
$(".traffic-sources .traffic-sources-body .traffic-sources-scroll").mCustomScrollbar({
  axis:"x", // vertical and horizontal scrollbar
  autoHideScrollbar:true,
});
$(".most-active-shares .most-active-shares-body .most-active-shares-scroll").mCustomScrollbar({
  axis:"x", // vertical and horizontal scrollbar
  autoHideScrollbar:true,
});
$(".customer-feed-scroll").mCustomScrollbar({
  axis:"y", // vertical and horizontal scrollbar
  autoHideScrollbar:true,
  setHeight: 500
});
$(".all-coins .all-coins-scroll").mCustomScrollbar({
  axis:"x", // vertical and horizontal scrollbar
  autoHideScrollbar:true,
});

// Driver List table
checkall('driverListAll', 'driverListchk');

// Booked Cars
checkall('bookedCarsAll', 'bookedCarschk');

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
timer();

$(".active-task .active-task-body .a-t-scroll").mCustomScrollbar({
  axis:"yx", // vertical and horizontal scrollbar
  autoHideScrollbar:true,
  setHeight: 509
});

$(".customer-feedback-list .customer-feedback-list-body .c-f-l-scroll").mCustomScrollbar({
  axis:"yx", // vertical and horizontal scrollbar
  autoHideScrollbar:true,
  setHeight: 595
});

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

$(".tasks .tasks-body .task-scroll").mCustomScrollbar({
  axis:"y", // vertical and horizontal scrollbar
  autoHideScrollbar:true,
  setHeight: 514
});



$(".commodity-prices .commodity-prices-body .commodity-prices-scroll").mCustomScrollbar({
  axis:"yx", // vertical and horizontal scrollbar
  autoHideScrollbar:true,
  setHeight: 528
});

$(".recent-activity .recent-activity-body .recent-activity-scroll").mCustomScrollbar({
  axis:"yx", // vertical and horizontal scrollbar
  autoHideScrollbar:true,
  setHeight: 549
});

$(".top-exchange-rate .top-exchange-rate-body .top-exchange-rate-scroll").mCustomScrollbar({
  axis:"yx", // vertical and horizontal scrollbar
  autoHideScrollbar:true,
  setHeight: 534
});






$(".latest-transactions .l-t-scroll").mCustomScrollbar({
  axis:"yx", // vertical and horizontal scrollbar
  autoHideScrollbar:true,
  setHeight: 541
});

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

var d = new Date();
var monthNames = ["01", "02", "03", "04", "05", "06",
  "07", "08", "09", "10", "11", "12"
];
$(".task #month").html(monthNames[d.getMonth()] + '.');
$(".task #day").html(d.getDate() + '.');
$(".task #year").html(d.getFullYear() + '');

$(".all-coins #btc").sparkline([4,6,7,5,4,5,7,3,4,9,6,3], {
  type: 'line',
  width: '100',
  height: '30',
  lineColor: '#e95f2b',
  lineWidth: 1,
  spotRadius: 3.5,
  fillColor: 'transparent',
  spotColor: '#1ad271',
  spotRadius: 0,
  minSpotColor: '#e95f2b',
  maxSpotColor: '#e95f2b'
});

$(".all-coins #eth").sparkline([5,6,7,9,8,5,2,3,9,4,6,7], {
  type: 'line',
  width: '100',
  height: '30',
  lineColor: '#e95f2b',
  lineWidth: 1,
  spotRadius: 3.5,
  fillColor: 'transparent',
  spotColor: '#1ad271',
  spotRadius: 0,
  minSpotColor: '#e95f2b',
  maxSpotColor: '#e95f2b'
});

$(".all-coins #xrp").sparkline([3,6,5,2,4,5,8,3,4,7,6,2], {
  type: 'line',
  width: '100',
  height: '30',
  lineColor: '#e95f2b',
  lineWidth: 1,
  spotRadius: 3.5,
  fillColor: 'transparent',
  spotColor: '#1ad271',
  spotRadius: 0,
  minSpotColor: '#e95f2b',
  maxSpotColor: '#e95f2b'
});

$(".all-coins #bch").sparkline([2,4,7,4,9,5,6,2,4,6,6,1], {
  type: 'line',
  width: '100',
  height: '30',
  lineColor: '#e95f2b',
  lineWidth: 1,
  spotRadius: 3.5,
  fillColor: 'transparent',
  spotColor: '#1ad271',
  spotRadius: 0,
  minSpotColor: '#e95f2b',
  maxSpotColor: '#e95f2b'
});

$(".all-coins #ada").sparkline([5,6,7,9,4,5,2,8,4,3,6,4], {
  type: 'line',
  width: '100',
  height: '30',
  lineColor: '#e95f2b',
  lineWidth: 1,
  spotRadius: 3.5,
  fillColor: 'transparent',
  spotColor: '#1ad271',
  spotRadius: 0,
  minSpotColor: '#e95f2b',
  maxSpotColor: '#e95f2b'
});

// Latest Activities scroll

$(".to-do-scroll").mCustomScrollbar({
    axis:"yx", // vertical and horizontal scrollbar
    autoHideScrollbar:true
});

$("#t-s-organic-chart").sparkline([2,7,5,3,9,5,2,4,5,6,6,2,3,4,9], {
    type: 'bar',
    height: '30',
    barWidth: 3,
    barSpacing: 4,
    zeroAxis: false
});

$("#t-s-direct-chart").sparkline([5,6,9,2,6,4,2,2,8,6,7,4,3,4,6], {
    type: 'bar',
    height: '30',
    barWidth: 3,
    barSpacing: 4,
    zeroAxis: false
});

$("#t-s-social-chart").sparkline([5,9,8,2,4,4,6,7,5,6,7,2,6,4,2], {
    type: 'bar',
    height: '30',
    barWidth: 3,
    barSpacing: 4,
    barColor: '#3862f5',
    negBarColor: '#3862f5'
});

$("#t-s-referral-chart").sparkline([6,6,8,2,6,4,9,4,5,5,9,6,3,4,3], {
    type: 'bar',
    height: '30',
    barWidth: 3,
    barSpacing: 4,
    zeroAxis: false
});

$("#t-s-mail-chart").sparkline([5,6,7,2,1,4,2,4,5,6,7,2,1,4,2], {
    type: 'bar',
    height: '30',
    barWidth: 3,
    barSpacing: 4,
    barColor: '#3862f5',
    negBarColor: '#3862f5'
});

$("#t-s-other-chart").sparkline([4,3,1,3,4,3,4,2,1,3,2,1,2,3,4], {
    type: 'bar',
    height: '30',
    barWidth: 3,
    barSpacing: 4,
    barColor: '#3862f5',
    negBarColor: '#3862f5'
});

$("#m-a-s-chart-c").sparkline([4,6,7,5,4,5,7,3,4,9,6,3], {
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

$("#m-a-s-chart-ip").sparkline([3,6,5,2,4,5,8,3,4,7,6,9], {
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

$("#m-a-s-chart-h").sparkline([5,6,7,9,8,5,2,3,9,4,6,7], {
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

$("#m-a-s-chart-s").sparkline([4,6,7,5,4,5,7,3,4,9], {
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

$("#m-a-s-chart-w").sparkline([4,6,8,5,3,5,7,8,6,9], {
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

$("#m-a-s-chart-wa").sparkline([4,6,7,5,4,5,7,6,4], {
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

jQuery(document).ready(function($){
  var timelines = $('.cd-horizontal-timeline'),
    eventsMinDistance = 60;

  (timelines.length > 0) && initTimeline(timelines);

  function initTimeline(timelines) {
    timelines.each(function(){
      var timeline = $(this),
        timelineComponents = {};
      //cache timeline components 
      timelineComponents['timelineWrapper'] = timeline.find('.events-wrapper');
      timelineComponents['eventsWrapper'] = timelineComponents['timelineWrapper'].children('.events');
      timelineComponents['fillingLine'] = timelineComponents['eventsWrapper'].children('.filling-line');
      timelineComponents['timelineEvents'] = timelineComponents['eventsWrapper'].find('a');
      timelineComponents['timelineDates'] = parseDate(timelineComponents['timelineEvents']);
      timelineComponents['eventsMinLapse'] = minLapse(timelineComponents['timelineDates']);
      timelineComponents['timelineNavigation'] = timeline.find('.cd-timeline-navigation');
      timelineComponents['eventsContent'] = timeline.children('.events-content');

      //assign a left postion to the single events along the timeline
      setDatePosition(timelineComponents, eventsMinDistance);
      //assign a width to the timeline
      var timelineTotWidth = setTimelineWidth(timelineComponents, eventsMinDistance);
      //the timeline has been initialize - show it
      timeline.addClass('loaded');

      //detect click on the next arrow
      timelineComponents['timelineNavigation'].on('click', '.next', function(event){
        event.preventDefault();
        updateSlide(timelineComponents, timelineTotWidth, 'next');
      });
      //detect click on the prev arrow
      timelineComponents['timelineNavigation'].on('click', '.prev', function(event){
        event.preventDefault();
        updateSlide(timelineComponents, timelineTotWidth, 'prev');
      });
      //detect click on the a single event - show new event content
      timelineComponents['eventsWrapper'].on('click', 'a', function(event){
        event.preventDefault();
        timelineComponents['timelineEvents'].removeClass('selected');
        $(this).addClass('selected');
        updateOlderEvents($(this));
        updateFilling($(this), timelineComponents['fillingLine'], timelineTotWidth);
        updateVisibleContent($(this), timelineComponents['eventsContent']);
      });

      //on swipe, show next/prev event content
      timelineComponents['eventsContent'].on('swipeleft', function(){
        var mq = checkMQ();
        ( mq == 'mobile' ) && showNewContent(timelineComponents, timelineTotWidth, 'next');
      });
      timelineComponents['eventsContent'].on('swiperight', function(){
        var mq = checkMQ();
        ( mq == 'mobile' ) && showNewContent(timelineComponents, timelineTotWidth, 'prev');
      });

      //keyboard navigation

      $(document).keyup(function(event){
        if(event.which=='37' && elementInViewport(timeline.get(0)) ) {
          showNewContent(timelineComponents, timelineTotWidth, 'prev');
        } else if( event.which=='39' && elementInViewport(timeline.get(0))) {
          showNewContent(timelineComponents, timelineTotWidth, 'next');
        }
      });
    });
  }

  function updateSlide(timelineComponents, timelineTotWidth, string) {
    //retrieve translateX value of timelineComponents['eventsWrapper']
    var translateValue = getTranslateValue(timelineComponents['eventsWrapper']),
      wrapperWidth = Number(timelineComponents['timelineWrapper'].css('width').replace('px', ''));
    //translate the timeline to the left('next')/right('prev') 
    (string == 'next') 
      ? translateTimeline(timelineComponents, translateValue - wrapperWidth + eventsMinDistance, wrapperWidth - timelineTotWidth)
      : translateTimeline(timelineComponents, translateValue + wrapperWidth - eventsMinDistance);
  }

  function showNewContent(timelineComponents, timelineTotWidth, string) {
    //go from one event to the next/previous one
    var visibleContent =  timelineComponents['eventsContent'].find('.selected'),
      newContent = ( string == 'next' ) ? visibleContent.next() : visibleContent.prev();

    if ( newContent.length > 0 ) { //if there's a next/prev event - show it
      var selectedDate = timelineComponents['eventsWrapper'].find('.selected'),
        newEvent = ( string == 'next' ) ? selectedDate.parent('li').next('li').children('a') : selectedDate.parent('li').prev('li').children('a');
      
      updateFilling(newEvent, timelineComponents['fillingLine'], timelineTotWidth);
      updateVisibleContent(newEvent, timelineComponents['eventsContent']);
      newEvent.addClass('selected');
      selectedDate.removeClass('selected');
      updateOlderEvents(newEvent);
      updateTimelinePosition(string, newEvent, timelineComponents);
    }
  }

  function updateTimelinePosition(string, event, timelineComponents) {
    //translate timeline to the left/right according to the position of the selected event
    var eventStyle = window.getComputedStyle(event.get(0), null),
      eventLeft = Number(eventStyle.getPropertyValue("left").replace('px', '')),
      timelineWidth = Number(timelineComponents['timelineWrapper'].css('width').replace('px', '')),
      timelineTotWidth = Number(timelineComponents['eventsWrapper'].css('width').replace('px', ''));
    var timelineTranslate = getTranslateValue(timelineComponents['eventsWrapper']);

        if( (string == 'next' && eventLeft > timelineWidth - timelineTranslate) || (string == 'prev' && eventLeft < - timelineTranslate) ) {
          translateTimeline(timelineComponents, - eventLeft + timelineWidth/2, timelineWidth - timelineTotWidth);
        }
  }

  function translateTimeline(timelineComponents, value, totWidth) {
    var eventsWrapper = timelineComponents['eventsWrapper'].get(0);
    value = (value > 0) ? 0 : value; //only negative translate value
    value = ( !(typeof totWidth === 'undefined') &&  value < totWidth ) ? totWidth : value; //do not translate more than timeline width
    setTransformValue(eventsWrapper, 'translateX', value+'px');
    //update navigation arrows visibility
    (value == 0 ) ? timelineComponents['timelineNavigation'].find('.prev').addClass('inactive') : timelineComponents['timelineNavigation'].find('.prev').removeClass('inactive');
    (value == totWidth ) ? timelineComponents['timelineNavigation'].find('.next').addClass('inactive') : timelineComponents['timelineNavigation'].find('.next').removeClass('inactive');
  }

  function updateFilling(selectedEvent, filling, totWidth) {
    //change .filling-line length according to the selected event
    var eventStyle = window.getComputedStyle(selectedEvent.get(0), null),
      eventLeft = eventStyle.getPropertyValue("left"),
      eventWidth = eventStyle.getPropertyValue("width");
    eventLeft = Number(eventLeft.replace('px', '')) + Number(eventWidth.replace('px', ''))/2;
    var scaleValue = eventLeft/totWidth;
    setTransformValue(filling.get(0), 'scaleX', scaleValue);
  }

  function setDatePosition(timelineComponents, min) {
    for (i = 0; i < timelineComponents['timelineDates'].length; i++) { 
        var distance = daydiff(timelineComponents['timelineDates'][0], timelineComponents['timelineDates'][i]),
          distanceNorm = Math.round(distance/timelineComponents['eventsMinLapse']) + 2;
        timelineComponents['timelineEvents'].eq(i).css('left', distanceNorm*min+'px');
    }
  }

  function setTimelineWidth(timelineComponents, width) {
    var timeSpan = daydiff(timelineComponents['timelineDates'][0], timelineComponents['timelineDates'][timelineComponents['timelineDates'].length-1]),
      timeSpanNorm = timeSpan/timelineComponents['eventsMinLapse'],
      timeSpanNorm = Math.round(timeSpanNorm) + 4,
      totalWidth = timeSpanNorm*width;
    timelineComponents['eventsWrapper'].css('width', totalWidth+'px');
    updateFilling(timelineComponents['eventsWrapper'].find('a.selected'), timelineComponents['fillingLine'], totalWidth);
    updateTimelinePosition('next', timelineComponents['eventsWrapper'].find('a.selected'), timelineComponents);
  
    return totalWidth;
  }

  function updateVisibleContent(event, eventsContent) {
    var eventDate = event.data('date'),
      visibleContent = eventsContent.find('.selected'),
      selectedContent = eventsContent.find('[data-date="'+ eventDate +'"]'),
      selectedContentHeight = selectedContent.height();

    if (selectedContent.index() > visibleContent.index()) {
      var classEnetering = 'selected enter-right',
        classLeaving = 'leave-left';
    } else {
      var classEnetering = 'selected enter-left',
        classLeaving = 'leave-right';
    }

    selectedContent.attr('class', classEnetering);
    visibleContent.attr('class', classLeaving).one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(){
      visibleContent.removeClass('leave-right leave-left');
      selectedContent.removeClass('enter-left enter-right');
    });
    eventsContent.css('height', selectedContentHeight+'px');
  }

  function updateOlderEvents(event) {
    event.parent('li').prevAll('li').children('a').addClass('older-event').end().end().nextAll('li').children('a').removeClass('older-event');
  }

  function getTranslateValue(timeline) {
    var timelineStyle = window.getComputedStyle(timeline.get(0), null),
      timelineTranslate = timelineStyle.getPropertyValue("-webkit-transform") ||
            timelineStyle.getPropertyValue("-moz-transform") ||
            timelineStyle.getPropertyValue("-ms-transform") ||
            timelineStyle.getPropertyValue("-o-transform") ||
            timelineStyle.getPropertyValue("transform");

        if( timelineTranslate.indexOf('(') >=0 ) {
          var timelineTranslate = timelineTranslate.split('(')[1];
        timelineTranslate = timelineTranslate.split(')')[0];
        timelineTranslate = timelineTranslate.split(',');
        var translateValue = timelineTranslate[4];
        } else {
          var translateValue = 0;
        }

        return Number(translateValue);
  }

  function setTransformValue(element, property, value) {
    element.style["-webkit-transform"] = property+"("+value+")";
    element.style["-moz-transform"] = property+"("+value+")";
    element.style["-ms-transform"] = property+"("+value+")";
    element.style["-o-transform"] = property+"("+value+")";
    element.style["transform"] = property+"("+value+")";
  }

  function parseDate(events) {
    var dateArrays = [];
    events.each(function(){
      var singleDate = $(this),
        dateComp = singleDate.data('date').split('T');
      if( dateComp.length > 1 ) { //both DD/MM/YEAR and time are provided
        var dayComp = dateComp[0].split('/'),
          timeComp = dateComp[1].split(':');
      } else if( dateComp[0].indexOf(':') >=0 ) { //only time is provide
        var dayComp = ["2000", "0", "0"],
          timeComp = dateComp[0].split(':');
      } else { //only DD/MM/YEAR
        var dayComp = dateComp[0].split('/'),
          timeComp = ["0", "0"];
      }
      var newDate = new Date(dayComp[2], dayComp[1]-1, dayComp[0], timeComp[0], timeComp[1]);
      dateArrays.push(newDate);
    });
      return dateArrays;
  }

  function daydiff(first, second) {
      return Math.round((second-first));
  }

  function minLapse(dates) {
    //determine the minimum distance among events
    var dateDistances = [];
    for (i = 1; i < dates.length; i++) { 
        var distance = daydiff(dates[i-1], dates[i]);
        dateDistances.push(distance);
    }
    return Math.min.apply(null, dateDistances);
  }

  /* How to tell if a DOM element is visible in the current viewport?  */
 
  function elementInViewport(el) {
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;

    while(el.offsetParent) {
        el = el.offsetParent;
        top += el.offsetTop;
        left += el.offsetLeft;
    }

    return (
        top < (window.pageYOffset + window.innerHeight) &&
        left < (window.pageXOffset + window.innerWidth) &&
        (top + height) > window.pageYOffset &&
        (left + width) > window.pageXOffset
    );
  }

  function checkMQ() {
    //check if mobile or desktop device
    return window.getComputedStyle(document.querySelector('.cd-horizontal-timeline'), '::before').getPropertyValue('content').replace(/'/g, "").replace(/"/g, "");
  }
});
