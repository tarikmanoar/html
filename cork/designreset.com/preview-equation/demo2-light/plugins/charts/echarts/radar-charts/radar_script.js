// Initialize after dom ready
var chartRadarfilled = echarts.init(document.getElementById('basic_filled_radar')); 
        
    option = {
        color: [ "#7c5ac2", "#ee3d50"],
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            x : 'center',
            data:['Ronaldo','Shepchenko']
        },
        calculable : true,
        polar : [
            {
                indicator : [
                    {text : 'attack', max  : 100},
                    {text : 'Defensive', max  : 100},
                    {text : 'Fitness', max  : 100},
                    {text : 'speed', max  : 100},
                    {text : 'power', max  : 100},
                    {text : 'skill', max  : 100}
                ],
                radius : 130
            }
        ],
        series : [
            {
                name: 'Full live player data',
                type: 'radar',
                itemStyle: {
                    normal: {
                        areaStyle: {
                            type: 'default'
                        }
                    }
                },
                data : [
                    {
                        value : [97, 42, 88, 94, 90, 86],
                        name : 'Shepchenko'
                    },
                    {
                        value : [97, 32, 74, 95, 88, 92],
                        name : 'Ronaldo'
                    }
                ]
            }
        ]
    };

    // Load data into the ECharts instance 
    chartRadarfilled.setOption(option); 

        $(window).on('resize', function(){
        if(chartRadarfilled != null && chartRadarfilled != undefined){
            chartRadarfilled.resize();
        }
    });
    
    
    
/*                  Basic Radar script              */



// Initialize after dom ready


    var chartRadarbasic = echarts.init(document.getElementById('basic_radar')); 
        
       option = {
            tooltip : {
                trigger: 'axis'
            },
            color: [ "#3862f5", "#00d1c1"],
            legend: {
                orient : 'vertical',
                x : 'left',
                data:['Budget allocation','Actual expenses']
            },
            polar : [
               {
                   indicator : [
                       { text: 'Research', max: 6000},
                       { text: 'Admin', max: 16000},
                       { text: 'IT', max: 30000},
                       { text: 'Customer service', max: 38000},
                       { text: 'Sales', max: 52000},
                       { text: 'Market', max: 25000}
                    ]
                }
            ],
            calculable : true,
            series : [
                {
                    name: 'Budget vs Overhead',
                    type: 'radar',
                    data : [
                        {
                            value : [4300, 10000, 28000, 35000, 50000, 19000],
                            name : 'Budget allocation'
                        },
                         {
                            value : [5000, 14000, 28000, 31000, 42000, 21000],
                            name : 'Actual expenses'
                        }
                    ]
                }
            ]
        };

    // Load data into the ECharts instance 
    chartRadarbasic.setOption(option); 

        $(window).on('resize', function(){
        if(chartRadarbasic != null && chartRadarbasic != undefined){
            chartRadarbasic.resize();
        }
    });
    
    