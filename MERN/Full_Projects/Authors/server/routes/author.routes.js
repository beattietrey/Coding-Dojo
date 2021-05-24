const AuthorController = require('../controllers/author.controller');
    // these will be your routes to the api when you are calling it
    module.exports = function(app){
        app.get('/api', AuthorController.index)
    }