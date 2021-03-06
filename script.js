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
  center: [-77.034084, 38.909671],
  //pitch: 80,
//  bearing: 60,
  // initial zoom
  zoom: 14
});
var stores =       {
        "type": "FeatureCollection",
        "features": [
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -77.034084142948,
                38.909671288923
              ]
            },
            "properties": {
              "phoneFormatted": "(202) 234-7336",
              "phone": "2022347336",
              "address": "1471 P St NW",
              "city": "Washington DC",
              "country": "United States",
              "crossStreet": "at 15th St NW",
              "postalCode": "20005",
              "state": "D.C."
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -77.049766,
                38.900772
              ]
            },
            "properties": {
              "phoneFormatted": "(202) 507-8357",
              "phone": "2025078357",
              "address": "2221 I St NW",
              "city": "Washington DC",
              "country": "United States",
              "crossStreet": "at 22nd St NW",
              "postalCode": "20037",
              "state": "D.C."
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -77.043929,
                38.910525
              ]
            },
            "properties": {
              "phoneFormatted": "(202) 387-9338",
              "phone": "2023879338",
              "address": "1512 Connecticut Ave NW",
              "city": "Washington DC",
              "country": "United States",
              "crossStreet": "at Dupont Circle",
              "postalCode": "20036",
              "state": "D.C."
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -77.0672,
                38.90516896
              ]
            },
            "properties": {
              "phoneFormatted": "(202) 337-9338",
              "phone": "2023379338",
              "address": "3333 M St NW",
              "city": "Washington DC",
              "country": "United States",
              "crossStreet": "at 34th St NW",
              "postalCode": "20007",
              "state": "D.C."
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -77.002583742142,
                38.887041080933
              ]
            },
            "properties": {
              "phoneFormatted": "(202) 547-9338",
              "phone": "2025479338",
              "address": "221 Pennsylvania Ave SE",
              "city": "Washington DC",
              "country": "United States",
              "crossStreet": "btwn 2nd & 3rd Sts. SE",
              "postalCode": "20003",
              "state": "D.C."
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -76.933492720127,
                38.99225245786
              ]
            },
            "properties": {
              "address": "8204 Baltimore Ave",
              "city": "College Park",
              "country": "United States",
              "postalCode": "20740",
              "state": "MD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -77.097083330154,
                38.980979
              ]
            },
            "properties": {
              "phoneFormatted": "(301) 654-7336",
              "phone": "3016547336",
              "address": "4831 Bethesda Ave",
              "cc": "US",
              "city": "Bethesda",
              "country": "United States",
              "postalCode": "20814",
              "state": "MD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -77.359425054188,
                38.958058116661
              ]
            },
            "properties": {
              "phoneFormatted": "(571) 203-0082",
              "phone": "5712030082",
              "address": "11935 Democracy Dr",
              "city": "Reston",
              "country": "United States",
              "crossStreet": "btw Explorer & Library",
              "postalCode": "20190",
              "state": "VA"
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -77.10853099823,
                38.880100922392
              ]
            },
            "properties": {
              "phoneFormatted": "(703) 522-2016",
              "phone": "7035222016",
              "address": "4075 Wilson Blvd",
              "city": "Arlington",
              "country": "United States",
              "crossStreet": "at N Randolph St.",
              "postalCode": "22203",
              "state": "VA"
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.28784,
                40.008008
              ]
            },
            "properties": {
              "phoneFormatted": "(610) 642-9400",
              "phone": "6106429400",
              "address": "68 Coulter Ave",
              "city": "Ardmore",
              "country": "United States",
              "postalCode": "19003",
              "state": "PA"
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.20121216774,
                39.954030175164
              ]
            },
            "properties": {
              "phoneFormatted": "(215) 386-1365",
              "phone": "2153861365",
              "address": "3925 Walnut St",
              "city": "Philadelphia",
              "country": "United States",
              "postalCode": "19104",
              "state": "PA"
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -77.043959498405,
                38.903883387232
              ]
            },
            "properties": {
              "phoneFormatted": "(202) 331-3355",
              "phone": "2023313355",
              "address": "1901 L St. NW",
              "city": "Washington DC",
              "country": "United States",
              "crossStreet": "at 19th St",
              "postalCode": "20036",
              "state": "D.C."
            }
          }
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
      'icon-image': 'restaurant-15',
      'icon-allow-overlap': true,
    }
  });
  buildLocationList(stores);
  const latlon = [[ 38.9007, -77.04972 ],
    [ 38.9007, -77.04883 ],
    [ 38.90202, -77.04883 ],
    [ 38.90236, -77.04883 ],
    [ 38.90264, -77.04881 ],
    [ 38.90293, -77.04881 ],
    [ 38.9039, -77.04881 ],
    [ 38.90489, -77.04789 ],
    [ 38.9053, -77.04752 ],
    [ 38.90622, -77.04664 ],
    [ 38.90806, -77.04491 ],
    [ 38.90857, -77.04446 ],
    [ 38.90896, -77.04404 ],
    [ 38.90906, -77.0439 ],
    [ 38.90908, -77.04377 ],
    [ 38.90904, -77.04358 ],
    [ 38.90903, -77.0434 ],
    [ 38.90905, -77.04321 ],
    [ 38.90911, -77.04305 ],
    [ 38.90918, -77.04291 ],
    [ 38.90923, -77.04284 ],
    [ 38.9093, -77.04278 ],
    [ 38.90948, -77.04269 ],
    [ 38.90953, -77.04267 ],
    [ 38.90958, -77.04258 ],
    [ 38.90961, -77.04249 ],
    [ 38.90964, -77.04216 ],
    [ 38.90964, -77.03656 ],
    [ 38.90965, -77.03411 ]];

    const lonlat = latlon.map(([lat,lon]) => {
      return [lon,lat];
    });

  map.addLayer({
      "id": "route",
      "type": "line",
      "source": {
          "type": "geojson",
          "data": {
              "type": "Feature",
              "properties": {},
              "geometry": {
                  "type": "LineString",
                  "coordinates": lonlat
              }
          }
      },
      "layout": {
          "line-join": "round",
          "line-cap": "round"
      },
      "paint": {
          "line-color": "#ff0000",
          "line-width": 4
      }
  });

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
