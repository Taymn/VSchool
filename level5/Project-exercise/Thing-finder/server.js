const express = require('express')
const app = express()
const { v4:uuidv4 } = require('uuid')

const games = [
    {title: 'Lords of the Fallen', genre: 'role-playing', _id: uuidv4() },
    {title: 'Monster Hunter World', genre: 'role-playing', _id: uuidv4() },
    {title: 'Darktide', genre: 'first-person shooter', _id: uuidv4() },
    {title: 'Hunt: Showdown', genre: 'first-person shooter', _id: uuidv4() }
]

app.get('/games', (req, res) => {
    res.send(games)
})

app.get('/games/:gameId', (req, res) => {
    const gameId = req.params.gameId
    const foundGame = games.find(game => game._id === gameId)
    res.send(foundGame)
})

app.get('/games/search/genre', (req, res) => {
    const genre = req.query.genre
    const filteredGames = games.filter(game => game.genre === genre)
    res.send(filteredGames)
})

app.post('/games', (req, res) => {
    const newGame = req.body
    newGame._id = uuid()
    res.send(`Successfully added ${newGame.title} to database`)
})

app.listen(9000, () => {
    console.log('The server is on port 9000')
})