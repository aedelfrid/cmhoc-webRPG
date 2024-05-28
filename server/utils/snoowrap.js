const snoowrap = require("snoowrap")

require("dotenv").config({ path: '../'})

module.exports = reddit = new snoowrap({
    userAgent: "gets reddit posts and notes whether they have been marked",
    clientId: process.env.R_CLIENT_ID,
    clientSecret: process.env.R_CLIENT_SECRET,
    refreshToken: process.env.R_REFRESH_TOKEN,
})