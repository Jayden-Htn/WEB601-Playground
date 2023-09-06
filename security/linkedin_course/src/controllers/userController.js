import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { UserSchema } from '../models/userModel.js';

// creat new model that expects that all elements from the schema are present in the data
const User = mongoose.model('User', UserSchema);

export const loginRequired = (req, res, next) => {
    if (req.user) {
        next();
    } else {
        return res.status(401).json({ message: 'Unauthorized user!' });
    }
};

export const register = async (req, res) => {
    // create new user with user model
    const newUser = new User(req.body);
    // set user hash password to the hashed password from the request body
    newUser.hashPassword = bcrypt.hashSync(req.body.password, 10); // 10 is the salt
    // save the user
    try {
        const savedUser = await newUser.save();
        // remove the hash password from the response, 
        // otherwise it will be sent to the client
        // which is a security risk
        savedUser.hashPassword = undefined;
        return res.json(savedUser);
    }
    catch (err) {
        return res.status(400).send({
            message: err
        });

    };
};

export const login = async (req, res) => {
    // tries to match email to a user in the database
    console.log(req.body.email);
    console.log(typeof req.body.email);

    try {
        const user = await User.findOne({
            email: req.body.email
        });
        console.log('pass 0');
        if (!user) {
            res.status(401).json({ message: 'Authentication failed. No user found!'});
        } 
        console.log('pass 1');
        let isPasswordValid = undefined;
        isPasswordValid = user.comparePassword(req.body.password, user.hashPassword);
        console.log(isPasswordValid)
        // check if password matches
        console.log('pass 2');
        if (!isPasswordValid) {
            res.status(401).json({ message: 'Authentication failed. Wrong password!'});
        } 
        console.log('pass 3');
        // if user is found and password is right
        // create a token
        const token = jwt.sign({
            email: user.email,
            username: user.username,
            _id: user.id
        }, 'secretword', {
            expiresIn: '24h'
        });
        // secretword is the secret key used to sign the token, can be anything
        res.json({ token: token });
    } catch (err) {
        // if there is no user with that email, send message
        console.log('Error caught:', err);
        res.status(500).json({ message: 'Internal server error'});    
    };
};
