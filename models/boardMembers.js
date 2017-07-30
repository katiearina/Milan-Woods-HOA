// initialize Mongoose
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// Create Board Member Schema
var BoardMemberSchema = new Schema ({
    // Board member name
    memberName : {
        type: String,
    },
    // Board member position
    position : {
        type: String
    },
    // Board member's address
    streetAddress : {
        type: String
    },
    // Board member's email address
    emailAddress: {
        type: String
    },
    // Board member's phone number
    phoneNumber: {
        type: String
    },
    // When board member's term ends
    termEnd: {
        type: String
    },
    // URL to S3 Image (optional, but figured I'd include this just in case)
    boardMemberImage : {
        type: String
    }
})

var BoardMember = mongoose.model("BoardMember", BoardMemberSchema);

module.exports = BoardMember;