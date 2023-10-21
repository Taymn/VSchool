// First Express Server
const express = require('express')
const app = express()

// Fake data
const users = [
    {name:"adam", age: 30},
    {name:"atom", age: 8},
    {name:"blake", age:20},
    {name:"virgil", age: 40},
    {name:"brak", age: 35}
]

    // 1. Endpoint (mount path)
    // 2. CallBack function
app.get("/users", (req, res) => {
    res.send(users)
})


        // 1. port 2. CB
app.listen(9000, () => {
    console.log('The server is running on Port 9000')
})