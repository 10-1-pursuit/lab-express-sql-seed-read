const express = require("express");
const songs = express.Router();
const {
  getAllSongs,
  getSong,
  insertSong,
  deleteSong,
  updateSong,
} = require("../queries/songs");

//GET - index
songs.get("/", async (req, res) => {
  const allSongs = await getAllSongs();
  if (allSongs) {
    res.status(200).json(allSongs);
  } else {
    res.status(404).json({ error: "Array is empty" });
  }
});

//GET - show
songs.get("/:id", async (req, res) => {
  const { id } = req.params;
  const oneSong = await getSong(id);
  if (getSong) {
    res.status(200).json(oneSong);
  } else {
    res.status(404).json({ error: "Id not found" });
  }
});

//CREATE - post
songs.post("/", async (req, res) => {
  const body = req.body;
  const newSong = await insertSong(body);
  res.status(200).json(newSong);
});

//PUT - update
songs.put("/:id", async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const updatedSong = await updateSong(id, body);
  if (updatedSong) {
    res.status(200).json(updatedSong);
  } else {
    res.status(404).json({ error: "song not found" });
  }
});

//DELETE - destroy
songs.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedSong = await deleteSong(id);
  if (deleteSong.id) {
    res.status(200).json(deletedSong);
  } else {
    res.status(400).json({ error: "Song not found" });
  }
});
module.exports = songs;
