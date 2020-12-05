(function() {
    var chart = AmCharts.makeChart( "polarchartdiv", {
    "type": "radar",
    "theme": "light",
    // "colors" : ["#1AD271","#1F3892","#4285F4","#1AD271","#1F3892","#4285F4","#1AD271","#1F3892","#4285F4"],
    "dataProvider": [ {
      "direction": "N",
      "value": 8
    }, {
      "direction": "NE",
      "value": 9
    }, {
      "direction": "E",
      "value": 4.5
    }, {
      "direction": "SE",
      "value": 3.5
    }, {
      "direction": "S",
      "value": 9.2
    }, {
      "direction": "SW",
      "value": 8.4
    }, {
      "direction": "W",
      "value": 11.1
    }, {
      "direction": "NW",
      "value": 10
    } ],
    "valueAxes": [ {
      "gridType": "circles",
      "minimum": 0,
      "autoGridCount": false,
      "axisAlpha": 0.2,
      "fillAlpha": 0.05,
      "fillColor": "#FFFFFF",
      "gridAlpha": 0.08,
      "guides": [ {
        "angle": 225,
        "fillAlpha": 0.8,
        "fillColor": "#6156ce",
        "tickLength": 0,
        "toAngle": 315,
        "toValue": 14,
        "value": 0,
        "lineAlpha": 0,

      }, {
        "angle": 45,
        "fillAlpha": 1,
        "fillColor": "#ee3d50",
        "tickLength": 0,
        "toAngle": 135,
        "toValue": 14,
        "value": 0,
        "lineAlpha": 0,
      } ],
      "position": "left"
    } ],
    "startDuration": 1,
    "graphs": [ {
      "balloonText": "[[category]]: [[value]] m/s",
      "bullet": "round",
      "fillAlphas": 0.3,
      "bulletColor": "#ffbb44",
      "lineColor": "#ffbb44",
      "valueField": "value",
    } ],
    "categoryField": "direction",
    "export": {
      "enabled": true
    }
  } );
})();

(function() {
    var chart = AmCharts.makeChart( "radarchartdiv", {
    "type": "radar",
    "theme": "light",
    "dataProvider": [ {
      "country": "Czech Republic",
      "litres": 156.9
    }, {
      "country": "Ireland",
      "litres": 131.1
    }, {
      "country": "Germany",
      "litres": 115.8
    }, {
      "country": "Australia",
      "litres": 109.9
    }, {
      "country": "Austria",
      "litres": 108.3
    }, {
      "country": "UK",
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
      "bulletColor": "#00b1f4",
      "lineColor": "#3232b7",
    } ],
    "categoryField": "country",
    "export": {
      "enabled": true
    }
  } );
})();

(function() {
    var chart = AmCharts.makeChart("polarscatterchartdiv", {
    "type": "radar",
    "theme": "light",
    "dataProvider": [],
    "valueAxes": [{
      "gridType": "circles",
      "minimum": 0
    }],
    "startDuration": 1,
    "polarScatter": {
      "minimum": 0,
      "maximum": 359,
      "step": 1
    }, 
    "legend": {
    "position": "right",
  },
    "graphs": [{
      "title": "Trial #1",
      "balloonText": "[[category]]: [[value]] m/s",
      "bullet": "round",
      "bulletColor": "#3862f5",
      "lineColor": "#3862f5",
      "lineAlpha": 0,
      "series": [[83,5.1],[44,5.8],[76,9],[2,1.4],[100,8.3],[96,1.7],[68,3.9],[0,3],[100,4.1],[16,5.5],[71,6.8],[100,7.9],[9,6.8],[85,8.3],[51,6.7],[95,3.8],[95,4.4],[1,0.2],[107,9.7],[50,4.2],[42,9.2],[35,8],[44,6],[64,0.7],[53,3.3],[92,4.1],[43,7.3],[15,7.5],[43,4.3],[90,9.9]]
    }, {
      "title": "Trial #2",
      "balloonText": "[[category]]: [[value]] m/s",
      "bullet": "round",
      "bulletColor": "#ffbb44",
      "lineColor": "#ffbb44",
      "lineAlpha": 0,
      "series": [[178,1.3],[129,3.4],[99,2.4],[80,9.9],[118,9.4],[103,8.7],[91,4.2],[151,1.2],[168,5.2],[168,1.6],[152,1.2],[149,3.4],[182,8.8],[106,6.7],[111,9.2],[130,6.3],[147,2.9],[81,8.1],[138,7.7],[107,3.9],[124,0.7],[130,2.6],[86,9.2],[169,7.5],[122,9.9],[100,3.8],[172,4.1],[140,7.3],[161,2.3],[141,0.9]]
    }, {
      "title": "Trial #3",
      "balloonText": "[[category]]: [[value]] m/s",
      "bullet": "round",
      "bulletColor": "#f8538d",
      "lineColor": "#f8538d",
      "lineAlpha": 0,
      "series": [[419,4.9],[417,5.5],[434,0.1],[344,2.5],[279,7.5],[307,8.4],[279,9],[220,8.4],[204,8],[446,0.9],[397,8.9],[351,1.7],[393,0.7],[254,1.8],[260,0.4],[300,3.5],[199,2.7],[182,5.8],[173,2],[201,9.7],[288,1.2],[333,7.4],[308,1.9],[330,8],[408,1.7],[274,0.8],[296,3.1],[279,4.3],[379,5.6],[175,6.8]]
    }],
    "responsive": {
      "enabled": true,
      "rules": [
        // at 767px to below
        {
          "maxWidth": 600,
          "overrides": {
            "legend":{
              "position":"bottom",
            }
          }
        }

      ]
    }


  });
})();

(function() {
    var chart = AmCharts.makeChart( "gaugechartdiv", {
    "theme": "light",
    "type": "gauge",
    "axes": [ {
      "axisColor": "#07e0c4",
      "axisThickness": 3,
      "endValue": 240,
      "gridInside": false,
      "inside": false,
      "radius": "100%",
      "valueInterval": 20,
      "tickColor": "#07e0c4"
    }, {
      "axisColor": "#816cfd",
      "axisThickness": 3,
      "endValue": 160,
      "radius": "80%",
      "valueInterval": 20,
      "tickColor": "#816cfd"
    } ],
    "arrows": [ {
      "color": "#ff3743",
      "innerRadius": "20%",
      "nailRadius": 0,
      "radius": "85%"
    } ],
    "export": {
      "enabled": true
    }
  } );

  setInterval( randomValue, 2000 );

  // set random value
  function randomValue() {
    var value = Math.round( Math.random() * 240 );
    chart.arrows[ 0 ].setValue( value );
  }
})();