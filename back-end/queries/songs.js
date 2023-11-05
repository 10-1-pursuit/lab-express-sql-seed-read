const db = require("../db/dbConfig");

//GET - index
const getAllSongs = async () => {
  try {
    const allSongs = await db.any("SELECT * FROM songs");
    return allSongs;
  } catch (e) {
    console.log(e);
  }
};

//GET - show
const getSong = async (id) => {
  try {
    const song = await db.one("SELECT * FROM songs WHERE id=$1", [id]);
    return song;
  } catch (e) {
    console.log(e);
  }
};

//CREATE
const insertSong = async (song) => {
  try {
    const newSong = await db.any(
      "INSERT INTO songs (name, artist, album, time, is_favorite) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [song.name, song.artist, song.title, song.album, song.is_favorite]
    );
    return newSong;
  } catch (e) {
    console.log(e);
  }
};

//DELETE
const deleteSong = async (id) => {
  try {
    const deletedSong = await db.one(
      "DELETE FROM songs WHERE id=$1 RETURNING *",
      id
    );
    return deletedSong;
  } catch (e) {
    console.log(e);
  }
};

//PUT - update
const updateSong = async (id, song) => {
  try {
    const updatedSong = await db.one(
      "UPDATE songs SET name=$1, artist=$2, album=$3, time=$4, is_favorite=$5 WHERE id=$6 RETURNING *",
      //placeholder for the values that must be updated
      [song.name, song.artist, song.title, song.album, song.is_favorite, id]
    );
    return updatedSong;
  } catch (e) {
    console.log(e);
  }
};

module.exports = { getAllSongs, getSong, insertSong, deleteSong, updateSong };
