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

postSchema.statics.upsert = async function (redditPost) {
    // take posts in reddit format and upsert to db
    const {
        subreddit,
        selftext,
        title,
        author,
        name
    } = redditPost;

    let isStored = await this.findOne({ name: name })

    if (!isStored) {
        let newPost = await this.create({
            name,
            selftext,
            subreddit: await subreddit.Subreddit?.display_name,
            title,
            author: await author.RedditUser?.name
        });

        console.log(newPost)
    };
};

const Post = mongoose.model("Post", postSchema);

module.exports = Post;