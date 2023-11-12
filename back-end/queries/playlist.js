const db = require("../db/dbConfig.js");

const getAllPlaylists = async (song_id) => {
  try {
    // Select all rows from playlists table where the id of a playlist is found in the songs table where id's match.
    const allPlaylists = await db.any(
      "SELECT * FROM playlists WHERE id IN (SELECT playlist_id FROM songs WHERE id = $1)",
      song_id
    );
    return allPlaylists;
  } catch (error) {
    throw error;
  }
};

const getPlaylist = async (id) => {
  try {
    const onePlaylist = await db.one("SELECT * FROM playlists WHERE id=$1", id);
    return onePlaylist;
  } catch (error) {
    throw error;
  }
};

const createPlaylist = async (playlist) => {
  try {
    const newPlaylist = await db.one(
      "INSERT INTO playlists (name, description) VALUES($1, $2) RETURNING *",
      [playlist.name, playlist.description]
    );
    return newPlaylist;
  } catch (error) {
    throw error;
  }
};

const deletePlaylist = async (id) => {
  try {
    const deletedPlaylist = await db.one(
      "DELETE FROM playlists WHERE id = $1 RETURNING *",
      id
    );
    return deletedPlaylist;
  } catch (error) {
    return error;
  }
};

const updatePlaylist = async (playlist) => {
  try {
    const updatedSongPlaylist = await db.one(
      "UPDATE playlists SET name = $1, description = $2 WHERE id = $3 RETURNING *",
      [playlist.name, playlist.description, playlist.id]
    );
    return updatedSongPlaylist;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllPlaylists,
  getPlaylist,
  createPlaylist,
  deletePlaylist,
  updatePlaylist,
};
