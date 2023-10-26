const express = require('express')
const app = express()
const morgan = require('morgan')
const { v4: uuidv4 } = require('uuid')
const bounties = require('./bountyData.js')
// Part 1 
// Server setup & .get/.post routes

//looks for request body => req.body
app.use(express.json())
app.use(morgan('dev'))


// .get route
app.get('/api/bounties', (req, res) => {
    res.send(bounties)
})

//.post route
app.post('/api/bounties', (req, res) => {
    const newBounty = req.body
    newBounty._id = uuidv4()
    bounties.push(newBounty)
    res.send(newBounty)
})

//.put route
app.put('/api/bounties/:bountyId', (req, res) => {
    const bountyId = req.params.bountyId
    const updateObject = req.body
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    const ubdatedBounty = Object.assign(bounties[bountyIndex], updateObject)
    res.send(ubdatedBounty)
})

//.delete route
app.delete('/api/bounties/:bountyId', (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    bounties.splice(bountyIndex, 1)
    res.send('Successfully deleted bounty!')
})

// server Listen
app.listen(9000, () => {
    console.log('the server is running on port 9000')
})