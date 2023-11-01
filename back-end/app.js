const express = require('express')
const app = express()

//Songs ROUTES
const songController = require("./controllers/songController")

//Import cors

const cors = require('cors')

//Middleware
app.use(cors())
app.use(express.json())
app.use("/songs", songController);


app.get('/', (req, res) => {
    res.send('Welcome to Turner')
})
app.get('*', (req, res) => {
    res.status(404).send({message: "not found"})
})

module.exports = app










module.exports = app