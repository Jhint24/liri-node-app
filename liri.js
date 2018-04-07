require("dotenv").config();
var twitterSomethingLikeThat = require("./functions/twitter")
var keys = require("./keys");
//var spotify = new Spotify(keys.spotify);
//var client = new Twitter(keys.twitter);
//var inquirer = require('inquirer');
//var omdb = require('omdb');
//codigyprophet
//var spotify = require('spotify');
var command = process.argv[2];


//run code
if (command === "my-tweets") {
     twitterSomethingLikeThat.getTweets();
 }

 else{
     console.log("Please input a correct command");
 }