const db = require("../db/dbConfig.js")

const getAllAlbums = async () =>{
    try {
        const allAlbums = await db.any("SELECT * FROM albums")
        return allAlbums
    } catch (error) {
        return error
    }
};

const getAlbum = async(id)=>{
    try {
        const oneAlbum = await db.one("SELECT * FROM albums WHERE id=$1", id)
        return oneAlbum
    } catch (error) {
        return error
    }
};

const createAlbum = async (album)=>{
    try {
        const newAlbum = await db.one(
            "INSERT INTO albums (name, artist, year_released, rating, is_favorite_album) VALUES($1, $2, $3, $4, $5) RETURNING *",
            [album.name, album.artist, album.year_released, album.rating, album.is_favorite_album]
        )
        return newAlbum
    } catch (error) {
        return error
    }
};

const deleteAlbum = async(id)=>{
    try {
        const deletedAlbum = await db.one(
            "DELETE FROM albums WHERE id = $1 RETURNING *", id
        )
        return deletedAlbum
    } catch (error) {
        return error
    }
};

const updateAlbum = async(id, album)=>{
    try {
        const updatedAlbum = await db.one(
            "UPDATE albums SET name=$1, artist=$2, year_released=$3, rating=$4, is_favorite_albume=$5 RETURNING *",
            [album.name, album.artist, album.year_released, album.rating, artist.is_favorite_album, id]
        )
        return updatedAlbum
    } catch (error) {
        return error
    }
};


module.exports = {
    getAllAlbums, 
    getAlbum, 
    createAlbum,
    deleteAlbum,
    updateAlbum
};