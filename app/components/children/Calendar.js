var React = require("react");

var Calendar = React.createClass({
  render: function() {
    return (
      <div>
        <h2>Calendar</h2>
        <div className="calendar-container">
          <iframe src="https://calendar.google.com/calendar/embed?showTitle=0&amp;showNav=0&amp;showPrint=0&amp;showCalendars=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=milanwoodscalendar%40gmail.com&amp;color=%231B887A&amp;ctz=America%2FNew_York" id="google-calendar" />
        </div>
      </div>
    );
  }
});

module.exports = Calendar;