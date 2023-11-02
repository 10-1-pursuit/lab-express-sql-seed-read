const checkName = (req, res, next) => {
    const name = req.body.name;

    if (name) {

        return next()

    } else {

        res.status(400).json({ error: "Name is required" })
    }

}

const checkAlbum = (req, res, next) => {
    const album = req.body.album;
    if (album) {

        return next()
    } else {

        res.status(404).json({ error: "Album is required" })
    }
}

const checkTime = (req, res, next) => {
    const time = req.body.time;

    if (time) {
        return next()

    } else {
        res.status(404).json({ error: "Time is required" })
    }
}

const checkBoolean = (req, res, next) => {
    const fav = req.body.is_favorite;
    if (typeof fav === "boolean") {
        next()
    } else {
        res.status(400).json({ error: "is_favorite must be a boolean" })
    }
}

module.exports = { checkName, checkBoolean }