const cors = require("cors");
const express = require("express");


// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Tuner");
});
const songController = require("./controllers/songController.js"); 
app.use("/songs", songController);

app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

module.exports = app;
