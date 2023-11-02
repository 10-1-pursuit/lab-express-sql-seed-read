const express = require('express')
const { getAllSongs, getSong, createSong } = require('../queries/song')
const songs = express.Router()
const { checkName , checkArtist, checkAlbum, checkTime, checkBoolean } = require('../validations/checkSongs')



songs.get("/", async (req, res) =>{
    const allSongs = await getAllSongs();
    if(allSongs[0]) {
    res.status(200).json(allSongs)
} else {
    res.status(500).json({error: "server error"}
    )
}
})

songs.get('/:id', async (req,res) => {
    const { id } = req.params
    const oneSong = await getSong(id)
    if(oneSong){
        res.status(200).json(oneSong)
    } else {
        res.status(404).json({error: 'Not Found' })
    }
})

songs.post('/', checkName, checkArtist, checkAlbum, checkTime, checkBoolean, async (req, res) => {
    const body = req.body
    const song = await createSong(body)
    res.status(200).json(song)
})


module.exports = songs