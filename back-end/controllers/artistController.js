const express = require("express")
const artists = express.Router();

const songController = require('./songController.js');

//MIGHT NEED TO EDIT**
artists.use("/:artist_id/songs", songController);

//Queries
const{
    getAllArtists,
    getArtist,
    createArist,
    deleteArist,
    updateArtist
} =require("../queries/artists.js");

//Validations

const{
    checkName
     
} = require("../validations/checkTunes.js");


artists.get("/", async (req, res)=>{
    const allArtists = await getAllArtists();
    if(allArtists[0]){
    res.status(200).json(allArtists);
    }else{
        res.send(500).json({error: "server error"})
    }
});

artists.get("/:id", async (req, res) =>{
    const {id} = req.params;
    const artist = await getArtist(id);
    if(artist){
        res.json(artist);
    }else{
        res.status(404).json({error: "not found"})
    }
});

artists.post("/", checkName, async (req,res)=>{
    try {
        const artist = await createArist(req.body);
        res.json(artist);
    } catch (error) {
        res.status(400).json({error:error})
    }
});

artists.delete("/:id", async (req,res)=>{
    const {id} = req.params;
    const deletedArtist = await deleteArist(id);
    if(deletedArtist.id){
        res.status(200).json(deletedArtist)
    }else{
        res.status(404).json("Artist not found");
    }
});

artists.put("/:id", checkName, async (req, res)=>{
    const {id} = req.params;
    const updatedArtist = await updateArtist(id, req.body);
    res.status(200).json(updatedArtist);
}
)

module.exports = artists;
