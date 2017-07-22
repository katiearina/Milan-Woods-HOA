var React = require("react");

var BoardMembers = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Board Members</h1>
          <ul>
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
          </ul>
      </div>
    );
  }
});

module.exports = BoardMembers;