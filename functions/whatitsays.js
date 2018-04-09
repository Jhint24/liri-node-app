var fs = require("fs");
var doWhatItSays = require("./spotify");
function whatItSays()   {

    fs.readFile("./random.txt", "utf8", function(error, data) {
        // log the error to the console.
        if (error) {
        return console.log(error);
        }


          // Then split it by commas (to make it more readable)
        var dataArr = data.split(",");

         // array for later use.
         doWhatItSays.getSpotify(dataArr[1]);
        //console.log(dataArr);
    });
}
  module.exports = {whatItSays: whatItSays};