const express = require("express");
const router = express.Router();

router.get("/posts", function (req, res) {
    // retrieves posts from db based on pagination params
})

router.post("/mark", function (req, res) {
    // notes a post as marked in db
})

router.get("/refresh", function (req, res) {
    // runs getSubmissions to check for new posts, then returns posts from db
})

module.exports = router;