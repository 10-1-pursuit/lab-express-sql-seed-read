const db = require("../db/dbConfig.js");


const getAllSongs = async (artist_id) => {
  // async function it is not going to stop when waiting for  asychrochous
  // calls, dont want the whole app to stop when taking that call-rest of app can keep running
    try {
        const allSongs = await db.any("SELECT * FROM songs WHERE artist_id=$1", artist_id);
        return allSongs;
     } catch(error) {
       return error;
    }
};

// will try whats in the try block, and will catch all errors before the app breaks
// if an error happens we can display it and the rest of the app can keep running w/o
// crashing it

const getOneSong = async (id) => {
    try {
       const oneSong = await db.one("SELECT * FROM songs WHERE id=$1", id)
       return oneSong;  //   db connects to our database and db tells it what to do
    } catch(error){
       return error;
    }
};

const newSong = async (song) => {
    try {
       const createSong = await db.one("INSERT INTO songs (name, album, time, is_favorite, artist_id) VALUES ($1, $2, $3, $4, $5) RETURNING *", 
       [song.name, song.album, song.time, song.is_favorite, song.artist_id]
       )
        return createSong
    } catch (error) {
        return error;

    }
}  

const deleteSong = async (id) => {
     try{

       const deletedSong = await db.one("DELETE FROM songs WHERE id=$1 RETURNING * ", id)
        return deletedSong
     } catch (error) {
        return error
     }
}


const updateSong = async (song) => {
    try {
      const updatedSong = await db.one(
        "UPDATE songs SET name=$1, album=$2, time=$3, is_favorite=$4 WHERE id=$5 RETURNING *",
        [song.name, song.album, song.time, song.is_favorite, song.id]
      );
      return updatedSong;
    } catch (error) {
      return error;
    }
  }


module.exports = { getAllSongs, getOneSong, newSong, deleteSong, updateSong};