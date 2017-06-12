const https = require('https')
const polyline = require('@mapbox/polyline')
const fs = require('fs')

const  mapapi = (start, end, mode) => {
  return new Promise((resolve, reject) => {
    const url = 'https://maps.googleapis.com/maps/api/directions/json?origin=' + start + '&destination=' + end +'&mode=' + mode;
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

let paths = [];
// async

const wrapper = (origin, destination) => {
  mapapi(origin,
      destination,
      "transit")
  .then((data) => {
    const path = data.routes[0].overview_polyline.points
    const coords = polyline.decode(path+'')
    const distance = data.routes[0].legs[0].distance.text
    const duration = data.routes[0].legs[0].duration.text
    paths = {
      origin: origin,
      destination: destination,
      path: path,
      coords: coords,
      distance: distance,
      duration: duration
    }
    //console.log(paths)
    fs.writeFileSync(origin+destination+'.json', JSON.stringify(paths, null, 2) , 'utf-8');
  })
}

wrapper(termini.roma, termini.napoli);
wrapper(termini.napoli, termini.capri);
wrapper(termini.napoli, termini.milano);
wrapper(termini.milano, termini.venezia);
wrapper(termini.venezia, termini.roma);


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
