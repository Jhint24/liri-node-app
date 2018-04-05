require("dotenv").config();

var keys = require("./keys");
//var spotify = new Spotify(keys.spotify);
//var client = new Twitter(keys.twitter);
//var inquirer = require('inquirer');
//var omdb = require('omdb');
var Twitter = require('twitter');//codigyprophet
//var spotify = require('spotify');
var command = process.argv[2];

//Twitter
var client  = new Twitter(keys.twitter);

function getTweets()    {
    var params = {screen_name: 'CodigyProphet', count: 20};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log("no");
  }

  else {
      console.log(tweets.text)
  }
});
}

if (command === "my-tweets") {
    getTweets();
}

else{
    console.log("Please input a correct command");
}
