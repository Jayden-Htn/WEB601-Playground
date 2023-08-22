const express = require('express') // import express library
const path = require('path') // import path module
const app = express() // initialise instance of express

const staticPath = path.join(__dirname, 'public') // define static path
app.use(express.static(staticPath)) // use built in express.static() middleware to serve static files

app.get('/', (req, res) => {
    res.send('Static files served from the public directory') // send response to client
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})