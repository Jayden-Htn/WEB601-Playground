const express = require('express');
const schema = require('../db/schema');
const db = require('../db/connection');

const students = db.get('students'); // get the students collection

const router = express.Router();

// GET /students
router.get('/', async (req, res, next) => {
    try {
        const allStudents = await students.find(); // find all students
        res.json(items); // respond with the students
    } catch (error) {
        next(error);
    }
});

// GET /students/:id
router.get('/:id', async (req, res, next) => {
    try {
        const {id} = req.params; // get the id from the request parameters
        const student = await students.findOne({_id: id}); // find the student with the id
        if (!student) {
            const error = new Error('Not Found'); // create an error
            return next(error); // pass the error to the next middleware
        }
        res.json(student); // respond with the student
    } catch (error) {
        next(error);
    }
});

// POST /students
router.post('/students', async (req, res, next) => {
    try {
        const {name, address} = req.body; // get the name and address from the request body
        await schema.validateAsync({name, address}); // validate the data
        const student = await students.findOne({name}); // find the student with the name

        // if the student exists, create an error
        if (student) {
            const error = new Error('Student already exists'); // create an error
            res.status(409); // set the status to 409: Conflict
            return next(error); // pass the error to the next middleware
        }

        const newStudent = await students.insert({ // insert the new student
            name,
            address
        });
        res.status(201).json(newStudent); // respond with the new student
    } catch (error) {
        next(error);
    }
});

// PUT /students/:id
router.put('/:id', async (req, res, next) => {
    try {
        const {id} = req.params; // get the id from the request parameters
        const {name, address} = req.body; // get the name and address from the request body
        const result = await schema.validateAsync({name, address}); // validate the data
        const student = await students.findOne({_id: id}); // find the student with the id

        // if the student doesn't exist, create an error
        if (!student) {
            return next(); // pass the error to the next middleware
        }

        // if the student exists, update the student
        const updatedStudent = await students.update({_id: id}, {$set: result}, {upsert: true});
        // $set: result sets the fields to the values in result
        // upsert: true creates the document if it doesn't exist
        res.json(updatedStudent); // respond with the updated student
    } catch (error) {
        next(error);
    }
});

// DELETE /students/:id
router.delete('/:id', async (req, res, next) => {
    try {
        const {id} = req.params; // get the id from the request parameters
        const student = await students.findOne({_id: id}); // find the student with the id

        // if the student doesn't exist, create an error
        if (!student) {
            return next(); // pass the error to the next middleware
        }
        await students.remove({_id: id}); // remove the student

        res.json({
            message: 'Success'
        });
    } catch (error) {
        next(error);
    }
});
    