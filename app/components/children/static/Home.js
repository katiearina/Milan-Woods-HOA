var React = require("react");

// var Auth = require("../Auth");

// const auth = new Auth();
// auth.login();


var Home = React.createClass({
      getInitialState: function(){
        return { mapUrl: ""};
    },

    componentWillMount: function() {

            this.setState({mapUrl: 'https://www.google.com/maps/embed/v1/place?key=AIzaSyD-spK8c4Z45hLR1FacjqWC-bbCNUX_8Xw&q=Milan+Woods,Durham+NC'})

    },
  render: function() {
    return (
      <div>
        <h1>Home</h1>
          {/* <iframe id="google-map" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD-spK8c4Z45hLR1FacjqWC-bbCNUX_8Xw&q=Milan+Woods,Durham+NC"> */}
          <iframe id="google-map" src={this.state.mapUrl}>
          </iframe>
      </div>
    );
  }
});

module.exports = Home;