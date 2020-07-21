// require statement
const express = require('express')
const app = express()

// data
const fruits = require('./models/fruits.js')

// routes
// INDEX ROUTE - send all fruits in the response
app.get('/fruits/', (request, response) => {
    response.send(fruits)
})

// SHOW ROUTE - send a single fruit in the response
app.get('/fruits/:index', (request, response) => {
    response.send(fruits[request.params.index])
})

// listening
app.listen(3000, () => {
    console.log("I'm listening!")
})