const express = require("express");
const artists = express.Router();


const songController = require("./songController.js");
artists.use("/:artist_id/songs", songController);

const { 
     getAllArtists,
     getOneArtist,
     newArtist,
     deleteArtist, 
     updateArtist, 
    } = require("../queries/artist.js")

const { 
    checkName,
    checkGenre, 
    checkBoolean,
    } = require("../validations/checkArtist.js")


//INDEX 
artists.get("/", async (req, res) => {
    const allArtists = await getAllArtists();
      if(allArtists[0]) {
        res.status(200).json(allArtists);
      } else {
        res.status(404).json({ error: "server error"});
      }
});


// SHOW
artists.get("/:id", async (req, res) => {
    const id = req.params.id;
    const oneArtist = await getOneArtist(id);
    if(oneArtist) {
        res.status(200).json(oneArtist);
    } else {
        res.status(404).json({ error: "server error"});
    }
    
});

//Post
artists.post("/", checkName, checkGenre, checkBoolean, async (req, res) => {
    const body = req.body;
    const artist = await newArtist(body);
    res.status(200).json(artist);
});

// Delete
artists.delete('/:id', async ( req, res) => {
     const { id } = req.params
     const deletedArtist = await deleteArtist(id)
       if(deletedArtist.id) {
         res.status(200).json(deletedArtist)
       } else {
          res.status(404).json({ error: "Artist Not Found" })
       }
})

artists.put("/:id", checkName, checkGenre, checkBoolean, async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const updatedArtist = await updateArtist(id, body);
  if (updatedArtist.id) {
    res.status(200).json(updatedArtist);
  } else {
    res.status(404).json({ error: "Artist Not Found" });
  }
});


// exports the file so it makes it visible to other files so we can
// import them
module.exports = artists;