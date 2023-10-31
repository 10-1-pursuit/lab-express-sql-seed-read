const express = require("express");
const app = express();
const cors = require("cors");
const songsController = require("./controllers/songController");

app.use(cors());
app.use(express.json());
app.use("/songs", songsController);

app.get("/", (req, res) => {
  res.send("Welcome to Tuner");
});

app.get("*", (req, res) => {
  res.status(404).send("error route doesnt exist");
});

module.exports = app;
