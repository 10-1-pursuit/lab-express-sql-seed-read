const express = require("express");
const { getAllTunes } = require("../queries/tuner");
const songs = express.Router();

//get all tunes

songs.get("/", async (req, res) => {
  const allTunes = await getAllTunes();
  res.json(allTunes);
});

module.exports = songs;
