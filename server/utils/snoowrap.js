//const path = require("path")
const snoowrap = require("snoowrap");
//require("dotenv").config({path: path.resolve(__dirname + '../.env') });




function getNew() {
    const r = new snoowrap({
        userAgent: "gets redit posts and stores whther they have been marked or not",
        clientId: process.env.REDDIT_ID,
        clientSecret: process.env.REDDIT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
    });

    r.getNew('cmhoc', {}).map.then(console.log);
}

// in server.js, call this function every 5 mins
// upsert to db - all set up