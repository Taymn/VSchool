const express = require('express')
const noteRouter = express.Router()
const Note = require('../models/note.js')

// add note
noteRouter.post('/', async (req, res, next) => {
    try {
        req.body.user = req.auth._id;
        const newNote = new Note(req.body);
        const savedNote = await newNote.save();
        return res.status(201).send(savedNote);
    } catch (err) {
        res.status(500);
        return next(err);
    }
});

// get all notes
noteRouter.get('/', async (req, res, next) => {
    try {
        const notes = await Note.find();
        return res.status(200).send(notes);
    } catch (err) {
        res.status(500);
        return next(err);
    }
});

// get user notes
noteRouter.get('/:user', async (req, res, next) => {
    try {
        const notes = await Note.find(
            { user: req.auth._id });
        return res.status(200).send(notes);
    } catch (err) {
        res.status(500);
        return next(err);
    }
});

// noteRouter.get('/:noteID', async (req, res, next) => {
//     const noteID = req.params.noteID;
//     try {
//         const foundNote = await Note.findById(noteID);
//         if (!foundNote) {
//             const error = new Error(`The note with id ${noteID} was not found.`);
//             res.status(404);
//             return next(error);
//         }
//         res.status(200).send(foundNote);
//     } catch (err) {
//         res.status(500);
//         return next(err);
//     }
// });

// update note
noteRouter.put('/:noteID', async (req, res, next) => {
    const { title, tags, content, comments } = req.body;
    try {
        const updatedNote = await Note.findOneAndUpdate(
            { _id: req.params.noteID, user: req.auth._id },
            { title, tags, content, comments },
            { new: true }
        );
        return res.status(201).send(updatedNote);
    } catch (err) {
        res.status(500);
        return next(err);
    }  
});

// delete note
noteRouter.delete('/:noteID', async (req, res, next) => {
    try {
        const deletedItem = await Note.findOneAndDelete(
             { _id: req.params.noteID, user: req.auth._id });
        return res.status(200).send(`Successfully deleted item ${deletedItem.title} from the database`);
    } catch (err) {
        res.status(500);
        return next(err);
    }
});

// add likes
noteRouter.put('/likes/:noteID', async (req, res, next) => {
    try {
        const updatedNote = await Note.findOneAndUpdate(
            { _id: req.params.noteID },
            { $inc: { likes: 1 } },
            { new: true }
        );
        return res.status(201).send(updatedNote);
    } catch (err) {
        res.status(500);
        return next(err);
    }
});

// add dislikes
noteRouter.put('/dislikes/:noteID', async (req, res, next) => {
    try {
        const updatedNote = await Note.findOneAndUpdate(
            { _id: req.params.noteID },
            { $inc: { dislikes: 1 } },
            { new: true }
        );
        return res.status(201).send(updatedNote);
    } catch (err) {
        res.status(500);
        return next(err);
    }
});

module.exports = noteRouter