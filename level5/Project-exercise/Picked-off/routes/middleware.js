const express = require('express')
const middlewareRouter = express.Router()

middlewareRouter.route('/')

middlewareRouter.get('/',(req, res, next) => {
    console.log('GET REQUEST RECIEVED')
    req.body = {Place: "Home"}
    res.send(req.body)
})




module.exports = middlewareRouter