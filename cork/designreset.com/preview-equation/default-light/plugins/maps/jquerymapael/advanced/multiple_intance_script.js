$(function () {

    /*
     * Override default option example
     * Here we override defaultOptions for all instance!
     * => We want to set the stroke color different for all of our instance
     */
    $.mapael.prototype.defaultOptions.map.defaultArea.attrs.stroke = "#fff";

    /*
     * Override method example
     * Here we override the setTooltip() method for all instance !
     * => We want that area having a tooltip appears as red when mouse over
     */
    // Save setTooltip function for future use
    var baseSetTooltip = $.mapael.prototype.setTooltip;
    $.mapael.prototype.setTooltip = function(elem){
        // Save ref to Mapael object in self
        var self = this;
        // Some special processing for "path" element having a tooltip
        if (elem.type === "path") {
            elem.attrsHover.fill = "#FF0000";
        }
        // Call base Mapael function
        baseSetTooltip.call(self, elem);
    };


    $(".mapcontainer3").mapael({
        map: {
            name: "france_departments"
            , zoom: {
                enabled: true
            }
            , defaultPlot: {
                attrs: {
                    opacity: 0.6
                }
                , text: {
                    attrs: {
                        fill: "#505444"
                    }
                    , attrsHover: {
                        fill: "#000"
                    }
                }
            }
            , defaultArea: {
                attrs: {
                    fill: "#FFB88E"
                }
                , attrsHover: {
                    fill: "#3b3f5c"
                }
                , text: {
                    attrs: {
                        fill: "#505444"
                    }
                    , attrsHover: {
                        fill: "#000"
                    }
                }
            }
        },
        areas: {
            "department-56": {
                text: {content: "56"},
                tooltip: {content: "Morbihan (56)"}
            },
        },
        plots: {
            'paris': {
                latitude: 48.86,
                longitude: 2.3444,
                attrs: {
                    fill: "#ff3743",
                    "stroke-width": 1
                },
            },
            'lyon': {
                type: "circle",
                size: 50,
                latitude: 45.758888888889,
                longitude: 4.8413888888889,
                value: 700000,
                href: "http://fr.wikipedia.org/wiki/Lyon",
                tooltip: {content: "<span style=\"font-weight:bold;\">City :</span> Lyon"},
                attrs: {
                    fill: "#6156ce",
                    "stroke-width": 1
                },
                text: {content: "Lyon"}
            },
            'rennes': {
                type: "square",
                size: 20,
                latitude: 48.114166666667,
                longitude: -1.6808333333333,
                tooltip: {content: "<span style=\"font-weight:bold;\">City :</span> Rennes"},
                text: {content: "Rennes"},
                attrs: {
                    fill: "#25d5e4",
                    "stroke-width": 1
                },
                href: "http://fr.wikipedia.org/wiki/Rennes"
            }
        }
    });

    $('#refresh').on('click', function () {

        // Update some plots and areas attributes ...
        var updatedOptions = {'areas': {}, 'plots': {}};
        updatedOptions.areas["department-56"] = {
            tooltip: {
                content: "Morbihan (56) (2)"
            },
            attrs: {
                fill: "#4073ff"
            },
            text: {content: "56 (2)"}
        };
        updatedOptions.plots["rennes"] = {
            tooltip: {
                content: "Rennes (2)"
            },
            attrs: {
                fill: "#4073ff"
            }
            , text: {position: "top"}
            , size: 5
        };

        // add some new plots ...
        var newPlots = {
            "Limoge": {
                latitude: 45.834444,
                longitude: 1.261667,
                text: {content: "Limoge"},
                tooltip: {content: "Limoge"}
            }
            , "Dijon": {
                size: 60,
                latitude: 47.323056,
                longitude: 5.041944,
                text: {
                    content: "Dijon",
                    position: "left",
                    margin: 5
                }
            }
        }

        // and delete some others ...
        var deletedPlots = ["paris", "lyon"];

        $(".mapcontainer_refresh").trigger('update', [{
            mapOptions: updatedOptions,
            newPlots: newPlots,
            deletePlotKeys: deletedPlots,
            animDuration: 1000
        }]);
    });












    var $mapcontainer4 = $(".mapcontainer4");
    $mapcontainer4.mapael({
        map: {
            name: "france_departments"
            , zoom: {
                enabled: true,
                maxLevel: 10
            }
            , defaultPlot: {
                attrs: {
                    opacity: 0.6
                }
            }
            , defaultArea: {
                attrs: {
                    fill: "#F49499"
                }
                , attrsHover: {
                    fill: "#3b3f5c"
                }
                , text: {
                    attrs: {
                        fill: "#000"
                    }
                    , attrsHover: {
                        fill: "#000"
                    }
                }
            }
        },
        plots: {
            'paris': {
                latitude: 48.86,
                longitude: 2.3444,
                tooltip: {content: "<span style=\"font-weight:bold;\">City :</span> Paris"},
                text: {content: "Paris"}
            },
            'lyon': {
                latitude: 45.758888888889,
                longitude: 4.8413888888889,
                tooltip: {content: "<span style=\"font-weight:bold;\">City :</span> Lyon"},
                text: {content: "Lyon"}
            }
        }
    });

    $('#gotolyon1').on('click', function () {
        $mapcontainer4.trigger('zoom', {level: 10, latitude: 45.758888888889, longitude: 4.8413888888889});
    });

    $('#gotoparis1').on('click', function () {
        $mapcontainer4.trigger('zoom', {level: 10, latitude: 48.86, longitude: 2.3444});
    });

    $('#clearzoom1').on('click', function () {
        $mapcontainer4.trigger('zoom', {level: 0});
    });



    $(".mapcontainer5").mapael({
        map: {
            name: "usa_states"
            , defaultArea: {
                attrs: {
                    fill: "#25d5e4",
                    stroke: "#fff",
                }
                , attrsHover: {
                    fill: "#3b3f5c"
                }
            }
        },
        legend: {
            plot: [
                {
                    cssClass: 'population',
                    mode: 'horizontal',
                    title: "Population",
                    marginBottomTitle: 5,
                    slices: [{
                        size: 15,
                        legendSpecificAttrs: {
                            fill: '#e95f2b',
                            stroke: '#f4f4e8',
                            "stroke-width": 2
                        },
                        label: "< 10 000",
                        max: "10000"
                    }, {
                        size: 30,
                        legendSpecificAttrs: {
                            fill: '#e95f2b',
                            stroke: '#f4f4e8',
                            "stroke-width": 2
                        },
                        label: "> 10 000 and < 100 000",
                        min: "10000",
                        max: "100000"
                    }, {
                        size: 50,
                        legendSpecificAttrs: {
                            fill: '#e95f2b',
                            stroke: '#f4f4e8',
                            "stroke-width": 2
                        },
                        label: "> 100 000",
                        min: "100000"
                    }]
                }
                , {
                    cssClass: 'density',
                    mode: 'horizontal',
                    title: "Density",
                    marginBottomTitle: 5,
                    slices: [{
                        label: "< 50",
                        max: "50",
                        attrs: {
                            fill: "#6156ce"
                        },
                        legendSpecificAttrs: {
                            r: 25
                        }
                    }, {
                        label: "> 50 and < 500",
                        min: "50",
                        max: "500",
                        attrs: {
                            fill: "#ffbb44"
                        },
                        legendSpecificAttrs: {
                            r: 25
                        }
                    }, {
                        label: "> 500",
                        min: "500",
                        attrs: {
                            fill: "#f8538d"
                        },
                        legendSpecificAttrs: {
                            r: 25
                        }
                    }]
                }
            ]
        },
        plots: {
            'ny': {
                latitude: 40.717079,
                longitude: -74.00116,
                tooltip: {content: "New York"},
                value: [5000, 20]
            },
            'an': {
                latitude: 61.2108398,
                longitude: -149.9019557,
                tooltip: {content: "Anchorage"},
                value: [50000, 20]
            },
            'sf': {
                latitude: 37.792032,
                longitude: -122.394613,
                tooltip: {content: "San Francisco"},
                value: [150000, 20]
            },
            'pa': {
                latitude: 19.493204,
                longitude: -154.8199569,
                tooltip: {content: "Pahoa"},
                value: [5000, 200]
            },
            'la': {
                latitude: 34.025052,
                longitude: -118.192006,
                tooltip: {content: "Los Angeles"},
                value: [50000, 200]
            },
            'dallas': {
                latitude: 32.784881,
                longitude: -96.808244,
                tooltip: {content: "Dallas"},
                value: [150000, 200]
            },
            'miami': {
                latitude: 25.789125,
                longitude: -80.205674,
                tooltip: {content: "Miami"},
                value: [5000, 2000]
            },
            'washington': {
                latitude: 38.905761,
                longitude: -77.020746,
                tooltip: {content: "Washington"},
                value: [50000, 2000]
            },
            'seattle': {
                latitude: 47.599571,
                longitude: -122.319426,
                tooltip: {content: "Seattle"},
                value: [150000, 2000]
            },
            'test1': {
                latitude: 44.671504,
                longitude: -110.957968,
                tooltip: {content: "Test 1"},
                value: [5000, 2000]
            },
            'test2': {
                latitude: 40.667013,
                longitude: -101.465781,
                tooltip: {content: "Test 2"},
                value: [50000, 200]
            },
            'test3': {
                latitude: 38.362031,
                longitude: -86.875938,
                tooltip: {content: "Test 3"},
                value: [150000, 20]
            }
        }
    });

});