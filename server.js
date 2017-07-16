// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var dotenv = require("dotenv");
var mongoose = require("mongoose");
var path = require("path");
// Create a new express apps
var app = express();

var routes = require('./routes/routes')
// Require Pet Schema
var Pet = require("./models/petDirectory")

// loads environment variables from .env file into process.env
dotenv.load();

// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;

// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 3000;

// Run Morgan for Logging
app.use(logger("dev"));
// Setup bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
// Set public as static folder location
app.use(express.static("public"));
// Launch at app root location
app.use('/', routes);

// URI for Heroku deployment
var db = process.env.MONGODB_URI || "mongodb://localhost/petDirectory";

// Connect mongoose to our database
mongoose.connect(db, function(error) {
  // Log any errors connecting with mongoose
  if (error) {
    console.log(error);
  }
  // Or log a success message
  else {
    console.log("mongoose connection is successful");
  }
});

// Listen on the port
app.listen(PORT, function() {
  console.log("Listening on port:" + PORT);
});