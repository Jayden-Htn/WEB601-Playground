const express = require('express'); // import express library
const app = express(); // initialise instance of express

app.use((req, res, next) => {
    console.log(`${req.method} request for ${req.url} JSON: ${JSON.stringify(req.header)}`);
    // display the request method (GET, POST, PUT, DELETE), 
    // the request url (e.g. /api/contacts),
    // and the request headers (e.g. { "content-type": "application/json" }, text/html, text/plain, etc.)
    next(); // pass control to the next middleware function
});

app.get('/', (req, res) => {
    res.send('Landing page');
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});

