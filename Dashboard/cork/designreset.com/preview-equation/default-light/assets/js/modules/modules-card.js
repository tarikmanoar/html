/* Profile */

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