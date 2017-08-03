var React = require("react");
import {emojify} from 'react-emojione';
var helpers = require("../utils/helpers");
var Link = require("react-router").Link;

var PetSuccess = React.createClass({
  render: function(){
      return (
        <div className="modal fade" id="modal PetSuccess">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{emojify(':dog: Success! :smiley_cat:')}</h5>
                <Link to="/PetDirectory"><button type="button" onClick={this.props.closeModal} className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button></Link>
              </div>
              <div className="modal-body">
                <p>Your pet has been added to our database!</p>
                <p>What would you like to do now?</p>
              </div>
              <div className="modal-footer">
                <Link to="/PetForm"><p onClick={this.props.closeModal}>Add New Pet</p></Link>
                <Link to="/PetDirectory"><p data-dismiss="modal">View Pet Directory</p></Link>
                <Link to="/"><p data-dismiss="modal">Go Home</p></Link>
              </div>
            </div>
          </div>
        </div>
      )
  }

});

module.exports = PetSuccess;