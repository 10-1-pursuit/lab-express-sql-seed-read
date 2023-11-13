const express = require('express');
const songs = express.Router();
const { getAllSongs, getSong, createSong, deleteSong, updateSong } = require('../queries/songs.js');
const {
	checkName,
	checkArtist,
	checkBoolean,
} = require('../validations/checkSongs.js');

songs.get("/", async (req, res) => {
	const allSongs = await getAllSongs();
	if (allSongs[0]){
		res.status(200).json(allSongs);
	} else {
		res.status(500).json({ error: 'Server Error' });
	}
});

songs.get("/:id", async (req, res)=>{
    const id = req.params.id;
    const oneSong = await getSong(id);
    if (oneSong) {
      res.status(200).json(oneSong);
    } else {
      res.status(404).json({ error: "This song is not available" });
    }
  });

songs.post("/", checkName, checkArtist, checkBoolean, async (req, res) => {
	const body = req.body;
	const addSong = await createSong(body);
	if (addSong) {
		res.status(200).json(addSong);
	}
});

songs.put("/:id", checkName, checkArtist, checkBoolean, async (req, res) => {
    const { id } = req.params;
    const updatedSong = await updateSong(id, req.body);
    if (updatedSong.id) {
        res.status(200).json(updatedSong);
    } else {
        res.status(404).json({ error: "Song not updated" });
    }
});

songs.delete("/:id", async (req,res) => {
    const { id } = req.params;
    const deletedSong = await deleteSong(id)
    if (deletedSong.id){
        res.status(200).json(deletedSong)
    } else {
        res.status(404).json({error: "Song not found"})
    }
})




module.exports = songs;
