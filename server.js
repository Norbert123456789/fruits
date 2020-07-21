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
    // render the show.ejs file in the response
    response.render('show.ejs', {
        // we can provide data as a key value pair to be sent to the view
        fruit: fruits[request.params.index]
    })
    // NOTE: the render function will automatically look 
    //       for files by the name we provide in the 'views folder
})

// listening
app.listen(3000, () => {
    console.log("I'm listening!")
})