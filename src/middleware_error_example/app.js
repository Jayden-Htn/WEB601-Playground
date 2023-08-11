const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

// middleware usually sits between the route handler and server 
// and is used to modify the request or response objects
// middleware can be used to check for errors, parse data, etc.
// middleware is executed in the order it is defined
// params: req, res, next
app.use((req, res, next) => {
    if (req.url === '/') {
        next();
    }
    else if (req.url === '/throw') {
        throw new Error('Wrong path');
    }
    else {
        next('You didn\'t visite the root!');
    }
});

app.use((req, res) => {
    res.send('Welcome to the homepage!');
});


app.use((err, req, res, next) => {
    console.log(err);
    res.status(500);
    next(err);
});

app.use((err, req, res, next) => {
    res.send('Error message: ' + err);
});

app.listen(3000, () => {
    console.log('App started on port 3000');
});