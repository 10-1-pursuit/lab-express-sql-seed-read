const express = require("express")
const albums = express.Router()

const songsController = require('./songsController')
albums.use('/:album_id/songs', songsController)

const {    
    getAllAlbums, 
    getAlbum, 
    createAlbum,
    deleteAlbum,
    updateAlbum
} = require("../queries/albums")

const {
    checkName,
    checkArtist,
    checkBoolean
} = require("../validations/checkAlbums.js")

albums.get("/", async (req, res)=>{
    const allAlbums = await getAllAlbums()
    if (allAlbums[0]){
        res.status(200).json(allAlbums)
    } else {
        res.status(500).json({error: "Server ERROR!"})
    }
})

albums.get("/:id", async (req, res)=>{
    const {id} = req.params
    const album = await getAlbum(id)
    if(album){
        res.status(200).json(album)
    } else {
        res.status(404).json({error: "Album not found!"})
    }
})

albums.post("/", checkName, checkArtist, checkBoolean, async (req, res)=>{
    const album = await createAlbum(req.body)
    if(album) {
        res.status(200).json(album)
    } else {
        res.status(400).json({error: "Album not created!"})
    }
})

albums.delete("/id", async (req, res)=>{
    const {id} = req.params
    const deletedAlbum = await deleteAlbum(id)
    if (deletedAlbum.id){
        res.status(200).json(deletedAlbum)
    } else {
        res.status(404).json({error: "Album not deleted, unable to find album!"})
    }
})

albums.put("/:id", checkName, checkArtist, checkBoolean, async (req, res)=>{
    const {id} = req.params
    const updatedAlbum = await updateAlbum(id, req.body)
    if(updatedAlbum){
        res.status(200).json(updatedAlbum)
    } else {
        res.status(404).json("Album not updated, unable to find album!")
    }
})

module.exports = albums;