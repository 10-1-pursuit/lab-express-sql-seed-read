const cors = require("cors");
const express = require("express");


// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());
const songController = require("./controllers/songController.js"); 
app.use("/songs", songController);
// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Tuner");
});


app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

module.exports = app;
