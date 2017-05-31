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
  zoom: 16
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
