var React = require("react");
var helpers = require("../utils/helpers");

var TwitterFeed = React.createClass({

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

  render: function() {
    if (!this.state.tweetList) {
        return this.renderEmpty();
    }

    return this.renderContainer();
  }

});

module.exports = TwitterFeed;