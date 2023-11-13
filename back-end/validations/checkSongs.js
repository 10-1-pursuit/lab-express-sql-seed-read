//validation/checkSong.js
const checkName = (req, res, next) => {
    if(req.body.name){
        // next() comes from the parameters
        // next() tells the route that this piece of middleware is satisfied and can move onto the next argument in the route.
        return next()
    } else {
        res.status(400).json({ error: 'Name is required'})
    }
}
//
const checkBoolean = (req, res, next) => {
    const {is_favorite} = req.body;
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
    };
const checkTime = (req, res, next) => {
    if(req.body.time){
        // next() comes from the parameters
        // next() tells the route that this piece of middleware is satisfied and can move onto the next argument in the route.
        return next()
    } else {
        res.status(400).json({ error: 'Time is required'})
    }
}
const checkArtist = (req, res, next) => {
    if(req.body.artist){
        // next() comes from the parameters
        // next() tells the route that this piece of middleware is satisfied and can move onto the next argument in the route.
        return next()
    } else {
        res.status(400).json({ error: 'Artist is required'})
    }}
    const checkAlbum = (req, res, next) => {
        if(req.body.album){
            // next() comes from the parameters
            // next() tells the route that this piece of middleware is satisfied and can move onto the next argument in the route.
            return next()
        } else {
            res.status(400).json({ error: 'Album is required'})
        }
    }


    module.exports = { checkName, checkBoolean, checkArtist, checkTime ,checkAlbum,};