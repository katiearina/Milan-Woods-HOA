var React = require("react");

var AuthPanel = React.createClass({
  render: function() {
    return (
      <div id="auth-panel">
        <h5><div id="auth-message" /></h5>
          <div id="btn-login"><h6>Log In: <i className="fa fa-key" aria-hidden="true" /></h6></div>
          <div id ="btn-logout">Log Out: <i className="fa fa-sign-out" aria-hidden="true" /></div>
      </div>
    );
  }
});

module.exports = AuthPanel;
