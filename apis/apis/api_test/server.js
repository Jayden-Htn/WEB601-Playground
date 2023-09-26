// express package manages the server and api connections
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// test use of middleware
app.use((req, res, next) => {
    // console.log(req); really log output
    console.log('In the middleware!');
    console.log(req.url); // log url
    console.log(req.method); // log method
    next(); // pass control to next middleware or route handler
});

app.use(bodyParser.urlencoded({ extended: false })); // set to encoded url

// link variables to the routes in the routes folder
const homeRoutes = require('./routes/home');
const secondRoutes = require('./routes/second');

// set express to use created routes
app.use(homeRoutes);
app.use(secondRoutes);

app.listen(3000, () => {
    console.log('Listening on port 3000');
});

// app.listen(3000); shorthand without callback function