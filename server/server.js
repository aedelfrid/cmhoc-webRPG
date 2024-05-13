const express = require("express");
const snoowrap = require("snoowrap");
require('dotenv').config();
const { Post, User } = require("./models");

const mongoose = require("mongoose");

class Server {
    constructor() {
        this.app = express()
        this.reddit = new snoowrap({
            userAgent: "gets reddit posts and notes whether they have been marked",
            clientId: process.env.R_CLIENT_ID,
            clientSecret: process.env.R_CLIENT_SECRET,
            refreshToken: process.env.R_REFRESH_TOKEN,
        })
        this.PORT = 3002 || process.env.PORT
    };

    getSubmissions = async function () {
        // get submissions from reddit and upsert them to db
        await this.reddit.getNew("cmhoc")
            .map(post => Post.upsert(post))
    };

    start = async function () {
        const URI = process.env.URI;
        mongoose.connect(URI);

        mongoose.connection.once("open", () => {
            this.app.listen(this.PORT, () => {
                this.getSubmissions();
                console.log(`Listening on port ${this.PORT}`);
                //setTimeout(getSubmissions, 1000 * 60 * 60 * 24);
            })
        })
    };
}

s = new Server;

s.start();

// (async () => {
//     await s.reddit.getNew("cmhoc", {limit: 1})
//         .map(post => console.log(post))
// })()