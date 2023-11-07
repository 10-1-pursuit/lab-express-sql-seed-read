DROP DATABASE IF EXISTS songs_dev;
CREATE DATABASE songs_dev;

-- connect to the Database
\c songs_dev;

CREATE TABLE songs (
 id SERIAL PRIMARY KEY,
 name TEXT NOT NULL,
 artist TEXT NOT NULL,
 album TEXT,
 time TEXT,
 is_favorite BOOLEAN
);