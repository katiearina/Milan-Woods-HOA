var express = require('express');
var path = require("path");
// var router = express.Router();
var pet_controller = require("../app/config/internal-api-routes");

module.exports = function(app) {

// call route to list pet date
app.get('/list', pet_controller.list);

// call route to post new pet data
app.post('/save', pet_controller.save);

};