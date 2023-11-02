const db = require("../db/dbConfig");

const getAllTunes = async () => {
  try {
    const allTunes = await db.any("SELECT * FROM tuners");
    return allTunes;
  } catch (error) {
    return error;
  }
};

const getTune = async(id)=>{
  try {
    const oneSong = await db.one("SELECT * FROM tuners WHERE ID=$1", id)
    return oneSong
  } catch (error) {
    return error
  }
}

const createTune = async(song)=>{
  const newSong = await db.one("INSERT INTO tuners (name, artist, album ,time, is_favorite) VALUES ($1,$2,$3,$4,$5) RETURNING *",[song.name,song.artist,song.album,song.title,song.time,song.is_favorite]);
  return newSong
}

module.exports = { getAllTunes, getTune, createTune };
