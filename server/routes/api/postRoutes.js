const express = require("express");
const router = express.Router();
const { Post } = require("../../models")

router.get("/", function (req, res) {
    // retrieves posts from db based on pagination params
})

router.post("/mark", function (req, res) {
    // notes a post as marked in db

    let post = req.post;
    
    Post.findOneAndUpdate({ name: post.name }, { isMarked: true })

    return res.sendStatus(200);
})

router.get("/refresh", function (req, res) {
    // runs getSubmissions to check for new posts, then returns posts from db
})

module.exports = router;