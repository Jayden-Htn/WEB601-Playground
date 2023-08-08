const express = require('express');
const router = express.Router();

const path = require('path');
const rootDir = require('../util/path');

// takes the root directory and callback function
// returns the displayed html file
router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'home.html'));
    //res.send('Hello World!');
    // res.send('<h1>Hello from Express!</h1>');
});

module.exports = router;