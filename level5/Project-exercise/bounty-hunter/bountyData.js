const { v4: uuidv4 } = require('uuid')

// data
module.exports = [
    {
        firstName: 'Jango',
        lastName: 'Fett',
        living: true, 
        amount: 500, 
        type: 'sith', 
        _id: uuidv4()
    }
]