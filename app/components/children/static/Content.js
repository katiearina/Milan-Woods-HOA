var React = require("react");

var Content = React.createClass({
  render: function() {
    return (
      // Not sure where this row needs to go?
      <div class="row" id="main-row">
      
        <div class="col-9"> 
          <div class="main container"> 
              <h1>Test</h1> 
          </div> 
        </div>
      </div>
    );
  }
});

module.exports = Content;