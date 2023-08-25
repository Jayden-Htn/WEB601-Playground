const express = require('express'); // import express library
const app = express(); // initialise instance of express

// get has 2 params: route and callback function
app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})
