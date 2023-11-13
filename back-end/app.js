const express = require("express");
const app = express();
const cors = require("cors");

//const songController = require("./controllers/songController.js");
const albumController = require("./controllers/albumController.js");

app.use(cors());
app.use(express.json());
//app.use("/songs", songController);
app.use("/albums", albumController);

app.get("/", (req, res) => {
  res.status(200).send("Welcome to Tuner");
});

app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

module.exports = app;
