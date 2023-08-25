const express = require('express'); // import express library
const app = express(); // initialise instance of express

// middleware function to enable CORS
app.use((req, res, next) => {
    // allow cross-origin resource sharing (CORS)
    res.header('Access-Control-Allow-Origin', '*'); // * = allow all origins
    // allow all header information to be sent from client that matches the following headers
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    // check if incoming request is an OPTIONS request 
    // req.method = GET, PUT, POST, PATCH, DELETE, etc
    if (req.method == 'OPTIONS') {
        // allow all methods to be used
        res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, PATCH, DELETE');
        // return response with status code 200 (OK)
        return res.status(200).json({});
    }
    next(); // pass control to the next middleware function
});

app.get('/', (req, res) => {
    res.send('CORS is enabled');
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});