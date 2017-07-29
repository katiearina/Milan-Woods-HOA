var express = require('express');
var path = require("path");
// var router = express.Router();
var pet_controller = require("../app/config/internal-api-routes");
var ext_controller = require("../app/config/external-api-routes");

module.exports = function(app) {

// call route to list pet date
app.get('/list', pet_controller.list);

// call route to post new pet data
app.post('/save', pet_controller.save);

// call route to get S3 signature
app.post('/image', pet_controller.image);

// call route to get data from weather
app.get("/getWeather",ext_controller.getWeather);
};
