// ejs = embedded javascript

// install libraries
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// create express app
const app = express();

app.set('view', path.join(__dirname, 'views')); // set views directory
app.set('view engine', 'ejs'); // set view engine to ejs

app.use(express.static('./public')); // set public directory

app.use(bodyParser.urlencoded({extended: false})); // use body parser to parse form data
app.use(bodyParser.json()); // use body parser to parse json data

// handles get request to root url
app.get('/', (req, res) => {
    res.render('pages/home');
});

// handles get request to /links
app.get('/links', (req, res) => {
    // dummy data
    const items = [
        {name: 'Google', url: 'google.com'},
        {name: 'SIFA', url: 'sifa.sg'}
    ];
    // render links.ejs and pass in items array
    res.render('pages/links', {
        links: items
    });
});

// handles get request to /list
app.get('/list', (req, res) => {
    // 
    const skills = ['HTML', 'CSS', 'JS', 'Node', 'Express'];
    // render list.ejs and pass in skills array
    res.render('pages/list', {
        list: skills
    });
});

// handles get request to /courses
app.get('/Courses', (req, res) => {
    // dummy data
    const courses = [
        {name: 'WEB601', description: 'Web Dev'},
        {name: 'SDV502', description: 'Software Dev'},
        {name: 'SDV602', description: 'Advanced Software Dev'}
    ];
    // render courses.ejs and pass in courses array
    res.render('pages/courses', {
        course: courses
    });
});

function messages(req, res, next) {
    let message;
    res.locals.message = message;
    next();
};

app.get('/form', messages, (req, res) => {
    res.render('pages/form');
});

app.post('/form', (req, res) => {
    const message = req.body;
    res.locals.message = message;
    res.render('pages/form');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});