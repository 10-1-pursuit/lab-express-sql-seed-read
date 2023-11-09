const checkName = (req, res, next) => {
  if (req.body.name) {
    console.log('Validating name:', req.body.name);
    return next();
  } else {
    res.status(400).json({ error: "Name is required" });
  }
};

const checkArtist = (req, res, next) => {
    if (req.body.artist) {
      console.log('Validating art:', req.body.artist);
      return next();
    } else {
      res.status(400).json({ error: "Artist is required" });
    }
  };

  const checkAlbum = (req, res, next) => {
    if (req.body.album) {
      console.log('Validating album:', req.body.album);
        return next();
    } else {
        res.status(400).json({ error: "Album is required" });
    }
  };

  const checkTime = (req, res, next) => {
    if (req.body.time) {
      console.log('Validating time:', req.body.time);
        return next();
    } else {
        res.status(400).json({ error: "Time is required" })
    }
  }

  module.exports = { checkName, checkArtist, checkAlbum, checkTime };