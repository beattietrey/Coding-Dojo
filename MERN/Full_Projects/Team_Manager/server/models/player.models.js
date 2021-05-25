const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: [2, "Name must be at least 2 characters in length"],
        required: [true, "Player Name is required"],
    },
    position: {
        type: String, 
        required: false,
    },
    games: {type:Object},
}, { timestamps: true });

const Player = mongoose.model("Player", PlayerSchema);

module.exports = Player;