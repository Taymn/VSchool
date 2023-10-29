const express = require("express")
const app = express()
const morgan = require('morgan')
const uri = "mongodb+srv://adamgt2003:Q5BWRLJEcXBee65Q@cluster0.mnr85c8.mongodb.net/cluster0?retryWrites=true&w=majority";
const mongoose = require('mongoose')

// Middleware (for every request) //
app.use(express.json()) // Looks for a request body, and turns it into 'req.body'
app.use(morgan('dev')) // Logs requests to the console.

// Connect to database
mongoose.connect(uri, console.log('Connected to the Database'))

// Routes //
app.use('/api/movies', require('./routes/movieRouter.js'))
app.use('/api/tvshows', require('./routes/tvshowRouter.js'))

// Error handler
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

// Server Listen //
app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})