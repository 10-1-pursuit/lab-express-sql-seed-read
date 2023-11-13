const checkName = (req, res, next) => {
	if (req.body.name) {
		return next();
	} else {
		res.status(400).json({ error: 'Song name is required' });
	}
};

const checkArtist = (req, res, next) => {
	if (req.body.artist) {
		return next();
	} else {
		res.status(400).json({ error: 'Song artist is required' });
	}
};

const checkBoolean = (req, res, next) => {
	const favorite = req.body.is_favorite;
	if (typeof favorite === 'boolean') {
		next();
	} else {
		res.status(400).json({ error: 'Must be true or false only.' });
	}
};

module.exports = { checkName, checkArtist, checkBoolean };
