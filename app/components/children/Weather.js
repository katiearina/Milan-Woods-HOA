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
            <p>Temp : {this.state.temp}</p>
            <p>Day  : {this.state.day}</p>
            <p>Wind : {this.state.wind}</p>
            <img src={this.state.image}/>
        </div>
        );
    }

});

module.exports = Weather;