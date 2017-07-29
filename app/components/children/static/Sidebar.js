var React = require("react");
var Weather = require("../Weather");

var Sidebar = React.createClass({
  render: function() {
    return (
      <div className="col-3 sidebar">
        <div id="sidebar-content">
          <h4>Sidebar Test</h4>
            <hr />
              <a href="https://nextdoor.com/neighborhood/milanwoods--durham--nc/" target="_blank">
                <img id="nextdoor" src="./assets/images/nextdoor-logo.png" alt="Join Nextdoor" />
              </a>
              <a href="http://www.mpmnc.com/dues.html" target="_blank">
                <i id="pay-dues" className="fa fa-usd" aria-hidden="true" />
              </a>
            <hr />
              <Weather />
        </div>
      </div>
    );
  }
});

module.exports = Sidebar;