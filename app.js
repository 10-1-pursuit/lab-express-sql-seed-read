const express = require('express')
const app = express()
const songsController = require('./controllers/songsController')

const cors = require('cors')

//Middleware
app.use(cors())
app.use(express.json())
app.use("/songs", songsController)

app.get('/', (req,res) => {
    res.send('Welcome to Tuner!')
})


module.exports = app