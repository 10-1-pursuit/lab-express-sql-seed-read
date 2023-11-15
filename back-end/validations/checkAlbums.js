const checkName = (req, res, next)=>{
    if(req.body.name){
        return next()
    } else {
        res.status(400).json({error: "Song name is required"})
    }
}

const checkArtist = (req, res, next)=>{
    if(req.body.artist){
        return next()
    } else {
        res.status(400).json({error: "Song artist is required"})
    }
}

const checkBoolean = (req, res, next)=>{
    const fav = req.body.is_favorite_album
    if(typeof fav === 'boolean'){
        next()
    } else {
        res.status(400).json({error: "is_favorite must be type boolean"})
    }
}



module.exports = {
    checkName,
    checkArtist,
    checkBoolean
}