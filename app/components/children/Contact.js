var React = require("react");

var Contact = React.createClass({
  render: function() {
    return (
      <div>
        <h2>Contact Us</h2>
          <div className="row">
            <div className="col-6">
              <h5 className="contact-header">Contact Katie:</h5>
                <i className="fa fa-github-square fa-4x purple-icon" aria-hidden="true" />
                <i className="fa fa-linkedin-square fa-4x purple-icon" aria-hidden="true" />
                <i className="fa fa-envelope-square fa-4x purple-icon" aria-hidden="true" />
            </div>
            <div className="col-6">
              <h5 className="contact-header">Contact Adrian:</h5>
                <i className="fa fa-github-square fa-4x purple-icon" aria-hidden="true" />
                <i className="fa fa-linkedin-square fa-4x purple-icon" aria-hidden="true" />
            </div>
          </div>
      </div>
    );
  }
});

module.exports = Contact;