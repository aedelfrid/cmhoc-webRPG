const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    subreddit: {
        type: String,
        required: true,
    },
    selftext: {
        type: String,
    },
    isMarked: Boolean

});

postSchema.statics.upsert = async function (redditPost, author, subreddit) {
    // take posts in reddit format and upsert to db
    const {
        selftext,
        title,
        name
    } = redditPost;

    let isStored = await this.findOne({ name: name })

    if (!isStored) {
        await this.create({
            name,
            selftext,
            subreddit,
            title,
            author,
        });
    };
};

const Post = mongoose.model("Post", postSchema);

module.exports = Post;