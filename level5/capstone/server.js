const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const uri = 'mongodb+srv://adamgt2003:CjuOvLMHsZbEh2Wh@cluster0.cg9o0xo.mongodb.net/notes-db?retryWrites=true&w=majority';

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect(uri, console.log('Connected to the Database'))


app.use('/notes', require('./routes/noteRouter.js'))

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(9000, () => {
    console.log('Server is running on port 9000')
})
