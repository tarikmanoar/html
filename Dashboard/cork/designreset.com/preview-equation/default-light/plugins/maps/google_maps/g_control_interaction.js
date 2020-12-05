// You can set control options to change the default position or style of many
// of the map controls.

function initMap() {
  var map = new google.maps.Map(document.getElementById('control_map1'), {
    zoom: 4,
    center: {lat: -33, lng: 151},
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
      mapTypeIds: ['roadmap', 'terrain']
    }
  });
  
  
  /*------------control_map2 start--------------*/
   var map = new google.maps.Map(document.getElementById('control_map2'), {
    zoom: 12,
    center: {lat: -28.643387, lng: 153.612224},
    mapTypeControl: true,
    mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        position: google.maps.ControlPosition.TOP_CENTER
    },
    zoomControl: true,
    zoomControlOptions: {
        position: google.maps.ControlPosition.LEFT_CENTER
    },
    scaleControl: true,
    streetViewControl: true,
    streetViewControlOptions: {
        position: google.maps.ControlPosition.LEFT_TOP
    },
    fullscreenControl: true
  });
  /*------------control_map2 end--------------*/
  
  
  /*------------control_map3 start--------------*/
  map = new google.maps.Map(document.getElementById('control_map3'), {
    zoom: 12,
    center: chicago
  });

  // Create the DIV to hold the control and call the CenterControl()
  // constructor passing in this DIV.
  var centerControlDiv = document.createElement('div');
  var centerControl = new CenterControl(centerControlDiv, map);

  centerControlDiv.index = 1;
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv);
  /*------------control_map3 end--------------*/
  
  
  /*------------control_map4 start--------------*/
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: chicago
  });

  // Create the DIV to hold the control and call the CenterControl()
  // constructor
  // passing in this DIV.
  var centerControlDiv = document.createElement('div');
  var centerControl = new CenterControl(centerControlDiv, map, chicago);

  centerControlDiv.index = 1;
  centerControlDiv.style['padding-top'] = '10px';
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv);
  /*------------control_map4 end--------------*/
}

/*-------control_map3---------*/
var map;
var chicago = {lat: 41.85, lng: -87.65};

/**
 * The CenterControl adds a control to the map that recenters the map on
 * Chicago.
 * This constructor takes the control DIV as an argument.
 * @constructor
 */
function CenterControl(controlDiv, map) {

  // Set CSS for the control border.
  var controlUI = document.createElement('div');
  controlUI.style.backgroundColor = '#fff';
  controlUI.style.border = '2px solid #fff';
  controlUI.style.borderRadius = '3px';
  controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
  controlUI.style.cursor = 'pointer';
  controlUI.style.marginBottom = '22px';
  controlUI.style.textAlign = 'center';
  controlUI.title = 'Click to recenter the map';
  controlDiv.appendChild(controlUI);

  // Set CSS for the control interior.
  var controlText = document.createElement('div');
  controlText.style.color = 'rgb(25,25,25)';
  controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
  controlText.style.fontSize = '16px';
  controlText.style.lineHeight = '38px';
  controlText.style.paddingLeft = '5px';
  controlText.style.paddingRight = '5px';
  controlText.innerHTML = 'Center Map';
  controlUI.appendChild(controlText);

  // Setup the click event listeners: simply set the map to Chicago.
  controlUI.addEventListener('click', function() {
    map.setCenter(chicago);
  });

}
/*-------control_map3 end---------*/

/*-------control_map4---------*/
var map;
var chicago = {lat: 41.85, lng: -87.65};

/**
 * The CenterControl adds a control to the map that recenters the map on
 * Chicago.
 * @constructor
 * @param {!Element} controlDiv
 * @param {!google.maps.Map} map
 * @param {?google.maps.LatLng} center
 */
function CenterControl(controlDiv, map, center) {
  // We set up a variable for this since we're adding event listeners
  // later.
  var control = this;

  // Set the center property upon construction
  control.center_ = center;
  controlDiv.style.clear = 'both';

  // Set CSS for the control border
  var goCenterUI = document.createElement('div');
  goCenterUI.id = 'goCenterUI';
  goCenterUI.title = 'Click to recenter the map';
  controlDiv.appendChild(goCenterUI);

  // Set CSS for the control interior
  var goCenterText = document.createElement('div');
  goCenterText.id = 'goCenterText';
  goCenterText.innerHTML = 'Center Map';
  goCenterUI.appendChild(goCenterText);

  // Set CSS for the setCenter control border
  var setCenterUI = document.createElement('div');
  setCenterUI.id = 'setCenterUI';
  setCenterUI.title = 'Click to change the center of the map';
  controlDiv.appendChild(setCenterUI);

  // Set CSS for the control interior
  var setCenterText = document.createElement('div');
  setCenterText.id = 'setCenterText';
  setCenterText.innerHTML = 'Set Center';
  setCenterUI.appendChild(setCenterText);

  // Set up the click event listener for 'Center Map': Set the center of
  // the map
  // to the current center of the control.
  goCenterUI.addEventListener('click', function() {
    var currentCenter = control.getCenter();
    map.setCenter(currentCenter);
  });

  // Set up the click event listener for 'Set Center': Set the center of
  // the control to the current center of the map.
  setCenterUI.addEventListener('click', function() {
    var newCenter = map.getCenter();
    control.setCenter(newCenter);
  });
}

/**
 * Define a property to hold the center state.
 * @private
 */
CenterControl.prototype.center_ = null;

/**
 * Gets the map center.
 * @return {?google.maps.LatLng}
 */
CenterControl.prototype.getCenter = function() {
  return this.center_;
};

/**
 * Sets the map center.
 * @param {?google.maps.LatLng} center
 */
CenterControl.prototype.setCenter = function(center) {
  this.center_ = center;
};