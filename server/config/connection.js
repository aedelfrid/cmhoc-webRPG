const mongoose = require('mongoose');

mongodbURI =
    `mongodb://localhost:27017/cmhoc`;

mongoose.connect(mongodbURI);
// connecting to db - when we change the name, change url here as well

module.exports = mongoose.connection;