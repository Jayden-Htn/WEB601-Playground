const express = require('express');
const router = express.Router();

const path = require('path');
const rootDir = require('../util/path');

// takes the root directory and callback function
// returns the displayed html file
router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'home.html'));
});

module.exports = router;