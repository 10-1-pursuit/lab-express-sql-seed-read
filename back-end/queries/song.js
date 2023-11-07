const db = require("../db/dbConfig");

const getAllSongs = async () => {
  try {
    const allSongs = await db.any("SELECT * FROM songs");
    return allSongs;
  } catch (e) {
    console.log(e);
  }
};

//GET SHOW
const getSong = async (id) => {

  try {
    const oneSong = await db.one("SELECT * FROM songs WHERE id=$1", id);
    return oneSong
  }
  catch (error) {
    return error;
  }
};


// CREATE song  using POST Methode

songs.post("/", async (req, res) => {
    const body = req.body
    const newTask = await createSong(body)
    res.status(200).json(newTask);
})

//   PUT Methode Update song
songs.put("/:id", async (req, res) => {
    const { id } = req.params
    const body = req.body
    const updatedSong = await updateSong(id, body)

    if (!updatedSong) {
        res.status(404).json({error: "Song did not updae"})
    } else {
        res.status(202).json(updatedSong)
    }
})





module.exports = { getAllSongs, getSong };
