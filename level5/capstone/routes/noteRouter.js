const express = require('express')
const noteRouter = express.Router()
const Note = require('../models/note.jsx')

noteRouter.get('/', (req, res, next) => {
    Note.find((err, notes) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(notes)
    })
})

noteRouter.post('/', (req, res, next) => {
    const newNote = new Note(req.body)
    newNote.save((err, savedNote) =>{
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedNote)
    }) 
})

noteRouter.put('/like/:noteID', (req, res, next) => {
    Note.findOneAndUpdate(
        { _id: req.params.noteID },
        { $inc: {likes: 1}},
        { new: true },
        (err, updatedNote) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedNote)
        }
    )
})

module.exports = noteRouter