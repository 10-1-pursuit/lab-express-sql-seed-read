const express = require("express");
const songs = express.Router();
const { getAllSongs, getSong, createSong, updateSong, deleteSong } = require("../queries/song");
const { checkArtist, checkBoolean, checkAlbum, checkTime } = require("../validations/checkSongs.js")

// INDEX
songs.get("/", async (req, res) => {
  const allSongs = await getAllSongs();
  if (allSongs[0]) {
    res.status(200).json(allSongs);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

songs.get("/:id", async (req, res) => {
    const { id } = req.params;
    const song = await getSong(id);
    if (song) {
      res.json(song);
    } else {
      res.status(404).json({ error: "not found" });
    }
  });

  songs.post("/", checkBoolean, checkArtist, checkAlbum, checkTime, async (req, res) => {
    const body = req.body
    const song = await createSong(body);
    res.json(song);
  });

  songs.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deletedSong = await deleteSong(id);
    if (deletedSong.id) {
      res.status(200).json(deletedSong);
    } else {
      res.status(404).json("Song not found");
    }
  });
  
  songs.put("/:id", checkBoolean, checkArtist, checkAlbum, checkTime, async (req, res) => {
    const { id } = req.params
    const body = req.body
    const updatedSong = await updateSong(id, body)
    if(updatedSong.id){
      res.status(200).json(updatedSong);
    } else {
      res.status(404).json("Song not found");
    }
  });
  

module.exports = songs;
