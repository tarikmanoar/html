$('#coupons-report').DataTable( {
    dom: '<"row"<"col-md-12"<"row"<"col-md-6"B><"col-md-6"f> > ><"col-md-12"rt> <"col-md-12"<"row"<"col-md-5 mb-md-0 mb-5"i><"col-md-7"p>>> >',
    buttons: {
        buttons: [
            { extend: 'csv', className: 'btn btn-default btn-rounded btn-sm mb-4' },
            { extend: 'excel', className: 'btn btn-default btn-rounded btn-sm mb-4' }
        ]
    },
    "language": {
        "paginate": {
          "previous": "<i class='flaticon-arrow-left-1'></i>",
          "next": "<i class='flaticon-arrow-right'></i>"
        },
        "info": "Showing page _PAGE_ of _PAGES_"
    }

} );

$("#n-progress-success").sparkline([2, 6, 8, 10, 14, 6, 19, 20, 15, 25, 15, 30, 30], {
    type: 'line',
    width: '100',
    height: '40',
    lineColor: '#3862f5',
    lineWidth: 2,
    spotRadius: 4,
    fillColor: 'transparent',
    spotColor: '#00b1f4',
    minSpotColor: 'transparent',
    maxSpotColor: 'transparent',
    highlightSpotColor: '#a9b8fa',
    highlightLineColor: '#343f55',
    drawNormalOnTop: false
});

$("#n-progress-failed").sparkline([2, 6, 8, 10, 14, 6, 20, 15, 30, 30, 20, 15], {
    type: 'line',
    width: '100',
    height: '40',
    lineColor: '#ffbb44',
    lineWidth: 2,
    spotRadius: 4,
    fillColor: 'transparent',
    spotColor: '#ee3d49',
    minSpotColor: 'transparent',
    maxSpotColor: 'transparent',
    highlightSpotColor: '#a9b8fa',
    highlightLineColor: '#343f55',
    drawNormalOnTop: false
});

$("#n-progress-most-active").sparkline([2, 6, 8, 10, 14, 6, 19, 20, 15, 25, 15, 30, 30, 60], {
    type: 'line',
    width: '100',
    height: '40',
    lineColor: '#775add',
    lineWidth: 2,
    spotRadius: 4,
    fillColor: 'transparent',
    spotColor: '#ab5bd6',
    minSpotColor: 'transparent',
    maxSpotColor: 'transparent',
    highlightSpotColor: '#a9b8fa',
    highlightLineColor: '#343f55',
    drawNormalOnTop: false
});