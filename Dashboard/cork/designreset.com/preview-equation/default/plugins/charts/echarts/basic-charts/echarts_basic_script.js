
/*
    ================================    
            Basic eCharts
    ================================

*/




/*          Basic Chart         */


// Initialize after dom ready

var chartBasic = echarts.init(document.getElementById('basic_chart')); 

option = {
            tooltip : {
                trigger: 'axis'
            },
            color : [ "#6156ce", "#ee3d50"],
            legend: {
                data:['Evaporation','Precipitation']
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    data : ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'Evaporation',
                    type:'bar',
                    data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
                    markPoint : {
                        data : [
                            {type : 'max', name: 'The maximum value'},
                            {type : 'min', name: 'Minimum value'}
                        ]
                    },
                    markLine : {
                        data : [
                            {type : 'average', name: 'average value'}
                        ]
                    }
                },
                {
                    name:'Precipitation',
                    type:'bar',
                    data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
                    markPoint : {
                        data : [
                            {name : 'The highest year', value : 182.2, xAxis: 7, yAxis: 183, symbolSize:18},
                            {name : 'Year minimum', value : 2.3, xAxis: 11, yAxis: 3}
                        ]
                    },
                    markLine : {
                        data : [
                            {type : 'average', name : 'average value'}
                        ]
                    }
                }
            ]
        };

// Load data into the ECharts instance 
chartBasic.setOption(option); 

    $(window).on('resize', function(){
    if(chartBasic != null && chartBasic != undefined){
        chartBasic.resize();
    }
});



/*          Sample eCharts             */



// configure for module loader

require.config({
    paths: {
        echarts: 'https://echarts.baidu.com/build/dist'
    }
});

// use
require(
    [
        'echarts',
        'echarts/chart/bar' // require the specific chart type
    ],
    function (ec) {
        // Initialize after dom ready
        var myChart = ec.init(document.getElementById('main')); 

        var option = {
            tooltip: {
                show: true
            },
            color : [ "#07e0c4"],
            legend: {
                data:['Sales']
            },
            xAxis : [
                {
                    type : 'category',
                    data : ["Shirts", "Sweaters", "Chiffon Shirts", "Pants", "High Heels", "Socks"]
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    "name":"Sales",
                    "type":"bar",
                    "data":[5, 20, 40, 10, 10, 20]
                }
            ]
        };

        // Load data into the ECharts instance 
        myChart.setOption(option); 
    }
);


/*          Ladder waterfall map echarts        */



// Initialize after dom ready


    var chartLadder = echarts.init(document.getElementById('ladder_chart')); 
        
    option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function (params) {
            var tar;
            if (params[1].value != '-') {
                tar = params[1];
            }
            else {
                tar = params[0];
            }
            return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
        }
    },
    color : [ "#24ccda", "#e9b02b"],
    legend: {
        data:['expenditure','income'],
        itemGap: 30
    },
    xAxis : [
        {
            type : 'category',
            splitLine: {show:false},
            data :  function (){
                var list = [];
                for (var i = 1; i <= 11; i++) {
                    list.push('November ' + i + ' day');
                }
                return list;
            }()
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'Auxiliary',
            type:'bar',
            stack: 'Total amount',
            itemStyle:{
                normal:{
                    barBorderColor:'rgba(0,0,0,0)',
                    color:'rgba(0,0,0,0)'
                },
                emphasis:{
                    barBorderColor:'rgba(0,0,0,0)',
                    color:'rgba(0,0,0,0)'
                }
            },
            data:[0, 900, 1245, 1530, 1376, 1376, 1511, 1689, 1856, 1495, 1292]
        },
        {
            name:'income',
            type:'bar',
            stack: 'Total amount',
            itemStyle : { normal: {label : {show: true, position: 'top'}}},
            data:[900, 345, 393, '-', '-', 135, 178, 286, '-', '-', '-']
        },
        {
            name:'expenditure',
            type:'bar',
            stack: 'Total amount',
            itemStyle : { normal: {label : {show: true, position: 'bottom'}}},
            data:['-', '-', '-', 108, 154, '-', '-', '-', 119, 361, 203]
        }
    ]
};

// Load data into the ECharts instance 
chartLadder.setOption(option); 

    $(window).on('resize', function(){
    if(chartLadder != null && chartLadder != undefined){
        chartLadder.resize();
    }
});



/*          Stacked column echarts          */



// Initialize after dom ready


var chartStack = echarts.init(document.getElementById('stack_chart')); 

option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效 --- Axis indicator, coordinate trigger effective
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow' --- The default is a straight line, select: 'line' | 'shadow'
        }
    },
    color : [ "#00d1c1", "#f8538d", "#3862f5", "#ffbb44", "#816cfd", "#25d5e4", "#ff6f00", "#3b3f5c", "#ff3743"],
    legend: {
        data:['direct interview','Mail marketing','Affiliate advertising','Video ad','search engine','Baidu','Google','must','other'],
        itemGap: 20,
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            data : ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'direct interview',
            type:'bar',
            data:[320, 332, 301, 334, 390, 330, 320]
        },
        {
            name:'Mail marketing',
            type:'bar',
            stack: 'advertising',
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'Affiliate advertising',
            type:'bar',
            stack: 'advertising',
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'Video ad',
            type:'bar',
            stack: 'advertising',
            data:[150, 232, 201, 154, 190, 330, 410]
        },
        {
            name:'search engine',
            type:'bar',
            data:[862, 1018, 964, 1026, 1679, 1600, 1570],
            markLine : {
                itemStyle:{
                    normal:{
                        lineStyle:{
                            type: 'dashed'
                        }
                    }
                },
                data : [
                    [{type : 'min'}, {type : 'max'}]
                ]
            }
        },
        {
            name:'Baidu',
            type:'bar',
            barWidth : 5,
            stack: 'search engine',
            data:[620, 732, 701, 734, 1090, 1130, 1120]
        },
        {
            name:'Google',
            type:'bar',
            stack: 'search engine',
            data:[120, 132, 101, 134, 290, 230, 220]
        },
        {
            name:'must',
            type:'bar',
            stack: 'search engine',
            data:[60, 72, 71, 74, 190, 130, 110]
        },
        {
            name:'other',
            type:'bar',
            stack: 'search engine',
            data:[62, 82, 91, 84, 109, 110, 120]
        }
    ]
};

// Load data into the ECharts instance 
chartStack.setOption(option); 

    $(window).on('resize', function(){
        if(chartStack != null && chartStack != undefined){
            chartStack.resize();
        }
});






/*          Timeline Echarts            */


// Initialize after dom ready

var chartTimeline = echarts.init(document.getElementById('timeline')); 
        
    option = {
    timeline:{
        data:[
            '2002-01-01','2003-01-01','2004-01-01','2005-01-01','2006-01-01',
            '2007-01-01','2008-01-01','2009-01-01','2010-01-01','2011-01-01'
        ],
        label : {
            formatter : function(s) {
                return s.slice(0, 4);
            }
        },
        autoPlay : true,
        playInterval : 1000
    },
    options:[
        {
            tooltip : {'trigger':'axis'},
            legend : {
                x:'right',
                itemGap: 20,
                'data':['GDP','financial','real estate','primary industry','Secondary industry','Tertiary Industry'],
                'selected':{
                    'GDP':true,
                    'financial':false,
                    'real estate':true,
                    'primary industry':false,
                    'Secondary industry':false,
                    'Tertiary Industry':false
                }
            },
            color : [ "#7c5ac2", "#ff6f00", "#24ccda", "#f8538d", "#00b1f4", "#ffbb44", "#3b3f5c", "#ff3743", "#18d17f"],
            calculable : true,
            grid : {'y':80,'y2':100},
            xAxis : [{
                'type':'category',
                'axisLabel':{'interval':0},
                'data':[
                    'Beijing','\nTianjin','Hebei','\nShanxi','Macau','\nLiaoning','Jilin','\nWuhan',
                    'Shanghai','\nJinan','Harbin','\nAnhui','Fujian','\nJiangxi','Shandong','\nHenan',
                    'Hubei','\nHunan','Xi An','\nGuangxi','Hainan','\nFoshan','Sichuan','\nGuizhou',
                    'Yunnan','\nTibet','Shaanxi','\nGansu','Qinghai','\nNingxia','Xinjiang'
                ]
            }],
            yAxis : [
                {
                    'type':'value',
                    'name':'GDP (billion yuan)',
                    'max':53500
                },
                {
                    'type':'value',
                    'name':'Other (billion)'
                }
            ],
            series : [
                {
                    'name':'GDP',
                    'type':'bar',
                    'markLine':{
                        symbol : ['arrow','none'],
                        symbolSize : [4, 2],
                        itemStyle : {
                            normal: {
                                lineStyle: {color:'orange'},
                                barBorderColor:'orange',
                                label:{
                                    position:'left',
                                    formatter:function(params){
                                        return Math.round(params.value);
                                    },
                                    textStyle:{color:'orange'}
                                }
                            }
                        },
                        'data':[{'type':'average','name':'average value'}]
                    },
                    'data': dataMap.dataGDP['2002']
                },
                {
                    'name':'financial','yAxisIndex':1,'type':'bar',
                    'data': dataMap.dataFinancial['2002']
                },
                {
                    'name':'real estate','yAxisIndex':1,'type':'bar',
                    'data': dataMap.dataEstate['2002']
                },
                {
                    'name':'primary industry','yAxisIndex':1,'type':'bar',
                    'data': dataMap.dataPI['2002']
                },
                {
                    'name':'Secondary industry','yAxisIndex':1,'type':'bar',
                    'data': dataMap.dataSI['2002']
                },
                {
                    'name':'Tertiary Industry','yAxisIndex':1,'type':'bar',
                    'data': dataMap.dataTI['2002']
                }
            ]
        },
        {
            title : {'text':'2003 National macroeconomic \nindicators'},
            series : [
                {'data': dataMap.dataGDP['2003']},
                {'data': dataMap.dataFinancial['2003']},
                {'data': dataMap.dataEstate['2003']},
                {'data': dataMap.dataPI['2003']},
                {'data': dataMap.dataSI['2003']},
                {'data': dataMap.dataTI['2003']}
            ]
        },
        {
            title : {'text':'2004 National macroeconomic \nindicators'},
            series : [
                {'data': dataMap.dataGDP['2004']},
                {'data': dataMap.dataFinancial['2004']},
                {'data': dataMap.dataEstate['2004']},
                {'data': dataMap.dataPI['2004']},
                {'data': dataMap.dataSI['2004']},
                {'data': dataMap.dataTI['2004']}
            ]
        },
        {
            title : {'text':'2005 National macroeconomic \nindicators'},
            series : [
                {'data': dataMap.dataGDP['2005']},
                {'data': dataMap.dataFinancial['2005']},
                {'data': dataMap.dataEstate['2005']},
                {'data': dataMap.dataPI['2005']},
                {'data': dataMap.dataSI['2005']},
                {'data': dataMap.dataTI['2005']}
            ]
        },
        {
            title : {'text':'2006 National macroeconomic \nindicators'},
            series : [
                {'data': dataMap.dataGDP['2006']},
                {'data': dataMap.dataFinancial['2006']},
                {'data': dataMap.dataEstate['2006']},
                {'data': dataMap.dataPI['2006']},
                {'data': dataMap.dataSI['2006']},
                {'data': dataMap.dataTI['2006']}
            ]
        },
        {
            title : {'text':'2007 National macroeconomic \nindicators'},
            series : [
                {'data': dataMap.dataGDP['2007']},
                {'data': dataMap.dataFinancial['2007']},
                {'data': dataMap.dataEstate['2007']},
                {'data': dataMap.dataPI['2007']},
                {'data': dataMap.dataSI['2007']},
                {'data': dataMap.dataTI['2007']}
            ]
        },
        {
            title : {'text':'2008 National macroeconomic \nindicators'},
            series : [
                {'data': dataMap.dataGDP['2008']},
                {'data': dataMap.dataFinancial['2008']},
                {'data': dataMap.dataEstate['2008']},
                {'data': dataMap.dataPI['2008']},
                {'data': dataMap.dataSI['2008']},
                {'data': dataMap.dataTI['2008']}
            ]
        },
        {
            title : {'text':'2009 National macroeconomic \nindicators'},
            series : [
                {'data': dataMap.dataGDP['2009']},
                {'data': dataMap.dataFinancial['2009']},
                {'data': dataMap.dataEstate['2009']},
                {'data': dataMap.dataPI['2009']},
                {'data': dataMap.dataSI['2009']},
                {'data': dataMap.dataTI['2009']}
            ]
        },
        {
            title : {'text':'2010 National macroeconomic \nindicators'},
            series : [
                {'data': dataMap.dataGDP['2010']},
                {'data': dataMap.dataFinancial['2010']},
                {'data': dataMap.dataEstate['2010']},
                {'data': dataMap.dataPI['2010']},
                {'data': dataMap.dataSI['2010']},
                {'data': dataMap.dataTI['2010']}
            ]
        },
        {
            title : {'text':'2011 National macroeconomic \nindicators'},
            series : [
                {'data': dataMap.dataGDP['2011']},
                {'data': dataMap.dataFinancial['2011']},
                {'data': dataMap.dataEstate['2011']},
                {'data': dataMap.dataPI['2011']},
                {'data': dataMap.dataSI['2011']},
                {'data': dataMap.dataTI['2011']}
            ]
        }
    ]
};

// Load data into the ECharts instance 
chartTimeline.setOption(option); 

    $(window).on('resize', function(){
    if(chartTimeline != null && chartTimeline != undefined){
        chartTimeline.resize();
    }
});
