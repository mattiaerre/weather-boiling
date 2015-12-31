var express = require('express');
var http = require('http');
var router = express.Router();

var apiKey = process.env.OPENWEATHERMAPORG_APIKEY;

router.get('/', function (req, res, next) {
    getWeather(req.query.q, function (weather) {
        res.send({ weather: weather });
    }); // info: not sure about this
});

function getWeather(q, callback) {
    return http.get({
        host: 'api.openweathermap.org',
        path: '/data/2.5/weather?q=' + q + '&appid=' + apiKey + '&units=metric' // see: http://openweathermap.org/current#name
    }, function (response) {
        var body = '';
        response.on('data', function (d) {
            body += d;
        });
        response.on('end', function () {
            var parsed = JSON.parse(body);
            callback(parsed);
        });
    });
}

module.exports = router;