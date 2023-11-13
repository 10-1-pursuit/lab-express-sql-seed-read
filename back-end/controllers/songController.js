const express = require('express');
const songs = express.Router();
const { getAllSongs, getSong, newSong } = require('../queries/songs');
const {
	checkName,
	checkArtist,
	checkBoolean,
} = require('../validations/checkSongs');

songs.get('/', async (req, res) => {
	const allSongs = await getAllSongs();
	if (allSongs[0]) {
		res.status(200).json(allSongs);
	} else {
		res.status(500).json({ error: 'Server Error' });
	}
});

songs.get('/:id', async (req, res) => {
	const id = req.params.id;
	const oneSong = await getSong(id);
	if (oneSong) {
		res.status(200).json(oneSong);
	} else res.status(404).json({ error: 'Not Found' });
});

songs.post('/', checkName, checkArtist, checkBoolean, async (req, res) => {
	const body = req.body;

	const addSong = await newSong(body);
	if (addSong) {
		res.status(200).json(addSong);
	} else res.status(500).json({ error: 'Server Error' });
});

module.exports = songs;
