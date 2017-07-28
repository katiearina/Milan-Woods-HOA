var React = require("react");
var helpers = require("../utils/helpers");
var Link = require("react-router").Link;
var PetFailure = React.createClass({
render: function(){
    return (
<div className="modal fade" id="modal PetFailure">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Failure</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <p>Something went wrong please try again later.</p>
      </div>
      <div className="modal-footer">
         <Link to="/PetDirectory"><button type="button" className="btn btn-primary" data-dismiss="modal">View Pet Directory</button></Link>
         <Link to="/" ><button type="button" className="btn btn-primary" data-dismiss="modal">Home</button></Link>
      </div>
    </div>
  </div>
</div>
    )
}

});

module.exports = PetFailure;