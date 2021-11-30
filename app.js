const request = require('request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

// const url = 'http://api.weatherstack.com/current?access_key=62471bdb4baf1b0d98c55bbb0b565450&query=37.8267,-122.4233&units=f'

// request({ url: url, json: true}, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service!')
//     } else if (response.body.error) {
//         console.log('Unable to find location')
//     } else {
//         console.log(`It is currently ${response.body.current.temperature}. It feels like ${response.body.current.feelslike}`)

//     }
// });



// const geoCodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/atlanta.json?access_token=pk.eyJ1IjoiandoZWVsZXI1IiwiYSI6ImNrdzI5bXhtZTFxZ3Aydm1xdmh5cTdkOXcifQ.Kh5_0U5SmLC74PilrAKxKA';

// request({url: geoCodeURL, json:true}, (error, response)=>{
//     if(error){
//         console.log('Unable to connect to location services!')
//     } else if (response.body.features.length === 0) {
//         console.log('Unable to find location. Try another search')
//     } else {
//         const latitude = response.body.features[0].center[0]
//         const longitude = response.body.features[0].center[1]
//         console.log(`lat: ${latitude}, long: ${longitude}`)
//     }
    
// });                        


// const geocode = (address, callback) => {
//     const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address +'.json?access_token=pk.eyJ1IjoiandoZWVsZXI1IiwiYSI6ImNrdzI5bXhtZTFxZ3Aydm1xdmh5cTdkOXcifQ.Kh5_0U5SmLC74PilrAKxKA';

//     request ({ url:url, json: true}, (error, response ) => {
//         if (error) {
//             callback('Unable to connect to location services', undefined)
//         } else if ( response.body.features.length === 0){
//             callback('Unable to find location. Try another search.', undefined)
//         } else {
//             callback ( undefined, {
//                 latitude: response.body.features[0].center[0],
//                 longitude: response.body.features[0].center[1],
//                 location: response.body.features[0].place_name,
//             })
//         }
//     });

// };

geocode('Grand Island,', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})

forecast( 40.9243,-98.3387, (error, data) =>{
    console.log('Error', error)
    console.log('Data', data)
})
