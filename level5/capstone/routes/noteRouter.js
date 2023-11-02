const express = require('express')
const noteRouter = express.Router()
const Note = require('../models/note.jsx')

noteRouter.get('/', (req, res, next) => {
    Note.find((err, notes) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(notes)
    })
})

noteRouter.get('/:noteID', (req, res, next) => {
    const noteID = req.params.noteID
    const foundNote = notes.find(note => note._id === noteID);
    if (!foundNote) {
        const error = new Error(`The note with id ${noteID} was not found.`);
        res.status(500)
        return next(error)
    }
    res.status(200).send(foundNote);
})


noteRouter.post('/', (req, res, next) => {
    const newNote = new Note(...req.body)
    newNote.save((err, savedNote) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedNote)
    })
})

noteRouter.put('/like/:noteID', (req, res, next) => {
    Note.findOneAndUpdate(
        { _id: req.params.noteID },
        { $inc: { likes: 1 } },
        { new: true },
        (err, updatedNote) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedNote)
        }
    )
})

noteRouter.put('/dislike/:noteID', (req, res, next) => {
    Note.findOneAndUpdate(
        { _id: req.params.noteID },
        { $inc: { dislikes: 1 } },
        { new: true },
        (err, updatedNote) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedNote)
        }
    )
})

noteRouter.delete('/:noteID', (req, res, next) => {
    Note.findOneAndDelete({ _id: req.params.noteID }, (err, deletedItem) => {
        if (err) {
            res.status(500)
            return next(err)

        }
        return res.status(200).send(`Successfully deleted item ${deletedItem.title} from database`)
    })
})

module.exports = noteRouter