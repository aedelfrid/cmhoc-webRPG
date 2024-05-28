const express = require("express");
const router = express.Router();

const { User } = require('../../models')

router.get("/me", function (req, res) {
    // sends info for the current user
    if (req.user) {
        return User.findOne({ username: req.user.username })
    };

    throw new Error("Not logged in!")
});

router.post("/login", function (req, res) {
    // takes username and password and checks them against db
    let {
        username,
        password
    } = req.payload;

    res.user = User.findOne({ username });

    if (!req.user) {
        throw new Error("No user with this username found!")
    };

    let correctPW = req.user.isCorrectPassword(password)

    if (!correctPW) {
        throw new Error("Password is incorrect!")
    };

    res.token = signToken(req.user);
    return res
});

module.exports = router;