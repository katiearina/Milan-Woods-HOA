// file upload code comes from
// http://blog.pragmasoft.com.tr/how-to-upload-image-binary-etc-data-directly-to-amazon-s3/

var React = require("react");
var Route = require("react-router").Route;
var Redirect = require("react-router").Redirect;
var $ = require("jquery");
var helpers = require("../utils/helpers");

var PetDirectoryForm = React.createClass({

  getInitialState: function() {
    return {
      petname: "",
      ownername: "",
      address: "",
      tel: "",
      imageUrl: "",
      details: "",
      uploading: false,
      uploadedPercent: 0,
      image : "http://via.placeholder.com/150x150"
    };
  },

  uploadFile: function(file,signed_request,response_url){
    this.setState({ uploading : true });
    var xhr = new XMLHttpRequest();
    xhr.upload.onprogress = function(e){
      if (e.lengthComputable){
        var percentComplete = ( (e.loaded / e.total) * 100 ).toFixed(2);
        this.setState({ uploadedPercent : percentComplete });
      }
    }.bind(this);

    xhr.open("PUT", signed_request);
    xhr.setRequestHeader("Cache-Control", "public,max-age=3600");
    xhr.setRequestHeader('x-amz-acl', 'public-read');
    xhr.onload = function() {
      if (xhr.status === 200) {
        console.log("file uploaded succesfully");
        console.log(response_url);
      }
    }.bind(this);
    xhr.onerror = function() {
      this.setState({ uploading : false });
      toastr.error('Could not upload file. Please try again!');
    }.bind(this);
    xhr.send(file);
    this.setState({  imageUrl : response_url, uploading : false });
  },

  getSignedRequest: function(file){
    // console.log('getSignedRequest');
    var fileObject = { file : { type : file.type, size : file.size } };
    // console.log(fileObject);
    $.ajax({
      url: "/image",
      data : JSON.stringify(fileObject),
      contentType: "application/json; charset=utf-8",
      dataType: 'json',
      cache: false,
      method : 'POST',
      success: function(data) {
        this.uploadFile( file, data.data.requestUrl, data.data.imageUrl );
        // console.log('requestURL');
        // console.log(data.data.requestUrl);
        // console.log('imgeURL');
        // console.log(data.data.imageUrl);

      }.bind(this),
      error: function(xhr, status, err) {
        console.log('Error on getting signed request : ',err);
      }.bind(this),
    });
  },

  fileOnChange: function(e){
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
       image : reader.result
      });
    };

    reader.readAsDataURL(file)
    // var file = e.target.files[0];
    // console.log(e.target);
    if( file ){
      if( file.type == "image/png" || file.type == "image/jpeg" || file.type == "image/jpg"){
        if( file.size > 2200000 ){
          console.log("Image is too big! Image must me 2 mb at max!");
        }else{
          console.log("will get signed request!");
          this.setState({image : e.target.result});
          this.getSignedRequest(file);
        }
      }else{
        console.log("Wrong file type! file type must be png, jpg or jpeg!");
      }
    }else{
      console.log("File was null!");
    }
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
    var payload  = {
      petName : this.state.petname,
      petOwner : this.state.ownername,
      petAddress: this.state.address,
      petPhone : this.state.tel,
      petImage : this.state.imageUrl,
      petDescription : this.state.details
    };

    helpers.saveQuery(payload).then(function(response) {
    console.log(response);
   }.bind(this));

  },

  render: function() {
    return (

    <form onSubmit={this.handleSubmit} enctype="multipart/form-data">
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
     <div className="form-group ">
      <label className="control-label " for="tel">
       Description
      </label>
      <input className="form-control" id="details" name="details" type="textarea" rows={5} onChange={this.handleInputChange}/>
     </div>
      <div className="form-group ">
      <label className="control-label col-3" for="upl">
       Pet Photo
      </label>
      {/* <input className="form-control" id="upl" name="upl" type="file" onChange={this.handleInputChange}/> */}
      <img style={{ border : '1px solid black' }} height={150} width={150} src={this.state.image} alt="Upload Pet Image"/>
      <input className="form-control" type="file" onChange={this.fileOnChange}/>
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