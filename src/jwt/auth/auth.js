const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

app.use(express.json()); // use json parser as we are sending json data

// dummy data
const users = [
    {id: 1, username: 'john', password: 'pw123', role: 'admin'},
    {id: 2, username: 'jane', password: 'pw123', role: 'member'},
    {id: 3, username: 'bob', password: 'pw123', role: 'member'}
];

// authJWT function to verify token from header
function authJWT(req, res, next) {
    const token = req.headers['Authorisation'];

    if (!token) {
        return res.sendStatus(401); // 401 = unauthorised
    } else {
        jwt.verify(token, 'secretKey', (err, decoded) => {
            if (err) {
                return res.sendStatus(403); // 403 = forbidden
            }
            req.user = decoded;
            next();
        });
    }
}

// login route
app.post('/login', (req, res) => {
    const {username, password} = req.body;
});

// check if user exists
const user = users.find(t => {return t.username === username && t.password === password});
// will throw error as login page is not set up yet

// if user exists, create token and send to client
if (user) {
    const token = jwt.sign({id: user.id, role: user.role}, 'secretKey');
    res.json({token});
} else {
    res.sendStatus(401); // 401 = unauthorised
}

// protected route that requires token
app.get('/payment', authJWT, (req, res) => {
    res.json({
        message: 'Payment successful',
        user: req.user
    });
});

function checkRole(role) {
    return (req, res, next) => {
        if (req.user.role !== role) return res.sendStatus(403); {
            next();
        }
    }
};

app.get('/dashboard', authJWT, checkRole('admin'), (req, res) => {
    res.json({message: 'This page is only for admins'});
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});
