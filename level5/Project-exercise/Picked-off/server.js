const express = require('express')
const app = express()

app.use(express.json())

app.use('/test', require('./routes/middleware.js'))

app.listen(9000, () => {
    console.log('The sever is running on port 9000')
})