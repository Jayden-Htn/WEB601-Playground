const express = require('express') // import express library
const app = express() // initialise instance of express

app.use(express.urlencoded({ extended: true })) // use built in express.urlencoded() middleware to parse URL encoded data

// example of shopping cart
app.post('/cart', (req, res) => {
    const cartData = req.body // assign request body to cartData variable
    res.send(`Received from cart page: ${JSON.stringify(cartData)}`) // send cart data to client
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})