const express = require('express')
const rtvRouter = express.Router()
const Issue = require('../models/Issue')
const Comments = require('../models/Comment')

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

rtvRouter.get('/async', async (req, res, next) => {
    try {
        const issues = await Issue.find()
        const issuesWithComments = await Promise.all(issues.map(async issue => {
            const comments = await Comments.find({ issue: issue._id }).populate('user', '-password')
            return { ...issue.toObject(), comments }
        }))
        issuesWithComments.sort((a, b) => b.upVote.length - a.upVote.length)
        return res.status(200).send(issuesWithComments)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

// Get issues by user
rtvRouter.get('/user', async(req, res, next) => {
    try{
        const userIssues = await Issue.find({user: req.auth._id})
        const issuesWithComments = await Promise.all(userIssues.map(async issue => {
            const comments = await Comments.find({ issue: issue._id }).populate('user', '-password')
            return { ...issue.toObject(), comments }
        }))
        issuesWithComments.sort((a, b) => b.upVote.length - a.upVote.length)
        return res.status(200).send(issuesWithComments)
    }catch(err){
        res.status(500)
        return next(err)
    }
    
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
    Issue.findOneAndUpdate(
        { _id: req.params.issueId },
        {
            $addToSet: {upVote: req.auth._id}, 
            $pull: {downVote: req.auth._id}
        }, 
        {new: true},
        (err, foundIssue) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(201). send(foundIssue)
        }
    )
}
)

rtvRouter.put('/:issueId/downVote', (req, res, next) => {
    Issue.findOneAndUpdate(
        { _id: req.params.issueId },
        {
            $pull: {upVote: req.auth._id}, 
            $addToSet: {downVote: req.auth._id}
        }, 
        {new: true},
        (err, foundIssue) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(201). send(foundIssue)
        }
    )
})

rtvRouter.put('/:issueId/comments', (req, res, next) => {
    Issue.findOne({ _id: req.params.issueId }, (err, foundIssue) => {
        if (err) {
            res.status(403)
            return next(err)
        }
        if (!foundIssue) {
            res.status(404)
            return next(err)
        }
        const newComment = new Comments({
            text: req.body.text,
            issue: foundIssue._id,
            user: req.auth._id
        })
        newComment.save((err, savedComment) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            foundIssue.comments.push(savedComment._id)
            foundIssue.save((err, updatedIssue) => {
                if (err) {
                    res.status(500)
                    return next(err)
                }
                return res.status(201).send(updatedIssue)
            })
        })
    })
})

module.exports = rtvRouter