var React = require("react");

var AuthPanel = React.createClass({
  render: function() {
    return (
      <div id="auth-panel">
        <div id="auth-message" />
          <div id="btn-login">Log In: <i className="fa fa-key" aria-hidden="true" /></div>
          <div id ="btn-logout">Log Out: <i className="fa fa-sign-out" aria-hidden="true" /></div>
      </div>
    );
  }
});

module.exports = AuthPanel;
