const express = require("express");
const songs = express.Router();

songs.get("/", (req, res) => {
  res.send("wait one sec");
});

module.exports = songs;
