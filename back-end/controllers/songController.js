const express = require("express");
const songs = express.Router({ mergeParams: true });

const { getOneArtist } = require('../queries/artist.js');

const { getAllSongs, getOneSong, newSong, deleteSong, updateSong } = require('../queries/song.js');



//INDEX 
songs.get("/", async (req, res) => {
    const { artist_id } = req.params;
    const allSongs = await getAllSongs(artist_id);

    const artistt = await getOneArtist(artist_id);

      if(artistt.id) {
        res.status(200).json({...artistt, allSongs });
      } else {
        res.status(404).json({ error: "server error"});
      }
});


// SHOW
songs.get("/:id", async (req, res) => {
    const {artist_id, id} = req.params
    const song = await getOneSong(id);
    const artist = await getOneArtist(artist_id)
    if(song) {
        res.json({...artist, song});
    } else {
        res.status(404).json({ error: "server error"});
    }
    
});

//Post
songs.post("/", async (req, res) => {
    const { artist_id } = req.params;
    console.log(req.body);
    console.log({ artist_id, ...req.body })
    const song = await newSong({ artist_id, ...req.body });
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
songs.put("/:id", async (req, res) => {
    const {id, artist_id} = req.params
    // const body = req.body
    const updatedSong = await updateSong({ artist_id, id, ...req.body });
     if(updatedSong.id) {
        res.status(200).json(updatedSong)
     } else {
       res.status(400).json({ error: "Song Not Found"})
     }
});


// exports the file so it makes it visible to other files so we can
// import them
module.exports = songs;
