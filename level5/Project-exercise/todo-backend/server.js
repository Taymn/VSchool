const express = require('express')
const app = express()
const { v4: uuidv4 } = require('uuid')

//looks for request body => req.body
app.use(express.json())

// data
const todos = [
    { 
        name: 'laundry',
        description: 'fold and put away',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmA2_QTbiL6FMfHvpNQ2ubJMtUqZl7sZGE2g&usqp=CAU',
        completed: true, 
        _id: uuidv4() 
    }
]

// .get route
app.get('/todos', (req, res) => {
    res.send(todos)
})

//.post route
app.post('/todos', (req, res) => {
    const newTodo = req.body
    newTodo._id = uuidv4()
    todos.push(newTodo)
    res.send(`successfully added ${newTodo.name} to database`)
})

//.put route
app.put('/:todoId', (req, res) => {
    const todoId = req.params.todoId
    const updateObject = req.body
    const todoIndex = todos.findIndex(todos => todos._id === todoId)
    const ubdatedTodo = Object.assign(todos[todoIndex], updateObject)
    res.send(ubdatedTodo)
})

//.delete route
app.delete('/:todoId', (req, res) => {
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(todos => todos._id === todoId)
    todos.splice(todoIndex, 1)
    res.send('Successfully deleted todo!')
})

// server Listen
app.listen(9000, () => {
    console.log('the server is running on port 9000')
})