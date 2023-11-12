const db = require("../db/dbConfig");

const getAllSongs = async () => {
  try {
    const allSongs = await db.any("SELECT * FROM songs");
    return allSongs;
  } catch (error) {
    return error;
  }
};

const getOneSong = async (id) => {
  try {
    if (!id) {
      res.staus(404).json({ error: "Invalid ID!" });
    }
    const oneSong = await db.one(" SELECT * FROM songs WHERE id=$1", id);
 
    return oneSong;
  } catch (error) {
    return error;
  }
};

const createSong = async (song) => {
  try {
    const createdSong = await db.one(
      "INSERT INTO songs (name, artist,  album, time, is_favorite) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [song.name, song.artist, song.album, song.time, song.is_favorite]
    );
    return createdSong;
  } catch (err) {
    return err;
  }
};

const updateSong = async (id) => {
  try {const updatedSong = await db.one ("UPDATE colors SET name=$1, artist=$2, is_favorite=$3  RETURNING *", [song.name, song.artist, song.is_favorite, id])
  return updatedSong
  } catch (err) {
    return err
  }
}

const deleteSong = async (id) => {

  try {

  }
  catch (err) {
    return err
  }
}

module.exports = { getAllSongs, getOneSong, createSong, updateSong };
