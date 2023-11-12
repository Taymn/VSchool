const mongoose = require('mongoose')
const Schema = mongoose.Schema

const issueSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    upVote: Number,
    downVote: Number,
    userVote: Array,
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    comments: [String]
})

module.exports = mongoose.model('Issue', issueSchema)