const mongoose = require('mongoose')
const Schema = mongoose.Schema

const issueSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    description: String,
    upVote: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },],
    downVote: [{
        type: Schema.Types.ObjectId,
        ref: 'User', 
        required: true
    }],
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref:'Comment'
    }],
    datePosted: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Issue', issueSchema)