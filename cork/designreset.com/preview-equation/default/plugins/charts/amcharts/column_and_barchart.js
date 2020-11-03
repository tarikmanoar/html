
$(document).ready( function() {

    AmCharts.makeChart( "simplecolumnchartdiv", {
        "type": "serial",
        "theme": "light",
        "dataProvider": [ {
          "country": "USA",
          "visits": 2025,
        }, {
          "country": "China",
          "visits": 1882,
        }, {
          "country": "Japan",
          "visits": 1809,
        }, {
          "country": "Germany",
          "visits": 1322,
        }, {
          "country": "UK",
          "visits": 1122,
        }, {
          "country": "France",
          "visits": 1114,
        }, {
          "country": "India",
          "visits": 984,
        }, {
          "country": "Spain",
          "visits": 711,
        }, {
          "country": "Netherlands",
          "visits": 665,
        }, {
          "country": "Russia",
          "visits": 580,
        }, {
          "country": "South Korea",
          "visits": 443,
        }, {
          "country": "Canada",
          "visits": 441,
        }, {
          "country": "Brazil",
          "visits": 395,
        } ],
        "valueAxes": [ {
          "gridColor": "#FFFFFF",
          "gridAlpha": 0.2,
          "dashLength": 0
        } ],
        "gridAboveGraphs": true,
        "startDuration": 1,
        "graphs": [ {
          "balloonText": "[[category]]: <b>[[value]]</b>",
          "fillAlphas": 0.7,
          "lineAlpha": 0.2,
          "type": "column",
          "valueField": "visits",
          "fillColors":"#5247bd",
          "lineColor":"#5247bd"
        } ],
        "chartCursor": {
          "categoryBalloonEnabled": false,
          "cursorAlpha": 0,
          "zoomable": false
        },
        "categoryField": "country",
        "categoryAxis": {
          "gridPosition": "start",
          "gridAlpha": 0,
          "tickPosition": "start",
          "tickLength": 20
        },
        "export": {
          "enabled": true
        }
    });

    var chart = AmCharts.makeChart( "columnlinemixchartdiv", {
        "type": "serial",
        "addClassNames": true,
        "theme": "light",
        "autoMargins": false,
        "marginLeft": 30,
        "marginRight": 8,
        "marginTop": 10,
        "marginBottom": 26,
        "balloon": {
          "adjustBorderColor": false,
          "horizontalPadding": 10,
          "verticalPadding": 8,
          "color": "#ffffff"
        },

        "dataProvider": [ {
          "year": 2009,
          "income": 23.5,
          "expenses": 21.1
        }, {
          "year": 2010,
          "income": 26.2,
          "expenses": 30.5
        }, {
          "year": 2011,
          "income": 30.1,
          "expenses": 34.9
        }, {
          "year": 2012,
          "income": 29.5,
          "expenses": 31.1
        }, {
          "year": 2013,
          "income": 30.6,
          "expenses": 28.2,
          "dashLengthLine": 5
        }, {
          "year": 2014,
          "income": 34.1,
          "expenses": 32.9,
          "dashLengthColumn": 5,
          "alpha": 0.2,
          "additional": "(projection)"
        } ],
        "valueAxes": [ {
          "axisAlpha": 0,
          "position": "left"
        } ],
        "startDuration": 1,
        "graphs": [ {
          "alphaField": "alpha",
          "balloonText": "<span style='font-size:12px;'>[[title]] in [[category]]:<br><span style='font-size:20px;'>[[value]]</span> [[additional]]</span>",
          "fillAlphas": 1,
          "title": "Income",
          "type": "column",
          "valueField": "income",
          "dashLengthField": "dashLengthColumn",
          "fillColors":"#07e0c4",
          "lineColor":"#07e0c4"

        }, {
          "id": "graph2",
          "balloonText": "<span style='font-size:12px;'>[[title]] in [[category]]:<br><span style='font-size:20px;'>[[value]]</span> [[additional]]</span>",
          "bullet": "round",
          "lineThickness": 3,
          "bulletSize": 7,
          "bulletBorderAlpha": 1,
          "bulletColor": "#FFFFFF",
          "useLineColorForBulletBorder": true,
          "bulletBorderThickness": 3,
          "fillAlphas": 0,
          "lineAlpha": 1,
          "lineColor": '#ee3d50',
          "title": "Expenses",
          "valueField": "expenses",
          "dashLengthField": "dashLengthLine"
        } ],
        "categoryField": "year",
        "categoryAxis": {
          "gridPosition": "start",
          "axisAlpha": 0,
          "tickLength": 0
        },
        "export": {
          "enabled": true
        }
    } );

    var chart = AmCharts.makeChart("clusteredbarchartdiv", {
      "type": "serial",
            "theme": "light",
      "categoryField": "year",
      "rotate": true,
      "startDuration": 1,
      "categoryAxis": {
                "gridPosition": "start",
                "position": "left"
      },
      "trendLines": [],
      "graphs": [
            {
            "balloonText": "Income:[[value]]",
            "fillAlphas": 1,
            "id": "AmGraph-1",
            "lineAlpha": 0.2,
            "title": "Income",
            "type": "column",
            "valueField": "income",
            "fillColors":"#3562f5",
            "lineColor":"#3862f5"

        },
        {
            "balloonText": "Expenses:[[value]]",
            "fillAlphas": 1,
            "id": "AmGraph-2",
            "lineAlpha": 0.2,
            "title": "Expenses",
            "type": "column",
            "valueField": "expenses",
            "fillColors":"#f8538d",
            "lineColor":"#f8538d"

        }
  ],
  "guides": [],
  "valueAxes": [
        {
            "id": "ValueAxis-1",
            "position": "top",
            "axisAlpha": 0
        }
  ],
  "allLabels": [],
  "balloon": {},
  "titles": [],
  "dataProvider": [
        {
            "year": 2005,
            "income": 23.5,
            "expenses": 18.1
        },
        {
            "year": 2006,
            "income": 26.2,
            "expenses": 22.8
        },
        {
            "year": 2007,
            "income": 30.1,
            "expenses": 23.9
        },
        {
            "year": 2008,
            "income": 29.5,
            "expenses": 25.1
        },
        {
            "year": 2009,
            "income": 24.6,
            "expenses": 25
        }
  ],
    "export": {
      "enabled": true
     }

    });

    var chart = AmCharts.makeChart("cylinderchartdiv", {
        "theme": "light",
        "type": "serial",
        "startDuration": 2,
        "dataProvider": [{
            "country": "USA",
            "visits": 4025,
            "color": "#3862f5"
        }, {
            "country": "China",
            "visits": 1882,
            "color": "#f8538d"
        }, {
            "country": "Japan",
            "visits": 1809,
            "color": "#24ccda"
        }, {
            "country": "Germany",
            "visits": 1322,
            "color": "#6156ce"
        }, {
            "country": "UK",
            "visits": 1122,
            "color": "#ffbb44"
        }, {
            "country": "France",
            "visits": 1114,
            "color": "#18d17f"
        }, {
            "country": "India",
            "visits": 984,
            "color": "#816cfd"
        }, {
            "country": "Spain",
            "visits": 711,
            "color": "#e95f2b"
        }, {
            "country": "Netherlands",
            "visits": 665,
            "color": "#3b3f5c"
        }, {
            "country": "Russia",
            "visits": 580,
            "color": "#3232b7"
        }, {
            "country": "South Korea",
            "visits": 443,
            "color": "#e91e63"
        }, {
            "country": "Canada",
            "visits": 441,
            "color": "#08ddc1"
        }, {
            "country": "Brazil",
            "visits": 395,
            "color": "#989ebf"
        }, {
            "country": "Italy",
            "visits": 386,
            "color": "#f58b22"
        }, {
            "country": "Taiwan",
            "visits": 338,
            "color": "#0081e6"
        }],
        "valueAxes": [{
            "position": "left",
            "axisAlpha":0,
            "gridAlpha":0
        }],
        "graphs": [{
            "balloonText": "[[category]]: <b>[[value]]</b>",
            "colorField": "color",
            "fillAlphas": 0.85,
            "lineAlpha": 0.1,
            "type": "column",
            "topRadius":1,
            "valueField": "visits"
        }],
        "depth3D": 40,
            "angle": 30,
        "chartCursor": {
            "categoryBalloonEnabled": false,
            "cursorAlpha": 0,
            "zoomable": false
        },
        "categoryField": "country",
        "categoryAxis": {
            "gridPosition": "start",
            "axisAlpha":0,
            "gridAlpha":0

        },
        "export": {
            "enabled": true
         }

    }, 0);

});