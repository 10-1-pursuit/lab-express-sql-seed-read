const checkName = (req, res, next) => {

    if(req.body.artist_name) {
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
  const checkGenre = (req, res, next) => {
    if(req.body.genre) {
        next()
    } else {
        res.status(400).json( {error: 'Genre is required'} )
    }
  }

  const checkBoolean = (req, res, next) =>  {
     const leadSinger = req.body.is_lead_singer
     if(typeof leadSinger === 'boolean') {
        next()
     } else {
        res.status(400).json( {error: "is_lead_singer must be a boolean"})
     }
  }
  

   module.exports = { checkName, checkGenre, checkBoolean }