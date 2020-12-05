(function() {
    google.charts.load('current', {packages: ['corechart', 'bar']});
    google.charts.setOnLoadCallback(drawColColors);

    function drawColColors() {
          var data = new google.visualization.DataTable();
          data.addColumn('timeofday', 'Time of Day');
          data.addColumn('number', 'Motivation Level');
          data.addColumn('number', 'Energy Level');

          data.addRows([
            [{v: [8, 0, 0], f: '8 am'}, 1, .25],
            [{v: [9, 0, 0], f: '9 am'}, 2, .5],
            [{v: [10, 0, 0], f:'10 am'}, 3, 1],
            [{v: [11, 0, 0], f: '11 am'}, 4, 2.25],
            [{v: [12, 0, 0], f: '12 pm'}, 5, 2.25],
            [{v: [13, 0, 0], f: '1 pm'}, 6, 3],
            [{v: [14, 0, 0], f: '2 pm'}, 7, 4],
            [{v: [15, 0, 0], f: '3 pm'}, 8, 5.25],
            [{v: [16, 0, 0], f: '4 pm'}, 9, 7.5],
            [{v: [17, 0, 0], f: '5 pm'}, 10, 10],
          ]);

          var options = {
            title: 'Motivation and Energy Level Throughout the Day',
            colors: ["#3862f5", "#f8538d"],
            hAxis: {
              title: 'Time of Day',
              format: 'h:mm a',
              viewWindow: {
                min: [7, 30, 0],
                max: [17, 30, 0]
              }
            },
            vAxis: {
              title: 'Rating (scale of 1-10)'
            }
          };

          var chart = new google.visualization.ColumnChart(document.getElementById('chart_google'));
          chart.draw(data, options);
        }
        
        // Resize chart -----------------------
        $(function () {

            // Resize chart on sidebar width change and window resize
            $(window).on('resize', resize);
            $(".sidebar-control").on('click', resize);

            // Resize function
            function resize() {
                drawColColors();
            }
        });
})();

(function() {
    google.charts.load('current', {packages: ['corechart', 'bar']});
    google.charts.setOnLoadCallback(drawTrendlines);

    function drawTrendlines() {
          var data = new google.visualization.DataTable();
          data.addColumn('timeofday', 'Time of Day');
          data.addColumn('number', 'Motivation Level');
          data.addColumn('number', 'Energy Level');

          data.addRows([
            [{v: [8, 0, 0], f: '8 am'}, 1, .25],
            [{v: [9, 0, 0], f: '9 am'}, 2, .5],
            [{v: [10, 0, 0], f:'10 am'}, 3, 1],
            [{v: [11, 0, 0], f: '11 am'}, 4, 2.25],
            [{v: [12, 0, 0], f: '12 pm'}, 5, 2.25],
            [{v: [13, 0, 0], f: '1 pm'}, 6, 3],
            [{v: [14, 0, 0], f: '2 pm'}, 7, 4],
            [{v: [15, 0, 0], f: '3 pm'}, 8, 5.25],
            [{v: [16, 0, 0], f: '4 pm'}, 9, 7.5],
            [{v: [17, 0, 0], f: '5 pm'}, 10, 10],
          ]);

          var options = {
            title: 'Motivation and Energy Level Throughout the Day',
            trendlines: {
              0: {type: 'linear', lineWidth: 5, opacity: .3},
              1: {type: 'exponential', lineWidth: 10, opacity: .3}
            },
            colors: ["#6156ce", "#07e0c4"],
            hAxis: {
              title: 'Time of Day',
              format: 'h:mm a',
              viewWindow: {
                min: [7, 30, 0],
                max: [17, 30, 0]
              }
            },
            vAxis: {
              title: 'Rating (scale of 1-10)'
            }
          };

          var chart = new google.visualization.ColumnChart(document.getElementById('chart_google_c'));
          chart.draw(data, options);
        }
        
        // Resize chart -----------------------
        $(function () {

            // Resize chart on sidebar width change and window resize
            $(window).on('resize', resize);
            $(".sidebar-control").on('click', resize);

            // Resize function
            function resize() {
                drawTrendlines();
            }
        });
})();

(function() {
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    
    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Work',     11],
        ['Eat',      2],
        ['Commute',  2],
        ['Watch TV', 2],
        ['Sleep',    7]
      ]);

      var options = {
        title: 'My Daily Activities',
        colors: [ "#6156ce", "#07e0c4", "#f8538d", "#24ccda","#ffbb44"
        ],
      };

      var chart = new google.visualization.PieChart(document.getElementById('chart_pie'));
      chart.draw(data, options);
    }
    
    // Resize chart -----------------------
    $(function () {

        // Resize chart on sidebar width change and window resize
        $(window).on('resize', resize);
        $(".sidebar-control").on('click', resize);

        // Resize function
        function resize() {
            drawChart();
        }
    });

})();

//3D Pie Chart start

(function() {
    google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Work',     11],
        ['Eat',      2],
        ['Commute',  2],
        ['Watch TV', 2],
        ['Sleep',    7]
      ]);

      var options = {
        title: 'My Daily Activities',
        is3D: true,
        colors: [ "#6156ce", "#07e0c4", "#f8538d", "#24ccda","#ffbb44"   
        ],
      };

      var chart = new google.visualization.PieChart(document.getElementById('chart_3dpie'));
      chart.draw(data, options);
    }
 
    // Resize chart -----------------------
    $(function () {

        // Resize chart on sidebar width change and window resize
        $(window).on('resize', resize);
        $(".sidebar-control").on('click', resize);

        // Resize function
        function resize() {
            drawChart();
        }
    });
    
})();

(function() {
    google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChart);
    
    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Work',     11],
        ['Eat',      2],
        ['Commute',  2],
        ['Watch TV', 2],
        ['Sleep',    7]
      ]);

      var options = {
        title: 'My Daily Activities',
        pieHole: 0.4,
        colors: [ "#6156ce", "#07e0c4", "#f8538d", "#24ccda","#ffbb44"
        ],
      };

      var chart = new google.visualization.PieChart(document.getElementById('chart_donut'));
      chart.draw(data, options);
    }
    
    // Resize chart -----------------------
    $(function () {

        // Resize chart on sidebar width change and window resize
        $(window).on('resize', resize);
        $(".sidebar-control").on('click', resize);

        // Resize function
        function resize() {
            drawChart();
        }
    });

})();

//Diff pie chart start
(function() {
    google.charts.load('current', {packages:['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    
        function drawChart() {
          var oldData = google.visualization.arrayToDataTable([
            ['Major', 'Degrees'],
            ['Business', 256070], ['Education', 108034],
            ['Social Sciences & History', 127101], ['Health', 81863],
            ['Psychology', 74194]]);

          var newData = google.visualization.arrayToDataTable([
            ['Major', 'Degrees'],
            ['Business', 358293], ['Education', 101265],
            ['Social Sciences & History', 172780], ['Health', 129634],
            ['Psychology', 97216]]);

          var options = {
            pieSliceText: 'none',
            colors: [ "#6156ce", "#07e0c4", "#f8538d", "#24ccda","#ffbb44"
            ], 
        };
          
          var chartDiff = new google.visualization.PieChart(document.getElementById('chart_diffpie'));
          
          var diffData = chartDiff.computeDiff(oldData, newData);
          chartDiff.draw(diffData, options);
        }
    // Resize chart -----------------------
    $(function () {
        //Resize chart on sidebar width change and window resize
        $(window).on('resize', resize);
        $(".sidebar-control").on('click', resize);

        //Resize function
        function resize() {
            drawChart();
        }
    });
    
})();

(function() {
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ['Year', 'Sales', 'Expenses'],
        ['2014',  1000,      400],
        ['2015',  1170,      460],
        ['2016',  660,       1120],
        ['2017',  1030,      540]
      ]);

    // Options
    var options = {
        fontName: 'Roboto',
        height: 400,
        curveType: 'function',
        fontSize: 12,
        chartArea: {
            left: '5%',
            width: '90%',
            height: 350
        },
        pointSize: 4,
        tooltip: {
            textStyle: {
                fontName: 'Roboto',
                fontSize: 13
            }
        },
        colors: [ "#3232b7", "#f58b22"
        ],
        vAxis: {
            title: 'Sales and Expenses',
            titleTextStyle: {
                fontSize: 13,
                italic: false
            },
            gridlines:{
                color: '#e5e5e5',
                count: 10
            },
            minValue: 0
        },
        legend: {
            position: 'top',
            alignment: 'center',
            textStyle: {
                fontSize: 12
            }
        }
    };

      var chart = new google.visualization.LineChart(document.getElementById('chart_line'));
      chart.draw(data, options);
    }
    
    // Resize chart -----------------------
    $(function () {

        // Resize chart on sidebar width change and window resize
        $(window).on('resize', resize);
        $(".sidebar-control").on('click', resize);

        // Resize function
        function resize() {
            drawChart();
        }

    });

})();

(function() {

    // Initialize chart
    google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChart);

    // Chart settings
    function drawChart() {
        var data = google.visualization.arrayToDataTable([
            ['Year', 'Sales', 'Expenses'],
            ['2014',  1000,      400],
            ['2015',  1170,      460],
            ['2016',  660,       1120],
            ['2017',  1030,      540]
        ]);

        // Options
        var options = {
            fontName: 'Roboto',
            height: 400,
            curveType: 'function',
            fontSize: 12,
            areaOpacity: 0.4,
            chartArea: {
                left: '5%',
                width: '90%',
                height: 350
            },
            pointSize: 4,
            tooltip: {
                textStyle: {
                    fontName: 'Roboto',
                    fontSize: 13
                }
            },
            colors: [ "#ffbb44", "#ee3d50"
            ],
            vAxis: {
                title: 'Sales and Expenses',
                titleTextStyle: {
                    fontSize: 13,
                    italic: false
                },
                gridarea:{
                    color: '#e5e5e5',
                    count: 10
                },
                minValue: 0
            },
            legend: {
                position: 'top',
                alignment: 'end',
                textStyle: {
                    fontSize: 12
                }
            }
        };

        // Draw chart
        var area_chart = new google.visualization.AreaChart($('#chart_area')[0]);
        area_chart.draw(data, options);
    }

    // Resize chart -----------------------
    $(function () {

        // Resize chart on sidebar width change and window resize
        $(window).on('resize', resize);
        $(".sidebar-control").on('click', resize);

        // Resize function
        function resize() {
            drawChart();
        }
    });

})();

(function() {
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawVisualization);

    function drawVisualization() {
      // Some raw data (not necessarily accurate)
      var data = google.visualization.arrayToDataTable([
       ['Month', 'Bolivia', 'Ecuador', 'Madagascar', 'Papua New Guinea', 'Rwanda', 'Average'],
       ['2011/12',  165,      938,         522,             998,           450,      614.6],
       ['2012/13',  135,      1120,        599,             1268,          288,      682],
       ['2013/14',  157,      1167,        587,             807,           397,      623],
       ['2015/16',  139,      1110,        615,             968,           215,      609.4],
       ['2016/17',  136,      691,         629,             1026,          366,      569.6]
    ]);

    // Options
    var options = {
        fontName: 'Roboto',
        height: 400,
        fontSize: 12,
        chartArea: {
            left: '5%',
            width: '90%',
            height: 350
        },
        seriesType: "bars",
        series: {
            5: {
                type: "line",
                pointSize: 5
            }
        },
        colors: [ "#6156ce", "#07e0c4", "#f8538d", "#24ccda","#ffbb44", "#3b3f5c"
        ], 
        tooltip: {
            textStyle: {
                fontName: 'Roboto',
                fontSize: 13
            }
        },
        vAxis: {
            gridlines:{
                color: '#e5e5e5',
                count: 10
            },
            minValue: 0
        },
        legend: {
            position: 'top',
            alignment: 'center',
            textStyle: {
                fontSize: 12
            }
        }
    };

    var chart = new google.visualization.ComboChart(document.getElementById('chart_combo'));
    chart.draw(data, options);
  }
  
    // Resize chart -----------------------
    $(function () {

        // Resize chart on sidebar width change and window resize
        $(window).on('resize', resize);
        $(".sidebar-control").on('click', resize);

        // Resize function
        function resize() {
            drawVisualization();
        }
    });

})();