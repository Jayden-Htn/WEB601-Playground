const express = require('express'); // import express library
const bodyParser = require('body-parser'); // import body-parser library
const app = express(); // initialise instance of express

// put has two params: route and callback function
// put method is used to update existing resources
app.use(bodyParser.json()); // use body-parser middleware to parse JSON data

app.put('/user/:id', (req, res) => {
    const userId = req.params.id; // assign request params to userId variable
    // req.params is an object containing properties mapped to the named route “parameters”, take values from the URL
    const updatedInfo = req.body; // assign request body to userInfo variable
    res.send(`User information: ${userId} updated with info: ${JSON.stringify(userInfo)}`); // send user info to client	
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});