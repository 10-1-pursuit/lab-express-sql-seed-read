const express = require('express')
const app = express()
const songController = require('./controllers/songController')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use("/songs", songController)

app.get('/', (req, res) => {
    res.send('Welcome to Tuner')
})

app.use((req, res) => {
    res.status(404).send('404 Not Found');
  });
  

module.exports = app