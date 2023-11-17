const express = require("express");

const {
  getAllSongs,
  getSong,
  createSong,
  updateSong,
  deleteSong
} = require("../queries/song");

const songs = express.Router();

//GET ALL SONGS
songs.get("/", async (req, res) => {
  const allSongs = await getAllSongs();
  if (allSongs) {
    res.status(200).json(allSongs);
  } else {
    res.status(404).json({ error: "" });
  }
});


// SHOW
songs.get("/:id", async (req, res) => {
  const { id } = req.params;
  const oneSong = await getSong(id)
  if (oneSong) {
    res.json(oneSong);
  } else {
    res.status(404).json({ error: "not found" });
  }
});


// CREATE song  using POST Methode

songs.post("/", async (req, res) => {
    const body = req.body
    const newSong = await createSong(body)
    res.status(200).json(newSong);
})



//   PUT Methode Update song
songs.put("/:id", async (req, res) => {
    const { id } = req.params
    const body = req.body
    const updatedSong = await updateSong(id, body)

    if (!updatedSong) {
        res.status(404).json({error: "Song did not update"})
    } else {
        res.status(202).json(updateSong)
    }
})

//Delete a Song

songs.delete("/:id", async (req, res) => {
    const { id } = req.params
    const deletedSong = await deleteSong(id)

    if (!deletedSong) {
        res.status(404).json({error: "Song wais not deleted"})
    } else {
        res.status(200).json(deletedSong)
    }
})


module.exports = songs;