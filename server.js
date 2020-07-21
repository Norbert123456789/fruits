// require statement
const express = require('express')
const app = express()

// data
const fruits = [
    {
        name:'apple',
        color: 'red',
        readyToEat: true
    },
    {
        name:'pear',
        color: 'green',
        readyToEat: false
    },
    {
        name:'banana',
        color: 'yellow',
        readyToEat: true
    }
]

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