const express = require("express");
const songs = express.Router();
const {
  getAllSongs,
  getSong,
  createSong,
  updateSong,
  deleteSong,
} = require("../queries/song");
const {
  checkName,
  checkArtist,
  checkBoolean,
  checkAlbum,
  checkTime,
} = require("../validations/checkSongs.js");

const playlistController = require("./playlistController.js");
songs.use("/:song_id/playlists", playlistController);

// INDEX
songs.get("/", async (req, res) => {
  const allSongs = await getAllSongs();
  if (allSongs[0]) {
    res.status(200).json(allSongs);
  } else {
    res.status(404).json({ status: "server error" });
  }
});

songs.get("/:id", async (req, res) => {
  const { id } = req.params;
  const song = await getSong(id);
  if (!song) {
    res.status(404).json("Song not found");
  } else {
    res.status(200).json(song);
  }
});

songs.post(
  "/",
  checkName,
  checkArtist,
  checkAlbum,
  checkTime,
  async (req, res) => {
    const body = req.body;
    const song = await createSong(body);
    res.status(200).json(song);
  }
);

songs.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedSong = await deleteSong(id);
  if (deletedSong.id) {
    res.status(200).json(deletedSong);
  } else {
    res.status(404).json("Song not found");
  }
});

songs.put(
  "/:id",
  checkName,
  checkArtist,
  checkAlbum,
  checkTime,
  async (req, res) => {
    const { id } = req.params;
    const body = req.body;
    const updatedSong = await updateSong(id, body);
    if (updatedSong.id) {
      res.status(200).json(updatedSong);
    } else {
      res.status(404).json("Song not found");
    }
  }
);

module.exports = songs;
