const db = require("../db/dbConfig");

const getAllTunes = async () => {
  try {
    const allTunes = await db.any("SELECT * FROM tuners");
    return allTunes;
  } catch (error) {
    return error;
  }
};

const getTune = async (id) => {
  try {
    const oneSong = await db.one("SELECT * FROM tuners WHERE ID=$1", id);
    return oneSong;
  } catch (error) {
    return error;
  }
};

const createTune = async (song) => {
  const newSong = await db.one(
    "INSERT INTO tuners (name, artist, album ,year_release, is_favorite) VALUES ($1,$2,$3,$4,$5) RETURNING *",
    [song.name, song.artist, song.album, song.year_release, song.is_favorite]
  );
  return newSong;
};

const deleteTune = async (id) => {
  try {
    const deletedSong = await db.one(
      "DELETE FROM tuners WHERE id=$1 RETURNING *",
      id
    );
    return deletedSong;
  } catch (error) {
    return error;
  }
};

const updateTune = async (id, song) => {
  try {
    const updatedSong = await db.one(
      "UPDATE tuners SET name=$1, artist=$2, album=$3, year_release=$4, is_favorite=$5 WHERE id=$6 Returning *",
      [
        song.name,
        song.artist,
        song.album,
        song.year_release,
        song.is_favorite,
        id,
      ]
    );
    return updatedSong;
  } catch (error) {
    return error;
  }
};

module.exports = { getAllTunes, getTune, createTune, deleteTune, updateTune };
