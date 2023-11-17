const express = require("express");
const cors = require("cors");

const app = express();
const songsController = require("./controllers/songController.js");

app.use(cors());
app.use(express.json());

app.get("/", (request, response) => {
  response.send("Welcome to Songs App");
});

app.use("/songs", songsController);

app.get("*", (request, response) => {
  response.status(404).send("Page not found");
});

module.exports = app;
