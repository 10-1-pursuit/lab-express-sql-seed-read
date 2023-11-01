const express = require("express");
const app = express();
const songController = require('./controllers/songController');

const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use('/songs', songController)

//ROUTES

app.get('/', (req, res) => {
    res.send("Welcome to the Songs App!")

});



module.exports = app;
