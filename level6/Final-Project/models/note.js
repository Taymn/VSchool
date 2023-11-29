const mongoose = require('mongoose')
const Schema = mongoose.Schema

const noteSchema = new Schema({
    title: {
        type: String,
        require: true,
    },
    content:  {
        type: String,
        trim: true
    },

    comments: [String],

    likes: {
        type: Number,
        default: 0
    },
    dislikes: {
        type: Number,
        default: 0
    },

    tags: [],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
    
},
    {
        timestamps: true,
        // toJSON: { virtuals: true },
    }
)

module.exports = mongoose.model('Note', noteSchema)