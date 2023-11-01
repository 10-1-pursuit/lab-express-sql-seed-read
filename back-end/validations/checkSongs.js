const checkArtist = (req, res, next) => {
    if (req.body.artist) {
      return next();
    } else {
      res.status(400).json({ error: "Artist is required" });
    }
  };

  const checkBoolean = (req, res, next) => {
    const fav = req.body.is_favorite
    if(typeof fav === 'boolean'){
      next()
    } else {
      res.status(400).json({ error: "is_favorite must be type boolean"})
    }
  };

  const checkAlbum = (req, res, next) => {
    if (req.body.album) {
        return next();
    } else {
        res.status(400).json({ error: "Album is required" })
    }
  }

  const checkTime = (req, res, next) => {
    if (req.body.time) {
        return next();
    } else {
        res.status(400).json({ error: "Year is required" })
    }
  }

  module.exports = { checkArtist, checkBoolean, checkAlbum, checkTime };