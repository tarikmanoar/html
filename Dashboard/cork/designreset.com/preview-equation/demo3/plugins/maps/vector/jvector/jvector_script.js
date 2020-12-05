$(function(){
  $('#africa-map').vectorMap({
	map: 'africa_mill',
		backgroundColor: 'transparent',
		regionStyle: {
			initial: {
				fill: '#f8538d'
			}
		}

	});
});

$(function(){
	$('#asia-map').vectorMap({
	  map: 'asia_mill',
		  backgroundColor: 'transparent',
		  regionStyle: {
			  initial: {
				  fill: '#00b1f4'
			  }
		  }
	});
});

$(function(){
	$('#continents-map').vectorMap({
	  map: 'continents_mill',
		  backgroundColor: 'transparent',
		  regionStyle: {
			  initial: {
				  fill: '#07e0c4'
			  }
		  }
	});
});

$(function(){
	$('#europe-map').vectorMap({
	  map: 'europe_mill',
		  backgroundColor: 'transparent',
		  regionStyle: {
			  initial: {
				  fill: '#3b3f5c'
			  }
		  }
	});
});

$(function(){
	$('#north_america-map').vectorMap({
	  map: 'north_america_mill',
		  backgroundColor: 'transparent',
		  regionStyle: {
			  initial: {
				  fill: '#ffbb44'
			  }
		  }
	});
});

$(function(){
	$('#oceanina-map').vectorMap({
	  map: 'oceania_mill',
		  backgroundColor: 'transparent',
		  regionStyle: {
			  initial: {
				  fill: '#e95f2b'
			  }
		  }
	});
});

$(function(){
	$('#south-america-map').vectorMap({
	  map: 'south_america_mill',
		  backgroundColor: 'transparent',
		  regionStyle: {
			  initial: {
				  fill: '#25d5e4'
			  }
		  }
	});
});

$(function(){
	$('#world-map').vectorMap({

	   map: 'world_mill_en',
		  backgroundColor: '#fff',
		  borderColor: '#818181',
		  borderOpacity: 0.25,
		  borderWidth: 1,
		  color: '#f4f3f0',
		  regionStyle: {
			  initial: {
				  fill: '#6156ce'
			  }
		  },
		  markerStyle: {
			  initial: {
				  r: 9,
				  'fill': '#fff',
				  'fill-opacity': 1,
				  'stroke': '#000',
				  'stroke-width': 5,
				  'stroke-opacity': 0.4
			  },
		  },
		  enableZoom: true,
		  hoverColor: '#1f3892',
		  hoverOpacity: null,
		  normalizeFunction: 'linear',
		  scaleColors: ['#b6d6ff', '#005ace'],
		  selectedColor: '#c9dfaf',
		  selectedRegions: [],
		  showTooltip: true,

	});
});
   