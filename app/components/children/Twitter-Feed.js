var React = require("react");
var Timeline = require('react-twitter-widgets').Timeline;

var TwitterFeed = React.createClass({
  render: function() {
    return (
      <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: 'CityofDurhamNC'
          }}
          options={{
            username: 'CityofDurhamNC',
            height: '50vh'
          }}
          // onLoad={() => console.log('Timeline is loaded!')}
        />

      );
  }
});

module.exports = TwitterFeed;