const express = require("express");
const songs = express.Router();
const {getAllSongs, getSong, createSong, deleteSong, updateSong} = require("../queries/song");
const {checkName, checkBoolean, checkArtist, checkTime ,checkAlbum,validateURL,} = require('../validations/checkSongs')
const reviewsController = require('./reviewController.js')
songs.use('./:songs_id/reviews', reviewsController);


//get all songs
//localhost:3345/songs/
songs.get('/', async (req, res) => {
    const allSongs = await getAllSongs();
    if (allSongs[0]) {
        res.status(200).json(allSongs);
      } else {
        res.status(500).json({ error: "server error" });
      }
    });
songs.get('/:id', async (req, res) => {
    //const id = req.params.id
    const {id} = req.params;
    const oneSong = await getSong(id);
    if (oneSong) {
        res.status(200).json(oneSong);
        } else {
            res.status(404).json({ error: 'Not Found' });     
    }
})

//POST a new song
//localhost:4005/songs/
songs.post('/',checkName,checkBoolean,checkArtist, checkTime ,checkAlbum, async (req, res) => {
    const body = req.body
    const song = await createSong(body);
    res.status(200).json(song)
})
songs.delete('/:id', async (req, res) => {
    const {id} = req.params;
    const deletedSong = await deleteSong(id);
    if (deletedSong) {
        res.status(200).json(deletedSong)
        } else {
            res.status(404).json({ error: 'Song Not Found' });         
        }
    });
songs.put('/:id', checkName, checkBoolean,checkArtist, checkTime ,checkAlbum, async (req, res) => {
    const {id} = req.params;
    const body = req.body
    const updatedSong = await updateSong(id, body);
    if (updatedSong.id) {
    res.status(200).json(updatedSong)
    } else {
        res.status(404).json({ error: 'Song Not Found' });
    }
});

module.exports = songs;