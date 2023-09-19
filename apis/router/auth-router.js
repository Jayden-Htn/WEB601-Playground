const express = require('express'); // import express library
const router = express.Router(); // initialise instance of express router

const isUser = (req, res, next) => {
    if (req.query.user === 'true') {
        next(); // if user is true (authorised), pass control to the next middleware function
    } else {
        res.status(400).send('You must be authorised to access this route'); 
        // if user is false (unauthorised), return error message (400 = bad request)
    }
}

// define middleware router for /user route (authorised users only)
router.get('/user', isUser, (req, res) => {
    res.send('Authorised user');
});

const app = express(); // initialise instance of express
app.use('/home', router); // use router middleware for all routes beginning with /home

app.listen(3000, () => {
    console.log('Listening on port 3000');
});