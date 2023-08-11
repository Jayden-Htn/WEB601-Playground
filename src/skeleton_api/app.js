// import express
const express = require('express');

// create express instance
const app = express();

// middleware basic response
app.get("/", (req, res) => {
    res.send("Hello World");
});

// listen for events through port 3000
app.listen(3000, () => {
    console.log("App started on port 3000");
});