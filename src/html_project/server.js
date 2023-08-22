const express = require('express'); // import express library
const path = require('path'); // import path library
const fs = require('fs'); // import fs library

const app = express(); // initialise instance of express

// middleware function to log all requests
app.use((req, res, next) => {
    console.log(`Received request from: ${req.body}`);
    next();
});

// middleware function to get path of index.html
app.get('/', (req, res) => {
    const htmlPage = path.join(__dirname, 'index.html');
});

// middleware function to send index.html to client
fs.readFileSync(htmlPage, (err, data) => {
    if (err) {
        console.error(err);
        res.status(500).send('Internal error occurred');
        return
    }
    res.send(htmlPage);
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});



