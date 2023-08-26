# WEB601-Playground

This repository contains mostly examples and tests using the express.js module. These are to expand my knowledge and understanding of the library. I have written notes below to help solidify this learning.

## Express API

### Layout

```
const express = require('express'); // import express library
const app = express(); // initialise instance of express
```
To write APIs with express, the module must first be imported and assigned to a variable. An instance of express must then be initialised, which will be used to handle middleware methods and receive requests. Other modules may be imported too, such as helmet, body-parser, path, fs (file system), or morgan.

```
// middleware functions/stack
app.delete('/user/:id', (req, res) => {
    const userId = req.params.id; // assign request params to userId variable
    // req.params is an object containing properties mapped to the named route “parameters”, take values from the URL
    res.send(`User information: ${userId} deleted!`); // send user info to client
});
```
Middleware functions are listed next, such as use, get, post, put and delete methods. A delete function has been shown as an example. 

```
app.listen(3000, () => {
    console.log('Listening on port 3000')
})
```
In order to receive http requests, the express instance must open a port to receive requests on. The above opens the port 3000.

### Methods

All methods take two parameters:
app.method('/route', (req, res)) => {do stuff}
- Route: route of files
- (req, res): http request and response callback

Note: 'next' can also be added (e.g. (req, res, next).), which allows the next() function to be called in the method function. This calls the next middleware function listed from the call point. Either the original function must perform a response, or call next and have a following function perform a response, or the request will be left hanging.

Methods:
- get: retrieve resource
- post: add new resource
- put: update resources
- delete: delete resource
- use: indicates that the express instance show use the parameter input
 
### Testing

To run and test the apis in this repository:
- Run 'node server.js' in the terminal (or whatever the file is named)
- Open 'http://localhost:3000/' in a browser (or whatever the port is)
- The server will have to be restarted to update any changes unless using a package like nodemon
