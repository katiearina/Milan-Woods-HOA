var React = require("react");

var Sidebar = React.createClass({
  render: function() {
    return (
      <div className="col-3 sidebar">
        <div id="sidebar-content">
          <h4>Sidebar Test</h4>
          <hr />
          <a href="https://nextdoor.com/neighborhood/milanwoods--durham--nc/" target="_blank">Join Nextdoor</a>
          <hr />
        </div>
      </div> 
    );
  }
});

module.exports = Sidebar;