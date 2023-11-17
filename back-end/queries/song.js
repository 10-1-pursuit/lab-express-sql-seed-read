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
            "INSERT INTO songs (name, artist, album, time, is_favorite) VALUES ($1, $2, $3, $4, $5) RETURNING * ",
            [
            song.name,
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


async function updateSong(id, song) {
  try {
    const updatedSong = await db.one(
      "UPDATE songs SET name=$1, artist=$2, album=$3, time=$4, is_favorite=$5 WHERE id=$6 RETURNING * ",
      [
        song.name,
        song.artist,
        song.album,
        song.time,
        song.is_favorite,
        id,
      ]
    );
    return updatedSong;
  } catch (e) {
    console.log(e);
  }
}

async function deleteSong(id) {
    
    try {
        const deletedSong = await db.one(
          "DELETE FROM songs WHERE id=$1 RETURNING *",
          id
        );
         return deletedSong;
    }
   
    catch (e) {
        console.log(e)
    }
}



module.exports = { getAllSongs, getSong, createSong, updateSong, deleteSong };
