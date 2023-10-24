const express = require('express')
const app = express()
const { v4: uuidv4 } = require('uuid')
// Part 1 
// Server setup & .get/.post routes

//looks for request body => req.body
app.use(express.json())

// data
const bounties = [
    { firstName: 'Jango', lastName: 'Fett', living: true, bountyAmount: 500, type: 'sith', _id: uuidv4() }
]

// .get route
app.get('/bounties', (req, res) => {
    res.send(bounties)
})

//.post route
app.post('/bounties', (req, res) => {
    const newBounty = req.body
    newBounty._id = uuidv4()
    bounties.push(newBounty)
    res.send(`successfully added ${newBounty.lastName} to database`)
})

//.put route
app.put('/:bountyId', (req, res) => {
    const bountyId = req.params.bountyId
    const updateObject = req.body
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    const ubdatedBounty = Object.assign(bounties[bountyIndex], updateObject)
    res.send(ubdatedBounty)
})

//.delete route
app.delete('/:bountyId', (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    bounties.splice(bountyIndex, 1)
    res.send('Successfully deleted bounty!')
})

// server Listen
app.listen(9000, () => {
    console.log('the server is running on port 9000')
})