const Joke = require('../models/jokes.model');

module.exports.findAllJokes = (req,res) => {
    Joke.find()
        .then(allJokes => res.json({data: allJokes}))
        .catch(err => res.json({message: 'Something went wrong', error: err}))
}

module.exports.findOneJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id})
        .then(oneJoke => res.json({data: oneJoke}))
        .catch(err => res.json({message: 'Something went wrong', error: err}))
}

module.exports.randomJoke = (req, res) => {
    let count = Joke.estimatedDocumentCount();
    let random = Math.floor(Math.random() * count)

    Joke.findOne().skip(random)
        .then(joke => res.json({data: joke}))
        .catch(err => res.json({message: 'Something went wrong', error: err}))
}

module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => res.json({data: newJoke}))
        .catch(err => res.json({message: 'Something went wrong', error: err}))
}

module.exports.updateExistingJoke = (req, res) => {
    Joke.findOneAndUpdate(
        { _id: req.params.id}, req.body, {new: true, runValidators: true}
        )
        .then(updatedJoke => res.json({jokes: updatedJoke}))
        .catch(err => res.json({message: 'Something went wrong', error: err}))
}

module.exports.deleteExistingJoke = (req,res) => {
    Joke.deleteOne({ _id: req.param.id})
    .then(result => res.json({result: result}))
    .catch(err => res.json({message: 'Something went wrong', error: err}))
}