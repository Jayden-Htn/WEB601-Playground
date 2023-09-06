import mongoose from 'mongoose';
import { ContactSchema } from '../models/crmModel.js';

const Contact = mongoose.model('Contact', ContactSchema);

export const addNewContact = async (req, res) => {
    try {
        console.log(req.body);
        const newContact = new Contact(req.body);
        const savedContact = await newContact.save();
        res.json(savedContact);
    } catch (err) {
        res.status(500).send(err);
    }
};

export const getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find({});
        res.json(contacts);
    } catch (err) {
        res.status(500).send(err);
    }
};

export const getContactWithID = (req, res) => {
    Contact.findById(req.params.contactId, (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
}

export const updateContact = (req, res) => {
    Contact.findOneAndUpdate({ _id: req.params.contactId}, req.body, { new: true }, (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    })
}

export const deleteContact = (req, res) => {
    Contact.remove({ _id: req.params.contactId }, (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Successfully deleted contact'});
    })
}