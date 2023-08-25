// import modules
const express = require('express');
const path = require('path');
const http = require('http');

// create express instance
const app = express();

const publicPath = path.resolve(__dirname, "assets");
app.use(express.static(publicPath));

// middleware to log activity
// didn't add param: next because we don't need to move to the next middleware function
app.use((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('File not found!');
});

http.createServer(app).listen(3000);