const express = require('express'); // import express library
const app = express(); // initialise instance of express

// assign arrow function to variable
const isAuthenticated = (req) => {
    // check for authentication
    // return req.headers['authorization'] ==='Token';
    // replace with valid token
};

// middleware function to check for authentication
app.use((req, res, next) => {
    if (isAuthenticated(req)) {
        next(); // if authenticated, pass control to the next middleware function
    } else {
        res.redirect('/login'); // if not authenticated, redirect to login page
    }
});

// middle function to handle accepted authentication
app.get('/', (req, res) => {
    res.send('Welcome to the members area');
});

// server listens on port 3000 for incoming connections
app.listen(3000, () => {
    console.log('Listening on port 3000');
});