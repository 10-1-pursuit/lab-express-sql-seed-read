// DEPENDENCIES
const express = require("express");

// FOR MERGEPARAMS
const playlistController = express.Router({ mergeParams: true });
const { getSong } = require("../queries/song");

// QUERIES
const {
  getAllPlaylists,
  getPlaylist,
  createPlaylist,
  updatePlaylist,
  deletePlaylist,
} = require("../queries/playlist");

// INDEX
playlistController.get("/", async (req, res) => {
  try {
    const { song_id } = req.params;
    console.log("Received request for song ID:", song_id);
    const playlist = await getAllPlaylists(song_id);
    console.log("Fetched playlists:", playlist);
    const song = await getSong(song_id);
    if (song.id) {
      res.status(200).json({ ...song, playlist });
    } else {
      res.status(404).json({ error: "Server error" });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// SHOW
playlistController.get("/:id", async (req, res) => {
  try {
    const { song_id, id } = req.params;
    console.log("Received request for song ID:", song_id);
    console.log("Received request for playlist ID:", id);
    const playlist = await getPlaylist(id);
    console.log("Fetched playlist:", playlist);
    const song = await getSong(song_id);
    if (playlist) {
      res.status(200).json({ ...song, playlist });
    } else {
      res.status(404).json({ error: "Playlist not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// Update
playlistController.put("/:id", async (req, res) => {
  try {
    const { song_id, id } = req.params;
    console.log("Received request for song ID:", song_id);
    console.log("Received request for playlist ID:", id);
    const updatedPlaylist = await updatePlaylist({ song_id, id, ...req.body });
    if (updatedPlaylist.id) {
      res.status(200).json(updatedPlaylist);
    } else {
      res.status(404).json({ error: "Playlist not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// CREATE
playlistController.post("/", async (req, res) => {
  try {
    const { song_id } = req.params;
    console.log("Received request for song ID:", song_id);
    const playlistData = req.body;
    const playlist = await createPlaylist({ song_id, ...playlistData });
    res.status(200).json(playlist);
  } catch (error) {
    console.error("Error creating playlist:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// Delete
playlistController.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log("Received request to delete playlist with ID:", id);
    console.log("Deleting playlist with ID:", id);
    const deletedPlaylist = await deletePlaylist(id);
    if (deletedPlaylist.id) {
      res.status(200).json(deletedPlaylist);
    } else {
        console.log("Playlist not found:", id);
      res.status(404).json({ error: "Playlist not found" });
    }
  } catch (error) {
    console.error("Error deleting playlist:", error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = playlistController;
