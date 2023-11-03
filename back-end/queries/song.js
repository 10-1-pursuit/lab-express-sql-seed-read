// queries/song.js
const db = require('../db/dbConfiq')

const getAllSongs = async () => {
    try {
        const allSongs = await db.any("SELECT * FROM songs");
        return allSongs
    } catch (error) {
        return error
    }
}


module.exports = { getAllSongs }