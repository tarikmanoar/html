// Initialize after dom ready
var chartBasicanother = echarts.init(document.getElementById('another_basic_funnel')); 
    
option = {
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}%"
    },
    color : [
        '#00b1f4',
        '#ee3d50',
        '#7c5ac2',
        '#989ebf',
        '#24ccda'
    ],
    legend: {
        data : ['Show','Click on','access','advisory','Order'],
        padding: [5, 5, 60, 5],
    },
    calculable : true,
    series : [
        {
            name:'Funnel map',
            type:'funnel',
            x: '10%',
            y: 60,
            y2: 60,
            width: ' 80%',
            min: 0,
            max: 100,
            minSize: ' 0%',
            maxSize: ' 100%',
            sort : 'descending', // 'ascending', 'descending'
            gap : 10,
            itemStyle: {
                normal: {
                    // color: 各异,
                    borderColor: '#fff',
                    borderWidth: 1,
                    label: {
                        show: true,
                        position: 'inside'
                        // textStyle: null      // The default use of the global text style, see TEXTSTYLE
                    },
                    labelLine: {
                        show: false,
                        length: 10,
                        lineStyle: {
                            // color: 各异,
                            width: 1,
                            type: 'solid'
                        }
                    }
                },
                emphasis: {
                    // color: 各异,
                    borderColor: '#fff',
                    borderWidth: 5,
                    label: {
                        show: true,
                        formatter: '{b}:{c}%',
                        textStyle:{
                            fontSize:20,
                            color:'#000'
                        }
                    },
                    labelLine: {
                        show: true
                    }
                }
            },
            data:[
                {value:60, name:'access'},
                {value:40, name:'advisory'},
                {value:20, name:'Order'},
                {value:80, name:'Click on'},
                {value:100, name:'Show'}
            ]
        }
    ]
};

// Load data into the ECharts instance 
chartBasicanother.setOption(option); 

    $(window).on('resize', function(){
    if(chartBasicanother != null && chartBasicanother != undefined){
        chartBasicanother.resize();
    }
});




/*          Multiple Funnel Script          */


// Initialize after dom ready
var chartMulti = echarts.init(document.getElementById('multiples_funnels')); 
    
option = {
    color : [
    '#6156ce',
    '#07e0c4',
    '#00b1f4',
    '#f8538d',
    '#f58b22'
    ],
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}%"
    },
    legend: {
        data : ['Show','Click on','access','advisory','Order'],
    },
    calculable : true,
    series : [
        {
            name:'expected',
            type:'funnel',
            x: '10%',
            width: '80%',
            itemStyle: {
                normal: {
                    label: {
                        formatter: '{b} expected'
                    },
                    labelLine: {
                        show : false
                    },
                },
                emphasis: {
                    label: {
                        position:'inside',
                        formatter: '{b} expected : {c}%',
                        textStyle: {
                            color: '#000'
                        }
                    }
                }
            },
            data:[
                {value:60, name:'access'},
                {value:40, name:'advisory'},
                {value:20, name:'Order'},
                {value:80, name:'Click on'},
                {value:100, name:'Show'}
            ]
        },
        {
            name:'actual',
            type:'funnel',
            x: '10%',
            width: '80%',
            maxSize: '80%',
            itemStyle: {
                normal: {
                    borderColor: '#fff',
                    borderWidth: 2,
                    label: {
                        position: 'inside',
                        formatter: '{c}%',
                        textStyle: {
                            color: '#fff'
                        }
                    }
                },
                emphasis: {
                    label: {
                        position:'inside',
                        formatter: '{b}actual : {c}%'
                    }
                }
            },
            data:[
                {value:30, name:'access'},
                {value:10, name:'advisory'},
                {value:5, name:'Order'},
                {value:50, name:'Click on'},
                {value:80, name:'Show'}
            ]
        }
    ]
};

// Load data into the ECharts instance 
chartMulti.setOption(option); 

    $(window).on('resize', function(){
    if(chartMulti != null && chartMulti != undefined){
        chartMulti.resize();
    }
});