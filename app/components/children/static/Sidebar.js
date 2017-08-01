var React = require("react");
var Weather = require("../Weather");
var Nextdoor = require("../Nextdoor");
var PayDues = require("../PayDues");
var MapPin = require("../MapPin");
var TwitterFeed = require("../Twitter-Feed");

var Sidebar = React.createClass({
  render: function() {
    return (
      <div className="col-3 sidebar">
        <div id="sidebar-content">
          <div className="row">
            <div className="col-4">
              <Nextdoor />
            </div>
            <div className="col-4">
              <PayDues />
            </div>
            <div className="col-4">
              <MapPin />
            </div>
          </div>
            <hr />
              <Weather />
            <hr />
              <TwitterFeed />
        </div>
      </div>
    );
  }
});

module.exports = Sidebar;