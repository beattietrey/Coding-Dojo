const UserController = require('../controllers/controller');

module.exports = app =>  {
    // create
    app.post('/api/users', UserController.createNewUser);

    // read
    app.get('/api/users', UserController.findAllUsers);
    app.get('/api/users/:id', UserController.findOneSingleUser);

    // update
    app.put('/api/users/:id', UserController.updateExistingUser);

    // delete
    app.delete('/api/users/:id', UserController.deleteAnExistingUser);

    
}