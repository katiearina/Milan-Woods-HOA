var React = require("react");

var MapPin = React.createClass({
  render: function() {
    return (
      <div className="sidebar-links">
        <span className="hover-text">Show on Map</span>
        <a href="#">
          <i id="map-pin" className="material-icons">place</i>
        </a>
      </div>
    );
  }
});

module.exports = MapPin;
