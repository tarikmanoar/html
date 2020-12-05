$(function () {
    $(".mapcontainer15").mapael({
        map: {
            name: "france_departments"
            , zoom: {
                enabled: true
            }
            , defaultArea: {
                attrs: {
                    fill: "#18d17f"
                    , stroke: "#fff"
                }
                , text: {
                    attrs: {
                        fill: "#505444"
                    }
                    , attrsHover: {
                        fill: "#3b3f5c"
                    }
                }
            },
            defaultPlot: {
                attrs: {
                    opacity: 0.6,
                    fill: "#3b3f5c"
                }
            },
        },

        plots: {
            'paris': {
                latitude: 48.86,
                longitude: 2.3444
            },
            'lyon': {
                latitude: 45.758888888889,
                longitude: 4.8413888888889,
            },
            'rennes': {
                latitude: 48.114166666667,
                longitude: -1.6808333333333,
            }
        },
        links: {
            'parislyon': {
                factor: -0.3
                , between: ['paris', 'lyon']
                , attrs: {
                    "stroke-width": 2,
                    "stroke": "#5247bd"
                }
            },
            'parisrennes': {
                factor: -0.5
                , between: ['paris', 'rennes']
                , attrs: {
                    "stroke-width": 2,
                    "stroke": "#5247bd"
                }
            }
        }
    });

    $('#refresh4').on('click', function () {

        // Update some plots and areas attributes ...
        var opt = {
            mapOptions: {
                'areas': {},
                'plots': {},
                'links': {
                    'parislyon': {
                        attrs: {
                            'stroke-width': 5
                            , 'stroke': '#5247bd'
                        }
                    }
                },

            }, 
            animDuration: 1000,
            'deleteLinkKeys': ['parisrennes'],
            'newLinks': {
                'renneslyon': {
                    factor: -0.5
                    , between: ['rennes', 'lyon']
                    , attrs: {
                        "stroke-width": 5
                        , 'stroke': '#5247bd'
                    }
                }
            }
        };

        $(".mapcontainer15").trigger('update', [opt]);
    });
});


$(function () {
    $maparea2 = $(".mapcontainer16");
    $maparea2.mapael({
        map: {
            name: "france_departments"
            , zoom: {
                enabled: true,
                maxLevel: 10
            }
            , defaultPlot: {
                attrs: {
                    opacity: 0.6,
                    fill: "#3232b7"
                }
            }
            , defaultArea: {
                attrs: {
                    fill: "#00b1f4"
                    , stroke: "#fff"
                }
                , text: {
                    attrs: {
                        fill: "#3232b7"
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

    $('#gotolyon').on('click', function () {
        $maparea2.trigger('zoom', {level: 10, latitude: 45.758888888889, longitude: 4.8413888888889});
    });

    $('#gotoparis').on('click', function () {
        $maparea2.trigger('zoom', {level: 10, latitude: 48.86, longitude: 2.3444});
    });

    $('#clearzoom').on('click', function () {
        $maparea2.trigger('zoom', {level: 0});
    });
});