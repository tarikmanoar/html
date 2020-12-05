$(function () {
    $(".mapcontainer7").mapael({
        map: {
            name: "usa_states"
            , zoom: {
                enabled: true,
                maxLevel: 20
            }
            , defaultArea: {
                attrs: {
                    fill: "#6B98EA"
                    , stroke: "#fff"
                }
                , attrsHover: {
                    fill: "#3b3f5c"
                }
            }
            , defaultPlot: {
                type: "svg",
                path: "M 7.5,0 C 2.48,0 0,3.5 0,7.81 0,12.12 7.5,22 7.5,22 7.5,22 15,12.13 15,7.81 15,3.49 12.52,0 7.5,0 Z",
                width: 30,
                height: 44,
                attrs: {
                    fill: "#ffbb44",
                    transform: "r25"
                },
                attrsHover: {
                    transform: "...r360s2"
                }
            }
        },
        legend: {
            plot: {
                title: "American cities",
                slices: [{
                    label: "Value 1",
                    sliceValue: "Value 1"
                }, {
                    label: "Value 2",
                    sliceValue: "Value 2"
                }]
            }
        },
        plots: {
            'ny': {
                latitude: 40.717079,
                longitude: -74.00116,
                tooltip: {content: "New York"},
                value: "Value 1"
            },
            'an': {
                latitude: 61.2108398,
                longitude: -149.9019557,
                tooltip: {content: "Anchorage"},
                value: "Value 2"
            },
            'sf': {
                latitude: 37.792032,
                longitude: -122.394613,
                tooltip: {content: "San Francisco"},
                value: "Value 1"
            },
            'pa': {
                latitude: 19.493204,
                longitude: -154.8199569,
                tooltip: {content: "Pahoa"},
                value: "Value 2"
            },
            'la': {
                latitude: 34.025052,
                longitude: -118.192006,
                tooltip: {content: "Los Angeles"},
                value: "Value 1"
            },
            'dallas': {
                latitude: 32.784881,
                longitude: -96.808244,
                tooltip: {content: "Dallas"},
                value: "Value 2"
            },
            'miami': {
                latitude: 25.789125,
                longitude: -80.205674,
                tooltip: {content: "Miami"},
                value: "Value 2"
            },
            'washington': {
                latitude: 38.905761,
                longitude: -77.020746,
                tooltip: {content: "Washington"},
                value: "Value 2"
            },
            'seattle': {
                latitude: 47.599571,
                longitude: -122.319426,
                tooltip: {content: "Seattle"},
                value: "Value 1"
            }
        }
    });


    $('#refresh2').on('click', function () {

        // and delete some others ...
        var deletedPlots = ["paris", "lyon"];

        $(".mapcontainer7").trigger('update', [{
            mapOptions: {map: {defaultPlot:{attrs:{transform:'r55'}}}}, 
            animDuration: 1000
        }]);
    });


});