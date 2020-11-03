$(function () {
    $(".mapcontainer9").mapael({
        map: {
            name: "france_departments",
            zoom: {
                enabled: true
            },
            defaultArea: {
                attrs: {
                    fill: "#6156ce",
                    stroke: "#eaeef1",
                    cursor: "pointer"
                },
                attrsHover: {
                    animDuration: 0,
                    fill: "#888ea8"
                },
                text: {
                    attrs: {
                        cursor: "pointer",
                        "font-size": 10,
                        fill: "#000"
                    },
                    attrsHover: {
                        animDuration: 0
                    }
                },
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (mapElem.originalAttrs.fill == "#00a2ff") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#1f3892"
                                }
                            };
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#00a2ff"
                                }
                            };
                        }
                        $(".mapcontainer9").trigger('update', [{mapOptions: newData}]);
                    }
                }
            }
        },
        areas: {
            "department-29": {
                text: {
                    content: "dblclick",
                    position: "top"
                },
                attrs: {
                    fill: "#f8538d"
                },
                tooltip: {
                    content: "Finistère (29)"
                },
                eventHandlers: {
                    click: function () {
                    },
                    dblclick: function (e, id, mapElem, textElem) {
                        var newData = {
                            'areas': {}
                        };
                        if (mapElem.originalAttrs.fill == "#00a2ff") {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#1f3892"
                                }
                            };
                        } else {
                            newData.areas[id] = {
                                attrs: {
                                    fill: "#00a2ff"
                                }
                            };
                        }
                        $(".mapcontainer9").trigger('update', [{mapOptions: newData}]);
                    }
                }
            }
        }
    });
});



$(function () {
    $(".mapcontainer10").mapael({
        map: {
            name: "france_departments"
            , zoom: {
                enabled: true
            }
            , defaultPlot: {
                attrs: {
                    opacity: 0.6,
                    fill: "#00b1f4"
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
            , defaultArea: {
                attrs: {
                    fill: "#ffbb44"
                    , stroke: "#fff"
                }
                , attrsHover: {
                    fill : "#3b3f5c"
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
        areas: {
            "department-56": {
                text: {content: "56"},
                tooltip: {content: "Morbihan (56)"}
            },
        },
        plots: {
            'paris': {
                latitude: 48.86,
                longitude: 2.3444
            },
            'lyon': {
                type: "circle",
                size: 50,
                latitude: 45.758888888889,
                longitude: 4.8413888888889,
                value: 700000,
                href: "http://fr.wikipedia.org/wiki/Lyon",
                tooltip: {content: "<span style=\"font-weight:bold;\">City :</span> Lyon"},
                text: {content: "Lyon"}
            },
            'rennes': {
                type: "square",
                size: 20,
                latitude: 48.114166666667,
                longitude: -1.6808333333333,
                tooltip: {content: "<span style=\"font-weight:bold;\">City :</span> Rennes"},
                text: {content: "Rennes"},
                href: "http://fr.wikipedia.org/wiki/Rennes"
            }
        }
    });

    $('#refresh3').on('click', function () {

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

        $(".mapcontainer10").trigger('update', [{
            mapOptions: updatedOptions, 
            newPlots: newPlots, 
            deletePlotKeys: deletedPlots,
            animDuration: 1000
        }]);
    });
});