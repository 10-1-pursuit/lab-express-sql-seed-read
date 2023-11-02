// Import express and initialize an instance of the express server
const express = require('express')
const app = express()

//Import cors
const cors = require('cors')
const songsController = require('./controllers/songController')
// Middleware
app.use(cors())
app.use(express.json())

app.use('/songs', songsController)

app.get('/', (req, res) => {
    res.send('Welcome to Tuner!')
})

app.get('*', (req, res)=> {
    res.redirect()
})

module.exports = app