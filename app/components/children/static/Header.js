var React = require("react");

var Header = React.createClass({
  render: function() {
    return (
      <div className="jumbotron jumbotron-fluid">
          <div id="auth-panel">
            <div id="auth-message" />
            <i id="btn-home-view" className="fa fa-home" aria-hidden="true" />
            <i id="btn-login" className="fa fa-key" aria-hidden="true" />
            <i id="btn-logout" className="fa fa-sign-out" aria-hidden="true" />
          </div>
        <div className="container">
          <a href="/"><h1 id="pageHeader">Milan Woods Neighborhood</h1></a>
          <h5>Durham, NC &ndash; Established 1987</h5>
        </div>
      </div>
    );
  }
});

module.exports = Header;