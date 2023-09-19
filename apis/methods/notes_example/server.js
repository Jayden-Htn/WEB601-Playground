const express = require('express') // import express library
const bodyParser = require('body-parser') // import body-parser library
const { v4: uuidv4 } = require('uuid') // import uuid library
// uuidv4() generates a random universally unique identifier (UUID)

const app = express() // initialise instance of express

app.use(bodyParser.json()) // use body-parser middleware to parse JSON data

const notes = {} // initialise notes object

app.get('/notes', (req, res) => {
    const note = notes[req.params.id] // assign request params to note variable
    if (notes) {
        res.json(note) // send note object to client
    } else {
        res.status(404).send('Note not found') // send 404 status code to client
    }
});

app.post('/notes', (req, res) => {
    const id = uuidv4() // assign unique id to id variable
    const note = {
        id,
        title: req.body.title, // assign request body title to note title
        content: req.body.content // assign request body content to note content
    }

    notes[id] = note // assign note object to notes object
    res.status(201).json(note) // send note object to client
})

app.put('/notes/:id', (req, res) => {
    const note = notes[req.params.id] // assign request params to note variable
    // if note exists
    if (note) {
        note.title = req.body.title // assign request body title to note title
        note.content = req.body.content // assign request body content to note content
    } else {
        res.status(404).send('Note not found') // send 404 status code to client
    }
});

app.delete('/notes/:id', (req, res) => {
    const note = notes[req.body.id] // assign request params to note variable
    // if note exists
    if (note) {
        delete notes[req.body.id] // delete note from notes object
        res.status(200).send() // send 200 status code to client
    } else {
        res.status(404).send('Note not found') // send 404 status code to client
    }
});

app.listen(3000, () => {
    console.log('Listening on port 3000')
});
