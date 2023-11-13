const cors = require("cors");
const express = require("express");
const morgan = require("morgan");
const songController = require('./controllers/songController')
//Configuration
const app = express();

//middleware for parsing JSON request bodies

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));
app.use('/songs', songController);

//show route to get an individual song by ID

// ROUTES
app.get("/", (req, res) => {
    res.send("Welcome to My Song App");
  });
  
  
  
  
  // 404 PAGE
  // app.get("*", (req, res) => {
  //   res.status(404).send("Page not found");
  // });
  
  // EXPORT


module.exports = app;