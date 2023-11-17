// DEPENDENCIES
const express = require("express");
const playlists = express.Router();
const songsController = require('./songsController')
const {
  getAllPlaylists,
  getPlaylist,
  createPlaylist,
  deletePlaylist,
  updatePlaylist,
} = require("../queries/playlists");
playlists.use('/:playlist_id/songs', songsController)



// const {
//   checkName,
//   checkDescription,
// } = require("../validations/checkPlaylists.js");


// playlists.get("/", async (req, res) => {
//   const allPlaylists = await getAllPlaylists();
//   if (allPlaylists[0]) {
//     res.status(200).json(allPlaylists);
//   } else {
//     res.status(500).json({ error: "server error" });
//   }
// });

playlists.get("/", async (req, res) => {
  try {
    console.log("Fetching all playlists...");
    const allPlaylists = await getAllPlaylists();
    console.log("Playlists retrieved:", allPlaylists);
    res.status(200).json(allPlaylists);
  } catch (error) {
    console.error("Error fetching playlists:", error);
    res.status(500).json({ error: "server error" });
  }
});



playlists.get("/:id", async (req, res) => {
  const { id } = req.params;
  const playlist = await getPlaylist(id);
  if (playlist) {
    res.json(playlist);
  } else {
    res.status(404).json({ error: "not found" });
  }
});


playlists.post("/", checkName, checkDescription, async (req, res) => {
  try {
    const playlist = await createPlaylist(req.body);
    res.json(playlist);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});


playlists.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedPlaylist = await deletePlaylist(id);
  if (deletedPlaylist.id) {
    res.status(200).json(deletedPlaylist);
  } else {
    res.status(404).json("Playlist not found");
  }
});


playlists.put("/:id", checkName, checkDescription,
  async (req, res) => {
    const { id } = req.params;
    const updatedPlaylist = await updatePlaylist(id, req.body);
    res.status(200).json(updatedPlaylist);
  }
);

module.exports = playlists;
