const express = require("express");
const songs = express.Router();
const {
  getAllSongs,
  getSong,
  createSong,
  updateSong,
  deleteSong,
  updateFavoriteStatus
} = require("../queries/song");
const {
  checkName,
  checkArtist,
  checkBoolean,
  checkAlbum,
  checkTime
} = require("../validations/checkSongs.js");

const playlistController = require("./playlistController.js");
songs.use("/:song_id/playlists", playlistController);

songs.get("/", async (req, res) => {
  try {
    const allSongs = await getAllSongs();
    console.log("allSongs:", allSongs);
    if (allSongs[0]) {
      res.status(200).json(allSongs);
    } else {
      res.status(404).json({ status: "server error" });
    }
  } catch (error) {
    console.error("Error fetching all songs:", error);
    res.status(500).json("Internal server error");
  }
});

songs.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const song = await getSong(id);
    if (!song) {
      res.status(404).json("Song not found");
    } else {
      res.status(200).json(song);
    }
  } catch (error) {
    console.error("Error fetching song:", error);
    res.status(500).json("Internal server error");
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
    try {
      const song = await createSong(body);
      res.status(200).json({ id: song.id, ...song });
    } catch (error) {
      console.error("Error creating song:", error);
      res.status(500).json("Internal server error");
    }
  }
);

songs.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedSong = await deleteSong(id);
    if (deletedSong.id) {
      res.status(200).json(deletedSong);
    } else {
      res.status(404).json("Song not found");
    }
  } catch (error) {
    console.error("Error deleting song:", error);
    res.status(500).json("Internal server error");
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

    try {
      const updatedSong = await updateSong(id, body);
      if (updatedSong.id) {
        res.status(200).json(updatedSong);
      } else {
        res.status(404).json("Song not found");
      }
    } catch (error) {
      console.error("Error updating song:", error);
      res.status(500).json("Internal server error");
    }
  }
);

songs.put("/:id/favorite", async (req, res) => {
  const { id } = req.params;
  try {
    const song = await getSong(Number(id));
    if (!song) {
      return res.status(404).json("Song not found");
    }
    const updatedSong = await updateFavoriteStatus(id, !song.is_favorite);
    if (updatedSong.id) {
      res.status(200).json(updatedSong);
    } else {
      res.status(500).json("Server error: Could not update favorite status.");
    }
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json("Server error: Could not update favorite status.");
  }
});

module.exports = songs;
