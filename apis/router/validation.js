const express = require('express'); // import express library
const router = express.Router(); // initialise instance of express router
// creates a modular mountable route handler that can be exported and used in other files

// define middleware router
router.use('/user', express.json()); // parse incoming requests with JSON payloads
// post request to /user route
router.post('/user', (req, res, next) => {
    if (!req.body.name || !req.body.email) { // check if name or age is provided
        return res.status(400).send('Name and email are required'); // return error message
    } else {
        next(); // pass control to the next middleware function
        // middleware function to add user to database
        (req, res) => {
            // add user to database
            res.send('User added successfully');
        }
        // res.send('User added successfully');
    }
});

const app = express(); // initialise instance of express

app.use('/home', router); // use router middleware for all routes beginning with /home

app.listen(3000, () => {
    console.log('Listening on port 3000');
});

