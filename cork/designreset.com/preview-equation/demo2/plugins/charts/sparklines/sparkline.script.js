$(function() {

    $("#linespark").sparkline([5,6,7,9,9,5,3,3,4,4,6,7], {
    type: 'line',
    width: '150',
    height: '30',
    lineColor: '#07e0c4',
    lineWidth: 3,
    spotRadius: 3.5,
    fillColor: '#07e0c4',
    spotColor: '#6156ce',
    minSpotColor: '#6156ce',
    maxSpotColor: '#6156ce'});


    $("#barspark").sparkline([5,6,7,2,0,-4,-2,4], {
    type: 'bar',
    height: '30',
    barWidth: '10',
    barSpacing: 4,
    barColor: '#5247bd',
    negBarColor: '#f8538d'});

    $("#tristatespark").sparkline([1,1,0,1,-1,-1,1,-1,0,0,1,1], {
    type: 'tristate',
    height: '30',
    barWidth: '10',
    barSpacing: 4,
    negBarColor: '#3862f5',
    zeroBarColor: '#ee3d50',
    posBarColor: '#ffbb44',
    zeroAxis: false});


    $("#discretespark").sparkline([4,6,7,7,4,3,2,1,4,4 ,4,6,7,7,4,3,2,1,4,4, 4,6,7,7,4,3,2,1,4,4 ], {
    type: 'discrete',
    width: '200',
    height: '30',
    lineColor: '#0081e6'});

    $("#bulletspark").sparkline([10,12,12,9,7], {
    type: 'bullet',
    height: '30',
    targetWidth: 5,
    targetColor: '#ec2330',
    performanceColor: '#1f3892',
    rangeColors: ['#28d0db','#13a7eb','#576cf4 ']});



    $("#piespark").sparkline([1,1,2], {
    type: 'pie',
    height: '30',
    sliceColors: ['#f8538d','#24ccda','#816cfd'],
    offset: 90,
    borderWidth: 0,
    borderColor: '#f27171'});


    $("#boxspark").sparkline([4,27,34,52,54,59,61,68,78,82,85,87,91,93,100 ], {
    type: 'box',
    width: '120',
    height: '30',
    raw: false,
    showOutliers: false,
    boxLineColor: '#d3d3d3',
    boxFillColor: '#00b1f4',
    whiskerColor: '#ffbb44',
    medianColor: '#d3d3d3'});

    $("#barspark2").sparkline([5,6,7,2,0,-4,-2,4], {
    type: 'bar',
    height: '30',
    barWidth: 10,
    barSpacing: 4,
    zeroAxis: false,
    barColor: '#3b3f5c',
    negBarColor: '#f8538d'});

    $("#compositespark").sparkline([1,2,3,3,0,2,1,2,3,4,2,3], {
        type: 'bar',
        height: '30',
        barWidth: 10,
        barSpacing: 3,
        zeroAxis: false,
        barColor: '#816cfd'
    });
    $("#compositespark").sparkline([2,3,5,6,6,2,2,1,1,2,4,5], {
        type: 'line',
        fillColor: null,
        lineWidth: 1.4,
        spotRadius: 2.5,
        composite: true
    });

    $("#stackspark").sparkline([ [2, 1.1], [2, 1.3], [2.5, 1.5], [2.2, 1.2], [2.3, 1.4], [2.4, 1.3], [2.6, 1.2], [2.1, 1.4], [2, 1.3], [2, 1.2], [2.3, 1.3], [2.5, 1.5] ], {
        type: 'bar',
        height: '30',
        barWidth: 10,
        barSpacing: 4,
        zeroAxis: false,
        barColor: '#f58b22',
        stackedBarColor: ['#f58b22', '#3232b7']
    });


})