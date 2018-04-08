require("dotenv").config();
var keys = require("../keys");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

function getSpotify(song)   {
    song = song || 'The Sign, Ace of Base';
    spotify.search({ type: 'track', query: song, limit: 1 }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }

       else if (data.tracks.items.length < 1) {
         console.log("No Song Name Match Found")

       }

       else {
        console.log("Artist: " + data.tracks.items[0].album.artists[0].name);
        console.log("Song: " + data.tracks.items[0].name);
        console.log("Link: " + data.tracks.items[0].album.external_urls.spotify);
        console.log("Album: " + data.tracks.items[0].album.name);
       //update what you are logging please
       }

      });

}

module.exports = {getSpotify: getSpotify};