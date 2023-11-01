const express = require('express');
const app = express();
const cors= require('cors');

const songController = require('./controllers/songController')
//middleware
app.use(cors());
app.use(express.json());
app.use('/songs', songController)


app.get('/', (req,res)=>{
    res.send('Welcome to The Tuner App')
});

app.get('*', (req,res)=>{
    res.status(404).send({message: `Error`})
})

module.exports = app;
