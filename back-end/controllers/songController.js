const express = require("express");
const songs = express.Router();
const { getAllSongs ,getSong,createSong} = require("/Users/shakalivingstonepursuit/Desktop/lab-express-sql-seed-read/front-end/queries/song");


songs.get("/", async (req, res) => {
  const allSongs = await getAllSongs();
  if (allSongs[0]) {
    res.status(200).json(allSongs);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

module.exports = songs;

songs.get("/:id", async (req,res)=>{
const id=req.params.id
const oneSong= await getSong(id);
if(oneSong){

    res.status(200).json(oneSong)
}else{

    res.status(500).json({error:'server error'})
}


})

songs.post("/", async (req,res)=>{

const song=req.body

const newSong= await createSong(song);
if(newSong){

    res.status(200).json(newSong)
}else{
    res.status(500).json({error:"server Error"})
}


})


