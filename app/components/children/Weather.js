var React = require("react");
var helpers = require("../utils/helpers");
var OpenWeatherMap = require('react-weather').OpenWeatherMap;

var WEATHERAPI = '7ec0e47619bb7a03a470e7c4397c7dfe'
 console.log(WEATHERAPI);
var Weather = React.createClass({

   render: function (){
        return (
        <div>
            <h1>WEATHER GOES HERE</h1>
        </div>
        );
    }

});

module.exports = Weather;