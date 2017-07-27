var React = require("react");

// var Auth = require("../Auth");

// const auth = new Auth();
// auth.login();


var Home = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Home</h1>
          <iframe id="google-map" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD-spK8c4Z45hLR1FacjqWC-bbCNUX_8Xw&q=Milan+Woods,Durham+NC">
          </iframe>
      </div>
    );
  }
});

module.exports = Home;