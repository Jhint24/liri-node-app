require("dotenv").config();
var keys = require("../keys");
var Twitter = require('twitter');

var client  = new Twitter(keys.twitter);
//Twitter Function
function getTweets()    
{
    var params = {screen_name: 'CodigyProphet', count: 20};
client.get('statuses/user_timeline', params, function(error, tweets, response) 
{
  if (!error) 
  {
      for (var i = 0; i < tweets.length; i++)   {
              console.log("tweet: " + tweets[i].text);
              console.log("created: " + tweets[i].created_at);
  }
}
  else 
  {
      console.log(error)
  }
});
}

module.exports = {getTweets: getTweets};