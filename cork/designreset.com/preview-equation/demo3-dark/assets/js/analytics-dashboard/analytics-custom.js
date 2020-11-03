// weather script

var icons = new Skycons({"color": "#1a73e9"}),
    list  = ["clear-day"],
    i;
 for(i = list.length; i--; )
    icons.set(list[i], list[i]);
    icons.play();

var icons = new Skycons({"color": "#1a73e9"}),
    list  = ["clear-night", "partly-cloudy-day","partly-cloudy-night", "cloudy", "rain", "sleet", "snow", "wind","fog"],
    i;
 for(i = list.length; i--; )
    icons.set(list[i], list[i]);
    icons.play();


// Calender script

$('.calendar').pignoseCalendar();


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

/* Line Chart #1 */

AmCharts.makeChart( "linec1", {
  "type": "serial",
  "addClassNames": true,
  "dataProvider": [ {
    "day": 1,
    "value": 122
  }, {
    "day": 2,
    "value": 124
  }, {
    "day": 3,
    "value": 118
  }, {
    "day": 4,
    "value": 122
  }, {
    "day": 5,
    "value": 121
  }, {
    "day": 6,
    "value": 123
  }, {
    "day": 7,
    "value": 127
  }, {
    "day": 8,
    "value": 113
  }, {
    "day": 9,
    "value": 120,
    "bullet": "round"
  }, {
    "day": 10,
    "value": 125,
  }, {
    "day": 11,
    "value": 125,
  } ],
  "categoryField": "day",
  "autoMargins": false,
  "marginLeft": 0,
  "marginRight": 5,
  "marginTop": 0,
  "marginBottom": 0,
  "graphs": [ {
    "valueField": "value",
    "bulletField": "bullet",
    "lineThickness": 2,
    "showBalloon": false,
    "lineColor": "#1a73e9"
  } ],
  "valueAxes": [ {
    "gridAlpha": 0,
    "axisAlpha": 0
  } ],
  "defs": {
    "filter": {
      "id": "dropshadowline1",
      "x": "-5%",
      "y": "-5%",
      "width": "120%",
      "height": "120%",
      "feOffset": {
        "result": "offOut",
        "in": "SourceGraphic",
        "dx": "2",
        "dy": "2"
      },
      "feColorMatrix": {
        "result": "matrix",
        "values": "0.17 0 0 0 0 0 0.2 0 0 0 0 0 0.77 0 0 0 0 0 1 0"
      },
      "feGaussianBlur": {
        "result": "blurOut",
        "in": "offOut",
        "stdDeviation": "3"
      },
      "feBlend": {
        "in": "SourceGraphic",
        "in2": "blurOut",
        "mode": "normal"
      }
    }
  },

  "categoryAxis": {
    "gridAlpha": 0,
    "axisAlpha": 0,
    "startOnAxis": true
  }
} );


/* Line Chart #2  */

AmCharts.makeChart( "linec2", {
  "type": "serial",
  "addClassNames": true,
  "dataProvider": [ {
    "day": 1,
    "value": 120
  }, {
    "day": 2,
    "value": 124
  }, {
    "day": 3,
    "value": 125,
  }, {
    "day": 4,
    "value": 122
  }, {
    "day": 5,
    "value": 121
  }, {
    "day": 6,
    "value": 123
  }, {
    "day": 7,
    "value": 118
  }, {
    "day": 8,
    "value": 127
  }, {
    "day": 9,
    "value": 122,
    "bullet": "round"
  }, {
    "day": 10,
    "value": 113
  }, {
    "day": 11,
    "value": 113
  } ],
  "categoryField": "day",
  "autoMargins": false,
  "marginLeft": 0,
  "marginRight": 5,
  "marginTop": 0,
  "marginBottom": 0,
  "graphs": [ {
    "valueField": "value",
    "bulletField": "bullet",
    "lineThickness": 2,
    "showBalloon": false,
    "lineColor": "#00b1f4"
  } ],
  "valueAxes": [ {
    "gridAlpha": 0,
    "axisAlpha": 0
  } ],
  "defs": {
    "filter": {
      "id": "dropshadowline2",
      "x": "-5%",
      "y": "-5%",
      "width": "120%",
      "height": "120%",
      "feOffset": {
        "result": "offOut",
        "in": "SourceGraphic",
        "dx": "2",
        "dy": "2"
      },
      "feColorMatrix": {
        "result": "matrix",
        "values": "0.17 0 0 0 0 0 0.2 0 0 0 0 0 0.77 0 0 0 0 0 1 0"
      },
      "feGaussianBlur": {
        "result": "blurOut",
        "in": "offOut",
        "stdDeviation": "3"
      },
      "feBlend": {
        "in": "SourceGraphic",
        "in2": "blurOut",
        "mode": "normal"
      }
    }
  },
  "categoryAxis": {
    "gridAlpha": 0,
    "axisAlpha": 0,
    "startOnAxis": true
  }
} );

/* Line Chart #3  */

AmCharts.makeChart( "linec3", {
  "type": "serial",
  "addClassNames": true,
  "dataProvider": [ {
    "day": 1,
    "value": 124
  }, {
    "day": 2,
    "value": 120
  }, {
    "day": 3,
    "value": 122
  }, {
    "day": 4,
    "value": 118
  }, {
    "day": 5,
    "value": 121
  }, {
    "day": 6,
    "value": 123
  }, {
    "day": 7,
    "value": 122
  }, {
    "day": 8,
    "value": 113
  }, {
    "day": 9,
    "value": 127,
    "bullet": "round"
  }, {
    "day": 10,
    "value": 125
  }, {
    "day": 11,
    "value": 125
  } ],
  "categoryField": "day",
  "autoMargins": false,
  "marginLeft": 0,
  "marginRight": 5,
  "marginTop": 0,
  "marginBottom": 0,
  "graphs": [ {
    "valueField": "value",
    "bulletField": "bullet",
    "lineThickness": 2,
    "showBalloon": false,
    "lineColor": "#1d73e9"
  } ],
  "valueAxes": [ {
    "gridAlpha": 0,
    "axisAlpha": 0
  } ],
  "defs": {
    "filter": {
      "id": "dropshadowline3",
      "x": "-5%",
      "y": "-5%",
      "width": "120%",
      "height": "120%",
      "feOffset": {
        "result": "offOut",
        "in": "SourceGraphic",
        "dx": "2",
        "dy": "2"
      },
      "feColorMatrix": {
        "result": "matrix",
        "values": "0.17 0 0 0 0 0 0.2 0 0 0 0 0 0.77 0 0 0 0 0 1 0"
      },
      "feGaussianBlur": {
        "result": "blurOut",
        "in": "offOut",
        "stdDeviation": "3"
      },
      "feBlend": {
        "in": "SourceGraphic",
        "in2": "blurOut",
        "mode": "normal"
      }
    }
  },
  "categoryAxis": {
    "gridAlpha": 0,
    "axisAlpha": 0,
    "startOnAxis": true
  }
} );

/* Line Chart #4 */

AmCharts.makeChart( "linec4", {
  "type": "serial",
  "addClassNames": true,
  "dataProvider": [ {
    "day": 1,
    "value": 122
  }, {
    "day": 2,
    "value": 120
  }, {
    "day": 3,
    "value": 119
  }, {
    "day": 4,
    "value": 125
  }, {
    "day": 5,
    "value": 113
  }, {
    "day": 6,
    "value": 118
  }, {
    "day": 7,
    "value": 120
  }, {
    "day": 8,
    "value": 118
  }, {
    "day": 9,
    "value": 123,
    "bullet": "round"
  }, {
    "day": 10,
    "value": 120
  }, {
    "day": 10,
    "value": 118
  } ],
  "categoryField": "day",
  "autoMargins": false,
  "marginLeft": 0,
  "marginRight": 5,
  "marginTop": 0,
  "marginBottom": 0,
  "graphs": [ {
    "valueField": "value",
    "bulletField": "bullet",
    "lineThickness": 2,
    "showBalloon": false,
    "lineColor": "#00b1f4"
  } ],
  "valueAxes": [ {
    "gridAlpha": 0,
    "axisAlpha": 0
  } ],
  "defs": {
    "filter": {
      "id": "dropshadowline4",
      "x": "-5%",
      "y": "-5%",
      "width": "120%",
      "height": "120%",
      "feOffset": {
        "result": "offOut",
        "in": "SourceGraphic",
        "dx": "2",
        "dy": "2"
      },
      "feColorMatrix": {
        "result": "matrix",
        "values": "0.17 0 0 0 0 0 0.2 0 0 0 0 0 0.77 0 0 0 0 0 1 0"
      },
      "feGaussianBlur": {
        "result": "blurOut",
        "in": "offOut",
        "stdDeviation": "3"
      },
      "feBlend": {
        "in": "SourceGraphic",
        "in2": "blurOut",
        "mode": "normal"
      }
    }
  },
  "categoryAxis": {
    "gridAlpha": 0,
    "axisAlpha": 0,
    "startOnAxis": true
  }
} );

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