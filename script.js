mapboxgl.accessToken = 'pk.eyJ1IjoiZWU3a2x0IiwiYSI6ImNqMzl6ODdneTAzMngzM3M0d2JhenF3a2gifQ.ZJZW9zT8QByGjdW-oic_pw';
// This adds the map to your page
var map = new mapboxgl.Map({
  // container id specified in the HTML
  container: 'map',
  // style URL
  style: 'mapbox://styles/mapbox/streets-v9',
  // initial position in [long, lat] format
  center: [12.492248,41.890413],
  //pitch: 80,
  bearing: 60,
  // initial zoom
  zoom: 16
});
var stores = {
  
}
map.on('load', function(e) {
  // Add the data to your map as a layer
  map.addLayer({
    id: 'locations',
    type: 'symbol',
    // Add a GeoJSON source containing place coordinates and information.
    source: {
      type: 'geojson',
      data: stores
    },
    layout: {
      'icon-image': 'restaurant-15',
      'icon-allow-overlap': true,
    }
  });
});
// the 'building' layer in the mapbox-streets vector source contains building-height
// data from OpenStreetMap.
// map.on('load', function() {
//     map.addLayer({
//         'id': '3d-buildings',
//         'source': 'composite',
//         'source-layer': 'building',
//         'filter': ['==', 'extrude', 'true'],
//         'type': 'fill-extrusion',
//         'minzoom': 15,
//         'paint': {
//             'fill-extrusion-color': '#aaa',
//             'fill-extrusion-height': {
//                 'type': 'identity',
//                 'property': 'height'
//             },
//             'fill-extrusion-base': {
//                 'type': 'identity',
//                 'property': 'min_height'
//             },
//             'fill-extrusion-opacity': .6
//         }
//     });
 // });
