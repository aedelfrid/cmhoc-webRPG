const express = require("express");
const posts = express.Router();
const { Post } = require("../../models")

const { authMiddleware } = require('../../utils/auth')

posts.get("/", authMiddleware,  function (req, res) {
    // retrieves posts from db based on pagination params
})

posts.post("/mark", authMiddleware, function (req, res) {
    // notes a post as marked in db

    let post = req.post;
    
    Post.findOneAndUpdate({ name: post.name }, { isMarked: true })

    return res.sendStatus(200);
})

posts.get("/refresh", authMiddleware, function (req, res) {
    // runs getSubmissions to check for new posts, then returns posts from db
})

module.exports = posts;