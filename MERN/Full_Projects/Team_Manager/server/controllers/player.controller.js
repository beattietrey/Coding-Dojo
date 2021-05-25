const Player = require('../models/player.models');
module.exports = {
    // Create
        createPlayer: (req,res) => {
            Player.create(req.body)
                .then(player => res.json({message: "Success", results: player}))
                .catch(err => res.json({message: "Error", results: err}))
        },
    // Read
        getAllPlayers: (req,res) => {
            Player.find()
                .then(players => res.json({message: "Success", results: players}))
                .catch(err => res.json({message: "error", results:err}))
            },

    // Update
        updatePlayer: (req,res) => {
            Player.findByIdAndUpdate(req.params._id, req.body, {new: true, runValidators:true})
                .then(player => res.json({message: "Success", results: player}))
                .catch(err => res.json({message: "Error", results: err}))
        },

        // For future instances, if I am passing information into a nested schema
        // addNestedSchemaName: (req,res) => {
            // Player.findByIdAndUpdate(req.params._id, { $push: { nestedSchemaName: req.body}}, {new: true, runValidators: true})
            //    ^                         ^               ^
            // Outer Schema          OuterSchema _id     mongoDB operator
        // }
        // Check Week 3 Day 3 Backend at 41:30 for validations on nested schemas
        


    // Delete
        deletePlayer: (req,res) => {
            Player.findByIdAndDelete(req.params._id)
            .then(player => res.json({ message: "Success", result: player}))
            .catch(err => res.json({ message: "Error", results: err}))
        },
}