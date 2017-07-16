var express = require('express');
var router = express.Router();
var pet_controller = require("../app/config/internal-api-routes");
// Render index.html
router.get('/', function(res, res) {
      res.send("HOME")
});

// call route to list pet date
router.get('/list', pet_controller.list);

// call route to post new pet data
router.post('/save', pet_controller.save);

module.exports = router;