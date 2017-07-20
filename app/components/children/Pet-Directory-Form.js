var React = require("react");

var PetDirectoryForm = React.createClass({
  render: function() {
    return (

    <form method="post">
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