var React = require("react");

var PayDues = React.createClass({
  render: function() {
    return (
      <div className="sidebar-links">
        <span className="hover-text">Pay Dues</span>
        <a href="http://www.mpmnc.com/dues.html" target="_blank">
          <i id="pay-dues" className="fa fa-usd" aria-hidden="true" />
        </a>
      </div>
    );
  }
});

module.exports = PayDues;
