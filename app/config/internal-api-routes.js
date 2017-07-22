var Pets = require("../../models/petDirectory");

// save to the database
exports.save = function(req, res) {
    // res.send("In SAVE");
    console.log("In SAVE")
    // console.log(req)
    Pets.create({
        petName : req.body.petname,
        petOwner : req.body.ownername,
        petAddress: req.body.address,
        petPhone : req.body.tel

    }, function(err) {
        if (err) {
            console.log(err);
        }
        else {
            res.send("Saved Search");
            console.log("SAVED");
        }
    });
};

// return data from database
exports.list = function(req, res) {
    // res.send("IN LIST")
    console.log("In List")
};

