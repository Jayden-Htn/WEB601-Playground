const express = require('express'); // use express module
const log = require("morgan"); // http request logger middleware for node
const http = require('http'); // use http module

const app = express(); // create express app

app.use(log('short')); // log activity

app.use((req, res, next) => { 
    const minute = (new Date()).getMinutes();
    if ((minute % 2) === 0) {
        next(); // continue processing the request
        // goes to whichever function is next in the file
    }
    else {
        res.statusCode = 403; // set staus code
        res.end('Not authorized.'); // provide more detail about the reason
    }
});

// if minute is even, then the request is processed
app.use((req, res) => { // basic response to the client
    res.writeHead(200, { 'Content-Type': 'text/plain' }); // write a response
    res.end('Hello World\n');
});