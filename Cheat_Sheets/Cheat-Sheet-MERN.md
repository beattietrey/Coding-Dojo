# Checklist for React Projects

**Checklist**

**Server**
1. Go to the folder where you would like your project in the terminal
1. Initialize your server
    ```
    npm init -y
    npm install express mongoose
    ```
1. Create a new file called server.js and add in the following code
    ```js
    const express = require('express');
    const cors = require('cors');
    const app = express();
    require('./server/config/mongoose.config'); // This is new
    app.use(cors());
    app.use(express.json()); // This is new
    app.use(express.urlencoded({ extended: true })); // This is new
    require('./server/routes/person.routes')(app);
    app.listen(8000, () => {
        console.log("Listening at Port 8000")
    })
    ```
1. In controllers, make a new file with the naming convention, modelname.controller.js, use module.exports.functionName for whatever you need 
    ```js
    module.exports.index = (request, response) => {
        response.json({
            message: "Hello World"
        });
    }
    // https://login.codingdojo.com/m/130/6667/48297 for validations
    ```
1. In routes, make a file, modelname.routes.js
    ```js
    const ModelnameController = require('../controllers/modelname.controller');
    // these will be your routes to the api when you are calling it
    module.exports = function(app){
        app.get('/api', ModelnameController.index)
    }
    ```
1. In config, make a file mongoose.config.js
    ```js
    const mongoose = require('mongoose');
    mongoose.connect("mongodb://localhost/crmdb", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));
    ```

1. In models, make a model file, modelname.models.js
    ```js
    const mongoose = require('mongoose');
    const ModelSchema = new mongoose.Schema({
    // this is where your models will go 
        title: {
            // validations 
        type: String,
        required: [
            true,
            //error message
            "Title is required"
        ]
    },
    }, {timestamps:true});
    ```

**Client**
1. Create a new React project
    ```
    npx create-react-app your-project-name-here
    npm install @reach/router
    npm install axios
    npm install cors
    ```
1.  CD into the project folder
    ```
    cd your-project-name-here
    ```
1.  Start your server
    ```
    npm start
    ```
1. App.js will be your primary file. Import components into it to display them. 
    ```js
    import React from 'react';
    import './App.css';
    
    function App() {
    return (
        <div className="App">

        </div>
    );
    }
    export default App;
    ```
1. Create a components folder and add you jsx files into it
1. Start with a Main.js, then add it to your App.js
    ```js
    import React, { useEffect, useState } from 'react'
    import axios from 'axios';
    
    export default () => {
    const [ message, setMessage ] = useState("Loading...")
    useEffect(()=>{
        axios.get("http://localhost:8000/api")
            .then(res=>setMessage(res.data.message))       
    }, []);
    return (
        <div>
            <h2>Message from the backend: {message}</h2>
        </div>
    )
    }
    ```

1. Use rafce shortcut for your components
1. If you are using any of these, also use:
    ```
    npm install --save reactstrap react react-dom
    npm install --save bootstrap
    
    npm install semantic-ui-react semantic-ui-css

    $ npm install @material-ui/core

    ```




