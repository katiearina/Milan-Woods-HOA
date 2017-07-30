var React = require("react");
var helpers = require("../utils/helpers");

var Weather = React.createClass({
    getInitialState : function(){
        return {
            temp  : "",
            day   : "",
            wind  : "",
            image : ""
        }
    },

    componentWillMount : function () {
        console.log("COMPONENT MOUNTED");

    // The moment the page renders on page load, we will retrieve the previous click count.
    // We will then utilize that click count to change the value of the click state.
    helpers.weatherQuery()
      .then(function(response) {

        this.setState({ temp : response.data.temp });
        this.setState({ day : response.data.day });
        this.setState({ wind : response.data.wind });
        this.setState({ image : response.data.image });

      }.bind(this));
    },

    render : function (){
        return (
        <div>
          <h5>Current Weather</h5>
            <img src={this.state.image}/>
            <p>Temperature: {this.state.temp}&deg;<span id="fahrenheit">F</span></p>
            <p>Wind: {this.state.wind}</p>
        </div>
        );
    }

});

module.exports = Weather;