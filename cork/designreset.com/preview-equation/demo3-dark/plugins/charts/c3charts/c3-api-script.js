function api_axis_range() {
    var chart = c3.generate({
      bindto: '#api_axis_range_charts',
      data: {
        columns: [
          ['data1', 30, 200, 100, 400, 150, 250],
          ['data2', 50, 20, 10, 40, 15, 25]
        ],
        axes: {
          data1: 'y',
          data2: 'y2',
        }
      },
      color: {
        pattern: ['#5247bd','#f8538d']
      },
      axis: {
        x: {
          label: 'X Label'
        },
        y: {
          label: {
            text: 'Y Axis Label',
            position: 'outer-middle'
          }
        },
        y2: {
          show: true,
          label: {
            text: 'Y2 Axis Label',
            position: 'outer-middle'
          }
        }
      },
      tooltip: {
//          enabled: false
      },
      zoom: {
//          enabled: true
      },
      subchart: {
//          show: true
      }
    });

    setTimeout(function () {
      chart.axis.max(500);
    }, 1000);

    setTimeout(function () {
      chart.axis.min(-500);
    }, 2000);

    setTimeout(function () {
      chart.axis.max({y: 600, y2: 100});
    }, 3000);

    setTimeout(function () {
      chart.axis.min({y: -600, y2: -100});
    }, 4000);

    setTimeout(function () {
      chart.axis.range({max: 1000, min: -1000});
    }, 5000);

    setTimeout(function () {
      chart.axis.range({min: {y: 1000}, max: {y: 2000}});
    }, 6000);

    setTimeout(function () {
      chart.axis.range({max: {y: 600, y2: 100}, min: {y: -100, y2: 0}});
    }, 7000);
}

api_axis_range();

/*--Api Flow charts*/
function api_flow() {
    var padding = {}, types = {}, chart, generate = function () { return c3.generate({
      bindto: '#api_flow_charts',
      data: {
        columns: [
          ['data1'],
          ['data2'],
        ],
        types: types,
        labels: true
      },
      color: {
        pattern: ['#e95f2b','#816cfd','#07e0c4']
      },
      bar: {
        width: 10
      },
      axis: {
        x: {
          padding: padding
        },
        y: {
/*
          min: -100,
          max: 1000
*/
        }
      },
      grid: {
        x: {
          show: true,
          lines: [{value: 3, text:'Label 3'}, {value: 4.5, text: 'Label 4.5'}]
        },
        y: {
          show: true
        }
      },
      regions: [
        {start:2, end:4, class:'region1'},
        {start:100, end:200, axis:'y'},
      ],
    });
    };

  function run() {

    chart = generate();

    setTimeout(function () {
      // Load only one data
      chart.flow({
        rows: [
          ['data1', 'data2', 'data3'],
          [500, 100, 200],
          [200, null, null],
          [100, 50, null] 
        ],
        duration: 1500,

        done: function () {
          // Load 2 data without data2 and remove 1 data
          chart.flow({
            columns: [
              ['data1', 200, 300],
              ['data3', 100, 100]
            ],
            length: 0,
            duration: 1500,

            done: function () {
              chart.flow({
                columns: [
                  ['data1', 200, 300],
                  ['data2', 200, 300],
                  ['data3', 100, 100]
                ],
                length: 2,
                duration: 1500,
                done: function () {

                  chart.flow({
                    columns: [
                      ['data1', 500],
                      ['data2', 100],
                      ['data3', 200]
                    ],
                    length: 1,
                    duration: 1500,
                  });
                }

              });
            }// done

          });
        },

      });
    }, 1000);

    setTimeout(function () {
      chart.flow({
        columns: [
          ['data1', 250],
          ['data2', 350],
          ['data3', 150]
        ],
        length: 0
      });
    }, 9000);

    setTimeout(function () {
      chart.flow({
        columns: [
          ['data1', 100],
          ['data2', 50],
          ['data3', 300]
        ],
        length: 2
      });
    }, 10000);

    setTimeout(function () {
      chart.flow({
        columns: [
          ['data1', 600],
          ['data2', 400],
          ['data3', 500]
        ],
        to: 2,
      });
    }, 11000);

    setTimeout(function () {
      chart.flow({
        columns: [
          ['data1', 100],
          ['data2', 200],
          ['data3', 300]
        ]
      });
    }, 12000);

    setTimeout(function () {
      chart = generate();
    }, 13000);

    setTimeout(function () {
      chart.flow({
        columns: [
          ['data1', 500, 100],
          ['data2', 100, 200],
          ['data3', 200, 300],
        ],
        duration: 1500,
        done: function () {
          chart.flow({
            columns: [
              ['data1', 200],
              ['data3', 100]
            ],
//              duration: 1000,
            length: 1
          });
        },
      });
    }, 14000);

    setTimeout(function () {
      chart.flow({
        columns: [
          ['data1', 200],
          ['data2', 300],
          ['data3', 100]
        ],
        to: 1,
      });
    }, 18000);

    setTimeout(function () {
      chart.flow({
        columns: [
          ['data1', 200],
          ['data2', 300],
          ['data3', 400]
        ]
      });
    }, 19000);

  }

  run();

  // Test for no padding
  setTimeout(function () {
    padding = {left: 0, right: 0};
    run();
  }, 22000);

  // Test for other chart types
  setTimeout(function () {
    types = {
      data2: 'area',
      data3: 'bar',
    };
    run();
  }, 45000);
}

api_flow();


/*--Api Transform charts--*/
function api_transform() {
    var chart = c3.generate({
      bindto: '#api_transform_charts',
      data: {
        columns: [
          ['data1', 30, 200, 100, 400, 150, 250],
          ['data2', 50, 20, 10, 40, 15, 25]
        ],
      },
      color: {
        pattern: ['#ff3743','#00b1f4']
      },
    });

    setTimeout(function () {
      chart.transform('bar');
    }, 1000);

    setTimeout(function () {
      chart.transform('pie');
    }, 2000);

    setTimeout(function () {
      chart.transform('donut');
    }, 3000);

    setTimeout(function () {
      chart.transform('area');
    }, 4000);

    setTimeout(function () {
      chart.transform('spline');
    }, 5000);

    setTimeout(function () {
      chart = c3.generate({
        data: {
          columns: [
            ['data1', 30, 200, 100, 400, 150, 250],
            ['data2', 50, 20, 10, 40, 15, 25],
            ['data1_x', 50, 20, 10, 40, 15, 25],
            ['data2_x', 30, 200, 100, 400, 150, 250],
          ],
          xs: {
            data1: 'data1_x',
            data2: 'data2_x',
          },
          type: 'scatter'
        },
      });
    }, 7000);

    setTimeout(function () {
      chart.transform('pie');
    }, 8000);

    setTimeout(function () {
      chart.transform('scatter');
    }, 9000);
}

api_transform();
  