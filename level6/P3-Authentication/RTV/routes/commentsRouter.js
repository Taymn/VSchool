const express = require('express')
const commentsRouter = express.Router()
const Comment = require('../models/Comment')
const Issue = require('../models/Issue')

// Get Comments
commentsRouter.get('/async', async(req, res, next) => {
    try{
        const issues = await Issue.find()
        const issuesWithComments = await Promise.all(issues.map(async issue => {
            const comments = await Comments.find({issue: issue._id}).populate('user', '-password')
            return {...issue.toObject(), comments}
        }))
        return res.status(200).send(issuesWithComments)
    }catch(err){
        res.status(500)
        return next(err)
    }
})

// Add Comment
commentsRouter.post('/:issueId', (req, res, next) => {
    // Attach the user who posted he comment
    req.body.issue = req.params.issueId 
    // Link the comment to the issue
    // console.log({...req.body, user: req.auth._id})
    const newComment = new Comment({...req.body, user: req.auth._id})
    newComment.save((err, savedComment) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedComment)
    })
})

// Delete Comment
commentsRouter.delete('/:issueId', (req, res, next) => {
    Comment.findOneAndDelete(
        { _id: req.params.issueId, user: req.auth._id },
        (err, deletedComment) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully deleted comment ${deletedComment}`)
        }
    )
})

//Update Comment
commentsRouter.put('/:issueId', (req, res, next) => {
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

module.exports = commentsRouter