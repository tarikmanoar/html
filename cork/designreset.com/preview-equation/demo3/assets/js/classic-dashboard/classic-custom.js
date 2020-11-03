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


/**
 * Sales
 */

AmCharts.makeChart( "t-sales-chart", {
  "type": "serial",
"theme": "light",

  "dataProvider": [ {
    "day": 1,
    "totalSales": 120
  }, {
    "day": 2,
    "totalSales": 124
  }, {
    "day": 3,
    "totalSales": 127
  }, {
    "day": 4,
    "totalSales": 122
  }, {
    "day": 5,
    "totalSales": 121
  }, {
    "day": 6,
    "totalSales": 123
  }, {
    "day": 7,
    "totalSales": 118
  }, {
    "day": 8,
    "totalSales": 113
  }, {
    "day": 9,
    "totalSales": 122
  }, {
    "day": 10,
    "totalSales": 125,
    "bullet": "round"
  } ],
  "categoryField": "day",
  "autoMargins": false,
  "marginLeft": 0,
  "marginRight": 5,
  "marginTop": 0,
  "marginBottom": 0,
  "graphs": [ {
    "valueField": "totalSales",
    "bulletField": "bullet",
    "showBalloon": false,
    "lineColor": "#00b1f4"
  } ],
  "valueAxes": [ {
    "gridAlpha": 0,
    "axisAlpha": 0
  } ],
  "categoryAxis": {
    "gridAlpha": 0,
    "axisAlpha": 0,
    "startOnAxis": true
  }
} );


/**
 * Order
 */

AmCharts.makeChart( "t-order-chart", {
  "type": "serial",
"theme": "light",

  "dataProvider": [ {
    "day": 1,
    "totalOrder": 160
  }, {
    "day": 2,
    "totalOrder": 224
  }, {
    "day": 3,
    "totalOrder": 197
  }, {
    "day": 4,
    "totalOrder": 112
  }, {
    "day": 5,
    "totalOrder": 161
  }, {
    "day": 6,
    "totalOrder": 113
  }, {
    "day": 7,
    "totalOrder": 178
  }, {
    "day": 8,
    "totalOrder": 163
  }, {
    "day": 9,
    "totalOrder": 200
  }, {
    "day": 10,
    "totalOrder": 155,
    "bullet": "round"
  } ],
  "categoryField": "day",
  "autoMargins": false,
  "marginLeft": 0,
  "marginRight": 5,
  "marginTop": 0,
  "marginBottom": 0,
  "graphs": [ {
    "valueField": "totalOrder",
    "bulletField": "bullet",
    "showBalloon": false,
    "lineColor": "#00b1f4"
  } ],
  "valueAxes": [ {
    "gridAlpha": 0,
    "axisAlpha": 0
  } ],
  "categoryAxis": {
    "gridAlpha": 0,
    "axisAlpha": 0,
    "startOnAxis": true
  }
} );


/**
 * Profile
 */

AmCharts.makeChart( "profile-chart", {
  "type": "serial",
"theme": "light",

  "dataProvider": [ {
    "day": 1,
    "totalOrder": 160
  }, {
    "day": 2,
    "totalOrder": 224
  }, {
    "day": 3,
    "totalOrder": 197
  }, {
    "day": 4,
    "totalOrder": 112
  }, {
    "day": 5,
    "totalOrder": 161
  }, {
    "day": 6,
    "totalOrder": 113
  }, {
    "day": 7,
    "totalOrder": 178
  }, {
    "day": 8,
    "totalOrder": 163
  }, {
    "day": 9,
    "totalOrder": 200
  }, {
    "day": 10,
    "totalOrder": 155,
    "bullet": "round"
  } ],
  "categoryField": "day",
  "autoMargins": false,
  "marginLeft": 0,
  "marginRight": 5,
  "marginTop": 0,
  "marginBottom": 0,
  "graphs": [ {
    "valueField": "totalOrder",
    "bulletField": "bullet",
    "showBalloon": false,
    "lineColor": "#00b1f4"
  } ],
  "valueAxes": [ {
    "gridAlpha": 0,
    "axisAlpha": 0
  } ],
  "categoryAxis": {
    "gridAlpha": 0,
    "axisAlpha": 0,
    "startOnAxis": true
  }
} );


// Profit

var bar = new ProgressBar.Circle("#t-profit-chart", {
  color: '#3232b7',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 6,
  trailWidth: 6,
  trailColor: "#ebedf2",
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#3232b7', width: 6 },
  to: { color: '#3232b7', width: 6 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value+'K');
    }

  }
});
bar.text.style.fontSize = '0.8rem';

bar.set(0.65);  // Number from 0.0 to 1.0


// Shipments

var bar = new ProgressBar.Circle("#t-shipments-chart", {
  color: '#3232b7',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 6,
  trailWidth: 6,
  trailColor: "#ebedf2",
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#3232b7', width: 6 },
  to: { color: '#3232b7', width: 6 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value+'K');
    }

  }
});
bar.text.style.fontSize = '0.8rem';

bar.set(0.71);  // Number from 0.0 to 1.0

// Weekly Visitors

var chart = AmCharts.makeChart( "v-weekly-chart", {
  "type": "serial",
  "theme": "light",
  "dataProvider": [ {
    "month": "Jan",
    "visits": 543,
    "color": "#e9ecef"
  }, {
    "month": "Feb",
    "visits": 395,
    "color": "#e9ecef"
  }, {
    "month": "Mar",
    "visits": 811,
    "color": "#e9ecef"
  }, {
    "month": "Apr",
    "visits": 300,
    "color": "#e9ecef"
  }, {
    "month": "May",
    "visits": 200,
    "color": "#e9ecef"
  }, {
    "month": "Jun",
    "visits": 300,
    "color": "#e9ecef"
  }, {
    "month": "Jul",
    "visits": 450,
    "color": "#e9ecef"
  }, {
    "month": "Aug",
    "visits": 480,
    "color": "#e9ecef"
  }, {
    "month": "Sep",
    "visits": 665,
    "color": "#e9ecef"
  }, {
    "month": "Oct",
    "visits": 1000,
    "color": "#3862f5"
  }, {
    "month": "Nov",
    "visits": 443,
    "color": "#e9ecef"
  }, {
    "month": "Dec",
    "visits": 395,
    "color": "#e9ecef"
  }  ],
  "valueAxes": [ {
    "gridColor": "#f1f3f1",
    "gridAlpha": 0.2,
    "dashLength": 0,
    "labelsEnabled": false,
    "axisAlpha": 0
  } ],
  "gridAboveGraphs": true,
  "startDuration": 1,
  "graphs": [ {
    "balloonText": "[[category]]: <b>[[value]]</b>",
    "fillAlphas": 0.9,
    "lineAlpha": 0,
    "type": "column",
    "valueField": "visits",
    "colorField": "color"
  } ],
  "chartCursor": {
    "categoryBalloonEnabled": false,
    "cursorAlpha": 0,
    "zoomable": false
  },
  "categoryField": "month",
  "categoryAxis": {
    "gridPosition": "start",
    "gridAlpha": 0,
    "tickPosition": "start",
    "tickLength": 10,
    "labelsEnabled": false,
    "axisAlpha": 0
  },
  "export": {
    "enabled": true
  }

} );


// Monthly Visitors

var chart = AmCharts.makeChart( "v-monthly-chart", {
  "type": "serial",
  "theme": "light",
  "dataProvider": [ {
    "month": "Jan",
    "visits": 443,
    "color": "#e9ecef"
  }, {
    "month": "Feb",
    "visits": 395,
    "color": "#e9ecef"
  }, {
    "month": "Mar",
    "visits": 1000,
    "color": "#3862f5"
  }, {
    "month": "Apr",
    "visits": 300,
    "color": "#e9ecef"
  }, {
    "month": "May",
    "visits": 200,
    "color": "#e9ecef"
  }, {
    "month": "Jun",
    "visits": 300,
    "color": "#e9ecef"
  }, {
    "month": "Jul",
    "visits": 450,
    "color": "#e9ecef"
  }, {
    "month": "Aug",
    "visits": 811,
    "color": "#e9ecef"
  }, {
    "month": "Sep",
    "visits": 665,
    "color": "#e9ecef"
  }, {
    "month": "Oct",
    "visits": 580,
    "color": "#e9ecef"
  }, {
    "month": "Nov",
    "visits": 443,
    "color": "#e9ecef"
  }, {
    "month": "Dec",
    "visits": 395,
    "color": "#e9ecef"
  }  ],
  "valueAxes": [ {
    "gridColor": "#f1f3f1",
    "gridAlpha": 0.2,
    "dashLength": 0,
    "labelsEnabled": false,
    "axisAlpha": 0
  } ],
  "gridAboveGraphs": true,
  "startDuration": 1,
  "graphs": [ {
    "balloonText": "[[category]]: <b>[[value]]</b>",
    "fillAlphas": 0.9,
    "lineAlpha": 0,
    "type": "column",
    "valueField": "visits",
    "colorField": "color"
  } ],
  "chartCursor": {
    "categoryBalloonEnabled": false,
    "cursorAlpha": 0,
    "zoomable": false
  },
  "categoryField": "month",
  "categoryAxis": {
    "gridPosition": "start",
    "gridAlpha": 0,
    "tickPosition": "start",
    "tickLength": 10,
    "labelsEnabled": false,
    "axisAlpha": 0
  },
  "export": {
    "enabled": true
  }

} );


// Total Visitors

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
    "unlistedAreasColor": "#e9ecef"
  },

  "dataProvider": {
    "map": "worldLow",
    "images": [ {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Brussels",
      "latitude": 50.8371,
      "longitude": 4.3676
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Copenhagen",
      "latitude": 55.6763,
      "longitude": 12.5681
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Paris",
      "latitude": 48.8567,
      "longitude": 2.3510
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Reykjavik",
      "latitude": 64.1353,
      "longitude": -21.8952
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Moscow",
      "latitude": 55.7558,
      "longitude": 37.6176
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Madrid",
      "latitude": 40.4167,
      "longitude": -3.7033
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "London",
      "latitude": 51.5002,
      "longitude": -0.1262,
      "url": "http://www.google.co.uk"
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
      "title": "Ankara",
      "latitude": 39.9439,
      "longitude": 32.8560
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Buenos Aires",
      "latitude": -34.6118,
      "longitude": -58.4173
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Brasilia",
      "latitude": -15.7801,
      "longitude": -47.9292
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Ottawa",
      "latitude": 45.4235,
      "longitude": -75.6979
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Washington",
      "latitude": 38.8921,
      "longitude": -77.0241
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Kinshasa",
      "latitude": -4.3369,
      "longitude": 15.3271
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Cairo",
      "latitude": 30.0571,
      "longitude": 31.2272
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Pretoria",
      "latitude": -25.7463,
      "longitude": 28.1876
    } ]
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


// Total Monthly Page Views

var chart = AmCharts.makeChart( "page-views-monthly", {
  "type": "serial",
  "marginRight": 40,
  "marginLeft": 40,
  "autoMarginOffset": 20,
  "valueAxes": [ {
    "id": "v1",
    "axisAlpha": 0,
    "position": "left",
    "ignoreAxisWidth": true,
    labelFunction: function(value) {
      return (value/1000) + "K";
    }
  } ],
  "balloon": {
    "borderThickness": 1,
    "shadowAlpha": 0
  },
  "graphs": [ {
    "id": "g1",
    "fillColorsField": "lineColor",
    "lineColorField": "lineColor",
    "balloon": {
      "drop": true,
      "adjustBorderColor": false,
      "color": "#ffffff",
        "valueField": "value",
      "type": "smoothedLine"
    },
    "fillAlphas": 0.2,
    "bullet": "round",
    "bulletBorderAlpha": 1,
    "bulletColor": "#FFFFFF",
    "bulletSize": 5,
    "hideBulletsCount": 50,
    "lineThickness": 2,
    "title": "red line",
    "useLineColorForBulletBorder": true,
    "valueField": "value",
    "balloonText": "<span style='font-size:18px;'>[[value]]</span>"
  } ],
  "chartCursor": {
    "valueLineEnabled": true,
    "valueLineBalloonEnabled": true,
    "cursorAlpha": 0,
    "zoomable": false,
    "valueZoomable": true,
    "valueLineAlpha": 0.5
  },
  "categoryField": "date",
  "categoryAxis": {
    "dashLength": 1,
    "minorGridEnabled": true
  },
  "dataProvider": [ {
    "date": "Jan",
    "value": 21000,
    "lineColor": "#4f5163"
  }, {
    "date": "Feb",
    "value": 22000,
    "lineColor": "#4f5163"
  }, {
    "date": "Mar",
    "value": 60000,
    "lineColor": "#4f5163"
  }, {
    "date": "Apr",
    "value": 80000,
    "lineColor": "#4f5163"
  }, {
    "date": "May",
    "value": 20000,
    "lineColor": "#4f5163"
  }, {
    "date": "Jun",
    "value": 70000,
    "lineColor": "#4f5163"
  }, {
    "date": "Jul",
    "value": 22000,
    "lineColor": "#4f5163"
  }, {
    "date": "Aug",
    "value": 25000,
    "lineColor": "#4f5163"
  }, {
    "date": "Sep",
    "value": 30000,
    "lineColor": "#4f5163"
  }, {
    "date": "Oct",
    "value": 33000,
    "lineColor": "#4f5163"
  }, {
    "date": "Nov",
    "value": 95000,
    "lineColor": "#4f5163"
  }, {
    "date": "Dec",
    "value": 99000,
    "lineColor": "#4f5163"
  }]
} );


// Total Yearly Page Views

var chart = AmCharts.makeChart( "page-views-yearly", {
  "type": "serial",
  "theme": "light",
  "marginRight": 40,
  "marginLeft": 40,
  "autoMarginOffset": 20,
  "dataDateFormat": "YYYY-MM-DD",
  "valueAxes": [ {
    "id": "v1",
    "axisAlpha": 0,
    "position": "left",
    "ignoreAxisWidth": true,
    labelFunction: function(value) {
      return (value/1000) + "K";
    }
  } ],
  "balloon": {
    "borderThickness": 1,
    "shadowAlpha": 0
  },
  "graphs": [ {
    "id": "g1",
    "balloon": {
      "drop": true,
      "adjustBorderColor": false,
      "color": "#ffffff",
      "type": "smoothedLine"
    },
    "fillColorsField": "lineColor",
    "lineColorField": "lineColor",
    "fillAlphas": 0.2,
    "bullet": "round",
    "bulletBorderAlpha": 1,
    "bulletColor": "#FFFFFF",
    "bulletSize": 5,
    "hideBulletsCount": 50,
    "lineThickness": 2,
    "title": "red line",
    "useLineColorForBulletBorder": true,
    "valueField": "value",
    "balloonText": "<span style='font-size:18px;'>[[value]]</span>"
  } ],
  "chartCursor": {
    "valueLineEnabled": true,
    "valueLineBalloonEnabled": true,
    "cursorAlpha": 0,
    "zoomable": false,
    "valueZoomable": true,
    "valueLineAlpha": 0.5
  },
  "categoryField": "date",
  "categoryAxis": {
    "parseDates": true,
    "dashLength": 1,
    "minorGridEnabled": true
  },
  "export": {
    "enabled": true
  },
 "dataProvider": [ {
    "date": "2018-07-27",
    "value": 13000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-07-28",
    "value": 11000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-07-29",
    "value": 15000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-07-30",
    "value": 16000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-07-31",
    "value": 18000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-08-01",
    "value": 13000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-08-02",
    "value": 22000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-08-03",
    "value": 23000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-08-04",
    "value": 20000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-08-05",
    "value": 17000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-08-06",
    "value": 16000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-08-07",
    "value": 18000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-08-08",
    "value": 21000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-08-09",
    "value": 26000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-08-10",
    "value": 24000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-08-11",
    "value": 29000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-08-12",
    "value": 32000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-08-13",
    "value": 18000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-08-14",
    "value": 24000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-08-15",
    "value": 22000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-08-16",
    "value": 18000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-08-17",
    "value": 19000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-08-18",
    "value": 14000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-08-19",
    "value": 15000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-08-20",
    "value": 12000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-08-21",
    "value": 8000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-08-22",
    "value": 9000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-08-23",
    "value": 8000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-08-24",
    "value": 7000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-08-25",
    "value": 5000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-08-26",
    "value": 11000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-08-27",
    "value": 13000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-08-28",
    "value": 18000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-08-29",
    "value": 20000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-08-30",
    "value": 29000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-08-31",
    "value": 33000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-09-01",
    "value": 42000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-09-02",
    "value": 35000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-09-03",
    "value": 31000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-09-04",
    "value": 47000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-09-05",
    "value": 52000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-09-06",
    "value": 46000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-09-07",
    "value": 41000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-09-08",
    "value": 43000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-09-09",
    "value": 40000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-09-10",
    "value": 39000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-09-11",
    "value": 34000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-09-12",
    "value": 29000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-09-13",
    "value": 34000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-09-14",
    "value": 37000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-09-15",
    "value": 42000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-09-16",
    "value": 49000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-09-17",
    "value": 46000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-09-18",
    "value": 47000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-09-19",
    "value": 55000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-09-20",
    "value": 59000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-09-21",
    "value": 58000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-09-22",
    "value": 57000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-09-23",
    "value": 61000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-09-24",
    "value": 59000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-09-25",
    "value": 67000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-09-26",
    "value": 65000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-09-27",
    "value": 61000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-09-28",
    "value": 66000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-09-29",
    "value": 69000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-09-30",
    "value": 71000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-10-01",
    "value": 67000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-10-02",
    "value": 63000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-10-03",
    "value": 46000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-10-04",
    "value": 32000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-10-05",
    "value": 21000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-10-06",
    "value": 18000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-10-07",
    "value": 21000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-10-08",
    "value": 28000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-10-09",
    "value": 27000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-10-10",
    "value": 36000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-10-11",
    "value": 33000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-10-12",
    "value": 31000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-10-13",
    "value": 30000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-10-14",
    "value": 34000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-10-15",
    "value": 38000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-10-16",
    "value": 37000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-10-17",
    "value": 44000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-10-18",
    "value": 49000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-10-19",
    "value": 53000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-10-20",
    "value": 57000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-10-21",
    "value": 60000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-10-22",
    "value": 61000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-10-23",
    "value": 69000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-10-24",
    "value": 67000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-10-25",
    "value": 72000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-10-26",
    "value": 77000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-10-27",
    "value": 75000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-10-28",
    "value": 70000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-10-29",
    "value": 72000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-10-30",
    "value": 70000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-10-31",
    "value": 72000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-11-01",
    "value": 73000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-11-02",
    "value": 67000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-11-03",
    "value": 68000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-11-04",
    "value": 65000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-11-05",
    "value": 71000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-11-06",
    "value": 75000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-11-07",
    "value": 74000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-11-08",
    "value": 71000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-11-09",
    "value": 76000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-11-10",
    "value": 77000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-11-11",
    "value": 81000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-11-12",
    "value": 83000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-11-13",
    "value": 80000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-11-14",
    "value": 81000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-11-15",
    "value": 87000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-11-16",
    "value": 82000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-11-17",
    "value": 86000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-11-18",
    "value": 80000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-11-19",
    "value": 87000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-11-20",
    "value": 83000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-11-21",
    "value": 85000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-11-22",
    "value": 84000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-11-23",
    "value": 82000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-11-24",
    "value": 73000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-11-25",
    "value": 71000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-11-26",
    "value": 75000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-11-27",
    "value": 79000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-11-28",
    "value": 70000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-11-29",
    "value": 73000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-11-30",
    "value": 61000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-12-01",
    "value": 62000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-12-02",
    "value": 66000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-12-03",
    "value": 65000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-12-04",
    "value": 73000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-12-05",
    "value": 79000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-12-06",
    "value": 78000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-12-07",
    "value": 78000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-12-08",
    "value": 78000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-12-09",
    "value": 74000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-12-10",
    "value": 73000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-12-11",
    "value": 75000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-12-12",
    "value": 70000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-12-13",
    "value": 77000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-12-14",
    "value": 67000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-12-15",
    "value": 62000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-12-16",
    "value": 64000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-12-17",
    "value": 61000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-12-18",
    "value": 59000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-12-19",
    "value": 53000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-12-20",
    "value": 54000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-12-21",
    "value": 56000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-12-22",
    "value": 59000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-12-23",
    "value": 58000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-12-24",
    "value": 55000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-12-25",
    "value": 52000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-12-26",
    "value": 54000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-12-27",
    "value": 50000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-12-28",
    "value": 50000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-12-29",
    "value": 51000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-12-30",
    "value": 52000,
    "lineColor": "#4f5163"
  }, {
    "date": "2018-12-31",
    "value": 58000,
    "lineColor": "#4f5163"
  }, {
    "date": "2019-01-01",
    "value": 60000,
    "lineColor": "#4f5163"
  }, {
    "date": "2019-01-02",
    "value": 67000,
    "lineColor": "#4f5163"
  }, {
    "date": "2019-01-03",
    "value": 64000,
    "lineColor": "#4f5163"
  }, {
    "date": "2019-01-04",
    "value": 66000,
    "lineColor": "#4f5163"
  }, {
    "date": "2019-01-05",
    "value": 60000,
    "lineColor": "#4f5163"
  }, {
    "date": "2019-01-06",
    "value": 63000,
    "lineColor": "#4f5163"
  }, {
    "date": "2019-01-07",
    "value": 61000,
    "lineColor": "#4f5163"
  }, {
    "date": "2019-01-08",
    "value": 60000,
    "lineColor": "#4f5163"
  }, {
    "date": "2019-01-09",
    "value": 65000,
    "lineColor": "#4f5163"
  }, {
    "date": "2019-01-10",
    "value": 75000,
    "lineColor": "#4f5163"
  }, {
    "date": "2019-01-11",
    "value": 77000,
    "lineColor": "#4f5163"
  }, {
    "date": "2019-01-12",
    "value": 78000,
    "lineColor": "#4f5163"
  }, {
    "date": "2019-01-13",
    "value": 70000,
    "lineColor": "#4f5163"
  }, {
    "date": "2019-01-14",
    "value": 70000,
    "lineColor": "#4f5163"
  }, {
    "date": "2019-01-15",
    "value": 73000,
    "lineColor": "#4f5163"
  }, {
    "date": "2019-01-16",
    "value": 71000,
    "lineColor": "#4f5163"
  }, {
    "date": "2019-01-17",
    "value": 74000,
    "lineColor": "#4f5163"
  }, {
    "date": "2019-01-18",
    "value": 78000,
    "lineColor": "#4f5163"
  }, {
    "date": "2019-01-19",
    "value": 85000,
    "lineColor": "#4f5163"
  }, {
    "date": "2019-01-20",
    "value": 82000,
    "lineColor": "#4f5163"
  }, {
    "date": "2019-01-21",
    "value": 83000,
    "lineColor": "#4f5163"
  }, {
    "date": "2019-01-22",
    "value": 88000,
    "lineColor": "#4f5163"
  }, {
    "date": "2019-01-23",
    "value": 85000,
    "lineColor": "#4f5163"
  }, {
    "date": "2019-01-24",
    "value": 85000,
    "lineColor": "#4f5163"
  }, {
    "date": "2019-01-25",
    "value": 80000,
    "lineColor": "#4f5163"
  }, {
    "date": "2019-01-26",
    "value": 87000,
    "lineColor": "#4f5163"
  }, {
    "date": "2019-01-27",
    "value": 84000,
    "lineColor": "#4f5163"
  }, {
    "date": "2019-01-28",
    "value": 83000,
    "lineColor": "#4f5163"
  }, {
    "date": "2019-01-29",
    "value": 84000,
    "lineColor": "#4f5163"
  }, {
    "date": "2019-01-30",
    "value": 81000,
    "lineColor": "#4f5163"
  }]
} );


// Date And Time

var d = new Date();
var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
$("#month").text(monthNames[d.getMonth()]);
$("#day").text(d.getDate());
var weekNames = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
$("#week").text(weekNames[d.getDay()]);
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
      
  $("#hour").html(hh);
  $("#minut").html(mm);
  $("#date").html(dd);

}
setInterval(function(){ timer();}, 1000);