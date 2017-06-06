// This will let you use the .remove() function later on
if (!('remove' in Element.prototype)) {
  Element.prototype.remove = function() {
    if (this.parentNode) {
      this.parentNode.removeChild(this);
    }
  };
}

mapboxgl.accessToken = 'pk.eyJ1IjoiZWU3a2x0IiwiYSI6ImNqMzl6ODdneTAzMngzM3M0d2JhenF3a2gifQ.ZJZW9zT8QByGjdW-oic_pw';
// This adds the map to your page
var map = new mapboxgl.Map({
  // container id specified in the HTML
  container: 'map',
  // style URL
  style: 'mapbox://styles/mapbox/streets-v9',
  // initial position in [long, lat] format
  center: [ 12.393094,43.108102],
  //pitch: 80,
//  bearing: 60,
  // initial zoom
  zoom: 6
});
var stores =       {
        "type": "FeatureCollection",
        "features": [
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                14.236688, 40.556101
              ]
            },
            "properties": {
              "phoneFormatted1": "+39 081 837 9671",
              "phone1": "390818379671",
              "phoneFormatted2": "",
              "phone2": "",
              "address": "Excelsior Parco, Via Marina Grande, 179",
              "city": "Capri",
              "country": "Italy",
              "crossStreet": "",
              "postalCode": "80076",
              "state": "NA"
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                14.260043, 40.849698
              ]
            },
            "properties": {
              "phoneFormatted1": "+(39) 328 411 6579",
              "phone1": "393284116579",
              "phoneFormatted2": "+39 338 525 3216",
              "phone2": "393385253216",
              "address": "Vico Paparelle Al Pendino, 5",
              "city": "Naples",
              "country": "Italy",
              "crossStreet": "",
              "postalCode": "80138",
              "state": "Campania"
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                9.189243, 45.476997
              ]
            },
            "properties": {
              "phoneFormatted1": "+39 338 471 1983",
              "phone1": "393384711983",
              "phoneFormatted2": "",
              "phone2": "",
              "address": "Via della Moscova, 27",
              "city": "Milano",
              "country": "Italy",
              "crossStreet": "",
              "postalCode": "20121",
              "state": "Lombardia"
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                12.325527, 45.443876
              ]
            },
            "properties": {
              "phoneFormatted1": "+39 345 026 4156",
              "phone1": "393450264156",
              "phoneFormatted2": "",
              "phone2": "",
              "address": "Ponte delle Guglie 1304",
              "city": "Venice",
              "country": "Italy",
              "crossStreet": "",
              "postalCode": "30121",
              "state": "Veneto"
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                 12.489472, 41.894069
              ]
            },
            "properties": {
              "phoneFormatted1": "+34 666 498 222",
              "phone1": "34666498222",
              "phoneFormatted2": "+34 93 221 36 27",
              "phone2": "34932213627",
              "address": "Via dell'Agnello",
              "city": "Roma",
              "country": "Italy",
              "crossStreet": "",
              "postalCode": "00184",
              "state": "Lazio"
            }
          },

        ]
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
      'icon-image': 'lodging-15',
      'icon-allow-overlap': true,
    }
  });
  buildLocationList(stores);
});


function buildLocationList(data) {
  // Iterate through the list of stores
  for (i = 0; i < data.features.length; i++) {
    var currentFeature = data.features[i];
    // Shorten data.feature.properties to just `prop` so we're not
    // writing this long form over and over again.
    var prop = currentFeature.properties;
    // Select the listing container in the HTML and append a div
    // with the class 'item' for each store
    var listings = document.getElementById('listings');
    var listing = listings.appendChild(document.createElement('div'));
    listing.className = 'item';
    listing.id = 'listing-' + i;

    // Create a new link with the class 'title' for each store
    // and fill it with the store address
    var link = listing.appendChild(document.createElement('a'));
    link.href = '#';
    link.className = 'title';
    link.dataPosition = i;
    link.innerHTML = prop.address;
    // Add an event listener for the links in the sidebar listing
    link.addEventListener('click', function(e) {
      // Update the currentFeature to the store associated with the clicked link
      var clickedListing = data.features[this.dataPosition];
      // 1. Fly to the point associated with the clicked link
      flyToStore(clickedListing);
      // 2. Close all other popups and display popup for clicked store
      createPopUp(clickedListing);
      // 3. Highlight listing in sidebar (and remove highlight for all other listings)
      var activeItem = document.getElementsByClassName('active');
      if (activeItem[0]) {
        activeItem[0].classList.remove('active');
      }
      this.parentNode.classList.add('active');
    });
    // Create a new div with the class 'details' for each store
    // and fill it with the city and phone number
    var details = listing.appendChild(document.createElement('div'));
    details.innerHTML = prop.city;
    if (prop.phone) {
      details.innerHTML += ' &middot; ' + prop.phoneFormatted;
    }
  }
}

function flyToStore(currentFeature) {
  map.flyTo({
    center: currentFeature.geometry.coordinates,
    zoom: 15
  });
}

function createPopUp(currentFeature) {
  var popUps = document.getElementsByClassName('mapboxgl-popup');
  // Check if there is already a popup on the map and if so, remove it
  if (popUps[0]) popUps[0].remove();

  var popup = new mapboxgl.Popup({ closeOnClick: false })
    .setLngLat(currentFeature.geometry.coordinates)
    .setHTML('<h3>Sweetgreen</h3>' +
      '<h4>' + currentFeature.properties.address + '</h4>')
    .addTo(map);
}


// Add an event listener for when a user clicks on the map
map.on('click', function(e) {
  // Query all the rendered points in the view
  var features = map.queryRenderedFeatures(e.point, { layers: ['locations'] });
  if (features.length) {
    var clickedPoint = features[0];
    // 1. Fly to the point
    flyToStore(clickedPoint);
    // 2. Close all other popups and display popup for clicked store
    createPopUp(clickedPoint);
    // 3. Highlight listing in sidebar (and remove highlight for all other listings)
    var activeItem = document.getElementsByClassName('active');
    if (activeItem[0]) {
      activeItem[0].classList.remove('active');
    }
    // Find the index of the store.features that corresponds to the clickedPoint that fired the event listener
    var selectedFeature = clickedPoint.properties.address;

    for (var i = 0; i < stores.features.length; i++) {
      if (stores.features[i].properties.address === selectedFeature) {
        selectedFeatureIndex = i;
      }
    }
    // Select the correct list item using the found index and add the active class
    var listing = document.getElementById('listing-' + selectedFeatureIndex);
    listing.classList.add('active');
  }
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
