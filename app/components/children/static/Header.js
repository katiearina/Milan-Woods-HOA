var React = require("react");

var Header = React.createClass({
  render: function() {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <a href="/"><h1 id="pageHeader">Milan Woods Community</h1></a>
          <h5>Established 1987</h5>
        </div>
      </div>
    );
  }
});

module.exports = Header;