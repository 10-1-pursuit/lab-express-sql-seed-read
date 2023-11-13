const checkName = (req, res, next) => {
	if (req.body.name) {
		return next();
	} else {
		res.status(404).json({ message: 'Valid name is required' });
	}
};

const checkArtist = (req, res, next) => {
	if (req.body.artist) {
		return next();
	} else {
		res.status(404).json({ message: 'Valid Artist is required' });
	}
};

const checkBoolean = (req, res, next) => {
	if (req.body.is_favorite) {
		return next();
	} else {
		res.status(404).json({ message: 'Must be true or false only.' });
	}
};

module.exports = { checkName, checkArtist, checkBoolean };
