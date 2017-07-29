var React = require("react");
var Weather = require("../Weather");

var Sidebar = React.createClass({
  render: function() {
    return (
      <div className="col-3 sidebar">
        <div id="sidebar-content">
          <h4>Sidebar Test</h4>
          <hr />
          <a href="https://nextdoor.com/neighborhood/milanwoods--durham--nc/" target="_blank">
            <img id="nextdoor" src="./assets/images/nextdoor-logo.png" alt="Join Nextdoor" />
          </a>
          <a href="http://www.mpmnc.com/dues.html" target="_blank">
            <i id="pay-dues" className="fa fa-usd" aria-hidden="true" />
          </a>
          <hr />
          <iframe src="https://calendar.google.com/calendar/embed?showNav=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;mode=AGENDA&amp;height=300&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=milanwoodscalendar%40gmail.com&amp;color=%231B887A&amp;ctz=America%2FNew_York" id="google-calendar"/>
          <hr />

            <Weather />

        </div>
      </div>
    );
  }
});

module.exports = Sidebar;