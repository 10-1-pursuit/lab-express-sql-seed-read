const express = require('express');
const app = express();
const cors= require('cors');
const morgan = require("morgan");

//middleware
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));


app.get('/', (req,res)=>{
    res.send('Welcome to The Tuner App')
});

const artistController = require('./controllers/artistController')
app.use('/artists', artistController)

app.get('*', (req,res)=>{
    res.status(404).send({message: `Error`})
})

module.exports = app;
