const express = require('express'); // import express library
const cors = require('cors'); // import cors library
// cors stands for cross-origin resource sharing
const app = express(); // initialise instance of express

// middleware function to enable CORS
app.use('/items', (req, res) => {
    res.json({ message: 'CORS is enabled: items are accessable from different domains.'});
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});