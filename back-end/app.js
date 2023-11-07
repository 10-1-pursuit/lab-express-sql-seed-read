const express = require("express");

const app = express();

const songController = require("./controllers/songController");

const cors = require("cors");

//middleware
app.use(cors());
app.use(express.json());
app.use("/songs", songController);

app.get("/", (req, res) => {
  res.send("Welcome to Tuner App!");
});

module.exports = app;
