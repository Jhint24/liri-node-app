require("dotenv").config();
var keys = require("../keys");
var Spotify = require('node-spotify-api');


function getSpotify()   {
    var spotify = new Spotify({
        id: <your spotify client id>,
        secret: <your spotify client secret>
      });
       
      spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
       
      console.log(data); 
      });
    
}