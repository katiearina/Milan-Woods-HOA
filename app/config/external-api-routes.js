var weather = require("weather-js");

exports.getWeather = function(req, res){

// Then we use the package to search for the weather at a location
weather.find({ search: "Durham, NC", degreeType: "F" }, function(err, result) {

  // If there is an error log it.
  if (err) {
    console.log(err);
  }
  else {
    //   console.log(result.data.current);
    var return_data = {
        temp : result[0].current.temperature,
        day: result[0].current.shortday,
        wind: result[0].current.winddisplay,
        image:result[0].current.imageUrl
      };
        console.log(result[0].current.temperature)
        console.log(result[0].current.shortday)
        console.log(result[0].current.winddisplay)
        console.log(result[0].current.imageUrl)

       res.json(return_data);
  }

});

};