const pgp = require('pg-promise')()
require("dotenv").config();

//URL builder
const cn = {
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
  user: process.env.PG_USER,
};

//Connect to tuners_dev db

const db = pgp(cn);


module.exports = db;