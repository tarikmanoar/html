// Latest Activities scroll

$(".to-do-scroll").mCustomScrollbar({
    axis:"yx", // vertical and horizontal scrollbar
    autoHideScrollbar:true
});

$(".all-coins .all-coins-scroll").mCustomScrollbar({
  axis:"x", // vertical and horizontal scrollbar
  autoHideScrollbar:true,
});

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

$("#balance-btc").sparkline([5,6,5,7,9,7,3,3,9,4,6,4], {
  type: 'line',
  width: '100',
  height: '30',
  lineColor: '#1a73e9',
  lineWidth: 1,
  spotRadius: 3.5,
  fillColor: 'transparent',
  spotColor: '#1ad271',
  spotRadius: 0,
  minSpotColor: '#1a73e9',
  maxSpotColor: '#1a73e9'
});

$("#received-btc").sparkline([2,6,3,9,5,9,3,6,4,4,6,7], {
  type: 'line',
  width: '100',
  height: '30',
  lineColor: '#4f5163',
  lineWidth: 1,
  spotRadius: 3.5,
  fillColor: 'transparent',
  spotColor: '#1ad271',
  spotRadius: 0,
  minSpotColor: '#4f5163',
  maxSpotColor: '#4f5163'
});

$("#sent-btc").sparkline([5,6,6,9,5,9,3,4,4,3,6,4], {
  type: 'line',
  width: '100',
  height: '30',
  lineColor: '#805dca',
  lineWidth: 1,
  spotRadius: 3.5,
  fillColor: 'transparent',
  spotColor: '#1ad271',
  spotRadius: 0,
  minSpotColor: '#805dca',
  maxSpotColor: '#805dca'
});

$("#transaction-btc").sparkline([5,6,7,9,9,5,3,3,4,4,6,7], {
  type: 'line',
  width: '100',
  height: '30',
  lineColor: '#0081e6',
  lineWidth: 1,
  spotRadius: 3.5,
  fillColor: 'transparent',
  spotColor: '#1ad271',
  spotRadius: 0,
  minSpotColor: '#0081e6',
  maxSpotColor: '#0081e6'
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
   // "colors": [ "#f8538d", "#00b1f4", "#e9b02b", "#00d1c1", "#6156ce", "#e95f2b", "#1a73e9" ],
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

$(".all-coins #btc").sparkline([4,6,7,5,4,5,7,3,4,9,6,3], {
  type: 'line',
  width: '100',
  height: '30',
  lineColor: '#4f5163',
  lineWidth: 1,
  spotRadius: 3.5,
  fillColor: 'transparent',
  spotColor: '#1ad271',
  spotRadius: 0,
  minSpotColor: '#4f5163',
  maxSpotColor: '#4f5163'
});

$(".all-coins #eth").sparkline([5,6,7,9,8,5,2,3,9,4,6,7], {
  type: 'line',
  width: '100',
  height: '30',
  lineColor: '#4f5163',
  lineWidth: 1,
  spotRadius: 3.5,
  fillColor: 'transparent',
  spotColor: '#1ad271',
  spotRadius: 0,
  minSpotColor: '#4f5163',
  maxSpotColor: '#4f5163'
});

$(".all-coins #xrp").sparkline([3,6,5,2,4,5,8,3,4,7,6,2], {
  type: 'line',
  width: '100',
  height: '30',
  lineColor: '#4f5163',
  lineWidth: 1,
  spotRadius: 3.5,
  fillColor: 'transparent',
  spotColor: '#1ad271',
  spotRadius: 0,
  minSpotColor: '#4f5163',
  maxSpotColor: '#4f5163'
});

$(".all-coins #bch").sparkline([2,4,7,4,9,5,6,2,4,6,6,1], {
  type: 'line',
  width: '100',
  height: '30',
  lineColor: '#4f5163',
  lineWidth: 1,
  spotRadius: 3.5,
  fillColor: 'transparent',
  spotColor: '#1ad271',
  spotRadius: 0,
  minSpotColor: '#4f5163',
  maxSpotColor: '#4f5163'
});

$(".all-coins #ada").sparkline([5,6,7,9,4,5,2,8,4,3,6,4], {
  type: 'line',
  width: '100',
  height: '30',
  lineColor: '#4f5163',
  lineWidth: 1,
  spotRadius: 3.5,
  fillColor: 'transparent',
  spotColor: '#1ad271',
  spotRadius: 0,
  minSpotColor: '#4f5163',
  maxSpotColor: '#4f5163'
});

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