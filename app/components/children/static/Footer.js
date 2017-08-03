var React = require("react");
var Link = require("react-router").Link;

var Footer = React.createClass({
  render: function() {
    return (
      <footer id="footer">
        <p>Created by <a href="https://github.com/Organization-Nombre/Milan-Woods-HOA#milan-woods-hoa" target="_blank">Katie & Adrian!</a>      &copy; 2017 &mdash; Want to <Link to="/Contact">contact us</Link>?</p>
      </footer>
    );
  }
});

module.exports = Footer;