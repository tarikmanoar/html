 $(function() {
          
// basic scrollbar

$("#basic").mCustomScrollbar({
    autoHideScrollbar:true,
    theme:"rounded"
});

$("#vertical-scrollbar-2").mCustomScrollbar({
    autoHideScrollbar:true,
    theme:"dark-thin",
    // theme:"rounded"
});

// vertical scrollbar 

$("#vertical-scrollbar-3").mCustomScrollbar({
    scrollButtons:{enable:true,scrollType:"stepped"},
    keyboard:{scrollType:"stepped"},
    mouseWheel:{scrollAmount:188},
    theme:"rounded-dark",
    autoExpandScrollbar:true,
    snapAmount:188,
    snapOffset:65
});

// scrollbar position outside the div

$("#scrollbar-pos-outside-1").mCustomScrollbar({
    scrollButtons:{enable:true},
    theme:"light-3",
    scrollbarPosition:"outside"
});

// rounded dots with less momentum

$("#rounded-dots-less-momentum").mCustomScrollbar({
    theme:"rounded-dots",
    scrollInertia:400
});

// autocomplete

$("#autocomplete").autocomplete({
    open:function(e,ui){
        /* create the scrollbar each time autocomplete menu opens/updates */
        $(".ui-autocomplete").mCustomScrollbar({
            setHeight:182,
            theme:"light",
            autoExpandScrollbar:true
        });
    },
    response:function(e,ui){
        /* destroy the scrollbar after each search completes, before the menu is shown */
        $(".ui-autocomplete").mCustomScrollbar("destroy");
    },
    focus:function(e,ui){
        /* scroll via keyboard */
        if(!ui.item){
            var first=$(".ui-autocomplete li:first");
            first.trigger("mouseenter");
            $(this).val(first.data("uiAutocompleteItem").label);
        }
        var el=$(".ui-state-focus").parent();
        if(!el.is(":mcsInView")){
            $(".ui-autocomplete").mCustomScrollbar("scrollTo",el,{scrollInertia:0,timeout:0});
        }
    },
    close:function(e,ui){
        /* destroy the scrollbar each time autocomplete menu closes */
        $(".ui-autocomplete").mCustomScrollbar("destroy");
    },
    source:["Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia", "Botswana", "Bouvet Island", "Brazil", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Christmas Island", "Cocos Islands", "Colombia", "Comoros", "Congo", "Cook Islands", "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "France Metropolitan", "French Guiana", "French Polynesia", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Vatican City", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "North Korea", "South Korea", "Kuwait", "Kyrgyzstan", "Lao", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Moldova", "Monaco", "Mongolia", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Lucia", "Samoa", "San Marino", "Saudi Arabia", "Senegal", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia", "Spain", "Sri Lanka", "St. Helena", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turkey", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Western Sahara", "Yemen", "Yugoslavia", "Zambia", "Zimbabwe"]
});

// inline HTML Modal

$(".inline").colorbox({
    inline:true, 
    width:"70%",
    maxHeight:"80%",
    onComplete:function(){ 
        $("#cboxLoadedContent").mCustomScrollbar({
            live:true,
            theme:"inset-dark"
        });
    },
});



// button modals

$("#myModal .modal-body").mCustomScrollbar({
    setHeight:340,
    theme:"minimal-dark"
});

// dropdown

$(".selectpicker").selectpicker();

$(".dropdown-menu .dropdown-menu").mCustomScrollbar({
    setHeight:100,
    theme:"inset-dark",
});

// accordions

$("#accordion .panel-body").mCustomScrollbar({
    setHeight:300,
    theme:"dark-3"
});

// tabs

$("#myTab .tab-pane").mCustomScrollbar({
    setHeight:395,
    theme:"inset-2-dark"
});

// infinite scrollbar

$(".infinite_scrollbar").mCustomScrollbar({
    theme:"light-2",
    scrollButtons:{
        enable:true
    },
    callbacks:{
        onTotalScroll:function(){ addContent(this) },
        onTotalScrollOffset:20,
        alwaysTriggerOffsets:false
    }
});

function addContent(el){
    var c="<h2>Appended content</h2>";
    for(var i=0; i<3; i++){
        c+="<p>"+el.mcs.content.find("p:eq("+i+")").html()+"</p>";
    }
    c+="<p>End of appended content.</p>";
    el.mcs.content.append(c);
    $(".offset").appendTo(el.mcs.content);
}

// rtl direction

$("#right-to-left-dir").mCustomScrollbar({
    axis:"yx",
    dir: "rtl",
    theme:"light-thick"
});

// callbacks function

$(".callback_function").mCustomScrollbar({
    scrollButtons:{
        enable:true
    },
    callbacks:{
        onScrollStart:function(){ myCallback(this,"#onScrollStart") },
        onScroll:function(){ myCallback(this,"#onScroll") },
        onTotalScroll:function(){ myCallback(this,"#onTotalScroll") },
        onTotalScrollOffset:60,
        onTotalScrollBack:function(){ myCallback(this,"#onTotalScrollBack") },
        onTotalScrollBackOffset:50,
        whileScrolling:function(){ 
            myCallback(this,"#whileScrolling"); 
            $("#mcs-top").text(this.mcs.top);
            $("#mcs-dragger-top").text(this.mcs.draggerTop);
            $("#mcs-top-pct").text(this.mcs.topPct+"%");
            $("#mcs-direction").text(this.mcs.direction);
            $("#mcs-total-scroll-offset").text("60");
            $("#mcs-total-scroll-back-offset").text("50");
        },
        alwaysTriggerOffsets:false
    }
});

function myCallback(el,id){
    if($(id).css("opacity")<1){return;}
    var span=$(id).find("span");
    clearTimeout(timeout);
    span.addClass("on");
    var timeout=setTimeout(function(){span.removeClass("on")},350);
}

$(".callbacks a").click(function(e){
    e.preventDefault();
    $(this).parent().toggleClass("off");
    if($(e.target).parent().attr("id")==="alwaysTriggerOffsets"){
        var opts=$(".callback_function").data("mCS").opt;
        if(opts.callbacks.alwaysTriggerOffsets){
            opts.callbacks.alwaysTriggerOffsets=false;
        }else{
            opts.callbacks.alwaysTriggerOffsets=true;
        }
    }
});

})  