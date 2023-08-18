const express = require('express'); // import express library
const router = express.Router(); // initialise instance of express router

// define middleware router
router.use((req, res, next) => {
    req.requestTime = Date.now(); // assign current date and time to requestTime property of req object
    next(); // pass control to the next middleware function
});

router.get('/time', (req, res) => {
    const responseTime = Date.now() - req.requestTime; // calculate response time
    res.send(`Response time: ${responseTime}ms`); // send response time to client
});

const app = express(); // initialise instance of express

app.use('/home', router); // use router middleware for all routes beginning with /home

app.listen(3000, () => {
    console.log('Listening on port 3000');
});


