// template for a basic express app with a single API endpoint

const express = require

const app = express();

app.get('/random/:min/:max', (req, res) => {
    // get min and max from the request and convert to numbers
    const min = parseInt(req.params.min);
    const max = parseInt(req.params.max);

    // check if min and max are numbers
    if (isNaN(min) || isNaN(max)) {
        // return error status and message
        res.status(400);
        res.json({ error: 'Bad request.' });
        return;
    }
    // calculate and return result
    const result = Math.round((Math.random() * (max - min)) + min);
    res.json({ result: result });
});

// start server and listen on port 3000
app.listen(3000, () => {
    console.log('App started on port 3000');
});