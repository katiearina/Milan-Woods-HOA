var React = require("react");

var PetDirectory = React.createClass({
  render: function() {
    return (
        <div className="panel panel-default">
            <div className="panel-heading">
                <h3 className="panel-title text-center">Pet Directory</h3>
            </div>
            <div className="panel-body text-center">
                <div className="row">
                    <div className="col-8">
                        <h3>Pet Name</h3>
                        <h3>Pet Owner</h3>
                        <h3>Pet Telephone</h3>
                    </div>
                    <div className="col-4">
                        <a href="https://placeholder.com"><img src="http://via.placeholder.com/150x150"/></a>
                    </div>
                </div>

            </div>
        </div>
    );
  }
});

module.exports = PetDirectory;