$(function () {
    $mapcontainer = $(".mapcontainer8");
    $mapcontainer.mapael({
        map: {
            name: "usa_states"
            , zoom: {
                enabled: true,
                maxLevel: 10,
                init: {
                    latitude: 40.717079,
                    longitude: -74.00116,
                    level: 10
                }
            },
             defaultArea: {
                attrs: {
                    fill: "#e95f2b"
                },
                attrsHover: {
                    fill: "#888ea8"
                }
            }
        },
        plots: {
            'ny': {
                latitude: 40.717079,
                longitude: -74.00116,
                tooltip: {content: "New York"},
                text: {content: "New-York", attrs: {fill: "#000"}}
            }
        }
    });
});