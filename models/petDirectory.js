// initialize Mongoose
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// Create Pet directory Schema
var PetSchema = new Schema ({
    // Name of the pet
    petName : {
        type: String,
    },
    // Pet Owner name
    petOwner : {
        type: String
    },
    // Pet Owners Address
    petAddress : {
        type: String
    },
    // contact number for Pet
    petPhone: {
        type: String
    },
    // URL to S3 Image
    petImage: {
        type: String
    },
    // Description of the pet
    petDescription : {
        type: String
    }
})

var Pet = mongoose.model("Pet", PetSchema);

module.exports = Pet;