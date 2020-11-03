function triggerProgressbar( $option ) {
    
    var $triggerOption = $option;    

    if ($triggerOption === "modernBrowser") {
        var bar = new ProgressBar.Circle(".income", {
          color: '#6156ce',
          // This has to be the same size as the maximum width to
          // prevent clipping
          strokeWidth: 5,
          trailWidth: 1,
          easing: 'easeInOut',
          duration: 1400,
          text: {
            autoStyleContainer: false
          },
          from: { color: '#6156ce', width: 5 },
          to: { color: '#6156ce', width: 5 },
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
        bar.text.style.fontSize = '1.1rem';

        bar.animate(0.9);  // Number from 0.0 to 1.0

        var bar = new ProgressBar.Circle(".cogs", {
          color: '#00b1f4',
          // This has to be the same size as the maximum width to
          // prevent clipping
          strokeWidth: 5,
          trailWidth: 1,
          easing: 'easeInOut',
          duration: 1400,
          text: {
            autoStyleContainer: false
          },
          from: { color: '#00b1f4', width: 5 },
          to: { color: '#00b1f4', width: 5 },
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
        bar.text.style.fontSize = '1.1rem';

        bar.animate(0.85);  // Number from 0.0 to 1.0

        var bar = new ProgressBar.Circle(".net-profit", {
          color: '#f8538d',
          // This has to be the same size as the maximum width to
          // prevent clipping
          strokeWidth: 5,
          trailWidth: 1,
          easing: 'easeInOut',
          duration: 1400,
          text: {
            autoStyleContainer: false
          },
          from: { color: '#f8538d', width: 5 },
          to: { color: '#f8538d', width: 5 },
 
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
        bar.text.style.fontSize = '1.1rem';

        bar.animate(0.95);  // Number from 0.0 to 1.0

        var bar = new ProgressBar.Circle(".expenses", {
          color: '#ffbb44',
          // This has to be the same size as the maximum width to
          // prevent clipping
          strokeWidth: 5,
          trailWidth: 1,
          easing: 'easeInOut',
          duration: 1400,
          text: {
            autoStyleContainer: false
          },
          from: { color: '#ffbb44', width: 5 },
          to: { color: '#ffbb44', width: 5 },
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
        bar.text.style.fontSize = '1.1rem';

        bar.animate(0.75);  // Number from 0.0 to 1.0

    } else if ( $triggerOption === "ie" ) {
        
        var bar = new ProgressBar.Circle(".income", {
          color: '#5247bd',
          // This has to be the same size as the maximum width to
          // prevent clipping
          strokeWidth: 5,
          trailWidth: 1,
          easing: 'easeInOut',
          duration: 1400,
          text: {
            autoStyleContainer: false
          },
          from: { color: '#5247bd', width: 5 },
          to: { color: '#5247bd', width: 5 },
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
        bar.text.style.fontSize = '1.1rem';

        bar.set(0.9);  // Number from 0.0 to 1.0

        var bar = new ProgressBar.Circle(".cogs", {
          color: '#38a9ff',
          // This has to be the same size as the maximum width to
          // prevent clipping
          strokeWidth: 5,
          trailWidth: 1,
          easing: 'easeInOut',
          duration: 1400,
          text: {
            autoStyleContainer: false
          },
          from: { color: '#38a9ff', width: 5 },
          to: { color: '#38a9ff', width: 5 },
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
        bar.text.style.fontSize = '1.1rem';

        bar.set(0.85);  // Number from 0.0 to 1.0


        var bar = new ProgressBar.Circle(".net-profit", {
          color: '#f8538d',
          // This has to be the same size as the maximum width to
          // prevent clipping
          strokeWidth: 5,
          trailWidth: 1,
          easing: 'easeInOut',
          duration: 1400,
          text: {
            autoStyleContainer: false
          },
          from: { color: '#f8538d', width: 5 },
          to: { color: '#f8538d', width: 5 },
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
        bar.text.style.fontSize = '1.1rem';

        bar.set(0.95);  // Number from 0.0 to 1.0

        var bar = new ProgressBar.Circle(".expenses", {
          color: '#07dabf',
          // This has to be the same size as the maximum width to
          // prevent clipping
          strokeWidth: 5,
          trailWidth: 1,
          easing: 'easeInOut',
          duration: 1400,
          text: {
            autoStyleContainer: false
          },
          from: { color: '#07dabf', width: 5 },
          to: { color: '#07dabf', width: 5 },
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
        bar.text.style.fontSize = '1.1rem';

        bar.set(0.75);  // Number from 0.0 to 1.0
    }
}

function msieversion() {

    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))
    {
        triggerProgressbar("ie");
    }
    else  {
        triggerProgressbar("modernBrowser");
    }

    return false;
}
msieversion();

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

/* Sales */

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


/* Order */

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

// Profit


var bar = new ProgressBar.Circle("#t-profit-chart", {
  color: '#6156ce',
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
  from: { color: '#6156ce', width: 6 },
  to: { color: '#6156ce', width: 6 },
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
  color: '#6156ce',
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
  from: { color: '#6156ce', width: 6 },
  to: { color: '#6156ce', width: 6 },
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
    "lineColor": "#f8538d"
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
    "lineColor": "#00b1f4"
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
    "lineColor": "#e95f2b"
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


/**
 * Get a random integer between `min` and `max`.
 * 
 * @param {number} min - min number
 * @param {number} max - max number
 * @return {number} a random integer
 */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function traffic() {
    var $jsSelector = $(".js-r-t-traffic");

    $jsSelector.fadeOut(1000, function() {
        $jsSelector.text(getRandomInt(95, 105))
        $jsSelector.fadeIn(1000);
    });
}

traffic();

setInterval(traffic, 4500);


/* Bounce rate */

AmCharts.makeChart( "bounce-rate-chart", {
  "type": "pie",
  "dataProvider": [ {
    "x": 1,
    "value": 46,
    "bText": 46+'%',
  }, {
    "x": 2,
    "value": 71
  } ],
  "labelField": "x",
  "valueField": "value",
  "labelsEnabled": false,
  "balloonText": "[[bText]]",
  "valueText": '',
  "radius": 40,
  "outlineThickness": 1,
  "colors": [ "#e9ecef", "#00b1f4" ],
  "startDuration": 0
} );


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

$("#balance-btc").sparkline([5,6,5,7,9,7,3,3,9,4,6,4], {
  type: 'line',
  width: '100',
  height: '30',
  lineColor: '#fff',
  lineWidth: 1,
  spotRadius: 3.5,
  fillColor: 'transparent',
  spotColor: '#1ad271',
  spotRadius: 0,
  minSpotColor: '#fff',
  maxSpotColor: '#fff'
});

$("#received-btc").sparkline([2,6,3,9,5,9,3,6,4,4,6,7], {
  type: 'line',
  width: '100',
  height: '30',
  lineColor: '#fff',
  lineWidth: 1,
  spotRadius: 3.5,
  fillColor: 'transparent',
  spotColor: '#1ad271',
  spotRadius: 0,
  minSpotColor: '#fff',
  maxSpotColor: '#fff'
});

$("#sent-btc").sparkline([5,6,6,9,5,9,3,4,4,3,6,4], {
  type: 'line',
  width: '100',
  height: '30',
  lineColor: '#fff',
  lineWidth: 1,
  spotRadius: 3.5,
  fillColor: 'transparent',
  spotColor: '#1ad271',
  spotRadius: 0,
  minSpotColor: '#fff',
  maxSpotColor: '#fff'
});

$("#transaction-btc").sparkline([5,6,7,9,9,5,3,3,4,4,6,7], {
  type: 'line',
  width: '100',
  height: '30',
  lineColor: '#fff',
  lineWidth: 1,
  spotRadius: 3.5,
  fillColor: 'transparent',
  spotColor: '#1ad271',
  spotRadius: 0,
  minSpotColor: '#fff',
  maxSpotColor: '#fff'
});

$(".bit-chart-volume").sparkline([5,6,8,9,3,4,3,4,5,6,7,2,3,4,4,4,3], {
    type: 'bar',
    height: '50',
    barWidth: 1,
    barSpacing: 4,
    zeroAxis: false
});

$(".bit-chart-market-cap").sparkline([6,4,5,6,4,4,5,4,5,6,4,7,3,4,8,6,7], {
    type: 'bar',
    height: '50',
    barWidth: 1,
    barSpacing: 4,
    zeroAxis: false
});

$(".bit-chart-max-supply").sparkline([3,6,4,6,3,4,6,3,6,4,4,2,3,4,6,5,3], {
    type: 'bar',
    height: '50',
    barWidth: 1,
    barSpacing: 4,
    zeroAxis: false
});


function triggerOnBrowser(browser) {

  if (browser === 'ie') {

    var bar = new ProgressBar.Circle(".t-o-cogs", {
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
      bar.set(0.67); 

  } else if (browser === 'modernBrowser') {
      var bar = new ProgressBar.Circle(".t-o-cogs", {
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
      bar.animate(0.67);
  }
}

function msieversioncheck() {

    var usragent = window.navigator.userAgent;
    var msie = usragent.indexOf("MSIE");

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))
    {
        triggerOnBrowser("ie");
    }
    else  {
        triggerOnBrowser("modernBrowser");
    }

    return false;
}
msieversioncheck();

var d = new Date();
var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
$("#monthname").html(monthNames[d.getMonth()] + '' );
$("#day").html(d.getDate() + '&nbsp;');
var weekNames = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
$("#week").html(weekNames[d.getDay()] + ',');
function timer() {
  var d = new Date();
  var h = d.getHours(),
      mm = d.getMinutes(),
      ss = d.getSeconds(),
      // dd = 'AM',
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

$("#r-chart").sparkline([1,2,3,3,0,2,1,2,3,4,2,3], {
    type: 'bar',
    height: '130',
    barWidth: 14,
    barSpacing: 3,
    zeroAxis: false,
    barColor: '#24ccda'
});

$("#r-chart").sparkline([2,3,5,6,6,2,2,1,1,2,4,5], {
    type: 'line',
    fillColor: null,
    lineWidth: 1.4,
    spotRadius: 2.5,
    composite: true
});

$("#e-chart").sparkline([ [2, 1.1], [2, 1.3], [2.5, 1.5], [2.2, 1.2], [2.3, 1.4], [2.4, 1.3], [2.6, 1.2], [2.1, 1.4], [2, 1.3], [2, 1.2], [2.3, 1.3], [2.5, 1.5] ], {
    type: 'bar',
    height: '130',
    barWidth: 14,
    barSpacing: 4,
    zeroAxis: false,
    barColor: '#1abc9c',
    stackedBarColor: ['#1abc9c', '#e9ecef']
});

var bar = new ProgressBar.Circle("#daily", {
  color: '#1d1d1d',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 5,
  trailWidth: 3,
  trailColor: '#f3f3f3',
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#00d1c1', width: 5 },
  to: { color: '#00d1c1', width: 5 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value + '%');
    }

  }
});
bar.text.style.fontSize = '1rem';

bar.animate(0.56);  // Number from 0.0 to 1.0

var bar = new ProgressBar.Circle("#weekly", {
  color: '#1d1d1d',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 5,
  trailWidth: 3,
  trailColor: '#f3f3f3',
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#e95f2b', width: 5 },
  to: { color: '#e95f2b', width: 5 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value + '%');
    }

  }
});
bar.text.style.fontSize = '1rem';

bar.animate(0.6);  // Number from 0.0 to 1.0

var bar = new ProgressBar.Circle("#month", {
  color: '#1d1d1d',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 5,
  trailWidth: 3,
  trailColor: '#f3f3f3',
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#0081e6', width: 5 },
  to: { color: '#0081e6', width: 5 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value + '%');
    }

  }
});
bar.text.style.fontSize = '1rem';

bar.animate(0.77);  // Number from 0.0 to 1.0

$('.revenue li a, .expanditure li a, .r-p-summary li a').on('shown.bs.tab', function(event) {
  $("#ry-chart").sparkline([1,2,3,3,0,2,1,2,3,4,2,3], {
      type: 'bar',
      height: '130',
      barWidth: 14,
      barSpacing: 3,
      zeroAxis: false,
      barColor: '#816cfd'
  });
  $("#ry-chart").sparkline([2,3,5,6,6,2,2,1,1,2,4,5], {
      type: 'line',
      fillColor: null,
      lineWidth: 1.4,
      spotRadius: 2.5,
      composite: true
  });

  $("#ey-chart").sparkline([ [2, 1.1], [2, 1.3], [2.5, 1.5], [2.2, 1.2], [2.3, 1.4], [2.4, 1.3], [2.6, 1.2], [2.1, 1.4], [2, 1.3], [2, 1.2], [2.3, 1.3], [2.5, 1.5] ], {
      type: 'bar',
      height: '130',
      barWidth: 14,
      barSpacing: 4,
      zeroAxis: false,
      barColor: '#1abc9c',
      stackedBarColor: ['#00d1c1', '#e9ecef']
  });

})
