const snoowrap = require('snoowrap');
require('dotenv').config()

class Subreddit {
    constructor(subreddit, user) {
        this.subredditName = subreddit;
        this.user = user;
    }

    getPosts() {
        // get last x many posts
        // add to staging db
        // iterate over both db and staging
        // if already in db, skip
    }

    queryPosts() {
        // gets posts from db and displays on front end
        // if user.admin == true, show graded status
    }
}

// r = new snoowrap({
//     userAgent: process.env.USER_AGENT,
//     clientId: process.env.CLIENT_ID,
//     clientSecret: process.env.CLIENT_SECRET,
//     refreshToken: process.env.REFRESH_TOKEN,
// });

// https://www.reddit.com/api/v1/authorize?client_id=CLIENT_ID&response_type=TYPE&state = RANDOM_STRING & redirect_uri=URI & duration=DURATION & scope=SCOPE_STRING