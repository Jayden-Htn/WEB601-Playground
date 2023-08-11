// importing libraries and modules
const express = require('express');
const path = require('path');
const fs = require('fs'); // file system module

// create an instance of an express appllication and store in variable app
const app = express();

// use morgan middleware to log activity
app.use((req, res, next) => {
    console.log("req IP: ", req.url);
    console.log("req date: ", new Date()); // new is constructor function for Date object
    next(); // move to next middleware function
});

// use static middleware to serve static files
app.use((req, res, next) => {
    // construct the absolute path of the requested file
    const filePath = path.join(__dirname, "static", req.url);
    // check if file exists
    fs.stat(filePath, (err, fileInfo) => {
        // if error, move to next middleware function
        if (err) {
            next();
            return;
        }
        // if file exists, send it back to the client
        if (fileInfo.isFile()) {
            res.sendFile(filePath);
        }
        // if file does not exist, move to next middleware function
        else {
            next();
        }
    });
});