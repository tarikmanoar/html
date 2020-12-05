/*
  ================
      Top Search Scroll
  ================
*/

$(".top-search-scroll").mCustomScrollbar({
  axis:"yx",
  scrollbarPosition:"outside",
  scrollInertia:450,
  theme:"dark-thin",
  autoHideScrollbar: true
});

$(".traffic-country .traffic-country-scroll").mCustomScrollbar({
  axis:"x", // horizontal scrollbar
  autoHideScrollbar:true,
});

// Monthly Charts
function weaklychart() {
  var data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    series: [
      

      [2, 3, 4, 3, 4, 1, 2],
      [3, 2, 3, 2, 3, 4, 3]
    ]
  };

  var options = {
      seriesBarDistance: 10,
      axisY: {
          labelInterpolationFnc: function (value) {
              return value + 'k';
          },
          onlyInteger: true,
      }
  };

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

  new Chartist.Bar('.v-pv-weekly', data, options, responsiveOptions);
}

weaklychart();

$('.monthly-chart-tab li a').on('shown.bs.tab', function(event) {

  weaklychart();

  var responsiveOptionsMonthly = [
    ['screen and (max-width: 575px)', {
      axisX: {
        labelInterpolationFnc: function (value) {
          return value[0];
        }
      }
    }]
  ];

  new Chartist.Line('.v-pv-monthly', {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    series: [
      [5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8],
      [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4]
    ]
  }, {
    fullWidth: true,
    // As this is axis specific we need to tell Chartist to use whole numbers only on the concerned axis
    axisY: {
      onlyInteger: true,
      offset: 20,
      labelInterpolationFnc: function (value) {
        return value + 'k';
      },
    }
  },responsiveOptionsMonthly);


  var responsiveOptionsYearly = [
    ['screen and (max-width: 575px)', {
      axisX: {
        labelInterpolationFnc: function (value) {
          return value[2] + value[3];
        }
      }
    }]
  ];


  new Chartist.Line('.v-pv-yearly', {
    labels: ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'],
    series: [
      [5, 9, 7, 8, 5, 3, 5, 4],
      [3, 6, 2, 4, 7, 8, 3, 9]
    ]
  }, {
    low: 0,
    showArea: true,
    axisY: {
        onlyInteger: true,
        offset: 20,
        labelInterpolationFnc: function (value) {
          return value + 'k';
        },
      }
  },responsiveOptionsYearly);

})

/*
  ================
      Donut Chart
  ================
*/

new Chartist.Pie('.s-r', {
  series: [25, 75]
}, {
  donut: true,
  donutWidth: 40,
  donutSolid: true,
  startAngle: 270,
  showLabel: true
});

// jvector map script

$('#world-map').vectorMap({

  map: 'world_mill_en',
      backgroundColor: '#fff',
      borderColor: '#818181',
      borderOpacity: 0.25,
      borderWidth: 1,
      color: '#f4f3f0',
      regionStyle: {
              initial: {
                  fill: '#f3f3f3'
              }
      },
      series: {
          regions: [{
              values: {
                  US:'#1a73e9',
                  AU:'#acb0c3',
                  ES:'#3232b7',
                  FR:'#25d5d4',
                  IN:'#00b1f4',
              }
          }]
      },
      markerStyle: {
              initial: {
                  r: 9,
                  'fill': '#fff',
                  'fill-opacity': 1,
                  'stroke': '#000',
                  'stroke-width': 5,
                  'stroke-opacity': 0.4
              },
      },
      enableZoom: true,
      hoverColor: '#1f3892',
      hoverOpacity: null,
      normalizeFunction: 'linear',
      scaleColors: ['#b6d6ff', '#005ace'],
      selectedColor: '#c9dfaf',
      selectedRegions: [],
      showTooltip: true,

});

function profitMonthlyRendered() {
  var chart = c3.generate({
    bindto: '#r_p_summary',
      data: {
          columns: [
              ['Expenses', 30],
              ['Revenue', 70],
              ['Sales', 120],
          ],
          type : 'donut',
          onclick: function (d, i) { console.log("onclick", d, i); },
          onmouseover: function (d, i) { console.log("onmouseover", d, i); },
          onmouseout: function (d, i) { console.log("onmouseout", d, i); }
      },
      color: {
        pattern: ['#00b1f4', '#4f5163', '#c2d5ff']
      },
      donut: {
        title: "Profit 21k",
        width: 20,
        label: {
          show: false
        }
      },
      legend: {
        hide: true
      }
  });
}

profitMonthlyRendered();

$('.r-p-summary li a').on('shown.bs.tab', function(event) {
  profitMonthlyRendered();
  var chart = c3.generate({
      bindto: '#r_p_summary_yearly',
        data: {
            columns: [
                ['Expenses', 60],
                ['Revenue', 50],
                ['Sales', 110],
            ],
            type : 'donut',
            onclick: function (d, i) { console.log("onclick", d, i); },
            onmouseover: function (d, i) { console.log("onmouseover", d, i); },
            onmouseout: function (d, i) { console.log("onmouseout", d, i); }
        },
        color: {
          pattern: ['#00b1f4', '#4f5163', '#c2d5ff']
        },
        donut: {
          title: "Profit 243k",
          width: 20,
          label: {
            show: false
          }
        },
        legend: {
           hide: true
        }
  });
})



//ANALYTICS


/* Define SVG path for target icon */

var targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";

/* Create the map */

var map = AmCharts.makeChart( "total-visits", {
  "type": "map",
  "projection": "winkel3",
  "theme": "light",
  "imagesSettings": {
    "rollOverColor": "#1a73e9",
    "rollOverScale": 3,
    "selectedScale": 3,
    "selectedColor": "#1a73e9",
    "color": "#1a73e9"
  },

  "areasSettings": {
    "unlistedAreasColor": "#acb0c3",
    "outlineThickness": 0.1
  },

  "dataProvider": {
    "map": "worldLow",
    "images": [ {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "London",
      "latitude": 51.5002,
      "longitude": -0.1262
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Paris",
      "latitude": 48.8567,
      "longitude": 2.3510
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Tokyo",
      "latitude": 35.6785,
      "longitude": 139.6823
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Moscow",
      "latitude": 55.7558,
      "longitude": 37.6176
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Washington D.C.",
      "latitude": 38.8921,
      "longitude": -77.0241
    }]
  }
});


var gaugeChart = AmCharts.makeChart("top-keyword", {
  "type": "gauge",
  "theme": "light",
  "axes": [{
    "axisAlpha": 0,
    "tickAlpha": 0,
    "labelsEnabled": false,
    "startValue": 0,
    "endValue": 100,
    "startAngle": 0,
    "endAngle": 270,
    "bands": [{
      "color": "#eee",
      "startValue": 0,
      "endValue": 100,
      "radius": "100%",
      "innerRadius": "85%"
    }, {
      "color": "#4f5163",
      "startValue": 0,
      "endValue": 80,
      "radius": "100%",
      "innerRadius": "85%",
      "balloonText": "90%"
    }, {
      "color": "#eee",
      "startValue": 0,
      "endValue": 100,
      "radius": "80%",
      "innerRadius": "65%"
    }, {
      "color": "#1a73e9",
      "startValue": 0,
      "endValue": 35,
      "radius": "80%",
      "innerRadius": "65%",
      "balloonText": "35%"
    }, {
      "color": "#eee",
      "startValue": 0,
      "endValue": 100,
      "radius": "60%",
      "innerRadius": "45%"
    }, {
      "color": "#c2d5ff",
      "startValue": 0,
      "endValue": 92,
      "radius": "60%",
      "innerRadius": "45%",
      "balloonText": "92%"
    }, {
      "color": "#eee",
      "startValue": 0,
      "endValue": 100,
      "radius": "40%",
      "innerRadius": "25%"
    }, {
      "color": "#3232b7",
      "startValue": 0,
      "endValue": 68,
      "radius": "40%",
      "innerRadius": "25%",
      "balloonText": "68%"
    }]
  }],
  "export": {
    "enabled": true
  }
});

// Revenue Stats

new Chartist.Pie('#revenue-stats', {
  series: [55, 18, 27]
}, {
  donut: true,
  donutWidth: 30,
  donutSolid: true,
  showLabel: false
});


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


// Acitvity Chart

var chart = AmCharts.makeChart("activity-chart", {
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
  }, {
    "id": "v2",
    "title": "Market Days",
    "gridAlpha": 0,
    "position": "right",
    "autoGridCount": false
  }],
  "graphs": [{
    "id": "g3",
    "valueAxis": "v1",
    "lineColor": "#e6ecf5",
    "fillColors": "#e6ecf5",
    "fillAlphas": 1,
    "type": "column",
    "title": "Actual Sales",
    "valueField": "sales2",
    "clustered": false,
    "columnWidth": 0.5,
    "legendValueText": "$[[value]]M",
    "balloonText": "[[title]]<br /><b style='font-size: 130%'>$[[value]]M</b>"
  }, {
    "id": "g4",
    "valueAxis": "v1",
    "lineColor": "#4f5163",
    "fillColors": "#4f5163",
    "fillAlphas": 1,
    "type": "column",
    "title": "Target Sales",
    "valueField": "sales1",
    "clustered": false,
    "columnWidth": 0.3,
    "legendValueText": "$[[value]]M",
    "balloonText": "[[title]]<br /><b style='font-size: 130%'>$[[value]]M</b>"
  }, {
    "id": "g1",
    "valueAxis": "v2",
    "bullet": "round",
    "bulletBorderAlpha": 1,
    "bulletColor": "#FFFFFF",
    "bulletSize": 5,
    "hideBulletsCount": 50,
    "lineThickness": 2,
    "lineColor": "#1abc9c",
    "type": "smoothedLine",
    "title": "Market Days",
    "useLineColorForBulletBorder": true,
    "valueField": "market1",
    "balloonText": "[[title]]<br /><b style='font-size: 130%'>[[value]]</b>"
  }, {
    "id": "g2",
    "valueAxis": "v2",
    "bullet": "round",
    "bulletBorderAlpha": 1,
    "bulletColor": "#FFFFFF",
    "bulletSize": 5,
    "hideBulletsCount": 50,
    "lineThickness": 2,
    "lineColor": "#1a73e9",
    "type": "smoothedLine",
    "dashLength": 5,
    "title": "Market Days ALL",
    "useLineColorForBulletBorder": true,
    "valueField": "market2",
    "balloonText": "[[title]]<br /><b style='font-size: 130%'>[[value]]</b>"
  }],
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


// Today Volume 

var chart = AmCharts.makeChart( "today-volume", {
  "type": "pie",
  "theme": "light",
  "legend":{
    "position":"bottom",
    "autoMargins":true,
    "align": "center",
    "labelText": "[[title]]  ",
    "valueText": " $[[value]]"
  },
  "colors" : ["#1a73e9","#acb0c3"],
  "dataProvider": [ {
    "title": "Total Change",
    "value": 915.83
  }, {
    "title": "Today High ",
    "value": 9394.07
  } ],
  "labelText": "",
  "labelRadius": 5,
  "balloonText": "[[title]]: $[[value]]",
  "titleField": "title",
  "valueField": "value",
  "bullet": "round"
} );


//  Trades Per Exchange
  
var chart = AmCharts.makeChart("traders-per-exchange-chart", {
  "type": "pie",
  "startDuration": 0,
   "theme": "light",
   "colors": [ "#00b1f4", "#acb0c3", "#4f5163", "#bae7ff", "#1a73e9", "#c2d5ff", "#3232b7" ],
  "addClassNames": true,
  "legend":{
    "position":"left",
    "marginLeft":50,
    "autoMargins":false,
    "align": "center"
  },
  "innerRadius": "65%",
  "defs": {
    "filter": [{
      "id": "shadow",
      "width": "200%",
      "height": "200%",
      "feOffset": {
        "result": "offOut",
        "in": "SourceAlpha",
        "dx": 0,
        "dy": 0
      },
      "feGaussianBlur": {
        "result": "blurOut",
        "in": "offOut",
        "stdDeviation": 5
      },
      "feBlend": {
        "in": "SourceGraphic",
        "in2": "blurOut",
        "mode": "normal"
      }
    }]
  },
  "dataProvider": [{
    "bitCurrency": "Poloniex",
    "trades": 10000
  }, {
    "bitCurrency": "Bitpanda",
    "trades": 23000
  }, {
    "bitCurrency": "Bitstamp",
    "trades": 5000
  }, {
    "bitCurrency": "Bitfinex",
    "trades": 15000
  }, {
    "bitCurrency": "Manual Import",
    "trades": 17000
  }, {
    "bitCurrency": "Bittrex",
    "trades": 12000
  }, {
    "bitCurrency": "Kraken",
    "trades": 26000
  }],
  "valueField": "trades",
  "titleField": "bitCurrency",
  "responsive": {
      "enabled": true,
      "rules": [
        // at 767px to below
        {
          "maxWidth": 767,
          "overrides": {
            "legend":{
              "position":"bottom",
              "marginLeft":0,
            }
          }
        }
      ]
    }
});


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
    "lineColor": "#c2d5ff",
    "fillColors": "#c2d5ff",
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
    "lineColor": "#1a73e9",
    "fillColors": "#1a73e9",
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
      "bulletColor": "#1a73e9",
      "lineColor": "#1a73e9",
    } ],
    "categoryField": "productsName"
} );


var chart = AmCharts.makeChart( "visitor-engagement-chart", {
  "type": "pie",
  "theme": "light",
  "dataProvider": [ {
    "title": "Electronic",
    "value": 4852,
    "color": "#00b1f4"
  }, {
    "title": "News & Media",
    "value": 3899,
    "color": "#1a73e9"
  }, {
    "title": "Software",
    "value": 2899,
    "color": "#4f5163"
  }, {
    "title": "Home Appliances",
    "value": 8590,
    "color": "#3232b7"
  } ],
  "titleField": "title",
  "valueField": "value",
  "colorField": "color",
  "labelRadius": 5,
  "radius": "42%",
  "innerRadius": "60%",
  "labelText": "",
} );


/**
 * This example uses pulsating circles CSS by Kevin Urrutia
 * http://kevinurrutia.tumblr.com/post/16411271583/creating-a-css3-pulsating-circle
 */

var map = AmCharts.makeChart( "mapdiv1", {
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


// Bitcoin Chart

var chartData = generateChartData2();
var chart = AmCharts.makeChart("bitcoin-chart", {
    "type": "serial",
    "theme": "light",
    "marginRight": 80,
    "autoMarginOffset": 20,
    "marginTop": 7,
    "dataProvider": chartData,
    "valueAxes": [{
        "axisAlpha": 0.2,
        "dashLength": 1,
        "position": "left"
    }],
    "mouseWheelZoomEnabled": true,
    "graphs": [{
        "id": "g1",
        "balloonText": "[[value]]",
        "bullet": "round",
        "bulletBorderAlpha": 1,
        "bulletColor": "#FFFFFF",
        "lineColor": "#3232b7",
        "hideBulletsCount": 50,
        "title": "red line",
        "valueField": "visits",
        "useLineColorForBulletBorder": true,
        "balloon":{
            "drop":true
        }
    }],
    "chartCursor": {
       "limitToGraph":"g1"
    },
    "categoryField": "date",
    "categoryAxis": {
        "parseDates": true,
        "axisColor": "#DADADA",
        "dashLength": 1,
        "minorGridEnabled": true
    }
});

chart.addListener("rendered", zoomChart);
zoomChart();

// this method is called when chart is first inited as we listen for "rendered" event
function zoomChart() {
    // different zoom methods can be used - zoomToIndexes, zoomToDates, zoomToCategoryValues
    chart.zoomToIndexes(chartData.length - 40, chartData.length - 1);
}

// generate some random data, quite different range
function generateChartData2() {
    var chartData = [];
    var firstDate = new Date();
    firstDate.setDate(firstDate.getDate() - 5);
    var visits = 1200;
    for (var i = 0; i < 1000; i++) {
        // we create date objects here. In your data, you can have date strings
        // and then set format of your dates using chart.dataDateFormat property,
        // however when possible, use date objects, as this will speed up chart rendering.
        var newDate = new Date(firstDate);
        newDate.setDate(newDate.getDate() + i);
        
        visits += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);

        chartData.push({
            date: newDate,
            visits: visits
        });
    }
    return chartData;
}
