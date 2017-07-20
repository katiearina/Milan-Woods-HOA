var express = require('express');
var path = require("path");
var router = express.Router();
var pet_controller = require("../app/config/internal-api-routes");

module.exports = function(app) {

// call route to list pet date
router.get('/list', pet_controller.list);

// call route to post new pet data
router.post('/save', pet_controller.save);

// Render index.html
router.get('/', function(res, res) {
      res.sendFile(path.join(__dirname, '../public', 'index-design.html'));
});

};

// module.exports = router;