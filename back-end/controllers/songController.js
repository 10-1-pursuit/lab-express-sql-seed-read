const express = require("express")
const songs = express.Router()
const {getAllSongs, getSong, createSong, deleteSong, updateSong} = require("../queries/song")
const {checkName, checkArtist, checkBoolean} = require("../validations/checkSongs")

songs.get("/", async (req, res)=>{
    const allSongs = await getAllSongs()
    if (allSongs[0]){
        res.status(200).json(allSongs)
    } else {
        res.status(500).json({error: "SERVER ERROR"})
    }
})

songs.get("/:id", async (req, res)=>{
    const {id} = req.params
    const oneSong = await getSong(id)
    if(oneSong){
        res.status(200).json(oneSong)
    } else {
        res.status(404).json({error: "NO song found at the provided id!"})
    }
})

songs.post("/", checkName, checkArtist, checkBoolean, async (req, res)=>{
    const body = req.body
    const song = await createSong(body)
    res.status(200).json(song)
})

songs.delete("/:id", async (req, res)=>{
    const {id} = req.params
    const deletedSong = await deleteSong(id)
    if(deletedSong.id){
        res.status(200).json(deletedSong)
    } else {
        res.status(404).json({error: "Song NOT deleted!"})
    }
})

songs.put("/:id", checkName, checkArtist, checkBoolean, async (req, res)=>{
    const {id} = req.params
    const body = req.body
    const updatedSong = await updateSong(id, body)
    if(updatedSong.id){
        res.status(200).json(updatedSong)
    } else {
        res.status(404).json({error: "Song NOT updated!"})
    }
})


module.exports = songs