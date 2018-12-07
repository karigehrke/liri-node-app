require("dotenv").config();
var keys = require("./keys.js");
const fs = require("fs");
var axios = require("axios");

var command = process.argv[2];
var userInput = process.argv[3];

const Spotify = require('node-spotify-api');
    let spotify = new Spotify({
        id: keys.spotify.id,
        secret: keys.spotify.secret
    });

    //Spotify search if nothing is entered
if (command === "spotify-this-song" && userInput === undefined) {

    spotify.search({
        type: 'track', //change the type
        query: 'The Sign'
    }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        
        let trackInfo = data.tracks.items[0];
        // console.log(data.tracks.items[0]);
            console.log("Artist(s): " + trackInfo.artists.name)
console.log("Song Name: " + trackInfo.name)
console.log("Preview Link: " + trackInfo.preview_url)
console.log("Album: " + trackInfo.album.name)
console.log("\n-----------------------------");
});
    };


//Spotify search command
if (command === "spotify-this-song") {
    
    spotify.search({
        type: 'track',
        query: userInput
    }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
            let trackInfo = data.tracks.items[0];
        // console.log(data.tracks.items[0]);
            console.log("Artist(s): " + trackInfo.artists.name)
console.log("Song Name: " + trackInfo.name)
console.log("Preview Link: " + trackInfo.preview_url)
console.log("Album: " + trackInfo.album.name)
console.log("\n-----------------------------");
});
    };
    
    //Movie search if nothing is entered
if (command === "movie-this" && userInput === undefined) {
    axios.get("http://www.omdbapi.com/?t=mr+nobody&y=&plot=short&apikey=trilogy")
        .then(function (response) {
            // Then we print out the Mr. Nobody list
            // console.log(response)
            console.log("Title: Mr. Nobody");
            console.log("\nRelease Year: " + response.data.Year);
            console.log("\nIMDB Rating: " + response.data.imdbRating);
            console.log("\nRotten Tomatoes Rating: " + response.data.Ratings);
            console.log("\nCountry Where Produced: " + response.data.Country);
            console.log("\nLanguage: " + response.data.Language);
            console.log("\nPlot: " + response.data.Plot);
            console.log("\nActors: " + response.data.Actors);
            console.log("\n-----------------------------");
        })
};

//Request for Movie
if (command === "movie-this") {
    axios.get("http://www.omdbapi.com/?t=" + userInput + "&y=&plot=short&apikey=trilogy")
        .then(function (response) {
            // Then we print out the list
            console.log("Title: " + response.data.Title);
            console.log("\nRelease Year: " + response.data.Year);
            console.log("\nIMDB Rating: " + response.data.imdbRating);
            console.log("\nRotten Tomatoes Rating: " + response.data.Ratings);
            console.log("\nCountry Where Produced: " + response.data.Country);
            console.log("\nLanguage: " + response.data.Language);
            console.log("\nPlot: " + response.data.Plot);
            console.log("\nActors: " + response.data.Actors);
            console.log("\n-----------------------------");
        })
};



//Band Search Command
if (command === "concert-this") {
    var axios = require("axios");

    //need to check and see what returns for property names
    axios.get("https://rest.bandsintown.com/artists/" + userInput + "/events?app_id=codingbootcamp")
        .then(
            function (response) {
                console.log(response)
                // console.log("Name of Venue: " + response[0].VenueData.name);
                console.log(`Name of Venue: ${this.response.VenueData.name} 
Venue Location: ${this.response.VenueData.city}
Date of Event: ${this.response.EventData.datetime}`) //add in moment code. need to include require.js?
console.log("\n-----------------------------");
            }
        )
};

//Do What it Says command
if (command === "do-what-it-says") {
    fs.readFile("random.txt", "utf8", function (err, data) {
        if (err) {
            return console.log(err);
        }
        console.log(data);
        var dataArr = data.split(",");
        console.log(dataArr);

        // console.log(JSON.stringify(output, null, 2));
        console.log("\n-----------------------------");
    })
};
    
