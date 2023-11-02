const checkName  = (req,res,next) => {

    if(req.body.name){
        return next()
    }else{
        res.status(404).json({message: "Name is required"})
    }
};

const checkArtist  = (req,res,next) => {

    if(req.body.artist){
        return next()
    }else{
        res.status(404).json({message: "Artist is required"})
    }
};

const checkBoolean = (req, res, next) => {
    const fav = req.body.is_favorite;
    if (typeof fav === "boolean") {
      return next();
    } else {
      res.status(404).json({ message: "Must be True or False" });
    }
  };

  module.exports = {checkName, checkArtist, checkBoolean}