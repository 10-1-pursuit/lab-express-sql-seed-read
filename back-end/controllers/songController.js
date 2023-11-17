const express = require("express");
const songs = express.Router();
const { getAllSongs } = require("../queries/songs.js");

songs.get("/", async (request, response) => {
  const allSongs = await getAllSongs();

  if (allSongs[0]) {
    response.status(200).json(allSongs);
  } else {
    console.log(allSongs);
    response.status(500).json({ error: "server error" });
  }
});

songs.post("/", async (request, response) => {
  const body = request.body;
  const song = await createSongs(body);
  response.status(200).json(song);
});

module.exports = songs;
