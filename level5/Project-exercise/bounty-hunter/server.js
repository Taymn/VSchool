const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
// Part 1 
// Server setup & .get/.post routes

// middleware (looks for request body => req.body)
app.use(express.json())
app.use(morgan('dev'))

// database
mongoose.connect("mongodb+srv://adamgt2003:Q5BWRLJEcXBee65Q@cluster0.mnr85c8.mongodb.net/", () => console.log('connected to database'))

// route
app.use('/api/bounties', require('./routes/bountyRouter.js'))

// error handler
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

// server Listen
app.listen(9000, () => {
    console.log('the server is running on port 9000')
})