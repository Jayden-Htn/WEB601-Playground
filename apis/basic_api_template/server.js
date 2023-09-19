// express package manages the server and api connections
const express = require('express');
const http = require('http');

const app = express();

// basic response to the client
app.use((req, res) => {
    // write a response
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
});

// listen for events through port 3000
http.createServer(app).listen(3000);
