const https = require('https')
const polyline = require('@mapbox/polyline')
const fs = require('fs')

const  mapapi = (start, end, mode) => {
  return new Promise((resolve, reject) => {
    const url = 'https://maps.googleapis.com/maps/api/directions/json?origin=' + start + '&destination=' + end +'&travelmode=' + mode;
    https.get(url, (res) => {
      var body = ''
      res.on('data', (chunk) => {
        body += chunk
      })
      res.on('end', () => {
        console.log('================')
        const data = JSON.parse(body)
        // const path = data.routes[0].overview_polyline.points
        // console.log(path)
        resolve(data);
      })
    }).on('error', (err) => {
      reject(err)
    })
  })


}


const termini = {
  roma: 'Termini, Rome, Metropolitan City of Rome, Italy',
  napoli: 'Napoli Centrale, Piazza Giuseppe Garibaldi, Naples, Metropolitan City of Naples, Italy',
  milano: 'Milano Centrale Railway Station, Milan, Metropolitan City of Milan, Italy',
  venezia: 'Stazione di Venezia Santa Lucia, Venice, Metropolitan City of Venice, Italy',
  capri: 'Capri, Marina Grande, Metropolitan City of Naples, Italy'
}

const trips = {
  roma_napoli: {
      mode: "freccia",
      departure_time: new Date(2017,6,24,10,53,0),
      arrival_time: new Date(2017,6,24,12,0,0),
      departure_station: 'Termini, Rome, Metropolitan City of Rome, Italy',
      arrival_station:'Napoli Centrale, Piazza Giuseppe Garibaldi, Naples, Metropolitan City of Naples, Italy'
  },
  napoli_capri: {
      mode:"ferry",
      departure_time: new Date(2017,6,24,12,40,0),
      arrival_time: new Date(2017,6,24,13,30,0),
      departure_station: 'Molo Beverello, 80133 Napoli, Italy',
      arrival_station:'Capri, Marina Grande, Metropolitan City of Naples, Italy'
  },
  capri_sorrento: {
      mode:"ferry",
      departure_time: new Date(2017,6,25,16,05,0),
      arrival_time: new Date(2017,6,25,16,25,0),
      departure_station:'Capri, Marina Grande, Metropolitan City of Naples, Italy',
      arrival_station: 'Porto di Sorrento, 80067 Sorrento, Metropolitan City of Naples, Italy'
  },
  napoli_milano: {
      mode:"freccia",
      departure_time:new Date(2017,6,26,6,10,0),
      arrival_time:  new Date(2017,6,26,10,29,0),
      departure_station: 'Napoli Centrale, Piazza Giuseppe Garibaldi, Naples, Metropolitan City of Naples, Italy',
      arrival_station:'Milano Centrale Railway Station, Milan, Metropolitan City of Milan, Italy'
  },
  milano_venezia: {
      mode:"freccia",
      departure_time: new Date(2017,6,27,8,15,0),
      arrival_time: new Date(2017,6,27,10,40,0),
      departure_station: 'Milano Centrale Railway Station, Milan, Metropolitan City of Milan, Italy',
      arrival_station:'Stazione di Venezia Santa Lucia, Venice, Metropolitan City of Venice, Italy'
  },
  venezia_roma: {
      mode:"freccia",
      departure_time:new Date(2017,6,28,17,25,0),
      arrival_time: new Date(2017,6,28,21,10,0),
      departure_station:'Stazione di Venezia Santa Lucia, Venice, Metropolitan City of Venice, Italy',
      arrival_station: 'Termini, Rome, Metropolitan City of Rome, Italy'
  }
}

const departure_time = {
  roma: new Date(2017,6,24,10,53,0),
  napoli:  new Date(2017,6,26,6,10,0),
  milano:  new Date(2017,6,27,8,15,0),
  venezia:  new Date(2017,6,28,17,25,0)

}
const arrival_time = {
  napoli: new Date(2017,6,24,12,0,0),
  milano:  new Date(2017,6,26,10,29,0),
  venezia:  new Date(2017,6,27,10,40,0),
  roma:  new Date(2017,6,28,21,10,0)
}

let paths = [];
// async
// wrapper returns a promise to resolve with the entire 'trips' object
// (updated to include path coordinates and distance from 'origin' to 'destination')
// coords: path coordinates from origin to destination
// distance: distance from origin to destination
const wrapper = (origin, destination) => {
  const trip = trips[origin+'_'+destination];
  const departure_station = trip.departure_station;
  const arrival_station = trip.arrival_station;
  return new Promise((resolve,reject) => {
    mapapi(departure_station,
        arrival_station,
        "transit")
    .then((data) => {
      console.log("updating data for trip from  "+origin+" to "+destination )
      if (data === undefined) reject(data);
      const path = data.routes[0].overview_polyline.points
      const coords = polyline.decode(path+'')
      const distance = data.routes[0].legs[0].distance.text
      const duration = data.routes[0].legs[0].duration.text
      trip.coords = coords.map(([lat,lon]) => {return [lon,lat]});
      trip.distance = distance;
      trip.polyline = path;
      paths = {
        origin: origin,
        destination: destination,
        path: path,
        coords: coords.map(([lat,lon]) => {return [lon,lat]}),
        distance: distance,
        duration: duration
      }
      trips[origin+'_'+destination] = trip;
      resolve(trips);
    })
  })

}

// wait Promises for all trips to resolve
// then take the most recently updated 'trips' object and write it to file
Promise.all([
  wrapper('roma','napoli'),
  wrapper('napoli','capri'),
  wrapper('capri','sorrento'),
  wrapper('napoli','milano'),
  wrapper('milano','venezia'),
  wrapper('venezia','roma'),
]).then((data) => {
  console.log('done retrieving data. writing file now')
  fs.writeFileSync('trips.json', JSON.stringify(data[5], null, 2) , 'utf-8');
})


//fs.writeFileSync(origin+destination+'.json', JSON.stringify(trips, null, 2) , 'utf-8');
// wrapper(termini.roma, termini.napoli);
// wrapper(termini.napoli, termini.capri);
// wrapper(termini.napoli, termini.milano);
// wrapper(termini.milano, termini.venezia);
// wrapper(termini.venezia, termini.roma);


//fs.writeFileSync('./data.json', JSON.stringify(paths, null, 2) , 'utf-8');


// sync
// const mapapi = (start, end, mode) => {
//     const url = 'https://maps.googleapis.com/maps/api/directions/json?origin=' + start + '&destination=' + end +'&mode=' + mode;
//     https.get(url, (res) => {
//       var body = ''
//       res.on('data', (chunk) => {
//         body += chunk
//       })
//       res.on('end', () => {
//         const data = JSON.parse(body)
//         const path = data.routes[0].overview_polyline.points
//         console.log(path)
//         return path
//         //return polyline.decode(path+'')
//       })
//     }).on('error', (err) => {
//       console.log(err)
//     })
//   }
// sync
// const path = mapapi("1471 P St NW, Washington, DC 20005, USA",
//     "2221 I St NW, Washington, DC 20037, USA",
//     "walking")
// console.log(path)
