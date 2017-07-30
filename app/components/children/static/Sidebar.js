var React = require("react");
var Weather = require("../Weather");
var Nextdoor = require("../Nextdoor");
var PayDues = require("../PayDues");

var Sidebar = React.createClass({
  render: function() {
    return (
      <div className="col-3 sidebar">
        <div id="sidebar-content">
          <h4>Sidebar Test</h4>
            <hr />
              <Nextdoor />
              <PayDues />
            <hr />
              <Weather />
        </div>
      </div>
    );
  }
});

module.exports = Sidebar;