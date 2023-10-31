const express = require('express')
const bountyRouter = express.Router()
const bounty = require('../models/bounty')

// .get route
bountyRouter.get('/', (req, res, next) => {
    bounty.find((err, bounties) => {
                if(err){
                    res.status(500)
                    return next(err)
                }
                return res.status(200).send(bounties)
            })
})

// Get One
bountyRouter.get("/:bountyId", (req, res, next) => {
    const bountyId = req.params.bountyId
    const foundBounty = bounties.find(bounty => bounty._id === bountyId)
    if (!foundBounty) {
        const error = new Error(`The item with id ${bountyId} was not found.`)
        res.status(500)
        return next(error)
    }
    res.status(200).send(foundBounty)
})

bountyRouter.get('/search/type', (req, res, next) => {
    bounty.find({ type: req.query.type}, (err, bounties) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bounties)
    })
})

//.post route
bountyRouter.post('/', (req, res, next) => {
    const newBounty = new bounty(req.body)
    newBounty.save((err, savedBounty) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedBounty)
    })
})

//.put route
bountyRouter.put('/:bountyId', (req, res, next) => {
    bounty.findOneAndUpdate(
        { _id: req.params.bountyId },
        req.body,
        {new: true},
        (err, updatedBounty) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedBounty)
        }
    )
})

//.delete route
bountyRouter.delete('/:bountyId', (req, res, next) => {
    bounty.findOneAndDelete(
        { _id: req.params.bountyId },
        (err, deletedItem) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully deleted ${deletedItem.lastName} bounty from database`)
        })
})




module.exports = bountyRouter