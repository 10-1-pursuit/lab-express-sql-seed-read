const cors = require("cors")
const express = require("express")
const morgan = require("morgan")

const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan("tiny"))

app.get("/", (req, res)=>{
    res.send("Welcome to Tuner App")
})

const albumsController = require("./controllers/albumsController.js")
app.use("/albums", albumsController)

app.get("*", (req, res)=>{
    res.status(404).send("Page not found")
})

module.exports = app