/**
*
*	PIE CHART EXAMPLES	
*
*/



// 1. SIMPLE PIE CHART

var data = {
  series: [5, 3, 4]
};

var options = {
	height: '300px',
  	labelInterpolationFnc: function(value) {
    	return Math.round(value / data.series.reduce(sum) * 100) + '%';
  	}
};

var sum = function(a, b) { return a + b };

new Chartist.Pie( '#s-p-data-chart', data, options );




// 2. PIE CHART WITH CUSTOM LABELS

var data = {
  labels: ['Bananas', 'Apples', 'Grapes'],
  series: [20, 15, 40]
};

var options = {
	height: '300px',
  	labelInterpolationFnc: function(value) {
    	return value[0]
  	}
};

var responsiveOptions = [
  ['screen and (min-width: 640px)', {
    chartPadding: 30,
    labelOffset: 100,
    labelDirection: 'explode',
    labelInterpolationFnc: function(value) {
      return value;
    }
  }],
  ['screen and (min-width: 1024px)', {
    labelOffset: 80,
    chartPadding: 20
  }]
];

new Chartist.Pie( '#p-c-c-l-data-chart', data, options, responsiveOptions );

// 3. GAUGE CHART

var data = {
  series: [20, 10, 30, 40]
};

var options =  {
  donut: true,
  height: '200px',
  donutWidth: 60,
  startAngle: 270,
  total: 200,
  showLabel: false
};


new Chartist.Pie( '#g-data-chart', data , options );



// 4. GAUGE CHART USING FILL



new Chartist.Pie('#gauge-using-fill', {
  series: [20, 15, 25, 40]
}, {
  donut: true,
  donutWidth: 60,
  donutSolid: true,
  startAngle: 270,
  total: 200,
  height: "200px",
  showLabel: true
});