const express = require('express')
const movieRouter = express.Router()
const Movie = require('../models/movie.jsx');

// Lesson
// movieRouter.get("/", (req, res, next) => {
//     Movie.find((err, movies) => {
//         if(err){
//             res.status(500)
//             return next(err)
//         }
//         return res.status(200).send(movies)
//     })
// })

// Updated to Mongoose7
movieRouter.get('/', async (req, res, next) => {
    try {
        const movies = await Movie.find();
        return res.status(200).send(movies);
    } catch (err) {
        console.error(err);
        res.status(500);
        return next(err);
    }
});

// Get One
// movieRouter.get("/:movieId", (req, res, next) => {
//     const movieId = req.params.movieId
//     const foundMovie = movies.find(movie => movie._id === movieId)
//     if (!foundMovie) {
//         const error = new Error(`The item with id ${movieId} was not found.`)
//         res.status(500)
//         return next(error)
//     }
//     res.status(200).send(foundMovie)
// })

//Get by genre
movieRouter.get("/search/genre", async (req, res, next) => {
    try {
        const movies = await Movie.find({ genre: req.query.genre });

        return res.status(200).json(movies);
    } catch (err) {
        console.error(err);
        res.status(500);
    }
});

//Post One
movieRouter.post('/', async (req, res, next) => {
    try {
        const newMovie = new Movie(req.body);
        newMovie.save();
        res.status(201).send(newMovie)
    }
    catch (err) {
        res.status(500).json(
            { message: "error in route" }
        )
    }
})

// Delete One
movieRouter.delete('/:movieId', async (req, res, next) => {
    try {
        const deletedItem = await Movie.findOneAndDelete({ _id: req.params.movieId });
        if (!deletedItem) {
            return res.status(404).send('Item not found in the database');
        }
        return res.status(200).send(`Successfully deleted item ${deletedItem.title} from the database`);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

// Update One
movieRouter.put('/:movieId', async (req, res, next) => {
    try {
        const updatedMovie = await Movie.findOneAndUpdate(
            { _id: req.params.movieId },
            req.body,
            { new: true }
        );

        if (!updatedMovie) {
            return res.status(404).send('Movie not found');
        }

        return res.status(201).json(updatedMovie);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});



module.exports = movieRouter