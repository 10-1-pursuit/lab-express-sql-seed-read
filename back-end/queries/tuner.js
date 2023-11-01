const db = require("../db/dbConfig");

const getAllTunes = async () => {
  try {
    const allTunes = await db.any("SELECT * FROM tuners");
    return allTunes;
  } catch (error) {
    return error;
  }
};

module.exports = { getAllTunes };
