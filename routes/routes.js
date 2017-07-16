var express = require('express');
var router = express.Router();
var pet_controller = require("../app/config/internal-api-routes");
var path = require("path");
// Render index.html

router.get('/home', function(req, res) {
    console.log("In ROOT")
    res.sendFile(path.join(__dirname,'../public','index-design.html'));
});

// call route to list pet date
router.get('/list', pet_controller.list);

// call route to post new pet data
router.post('/save', pet_controller.save);

module.exports = router;