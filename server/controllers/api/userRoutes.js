const router = require('express').Router();
const { User } = require("../../models");

router.post("/login", async (req, res) => {
    // get user from db
    const userData = User.findOne( { username: req.body.username } );

    // if no user exists, return error
    if (!userData) {
        throw new Error('Incorrect username!');
    };

    // check password against stored
    const correctPw = await User.isCorrectPassword(req.body.password);

    if (!correctPw) {
        throw new Error('Incorrect password!');
    }

    // return a JWT token

    const token = signToken(userData);
    return { token, userData };
});

module.exports = router;