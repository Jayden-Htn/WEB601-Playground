const express = require('express'); // import express library
const helmet = require('helmet'); // import helmet library

const app = express(); // initialise instance of express

app.use(helmet()); // use helmet middleware to set various HTTP headers

app.get('/', (req, res) => {
    res.send('Secured path');
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});