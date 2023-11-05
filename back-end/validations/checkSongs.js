const checkSongName = (req, res, next) => {
  if (req.body.name) {
    next();
  } else {
    res.status(404).json({ error: "Name is Required" });
  }
};

const checkArtistName = (req, res, next) => {
  const artist = req.body.artist;
  if (typeof artist === "string") {
    next();
  } else {
    res.status(400).json({ error: "Artist must be type string" });
  }
};

const checkAlbumName = (req, res, next) => {
  const album = req.body.album;
  if (typeof album === "string") {
    next();
  } else {
    res.status(400).json({ error: "Album Name must be type string" });
  }
};

const checkTimeInput = (req, res, next) => {
  const time = req.body.time;
  const timeRegex = /^([0-1][0-9]|2[0-3]):[0-5][0-9]$/;
  if (timeRegex.test(time)) {
    next();
  } else {
    res
      .status(400)
      .json({ error: "Invalid time format. Please use HH:MM format." });
  }
};

const checkBoolean = (req, res, next) => {
  const fav = req.body.is_favorite;
  if (typeof fav === "boolean") {
    next();
  } else {
    res.status(400).json({ error: "is_favorite must be type boolean" });
  }
};

module.exports = {
  checkSongName,
  checkArtistName,
  checkBoolean,
  checkAlbumName,
  checkTimeInput,
};
