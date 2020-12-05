(function() {
    var chart = AmCharts.makeChart( "simplepiechartdiv", {
    "type": "pie",
    "theme": "light",
    "colors" : ["#6156ce","#f8538d","#00b1f4","#07e0c4","#3862f5","#e95f2b","#25d5e4","#e9b02b","#989ebf"],
    "dataProvider": [ {
      "country": "Lithuania",
      "litres": 501.9
      // "colorField": "#ff0000"
    }, {
      "country": "Czech Republic",
      "litres": 301.9
      // "colors": "#1AD271"
    }, {
      "country": "Ireland",
      "litres": 201.1
    }, {
      "country": "Germany",
      "litres": 165.8
    }, {
      "country": "Australia",
      "litres": 139.9
    }, {
      "country": "Austria",
      "litres": 128.3
    }, {
      "country": "UK",
      "litres": 99
    }, {
      "country": "Belgium",
      "litres": 60
    }, {
      "country": "The Netherlands",
      "litres": 50
    } ],
    "valueField": "litres",
    "titleField": "country",
     "balloon":{
     "fixedPosition":true
    },
    "responsive": {
      "enabled": true
    }
  } );
})();

(function() {
    var chart = AmCharts.makeChart( "dpiechartdiv", {
    "type": "pie",
    "theme": "light",
    "colors" : ["#25d5e4","#816cfd","#ffbb44","#f8538d","#3862f5","#e95f2b"],
    "dataProvider": [ {
      "country": "Lithuania",
      "value": 260
    }, {
      "country": "Ireland",
      "value": 201
    }, {
      "country": "Germany",
      "value": 65
    }, {
      "country": "Australia",
      "value": 39
    }, {
      "country": "UK",
      "value": 19
    }, {
      "country": "Latvia",
      "value": 10
    } ],
    "valueField": "value",
    "titleField": "country",
    "outlineAlpha": 0.4,
    "depth3D": 15,
    "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
    "angle": 30,
    "responsive": {
      "enabled": true,
    }
  } );
})();

(function() {
    var chart = AmCharts.makeChart("legendpiechartdiv", {
    "type": "pie",
    "startDuration": 0,
     "theme": "light",
     "colors" : ["#ee3d50","#ffbb44","#3232b7","#816cfd","#07e0c4","#f8538d","#00b1f4","#f58b22","#25d5e4"],
    "addClassNames": true,
    "legend":{
      "position":"right",
      "marginRight":100,
      "autoMargins":false
    },
    "innerRadius": "30%",
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
      "country": "Lithuania",
      "litres": 501.9
    }, {
      "country": "Czech Republic",
      "litres": 301.9
    }, {
      "country": "Ireland",
      "litres": 201.1
    }, {
      "country": "Germany",
      "litres": 165.8
    }, {
      "country": "Australia",
      "litres": 139.9
    }, {
      "country": "Austria",
      "litres": 128.3
    }, {
      "country": "UK",
      "litres": 99
    }, {
      "country": "Belgium",
      "litres": 60
    }, {
      "country": "The Netherlands",
      "litres": 50
    }],
    "valueField": "litres",
    "titleField": "country",
    "responsive": {
      "enabled": true,
      "rules": [
        // at 767px to below
        {
          "maxWidth": 767,
          "overrides": {
            "legend":{
              "position":"bottom",
            }
          }
        }

      ]
    }
  });

  chart.addListener("init", handleInit);

  chart.addListener("rollOverSlice", function(e) {
    handleRollOver(e);
  });

  function handleInit(){
    chart.legend.addListener("rollOverItem", handleRollOver);
  }

  function handleRollOver(e){
    var wedge = e.dataItem.wedge.node;
    wedge.parentNode.appendChild(wedge);
  }
})();