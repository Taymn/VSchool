const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const url = 'mongodb+srv://adamgt2003:CjuOvLMHsZbEh2Wh@cluster0.cg9o0xo.mongodb.net/notes-db?retryWrites=true&w=majority';
var { expressjwt: jwt } = require('express-jwt')

app.use(express.json())
app.use(morgan('dev'))

connectToDb().then(console.log("connected to database"))
    .catch((err) => { throw err });
async function connectToDb() {
    mongoose.set('strictQuery', false)
    await mongoose.connect(url);
}

app.use('/auth', require('./routes/authRouter.js'))
app.use('/api', jwt({ secret: process.env.SECRET, algorithms: ['HS256'] }))
app.use('/api/notes', require('./routes/noteRouter.js'))

app.use((err, req, res, next) => {
    console.log(err)
    if(err.name === 'UnauthorizedError'){
        res.status(err.status)
    }
    return res.send({ errMsg: err.message })
})

app.listen(9000, () => {
    console.log('Server is running on port 9000')
})
