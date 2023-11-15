const db = require("../db/dbConfig.js");

const getAllArtists = async () => {
  try {
    const allArtists = await db.any("SELECT * FROM artists");
    return allArtists;
  } catch (err) {
    return err;
  }
};

const getArtist = async (id) => {
  try {
    const oneArtist = await db.one("SELECT * FROM artists WHERE id=$1", id);
    return oneArtist;
  } catch (err) {
    return err;
  }
};

const createArtist = async (artist) => {
  try {
    const newArtist = await db.one(
      "INSERT INTO artists (name) VALUES($1) RETURNING *",
      [artist.name]
    );
    return newArtist;
  } catch (err) {
    return err;
  }
};

const deleteArtist = async (id) => {
  try {
    const deletedArtist = await db.one(
      "DELETE FROM artists WHERE id=$1 RETURNING *",
      id
    );
    return deletedArtist;
  } catch (err) {
    return err;
  }
};

const updateArtist = async (id, artist) => {
  try {
    const updatedArtist = await db.one(
      "UPDATE artists SET name=$1 where id=$2 RETURNING *",
      [artist.name, id]
    );
    return updatedArtist;
  } catch (err) {
    return err;
  }
};

module.exports = {
  getAllArtists,
  getArtist,
  createArtist,
  deleteArtist,
  updateArtist,
};
