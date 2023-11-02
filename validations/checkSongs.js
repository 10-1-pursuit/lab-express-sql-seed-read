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
    const fav = req.body.is_favorite
    if(fav === 'boolean'){
        next()
    } else {
        res.status(400).json({ error: 'Boolean is required'})
    }
}

module.exports = { checkName,
                   checkArtist,
                   checkAlbum,
                   checkTime,
                   checkBoolean }