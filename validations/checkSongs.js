const checkName = (req, res, next) => {
    if(req.body.name){
        return next()
    } else {
        res.status(400).json({ error: 'Name is required'})
    }
}

const checkArtist = (req, res, next) => {
    if(req.body.artist){
        return next()
    } else {
        res.status(400).json({ error: 'Artist is required'})
    }
}

const checkAlbum = (req, res, next) => {
    if(req.body.album){
        return next()
    } else {
        res.status(400).json({ error: 'Album is required'})
    }
}

const checkTime = (req, res, next) => {
    if(req.body.artist){
        return next()
    } else {
        res.status(400).json({ error: 'Time is required'})
    }
}


const checkBoolean = (req, res, next) => {
    const { is_favorite } = req.body;
    if (
      is_favorite == "true" ||
      is_favorite == "false" ||
      is_favorite == undefined ||
      typeof is_favorite == "boolean"
    ) {
      next();
    } else {
      res.status(400).json({ error: "is_favorite must be a boolean value" });
    }
}

module.exports = { checkName,
                   checkArtist,
                   checkAlbum,
                   checkTime,
                   checkBoolean }
                    