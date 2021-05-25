const PlayerController = require('../controllers/player.controller');

module.exports = app => {
    // Create
    app.post('/api/players', PlayerController.createPlayer)
    // Read
    app.get('/api/players', PlayerController.getAllPlayers)
    // Update
    app.put('/api/players/:_id', PlayerController.updatePlayer)
    // Delete
    app.delete('/api/player/:_id', PlayerController.deletePlayer)
}