const cors = require("cors");
const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

app.get("/", (req, res) => {
    res.send("Welcome to the Tuner app!");
});

const artistController = require('./controllers/artistController.js')
const songController = require('./controllers/songController.js')
app.use('/artists', artistController)
app.use('/songs', songController)

app.get("*", (req, res) => {
    res.status(404).send("Page not found");
})

module.exports = app;