const express = require("express");
const { getAllTunes, getTune, createTune } = require("../queries/tuner");
const songs = express.Router();
const {checkName, checkArtist,checkBoolean} = require("../validations/checkTunes")
//get all tunes

songs.get("/", async (req, res) => {
  const allTunes = await getAllTunes();
  res.json(allTunes);
});

songs.get("/:id", async(req,res)=>{
  const {id} = req.params;
  const song = await getTune(id);
  if(song){
    res.status(200).json(song)
  }else{
    res.status(404).json({error: "Song not found"})
  }
});

songs.post("/",checkName, checkArtist, checkBoolean, async (req,res)=>{
  const song = await createTune(req.body);
  res.status(200).json(song);
})

module.exports = songs;
