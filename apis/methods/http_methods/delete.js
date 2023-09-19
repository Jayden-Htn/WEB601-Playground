const express = require('express'); // import express library
const app = express(); // initialise instance of express

// delete has 2 params: route and callback function
app.delete('/user/:id', (req, res) => {
    const userId = req.params.id; // assign request params to userId variable
    // req.params is an object containing properties mapped to the named route “parameters”, take values from the URL
    res.send(`User information: ${userId} deleted!`); // send user info to client
});

app.listen(3000, () => {
    console.log('Listening on port 3000')
})
