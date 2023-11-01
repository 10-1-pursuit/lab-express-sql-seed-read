const express = require("express");
const songs = express.Router();
const { getAllSongs, getOneSong, newSong } = require("../queries/song.js")
const { checkName, checkArtist, checkBoolean } = require("../validations/checkSongs.js")


//INDEX 
songs.get("/", async (req, res) => {
    const allSongs = await getAllSongs();
      if(allSongs[0]) {
        res.status(200).json(allSongs);
      } else {
        res.status(404).json({ error: "server error"});
      }
});


// SHOW
songs.get("/:id", async (req, res) => {
    const id = req.params.id;
    const oneSong = await getOneSong(id);
    if(oneSong) {
        res.status(200).json(oneSong);
    } else {
        res.status(404).json({ error: "server error"});
    }
    
});

//Post
songs.post("/", checkName, checkArtist, checkBoolean, async (req, res) => {
    const body = req.body;
    const song = await newSong(body);
    res.status(200).json(song);
});



module.exports = songs;