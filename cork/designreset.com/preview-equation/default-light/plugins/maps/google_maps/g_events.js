function initMap() {
  var map = new google.maps.Map(document.getElementById('event_map1'), {
    zoom: 4,
    center: {lat: -25.363882, lng: 131.044922 }
  });

  var bounds = {
    north: -25.363882,
    south: -31.203405,
    east: 131.044922,
    west: 125.244141
  };

  // Display the area between the location southWest and northEast.
  map.fitBounds(bounds);

  // Add 5 markers to map at random locations.
  // For each of these markers, give them a title with their index, and when
  // they are clicked they should open an infowindow with text from a secret
  // message.
  var secretMessages = ['This', 'is', 'the', 'secret', 'message'];
  var lngSpan = bounds.east - bounds.west;
  var latSpan = bounds.north - bounds.south;
  for (var i = 0; i < secretMessages.length; ++i) {
    var marker = new google.maps.Marker({
      position: {
        lat: bounds.south + latSpan * Math.random(),
        lng: bounds.west + lngSpan * Math.random()
      },
      map: map
    });
    attachSecretMessage(marker, secretMessages[i]);
  }
  
  /*--------------event_map2 start-------------------*/
  var originalMapCenter = new google.maps.LatLng(-25.363882, 131.044922);
  var map = new google.maps.Map(document.getElementById('event_map2'), {
    zoom: 4,
    center: originalMapCenter
  });

  var infowindow = new google.maps.InfoWindow({
    content: 'Change the zoom level',
    position: originalMapCenter
  });
  infowindow.open(map);

  map.addListener('zoom_changed', function() {
    infowindow.setContent('Zoom: ' + map.getZoom());
  });
  /*--------------event_map2 end-------------------*/
  
  /*--------------event_map3 start-------------------*/
  var mapDiv = document.getElementById('event_map3');
  var map = new google.maps.Map(mapDiv, {
    zoom: 8,
    center: new google.maps.LatLng(-34.397, 150.644)
  });

  // We add a DOM event here to show an alert if the DIV containing the
  // map is clicked.
  google.maps.event.addDomListener(mapDiv, 'click', function() {
    window.alert('Map was clicked!');
  });
  /*--------------event_map3 end-------------------*/
  
  
  /*--------------event_map4 start-------------------*/
  var origin = {lat: -33.871, lng: 151.197};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    center: origin
  });
  var clickHandler = new ClickEventHandler(map, origin);

  /*--------------event_map4 end-------------------*/
  
}

// Attaches an info window to a marker with the provided message. When the
// marker is clicked, the info window will open with the secret message.
function attachSecretMessage(marker, secretMessage) {
  var infowindow = new google.maps.InfoWindow({
    content: secretMessage
  });

  marker.addListener('click', function() {
    infowindow.open(marker.get('event_map1'), marker);
  });
}

/**
 * @constructor
 */
var ClickEventHandler = function(map, origin) {
  this.origin = origin;
  this.map = map;
  this.directionsService = new google.maps.DirectionsService;
  this.directionsDisplay = new google.maps.DirectionsRenderer;
  this.directionsDisplay.setMap(map);
  this.placesService = new google.maps.places.PlacesService(map);
  this.infowindow = new google.maps.InfoWindow;
  this.infowindowContent = document.getElementById('infowindow-content');
  this.infowindow.setContent(this.infowindowContent);

  // Listen for clicks on the map.
  this.map.addListener('click', this.handleClick.bind(this));
};

ClickEventHandler.prototype.handleClick = function(event) {
  console.log('You clicked on: ' + event.latLng);
  // If the event has a placeId, use it.
  if (event.placeId) {
    console.log('You clicked on place:' + event.placeId);

    // Calling e.stop() on the event prevents the default info window from
    // showing.
    // If you call stop here when there is no placeId you will prevent some
    // other map click event handlers from receiving the event.
    event.stop();
    this.calculateAndDisplayRoute(event.placeId);
    this.getPlaceInformation(event.placeId);
  }
};

ClickEventHandler.prototype.calculateAndDisplayRoute = function(placeId) {
  var me = this;
  this.directionsService.route({
    origin: this.origin,
    destination: {placeId: placeId},
    travelMode: 'WALKING'
  }, function(response, status) {
    if (status === 'OK') {
      me.directionsDisplay.setDirections(response);
    } else {
      window.alert('Directions request failed due to ' + status);
    }
  });
};

ClickEventHandler.prototype.getPlaceInformation = function(placeId) {
  var me = this;
  this.placesService.getDetails({placeId: placeId}, function(place, status) {
    if (status === 'OK') {
      me.infowindow.close();
      me.infowindow.setPosition(place.geometry.location);
      me.infowindowContent.children['place-icon'].src = place.icon;
      me.infowindowContent.children['place-name'].textContent = place.name;
      me.infowindowContent.children['place-id'].textContent = place.place_id;
      me.infowindowContent.children['place-address'].textContent =
          place.formatted_address;
      me.infowindow.open(me.map);
    }
  });
};