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
        <h5 className="modal-title" id="failure-modal-title">Oh no!</h5>
        <Link to="/PetForm"><button type="button" onClick={this.props.closeModal} className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button></Link>
      </div>
      <div className="modal-body">
        <p>Something went wrong please try again later.</p>
      </div>
      <div className="modal-footer">
         <Link to="/PetDirectory"><p data-dismiss="modal">View Pet Directory</p></Link>
         <Link to="/"><p data-dismiss="modal">Home</p></Link>
      </div>
    </div>
  </div>
</div>
    )
}

});

module.exports = PetFailure;