const express = require("express");
const songs = express.Router();
const { getAllSongs, getOneSong, newSong, deleteSong, updateSong } = require("../queries/song.js")
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
songs.post("/", checkName, checkBoolean, async (req, res) => {
    const body = req.body;
    const song = await newSong(body);
    res.status(200).json(song);
});

// Delete
songs.delete('/:id', async ( req, res) => {
     const { id } = req.params
     const deletedSong = await deleteSong(id)
       if(deletedSong.id) {
         res.status(200).json(deletedSong)
       } else {
          res.status(404).json({ error: "Song Not Found" })
       }
})

// PUT
songs.put("/:id", checkName, checkArtist, checkBoolean, async (req, res) => {
    const {id} = req.params
    const body = req.body
    const updatedSong = await updateSong(id, body)
     if(updatedSong.id) {
        res.status(200).json(updatedSong)
     } else {
       res.status(400).json({ error: "Song Not Found"})
     }
})


// exports the file so it makes it visible to other files so we can
// import them
module.exports = songs;