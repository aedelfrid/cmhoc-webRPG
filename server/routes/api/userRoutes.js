const express = require("express");
const router = express.Router();

router.get("/me", function (req, res) {
    // sends info for the current user
});

router.post("/login", function (req, res) {
    // takes username and password and checks them against db
});

module.exports = router;