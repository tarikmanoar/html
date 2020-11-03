$.notify.addStyle("metro", {
    html:
        "<div>" +
            "<div class='image' data-notify-html='image'/>" +
            "<div class='text-wrapper'>" +
                "<div class='title' data-notify-html='title'/>" +
                "<div class='text' data-notify-html='text'/>" +
            "</div>" +
        "</div>",
    classes: {
        error: {
            "color": "#fff !important",
            "background-color": "#ee3d49",
            "border": "1px solid #ee3d49"
        },
        success: {
            "background-color": "#18d17f",
            "border": "1px solid #18d17f",
            "color": "#fff"
        },
        info: {
            "color": "#fff !important",
            "background-color": "#00b1f4",
            "border": "1px solid #00b1f4"
        },
        warning: {
            "color": "#fff !important",
            "background-color": "#ffbb44",
            "border": "1px solid #ffbb44"
        },
        black: {
            "color": "#fff !important",
            "background-color": "#211b42",
            "border": "1px solid #211b42"
        },
        white: {
            "background-color": "#3862f5",
            "border": "1px solid #3862f5",
            "color": "#fff"
        }
    }
});