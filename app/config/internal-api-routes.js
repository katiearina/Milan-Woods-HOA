var Pets = require("../../models/petDirectory");

// save to the database
exports.save = function(req, res) {
    res.send("In SAVE");
};

// return data from database
exports.list = function(req, res) {
    res.send("IN LIST")
};

