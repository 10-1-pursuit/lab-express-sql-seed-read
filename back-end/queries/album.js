const db = require("../db/dbConfig.js");

const getAllAlbums = async () => {
  try {
    const allAlbums = await db.any("SELECT * FROM albums");
    return allAlbums;
  } catch (error) {
    return error;
  }
};

const getAlbum = async (id) => {
  try {
    const oneAlbum = await db.one("SELECT * FROM albums WHERE id=$1", id);
    return oneAlbum;
  } catch (error) {
    return error;
  }
};

const createAlbum = async (album) => {
  try {
    const newAlbum = await db.one(
      "INSERT INTO albums (album_name, released_year, is_grammy) VALUES ($1, $2, $3) RETURNING *",
      [album.album_name, album.released_year, album.is_grammy]
    );
    return newAlbum;
  } catch (error) {
    return error;
  }
};

const deleteAlbum = async (id) => {
  try {
    const deletedAlbum = await db.one(
      "DELETE FROM albums WHERE id=$1 RETURNING *",
      id
    );
    return deletedAlbum;
  } catch (error) {
    return error;
  }
};

const updateAlbum = async (id, album) => {
  try {
    const updatedAlbum = await db.one(
      "UPDATE albums SET album_name=$1, released_year=$2, is_grammy=$3 WHERE id=$4 RETURNING *",
      [album.album_name, album.released_year, album.is_grammy, id]
    );
    return updatedAlbum;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllAlbums,
  getAlbum,
  createAlbum,
  deleteAlbum,
  updateAlbum,
};
