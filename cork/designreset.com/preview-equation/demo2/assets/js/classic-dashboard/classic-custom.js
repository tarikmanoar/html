var bar;$(".active-task .active-task-body .a-t-scroll").mCustomScrollbar({axis:"yx",autoHideScrollbar:!0,setHeight:509}),$(".customer-feedback-list .customer-feedback-list-body .c-f-l-scroll").mCustomScrollbar({axis:"yx",autoHideScrollbar:!0,setHeight:595}),AmCharts.makeChart("t-sales-chart",{type:"serial",theme:"light",dataProvider:[{day:1,totalSales:120},{day:2,totalSales:124},{day:3,totalSales:127},{day:4,totalSales:122},{day:5,totalSales:121},{day:6,totalSales:123},{day:7,totalSales:118},{day:8,totalSales:113},{day:9,totalSales:122},{day:10,totalSales:125,bullet:"round"}],categoryField:"day",autoMargins:!1,marginLeft:0,marginRight:5,marginTop:0,marginBottom:0,graphs:[{valueField:"totalSales",bulletField:"bullet",showBalloon:!1,lineColor:"#00b1f4"}],valueAxes:[{gridAlpha:0,axisAlpha:0}],categoryAxis:{gridAlpha:0,axisAlpha:0,startOnAxis:!0}}),AmCharts.makeChart("t-order-chart",{type:"serial",theme:"light",dataProvider:[{day:1,totalOrder:160},{day:2,totalOrder:224},{day:3,totalOrder:197},{day:4,totalOrder:112},{day:5,totalOrder:161},{day:6,totalOrder:113},{day:7,totalOrder:178},{day:8,totalOrder:163},{day:9,totalOrder:200},{day:10,totalOrder:155,bullet:"round"}],categoryField:"day",autoMargins:!1,marginLeft:0,marginRight:5,marginTop:0,marginBottom:0,graphs:[{valueField:"totalOrder",bulletField:"bullet",showBalloon:!1,lineColor:"#00b1f4"}],valueAxes:[{gridAlpha:0,axisAlpha:0}],categoryAxis:{gridAlpha:0,axisAlpha:0,startOnAxis:!0}}),AmCharts.makeChart("profile-chart",{type:"serial",theme:"light",dataProvider:[{day:1,totalOrder:160},{day:2,totalOrder:224},{day:3,totalOrder:197},{day:4,totalOrder:112},{day:5,totalOrder:161},{day:6,totalOrder:113},{day:7,totalOrder:178},{day:8,totalOrder:163},{day:9,totalOrder:200},{day:10,totalOrder:155,bullet:"round"}],categoryField:"day",autoMargins:!1,marginLeft:0,marginRight:5,marginTop:0,marginBottom:0,graphs:[{valueField:"totalOrder",bulletField:"bullet",showBalloon:!1,lineColor:"#00b1f4"}],valueAxes:[{gridAlpha:0,axisAlpha:0}],categoryAxis:{gridAlpha:0,axisAlpha:0,startOnAxis:!0}}),(bar=new ProgressBar.Circle("#t-profit-chart",{color:"#6156ce",strokeWidth:6,trailWidth:6,trailColor:"#ebedf2",easing:"easeInOut",duration:1400,text:{autoStyleContainer:!1},from:{color:"#6156ce",width:6},to:{color:"#6156ce",width:6},step:function(e,l){l.path.setAttribute("stroke",e.color),l.path.setAttribute("stroke-width",e.width);var a=Math.round(100*l.value());0===a?l.setText(""):l.setText(a+"K")}})).text.style.fontSize="0.8rem",bar.set(.65),(bar=new ProgressBar.Circle("#t-shipments-chart",{color:"#6156ce",strokeWidth:6,trailWidth:6,trailColor:"#ebedf2",easing:"easeInOut",duration:1400,text:{autoStyleContainer:!1},from:{color:"#6156ce",width:6},to:{color:"#6156ce",width:6},step:function(e,l){l.path.setAttribute("stroke",e.color),l.path.setAttribute("stroke-width",e.width);var a=Math.round(100*l.value());0===a?l.setText(""):l.setText(a+"K")}})).text.style.fontSize="0.8rem",bar.set(.71);var chart=AmCharts.makeChart("v-weekly-chart",{type:"serial",theme:"light",dataProvider:[{month:"Jan",visits:543,color:"#e9ecef"},{month:"Feb",visits:395,color:"#e9ecef"},{month:"Mar",visits:811,color:"#e9ecef"},{month:"Apr",visits:300,color:"#e9ecef"},{month:"May",visits:200,color:"#e9ecef"},{month:"Jun",visits:300,color:"#e9ecef"},{month:"Jul",visits:450,color:"#e9ecef"},{month:"Aug",visits:480,color:"#e9ecef"},{month:"Sep",visits:665,color:"#e9ecef"},{month:"Oct",visits:1e3,color:"#3862f5"},{month:"Nov",visits:443,color:"#e9ecef"},{month:"Dec",visits:395,color:"#e9ecef"}],valueAxes:[{gridColor:"#f1f3f1",gridAlpha:.2,dashLength:0,labelsEnabled:!1,axisAlpha:0}],gridAboveGraphs:!0,startDuration:1,graphs:[{balloonText:"[[category]]: <b>[[value]]</b>",fillAlphas:.9,lineAlpha:0,type:"column",valueField:"visits",colorField:"color"}],chartCursor:{categoryBalloonEnabled:!1,cursorAlpha:0,zoomable:!1},categoryField:"month",categoryAxis:{gridPosition:"start",gridAlpha:0,tickPosition:"start",tickLength:10,labelsEnabled:!1,axisAlpha:0},export:{enabled:!0}}),map=(chart=AmCharts.makeChart("v-monthly-chart",{type:"serial",theme:"light",dataProvider:[{month:"Jan",visits:443,color:"#e9ecef"},{month:"Feb",visits:395,color:"#e9ecef"},{month:"Mar",visits:1e3,color:"#3862f5"},{month:"Apr",visits:300,color:"#e9ecef"},{month:"May",visits:200,color:"#e9ecef"},{month:"Jun",visits:300,color:"#e9ecef"},{month:"Jul",visits:450,color:"#e9ecef"},{month:"Aug",visits:811,color:"#e9ecef"},{month:"Sep",visits:665,color:"#e9ecef"},{month:"Oct",visits:580,color:"#e9ecef"},{month:"Nov",visits:443,color:"#e9ecef"},{month:"Dec",visits:395,color:"#e9ecef"}],valueAxes:[{gridColor:"#f1f3f1",gridAlpha:.2,dashLength:0,labelsEnabled:!1,axisAlpha:0}],gridAboveGraphs:!0,startDuration:1,graphs:[{balloonText:"[[category]]: <b>[[value]]</b>",fillAlphas:.9,lineAlpha:0,type:"column",valueField:"visits",colorField:"color"}],chartCursor:{categoryBalloonEnabled:!1,cursorAlpha:0,zoomable:!1},categoryField:"month",categoryAxis:{gridPosition:"start",gridAlpha:0,tickPosition:"start",tickLength:10,labelsEnabled:!1,axisAlpha:0},export:{enabled:!0}}),AmCharts.makeChart("mapdiv",{type:"map",theme:"light",projection:"miller",imagesSettings:{rollOverColor:"#089282",rollOverScale:3,selectedScale:3,selectedColor:"#089282",color:"#13564e"},areasSettings:{unlistedAreasColor:"#e9ecef"},dataProvider:{map:"worldLow",images:[{zoomLevel:5,scale:.5,title:"Brussels",latitude:50.8371,longitude:4.3676},{zoomLevel:5,scale:.5,title:"Copenhagen",latitude:55.6763,longitude:12.5681},{zoomLevel:5,scale:.5,title:"Paris",latitude:48.8567,longitude:2.351},{zoomLevel:5,scale:.5,title:"Reykjavik",latitude:64.1353,longitude:-21.8952},{zoomLevel:5,scale:.5,title:"Moscow",latitude:55.7558,longitude:37.6176},{zoomLevel:5,scale:.5,title:"Madrid",latitude:40.4167,longitude:-3.7033},{zoomLevel:5,scale:.5,title:"London",latitude:51.5002,longitude:-.1262,url:"http://www.google.co.uk"},{zoomLevel:5,scale:.5,title:"Peking",latitude:39.9056,longitude:116.3958},{zoomLevel:5,scale:.5,title:"New Delhi",latitude:28.6353,longitude:77.225},{zoomLevel:5,scale:.5,title:"Tokyo",latitude:35.6785,longitude:139.6823,url:"http://www.google.co.jp"},{zoomLevel:5,scale:.5,title:"Ankara",latitude:39.9439,longitude:32.856},{zoomLevel:5,scale:.5,title:"Buenos Aires",latitude:-34.6118,longitude:-58.4173},{zoomLevel:5,scale:.5,title:"Brasilia",latitude:-15.7801,longitude:-47.9292},{zoomLevel:5,scale:.5,title:"Ottawa",latitude:45.4235,longitude:-75.6979},{zoomLevel:5,scale:.5,title:"Washington",latitude:38.8921,longitude:-77.0241},{zoomLevel:5,scale:.5,title:"Kinshasa",latitude:-4.3369,longitude:15.3271},{zoomLevel:5,scale:.5,title:"Cairo",latitude:30.0571,longitude:31.2272},{zoomLevel:5,scale:.5,title:"Pretoria",latitude:-25.7463,longitude:28.1876}]}}));function updateCustomMarkers(e){var l=e.chart;for(var a in l.dataProvider.images){var o=l.dataProvider.images[a];void 0===o.externalElement&&(o.externalElement=createCustomMarker(o));var t=l.coordinatesToStageXY(o.longitude,o.latitude);o.externalElement.style.top=t.y+"px",o.externalElement.style.left=t.x+"px"}}function createCustomMarker(e){var l=document.createElement("div");l.className="map-marker",l.title=e.title,l.style.position="absolute",void 0!=e.url&&(l.onclick=function(){window.location.href=e.url},l.className+=" map-clickable");var a=document.createElement("div");a.className="dot",l.appendChild(a);var o=document.createElement("div");return o.className="locator",l.appendChild(o),e.chart.chartDiv.appendChild(l),l}map.addListener("positionChanged",updateCustomMarkers);chart=AmCharts.makeChart("page-views-monthly",{type:"serial",marginRight:40,marginLeft:40,autoMarginOffset:20,valueAxes:[{id:"v1",axisAlpha:0,position:"left",ignoreAxisWidth:!0,labelFunction:function(e){return e/1e3+"K"}}],balloon:{borderThickness:1,shadowAlpha:0},graphs:[{id:"g1",fillColorsField:"lineColor",lineColorField:"lineColor",balloon:{drop:!0,adjustBorderColor:!1,color:"#ffffff",valueField:"value",type:"smoothedLine"},fillAlphas:.2,bullet:"round",bulletBorderAlpha:1,bulletColor:"#FFFFFF",bulletSize:5,hideBulletsCount:50,lineThickness:2,title:"red line",useLineColorForBulletBorder:!0,valueField:"value",balloonText:"<span style='font-size:18px;'>[[value]]</span>"}],chartCursor:{valueLineEnabled:!0,valueLineBalloonEnabled:!0,cursorAlpha:0,zoomable:!1,valueZoomable:!0,valueLineAlpha:.5},categoryField:"date",categoryAxis:{dashLength:1,minorGridEnabled:!0},dataProvider:[{date:"Jan",value:21e3,lineColor:"#00d1c1"},{date:"Feb",value:22e3,lineColor:"#00d1c1"},{date:"Mar",value:6e4,lineColor:"#00d1c1"},{date:"Apr",value:8e4,lineColor:"#00d1c1"},{date:"May",value:2e4,lineColor:"#00d1c1"},{date:"Jun",value:7e4,lineColor:"#00d1c1"},{date:"Jul",value:22e3,lineColor:"#00d1c1"},{date:"Aug",value:25e3,lineColor:"#00d1c1"},{date:"Sep",value:3e4,lineColor:"#00d1c1"},{date:"Oct",value:33e3,lineColor:"#00d1c1"},{date:"Nov",value:95e3,lineColor:"#00d1c1"},{date:"Dec",value:99e3,lineColor:"#00d1c1"}]}),chart=AmCharts.makeChart("page-views-yearly",{type:"serial",theme:"light",marginRight:40,marginLeft:40,autoMarginOffset:20,dataDateFormat:"YYYY-MM-DD",valueAxes:[{id:"v1",axisAlpha:0,position:"left",ignoreAxisWidth:!0,labelFunction:function(e){return e/1e3+"K"}}],balloon:{borderThickness:1,shadowAlpha:0},graphs:[{id:"g1",balloon:{drop:!0,adjustBorderColor:!1,color:"#ffffff",type:"smoothedLine"},fillColorsField:"lineColor",lineColorField:"lineColor",fillAlphas:.2,bullet:"round",bulletBorderAlpha:1,bulletColor:"#FFFFFF",bulletSize:5,hideBulletsCount:50,lineThickness:2,title:"red line",useLineColorForBulletBorder:!0,valueField:"value",balloonText:"<span style='font-size:18px;'>[[value]]</span>"}],chartCursor:{valueLineEnabled:!0,valueLineBalloonEnabled:!0,cursorAlpha:0,zoomable:!1,valueZoomable:!0,valueLineAlpha:.5},categoryField:"date",categoryAxis:{parseDates:!0,dashLength:1,minorGridEnabled:!0},export:{enabled:!0},dataProvider:[{date:"2018-07-27",value:13e3,lineColor:"#00d1c1"},{date:"2018-07-28",value:11e3,lineColor:"#00d1c1"},{date:"2018-07-29",value:15e3,lineColor:"#00d1c1"},{date:"2018-07-30",value:16e3,lineColor:"#00d1c1"},{date:"2018-07-31",value:18e3,lineColor:"#00d1c1"},{date:"2018-08-01",value:13e3,lineColor:"#00d1c1"},{date:"2018-08-02",value:22e3,lineColor:"#00d1c1"},{date:"2018-08-03",value:23e3,lineColor:"#00d1c1"},{date:"2018-08-04",value:2e4,lineColor:"#00d1c1"},{date:"2018-08-05",value:17e3,lineColor:"#00d1c1"},{date:"2018-08-06",value:16e3,lineColor:"#00d1c1"},{date:"2018-08-07",value:18e3,lineColor:"#00d1c1"},{date:"2018-08-08",value:21e3,lineColor:"#00d1c1"},{date:"2018-08-09",value:26e3,lineColor:"#00d1c1"},{date:"2018-08-10",value:24e3,lineColor:"#00d1c1"},{date:"2018-08-11",value:29e3,lineColor:"#00d1c1"},{date:"2018-08-12",value:32e3,lineColor:"#00d1c1"},{date:"2018-08-13",value:18e3,lineColor:"#00d1c1"},{date:"2018-08-14",value:24e3,lineColor:"#00d1c1"},{date:"2018-08-15",value:22e3,lineColor:"#00d1c1"},{date:"2018-08-16",value:18e3,lineColor:"#00d1c1"},{date:"2018-08-17",value:19e3,lineColor:"#00d1c1"},{date:"2018-08-18",value:14e3,lineColor:"#00d1c1"},{date:"2018-08-19",value:15e3,lineColor:"#00d1c1"},{date:"2018-08-20",value:12e3,lineColor:"#00d1c1"},{date:"2018-08-21",value:8e3,lineColor:"#00d1c1"},{date:"2018-08-22",value:9e3,lineColor:"#00d1c1"},{date:"2018-08-23",value:8e3,lineColor:"#00d1c1"},{date:"2018-08-24",value:7e3,lineColor:"#00d1c1"},{date:"2018-08-25",value:5e3,lineColor:"#00d1c1"},{date:"2018-08-26",value:11e3,lineColor:"#00d1c1"},{date:"2018-08-27",value:13e3,lineColor:"#00d1c1"},{date:"2018-08-28",value:18e3,lineColor:"#00d1c1"},{date:"2018-08-29",value:2e4,lineColor:"#00d1c1"},{date:"2018-08-30",value:29e3,lineColor:"#00d1c1"},{date:"2018-08-31",value:33e3,lineColor:"#00d1c1"},{date:"2018-09-01",value:42e3,lineColor:"#00d1c1"},{date:"2018-09-02",value:35e3,lineColor:"#00d1c1"},{date:"2018-09-03",value:31e3,lineColor:"#00d1c1"},{date:"2018-09-04",value:47e3,lineColor:"#00d1c1"},{date:"2018-09-05",value:52e3,lineColor:"#00d1c1"},{date:"2018-09-06",value:46e3,lineColor:"#00d1c1"},{date:"2018-09-07",value:41e3,lineColor:"#00d1c1"},{date:"2018-09-08",value:43e3,lineColor:"#00d1c1"},{date:"2018-09-09",value:4e4,lineColor:"#00d1c1"},{date:"2018-09-10",value:39e3,lineColor:"#00d1c1"},{date:"2018-09-11",value:34e3,lineColor:"#00d1c1"},{date:"2018-09-12",value:29e3,lineColor:"#00d1c1"},{date:"2018-09-13",value:34e3,lineColor:"#00d1c1"},{date:"2018-09-14",value:37e3,lineColor:"#00d1c1"},{date:"2018-09-15",value:42e3,lineColor:"#00d1c1"},{date:"2018-09-16",value:49e3,lineColor:"#00d1c1"},{date:"2018-09-17",value:46e3,lineColor:"#00d1c1"},{date:"2018-09-18",value:47e3,lineColor:"#00d1c1"},{date:"2018-09-19",value:55e3,lineColor:"#00d1c1"},{date:"2018-09-20",value:59e3,lineColor:"#00d1c1"},{date:"2018-09-21",value:58e3,lineColor:"#00d1c1"},{date:"2018-09-22",value:57e3,lineColor:"#00d1c1"},{date:"2018-09-23",value:61e3,lineColor:"#00d1c1"},{date:"2018-09-24",value:59e3,lineColor:"#00d1c1"},{date:"2018-09-25",value:67e3,lineColor:"#00d1c1"},{date:"2018-09-26",value:65e3,lineColor:"#00d1c1"},{date:"2018-09-27",value:61e3,lineColor:"#00d1c1"},{date:"2018-09-28",value:66e3,lineColor:"#00d1c1"},{date:"2018-09-29",value:69e3,lineColor:"#00d1c1"},{date:"2018-09-30",value:71e3,lineColor:"#00d1c1"},{date:"2018-10-01",value:67e3,lineColor:"#00d1c1"},{date:"2018-10-02",value:63e3,lineColor:"#00d1c1"},{date:"2018-10-03",value:46e3,lineColor:"#00d1c1"},{date:"2018-10-04",value:32e3,lineColor:"#00d1c1"},{date:"2018-10-05",value:21e3,lineColor:"#00d1c1"},{date:"2018-10-06",value:18e3,lineColor:"#00d1c1"},{date:"2018-10-07",value:21e3,lineColor:"#00d1c1"},{date:"2018-10-08",value:28e3,lineColor:"#00d1c1"},{date:"2018-10-09",value:27e3,lineColor:"#00d1c1"},{date:"2018-10-10",value:36e3,lineColor:"#00d1c1"},{date:"2018-10-11",value:33e3,lineColor:"#00d1c1"},{date:"2018-10-12",value:31e3,lineColor:"#00d1c1"},{date:"2018-10-13",value:3e4,lineColor:"#00d1c1"},{date:"2018-10-14",value:34e3,lineColor:"#00d1c1"},{date:"2018-10-15",value:38e3,lineColor:"#00d1c1"},{date:"2018-10-16",value:37e3,lineColor:"#00d1c1"},{date:"2018-10-17",value:44e3,lineColor:"#00d1c1"},{date:"2018-10-18",value:49e3,lineColor:"#00d1c1"},{date:"2018-10-19",value:53e3,lineColor:"#00d1c1"},{date:"2018-10-20",value:57e3,lineColor:"#00d1c1"},{date:"2018-10-21",value:6e4,lineColor:"#00d1c1"},{date:"2018-10-22",value:61e3,lineColor:"#00d1c1"},{date:"2018-10-23",value:69e3,lineColor:"#00d1c1"},{date:"2018-10-24",value:67e3,lineColor:"#00d1c1"},{date:"2018-10-25",value:72e3,lineColor:"#00d1c1"},{date:"2018-10-26",value:77e3,lineColor:"#00d1c1"},{date:"2018-10-27",value:75e3,lineColor:"#00d1c1"},{date:"2018-10-28",value:7e4,lineColor:"#00d1c1"},{date:"2018-10-29",value:72e3,lineColor:"#00d1c1"},{date:"2018-10-30",value:7e4,lineColor:"#00d1c1"},{date:"2018-10-31",value:72e3,lineColor:"#00d1c1"},{date:"2018-11-01",value:73e3,lineColor:"#00d1c1"},{date:"2018-11-02",value:67e3,lineColor:"#00d1c1"},{date:"2018-11-03",value:68e3,lineColor:"#00d1c1"},{date:"2018-11-04",value:65e3,lineColor:"#00d1c1"},{date:"2018-11-05",value:71e3,lineColor:"#00d1c1"},{date:"2018-11-06",value:75e3,lineColor:"#00d1c1"},{date:"2018-11-07",value:74e3,lineColor:"#00d1c1"},{date:"2018-11-08",value:71e3,lineColor:"#00d1c1"},{date:"2018-11-09",value:76e3,lineColor:"#00d1c1"},{date:"2018-11-10",value:77e3,lineColor:"#00d1c1"},{date:"2018-11-11",value:81e3,lineColor:"#00d1c1"},{date:"2018-11-12",value:83e3,lineColor:"#00d1c1"},{date:"2018-11-13",value:8e4,lineColor:"#00d1c1"},{date:"2018-11-14",value:81e3,lineColor:"#00d1c1"},{date:"2018-11-15",value:87e3,lineColor:"#00d1c1"},{date:"2018-11-16",value:82e3,lineColor:"#00d1c1"},{date:"2018-11-17",value:86e3,lineColor:"#00d1c1"},{date:"2018-11-18",value:8e4,lineColor:"#00d1c1"},{date:"2018-11-19",value:87e3,lineColor:"#00d1c1"},{date:"2018-11-20",value:83e3,lineColor:"#00d1c1"},{date:"2018-11-21",value:85e3,lineColor:"#00d1c1"},{date:"2018-11-22",value:84e3,lineColor:"#00d1c1"},{date:"2018-11-23",value:82e3,lineColor:"#00d1c1"},{date:"2018-11-24",value:73e3,lineColor:"#00d1c1"},{date:"2018-11-25",value:71e3,lineColor:"#00d1c1"},{date:"2018-11-26",value:75e3,lineColor:"#00d1c1"},{date:"2018-11-27",value:79e3,lineColor:"#00d1c1"},{date:"2018-11-28",value:7e4,lineColor:"#00d1c1"},{date:"2018-11-29",value:73e3,lineColor:"#00d1c1"},{date:"2018-11-30",value:61e3,lineColor:"#00d1c1"},{date:"2018-12-01",value:62e3,lineColor:"#00d1c1"},{date:"2018-12-02",value:66e3,lineColor:"#00d1c1"},{date:"2018-12-03",value:65e3,lineColor:"#00d1c1"},{date:"2018-12-04",value:73e3,lineColor:"#00d1c1"},{date:"2018-12-05",value:79e3,lineColor:"#00d1c1"},{date:"2018-12-06",value:78e3,lineColor:"#00d1c1"},{date:"2018-12-07",value:78e3,lineColor:"#00d1c1"},{date:"2018-12-08",value:78e3,lineColor:"#00d1c1"},{date:"2018-12-09",value:74e3,lineColor:"#00d1c1"},{date:"2018-12-10",value:73e3,lineColor:"#00d1c1"},{date:"2018-12-11",value:75e3,lineColor:"#00d1c1"},{date:"2018-12-12",value:7e4,lineColor:"#00d1c1"},{date:"2018-12-13",value:77e3,lineColor:"#00d1c1"},{date:"2018-12-14",value:67e3,lineColor:"#00d1c1"},{date:"2018-12-15",value:62e3,lineColor:"#00d1c1"},{date:"2018-12-16",value:64e3,lineColor:"#00d1c1"},{date:"2018-12-17",value:61e3,lineColor:"#00d1c1"},{date:"2018-12-18",value:59e3,lineColor:"#00d1c1"},{date:"2018-12-19",value:53e3,lineColor:"#00d1c1"},{date:"2018-12-20",value:54e3,lineColor:"#00d1c1"},{date:"2018-12-21",value:56e3,lineColor:"#00d1c1"},{date:"2018-12-22",value:59e3,lineColor:"#00d1c1"},{date:"2018-12-23",value:58e3,lineColor:"#00d1c1"},{date:"2018-12-24",value:55e3,lineColor:"#00d1c1"},{date:"2018-12-25",value:52e3,lineColor:"#00d1c1"},{date:"2018-12-26",value:54e3,lineColor:"#00d1c1"},{date:"2018-12-27",value:5e4,lineColor:"#00d1c1"},{date:"2018-12-28",value:5e4,lineColor:"#00d1c1"},{date:"2018-12-29",value:51e3,lineColor:"#00d1c1"},{date:"2018-12-30",value:52e3,lineColor:"#00d1c1"},{date:"2018-12-31",value:58e3,lineColor:"#00d1c1"},{date:"2019-01-01",value:6e4,lineColor:"#00d1c1"},{date:"2019-01-02",value:67e3,lineColor:"#00d1c1"},{date:"2019-01-03",value:64e3,lineColor:"#00d1c1"},{date:"2019-01-04",value:66e3,lineColor:"#00d1c1"},{date:"2019-01-05",value:6e4,lineColor:"#00d1c1"},{date:"2019-01-06",value:63e3,lineColor:"#00d1c1"},{date:"2019-01-07",value:61e3,lineColor:"#00d1c1"},{date:"2019-01-08",value:6e4,lineColor:"#00d1c1"},{date:"2019-01-09",value:65e3,lineColor:"#00d1c1"},{date:"2019-01-10",value:75e3,lineColor:"#00d1c1"},{date:"2019-01-11",value:77e3,lineColor:"#00d1c1"},{date:"2019-01-12",value:78e3,lineColor:"#00d1c1"},{date:"2019-01-13",value:7e4,lineColor:"#00d1c1"},{date:"2019-01-14",value:7e4,lineColor:"#00d1c1"},{date:"2019-01-15",value:73e3,lineColor:"#00d1c1"},{date:"2019-01-16",value:71e3,lineColor:"#00d1c1"},{date:"2019-01-17",value:74e3,lineColor:"#00d1c1"},{date:"2019-01-18",value:78e3,lineColor:"#00d1c1"},{date:"2019-01-19",value:85e3,lineColor:"#00d1c1"},{date:"2019-01-20",value:82e3,lineColor:"#00d1c1"},{date:"2019-01-21",value:83e3,lineColor:"#00d1c1"},{date:"2019-01-22",value:88e3,lineColor:"#00d1c1"},{date:"2019-01-23",value:85e3,lineColor:"#00d1c1"},{date:"2019-01-24",value:85e3,lineColor:"#00d1c1"},{date:"2019-01-25",value:8e4,lineColor:"#00d1c1"},{date:"2019-01-26",value:87e3,lineColor:"#00d1c1"},{date:"2019-01-27",value:84e3,lineColor:"#00d1c1"},{date:"2019-01-28",value:83e3,lineColor:"#00d1c1"},{date:"2019-01-29",value:84e3,lineColor:"#00d1c1"},{date:"2019-01-30",value:81e3,lineColor:"#00d1c1"}]});var d=new Date,monthNames=["January","February","March","April","May","June","July","August","September","October","November","December"];$("#month").text(monthNames[d.getMonth()]),$("#day").text(d.getDate());var weekNames=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];function timer(){var e=new Date,l=e.getHours(),a=e.getMinutes(),o=e.getSeconds(),t="AM",d=l;d>=12&&(d=l-12,t="PM"),0===d&&(d=12),d=d<10?"0"+d:d,a=a<10?"0"+a:a,o=o<10?"0"+o:o,$("#hour").html(d),$("#minut").html(a),$("#date").html(t)}$("#week").text(weekNames[d.getDay()]),setInterval(function(){timer()},1e3);