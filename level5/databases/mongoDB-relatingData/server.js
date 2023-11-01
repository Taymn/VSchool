const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const uri = "mongodb+srv://adamgt2003:Q5BWRLJEcXBee65Q@cluster0.mnr85c8.mongodb.net/db-methods?retryWrites=true&w=majority";

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect(uri, console.log('Connected to the Database'))

app.use('/books', require('./routes/bookRouter.js'))
app.use('/authors', require('./routes/authorRouter.js'))


app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(9000, () => {
    console.log('Server is running on port 9000')
})