const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const url = 'mongodb+srv://adamgt2003:Q5BWRLJEcXBee65Q@cluster0.mnr85c8.mongodb.net/RTV.db-political-issues'

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect(url, (err) => { if (err) { console.log(err) } console.log('Connected to database') })

app.use('/rtv', require('./routes/rtvRouter.js'))

app.use((err, req, res, next) => { console.log(err) 
    if (err) { res.status(err.status) } return res.send({ errMsg: err.message }) })

app.listen(9000, () => { console.log('Serveris running on local port 9000') })