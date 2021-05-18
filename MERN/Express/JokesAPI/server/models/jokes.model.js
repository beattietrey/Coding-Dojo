const mongoose = require("mongoose")

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "A setup is required, or how is the joke funny?"],
        minLength: [10, "Come on, the joke must be longer!"] 
    },
    punchline: {
        type: String, 
        required: [true, "It would be funnier, if it was something..."],
        minLength: [3, "Are you sure that's the punchline?"]
    }
})

const Joke = mongoose.model('joke', JokeSchema);

module.exports = Joke;
