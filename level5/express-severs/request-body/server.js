const express = require('express')
const app = express()
const { v4: uuid } = require("uuid")

// Middleware (for every request)
app.use(express.json())//looks for a request body, and turns it into req.body

// Fake Data //
const movies = [
    { title: "die hard", genre: "action", _id: uuid() },
    { title: "star wars IV", genre: "fantasy", _id: uuid() },
    { title: "lion king", genre: "fantasy", _id: uuid() },
    { title: "friday the 13th", genre: "horror", _id: uuid() }
]


// Routes //
app.get('/movies', (req, res) => {
    res.send(movies)
})

app.post("/movies", (req, res) => {
    const newMovie = req.body
    newMovie._id = uuid()
    movies.push(newMovie)
    res.send(`Successfully added ${newMovie.title} to database`)
})

// server Listen // 
app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})