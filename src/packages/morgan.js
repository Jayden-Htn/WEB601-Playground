const express = require('express'); // import express library
const morgan = require('morgan'); // import morgan library

const app = express(); // create express app

app.use(morgan('combined')); // use morgan middleware to log all requests
// morgan has 4 predefined formats: combined, common, dev, short, tiny
// combined: standard Apache combined log output
// common: standard Apache common log output
// dev: concise output colored by response status for development use
// short: shorter than default, also including response time
// tiny: the minimal output
// logs are written to stdout by default

app.get('/', (req, res) => {
    res.send('Home page');
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
