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



async function createSong(song) {
    try {
        const newSong = await db.one(
            "INSERT INTO songs (name, Fame, artist, album, time, is_favorite) VALUES ($1, $2, $3, $4, $5, $6) RETURNING * ",
            [
            song.name,
            song.fame,
            song.artist,
            song.album,
            song.time,
            song.is_favorite,
            ]
        
        )
        return newSong
    }
    catch (e) {
        console.log(e)
    }
}





module.exports = { getAllSongs, getSong, createSong };
