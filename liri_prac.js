require("dotenv").config();
var keys = require("./keys.js");
const fs = require("fs");
var axios = require("axios");

var command = process.argv[2];
var userInput = process.argv[3];

//Band Search Command
if (command === "concert-this") {
    var axios = require("axios");

    //need to check and see what returns for property names
    axios.get("https://rest.bandsintown.com/artists/" + userInput + "/events?app_id=codingbootcamp")
        .then(
            function (response) {
                console.log(response)
//                 console.log(`Name of Venue: ${this.response.VenueName} 
// Venue Location: ${this.response.data.VenueLocation}
// Date of Event: `) //add in moment code. need to include require.js?
console.log("\n-----------------------------");
            }
        )
};