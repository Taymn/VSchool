const express = require('express')
const rtvRouter = express.Router()
const Issue = require('../models/Issue')
const Comments = require('../models/Comments')

// Get all
rtvRouter.get('/', (req, res, next) => {
    Issue.find((err, issues) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(issues)
    })
})

// Get by user
rtvRouter.get('/user', (req, res, next) => {
    Issue.find({ user: req.auth._id }, (err, issues) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(issues)
    })
})

// Add new Issue
rtvRouter.post('/', (req, res, next) => {
    req.body.user = req.auth._id
    const newIssue = new Issue(req.body)
    newIssue.save((err, savedIssue) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedIssue)
    })
})

// Delete Issue
rtvRouter.delete('/:issueId', (req, res, next) => {
    Issue.findOneAndDelete(
        { _id: req.params.issueId, user: req.auth._id },
        (err, deletedIssue) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully deleted issue: ${deletedIssue.title}`)
        }
    )
})

// Update Issue
rtvRouter.put('/:issueId', (req, res, next) => {
    Issue.findOneAndUpdate(
        { _id: req.params.issueId, user: req.auth._id },
        req.body,
        { new: true },
        (err, updatedIssue) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedIssue)
        }
    )
})

rtvRouter.put('/:issueId/upVote', (req, res, next) => {
    Issue.findOne(
        { _id: req.params.issueId },
        (err, foundIssue) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            const upVoted = foundIssue.userVote
            if (upVoted.includes(req.auth._id)) {
                res.status(403)
                return next(new Error('Already voted'))
            }
            foundIssue.updateOne(
                { $inc: { upVote: 1 }, $addToSet: { userVote: req.auth._id } },
                { new: true },
                (err, updatedIssue) => {
                    if (err) {
                        res.status(500)
                        return next(err)
                    }
                    return res.status(201).send(updatedIssue)
                }
            )
        }
    )
})
rtvRouter.put('/:issueId/downVote', (req, res, next) => {
    Issue.findOne(
        { _id: req.params.issueId },
        (err, foundIssue) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            const downVoted = foundIssue.userVote
            if (downVoted.includes(req.auth._id)) {
                res.status(403)
                return next(new Error('Already voted'))
            }
            foundIssue.updateOne(
                { $inc: { downVote: 1 }, $addToSet: { userVote: req.auth._id } },
                { new: true },
                (err, updatedIssue) => {
                    if (err) {
                        res.status(500)
                        return next(err)
                    }
                    return res.status(201).send(updatedIssue)
                }
            )
        }
    )
})

rtvRouter.put('/:issueId/comments', (req, res, next) => {
    Issue.findOne({ _id: req.params.issueId }, (err, foundIssue) => {
        if (err) {
            res.status(403)
            return next(err)
        }
        if(!foundIssue) {
            res.status(404)
            return next(err)
        }
        const newComment = new Comments({
            text: req.body.text, 
            issue: foundIssue._id,
            user: req.auth._id
        })
        newComment.save((err, savedComment) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            foundIssue.comments.push(savedComment._id)
            foundIssue.save((err, updatedIssue) => {
                if(err) {
                    res.status(500)
                    return next(err)
                }
                return res.status(201).send(updatedIssue)
            })
        })
    })
})

module.exports = rtvRouter