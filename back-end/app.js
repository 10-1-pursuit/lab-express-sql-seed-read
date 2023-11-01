const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const songController = require("./controllers/songController");

//middleware for parsing JSON request bodies

app.use(express.json());
app.use(cors());
app.use('/songs', songController);



module.exports = app;