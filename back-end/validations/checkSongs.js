const checkName = (req, res, next) => {
	if (req.body.name) {
		return next();
	} else {
		res.status(400).json({ message: 'Valid name is required' });
	}
};

const checkArtist = (req, res, next) => {
	if (req.body.artist) {
		return next();
	} else {
		res.status(400).json({ message: 'Valid Artist is required' });
	}
};

const checkBoolean = (req, res, next) => {
    const favorite = req.body.is_favorite
	if (typeof favorite === 'boolean') {
		return next();
	} else {
		res.status(400).json({ message: 'Must be true or false only.' });
	}
};

module.exports = { checkName, checkArtist, checkBoolean };
