var React = require("react");

var Calendar = React.createClass({
  render: function() {
    return (
      <div className="calendar-container">
        <iframe src="https://calendar.google.com/calendar/embed?showNav=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;mode=AGENDA&amp;height=300&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=milanwoodscalendar%40gmail.com&amp;color=%231B887A&amp;ctz=America%2FNew_York" id="google-calendar"/>
      </div>
    );
  }
});

module.exports = Calendar;