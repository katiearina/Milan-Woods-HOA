var React = require("react");

var helpers = require("../utils/helpers");

var PetDirectoryForm = React.createClass({

    handleSubmit: function(event) {
    // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
    // clicking the button
    event.preventDefault();
      console.log("HELP");
    helpers.listQuery().then(function(response) {

    console.log(response);
   }.bind(this));
  },

  render: function() {
    return (

    <form onSubmit={this.handleSubmit}>
     <div className="form-group ">
      <label className="control-label requiredField" for="petname">
       Pet Name
       <span className="asteriskField">*</span>
      </label>
      <input className="form-control" id="petname" name="petname" type="text"/>
     </div>
     <div className="form-group ">
      <label className="control-label requiredField" for="ownername">
       Owner Name
       <span className="asteriskField">*</span>
      </label>
      <input className="form-control" id="ownername" name="ownername" type="text"/>
     </div>
     <div className="form-group ">
      <label className="control-label " for="address">
       Address
      </label>
      <input className="form-control" id="address" name="address" type="text"/>
     </div>
     <div className="form-group ">
      <label className="control-label " for="tel">
       Telephone #
      </label>
      <input className="form-control" id="tel" name="tel" type="text"/>
     </div>
     <div className="form-group">
      <div>
       <button className="btn btn-primary " name="submit" type="submit">
        Submit
       </button>
      </div>
     </div>
    </form>

    );
  }
});

module.exports = PetDirectoryForm;