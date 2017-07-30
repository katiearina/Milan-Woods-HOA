var React = require("react");
var Timeline = require('react-twitter-widgets').Timeline;

var TwitterFeed = React.createClass({
<<<<<<< HEAD

    getInitialState: function(){
        return { tweetList: ""};
    },

    componentWillMount: function() {
        helpers.twitterQuery().then(function(response){
            // console.log(response.data);
            this.setState({tweetList: response.data})
        }.bind(this));
    },

    renderEmpty: function() {
        return (
                <div>
                    <p>No tweets currently present.</p>
                </div>
        );
    },

    renderTweets: function() {
        return this.state.tweetList.map(function(tweets, index){
            return (
                <div key={index}>
                    <p>Time  : {tweets.created_at} </p>
                    <p>Test : {tweets.text}</p>
                </div>
            );
        });
    },

    renderContainer: function(){
        return (
            <div >
                {this.renderTweets()}
            </div>
        )
    },

=======
>>>>>>> 66095c7ef3b8157c04c48347f8db83a9763e19df
  render: function() {
    return (
      <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: 'CityofDurhamNC'
          }}
          options={{
            username: 'CityofDurhamNC',
            height: '300'
          }}
          onLoad={() => console.log('Timeline is loaded!')}
        />

      );
  }
});

module.exports = TwitterFeed;