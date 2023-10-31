const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BountySchema = new Schema({
    firstName: String,
    lastName: {
        type: String,
        required: true
    },
    living: Boolean,
    amount: {
        type: String,
        required: true
    }, 
    type: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model('bounty', BountySchema)