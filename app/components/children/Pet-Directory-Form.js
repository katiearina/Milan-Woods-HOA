var React = require("react");

var helpers = require("../utils/helpers");

var PetDirectoryForm = React.createClass({

  getInitialState: function() {
    return {
      petname: "",
      ownername: "",
      address: "",
      tel: ""
    };
  },

  handleInputChange: function(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  },

  handleSubmit: function(event) {
    event.preventDefault();
    helpers.saveQuery(this.state).then(function(response) {
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
      <input className="form-control" id="petname" name="petname" type="text" onChange={this.handleInputChange}/>
     </div>
     <div className="form-group ">
      <label className="control-label requiredField" for="ownername">
       Owner Name
       <span className="asteriskField">*</span>
      </label>
      <input className="form-control" id="ownername" name="ownername" type="text" onChange={this.handleInputChange}/>
     </div>
     <div className="form-group ">
      <label className="control-label " for="address">
       Address
      </label>
      <input className="form-control" id="address" name="address" type="text" onChange={this.handleInputChange}/>
     </div>
     <div className="form-group ">
      <label className="control-label " for="tel">
       Telephone #
      </label>
      <input className="form-control" id="tel" name="tel" type="text" onChange={this.handleInputChange}/>
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