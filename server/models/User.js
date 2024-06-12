const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        membership: {
            party: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Party"
            },
            role: {
                type: String
            },
        }
    },
);

const User = model('User', userSchema);

module.exports = User;