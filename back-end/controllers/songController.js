const express = require("express");

const songs = express.Router({mergeParams: true});

const {getArtist} = require("../queries/artists.js");

const {
  getAllTunes,
  getTune,
  createTune,
  deleteTune,
  updateTune,
} = require("../queries/tuner");


const {
  checkName,
  checkArtist,
  checkBoolean,
} = require("../validations/checkTunes");

//get all tunes/ Index

songs.get("/", async (req, res) => {
const {artist_id} = req.params;
  const allTunes = await getAllTunes(artist_id);
  const artist =  await getArtist(artist_id)
  if(allTunes[0]){
res.status(200).json({...artist, allTunes});
  }else{
    res.status(500).json({error: "server error"})
  }
});

//show
songs.get("/:id", async (req, res) => {
  const { artist_id, id } = req.params;
  const tune =  await getTune(id);
  const artist =  await getArtist(artist_id)

if(tune){
  res.json({...artist, tune});
}else{
  res.status(404).json({error: "not found"})
}
});

//create
songs.post("/", checkName, checkArtist, checkBoolean, async (req, res) => {
  const {artist_id} = req.params;
  const song = await createTune({artist_id, ...req.body});
  res.status(200).json(song);
});

//update
songs.put("/:id", checkName, checkArtist, checkBoolean, async (req, res) => {
  const {  artist_id,id } = req.params;
  const {body} = req.body;
  const updatedSong = await updateTune({artist_id,id, ...body});
  if (updatedSong.id) {
    res.status(200).json(updatedSong);
  } else {
    res.status(404).json({ error: "Tune Not Found" });
  }
});

songs.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedSong = await deleteTune(id);
  if (deletedSong.id) {
    res.status(200).json(deletedSong);
  } else {
    res.status(404).json({ message: "Tune not found" });
  }
});


module.exports = songs;
