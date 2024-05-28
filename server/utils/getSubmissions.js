const { Post, User } = require("../models");

module.exports = getSubmissions = async function () {
    // get submissions from reddit and upsert them to db
    await this.reddit.getNew("cmhoc")
        .map(post => {
            let author = post.author.name;
            let subreddit = post.subreddit.display_name;
            Post.upsert(post, author, subreddit);
        })
};

 