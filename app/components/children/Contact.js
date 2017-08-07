var React = require("react");

var Contact = React.createClass({
  render: function() {
    return (
      <div>
        <h2>Contact Us</h2>
          <div className="row">
            <div className="col-6">
              <h5 className="contact-header">Contact Katie:</h5>
                <a href="https://github.com/katiearina/" target="_blank"><i className="fa fa-github-square fa-4x purple-icon" aria-hidden="true" /></a>
                <a href="https://www.linkedin.com/in/katie-geckle/" target="_blank"><i className="fa fa-linkedin-square fa-4x purple-icon" aria-hidden="true" /></a>
                <a href="mailto:katie.geckle@gmail.com?subject=Hello!"><i className="fa fa-envelope-square fa-4x purple-icon" aria-hidden="true" /></a>
            </div>
            <div className="col-6">
              <h5 className="contact-header">Contact Adrian:</h5>
                <a href="https://github.com/event--horizon/" target="_blank"><i className="fa fa-github-square fa-4x purple-icon" aria-hidden="true" /></a>
            </div>
          </div>
      </div>
    );
  }
});

module.exports = Contact;