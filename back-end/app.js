// Import express and initialize an instance of the express server
const express = require('express')
const app = express()

//Songs ROUTES
const songController = require("./controllers/songController")

//Import cors
// prevents nasty errors on the FE
const cors = require('cors')

//Middleware between the request and response, the middleware does it thing before the response
app.use(cors())
//when u send in data it can be in json format
app.use(express.json()) // when the data comes in it will be jsondata from the FE, sends it to server and we are going to tell the server we are going to accept json.
// with the post and the put requests we are sending data with the request
app.use("/songs", songController);
// when we see  /songs it will hand it off to the songController and 
// handle the request successfully based on the method we use
// when we see songs url we can route it appropriately in the song controller

///gets the data
app.get('/', (req, res) => {
    res.send('Welcome to Turner')
})
app.get('*', (req, res) => {
    res.status(404).send({message: "not found"})
})

module.exports = app

//nodemon server we do not have to restart our server everytime we make
// a change








module.exports = app