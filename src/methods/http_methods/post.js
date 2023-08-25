const express = require('express'); // import express library
const bodyParser = require('body-parser'); // import body-parser library
const app = express(); // initialise instance of express

// post has two params: route and callback function
// post method is used to create new resources
app.post('/upload', (req, res) => {
    const userInfo = req.body; // assign request body to userInfo variable
    res.send(`Files: ${userInfo} uploaded!`); // send user info to client
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});