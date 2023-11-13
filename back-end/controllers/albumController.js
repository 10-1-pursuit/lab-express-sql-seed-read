const express = require("express");
const albums = express.Router();

const songController = require("./songController.js");
albums.use("/:albums_id/songs", songController);

const {
  getAllAlbums,
  getAlbum,
  createAlbum,
  deleteAlbum,
  updateAlbum,
} = require("../queries/album.js");
const { checkName, checkBoolean } = require("../validations/checkAlbums.js");

albums.get("/", async (req, res) => {
  const allAlbums = await getAllAlbums();
  console.log(allAlbums);
  if (allAlbums[0]) {
    res.status(200).json(allAlbums);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

albums.get("/:id", async (req, res) => {
  const { id } = req.params;
  const oneAlbum = await getAlbum(id);
  if (oneAlbum) {
    res.status(200).json(oneAlbum);
  } else {
    res.status(404).json({ error: "Not Found" });
  }
});

albums.post("/", checkName, checkBoolean, async (req, res) => {
  const body = req.body;
  const album = await createAlbum(body);
  res.status(200).json(album);
});

albums.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedAlbum = await deleteAlbum(id);
  if (deletedAlbum.id) {
    res.status(200).json(deletedAlbum);
  } else {
    res.status(404).json({ error: "Song Not Found" });
  }
});

albums.put("/:id", checkName, checkBoolean, async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const updatedAlbum = await updateAlbum(id, body);
  if (updatedAlbum.id) {
    res.status(200).json(updatedAlbum);
  } else {
    res.status(404).json({ error: "Song Not Found" });
  }
});

module.exports = albums;
