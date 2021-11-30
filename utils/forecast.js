const request = require ('request')

const forecast = (longitude,latitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=62471bdb4baf1b0d98c55bbb0b565450&query=' + longitude + ',' + latitude + '&units=f';
    console.log(url)
    request({ url: url, json: true}, (error, response) => {
            if (error) {
                callback ('Unable to connect to weather service!', undefined)
            } else if (response.body.error) {
                callback ('Unable to find location', undefined)
            } else {
                callback (undefined, ` Currently in ${response.body.location.name} it is ${response.body.current.temperature}F°. It feels like ${response.body.current.feelslike}F°`)
        
            }
        })
};

module.exports = forecast

