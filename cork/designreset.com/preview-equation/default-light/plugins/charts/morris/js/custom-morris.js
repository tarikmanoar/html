
// Area 1

Morris.Area({
    element: 'area1',
    data: [
        {x: '2010 Q4', y: 3, z: 7},
        {x: '2011 Q1', y: 3, z: 4},
        {x: '2011 Q2', y: null, z: 1},
        {x: '2011 Q3', y: 2, z: 5},
        {x: '2011 Q4', y: 8, z: 2},
        {x: '2012 Q1', y: 4, z: 4}
    ],
        lineColors: ['#3232b7', '#ee3d50'],
        xkey: 'x',
        ykeys: ['y', 'z'],
        labels: ['Y', 'Z']
}).on('click', function(i, row){
    console.log(i, row);
});


// Area 2

Morris.Area({
    element: 'area2',
    behaveLikeLine: true,
    data: [
        {x: '2011 Q1', y: 3, z: 3},
        {x: '2011 Q2', y: 2, z: 1},
        {x: '2011 Q3', y: 2, z: 4},
        {x: '2011 Q4', y: 3, z: 3}
    ],
    lineColors: ['#816cfd', '#ffbb44'],
    xkey: 'x',
    ykeys: ['y', 'z'],
    labels: ['Y', 'Z']
});


// Bar 

Morris.Bar({
    element: 'bar',
    data: [
        {x: '2011 Q1', y: 3, z: 2, a: 3},
        {x: '2011 Q2', y: 2, z: null, a: 1},
        {x: '2011 Q3', y: 0, z: 2, a: 4},
        {x: '2011 Q4', y: 2, z: 4, a: 3}
    ],
    barColors: ['#f8538d', '#3862f5', '#24ccda'], 
    xkey: 'x',
    ykeys: ['y', 'z', 'a'],
    labels: ['Y', 'Z', 'A']
}).on('click', function(i, row){
    console.log(i, row);
});


// donut

Morris.Donut({
    element: 'donut',
    data: [
        {value: 70, label: 'one'},
        {value: 15, label: 'two'},
        {value: 10, label: 'three'},
        {value: 5, label: 'four'}
    ],
    // backgroundColor: '#1F3892',
    labelColor: '#33b5e5',
    colors: [
        '#6156ce',
        '#ffbb44',
        '#e95f2b',
        '#00b1f4'
    ],
    formatter: function (x) { return x + "%"}
}).on('click', function(i, row){
    console.log(i, row);
});



// Negative values

var neg_data = [
    {"period": "2011-08-12", "a": 100},
    {"period": "2011-03-03", "a": 75},
    {"period": "2010-08-08", "a": 50},
    {"period": "2010-05-10", "a": 25},
    {"period": "2010-03-14", "a": 0},
    {"period": "2010-01-10", "a": -25},
    {"period": "2009-12-10", "a": -50},
    {"period": "2009-10-07", "a": -75},
    {"period": "2009-09-25", "a": -100}
];
Morris.Line({
    element: 'nv',
    data: neg_data,
    lineColors: ['#3b3f5c'],
    pointFillColors:['#ff3743'],
    xkey: 'period',
    ykeys: ['a'],
    labels: ['Series A'],
    units: '%'
});

// Value Goals

var decimal_data = [];
for (var x = 0; x <= 360; x += 10) {
    decimal_data.push({
        x: x,
        y: Math.sin(Math.PI * x / 180).toFixed(4)
    });
}
window.m = Morris.Line({
    element: 'vg',
    data: decimal_data,
    lineColors: ['#3862f5'],
    pointFillColors:['#f8538d'],
    xkey: 'x',
    ykeys: ['y'],
    labels: ['sin(x)'],
    parseTime: false,
    goals: [-1, 0, 1]
});


// Formatting Non-date Arbitrary X-axis 

var day_data = [
    {"elapsed": "I", "value": 34},
    {"elapsed": "II", "value": 24},
    {"elapsed": "III", "value": 3},
    {"elapsed": "IV", "value": 12},
    {"elapsed": "V", "value": 13},
    {"elapsed": "VI", "value": 22},
    {"elapsed": "VII", "value": 5},
    {"elapsed": "VIII", "value": 26},
    {"elapsed": "IX", "value": 12},
    {"elapsed": "X", "value": 19}
];
Morris.Line({
    element: 'f-n-d-a-x-axis',
    data: day_data,
    lineColors: ['#ffbb44'],
    pointFillColors:['#816cfd'],
    xkey: 'elapsed',
    ykeys: ['value'],
    labels: ['value'],
    parseTime: false
});


//  Displaying X Labels Diagonally (Bar Chart) 

/* data stolen from http://howmanyleft.co.uk/vehicle/jaguar_'e'_type */
var day_data = [
    {"period": "2012-10-01", "licensed": 3407, "sorned": 660},
    {"period": "2012-09-30", "licensed": 3351, "sorned": 629},
    {"period": "2012-09-29", "licensed": 3269, "sorned": 618},
    {"period": "2012-09-20", "licensed": 3246, "sorned": 661},
    {"period": "2012-09-19", "licensed": 3257, "sorned": 667},
    {"period": "2012-09-18", "licensed": 3248, "sorned": 627},
    {"period": "2012-09-17", "licensed": 3171, "sorned": 660},
    {"period": "2012-09-16", "licensed": 3171, "sorned": 676},
    {"period": "2012-09-15", "licensed": 3201, "sorned": 656},
    {"period": "2012-09-10", "licensed": 3215, "sorned": 622}
];
Morris.Bar({
    element: 'd-x-l-d',
    data: day_data,
    barColors: ['#5247bd', '#ee3d50', '#24ccda'],
    xkey: 'period',
    ykeys: ['licensed', 'sorned'],
    labels: ['Licensed', 'SORN'],
    xLabelAngle: 60
});


//  Daylight-savings time 
Morris.Area({
    element: 'daylight-savings',
    data: [
        {x: '2013-03-30 22:00:00', y: 3, z: 3},
        {x: '2013-03-31 00:00:00', y: 2, z: 0},
        {x: '2013-03-31 02:00:00', y: 0, z: 2},
        {x: '2013-03-31 04:00:00', y: 4, z: 4}
    ],
    lineColors: ['#e95f2b', '#25d5e4'],
    xkey: 'x',
    ykeys: ['y', 'z'],
    labels: ['Y', 'Z']
});