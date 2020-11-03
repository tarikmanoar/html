
$(".traffic-sources .traffic-sources-body .traffic-sources-scroll").mCustomScrollbar({
  axis:"x", // horizontal scrollbar
  autoHideScrollbar:true,
});
$(".traffic-country .traffic-country-scroll").mCustomScrollbar({
  axis:"x", // horizontal scrollbar
  autoHideScrollbar:true,
});
$(".recent-sales .recent-sales-body .recent-sales-scroll").mCustomScrollbar({
  axis:"x", // horizontal scrollbar
  autoHideScrollbar:true,
});

var bar = new ProgressBar.Circle(".cogs", {
  color: '#3862f5',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 10,
  trailWidth: 10,
  trailColor: '#e9ecef',
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#3862f5', width: 10 },
  to: { color: '#3862f5', width: 10 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value+'%');
    }

  }
});
bar.text.style.fontSize = '25px';
bar.text.style.color = 'black';
bar.text.style.fontWeight = '600';

function msieversion() {

    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))
    {
        bar.set(0.67);  // Number from 0.0 to 1.0
    }
    else  {
        bar.animate(0.67);  // Number from 0.0 to 1.0
    }

    return false;
}
msieversion();


var d = new Date();
var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
$("#month").html(monthNames[d.getMonth()] + '' );
$("#day").html(d.getDate() + '&nbsp;');
var weekNames = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
$("#week").html(weekNames[d.getDay()] + ',');
function timer() {
  var d = new Date();
  var h = d.getHours(),
      mm = d.getMinutes(),
      ss = d.getSeconds(),
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
      
  $("#hour").html(hh + ':');
  $("#minut").html(mm + ':');
  $("#sec").html(ss);

}
setInterval(function(){ timer();}, 1000);


// Acitvity Chart

var chart = AmCharts.makeChart("sale-statistics", {
  "type": "serial",
  "theme": "light",
  "dataDateFormat": "YYYY-MM-DD",
  "precision": 2,
  "valueAxes": [{
    "id": "v1",
    "title": "Sales",
    "position": "left",
    "autoGridCount": false,
    "labelFunction": function(value) {
      return "$" + Math.round(value) + "M";
    }
  }],
  "graphs": [{
    "id": "g3",
    "valueAxis": "v1",
    "lineColor": "#24ccda",
    "fillColors": "#24ccda",
    "fillAlphas": 1,
    "type": "column",
    "title": "Monthly Revenue",
    "valueField": "sales2",
    "clustered": false,
    "columnWidth": 0.5,
    "legendValueText": "$[[value]]M",
    "balloonText": "[[title]]<br /><b style='font-size: 130%'>$[[value]]M</b>"
  }, {
    "id": "g4",
    "valueAxis": "v1",
    "lineColor": "#805dca",
    "fillColors": "#805dca",
    "fillAlphas": 1,
    "type": "column",
    "title": "Yearly Revenue",
    "valueField": "sales1",
    "clustered": false,
    "columnWidth": 0.3,
    "legendValueText": "$[[value]]M",
    "balloonText": "[[title]]<br /><b style='font-size: 130%'>$[[value]]M</b>"
  },],
  "chartCursor": {
    "pan": true,
    "valueLineEnabled": true,
    "valueLineBalloonEnabled": true,
    "cursorAlpha": 0,
    "valueLineAlpha": 0.2
  },
  "categoryField": "date",
  "categoryAxis": {
    "parseDates": true,
    "dashLength": 1,
    "minorGridEnabled": true
  },
  "legend": {
    "useGraphSettings": true,
    "position": "top"
  },
  "balloon": {
    "borderThickness": 1,
    "shadowAlpha": 0
  },
  "dataProvider": [{
    "date": "2018-12-16",
    "market1": 71,
    "market2": 75,
    "sales1": 5,
    "sales2": 8
  }, {
    "date": "2018-12-17",
    "market1": 74,
    "market2": 78,
    "sales1": 4,
    "sales2": 6
  }, {
    "date": "2018-12-18",
    "market1": 78,
    "market2": 88,
    "sales1": 5,
    "sales2": 2
  }, {
    "date": "2018-12-19",
    "market1": 85,
    "market2": 89,
    "sales1": 8,
    "sales2": 9
  }, {
    "date": "2018-12-20",
    "market1": 82,
    "market2": 89,
    "sales1": 9,
    "sales2": 6
  }, {
    "date": "2018-12-21",
    "market1": 83,
    "market2": 85,
    "sales1": 3,
    "sales2": 5
  }, {
    "date": "2018-12-22",
    "market1": 88,
    "market2": 92,
    "sales1": 5,
    "sales2": 7
  }, {
    "date": "2018-12-23",
    "market1": 85,
    "market2": 90,
    "sales1": 7,
    "sales2": 6
  }, {
    "date": "2018-12-24",
    "market1": 85,
    "market2": 91,
    "sales1": 9,
    "sales2": 5
  }, {
    "date": "2018-12-25",
    "market1": 80,
    "market2": 84,
    "sales1": 5,
    "sales2": 8
  }, {
    "date": "2018-12-26",
    "market1": 87,
    "market2": 92,
    "sales1": 4,
    "sales2": 8
  }, {
    "date": "2018-12-27",
    "market1": 84,
    "market2": 87,
    "sales1": 3,
    "sales2": 4
  }, {
    "date": "2018-12-28",
    "market1": 83,
    "market2": 88,
    "sales1": 5,
    "sales2": 7
  }, {
    "date": "2018-12-29",
    "market1": 84,
    "market2": 87,
    "sales1": 5,
    "sales2": 8
  }, {
    "date": "2018-12-30",
    "market1": 81,
    "market2": 85,
    "sales1": 4,
    "sales2": 7
  }]
});

var chart = AmCharts.makeChart( "radarchartdiv", {
    "type": "radar",
    "theme": "light",
    "dataProvider": [ {
      "productsName": "Washing Machine",
      "litres": 156.9
    }, {
      "productsName": "Game Gadgets",
      "litres": 131.1
    }, {
      "productsName": "Sony Speakers",
      "litres": 115.8
    }, {
      "productsName": "Dell Laptop",
      "litres": 108.3
    }, {
      "productsName": "Parasonic LED",
      "litres": 99
    } ],
    "valueAxes": [ {
      "axisTitleOffset": 20,
      "minimum": 0,
      "axisAlpha": 0.15
    } ],
    "startDuration": 2,
    "graphs": [ {
      "balloonText": "[[value]] litres of beer per year",
      "bullet": "round",
      "lineThickness": 2,
      "valueField": "litres",
      "bulletColor": "#07e0c4",
      "lineColor": "#07e0c4",
    } ],
    "categoryField": "productsName"
} );

$(".total-visits-charts").sparkline([0,3,4,8,6,7,4,7,4,0], {
  type: 'line',
  width: '100',
  height: '100%',
  lineColor: '#e9b02b',
  lineWidth: 1,
  spotRadius: 3.5,
  fillColor: '#e9b02b',
  spotColor: '#1ad271',
  spotRadius: 0,
  minSpotColor: '#e9b02b',
  maxSpotColor: '#e9b02b'
});


$("#unique-visits-charts").sparkline([5,6,7,2,1,4,2,4,5,6,7,2,1,4,2], {
    type: 'bar',
    width: '100%',
    height: '100%',
    barWidth: 3,
    barSpacing: 4,
    zeroAxis: false,
    barColor: '#f8538d'
});

$("#unique-visits-charts").sparkline([2,3,5,6,6,2,2,1,1,2,4,5], {
    type: 'line',
    fillColor: null,
    lineWidth: 1.4,
    spotRadius: 2.5,
    composite: true,
});

$("#page-views").sparkline([2,4,2,6,3,4,1,12,3,8,6,5,4,6,0,1], {
    type: 'line',
    width: '100',
    height: '100%',
    lineColor: '#e95f2b',
    lineWidth: 1.5,
    spotRadius: 3.5,
    fillColor: 'transparent',
    spotColor: '#1ad271',
    spotRadius: 0,
    minSpotColor: '#fff',
    maxSpotColor: '#fff'
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


/**
 * This example uses pulsating circles CSS by Kevin Urrutia
 * http://kevinurrutia.tumblr.com/post/16411271583/creating-a-css3-pulsating-circle
 */

var map = AmCharts.makeChart( "mapdiv", {
  "type": "map",
  "theme": "light",
  "projection": "miller",

  "imagesSettings": {
    "rollOverColor": "#089282",
    "rollOverScale": 3,
    "selectedScale": 3,
    "selectedColor": "#089282",
    "color": "#13564e"
  },

  "areasSettings": {
    "unlistedAreasColor": "#d3d3d3"
  },

  "dataProvider": {
    "map": "worldLow",
    "images": [ {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Moscow",
      "latitude": 55.7558,
      "longitude": 37.6176
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Tokyo",
      "latitude": 35.6785,
      "longitude": 139.6823,
      "url": "http://www.google.co.jp"
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Washington",
      "latitude": 38.8921,
      "longitude": -77.0241
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Peking",
      "latitude": 39.9056,
      "longitude": 116.3958
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "New Delhi",
      "latitude": 28.6353,
      "longitude": 77.2250
    }]
  }
} );

// add events to recalculate map position when the map is moved or zoomed
map.addListener( "positionChanged", updateCustomMarkers );

// this function will take current images on the map and create HTML elements for them
function updateCustomMarkers( event ) {
  // get map object
  var map = event.chart;

  // go through all of the images
  for ( var x in map.dataProvider.images ) {
    // get MapImage object
    var image = map.dataProvider.images[ x ];

    // check if it has corresponding HTML element
    if ( 'undefined' == typeof image.externalElement )
      image.externalElement = createCustomMarker( image );

    // reposition the element accoridng to coordinates
    var xy = map.coordinatesToStageXY( image.longitude, image.latitude );
    image.externalElement.style.top = xy.y + 'px';
    image.externalElement.style.left = xy.x + 'px';
  }
}

// this function creates and returns a new marker element
function createCustomMarker( image ) {
  // create holder
  var holder = document.createElement( 'div' );
  holder.className = 'map-marker';
  holder.title = image.title;
  holder.style.position = 'absolute';

  // maybe add a link to it?
  if ( undefined != image.url ) {
    holder.onclick = function() {
      window.location.href = image.url;
    };
    holder.className += ' map-clickable';
  }

  // create dot
  var dot = document.createElement( 'div' );
  dot.className = 'dot';
  holder.appendChild( dot );

  // create pulse
  var pulse = document.createElement( 'div' );
  pulse.className = 'locator';
  holder.appendChild( pulse );

  // append the marker to the map container
  image.chart.chartDiv.appendChild( holder );

  return holder;
}

$("#n-p-t-v-charts").sparkline([0,10,5,12,6,2,6,5,4,9,3,11,5,15,6,2,8,5,4,6,2], {
    type: 'line',
    width: '100%',
    height: '100',
    lineColor: '#3862f5',
    lineWidth: 1,
    spotRadius: 3.5,
    fillColor: '#c2d5ff',
    spotColor: '#1ad271',
    spotRadius: 0,
    minSpotColor: '#fff',
    maxSpotColor: '#fff'
});

$("#n-p-t-c-charts").sparkline([0,7,5,3,10,2,5,7,4,6,2, 10,5,8,6,2,6,5,4,9,3], {
    type: 'line',
    width: '100%',
    height: '100',
    lineColor: '#e9b02b',
    lineWidth: 1,
    spotRadius: 3.5,
    fillColor: '#ffeccb',
    spotColor: '#1ad271',
    spotRadius: 0,
    minSpotColor: '#fff',
    maxSpotColor: '#fff'
});

var chart = AmCharts.makeChart( "visitor-engagement-chart", {
  "type": "pie",
  "theme": "light",
  "dataProvider": [ {
    "title": "Electronic",
    "value": 4852,
    "color": "#805dca"
  }, {
    "title": "News & Media",
    "value": 3899,
    "color": "#00b1f4"
  }, {
    "title": "Software",
    "value": 2899,
    "color": "#f8538d"
  }, {
    "title": "Home Appliances",
    "value": 8590,
    "color": "#e9b02b"
  } ],
  "titleField": "title",
  "valueField": "value",
  "colorField": "color",
  "labelRadius": 5,
  "radius": "42%",
  "innerRadius": "60%",
  "labelText": "",
} );

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
