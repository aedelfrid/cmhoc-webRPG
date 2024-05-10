const router = require('express').Router();
const { Post } = require("../../models");

router.get("/new", async (req, res) => {
    // get pagination values from req
    // req.page and req.perPage
})