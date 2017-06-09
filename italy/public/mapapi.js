const https = require('https')
const polyline = require('@mapbox/polyline')



const mapapi = (start, end, mode) => {
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
        const path = data.routes[0].overview_polyline.points
        resolve(polyline.decode(path+''));
      })
    }).on('error', (err) => {
      reject(err)
    })
  })


}
// async
mapapi("1471 P St NW, Washington, DC 20005, USA",
    "2221 I St NW, Washington, DC 20037, USA",
    "walking")
.then((x) => {
  console.log(x)
})

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
