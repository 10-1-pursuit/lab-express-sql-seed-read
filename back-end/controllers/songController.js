const express = require("express");
const songs = express.Router();
const {getAllSongs} = require("../queries/song");

songs.get('/', async (req, res) => {
    const allSong = await getAllSongs();
    res.json(allSong);
});

module.exports = songs;