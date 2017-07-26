var React = require("react");

var Sidebar = React.createClass({
  render: function() {
    return (
      <div className="col-3 sidebar">
        <div id="sidebar-content">
          <h4>Sidebar Test</h4>
          <hr />
          <a href="https://nextdoor.com/neighborhood/milanwoods--durham--nc/" target="_blank">Join Nextdoor</a>
          <hr />
          <iframe src="https://calendar.google.com/calendar/embed?showNav=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;mode=AGENDA&amp;height=300&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=milanwoodscalendar%40gmail.com&amp;color=%231B887A&amp;ctz=America%2FNew_York" id="google-calendar"/>
          <hr />
        </div>
      </div> 
    );
  }
});

module.exports = Sidebar;