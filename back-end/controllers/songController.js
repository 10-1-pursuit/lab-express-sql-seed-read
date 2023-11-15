const express = require("express");
const songs = express.Router({mergeParams: true});
const { getAllSongs, getSong, createSong, deleteSong, updateSong } = require("../queries/songs.js");
const { checkName, checkArtist, checkBoolean } = require("../validations/checkSongs.js");
const { getArtist } = require('../queries/artists.js')

songs.get("/", async (req, res) => {
    const {order, is_favorite} = req.query;
    const {artist_id} = req.params;
    let allSongs = await getAllSongs(artist_id);
    let sortOrder = "asc";
    
    if (order === "desc") {
        sortOrder = "desc";
    }
    
    if (is_favorite === "true" || is_favorite === "false") {
        if (is_favorite === "true") {
            allSongs = allSongs.filter(song => song.is_favorite === true);
        } else if (is_favorite === "false") {
            allSongs = allSongs.filter(song => song.is_favorite === false);
        }
    }
    
    allSongs = allSongs.sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        
        if (sortOrder === "asc") {
            return nameA.localeCompare(nameB);
        } else {
            return nameB.localeCompare(nameA);
        }
    });
    
    if (artist_id) {
        const artist = await getArtist(artist_id);
        if (artist.id) {
            res.status(200).json({ ...artist, allSongs });
        } else {
            res.status(500).json({ status: "server error" });
        }
    } else {
        if (allSongs.length > 0) {
            res.status(200).json(allSongs);
        } else {
            res.status(500).json({status: "server error"})
        }
    }
});

songs.get("/:id", async (req, res) => {
    const { id } = req.params;
    const oneSong = await getSong(id);
    if (oneSong) {
        res.json({oneSong});
    } else {
        res.status(404).json({ error: "Not found" });
    }
});

songs.post("/", checkName, checkArtist, checkBoolean, async (req, res) => {
    const {artist_id} = req.params;
    const song = await createSong({artist_id, ...req.body});
    res.json(song);
});

songs.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deletedSong = await deleteSong(id);
    if (deletedSong.id) {
        res.status(200).json(deletedSong);
    } else {
        res.status(404).json({ error: "Song not found" });
    }
});

songs.put("/:id", checkName, checkArtist, checkBoolean, async (req, res) => {
    const { id } = req.params;
    const updatedSong = await updateSong( id, req.body);
    if (updatedSong.id) {
        res.status(200).json(updatedSong);
    } else {
        res.status(404).json({ error: "Song not found" });
    }
});

module.exports = songs;