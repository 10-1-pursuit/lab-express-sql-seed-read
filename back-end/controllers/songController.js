const express = require("express");
const songs = express.Router();
const {getAllSongs} = require("../queries/song");
const {checkName, checkBoolean} = require('../validations/checkSongs')

//get all songs
//localhost:3345/songs/
songs.get('/', async (req, res) => {
    const allSong = await getAllSongs();
    res.json(allSong);
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
//localhost:4005/colors/
songs.post('/',checkName,checkBoolean, async (req, res) => {
    const body = req.body
    const song = await createSong(body);
    res.status(200).json(song)
})



module.exports = songs;