const jwt = require('jsonwebtoken');

// Define the JWT key ad expiry time in seconds
const jwtKey = 'my_secret_key';
const jwtExpirySeconds = 300; // 5 minutes

// Define a simple user database with their password
const signIn = (req, res) => {
    // Get credentials from JSON body
    const { username, password } = req.body;

    // If username or password don't exist, or the password doesn't match the record, return an error
    if (!username || !password || users[username] !== password) {
        return res.status(401).end();
    }
}

// Create a new token with the username in the payload
// Reference variables set above
const token = jwt.sign({ username }, jwtKey, {
    algorithm: 'HS256',
    expiresIn: jwtExpirySeconds
});

// Set the cookie as the token string
res.cookie('token', token, { maxAge: jwtExpirySeconds * 1000 });
res.end();

const access = (req, res) => {
    // Get the session token from the request cookies
    const token = req.cookies.token;

    // If the token is not valid, return an unauthorized error
    if (!token) {
        return res.status(401).end(); // 401 = unauthorized
    }

    var payload;
    try {
        // Parse the JWT string and store the result in 'payload'
        // Note that we are passing the key in this method as well. 
        // This method will throw an error if the token is invalid (i.e. if it has been tampered with)
        payload = jwt.verify(token, jwtKey);
    } catch (e) {
        // If an error occurs and the token is a valid JWT, respond with a 401 error
        if (e instanceof jwt.JsonWebTokenError) {
            // If the error thrown is because the JWT is unauthorized, return a 401 error
            return res.status(401).end();
        }
        // If an error occurs and the token is invalid, respond with a 400 error
        return res.status(400).end();
    }
    res.send(`Welcome ${payload.username}!`)
}

// Refresh the token
const nowIssuedSeconds = Math.round(Number(new Date()) / 1000);
if (payload.exp - nowIssuedSeconds > 30) {
    // If the token is not yet expired, return the same token
    return res.status(400).end();
}

// Otherwise, create a new token and return it
const newToken = jwt.sign({ username: payload.username }, jwtKey, {
    algorithm: 'HS256',
    expiresIn: jwtExpirySeconds
});

// Set the new token as the users `token` cookie
res.cookie('token', newToken, { maxAge: jwtExpirySeconds * 1000 });

const logout = (req, res) => {
    res.clearCookie('token');
    res.end();
}
