const express = require("express")
const app = express()


app.use(express.json())

app.use('/movies', require('./routes/movieRouter.js'))
app.use('/tvshows', require('./routes/tvshowRouter.js'))

app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})