var weather = require("weather-js");
// var twitter_mod = require("twitter");
var dotenv = require("dotenv");
dotenv.load();

exports.getWeather = function(req, res){

// Then we use the package to search for the weather at a location
weather.find({ search: "Durham, NC", degreeType: "F" }, function(err, result) {

  // If there is an error log it.
  if (err) {
    console.log(err);
  }
  else {

    var return_data = {
        temp : result[0].current.temperature,
        day: result[0].current.shortday,
        wind: result[0].current.winddisplay,
        image:result[0].current.imageUrl
      };
       res.json(return_data);
  }

});

};

// exports.getTwitter = function(req, res) {
//   var twitterAccount = "DurhamPoliceNC"
//   var client = new twitter_mod({
//       consumer_key: process.env.CONSUMER_KEY,
//       consumer_secret: process.env.CONSUMER_SECRET,
//       access_token_key: process.env.ACCESS_TOKEN_KEY,
//       access_token_secret: process.env.ACCESS_TOKEN_SECRET
//     });

//     var params = {
//         screen_name: twitterAccount,
//         count: 10
//       };
//     client.get('statuses/user_timeline', params, function(error, tweets, response) {
//         // if (error) throw error;
//         //  console.log(tweets);
//          res.json(tweets);

//     });

// }

