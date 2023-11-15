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
      // Find songs associated with the playlist
      const songsToDelete = await db.query('SELECT * FROM songs WHERE playlist_id = $1', [id]);
      // Update the playlist_id to NULL for associated songs
      await Promise.all(songsToDelete.map(song => db.query('UPDATE songs SET playlist_id = NULL WHERE id = $1', [song.id])));
      // Delete the playlist
      await db.query('DELETE FROM playlists WHERE id = $1', [id]);
  
      console.log('Playlist and associated songs deleted successfully');
      return { id };
    } catch (error) {
      console.error('Error deleting playlist and associated songs', error);
      throw error;
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
