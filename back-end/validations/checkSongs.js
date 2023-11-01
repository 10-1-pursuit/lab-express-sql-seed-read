const checkName = (req, res, next) => {

    if(req.body.name) {
         // console.log('checkName')
     // next() comes from the parameters
     // next() tells the route that this piece
     // of middleware is satisfied and can move onto
     // the next argument in the route.
     next()
    } else {
        res.status(400).json( { error: 'Name is required'} )
    }
}
  const checkArtist = (req, res, next) => {
    if(req.body.artist) {
        next()
    } else {
        res.status(400).json( {error: 'Artist is required'} )
    }
  }

  const checkBoolean = (req, res, next) =>  {
     const fav = req.body.is_favorite
     if(typeof fav === 'boolean') {
        next()
     } else {
        res.status(400).json( {error: "is_favorite must be a boolean"})
     }
  }
  

   module.exports = { checkName, checkArtist, checkBoolean }