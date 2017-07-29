var React = require("react");
var helpers = require("../utils/helpers");
var Link = require("react-router").Link;
var PetSuccess = React.createClass({
render: function(){
    return (
<div className="modal fade" id="modal PetSuccess">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Success</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <p>Your pet has been added to our database!</p>
        <p>What would you like to do now?</p>
      </div>
      <div className="modal-footer">
        <Link to="/PetForm"><button type="button" className="btn btn-primary">Add New Pet</button></Link>
         <Link to="/PetDirectory"><button type="button" className="btn btn-primary" data-dismiss="modal">View Pet Directory</button></Link>
         <Link to="/" ><button type="button" className="btn btn-primary" data-dismiss="modal">Go Home</button></Link>
      </div>
    </div>
  </div>
</div>
    )
}

});

module.exports = PetSuccess;