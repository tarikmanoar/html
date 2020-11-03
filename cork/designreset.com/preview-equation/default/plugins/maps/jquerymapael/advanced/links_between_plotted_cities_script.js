$(function () {
    $(".mapcontainer6").mapael({
        map: {
            name: "world_countries",
            defaultArea: {
                attrs: {
                    fill: "#08ddc1"
                    , stroke: "#fff"
                },
                attrsHover: {
                    fill: "#515365"
                }
            }
            // Default attributes can be set for all links
            , defaultLink: {
                factor: 0.4
                , attrsHover: {
                    stroke: "#000"
                }
            }
            , defaultPlot: {
                text: {
                    attrs: {
                        fill: "#000"
                    },
                    attrsHover: {
                        fill: "#000"
                    }
                }
            },
            afterInit : function($self, paper, areas, plots, options) {
                paper.path("M480.2017888,96.48841999999999C293.3258489600001,-59.917403935998664,136.92002502399998,126.958535904,136.92002502399998,126.958535904").attr({stroke:"#e95f2b", "stroke-width":5});
                paper.path("M480.2017888,96.48841999999999C368.61508769999966,44.874023059996944,270.56158400000004,119.04374899999999,270.56158400000004,119.04374899999999").attr({stroke:"#e95f2b", "stroke-width":5});
                paper.path("M508.047438464,115.84851533899999C389.36651651519816,188.93021776938986,253.02398515200002,160.002538875,253.02398515200002,160.002538875").attr({stroke:"#e95f2b", "stroke-width":5});
                paper.path("M458.882520896,162.976714895C474.3342749164981,251.8236011787016,560,280,560,280").attr({stroke:"#e95f2b", "stroke-width":5});
                paper.path("M480.2017888,96.48841999999999C268.6653616432,74.79635652100006,341.86261536,274.446970546,341.86261536,274.446970546").attr({stroke:"#e95f2b", "stroke-width":5});


                paper.path("M889.761584,324.37350100000003C912.2965976068016,222.24734804539975,858.183226112,132.752538246,858.183226112,132.752538246").attr({stroke:"#6156ce", "stroke-width":6});
                
                paper.path("M889.761584,324.37350100000003C831.5733456528925,288.0160282021079,791.844769024,232.075192409,791.844769024,232.075192409").attr({stroke:"#6156ce", "stroke-width":6});
                
                paper.path("M889.761584,324.37350100000003C769.9608132334045,281.5613565154948,712.73414784,167.938237567,712.73414784,167.938237567").attr({stroke:"#6156ce", "stroke-width":6});
                
                paper.path("M889.761584,324.37350100000003C854.8297105795992,185.8827733926006,734.023369408,109.68733162199999,734.023369408,109.68733162199999").attr({stroke:"#6156ce", "stroke-width":6});
            }
        },
        plots: {
            'paris': {
                latitude: 48.86,
                longitude: 2.3444,
                tooltip: {content: "Paris<br />Population: 500000000"},
                attrs: {
                    fill:"#e95f2b"
                }
            },
            'newyork': {
                latitude: 40.667,
                longitude: -73.833,
                tooltip: {content: "New york<br />Population: 200001"},
                attrs: {
                    fill:"#e95f2b"
                }
            },
            'sanfrancisco': {
                latitude: 37.792032,
                longitude: -122.394613,
                tooltip: {content: "San Francisco"},
                attrs: {
                    fill:"#e95f2b"
                }
            },
            'brasilia': {
                latitude: -15.781682,
                longitude: -47.924195,
                tooltip: {content: "Brasilia<br />Population: 200000001"},
                attrs: {
                    fill:"#e95f2b"
                }
            },
            'roma': {
                latitude: 41.827637,
                longitude: 12.462732,
                tooltip: {content: "Roma"},
                attrs: {
                    fill:"#e95f2b"
                }
            },
            'miami': {
                latitude: 25.789125,
                longitude: -80.205674,
                tooltip: {content: "Miami"},
                attrs: {
                    fill:"#e95f2b"
                }
            },

            // Size=0 in order to make plots invisible
            'tokyo': {
                latitude: 35.687418,
                longitude: 139.692306,
                size: 0,
                text: {content: 'Tokyo'},
                attrs: {
                    fill:"#6156ce"
                }
            },
            'sydney': {
                latitude: -33.917,
                longitude: 151.167,
                size: 0,
                text: {content: 'Sydney'},
                attrs: {
                    fill:"#6156ce"
                }
            },
            'plot1': {
                latitude: 22.906561,
                longitude: 86.840170,
                size: 0,
                text: {content: 'Plot1', position: 'left', margin: 5},
                attrs: {
                    fill:"#6156ce"
                }
            },
            'plot2': {
                latitude: -0.390553,
                longitude: 115.586762,
                size: 0,
                text: {content: 'Plot2'},
                attrs: {
                    fill:"#77edb0"
                }
            },
            'plot3': {
                latitude: 44.065626,
                longitude: 94.576079,
                size: 0,
                text: {content: 'Plot3'},
                attrs: {
                    fill:"#77edb0"
                }
            }
        },
        // Links allow you to connect plots between them
        links: {
            'link1': {
                factor: -0.3
                // The source and the destination of the link can be set with a latitude and a longitude or a x and a y ...
                , between: [{latitude: 24.708785, longitude: -5.402427}, {x: 560, y: 280}]
                , attrs: {
                    "stroke-width": 2
                }
                , tooltip: {content: "Link"}
            }
            , 'parisnewyork': {
                // ... Or with IDs of plotted points
                factor: -0.3
                , between: ['paris', 'newyork']
                , attrs: {
                    "stroke-width": 2
                }
                , tooltip: {content: "Paris - New-York"}
            }
            , 'parissanfrancisco': {
                // The curve can be inverted by setting a negative factor
                factor: -0.5
                , between: ['paris', 'sanfrancisco']
                , attrs: {
                    "stroke-width": 4
                }
                , tooltip: {content: "Paris - San - Francisco"}
            }
            , 'parisbrasilia': {
                factor: -0.8
                , between: ['paris', 'brasilia']
                , attrs: {
                    "stroke-width": 1
                }
                , tooltip: {content: "Paris - Brasilia"}
            }
            , 'romamiami': {
                factor: 0.2
                , between: ['roma', 'miami']
                , attrs: {
                    "stroke-width": 4
                }
                , tooltip: {content: "Roma - Miami"}
            }
            , 'sydneyplot1': {
                factor: -0.2
                , between: ['sydney', 'plot1']
                , attrs: {
                    stroke: "#a4e100",
                    "stroke-width": 3,
                    "stroke-linecap": "round",
                    opacity: 0.6
                }
                , tooltip: {content: "Sydney - Plot1"}
            }
            , 'sydneyplot2': {
                factor: -0.1
                , between: ['sydney', 'plot2']
                , attrs: {
                    stroke: "#a4e100",
                    "stroke-width": 8,
                    "stroke-linecap": "round",
                    opacity: 0.6
                }
                , tooltip: {content: "Sydney - Plot2"}
            }
            , 'sydneyplot3': {
                factor: 0.2
                , between: ['sydney', 'plot3']
                , attrs: {
                    stroke: "#a4e100",
                    "stroke-width": 4,
                    "stroke-linecap": "round",
                    opacity: 0.6
                }
                , tooltip: {content: "Sydney - Plot3"}
            }
            , 'sydneytokyo': {
                factor: 0.2
                , between: ['sydney', 'tokyo']
                , attrs: {
                    stroke: "#a4e100",
                    "stroke-width": 6,
                    "stroke-linecap": "round",
                    opacity: 0.6
                }
                , tooltip: {content: "Sydney - Plot2"}
            }
        }
    });
});