const db = require("../db/dbConfig.js");

const getAllArtists = async () =>{
try {
    const allArtists = await db.any("SELECT * FROM artists");
    return allArtists;
    
} catch (error) {
    return error;
}
};

const getArtist = async (id) =>{
try {
    const oneAritst =  await db.one("SELECT * FROM artists WHERE id=$1", id);
    return oneAritst;
} catch (error) {
    return error
}
};

const createArist = async (artist) => {
    try {
        const newArtist = await db.one(
            "INSERT INTO artists (name, category, hometown) VALUES ($1,$2,$3) RETURNING *",
            [artist.name, artist.category,artist.hometown]
        );
        return newArtist
    } catch (error) {
        return error
    }
};

const deleteArist = async (id) =>{
    try {
        const deletedArtist = await db.one(
            "DELETE FROM artists WHERE id = $1 RETURNING *", id
        );
        return deletedArtist

    } catch (error) {
        return error
    }
};

const updateArtist = async (id, artist) => {
    try {
        const updatedArtist = await db.one(
            "UPDATE artists SET name=$1, category=$2, hometown=$3 WHERE id=$4 RETURNING *",
            [artist.name, artist.category,artist.hometown, id]
        );
        return updatedArtist
    } catch (error) {
        return error
    }
};

module.exports ={
    getAllArtists,
    getArtist,
    createArist,
    deleteArist,
    updateArtist,
}