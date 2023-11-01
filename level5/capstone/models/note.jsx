const mongoose = require('mongoose')
const Schema = mongoose.Schema

const noteSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    likes: {
        type: Number,
        default: 0
    },
    dislikes: {
        type: Number,
        default: 0
    },
    comments: String,
    tags: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model('Note', noteSchema)