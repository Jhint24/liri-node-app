require("dotenv").config();
var keys = require("../keys");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

function getSpotify(song)   {
    spotify.search({ type: 'track', query: song, limit: 1 }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
       
      console.log(data.tracks); //update what you are logging please
      });

}

module.exports = {getSpotify: getSpotify};