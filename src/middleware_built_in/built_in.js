const express = require('express') // import express library
app = express() // initialise instance of express
app.use(express.json()) // use built in express.json() middleware to parse JSON data

app.post('/db', (req, res) => {
    const receivedDB = req.body // assign request body to receivedDB variable
    res.send(`DB list: ${JSON.stringify(receivedDB)}`) // send DB list to client
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})