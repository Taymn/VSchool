const express = require('express')
const tvshowRouter = express.Router()
const { v4:uuidv4 } = require('uuid')
const movieRouter = require('./movieRouter')


const tvShows = [
    {title: 'Rick and Morty', _id: uuidv4()},
    {title: 'Watchman', _id: uuidv4()},
    {title: 'Westworld', _id: uuidv4()},
    {title: 'Friends', _id: uuidv4()}
]

// tvshowRouter.get('/', (req, res) =>{
//     res.send(tvShows)
// })

// tvshowRouter.post('/', (req, res) =>{
//     const newShow = req.body
//     newShow._id = uuidv4()
//     tvShows.push(newShow)
//     res.send(`Successfully added ${newShow.title} to the database`)
// })

tvshowRouter.route('/')
.get((req, res) =>{
    res.send(tvShows)
})

tvshowRouter.get("/:tvshowId",(req, res) => {
    const tvShowId = req.params.tvshowId
    const foundShow = tvShows.find(show => show._id === tvShowId)
    res.send(foundShow)
})

.post((req, res) =>{
    const newShow = req.body
    newShow._id = uuidv4()
    tvShows.push(newShow)
    res.send(`Successfully added ${newShow.title} to the database`)
})

module.exports = tvshowRouter