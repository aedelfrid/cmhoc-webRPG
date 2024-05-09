const mongoose = require("mongoose")
const { Schema, model, ObjectId } = mongoose;

const postSchema = new Schema(
    {
        id: {
            type: mongoose.Types.ObjectId,
            required: true,
            unique: true,
        },
        fullname: {
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
        text: {
            type: String,
            required: true,
        },
        isGraded: {
            type: Boolean,
        }
    }
)

postSchema.methods.upSert = async function (redditPost) {
    const { 
        fullname,
        title,
        author,
        subreddit,
        text, 
    } = redditPost

    if (!this.findOne({ fullname })) {
        const newPost = await this.create({
            id: new mongoose.Types.ObjectId(),
            fullname,
            title,
            author,
            subreddit,
            text,
        });
        return newPost;
    }
};

const Post = model('Post', postSchema);

module.exports = Post;

// ping reddit on page load or every 10 mins
// reddit api to buffer to database
// in buffer, iterate over buffer to check if theres a copy in db