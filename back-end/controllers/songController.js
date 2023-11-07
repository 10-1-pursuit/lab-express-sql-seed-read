const express = require("express");

const { getAllSongs, getSong } = require("../queries/song");

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


// SHOW
songs.get("/:id", async (req, res) => {
  const { id } = req.params;
  const oneSong = await getSong(id)
  if (oneSong) {
    res.json(oneSong);
  } else {
    res.status(404).json({ error: "not found" });
  }
});





module.exports = songs;