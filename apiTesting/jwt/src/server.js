const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const app = express()

app.use(bodyParser.json()) // use body parser middleware to parse json data
app.use(cookieParser()) // use cookie parser to parse cookies

// dummy routes
app.post('/signin', Signin )

app.get('/welcome', Welcome )

app.get('/logout', Logout )

app.listen(8080, () => console.log('Server started on port 3000'))