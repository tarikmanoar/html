function bar_stacked() {
    var axis_x_type = 'category',
          axis_rotated = false;

      var generate = function () { return c3.generate({
        bindto: '#bar_stacked_charts',
        data: {
          columns: [
            ['data1', 30, 200, 200, 400, 150, -250],
            ['data2', 130, -100, 100, 200, 150, 50],
            ['data3', 230, -200, 200, 0, 250, 250]
          ],
          type: 'bar',
          groups: [
            ['data1', 'data2']
          ]
        },
        color: {
          pattern: ['#6156ce','#07e0c4','#00b1f4','#f8538d']
        },
        axis: {
          x: {
            type: axis_x_type
          },
          rotated: axis_rotated
        },
        grid: {
          y: {
            lines: [{value:0}]
          }
        },
      }); }, chart = generate();

      function update1() {
        chart.groups([['data1', 'data2', 'data3']])
      }

      function update2() {
        chart.load({
          columns: [['data4', 100, 50, 150, -200, 300, -100]]
        });
      }

      function update3() {
        chart.groups([['data1', 'data2', 'data3', 'data4']])
      }


      setTimeout(update1, 1000);
      setTimeout(update2, 2000);
      setTimeout(update3, 3000);


      setTimeout(function () {
        axis_rotated = true;
        chart = generate();
      }, 4000);
      setTimeout(update1, 5000);
      setTimeout(update2, 6000);
      setTimeout(update3, 7000);


      setTimeout(function () {
        axis_x_type = '';
        axis_rotated = false;
        chart = generate();
      }, 8000);
      setTimeout(update1, 9000);
      setTimeout(update2, 10000);
      setTimeout(update3, 11000);


      setTimeout(function () {
        axis_x_type = '';
        axis_rotated = true;
        chart = generate();
      }, 12000);
      setTimeout(update1, 13000);
      setTimeout(update2, 14000);
      setTimeout(update3, 15000);
}

bar_stacked();

function donut() {
    var chart = c3.generate({
        bindto: '#donut_charts',
        data: {
          columns: [
//            ["setosa", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
            ["versicolor", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
            ["virginica", 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8],
            ["setosa", 30],
//            ["versicolor", 40],
//            ["virginica", 50],
          ],
          type : 'donut',
          onmouseover: function (d, i) { console.log("onmouseover", d, i, this); },
          onmouseout: function (d, i) { console.log("onmouseout", d, i, this); },
          onclick: function (d, i) { console.log("onclick", d, i, this); },
          order: null // set null to disable sort of data. desc is the default.
        },
        color: {
          pattern: ['#3232b7','#f8538d','#24ccda','#816cfd']
        },
        axis: {
          x: {
            label: 'Sepal.Width'
          },
          y: {
            label: 'Petal.Width'
          }
        },
        donut: {
          label: {
//            format: function (d, ratio) { return ""; }
          },
          title: "Iris Petal Width",
          width: 70
        }
      });

      setTimeout(function () {
        chart.load({
          columns: [
            ['data1', 30, 20, 50, 40, 60, 50],
          ]
        });
      }, 1000);

      setTimeout(function () {
        chart.unload({
          ids: 'virginica'
        });
      }, 2000);
}
donut();

function gauge() {
    var chart = c3.generate({
        bindto: '#gauge_charts',
        height: 190,
        data: {
          columns: [
            [ 'data', 91.4 ]
          ],
          type: 'gauge',
          onmouseover: function (d, i) { console.log("onmouseover", d, i, this); },
          onmouseout: function (d, i) { console.log("onmouseout", d, i, this); },
          onclick: function (d, i) { console.log("onclick", d, i, this); },
        },
        gauge: {
          label: {
//            format: function(value, ratio) {
//              return value;
//            },
//            extents: function (value, isMax) {
//                return value + '%';
//            },
//          show: false // to turn off the min/max labels.
          },
//          min: 0, // 0 is default, //can handle negative min e.g. vacuum / voltage / current flow / rate of change
//          max: 100, // 100 is default
//          units: ' %',
//          width: 39 // for adjusting arc thickness
        },
        color: {
          pattern: ['#07e0c4', '#ee3d50', '#ffbb44'], // the three color levels for the percentage values.
          threshold: {
//            unit: 'value', // percentage is default
//            max: 200, // 100 is default
            values: [30, 60, 90] // alternate first value is 'value'
          }
        }
      });

      var chart1 = c3.generate({
          bindto: '#chart1',
          data: {
              columns: [
                  ['data', 75.0]
              ],
              type: 'gauge',
          },
          gauge: {
              min: 50,
              max: 100
          }
      });

      var chart2 = c3.generate({
          bindto: '#chart2',
          data: {
              columns: [
                  ['data', 0.0]
              ],
              type: 'gauge',
          },
          gauge: {
              min: -100,
              max: 100
          }
      });

      var chart3 = c3.generate({
          bindto: '#chart3',
          data: {
              columns: [
                  ['data', -75.0]
              ],
              type: 'gauge',
          },
          gauge: {
              min: -100,
              max: -50
          }
      });

      var cycleDemo = function () {

        setTimeout(function () {
          d3.select('#chart .c3-chart-arcs-background')
            .transition()
            .style('fill', '#333');
        }, 1000);

        setTimeout(function () {
            chart.load({
              columns: [[ 'data', 10 ]]
            });
        }, 2000);

        setTimeout(function () {
            chart.load({
              columns: [[ 'data', 50 ]]
            });
        }, 3000);

        setTimeout(function () {
            chart.load({
              columns: [[ 'data', 91.4 ]]
            });
        }, 4000);

        setTimeout(function () {
          d3.select('#chart .c3-chart-arcs-background')
            .transition()
            .style('fill', '#e0e0e0');
        }, 5000);

        setTimeout(function () {
            chart.load({
              columns: [[ 'data', 0 ]]
            });
        }, 6000);

        setTimeout(function () {
            chart.load({
              columns: [[ 'data', 50 ]]
            });
        }, 7000);

        setTimeout(function () {
            chart.load({
              columns: [[ 'data', 91.4 ]]
            });
        }, 8000);

        setTimeout(function () {
            chart.load({
              columns: [[ 'data', 0 ]]
            });
        }, 9000);

        setTimeout(function () {
            chart.load({
              columns: [[ 'data', 50 ]]
            });
        }, 10000);

        setTimeout(function () {
            chart.load({
              columns: [[ 'data', 91.4 ]]
            });
        }, 11000);

        setTimeout(function () {
            chart.load({
              columns: [[ 'data', 0 ]]
            });
        }, 12000);

        setTimeout(function () {
            chart.load({
              columns: [[ 'data', 50 ]]
            });
        }, 13000);

        setTimeout(function () {
            chart.load({
              columns: [[ 'data', 91.4 ]]
            });
        }, 14000);

      }

      cycleDemo();
}

gauge();

function pie_short() {
    var sort = true;
      var generate = function () { return c3.generate({
        bindto: '#pie_short_charts',
        data: {
          columns: [
//            ["setosa", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
            ["versicolor", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
            ["virginica", 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8],
            ["setosa", 30],
//            ["versicolor", 40],
//            ["virginica", 50],
          ],
          type : 'pie',
        },
        color: {
          pattern: ['#e95f2b','#3b3f5c','#f58b22','#f8538d']
        },
        axis: {
          x: {
            label: 'Sepal.Width'
          },
          y: {
            label: 'Petal.Width'
          }
        },
        pie: {
          sort: sort,
          onmouseover: function (d, i) { console.log(d, i); },
          onmouseout: function (d, i) { console.log(d, i); },
          onclick: function (d, i) { console.log(d, i); },
        }
      }); }, chart = generate();

      setTimeout(function () {
        chart.load({
          columns: [
            ["setosa", 130],
          ]
        });
      }, 1000);

      setTimeout(function () {
        chart.unload({
          ids: 'virginica'
        });
      }, 2000);

      setTimeout(function () {
        chart.load({
          columns: [
            ["new data", 300],
          ]
        });
      }, 3000);

      setTimeout(function () {
        sort = false;
        chart = generate();
      }, 4000);

      setTimeout(function () {
        chart.load({
          columns: [
            ["setosa", 130],
          ]
        });
      }, 5000);

      setTimeout(function () {
        chart.unload({
          ids: 'virginica'
        });
      }, 6000);

      setTimeout(function () {
        chart.load({
          columns: [
            ["new data", 300],
          ]
        });
      }, 7000);
}

pie_short();


function timeseries_descendent() {
    var dates = ['date',
        1401908040000,
        1401907980000,
        1401907920000,
        1401907860000,
        1401907800000,
        1401907740000,
        1401907680000,
        1401907620000,
        1401907560000,
        1401907500000
      ];

      var chart = c3.generate({
        bindto: '#timeseries_descendent_charts',
        data: {
          x : 'date',
          columns: [
            dates,
            ['data1', 30, 200, 100, 400, 150, 250, 30, 200, 100, 400],
            ['data2', 130, 300, 200, 450, 250, 350, 130, 300, 200, 450]
          ],
          types: {
            data1: 'bar',
          }
        },
        color: {
          pattern: ['#07dabf','#e95f2b']
        },
        axis : {
          x : {
            type : 'timeseries',
            tick : {
              format : "%Y-%m-%d %H:%M:%S"
            }
          }
        }
      });
}

timeseries_descendent();