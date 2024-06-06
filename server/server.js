const express = require("express");
const snoowrap = require("snoowrap")
require('dotenv').config()
const { Post, User } = require("./models");
const routes = require("./routes")



const mongoose = require("mongoose");

async function getSubmissions() {
    // get submissions from reddit and upsert them to db
    await reddit.getNew("cmhoc")
        .map(post => {
            let author = post.author.name;
            let subreddit = post.subreddit.display_name;
            Post.upsert(post, author, subreddit);
        })
};

class Server {
    constructor() {
        this.app = express();
        this.reddit = new snoowrap({
            userAgent: "gets reddit posts and notes whether they have been marked",
            clientId: process.env.R_CLIENT_ID,
            clientSecret: process.env.R_CLIENT_SECRET,
            refreshToken: process.env.R_REFRESH_TOKEN,
        });
        this.PORT = 3002 || process.env.PORT;
    };

    start = async function () {
        const URI = process.env.URI;
        mongoose.connect(URI);

        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());
        this.app.use(routes)

        mongoose.connection.once("open", () => {
            this.app.listen(this.PORT, () => {
                getSubmissions();
                console.log(`Listening on port ${this.PORT}`);
                setTimeout(() => this.getSubmissions(), 1000 * 60 * 60 * 24);
            })
        })
    };
}

s = new Server;

s.start();

// (async () => {
//     await s.reddit.getNew("cmhoc", {limit: 1})
//         .map(async (post) => {
//             let author = post.author.name
//             let subreddit = post.subreddit.display_name;
//             console.log(post)
//             console.log(author)
//             console.log(subreddit)
//         })
// })()
