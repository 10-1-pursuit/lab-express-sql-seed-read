const db = require("../db/dbConfig.js");


const getAllArtists = async () => {
    try {
        const allArtists = await db.any("SELECT * FROM artists");
        return allArtists;
     } catch(error) {
       return error;
    }
};


const getOneArtist = async (id) => {
    try {
       const oneArtist = await db.one("SELECT * FROM artists WHERE id=$1", id)
       return oneArtist;  
    } catch(error){
       return error;
    }
};

const newArtist = async (artist) => {
    try {
       const createArtist = await db.one("INSERT INTO artists (artist_name, genre, is_lead_singer) VALUES ($1, $2, $3) RETURNING *", 
       [artist.artist_name, artist.genre, artist.is_lead_singer]
       )
     return createArtist
    } catch (error) {
        return error;

    }
}  

const deleteArtist = async (id) => {
     try{

       const deletedArtist = await db.one("DELETE FROM artists WHERE id=$1 RETURNING * ", id)
        return deletedArtist
     } catch (error) {
        return error
     }
}

const updateArtist = async (id, artist) => {
    try {
      const updatedArtist = await db.one(
        "UPDATE artists SET artist_name=$1, genre=$2, is_lead_singer=$3 WHERE id=$4 RETURNING *",
        [artist.artist_name, artist.genre, artist.is_lead_singer, id]
      );
      return updatedArtist;
    } catch (error) {
      return error;
    }
  };



module.exports = { getAllArtists, getOneArtist, newArtist, deleteArtist, updateArtist};