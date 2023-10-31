const express = require("express")
const app = express()
const morgan = require('morgan')
const uri = "mongodb+srv://adamgt2003:Q5BWRLJEcXBee65Q@cluster0.mnr85c8.mongodb.net/cluster0?retryWrites=true&w=majority";
const mongoose = require('mongoose')

app.use(express.json())
app.use(morgan( 'dev' ))
mongoose.connect(uri, console.log('Connected to the Database'))

app.use('/api', require('./routes/inventoryRouter'))

app.use((err, res, req, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(9000, () => {
    console.log('Server is running on port 9000')
})