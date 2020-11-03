(function() {
    var chart = AmCharts.makeChart("valueaxischartdiv", {
        "type": "serial",
        "theme": "light",
        "legend": {
            "equalWidths": false,
            "useGraphSettings": true,
            "valueAlign": "left",
            "valueWidth": 120,
        },
        "dataProvider": [{
            "date": "2012-01-01",
            "distance": 227,
            "townName": "New York",
            "townName2": "New York",
            "townSize": 25,
            "latitude": 40.71,
            "duration": 408
        }, {
            "date": "2012-01-02",
            "distance": 371,
            "townName": "Washington",
            "townSize": 14,
            "latitude": 38.89,
            "duration": 482
        }, {
            "date": "2012-01-03",
            "distance": 433,
            "townName": "Wilmington",
            "townSize": 6,
            "latitude": 34.22,
            "duration": 562
        }, {
            "date": "2012-01-04",
            "distance": 345,
            "townName": "Jacksonville",
            "townSize": 7,
            "latitude": 30.35,
            "duration": 379
        }, {
            "date": "2012-01-05",
            "distance": 480,
            "townName": "Miami",
            "townName2": "Miami",
            "townSize": 10,
            "latitude": 25.83,
            "duration": 501
        }, {
            "date": "2012-01-06",
            "distance": 386,
            "townName": "Tallahassee",
            "townSize": 7,
            "latitude": 30.46,
            "duration": 443
        }, {
            "date": "2012-01-07",
            "distance": 348,
            "townName": "New Orleans",
            "townSize": 10,
            "latitude": 29.94,
            "duration": 405
        }, {
            "date": "2012-01-08",
            "distance": 238,
            "townName": "Houston",
            "townName2": "Houston",
            "townSize": 16,
            "latitude": 29.76,
            "duration": 309
        }, {
            "date": "2012-01-09",
            "distance": 218,
            "townName": "Dalas",
            "townSize": 17,
            "latitude": 32.8,
            "duration": 287
        }, {
            "date": "2012-01-10",
            "distance": 349,
            "townName": "Oklahoma City",
            "townSize": 11,
            "latitude": 35.49,
            "duration": 485
        }, {
            "date": "2012-01-11",
            "distance": 603,
            "townName": "Kansas City",
            "townSize": 10,
            "latitude": 39.1,
            "duration": 890
        }, {
            "date": "2012-01-12",
            "distance": 534,
            "townName": "Denver",
            "townName2": "Denver",
            "townSize": 18,
            "latitude": 39.74,
            "duration": 810
        }, {
            "date": "2012-01-13",
            "townName": "Salt Lake City",
            "townSize": 12,
            "distance": 425,
            "duration": 670,
            "latitude": 40.75,
            "dashLength": 8,
            "alpha": 0.4
        }, {
            "date": "2012-01-14",
            "latitude": 36.1,
            "duration": 470,
            "townName": "Las Vegas",
            "townName2": "Las Vegas"
        }, {
            "date": "2012-01-15"
        }, {
            "date": "2012-01-16"
        }, {
            "date": "2012-01-17"
        }, {
            "date": "2012-01-18"
        }, {
            "date": "2012-01-19"
        }],
        "valueAxes": [{
            "id": "distanceAxis",
            "axisAlpha": 0,
            "gridAlpha": 0,
            "position": "left",
            "title": "distance"
        }, {
            "id": "latitudeAxis",
            "axisAlpha": 0,
            "gridAlpha": 0,
            "labelsEnabled": false,
            "position": "right"
        }, {
            "id": "durationAxis",
            "duration": "mm",
            "durationUnits": {
                "hh": "h ",
                "mm": "min"
            },
            "axisAlpha": 0,
            "gridAlpha": 0,
            "inside": true,
            "position": "right",
            "title": "duration"
        }],
        "graphs": [{
            "alphaField": "alpha",
            "balloonText": "[[value]] miles",
            "dashLengthField": "dashLength",
            "fillAlphas": 0.9,
            "legendPeriodValueText": "total: [[value.sum]] mi",
            "legendValueText": "[[value]] mi",
            "title": "distance",
            "type": "column",
            "valueField": "distance",
            "valueAxis": "distanceAxis",
            "fillColors":"#ee3d50",
            "lineColor":"#ee3d50"
        }, {
            "balloonText": "latitude:[[value]]",
            "bullet": "round",
            "bulletBorderAlpha": 1,
            "useLineColorForBulletBorder": true,
            "bulletColor": "#FFFFFF",
            "bulletSizeField": "townSize",
            "dashLengthField": "dashLength",
            "descriptionField": "townName",
            "labelPosition": "right",
            "labelText": "[[townName2]]",
            "legendValueText": "[[value]]/[[description]]",
            "title": "latitude/city",
            "fillAlphas": 0,
            "valueField": "latitude",
            "valueAxis": "latitudeAxis",
            "lineColor": "#07dabf",
            // "negativeLineColor": "#1F3892",
        }, {
            "bullet": "square",
            "bulletBorderAlpha": 1,
            "bulletBorderThickness": 1,
            "dashLengthField": "dashLength",
            "legendValueText": "[[value]]",
            "title": "duration",
            "fillAlphas": 0,
            "valueField": "duration",
            "valueAxis": "durationAxis",
            "lineColor": "#ffbb44",
        }],
        "chartCursor": {
            "categoryBalloonDateFormat": "DD",
            "cursorAlpha": 0.1,
            "cursorColor":"#000000",
             "fullWidth":true,
            "valueBalloonsEnabled": false,
            "zoomable": false
        },
        "dataDateFormat": "YYYY-MM-DD",
        "categoryField": "date",
        "categoryAxis": {
            "dateFormats": [{
                "period": "DD",
                "format": "DD"
            }, {
                "period": "WW",
                "format": "MMM DD"
            }, {
                "period": "MM",
                "format": "MMM"
            }, {
                "period": "YYYY",
                "format": "YYYY"
            }],
            "parseDates": true,
            "autoGridCount": false,
            "axisColor": "#555555",
            "gridAlpha": 0.1,
            "gridColor": "#FFFFFF",
            "gridCount": 50
        },
        "export": {
            "enabled": true
         }
    });
})();

(function() {
    var chart = AmCharts.makeChart("changingcolorchartdiv", {
        "type": "serial",
        "theme": "light",
        "marginRight": 80,
        "dataProvider": [{
            "lineColor": "#24ccda",
            "date": "2012-01-01",
            "duration": 408
        }, {
            "date": "2012-01-02",
            "duration": 482
        }, {
            "date": "2012-01-03",
            "duration": 562
        }, {
            "date": "2012-01-04",
            "duration": 379
        }, {
            "lineColor": "#ffbb44",
            "date": "2012-01-05",
            "duration": 501
        }, {
            "date": "2012-01-06",
            "duration": 443
        }, {
            "date": "2012-01-07",
            "duration": 405
        }, {
            "date": "2012-01-08",
            "duration": 309,
            "lineColor": "#6156ce"
        }, {
            "date": "2012-01-09",
            "duration": 287
        }, {
            "date": "2012-01-10",
            "duration": 485
        }, {
            "date": "2012-01-11",
            "duration": 890
        }, {
            "date": "2012-01-12",
            "duration": 810
        }],
        "balloon": {
            "cornerRadius": 6,
            "horizontalPadding": 15,
            "verticalPadding": 10
        },
        "valueAxes": [{
            "duration": "mm",
            "durationUnits": {
                "hh": "h ",
                "mm": "min"
            },
            "axisAlpha": 0
        }],
        "graphs": [{
            "bullet": "square",
            "bulletBorderAlpha": 1,
            "bulletBorderThickness": 1,
            "fillAlphas": 0.4,
            "fillColorsField": "lineColor",
            "legendValueText": "[[value]]",
            "lineColorField": "lineColor",
            "title": "duration",
            "valueField": "duration"
        }],
        "chartScrollbar": {

        },
        "chartCursor": {
            "categoryBalloonDateFormat": "YYYY MMM DD",
            "cursorAlpha": 0,
            "fullWidth": true
        },
        "dataDateFormat": "YYYY-MM-DD",
        "categoryField": "date",
        "categoryAxis": {
            "dateFormats": [{
                "period": "DD",
                "format": "DD"
            }, {
                "period": "WW",
                "format": "MMM DD"
            }, {
                "period": "MM",
                "format": "MMM"
            }, {
                "period": "YYYY",
                "format": "YYYY"
            }],
            "parseDates": true,
            "autoGridCount": false,
            "axisColor": "#555555",
            "gridAlpha": 0,
            "gridCount": 50
        },
        "export": {
            "enabled": true
        }
    });



    chart.addListener("dataUpdated", zoomChart);

    function zoomChart() {
        chart.zoomToDates(new Date(2012, 0, 3), new Date(2012, 0, 11));
    }
})();

(function() {
    var chart = AmCharts.makeChart("smoothchartdiv", {
        "type": "serial",
        "theme": "light",
        "marginTop":0,
        "marginRight": 80,
        "dataProvider": [{
            "year": "1950",
            "value": -0.307
        }, {
            "year": "1951",
            "value": -0.168
        }, {
            "year": "1952",
            "value": -0.073
        }, {
            "year": "1953",
            "value": -0.027
        }, {
            "year": "1954",
            "value": -0.251
        }, {
            "year": "1955",
            "value": -0.281
        }, {
            "year": "1956",
            "value": -0.348
        }, {
            "year": "1957",
            "value": -0.074
        }, {
            "year": "1958",
            "value": -0.011
        }, {
            "year": "1959",
            "value": -0.074
        }, {
            "year": "1960",
            "value": -0.124
        }, {
            "year": "1961",
            "value": -0.024
        }, {
            "year": "1962",
            "value": -0.022
        }, {
            "year": "1963",
            "value": 0
        }, {
            "year": "1964",
            "value": -0.296
        }, {
            "year": "1965",
            "value": -0.217
        }, {
            "year": "1966",
            "value": -0.147
        }, {
            "year": "1967",
            "value": -0.15
        }, {
            "year": "1968",
            "value": -0.16
        }, {
            "year": "1969",
            "value": -0.011
        }, {
            "year": "1970",
            "value": -0.068
        }, {
            "year": "1971",
            "value": -0.19
        }, {
            "year": "1972",
            "value": -0.056
        }, {
            "year": "1973",
            "value": 0.077
        }, {
            "year": "1974",
            "value": -0.213
        }, {
            "year": "1975",
            "value": -0.17
        }, {
            "year": "1976",
            "value": -0.254
        }, {
            "year": "1977",
            "value": 0.019
        }, {
            "year": "1978",
            "value": -0.063
        }, {
            "year": "1979",
            "value": 0.05
        }, {
            "year": "1980",
            "value": 0.077
        }, {
            "year": "1981",
            "value": 0.12
        }, {
            "year": "1982",
            "value": 0.011
        }, {
            "year": "1983",
            "value": 0.177
        }, {
            "year": "1984",
            "value": -0.021
        }, {
            "year": "1985",
            "value": -0.037
        }, {
            "year": "1986",
            "value": 0.03
        }, {
            "year": "1987",
            "value": 0.179
        }, {
            "year": "1988",
            "value": 0.18
        }, {
            "year": "1989",
            "value": 0.104
        }, {
            "year": "1990",
            "value": 0.255
        }, {
            "year": "1991",
            "value": 0.21
        }, {
            "year": "1992",
            "value": 0.065
        }, {
            "year": "1993",
            "value": 0.11
        }, {
            "year": "1994",
            "value": 0.172
        }, {
            "year": "1995",
            "value": 0.269
        }, {
            "year": "1996",
            "value": 0.141
        }, {
            "year": "1997",
            "value": 0.353
        }, {
            "year": "1998",
            "value": 0.548
        }, {
            "year": "1999",
            "value": 0.298
        }, {
            "year": "2000",
            "value": 0.267
        }, {
            "year": "2001",
            "value": 0.411
        }, {
            "year": "2002",
            "value": 0.462
        }, {
            "year": "2003",
            "value": 0.47
        }, {
            "year": "2004",
            "value": 0.445
        }, {
            "year": "2005",
            "value": 0.47
        }],
        "valueAxes": [{
            "axisAlpha": 0,
            "position": "left"
        }],
        "graphs": [{
            "id":"g1",
            "balloonText": "[[category]]<br><b><span style='font-size:14px;'>[[value]]</span></b>",
            "bullet": "round",
            "bulletSize": 8,
            "lineColor": "#07e0c4",
            "lineThickness": 2,
            "negativeLineColor": "#3232b7",
            "type": "smoothedLine",
            "valueField": "value"
        }],
        "chartScrollbar": {
            "graph":"g1",
            "gridAlpha":0,
            "color":"#888888",
            "scrollbarHeight":55,
            "backgroundAlpha":0,
            "selectedBackgroundAlpha":0.1,
            "selectedBackgroundColor":"#888888",
            "graphFillAlpha":0,
            "autoGridCount":true,
            "selectedGraphFillAlpha":0,
            "graphLineAlpha":0.2,
            "graphLineColor":"#c2c2c2",
            "selectedGraphLineColor":"#888888",
            "selectedGraphLineAlpha":1

        },
        "chartCursor": {
            "categoryBalloonDateFormat": "YYYY",
            "cursorAlpha": 0,
            "valueLineEnabled":true,
            "valueLineBalloonEnabled":true,
            "valueLineAlpha":0.5,
            "fullWidth":true
        },
        "dataDateFormat": "YYYY",
        "categoryField": "year",
        "categoryAxis": {
            "minPeriod": "YYYY",
            "parseDates": true,
            "minorGridAlpha": 0.1,
            "minorGridEnabled": true
        },
        "export": {
            "enabled": true
        }
    });

    chart.addListener("rendered", zoomChart);
    if(chart.zoomChart){
            chart.zoomChart();
    }

    function zoomChart(){
        chart.zoomToIndexes(Math.round(chart.dataProvider.length * 0.4), Math.round(chart.dataProvider.length * 0.55));
    }
})();

(function() {
    var chartData = generatechartData();

    function generatechartData() {
      var chartData = [];
      var firstDate = new Date();
      firstDate.setDate( firstDate.getDate() - 150 );

      for ( var i = 0; i < 150; i++ ) {
        // we create date objects here. In your data, you can have date strings
        // and then set format of your dates using chart.dataDateFormat property,
        // however when possible, use date objects, as this will speed up chart rendering.
        var newDate = new Date( firstDate );
        newDate.setDate( newDate.getDate() + i );

        var visits = Math.round( Math.random() * 90 - 45 );

        chartData.push( {
          date: newDate,
          visits: visits
        } );
      }
      return chartData;
    }


    var chart = AmCharts.makeChart( "differentcolorchartdiv", {
      "theme": "light",
      "type": "serial",
      "dataProvider": chartData,
      "valueAxes": [ {
        "inside": true,
        "axisAlpha": 0
      } ],
      "graphs": [ {
        "id": "g1",
        "balloonText": "<div style='margin:5px; font-size:19px;'><span style='font-size:13px;'>[[category]]</span><br>[[value]]</div>",
        "bullet": "round",
        "bulletBorderAlpha": 1,
        "bulletBorderColor": "#FFFFFF",
        "hideBulletsCount": 50,
        "lineThickness": 2,
        "lineColor": "#00b1f4",
        "negativeLineColor": "#ff3743",
        "valueField": "visits"
      } ],
      "chartScrollbar": {

      },
      "chartCursor": {},
      "categoryField": "date",
      "categoryAxis": {
        "parseDates": true,
        "axisAlpha": 0,
        "minHorizontalGap": 55
      },
      "listeners": [ {
        "event": "dataUpdated",
        "method": function() {
          if ( chart ) {
            if ( chart.zoomToIndexes ) {
              chart.zoomToIndexes( 130, chartData.length - 1 );
            }
          }
        }
      } ]
    } );
})();

(function() {
    var chart = AmCharts.makeChart( "zoomablechartdiv", {
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
          "ignoreAxisWidth": true
        } ],
        "balloon": {
          "borderThickness": 1,
          "shadowAlpha": 0,
          
        },
        "graphs": [ {
          "id": "g1",
          "balloon": {
            "drop": true,
            "adjustBorderColor": false,
            "color": "#ffffff",
            "type": "smoothedLine",
            // "lineColor": "#1AD271",
            "balloonColor" : "#1AD271"
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
          "balloonText": "<span style='font-size:18px;'>[[value]]</span>",
          "lineColor": "#e9b02b",
        } ],
        "chartCursor": {
          "valueLineEnabled": true,
          "valueLineBalloonEnabled": true,
          "cursorAlpha": 0,
          "zoomable": false,
          "valueZoomable": true,
          "valueLineAlpha": 0.5
        },
        "valueScrollbar": {
          "autoGridCount": true,
          "color": "#000000",
          "scrollbarHeight": 50
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
          "date": "2012-07-27",
          "value": 13
        }, {
          "date": "2012-07-28",
          "value": 11
        }, {
          "date": "2012-07-29",
          "value": 15
        }, {
          "date": "2012-07-30",
          "value": 16
        }, {
          "date": "2012-07-31",
          "value": 18
        }, {
          "date": "2012-08-01",
          "value": 13
        }, {
          "date": "2012-08-02",
          "value": 22
        }, {
          "date": "2012-08-03",
          "value": 23
        }, {
          "date": "2012-08-04",
          "value": 20
        }, {
          "date": "2012-08-05",
          "value": 17
        }, {
          "date": "2012-08-06",
          "value": 16
        }, {
          "date": "2012-08-07",
          "value": 18
        }, {
          "date": "2012-08-08",
          "value": 21
        }, {
          "date": "2012-08-09",
          "value": 26
        }, {
          "date": "2012-08-10",
          "value": 24
        }, {
          "date": "2012-08-11",
          "value": 29
        }, {
          "date": "2012-08-12",
          "value": 32
        }, {
          "date": "2012-08-13",
          "value": 18
        }, {
          "date": "2012-08-14",
          "value": 24
        }, {
          "date": "2012-08-15",
          "value": 22
        }, {
          "date": "2012-08-16",
          "value": 18
        }, {
          "date": "2012-08-17",
          "value": 19
        }, {
          "date": "2012-08-18",
          "value": 14
        }, {
          "date": "2012-08-19",
          "value": 15
        }, {
          "date": "2012-08-20",
          "value": 12
        }, {
          "date": "2012-08-21",
          "value": 8
        }, {
          "date": "2012-08-22",
          "value": 9
        }, {
          "date": "2012-08-23",
          "value": 8
        }, {
          "date": "2012-08-24",
          "value": 7
        }, {
          "date": "2012-08-25",
          "value": 5
        }, {
          "date": "2012-08-26",
          "value": 11
        }, {
          "date": "2012-08-27",
          "value": 13
        }, {
          "date": "2012-08-28",
          "value": 18
        }, {
          "date": "2012-08-29",
          "value": 20
        }, {
          "date": "2012-08-30",
          "value": 29
        }, {
          "date": "2012-08-31",
          "value": 33
        }, {
          "date": "2012-09-01",
          "value": 42
        }, {
          "date": "2012-09-02",
          "value": 35
        }, {
          "date": "2012-09-03",
          "value": 31
        }, {
          "date": "2012-09-04",
          "value": 47
        }, {
          "date": "2012-09-05",
          "value": 52
        }, {
          "date": "2012-09-06",
          "value": 46
        }, {
          "date": "2012-09-07",
          "value": 41
        }, {
          "date": "2012-09-08",
          "value": 43
        }, {
          "date": "2012-09-09",
          "value": 40
        }, {
          "date": "2012-09-10",
          "value": 39
        }, {
          "date": "2012-09-11",
          "value": 34
        }, {
          "date": "2012-09-12",
          "value": 29
        }, {
          "date": "2012-09-13",
          "value": 34
        }, {
          "date": "2012-09-14",
          "value": 37
        }, {
          "date": "2012-09-15",
          "value": 42
        }, {
          "date": "2012-09-16",
          "value": 49
        }, {
          "date": "2012-09-17",
          "value": 46
        }, {
          "date": "2012-09-18",
          "value": 47
        }, {
          "date": "2012-09-19",
          "value": 55
        }, {
          "date": "2012-09-20",
          "value": 59
        }, {
          "date": "2012-09-21",
          "value": 58
        }, {
          "date": "2012-09-22",
          "value": 57
        }, {
          "date": "2012-09-23",
          "value": 61
        }, {
          "date": "2012-09-24",
          "value": 59
        }, {
          "date": "2012-09-25",
          "value": 67
        }, {
          "date": "2012-09-26",
          "value": 65
        }, {
          "date": "2012-09-27",
          "value": 61
        }, {
          "date": "2012-09-28",
          "value": 66
        }, {
          "date": "2012-09-29",
          "value": 69
        }, {
          "date": "2012-09-30",
          "value": 71
        }, {
          "date": "2012-10-01",
          "value": 67
        }, {
          "date": "2012-10-02",
          "value": 63
        }, {
          "date": "2012-10-03",
          "value": 46
        }, {
          "date": "2012-10-04",
          "value": 32
        }, {
          "date": "2012-10-05",
          "value": 21
        }, {
          "date": "2012-10-06",
          "value": 18
        }, {
          "date": "2012-10-07",
          "value": 21
        }, {
          "date": "2012-10-08",
          "value": 28
        }, {
          "date": "2012-10-09",
          "value": 27
        }, {
          "date": "2012-10-10",
          "value": 36
        }, {
          "date": "2012-10-11",
          "value": 33
        }, {
          "date": "2012-10-12",
          "value": 31
        }, {
          "date": "2012-10-13",
          "value": 30
        }, {
          "date": "2012-10-14",
          "value": 34
        }, {
          "date": "2012-10-15",
          "value": 38
        }, {
          "date": "2012-10-16",
          "value": 37
        }, {
          "date": "2012-10-17",
          "value": 44
        }, {
          "date": "2012-10-18",
          "value": 49
        }, {
          "date": "2012-10-19",
          "value": 53
        }, {
          "date": "2012-10-20",
          "value": 57
        }, {
          "date": "2012-10-21",
          "value": 60
        }, {
          "date": "2012-10-22",
          "value": 61
        }, {
          "date": "2012-10-23",
          "value": 69
        }, {
          "date": "2012-10-24",
          "value": 67
        }, {
          "date": "2012-10-25",
          "value": 72
        }, {
          "date": "2012-10-26",
          "value": 77
        }, {
          "date": "2012-10-27",
          "value": 75
        }, {
          "date": "2012-10-28",
          "value": 70
        }, {
          "date": "2012-10-29",
          "value": 72
        }, {
          "date": "2012-10-30",
          "value": 70
        }, {
          "date": "2012-10-31",
          "value": 72
        }, {
          "date": "2012-11-01",
          "value": 73
        }, {
          "date": "2012-11-02",
          "value": 67
        }, {
          "date": "2012-11-03",
          "value": 68
        }, {
          "date": "2012-11-04",
          "value": 65
        }, {
          "date": "2012-11-05",
          "value": 71
        }, {
          "date": "2012-11-06",
          "value": 75
        }, {
          "date": "2012-11-07",
          "value": 74
        }, {
          "date": "2012-11-08",
          "value": 71
        }, {
          "date": "2012-11-09",
          "value": 76
        }, {
          "date": "2012-11-10",
          "value": 77
        }, {
          "date": "2012-11-11",
          "value": 81
        }, {
          "date": "2012-11-12",
          "value": 83
        }, {
          "date": "2012-11-13",
          "value": 80
        }, {
          "date": "2012-11-14",
          "value": 81
        }, {
          "date": "2012-11-15",
          "value": 87
        }, {
          "date": "2012-11-16",
          "value": 82
        }, {
          "date": "2012-11-17",
          "value": 86
        }, {
          "date": "2012-11-18",
          "value": 80
        }, {
          "date": "2012-11-19",
          "value": 87
        }, {
          "date": "2012-11-20",
          "value": 83
        }, {
          "date": "2012-11-21",
          "value": 85
        }, {
          "date": "2012-11-22",
          "value": 84
        }, {
          "date": "2012-11-23",
          "value": 82
        }, {
          "date": "2012-11-24",
          "value": 73
        }, {
          "date": "2012-11-25",
          "value": 71
        }, {
          "date": "2012-11-26",
          "value": 75
        }, {
          "date": "2012-11-27",
          "value": 79
        }, {
          "date": "2012-11-28",
          "value": 70
        }, {
          "date": "2012-11-29",
          "value": 73
        }, {
          "date": "2012-11-30",
          "value": 61
        }, {
          "date": "2012-12-01",
          "value": 62
        }, {
          "date": "2012-12-02",
          "value": 66
        }, {
          "date": "2012-12-03",
          "value": 65
        }, {
          "date": "2012-12-04",
          "value": 73
        }, {
          "date": "2012-12-05",
          "value": 79
        }, {
          "date": "2012-12-06",
          "value": 78
        }, {
          "date": "2012-12-07",
          "value": 78
        }, {
          "date": "2012-12-08",
          "value": 78
        }, {
          "date": "2012-12-09",
          "value": 74
        }, {
          "date": "2012-12-10",
          "value": 73
        }, {
          "date": "2012-12-11",
          "value": 75
        }, {
          "date": "2012-12-12",
          "value": 70
        }, {
          "date": "2012-12-13",
          "value": 77
        }, {
          "date": "2012-12-14",
          "value": 67
        }, {
          "date": "2012-12-15",
          "value": 62
        }, {
          "date": "2012-12-16",
          "value": 64
        }, {
          "date": "2012-12-17",
          "value": 61
        }, {
          "date": "2012-12-18",
          "value": 59
        }, {
          "date": "2012-12-19",
          "value": 53
        }, {
          "date": "2012-12-20",
          "value": 54
        }, {
          "date": "2012-12-21",
          "value": 56
        }, {
          "date": "2012-12-22",
          "value": 59
        }, {
          "date": "2012-12-23",
          "value": 58
        }, {
          "date": "2012-12-24",
          "value": 55
        }, {
          "date": "2012-12-25",
          "value": 52
        }, {
          "date": "2012-12-26",
          "value": 54
        }, {
          "date": "2012-12-27",
          "value": 50
        }, {
          "date": "2012-12-28",
          "value": 50
        }, {
          "date": "2012-12-29",
          "value": 51
        }, {
          "date": "2012-12-30",
          "value": 52
        }, {
          "date": "2012-12-31",
          "value": 58
        }, {
          "date": "2013-01-01",
          "value": 60
        }, {
          "date": "2013-01-02",
          "value": 67
        }, {
          "date": "2013-01-03",
          "value": 64
        }, {
          "date": "2013-01-04",
          "value": 66
        }, {
          "date": "2013-01-05",
          "value": 60
        }, {
          "date": "2013-01-06",
          "value": 63
        }, {
          "date": "2013-01-07",
          "value": 61
        }, {
          "date": "2013-01-08",
          "value": 60
        }, {
          "date": "2013-01-09",
          "value": 65
        }, {
          "date": "2013-01-10",
          "value": 75
        }, {
          "date": "2013-01-11",
          "value": 77
        }, {
          "date": "2013-01-12",
          "value": 78
        }, {
          "date": "2013-01-13",
          "value": 70
        }, {
          "date": "2013-01-14",
          "value": 70
        }, {
          "date": "2013-01-15",
          "value": 73
        }, {
          "date": "2013-01-16",
          "value": 71
        }, {
          "date": "2013-01-17",
          "value": 74
        }, {
          "date": "2013-01-18",
          "value": 78
        }, {
          "date": "2013-01-19",
          "value": 85
        }, {
          "date": "2013-01-20",
          "value": 82
        }, {
          "date": "2013-01-21",
          "value": 83
        }, {
          "date": "2013-01-22",
          "value": 88
        }, {
          "date": "2013-01-23",
          "value": 85
        }, {
          "date": "2013-01-24",
          "value": 85
        }, {
          "date": "2013-01-25",
          "value": 80
        }, {
          "date": "2013-01-26",
          "value": 87
        }, {
          "date": "2013-01-27",
          "value": 84
        }, {
          "date": "2013-01-28",
          "value": 83
        }, {
          "date": "2013-01-29",
          "value": 84
        }, {
          "date": "2013-01-30",
          "value": 81
        } ]
    } );
})();