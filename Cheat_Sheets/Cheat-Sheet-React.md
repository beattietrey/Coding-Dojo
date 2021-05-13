# Checklist for React Projects

**Checklist**

1. Go to the folder where you would like your project in the terminal
1. Create a new project
    ```
    npx create-react-app your-project-name-here
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
1. Use rafce shortcut to start your app
1. If you are using any of these, also use:
    ```
    npm install @reach/router
    npm install axios
    ```




