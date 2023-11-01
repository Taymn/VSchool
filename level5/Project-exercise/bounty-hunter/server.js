const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const uri = "mongodb+srv://adamgt2003:tajn1Mhbp4LVKrCR@bountyHunter.ay6c2i0.mongodb.net/bountyHunter?retryWrites=true&w=majority";
// Part 1 
// Server setup & .get/.post routes

// middleware (looks for request body => req.body)
app.use(express.json())
app.use(morgan('dev'))

// database
connectToDb().then(console.log("connected to database"))
    .catch((err) => { throw err });
async function connectToDb() {
    mongoose.set('strictQuery', false)
    await mongoose.connect(uri);
}


// route
app.use('/api/bounties', require('./routes/bountyRouter.js'))

// error handler
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({ errMsg: err.message })
})

// server Listen
app.listen(9000, () => {
    console.log('the server is running on port 9000')
})