var React = require("react");
var PetDirectoryForm = require("../Pet-Directory-Form");
var PetDirectory = require("../Pet-Directory");

var Content = React.createClass({
  render: function() {
    return (
        <div className="col-9"> 
          <div className="main container">
              {this.props.children}
          </div> 
        </div>
    );
  }
});

module.exports = Content;