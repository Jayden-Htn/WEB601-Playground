const express = require('express'); // express handles the server and routing
const morgan = require('morgan'); // morgan is a logger
const helmet = require('helmet'); // helmet helps secure the app by setting various HTTP headers
const bodyParser = require('body-parser'); // body-parser parses the request body

const app = express();

// const students = require('./routes/students');

app.use(notFound)
app.use(errorHandler)

module.export = app;
