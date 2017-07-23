var React = require("react");
var PetDirectoryForm = require("../Pet-Directory-Form");
var PetDirectory = require("../Pet-Directory");

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