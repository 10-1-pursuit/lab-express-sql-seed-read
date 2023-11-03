const express = require("express");
const songs = express.Router();
const { getAllSongs, getSong, createSong, updateSong, deleteSong, getSortedSongs, getFilteredSongs } = require("../queries/song");
const { checkName, checkArtist, checkBoolean, checkAlbum, checkTime } = require("../validations/checkSongs.js")

// INDEX
songs.get('/', async (req, res) => {
    const { order } = req.query;   
    const isFav = req.query.isFavorite;
    let songs;
    if (order) {
      songs = await getSortedSongs(order);
    } else if (isFav) {
      songs = await getFilteredSongs(isFav); 
    } else {
      songs = await getAllSongs();
    }
    res.json(songs);
  });

songs.get("/:id", async (req, res) => {
    const { id } = req.params;
    const song = await getSong(id);
    if (!song) {
      res.status(404).json( "Song not found" );
    } else {
      res.status(200).json(song);
    }
  });

  songs.post("/", checkName, checkBoolean, checkArtist, checkAlbum, checkTime, async (req, res) => {
    const body = req.body
    const song = await createSong(body);
    res.json(song);
  });

  songs.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deletedSong = await deleteSong(id);
    if (deletedSong.id) {
      res.status(200).json(deletedSong);
    } else {
      res.status(404).json("Song not found");
    }
  });
  
  songs.put("/:id", checkName, checkBoolean, checkArtist, checkAlbum, checkTime, async (req, res) => {
    const { id } = req.params
    const body = req.body
    const updatedSong = await updateSong(id, body)
    if(updatedSong.id){
      res.status(200).json(updatedSong);
    } else {
      res.status(404).json("Song not found");
    }
  });
  

module.exports = songs;
