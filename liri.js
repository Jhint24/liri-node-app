require("dotenv").config();
var twitterSomethingLikeThat = require("./functions/twitter");
var spotifySomethingLikeThat = require("./functions/spotify");
var whatSomethingLikeThat = require("./functions/whatitsays");
var movieSomethingLikeThat = require("./functions/movies");
var keys = require("./keys");

var command = process.argv[2];
var command2 = process.argv[3];
var song = "";//searchstring update
var movie = "";

for (var i = 3; i < process.argv.length; i++)   {
    //console.log(process.argv[i]);
    song += process.argv[i] + " ";
    movie += process.argv[i] + " ";

}

//run code RUNNNNNN he's coming!!!!!!
if (command === "my-tweets") {
     twitterSomethingLikeThat.getTweets();
 }

else if (command === "spotify-this-song")   {
    spotifySomethingLikeThat.getSpotify(song);
} 

else if (command === "movie-this")  {
    movieSomethingLikeThat.getMovie(movie);
}
else if (command === "do-what-it-says") {
    whatSomethingLikeThat.whatItSays();
    
}

 else{
     console.log("Please input a correct command");
 }
//console.log(song);
