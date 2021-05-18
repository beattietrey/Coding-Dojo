const mongoose = require("mongoose")

// 1. The Schema

const NewSchema = new mongoose.Schema({
    name: String,
    age: Number,

});

// The Model

const NewThingYouMade = mongoose.model('Thing', NewSchema);

module.exports = NewThingYouMade;
