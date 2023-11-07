const express = require("express");

const { getAllSongs } = require("../queries/song");

const songs = express.Router();

//GET ALL SONGS
songs.get("/", async (req, res) => {
  const allSongs = await getAllSongs();
  if (allSongs) {
    res.status(200).json(allSongs);
  } else {
    res.status(404).json({ error: "" });
  }
});





module.exports = songs;