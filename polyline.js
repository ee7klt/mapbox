var polyline = require('@mapbox/polyline');

// returns an array of lat, lon pairs
var path  = polyline.decode('kxllFvwguM?qDgG?cA?w@Cy@?aE?eEwDqAiAwDoDoJyIeByAmAsAS[CYFe@@c@Ce@K_@M[IMMKc@QICIQEQEaA?_b@AiN');
console.log(path)
// // returns a string-encoded polyline
// polyline.encode([[38.5, -120.2], [40.7, -120.95], [43.252, -126.453]]);
//
// // returns a string-encoded polyline from a GeoJSON LineString
// polyline.fromGeoJSON({ "type": "Feature",
//   "geometry": {
//     "type": "LineString",
//     "coordinates": [[-120.2, 38.5], [-120.95, 40.7], [-126.453, 43.252]]
//   },
//   "properties": {}
// });
