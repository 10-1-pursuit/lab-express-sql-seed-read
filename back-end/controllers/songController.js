const express = require("express");
const { getAllSongs, getOneSong } = require("../models/songs");
const songs = express.Router();

songs.get("/", async (req, res) => {
  const allSongs = await getAllSongs();
  if (allSongs[0]) {
    res.status(200).json(allSongs);
  } else {
    res.status(500).json({ error: "No songs available" });
  }
});


songs.get("/:id", async (req, res) => {
    const id = req.params.id
    const oneSong = await getOneSong(id);
    if (oneSong) {
      res.status(200).json(oneSong);
    } else {
      res.status(404).json({ error: "This song is not available" });
    }
  });


module.exports = songs;
