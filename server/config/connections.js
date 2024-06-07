const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/cmhoc');
// connecting to db - when we change the name, change url here as well

module.exports = mongoose.connection;
