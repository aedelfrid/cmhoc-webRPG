const { Schema, model } = require('mongoose');

const partySchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
    },
);

const Party = model('Party', partySchema);

module.exports = Party