var React = require("react");

var Nextdoor = React.createClass({
  render: function() {
    return (
      <div className="sidebar-links">
        {/*<<span className="hover-text">Join Nextdoor</span>*/}
        <a href="https://nextdoor.com/neighborhood/milanwoods--durham--nc/" target="_blank">
          <img id="nextdoor" src="./assets/images/nextdoor-logo.png" alt="Join Nextdoor" />
        </a>
      </div>
    );
  }
});

module.exports = Nextdoor;
