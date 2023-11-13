const express = require("express")
const songs = express.Router({mergeParams: true})
const {getAlbum} = require("../queries/albums")
const {getAllSongs, getSong, createSong, deleteSong, updateSong} = require("../queries/songs")


songs.get("/", async (req, res)=>{
    const {album_id} = req.params
    const allSongs = await getAllSongs(album_id)
    const album = await getAlbum(album_id)
    if (album.id){
        res.status(200).json({ ...album, allSongs})
    } else {
        res.status(500).json({error: "SERVER ERROR!"})
    }
})

songs.get("/:id", async (req, res)=>{
    const {album_id, id} = req.params
    const oneSong = await getSong(id)
    const album = await getAlbum(album_id)
    if(oneSong){
        res.status(200).json({...album, oneSong})
    } else {
        res.status(404).json({error: "NO song found at the provided id!"})
    }
})

songs.post("/", async (req, res)=>{
    const {album_id} = req.params
    const song = await createSong({album_id, ...req.body})
    if (song){
        res.status(200).json(song)
    } else {
        res.status(400).json({error: "Song not created!"})
    }
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

songs.put("/:id", async (req, res)=>{
    const {id, album_id} = req.params
    const updatedSong = await updateSong({album_id, id, ...req.body})
    if(updatedSong.id){
        res.status(200).json(updatedSong)
    } else {
        res.status(404).json({error: "Song NOT updated!"})
    }
})


module.exports = songs