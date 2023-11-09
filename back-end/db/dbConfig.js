const pgp = require("pg-promise")(); // tell pgp who we are talking to or connecting to
// pgp converts to a url
require("dotenv").config();
// access to our environmental variables
// db config holds all the connections in our database & then talk
 // to our database
const cn = {
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_DATABASE,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD
  };
// connects to colors_dev db
const db = pgp(cn);
// tells postgres which database to connect to

module.exports = db;