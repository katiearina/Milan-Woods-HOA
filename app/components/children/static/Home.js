var React = require("react");

var Home = React.createClass({
  render: function() {
    return (
      <div>
        <h2>Welcome to Milan Woods!</h2>
        <p>We are a close-knit 243-home community nestled within a wooded area in east Durham.</p>
        <p>Our HOA president, Steve McNulty, and neighborhood watch coordinator and board Historian, Rob Corns, were recently named the April 2017 Neighbor Spotlight recipients from the City of Durham &mdash; Read that article here!</p>
      </div>
    );
  }
});

module.exports = Home;