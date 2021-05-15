const express = require('express');
const app = express();
const port = 8000;
// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );



app.get("/hello", (request, response) =>  {
    response.json({message: "Hello"})
})

app.listen(port, () => console.log("Now running on port 8000!"))
