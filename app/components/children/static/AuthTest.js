var React = require("react");

var AuthTest = React.createClass({
  render: function() {
    return (

      <div className="content">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">Auth0 - JavaScript</a>

              <button id="btn-home-view" className="btn btn-primary btn-margin">
                  Home
              </button>

              <button id="btn-login" className="btn btn-primary btn-margin">
                  Log In
              </button>

              <button id="btn-logout" className="btn btn-primary btn-margin">
                  Log Out
              </button>

            </div>
          </div>
        </nav>

        <main className="container">
          <div id="home-view">
            <h4></h4>
          </div>
          
        </main>

      </div>

    );
  }
});

module.exports = AuthTest;
