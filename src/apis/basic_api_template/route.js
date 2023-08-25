const express = require('express');
const path = require('path');
const http = require('http');

const app = express();

// 2 parameters: path/route and callback function
app.get('/', (req, res) => {
    // brief response to the client
    res.end('Welcome to my homepage!');
});

app.get('/about', (req, res) => {
    res.end('Welcome to the about page!');
});

app.get('/contact', (req, res) => {
    res.end('Welcome to the contact page!');
});

// uses who parameter from url to create a personalized response
app.use("/hello/:who", (req, res) => {
    res.end(`Hello, ${req.params.who}.`);
});

// redirect to home page if url is not found
app.get("/redirect_home", (req, res) => {
    res.redirect("/");
});

app.get("/sendnote", (req, res) => {
    // create and send a blank file
    const filePath = path.resolve(__dirname, "notes.txt")
    res.sendFile(filePath);
});

app.use((req, res) => {
    res.statusCode = 404;
    res.end('404!');
});

// listen for events through port 3000
http.createServer(app).listen(3000);

