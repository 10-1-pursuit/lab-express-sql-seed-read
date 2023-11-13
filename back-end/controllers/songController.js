const express = require("express");
const songs = express.Router({ mergeParams: true });

const { getAlbum } = require("../queries/album.js");

const {
  getAllSongs,
  getSong,
  createSong,
  deleteSong,
  updateSong,
} = require("../queries/song.js");

songs.get("/", async (req, res) => {
  const { albums_id } = req.params;
  const allSongs = await getAllSongs(albums_id);
  const albumIndex = await getAlbum(albums_id);

  if (albumIndex.id) {
    res.status(200).json({ ...albumIndex, allSongs });
  } else {
    res.status(500).json({ error: "server error" });
  }
});

songs.get("/:id", async (req, res) => {
  const { albums_id, id } = req.params;
  const oneSong = await getSong(id);
  const albumIndex = await getAlbum(albums_id);
  if (oneSong) {
    res.status(200).json({ ...albumIndex, oneSong });
  } else {
    res.status(404).json({ error: "Not Found" });
  }
});

songs.post("/", async (req, res) => {
  const { albums_id } = req.params;
  const song = await createSong({ albums_id, ...req.body });
  res.status(200).json(song);
});

songs.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedSong = await deleteSong(id);
  if (deletedSong.id) {
    res.status(200).json(deletedSong);
  } else {
    res.status(404).json({ error: "Song Not Found" });
  }
});

songs.put("/:id", async (req, res) => {
  const { id, albums_id } = req.params;
  //const body = req.body;
  const updatedSong = await updateSong({ albums_id, id, ...req.body });
  if (updatedSong.id) {
    res.status(200).json(updatedSong);
  } else {
    res.status(404).json({ error: "Song Not Found" });
  }
});

module.exports = songs;
