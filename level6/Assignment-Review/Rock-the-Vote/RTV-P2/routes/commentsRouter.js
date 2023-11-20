const express = require('express')
const commentsRouter = express.Router()
const Comment = require('../models/Comment')
const Issue = require('../models/Issue')

commentsRouter.post('/:issueId', (req, res, next) => {
    req.body.issue = req.params.issueId
    const comment = new Comment({...req.body, user: req.auth._id})
    comment.save((err, response) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        // Issue.findOne(
        //     { _id: req.body.issue },
        //     (err, foundIssue) => {
        //         if (err) {
        //             res.status(500)
        //             return next(err)
        //         }
        //         foundIssue.updateOne(
        //             { $push: { comments: comment._id} }
        //         )
        //     }
        // )
        return res.status(201).send(response)
    })
})

module.exports = commentsRouter