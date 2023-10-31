const express = require("express");
const app = express();
const songController = require('./controllers/songController');


app.use(cors());
app.use(express.json());


