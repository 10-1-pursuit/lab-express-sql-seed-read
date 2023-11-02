const express = require('express')
const songs = express.Router()


songs.get("/", (req, res) =>{
    res.json({ status: "good"})
})


module.exports = songs