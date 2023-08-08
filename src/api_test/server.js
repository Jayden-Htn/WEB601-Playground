// express package manages the server and api connections
const express = require('express');
const app = express();

// link variables to the routes in the routes folder
const homeRoutes = require('./routes/home');
const secondRoutes = require('./routes/second');


const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false })); // set to encoded url

// set express to use created routes
app.use(homeRoutes);
console.log('homeRoutes: ', homeRoutes);
app.use(secondRoutes);

// test use of middleware
app.use((req, res, next) => {
    console.log(req);
next();
});

app.listen(3000); // listen for events through port 3000