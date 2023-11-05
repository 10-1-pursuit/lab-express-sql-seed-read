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
      "INSERT INTO songs (name, arist) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [song.name, song.album, song.artist, song.time, song.is_favorite]
    );
    return createdSong || `{name: '', album:'', artist:'', time:'00:00', false}`;
  } catch (err) {
    err;
  }
};

module.exports = { getAllSongs, getOneSong, createSong };
