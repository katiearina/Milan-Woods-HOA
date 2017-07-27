var React = require("react");

var Header = React.createClass({
  render: function() {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <button className="btn" id="btn-login">Sign In</button>
          <a href="/"><h1 id="pageHeader">Milan Woods Neighborhood</h1></a>
          <h5>Durham, NC &ndash; Established 1987</h5>
        </div>
      </div>
    );
  }
});

module.exports = Header;