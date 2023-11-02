const express = require('express')
const { getAllSongs, getSong } = require('../queries/song')
const songs = express.Router()



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


module.exports = songs