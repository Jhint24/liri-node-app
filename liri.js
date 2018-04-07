require("dotenv").config();
var twitterSomethingLikeThat = require("./functions/twitter")
var spotifySomethingLikeThat = require("./functions/spotify")
var keys = require("./keys");
//var spotify = new Spotify(keys.spotify);
//var client = new Twitter(keys.twitter);
//var inquirer = require('inquirer');
//var omdb = require('omdb');
//codigyprophet
//var spotify = require('spotify');
var command = process.argv[2];
var command2 = process.argv[3];
var song = "";
for (var i = 3; i < process.argv.length; i++)   {
    //console.log(process.argv[i]);
    song += process.argv[i] + " ";

}

//run code RUNNNNNN he's coming!!!!!!
if (command === "my-tweets") {
     twitterSomethingLikeThat.getTweets();
 }

else if (command === "spotify-this-song")   {
    spotifySomethingLikeThat.getSpotify(song);
} 

 else{
     console.log("Please input a correct command");
 }
console.log(song);
