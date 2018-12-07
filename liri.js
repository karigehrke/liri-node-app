require("dotenv").config();
var keys = require("./keys.js");
const fs = require("fs");

var command = process.argv[2];
var userInput = process.argv[3];


if (command === "spotify-this-song") {

    //Requesting Spotify info
    const Spotify = require('node-spotify-api');
    let spotify = new Spotify(keys.spotify);

    spotify.search({
        type: 'track',
        query: userInput
    }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        console.log(data);
    });

    console.log(`Artist(s): ${this.Artist}
  Song Name: ${this.SongTitle}
  Preview Link: ${this.Link}
  Album: ${this.Album}`)
    //   console.log(JSON.stringify(result, null, 2));
};

if (command === "spotify-this-song" && userInput === "") {

    spotify.search({
        type: 'The Sign',
        query: 'Ace of Base'
    }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        console.log(data);
    });

    console.log(`Artist(s): ${this.Artist}
  Song Name: ${this.SongTitle}
  Preview Link: ${this.Link}
  Album: ${this.Album}`)
};


//Request for Movie command
if (command === "movie-this") {

    //Requesting OMDB info via axios
    var axios = require("axios");

    axios.get("http://www.omdbapi.com/?t=" + userInput + "&y=&plot=short&apikey=trilogy")
        .then(function(response) {
                // Then we print out the list
                console.log("Title: " + response.data.Title);
                console.log("\nRelease Year: " + response.data.Year);
                console.log("\nIMDB Rating: " + response.data.imdbRating);
                console.log("\nRotten Tomatoes Rating: " + response.data.Ratings);
                console.log("\nCountry Where Produced: " + response.data.Country);
                console.log("\nLanguage: " + response.data.Language);
                console.log("\nPlot: " + response.data.Plot);
                console.log("\nActors: " + response.data.Actors);
            }
        };


if (command === "movie-this" && userInput === "") {
    axios.get("http://www.omdbapi.com/?t=mr+nobody&y=&plot=short&apikey=trilogy")
        .then(function (response) {
              // Then we print out the Mr. Nobody list
console.log("Title: " + response.data.Title);
console.log("\nRelease Year: " + response.data.Year);
console.log("\nIMDB Rating: " + response.data.imdbRating);
console.log("\nRotten Tomatoes Rating: " + response.data.Ratings);
console.log("\nCountry Where Produced: " + response.data.Country);
console.log("\nLanguage: " + response.data.Language);
console.log("\nPlot: " + response.data.Plot);
console.log("\nActors: " + response.data.Actors);
        )};
        


//Band search
if (command === "concert-this") {

    var axios = require("axios");
    //need to check and see what returns for property names
    axios.get("https://rest.bandsintown.com/artists/" + userInput + "/events?app_id=codingbootcamp")
        .then(
            function (response) {
                console.log(`Name of Venue: ${this.response.VenueName} 
Venue Location: ${this.response.data.VenueLocation}
Date of Event: `) //add in moment code. need to include require.js?

            }

        )
}
}

if (command === "do-what-it-says") {
    fs.appendFile("random.txt", "utf8", function (err, data) {
                if (err) {
                    return console.log(err);
                }
                var output = data.split(",");
                console.log(output);
            }