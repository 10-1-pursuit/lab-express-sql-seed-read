const express = require("express");
const { getAllSongs, getOneSong, createSong } = require("../models/songs");
const {
  checkSongName,
  checkArtistName,
  checkAlbumName,
  checkTimeInput,
  checkBoolean,
} = require("../validations/checkSongs");
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
  const id = req.params.id;
  const oneSong = await getOneSong(id);
  if (oneSong) {
    res.status(200).json(oneSong);
  } else {
    res.status(404).json({ error: "This song is not available" });
  }
});

songs.post(
  "/",
  checkSongName,
  checkArtistName,
  checkAlbumName,
  checkTimeInput,
  checkBoolean,
  async (req, res) => {
    try {
      const postSong = await createSong(req.body);
      if (postSong instanceof Error) {
        console.error(postSong); 
        res.status(500).json({ error: "Internal server error" });
      } else {
        res.status(200).json(postSong);
      }
    } catch (error) {
      console.error(error); 
      res.status(500).json({ error: "Internal server error" });
    }
  }
);

module.exports = songs;
