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
    const oneSong = await db.one(" SELECT * FROM songs WHERE id=$1", id);
    return oneSong;
  } catch (error) {
    return error;
  }
};

const createSong = async (song) => {
  try {
    const createdSong = await db.one(
      "INSERT INTO songs (name, arist) VALUES ($1, $2) RETURNING *",
      [song.name, song.artist]
    );
    return createdSong;
  } catch (err) {
    err;
  }
};

module.exports = { getAllSongs, getOneSong };
