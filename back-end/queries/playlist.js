const db = require("../db/dbConfig.js");

const getAllPlaylists = async () => {
  try {
    const allPlaylists = await db.any("SELECT * FROM playlists");
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

const newPlaylist = async (playlist) => {
    try {
      const newPlaylist = await db.one("INSERT INTO playlists (name, description, song_id) VALUES($1, $2, $3) RETURNING *",
      [
        playlist.name,
        playlist.description,
        playlist.song_id
      ]);
      return newPlaylist;
    } catch (error) {
      throw error;
    }
  };

  const deletePlaylist = async (id) => {
    try {
        const deletedPlaylist = await db.one(
            "DELETE FROM reviews WHERE id = $1 RETURNING *",
            id
        );
        return deletedPlaylist;
    } catch (error) {
        return error;
    }
  }

  const updatePlaylist = async (playlist) => {
    try {
      const updatedSongPlaylist = await db.one(
        "UPDATE playlists SET playlists (name, description, song_id) VALUES($1, $2, $3) WHERE id=$4 RETURNING *",
      [
        playlist.name,
        playlist.description,
        playlist.song_id,
        playlist.id
      ]);
      return updatePlaylistPlaylist;
    } catch (error) {
      throw error;
    }
  };

  module.exports = {
    getAllPlaylists,
    getPlaylist,
    newPlaylist,
    deletePlaylist,
    updatePlaylist
  }